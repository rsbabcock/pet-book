from django.contrib.auth.models import User
from petBookApi.models import *
from rest_framework import serializers

class UserSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = User
    fields = ('id', 'url', 'username', 'email')

class OwnerSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Owner
    fields = '__all__'
