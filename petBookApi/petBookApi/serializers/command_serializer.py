from petBookApi.models import *
from rest_framework import serializers

class CommandSerializer(serializers.HyperlinkedModelSerializer):
    '''
    Serializer to represent JSON data for pet commands 
    '''

    class Meta:
        model = Command
        fields = '__all__'
