from django.shortcuts import render, redirect
from django.http import HttpResponse
from .forms import ContactForm,NewsLetterForm

# Create your views here.
def home(request):
    # return HttpResponse("<h1>Hi</h1>")
    form = NewsLetterForm()
    return render(request,'mriic/index.html',{'form':form})

def contact(request):
    form=ContactForm()
    # print(form)
    if(request.method=='POST'):
        form=ContactForm(request.POST)
        if form.is_valid():
            form.save()        
            #return redirect('home')
            return render (request,'mriic/index.html',{'message':'Message Sent Successfully'})
    return render(request,'mriic/contact.html', {'form':form})


def about(request):
    return render(request,'mriic/about.html')

def product(request):
    return render(request,'mriic/product.html')

def services(request):
    return render(request,'mriic/services.html')

def newsletter(request):
    if request.method=='POST':
        form = NewsLetterForm(request.POST)
        if form.is_valid():
            form.save()
            return render (request,'mriic/index.html',{'message':'Successfully Subscribed to Newsletter'})
        else:
            return render (request,'mriic/index.html',{'message':'Email already exists'})
            
        