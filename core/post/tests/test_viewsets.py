import json
import pytest
from rest_framework import status

from core.fixtures.user import user

class TestPostViewSet:
    
    endpoint = '/api/post/'
    
    def test_list(self, client, user):
        client.force_authenticate(user=user)
        response = client.get(self.endpoint)
        assert response.status_code == status.HTTP_200_OK
