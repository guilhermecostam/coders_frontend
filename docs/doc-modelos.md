# Documento de Modelos

Neste documento temos o modelo Conceitual (UML). Temos também a descrição das entidades e o dicionário de dados.

## Modelo Conceitual

### Diagrama de Classes usando Mermaid

```mermaid
classDiagram
    Usuario <|-- Projeto
    Usuario <|-- Endereco
    Projeto <|-- Colaborador

class Usuario {
    +Int id
    +String nome
    +Date data_nascimento
    +String telefone
    +String email
    +String area_atuacao
    +String linkedin
    +String github
    +Serial endereco
    +Serial projeto

    -createUser()
    -deleteUser()
    -updateUser()
    -queryUser()
}

class Endereco {
    +Int id
    +String rua
    +Int numero_residencia
    +String bairro
    +String cidade
    +String estado
    +String cep
    +String complemento

    -newAddress()
    -updtaeAddress()
    -queryAddress()
}

class Projeto {
    +Int id
    +String titulo
    +String descricao
    +String discord

    -createNewProject()
    -updateProject()
    -acessProject()
    -deleteProject()
    -addCollaborator()
}

class Colaborador {
    +Int id
    +String name

    -createColaborador()
    -updateColaborador()
    -listColaborador()
}
```

### Descrição das Entidades

Descrição sucinta das entidades presentes no sistema.

| Entidade    | Descrição                                                                                                                                            |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Usuário     | Entidade abstrata para representar informações gerais dos Usuários: id, nome, data_nasc, telefone, email, área atuação, linkedin, github e endereço. |
| Endereço    | Entidade que representa um Endereço tem as informações: id, rua, número, bairro, cidade, estado, cep, complemento.                                   |
| Projeto     | Entidade que representa um Projeto tem as informações: id, título, tecnologia, descrição, discord e dono.                                            |
| Colaborador | Entidade que representa uma Colaborador tem as informações: id, usuario e projeto.                                                                   |

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

|   Tabela   | Colaborador                                                       |
| ---------- | ----------------------------------------------------------------- |
| Descrição  | Armazena as informações de um colaborador.                        |
| Observação | Colaboradores obrigatoriamente tem que fazer parte de um projeto. |

|  Nome         | Descrição                          | Tipo de Dado | Tamanho | Restrições de Domínio |
| ------------- | ---------------------------------- | ------------ | ------- | --------------------- |
| id            | identificador gerado pelo SGBD     | SERIAL       | ---     | PK / Identity         |
| usuario       | usuário vinculado ao colaborador   | SERIAL       | ---     | FK / Not Null         |
| projeto       | projeto vinculado ao colaborador   | SERIAL       | ---     | FK / Not Null         |
