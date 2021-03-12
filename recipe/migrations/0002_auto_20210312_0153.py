# Generated by Django 3.1.7 on 2021-03-12 01:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('recipe', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='recipe',
            old_name='full_name',
            new_name='name',
        ),
        migrations.RenameField(
            model_name='recipe',
            old_name='recipe_name',
            new_name='title',
        ),
        migrations.RemoveField(
            model_name='recipe',
            name='cook_temp',
        ),
        migrations.RemoveField(
            model_name='recipe',
            name='cook_time',
        ),
        migrations.RemoveField(
            model_name='recipe',
            name='cook_unit',
        ),
        migrations.RemoveField(
            model_name='recipe',
            name='ingredients',
        ),
        migrations.RemoveField(
            model_name='recipe',
            name='notes',
        ),
        migrations.RemoveField(
            model_name='recipe',
            name='prep_time',
        ),
        migrations.RemoveField(
            model_name='recipe',
            name='recipe_type',
        ),
        migrations.RemoveField(
            model_name='recipe',
            name='visibility',
        ),
        migrations.RemoveField(
            model_name='recipe',
            name='yields',
        ),
    ]
