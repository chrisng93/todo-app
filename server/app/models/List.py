from datetime import datetime
from ..extensions import db


class List(db.Model):
    __tablename__ = 'lists'

    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    name = db.Column(db.String(50), nullable=False)
    todos = db.relationship('Todo', backref='list', lazy='joined')

    def to_json(self):
        json = {c.name: getattr(self, c.name) for c in self.__table__.columns}
        json['todos'] = [todo.to_json() for todo in sorted(self.todos, key=lambda t:t.created_at)]
        return json

    def from_json(self, json):
        if 'name' in json:
            self.name = json['name']
        return self

    def mark_all_complete(self):
        for todo in self.todos:
            todo.mark_complete()
        return self
