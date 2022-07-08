from flask import Blueprint, request
from app.models import db, Camera
from app.forms import AddCameraForm
from datetime import datetime

camera_routes = Blueprint('cameras', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@camera_routes.route('/')
def get_cameras():
    cameras = Camera.query.all()
    return {'cameras': [camera.to_dict() for camera in cameras]}

@camera_routes.route('/new', methods=['post'])
def post_camera():
    form = AddCameraForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print("IN THE POST ROUTE")
    if form.validate_on_submit():
        data = form.data
        print("DATA: ", data)
        new_camera = Camera(
           brand=data['brand'],
           model=data['model'],
           film_type=data['film_type'],
           other_specs=data['other_specs'],
           amount=data['amount'],
           inventory=data['inventory'],
           category_id=data['category_id'],
           user_id=data['user_id'],
           created_at =datetime.now().strftime("%d/%m/%y"),
           updated_at =datetime.now().strftime("%d/%m/%y")
        )
        db.session.add(new_camera)
        db.session.commit()
        return new_camera.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
