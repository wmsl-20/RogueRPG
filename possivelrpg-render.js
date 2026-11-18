// ==============================
// CAMADA DE RENDERIZAÇÃO
// ==============================

// ==============================
// INTERFACE DO JOGO
// ==============================

const interfaceJogo = {
  playerLevel: document.querySelector("#player-level"),
  playerName: document.querySelector("#player-name"),
  playerHealthProgress: document.querySelector("#player-health-progress"),

  playerHealth: document.querySelector("#player-health"),
  playerHealthBar: document.querySelector("#player-health-bar"),
  playerHealthCopy: document.querySelector("#player-health-copy"),
  playerHealthBarCopy: document.querySelector("#player-health-bar-copy"),

  playerXp: document.querySelector("#player-xp"),
  playerXpBar: document.querySelector("#player-xp-bar"),
  playerGold: document.querySelector("#player-gold"),
  playerSilver: document.querySelector("#player-silver"),

  manaStat: document.querySelector("#mana-stat"),
  playerMana: document.querySelector("#player-mana"),
  playerManaBar: document.querySelector("#player-mana-bar"),
  manaEffect: document.querySelector("#player-mana-effect"),
  playerDebuffs: document.querySelector("#player-debuffs"),
  playerResistances: document.querySelector("#player-resistances"),
  routePanel: document.querySelector("#route-panel"),
  routeTitle: document.querySelector("#route-title"),
  routeProgress: document.querySelector("#route-progress"),
  routeHistory: document.querySelector("#route-history"),
  routeOptions: document.querySelector("#route-options"),
  shopView: document.querySelector("#shop-view"),
  shopBalance: document.querySelector("#shop-balance"),
  shopItems: document.querySelector("#shop-items"),
  refreshShop: document.querySelector("#refresh-shop-button"),
  leaveShop: document.querySelector("#leave-shop-button"),

  inventory: document.querySelector("#inventory-content"),
  inventoryButton: document.querySelector("#inventory-button"),
  inventoryModal: document.querySelector("#inventory-modal"),
  inventoryCategories: document.querySelectorAll(".inventory-category"),
  logButton: document.querySelector("#log-button"),
  logModal: document.querySelector("#log-modal"),

  enemyArt: document.querySelector("#enemy-art"),
  enemyParty: document.querySelector("#enemy-party"),
  encounterKind: document.querySelector("#encounter-kind"),
  enemyName: document.querySelector("#enemy-name"),
  enemyLevel: document.querySelector("#enemy-level"),
  enemyHealth: document.querySelector("#enemy-health"),
  enemyHealthBar: document.querySelector("#enemy-health-bar"),
  enemyResistances: document.querySelector("#enemy-resistances"),

  message: document.querySelector("#battle-message"),
  log: document.querySelector("#battle-log"),

  attack: document.querySelector("#attack-button"),
  defend: document.querySelector("#defend-button"),
  heal: document.querySelector("#heal-button"),
  shopHeal: document.querySelector("#shop-heal-button"),
  manaPotion: document.querySelector("#mana-potion-button"),
  shopManaPotion: document.querySelector("#shop-mana-potion-button"),
  warriorSkill: document.querySelector("#warrior-skill-button"),
  archerSkill: document.querySelector("#archer-skill-button"),
  mageSkill: document.querySelector("#mage-skill-button"),
  necromancerSteal: document.querySelector("#necromancer-steal-button"),
  necromancerSummon: document.querySelector("#necromancer-summon-button"),
  paladinSkill: document.querySelector("#paladin-skill-button"),
  paladinBlessing: document.querySelector("#paladin-blessing-button"),
  faithStat: document.querySelector("#faith-stat"),
  playerFaith: document.querySelector("#player-faith"),
  playerFaithBar: document.querySelector("#player-faith-bar"),
  playerFaithProgress: document.querySelector("#player-faith-progress"),

  continue: document.querySelector("#continue-button"),
  restart: document.querySelector("#restart-button"),
  gameOver: document.querySelector("#game-over-screen"),
  gameOverMessage: document.querySelector("#game-over-message"),
  gameOverRestart: document.querySelector("#game-over-restart-button"),
  menuContainer: document.querySelector("#game-menu-container"),
  menuToggle: document.querySelector("#menu-toggle"),
  menu: document.querySelector("#game-menu"),
  resetSave: document.querySelector("#reset-save-button"),
};

// ==============================
// INTERFACE DA SELEÇÃO DE CLASSE
// ==============================

const interfaceClasses = {
  saveMenu: document.querySelector("#save-menu"),
  saveSlots: document.querySelector("#save-slots"),
  selection: document.querySelector("#class-selection"),
  buttons: document.querySelectorAll(".class-button"),
  creation: document.querySelector("#character-creation"),
  characterForm: document.querySelector("#character-form"),
  characterName: document.querySelector("#character-name"),
  characterGender: document.querySelector("#character-gender"),
  gameContent: document.querySelector("#game-content"),
};

