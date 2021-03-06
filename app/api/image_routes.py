from flask import Blueprint, request
from app.models import db, Image, image
# from flask_login import current_user, login_required
from .errors import validation_errors_to_error_messages
from app.s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)

image_routes = Blueprint("images", __name__)


@image_routes.route("/new", methods=["POST"])
# @login_required
def upload_image():
    if "image" not in request.files:
        return {"errors": "image required"}, 400

    image = request.files["image"]

    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    camera_id = request.form.get("camera_id")
    film_roll = True if request.form.get("film_roll") == 'true' else False
    url = upload["url"]
    # flask_login allows us to get the current user from the request
    new_image = Image(
        image_url=url,
        film_roll=film_roll,
        camera_id=camera_id)
    db.session.add(new_image)
    db.session.commit()
    return {"url": url}

@image_routes.route("/<int:id>", methods=["DELETE"])
def delete_image(id):
    image = Image.query.get(id)
    db.session.delete(image)
    db.session.commit()

    return "Image deleted"
