# Coders Front-end

Repositório para a Disciplina Engenharia de Software II.

## Equipe e Definição de Papéis

| Membro          | Papel                   | E-mail                            | GitHub               |
| --------------- | ----------------------- | --------------------------------- | -------------------- |
| Taciano         | Cliente Professor       | taciano@bsi.ufrn.br               | tacianosilva         |
| Jonathan Tauan  | Analista, Desenvolvedor | jonathan.maia.133@ufrn.edu.br     | jtauanpm             |
| Guilherme Costa | Analista, Testador      | guilherme.costa.134@ufrn.edu.br   | guilhermecostam      |
| João Vitor      | Desenvolvedor, Gerente  | joao.vitor.dantas.085@ufrn.edu.br | JoaoVitorGomesDantas |
| Rusdrael Antony | Desenvolvedor, Testador | antony.freire.086@ufrn.edu.br     | rusdrael             |
| José Victor     | Desenvolvedor, Analista | jose.victor@ufrn.edu.br           | victormedeiros1      |

### Matriz de Competências

| Membro          | Competências                                          |
| --------------- | ----------------------------------------------------- |
| Jonathan Tauan  | Desenvolvedor, Gestão .NET, SQL, Angular, C#          |
| Guilherme Costa | Desenvolvedor, Testador Python, C#, PHP, Laravel      |
| João Vitor      | Desenvolvedor, HTML, CSS, JavaScript, C, Python       |
| Rusdrael Antony | Desenvolvedor, Testador Python, JavaScript, C#        |
| José Victor     | Desenvolvedor, Analista, HTML, CSS, JavaScript, React |

## Descrição do Projeto

O sistema a ser desenvolvido tem como objetivo fornecer uma plataforma para facilitar o encontro de estudantes e profissionais de tecnologia que buscam se aventurar em projetos reais, propostos por outros usuários, promovendo network e oportunidades para demonstrarem suas habilidades técnicas.

## Perfis dos Usuários

O sistema poderá ser utilizado por diversos usuários. Temos os seguintes perfis/atores:

| Perfil  | Descrição                                                                                                                                                                                                                                                             |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Usuário | Terá um cadastro no sistema, o usuário poderá publicar suas ideias de projetos para que outros usuários possam se interessar no desenvolvimento em conjunto ou buscar por projetos postados que tem como requisitos que se assemelham com suas competências técnicas. |

## Lista de Requisitos Funcionais

| Requisito                                  | Descrição                                                                                                                                 | Ator    |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| RF001 - Criar usuário                      | O usuário pode criar uma conta na plataforma, para isso é necessário email e senha.                                                       | Usuário |
| RF002 - Apagar usuário                     | O usuário pode excluir sua conta acessando as configurações da conta.                                                                     | Usuário |
| RF003 - Acessar dados do usuário           | As informações do usuário podem ser solicitadas para serem exibidas na interface.                                                         | Usuário |
| RF004 - Atualizar dados do usuário         | O usuário pode acessar as configurações da sua conta para fazer a atualização dos seus dados.                                             | Usuário |
| RF005 - Abrir projeto                      | Um usuário pode criar um projeto para que outros possam se candidatar. Para um projeto ser criado é necessário ter nome e descrição.      | Usuário |
| RF006 - Atualizar dados do projeto         | Elementos como nome, descrição, tecnologias e contribuintes podem ser modificados pelo dono do projeto ou outras pessoas com autorização. | Usuário |
| RF007 - Acessar dados do projeto           | As informações do projeto podem ser solicitadas para serem exibidas na interface.                                                         | Usuário |
| RF008 - Excluir projeto                    | Um projeto pode ser encerrado pelo usuário que o criou.                                                                                   | Usuário |
| RF009 - Adicionar colaborador              | O dono do projeto ou pessoa com autorização pode aceitar usuários que querem participar do seu projeto.                                   | Usuário |
| RF010 - Excluir colaborador                | O dono do projeto ou pessoa com autorização pode remover um usuário do projeto.                                                           | Usuário |
| RF011 - Recusar colaborador                | O dono do projeto ou pessoa com autorização pode recusar um usuário candidato ao seu projeto.                                             | Usuário |
| RF012 - Avaliar usuário                    | Quando acabar o projeto um usuário poderá avaliar um colaborador.                                                                         | Usuário |
| RF013 - Conectar usuário com colaborador   | Quando um colaborador entra em um projeto conectar ele com o usuário.                                                                     | Usuário |
| RF014 - Adicionar tecnologia               | Quando um colaborador entra em um projeto conectar ele com o usuário.                                                                     | Usuário |
| RF015 - Remover tecnologia                 | O usuário pode remover uma tecnologia associada ao seu perfil.                                                                            | Usuário |
| RF016 - Listar repositórios do usuário     | Listar os repositórios do usuários e linguagens que ele possui.                                                                           | Usuário |
| RF017 - Registro de usuários               | Permitir que os usuários se registrem na plataforma fornecendo informações básicas, como nome, email e senha.                             | Usuário |
| RF018 - Autenticação de usuário            | O usuário deve conseguir realizar login e ser reconhecido pelo sistema para ter autorização ao tentar utilizar certos recursos.           | Usuário |
| RF019 - Participação em projetos           | O usuário deve conseguir se inscrever como colaborador de um projeto.                                                                     | Usuário |
| RF020 - Restrições de Acesso/Autorizações  | Limitar o acesso a determinadas áreas da plataforma apenas a usuários autenticados ou com permissões específicas.                         | Usuário |
| RF021 - Recuperação de senha               | O usuário deve conseguir recuperar sua senha caso necessário.                                                                             | Usuário |

### Modelo Conceitual

O modelo conceitual usando o **Mermaid**, pode ser acessado clicando [aqui](./doc-modelos.md).

#### Descrição das Entidades

## Lista de Requisitos Não-Funcionais

| Requisito                                 | Descrição                                                            |
| ----------------------------------------- | -------------------------------------------------------------------- |
| RNF001 - Deve ser acessível via navegador | Deve funcionar nos navegadores mais atuais                           |
| RNF002 - Consultas devem ser eficientes   | O sistema deve executar as consultas rapidamente                     |
| RNF003 - O servidor deve suportar         | O sistema deve comportar certa quantidade de pessoas simultaneamente |

## Riscos

Preencher na tabela os riscos identificados para o início do projeto. Essa tabela deve ser atualizada ao final de cada iteração na reunião de acompanhamento.

| Data       | Risco                                                                 | Prioridade | Responsável | Status    | Providência/Solução                                                                     |
| ---------- | --------------------------------------------------------------------- | ---------- | ----------- | --------- | --------------------------------------------------------------------------------------- |
| 27/03/2023 | Não aprendizado das ferramentas utilizadas pelos componentes do grupo | Alta       | Todos       | Vigente   | Reforçar estudos sobre as ferramentas e aulas com a integrante que conhece a ferramenta |
| 27/03/2023 | Ausência por qualquer motivo do cliente                               | Média      | Gerente     | Vigente   | Planejar o cronograma tendo em base a agenda do cliente                                 |
| 27/03/2023 | Divisão de tarefas mal sucedida                                       | Baixa      | Gerente     | Vigente   | Acompanhar de perto o desenvolvimento de cada membro da equipe                          |
| 27/03/2023 | Implementação de protótipo com as tecnologias                         | Alto       | Todos       | Resolvido | Encontrar tutorial com a maioria da tecnologia e implementar um caso base do sistema    |
