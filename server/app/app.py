import os
from flask import Flask
from .extensions import db


def create_app():
    app = Flask(__name__)

    app.config.from_object('config')
    basedir = os.path.abspath(os.path.dirname(__file__))
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, '..', 'app.db')
    app.url_map.strict_slashes = False

    db.init_app(app)

    from .api import todo_api as todos_blueprint, list_api as lists_blueprint
    app.register_blueprint(todos_blueprint)
    app.register_blueprint(lists_blueprint)

    return app
