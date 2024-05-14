from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.


class Product(models.Model):
    nom = models.CharField(max_length=50)
    categorie = models.CharField(max_length=50)
    stock = models.IntegerField()
    prix = models.FloatField()
    star = models.IntegerField(validators=[MaxValueValidator(5),MinValueValidator(1)])
    image = models.ImageField(upload_to='images/', blank=True, null=True)