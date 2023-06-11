from django.db import models
from django.contrib.auth.models import User
from PIL import Image

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    about = models.TextField()
    phone_no = models.CharField(max_length=200)
    kiet_email = models.EmailField()
    github_link = models.URLField()
    twitter_link = models.URLField()
    linkedin_link = models.URLField()
    techstack = models.TextField()
    profile_picture = models.ImageField()
    other_interests = models.TextField()

    def __str__(self):
        return self.user.username
    
    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

        img = Image.open(self.profile_picture.path)

        if img.height > 400 or img.width > 400:
            output_img = (400,400)
            img.thumbnail(output_img)           
            img.save(self.profile_picture.path)