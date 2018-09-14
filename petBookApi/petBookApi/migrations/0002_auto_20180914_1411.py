# Generated by Django 2.1.1 on 2018-09-14 14:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('petBookApi', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='PetImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.FileField(upload_to='')),
            ],
        ),
        migrations.RemoveField(
            model_name='pet',
            name='image',
        ),
        migrations.AddField(
            model_name='petimage',
            name='pet',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='petBookApi.Pet'),
        ),
    ]
