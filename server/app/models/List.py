from datetime import datetime
from ..extensions import db


class List(db.Model):
    __tablename__ = 'lists'

    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow())
    name = db.Column(db.String(50), nullable=False)
    todos = db.relationship('Todo', backref='list', lazy='dynamic')

    def to_json(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}

    def from_json(self, json):
        if 'name' in json:
            self.name = json['name']
        return self
