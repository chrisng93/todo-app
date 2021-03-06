from flask import Blueprint, request, jsonify
from sqlalchemy.exc import IntegrityError
from ..models.Todo import Todo
from ..extensions import db


todo_api = Blueprint('todo', __name__, url_prefix='/api/todo')


@todo_api.route('/', methods=['GET'])
def get_todos():
    todos = Todo.query
    return jsonify({'todos': [todo.to_json() for todo in todos]})


@todo_api.route('/<int:id>', methods=['GET'])
def get_todo(id):
    todo = Todo.query.get_or_404(id)
    return jsonify({'todo': todo.to_json()})


@todo_api.route('/', methods=['POST'])
def create_todo():
    try:
        todo = Todo().from_json(request.json)
        db.session.add(todo)
        db.session.commit()
        return jsonify({'todo': todo.to_json()}), 201
    except IntegrityError as e:
        return jsonify({'message': str(e)}), 400


@todo_api.route('/<int:id>', methods=['PUT'])
def update_todo(id):
    try:
        todo = Todo.query.get_or_404(id)
        todo.from_json(request.json)
        db.session.add(todo)
        db.session.commit()
        return jsonify({'todo': todo.to_json()})
    except IntegrityError as e:
        return jsonify({'message': str(e)}), 400


@todo_api.route('/<int:id>', methods=['DELETE'])
def delete_list(id):
    todo = Todo.query.get_or_404(id)
    db.session.delete(todo)
    db.session.commit()
    return jsonify({})
