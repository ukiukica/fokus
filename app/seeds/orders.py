from app.models import db, Order

def seed_orders():
    order_1 = Order(
        order_number = '235-56772-0012', order_items = 'Contaflex III, Canon Pellix, Asahiflex II', full_name = "Demo Lition", address = '1127 Halsey St, 1, Brooklyn, NY 11207', shipping_type = 'Standard Shipping (4-5 business days)', user_id = 1, created_at= '2019-04-14')

    db.session.add(order_1)

    db.session.commit()

def undo_orders():
    db.session.execute('TRUNCATE orders RESTART IDENTITY CASCADE;')
    db.session.commit()