function renderizarInventario() {
  const area = interfaceJogo.inventory;

  area.replaceChildren();

  for (const botao of interfaceJogo.inventoryCategories) {
    botao.setAttribute(
      "aria-pressed",
      String(botao.dataset.inventoryCategory === categoriaInventario),
    );
  }

  const slots = [
    ["arma", "Arma", obterArmaAtual()],
    ["armadura", "Armadura", obterArmaduraAtual()],
    ["escudo", "Escudo", obterEscudoAtual()],
  ];

  const equipamentoDaCategoria = slots.find(
    ([tipo]) => tipo === categoriaInventario,
  );
  if (equipamentoDaCategoria) {
    const equipamentos = document.createElement("section");
    equipamentos.className = "equipped-section";

    const tituloEquipado = document.createElement("h3");
    tituloEquipado.className = "inventory-label";
    tituloEquipado.textContent = "EQUIPADO";
    equipamentos.append(tituloEquipado);

    const [tipo, rotulo, item] = equipamentoDaCategoria;
    const linha = document.createElement("div");
    linha.className = "equipment-slot";

    const icone = document.createElement("span");
    icone.className = "equipment-icon";
    icone.textContent = tipo === "arma" ? "⚔" : tipo === "escudo" ? "⛨" : "🛡";
    icone.setAttribute("aria-hidden", "true");

    const detalhes = document.createElement("div");
    detalhes.className = "equipment-details";

    const nomeSlot = document.createElement("span");
    nomeSlot.className = "equipment-type";
    nomeSlot.textContent = rotulo;

    const valor = document.createElement("span");
    valor.className = "equipment-name";
    valor.textContent = item ? item.nome : "Nenhuma";

    detalhes.append(nomeSlot, valor);
    linha.append(icone, detalhes);
    equipamentos.append(linha);
    area.append(equipamentos);
  }

  const nomesCategoria = {
    arma: "ARMAS",
    armadura: "ARMADURAS",
    escudo: "ESCUDOS",
    outros: "OUTROS ITENS",
  };

  const tituloItens = document.createElement("h3");
  tituloItens.className = "inventory-label items-heading";
  tituloItens.textContent = nomesCategoria[categoriaInventario];
  area.append(tituloItens);

  const itens = player.inventario
    .map((id) => ITENS[id])
    .filter(Boolean)
    .filter((item) => {
      if (categoriaInventario === "outros") {
        return !["arma", "armadura", "escudo"].includes(item.tipo);
      }

      return item.tipo === categoriaInventario;
    });
  if (categoriaInventario !== "arma") {
    itens.sort((a, b) => {
      const equipadoA = player.equipado[a.tipo] === a.id ? 1 : 0;
      const equipadoB = player.equipado[b.tipo] === b.id ? 1 : 0;
      return equipadoB - equipadoA;
    });
  }

  if (categoriaInventario === "arma") {
    const ordemClasses = [
      "guerreiro",
      "arqueiro",
      "mago",
      "necromante",
      "paladino",
    ];
    itens.sort((primeiro, segundo) => {
      const equipadoPrimeiro =
        player.equipado[primeiro.tipo] === primeiro.id ? 1 : 0;
      const equipadoSegundo =
        player.equipado[segundo.tipo] === segundo.id ? 1 : 0;
      if (equipadoPrimeiro !== equipadoSegundo) {
        return equipadoSegundo - equipadoPrimeiro;
      }
      const ordemPrimeiro = ordemClasses.indexOf(primeiro.classe);
      const ordemSegundo = ordemClasses.indexOf(segundo.classe);
      const diferenca =
        (ordemPrimeiro < 0 ? ordemClasses.length : ordemPrimeiro) -
        (ordemSegundo < 0 ? ordemClasses.length : ordemSegundo);
      return diferenca || primeiro.nome.localeCompare(segundo.nome, "pt-BR");
    });
  }

  if (categoriaInventario === "outros") {
    if (player.curas_loja > 0) {
      itens.push({
        id: "cura_loja",
        tipo: "consumivel",
        nome: `Poção de cura (${player.curas_loja})`,
        descricao: "Recupera 50% da vida máxima. Consumida ao usar.",
      });
    }
    if (player.pocoes_mana_loja > 0) {
      itens.push({
        id: "pocao_mana_loja",
        tipo: "consumivel",
        nome: `Poção de mana comprada (${player.pocoes_mana_loja})`,
        descricao: "Recupera mana. Consumida ao usar.",
      });
    }
  }

  if (itens.length === 0) {
    const vazio = document.createElement("p");
    vazio.className = "inventory-empty";
    vazio.textContent = "Nenhum item nesta categoria.";
    area.append(vazio);
  }

  let classeArmaRenderizada = null;
  for (const item of itens) {
    if (categoriaInventario === "arma") {
      const classeItem = item.classe ?? "outras";
      if (classeItem !== classeArmaRenderizada) {
        const tituloClasse = document.createElement("h4");
        tituloClasse.className = "inventory-label weapon-class-heading";
        tituloClasse.textContent = NOMES_CLASSES[classeItem] ?? "Outras armas";
        area.append(tituloClasse);
        classeArmaRenderizada = classeItem;
      }
    }
    const id = item.id;
    const equipado = ["arma", "armadura", "escudo"].includes(item.tipo)
      ? player.equipado[item.tipo] === id
      : false;

    const linha = document.createElement("div");
    linha.className = "inventory-item";

    const info = document.createElement("div");

    const nome = document.createElement("div");
    nome.className = "item-name";
    nome.textContent = item.nome;

    const stats = document.createElement("div");
    stats.className = "item-stats";
    stats.textContent =
      item.tipo === "consumivel" ? item.descricao : descreverItem(item);

    info.append(nome, stats);

    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "item-button";
    botao.textContent =
      item.tipo === "consumivel" ? "Usar" : equipado ? "Desequipar" : "Equipar";
    if (item.tipo === "consumivel") {
      botao.disabled = !batalhaAtiva;
      botao.addEventListener("click", () => {
        interfaceJogo.inventoryModal.close();
        jogarTurno(id === "cura_loja" ? "curar_loja" : "pocao_mana_loja");
      });
    } else {
      botao.addEventListener("click", () => alternarEquipamento(id));
    }

    linha.append(info, botao);
    area.append(linha);
  }
}

