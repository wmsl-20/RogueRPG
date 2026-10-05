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

// ARMAS DE GUERREIRO
// ==============================

const espada_inicial = {
  id: "espada_inicial",
  tipo: "arma",
  nome: "Espada inicial",
  dmg: 3,
};

const espada_de_ferro_basica = {
  id: "espada_de_ferro_basica",
  tipo: "arma",
  nome: "Espada de ferro básica",
  dmg: 5,
};

const maça = {
  id: "maca",
  tipo: "arma",
  nome: "Maça",
  dmg: 7,
};

const espada_longa = {
  id: "espada_longa",
  tipo: "arma",
  nome: "Espada longa",
  dmg: 10,
};

// ==============================
// ARMAS DE LONGO ALCANCE
// ==============================

const arco_inicial = {
  id: "arco_inicial",
  tipo: "arma",
  nome: "Arco inicial",
  dmg: 5,
};

const arco_de_bambu_basico = {
  id: "arco_de_bambu_basico",
  tipo: "arma",
  nome: "Arco de bambu básico",
  dmg: 7,
  reload_time: 0, // tempo de recarga em turnos
};

const besta = {
  id: "besta",
  tipo: "arma",
  nome: "Besta",
  dmg: 9,
  reload_time: 2, // tempo de recarga em turnos
};

const arco_composto = {
  id: "arco_composto",
  tipo: "arma",
  nome: "Arco composto",
  dmg: 12,
  reload_time: 1.5, // tempo de recarga em turnos
};

// ==============================
// ARMAS MÁGICAS
// ==============================

const cajado_inicial = {
  id: "cajado_inicial",
  tipo: "arma",
  nome: "Cajado inicial",
  fisico_dmg: 2,
  magic_dmg: 7,
  mana_custo: 10,
};

const cajado_de_madeira_basico = {
  id: "cajado_de_madeira_basico",
  tipo: "arma",
  nome: "Cajado de madeira básico",
  fisico_dmg: 3,
  magic_dmg: 10,
  mana_custo: 15,
};

const varinha_magica = {
  id: "varinha_magica",
  tipo: "arma",
  nome: "Varinha mágica",
  fisico_dmg: 1,
  magic_dmg: 15,
  mana_custo: 20,
};

