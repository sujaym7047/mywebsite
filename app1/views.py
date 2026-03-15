from django.shortcuts import render

# Create your views here.
from django.shortcuts import render

from django.shortcuts import render

def home(request):
    return render(request, "index.html")

from django.shortcuts import render, redirect

def payment(request):
    if request.method == "POST":
        code = request.POST.get("code")

        if code == "1234":
            return redirect("https://sbm.gov.in/SBM_DBT/Secure/DBT/DBT_Registration.aspx")

    return render(request,"payment.html")