from flask import Blueprint
from app.models import Image, Camera
from sqlalchemy import join

images_routes = Blueprint('images', __name__)

@images_routes.route('/')
def get_images():
    images = Image.query.all()
    # images_dict = [image.to_dict() for image in images]
    # print(images_dict)
    normalizedImages = {}
    for image in images:
        if image.camera_id in normalizedImages:
            normalizedImages[image.camera_id].append(image.to_dict() | {"camera": image.cameras.to_dict()})
        else:
            normalizedImages[image.camera_id] = [image.to_dict() | {"camera": image.cameras.to_dict()}]
    print("NORMALIZED IMAGES", normalizedImages)
    # return {'images': [image.to_dict() for image in images]}
    return normalizedImages