const livro_de_feiticos = {
  id: "livro_de_feiticos",
  tipo: "arma",
  nome: "Livro de feitiços",
  fisico_dmg: 2,
  magic_dmg: 20,
  mana_custo: 25,
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

const casaco_de_couro = {
  id: "casaco_de_couro",
  tipo: "armadura",
  nome: "Casaco de couro",
  defesa: 2,
};

const armadura_de_placas = {
  id: "armadura_de_placas",
  tipo: "armadura",
  nome: "Armadura de placas",
  defesa: 5,
};

const cota_de_malha = {
  id: "cota_de_malha",
  tipo: "armadura",
  nome: "Cota de malha",
  defesa: 7,
};

const capa_mistica = {
  id: "capa_mistica",
  tipo: "armadura",
  nome: "Capa mística",
  defesa: 7.5,
  mana_bonus: 10, // bônus de mana máxima
  mana_regeneracao: 1, // regeneração de mana por turno
};

// Chance de o Zumbi dropar a armadura básica (0.3 = 30%)
const CHANCE_DROP_ARMADURA = 0.3;

// ==============================
// CATÁLOGO DE ITENS
// ==============================

const ITENS = {
  espada_inicial,
  espada_de_ferro_basica,
  maca: maça,
  espada_longa,
  arco_inicial,
  arco_de_bambu_basico,
  besta,
  arco_composto,
  cajado_inicial,
  cajado_de_madeira_basico,
  varinha_magica,
  livro_de_feiticos,
  casaco_de_couro,
  armadura_de_placas,
  cota_de_malha,
  capa_mistica,
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
  routePanel: document.querySelector("#route-panel"),
  routeTitle: document.querySelector("#route-title"),
  routeProgress: document.querySelector("#route-progress"),
  routeHistory: document.querySelector("#route-history"),
  routeOptions: document.querySelector("#route-options"),
  shopView: document.querySelector("#shop-view"),
  shopBalance: document.querySelector("#shop-balance"),
  shopItems: document.querySelector("#shop-items"),
  leaveShop: document.querySelector("#leave-shop-button"),

  inventory: document.querySelector("#inventory-content"),
  inventoryButton: document.querySelector("#inventory-button"),
  inventoryModal: document.querySelector("#inventory-modal"),
  inventoryCategories: document.querySelectorAll(".inventory-category"),
  logButton: document.querySelector("#log-button"),
  logModal: document.querySelector("#log-modal"),

  enemyArt: document.querySelector("#enemy-art"),
  encounterKind: document.querySelector("#encounter-kind"),
  enemyName: document.querySelector("#enemy-name"),
  enemyLevel: document.querySelector("#enemy-level"),
  enemyHealth: document.querySelector("#enemy-health"),
  enemyHealthBar: document.querySelector("#enemy-health-bar"),

  message: document.querySelector("#battle-message"),
  log: document.querySelector("#battle-log"),

  attack: document.querySelector("#attack-button"),
  defend: document.querySelector("#defend-button"),
  heal: document.querySelector("#heal-button"),
  shopHeal: document.querySelector("#shop-heal-button"),
  manaPotion: document.querySelector("#mana-potion-button"),
  shopManaPotion: document.querySelector("#shop-mana-potion-button"),

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
let faseJogo = "batalha";

const PASSOS_ATE_BOSS = 4;
const OFERTAS_LOJA = [
  { id: "espada_de_ferro_basica", preco: 35 },
  { id: "maca", preco: 55 },
  { id: "espada_longa", preco: 90 },
  { id: "arco_de_bambu_basico", preco: 35 },
  { id: "besta", preco: 55 },
  { id: "arco_composto", preco: 90 },
  { id: "cajado_de_madeira_basico", preco: 40 },
  { id: "varinha_magica", preco: 65 },
  { id: "livro_de_feiticos", preco: 100 },
  { id: "casaco_de_couro", preco: 30 },
  { id: "armadura_de_placas", preco: 65 },
  { id: "cota_de_malha", preco: 95 },
  { id: "capa_mistica", preco: 110 },
  { id: "cura_loja", preco: 20 },
  { id: "pocao_mana_loja", preco: 25 },
];

function obterManaMaxima() {
  return player
    ? player.mana_max + (obterArmaduraAtual()?.mana_bonus ?? 0)
    : 0;
}

function obterMoedasEmPrata(jogador = player) {
  return Math.floor(jogador.ouro * 10 + jogador.prata);
}

function definirMoedasDePrata(total) {
  player.ouro = Math.floor(total / 10);
  player.prata = total % 10;
}

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
  jogador.curas_loja = Number.isFinite(Number(jogador.curas_loja))
    ? Math.max(0, Math.floor(Number(jogador.curas_loja)))
    : 0;
  jogador.pocoes_mana_loja = Number.isFinite(Number(jogador.pocoes_mana_loja))
    ? Math.max(0, Math.floor(Number(jogador.pocoes_mana_loja)))
    : 0;
  jogador.route_step = Number.isFinite(Number(jogador.route_step))
    ? Math.min(PASSOS_ATE_BOSS, Math.max(0, Math.floor(Number(jogador.route_step))))
    : 0;
  jogador.route_history = Array.isArray(jogador.route_history)
    ? jogador.route_history.filter((nome) => typeof nome === "string")
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

  if (player.classe === "mago") {
    player.mana_atual = Math.min(player.mana_atual, obterManaMaxima());
  }

  atualizarTela();
  salvarJogo();
}

function descreverItem(item) {
  if (item.tipo === "armadura") {
    const extras = [];
    if (item.mana_bonus) extras.push(`+${item.mana_bonus} mana máxima`);
    if (item.mana_regeneracao) {
      extras.push(`+${item.mana_regeneracao} mana por turno`);
    }
    return [`+${item.defesa} defesa`, ...extras].join(" · ");
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
    .filter(Boolean)
    .filter((item) => {
      if (categoriaInventario === "outros") {
        return item.tipo !== "arma" && item.tipo !== "armadura";
      }

      return item.tipo === categoriaInventario;
    });

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

  for (const item of itens) {
    const id = item.id;
    const equipado =
      item.tipo === "arma" || item.tipo === "armadura"
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
    botao.textContent = item.tipo === "consumivel" ? "Usar" : equipado ? "Desequipar" : "Equipar";
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

function obterOpcoesDeRota() {
  if (player.route_step >= PASSOS_ATE_BOSS) {
    return [
      {
        id: "boss",
        titulo: "Chefe",
        descricao: "Uma batalha decisiva aguarda no fim do caminho.",
        icone: "☠",
      },
    ];
  }

  const terceiraOpcao =
    player.route_step % 2 === 0
      ? {
          id: "descanso",
          titulo: "Acampamento",
          descricao: "Descanse e recupere vida e mana.",
          icone: "🔥",
        }
      : {
          id: "elite",
          titulo: "Inimigo de elite",
          descricao: "Um combate mais difícil com recompensas melhores.",
          icone: "⚔",
        };

  return [
    {
      id: "combate",
      titulo: "Combate",
      descricao: "Enfrente um inimigo e ganhe experiência e moedas.",
      icone: "⚔",
    },
    {
      id: "loja",
      titulo: "Loja",
      descricao: "Gaste suas moedas em equipamentos e consumíveis.",
      icone: "◆",
    },
    terceiraOpcao,
  ];
}

function mostrarRotas() {
  if (!player) return;

  faseJogo = "rota";
  interfaceJogo.routePanel.hidden = false;
  document.querySelector(".game-grid").hidden = true;
  interfaceJogo.shopView.hidden = true;
  interfaceJogo.routeOptions.hidden = false;
  interfaceJogo.routeTitle.textContent =
    player.route_step >= PASSOS_ATE_BOSS
      ? "O chefe bloqueia seu caminho"
      : "Escolha seu caminho";
  interfaceJogo.routeProgress.textContent =
    `Etapa ${Math.min(player.route_step + 1, PASSOS_ATE_BOSS)} de ${PASSOS_ATE_BOSS} · Chefe`;

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
  for (const opcao of obterOpcoesDeRota()) {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "route-card";
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
    botao.addEventListener("click", () => escolherRota(opcao.id));
    interfaceJogo.routeOptions.append(botao);
  }

  atualizarBotaoBatalha();
  salvarJogo();
}

function registrarNoDeRota(nome) {
  player.route_history.push(nome);
  player.route_history = player.route_history.slice(-4);
}

function escolherRota(tipo) {
  if (!player || faseJogo !== "rota") return;

  const nomes = {
    combate: "Combate",
    loja: "Loja",
    descanso: "Acampamento",
    elite: "Elite",
    boss: "Chefe",
  };

  if (tipo === "boss") {
    iniciarCombate("boss");
    return;
  }

  if (tipo === "loja") {
    player.route_step += 1;
    registrarNoDeRota(nomes[tipo]);
    mostrarLoja();
    return;
  }

  if (tipo === "descanso") {
    player.route_step += 1;
    registrarNoDeRota(nomes[tipo]);
    const vidaCurada = Math.min(player.vida_max - player.vida_atual, player.vida_max * 0.3);
    player.vida_atual += vidaCurada;
    if (player.classe === "mago") {
      player.mana_atual = Math.min(
        obterManaMaxima(),
        player.mana_atual + obterManaMaxima() * 0.3,
      );
    }
    registrarMensagem(`Você descansou e recuperou ${Math.ceil(vidaCurada)} de vida.`);
    mostrarRotas();
    atualizarTela();
    return;
  }

  if (tipo === "combate" || tipo === "elite") {
    registrarNoDeRota(nomes[tipo]);
    iniciarCombate(tipo);
  }
}

function formatarPreco(preco) {
  const ouro = Math.floor(preco / 10);
  const prata = preco % 10;
  return [
    ouro > 0 ? `${ouro} ouro` : "",
    prata > 0 ? `${prata} prata` : "",
  ]
    .filter(Boolean)
    .join(" e ");
}

function atualizarSaldoLoja() {
  const total = obterMoedasEmPrata();
  interfaceJogo.shopBalance.textContent =
    `Seu saldo: ${Math.floor(total / 10)} ouro e ${total % 10} prata`;
}

function renderizarLoja() {
  interfaceJogo.shopItems.replaceChildren();
  atualizarSaldoLoja();

  for (const oferta of OFERTAS_LOJA) {
    const consumivel =
      oferta.id === "cura_loja" || oferta.id === "pocao_mana_loja";
    if (oferta.id === "pocao_mana_loja" && player.classe !== "mago") continue;

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
    const podeComprar =
      !jaPossui && obterMoedasEmPrata() >= oferta.preco;

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

    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "item-button";
    botao.textContent = jaPossui ? "Já possui" : "Comprar";
    botao.disabled = !podeComprar;
    botao.addEventListener("click", () => comprarOferta(oferta));
    linha.append(detalhes, botao);
    interfaceJogo.shopItems.append(linha);
  }
}

function comprarOferta(oferta) {
  if (!player || obterMoedasEmPrata() < oferta.preco) return;

  if (oferta.id === "cura_loja") {
    player.curas_loja += 1;
  } else if (oferta.id === "pocao_mana_loja") {
    player.pocoes_mana_loja += 1;
  } else {
    if (!ITENS[oferta.id] || player.inventario.includes(oferta.id)) return;
    player.inventario.push(oferta.id);
    player.run_drop_ids.push(oferta.id);
    registrarMensagem(`Você comprou ${ITENS[oferta.id].nome}.`);
  }

  definirMoedasDePrata(obterMoedasEmPrata() - oferta.preco);
  if (oferta.id === "cura_loja" || oferta.id === "pocao_mana_loja") {
    registrarMensagem(
      `Você comprou ${oferta.id === "cura_loja" ? "uma poção de cura" : "uma poção de mana"}.`,
    );
  }
  renderizarLoja();
  atualizarTela();
  salvarJogo();
}

function mostrarLoja() {
  faseJogo = "loja";
  interfaceJogo.routePanel.hidden = false;
  document.querySelector(".game-grid").hidden = true;
  interfaceJogo.routeTitle.textContent = "Loja do caminho";
  interfaceJogo.routeProgress.textContent = `Etapa ${player.route_step} de ${PASSOS_ATE_BOSS}`;
  interfaceJogo.routeOptions.hidden = true;
  interfaceJogo.shopView.hidden = false;
  interfaceJogo.routeHistory.replaceChildren();
  renderizarLoja();
  atualizarBotaoBatalha();
  salvarJogo();
}

function regenerarManaPorTurno() {
  if (player?.classe !== "mago") return;
  const regeneracao = obterArmaduraAtual()?.mana_regeneracao ?? 0;
  if (regeneracao <= 0) return;
  const manaAnterior = player.mana_atual;
  player.mana_atual = Math.min(obterManaMaxima(), player.mana_atual + regeneracao);
  if (player.mana_atual > manaAnterior) {
    registrarMensagem(`Sua armadura regenerou ${regeneracao} de mana.`);
  }
}

function iniciarCombate(tipoEncontro = "combate") {
  faseJogo = "batalha";
  batalhaAtiva = true;
  defendendo = false;
  interfaceJogo.routePanel.hidden = true;
  document.querySelector(".game-grid").hidden = false;
  interfaceJogo.attack.disabled = false;
  interfaceJogo.defend.disabled = false;
  interfaceJogo.restart.hidden = true;
  criarInimigo(tipoEncontro);
  salvarJogo();
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

  if (player.vida_atual <= 0) {
    player.vida_atual = player.vida_max;
  }

  if (player.game_phase === "rota") {
    mostrarRotas();
  } else if (player.game_phase === "loja") {
    mostrarLoja();
  } else {
    iniciarCombate();
  }
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
  player = {
    ...base,
    run_drop_ids: [...base.run_drop_ids],
    route_step: 0,
    route_history: [],
    curas_loja: 0,
    pocoes_mana_loja: 0,
  };

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
  player.game_phase = "rota";

  prepararInventario(player);

  interfaceClasses.creation.hidden = true;
  interfaceClasses.gameContent.hidden = false;

  mostrarRotas();
  salvarJogo();
});

// ==============================
// CRIAÇÃO DO INIMIGO
// ==============================

function criarInimigo(tipoEncontro = "combate") {
  if (!player) return;

  const ehChefe = tipoEncontro === "boss";
  const chefe = ehChefe
    ? Object.values(bosses)[
        (player.bosses_defeated ?? 0) % Object.keys(bosses).length
      ]
    : null;
  const tipo = ehChefe
    ? "boss"
    : tipo_inimigo[Math.floor(Math.random() * tipo_inimigo.length)];
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

  const base = chefe ?? modelos[tipo];
  const fatorElite = tipoEncontro === "elite" ? 1.5 : 1;
  const fatorCombate = 1.12 ** (nivel - 1);
  const fatorXp = 1.05 ** (nivel - 1);

  inimigo = {
    tipo,
    nome: base.nome,
    level: nivel,
    boss: ehChefe,
    elite: tipoEncontro === "elite",
    vida_max: Math.round(base.vida * fatorCombate * fatorElite),
    vida: Math.round(base.vida * fatorCombate * fatorElite),
    dmg: Math.round(base.dmg * fatorCombate * fatorElite),
    xp: Math.round(base.xp * fatorXp * fatorElite),
    speed: base.speed + (nivel - 1) + (tipoEncontro === "elite" ? 2 : 0),
    prata: Math.round(base.prata * fatorElite),
    ouro: Math.round(base.ouro * fatorElite),
  };

  const sprites = {
    zumbi: "🧟",
    slime: "🟢",
    goblin: "👺",
    esqueleto: "💀",
    orc: "👹",
    mago_inimigo: "🧙",
    boss: "🐉",
  };

  interfaceJogo.enemyArt.textContent = ehChefe && chefe.nome === "Hidra" ? "🐍" : sprites[tipo];
  interfaceJogo.encounterKind.textContent = ehChefe
    ? "CHEFE"
    : inimigo.elite
      ? "ELITE"
      : "INIMIGO";
  interfaceJogo.message.textContent = `Um ${inimigo.nome} apareceu.`;
  if (inimigo.elite) interfaceJogo.message.textContent = `Um ${inimigo.nome} de elite apareceu.`;

  atualizarTela();
}

// ==============================
// BOSSES
// ==============================

const bosses = {
  dragao: {
    nome: "Dragão",
    vida: 500,
    dmg: 50,
    xp: 100,
    speed: 20,
    prata: 100,
    ouro: 50,
  },
  hidra: {
    nome: "Hidra",
    vida: 500,
    dmg: 60,
    xp: 100,
    speed: 15,
    prata: 150,
    ouro: 75,
  },
};

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

  interfaceJogo.heal.textContent = `Cura básica (${player.curas_atual})`;

  interfaceJogo.heal.disabled =
    !batalhaAtiva || player.curas_atual <= 0 || vidaJogador >= player.vida_max;
  interfaceJogo.shopHeal.hidden = player.curas_loja <= 0;
  interfaceJogo.shopHeal.textContent = `Poção de cura (${player.curas_loja})`;
  interfaceJogo.shopHeal.disabled =
    !batalhaAtiva ||
    player.curas_loja <= 0 ||
    vidaJogador >= player.vida_max;

  // ------------------------------
  // Mana e poção (só o mago)
  // ------------------------------

  const ehMago = player.classe === "mago";

  interfaceJogo.manaStat.hidden = !ehMago;
  interfaceJogo.manaPotion.hidden = !ehMago;
  interfaceJogo.shopManaPotion.hidden =
    !ehMago || player.pocoes_mana_loja <= 0;
  interfaceJogo.shopManaPotion.disabled =
    !batalhaAtiva ||
    !ehMago ||
    player.pocoes_mana_loja <= 0 ||
    player.mana_atual >= obterManaMaxima();

  if (ehMago) {
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
    interfaceJogo.shopManaPotion.textContent =
      `Poção de mana comprada (${player.pocoes_mana_loja})`;
    interfaceJogo.shopManaPotion.disabled =
      !batalhaAtiva ||
      player.pocoes_mana_loja <= 0 ||
      player.mana_atual >= manaMaxima;
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
  interfaceJogo.shopHeal.disabled = true;
  interfaceJogo.manaPotion.disabled = true;
  interfaceJogo.shopManaPotion.disabled = true;

  atualizarBotaoBatalha();
  interfaceJogo.restart.hidden = true;
}

// ==============================
// NOVA RUN
// ==============================

function novaRun() {
  if (!player) return;

  const itensIniciais = new Set(
    [armasIniciais[player.classe]?.id].filter(Boolean),
  );
  player.inventario = player.inventario.filter(
    (id) => itensIniciais.has(id) || !player.run_drop_ids.includes(id),
  );

  player.vida_atual = player.vida_max;
  player.experiencia = 0;
  player.curas_atual = player.curas_max;
  player.ouro = 0;
  player.prata = 0;
  player.route_step = 0;
  player.route_history = [];
  player.curas_loja = 0;
  player.pocoes_mana_loja = 0;
  player.run_drop_ids = [];

  player.defense_atual = player.defense_max;
  player.speed_atual = player.speed_max;

  if (player.classe === "mago") {
    player.mana_atual = player.mana_max;
    player.pocoes_mana_atual = player.pocoes_mana_max;
    player.pocao_ticks = null;
  }

  player.equipado = {
    arma: armasIniciais[player.classe]?.id ?? null,
    armadura: null,
  };

  inimigo = null;

  defendendo = false;

  batalhaAtiva = false;
  faseJogo = "rota";

  interfaceJogo.attack.disabled = true;
  interfaceJogo.defend.disabled = true;

  atualizarBotaoBatalha();
  interfaceJogo.restart.hidden = true;

  mostrarRotas();
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
    !player.inventario.includes(casaco_de_couro.id) &&
    Math.random() < CHANCE_DROP_ARMADURA
  ) {
    player.inventario.push(casaco_de_couro.id);
    player.run_drop_ids.push(casaco_de_couro.id);

    registrarMensagem(
      `🛡️ ${inimigo.nome} dropou: ${casaco_de_couro.nome}! Equipe no inventário.`,
    );
  }

  // ------------------------------
  // Mana pós-batalha (25% da mana perdida)
  // ------------------------------

  if (player.classe === "mago") {
    const manaMaxima = obterManaMaxima();
    const manaRecuperada = (manaMaxima - player.mana_atual) * 0.25;

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
      player.mana_atual = obterManaMaxima();

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

  if (inimigo.boss) {
    player.bosses_defeated = (player.bosses_defeated ?? 0) + 1;
    player.route_step = 0;
    player.route_history = [];
    registrarMensagem("Você derrotou o chefe! Um novo caminho se abre.");
  } else {
    player.route_step += 1;
  }

  atualizarBotaoBatalha();

  atualizarTela();
  mostrarRotas();

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
    if (player.classe === "mago") {
      player.mana_atual = Math.min(player.mana_atual, obterManaMaxima());
    }

    player.curas_atual = Math.min(player.curas_atual, player.curas_max);
    player.curas_loja = 0;
    player.pocoes_mana_loja = 0;
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

  if (acao === "curar_loja") {
    const cura = Math.min(
      player.vida_max - player.vida_atual,
      player.vida_max * 0.5,
    );
    player.vida_atual += cura;
    player.curas_loja -= 1;
    registrarMensagem(
      `A poção comprada recuperou ${Math.ceil(cura)} de vida. Restam ${player.curas_loja}.`,
    );
    return false;
  }

  if (acao === "pocao_mana" || acao === "pocao_mana_loja") {
    const manaMaxima = obterManaMaxima();
    const recuperada = Math.min(
      manaMaxima - player.mana_atual,
      manaMaxima * 0.7,
    );

    player.mana_atual += recuperada;

    if (acao === "pocao_mana_loja") {
      player.pocoes_mana_loja -= 1;
    } else {
      player.pocoes_mana_atual -= 1;
    }

    // Começa o efeito: 3 turnos com -30% no dano mágico
    player.pocao_ticks = 0;

    registrarMensagem(`Você recuperou ${Math.ceil(recuperada)} de mana.`);

    registrarMensagem("Dano mágico -30% por 3 turnos.");

    registrarMensagem(
      `Poções básicas restantes: ${player.pocoes_mana_atual}; compradas: ${player.pocoes_mana_loja}`,
    );

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

  if (acao === "curar_loja") {
    if (player.curas_loja <= 0) {
      registrarMensagem("Você não tem poções de cura compradas!");
      return;
    }
    if (player.vida_atual >= player.vida_max) {
      registrarMensagem("Sua vida já está cheia!");
      return;
    }
  }

  if (acao === "pocao_mana" || acao === "pocao_mana_loja") {
    if (player.classe !== "mago") return;

    const comprada = acao === "pocao_mana_loja";
    const quantidade = comprada
      ? player.pocoes_mana_loja
      : player.pocoes_mana_atual;
    if (quantidade <= 0) {
      registrarMensagem("Você não tem poções de mana!");

      return;
    }

    if (player.mana_atual >= obterManaMaxima()) {
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

    if (acao !== "pocao_mana" && acao !== "pocao_mana_loja") {
      avancarEfeitoPocao();
    }

    regenerarManaPorTurno();
    atualizarTela();

    concluirVitoria();

    return;
  }

  if (!inimigoPrimeiro) {
    if (!ataqueInimigo()) return;
  }

  // O turno em que a poção é usada não conta para o efeito
  if (acao !== "pocao_mana" && acao !== "pocao_mana_loja") {
    avancarEfeitoPocao();
  }

  regenerarManaPorTurno();

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
interfaceJogo.shopHeal.addEventListener("click", () =>
  jogarTurno("curar_loja"),
);

interfaceJogo.manaPotion.addEventListener("click", () =>
  jogarTurno("pocao_mana"),
);
interfaceJogo.shopManaPotion.addEventListener("click", () =>
  jogarTurno("pocao_mana_loja"),
);

interfaceJogo.leaveShop.addEventListener("click", mostrarRotas);

// ==============================
// PRÓXIMA BATALHA
// ==============================

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
  mostrarRotas();
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
  mostrarRotas();
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

  player.game_phase = faseJogo;
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
