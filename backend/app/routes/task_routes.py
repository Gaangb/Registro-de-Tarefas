from flask import jsonify, request, current_app
from app.models.task import Tasks
from app import db
from . import main

@main.route('/get_tasks', methods=['GET'])
def get_tasks():
    try:
        tasks = Tasks.query.all()
        return jsonify([task.to_dict() for task in tasks])
    except Exception as e:
        return jsonify({'status': 'falha ao obter tasks',
                        'mensagem': e.args[0]})

@main.route('/add_task', methods=['POST'])
def add_task():
    try:
        dados = request.get_json()
        if not dados['titulo_tarefa']:
            raise KeyError('O campo "titulo" é obrigatório.')
        if not dados['descricao_tarefa']:
            raise KeyError('O campo "descricao" é obrigatório.')
        if not dados['data_tarefa']:
            raise KeyError('O campo "data" é obrigatório.')
        if not dados['status_tarefa']:
            raise KeyError('O campo "status" é obrigatório.')
        nova_task = Tasks(
                titulo_tarefa=dados['titulo_tarefa'],
                descricao_tarefa=dados['descricao_tarefa'],
                data_tarefa=dados['data_tarefa'],
                status_tarefa=dados['status_tarefa']
            )
        db.session.add(nova_task)
        db.session.commit()
        return jsonify(nova_task.to_dict())
    except KeyError as e:
        return jsonify({'status': 'falha ao adicionar task',
                        'mensagem': e.args[0]})
    
@main.route('/update_task/<int:id>', methods=['PUT'])
def update_tasks(id):
    try:
        dados = request.get_json()
        task = Tasks.query.get(id)
        if not task:
            raise ValueError('Task inexistente')
        task.titulo_tarefa = dados['titulo_tarefa']
        task.descricao_tarefa = dados['descricao_tarefa']
        task.data_tarefa = dados['data_tarefa']
        task.status_tarefa = dados['status_tarefa']
        db.session.commit()
        return jsonify(task.to_dict())
    except ValueError as e:
        return jsonify({'status': 'falha ao atualizar task',
                        'mensagem': e.args[0]})
    except KeyError as e:
        return jsonify({'status': 'falha ao atualizar task',
                        'mensagem': e.args[0]})

@main.route('/delete_task/<int:id>', methods=['DELETE'])
def delete_tasks(id):
    try:
        task = Tasks.query.get(id)
        if not task:
            raise ValueError('Task inexistente')
        db.session.delete(task)
        db.session.commit()
        return jsonify({'status': 'task deletada com sucesso'})
    except ValueError as e:
        return jsonify({'status': 'falha ao deletar task',
                        'mensagem': e.args[0]})