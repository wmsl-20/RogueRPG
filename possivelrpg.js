// ==============================
// CLASSES DISPONÍVEIS
// ==============================

const classe_guerreiro = {
  classe: "guerreiro",

  // Vida
  vida_max: 120,
  vida_atual: 120,
  // Status
  dmg: 18,
  defense_max: 10,
  defense_atual: 10,
  speed_max: 10,
  speed_atual: 10,
  critico_chance: 5,
  critico_dano: 2,
  // Cura
  curas_max: 1,
  curas_atual: 1,
  // Moedas
  ouro: 0,
  prata: 0,
  // Progressão
  level: 1,
  experiencia: 0,
  run_drop_ids: [],
};

const classe_arqueiro = {
  classe: "arqueiro",

  // Vida
  vida_max: 100,
  vida_atual: 100,
  // Status
  dmg: 22,
  defense_max: 6,
  defense_atual: 6,
  speed_max: 15,
  speed_atual: 15,
  critico_chance: 20,
  critico_dano: 2,
  // Cura
  curas_max: 2,
  curas_atual: 2,
  // Moedas
  ouro: 0,
  prata: 0,
  // Progressão
  level: 1,
  experiencia: 0,
  run_drop_ids: [],
};

const classe_mago = {
  classe: "mago",

  // Vida
  vida_max: 75,
  vida_atual: 75,
  //mana
  mana_max: 100,
  mana_atual: 100,
  // Status
  dmg: 26,
  defense_max: 3,
  defense_atual: 3,
  speed_max: 8,
  speed_atual: 8,
  critico_chance: 10,
  critico_dano: 2.5,
  // Cura
  curas_max: 3,
  curas_atual: 3,
  // Poções de mana
  pocoes_mana_max: 2,
  pocoes_mana_atual: 2,
  // Efeito da poção: null = inativo, número = turnos já passados
  pocao_ticks: null,
  // Moedas
  ouro: 0,
  prata: 0,
  // Progressão
  level: 1,
  experiencia: 0,
  run_drop_ids: [],
};

// ==============================
// CLASSES ORGANIZADAS
// ==============================

const classes = {
  guerreiro: classe_guerreiro,
  arqueiro: classe_arqueiro,
  mago: classe_mago,
};

// ==============================
// JOGADOR ATUAL
// ==============================

let player = null;

// ==============================
// ARMAS INICIAIS
// ==============================

const espada_inicial = {
  id: "espada_inicial",
  tipo: "arma",
  nome: "Espada inicial",
  dmg: 5,
};

const arco_inicial = {
  id: "arco_inicial",
  tipo: "arma",
  nome: "Arco inicial",
  dmg: 7,
};

const cajado_inicial = {
  id: "cajado_inicial",
  tipo: "arma",
  nome: "Cajado inicial",
  fisico_dmg: 5,
  magic_dmg: 10,
  mana_custo: 10,
};

// ==============================
// ARMAS POR CLASSE
// ==============================

const armasIniciais = {
  guerreiro: espada_inicial,
  arqueiro: arco_inicial,
  mago: cajado_inicial,
};

// ==============================
// ARMADURAS
// ==============================

const armadura_basica = {
  id: "armadura_basica",
  tipo: "armadura",
  nome: "Armadura básica",
  defesa: 3,
};

// Chance de o Zumbi dropar a armadura básica (0.3 = 30%)
const CHANCE_DROP_ARMADURA = 0.3;

// ==============================
// CATÁLOGO DE ITENS
// ==============================

const ITENS = {
  espada_inicial,
  arco_inicial,
  cajado_inicial,
  armadura_basica,
};

// ==============================
// INIMIGOS DISPONÍVEIS
// ==============================

const tipo_inimigo = [
  "zumbi",
  "slime",
  "goblin",
  "esqueleto",
  "orc",
  "mago_inimigo",
];

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

  inventory: document.querySelector("#inventory-content"),
  inventoryButton: document.querySelector("#inventory-button"),
  inventoryModal: document.querySelector("#inventory-modal"),
  inventoryCategories: document.querySelectorAll(".inventory-category"),
  logButton: document.querySelector("#log-button"),
  logModal: document.querySelector("#log-modal"),

  enemyArt: document.querySelector("#enemy-art"),
  enemyName: document.querySelector("#enemy-name"),
  enemyLevel: document.querySelector("#enemy-level"),
  enemyHealth: document.querySelector("#enemy-health"),
  enemyHealthBar: document.querySelector("#enemy-health-bar"),

  message: document.querySelector("#battle-message"),
  log: document.querySelector("#battle-log"),

  attack: document.querySelector("#attack-button"),
  defend: document.querySelector("#defend-button"),
  heal: document.querySelector("#heal-button"),
  manaPotion: document.querySelector("#mana-potion-button"),

  continue: document.querySelector("#continue-button"),
  restart: document.querySelector("#restart-button"),
  menuContainer: document.querySelector("#game-menu-container"),
  menuToggle: document.querySelector("#menu-toggle"),
  menu: document.querySelector("#game-menu"),
  resetSave: document.querySelector("#reset-save-button"),
};

