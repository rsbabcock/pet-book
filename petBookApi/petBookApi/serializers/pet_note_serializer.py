from petBookApi.models import *
from rest_framework import serializers

class PetNoteSerializer(serializers.HyperlinkedModelSerializer):
    
  class Meta:
    model = PetNote
    fields = ('url', 'pet', 'note')
