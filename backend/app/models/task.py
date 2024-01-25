from datetime import datetime
from app import db

class Tasks(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    titulo_tarefa = db.Column(db.String(100), nullable=False)
    descricao_tarefa = db.Column(db.Text)
    data_tarefa = db.Column(db.Date, nullable=False)
    status_tarefa = db.Column(db.String(1), nullable=False)

    def __init__(self, titulo_tarefa, descricao_tarefa, data_tarefa, status_tarefa):
        self.titulo_tarefa = titulo_tarefa
        self.descricao_tarefa = descricao_tarefa
        self.data_tarefa = datetime.strptime(data_tarefa, "%d-%m-%Y").date()
        self.status_tarefa = status_tarefa

    def to_dict(self):
        return {
            'id': self.id,
            'titulo_tarefa': self.titulo_tarefa,
            'descricao_tarefa': self.descricao_tarefa,
            'data_tarefa': self.data_tarefa.strftime("%d-%m-%Y"),
            'status_tarefa': self.status_tarefa
        }
