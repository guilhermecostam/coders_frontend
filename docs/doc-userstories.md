# Documento Lista de User Stories

## Descrição

Este documento descreve os User Stories criados a partir da Lista de Requisitos no [Documento 001 - Documento de Visão](docs/doc-visao.md). Modelo de documento baseado nas características do processo easYProcess (YP).

### User Story US01 - Registro de usuários

|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve permitir que usuários realizem cadastros utilizado email ou user name, uma senha e seu nome para que este consiga ser reconhecido pelo sistema. |

| **Requisitos envolvidos**  |                            |
| -------------------------- | :------------------------- |
| RF001                      | Registro de usuários       |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade**            | Essencial                           | 
| **Estimativa**            | 8 h                                 | 
| **Tempo Gasto (real):**   | 10 h                                | 
| **Tamanho Funcional**     | 7 PF                                | 
| **Analista**              | Guilherme Costa                     | 
| **Desenvolvedor**         | Jonathan Tauan                      | 
| **Revisor**               | João Vitor                          | 
| **Testador**              | Rusdrael Antony                     | 


| Testes de Aceitação (TA) |                                           |
| ------------------------ | ----------------------------------------- |
| **Código**               | **Descrição**                             |
| **TA01.01**              | Teste de registro informando dados corretos  |
| **TA01.02**              | Teste de registro informando senha sem requisitos mínimos|
| **TA01.03**              | Teste de registro informando confirmação de senha difente|
| **TA01.04**              | Teste de registro informando email inválido|

### User Story US02 - Login

|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve ser capaz de realizar a autenticação de usuários por meio de um email ou user name e sua senha que foi registrada, devendo retornar um token para ser utilizado durante a sua interação com o sistema para autorização de determinados recursos.  |

| **Requisitos envolvidos** |                            |
| ------------------------- | :------------------------- |
| RF002                     | Login de usuários          |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade**            | Essencial                           | 
| **Estimativa**            | 6 h                                 | 
| **Tempo Gasto (real):**   | 5 h                                 | 
| **Tamanho Funcional**     | 5 PF                                | 
| **Analista**              | Rusdrael Antony                     | 
| **Desenvolvedor**         | Jonathan Tauan                      | 
| **Revisor**               | João Vitor                          | 
| **Testador**              | Rusdrael Antony                     | 


| Testes de Aceitação (TA) |                                           |
| ------------------------ | ----------------------------------------- |
| **Código**               | **Descrição**                             |
| **TA01.01**              | Teste de login infomando senha incorreta  |
| **TA01.02**              | Teste de login infomando usuário não registrado  |
| **TA01.03**              | Teste de login infomando senha e email corretos de um usuário registrado  |
| **TA01.04**              | Teste de login infomando senha e username corretos de um usuário registrado  |

### User Story US03 - Solicitação para ingressar em um Projeto

|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| Descrição     | Um usuário registrado no sistema deve conseguir solicitar para participar de um projeto.  |

| Requisitos envolvidos     |                                         |
| ------------------------- | :-------------------------------------- |
| RF016                     | Solicitação para ingressar a um projeto |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| Prioridade                | Essencial                           | 
| Estimativa                | 10 h                                | 
| Tempo Gasto (real):       | ...                                 | 
| Tamanho Funcional         | 5 PF                                | 
| Analista                  | Rusdrael Antony                     | 
| Desenvolvedor             | José Victor                         | 
| Revisor                   | João Vitor                          | 
| Testador                  | Jonathan Tauan                      | 


| Testes de Aceitação (TA) |                                           |
| ------------------------ | ----------------------------------------- |
| Código                   | Descrição                                 |
| TA01.01                  | ...                                       |

### User Story US04 - Manter Projeto

|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve manter um cadastro de projeto que pode ser criado após o usuário ter acesso à plataforma. Um projeto tem os atributos name, id, description, status, link_github, link_discord e creation_date. Além disso o usuário criador poderá alterar alguns dados do projeto, como o nome ou a descrição.  |

| **Requisitos envolvidos**  |                            |
| -------------------------- | :------------------------- |
| RF006                      | Abrir projeto              |
| RF007                      | Atualizar dados do projeto |
| RF008                      | Acessar dados do projeto   |
| RF009                      | Excluir projeto            |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade**            | Essencial                           | 
| **Estimativa**            | 12 h                                | 
| **Tempo Gasto (real):**   | ...                                 | 
| **Tamanho Funcional**     | 7 PF                                | 
| **Analista**              | Rusdrael Antony                     | 
| **Desenvolvedor**         | Guilherme Costa                     | 
| **Revisor**               | Jonathan Tauan                      | 
| **Testador**              | João Vitor                          | 


| Testes de Aceitação (TA) |                                           |
| ------------------------ | ----------------------------------------- |
| **Código**               | **Descrição**                             |
| **TA01.01**              | ...                                       |

### User Story US05 - Manter Colaborador (Relação UsuarioProjeto)

|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| Descrição | O sistema deve manter um cadastro de colaborador para cada usuário vinculado a um projeto. Um registro da tabela Colaborador deverá ter os seguintes atributos: id, id_projeto, id_usuario.  |

