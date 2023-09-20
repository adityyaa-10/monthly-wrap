from django.contrib import admin
from .models import BlogPost, Comment, Likes, Image, Contact

from django.contrib import admin
from .models import BlogPost

class BlogPostAdmin(admin.ModelAdmin):
    list_display = ('title', 'is_published')
    list_filter = ('is_published',)
    search_fields = ('title', 'content')

    # Define a custom admin action to approve selected blog posts
    def approve_blogs(self, request, queryset):
        queryset.update(is_published=True)
    approve_blogs.short_description = "Approve selected blogs"

    actions = [approve_blogs]


admin.site.register(BlogPost, BlogPostAdmin)
admin.site.register(Comment)
admin.site.register(Likes)
admin.site.register(Image)
admin.site.register(Contact)


