from django.shortcuts import render

# Create your views here.
from django.shortcuts import render

from django.shortcuts import render

def home(request):
    return render(request, "index.html")

def payment(request):
    if request.method == "POST":
        name = request.POST.get("name")
        mobile = request.POST.get("mobile")
        return render(request, "payment.html", {"name": name, "mobile": mobile})
    return render(request, "payment.html")