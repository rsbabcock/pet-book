from petBookApi.models import *
from rest_framework import serializers

class PetCommandSerializer(serializers.HyperlinkedModelSerializer):
    
  class Meta:
    model = PetCommand
    fields = '__all__'