// ==============================
// INTERFACE DA SELEÇÃO DE CLASSE
// ==============================

const interfaceClasses = {
  selection: document.querySelector("#class-selection"),
  buttons: document.querySelectorAll(".class-button"),
  creation: document.querySelector("#character-creation"),
  characterForm: document.querySelector("#character-form"),
  characterName: document.querySelector("#character-name"),
  characterGender: document.querySelector("#character-gender"),
  gameContent: document.querySelector("#game-content"),
};

// ==============================
// ESTADO DA BATALHA
// ==============================

let inimigo = null;
let defendendo = false;
let batalhaAtiva = false;
let categoriaInventario = "arma";

// ==============================
// OBTER ARMA DO JOGADOR
// ==============================

function obterArmaAtual() {
  if (!player) return null;
  return ITENS[player.equipado?.arma] ?? null;
}

function obterArmaduraAtual() {
  if (!player) return null;
  return ITENS[player.equipado?.armadura] ?? null;
}

// Defesa do personagem + defesa da armadura equipada
function obterDefesaTotal() {
  return player.defense_atual + (obterArmaduraAtual()?.defesa ?? 0);
}

// ==============================
// PREPARAR INVENTÁRIO (novo jogo e saves antigos)
// ==============================

function prepararInventario(jogador) {
  const armaInicial = armasIniciais[jogador.classe];

  const inventario = Array.isArray(jogador.inventario)
    ? jogador.inventario.filter((id) => ITENS[id])
    : [];

  jogador.ouro = Number.isFinite(Number(jogador.ouro))
    ? Number(jogador.ouro)
    : 0;
  jogador.prata = Number.isFinite(Number(jogador.prata))
    ? Number(jogador.prata)
    : 0;
  jogador.run_drop_ids = Array.isArray(jogador.run_drop_ids)
    ? jogador.run_drop_ids.filter((id) => ITENS[id])
    : [];

  if (armaInicial && !inventario.includes(armaInicial.id)) {
    inventario.unshift(armaInicial.id);
  }

  const equipado = { arma: null, armadura: null };

  if (jogador.equipado && typeof jogador.equipado === "object") {
    for (const slot of ["arma", "armadura"]) {
      const id = jogador.equipado[slot];

      if (id && inventario.includes(id) && ITENS[id].tipo === slot) {
        equipado[slot] = id;
      }
    }
  } else {
    // Sem dados de equipamento: começa com a arma da classe equipada
    equipado.arma = armaInicial?.id ?? null;
  }

  jogador.inventario = inventario;
  jogador.equipado = equipado;
}

function alternarEquipamento(id) {
  const item = ITENS[id];

  if (!player || !item || !player.inventario.includes(id)) return;

  if (player.equipado[item.tipo] === id) {
    player.equipado[item.tipo] = null;
    registrarMensagem(`Você desequipou: ${item.nome}.`);
  } else {
    player.equipado[item.tipo] = id;
    registrarMensagem(`Você equipou: ${item.nome}.`);
  }

  atualizarTela();
  salvarJogo();
}

function descreverItem(item) {
  if (item.tipo === "armadura") {
    return `+${item.defesa} defesa`;
  }

  if (item.magic_dmg !== undefined) {
    return `Mágico +${item.magic_dmg} (${item.mana_custo} mana) · Físico +${item.fisico_dmg}`;
  }

  return `+${item.dmg} dano`;
}

