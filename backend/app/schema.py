import graphene
from django.contrib.auth import get_user_model
from django.core.exceptions import ObjectDoesNotExist
from graphene_django import DjangoObjectType
from graphene_django.rest_framework.mutation import SerializerMutation
from graphql_auth.bases import SuccessErrorsOutput
from graphql_auth.decorators import login_required

from .models import Store, Product, Order, OrderItem, Review, Cart
from .serializers import ProductSerializer, OrderSerializer, ReviewSerializer, CartSerializer


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


class OrderType(DjangoObjectType):
    class Meta:
        model = Order
        fields = "__all__"


class OrderItemType(DjangoObjectType):
    class Meta:
        model = OrderItem
        fields = "__all__"


class ReviewType(DjangoObjectType):
    class Meta:
        model = Review
        fields = "__all__"


class CartType(DjangoObjectType):
    class Meta:
        model = Cart
        fields = "__all__"


class Query(graphene.ObjectType):
    store = graphene.Field(StoreType, name=graphene.String())
    stores = graphene.List(StoreType)
    product = graphene.Field(ProductType, name=graphene.String())
    products = graphene.List(ProductType)
    orders = graphene.List(OrderType)
    order = graphene.Field(OrderType, id=graphene.Int())
    order_items = graphene.List(OrderItemType, order_id=graphene.Int())
    review = graphene.List(ReviewType, product_id=graphene.Int())
    cart = graphene.List(CartType)

    def resolve_store(self, info, name):
        return Store.objects.filter(name__iexact=name)

    def resolve_stores(self, info):
        return Store.objects.all()

    def resolve_product(self, info, name):
        return Product.objects.filter(name__contains=name)

    def resolve_products(self, info):
        return Product.objects.all()

    @login_required
    def resolve_orders(self, info):
        user = info.context.user
        return Order.objects.filter(user=user)

    @login_required
    def resolve_order(self, info, id):
        user = info.context.user
        return Order.objects.get(user=user, pk=id)

    def resolve_order_items(self, info, order_id):
        order = Order.objects.get(pk=order_id)
        return OrderItem.objects.filter(order=order)

    def resolve_review(self, info, product_id):
        product = Product.objects.get(pk=product_id)
        return Review.objects.filter(product=product)

    def resolve_carts(self, info):
        user = info.context.user
        return Cart.objects.filter(user=user)


class CreateProduct(SerializerMutation):
    class Meta:
        serializer_class = ProductSerializer


class UpdateProduct(graphene.Mutation, SuccessErrorsOutput):
    class Arguments:
        pk = graphene.Int()
        name = graphene.String()
        description = graphene.String()
        price = graphene.Float()
        stock = graphene.Int()
        image = graphene.String()
        category = graphene.String()
        store = graphene.String()

    product = graphene.Field(ProductType)

    def mutate(self, info, pk, name, description, price, stock, store, image, category):
        try:
            store = Store.objects.get(name=store)
            product = Product.objects.get(pk=pk)
            product.name = name
            product.description = description
            product.price = price
            product.stock = stock
            product.store = store
            product.image = image
            product.category = category
            product.save()

            return UpdateProduct(product=product)
        except Exception as e:
            return UpdateProduct(sucess=False, errors=e)


class DeleteProduct(graphene.Mutation, SuccessErrorsOutput):
    class Arguments:
        pk = graphene.Int()

    def mutate(self, info, pk):
        try:
            Product.objects.get(pk=pk).delete()

            return DeleteProduct()
        except ObjectDoesNotExist:
            return DeleteProduct(success=False, errors="errors in deleting, product does not exist")


class CreateOrder(SerializerMutation):
    class Meta:
        serializer_class = OrderSerializer


class CreateReview(SerializerMutation):
    class Meta:
        serializer_class = ReviewSerializer


class AddToCart(SerializerMutation):
    class Meta:
        serializer_class = CartSerializer


class UpdateCart(graphene.Mutation, SuccessErrorsOutput):
    class Arguments:
        user_id = graphene.Int()
        product_id = graphene.Int()
        quantity = graphene.Int()

    def mutate(self, info, user_id, product_id, quantity):
        try:
            user = get_user_model().objects.get(pk=user_id)
            product = Product.objects.get(pk=product_id)
            cart = Cart.objects.get(user=user, product=product)
            cart.quantity = quantity

            return UpdateCart()
        except ObjectDoesNotExist:
            return UpdateCart(success=False, errors="error in updating cart")


class DeleteCart(graphene.Mutation, SuccessErrorsOutput):
    class Arguments:
        pk = graphene.Int()

    def mutate(self, info, pk):
        try:
            Cart.objects.get(pk=pk).delete()

            return DeleteCart()
        except ObjectDoesNotExist:
            return DeleteCart(success=False, errors="error in deleting, cart does not exist")


class Mutations(graphene.ObjectType):
    create_product = CreateProduct.Field()
    update_product = UpdateProduct.Field()
    delete_product = DeleteProduct.Field()
    create_order = CreateOrder.Field()
    create_review = CreateReview.Field()
    add_to_cart = AddToCart.Field()
    update_cart = UpdateCart.Field()
    remove_from_cart = DeleteCart.Field()
