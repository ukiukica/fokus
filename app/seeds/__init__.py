from flask.cli import AppGroup

from app.seeds.orders import seed_orders
from .users import seed_users, undo_users
from .reviews import seed_reviews, undo_reviews
from .categories import seed_categories, undo_categories
from .cameras import seed_cameras, undo_cameras
from .images import seed_images, undo_images
from .orders import seed_orders, undo_orders

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_categories()
    seed_cameras()
    seed_reviews()
    seed_images()
    seed_orders()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_reviews()
    undo_categories()
    undo_cameras()
    undo_images()
    undo_orders()
    # Add other undo functions here
