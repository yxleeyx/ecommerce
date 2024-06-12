from django.contrib import admin

from app.models import User, Store, Product, Order, OrderItem, Review, Cart

admin.site.register(User)
admin.site.register(Product)
admin.site.register(Store)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(Review)
admin.site.register(Cart)
