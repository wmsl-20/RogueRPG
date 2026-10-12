# Manual do Jogador: Guia Completo de Jogabilidade

Este documento apresenta as diretrizes formais e a estrutura de funcionamento atualizada do jogo RogueRPG. O objetivo deste manual é detalhar os sistemas de classes (incluindo o Necromante), mecânicas de combate com habilidades ativas, escudos, progressão de atributos, exploração de mapas e gestão de inventário.

---

## 1. Criação de Personagem e Classes

Ao iniciar uma nova aventura num slot de save, deve escolher a sua classe e definir o nome e o género da sua personagem. Cada classe possui atributos de base específicos e dinâmicas de jogo distintas:

* **⚔️ Guerreiro:**
  * **Atributos Iniciais:** 120 de Vida Máxima, 18 de Dano Base, 10 de Defesa, 10 de Velocidade, 5% de Chance Crítica (Multiplicador 2x) e 1 Cura Base.
  * **Habilidade Ativa (Fúria):** Pode ser ativada quando a vida desce até 10% ou menos (o limite de ativação aumenta 0,4% por nível). Enquanto ativa até ao fim do combate, dobra o dano e a velocidade, mas reduz a defesa pela metade.
* **🏹 Arqueiro:**
  * **Atributos Iniciais:** 100 de Vida Máxima, 22 de Dano Base, 6 de Defesa, 15 de Velocidade, 20% de Chance Crítica (Multiplicador 2x) e 2 Curas Base.
  * **Habilidade Ativa (Mil Flechas):** Dispara 4 acertos críticos em todos os inimigos presentes no combate. Possui um tempo de recarga de 6 salas. Ao subir de nível, ganha reduções permanentes no tempo de recarga de armas de longo alcance.
* **🔮 Mago:**
  * **Atributos Iniciais:** 75 de Vida Máxima, 100 de Mana Máxima, 26 de Dano Base, 3 de Defesa, 8 de Velocidade, 10% de Chance Crítica (Multiplicador 2.5x), 3 Curas Base e 2 Poções de Mana.
  * **Habilidade Ativa (Explosão Arcana):** Custa 60 de Mana e desfere um dano crítico triplicado em todos os inimigos da batalha.
* **☠️ Necromante:**
  * **Atributos Iniciais:** 65 de Vida Máxima, 100 de Mana Máxima, 30 de Dano Base, 0 de Defesa, 8 de Velocidade, 10% de Chance Crítica (Multiplicador 2.5x), 2 Curas Base e 2 Poções de Mana.
  * **Habilidade Ativa 1 (Roubar Alma):** Derrota instantaneamente o inimigo alvo caso este esteja com menos de 15% de vida. Permite acumular até 4 almas.
  * **Habilidade Ativa 2 (Invocar Almas):** Custa 65 de Mana e 2 almas guardadas para invocar duas entidades espirituais que atacam os alvos em conjunto com o jogador em todos os turnos até ao fim do combate.

---

## 2. Sistema de Múltiplos Saves (Slots)

O jogo conta com **4 slots de gravação independentes** no armazenamento local do navegador. 
* É possível gerir diferentes partidas em simultâneo.
* Caso feche o navegador ou atualize a página a meio de um combate, o estado da batalha, os inimigos restantes e os alvos selecionados são restaurados automaticamente ao reabrir o save.

---

## 3. Estrutura do Mapa e Progressão por Andares

A progressão do jogo é dividida em **Andares**, contendo salas de transição até alcançar o confronto final com os chefes (como o Minotauro, o Dragão ou a Hidra).

### 3.1 Tipos de Salas (Rotas)
* **⚔️ Combate:** Encontro padrão com inimigos para obtenção de Experiência (XP) e Moedas.
* **⚔️ Elite:** Combate de maior dificuldade contra inimigos fortalecidos e com recompensas superiores.
* **◆ Loja:** Zona comercial para adquirir equipamentos, escudos e consumíveis. O custo para atualizar o stock duplica progressivamente a cada uso na mesma visita.
* **🔥 Acampamento:** Ponto de descanso a cada 5 salas que restaura 100% da Vida, Mana e a carga dos consumíveis básicos.
* **☠️ Chefe (Boss):** Disponível a partir da 15ª sala, tornando-se obrigatório ao atingir a 30ª sala.

### 3.2 Transição de Andar e Experiência
* Ao derrotar o Chefe, desce para o andar seguinte e os inimigos ganham escalonamento de atributos.
* O ganho de XP acumula o excedente ao subir de nível, permitindo saltar múltiplos níveis de uma só vez caso obtenha grande quantidade de XP.

---

## 4. Sistema de Combate, Escudos e Regras de Turno

### 4.1 Ordem de Ação e Velocidade Efetiva
A ordem de atuação no turno depende da **Velocidade Efetiva** (afetada por penalidades de armaduras, escudos pesados, recargas de armas e efeitos de lentidão). Se a velocidade do inimigo for superior à do jogador, este atacará primeiro.

### 4.2 Equipamento de Escudos
Além de Armas e Armaduras, o jogador pode equipar **Escudos** (como o *Escudo de Madeira*, *Escudo de Ferro* ou o *Escudo do Minotauro*). Os escudos concedem Defesa adicional e possuem uma **chance percentual de bloquear totalmente o dano recebido**, aplicando penalidades de velocidade se forem muito pesados.

### 4.3 Ações Disponíveis
* **Atacar:** Executa um golpe físico ou mágico. Armas com disparos múltiplos (*Multishot*) redirecionam os tiros extras para o alvo selecionado. Armas de longo alcance exigem turnos de recarga (*Reload*).
* **Defender:** Reduz o dano recebido pela metade ou anula-o totalmente caso a velocidade efetiva supere a do inimigo.
* **Curar / Usar Poções:** Recuperam vida ou mana. O uso de poções de mana em classes mágicas aplica uma penalidade temporária de -30% no dano mágico durante os 3 turnos seguintes.
* **Fugir:** Permite abandonar o combate sem receber recompensas.

---

## 5. Efeitos de Status (Debuffs)

Os inimigos podem infligir condições negativas temporárias:
* **Pegajoso:** Reduz a velocidade de ação.
* **Lentidão:** Reduz a velocidade em 25%.
* **Veneno:** Causa dano contínuo por turno baseado na vida máxima.
* **Sangramento:** Causa dano contínuo e penaliza a velocidade.
* **Queimando:** Causa dano contínuo por turno.

---

## 6. Morte e Mecânica Rogue-lite

A derrota em combate resulta nas seguintes penalidades:
* **O que é Mantido:** O nível da personagem (`Level`), melhorias permanentes de atributos, curas base máximas desbloqueadas e a arma inicial da classe.
* **O que é Perdido:** Todas as moedas acumuladas, espólios da *run*, itens comprados na loja e o progresso atual do mapa, reiniciando a exploração no primeiro andar.
