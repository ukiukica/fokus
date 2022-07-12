from flask import Blueprint, request
from app.models import db, Review
# from app.forms import AddCameraForm, EditCameraForm
from datetime import datetime
from .errors import validation_errors_to_error_messages

review_routes = Blueprint('reviews', __name__)


@review_routes.route('/')
def get_reviews():
    reviews = Review.query.all()
    return {'reviews': [review.to_dict() for review in reviews]}
