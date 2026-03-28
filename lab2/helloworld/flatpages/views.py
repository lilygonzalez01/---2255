from django.http import HttpResponse
from django.shortcuts import render


# Create your views here.
def home(r):
    return render(r, "static_handler.html", {})
