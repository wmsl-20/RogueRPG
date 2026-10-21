# RogueRPG

Um RPG de navegador com elementos roguelite, desenvolvido em JavaScript.

**Versão:** 2.3.5

**Jogar:** https://wmsl-20.github.io/RogueRPG/

## 1. Como começar

1. Escolha um dos quatro slots de save.
2. Selecione uma classe.
3. Defina o nome e o gênero do personagem.
4. Comece a aventura e escolha suas rotas.
5. Derrote inimigos, obtenha experiência e moedas, encontre equipamentos e prepare-se para os chefes.

O progresso é salvo no armazenamento local do navegador. Os saves são independentes, mas não são sincronizados automaticamente entre navegadores ou dispositivos.

## 2. Classes disponíveis

Cada classe possui atributos, resistências e habilidades próprias.

### ⚔️ Guerreiro

Especialista em sobrevivência e combate físico.

**Atributos iniciais**
- Vida: 120
- Dano base: 18
- Resistência física: 10%
- Resistência mágica: 0%
- Velocidade: 10
- Chance crítica: 5%
- Multiplicador crítico: 2x
- Curas básicas: 1

**Habilidade: Fúria**

Dobra o dano, a velocidade e a chance crítica enquanto reduz pela metade as resistências positivas. A habilidade dura até o fim do combate e pode ser ativada quando a vida está em 10% ou menos, com o limite aumentando conforme o nível.

### 🏹 Arqueiro

Especialista em velocidade, acertos críticos e armas de longo alcance.

**Atributos iniciais**
- Vida: 100
- Dano base: 22
- Resistência física: 6%
- Resistência mágica: 0%
- Velocidade: 15
- Chance crítica: 20%
- Multiplicador crítico: 2x
- Curas básicas: 2

**Habilidade: Mil Flechas**

Realiza quatro acertos críticos em cada inimigo vivo do combate. Possui recarga de seis salas. Ao subir de nível, o Arqueiro também melhora a recarga das armas de longo alcance, até o limite previsto pelo sistema.

### 🔮 Mago

Especialista em dano mágico e gerenciamento de mana.

**Atributos iniciais**
- Vida: 80
- Mana: 100
- Dano base: 26
- Resistência física: 3%
- Resistência mágica: 8%
- Velocidade: 8
- Chance crítica: 10%
- Multiplicador crítico: 2,5x
- Curas básicas: 3
- Poções básicas de mana: 2

**Habilidade: Explosão Arcana**

Consome 60 de mana e causa dano mágico crítico a todos os inimigos vivos. A habilidade utiliza o multiplicador crítico do personagem e um multiplicador adicional de 3x.

### ☠️ Necromante

Especialista em dano mágico, execução de inimigos enfraquecidos e invocação de espíritos.

**Atributos iniciais**
- Vida: 75
- Mana: 100
- Dano base: 35
- Resistência física: 0%
- Resistência mágica: 12%
- Velocidade: 8
- Chance crítica: 10%
- Multiplicador crítico: 2,5x
- Curas básicas: 2
- Poções básicas de mana: 2

**Habilidade 1: Roubar Alma**

Derrota instantaneamente o inimigo-alvo quando ele está abaixo de 25% da vida. Cada execução concede uma alma, até o limite de quatro.

**Habilidade 2: Invocar Almas**

Consome 65 de mana e duas almas para invocar dois espíritos. Eles atacam os inimigos junto com o jogador até o fim do combate.

### 🛡️ Paladino

Guerreiro sagrado que usa fé para atacar e se recuperar durante a batalha.

**Atributos iniciais**
- Vida: 100
- Dano base: 14
- Resistência física: 7%
- Resistência mágica: 0%
- Velocidade: 8
- Chance crítica: 8%
- Multiplicador crítico: 2x
- Curas básicas: 2
- Fé: 100

O Paladino começa com a Maça sagrada, que concede +5 de dano físico.

**Habilidade 1: Golpe Sagrado**

Consome 40 de fé e causa dano mágico com +24 de dano base. Ignora 30% da resistência mágica do alvo.

**Habilidade 2: Bênção**

Consome 50 de fé e ativa roubo de vida: ataques normais recuperam 25% do dano causado até o fim do combate.

A fé recupera 25% do que foi gasto após uma vitória, é restaurada completamente nos acampamentos e volta ao máximo ao subir de nível. Cada nível também aumenta a fé máxima em 10.

## 3. Atributos e resistências

O sistema de defesa utiliza resistências percentuais separadas:

- **Resistência física:** reduz o dano de ataques físicos.
- **Resistência mágica:** reduz o dano de ataques mágicos.
- **Vulnerabilidade:** resistência negativa, que aumenta o dano recebido.

As resistências do personagem podem ser combinadas com os bônus de armaduras e escudos equipados.

O sistema limita as resistências entre -50% e 75%.

Exemplos:
- 20% de resistência reduz um dano de 100 para 80.
- 50% de resistência reduz um dano de 100 para 50.
- -15% de resistência aumenta um dano de 100 para 115.

Ao subir de nível, o personagem aumenta ambas as resistências em um ponto, além de receber outros bônus.

## 4. Armas, armaduras e escudos

O inventário permite consultar, equipar e desequipar equipamentos.

A loja compara os equipamentos oferecidos com os itens atualmente equipados e identifica se são melhores, piores ou equivalentes.

### Armas

As armas aumentam o dano e podem oferecer propriedades especiais, como ataques múltiplos, dano em área ou efeitos de veneno.

Algumas armas são vinculadas a uma classe. Usar uma arma vinculada a outra classe reduz seu dano em 25%.

### Armaduras

