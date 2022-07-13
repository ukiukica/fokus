from wsgiref.validate import validator
from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, BooleanField, FloatField, TextAreaField, SelectField, DateField, SubmitField
from sqlalchemy import DateTime, Integer
from wtforms.validators import DataRequired

class ReviewForm(FlaskForm):
    content = StringField('Content', validators=[DataRequired()])
    camera_id = IntegerField('Camera ID')
    user_id = IntegerField('User ID')
    created_at = DateField('Date', format='%Y-%m-%d')
    updated_at = DateField('Date', format='%Y-%m-%d')
