// Notas HTML / CSS

// ALFO: Inicia em uma linha e fecha em outra (ambos isoladamente). <--- Isso não faz parte do HTML (ANOTAÇÃO PESSOAL)
// CSS: Elemento que faz parte do CSS.

// <a></a>
// Isso é uma tag de conteúdo.
// No meio, é adicionado um nome (Ex: <a>Pagina Inicial</a>)
// Além disso, é necessário ter um link (Ex: <a href="index.html">Pagina Inicial</a>)
// Nesse caso, fiz um link para um arquivo local.
// Para linkar outras páginas da web, basta substituir 'index.html' por uma URL.

// Quando o conteúdo está no formato inline, significa que o conteúdo da tag é do tamanho do conteúdo que está nele.
// Já no formato block, o tamanho do conteúdo sempre será 100% do tamanho da página.

// <nav></nav>
// É um divisor de conteúdo, semelhante ao <header>.
// É um local onde vão os elementos de navegação do site.

// Quando escrevemos em maiúsculo diretamente no HTML significa que estamos gritando (destacando) o texto.
// Se esse não é o objetivo, e mesmo assim queremos deixar o texto em maiúsculo, usamos o seguinte código no CSS:

// CSS: text-transform: uppercase;
// Deixa o texto referente em maiúsculo.

// CSS: font-weight: bold;
// Deixa a fonte em negrito, sem alterar o HTML.

// CSS: font-size: 22px;
// Altera o tamanho da fonte. O valor 22px pode ser alterado.

// CSS: text-decoration: none;
// Remove o sublinhamento do texto (o sublinhamento é aplicado por padrão pelo navegador).

// CSS: margin: topo, direita, baixo, esquerda;
// Define um espaçamento externo. 
// Os nomes 'topo, direita, baixo, esquerda' são apenas para indicar a ordem. Devem ser substituídos por valores px (Ex: margin: 0, 0, 0, 15px;).

// O margin: auto centraliza o elemento como a div.
// Exemplo: margin: 0 auto;
// Topo e Baixo 0; Esquerda e Direita auto (se calculando sozinha).

// CSS: position: static;
// Posição padrão de um elemento (posição original). Nada será alterado após adicionar esse código, se o elemento estiver em sua posição original.

// CSS: position: relative;
// O elemento muda de posição, mas o ponto inicial se mantém o mesmo.
// Exemplo dentro do CSS:
// position: relative; top: 45px; left: 23px;

// CSS: position: absolute;
// Posição absoluta (em relação à página).
// Exemplo dentro do CSS:
// position: absolute; top: 0; right: 0;

// <main></main>
// Tag específica para o conteúdo principal da página, semelhante ao <nav> e <header>.

// CSS: box-sizing: border-box;
// Facilita e corrige operações com porcentagem e px (espaçamento lateral dentro do percentual).

// CSS: border-color: #000000;
// Define a cor da borda.

// CSS: border-width: 2px;
// Define a espessura da borda (pode ser alterado conforme necessário).

// CSS: border-style: solid;
// Define o estilo da borda (nesse caso, sólida). Outros estilos: dashed = tracejado; dotted = pontilhado.

// CSS: border: 2px solid #000000;
// Combina os atributos anteriores em um formato mais compacto.
// border: tamanho estilo cor.

// CSS: border-radius: 10px;
// Deixa as bordas arredondadas. Pode definir os arredondamentos individualmente (Ex: border-radius: 10px 30px 35px 50px;).

// Exemplo de CSS com :hover
// nav a:hover {
//   color: #C78C19;               // Cor: Amarelo mostarda.
//   text-decoration: underline;   // Ativa sublinhamento abaixo do texto.
// }
// O 'hover' é responsável por detectar a ação do mouse em um elemento (detecta a passagem do mouse).
// Dentro das {} você define as novas características do elemento (cor, fonte, etc.).

// Para o exemplo, nav a:hover indica onde queremos aplicar o efeito (no caso, a tag <a> dentro de <nav>).
// Alternativamente, você poderia usar uma class ou ID no hover (Ex: .nome:hover ou #nome:hover).

// Exemplo com :active
// .nome:active {
//   color: #32CD32;               // Cor: Verde-limão (limegreen).
// }
// '.nome' é um exemplo. 'active' atua quando o botão do mouse está pressionado no elemento.
// Isso aplica as configurações entre {}.

// Para aplicar uma mudança em outro elemento usando a mesma ação do mouse:
// .nome:active h2 {
//   // Código a ser aplicado em h2 quando .nome for pressionado
// }

// EXPLICANDO MELHOR:
// .nome:active - Mouse pressionado no elemento (.nome), aplica a configuração no mesmo.
// .nome:active h2 - Mouse pressionado em (.nome), aplica a configuração em outro elemento (h2).

// <footer></footer>
// Tag para o rodapé da página. O conteúdo inserido nele será apresentado no final da página, com funções semelhantes ao <header> e <nav>.

// CSS: background: #CCCCCC;
// Adiciona cor cinza no fundo do conteúdo. Alternativamente, pode-se usar uma imagem:
// CSS: background: url("bg.jpg");
// Adiciona uma imagem no fundo do conteúdo (bg.jpg é um exemplo de um arquivo local).
// Quando usamos imagens pequenas, o CSS replica a imagem até preencher todos os espaços.

// HTML: &copy;
// Símbolo de copyright. Este é um code (unicode), utilizado para emojis e outros caracteres especiais.
