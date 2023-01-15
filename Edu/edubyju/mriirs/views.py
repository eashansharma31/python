from django.shortcuts import render,redirect
from django.http import HttpResponse
from .models import myclient,Person
from .forms import clientform,contactForm

# Create your views here.
def home(request):
    form=clientform()
    contactform=contactForm()
    return render(request,"mriirs/index.html",{'form':form,'contactform':contactform})
def newsletter(request):
    form = clientform(request.POST or None)
    if form.is_valid():
        form.save()
        return render(request, 'mriirs/index.html', {'message':'Successfully Subscribed to Newsletter'})
    else:
        return render (request,'mriirs/index.html',{'message':'Email already exists'})
def contact(request):
    form2=contactForm(request.POST or None)
    if form2.is_valid():
        form2.save()
        return render(request,'mriirs/index.html',{'message':'Information Sent'})
    else:
        return render(request,'mriirs/index.html', {'message':'fill form first'})
    

