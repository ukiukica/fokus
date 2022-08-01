from .db import db


class Order(db.Model):
    __tablename__ = 'orders'

    id = db.Column(db.Integer, primary_key=True)
    order_number = db.Column(db.String(50), nullable=False)
    ful_name = db.Column(db.String(100), nullable=False)
    address = db.Column(db.String(200), nullable=False)
    shipping_type = db.Column(db.String(50), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    camera_id = db.Column(db.Integer, db.ForeignKey('cameras.id'))
    created_at = db.Column(db.DateTime)


    users = db.relationship('User', back_populates='reviews')
    cameras = db.relationship('Camera', back_populates='reviews')


    def to_dict(self):
        return {
            'id': self.id,
            'order_number': self.order_number,
            'full_name': self.ful_name,
            'address': self.address,
            'shipping_type': self.shipping_type,
            'user_id': self.user_id,
            'camera_id': self.camera_id,
            'created_at': self.created_at
        }