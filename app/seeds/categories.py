from app.models import db, Category

def seed_categories():
    category_1 = Category(
      name = 'Single-Lens Reflex (SLR)')
    category_2 = Category(
      name = 'Twin-Lens Reflex (TLR)')
    category_3 = Category(
      name = 'Rangefinder')
    category_4 = Category(
      name = 'Point-and-Shoot')
    category_5 = Category(
      name = 'Instant Camera')
    category_6 = Category(
      name = 'Folding Camera')
    category_7 = Category(
      name = 'Unknown')


    db.session.add(category_1)
    db.session.add(category_2)
    db.session.add(category_3)
    db.session.add(category_4)
    db.session.add(category_5)
    db.session.add(category_6)
    db.session.add(category_7)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
