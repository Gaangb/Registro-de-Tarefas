# # app/__init__.py
# from flask import Flask

# app = Flask(__name__)

# # Carregue a configuração da instância do Flask a partir do arquivo de configuração
# # app.config.from_object('config')

# # Importe os módulos de rotas
# from app.routes import task_routes

# app/__init__.py
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://tasks:senha123@postgres/conexao_db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)
    # Configuração da aplicação, se necessário

    # Registre o Blueprint
    from .routes import main
    app.register_blueprint(main)

    return app
