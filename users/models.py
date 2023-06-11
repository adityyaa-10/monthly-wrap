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

    def __str__(self):
        return self.user.username
    
    def save(self, *args, **kwargs):
        if not self.email:
            self.email = self.user.email
        if not self.name:
            self.name = f"{self.user.first_name} {self.user.last_name}"
        super().save(*args, **kwargs)


        # img = Image.open(self.profile_picture.path)

        # if img.height > 400 or img.width > 400:
        #     output_img = (400,400)
        #     img.thumbnail(output_img)           
        #     img.save(self.profile_picture.path)