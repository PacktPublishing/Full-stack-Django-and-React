from rest_framework import serializers

from core.user.serializers import UserSerializer
from core.user.models import User


class RegisterSerializer(UserSerializer):
    """
    Registration serializer for requests and user creation
    """

    # Making sure the password is at least 8 characters long, and no longer than 128 and can't be read
    # by the user
    password = serializers.CharField(
        max_length=128, min_length=8, write_only=True, required=True
    )

    class Meta:
        model = User
        # List of all the fields that can be included in a request or a response
        fields = [
            "id",
            "name",
            "bio",
            "avatar",
            "email",
            "username",
            "first_name",
            "last_name",
            "password",
        ]

    def create(self, validated_data):
        # Use the `create_user` method we wrote earlier for the UserManager to create a new user.
        return User.objects.create_user(**validated_data)