function mostrarRotas() {
  if (!player) return;

  faseJogo = "rota";
  interfaceJogo.routePanel.hidden = false;
  document.querySelector(".game-grid").hidden = true;
  interfaceJogo.shopView.hidden = true;
  interfaceJogo.routeOptions.hidden = false;
  interfaceJogo.routeTitle.textContent =
    player.route_step >= LIMITE_SALAS_ANTES_BOSS
      ? "O chefe bloqueia seu caminho"
      : player.route_step >= SALAS_ATE_BOSS
        ? "O chefe está à sua espera"
        : "Escolha seu caminho";
  interfaceJogo.routeProgress.textContent =
    player.route_step >= SALAS_ATE_BOSS
      ? `Andar ${player.andar} · Sala ${player.route_step}/${LIMITE_SALAS_ANTES_BOSS} · Chefe disponível`
      : `Andar ${player.andar} · Sala ${player.route_step + 1}/${SALAS_ATE_BOSS} · Chefe após ${SALAS_ATE_BOSS}`;

  interfaceJogo.routeHistory.replaceChildren();
  const caminho = player.route_history.slice(-4);
  caminho.forEach((nome, indice) => {
    const no = document.createElement("span");
    no.className = "route-history-node";
    no.textContent = nome;
    interfaceJogo.routeHistory.append(no);
    if (indice < caminho.length - 1) {
      const ligacao = document.createElement("span");
      ligacao.className = "route-connector";
      ligacao.setAttribute("aria-hidden", "true");
      ligacao.textContent = "→";
      interfaceJogo.routeHistory.append(ligacao);
    }
  });

  interfaceJogo.routeOptions.replaceChildren();
  const opcoesDeRota = obterOpcoesDeRota();
  interfaceJogo.routeOptions.classList.toggle(
    "route-options-expanded",
    opcoesDeRota.length > 3,
  );
  interfaceJogo.routeOptions.style.setProperty(
    "--route-option-count",
    opcoesDeRota.length,
  );
  for (const opcao of opcoesDeRota) {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "route-card";
    if (opcao.id === "boss") {
      botao.dataset.holdConfirm = "true";
      let pointerHoldId = null;
      let keyboardHold = false;
      const cancelarPressao = () => {
        if (
          botao._holdConfirmTimer !== null &&
          botao._holdConfirmTimer !== undefined
        ) {
          window.clearTimeout(botao._holdConfirmTimer);
          botao._holdConfirmTimer = null;
        }
        document.removeEventListener("pointerup", aoSoltar);
        document.removeEventListener("pointercancel", aoSoltar);
        pointerHoldId = null;
        keyboardHold = false;
        botao.classList.remove("is-holding");
      };
      const aoSoltar = (evento) => {
        if (evento.pointerId === pointerHoldId) cancelarPressao();
      };
      const confirmarSegurando = () => {
        botao._holdConfirmTimer = null;
        if (!botao.isConnected) {
          cancelarPressao();
          return;
        }
        document.removeEventListener("pointerup", aoSoltar);
        document.removeEventListener("pointercancel", aoSoltar);
        pointerHoldId = null;
        keyboardHold = false;
        botao.classList.remove("is-holding");
        botao.dataset.holdConfirmed = "true";
        escolherRota(opcao.id);
      };
      botao.addEventListener("pointerdown", (evento) => {
        if (evento.button !== 0 || !evento.isPrimary || botao.disabled) return;
        cancelarPressao();
        pointerHoldId = evento.pointerId;
        botao.classList.add("is-holding");
        botao._holdConfirmTimer = window.setTimeout(confirmarSegurando, 500);
        document.addEventListener("pointerup", aoSoltar);
        document.addEventListener("pointercancel", aoSoltar);
      });
      botao.addEventListener("pointerleave", cancelarPressao);
      botao.addEventListener("keydown", (evento) => {
        if (
          evento.repeat ||
          !["Enter", " "].includes(evento.key) ||
          botao.disabled
        ) {
          return;
        }
        evento.preventDefault();
        cancelarPressao();
        keyboardHold = true;
        botao.classList.add("is-holding");
        botao._holdConfirmTimer = window.setTimeout(confirmarSegurando, 500);
      });
      botao.addEventListener("keyup", (evento) => {
        if (keyboardHold && ["Enter", " "].includes(evento.key)) {
          evento.preventDefault();
          cancelarPressao();
        }
      });
      botao.addEventListener("click", (evento) => {
        if (botao.dataset.holdConfirmed === "true") {
          evento.preventDefault();
          return;
        }
        evento.preventDefault();
      });
    } else {
      botao.addEventListener("click", () => escolherRota(opcao.id));
    }
    const icone = document.createElement("span");
    icone.className = "route-icon";
    icone.setAttribute("aria-hidden", "true");
    icone.textContent = opcao.icone;
    const copia = document.createElement("span");
    copia.className = "route-card-copy";
    const titulo = document.createElement("strong");
    titulo.textContent = opcao.titulo;
    const descricao = document.createElement("span");
    descricao.textContent = opcao.descricao;
    copia.append(titulo, descricao);
    const seta = document.createElement("span");
    seta.className = "route-arrow";
    seta.setAttribute("aria-hidden", "true");
    seta.textContent = "→";
    botao.append(icone, copia, seta);
    interfaceJogo.routeOptions.append(botao);
  }

  atualizarBotaoBatalha();
  salvarJogo();
}

