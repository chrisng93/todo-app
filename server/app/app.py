from flask import Flask
from .extensions import db


def create_app():
    app = Flask(__name__)
    app.config.from_object('config')

    db.init_app(app)

    from .api import api as api_blueprint
    app.register_blueprint(api_blueprint, url_prefix='/api')

    return app
