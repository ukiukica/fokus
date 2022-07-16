from wsgiref.validate import validator
from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, BooleanField, FloatField, TextAreaField, SelectField, DateField, SubmitField
from sqlalchemy import DateTime, Integer
from wtforms.validators import DataRequired

FILM_TYPES = ["35mm", "120mm", "600", "SX-70"]

class CameraForm(FlaskForm):
    brand = StringField('Brand', validators=[DataRequired()])
    model = StringField('Model', validators=[DataRequired()])
    film_type = StringField('Film Type', validators=[DataRequired()])
    other_specs = TextAreaField('Other Specs')
    amount = FloatField('Amount', validators=[DataRequired()])
    inventory = IntegerField('Inventory')
    category_id = IntegerField('Category ID')
    user_id = IntegerField('User ID')
    created_at = DateField('Date', format='%Y-%m-%d')
    updated_at = DateField('Date', format='%Y-%m-%d')
