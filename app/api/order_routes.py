from flask import Blueprint, request
from app.models import db, Order
from app.forms import OrderForm
from datetime import datetime
from .errors import validation_errors_to_error_messages

order_routes = Blueprint('orders', __name__)


@order_routes.route('/')
def get_orders(user_id):
    orders = Order.query.all()
    return {'orders': [order.to_dict() for order in orders]}

@order_routes.route('/new', methods=["POST"])
def create_order():
    form = OrderForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        print("DATA: ", data)
        new_order = Order(
            order_number = data["order_number"],
            order_items = data["order_items"],
            full_name = data["full_name"],
            address = data["address"],
            shipping_type = data["shipping_type"],
            subtotal = data["subtotal"],
            shipping_price = data["shipping_price"],
            sales_tax = data["sales_tax"],
            total = data["total"],
            user_id = data["user_id"],
            created_at=datetime.now()
        )
        db.session.add(new_order)
        db.session.commit()
        return new_order.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
