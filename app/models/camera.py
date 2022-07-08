from .db import db

class Camera(db.Model):
    __tablename__ = 'cameras'

    id = db.Column(db.Integer, primary_key=True)
    brand = db.Column(db.String(50), nullable=False)
    model = db.Column(db.String(50), nullable=False)
    film_type = db.Column(db.String(50), nullable=False)
    other_specs = db.Column(db.String(500))
    amount = db.Column(db.Float, nullable=False)
    inventory = db.Column(db.Integer, nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    created_at = db.Column(db.DateTime)
    updated_at = db.Column(db.DateTime)

    users = db.relationship('User', back_populates='cameras')
    reviews = db.relationship("Review", back_populates="cameras")
    categories = db.relationship("Category", back_populates="cameras")
    images = db.relationship("Image", back_populates="cameras")


    def to_dict(self):
        return {
            'id': self.id,
            'brand': self.brand,
            'model': self.model,
            'film_type': self.film_type,
            'other_specs': self.other_specs,
            'amount': self.amount,
            'inventory': self.inventory,
            'category_id': self.category_id,
            'user_id': self.user_id,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
        }
