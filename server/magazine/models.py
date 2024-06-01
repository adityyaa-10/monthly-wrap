from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.urls import reverse
from django.utils.text import slugify
from ckeditor.fields import RichTextField
from datetime import date

class Category(models.Model):
    name = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(max_length=255, unique=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

def get_default_category():
    category, created = Category.objects.get_or_create(name='All')
    return category.id

class BlogPost(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100, unique=True)
    content = RichTextField()
    date_posted = models.DateField(default=date.today)
    user = models.ForeignKey(User,on_delete=models.CASCADE) 
    likes_count = models.IntegerField(default = 0)
    category = models.ForeignKey(Category, on_delete=models.SET_DEFAULT, default=get_default_category)
    cover_image = models.ImageField(upload_to='blog_images/')
    is_published = models.BooleanField(default=False)
    

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super().save(*args, **kwargs)


class Image(models.Model):
    blog = models.ForeignKey(BlogPost, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='blog_images/')



class Comment(models.Model):
    post = models.ForeignKey(BlogPost, on_delete=models.CASCADE, related_name='comments')
    content = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date_posted = models.DateTimeField(default=timezone.now)


    def __str__(self):
        return self.content[:20 ]
    

class Likes(models.Model):
    user = models.ForeignKey(User, related_name = 'likes', on_delete = models.CASCADE)
    post = models.ForeignKey(BlogPost, related_name = 'likes', on_delete = models.CASCADE)

    class Meta:
        unique_together = ('user', 'post')


    def __str__(self):
        return f'{self.user.username} likes {self.post.title}'
    
    

class Contact(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE) 
    subject = models.CharField(max_length=100)
    message = models.TextField()
    date_posted = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.subject