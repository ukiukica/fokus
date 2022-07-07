from app.models import db, Review


def seed_reviews():
    review_1 = Review(
        user_id=2, camera_id=1, content= "awesome!", created_at= '2019-04-14', updated_at= '2019-04-14' )
    review_2 = Review(
        user_id=1, camera_id=1, content= "second that :)", created_at= '2019-04-14', updated_at= '2019-04-14' )
    review_3 = Review(
        user_id=4, camera_id=2, content= "never gonna forget this!", created_at= '2019-04-14', updated_at= '2019-04-14' )
    review_4 = Review(
        user_id=3, camera_id=2, content= "remember the shark", created_at= '2019-04-14', updated_at= '2019-04-14' )
    review_5 = Review(
        user_id=2, camera_id=2, content= "the shark!", created_at= '2019-04-14', updated_at= '2019-04-14' )
    review_6 = Review(
        user_id=6, camera_id=3, content= "hated it", created_at= '2019-04-14', updated_at= '2019-04-14' )
    review_7 = Review(
        user_id=5, camera_id=3, content= "love love love", created_at= '2019-04-14', updated_at= '2019-04-14' )
    review_8 = Review(
        user_id=8, camera_id=4, content= "love youuu", created_at= '2019-04-14', updated_at= '2019-04-14' )
    review_9 = Review(
        user_id=9, camera_id=4, content= "10 tears flew by", created_at= '2019-04-14', updated_at= '2019-04-14' )
    review_10 = Review(
        user_id=7, camera_id=4, content= "i'm still in school fml", created_at= '2019-04-14', updated_at= '2019-04-14' )
    review_11 = Review(
        user_id=7, camera_id=5, content= "done", created_at= '2019-04-14', updated_at= '2019-04-14' )
    review_12 = Review(
        user_id=6, camera_id=5, content= "done and done!", created_at= '2019-04-14', updated_at= '2019-04-14' )
    review_13 = Review(
        user_id=3, camera_id=6, content= "never fails", created_at= '2019-04-14', updated_at= '2019-04-14' )
    review_14 = Review(
        user_id=1, camera_id=6, content= "NEVER", created_at= '2019-04-14', updated_at= '2019-04-14' )
    review_15 = Review(
        user_id=7, camera_id=7, content= "best idea ever", created_at= '2019-04-14', updated_at= '2019-04-14' )
    review_16 = Review(
        user_id=6, camera_id=7, content= "innit", created_at= '2019-04-14', updated_at= '2019-04-14' )
    review_17 = Review(
        user_id=10, camera_id=8, content= "we have to go back to this", created_at= '2019-04-14', updated_at= '2019-04-14' )
    review_18 = Review(
        user_id=9, camera_id=8, content= "best camera evaaaaaaaa", created_at= '2019-04-14', updated_at= '2019-04-14' )
    review_19 = Review(
        user_id=9, camera_id=9, content= "wtf", created_at= '2019-04-14', updated_at= '2019-04-14' )
    review_20 = Review(
        user_id=8, camera_id=9, content= "you can convince me to do anything", created_at= '2019-04-14', updated_at= '2019-04-14' )
    review_21 = Review(
        user_id=5, camera_id=10, content= "amazing", created_at= '2019-04-14', updated_at= '2019-04-14' )
    review_22 = Review(
        user_id=2, camera_id=10, content= "bloody brilliant", created_at= '2019-04-14', updated_at= '2019-04-14' )



    db.session.add(review_1)
    db.session.add(review_2)
    db.session.add(review_3)
    db.session.add(review_4)
    db.session.add(review_5)
    db.session.add(review_6)
    db.session.add(review_7)
    db.session.add(review_8)
    db.session.add(review_9)
    db.session.add(review_10)
    db.session.add(review_11)
    db.session.add(review_12)
    db.session.add(review_13)
    db.session.add(review_14)
    db.session.add(review_15)
    db.session.add(review_16)
    db.session.add(review_17)
    db.session.add(review_18)
    db.session.add(review_19)
    db.session.add(review_20)
    db.session.add(review_21)
    db.session.add(review_22)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