function renderizarInventario() {
  const area = interfaceJogo.inventory;

  area.replaceChildren();

  for (const botao of interfaceJogo.inventoryCategories) {
    botao.setAttribute(
      "aria-pressed",
      String(botao.dataset.inventoryCategory === categoriaInventario),
    );
  }

  const equipamentos = document.createElement("section");
  equipamentos.className = "equipped-section";

  const tituloEquipado = document.createElement("h3");
  tituloEquipado.className = "inventory-label";
  tituloEquipado.textContent = "EQUIPADOS";
  equipamentos.append(tituloEquipado);

  const slots = [
    ["arma", "Arma", obterArmaAtual()],
    ["armadura", "Armadura", obterArmaduraAtual()],
  ];

  for (const [tipo, rotulo, item] of slots) {
    const linha = document.createElement("div");
    linha.className = "equipment-slot";

    const icone = document.createElement("span");
    icone.className = "equipment-icon";
    icone.textContent = tipo === "arma" ? "⚔" : "🛡";
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
  }

  area.append(equipamentos);

  const nomesCategoria = {
    arma: "ARMAS",
    armadura: "ARMADURAS",
    outros: "OUTROS ITENS",
  };

  const tituloItens = document.createElement("h3");
  tituloItens.className = "inventory-label items-heading";
  tituloItens.textContent = nomesCategoria[categoriaInventario];
  area.append(tituloItens);

  const itens = player.inventario
    .map((id) => ITENS[id])
    .filter((item) => {
      if (categoriaInventario === "outros") {
        return item.tipo !== "arma" && item.tipo !== "armadura";
      }

      return item.tipo === categoriaInventario;
    });

  if (itens.length === 0) {
    const vazio = document.createElement("p");
    vazio.className = "inventory-empty";
    vazio.textContent = "Nenhum item nesta categoria.";
    area.append(vazio);
  }

  for (const item of itens) {
    const id = item.id;
    const equipado = player.equipado[item.tipo] === id;

    const linha = document.createElement("div");
    linha.className = "inventory-item";

    const info = document.createElement("div");

    const nome = document.createElement("div");
    nome.className = "item-name";
    nome.textContent = item.nome;

    const stats = document.createElement("div");
    stats.className = "item-stats";
    stats.textContent = descreverItem(item);

    info.append(nome, stats);

    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "item-button";
    botao.textContent = equipado ? "Desequipar" : "Equipar";
    botao.addEventListener("click", () => alternarEquipamento(id));

    linha.append(info, botao);
    area.append(linha);
  }
}

// ==============================
// MANA E POÇÃO DE MANA
// ==============================

// Penalidade no dano mágico (em %). 3 turnos em 30%, depois -10 por turno.
function calcularPenalidadeMagica() {
  if (!player || player.pocao_ticks == null) return 0;

  const turnos = player.pocao_ticks;

  if (turnos <= 2) return 30;

  return Math.max(0, 30 - 10 * (turnos - 2));
}

// Chamada no fim de cada turno (menos no turno em que a poção foi usada)
function avancarEfeitoPocao() {
  if (!player || player.pocao_ticks == null) return;

  player.pocao_ticks += 1;

  if (calcularPenalidadeMagica() === 0) {
    player.pocao_ticks = null;
    registrarMensagem("O efeito da poção de mana acabou.");
  }
}

// ==============================
// DANO DO ATAQUE
// ==============================

function calcularDanoAtaque() {
  const arma = obterArmaAtual();

  // Sem arma: só o dano base do personagem
  if (!arma) {
    registrarMensagem("Você atacou sem arma.");
    return player.dmg;
  }

  // Arma mágica (cajado): gasta mana; sem mana, dano físico
  if (arma.magic_dmg !== undefined) {
    if (player.mana_atual >= arma.mana_custo) {
      player.mana_atual -= arma.mana_custo;

      const penalidade = calcularPenalidadeMagica();

      registrarMensagem(
        `Você lançou um feitiço (-${arma.mana_custo} de mana).`,
      );

      if (penalidade > 0) {
        registrarMensagem(`Dano mágico reduzido em ${penalidade}%.`);
      }

      return (player.dmg + arma.magic_dmg) * (1 - penalidade / 100);
    }

    registrarMensagem("Sem mana! Você atacou com o dano físico do cajado.");

    return player.dmg + arma.fisico_dmg;
  }

  return player.dmg + arma.dmg;
}

// XP necessário para o próximo nível: 100 x 1,1^(nível-1)
function xpParaProximoNivel() {
  return Math.round(100 * 1.1 ** (player.level - 1));
}

function iniciarJogo() {
  if (!player) return;

  batalhaAtiva = true;
  defendendo = false;

  if (player.vida_atual <= 0) {
    player.vida_atual = player.vida_max;
  }

  interfaceJogo.attack.disabled = false;
  interfaceJogo.defend.disabled = false;
  atualizarBotaoBatalha();
  interfaceJogo.restart.hidden = true;

  criarInimigo();
}

// ==============================
// ESCOLHER CLASSE
// ==============================

function escolherClasse(nomeClasse) {
  const base = classes[nomeClasse];

  if (!base) {
    console.warn("Classe inválida:", nomeClasse);
    return;
  }

  // Cópia, para não alterar o molde original da classe
  player = { ...base };

  [interfaceJogo.log, document.querySelector("#battle-log-modal")]
    .filter(Boolean)
    .forEach((elemento) => elemento.replaceChildren());

  interfaceClasses.selection.hidden = true;
  interfaceClasses.creation.hidden = false;
  interfaceClasses.gameContent.hidden = true;

  interfaceClasses.characterName.value = "";
  interfaceClasses.characterGender.value = "masculino";
  interfaceClasses.characterName.focus();
}

