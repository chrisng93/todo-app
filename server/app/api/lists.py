from flask import Blueprint, request, jsonify
from ..models.List import List
from ..extensions import db


list_api = Blueprint('list', __name__, url_prefix='/api/list')


@list_api.route('/', methods=['GET'])
def get_lists():
    lists = List.query
    return jsonify({'lists': [todo_list.to_json() for todo_list in lists]})


@list_api.route('/<int:id>', methods=['GET'])
def get_list(id):
    todo_list = List.query.get_or_404(id)
    return jsonify({'list': todo_list.to_json()})


@list_api.route('/', methods=['POST'])
def create_list():
    todo_list = List().from_json(request.json)
    db.session.add(todo_list)
    db.session.commit()
    return jsonify({'list': todo_list.to_json()}), 201


@list_api.route('/<int:id>', methods=['PUT'])
def update_list(id):
    todo_list = List.query.get_or_404(id)
    todo_list.from_json(request.json)
    db.session.add(todo_list)
    db.session.commit()
    return jsonify({'list': todo_list.to_json()})


@list_api.route('/<int:id>', methods=['DELETE'])
def delete_list(id):
    todo_list = List.query.get_or_404(id)
    db.session.delete(todo_list)
    db.session.commit()
    return jsonify({})
