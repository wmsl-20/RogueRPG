// ==============================
// CLASSES DISPONÍVEIS
// ==============================

const classe_guerreiro = {
  classe: "guerreiro",

  // Vida
  vida_max: 130,
  vida_atual: 130,
  // Status
  dmg: 24,
  resistencia_fisica: 20,
  resistencia_magica: 10,
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
    dmg: (dmg) => dmg * 3,
    resistance: (resistance) => (resistance > 0 ? resistance / 2 : resistance),
    speed: (speed) => speed * 3,
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
  resistencia_fisica: 6,
  resistencia_magica: 0,
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
  resistencia_fisica: 3,
  resistencia_magica: 8,
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
  vida_max: 90,
  vida_atual: 90,
  mana_max: 100,
  mana_atual: 100,
  dmg: 30,
  resistencia_fisica: 5,
  resistencia_magica: 12,
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

const classe_paladino = {
  classe: "paladino",

  // Vida
  vida_max: 100,
  vida_atual: 100,
  // Status
  dmg: 20,
  resistencia_fisica: 8,
  resistencia_magica: 8,
  speed_max: 8,
  speed_atual: 8,
  critico_chance: 8,
  critico_dano: 2,
  // Cura
  curas_max: 2,
  curas_atual: 2,
  // Fé (recurso próprio do Paladino)
  fe_max: 100,
  fe_atual: 100,
  // Moedas
  ouro: 0,
  prata: 0,
  // Progressão
  level: 1,
  experiencia: 0,
  run_drop_ids: [],
  // Golpe Sagrado: ataque mágico pontual, ignora parte da defesa do inimigo
  golpe_sagrado: {
    fe_custo: 40,
    magic_dmg: 30,
    ignora_defesa: 0.3, // ignora 30% da defesa do inimigo no cálculo de redução
  },
  // Bênção: buff ativo até o fim do combate, dá roubo de vida nos ataques normais
  bencao_ativa: false,
  bencao: {
    fe_custo: 50,
    roubo_vida: 0.6, // cura 60% do dano causado em ataques normais enquanto ativa
  },
};

// ==============================
// CLASSES ORGANIZADAS
// ==============================

const classes = {
  guerreiro: classe_guerreiro,
  arqueiro: classe_arqueiro,
  mago: classe_mago,
  necromante: classe_necromante,
  paladino: classe_paladino,
};

const NOMES_CLASSES = {
  guerreiro: "Guerreiro",
  arqueiro: "Arqueiro",
  mago: "Mago",
  necromante: "Necromante",
  paladino: "Paladino",
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
  classe: "guerreiro",
  tipo: "arma",
  nome: "Espada inicial",
  dmg: 3,
};

const espada_de_ferro_basica = {
  id: "espada_de_ferro_basica",
  classe: "guerreiro",
  tipo: "arma",
  nome: "Espada de ferro básica",
  dmg: 5,
};

const maça = {
  id: "maca",
  classe: "guerreiro",
  tipo: "arma",
  nome: "Maça",
  dmg: 7,
};

const espada_longa = {
  id: "espada_longa",
  classe: "guerreiro",
  tipo: "arma",
  nome: "Espada longa",
  dmg: 10,
};

const machado_duplo_do_minotauro = {
  id: "machado_duplo_do_minotauro",
  classe: "guerreiro",
  tipo: "arma",
  nome: "Machado duplo do Minotauro",
  dmg: 17,
  area_dmg: 10,
};

const maça_sagrada = {
  id: "maca_sagrada",
  classe: "paladino",
  tipo: "arma",
  nome: "Maça sagrada",
  dmg: 5,
};

const martelo_de_ferro = {
  id: "martelo_de_ferro",
  classe: "paladino",
  tipo: "arma",
  nome: "Martelo de ferro",
  dmg: 6,
};
const martelo_de_guerra = {
  id: "martelo_de_guerra",
  classe: "paladino",
  tipo: "arma",
  nome: "Martelo de guerra",
  dmg: 8,
};
const espada_da_ordem = {
  id: "espada_da_ordem",
  classe: "paladino",
  tipo: "arma",
  nome: "Espada da Ordem",
  dmg: 10,
};
const martelo_do_juramento = {
  id: "martelo_do_juramento",
  classe: "paladino",
  tipo: "arma",
  nome: "Martelo do Juramento",
  dmg: 13,
};

// ==============================
// ARMAS DE LONGO ALCANCE
// ==============================

const arco_inicial = {
  id: "arco_inicial",
  classe: "arqueiro",
  tipo: "arma",
  nome: "Arco inicial",
  dmg: 5,
};

const arco_de_bambu_basico = {
  id: "arco_de_bambu_basico",
  classe: "arqueiro",
  tipo: "arma",
  nome: "Arco de bambu básico",
  dmg: 7,
  reload_time: 0, // tempo de recarga em turnos
  multi_shot: 1,
};

const besta = {
  id: "besta",
  classe: "arqueiro",
  tipo: "arma",
  nome: "Besta",
  dmg: 9,
  reload_time: 2, // tempo de recarga em turnos
  multi_shot: 2,
};

const arco_composto = {
  id: "arco_composto",
  classe: "arqueiro",
  tipo: "arma",
  nome: "Arco composto",
  dmg: 12,
  reload_time: 1.5, // tempo de recarga em turnos
  multi_shot: 3,
};

const zarabatana_venenosa = {
  id: "zarabatana_venenosa",
  classe: "arqueiro",
  tipo: "arma",
  nome: "Zarabatana venenosa",
  dmg: 15,
  veneno_dano: 5,
  veneno_duration: 3,
};

// ==============================
// ARMAS MÁGICAS
// ==============================

const cajado_inicial = {
  id: "cajado_inicial",
  classe: "mago",
  tipo: "arma",
  nome: "Cajado inicial",
  fisico_dmg: 2,
  magic_dmg: 7,
  mana_custo: 10,
};

const cajado_de_madeira_basico = {
  id: "cajado_de_madeira_basico",
  classe: "mago",
  tipo: "arma",
  nome: "Cajado de madeira básico",
  fisico_dmg: 3,
  magic_dmg: 10,
  mana_custo: 15,
};

const varinha_magica = {
  id: "varinha_magica",
  classe: "mago",
  tipo: "arma",
  nome: "Varinha mágica",
  fisico_dmg: 1,
  magic_dmg: 15,
  mana_custo: 20,
};

const livro_de_feiticos = {
  id: "livro_de_feiticos",
  classe: "mago",
  tipo: "arma",
  nome: "Livro de feitiços",
  fisico_dmg: 2,
  magic_dmg: 20,
  mana_custo: 25,
};

const grimorio_misterioso = {
  id: "grimorio_misterioso",
  classe: "necromante",
  tipo: "arma",
  nome: "Grimório misterioso",
  fisico_dmg: 1,
  magic_dmg: 17,
  mana_custo: 30,
};

const cetro_sombrio = {
  id: "cetro_sombrio",
  classe: "necromante",
  tipo: "arma",
  nome: "Cetro sombrio",
  fisico_dmg: 2,
  magic_dmg: 30,
  mana_custo: 35,
};

// ==============================
// ARMAS POR CLASSE
// ==============================

const armasIniciais = {
  guerreiro: espada_inicial,
  arqueiro: arco_inicial,
  mago: cajado_inicial,
  necromante: grimorio_misterioso,
  paladino: maça_sagrada,
};

const escudo_de_madeira = {
  id: "escudo_de_madeira",
  tipo: "escudo",
  nome: "Escudo de madeira",
  resistencia_fisica: 5,
  resistencia_magica: 1,
  speed_penalty: 2,
  bonus_chance_de_defender: 10,
};

const escudo_de_madeira_reforcado = {
  id: "escudo_de_madeira_reforcado",
  tipo: "escudo",
  nome: "Escudo de madeira reforçado",
  resistencia_fisica: 8,
  resistencia_magica: 2,
  speed_penalty: 3,
  bonus_chance_de_defender: 15,
};

const escudo_de_ferro = {
  id: "escudo_de_ferro",
  tipo: "escudo",
  nome: "Escudo de ferro",
  resistencia_fisica: 12,
  resistencia_magica: 3,
  speed_penalty: 5,
  bonus_chance_de_defender: 20,
};

const escudo_do_minotauro = {
  id: "escudo_do_minotauro",
  tipo: "escudo",
  nome: "Escudo do Minotauro",
  resistencia_fisica: 20,
  resistencia_magica: 5,
  speed_penalty: 15,
};

// ==============================
// ARMADURAS
// ==============================

const casaco_de_couro = {
  id: "casaco_de_couro",
  tipo: "armadura",
  nome: "Casaco de couro",
  resistencia_fisica: 5,
};

const armadura_de_placas = {
  id: "armadura_de_placas",
  tipo: "armadura",
  nome: "Armadura de placas",
  resistencia_fisica: 12,
};

const cota_de_malha = {
  id: "cota_de_malha",
  tipo: "armadura",
  nome: "Cota de malha",
  resistencia_fisica: 8,
  resistencia_magica: 5,
};

const capa_mistica = {
  id: "capa_mistica",
  tipo: "armadura",
  nome: "Capa mística",
  resistencia_fisica: 3,
  resistencia_magica: 15,
  mana_bonus: 10, // bônus de mana máxima
  mana_regeneracao: 1, // regeneração de mana por turno
};

const armadura_de_placas_do_minotauro = {
  id: "armadura_de_placas_do_minotauro",
  tipo: "armadura",
  nome: "Armadura de placas do Minotauro",
  resistencia_fisica: 25,
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
  maca_sagrada: maça_sagrada,
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
  martelo_de_ferro,
  martelo_de_guerra,
  espada_da_ordem,
  martelo_do_juramento,
};

// ==============================
// INIMIGOS DISPONÍVEIS
// ==============================

const tipo_inimigo = [
  "zumbi",
  "slime",
  "goblin",
  "esqueleto",
  "mago_inimigo",
  "aranha_gigante",
];
const tipo_inimigo_elite = [...tipo_inimigo, "orc", "troll"];

// ==============================
// ESTADO DA BATALHA
// ==============================

let inimigo = null;
let inimigos = [];
let inimigosDerrotados = [];
let alvosMultishotSelecionados = new Set();
let debuffsAplicadosNoTurno = new Set();
let defendendo = false;
let batalhaAtiva = false;
let categoriaInventario = "arma";
let faseJogo = "batalha";
let tipoEncontroAtual = "combate";
let slotSaveAtual = null;
const DEBUG_DEBUFFS_ALEATORIOS = false;

const QUANTIDADE_SLOTS_SAVE = 4;
const SALAS_ATE_BOSS = 15;
const LIMITE_SALAS_ANTES_BOSS = 30;
const SALAS_POR_ACAMPAMENTO = 5;
const PRECO_ATUALIZAR_LOJA = 5;
const ITENS_POR_LOJA = 5;
const RESISTENCIA_MINIMA = -50;
const RESISTENCIA_MAXIMA = 75;
const PENALIDADE_ARMA_FORA_DA_CLASSE = 0.25;
const VERSAO_RESISTENCIAS = 1;
const DEFESA_BASE_LEGADA = {
  guerreiro: 10,
  arqueiro: 6,
  mago: 3,
  necromante: 0,
  paladino: 7,
};
const OFERTAS_LOJA = [
  { id: "espada_de_ferro_basica", preco: 35 },
  { id: "maca", preco: 55 },
  { id: "espada_longa", preco: 90 },
  { id: "martelo_de_ferro", preco: 40 },
  { id: "martelo_de_guerra", preco: 65 },
  { id: "espada_da_ordem", preco: 95 },
  { id: "martelo_do_juramento", preco: 130 },
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
  { id: "cetro_sombrio", preco: 110 },
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

function normalizarResistencia(valor) {
  const resistencia = Number(valor);
  if (!Number.isFinite(resistencia)) return 0;
  return Math.round(
    Math.min(RESISTENCIA_MAXIMA, Math.max(RESISTENCIA_MINIMA, resistencia)),
  );
}

function lerNumeroSeguro(valor, padrao, minimo = 0, maximo = Number.MAX_SAFE_INTEGER) {
  const numero = Number(valor);
  if (!Number.isFinite(numero)) return padrao;
  return Math.min(maximo, Math.max(minimo, numero));
}

function descreverResistencia(valor) {
  const resistencia = normalizarResistencia(valor);
  if (resistencia > 0) return `resiste ${resistencia}%`;
  if (resistencia < 0) return `vulnerável ${Math.abs(resistencia)}%`;
  return "sem resistência";
}

function descreverResistencias(alvo) {
  const tipoAtaque =
    obterTipoDanoInimigo(alvo) === "magico" ? "mágico" : "físico";
  return `Ataque ${tipoAtaque} · Físico: ${descreverResistencia(alvo.resistencia_fisica)} · Mágico: ${descreverResistencia(alvo.resistencia_magica)}`;
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

function obterResistenciaJogador(tipoDano) {
  if (!player) return 0;
  const propriedade =
    tipoDano === "magico" ? "resistencia_magica" : "resistencia_fisica";
  const resistenciaBase = Number(player[propriedade]) || 0;
  const resistenciaArmadura = Number(obterArmaduraAtual()?.[propriedade]) || 0;
  const resistenciaEscudo = Number(obterEscudoAtual()?.[propriedade]) || 0;
  const resistenciaTotal = normalizarResistencia(
    resistenciaBase + resistenciaArmadura + resistenciaEscudo,
  );
  return player.classe === "guerreiro" && player.furia_ativa
    ? normalizarResistencia(
        classe_guerreiro.furia_buffs.resistance(resistenciaTotal),
      )
    : resistenciaTotal;
}

function obterTipoDanoInimigo(oponente) {
  if (oponente.tipo_dano === "magico" || oponente.tipo_dano === "fisico") {
    return oponente.tipo_dano;
  }
  return oponente.tipo === "mago_inimigo" ||
    (oponente.boss && oponente.nome === "Dragão")
    ? "magico"
    : "fisico";
}

function obterPenalidadeArma(arma) {
  return arma?.classe && arma.classe !== player?.classe
    ? PENALIDADE_ARMA_FORA_DA_CLASSE
    : 0;
}

function aplicarPenalidadeArma(dano, arma) {
  return dano * (1 - obterPenalidadeArma(arma));
}

function descreverClasseArma(arma) {
  if (!arma.classe) return [];
  return [
    `Classe: ${NOMES_CLASSES[arma.classe] ?? arma.classe}`,
    `-${Math.round(PENALIDADE_ARMA_FORA_DA_CLASSE * 100)}% de dano fora da classe`,
  ];
}

function registrarPenalidadeArma(arma) {
  const penalidade = obterPenalidadeArma(arma);
  if (penalidade > 0) {
    registrarMensagem(
      `${arma.nome} é de outra classe; dano reduzido em ${Math.round(penalidade * 100)}%.`,
    );
  }
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
  const classeBase = classes[jogador.classe];

  const inventario = Array.isArray(jogador.inventario)
    ? jogador.inventario.filter((id) => ITENS[id])
    : [];

  jogador.level = Math.floor(lerNumeroSeguro(jogador.level, 1, 1));
  jogador.experiencia = lerNumeroSeguro(jogador.experiencia, 0);
  jogador.ouro = lerNumeroSeguro(jogador.ouro, 0);
  jogador.prata = lerNumeroSeguro(jogador.prata, 0);
  jogador.vida_max = lerNumeroSeguro(
    jogador.vida_max,
    classeBase?.vida_max ?? 100,
    1,
  );
  jogador.vida_atual = lerNumeroSeguro(
    jogador.vida_atual,
    jogador.vida_max,
    0,
    jogador.vida_max,
  );
  jogador.dmg = lerNumeroSeguro(jogador.dmg, classeBase?.dmg ?? 10, 0);
  jogador.speed_max = lerNumeroSeguro(
    jogador.speed_max,
    classeBase?.speed_max ?? 1,
    0,
  );
  jogador.speed_atual = lerNumeroSeguro(
    jogador.speed_atual,
    jogador.speed_max,
    0,
    jogador.speed_max,
  );
  jogador.critico_chance = lerNumeroSeguro(
    jogador.critico_chance,
    classeBase?.critico_chance ?? 0,
    0,
    100,
  );
  jogador.critico_dano = lerNumeroSeguro(
    jogador.critico_dano,
    classeBase?.critico_dano ?? 2,
    1,
  );
  jogador.curas_max = lerNumeroSeguro(
    jogador.curas_max,
    classeBase?.curas_max ?? 1,
    0,
  );
  jogador.curas_atual = lerNumeroSeguro(
    jogador.curas_atual,
    jogador.curas_max,
    0,
    jogador.curas_max,
  );
  if (usaMana()) {
    jogador.mana_max = lerNumeroSeguro(
      jogador.mana_max,
      classeBase?.mana_max ?? 100,
      0,
    );
    jogador.mana_atual = lerNumeroSeguro(
      jogador.mana_atual,
      jogador.mana_max,
      0,
      jogador.mana_max,
    );
    jogador.pocoes_mana_max = lerNumeroSeguro(
      jogador.pocoes_mana_max,
      classeBase?.pocoes_mana_max ?? 0,
      0,
    );
    jogador.pocoes_mana_atual = lerNumeroSeguro(
      jogador.pocoes_mana_atual,
      jogador.pocoes_mana_max,
      0,
      jogador.pocoes_mana_max,
    );
  }
  if (jogador.versao_resistencias !== VERSAO_RESISTENCIAS) {
    const defesaMaximaLegada = Number(jogador.defense_max);
    const niveisDeResistencia = Number.isFinite(defesaMaximaLegada)
      ? Math.max(
          0,
          Math.floor(defesaMaximaLegada - DEFESA_BASE_LEGADA[jogador.classe]),
        )
      : 0;
    const classeBase = classes[jogador.classe];
    jogador.resistencia_fisica = normalizarResistencia(
      classeBase.resistencia_fisica + niveisDeResistencia,
    );
    jogador.resistencia_magica = normalizarResistencia(
      classeBase.resistencia_magica + niveisDeResistencia,
    );
    jogador.versao_resistencias = VERSAO_RESISTENCIAS;
  }
  jogador.resistencia_fisica = normalizarResistencia(
    jogador.resistencia_fisica,
  );
  jogador.resistencia_magica = normalizarResistencia(
    jogador.resistencia_magica,
  );
  jogador.run_drop_ids = Array.isArray(jogador.run_drop_ids)
    ? jogador.run_drop_ids.filter((id) => ITENS[id])
    : [];
  jogador.almas = Math.min(
    4,
    Math.max(0, Math.floor(Number(jogador.almas) || 0)),
  );
  if (jogador.classe === "paladino") {
    jogador.fe_max =
      Number.isFinite(Number(jogador.fe_max)) && Number(jogador.fe_max) > 0
        ? Number(jogador.fe_max)
        : classe_paladino.fe_max;
    jogador.fe_atual = Math.min(
      jogador.fe_max,
      Math.max(
        0,
        Number.isFinite(Number(jogador.fe_atual))
          ? Number(jogador.fe_atual)
          : jogador.fe_max,
      ),
    );
    jogador.bencao_ativa = Boolean(jogador.bencao_ativa);
  }
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
  const debuffs =
    jogador.debuffs && typeof jogador.debuffs === "object"
      ? jogador.debuffs
      : {};
  jogador.debuffs = Object.fromEntries(
    Object.entries(debuffs)
      .filter(
        ([id, estado]) =>
          [
            "pegajoso",
            "lentidao",
            "veneno",
            "sangramento",
            "queimando",
          ].includes(id) &&
          estado &&
          Number(estado.turnos) > 0,
      )
      .map(([id, estado]) => [
        id,
        {
          turnos: Math.floor(Number(estado.turnos)),
          nome: typeof estado.nome === "string" ? estado.nome : id,
          danoPorTurno: Math.max(0, Number(estado.danoPorTurno) || 0),
          velocidade: Math.min(
            1,
            Math.max(0.3, Number(estado.velocidade) || 1),
          ),
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
  delete jogador.defense_max;
  delete jogador.defense_atual;

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
    if (item.resistencia_fisica) {
      extras.push(`Físico +${item.resistencia_fisica}% resistência`);
    }
    if (item.resistencia_magica) {
      extras.push(`Mágico +${item.resistencia_magica}% resistência`);
    }
    if (item.mana_bonus) extras.push(`+${item.mana_bonus} mana máxima`);
    if (item.mana_regeneracao) {
      extras.push(`+${item.mana_regeneracao} mana por turno`);
    }
    if (item.speed) extras.push(`+${item.speed} velocidade`);
    if (item.speed_penalty) extras.push(`-${item.speed_penalty} velocidade`);
    return extras.join(" · ");
  }

  if (item.tipo === "escudo") {
    const extras = [];
    if (item.resistencia_fisica) {
      extras.push(`Físico +${item.resistencia_fisica}% resistência`);
    }
    if (item.resistencia_magica) {
      extras.push(`Mágico +${item.resistencia_magica}% resistência`);
    }
    if (item.speed_penalty) extras.push(`-${item.speed_penalty} velocidade`);
    if (item.bonus_chance_de_defender) {
      extras.push(`${item.bonus_chance_de_defender}% de chance de bloquear`);
    }
    return extras.join(" · ");
  }

  if (item.magic_dmg !== undefined) {
    return [
      `Mágico +${item.magic_dmg} (${item.mana_custo} mana)`,
      `Físico +${item.fisico_dmg}`,
      ...descreverClasseArma(item),
    ].join(" · ");
  }

  const extras = [`Físico +${item.dmg} dano`, ...descreverClasseArma(item)];
  if (item.area_dmg) extras.push(`Físico +${item.area_dmg} dano em área`);
  if (item.veneno_dano) {
    extras.push(
      `veneno ${item.veneno_dano}/turno por ${item.veneno_duration} turnos`,
    );
  }
  if (item.multi_shot)
    extras.push(`${item.multi_shot} disparo(s) adicional(is)`);
  if (item.reload_time) extras.push(`recarga ${item.reload_time} turno(s)`);
  return extras.join(" · ");
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
    if (player.classe === "paladino") {
      player.fe_atual = player.fe_max;
      player.bencao_ativa = false;
    }
    player.curas_loja = player.curas_loja_max;
    player.pocoes_mana_loja = player.pocoes_mana_loja_max;
    registrarMensagem(
      "O acampamento restaurou toda a sua vida, mana, fé e poções.",
    );
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

function pontuarEquipamento(item) {
  if (item.tipo === "arma") {
    const danoFisico = item.dmg ?? item.fisico_dmg ?? 0;
    const danoMagico = item.magic_dmg ?? 0;
    const danoBase =
      player.dmg +
      (danoMagico > 0 ? (danoFisico + danoMagico) / 2 : danoFisico);
    const tiros = 1 + (item.multi_shot ?? 0);
    const danoExtra =
      (item.area_dmg ?? 0) +
      (item.veneno_dano ?? 0) * (item.veneno_duration ?? 0) * 0.25;
    const penalidade = obterPenalidadeArma(item);
    return (
      ((danoBase * tiros + danoExtra) / (1 + (item.reload_time ?? 0) * 0.25)) *
      (1 - penalidade)
    );
  }

  const resistencias =
    (item.resistencia_fisica ?? 0) + (item.resistencia_magica ?? 0);
  if (item.tipo === "armadura") {
    return (
      resistencias +
      (item.mana_bonus ?? 0) * 0.5 +
      (item.mana_regeneracao ?? 0) * 2 +
      (item.speed ?? 0) -
      (item.speed_penalty ?? 0)
    );
  }

  return (
    resistencias +
    (item.bonus_chance_de_defender ?? 0) * 0.25 -
    (item.speed_penalty ?? 0)
  );
}

function compararComEquipado(item) {
  const equipado = ITENS[player.equipado?.[item.tipo]];
  if (!equipado) return null;

  const diferenca = pontuarEquipamento(item) - pontuarEquipamento(equipado);
  if (Math.abs(diferenca) < 0.01) return "igual";
  return diferenca > 0 ? "melhor" : "pior";
}

function comprarOferta(oferta) {
  if (
    !player ||
    !player.shop_offer_ids.includes(oferta.id) ||
    obterMoedasEmPrata() < oferta.preco
  )
    return;

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
  player.shop_offer_ids = player.shop_offer_ids.filter(
    (id) => id !== oferta.id,
  );
  if (oferta.id === "cura_loja" || oferta.id === "pocao_mana_loja") {
    registrarMensagem(
      `Você comprou ${oferta.id === "cura_loja" ? "uma poção de cura" : "uma poção de mana"}.`,
    );
  }
  renderizarLoja();
  atualizarTela();
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
  player.bencao_ativa = false;
  player.almas_invocadas = 0;
  alvosMultishotSelecionados.clear();
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

function tipoDanoBaseClasse() {
  return player.classe === "mago" || player.classe === "necromante"
    ? "magico"
    : "fisico";
}

function calcularDanoAtaque(tipoDanoForcado = null) {
  const arma = obterArmaAtual();
  const tipoBase = tipoDanoForcado ?? tipoDanoBaseClasse();
  registrarPenalidadeArma(arma);
  const aplicarFuria = (dano) =>
    player.classe === "guerreiro" && player.furia_ativa
      ? classe_guerreiro.furia_buffs.dmg(dano)
      : dano;
  const ajustarDano = (dano) => aplicarPenalidadeArma(aplicarFuria(dano), arma);

  // Sem arma: só o dano base do personagem
  if (!arma) {
    registrarMensagem("Você atacou sem arma.");
    return [{ tipo: tipoBase, dano: ajustarDano(player.dmg) }];
  }

  // Arma mágica (cajado): gasta mana; sem mana, dano físico
  if (arma.magic_dmg !== undefined) {
    if (tipoDanoForcado === "fisico") {
      return [
        { tipo: "fisico", dano: ajustarDano(player.dmg + arma.fisico_dmg) },
      ];
    }

    if (player.mana_atual >= arma.mana_custo) {
      player.mana_atual -= arma.mana_custo;

      const penalidade = calcularPenalidadeMagica();

      registrarMensagem(
        `Você lançou um feitiço (-${arma.mana_custo} de mana).`,
      );

      if (penalidade > 0) {
        registrarMensagem(`Dano mágico reduzido em ${penalidade}%.`);
      }

      return [
        {
          tipo: "magico",
          dano: ajustarDano(
            (player.dmg + arma.magic_dmg) * (1 - penalidade / 100),
          ),
        },
      ];
    }

    registrarMensagem("Sem mana! Você atacou com o dano físico do cajado.");

    return [
      { tipo: "fisico", dano: ajustarDano(player.dmg + arma.fisico_dmg) },
    ];
  }

  return [
    {
      tipo: tipoBase,
      dano: ajustarDano(player.dmg + arma.dmg),
    },
  ];
}

function obterTempoRecarga(arma) {
  const reducao =
    player?.classe === "arqueiro" ? (player.reducao_recarregamento ?? 0) : 0;
  return Math.max(0, Math.ceil((arma?.reload_time ?? 0) - reducao));
}

// XP necessário para o próximo nível: 100 x 1,1^(nível-1)
function xpParaProximoNivel() {
  const nivel = Number.isFinite(Number(player?.level))
    ? Number(player.level)
    : 1;
  return Math.round(100 * 1.1 ** (Math.max(1, nivel) - 1));
}

function restaurarCombateSalvo(estado = player?.combat_state) {
  if (
    !player ||
    !estado ||
    !Array.isArray(estado.inimigos) ||
    estado.inimigos.length === 0
  ) {
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
    resistencia_fisica: normalizarResistencia(oponente.resistencia_fisica),
    resistencia_magica: normalizarResistencia(oponente.resistencia_magica),
    tipo_dano: obterTipoDanoInimigo(oponente),
  }));
  if (inimigos.every((oponente) => oponente.vida <= 0)) {
    inimigos = [];
    inimigosDerrotados = [];
    inimigo = null;
    batalhaAtiva = false;
    faseJogo = "rota";
    player.combat_state = null;
    finalizarBatalha();
    atualizarTela();
    mostrarRotas();
    salvarJogo();
    return true;
  }
  const alvosSalvos = Array.isArray(estado.alvosMultishot)
    ? estado.alvosMultishot
    : [];
  alvosMultishotSelecionados = new Set(
    alvosSalvos.filter(
      (id) =>
        typeof id === "string" &&
        inimigos.some((alvo) => alvo.id === id && alvo.vida > 0),
    ),
  );
  inimigosDerrotados = inimigos.filter((oponente) => oponente.vida <= 0);
  inimigo =
    inimigos.find(
      (oponente) => oponente.id === estado.alvoId && oponente.vida > 0,
    ) ??
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
  definirArteInimigo(interfaceJogo.enemyArt, inimigo);
  interfaceJogo.encounterKind.textContent = inimigos.some(
    (oponente) => oponente.boss,
  )
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
    player.vida_atual = 0;
    faseJogo = "batalha";
    mostrarGameOver();
    salvarJogo();
    return;
  }

  if (player.game_phase === "rota") {
    mostrarRotas();
  } else if (player.game_phase === "loja") {
    mostrarLoja();
  } else if (
    player.game_phase === "batalha" &&
    restaurarCombateSalvo(player.combat_state)
  ) {
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
  interfaceJogo.gameOver.hidden = true;

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
      tipo_dano: "fisico",
      vida: 55,
      dmg: 8,
      xp: 9,
      speed: 10,
      prata: 4,
      ouro: 0,
      resistencia_fisica: 0,
      resistencia_magica: -15,
    },
    zumbi: {
      nome: "Zumbi",
      tipo_dano: "fisico",
      vida: 80,
      dmg: 11,
      xp: 12,
      speed: 9,
      prata: 10,
      ouro: 1,
      resistencia_fisica: 10,
      resistencia_magica: 0,
    },
    goblin: {
      nome: "Goblin",
      tipo_dano: "fisico",
      vida: 70,
      dmg: 14,
      xp: 16,
      speed: 15,
      prata: 14,
      ouro: 2,
      resistencia_fisica: 0,
      resistencia_magica: 0,
    },
    esqueleto: {
      nome: "Esqueleto",
      tipo_dano: "fisico",
      vida: 90,
      dmg: 15,
      xp: 20,
      speed: 18,
      prata: 18,
      ouro: 3,
      resistencia_fisica: -15,
      resistencia_magica: 25,
    },
    orc: {
      nome: "Orc",
      tipo_dano: "fisico",
      vida: 135,
      dmg: 15,
      xp: 30,
      speed: 10,
      prata: 22,
      ouro: 5,
      resistencia_fisica: 20,
      resistencia_magica: 0,
    },
    mago_inimigo: {
      nome: "Mago Inimigo",
      tipo_dano: "magico",
      vida: 65,
      dmg: 20,
      xp: 24,
      speed: 12,
      prata: 20,
      ouro: 4,
      resistencia_fisica: 0,
      resistencia_magica: 25,
    },
    aranha_gigante: {
      nome: "Aranha Gigante",
      tipo_dano: "fisico",
      vida: 120,
      dmg: 17,
      xp: 28,
      speed: 14,
      prata: 25,
      ouro: 6,
      resistencia_fisica: 0,
      resistencia_magica: 0,
    },
    troll: {
      nome: "Troll",
      tipo_dano: "fisico",
      vida: 150,
      dmg: 23,
      xp: 35,
      speed: 8,
      prata: 30,
      ouro: 8,
      resistencia_fisica: 25,
      resistencia_magica: 10,
    },
  };

  function criarInimigoIndividual(tipo, chefe = null) {
    const base = chefe ?? modelos[tipo];
    const fatorElite = tipoEncontro === "elite" ? 1.5 : 1;
    const fatorCombate = 1.06 ** (nivel - 1);
    const fatorAndar = 1.2 ** (andar - 1);
    const fatorChefe = ehChefe ? 1.2 : 1;
    const fatorJogador = ehChefe ? 1 : fatorCombate;
    const fatorXp = (ehChefe ? 1 : 1.05 ** (nivel - 1)) * fatorAndar;
    const fatorEliteVida = tipoEncontro === "elite" ? 1.4 : 1;
    const fatorEliteDano = tipoEncontro === "elite" ? 1.2 : 1;
    const fatorStatusVida = fatorJogador * fatorAndar * fatorEliteVida;
    const fatorStatusDano = fatorJogador * fatorAndar * fatorEliteDano;
    return {
      tipo,
      nome: base.nome,
      tipo_dano: base.tipo_dano ?? "fisico",
      level: ehChefe ? andar : nivel + andar - 1,
      boss: ehChefe,
      elite: tipoEncontro === "elite",
      xp: Math.round(
        (Number(base.xp) || 0) * fatorXp * (tipoEncontro === "elite" ? 1.5 : 1),
      ),
      resistencia_fisica: normalizarResistencia(base.resistencia_fisica),
      resistencia_magica: normalizarResistencia(base.resistencia_magica),
      vida_max: Math.round(base.vida * fatorStatusVida * fatorChefe),
      vida: Math.round(base.vida * fatorStatusVida * fatorChefe),
      dmg: Math.round(base.dmg * fatorStatusDano * (ehChefe ? 1.08 : 1)),
      speed: Math.round(
        (base.speed +
          (ehChefe ? 0 : nivel - 1) +
          (tipoEncontro === "elite" ? 2 : 0)) *
          fatorAndar,
      ),
      prata: Math.round(base.prata * fatorElite),
      ouro: Math.round(base.ouro * fatorElite),
      id: `${tipo}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    };
  }

  if (ehChefe) {
    const listaBosses = Object.values(bosses);
    const bossesDerrotados = player.bosses_defeated ?? 0;
    const indiceChefe =
      bossesDerrotados === 0
        ? 0
        : 1 + ((bossesDerrotados - 1) % (listaBosses.length - 1));
    const chefe = listaBosses[indiceChefe];
    inimigos = [criarInimigoIndividual("boss", chefe)];
  } else {
    const quantidade =
      andar >= 3 || (andar >= 2 && Math.random() < 0.4) ? 2 : 1;
    inimigos = Array.from({ length: quantidade }, () => {
      const tiposDisponiveis =
        tipoEncontro === "elite" ? tipo_inimigo_elite : tipo_inimigo;
      const tipo =
        tiposDisponiveis[Math.floor(Math.random() * tiposDisponiveis.length)];
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
  definirArteInimigo(interfaceJogo.enemyArt, inimigo);
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
    tipo_dano: "fisico",
    vida: 250,
    dmg: 31,
    xp: 110,
    speed: 18,
    prata: 200,
    ouro: 100,
    resistencia_fisica: 25,
    resistencia_magica: 0,
  },
  dragao: {
    nome: "Dragão",
    tipo_dano: "magico",
    vida: 220,
    dmg: 18,
    xp: 90,
    speed: 20,
    prata: 100,
    ouro: 50,
    resistencia_fisica: 10,
    resistencia_magica: 20,
  },
  hidra: {
    nome: "Hidra",
    tipo_dano: "fisico",
    vida: 220,
    dmg: 27,
    xp: 100,
    speed: 15,
    prata: 150,
    ouro: 75,
    resistencia_fisica: 10,
    resistencia_magica: 15,
  },
};

// ==============================
// ATUALIZAÇÃO DA INTERFACE
// ==============================

// ==============================
// LOG DA BATALHA
// ==============================

// ==============================
// FINALIZAÇÃO DA BATALHA
// ==============================

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
  player.bencao_ativa = false;
  player.almas = 0;
  player.almas_invocadas = 0;
  player.reload_turns_remaining = 0;
  player.reload_weapon_id = null;
  player.debuffs = {};
  player.run_drop_ids = [];

  player.speed_atual = player.speed_max;

  if (usaMana()) {
    player.mana_atual = player.mana_max;
    player.pocoes_mana_atual = player.pocoes_mana_max;
    player.pocao_ticks = null;
  }
  if (player.classe === "paladino") {
    player.fe_atual = player.fe_max;
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
  interfaceClasses.gameContent.hidden = false;
  interfaceJogo.gameOver.hidden = true;

  mostrarRotas();
  salvarJogo();
}

// ==============================
// VITÓRIA
// ==============================

function concluirVitoria() {
  batalhaAtiva = false;
  player.furia_ativa = false;
  player.bencao_ativa = false;
  player.almas_invocadas = 0;
  player.reload_turns_remaining = 0;
  player.reload_weapon_id = null;
  player.debuffs = {};

  const xpTotal = inimigosDerrotados.reduce(
    (total, derrotado) => total + (Number(derrotado.xp) || 0),
    0,
  );
  const prataTotal = inimigosDerrotados.reduce(
    (total, derrotado) => total + derrotado.prata,
    0,
  );
  const ouroTotal = inimigosDerrotados.reduce(
    (total, derrotado) => total + derrotado.ouro,
    0,
  );
  player.experiencia = (Number(player.experiencia) || 0) + xpTotal;
  player.prata += prataTotal;
  player.ouro += ouroTotal;
  definirMoedasDePrata(obterMoedasEmPrata());

  for (const derrotado of inimigosDerrotados) {
    registrarMensagem(
      `${derrotado.nome} derrotado. Você ganhou ${derrotado.xp} XP.`,
    );
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
    if (derrotado.boss && derrotado.nome === "Minotauro") {
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

  if (player.classe === "paladino") {
    const feRecuperada = (player.fe_max - player.fe_atual) * 0.25;
    player.fe_atual += feRecuperada;
    if (feRecuperada > 0) {
      registrarMensagem(`Você recuperou ${Math.ceil(feRecuperada)} de fé.`);
    }
  }

  // ------------------------------
  // Cura pós-batalha
  // ------------------------------

  const cura = (player.vida_max - player.vida_atual) * 0.4;

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
    player.resistencia_fisica = normalizarResistencia(
      player.resistencia_fisica + 1,
    );
    player.resistencia_magica = normalizarResistencia(
      player.resistencia_magica + 1,
    );
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
    if (player.classe === "paladino") {
      player.fe_max += 10;
    }
  }

  if (niveisGanhos > 0) {
    player.vida_atual = player.vida_max;
    player.curas_atual = player.curas_max;
    player.speed_atual = player.speed_max;

    if (usaMana()) {
      player.mana_atual = obterManaMaxima();
      player.pocoes_mana_atual = player.pocoes_mana_max;
    }
    if (player.classe === "paladino") {
      player.fe_atual = player.fe_max;
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
  salvarJogo();

  const duracaoTransicao = 1200;
  const conteudoJogo = document.querySelector("#game-content");
  const botoesDuranteTransicao = [...conteudoJogo.querySelectorAll("button")];
  const estadosDosBotoes = botoesDuranteTransicao.map(
    (botao) => botao.disabled,
  );
  conteudoJogo.classList.add("is-finalizing-battle");
  botoesDuranteTransicao.forEach((botao) => {
    botao.disabled = true;
  });
  const arena = document.querySelector(".arena");
  arena.classList.remove("is-enemy-defeated");
  void arena.offsetWidth;
  arena.classList.add("is-enemy-defeated");
  interfaceJogo.message.textContent = "Inimigo derrotado!";

  window.setTimeout(() => {
    arena.classList.remove("is-enemy-defeated");
    conteudoJogo.classList.remove("is-finalizing-battle");
    botoesDuranteTransicao.forEach((botao, indice) => {
      botao.disabled = estadosDosBotoes[indice];
    });
    mostrarRotas();
  }, duracaoTransicao);
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

function aplicarDebuffJogador(
  id,
  nome,
  turnos,
  danoPorTurno = 0,
  velocidade = 1,
) {
  const anterior = player.debuffs[id];
  player.debuffs[id] = {
    turnos: Math.max(anterior?.turnos ?? 0, turnos),
    nome,
    danoPorTurno: Math.max(anterior?.danoPorTurno ?? 0, danoPorTurno),
    velocidade: Math.min(anterior?.velocidade ?? 1, velocidade),
  };
  debuffsAplicadosNoTurno.add(id);
  registrarMensagem(
    `${nome} aplicado por ${player.debuffs[id].turnos} turnos.`,
  );
}

function aplicarEfeitoDoInimigo(oponente) {
  if (DEBUG_DEBUFFS_ALEATORIOS) {
    // Temporary debug mode: every enemy attack applies a random effect.
    const efeitosDeTeste = [
      () => aplicarDebuffJogador("pegajoso", "Pegajoso", 2, 0, 0.75),
      () =>
        aplicarDebuffJogador("veneno", "Veneno", 3, player.vida_max * 0.025),
      () => aplicarDebuffJogador("lentidao", "LentidÃ£o", 2, 0, 0.75),
      () =>
        aplicarDebuffJogador(
          "sangramento",
          "Sangramento",
          3,
          player.vida_max * 0.02,
          0.85,
        ),
      () =>
        aplicarDebuffJogador(
          "queimando",
          "Queimando",
          3,
          player.vida_max * 0.025,
        ),
    ];
    efeitosDeTeste[Math.floor(Math.random() * efeitosDeTeste.length)]();
    atualizarTela();
    return;
  }

  const rolagem = Math.random();
  if (oponente.tipo === "slime") {
    aplicarDebuffJogador("pegajoso", "Pegajoso", 2, 0, 0.75);
  } else if (oponente.boss && oponente.nome === "Hidra" && rolagem < 0.5) {
    aplicarDebuffJogador("pegajoso", "Pegajoso", 2, 0, 0.75);
  } else if (oponente.tipo === "aranha_gigante") {
    aplicarDebuffJogador("veneno", "Veneno", 3, player.vida_max * 0.025);
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
    aplicarDebuffJogador("queimando", "Queimando", 3, player.vida_max * 0.025);
  }
}

function finalizarDerrota() {
  defendendo = false;
  player.vida_atual = 0;
  player.bencao_ativa = false;
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
    "Fim de jogo. Você perdeu o dinheiro e os itens da run, mas manteve o personagem, o nível e as poções.",
  );
  finalizarBatalha();
  mostrarGameOver();
  salvarJogo();
}

// Retorna false se o jogador morreu
function ataqueInimigo(oponente = inimigo) {
  const tipoDano = obterTipoDanoInimigo(oponente);
  let danoRecebido = oponente.dmg;
  const resistencia = obterResistenciaJogador(tipoDano);
  danoRecebido = Math.max(0, danoRecebido * (1 - resistencia / 100));
  const escudo = obterEscudoAtual();
  if (
    tipoDano === "fisico" &&
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

  const tipoFormatado = tipoDano === "magico" ? "mágico" : "físico";
  const efeitoResistencia =
    resistencia > 0
      ? ` (${resistencia}% de resistência)`
      : resistencia < 0
        ? ` (${Math.abs(resistencia)}% de vulnerabilidade)`
        : "";
  registrarMensagem(
    `${oponente.nome} causou ${Math.ceil(danoRecebido)} de dano ${tipoFormatado}${efeitoResistencia} em você.`,
  );
  if (DEBUG_DEBUFFS_ALEATORIOS || danoRecebido > 0) {
    aplicarEfeitoDoInimigo(oponente);
  }

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

function causarDanoInimigo(
  alvo,
  dano,
  origem = "",
  tipoDano = "fisico",
  ignorarResistencia = 0,
) {
  if (!alvo || alvo.vida <= 0) return 0;
  const propriedadeResistencia =
    tipoDano === "magico" ? "resistencia_magica" : "resistencia_fisica";
  const resistencia = normalizarResistencia(
    alvo[propriedadeResistencia] * (1 - ignorarResistencia),
  );
  const danoFinal = Math.max(0, dano * (1 - resistencia / 100));
  alvo.vida = Math.max(0, alvo.vida - danoFinal);
  const tipoFormatado = tipoDano === "magico" ? "mágico" : "físico";
  const efeitoResistencia =
    resistencia > 0
      ? ` (${resistencia}% de resistência)`
      : resistencia < 0
        ? ` (${Math.abs(resistencia)}% de vulnerabilidade)`
        : "";
  registrarMensagem(
    `${alvo.nome} recebeu ${Math.ceil(danoFinal)} de dano ${tipoFormatado}${efeitoResistencia}${origem}.`,
  );
  registrarDerrotaInimigo(alvo);
  return danoFinal;
}

function atacarComAlmasInvocadas(alvo) {
  for (let indice = 0; indice < (player.almas_invocadas ?? 0); indice += 1) {
    const alvoAtual =
      alvo?.vida > 0 ? alvo : inimigos.find((oponente) => oponente.vida > 0);
    if (!alvoAtual) return;
    causarDanoInimigo(
      alvoAtual,
      player.dmg * 0.5,
      " pelas almas invocadas",
      "fisico",
    );
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
      "Você ativou Fúria até o fim do combate: dano e velocidade dobrados, resistências pela metade.",
    );
    return false;
  }

  if (acao === "mil_flechas") {
    player.skill_cooldown_salas = 6;
    const danosAtaque = calcularDanoAtaque("fisico");
    for (const alvo of inimigos) {
      for (
        let acerto = 1;
        acerto <= classe_arqueiro.mil_flechas.critico_hits && alvo.vida > 0;
        acerto += 1
      ) {
        registrarMensagem(`⚡ Flecha crítica ${acerto}/4!`);
        for (const componente of danosAtaque) {
          causarDanoInimigo(
            alvo,
            componente.dano * player.critico_dano,
            " (Mil Flechas)",
            "fisico",
          );
        }
      }
    }
    return inimigos.every((alvo) => alvo.vida <= 0);
  }

  if (acao === "explosao_arcana") {
    player.mana_atual -= classe_mago.explosao_arcana.mana_custo;
    const arma = obterArmaAtual();
    registrarPenalidadeArma(arma);
    const penalidade = calcularPenalidadeMagica();
    const danoBase =
      (player.dmg + (arma?.magic_dmg ?? 0)) * (1 - penalidade / 100);
    const danoCritico = aplicarPenalidadeArma(
      danoBase *
        player.critico_dano *
        classe_mago.explosao_arcana.multiplicador_critico,
      arma,
    );
    registrarMensagem("Você lançou Explosão Arcana (-60 de mana)!");
    for (const alvo of inimigos) {
      if (alvo.vida > 0) {
        causarDanoInimigo(alvo, danoCritico, " (crítico arcano)", "magico");
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

  if (acao === "golpe_sagrado") {
    player.fe_atual -= classe_paladino.golpe_sagrado.fe_custo;
    const dano = player.dmg + classe_paladino.golpe_sagrado.magic_dmg;
    causarDanoInimigo(
      inimigo,
      dano,
      " (Golpe Sagrado)",
      "magico",
      classe_paladino.golpe_sagrado.ignora_defesa,
    );
    return inimigos.every((alvo) => alvo.vida <= 0);
  }

  if (acao === "bencao") {
    player.fe_atual -= classe_paladino.bencao.fe_custo;
    player.bencao_ativa = true;
    registrarMensagem(
      `Você ativou a Bênção: seus ataques normais recuperam ${Math.round(classe_paladino.bencao.roubo_vida * 100)}% do dano causado até o fim do combate.`,
    );
    return false;
  }

  if (acao === "atacar") {
    const danosAtaque = calcularDanoAtaque();
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
    const alvosSelecionados = [...alvosMultishotSelecionados]
      .map((id) => inimigos.find((alvo) => alvo.id === id))
      .filter((alvo) => alvo?.vida > 0);
    const alvosDoAtaque =
      alvosSelecionados.length > 0 ? alvosSelecionados : [inimigo];
    let danoTotalCausado = 0;
    const danoBasePersonagem = player.dmg * (1 - obterPenalidadeArma(arma));
    for (let tiro = 0; tiro < tiros; tiro += 1) {
      const vivos = alvosDoAtaque.filter((alvo) => alvo.vida > 0);
      if (vivos.length === 0) break;
      const alvo = vivos[tiro % vivos.length];
      for (const componente of danosAtaque) {
        danoTotalCausado += causarDanoInimigo(
          alvo,
          calcularDanoCritico(
            tiro === 0
              ? componente.dano
              : Math.max(0, componente.dano - danoBasePersonagem),
          ),
        );
      }
    }
    alvosMultishotSelecionados.clear();

    if (arma?.area_dmg > 0) {
      for (const alvo of inimigos) {
        danoTotalCausado += causarDanoInimigo(
          alvo,
          aplicarPenalidadeArma(arma.area_dmg, arma),
          " (dano em área)",
          arma.area_dmg_tipo ?? "fisico",
        );
      }
    }
    if (player.bencao_ativa && danoTotalCausado > 0) {
      const cura = Math.min(
        player.vida_max - player.vida_atual,
        danoTotalCausado * classe_paladino.bencao.roubo_vida,
      );
      player.vida_atual += cura;
      if (cura > 0) {
        registrarMensagem(`A Bênção recuperou ${Math.ceil(cura)} de vida.`);
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
    const limiteFuria = 30 + 0.4 * (player.level - 1);
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
    if (inimigo.vida / inimigo.vida_max >= 0.25) {
      registrarMensagem(
        "Só é possível roubar a alma quando o inimigo está com menos de 25% de vida.",
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

  if (acao === "golpe_sagrado") {
    if (player.classe !== "paladino") return;
    if (player.fe_atual < classe_paladino.golpe_sagrado.fe_custo) {
      registrarMensagem("Você precisa de 40 de fé para Golpe Sagrado.");
      return;
    }
  }

  if (acao === "bencao") {
    if (player.classe !== "paladino") return;
    if (player.bencao_ativa) {
      registrarMensagem("A Bênção já está ativa neste combate.");
      return;
    }
    if (player.fe_atual < classe_paladino.bencao.fe_custo) {
      registrarMensagem("Você precisa de 50 de fé para ativar a Bênção.");
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
    ...inimigos
      .filter((oponente) => oponente.vida > 0)
      .map((oponente) => oponente.speed),
  );
  const inimigoPrimeiro =
    acao !== "roubar_alma" && velocidadeInimigo > obterVelocidadeEfetiva();

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

  if (
    !["atacar", "mil_flechas"].includes(acao) &&
    player.reload_turns_remaining > 0
  ) {
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
    removerItemSeguro(chaveSave(slotSaveAtual));
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
interfaceJogo.paladinSkill.addEventListener("click", () =>
  jogarTurno("golpe_sagrado"),
);
interfaceJogo.paladinBlessing.addEventListener("click", () =>
  jogarTurno("bencao"),
);

// ==============================
// PRÓXIMA BATALHA
// ==============================

function fugirDaBatalha() {
  if (!batalhaAtiva || !player || !inimigo || player.vida_atual <= 0) return;
  batalhaAtiva = false;
  defendendo = false;
  player.furia_ativa = false;
  player.bencao_ativa = false;
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

interfaceJogo.gameOverRestart.addEventListener("click", () => {
  novaRun();
});

interfaceJogo.resetSave.addEventListener("click", () => {
  fecharMenu();
  resetarSave();
});

// ==============================
// SISTEMA DE SAVE
// ==============================

function lerItemSeguro(chave) {
  try {
    return localStorage.getItem(chave);
  } catch (erro) {
    console.error(`Não foi possível ler "${chave}" do armazenamento local:`, erro);
    return null;
  }
}

function escreverItemSeguro(chave, valor) {
  try {
    localStorage.setItem(chave, valor);
    return true;
  } catch (erro) {
    console.error(`Não foi possível salvar "${chave}" no armazenamento local:`, erro);
    if (interfaceJogo?.message) {
      interfaceJogo.message.textContent =
        "Não foi possível salvar o progresso. Verifique o armazenamento do navegador.";
    }
    return false;
  }
}

function removerItemSeguro(chave) {
  try {
    localStorage.removeItem(chave);
    return true;
  } catch (erro) {
    console.error(`Não foi possível remover "${chave}" do armazenamento local:`, erro);
    return false;
  }
}

function salvarJogo() {
  if (!player || slotSaveAtual === null) return;

  player.game_phase = faseJogo;
  if (faseJogo === "batalha" && inimigos.length > 0) {
    player.combat_state = {
      tipo: tipoEncontroAtual,
      ativa: batalhaAtiva,
      alvoId: inimigo?.id ?? null,
      alvosMultishot: [...alvosMultishotSelecionados],
      inimigos: inimigos.map((oponente) => ({ ...oponente })),
    };
  } else {
    player.combat_state = null;
  }

  let conteudo;
  try {
    conteudo = JSON.stringify(player);
  } catch (erro) {
    console.error("Não foi possível serializar o save:", erro);
    if (interfaceJogo?.message) {
      interfaceJogo.message.textContent =
        "Não foi possível salvar o progresso devido a dados inválidos.";
    }
    return;
  }
  escreverItemSeguro(chaveSave(slotSaveAtual), conteudo);
}

interfaceClasses.saveSlots.addEventListener("click", (evento) => {
  const botao = evento.target.closest("[data-save-slot]");
  if (!botao) return;
  const slot = Number(botao.dataset.saveSlot);
  if (!Number.isInteger(slot) || slot < 1 || slot > QUANTIDADE_SLOTS_SAVE) {
    return;
  }
  if (lerItemSeguro(chaveSave(slot)) === null) {
    iniciarNovoSave(slot);
  } else {
    carregarJogo(slot);
  }
});

function migrarSaveAntigo() {
  const saveAntigo = lerItemSeguro("rpg_save");
  if (saveAntigo === null) return;
  if (lerItemSeguro(chaveSave(1)) === null) {
    escreverItemSeguro(chaveSave(1), saveAntigo);
  }
  removerItemSeguro("rpg_save");
}

migrarSaveAntigo();
mostrarMenuSaves();
