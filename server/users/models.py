from django.db import models
from django.contrib.auth.models import User
from PIL import Image

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255, default='')
    about = models.TextField(blank=True)
    phone_no = models.CharField(max_length=200, blank=True)
    email = models.EmailField(default = '')
    github_link = models.URLField(blank=True)
    twitter_link = models.URLField(blank=True)
    linkedin_link = models.URLField(blank=True)
    techstack = models.TextField(blank=True)
    other_interests = models.TextField(blank=True)
    profile_picture = models.ImageField(upload_to='profile_pictures/',default='blog_images/default.jpg')

    def __str__(self):
        return self.user.username
    
    def save(self, *args, **kwargs):
        if not self.email:
            self.email = self.user.email
        if not self.name:
            self.name = f"{self.user.first_name} {self.user.last_name}"
        super().save(*args, **kwargs)


        img = Image.open(self.profile_picture.path)

        if img.height > 300 or img.width > 300:
            output_img = (300,300)
            img.thumbnail(output_img)           
            img.save(self.profile_picture.path)


class Categories(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Projects(models.Model):
    user = models.ForeignKey(User, on_delete = models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='projects/', blank=True)  
    tech_used = models.ManyToManyField(Categories, related_name='projects')
    project_link = models.URLField(blank=True)

    def __str__(self):
        return self.title