interfaceClasses.characterForm.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = interfaceClasses.characterName.value.trim();

  if (!nome) {
    interfaceClasses.characterName.value = "";
    interfaceClasses.characterName.reportValidity();
    return;
  }

  player.nome = nome;
  player.genero = interfaceClasses.characterGender.value;

  prepararInventario(player);

  interfaceClasses.creation.hidden = true;
  interfaceClasses.gameContent.hidden = false;

  iniciarJogo();
  salvarJogo();
});

// ==============================
// CRIAÇÃO DO INIMIGO
// ==============================

function criarInimigo() {
  if (!player) return;

  const tipo = tipo_inimigo[Math.floor(Math.random() * tipo_inimigo.length)];
  const nivel = player.level;

  const modelos = {
    slime: {
      nome: "Slime",
      vida: 55,
      dmg: 11,
      xp: 9,
      speed: 10,
      prata: 4,
      ouro: 0,
    },
    zumbi: {
      nome: "Zumbi",
      vida: 80,
      dmg: 14,
      xp: 12,
      speed: 9,
      prata: 10,
      ouro: 1,
    },
    goblin: {
      nome: "Goblin",
      vida: 70,
      dmg: 18,
      xp: 16,
      speed: 15,
      prata: 14,
      ouro: 2,
    },
    esqueleto: {
      nome: "Esqueleto",
      vida: 90,
      dmg: 20,
      xp: 20,
      speed: 18,
      prata: 18,
      ouro: 3,
    },
    orc: {
      nome: "Orc",
      vida: 135,
      dmg: 27,
      xp: 30,
      speed: 10,
      prata: 22,
      ouro: 5,
    },
    mago_inimigo: {
      nome: "Mago Inimigo",
      vida: 65,
      dmg: 26,
      xp: 24,
      speed: 12,
      prata: 20,
      ouro: 4,
    },
  };

  const base = modelos[tipo];
  const fatorCombate = 1.12 ** (nivel - 1);
  const fatorXp = 1.05 ** (nivel - 1);

  inimigo = {
    tipo,
    nome: base.nome,
    level: nivel,
    vida_max: Math.round(base.vida * fatorCombate),
    vida: Math.round(base.vida * fatorCombate),
    dmg: Math.round(base.dmg * fatorCombate),
    xp: Math.round(base.xp * fatorXp),
    speed: base.speed + (nivel - 1),
    prata: base.prata,
    ouro: base.ouro,
  };

  const sprites = {
    zumbi: "🧟",
    slime: "🟢",
    goblin: "👺",
    esqueleto: "💀",
    orc: "👹",
    mago_inimigo: "🧙",
  };

  interfaceJogo.enemyArt.textContent = sprites[tipo];
  interfaceJogo.message.textContent = `Um ${inimigo.nome} apareceu.`;

  atualizarTela();
}

// ==============================
// ATUALIZAÇÃO DA INTERFACE
// ==============================

