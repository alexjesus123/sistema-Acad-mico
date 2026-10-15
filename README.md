# Sistema de Gerenciamento Acadêmico - Atividade 06

Evolução direta da Atividade 05: HTML semântico, formulários, CSS externo,
Flexbox e agora CSS Grid. Desenvolvimento com auxílio de IA.

## Executar
Abra index.html no navegador. Protótipo estático; os formulários não
salvam dados e o envio POST exige servidor. Use informações fictícias.

## Grid Container e Grid Items
O div.dashboard-grid é o contêiner. Seus quatro article.card são os itens.
A grade tem quatro colunas e gap de 16px. O primeiro card ocupa duas colunas.
As listagens reutilizam div.lista-grid, com três colunas iguais.
Comentários no HTML e no CSS identificam os papéis e explicam os experimentos.

## Comparações da atividade
- repeat(4, 1fr): quatro repetições de uma trilha com uma fração do espaço
  disponível. As quatro trilhas são iguais. O destaque abrange duas trilhas.
- Sem o destaque, repeat(2, 1fr) distribui quatro cards em duas linhas de dois;
  repeat(4, 1fr) os distribui em uma linha. Com span 2 ativo, ele ocupa uma linha
  inteira na grade de duas colunas. Na grade de quatro, ficam três cards na
  primeira linha e um na segunda. O destaque inclui também o vão entre colunas.
- 2fr 1fr distribui o espaço livre na proporção 2:1. 1fr 1fr usa a proporção 1:1.
  O espaço dos gaps é descontado antes da divisão; mínimos do conteúdo podem
  influenciar a distribuição. Desative o span ao isolar esse experimento.
- gap 32px aumenta as distâncias horizontais e verticais em relação a 16px,
  reduzindo o espaço disponível para as trilhas dentro do mesmo contêiner.
- row-gap 24px e column-gap 12px produzem 24px entre linhas e 12px entre colunas.
- span 2 define quantas colunas um item ocupa sem fixar o início; 1 / 3 fixa
  o início na primeira linha de grade e o fim na terceira, abrangendo duas
  colunas. No primeiro item são equivalentes visualmente; noutros podem
  mudar a posição, provocar lacunas ou afetar o posicionamento automático.

## Flexbox versus Grid
Menu (nav ul): Flexbox, pois os links formam uma sequência em um eixo.
Botões (.acoes): Flexbox, pois as ações formam uma sequência alinhada ao final.
Cabeçalho (.cabecalho): Flexbox para alinhar título e informação complementar.
Dashboard (.dashboard-grid): Grid para controlar linhas, colunas e o destaque.
Listagens (.lista-grid): Grid para alinhar os registros em três colunas.

## Roteiro dos testes
No DevTools, selecione .dashboard-grid e ative a sobreposição de grade.
Compare duas e quatro colunas, depois 2fr 1fr e 1fr 1fr. Desative temporariamente
.card-destaque para isolar o efeito das colunas. Compare gap 16px e 32px;
por fim teste row-gap e column-gap separados. Compare span 2 com 1 / 3
no primeiro card e em outro item. Restaure a configuração final ao concluir.
As comparações acima descrevem o comportamento esperado do CSS; não são
registros inventados de uma sessão de DevTools.

## Configuração final
Dashboard: quatro colunas, gap 16px, primeiro card com span 2.
Listagens: três colunas, gap 16px. Menu e ações preservam Flexbox.
Não foram adicionados JavaScript, banco de dados ou media queries.
A grade fixa corresponde ao exercício; responsividade avançada fica para outra etapa.
