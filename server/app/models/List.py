from datetime import datetime
from ..extensions import db


class List(db.Model):
    __tablename__ = 'lists'

    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow())
    name = db.Column(db.String(50))
    todos = db.relationship('Todo', backref='list', lazy='joined')
