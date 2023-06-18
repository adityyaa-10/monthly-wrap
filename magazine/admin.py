from django.contrib import admin
from .models import BlogPost, Comment, Likes, Image, Contact

admin.site.register(BlogPost)
admin.site.register(Comment)
admin.site.register(Likes)
admin.site.register(Image)
admin.site.register(Contact)


