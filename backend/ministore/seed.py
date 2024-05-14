from django_seed import Seed
from .models import Product
import random

entries = [
    {'nom': "Iphone 10", 'categorie': 'smartphone', 'stock': 10, 'prix': 980.00, 'star': 5, 'image': "src/assets/images/product-item1.jpg"},
    {'nom': "Iphone 11", 'categorie': 'smartphone', 'stock': 10, 'prix': 1100.00, 'star': 5, 'image': "src/assets/images/product-item2.jpg"},
    {'nom': "Iphone 8", 'categorie': 'smartphone', 'stock': 10, 'prix': 780.00, 'star': 5, 'image': "src/assets/images/product-item3.jpg"},
    {'nom': "Iphone 13", 'categorie': 'smartphone', 'stock': 10, 'prix': 1500.00, 'star': 5, 'image': "src/assets/images/product-item4.jpg"},
    {'nom': "Iphone 12", 'categorie': 'smartphone', 'stock': 10, 'prix': 1300.00, 'star': 5, 'image': "src/assets/images/product-item5.jpg"},
    {'nom': "Pink watch", 'categorie': 'smartwatch', 'stock': 10, 'prix': 870.00, 'star': 5, 'image': "src/assets/images/product-item6.jpg"},
    {'nom': "Heavy watch", 'categorie': 'smartwatch', 'stock': 10, 'prix': 980.00, 'star': 5, 'image': "src/assets/images/product-item7.jpg"},
    {'nom': "Spotted watch", 'categorie': 'smartwatch', 'stock': 10, 'prix': 750.00, 'star': 5, 'image': "src/assets/images/product-item8.jpg"},
    {'nom': "Black watch", 'categorie': 'smartwatch', 'stock': 10, 'prix': 650.00, 'star': 5, 'image': "src/assets/images/product-item9.jpg"},
    {'nom': "Black watch", 'categorie': 'smartwatch', 'stock': 10, 'prix': 750.00, 'star': 5, 'image': "src/assets/images/product-item10.jpg"},
]



def run():
    seeder = Seed.seeder()
    for i in entries:
        seeder.add_entity(Product, 1, {
            'nom': i['nom'],
            'categorie': i['categorie'],
            'stock': i['stock'],
            'prix': i['prix'],
            'star': i['star'],
            'image': i['image'],
        })
    pks = seeder.execute()
    print(pks)