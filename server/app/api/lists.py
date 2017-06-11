from flask import Blueprint, request, jsonify
from sqlalchemy.exc import IntegrityError
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
    try:
        todo_list = List().from_json(request.json)
        db.session.add(todo_list)
        db.session.commit()
        return jsonify({'list': todo_list.to_json()}), 201
    except IntegrityError as e:
        return jsonify({'message': str(e)}), 400


@list_api.route('/<int:id>', methods=['PUT'])
def update_list(id):
    try:
        todo_list = List.query.get_or_404(id)
        todo_list.from_json(request.json)
        db.session.add(todo_list)
        db.session.commit()
        return jsonify({'list': todo_list.to_json()})
    except IntegrityError as e:
        return jsonify({'message': str(e)}), 400


@list_api.route('/<int:id>', methods=['DELETE'])
def delete_list(id):
    todo_list = List.query.get_or_404(id)
    db.session.delete(todo_list)
    db.session.commit()
    return jsonify({})


@list_api.route('/<int:id>/complete', methods=['PUT'])
def mark_all_complete(id):
    todo_list = List.query.get_or_404(id)
    todo_list.mark_all_complete()
    db.session.add(todo_list)
    db.session.commit()
    return jsonify({'list': todo_list.to_json()})
