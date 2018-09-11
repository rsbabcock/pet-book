from petBookApi.models import *
from rest_framework import serializers

class CommandSerializer(serializers.HyperlinkedModelSerializer):
    '''
    Serializer to represent JSON data for pet commands 
    '''
    user = serializers.ReadOnlyField(source='user.url')

    class Meta:
        model = Command
        fields = ('url', 'command_name', 'instructions', 'user')
