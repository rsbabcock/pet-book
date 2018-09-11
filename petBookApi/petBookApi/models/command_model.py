from django.db import models
from django.contrib.auth.models import User


class Command(models.Model):
    '''
    Model to represent pet Commands
    '''
    user = models.ForeignKey(User , on_delete=models.CASCADE)
    command_name = models.CharField(max_length=200)
    instructions = models.CharField(max_length=200)

    def __str__(self):
        return "{} {}".format(self.command_name, self.instructions)
