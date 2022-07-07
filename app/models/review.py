from .db import db

class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    camera_id = db.Column(db.Integer, db.ForeignKey('cameras.id'))
    content = db.Column(db.String(2000))
    created_at = db.Column(db.DateTime)
    updated_at = db.Column(db.DateTime)


    user = db.relationship('User', back_populates='reviews')
    camera = db.relationship('Camera', back_populates='reviews')


    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'camera_id': self.camera_id,
            'content': self.content,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
        }
