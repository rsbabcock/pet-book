from petBookApi.models import *

from .allergy_serializer import *
from .command_serializer import *
from rest_framework import serializers

class PetSerializer(serializers.HyperlinkedModelSerializer):
  """
  Serializer to represent Pet JSON data
  """


  #In order to embed products information, you need to define the field as the serializer.
  #This will display all of the fields from the product model in the order model
  allergies = AllergySerializer(many=True, read_only=True)
  commands = CommandSerializer(many=True, read_only=True)

  class Meta:
    model = Pet
    fields = ('__all__, allergies, commands')
