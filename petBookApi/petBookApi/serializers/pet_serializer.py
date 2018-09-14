from drf_extra_fields.fields import Base64ImageField
from petBookApi.models import *

from .allergy_serializer import *
from .command_serializer import *
from .note_serializer import *
from .breed_serializer import *
from rest_framework import serializers

class PetSerializer(serializers.HyperlinkedModelSerializer):
  """
  Serializer to represent Pet JSON data
  """


  #In order to embed products information, you need to define the field as the serializer.
  #This will display all of the fields from the product model in the order model
  allergy = AllergySerializer(many=True, read_only=True)
  command = CommandSerializer(many=True, read_only=True)
  note = NoteSerializer(many=True, read_only=True)
  # breed = BreedSerializer(read_only=True)
  user = serializers.ReadOnlyField(source='user.url')

  class Meta:
    model = Pet
    fields = ('url', 'name',
    'gender', 'nick_name', 'birthday', 'houdini',
    'food_quirks', 'crate_trained', 'crate_quirks',
    'walking_quirks', 'potty_needs', 'aggression_notes', 
    'eating_times', 'bed_time', 'fav_toy',
    'deceased', 'user', 'pet_type', 'breed', 
    'allergy', 'command', 'note')