function atualizarSaldoLoja() {
  const total = obterMoedasEmPrata();
  interfaceJogo.shopBalance.textContent = `Seu saldo: ${Math.floor(total / 10)} ouro e ${total % 10} prata`;
}

function renderizarLoja() {
  if (!player.shop_offers_initialized) {
    gerarOfertasLoja();
    player.shop_offers_initialized = true;
  }
  interfaceJogo.shopItems.replaceChildren();
  atualizarSaldoLoja();

  interfaceJogo.refreshShop.textContent = `Atualizar itens (${formatarPreco(obterPrecoAtualizarLoja())})`;
  interfaceJogo.refreshShop.disabled =
    obterMoedasEmPrata() < obterPrecoAtualizarLoja();

  for (const id of player.shop_offer_ids) {
    const oferta = OFERTAS_LOJA.find((item) => item.id === id);
    if (!oferta) continue;
    const consumivel =
      oferta.id === "cura_loja" || oferta.id === "pocao_mana_loja";

    const item = consumivel ? null : ITENS[oferta.id];
    const nome =
      oferta.id === "cura_loja"
        ? "Poção de cura"
        : oferta.id === "pocao_mana_loja"
          ? "Poção de mana"
          : item.nome;
    const descricao =
      oferta.id === "cura_loja"
        ? "Recupera 50% da vida máxima. Consumível."
        : oferta.id === "pocao_mana_loja"
          ? "Recupera até 70% da mana máxima. Consumível."
          : descreverItem(item);
    const jaPossui = !consumivel && player.inventario.includes(oferta.id);
    const podeComprar = !jaPossui && obterMoedasEmPrata() >= oferta.preco;

    const linha = document.createElement("article");
    linha.className = "shop-item";
    const detalhes = document.createElement("div");
    const nomeElemento = document.createElement("strong");
    nomeElemento.textContent = nome;
    const descricaoElemento = document.createElement("span");
    descricaoElemento.textContent = descricao;
    const precoElemento = document.createElement("span");
    precoElemento.className = "shop-price";
    precoElemento.textContent = `Preço: ${formatarPreco(oferta.preco)}`;
    detalhes.append(nomeElemento, descricaoElemento, precoElemento);

    const comparacao = consumivel ? null : compararComEquipado(item);
    if (comparacao) {
      const selo = document.createElement("span");
      selo.className = `shop-compare shop-compare-${comparacao}`;
      selo.textContent =
        comparacao === "melhor"
          ? "▲ Upgrade"
          : comparacao === "pior"
            ? "▼ Abaixo do atual"
            : "— Igual ao atual";
      detalhes.append(selo);
    }

    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "item-button";
    botao.textContent = jaPossui ? "Já possui" : "Comprar";
    botao.disabled = !podeComprar;
    botao.addEventListener("click", () => comprarOferta(oferta));
    linha.append(detalhes, botao);
    interfaceJogo.shopItems.append(linha);
  }

  if (player.shop_offer_ids.length === 0) {
    const estoqueVazio = document.createElement("p");
    estoqueVazio.className = "inventory-empty";
    estoqueVazio.textContent =
      "Estoque vazio. Atualize a loja para ver novos itens.";
    interfaceJogo.shopItems.append(estoqueVazio);
  }
}

function mostrarLoja() {
  faseJogo = "loja";
  interfaceJogo.routePanel.hidden = false;
  document.querySelector(".game-grid").hidden = true;
  interfaceJogo.routeTitle.textContent = "Loja do caminho";
  interfaceJogo.routeProgress.textContent = `Andar ${player.andar} · Sala ${player.route_step}/${LIMITE_SALAS_ANTES_BOSS}`;
  interfaceJogo.routeOptions.hidden = true;
  interfaceJogo.shopView.hidden = false;
  interfaceJogo.routeHistory.replaceChildren();
  renderizarLoja();
  atualizarBotaoBatalha();
  salvarJogo();
}

function obterSpriteInimigo(alvo) {
  const sprites = {
    zumbi: "\u{1F9DF}",
    slime: "\u{1F7E2}",
    goblin: "\u{1F47A}",
    esqueleto: "\u{1F480}",
    orc: "\u{1F479}",
    mago_inimigo: "\u{1F9D9}",
    aranha_gigante: "\u{1F577}\uFE0F",
    troll: "\u{1F9CC}",
    boss: "\u{1F409}",
  };
  if (alvo.nome === "Minotauro") return "\u{1F402}";
  if (alvo.nome === "Hidra") return "\u{1F40D}";
  return sprites[alvo.tipo] ?? "\u{1F47E}";
}

function definirArteInimigo(elemento, alvo) {
  const chave = `${alvo.tipo}:${alvo.nome}`;
  if (elemento.dataset.arteInimigo === chave) return;
  elemento.dataset.arteInimigo = chave;

  elemento.replaceChildren(document.createTextNode(obterSpriteInimigo(alvo)));
}

