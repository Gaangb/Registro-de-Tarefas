CREATE TABLE IF NOT EXISTS Tasks (
    id SERIAL PRIMARY KEY,
    titulo_tarefa VARCHAR(100) NOT NULL,
    descricao_tarefa VARCHAR(255),
    data_tarefa DATE NOT NULL,
    status_tarefa VARCHAR(20) NOT NULL
);

