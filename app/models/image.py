from .db import db

class Image(db.Model):
    __tablename__ = 'images'

    id = db.Column(db.Integer, primary_key=True)
    image_url = db.Column(db.String(300), nullable=False)
    film_roll = db.Column(db.Boolean, nullable=False)
    camera_id = db.Column(db.Integer, db.ForeignKey('cameras.id'))

    cameras = db.relationship("Camera", back_populates="images")

    def to_dict(self):
        return {
            'id': self.id,
            'image_url': self.image_url,
            'film_roll': self.film_roll,
            'camera_id': self.camera_id,
        }
