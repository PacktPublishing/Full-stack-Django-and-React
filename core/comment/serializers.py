from rest_framework import serializers
from rest_framework.exceptions import ValidationError

from core.abstract.serializers import AbstractSerializer
from core.user.models import User
from core.user.serializers import UserSerializer
from core.comment.models import Comment
from core.post.models import Post


class CommentSerializer(AbstractSerializer):
    author = serializers.SlugRelatedField(
        queryset=User.objects.all(), slug_field="public_id"
    )
    post = serializers.SlugRelatedField(
        queryset=Post.objects.all(), slug_field="public_id"
    )
    liked = serializers.SerializerMethodField()
    likes_count = serializers.SerializerMethodField()

    def get_liked(self, instance):

        request = self.context.get("request", None)

        if request is None or request.user.is_anonymous:
            return False

        return request.user.has_liked_comment(instance)

    def get_likes_count(self, instance):
        return instance.commented_by.count()

    def validate_author(self, value):
        if self.context["request"].user != value:
            raise ValidationError("You can't create a post for another user.")
        return value

    def validate_post(self, value):
        if self.instance:
            return self.instance.post
        return value

    def update(self, instance, validated_data):
        if not instance.edited:
            validated_data["edited"] = True

        instance = super().update(instance, validated_data)

        return instance

    def to_representation(self, instance):
        rep = super().to_representation(instance)
        author = User.objects.get_object_by_public_id(rep["author"])
        rep["author"] = UserSerializer(author, context=self.context).data

        return rep

    class Meta:
        model = Comment
        # List of all the fields that can be included in a request or a response
        fields = [
            "id",
            "post",
            "author",
            "body",
            "edited",
            "liked",
            "likes_count",
            "created",
            "updated",
        ]
        read_only_fields = ["edited"]
