from django.db import models
from django.db import models


# Create your models here.
class Recipe(models.Model):
    title = models.CharField(max_length=50)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.recipe_name
