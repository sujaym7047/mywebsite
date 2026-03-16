from django.shortcuts import render, redirect

# Create your views here.

def home(request):
    return render(request, "index.html")

def payment(request):
    if request.method == "POST":
        code = request.POST.get("code")

        if code == "1234":
            return redirect("https://sbm.gov.in/SBM_DBT/Secure/DBT/DBT_Registration.aspx")

    return render(request,"payment.html")