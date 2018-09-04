from petBookApi.models import *
from rest_framework import serializers

class AllergySerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Allergy
    fields = '__all__'
