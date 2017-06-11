from datetime import datetime
from ..extensions import db


class Todo(db.Model):
    __tablename__ = 'todos'

    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    description = db.Column(db.String(200), nullable=False)
    is_completed = db.Column(db.Boolean, default=False)
    list_id = db.Column(db.Integer, db.ForeignKey('lists.id'))

    def to_json(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}

    def from_json(self, json):
        if 'description' in json:
            self.description = json['description']
        if 'is_completed' in json:
            self.is_completed = json['is_completed']
        if 'list_id' in json:
            self.list_id = json['list_id']
        return self

    def mark_complete(self):
        self.is_completed = True
        return self
