# Design Patterns

Pequenos projetos de referência que adaptei do Java para o Typescript.
Cada diretório principal contém um design pattern.

Padrões atualmente disponíveis:

- Strategy: Define um conjunto de algoritmos encapsulados, intercambiáveis e variáveis entre as classes que os utilizam.

- Observer: Define uma relação "um para muitos" entre um conjunto de objetos. Quando o estado de um dos objetos é alterado todos seus dependentes são notificados.

##### Antes de iniciar

Instalar o transpilador/executor **ts-node**

    npm i -g ts-node

##### Os padrões design

Executar o arquivo main.ts relativo a cada diretório

    ts-node main.ts

##### UML

![Conectores UML](https://raw.githubusercontent.com/DoctorRu/design-patterns/master/conectores.gif)

- Associação : São relacionamentos estruturais entre instâncias e especificam que objetos de uma classe estão ligados a objetos de outras classes. Podemos ter associação uniaria , binária , etc.

- Dependência - São relacionamentos de utilização no qual uma mudança na especificação de um elemento pode alterar a especificação do elemento dependente. A dependência entre classes indica que os objetos de uma classe usam serviços dos objetos de outra classe.

- Generalização (herança : simples ou composta) - Relacionamento entre um elemento mais geral e um mais específico. Onde o elemento mais específico herda as propriedades e métodos do elemento mais geral. A relação de generalização também é conhecida como herança no modelo a objetos. Como a relação de dependência, ela existe só entre as classes. Um objeto particular não é um caso geral de um outro objeto, só conceitos (classes no modelo a objetos) são generalização de outros conceitos.

- Agregação Regular - tipo de associação ( é parte de , todo/parte) onde o objeto parte é um atributo do todo ; onde os objetos partes somente são criados se o todo ao qual estão agregados seja criado. Pedidos é composto por itens de pedidos.

- Composição - Relacionamento entre um elemento ( o todo) e outros elementos (as partes) onde as parte só podem pertencer ao todo e são criadas e destruídas com ele.