function atualizarTela() {
  if (!player || (!inimigo && inimigos.length === 0)) return;

  atualizarBotaoBatalha();
  const armaAtual = obterArmaAtual();
  const turnosParaRecarregar =
    player.reload_weapon_id === armaAtual?.id
      ? player.reload_turns_remaining
      : 0;
  interfaceJogo.attack.disabled = !batalhaAtiva || turnosParaRecarregar > 0;
  interfaceJogo.attack.textContent =
    turnosParaRecarregar > 0
      ? `Recarregando (${turnosParaRecarregar})`
      : "⚔   Atacar";

  const ehGuerreiro = player.classe === "guerreiro";
  const ehArqueiro = player.classe === "arqueiro";
  const ehMago = player.classe === "mago";
  const ehNecromante = player.classe === "necromante";
  const ehPaladino = player.classe === "paladino";
  const limiteFuria = 30 + 0.4 * (player.level - 1);
  const percentualVidaAlvo = inimigo
    ? (inimigo.vida / inimigo.vida_max) * 100
    : 100;

  interfaceJogo.warriorSkill.hidden = !ehGuerreiro;
  interfaceJogo.warriorSkill.textContent = player.furia_ativa
    ? "Fúria ativada (até o fim do combate)"
    : `Fúria (ative com ${limiteFuria.toFixed(1)}% de vida ou menos)`;
  interfaceJogo.warriorSkill.disabled =
    !batalhaAtiva ||
    player.furia_ativa ||
    (player.vida_atual / player.vida_max) * 100 > limiteFuria;
  interfaceJogo.archerSkill.hidden = !ehArqueiro;
  interfaceJogo.archerSkill.textContent =
    player.skill_cooldown_salas > 0
      ? `Mil Flechas (recarga: ${player.skill_cooldown_salas} salas)`
      : "Mil Flechas (4 críticos por inimigo)";
  interfaceJogo.archerSkill.disabled =
    !batalhaAtiva || player.skill_cooldown_salas > 0;
  interfaceJogo.mageSkill.hidden = !ehMago;
  interfaceJogo.mageSkill.textContent = "Explosão Arcana (60 mana)";
  interfaceJogo.mageSkill.disabled = !batalhaAtiva || player.mana_atual < 60;
  interfaceJogo.necromancerSteal.hidden = !ehNecromante;
  interfaceJogo.necromancerSteal.textContent = `Roubar alma (${player.almas ?? 0}/4 · alvo abaixo de 25% HP)`;
  interfaceJogo.necromancerSteal.disabled =
    !batalhaAtiva ||
    player.almas >= 4 ||
    percentualVidaAlvo >= 25 ||
    Boolean(inimigo?.alma_roubada);
  interfaceJogo.necromancerSummon.hidden = !ehNecromante;
  interfaceJogo.necromancerSummon.textContent = `Invocar almas (65 mana · 2 almas)${player.almas_invocadas ? " — invocadas" : ""}`;
  interfaceJogo.necromancerSummon.disabled =
    !batalhaAtiva ||
    player.almas < 2 ||
    player.mana_atual < 65 ||
    player.almas_invocadas > 0;
  interfaceJogo.paladinSkill.hidden = !ehPaladino;
  interfaceJogo.paladinSkill.textContent = `Golpe Sagrado (${classe_paladino.golpe_sagrado.fe_custo} fé)`;
  interfaceJogo.paladinSkill.disabled =
    !batalhaAtiva || player.fe_atual < classe_paladino.golpe_sagrado.fe_custo;
  interfaceJogo.paladinBlessing.hidden = !ehPaladino;
  interfaceJogo.paladinBlessing.textContent = player.bencao_ativa
    ? "Bênção ativa (até o fim do combate)"
    : `Bênção (${classe_paladino.bencao.fe_custo} fé)`;
  interfaceJogo.paladinBlessing.disabled =
    !batalhaAtiva ||
    player.bencao_ativa ||
    player.fe_atual < classe_paladino.bencao.fe_custo;

  const vidaJogador = Math.max(0, player.vida_atual);

  const vidaInimigo = Math.max(0, inimigo.vida);

  // ------------------------------
  // Jogador
  // ------------------------------

  interfaceJogo.playerName.textContent = player.nome;
  interfaceJogo.playerHealthProgress.setAttribute(
    "aria-label",
    `Vida de ${player.nome}`,
  );

  interfaceJogo.playerLevel.textContent = player.level;

  interfaceJogo.playerHealth.textContent = `${Math.ceil(vidaJogador)} / ${Math.ceil(player.vida_max)}`;

  const percentualVidaJogador = Math.min(
    100,
    (vidaJogador / player.vida_max) * 100,
  );

  interfaceJogo.playerHealthCopy.textContent = `${Math.ceil(vidaJogador)} / ${Math.ceil(player.vida_max)}`;

  interfaceJogo.playerHealthBar.style.width = `${percentualVidaJogador}%`;

  interfaceJogo.playerHealthBarCopy.style.width = `${percentualVidaJogador}%`;

  interfaceJogo.playerHealthBar.setAttribute(
    "aria-valuenow",
    Math.round(percentualVidaJogador),
  );

  // ------------------------------
  // XP
  // ------------------------------

  const xpAtual = Number.isFinite(Number(player.experiencia))
    ? Number(player.experiencia)
    : 0;
  const xpNecessario = xpParaProximoNivel();
  const percentualXp =
    xpNecessario > 0 ? Math.min(100, (xpAtual / xpNecessario) * 100) : 0;

  interfaceJogo.playerXp.textContent = `${xpAtual} / ${xpNecessario}`;

  interfaceJogo.playerXpBar.style.width = `${percentualXp}%`;

  interfaceJogo.playerGold.textContent = `${Math.floor(player.ouro)}`;
  interfaceJogo.playerSilver.textContent = `${Math.floor(player.prata)}`;

  // ------------------------------
  // Cura
  // ------------------------------

  interfaceJogo.heal.textContent = `Cura básica (${player.curas_atual})`;

  interfaceJogo.heal.disabled =
    !batalhaAtiva || player.curas_atual <= 0 || vidaJogador >= player.vida_max;
  interfaceJogo.shopHeal.hidden = player.curas_loja <= 0;
  interfaceJogo.shopHeal.textContent = `Poção de cura (${player.curas_loja})`;
  interfaceJogo.shopHeal.disabled =
    !batalhaAtiva || player.curas_loja <= 0 || vidaJogador >= player.vida_max;

  // ------------------------------
  // Mana e poções para classes mágicas
  // ------------------------------

  const temMana = usaMana();

  interfaceJogo.manaStat.hidden = !temMana;
  interfaceJogo.manaPotion.hidden = !temMana;
  interfaceJogo.shopManaPotion.hidden =
    !temMana || player.pocoes_mana_loja <= 0;
  interfaceJogo.shopManaPotion.disabled =
    !batalhaAtiva ||
    !temMana ||
    player.pocoes_mana_loja <= 0 ||
    player.mana_atual >= obterManaMaxima();

  if (temMana) {
    const manaMaxima = obterManaMaxima();
    interfaceJogo.playerMana.textContent = `${Math.ceil(player.mana_atual)} / ${Math.ceil(manaMaxima)}`;

    interfaceJogo.playerManaBar.style.width = `${Math.min(100, (player.mana_atual / manaMaxima) * 100)}%`;

    const penalidade = calcularPenalidadeMagica();

    interfaceJogo.manaEffect.hidden = penalidade === 0;
    interfaceJogo.manaEffect.textContent = `Dano mágico -${penalidade}%`;

    interfaceJogo.manaPotion.textContent = `Poção básica de mana (${player.pocoes_mana_atual})`;

    interfaceJogo.manaPotion.disabled =
      !batalhaAtiva ||
      player.pocoes_mana_atual <= 0 ||
      player.mana_atual >= manaMaxima;
    interfaceJogo.shopManaPotion.hidden = player.pocoes_mana_loja <= 0;
    interfaceJogo.shopManaPotion.textContent = `Poção de mana comprada (${player.pocoes_mana_loja})`;
    interfaceJogo.shopManaPotion.disabled =
      !batalhaAtiva ||
      player.pocoes_mana_loja <= 0 ||
      player.mana_atual >= manaMaxima;
  }
  interfaceJogo.faithStat.hidden = !ehPaladino;
  if (ehPaladino) {
    const percentualFe = Math.min(100, (player.fe_atual / player.fe_max) * 100);
    interfaceJogo.playerFaith.textContent = `${Math.ceil(player.fe_atual)} / ${Math.ceil(player.fe_max)}`;
    interfaceJogo.playerFaithBar.style.width = `${percentualFe}%`;
    interfaceJogo.playerFaithProgress.setAttribute(
      "aria-valuemax",
      player.fe_max,
    );
    interfaceJogo.playerFaithProgress.setAttribute(
      "aria-valuenow",
      Math.round(percentualFe),
    );
  }

  const descricoesDebuff = {
    pegajoso: "Pegajoso",
    lentidao: "Lentidão",
    veneno: "Veneno",
    sangramento: "Sangramento",
    queimando: "Queimando",
  };
  const debuffsAtivos = Object.entries(player.debuffs ?? {})
    .filter(([, estado]) => estado.turnos > 0)
    .map(([id, estado]) => `${descricoesDebuff[id]} (${estado.turnos})`);
  if (ehGuerreiro && player.furia_ativa) debuffsAtivos.push("Fúria ativa");
  if (ehNecromante && player.almas_invocadas > 0) {
    debuffsAtivos.push("2 almas invocadas");
  }
  if (ehPaladino && player.bencao_ativa) debuffsAtivos.push("Bênção ativa");
  interfaceJogo.playerDebuffs.textContent = debuffsAtivos.length
    ? `Efeitos: ${debuffsAtivos.join(" · ")}`
    : "";
  interfaceJogo.playerResistances.textContent = `Resistências: Físico ${descreverResistencia(obterResistenciaJogador("fisico"))} · Mágico ${descreverResistencia(obterResistenciaJogador("magico"))}`;

  // ------------------------------
  // Inventário
  // ------------------------------

  renderizarInventario();

  // ------------------------------
  // Inimigo
  // ------------------------------

  const batalhaEmGrupo = inimigos.length > 1;
  const armaMultishot = obterArmaAtual()?.multi_shot ?? 0;
  const idsAlvosVivos = new Set(
    inimigos.filter((alvo) => alvo.vida > 0).map((alvo) => alvo.id),
  );
  alvosMultishotSelecionados = new Set(
    [...alvosMultishotSelecionados].filter((id) => idsAlvosVivos.has(id)),
  );
  if (armaMultishot === 0) alvosMultishotSelecionados.clear();
  const vitality = document.querySelector(".enemy-vitality");
  interfaceJogo.enemyParty.hidden = !batalhaEmGrupo;
  interfaceJogo.enemyParty.setAttribute("role", "group");
  interfaceJogo.enemyParty.setAttribute("aria-label", "Inimigos do combate");
  interfaceJogo.enemyArt.hidden = batalhaEmGrupo;
  interfaceJogo.enemyName.hidden = batalhaEmGrupo;
  interfaceJogo.enemyLevel.hidden = batalhaEmGrupo;
  vitality.hidden = batalhaEmGrupo;
  interfaceJogo.enemyResistances.hidden = batalhaEmGrupo;
  interfaceJogo.enemyResistances.title =
    "Resistência reduz o dano; vulnerabilidade aumenta o dano recebido.";

  if (batalhaEmGrupo) {
    const cardsExistentes = [...interfaceJogo.enemyParty.children];
    const precisaCriarCards =
      cardsExistentes.length !== inimigos.length ||
      inimigos.some(
        (alvo, indice) => cardsExistentes[indice]?.dataset.enemyId !== alvo.id,
      );

    if (precisaCriarCards) {
      interfaceJogo.enemyParty.replaceChildren();
      for (const inimigoDoGrupo of inimigos) {
        const card = document.createElement("button");
        card.type = "button";
        card.className = "enemy-party-card";
        card.dataset.enemyId = inimigoDoGrupo.id;
        card.classList.toggle("is-target", inimigoDoGrupo === inimigo);
        card.setAttribute("aria-pressed", String(inimigoDoGrupo === inimigo));
        card.classList.toggle("is-defeated", inimigoDoGrupo.vida <= 0);
        const alvoMultishotSelecionado = alvosMultishotSelecionados.has(
          inimigoDoGrupo.id,
        );
        if (armaMultishot > 0) {
          card.classList.toggle(
            "is-multishot-target",
            alvoMultishotSelecionado,
          );
          card.setAttribute("aria-pressed", String(alvoMultishotSelecionado));
        }
        card.disabled = inimigoDoGrupo.vida <= 0 || !batalhaAtiva;
        card.addEventListener("click", () => {
          const armaMultishot = obterArmaAtual()?.multi_shot ?? 0;
          if (armaMultishot > 0) {
            if (alvosMultishotSelecionados.has(inimigoDoGrupo.id)) {
              alvosMultishotSelecionados.delete(inimigoDoGrupo.id);
              inimigo =
                inimigos.find(
                  (alvo) =>
                    alvo.vida > 0 && alvosMultishotSelecionados.has(alvo.id),
                ) ?? inimigoDoGrupo;
            } else {
              const maximoAlvos = 1 + armaMultishot;
              if (alvosMultishotSelecionados.size >= maximoAlvos) {
                interfaceJogo.message.textContent = `Esta arma permite selecionar até ${maximoAlvos} alvos por ataque.`;
                return;
              }
              alvosMultishotSelecionados.add(inimigoDoGrupo.id);
              inimigo = inimigoDoGrupo;
            }
          } else {
            inimigo = inimigoDoGrupo;
          }
          for (const cartao of interfaceJogo.enemyParty.querySelectorAll(
            "[data-enemy-id]",
          )) {
            const selecionado = cartao.dataset.enemyId === inimigo.id;
            const selecionadoMultishot = alvosMultishotSelecionados.has(
              cartao.dataset.enemyId,
            );
            cartao.classList.toggle("is-target", selecionado);
            cartao.classList.toggle(
              "is-multishot-target",
              armaMultishot > 0 && selecionadoMultishot,
            );
            cartao.setAttribute(
              "aria-pressed",
              String(armaMultishot > 0 ? selecionadoMultishot : selecionado),
            );
          }
          salvarJogo();
        });
        const arte = document.createElement("span");
        arte.className = "enemy-party-art";
        arte.textContent = obterSpriteInimigo(inimigoDoGrupo);
        arte.setAttribute("aria-hidden", "true");
        const nome = document.createElement("strong");
        nome.textContent = inimigoDoGrupo.nome;
        const vida = document.createElement("span");
        vida.dataset.enemyHealth = "true";
        vida.textContent =
          inimigoDoGrupo.vida <= 0
            ? "Derrotado"
            : `${Math.ceil(inimigoDoGrupo.vida)} / ${inimigoDoGrupo.vida_max} HP`;
        const barra = document.createElement("span");
        barra.className = "enemy-party-health";
        const preenchimento = document.createElement("span");
        preenchimento.style.width = `${Math.max(
          0,
          (inimigoDoGrupo.vida / inimigoDoGrupo.vida_max) * 100,
        )}%`;
        barra.append(preenchimento);
        const resistencias = document.createElement("span");
        resistencias.className = "enemy-resistance-copy";
        resistencias.textContent = descreverResistencias(inimigoDoGrupo);
        resistencias.title =
          "Resistência reduz o dano; vulnerabilidade aumenta o dano recebido.";
        card.append(arte, nome, vida, barra, resistencias);
        interfaceJogo.enemyParty.append(card);
      }
    }

    for (const [indice, inimigoDoGrupo] of inimigos.entries()) {
      const card = interfaceJogo.enemyParty.children[indice];
      const derrotado = inimigoDoGrupo.vida <= 0;
      const selecionadoMultishot = alvosMultishotSelecionados.has(
        inimigoDoGrupo.id,
      );
      card.classList.toggle("is-target", inimigoDoGrupo === inimigo);
      card.classList.toggle("is-defeated", derrotado);
      card.classList.toggle(
        "is-multishot-target",
        armaMultishot > 0 && selecionadoMultishot,
      );
      card.disabled = derrotado || !batalhaAtiva;
      card.setAttribute(
        "aria-pressed",
        String(
          armaMultishot > 0 ? selecionadoMultishot : inimigoDoGrupo === inimigo,
        ),
      );
      card.querySelector("[data-enemy-health]").textContent = derrotado
        ? "Derrotado"
        : `${Math.ceil(inimigoDoGrupo.vida)} / ${inimigoDoGrupo.vida_max} HP`;
      card.querySelector(".enemy-party-health > span").style.width =
        `${Math.max(
          0,
          (inimigoDoGrupo.vida / inimigoDoGrupo.vida_max) * 100,
        )}%`;
    }
  } else if (inimigo) {
    interfaceJogo.enemyName.textContent = inimigo.nome;
    interfaceJogo.enemyLevel.textContent = `NÍVEL ${inimigo.level}`;
    interfaceJogo.enemyResistances.textContent = descreverResistencias(inimigo);
    interfaceJogo.enemyHealth.textContent = `${Math.ceil(vidaInimigo)} / ${Math.ceil(inimigo.vida_max)}`;
    const percentualVidaInimigo = Math.min(
      100,
      (vidaInimigo / inimigo.vida_max) * 100,
    );
    interfaceJogo.enemyHealthBar.style.width = `${percentualVidaInimigo}%`;
    interfaceJogo.enemyHealthBar.setAttribute(
      "aria-valuenow",
      Math.round(percentualVidaInimigo),
    );
  }
}

