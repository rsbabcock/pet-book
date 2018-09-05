from django.contrib.auth.models import User
from .pet_serializer import *
from petBookApi.models import *
from rest_framework import serializers

class UserSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = User
    fields = ('id', 'url', 'username', 'email')

class OwnerSerializer(serializers.HyperlinkedModelSerializer):

  follows = PetSerializer(many=True, read_only=True)
  class Meta:
      model = Owner
      fields = '__all__'
