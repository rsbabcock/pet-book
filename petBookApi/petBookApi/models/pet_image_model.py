from django.db import models
from django.contrib.auth.models import User
from petBookApi.models import *

class PetImage(models.Model):
    '''
    Model to represents pets and their information through join tables
    '''
    
    pet = models.ForeignKey('Pet', on_delete=models.CASCADE)
    image = models.FileField(blank=False, null=False)

    def __str__(self):
        return "{} {}".format(self.image)
