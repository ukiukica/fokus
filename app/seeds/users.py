from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    user_1 = User(
        username='demo', email='demo@aa.io', password='password')
    user_2 = User(
        username='marnie', email='marnie@aa.io', password='password')
    user_3 = User(
        username='bobbie', email='bobbie@aa.io', password='password')
    user_4 = User(
        username='john', email='johnH@yahoo.com', password='password')
    user_5 = User(
        username='patrick', email='patrickM@gmail.com', password='password')
    user_6 = User(
        username='hala', email='ali020587@ebarg.net', password='password')
    user_7 = User(
        username='ilker', email='karmaissniping@dmxs8.com', password='password')
    user_8 = User(
        username='juanne', email='baywatch202@freeallapp.com', password='password')
    user_9 = User(
        username='kasi', email='anipar@mailcuk.com', password='password')
    user_10 = User(
        username='esther', email='kaixx@bomukic.com', password='password')

    db.session.add(user_1)
    db.session.add(user_2)
    db.session.add(user_3)
    db.session.add(user_4)
    db.session.add(user_5)
    db.session.add(user_6)
    db.session.add(user_7)
    db.session.add(user_8)
    db.session.add(user_9)
    db.session.add(user_10)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
