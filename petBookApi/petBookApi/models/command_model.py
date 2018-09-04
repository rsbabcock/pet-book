from django.db import models

class Command(models.Model):
    '''
    Model to represent pet Commands
    '''
    owner = models.ForeignKey('Owner', on_delete=models.CASCADE)
    command_name = models.CharField(max_length=200)
    instructions = models.CharField(max_length=200)

    def __str__(self):
        return "{} {}".format(self.command_name, self.instructions)
