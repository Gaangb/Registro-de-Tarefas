FROM postgres:latest

ENV POSTGRES_DB=conexao_db
# ENV POSTGRES_USER=tasks
# ENV POSTGRES_PASSWORD=senha123

COPY init.sql /docker-entrypoint-initdb.d/

RUN chmod +r /docker-entrypoint-initdb.d/init.sql