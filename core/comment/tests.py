import pytest

from core.fixtures.user import user
from core.fixtures.post import post


@pytest.mark.django_db
def create_comment(user, post):
    return post.comment_set.create(author=user, body="Test Comment Body")