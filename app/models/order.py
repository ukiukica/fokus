from .db import db


class Order(db.Model):
    __tablename__ = 'orders'

    id = db.Column(db.Integer, primary_key=True)
    order_number = db.Column(db.String(50), nullable=False)
    order_items = db.Column(db.String(500), nullable=False)
    full_name = db.Column(db.String(100), nullable=False)
    address = db.Column(db.String(200), nullable=False)
    shipping_type = db.Column(db.String(50), nullable=False)
    shipping_price = db.Column(db.Float, nullable=False)
    sales_tax = db.Column(db.Float, nullable=False)
    total = db.Column(db.Float, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    created_at = db.Column(db.DateTime)


    users = db.relationship('User', back_populates='orders')


    def to_dict(self):
        return {
            'id': self.id,
            'order_number': self.order_number,
            'order_items': self.order_items,
            'full_name': self.full_name,
            'address': self.address,
            'shipping_type': self.shipping_type,
            'shipping_price': self.shipping_price,
            'sales_tax': self.sales_tax,
            'total': self.total,
            'user_id': self.user_id,
            'created_at': self.created_at
        }
