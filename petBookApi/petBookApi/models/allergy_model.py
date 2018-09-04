from django.db import models

class Allergy(models.Model):
    '''
    Model to represent pet Allergies
    '''
    owner = models.ForeignKey('Owner', on_delete=models.CASCADE)
    allergy_name = models.CharField(max_length=200)
    side_effects = models.CharField(max_length=200)

    def __str__(self):
        return "{} {}".format(self.allergy_name, self.side_effects)
