from django.db import models

class PetType(models.Model):
    '''
    Model to represent pet types
    '''
    pet_type_name = models.CharField(max_length=200)

    def __str__(self):
        return self.pet_type_name