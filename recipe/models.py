from django.db import models
from django.db import models


# Create your models here.
class Recipe(models.Model):
    recipe_name = models.CharField(max_length=50)
    full_name = models.CharField(max_length=100)
    visibility = models.BooleanField()
    recipe_type = models.CharField()
    prep_time = models.IntegerField()
    cook_time = models.IntegerField()
    cook_temp = models.IntegerField()
    cook_unit = models.CharField(max_length=1)
    yields = models.IntegerField()
    ingredients = models.JSONField()
    notes = models.CharField()
