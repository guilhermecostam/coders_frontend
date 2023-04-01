# documento de visão

## Equipe e Definição de Papéis

| Membro          | Papel                   | E-mail                            |
| --------------- | ----------------------- | --------------------------------- |
| Taciano         | Cliente Professor       | taciano@bsi.ufrn.br               |
| Jonathan Tauan  | Gestão, Desenvolvedor   | jonathan.maia.133@ufrn.edu.br     |
| Guilherme Costa | Analista, Testador      | guilherme.costa.134@ufrn.edu.br   |
| João Vitor      | Desenvolvedor, Gerente  | joao.vitor.dantas.085@ufrn.edu.br |
| Rusdrael Antony | Desenvolvedor, Testador | antony.freire.086@ufrn.edu.br     |
| José Victor     | Desenvolvedor, Analista | jose.victor@ufrn.edu.br           |

### Matriz de Competências

| Membro          | Competências                                          |
| --------------- | ----------------------------------------------------- |
| Jonathan Tauan  | Desenvolvedor, Gestão .NET, SQL, Angular, C#          |
| Guilherme Costa | Desenvolvedor, Testador Python, C#, PHP, Laravel      |
| João Vitor      | Desenvolvedor HTML, CSS, JavaScript, C, Python        |
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

| Requisito                                           | Descrição                                                                                                                                                                                                                     | Ator                   |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| RF001 - Manter um cadastro de Centros               | Um centro representa uma unidade administrativa da Universidade. Um centro tem código, nome, sigla, endereço e site.                                                                                                          | Administrador          |
| RF002 - Manter um cadastro de Departamentos         | Um departamento tem código, nome, sigla, endereço e o centro a qual pertence.                                                                                                                                                 | Administrador          |
| RF003 - Manter o cadastro de Salas                  | Uma sala tem um número, um nome, capacidade, tamanho, bloco e o centro a qual pertence.                                                                                                                                       | Administrador          |
| RF004 - Manter cadastro de Componentes Curriculares | Um componente curricular é de um tipo de componente. Um componente curricular tem: código, nome, ementa, departamento, carga horária e modalidade, equivalências e requisitos com outros componentes, data de criação.        | Administrador          |
| RF005 - Manter o cadastro de Horários de Aula       | Um horário tem: um dia de semana, um turno, uma ordem (ordenação/identificador), uma hora de início, uma hora de final                                                                                                        | Administrador          |
| RF006 - Manter o cadastro de professores            | um professor tem: matrícula, nome, e-mail, telefone e o departamento                                                                                                                                                          | Administrador          |
| RF007 - Manter cadastro de Turmas                   | Uma turma tem: código, professor, sala e horários (horário da turma). Uma turma é de um componente curricular. Uma turma tem um ou mais professores. Uma turma tem uma ou mais salas. Uma turma tem vários horários de aulas. | Chefes e Coordenadores |

### Modelo Conceitual

Abaixo apresentamos o modelo conceitual usando o **YUML**.

![Modelo UML](yuml/monitoria-modelo.png)

O código que gera o diagrama está [Aqui!](yuml/monitoria-yuml.md). O detalhamento dos modelos conceitual e de dados do projeto estão no [Documento de Modelos](doc-modelos.md).

#### Descrição das Entidades

## Lista de Requisitos Não-Funcionais

| Requisito                                 | Descrição                                        |
| ----------------------------------------- | ------------------------------------------------ |
| RNF001 - Deve ser acessível via navegador | Deve funcionar nos navegadores mais atuais       |
| RNF002 - Consultas devem ser eficientes   | O sistema deve executar as consultas rapidamente |

## Riscos

Preencher na tabela os riscos identificados para o início do projeto. Essa tabela deve ser atualizada ao final de cada iteração na reunião de acompanhamento.

| Data       | Risco                                                                 | Prioridade | Responsável | Status    | Providência/Solução                                                                     |
| ---------- | --------------------------------------------------------------------- | ---------- | ----------- | --------- | --------------------------------------------------------------------------------------- |
| 10/03/2018 | Não aprendizado das ferramentas utilizadas pelos componentes do grupo | Alta       | Todos       | Vigente   | Reforçar estudos sobre as ferramentas e aulas com a integrante que conhece a ferramenta |
| 10/03/2018 | Ausência por qualquer motivo do cliente                               | Média      | Gerente     | Vigente   | Planejar o cronograma tendo em base a agenda do cliente                                 |
| 10/03/2018 | Divisão de tarefas mal sucedida                                       | Baixa      | Gerente     | Vigente   | Acompanhar de perto o desenvolvimento de cada membro da equipe                          |
| 10/03/2018 | Implementação de protótipo com as tecnologias                         | Alto       | Todos       | Resolvido | Encontrar tutorial com a maioria da tecnologia e implementar um caso base do sistema    |

### Referências
