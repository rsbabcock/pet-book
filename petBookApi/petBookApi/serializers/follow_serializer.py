from petBookApi.models import *
from rest_framework import serializers

class FollowSerializer(serializers.HyperlinkedModelSerializer):
    
  class Meta:
    model = Follow
    fields = ('url', 'pets', 'follower')
