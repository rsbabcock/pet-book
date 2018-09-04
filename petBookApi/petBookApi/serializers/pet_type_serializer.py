from petBookApi.models import *
from rest_framework import serializers

class PetTypeSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = PetType
    fields = '__all__'
