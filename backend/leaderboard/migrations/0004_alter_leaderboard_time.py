# Generated by Django 5.0.2 on 2025-03-20 18:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('leaderboard', '0003_alter_leaderboard_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='leaderboard',
            name='time',
            field=models.FloatField(),
        ),
    ]
