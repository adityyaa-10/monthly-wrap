from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.urls import reverse
from django.utils.text import slugify
from ckeditor.fields import RichTextField


class BlogPost(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100, unique=True)
    content = RichTextField()
    date_posted = models.DateTimeField(default=timezone.now)
    user = models.ForeignKey(User,on_delete=models.CASCADE) 
    likes_count = models.IntegerField(default = 0)
    category = models.CharField(max_length=255, default='All')
    cover_image = models.ImageField(upload_to='blog_images/',default='blog_images/default.jpg')
    

    def __str__(self):
        return self.title
    
    def get_absolute_url(self):
        return reverse('post-detail', kwargs = {'slug': self.slug})
        
    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super().save(*args, **kwargs)


class Image(models.Model):
    blog = models.ForeignKey(BlogPost, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='blog_images/',default='blog_images/default.jpg')



class Comment(models.Model):
    post = models.ForeignKey(BlogPost, on_delete=models.CASCADE, related_name='comments')
    content = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date_posted = models.DateTimeField(default=timezone.now)


    def __str__(self):
        return self.content
    

class Likes(models.Model):
    user = models.ForeignKey(User, related_name = 'likes', on_delete = models.CASCADE)
    post = models.ForeignKey(BlogPost, related_name = 'likes', on_delete = models.CASCADE)

    def __str__(self):
        return self.post
    

class Contact(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE) 
    subject = models.CharField(max_length=100)
    message = models.TextField()
    date_posted = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.subject