function atualizarTela() {
  if (!player || !inimigo) return;

  atualizarBotaoBatalha();

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

  const xpNecessario = xpParaProximoNivel();

  interfaceJogo.playerXp.textContent = `${player.experiencia} / ${xpNecessario}`;

  interfaceJogo.playerXpBar.style.width = `${Math.min(100, (player.experiencia / xpNecessario) * 100)}%`;

  interfaceJogo.playerGold.textContent = `${Math.floor(player.ouro)}`;
  interfaceJogo.playerSilver.textContent = `${Math.floor(player.prata)}`;

  // ------------------------------
  // Cura
  // ------------------------------

  interfaceJogo.heal.textContent = `Curar (${player.curas_atual})`;

  interfaceJogo.heal.disabled =
    !batalhaAtiva || player.curas_atual <= 0 || vidaJogador >= player.vida_max;

  // ------------------------------
  // Mana e poção (só o mago)
  // ------------------------------

  const ehMago = player.classe === "mago";

  interfaceJogo.manaStat.hidden = !ehMago;
  interfaceJogo.manaPotion.hidden = !ehMago;

  if (ehMago) {
    interfaceJogo.playerMana.textContent = `${Math.ceil(player.mana_atual)} / ${Math.ceil(player.mana_max)}`;

    interfaceJogo.playerManaBar.style.width = `${Math.min(100, (player.mana_atual / player.mana_max) * 100)}%`;

    const penalidade = calcularPenalidadeMagica();

    interfaceJogo.manaEffect.hidden = penalidade === 0;
    interfaceJogo.manaEffect.textContent = `Dano mágico -${penalidade}%`;

    interfaceJogo.manaPotion.textContent = `Poção de Mana (${player.pocoes_mana_atual})`;

    interfaceJogo.manaPotion.disabled =
      !batalhaAtiva ||
      player.pocoes_mana_atual <= 0 ||
      player.mana_atual >= player.mana_max;
  }

  // ------------------------------
  // Inventário
  // ------------------------------

  renderizarInventario();

  // ------------------------------
  // Inimigo
  // ------------------------------

  interfaceJogo.enemyName.textContent = inimigo.nome;

  interfaceJogo.enemyLevel.textContent = `NÍVEL ${inimigo.level}`;

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

// ==============================
// LOG DA BATALHA
// ==============================

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

// ==============================
// FINALIZAÇÃO DA BATALHA
// ==============================

function finalizarBatalha() {
  batalhaAtiva = false;

  interfaceJogo.attack.disabled = true;
  interfaceJogo.defend.disabled = true;
  interfaceJogo.heal.disabled = true;

  atualizarBotaoBatalha();
  interfaceJogo.restart.hidden = true;
}

// ==============================
// NOVA RUN
// ==============================

function novaRun() {
  if (!player) return;

  player.vida_atual = player.vida_max;
  player.experiencia = 0;
  player.curas_atual = player.curas_max;
  player.ouro = 0;
  player.prata = 0;
  player.run_drop_ids = [];

  player.defense_atual = player.defense_max;
  player.speed_atual = player.speed_max;

  if (player.classe === "mago") {
    player.mana_atual = player.mana_max;
    player.pocoes_mana_atual = player.pocoes_mana_max;
    player.pocao_ticks = null;
  }

  const itensIniciais = new Set(
    [armasIniciais[player.classe]?.id].filter(Boolean),
  );
  player.inventario = player.inventario.filter(
    (id) => itensIniciais.has(id) || !player.run_drop_ids.includes(id),
  );
  player.equipado = {
    arma: armasIniciais[player.classe]?.id ?? null,
    armadura: null,
  };

  inimigo = null;

  defendendo = false;

  batalhaAtiva = true;

  interfaceJogo.attack.disabled = false;
  interfaceJogo.defend.disabled = false;

  atualizarBotaoBatalha();
  interfaceJogo.restart.hidden = true;

  criarInimigo();

  salvarJogo();
}

// ==============================
// VITÓRIA
// ==============================

function concluirVitoria() {
  batalhaAtiva = false;

  player.experiencia += inimigo.xp;
  player.prata += inimigo.prata;
  player.ouro += inimigo.ouro;

  registrarMensagem(`${inimigo.nome} derrotado. Você ganhou ${inimigo.xp} XP.`);
  if (inimigo.prata || inimigo.ouro) {
    registrarMensagem(
      `Você recebeu ${inimigo.prata} prata e ${inimigo.ouro} ouro.`,
    );
  }

  // ------------------------------
  // Drop de armadura (só do Zumbi, uma vez)
  // ------------------------------

  if (
    inimigo.tipo === "zumbi" &&
    !player.inventario.includes(armadura_basica.id) &&
    Math.random() < CHANCE_DROP_ARMADURA
  ) {
    player.inventario.push(armadura_basica.id);
    player.run_drop_ids.push(armadura_basica.id);

    registrarMensagem(
      `🛡️ ${inimigo.nome} dropou: ${armadura_basica.nome}! Equipe no inventário.`,
    );
  }

  // ------------------------------
  // Mana pós-batalha (25% da mana perdida)
  // ------------------------------

  if (player.classe === "mago") {
    const manaRecuperada = (player.mana_max - player.mana_atual) * 0.25;

    player.mana_atual += manaRecuperada;

    if (manaRecuperada > 0) {
      registrarMensagem(`Você recuperou ${Math.ceil(manaRecuperada)} de mana.`);
    }
  }

  // ------------------------------
  // Cura pós-batalha
  // ------------------------------

  const cura = (player.vida_max - player.vida_atual) * 0.25;

  player.vida_atual += cura;

  if (cura > 0) {
    registrarMensagem(`Você recuperou ${Math.ceil(cura)} pontos de vida.`);
  }

  // ------------------------------
  // Level Up
  // ------------------------------

  if (player.experiencia >= xpParaProximoNivel()) {
    player.level += 1;

    player.experiencia = 0;

    player.vida_max *= 1.12;

    player.dmg *= 1.12;

    player.defense_max += 1;

    player.speed_max += 1;

    // +1 cura a cada 3 níveis
    if (player.level % 3 === 0) {
      player.curas_max += 1;
    }

    player.vida_atual = player.vida_max;

    player.curas_atual = player.curas_max;

    player.defense_atual = player.defense_max;

    player.speed_atual = player.speed_max;

    if (player.classe === "mago") {
      player.mana_max += 10;
      player.mana_atual = player.mana_max;

      // +1 poção de mana a cada 3 níveis
      if (player.level % 3 === 0) {
        player.pocoes_mana_max += 1;
      }

      player.pocoes_mana_atual = player.pocoes_mana_max;
    }

    registrarMensagem(`LEVEL UP! Você chegou ao nível ${player.level}.`);
  }

  interfaceJogo.message.textContent = "Vitória. Pronto para outra batalha?";

  interfaceJogo.attack.disabled = true;
  interfaceJogo.defend.disabled = true;

  atualizarBotaoBatalha();

  atualizarTela();

  salvarJogo();
}

// ==============================
// ATAQUE CRÍTICO
// ==============================

function calcularDanoCritico(dano) {
  const sorteio = Math.random() * 100;

  if (sorteio <= player.critico_chance) {
    const danoCritico = dano * player.critico_dano;

    registrarMensagem("⚡ ACERTO CRÍTICO!");

    return danoCritico;
  }

  return dano;
}

// ==============================
// ATAQUE DO INIMIGO
// ==============================

// Retorna false se o jogador morreu
function ataqueInimigo() {
  const defesaTotal = obterDefesaTotal();

  const reducaoDefesa = defesaTotal / (defesaTotal + 20);

  let danoRecebido = Math.max(1, inimigo.dmg * (1 - reducaoDefesa));

  if (defendendo) {
    if (player.speed_atual > inimigo.speed) {
      danoRecebido = 0;
      registrarMensagem("Sua velocidade anulou o dano.");
    } else {
      danoRecebido /= 2;
      registrarMensagem("Sua defesa reduziu o dano pela metade.");
    }
  }

  defendendo = false;

  player.vida_atual -= danoRecebido;

  registrarMensagem(
    `${inimigo.nome} causou ${Math.ceil(danoRecebido)} de dano em você.`,
  );

  if (player.vida_atual <= 0) {
    player.vida_atual = 0;

    const itensAntes = [...player.inventario];
    player.prata = 0;
    player.ouro = 0;
    player.run_drop_ids = Array.isArray(player.run_drop_ids)
      ? player.run_drop_ids
      : [];

    const armaInicial = armasIniciais[player.classe]?.id;
    const manter = new Set([armaInicial].filter(Boolean));
    player.inventario = itensAntes.filter(
      (id) => manter.has(id) || !player.run_drop_ids.includes(id),
    );

    if (player.equipado) {
      if (player.equipado.arma && !manter.has(player.equipado.arma)) {
        player.equipado.arma = armaInicial ?? null;
      }

      if (
        player.equipado.armadura &&
        player.run_drop_ids.includes(player.equipado.armadura)
      ) {
        player.equipado.armadura = null;
      }
    }

    player.curas_atual = Math.min(player.curas_atual, player.curas_max);
    player.run_drop_ids = [];

    atualizarTela();

    interfaceJogo.message.textContent = "Você foi derrotado.";

    registrarMensagem(
      "Fim de jogo. Seu nível e curas foram mantidos, mas o dinheiro e os itens da run foram perdidos.",
    );

    finalizarBatalha();

    salvarJogo();

    return false;
  }

  return true;
}

// ==============================
// AÇÃO DO JOGADOR
// ==============================

// Retorna true se o inimigo morreu
function executarAcaoJogador(acao) {
  if (acao === "curar") {
    const cura = (player.vida_max - player.vida_atual) * 0.5;

    player.vida_atual += cura;

    player.curas_atual -= 1;

    registrarMensagem(`Você recuperou ${Math.ceil(cura)} de vida.`);

    registrarMensagem(`Curas restantes: ${player.curas_atual}`);

    return false;
  }

  if (acao === "pocao_mana") {
    const recuperada = Math.min(
      player.mana_max - player.mana_atual,
      player.mana_max * 0.7,
    );

    player.mana_atual += recuperada;

    player.pocoes_mana_atual -= 1;

    // Começa o efeito: 3 turnos com -30% no dano mágico
    player.pocao_ticks = 0;

    registrarMensagem(`Você recuperou ${Math.ceil(recuperada)} de mana.`);

    registrarMensagem("Dano mágico -30% por 3 turnos.");

    registrarMensagem(`Poções restantes: ${player.pocoes_mana_atual}`);

    return false;
  }

  if (acao === "atacar") {
    const dano = calcularDanoCritico(calcularDanoAtaque());

    inimigo.vida -= dano;

    registrarMensagem(`${inimigo.nome} recebeu ${Math.ceil(dano)} de dano.`);

    return inimigo.vida <= 0;
  }

  if (acao === "defender") {
    registrarMensagem("Você se defendeu.");
  }

  return false;
}

// ==============================
// TURNO DE COMBATE
// ==============================

function jogarTurno(acao) {
  if (!batalhaAtiva || !player || !inimigo) {
    return;
  }

  // Validações antes de gastar o turno
  if (acao === "curar") {
    if (player.curas_atual <= 0) {
      registrarMensagem("Você não tem curas disponíveis!");

      return;
    }

    if (player.vida_atual >= player.vida_max) {
      registrarMensagem("Sua vida já está cheia!");

      return;
    }
  }

  if (acao === "pocao_mana") {
    if (player.classe !== "mago") return;

    if (player.pocoes_mana_atual <= 0) {
      registrarMensagem("Você não tem poções de mana!");

      return;
    }

    if (player.mana_atual >= player.mana_max) {
      registrarMensagem("Sua mana já está cheia!");

      return;
    }
  }

  if (acao === "defender") {
    defendendo = true;
  }

  // Quem tem mais velocidade age primeiro. Empate: o jogador.
  const inimigoPrimeiro = inimigo.speed > player.speed_atual;

  if (inimigoPrimeiro) {
    registrarMensagem(`${inimigo.nome} é mais rápido e atacou primeiro.`);

    if (!ataqueInimigo()) return;
  }

  const inimigoMorreu = executarAcaoJogador(acao);

  if (inimigoMorreu) {
    defendendo = false;

    if (acao !== "pocao_mana") avancarEfeitoPocao();

    atualizarTela();

    concluirVitoria();

    return;
  }

  if (!inimigoPrimeiro) {
    if (!ataqueInimigo()) return;
  }

  // O turno em que a poção é usada não conta para o efeito
  if (acao !== "pocao_mana") avancarEfeitoPocao();

  atualizarTela();

  salvarJogo();
}

// ==============================
// REINICIAR RUN
// ==============================

function reiniciarJogo() {
  if (!player) return;

  novaRun();
}

function limparItensDaRun() {
  if (!player) return;

  const armaInicial = armasIniciais[player.classe]?.id;
  const manter = new Set([armaInicial].filter(Boolean));

  player.inventario = player.inventario.filter(
    (id) => manter.has(id) || !player.run_drop_ids.includes(id),
  );

  if (player.equipado) {
    if (player.equipado.arma && !manter.has(player.equipado.arma)) {
      player.equipado.arma = armaInicial ?? null;
    }

    if (
      player.equipado.armadura &&
      player.run_drop_ids.includes(player.equipado.armadura)
    ) {
      player.equipado.armadura = null;
    }
  }

  player.run_drop_ids = [];
  player.prata = 0;
  player.ouro = 0;
  player.curas_atual = Math.min(player.curas_atual, player.curas_max);
}

// ==============================
// RESETAR SAVE
// ==============================

function resetarSave() {
  if (
    !window.confirm("Tem certeza que deseja apagar o save e reiniciar o jogo?")
  ) {
    return;
  }

  localStorage.removeItem("rpg_save");

  player = null;

  inimigo = null;

  defendendo = false;

  batalhaAtiva = false;

  [interfaceJogo.log, document.querySelector("#battle-log-modal")]
    .filter(Boolean)
    .forEach((elemento) => elemento.replaceChildren());

  interfaceJogo.attack.disabled = true;
  interfaceJogo.defend.disabled = true;
  interfaceJogo.heal.disabled = true;

  atualizarBotaoBatalha();
  interfaceJogo.restart.hidden = true;

  interfaceClasses.selection.hidden = false;
  interfaceClasses.creation.hidden = true;
  interfaceClasses.gameContent.hidden = true;
  interfaceJogo.playerName.textContent = "Viajante";

  registrarMensagem("Save apagado. Escolha uma nova classe.");
}

// ==============================
// EVENTOS DA SELEÇÃO DE CLASSE
// ==============================

interfaceClasses.buttons.forEach((botao) => {
  botao.addEventListener("click", () => {
    const nomeClasse = botao.dataset.class;

    escolherClasse(nomeClasse);
  });
});

// ==============================
// EVENTOS DOS BOTÕES
// ==============================

function fecharMenu() {
  interfaceJogo.menu.hidden = true;
  interfaceJogo.menuToggle.setAttribute("aria-expanded", "false");
  interfaceJogo.menuToggle.setAttribute("aria-label", "Abrir menu");
}

interfaceJogo.menuToggle.addEventListener("click", () => {
  const menuAberto =
    interfaceJogo.menuToggle.getAttribute("aria-expanded") === "true";

  interfaceJogo.menu.hidden = menuAberto;
  interfaceJogo.menuToggle.setAttribute("aria-expanded", String(!menuAberto));
  interfaceJogo.menuToggle.setAttribute(
    "aria-label",
    menuAberto ? "Abrir menu" : "Fechar menu",
  );
});

interfaceJogo.inventoryButton.addEventListener("click", () => {
  interfaceJogo.inventoryModal.showModal();
});

interfaceJogo.logButton.addEventListener("click", () => {
  interfaceJogo.logModal.showModal();
});

for (const modal of [interfaceJogo.inventoryModal, interfaceJogo.logModal]) {
  modal.querySelector("[data-close-modal]").addEventListener("click", () => {
    modal.close();
  });

  modal.addEventListener("click", (evento) => {
    if (evento.target === modal) {
      modal.close();
    }
  });
}

interfaceJogo.inventoryCategories.forEach((botao) => {
  botao.addEventListener("click", () => {
    categoriaInventario = botao.dataset.inventoryCategory;
    renderizarInventario();
  });
});

document.addEventListener("click", (evento) => {
  if (!interfaceJogo.menuContainer.contains(evento.target)) {
    fecharMenu();
  }
});

document.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape") {
    fecharMenu();

    for (const modal of [
      interfaceJogo.inventoryModal,
      interfaceJogo.logModal,
    ]) {
      if (modal.open) modal.close();
    }
  }
});

