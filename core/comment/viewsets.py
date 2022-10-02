from django.http.response import Http404

from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import action

from core.abstract.viewsets import AbstractViewSet
from core.comment.models import Comment
from core.comment.serializers import CommentSerializer
from core.auth.permissions import UserPermission


class CommentViewSet(AbstractViewSet):
    http_method_names = ("post", "get", "put", "delete")
    permission_classes = (UserPermission,)
    serializer_class = CommentSerializer

    def get_queryset(self):
        if self.request.user.is_superuser:
            return Comment.objects.all()

        post_pk = self.kwargs["post_pk"]
        if post_pk is None:
            return Http404
        queryset = Comment.objects.filter(post__public_id=post_pk)

        return queryset

    def get_object(self):
        obj = Comment.objects.get_object_by_public_id(self.kwargs["pk"])

        self.check_object_permissions(self.request, obj)

        return obj

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    @action(methods=["post"], detail=True)
    def like(self, request, *args, **kwargs):
        comment = self.get_object()
        user = self.request.user

        user.like_comment(comment)

        serializer = self.serializer_class(comment)

        return Response(serializer.data, status=status.HTTP_200_OK)

    @action(methods=["post"], detail=True)
    def remove_like(self, request, *args, **kwargs):
        comment = self.get_object()
        user = self.request.user

        user.remove_like_comment(comment)

        serializer = self.serializer_class(comment)

        return Response(serializer.data, status=status.HTTP_200_OK)
