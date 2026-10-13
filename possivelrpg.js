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
  furia_ativa: false,
  furia_buffs: {
    dmg: (dmg) => dmg * 2,
    defense: (defense) => defense / 2,
    speed: (speed) => speed * 2,
    critico_chance: (chance) => chance * 2,
  },
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
  reducao_recarregamento: 0,
  skill_cooldown_salas: 0,
  mil_flechas: {
    critico_hits: 4,
  },
};

const classe_mago = {
  classe: "mago",

  // Vida
  vida_max: 80,
  vida_atual: 80,
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
  explosao_arcana: {
    mana_custo: 60,
    multiplicador_critico: 3,
  },
};

const classe_necromante = {
  classe: "necromante",
  vida_max: 75,
  vida_atual: 65,
  mana_max: 100,
  mana_atual: 100,
  dmg: 35,
  defense_max: 0,
  defense_atual: 0,
  speed_max: 8,
  speed_atual: 8,
  critico_chance: 10,
  critico_dano: 2.5,
  curas_max: 2,
  curas_atual: 2,
  pocoes_mana_max: 2,
  pocoes_mana_atual: 2,
  pocao_ticks: null,
  ouro: 0,
  prata: 0,
  level: 1,
  experiencia: 0,
  run_drop_ids: [],
  almas: 0,
  almas_invocadas: 0,
};

// ==============================
// CLASSES ORGANIZADAS
// ==============================

const classes = {
  guerreiro: classe_guerreiro,
  arqueiro: classe_arqueiro,
  mago: classe_mago,
  necromante: classe_necromante,
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
  multi_shot: 1,
};

const besta = {
  id: "besta",
  tipo: "arma",
  nome: "Besta",
  dmg: 9,
  reload_time: 2, // tempo de recarga em turnos
  multi_shot: 2,
};

