# Possível RPG

> ⚠️ **O projeto ainda está no início do desenvolvimento.**
>
> Este RPG está sendo desenvolvido como um projeto de estudo enquanto aprendo JavaScript. Muitas mecânicas ainda estão em desenvolvimento e podem sofrer alterações, ser balanceadas ou até desaparecer porque aparentemente criar um jogo exige fazer 47 sistemas diferentes ao mesmo tempo.

## 🎮 Jogue

🔗(https://wmsl-20.github.io/RogueRPG/)

---

## 📖 Sobre o jogo

**Possível RPG** é um RPG de navegador baseado em combate por turnos, progressão de personagem e gerenciamento de equipamentos.

O projeto está sendo desenvolvido principalmente para praticar **JavaScript, HTML e CSS**, enquanto novas mecânicas são adicionadas aos poucos.

Atualmente, o jogo possui:

* ⚔️ Combate por turnos
* 🧙 Três classes diferentes
* 👤 Criação de personagem
* 📈 Sistema de experiência e níveis
* ❤️ Sistema de vida e cura
* 💨 Sistema de velocidade
* ⚡ Acertos críticos
* 🔮 Sistema de mana para o Mago
* 🧪 Poções de mana
* 🎒 Inventário
* ⚔️ Sistema de equipamentos
* 🛡️ Armaduras
* 🎁 Sistema de drops
* 👾 Diferentes inimigos
* 💾 Salvamento automático no navegador

---

# 🕹️ Como jogar

## 1. Escolha sua classe

Ao iniciar uma nova partida, você precisa escolher uma classe.

Atualmente existem três:

### ⚔️ Guerreiro

Possui mais vida e defesa.

É uma classe mais resistente e começa com uma **Espada inicial**.

### 🏹 Arqueiro

Possui mais velocidade e chance de acerto crítico.

Começa com um **Arco inicial**.

### 🔮 Mago

Possui mais dano mágico e várias habilidades relacionadas à mana.

Começa com um **Cajado inicial**.

O Mago também possui um sistema próprio de mana e pode utilizar **Poções de Mana**.

---

## 2. Crie seu personagem

Depois de escolher a classe, você deverá criar seu personagem.

Informe:

* Nome
* Gênero

Depois clique em **Começar aventura**.

O nome escolhido será utilizado durante o jogo.

---

# ⚔️ Combate

Depois de criar o personagem, você entrará em combate.

Um inimigo será escolhido aleatoriamente entre os inimigos disponíveis.

Atualmente existem:

* 🟢 Slime
* 🧟 Zumbi
* 👺 Goblin

Cada inimigo possui seus próprios valores de:

* Vida
* Dano
* Velocidade
* Experiência

Os inimigos também ficam mais fortes conforme o nível do jogador aumenta.

---

## 🏃 Velocidade

A velocidade determina quem age primeiro durante o turno.

Se o inimigo possuir mais velocidade que o jogador, ele atacará primeiro.

Se o jogador possuir velocidade igual ou maior, o jogador age primeiro.

Isso significa que velocidade não serve apenas como uma estatística decorativa. Ela pode decidir quem bate na cara de quem antes. Uma aplicação bastante tradicional da civilização humana.

---

## ⚔️ Atacar

O botão **Atacar** realiza um ataque contra o inimigo.

O dano depende dos atributos do personagem e da arma equipada.

Também existe a possibilidade de realizar um **acerto crítico**.

Quando um crítico acontece, o dano é multiplicado pelo atributo de dano crítico da classe.

---

## 🛡️ Defender

Ao escolher **Defender**, o personagem entra em posição defensiva.

A defesa reduz o dano recebido.

Além disso, existe uma interação com a velocidade: dependendo da velocidade do personagem em relação ao inimigo, a defesa pode até anular o dano recebido.

---

## ❤️ Curar

A ação **Curar** recupera parte da vida perdida.

A quantidade de curas disponíveis depende da classe e pode aumentar durante a progressão.

A cura não pode ser utilizada quando a vida já estiver cheia.

---

# 🔮 Sistema de Mana

O sistema de mana é exclusivo do **Mago**.

O Mago possui:

* Mana máxima
* Mana atual
* Poções de mana
* Dano mágico

O Cajado possui dano físico e dano mágico.

Quando existe mana suficiente, o ataque utiliza o dano mágico e consome mana.

Caso não exista mana suficiente, o ataque utiliza o dano físico do cajado.

---

## 🧪 Poção de Mana

O Mago pode utilizar uma **Poção de Mana** para recuperar mana.

Porém, utilizar a poção gera temporariamente uma penalidade no dano mágico.

A penalidade começa em **30%** e diminui conforme os turnos passam.

---

# 🎒 Inventário

O jogo possui um sistema de inventário para armazenar os equipamentos encontrados.

Os itens podem ser:

* ⚔️ Armas
* 🛡️ Armaduras

O inventário também mostra quais equipamentos estão atualmente equipados.

---

## ⚔️ Equipamentos

Os equipamentos podem alterar os atributos do personagem.

Por exemplo:

### Espada inicial

* +5 dano

### Arco inicial

* +7 dano

### Cajado inicial

* +10 dano mágico
* +5 dano físico
* Custo de 10 mana

### Armadura básica

* +3 defesa

Os equipamentos podem ser **equipados ou desequipados diretamente pelo inventário**.

---

# 🎁 Drops

Alguns inimigos podem deixar itens após serem derrotados.

Atualmente, o **Zumbi** possui uma chance de deixar uma **Armadura básica**.

Quando um item é obtido, ele aparece no inventário e pode ser equipado.

---

# 📈 Experiência e Level Up

Ao derrotar um inimigo, o personagem recebe experiência.

A quantidade necessária para subir de nível aumenta conforme o nível do personagem.

Ao subir de nível, alguns atributos são aumentados, incluindo:

* ❤️ Vida máxima
* ⚔️ Dano
* 🛡️ Defesa
* 💨 Velocidade

A cada determinados níveis também podem ser adicionadas novas cargas de cura.

O Mago também recebe melhorias específicas de mana durante a progressão.

---

# 💀 Derrota

Se a vida do personagem chegar a zero, a batalha termina.

A progressão do personagem é mantida, incluindo seu nível e atributos.

É possível iniciar uma nova run através da opção de recomeço.

---

# 💾 Salvamento

O jogo utiliza o **localStorage do navegador** para salvar os dados do personagem.

Isso permite que o progresso continue disponível mesmo depois de recarregar a página.

O save inclui os dados do personagem e sua progressão.

---

# 🔄 Resetar Save

No menu do jogo existe a opção:

**Resetar Save**

Essa opção apaga completamente o save armazenado no navegador e permite começar uma nova partida.

⚠️ **Essa ação apaga o progresso salvo.**

---

# 🧪 Projeto em desenvolvimento

Este projeto ainda está em desenvolvimento.

Novas mecânicas, inimigos, equipamentos, balanceamentos e sistemas serão adicionados ao longo do desenvolvimento.

Alguns sistemas existentes também podem ser modificados conforme o projeto evolui.

### Próximas ideias

Entre as possíveis futuras adições estão:

* 👾 Mais inimigos
* 👑 Bosses
* 🏪 Lojas
* 💰 Sistema de dinheiro
* 🗺️ Escolha de caminhos
* 🧰 Mais equipamentos
* 🎒 Mais itens
* 🎨 Sprites e animações
* 🧩 Novas mecânicas de RPG

---

## 🛠️ Tecnologias utilizadas

* HTML
* CSS
* JavaScript
* LocalStorage

---

## 👨‍💻 Sobre o projeto

Este projeto foi criado como uma forma de praticar programação e aprender JavaScript através de um projeto próprio.

> Feito por mim enquanto eu estudava JavaScript, com ajuda de IAs.
