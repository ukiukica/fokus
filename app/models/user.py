from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


purchase_history = db.Table(
    'purchase_history',
    db.Column('user_id', db.Integer, db.ForeignKey('users.id'), primary_key=True),
    db.Column('camera_id', db.Integer, db.ForeignKey('cameras.id'), primary_key=True)
)

wishlist = db.Table(
    'wishlist',
    db.Column('user_id', db.Integer, db.ForeignKey('users.id'), primary_key=True),
    db.Column('camera_id', db.Integer, db.ForeignKey('cameras.id'), primary_key=True)
)

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    reviews = db.relationship("Review", back_populates="users")
    cameras = db.relationship("Camera", back_populates="users")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email
        }