const arco_composto = {
  id: "arco_composto",
  tipo: "arma",
  nome: "Arco composto",
  dmg: 12,
  reload_time: 1.5, // tempo de recarga em turnos
  multi_shot: 3,
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

const grimorio_misterioso = {
  id: "grimorio_misterioso",
  tipo: "arma",
  nome: "Grimório misterioso",
  fisico_dmg: 1,
  magic_dmg: 25,
  mana_custo: 30,
};

const cetro_sombrio = {
  id: "cetro_sombrio",
  tipo: "arma",
  nome: "Cetro sombrio",
  fisico_dmg: 2,
  magic_dmg: 30,
  mana_custo: 35,
};

const zarabatana_venenosa = {
  id: "zarabatana_venenosa",
  tipo: "arma",
  nome: "Zarabatana venenosa",
  dmg: 15,
  veneno_dano: 5,
  veneno_duration: 3,
};

const machado_duplo_do_minotauro = {
  id: "machado_duplo_do_minotauro",
  tipo: "arma",
  nome: "Machado duplo do Minotauro",
  dmg: 17,
  area_dmg: 10,
};

// ==============================
// ARMAS POR CLASSE
// ==============================

const armasIniciais = {
  guerreiro: espada_inicial,
  arqueiro: arco_inicial,
  mago: cajado_inicial,
  necromante: grimorio_misterioso,
};

const escudo_de_madeira = {
  id: "escudo_de_madeira",
  tipo: "escudo",
  nome: "Escudo de madeira",
  defesa: 5,
  speed_penalty: 2,
  bonus_chance_de_defender: 10,
};

const escudo_de_madeira_reforcado = {
  id: "escudo_de_madeira_reforcado",
  tipo: "escudo",
  nome: "Escudo de madeira reforçado",
  defesa: 7,
  speed_penalty: 3,
  bonus_chance_de_defender: 15,
};

const escudo_de_ferro = {
  id: "escudo_de_ferro",
  tipo: "escudo",
  nome: "Escudo de ferro",
  defesa: 10,
  speed_penalty: 5,
  bonus_chance_de_defender: 20,
};

const escudo_do_minotauro = {
  id: "escudo_do_minotauro",
  tipo: "escudo",
  nome: "Escudo do Minotauro",
  defesa: 15,
  speed_penalty: 15,
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

const armadura_de_placas_do_minotauro = {
  id: "armadura_de_placas_do_minotauro",
  tipo: "armadura",
  nome: "Armadura de placas do Minotauro",
  defesa: 15,
  speed_penalty: 15,
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
  grimorio_misterioso,
  cetro_sombrio,
  zarabatana_venenosa,
  machado_duplo_do_minotauro,
  escudo_de_madeira,
  escudo_de_madeira_reforcado,
  escudo_de_ferro,
  escudo_do_minotauro,
  armadura_de_placas_do_minotauro,
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
  "aranha_gigante",
  "troll",
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
  playerDebuffs: document.querySelector("#player-debuffs"),
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

// ==============================
// ESTADO DA BATALHA
// ==============================

let inimigo = null;
let inimigos = [];
let inimigosDerrotados = [];
let debuffsAplicadosNoTurno = new Set();
let defendendo = false;
let batalhaAtiva = false;
let categoriaInventario = "arma";
let faseJogo = "batalha";
let tipoEncontroAtual = "combate";
let slotSaveAtual = null;

const QUANTIDADE_SLOTS_SAVE = 4;
const SALAS_ATE_BOSS = 15;
const LIMITE_SALAS_ANTES_BOSS = 30;
const SALAS_POR_ACAMPAMENTO = 5;
const PRECO_ATUALIZAR_LOJA = 5;
const ITENS_POR_LOJA = 5;
const OFERTAS_LOJA = [
  { id: "espada_de_ferro_basica", preco: 35 },
  { id: "maca", preco: 55 },
  { id: "espada_longa", preco: 90 },
  { id: "arco_de_bambu_basico", preco: 35 },
  { id: "besta", preco: 55 },
  { id: "arco_composto", preco: 90 },
  { id: "zarabatana_venenosa", preco: 110 },
  { id: "cajado_de_madeira_basico", preco: 40 },
  { id: "varinha_magica", preco: 65 },
  { id: "livro_de_feiticos", preco: 100 },
  { id: "casaco_de_couro", preco: 30 },
  { id: "armadura_de_placas", preco: 65 },
  { id: "cota_de_malha", preco: 95 },
  { id: "capa_mistica", preco: 110 },
  { id: "escudo_de_madeira", preco: 30 },
  { id: "escudo_de_madeira_reforcado", preco: 55 },
  { id: "escudo_de_ferro", preco: 85 },
  { id: "cura_loja", preco: 20 },
  { id: "pocao_mana_loja", preco: 25 },
];

function chaveSave(slot) {
  return `rpg_save_${slot}`;
}

function obterManaMaxima() {
  return player ? player.mana_max + (obterArmaduraAtual()?.mana_bonus ?? 0) : 0;
}

function usaMana() {
  return player?.classe === "mago" || player?.classe === "necromante";
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

function obterEscudoAtual() {
  if (!player) return null;
  return ITENS[player.equipado?.escudo] ?? null;
}

// Defesa do personagem + defesa da armadura equipada
function obterDefesaTotal() {
  const defesa =
    player.defense_atual +
    (obterArmaduraAtual()?.defesa ?? 0) +
    (obterEscudoAtual()?.defesa ?? 0);
  return player.classe === "guerreiro" && player.furia_ativa
    ? classe_guerreiro.furia_buffs.defense(defesa)
    : defesa;
}

function obterVelocidadeBase() {
  return Math.max(
    0,
    player.speed_atual +
      (obterArmaduraAtual()?.speed ?? 0) -
      (obterArmaduraAtual()?.speed_penalty ?? 0) -
      (obterEscudoAtual()?.speed_penalty ?? 0),
  );
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
  jogador.almas = Math.min(4, Math.max(0, Math.floor(Number(jogador.almas) || 0)));
  jogador.almas_invocadas = 0;
  jogador.furia_ativa = false;
  jogador.skill_cooldown_salas = Math.max(
    0,
    Math.floor(Number(jogador.skill_cooldown_salas) || 0),
  );
  jogador.curas_loja = Number.isFinite(Number(jogador.curas_loja))
    ? Math.max(0, Math.floor(Number(jogador.curas_loja)))
    : 0;
  jogador.pocoes_mana_loja = Number.isFinite(Number(jogador.pocoes_mana_loja))
    ? Math.max(0, Math.floor(Number(jogador.pocoes_mana_loja)))
    : 0;
  jogador.curas_loja_max = Number.isFinite(Number(jogador.curas_loja_max))
    ? Math.max(jogador.curas_loja, Math.floor(Number(jogador.curas_loja_max)))
    : jogador.curas_loja;
  jogador.pocoes_mana_loja_max = Number.isFinite(
    Number(jogador.pocoes_mana_loja_max),
  )
    ? Math.max(
        jogador.pocoes_mana_loja,
        Math.floor(Number(jogador.pocoes_mana_loja_max)),
      )
    : jogador.pocoes_mana_loja;
  jogador.route_step = Number.isFinite(Number(jogador.route_step))
    ? Math.min(
        LIMITE_SALAS_ANTES_BOSS,
        Math.max(0, Math.floor(Number(jogador.route_step))),
      )
    : 0;
  jogador.andar = Number.isFinite(Number(jogador.andar))
    ? Math.max(1, Math.floor(Number(jogador.andar)))
    : Math.max(1, Math.floor(Number(jogador.bosses_defeated ?? 0)) + 1);
  jogador.shop_offer_ids = Array.isArray(jogador.shop_offer_ids)
    ? [
        ...new Set(
          jogador.shop_offer_ids.filter((id) =>
            OFERTAS_LOJA.some((oferta) => oferta.id === id),
          ),
        ),
      ].slice(0, ITENS_POR_LOJA)
    : [];
  jogador.shop_offers_initialized = Boolean(jogador.shop_offers_initialized);
  jogador.shop_refresh_count = Number.isFinite(
    Number(jogador.shop_refresh_count),
  )
    ? Math.max(0, Math.floor(Number(jogador.shop_refresh_count)))
    : 0;
  jogador.reload_turns_remaining = Number.isFinite(
    Number(jogador.reload_turns_remaining),
  )
    ? Math.max(0, Math.floor(Number(jogador.reload_turns_remaining)))
    : 0;
  jogador.reload_weapon_id =
    typeof jogador.reload_weapon_id === "string"
      ? jogador.reload_weapon_id
      : null;
  const debuffs = jogador.debuffs && typeof jogador.debuffs === "object"
    ? jogador.debuffs
    : {};
  jogador.debuffs = Object.fromEntries(
    Object.entries(debuffs)
      .filter(
        ([id, estado]) =>
          ["pegajoso", "lentidao", "veneno", "sangramento", "queimando"].includes(id) &&
          estado &&
          Number(estado.turnos) > 0,
      )
      .map(([id, estado]) => [
        id,
        {
          turnos: Math.floor(Number(estado.turnos)),
          nome: typeof estado.nome === "string" ? estado.nome : id,
          danoPorTurno: Math.max(0, Number(estado.danoPorTurno) || 0),
          velocidade: Math.min(1, Math.max(0.3, Number(estado.velocidade) || 1)),
        },
      ]),
  );
  jogador.route_history = Array.isArray(jogador.route_history)
    ? jogador.route_history.filter((nome) => typeof nome === "string")
    : [];

  if (armaInicial && !inventario.includes(armaInicial.id)) {
    inventario.unshift(armaInicial.id);
  }

  const equipado = { arma: null, armadura: null, escudo: null };

  if (jogador.equipado && typeof jogador.equipado === "object") {
    for (const slot of ["arma", "armadura", "escudo"]) {
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

  // Mantém a carteira no formato canônico: 10 pratas equivalem a 1 ouro.
  const totalMoedas = Math.max(
    0,
    Math.floor(Number(jogador.ouro) * 10 + Number(jogador.prata)),
  );
  jogador.ouro = Math.floor(totalMoedas / 10);
  jogador.prata = totalMoedas % 10;
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

  if (usaMana()) {
    player.mana_atual = Math.min(player.mana_atual, obterManaMaxima());
  }
  if (item.tipo === "arma") {
    player.reload_turns_remaining = 0;
    player.reload_weapon_id = null;
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
    if (item.speed) extras.push(`+${item.speed} velocidade`);
    if (item.speed_penalty) extras.push(`-${item.speed_penalty} velocidade`);
    return [`+${item.defesa} defesa`, ...extras].join(" · ");
  }

  if (item.tipo === "escudo") {
    const extras = [`+${item.defesa} defesa`];
    if (item.speed_penalty) extras.push(`-${item.speed_penalty} velocidade`);
    if (item.bonus_chance_de_defender) {
      extras.push(`${item.bonus_chance_de_defender}% de chance de bloquear`);
    }
    return extras.join(" · ");
  }

  if (item.magic_dmg !== undefined) {
    return `Mágico +${item.magic_dmg} (${item.mana_custo} mana) · Físico +${item.fisico_dmg}`;
  }

  const extras = [`+${item.dmg} dano`];
  if (item.area_dmg) extras.push(`+${item.area_dmg} dano em área`);
  if (item.veneno_dano) {
    extras.push(`veneno ${item.veneno_dano}/turno por ${item.veneno_duration} turnos`);
  }
  if (item.multi_shot) extras.push(`${item.multi_shot} disparo(s) adicional(is)`);
  if (item.reload_time) extras.push(`recarga ${item.reload_time} turno(s)`);
  return extras.join(" · ");
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
    ["escudo", "Escudo", obterEscudoAtual()],
  ];

  for (const [tipo, rotulo, item] of slots) {
    const linha = document.createElement("div");
    linha.className = "equipment-slot";

    const icone = document.createElement("span");
    icone.className = "equipment-icon";
    icone.textContent =
      tipo === "arma" ? "⚔" : tipo === "escudo" ? "⛨" : "🛡";
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
      ["arma", "armadura", "escudo"].includes(item.tipo)
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

function obterOpcoesDeRota() {
  if (player.route_step >= LIMITE_SALAS_ANTES_BOSS) {
    return [
      {
        id: "boss",
        titulo: "Chefe",
        descricao: "Você adiou esse confronto o máximo possível.",
        icone: "☠",
      },
    ];
  }

  const proximaSala = player.route_step + 1;
  const opcoes = [
    {
      id: player.route_step >= 20 ? "elite" : "combate",
      titulo: player.route_step >= 20 ? "Elite" : "Combate",
      descricao:
        player.route_step >= 20
          ? "Nas últimas salas, só as elites ousam aparecer."
          : "Enfrente um inimigo e ganhe experiência e moedas.",
      icone: "⚔",
    },
    {
      id: "loja",
      titulo: "Loja",
      descricao: "Gaste suas moedas em equipamentos e consumíveis.",
      icone: "◆",
    },
  ];

  if (player.route_step >= SALAS_ATE_BOSS) {
    opcoes.unshift({
      id: "boss",
      titulo: "Chefe",
      descricao: `Enfrente o chefe do andar ${player.andar} agora ou adie a luta.`,
      icone: "☠",
    });
  } else if (proximaSala % SALAS_POR_ACAMPAMENTO !== 0) {
    opcoes.push({
      id: "elite",
      titulo: "Inimigo de elite",
      descricao: "Um combate mais difícil com recompensas melhores.",
      icone: "⚔",
    });
  }

  const acampamentoDisponivel =
    proximaSala % SALAS_POR_ACAMPAMENTO === 0 ||
    player.route_step === SALAS_ATE_BOSS;
  if (acampamentoDisponivel) {
    opcoes.push({
      id: "descanso",
      titulo: "Acampamento",
      descricao: "Recupere toda a vida, mana e suas poções.",
      icone: "🔥",
    });
  }

  return opcoes;
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
  for (const opcao of opcoesDeRota) {
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
  if (player.classe === "arqueiro" && player.skill_cooldown_salas > 0) {
    player.skill_cooldown_salas -= 1;
    registrarMensagem(
      player.skill_cooldown_salas > 0
        ? `Mil Flechas: ${player.skill_cooldown_salas} sala(s) de recarga restante(s).`
        : "Mil Flechas está recarregada.",
    );
  }
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
    registrarNoDeRota(nomes[tipo]);
    iniciarCombate("boss");
    return;
  }

  if (tipo === "loja") {
    player.route_step += 1;
    registrarNoDeRota(nomes[tipo]);
    player.shop_offer_ids = [];
    player.shop_offers_initialized = false;
    player.shop_refresh_count = 0;
    mostrarLoja();
    return;
  }

  if (tipo === "descanso") {
    player.route_step += 1;
    registrarNoDeRota(nomes[tipo]);
    player.vida_atual = player.vida_max;
    player.curas_atual = player.curas_max;
    if (usaMana()) {
      player.mana_atual = obterManaMaxima();
      player.pocoes_mana_atual = player.pocoes_mana_max;
      player.pocao_ticks = null;
    }
    player.curas_loja = player.curas_loja_max;
    player.pocoes_mana_loja = player.pocoes_mana_loja_max;
    registrarMensagem("O acampamento restaurou toda a sua vida, mana e poções.");
    mostrarRotas();
    atualizarTela();
    salvarJogo();
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
  return [ouro > 0 ? `${ouro} ouro` : "", prata > 0 ? `${prata} prata` : ""]
    .filter(Boolean)
    .join(" e ");
}

function atualizarSaldoLoja() {
  const total = obterMoedasEmPrata();
  interfaceJogo.shopBalance.textContent = `Seu saldo: ${Math.floor(total / 10)} ouro e ${total % 10} prata`;
}

function gerarOfertasLoja() {
  const disponiveis = OFERTAS_LOJA.filter(
    (oferta) => oferta.id !== "pocao_mana_loja" || usaMana(),
  );
  const embaralhadas = [...disponiveis];
  for (let indice = embaralhadas.length - 1; indice > 0; indice -= 1) {
    const aleatorio = Math.floor(Math.random() * (indice + 1));
    [embaralhadas[indice], embaralhadas[aleatorio]] = [
      embaralhadas[aleatorio],
      embaralhadas[indice],
    ];
  }
  player.shop_offer_ids = embaralhadas
    .slice(0, ITENS_POR_LOJA)
    .map((oferta) => oferta.id);
  player.shop_offers_initialized = true;
}

function obterPrecoAtualizarLoja() {
  return Math.min(
    PRECO_ATUALIZAR_LOJA * 2 ** Math.min(player.shop_refresh_count, 52),
    Number.MAX_SAFE_INTEGER,
  );
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

function comprarOferta(oferta) {
  if (
    !player ||
    !player.shop_offer_ids.includes(oferta.id) ||
    obterMoedasEmPrata() < oferta.preco
  ) return;

  if (oferta.id === "cura_loja") {
    player.curas_loja += 1;
    player.curas_loja_max += 1;
  } else if (oferta.id === "pocao_mana_loja") {
    player.pocoes_mana_loja += 1;
    player.pocoes_mana_loja_max += 1;
  } else {
    if (!ITENS[oferta.id] || player.inventario.includes(oferta.id)) return;
    player.inventario.push(oferta.id);
    player.run_drop_ids.push(oferta.id);
    registrarMensagem(`Você comprou ${ITENS[oferta.id].nome}.`);
  }

  definirMoedasDePrata(obterMoedasEmPrata() - oferta.preco);
  player.shop_offer_ids = player.shop_offer_ids.filter((id) => id !== oferta.id);
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
  interfaceJogo.routeProgress.textContent = `Andar ${player.andar} · Sala ${player.route_step}/${LIMITE_SALAS_ANTES_BOSS}`;
  interfaceJogo.routeOptions.hidden = true;
  interfaceJogo.shopView.hidden = false;
  interfaceJogo.routeHistory.replaceChildren();
  renderizarLoja();
  atualizarBotaoBatalha();
  salvarJogo();
}

interfaceJogo.refreshShop.addEventListener("click", () => {
  if (!player) return;
  const preco = obterPrecoAtualizarLoja();
  if (obterMoedasEmPrata() < preco) return;
  definirMoedasDePrata(obterMoedasEmPrata() - preco);
  player.shop_refresh_count += 1;
  gerarOfertasLoja();
  registrarMensagem(`A loja foi atualizada por ${formatarPreco(preco)}.`);
  renderizarLoja();
  atualizarTela();
  salvarJogo();
});

interfaceJogo.leaveShop.addEventListener("click", () => {
  if (player) {
    player.shop_offer_ids = [];
    player.shop_offers_initialized = false;
    player.shop_refresh_count = 0;
    salvarJogo();
  }
  mostrarRotas();
});

function regenerarManaPorTurno() {
  if (!usaMana()) return;
  const regeneracao = obterArmaduraAtual()?.mana_regeneracao ?? 0;
  if (regeneracao <= 0) return;
  const manaAnterior = player.mana_atual;
  player.mana_atual = Math.min(
    obterManaMaxima(),
    player.mana_atual + regeneracao,
  );
  if (player.mana_atual > manaAnterior) {
    registrarMensagem(`Sua armadura regenerou ${regeneracao} de mana.`);
  }
}

function iniciarCombate(tipoEncontro = "combate") {
  faseJogo = "batalha";
  tipoEncontroAtual = tipoEncontro;
  batalhaAtiva = true;
  defendendo = false;
  player.debuffs = {};
  player.furia_ativa = false;
  player.almas_invocadas = 0;
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
  const aplicarFuria = (dano) =>
    player.classe === "guerreiro" && player.furia_ativa
      ? classe_guerreiro.furia_buffs.dmg(dano)
      : dano;

  // Sem arma: só o dano base do personagem
  if (!arma) {
    registrarMensagem("Você atacou sem arma.");
    return aplicarFuria(player.dmg);
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

      return aplicarFuria(
        (player.dmg + arma.magic_dmg) * (1 - penalidade / 100),
      );
    }

    registrarMensagem("Sem mana! Você atacou com o dano físico do cajado.");

    return aplicarFuria(player.dmg + arma.fisico_dmg);
  }

  return aplicarFuria(player.dmg + arma.dmg);
}

function obterTempoRecarga(arma) {
  const reducao =
    player?.classe === "arqueiro" ? (player.reducao_recarregamento ?? 0) : 0;
  return Math.max(0, Math.ceil((arma?.reload_time ?? 0) - reducao));
}

// XP necessário para o próximo nível: 100 x 1,1^(nível-1)
function xpParaProximoNivel() {
  return Math.round(100 * 1.1 ** (player.level - 1));
}

function restaurarCombateSalvo(estado = player?.combat_state) {
  if (!player || !estado || !Array.isArray(estado.inimigos) || estado.inimigos.length === 0) {
    return false;
  }

  const inimigosValidos = estado.inimigos.filter(
    (oponente) =>
      oponente &&
      typeof oponente.id === "string" &&
      typeof oponente.nome === "string" &&
      Number.isFinite(Number(oponente.vida)) &&
      Number.isFinite(Number(oponente.vida_max)) &&
      Number(oponente.vida_max) > 0,
  );
  if (inimigosValidos.length === 0) return false;

  inimigos = inimigosValidos.map((oponente) => ({
    ...oponente,
    vida: Number(oponente.vida),
    vida_max: Number(oponente.vida_max),
  }));
  inimigosDerrotados = inimigos.filter((oponente) => oponente.vida <= 0);
  inimigo =
    inimigos.find((oponente) => oponente.id === estado.alvoId && oponente.vida > 0) ??
    inimigos.find((oponente) => oponente.vida > 0) ??
    inimigos[inimigos.length - 1];

  tipoEncontroAtual = ["combate", "elite", "boss"].includes(estado.tipo)
    ? estado.tipo
    : inimigo.boss
      ? "boss"
      : inimigo.elite
        ? "elite"
        : "combate";
  faseJogo = "batalha";
  defendendo = false;
  debuffsAplicadosNoTurno = new Set();
  batalhaAtiva =
    estado.ativa === true &&
    player.vida_atual > 0 &&
    inimigos.some((oponente) => oponente.vida > 0);

  interfaceJogo.routePanel.hidden = true;
  interfaceJogo.shopView.hidden = true;
  interfaceJogo.routeOptions.hidden = false;
  document.querySelector(".game-grid").hidden = false;

  const sprites = {
    zumbi: "🧟",
    slime: "🟢",
    goblin: "👺",
    esqueleto: "💀",
    orc: "👹",
    mago_inimigo: "🧙",
    aranha_gigante: "🕷️",
    troll: "🧌",
    boss: "🐉",
  };
  interfaceJogo.enemyArt.textContent =
    inimigo.boss && inimigo.nome === "Hidra"
      ? "🐍"
      : (sprites[inimigo.tipo] ?? "👾");
  interfaceJogo.encounterKind.textContent = inimigos.some((oponente) => oponente.boss)
    ? "CHEFE"
    : inimigos.length > 1
      ? `${inimigos.length} INIMIGOS`
      : inimigo.elite
        ? "ELITE"
        : "INIMIGO";

  atualizarTela();
  interfaceJogo.message.textContent = batalhaAtiva
    ? "Combate restaurado. Você continua de onde parou."
    : player.vida_atual <= 0
      ? "Você foi derrotado. Recomece a run."
      : "Combate pausado. Volte ao caminho para continuar.";

  if (!batalhaAtiva) finalizarBatalha();
  return true;
}

function iniciarJogo() {
  if (!player) return;

  interfaceClasses.selection.hidden = true;
  interfaceClasses.creation.hidden = true;
  interfaceClasses.gameContent.hidden = false;

  if (player.vida_atual <= 0) {
    // Morrer é morrer: recarregar a página não restaura a vida.
    player.vida_atual = 0;
    faseJogo = "batalha";

    if (!restaurarCombateSalvo(player.combat_state)) {
      inimigo = null;
      inimigos = [];
      inimigosDerrotados = [];
      batalhaAtiva = false;
      criarInimigo("combate");
      finalizarBatalha();
    }

    batalhaAtiva = false;
    finalizarBatalha();
    interfaceJogo.message.textContent = "Você foi derrotado. Recomece a run.";
    salvarJogo();
    return;
  }

  if (player.game_phase === "rota") {
    mostrarRotas();
  } else if (player.game_phase === "loja") {
    mostrarLoja();
  } else if (player.game_phase === "batalha" && restaurarCombateSalvo(player.combat_state)) {
    return;
  } else {
    // Compatibilidade: saves antigos não têm os detalhes do combate.
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
    andar: 1,
    route_history: [],
    curas_loja: 0,
    curas_loja_max: 0,
    pocoes_mana_loja: 0,
    pocoes_mana_loja_max: 0,
    shop_offer_ids: [],
    shop_refresh_count: 0,
    reload_turns_remaining: 0,
    reload_weapon_id: null,
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
  const nivel = player.level;
  const andar = player.andar ?? 1;

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
      dmg: 20,
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
    aranha_gigante: {
      nome: "Aranha Gigante",
      vida: 120,
      dmg: 22,
      xp: 28,
      speed: 14,
      prata: 25,
      ouro: 6,
    },
    troll: {
      nome: "Troll",
      vida: 150,
      dmg: 30,
      xp: 35,
      speed: 8,
      prata: 30,
      ouro: 8,
    },
  };

  function criarInimigoIndividual(tipo, chefe = null) {
    const base = chefe ?? modelos[tipo];
    const fatorElite = tipoEncontro === "elite" ? 1.5 : 1;
    const fatorCombate = 1.12 ** (nivel - 1);
    const fatorAndar = 1.2 ** (andar - 1);
    const fatorJogador = ehChefe ? 1 : fatorCombate;
    const fatorXp = (ehChefe ? 1 : 1.05 ** (nivel - 1)) * fatorAndar;
    const fatorStatus = fatorJogador * fatorAndar * fatorElite;
    return {
      tipo,
      nome: base.nome,
      level: ehChefe ? andar : nivel + andar - 1,
      boss: ehChefe,
      elite: tipoEncontro === "elite",
      vida_max: Math.round(base.vida * fatorStatus),
      vida: Math.round(base.vida * fatorStatus),
      dmg: Math.round(base.dmg * fatorStatus),
      xp: Math.round(base.xp * fatorXp * fatorElite),
      speed: Math.round(
        (base.speed + (ehChefe ? 0 : nivel - 1) +
          (tipoEncontro === "elite" ? 2 : 0)) *
          fatorAndar,
      ),
      prata: Math.round(base.prata * fatorElite),
      ouro: Math.round(base.ouro * fatorElite),
      id: `${tipo}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    };
  }

  if (ehChefe) {
    const chefe = Object.values(bosses)[
      (player.bosses_defeated ?? 0) % Object.keys(bosses).length
    ];
    inimigos = [criarInimigoIndividual("boss", chefe)];
  } else {
    const quantidade =
      andar >= 3 || (andar >= 2 && Math.random() < 0.4) ? 2 : 1;
    inimigos = Array.from({ length: quantidade }, () => {
      const tipo = tipo_inimigo[Math.floor(Math.random() * tipo_inimigo.length)];
      return criarInimigoIndividual(tipo);
    });
  }
  inimigo = inimigos[0];
  inimigosDerrotados = [];
  debuffsAplicadosNoTurno = new Set();

  const sprites = {
    zumbi: "🧟",
    slime: "🟢",
    goblin: "👺",
    esqueleto: "💀",
    orc: "👹",
    mago_inimigo: "🧙",
    aranha_gigante: "🕷️",
    troll: "🧌",
    boss: "🐉",
  };

  interfaceJogo.enemyArt.textContent =
    ehChefe && inimigo.nome === "Hidra"
      ? "🐍"
      : (sprites[inimigo.tipo] ?? "👾");
  interfaceJogo.encounterKind.textContent = ehChefe
    ? "CHEFE"
    : inimigos.length > 1
      ? `${inimigos.length} INIMIGOS`
      : inimigo.elite
      ? "ELITE"
      : "INIMIGO";
  interfaceJogo.message.textContent =
    inimigos.length > 1
      ? `${inimigos.length} inimigos apareceram!`
      : inimigo.elite
        ? `Um ${inimigo.nome} de elite apareceu.`
        : `Um ${inimigo.nome} apareceu.`;

  atualizarTela();
}

// ==============================
// BOSSES
// ==============================

const bosses = {
  minotauro: {
    nome: "Minotauro",
    vida: 450,
    dmg: 70,
    xp: 110,
    speed: 18,
    prata: 200,
    ouro: 100,
  },
  dragao: {
    nome: "Dragão",
    vida: 400,
    dmg: 40,
    xp: 90,
    speed: 20,
    prata: 100,
    ouro: 50,
  },
  hidra: {
    nome: "Hidra",
    vida: 400,
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
  const limiteFuria = 10 + 0.4 * (player.level - 1);
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
  interfaceJogo.necromancerSteal.textContent =
    `Roubar alma (${player.almas ?? 0}/4 · alvo abaixo de 15% HP)`;
  interfaceJogo.necromancerSteal.disabled =
    !batalhaAtiva ||
    player.almas >= 4 ||
    percentualVidaAlvo >= 15 ||
    Boolean(inimigo?.alma_roubada);
  interfaceJogo.necromancerSummon.hidden = !ehNecromante;
  interfaceJogo.necromancerSummon.textContent =
    `Invocar almas (65 mana · 2 almas)${player.almas_invocadas ? " — invocadas" : ""}`;
  interfaceJogo.necromancerSummon.disabled =
    !batalhaAtiva ||
    player.almas < 2 ||
    player.mana_atual < 65 ||
    player.almas_invocadas > 0;

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
    !batalhaAtiva || player.curas_loja <= 0 || vidaJogador >= player.vida_max;

  // ------------------------------
  // Mana e poções para classes mágicas
  // ------------------------------

  const temMana = usaMana();

  interfaceJogo.manaStat.hidden = !temMana;
  interfaceJogo.manaPotion.hidden = !temMana;
  interfaceJogo.shopManaPotion.hidden = !temMana || player.pocoes_mana_loja <= 0;
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
  interfaceJogo.playerDebuffs.hidden = debuffsAtivos.length === 0;
  interfaceJogo.playerDebuffs.textContent = debuffsAtivos.length
    ? `Efeitos: ${debuffsAtivos.join(" · ")}`
    : "";

  // ------------------------------
  // Inventário
  // ------------------------------

  renderizarInventario();

  // ------------------------------
  // Inimigo
  // ------------------------------

  const batalhaEmGrupo = inimigos.length > 1;
  const vitality = document.querySelector(".enemy-vitality");
  interfaceJogo.enemyParty.hidden = !batalhaEmGrupo;
  interfaceJogo.enemyParty.setAttribute("role", "group");
  interfaceJogo.enemyParty.setAttribute("aria-label", "Inimigos do combate");
  interfaceJogo.enemyArt.hidden = batalhaEmGrupo;
  interfaceJogo.enemyName.hidden = batalhaEmGrupo;
  interfaceJogo.enemyLevel.hidden = batalhaEmGrupo;
  vitality.hidden = batalhaEmGrupo;

  if (batalhaEmGrupo) {
    interfaceJogo.enemyParty.replaceChildren();
    for (const inimigoDoGrupo of inimigos) {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "enemy-party-card";
      card.classList.toggle("is-target", inimigoDoGrupo === inimigo);
      card.classList.toggle("is-defeated", inimigoDoGrupo.vida <= 0);
      card.disabled = inimigoDoGrupo.vida <= 0 || !batalhaAtiva;
      card.addEventListener("click", () => {
        inimigo = inimigoDoGrupo;
        interfaceJogo.message.textContent = `Alvo selecionado: ${inimigo.nome}.`;
        atualizarTela();
        salvarJogo();
      });
      const nome = document.createElement("strong");
      nome.textContent = inimigoDoGrupo.nome;
      const vida = document.createElement("span");
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
      card.append(nome, vida, barra);
      interfaceJogo.enemyParty.append(card);
    }
  } else if (inimigo) {
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
  player.curas_loja_max = 0;
  player.pocoes_mana_loja = 0;
  player.pocoes_mana_loja_max = 0;
  player.shop_offer_ids = [];
  player.shop_refresh_count = 0;
  player.andar = 1;
  player.skill_cooldown_salas = 0;
  player.furia_ativa = false;
  player.almas = 0;
  player.almas_invocadas = 0;
  player.reload_turns_remaining = 0;
  player.reload_weapon_id = null;
  player.debuffs = {};
  player.run_drop_ids = [];

  player.defense_atual = player.defense_max;
  player.speed_atual = player.speed_max;

  if (usaMana()) {
    player.mana_atual = player.mana_max;
    player.pocoes_mana_atual = player.pocoes_mana_max;
    player.pocao_ticks = null;
  }

  player.equipado = {
    arma: armasIniciais[player.classe]?.id ?? null,
    armadura: null,
    escudo: null,
  };

  inimigo = null;
  inimigos = [];
  inimigosDerrotados = [];

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
  player.furia_ativa = false;
  player.almas_invocadas = 0;
  player.reload_turns_remaining = 0;
  player.reload_weapon_id = null;
  player.debuffs = {};

  const xpTotal = inimigosDerrotados.reduce((total, derrotado) => total + derrotado.xp, 0);
  const prataTotal = inimigosDerrotados.reduce(
    (total, derrotado) => total + derrotado.prata,
    0,
  );
  const ouroTotal = inimigosDerrotados.reduce(
    (total, derrotado) => total + derrotado.ouro,
    0,
  );
  player.experiencia += xpTotal;
  player.prata += prataTotal;
  player.ouro += ouroTotal;
  definirMoedasDePrata(obterMoedasEmPrata());

  for (const derrotado of inimigosDerrotados) {
    registrarMensagem(`${derrotado.nome} derrotado. Você ganhou ${derrotado.xp} XP.`);
    if (derrotado.prata || derrotado.ouro) {
      registrarMensagem(
        `Você recebeu ${derrotado.prata} prata e ${derrotado.ouro} ouro.`,
      );
    }

    if (
      derrotado.tipo === "zumbi" &&
      !player.inventario.includes(casaco_de_couro.id) &&
      Math.random() < CHANCE_DROP_ARMADURA
    ) {
      player.inventario.push(casaco_de_couro.id);
      player.run_drop_ids.push(casaco_de_couro.id);
      registrarMensagem(
        `🛡️ ${derrotado.nome} dropou: ${casaco_de_couro.nome}! Equipe no inventário.`,
      );
    }
    if (derrotado.nome === "Minotauro") {
      for (const id of [
        machado_duplo_do_minotauro.id,
        armadura_de_placas_do_minotauro.id,
        escudo_do_minotauro.id,
      ]) {
        if (player.inventario.includes(id)) continue;
        const item = ITENS[id];
        player.inventario.push(id);
        player.run_drop_ids.push(id);
        registrarMensagem(`${derrotado.nome} dropou: ${item.nome}!`);
      }
    }
  }

  // ------------------------------
  // Mana pós-batalha (25% da mana perdida)
  // ------------------------------

  if (usaMana()) {
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

  let niveisGanhos = 0;
  // O excesso de XP continua para o próximo nível, inclusive em vitórias grandes.
  while (player.experiencia >= xpParaProximoNivel()) {
    player.experiencia -= xpParaProximoNivel();
    player.level += 1;
    niveisGanhos += 1;

    player.vida_max *= 1.12;
    player.dmg *= 1.12;
    player.defense_max += 1;
    player.speed_max += 1;

    // +1 cura a cada 3 níveis
    if (player.level % 3 === 0) {
      player.curas_max += 1;
    }

    if (usaMana()) {
      player.mana_max += 10;

      // +1 poção de mana a cada 3 níveis
      if (player.level % 3 === 0) {
        player.pocoes_mana_max += 1;
      }
    }
  }

  if (niveisGanhos > 0) {
    player.vida_atual = player.vida_max;
    player.curas_atual = player.curas_max;
    player.defense_atual = player.defense_max;
    player.speed_atual = player.speed_max;

    if (usaMana()) {
      player.mana_atual = obterManaMaxima();
      player.pocoes_mana_atual = player.pocoes_mana_max;
    }

    registrarMensagem(
      niveisGanhos === 1
        ? `LEVEL UP! Você chegou ao nível ${player.level}.`
        : `LEVEL UP! Você avançou ${niveisGanhos} níveis e chegou ao nível ${player.level}.`,
    );
  }
  if (player.classe === "arqueiro" && niveisGanhos > 0) {
    player.reducao_recarregamento = Math.min(
      2,
      (player.reducao_recarregamento ?? 0) + niveisGanhos,
    );
    registrarMensagem(
      `Suas armas de longo alcance recarregam ${player.reducao_recarregamento} turno(s) mais rápido.`,
    );
  }

  interfaceJogo.message.textContent = "Vitória. Pronto para outra batalha?";

  interfaceJogo.attack.disabled = true;
  interfaceJogo.defend.disabled = true;

  if (inimigos.some((combatente) => combatente.boss)) {
    player.bosses_defeated = (player.bosses_defeated ?? 0) + 1;
    player.andar += 1;
    player.route_step = 0;
    player.route_history = [];
    registrarMensagem(
      `Você derrotou o chefe e desceu ao andar ${player.andar}! Os inimigos ficaram mais fortes.`,
    );
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
  const chanceCritica =
    player.classe === "guerreiro" && player.furia_ativa
      ? classe_guerreiro.furia_buffs.critico_chance(player.critico_chance)
      : player.critico_chance;

  if (sorteio <= chanceCritica) {
    const danoCritico = dano * player.critico_dano;

    registrarMensagem("⚡ ACERTO CRÍTICO!");

    return danoCritico;
  }

  return dano;
}

// ==============================
// ATAQUE DO INIMIGO
// ==============================

function obterVelocidadeEfetiva() {
  const fatorReload =
    player.reload_turns_remaining > 0 &&
    player.reload_weapon_id === obterArmaAtual()?.id
      ? 0.5
      : 1;
  const fatoresLentidao = Object.values(player.debuffs ?? {})
    .filter((estado) => estado.turnos > 0 && estado.velocidade < 1)
    .reduce((fator, estado) => fator * estado.velocidade, 1);
  const velocidadeBase = obterVelocidadeBase();
  const velocidade =
    player.classe === "guerreiro" && player.furia_ativa
      ? classe_guerreiro.furia_buffs.speed(velocidadeBase)
      : velocidadeBase;
  return velocidade * fatorReload * Math.max(0.3, fatoresLentidao);
}

function aplicarDebuffJogador(id, nome, turnos, danoPorTurno = 0, velocidade = 1) {
  const anterior = player.debuffs[id];
  player.debuffs[id] = {
    turnos: Math.max(anterior?.turnos ?? 0, turnos),
    nome,
    danoPorTurno: Math.max(anterior?.danoPorTurno ?? 0, danoPorTurno),
    velocidade: Math.min(anterior?.velocidade ?? 1, velocidade),
  };
  debuffsAplicadosNoTurno.add(id);
  registrarMensagem(`${nome} aplicado por ${player.debuffs[id].turnos} turnos.`);
}

function aplicarEfeitoDoInimigo(oponente) {
  const rolagem = Math.random();
  if (oponente.tipo === "slime") {
    aplicarDebuffJogador("pegajoso", "Pegajoso", 2, 0, 0.75);
  } else if (oponente.boss && oponente.nome === "Hidra" && rolagem < 0.5) {
    aplicarDebuffJogador("pegajoso", "Pegajoso", 2, 0, 0.75);
  } else if (oponente.tipo === "aranha_gigante") {
    aplicarDebuffJogador(
      "veneno",
      "Veneno",
      3,
      player.vida_max * 0.025,
    );
    if (Math.random() < 0.45) {
      aplicarDebuffJogador("lentidao", "Lentidão", 2, 0, 0.75);
    }
  } else if (oponente.tipo === "goblin" && rolagem < 0.4) {
    aplicarDebuffJogador(
      "sangramento",
      "Sangramento",
      3,
      player.vida_max * 0.02,
      0.85,
    );
  } else if (oponente.boss && oponente.nome === "Dragão") {
    aplicarDebuffJogador(
      "queimando",
      "Queimando",
      3,
      player.vida_max * 0.025,
    );
  }
}

function finalizarDerrota() {
  defendendo = false;
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
    if (
      player.equipado.escudo &&
      player.run_drop_ids.includes(player.equipado.escudo)
    ) {
      player.equipado.escudo = null;
    }
  }
  if (usaMana()) {
    player.mana_atual = Math.min(player.mana_atual, obterManaMaxima());
  }
  player.furia_ativa = false;
  player.almas_invocadas = 0;
  player.almas = 0;

  player.curas_atual = Math.min(player.curas_atual, player.curas_max);
  player.curas_loja = 0;
  player.curas_loja_max = 0;
  player.pocoes_mana_loja = 0;
  player.pocoes_mana_loja_max = 0;
  player.reload_turns_remaining = 0;
  player.reload_weapon_id = null;
  player.debuffs = {};
  player.run_drop_ids = [];
  atualizarTela();
  interfaceJogo.message.textContent = "Você foi derrotado.";
  registrarMensagem(
    "Fim de jogo. Seu nível e curas foram mantidos, mas o dinheiro e os itens da run foram perdidos.",
  );
  finalizarBatalha();
  salvarJogo();
}

// Retorna false se o jogador morreu
function ataqueInimigo(oponente = inimigo) {
  const defesaTotal = obterDefesaTotal();

  const reducaoDefesa = defesaTotal / (defesaTotal + 20);

  let danoRecebido = Math.max(1, oponente.dmg * (1 - reducaoDefesa));
  const escudo = obterEscudoAtual();
  if (
    escudo?.bonus_chance_de_defender &&
    Math.random() * 100 < escudo.bonus_chance_de_defender
  ) {
    danoRecebido = 0;
    registrarMensagem(`${escudo.nome} bloqueou o ataque de ${oponente.nome}.`);
  }

  if (defendendo && danoRecebido > 0) {
    const velocidadeEfetiva = obterVelocidadeEfetiva();
    if (velocidadeEfetiva > oponente.speed) {
      const recarregando =
        player.reload_turns_remaining > 0 &&
        player.reload_weapon_id === obterArmaAtual()?.id;
      if (recarregando) {
        danoRecebido /= 2;
        registrarMensagem(
          "Você estava recarregando: a velocidade reduziu o dano pela metade.",
        );
      } else {
        danoRecebido = 0;
        registrarMensagem("Sua velocidade anulou o dano.");
      }
    } else {
      danoRecebido /= 2;
      registrarMensagem("Sua defesa reduziu o dano pela metade.");
    }
  }

  player.vida_atual -= danoRecebido;

  registrarMensagem(`${oponente.nome} causou ${Math.ceil(danoRecebido)} de dano em você.`);
  if (danoRecebido > 0) aplicarEfeitoDoInimigo(oponente);

  if (player.vida_atual <= 0) {
    finalizarDerrota();
    return false;
  }

  return true;
}

function atacarGrupoInimigo() {
  for (const oponente of inimigos) {
    if (oponente.vida > 0 && !ataqueInimigo(oponente)) {
      defendendo = false;
      return false;
    }
  }
  defendendo = false;
  return true;
}

function processarDebuffsJogador() {
  for (const [id, estado] of Object.entries(player.debuffs ?? {})) {
    if (estado.turnos <= 0) continue;
    if (estado.danoPorTurno > 0) {
      const dano = Math.min(estado.danoPorTurno, player.vida_atual);
      player.vida_atual -= dano;
      registrarMensagem(
        `${estado.nome} causou ${Math.ceil(dano)} de dano (${estado.turnos} turno(s) restante(s)).`,
      );
    }
    if (player.vida_atual <= 0) {
      finalizarDerrota();
      return false;
    }
  }
  return true;
}

function finalizarDuracaoDebuffs() {
  for (const [id, estado] of Object.entries(player.debuffs ?? {})) {
    if (debuffsAplicadosNoTurno.has(id)) continue;
    estado.turnos -= 1;
    if (estado.turnos <= 0) {
      delete player.debuffs[id];
      registrarMensagem(`${estado.nome} acabou.`);
    }
  }
}

function registrarDerrotaInimigo(alvo) {
  if (alvo.vida <= 0 && !inimigosDerrotados.includes(alvo)) {
    inimigosDerrotados.push(alvo);
    registrarMensagem(`${alvo.nome} foi derrotado.`);
  }
}

function causarDanoInimigo(alvo, dano, origem = "") {
  if (!alvo || alvo.vida <= 0) return;
  alvo.vida = Math.max(0, alvo.vida - dano);
  registrarMensagem(`${alvo.nome} recebeu ${Math.ceil(dano)} de dano${origem}.`);
  registrarDerrotaInimigo(alvo);
}

function atacarComAlmasInvocadas(alvo) {
  for (let indice = 0; indice < (player.almas_invocadas ?? 0); indice += 1) {
    const alvoAtual =
      alvo?.vida > 0 ? alvo : inimigos.find((oponente) => oponente.vida > 0);
    if (!alvoAtual) return;
    causarDanoInimigo(alvoAtual, player.dmg, " pelas almas invocadas");
  }
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

  if (acao === "furia") {
    player.furia_ativa = true;
    registrarMensagem(
      "Você ativou Fúria até o fim do combate: dano e velocidade dobrados, defesa pela metade.",
    );
    return false;
  }

  if (acao === "mil_flechas") {
    player.skill_cooldown_salas = 6;
    const danoCritico = calcularDanoAtaque() * player.critico_dano;
    for (const alvo of inimigos) {
      for (
        let acerto = 1;
        acerto <= classe_arqueiro.mil_flechas.critico_hits && alvo.vida > 0;
        acerto += 1
      ) {
        registrarMensagem(`⚡ Flecha crítica ${acerto}/4!`);
        causarDanoInimigo(alvo, danoCritico, " (Mil Flechas)");
      }
    }
    return inimigos.every((alvo) => alvo.vida <= 0);
  }

  if (acao === "explosao_arcana") {
    player.mana_atual -= classe_mago.explosao_arcana.mana_custo;
    const arma = obterArmaAtual();
    const penalidade = calcularPenalidadeMagica();
    const danoBase =
      (player.dmg + (arma?.magic_dmg ?? 0)) * (1 - penalidade / 100);
    const danoCritico =
      danoBase *
      player.critico_dano *
      classe_mago.explosao_arcana.multiplicador_critico;
    registrarMensagem("Você lançou Explosão Arcana (-60 de mana)!");
    for (const alvo of inimigos) {
      if (alvo.vida > 0) {
        causarDanoInimigo(alvo, danoCritico, " (crítico arcano)");
      }
    }
    return inimigos.every((alvo) => alvo.vida <= 0);
  }

  if (acao === "roubar_alma") {
    inimigo.alma_roubada = true;
    player.almas = Math.min(4, player.almas + 1);
    inimigo.vida = 0;
    registrarDerrotaInimigo(inimigo);
    registrarMensagem(
      `Você roubou a alma de ${inimigo.nome}; ele foi derrotado instantaneamente. Almas: ${player.almas}/4.`,
    );
    return inimigos.every((alvo) => alvo.vida <= 0);
  }

  if (acao === "invocar_almas") {
    player.mana_atual -= 65;
    player.almas -= 2;
    player.almas_invocadas = 2;
    registrarMensagem(
      "Duas almas foram invocadas e atacarão os alvos que você atacar até o fim do combate.",
    );
    return false;
  }

  if (acao === "atacar") {
    const danoBase = calcularDanoAtaque();
    const arma = obterArmaAtual();
    const tempoRecarga = obterTempoRecarga(arma);

    if (tempoRecarga > 0) {
      player.reload_turns_remaining = tempoRecarga;
      player.reload_weapon_id = arma.id;
      registrarMensagem(
        `Sua arma precisa recarregar por ${tempoRecarga} turno(s).`,
      );
    }

    const tiros = 1 + (arma?.multi_shot ?? 0);
    for (let tiro = 0; tiro < tiros; tiro += 1) {
      const vivos = inimigos.filter((alvo) => alvo.vida > 0);
      if (vivos.length === 0) break;
      const ordenados = [
        inimigo,
        ...vivos.filter((alvo) => alvo !== inimigo),
      ].filter((alvo) => alvo.vida > 0);
      causarDanoInimigo(
        ordenados[tiro % ordenados.length],
        calcularDanoCritico(danoBase),
        tiros > 1 ? " (multishot)" : "",
      );
    }

    if (arma?.area_dmg > 0) {
      for (const alvo of inimigos) {
        causarDanoInimigo(alvo, arma.area_dmg, " (dano em área)");
      }
    }

    return inimigos.every((alvo) => alvo.vida <= 0);
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
  if (!batalhaAtiva || !player || !inimigo || inimigos.length === 0) {
    return;
  }

  if (
    acao === "atacar" &&
    player.reload_turns_remaining > 0 &&
    player.reload_weapon_id === obterArmaAtual()?.id
  ) {
    registrarMensagem(
      `Arma recarregando: ${player.reload_turns_remaining} turno(s) restante(s).`,
    );
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
    if (!usaMana()) return;

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

  if (acao === "furia") {
    const limiteFuria = 10 + 0.4 * (player.level - 1);
    if (
      player.classe !== "guerreiro" ||
      player.furia_ativa ||
      (player.vida_atual / player.vida_max) * 100 > limiteFuria
    ) {
      registrarMensagem(
        `Fúria só pode ser ativada com ${limiteFuria.toFixed(1)}% de vida ou menos.`,
      );
      return;
    }
  }

  if (
    acao === "mil_flechas" &&
    (player.classe !== "arqueiro" || player.skill_cooldown_salas > 0)
  ) {
    registrarMensagem("Mil Flechas ainda está em recarga.");
    return;
  }

  if (acao === "explosao_arcana") {
    if (player.classe !== "mago") return;
    if (player.mana_atual < classe_mago.explosao_arcana.mana_custo) {
      registrarMensagem("Você precisa de 60 de mana para Explosão Arcana.");
      return;
    }
  }

  if (acao === "roubar_alma") {
    if (player.classe !== "necromante") return;
    if (player.almas >= 4) {
      registrarMensagem("Você já alcançou o limite de 4 almas.");
      return;
    }
    if (inimigo.vida / inimigo.vida_max >= 0.15) {
      registrarMensagem(
        "Só é possível roubar a alma quando o inimigo está com menos de 15% de vida.",
      );
      return;
    }
    if (inimigo.alma_roubada) {
      registrarMensagem("Você já roubou a alma deste inimigo.");
      return;
    }
  }

  if (acao === "invocar_almas") {
    if (player.classe !== "necromante") return;
    if (player.almas < 2) {
      registrarMensagem("Você precisa de 2 almas para invocá-las.");
      return;
    }
    if (player.mana_atual < 65) {
      registrarMensagem("Você precisa de 65 de mana para invocar almas.");
      return;
    }
    if (player.almas_invocadas > 0) {
      registrarMensagem("As almas já estão ajudando neste combate.");
      return;
    }
  }

  if (acao === "defender") {
    defendendo = true;
  }

  debuffsAplicadosNoTurno = new Set();
  if (!processarDebuffsJogador()) return;

  // Quem tem mais velocidade age primeiro. Empate: o jogador.
  const velocidadeInimigo = Math.max(
    ...inimigos.filter((oponente) => oponente.vida > 0).map((oponente) => oponente.speed),
  );
  const inimigoPrimeiro = velocidadeInimigo > obterVelocidadeEfetiva();

  if (inimigoPrimeiro) {
    registrarMensagem("Os inimigos mais rápidos atacaram primeiro.");

    if (!atacarGrupoInimigo()) return;
  }

  let inimigoMorreu = executarAcaoJogador(acao);
  if (["atacar", "mil_flechas", "explosao_arcana"].includes(acao)) {
    atacarComAlmasInvocadas(inimigo);
    inimigoMorreu = inimigos.every((alvo) => alvo.vida <= 0);
  }

  if (inimigoMorreu) {
    for (const alvo of inimigos) registrarDerrotaInimigo(alvo);
    if (inimigos.every((alvo) => alvo.vida <= 0)) {
      inimigo = inimigosDerrotados[inimigosDerrotados.length - 1];
      defendendo = false;
      if (acao !== "pocao_mana" && acao !== "pocao_mana_loja") {
        avancarEfeitoPocao();
      }
      regenerarManaPorTurno();
      concluirVitoria();
      return;
    }
  }

  if (inimigo?.vida <= 0) {
    inimigo = inimigos.find((oponente) => oponente.vida > 0) ?? inimigo;
    if (inimigo.vida > 0) {
      interfaceJogo.message.textContent = `${inimigo.nome} é o próximo alvo.`;
    }
  }

  if (!inimigoPrimeiro) {
    if (!atacarGrupoInimigo()) return;
  }

  if (!batalhaAtiva) return;

  finalizarDuracaoDebuffs();

  if (!["atacar", "mil_flechas"].includes(acao) && player.reload_turns_remaining > 0) {
    player.reload_turns_remaining -= 1;
    if (player.reload_turns_remaining === 0) {
      player.reload_weapon_id = null;
      registrarMensagem("Sua arma está recarregada.");
    }
  }

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
    if (
      player.equipado.escudo &&
      player.run_drop_ids.includes(player.equipado.escudo)
    ) {
      player.equipado.escudo = null;
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

  if (slotSaveAtual !== null) {
    localStorage.removeItem(chaveSave(slotSaveAtual));
  }

  player = null;
  slotSaveAtual = null;

  inimigo = null;
  inimigos = [];
  inimigosDerrotados = [];

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

  mostrarMenuSaves();
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
interfaceJogo.warriorSkill.addEventListener("click", () => jogarTurno("furia"));
interfaceJogo.archerSkill.addEventListener("click", () =>
  jogarTurno("mil_flechas"),
);
interfaceJogo.mageSkill.addEventListener("click", () =>
  jogarTurno("explosao_arcana"),
);
interfaceJogo.necromancerSteal.addEventListener("click", () =>
  jogarTurno("roubar_alma"),
);
interfaceJogo.necromancerSummon.addEventListener("click", () =>
  jogarTurno("invocar_almas"),
);

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
  player.furia_ativa = false;
  player.almas_invocadas = 0;
  player.reload_turns_remaining = 0;
  player.reload_weapon_id = null;
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
  if (!player || slotSaveAtual === null) return;

  player.game_phase = faseJogo;
  if (faseJogo === "batalha" && inimigos.length > 0) {
    player.combat_state = {
      tipo: tipoEncontroAtual,
      ativa: batalhaAtiva,
      alvoId: inimigo?.id ?? null,
      inimigos: inimigos.map((oponente) => ({ ...oponente })),
    };
  } else {
    player.combat_state = null;
  }

  localStorage.setItem(chaveSave(slotSaveAtual), JSON.stringify(player));
}

function renderizarMenuSaves() {
  interfaceClasses.saveSlots.replaceChildren();

  for (let slot = 1; slot <= QUANTIDADE_SLOTS_SAVE; slot += 1) {
    const botao = document.createElement("button");
    const titulo = document.createElement("strong");
    const detalhe = document.createElement("span");
    const save = localStorage.getItem(chaveSave(slot));
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
  renderizarMenuSaves();
}

function iniciarNovoSave(slot) {
  slotSaveAtual = slot;
  player = null;
  interfaceClasses.saveMenu.hidden = true;
  interfaceClasses.selection.hidden = false;
  interfaceClasses.creation.hidden = true;
  interfaceClasses.gameContent.hidden = true;
}

function carregarJogo(slot) {
  const chave = chaveSave(slot);
  const save = localStorage.getItem(chave);
  if (save === null) {
    iniciarNovoSave(slot);
    return;
  }
  try {
    const dados = JSON.parse(save);

    if (!classes[dados.classe]) {
      console.warn(`Save inválido no slot ${slot}: classe inexistente.`);
      localStorage.removeItem(chave);
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
    localStorage.removeItem(chave);
    mostrarMenuSaves();
  }
}

interfaceClasses.saveSlots.addEventListener("click", (evento) => {
  const botao = evento.target.closest("[data-save-slot]");
  if (!botao) return;
  const slot = Number(botao.dataset.saveSlot);
  if (!Number.isInteger(slot) || slot < 1 || slot > QUANTIDADE_SLOTS_SAVE) {
    return;
  }
  if (localStorage.getItem(chaveSave(slot)) === null) {
    iniciarNovoSave(slot);
  } else {
    carregarJogo(slot);
  }
});

function migrarSaveAntigo() {
  const saveAntigo = localStorage.getItem("rpg_save");
  if (saveAntigo === null) return;
  if (localStorage.getItem(chaveSave(1)) === null) {
    localStorage.setItem(chaveSave(1), saveAntigo);
  }
  localStorage.removeItem("rpg_save");
}

migrarSaveAntigo();
mostrarMenuSaves();
