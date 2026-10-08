# Possível RPG

> ⚠️ **O projeto ainda está no início do desenvolvimento.**
>
> Este RPG está sendo desenvolvido como um projeto de estudo enquanto aprendo JavaScript. Muitas mecânicas ainda estão em desenvolvimento e podem sofrer alterações, ser balanceadas ou até desaparecer porque aparentemente criar um jogo exige fazer 47 sistemas diferentes ao mesmo tempo.

## 🎮 Jogue

🔗( https://wmsl-20.github.io/RogueRPG/ )

# Manual do Jogador: Guia Completo de Jogabilidade

Este documento apresenta as diretrizes formais e a estrutura de funcionamento do jogo RogueRPG. O objetivo deste manual é detalhar os sistemas de classes, mecânicas de combate, progressão de atributos, exploração de mapas e gestão de inventário.

---

## 1. Criação de Personagem e Classes

Ao iniciar a aventura, deve escolher a sua classe e definir o nome e o género da sua personagem. Cada classe possui atributos de base específicos e dinâmicas de jogo distintas:

* **⚔️ Guerreiro:**
  * **Atributos Iniciais:** 120 de Vida Máxima, 18 de Dano Base, 10 de Defesa, 10 de Velocidade, 5% de Chance Crítica (Multiplicador 2x) e 1 Cura Base.
  * **Estilo de Jogo:** Alta resistência física e capacidade de absorção de dano.
* **🏹 Arqueiro:**
  * **Atributos Iniciais:** 100 de Vida Máxima, 22 de Dano Base, 6 de Defesa, 15 de Velocidade, 20% de Chance Crítica (Multiplicador 2x) e 2 Curas Base.
  * **Estilo de Jogo:** Elevada velocidade e foco em acertos críticos.
* **🔮 Mago:**
  * **Atributos Iniciais:** 75 de Vida Máxima, 100 de Mana Máxima, 26 de Dano Base, 3 de Defesa, 8 de Velocidade, 10% de Chance Crítica (Multiplicador 2.5x), 3 Curas Base e 2 Poções de Mana.
  * **Estilo de Jogo:** Elevado poder ofensivo através de magia, dependente da gestão do recurso de Mana.

---

## 2. Estrutura do Mapa e Progressão por Andares

A progressão do jogo é dividida em **Andares**. Cada andar contém salas de transição até alcançar o confronto final.

### 2.1 Tipos de Salas (Rotas)
Entre os confrontos, poderá selecionar diferentes caminhos disponíveis:
* **⚔️ Combate:** Encontro padrão com inimigos para obtenção de Experiência (XP) e Moedas (Ouro/Prata).
* **⚔️ Elite:** Combate de maior dificuldade contra inimigos fortalecidos, oferecendo recompensas superiores.
* **◆ Loja:** Zona comercial onde é possível adquirir equipamentos e consumíveis com as moedas acumuladas.
* **🔥 Acampamento:** Ponto de descanso disponível a cada 5 salas. Restaura 100% da Vida, Mana e a carga dos consumíveis básicos.
* **☠️ Chefe (Boss):** Confronto decisivo disponível a partir da 15ª sala. Caso opte por adiar, a luta tornar-se-á obrigatória ao atingir o limite da 30ª sala.

### 2.2 Transição de Andar
Ao derrotar o Chefe do andar atual (como o Dragão ou a Hidra):
1. O nível do andar é incrementado (`Andar + 1`).
2. O progresso de salas é reiniciado.
3. Todos os inimigos do novo andar recebem um escalonamento de atributos (+20% de vida/dano por andar).

---

## 3. Sistema de Combate e Regras de Turno

O combate ocorre em turnos intercalados entre o jogador e as forças inimigas.

### 3.1 Ordem de Ação e Velocidade Efetiva
A ordem de atuação no turno é determinada pela estatística de **Velocidade**. Se a Velocidade do inimigo for superior à Velocidade Efetiva do jogador, o inimigo atacará primeiro.

### 3.2 Ações Disponíveis
* **Atacar:** Realiza um golpe físico ou mágico contra o alvo.
  * *Armas à Distância:* Armas como o *Arco de Bambu* ou a *Besta* possuem tempo de recarga (*Reload*). Enquanto a arma recarrega, o jogador não poderá efetuar novos ataques com ela por um número determinado de turnos.
  * *Armas Mágicas:* Consomem Mana a cada conjuração. Caso a Mana seja insuficiente, o ataque é executado utilizando apenas o dano físico base do cajado.
* **Defender:** Reduz o dano recebido no turno pela metade. Se a sua Velocidade Efetiva for superior à do inimigo, o dano será totalmente anulado (a menos que esteja a recarregar uma arma, situação em que o dano é reduzido a metade).
* **Curar / Usar Poções:**
  * *Cura Básica / Poção de Cura:* Recupera 50% da Vida Máxima.
  * *Poção de Mana (Exclusivo do Mago):* Recupera até 70% da Mana Máxima.
    * *Efeito Secundário de Fadiga Mágica:* O uso de uma poção de mana aplica uma penalidade temporária de -30% no dano mágico durante os 3 turnos seguintes.
* **Fugir:** Permite abandonar o combate, regressando à escolha de rotas, contudo sem receber quaisquer recompensas de XP ou moedas.

---

## 4. Efeitos de Status (Debuffs)

Diversos inimigos podem infligir efeitos prejudiciais temporários durante o combate:

| Efeito | Origem Comum | Impacto no Jogador |
| :--- | :--- | :--- |
| **Pegajoso** | Slime, Hidra | Reduz a velocidade de ação. |
| **Lentidão** | Aranha Gigante | Reduz a velocidade em 25%. |
| **Veneno** | Aranha Gigante | Causa dano contínuo equivalente a 2,5% da Vida Máxima por turno. |
| **Sangramento** | Goblin | Causa dano contínuo equivalente a 2,0% da Vida Máxima por turno e reduz a velocidade. |
| **Queimando** | Dragão | Causa dano contínuo equivalente a 2,5% da Vida Máxima por turno. |

---

## 5. Economia, Equipamentos e Inventário

### 5.1 Sistema Monetário
O sistema económico baseia-se em **Ouro** e **Prata**:
* **Taxa de Conversão:** 1 Ouro = 10 Pratas.
* As moedas são obtidas ao derrotar inimigos ou concluir combates de Elite e Chefes.

### 5.2 Equipamentos
O jogador pode equipar simultaneamente **uma Arma** e **uma Armadura**:
* **Armas:** Aumentam o dano físico ou mágico.
* **Armaduras:** Conferem pontos de Defesa (que reduzem percentualmente o dano sofrido) e podem conceder bónus passivos, tais como aumento de Mana Máxima ou Regeneração de Mana por turno (ex.: *Capa Mística*).

### 5.3 A Loja
Nas salas de Loja, é possível adquirir novos equipamentos e consumíveis adicionais. Caso pretenda renovar a lista de artigos expostos, poderá utilizar a opção **Atualizar Itens**, cujo custo em moedas duplica a cada utilização efetuada na mesma visita.

---

## 6. Morte e Mecânica Rogue-lite

Sendo o jogo fundamentado em mecânicas *Rogue-lite*, a derrota em combate acarreta as seguintes consequências:

* **O que é Mantido:**
  * O Nível da personagem (`Level`) e os respetivos aumentos permanentes de atributos.
  * O número máximo de curas de base desbloqueadas por progressão.
  * A arma inicial da classe.
* **O que é Perdido:**
  * Todas as moedas (Ouro e Prata) acumuladas.
  * Todos os itens, armas, armaduras e consumíveis adquiridos durante a *run* (espólios e compras de loja).
  * O progresso atual do mapa/andar, reiniciando a exploração a partir do primeiro andar.
