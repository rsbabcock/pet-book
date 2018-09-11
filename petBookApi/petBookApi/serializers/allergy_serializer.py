from petBookApi.models import *
from rest_framework import serializers

class AllergySerializer(serializers.HyperlinkedModelSerializer):
    """
    Serializer to represent json for allergy data
    """
    user = serializers.ReadOnlyField(source='user.url')

    class Meta:
        model = Allergy
        fields = ('url', 'allergy_name', 'side_effects', 'user')
