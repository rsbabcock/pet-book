from petBookApi.models import *
from rest_framework import serializers

class PetSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Pet
    fields = '__all__'