function registrarMensagem(mensagem) {
  const alvos = [
    interfaceJogo.log,
    document.querySelector("#battle-log-modal"),
  ].filter(Boolean);

  for (const alvo of alvos) {
    const item = document.createElement("li");
    item.textContent = mensagem;
    alvo.prepend(item);
  }
}

function finalizarBatalha() {
  batalhaAtiva = false;

  interfaceJogo.attack.disabled = true;
  interfaceJogo.defend.disabled = true;
  interfaceJogo.heal.disabled = true;
  interfaceJogo.shopHeal.disabled = true;
  interfaceJogo.manaPotion.disabled = true;
  interfaceJogo.shopManaPotion.disabled = true;

  atualizarBotaoBatalha();
  interfaceJogo.restart.hidden = true;
}

function mostrarGameOver() {
  interfaceClasses.saveMenu.hidden = true;
  interfaceClasses.selection.hidden = true;
  interfaceClasses.creation.hidden = true;
  interfaceClasses.gameContent.hidden = true;
  const mensagensGameOver = [
    "Hora de começar outra jornada.",
    "Tente mais uma vez.",
    "Você realmente lê isso?",
  ];
  interfaceJogo.gameOverMessage.textContent =
    mensagensGameOver[Math.floor(Math.random() * mensagensGameOver.length)];
  interfaceJogo.gameOver.hidden = false;
}

