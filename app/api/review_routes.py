from flask import Blueprint, request
from app.models import db, Review
from app.forms import ReviewForm
from datetime import datetime
from .errors import validation_errors_to_error_messages

review_routes = Blueprint('reviews', __name__)


@review_routes.route('/')
def get_reviews():
    reviews = Review.query.all()
    return {'reviews': [review.to_dict() for review in reviews]}


@review_routes.route('/new', methods=["POST"])
def post_review():
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        new_review = Review(
            content=data['content'],
            user_id=data['user_id'],
            camera_id=data['camera_id'],
            created_at=datetime.now(),
            updated_at=datetime.now()
        )
        db.session.add(new_review)
        db.session.commit()
        return new_review.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@review_routes.route("/<int:id>", methods=["PUT"])
def edit_review(id):
    review = Review.query.get(id)
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        review.content=data['content'],
        review.updated_at = datetime.now()

        db.session.commit()
        return review.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@review_routes.route("/<int:id>", methods=["DELETE"])
def delete_review(id):
    review = Review.query.get(id)
    db.session.delete(review)
    db.session.commit()
    return "Review deleted"
