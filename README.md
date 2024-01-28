# Registro de Tarefas

## Requisitos

Certifique-se de ter os seguintes requisitos instalados em seu ambiente de desenvolvimento:

- Docker
- Python
- pip
- Node.js: 18.17.0 || >= 20.5.0

## Iniciando a Aplicação

1. Navegue até o diretório do projeto:

    ```bash
    cd ./Registro-de-Tarefas
    ```

2. Inicie o backend e o banco de dados utilizando Docker:

    ```bash
    docker-compose up --build
    ```

    Isso criará as imagens necessárias no container e iniciará o backend e o banco de dados da aplicação.
    Obs: Talvez seja necessário alterar as portas no arquivo docker-compose.yaml se as portas atuais estiverem em uso, caso seja necessário altere a porta do lado esquerdo para uma porta que não está sendo utilizada

3. Abra um novo terminal, navegue até o diretório do backend e instale as dependências:

    ```bash
    cd ./Registro-de-Tarefas/backend
    pip install -r requirements.txt
    ```

4. Inicie o frontend:

    ```bash
    cd ./Registro-de-Tarefas/frontend
    npm install
    npm start
    ```

## Testando a Aplicação

1. Acesse [localhost:3000](http://localhost:3000) em seu navegador.

2. Clique no ícone no canto superior direito da tela e preencha todos os campos do formulário exibido.

3. Verifique se um alerta é exibido ao tentar salvar com campos em branco.

4. Após preencher todos os campos, clique em salvar, e a tarefa deve aparecer abaixo do status escolhido.

## Testando Funções dos Cards de Tarefa

1. No canto superior direito do card de tarefa, clique no ícone de lápis para editar algum campo.

2. Clique em salvar e verifique se as alterações foram feitas em tempo real.

3. Teste também o ícone da lixeira para deletar a tarefa e verifique se a remoção ocorre em tempo real.

## Tecnologias Utilizadas

- React + CSS
- Python
- Docker
- Flask
- SQLAlchemy
- PostgreSQL