function fecharMenu() {
  interfaceJogo.menu.hidden = true;
  interfaceJogo.menuToggle.setAttribute("aria-expanded", "false");
  interfaceJogo.menuToggle.setAttribute("aria-label", "Abrir menu");
}

function atualizarBotaoBatalha() {
  interfaceJogo.continue.hidden = false;
  if (faseJogo !== "batalha") {
    interfaceJogo.continue.hidden = true;
    return;
  }
  interfaceJogo.continue.disabled = !player;
  interfaceJogo.continue.textContent =
    player?.vida_atual <= 0
      ? "Recomeçar"
      : batalhaAtiva
        ? "Fugir"
        : "Voltar ao caminho →";
}

function renderizarMenuSaves() {
  interfaceClasses.saveSlots.replaceChildren();

  for (let slot = 1; slot <= QUANTIDADE_SLOTS_SAVE; slot += 1) {
    const botao = document.createElement("button");
    const titulo = document.createElement("strong");
    const detalhe = document.createElement("span");
    const save = lerItemSeguro(chaveSave(slot));
    botao.type = "button";
    botao.className = "save-slot";
    botao.dataset.saveSlot = String(slot);
    titulo.textContent = `Slot ${slot}`;

    if (save) {
      try {
        const dados = JSON.parse(save);
        const nome =
          typeof dados.nome === "string" && dados.nome.trim()
            ? dados.nome.trim()
            : "Viajante";
        detalhe.textContent = `${nome} · Nível ${dados.level ?? 1}`;
      } catch (erro) {
        console.error(`Save inválido no slot ${slot}:`, erro);
        detalhe.textContent = "Save inválido · selecione para substituir";
      }
    } else {
      detalhe.textContent = "Vazio · Novo jogo";
    }

    botao.append(titulo, detalhe);
    interfaceClasses.saveSlots.append(botao);
  }
}

