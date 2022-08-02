from flask import Blueprint, request
from app.models import db, Review
from app.forms import ReviewForm
from datetime import datetime
from .errors import validation_errors_to_error_messages

order_routes = Blueprint('orders', __name__)


# @order_routes.route('/')
# def get_orders(user_id):
#     orders
