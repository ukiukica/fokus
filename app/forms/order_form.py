from tkinter.tix import Select
from wsgiref.validate import validator
from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, BooleanField, FloatField, TextAreaField, SelectField, DateField, SubmitField
from sqlalchemy import DateTime, Integer
from wtforms.validators import DataRequired

SHIPPING_TYPES = ["Standard Shipping", "Expedited Shipping", "Lightning Shipping"]

class OrderForm(FlaskForm):
    order_number = StringField("Order Number")
    order_items = StringField("Order Items")
    full_name = StringField("Full Name", validators=[DataRequired()])
    address = StringField("Address", validators=[DataRequired()])
    shipping_type = SelectField("Shipping Type", choices=SHIPPING_TYPES)
    shipping_price = FloatField("Shipping Price")
    sales_tax = FloatField("Sales Tax")
    total = FloatField("Total")
    user_id = IntegerField('User ID')
    camera_id = IntegerField('Camera ID')
    created_at = DateField('Date', format='%Y-%m-%d')
