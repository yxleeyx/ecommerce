import graphene
from django.contrib.auth import get_user_model
from graphene_django import DjangoObjectType

from app.models import Store, Product


class UserType(DjangoObjectType):
    class Meta:
        model = get_user_model()
        fields = "__all__"


class StoreType(DjangoObjectType):
    class Meta:
        model = Store
        fields = "__all__"


class ProductType(DjangoObjectType):
    class Meta:
        model = Product
        fields = "__all__"


class Query(graphene.ObjectType):
    stores = graphene.List(StoreType)
    products = graphene.List(ProductType)
    all_users = graphene.List(UserType)

    def resolve_stores(self, info):
        return Store.objects.all()

    def resolve_products(self, info):
        return Product.objects.all()

    def resolve_all_users(self, info):
        return get_user_model().objects.all()
