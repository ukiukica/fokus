from flask import Blueprint, request
from app.models import db, Order
from app.forms import ReviewForm
from datetime import datetime
from .errors import validation_errors_to_error_messages

order_routes = Blueprint('orders', __name__)


@order_routes.route('/')
def get_orders(user_id):
    orders = Order.query.all()
    return {'orders': [order.to_dict() for order in orders]}

@order
