from django.db import models

class Note(models.Model):
    '''
    Model to represent pet Notes
    '''
    date_posted = models.DateField(auto_now_add=True)
    content = models.CharField(max_length=300)
    archive = models.BooleanField(default=False)

    def __str__(self):
        return "{} {}".format(self.date_posted, self.content)
