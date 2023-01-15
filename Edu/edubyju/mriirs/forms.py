from django import forms
from .models import myclient,Person

class clientform(forms.ModelForm):
    class Meta:
        model=myclient
        fields="__all__"
        labels = {
            "email": ""
        }
        widgets = {
            'email':forms.TextInput(attrs={'class':'form-control','placeholder': 'Enter Your Email'})
        }
class contactForm(forms.ModelForm):
    class Meta:
        model=Person
        fields="__all__"
        widgets={
            'first_name':forms.TextInput(attrs={'class':'form-control'}),
            'last_name':forms.TextInput(attrs={'class':'form-control'}),
            'email':forms.TextInput(attrs={'class':'form-control'}),
            'message':forms.Textarea(attrs={'class':'form-control','rows':5}),
        }