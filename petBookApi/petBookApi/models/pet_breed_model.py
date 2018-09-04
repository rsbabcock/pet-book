from django.db import models

class Breed(models.Model):
    '''
    Model to represent pet breeds
    '''
    pet_type = models.ForeignKey('PetType', on_delete=models.CASCADE)
    breed_name = models.CharField(max_length=200)
    
    def __str__(self):
    return self.breed_name