interfaceJogo.attack.addEventListener("click", () => jogarTurno("atacar"));

interfaceJogo.defend.addEventListener("click", () => jogarTurno("defender"));

interfaceJogo.heal.addEventListener("click", () => jogarTurno("curar"));

interfaceJogo.manaPotion.addEventListener("click", () =>
  jogarTurno("pocao_mana"),
);

// ==============================
// PRÓXIMA BATALHA
// ==============================

function atualizarBotaoBatalha() {
  interfaceJogo.continue.hidden = false;
  interfaceJogo.continue.disabled = !player;
  interfaceJogo.continue.textContent = player?.vida_atual <= 0
    ? "Recomeçar"
    : batalhaAtiva ? "Fugir" : "Próxima batalha →";
}

function fugirDaBatalha() {
  if (!batalhaAtiva || !player || !inimigo || player.vida_atual <= 0) return;
  batalhaAtiva = false;
  defendendo = false;
  interfaceJogo.attack.disabled = true;
  interfaceJogo.defend.disabled = true;
  interfaceJogo.message.textContent = "Você fugiu. Pronto para outra batalha?";
  registrarMensagem(
    `Você fugiu de ${inimigo.nome}. Nenhum XP, moeda ou item foi recebido.`,
  );
  atualizarTela();
  salvarJogo();
}

