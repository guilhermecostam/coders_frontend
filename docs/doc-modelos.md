# Documento de Modelos

Neste documento temos o Modelo de Dados (Entidade-Relacionamento). Temos também a descrição das entidades e o dicionário de dados.

## Modelo Conceitual

### Modelo de Dados (Entidade-Relacionamento) usando Mermaid

```mermaid
erDiagram
    Usuario ||--|| Endereco : tem
    Usuario }o--|{ UsuarioProjeto : pertence
    Projeto }o--|{ UsuarioProjeto : pertence
```

### Descrição das Entidades

Descrição sucinta das entidades presentes no sistema.

| Entidade       | Descrição                                                                                                                                            |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Usuário        | Entidade abstrata para representar informações gerais dos Usuários: id, nome, data_nasc, telefone, email, área atuação, linkedin, github e endereço. |
| Endereço       | Entidade que representa um Endereço tem as informações: id, rua, número, bairro, cidade, estado, cep, complemento.                                   |
| Projeto        | Entidade que representa um Projeto tem as informações: id, título, tecnologia, descrição, discord e dono.                                            |
| UsuarioProjeto | Entidade que representa o relacionamento entre usuário e projeto tem as informações: id, tipo, usuario e projeto.                                    |

### Dicionário de Dados

|   Tabela   | Usuário                                                    |
| ---------- | ---------------------------------------------------------- |
| Descrição  | Armazena as informações de um usuário.                     |
| Observação | Usuários podem ser proprietário de projeto ou colaborador. |

|  Nome         | Descrição                          | Tipo de Dado | Tamanho | Restrições de Domínio |
| ------------- | ---------------------------------- | ------------ | ------- | --------------------- |
| id            | identificador gerado pelo SGBD     | SERIAL       | ---     | PK / Identity         |
| data_nasc     | data de nascimento do usuário      | DATE         | ---     | Not Null              |
| nome          | nome do usuário                    | VARCHAR      | 150     | Not Null              |
| telefone      | telefone do usuário                | VARCHAR      | 150     | Not Null              |
| linkedin      | LinkedIn do usuário                | VARCHAR      | 150     | ---                   |
| github        | GitHub do usuário                  | VARCHAR      | 150     | ---                   |
| e-mail        | e-mail de contato do usuário       | VARCHAR      | 150     | Not Null              |
| endereco      | endereço vinculado ao usuário      | SERIAL       | ---     | FK / Not Null         |

<hr>

|   Tabela   | Endereço                                                    |
| ---------- | ----------------------------------------------------------- |
| Descrição  | Armazena as informações de endereço referente a um usuário. |
| Observação | ---                                                         |

|  Nome         | Descrição                          | Tipo de Dado | Tamanho | Restrições de Domínio |
| ------------- | ---------------------------------- | ------------ | ------- | --------------------- |
| id            | identificador gerado pelo SGBD     | SERIAL       | ---     | PK / Identity         |
| rua           | rua do endereço do usuário         | VARCHAR      | 150     | Not Null              |
| numero        | numero do endereço do usuário      | VARCHAR      | 150     | Not Null              |
| bairro        | bairro do endereço do usuário      | VARCHAR      | 150     | Not Null              |
| cidade        | cidade do endereço do usuário      | VARCHAR      | 150     | Not Null              |
| estado        | estado do endereço do usuário      | VARCHAR      | 150     | Not Null              |
| cep           | cep do endereço do usuário         | VARCHAR      | 150     | Not Null              |
| complemento   | complemento do endereço do usuário | VARCHAR      | 150     | ---                   |

<hr>

|   Tabela   | Projeto                                                    |
| ---------- | ---------------------------------------------------------- |
| Descrição  | Armazena as informações de um projeto.                     |
| Observação | Um projeto pode ter mais de um colaborador e tecnologia.   |

|  Nome         | Descrição                              | Tipo de Dado | Tamanho | Restrições de Domínio |
| ------------- | -------------------------------------- | ------------ | ------- | --------------------- |
| id            | identificador gerado pelo SGBD         | SERIAL       | ---     | PK / Identity         |
| tecnologia    | tecnologia(s) utilizada(s) no projeto  | VARCHAR      | 250     | Not Null              |
| descricao     | detalhes sobre o projeto               | VARCHAR      | 250     | ---                   |
| titulo        | título do projeto                      | VARCHAR      | 150     | Not Null              |
| discord       | Discord do projeto                     | VARCHAR      | 150     | ---                   |
| dono          | usuário vinculado ao projeto como dono | SERIAL       | ---     | FK / Not Null         |

<hr>

|   Tabela   | UsuarioProjeto                                                    |
| ---------- | ----------------------------------------------------------------- |
| Descrição  | Armazena as informações do tipo de usuário do projeto.            |
| Observação | ---                                                               |

|  Nome         | Descrição                          | Tipo de Dado | Tamanho | Restrições de Domínio |
| ------------- | ---------------------------------- | ------------ | ------- | --------------------- |
| id            | identificador gerado pelo SGBD     | SERIAL       | ---     | PK / Identity         |
| tipo          | tipo de usuário                    | INT          | ---     | Not Null              |
| usuario       | usuário vinculado ao projeto       | SERIAL       | ---     | FK / Not Null         |
| projeto       | projeto vinculado ao usuario       | SERIAL       | ---     | FK / Not Null         |
