from django.db import models

class PetCommand(models.Model):
    """Pet Commands
    
    This class represents the Pet Allergies join table resource in the database.

    Each Model in the join table needs to have a reference as a foreign key
    This model is needed to have a join table, but you do not need to reference it anywhere else in this project
    """

    pet = models.ForeignKey('Pet', on_delete=models.CASCADE)
    command = models.ForeignKey('Command', on_delete=models.CASCADE)
