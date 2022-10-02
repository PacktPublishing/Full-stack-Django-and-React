from rest_framework import viewsets


class AbstractViewSet(viewsets.ModelViewSet):
    ordering_fields = ["updated", "created"]
    ordering = ["-updated"]
