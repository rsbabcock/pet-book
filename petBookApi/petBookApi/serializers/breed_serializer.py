from petBookApi.models import *
from rest_framework import serializers

class BreedSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Breed
    fields = '__all__'
