from flask import Blueprint
from app.models import Camera

camera_routes = Blueprint('cameras', __name__)


@camera_routes.route('/')
def get_cameras():
    cameras = Camera.query.all()
    return {'cameras': [camera.to_dict() for camera in cameras]}
