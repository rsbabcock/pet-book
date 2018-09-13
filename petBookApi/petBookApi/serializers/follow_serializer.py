from petBookApi.models import *
from rest_framework import serializers

class FollowSerializer(serializers.HyperlinkedModelSerializer):
  # follower = serializers.ReadOnlyField(source='user.url')
  class Meta:
    model = Follow
    fields = ('url', 'pets', 'follower')
