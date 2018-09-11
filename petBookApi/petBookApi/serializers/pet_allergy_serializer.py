from petBookApi.models import *
from rest_framework import serializers

class PetAllergySerializer(serializers.HyperlinkedModelSerializer):
    
  class Meta:
    model = PetAllergy
    fields = '__all__'