interfaceJogo.continue.addEventListener("click", () => {
  if (!player) return;
  if (player.vida_atual <= 0) {
    novaRun();
    return;
  }
  if (batalhaAtiva) {
    fugirDaBatalha();
    return;
  }
  batalhaAtiva = true;
  defendendo = false;
  interfaceJogo.attack.disabled = false;
  interfaceJogo.defend.disabled = false;
  criarInimigo();
  salvarJogo();
});

// ==============================
// BOTÕES DE REINÍCIO
// ==============================

interfaceJogo.restart.addEventListener("click", reiniciarJogo);

interfaceJogo.resetSave.addEventListener("click", () => {
  fecharMenu();
  resetarSave();
});

// ==============================
// SISTEMA DE SAVE
// ==============================

function salvarJogo() {
  if (!player) return;

  localStorage.setItem("rpg_save", JSON.stringify(player));
}

// ==============================
// CARREGAR SAVE
// ==============================

function carregarJogo() {
  const save = localStorage.getItem("rpg_save");

  if (!save) {
    interfaceClasses.selection.hidden = false;
    interfaceClasses.creation.hidden = true;
    interfaceClasses.gameContent.hidden = true;

    interfaceJogo.attack.disabled = true;
    interfaceJogo.defend.disabled = true;
    interfaceJogo.heal.disabled = true;

    return;
  }

  try {
    const dados = JSON.parse(save);

    if (!classes[dados.classe]) {
      console.warn("Save antigo ou classe inválida.");

      interfaceClasses.selection.hidden = false;

      return;
    }

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

    interfaceClasses.selection.hidden = true;
    interfaceClasses.creation.hidden = true;
    interfaceClasses.gameContent.hidden = false;

    iniciarJogo();
  } catch (erro) {
    console.error("Erro ao carregar save:", erro);

    localStorage.removeItem("rpg_save");

    interfaceClasses.selection.hidden = false;
  }
}

// ==============================
// INICIALIZAÇÃO
// ==============================

carregarJogo();
