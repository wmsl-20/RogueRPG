# RogueRPG

## Como executar

Deixe `index.html`, `possivelrpg.js` e `rprstyle.css` na mesma pasta e abra `index.html` no navegador. Para publicar no GitHub Pages, envie os arquivos do jogo para a mesma pasta do repositório.

O jogo oferece quatro slots no `localStorage` do navegador. Um save antigo armazenado na chave `rpg_save` é migrado automaticamente para o primeiro slot. O armazenamento local é separado para cada endereço/site.

## Classes e habilidades

- **Guerreiro — Fúria:** só pode ser ativada com 10% de vida ou menos; o limite aumenta 0,4 ponto percentual por nível. Os bônus permanecem até o fim do combate.
- **Arqueiro — Mil Flechas:** atinge todos os inimigos com até quatro acertos críticos e recarrega após seis salas.
- **Mago — Explosão Arcana:** custa 60 de mana e causa dano crítico triplicado a todos os inimigos.
- **Necromante — Roubar Alma:** derrota instantaneamente o inimigo que estiver abaixo de 15% de vida. O personagem pode guardar até quatro almas.
- **Necromante — Invocar Almas:** custa 65 de mana e duas almas; as duas invocações atacam os inimigos visados pelo jogador.
- **Multishot:** os disparos adicionais das armas atingem o inimigo selecionado.

## Equipamentos e combate

- Escudos equipáveis fornecem defesa e efeitos de bloqueio.
- O Minotauro pode deixar cair sua armadura e seu escudo, além de sua arma.
- Penalidades e bônus de equipamento são exibidos durante o combate.
- Combates, alvos selecionados, grupo de inimigos e inimigos derrotados são restaurados ao recarregar a página.
- XP excedente é preservado ao subir de nível; moedas são normalizadas para converter 10 pratas em 1 ouro.

## Testes

Verifique a sintaxe do jogo com `node --check possivelrpg.js`. Não há uma suíte de testes automatizados incluída no repositório.
