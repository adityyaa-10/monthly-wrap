from django.contrib import admin
from .models import BlogPost, Comment, Likes, Image

admin.site.register(BlogPost)
admin.site.register(Comment)
admin.site.register(Likes)
admin.site.register(Image)

