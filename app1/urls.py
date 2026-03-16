from django.contrib import admin
from django.urls import path
from app1.views import home, payment

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'),
    path('payment/', payment, name='payment'),
]