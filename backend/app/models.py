from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    address = models.CharField(max_length=120)
    phone = models.CharField(max_length=120)

    class Meta:
        ordering = ["username"]


class Store(models.Model):
    name = models.CharField(max_length=120)
    address = models.CharField(max_length=120)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name


class Product(models.Model):
    class CategoryChoices(models.TextChoices):
        ELECTRONICS = "Electronics"
        FASHION = "Fashion"
        FURNITURE = "Furniture & Decor"
        HEALTH_BEAUTY = "Health,Personal Care & Beauty"
        HOUSEHOLD = "Household Item"
        BOOKS_GAMES = "Books,Movies,Music & Games"
        TOYS = "Toys & Hobbies"

    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    price = models.FloatField()
    stock = models.IntegerField()
    image = models.ImageField(upload_to="products", default="no_image.png")
    category = models.TextField(choices=CategoryChoices.choices)
    store = models.ForeignKey(Store, on_delete=models.CASCADE, related_name="products")

    def __str__(self):
        return self.name


class Order(models.Model):
    class StatusChoices(models.IntegerChoices):
        CANCELLED = 0
        PENDING = 1
        PROCESSING = 2
        SHIPPED = 3
        DELIVERED = 4

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    total_price = models.FloatField()
    status = models.IntegerField(StatusChoices, default=StatusChoices.PENDING)
    date_ordered = models.DateTimeField(auto_now_add=True)
    shipping_address = models.CharField(max_length=120)
    billing_address = models.CharField(max_length=120)


class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()


class Review(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.IntegerField()
    review = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ("product", "user")
        ordering = ("-created_at",)


class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()
