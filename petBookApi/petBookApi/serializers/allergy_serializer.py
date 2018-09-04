from petBookApi.models import *
from rest_framework import serializers

class AllergySerializer(serializers.HyperlinkedModelSerializer):
    """
    Serializer to represent json for allergy data
    """

    class Meta:
        model = Allergy
        fields = '__all__'
