from django.db import models
from django.db import models


# Create your models here.
class Recipe(models.Model):

    def __str__(self):
        return self.recipe_name
