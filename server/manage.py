from flask_script import Manager
from app.app import create_app
from app.extensions import db


manager = Manager(create_app)


@manager.command
def createdb():
    app = create_app()
    with app.app_context():
        db.drop_all()
        db.create_all()


if __name__ == '__main__':
    manager.run()