| Requisitos envolvidos      |                            |
| -------------------------- | :------------------------- |
| RF010                      | Adicionar colaborador      |
| RF011                      | Excluir colaborador        |
| RF012                      | Recusar colaborador        |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| Prioridade                | Essencial                           | 
| Estimativa                | 08 h                                | 
| Tempo Gasto (real):       | ...                                 | 
| Tamanho Funcional         | 5 PF                                | 
| Analista                  | Jonathan Tauan                      | 
| Desenvolvedor             | Rusdrael Antony                     | 
| Revisor                   | João Vitor                          | 
| Testador                  | Guilherme Costa                     | 


| Testes de Aceitação (TA) |                                           |
| ------------------------ | ----------------------------------------- |
| Código                   | Descrição                                 |
| TA01.01                  | ...                                       |

### User Story US06 - Buscar Tecnologia

|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| Descrição     | Ao manter um projeto, o sistema deve buscar do repositório no GitHub do projeto as tecnologias utilizadas no mesmo e mostrar esses dados.   |

| Requisitos envolvidos     |                            |
| ------------------------- | :------------------------- |
| RF013                     | Buscar tecnologia          |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| Prioridade                | Desejável                           | 
| Estimativa                | 05 h                                | 
| Tempo Gasto (real):       | ...                                 | 
| Tamanho Funcional         | 3 PF                                | 
| Analista                  | Jonathan Tauan                      | 
| Desenvolvedor             | João Vitor                          | 
| Revisor                   | José Victor                         | 
| Testador                  | Guilherme Costa                     | 


| Testes de Aceitação (TA) |                                           |
| ------------------------ | ----------------------------------------- |
| Código                   | Descrição                                 |
| TA01.01                  | ...                                       |

### User Story US07 - Restringir Acessos e utilizar autorizações 

|               |                                                                                                 |
| ------------- | :---------------------------------------------------------------------------------------------- |
| Descrição     | Um usuário registrado no sistema deve ter permissões para acessar determinadas funcionalidades.  |

| Requisitos envolvidos     |                                     |
| ------------------------- | :---------------------------------- |
| RF014                     | Restrições de Acesso/Autorizações   |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| Prioridade                | Essencial                           | 
| Estimativa                | 03 h                                | 
| Tempo Gasto (real):       | ...                                 | 
| Tamanho Funcional         | 3 PF                                | 
| Analista                  | Jonathan Tauan                      | 
| Desenvolvedor             | João Vitor                          | 
| Revisor                   | Rusdrael Antony                     | 
| Testador                  | José Victor                         | 


| Testes de Aceitação (TA) |                                           |
| ------------------------ | ----------------------------------------- |
| Código                   | Descrição                                 |
| TA01.01                  | ...                                       |


### User Story US08 - Recuperação de Senha 

|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| Descrição     | Um usuário registrado no sistema deve conseguir atualizar sua senha caso ncessário.  |

| Requisitos envolvidos     |                      |
| ------------------------- | :------------------- |
| RF015                     | Recuperação de senha |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| Prioridade                | Desejável                           | 
| Estimativa                | 04 h                                | 
| Tempo Gasto (real):       | ...                                 | 
| Tamanho Funcional         | 3 PF                                | 
| Analista                  | Rusdrael Antony                     | 
| Desenvolvedor             | Guilherme Costa                     | 
| Revisor                   | Jonathan Tauan                      | 
| Testador                  | José Victor                         | 


| Testes de Aceitação (TA) |                                           |
| ------------------------ | ----------------------------------------- |
| Código                   | Descrição                                 |
| TA01.01                  | ...                                       |

### User Story US09 - Manter Usuário

|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve manter um cadastro de usuário que tem acesso a plataforma via login e senha. Um usuário tem os atributos name, id, email, username, data de nascimento, status, password, avatarURL. O email será o login e ele pode registrar-se diretamente na plataforma, o avatarURL é um link para uma foto de seu perfil. Além disso o usuário poderá alterar alguns dados, como o e-mail ou a senha.  |

| **Requisitos envolvidos**  |                            |
| -------------------------- | :------------------------- |
| RF003                      | Apagar usuário             |
| RF004                      | Acessar dados do usuário   |
| RF005                      | Atualizar dados do usuário |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade**            | Essencial                           | 
| **Estimativa**            | 12 h                                | 
| **Tempo Gasto (real):**   | ...                                 | 
| **Tamanho Funcional**     | 7 PF                                | 
| **Analista**              | Jonathan Tauan                      | 
| **Desenvolvedor**         | José Victor                         | 
| **Revisor**               | Guilherme Costa                     | 
| **Testador**              | Jonathan Tauan                      | 


| Testes de Aceitação (TA) |                                           |
| ------------------------ | ----------------------------------------- |
| **Código**               | **Descrição**                             |
| **TA01.01**              | ...                                       |



### User Story US10 - Confirmarção de e-mail

|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| Descrição     | Um usuário registrado no sistema deve ter seu email confirmado para conseguir participar ou criar projetos.   |

| Requisitos envolvidos     |                        |
| ------------------------- | :--------------------- |
| RF017                     | Confirmarção de e-mail |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| Prioridade                | Essencial                           | 
| Estimativa                | 04 h                                | 
| Tempo Gasto (real):       | ...                                 | 
| Tamanho Funcional         | 3 PF                                | 
| Analista                  | Jonathan Tauan                      | 
| Desenvolvedor             | Rusdrael Antony                     | 
| Revisor                   | José Victor                         | 
| Testador                  | João Vitor                          | 


| Testes de Aceitação (TA) |                                           |
| ------------------------ | ----------------------------------------- |
| Código                   | Descrição                                 |
| TA01.01                  | ...                                       |
