from django.db import models

# Create your models here.

class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    genre = models.CharField(max_length=200)
    published_date = models.PositiveIntegerField()
    n_pages =models.PositiveIntegerField()
    image = models.ImageField(upload_to='book_images/')

    def __str__(self):
        return self.title