function mostrarMenuSaves() {
  interfaceClasses.saveMenu.hidden = false;
  interfaceClasses.selection.hidden = true;
  interfaceClasses.creation.hidden = true;
  interfaceClasses.gameContent.hidden = true;
  interfaceJogo.gameOver.hidden = true;
  renderizarMenuSaves();
}

function iniciarNovoSave(slot) {
  slotSaveAtual = slot;
  player = null;
  interfaceClasses.saveMenu.hidden = true;
  interfaceClasses.selection.hidden = false;
  interfaceClasses.creation.hidden = true;
  interfaceClasses.gameContent.hidden = true;
  interfaceJogo.gameOver.hidden = true;
}

function carregarJogo(slot) {
  const chave = chaveSave(slot);
  const save = lerItemSeguro(chave);
  if (save === null) {
    iniciarNovoSave(slot);
    return;
  }
  try {
    const dados = JSON.parse(save);

    if (!classes[dados.classe]) {
      console.warn(`Save inválido no slot ${slot}: classe inexistente.`);
      removerItemSeguro(chave);
      mostrarMenuSaves();
      return;
    }

    slotSaveAtual = slot;
    player = {
      ...classes[dados.classe],
      ...dados,
      nome:
        typeof dados.nome === "string" && dados.nome.trim()
          ? dados.nome.trim()
          : "Viajante",
      genero:
        typeof dados.genero === "string"
          ? dados.genero
          : "prefiro-nao-informar",
    };

    prepararInventario(player);

    interfaceClasses.saveMenu.hidden = true;
    interfaceClasses.selection.hidden = true;
    interfaceClasses.creation.hidden = true;
    interfaceClasses.gameContent.hidden = false;

    iniciarJogo();
  } catch (erro) {
    console.error(`Erro ao carregar save do slot ${slot}:`, erro);
    removerItemSeguro(chave);
    mostrarMenuSaves();
  }
}