Podem oferecer resistência física, resistência mágica, bônus de mana, regeneração de mana ou penalidades de velocidade.

### Escudos

Concedem resistências e podem reduzir a velocidade do personagem. Alguns também possuem chance de bloquear completamente ataques físicos.

O bloqueio aleatório dos escudos não se aplica a ataques mágicos.

### Equipamentos especiais

O Minotauro pode conceder equipamentos exclusivos, como seu machado duplo, sua armadura e seu escudo.

## 5. Sistema de combate

O jogador pode realizar diferentes ações durante uma batalha.

### Atacar

Executa um ataque utilizando o dano do personagem e os bônus da arma. O dano final depende do tipo de ataque e da resistência do inimigo.

Armas de longo alcance podem exigir recarga. Armas com múltiplos disparos permitem distribuir os tiros entre alvos selecionados.

### Defender

Reduz o dano recebido pela metade. Se a velocidade efetiva do personagem for superior à do atacante, o dano pode ser anulado.

Durante a recarga de uma arma, essa vantagem de velocidade é limitada: o dano é reduzido pela metade, em vez de ser anulado.

### Curar

As curas básicas recuperam 50% da diferença entre a vida atual e a vida máxima.

Poções compradas na loja também podem ser utilizadas durante o combate e recuperam até 50% da vida máxima.

### Usar poção de mana

Recupera até 70% da mana máxima. Em contrapartida, reduz o dano mágico em 30% durante o período inicial do efeito, com a penalidade diminuindo nos turnos seguintes.

### Habilidades especiais

As habilidades variam conforme a classe e podem consumir mana, utilizar recargas ou depender de condições específicas.

### Fugir

Não existe uma ação de fuga disponível na interface atual; a progressão é feita por meio das rotas da aventura.

## 6. Inimigos e efeitos negativos

Os inimigos possuem atributos próprios, incluindo vida, dano, velocidade, experiência, recompensas e resistências.

Alguns exemplos:
- **Slime:** vulnerável a dano mágico.
- **Zumbi:** possui resistência física.
- **Esqueleto:** vulnerável a dano físico e resistente a dano mágico.
- **Orc:** possui resistência física elevada.
- **Mago Inimigo:** utiliza dano mágico.
- **Troll:** possui resistências físicas e mágicas.

Os inimigos também podem aplicar efeitos negativos:

- **Pegajoso:** reduz a velocidade de ação.
- **Lentidão:** reduz a velocidade.
- **Veneno:** causa dano ao longo dos turnos.
- **Sangramento:** causa dano contínuo e reduz a velocidade.
- **Queimando:** causa dano contínuo.

As resistências e os efeitos podem variar de acordo com o inimigo e o encontro.

## 7. Rotas e exploração

A aventura é dividida em andares, cada um com salas e escolhas de rota.

### ⚔️ Combate

Enfrente inimigos comuns para obter experiência e moedas.

### ⚔️ Elite

Enfrente inimigos mais fortes em troca de recompensas maiores. Orcs e trolls aparecem nos encontros de elite.

### ◆ Loja

Compre armas, armaduras, escudos e consumíveis. Cada visita possui um estoque limitado, que pode ser atualizado mediante pagamento. O custo da atualização dobra a cada uso na mesma visita.

### 🔥 Acampamento

Recupera toda a vida, a mana e as cargas dos consumíveis. Normalmente fica disponível a cada cinco salas.

### ☠️ Chefe

O chefe fica disponível após a progressão inicial do andar e se torna obrigatório ao atingir a sala 30. É possível adiar o confronto enquanto houver rotas disponíveis.

O Minotauro é o primeiro chefe. Outros chefes incluem o Dragão e a Hidra.

Ao derrotar um chefe, o personagem avança para o próximo andar, onde os inimigos ficam mais fortes.

## 8. Experiência e evolução

Os inimigos derrotados concedem experiência e moedas.

Ao subir de nível, o personagem recebe:
- Aumento de 12% na vida máxima.
- Aumento de 12% no dano base.
- +1 de resistência física e mágica.
- +1 de velocidade.
- Recuperação de vida e recursos.
- Uma cura adicional a cada três níveis.
- Para classes mágicas, +10 de mana máxima por nível e uma poção adicional a cada três níveis.

O excesso de experiência é preservado, permitindo subir vários níveis após uma recompensa grande.

## 9. Morte e progressão roguelite

Quando a vida chega a zero, a aventura termina e aparece a tela de Game Over.

Ao recomeçar a run:
- O nível e a experiência acumulada são mantidos.
- As curas e poções básicas disponíveis são mantidas, respeitando seus limites.
- As moedas são perdidas.
- Os equipamentos e itens obtidos durante a run são perdidos.
- O progresso do mapa e do andar é reiniciado.

Itens que não pertencem à run atual e o equipamento inicial da classe são preservados de acordo com as regras do inventário.

## 10. Saves e continuidade

O jogo oferece quatro slots independentes de gravação no armazenamento local do navegador.

O sistema salva o progresso da aventura, incluindo a fase atual, a rota, o inventário e o estado do combate.

Se a página for fechada durante uma batalha, o jogo tenta restaurar o encontro salvo ao reabrir o slot.

**Atenção:** limpar os dados do navegador ou utilizar outro dispositivo pode impedir o acesso aos saves locais.

## 11. Sobre o projeto

RogueRPG é um projeto de estudo desenvolvido enquanto seu criador aprende JavaScript. As mecânicas podem mudar conforme o desenvolvimento, a correção de bugs e o balanceamento.

Problemas, inconsistências e sugestões podem ser acompanhados pelo repositório oficial:

https://github.com/wmsl-20/RogueRPG
