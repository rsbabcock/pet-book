from petBookApi.models import *
from rest_framework import serializers

class PetImageSerializer(serializers.HyperlinkedModelSerializer):
    
  class Meta:
    model = PetImage
    fields = ('url', 'pet', 'image')
