from wsgiref.validate import validator
from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, BooleanField, FloatField, TextAreaField, SelectField, DateField, SubmitField
from sqlalchemy import DateTime, Integer
from wtforms.validators import DataRequired

SHIPPING_TYPES = ["Standard Shipping (4–5 business days)", "Expedited Shipping (2-3 business days)", "Lightning Shipping (1 business day"]

class OrderForm(FlaskForm):
    order_number = StringField("Order Number")
    full_name = StringField("Full Name", validators=[DataRequired()])
    
