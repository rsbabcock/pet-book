from petBookApi.models import *
from rest_framework import serializers

class NoteSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Note
    fields = '__all__'
