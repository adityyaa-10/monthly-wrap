# Generated by Django 4.2.1 on 2024-03-12 08:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0010_remove_projects_tech_used_delete_categories_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='projects',
            name='slug',
            field=models.SlugField(default='Undeclared', max_length=255, unique=True),
        ),
    ]