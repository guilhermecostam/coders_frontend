# Documento Lista de User Stories

## Descrição

Este documento descreve os User Stories criados a partir da Lista de Requisitos no [Documento 001 - Documento de Visão](docs/doc-visao.md). Modelo de documento baseado nas características do processo easYProcess (YP).

### User Story US01 - Manter Usuário

|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve manter um cadastro de usuário que tem acesso a plataforma via login e senha. Um usuário tem os atributos name, id, email, username, data de nascimento, status, password, avatarURL. O email será o login e ele pode registrar-se diretamente na plataforma, o avatarURL é um link para uma foto de seu perfil. Além disso o usuário poderá alterar alguns dados, como o e-mail ou a senha.  |

| **Requisitos envolvidos** |                            |
| ------------------------- | :------------------------- |
| RF01                      | Criar usuário              |
| RF02                      | Apagar usuário             |
| RF03                      | Acessar dados do usuário   |
| RF04                      | Atualizar dados do usuário |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| **Prioridade**            | Essencial                           | 
| **Estimativa**            | 12 h                                | 
| **Tempo Gasto (real):**   | ...                                 | 
| **Tamanho Funcional**     | 7 PF                                | 
| **Analista**              | Guilherme Costa                     | 
| **Desenvolvedor**         | Jonathan Tauan                      | 
| **Revisor**               | João Vitor                          | 
| **Testador**              | Rusdrael Antony                     | 


| Testes de Aceitação (TA) |                                           |
| ------------------------ | ----------------------------------------- |
| **Código**               | **Descrição**                             |
| **TA01.01**              | ...                                       |

### User Story US02 - Manter Projeto

|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| **Descrição** | O sistema deve manter um cadastro de projeto que pode ser criado após o usuário ter acesso à plataforma. Um projeto tem os atributos name, id, description, status, link_github, link_discord e creation_date. Além disso o usuário criador poderá alterar alguns dados do projeto, como o nome ou a descrição.  |

| **Requisitos envolvidos** |                            |
| ------------------------- | :------------------------- |
| RF05                      | Abrir projeto              |
| RF06                      | Atualizar dados do projeto |
| RF07                      | Acessar dados do projeto   |
| RF08                      | Excluir projeto            |

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

### User Story US03 - Manter Colaborador (UsuarioProjeto)

|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| Descrição | O sistema deve manter um cadastro de colaborador para cada usuário vinculado a um projeto. Um registro da tabela UsuarioProjeto deverá ter os seguintes atributos: id, id_projeto, id_usuario. Além disso o usuário criador poderá alterar alguns dados do projeto, como o nome ou a descrição.  |

| Requisitos envolvidos |                            |
| ------------------------- | :------------------------- |
| RF09                      | Adicionar colaborador      |
| RF10                      | Excluir colaborador        |
| RF11                      | Recusar colaborador        |

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

### User Story US04 - Manter Tecnologia

|               |                                                                |
| ------------- | :------------------------------------------------------------- |
| Descrição | O sistema deve manter um cadastro de tecnologias para que cada usuário possa vincular ao seu projeto, indicando as tecnologias que estão sendo utilizadas no mesmo, ou vinculadas a seu perfil, indicando quais as tecnologias que o usuário domina ou possui interesse. Um registro da tabela tecnologia deverá ter os seguintes atributos: id, id_projeto, id_usuario. Somente o usuário criador poderá alterar a tecnologia escolhida no projeto e qualquer usuário pederá escolher as tecnologias do seu próprio perfil.  |

| Requisitos envolvidos     |                            |
| ------------------------- | :------------------------- |
| RF14                      | Adicionar tecnologia       |
| RF15                      | Remover tecnologia         |

|                           |                                     |
| ------------------------- | ----------------------------------- | 
| Prioridade                | Essencial                           | 
| Estimativa                | 08 h                                | 
| Tempo Gasto (real):       | ...                                 | 
| Tamanho Funcional         | 5 PF                                | 
| Analista                  | Jonathan Tauan                      | 
| Desenvolvedor             | João Vitor                          | 
| Revisor                   | José Victor                         | 
| Testador                  | Guilherme Costa                     | 


| Testes de Aceitação (TA) |                                           |
| ------------------------ | ----------------------------------------- |
| Código                   | Descrição                                 |
| TA01.01                  | ...                                       |

