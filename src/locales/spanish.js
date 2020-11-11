module.exports = {
  GLOBAL: {
    EVERYONE: "Everyone",
    NOT_SPECIFIED: "No especificado",
    PROVIDE_ARGS: "Por favor proporciona argumentos",
    ERROR: "Ha ocurrido un error",
    NAME: "Nombre",
    NOT_AN_OPTION: "{option} No es una opcion valida",
    SUCCESS: "Exito",
    REASON: "Razón",
    URL: "URL",
    NONE: "None",
    YES: "Si",
    NO: "No",
  },
  GUILD: {
    NOT_FOUND: "Gremio no encontrado",
    LEFT: "Ha abandonado el gremio **${guild_name}**",
    LEVEL_UP_MESSAGES: "Mensaje de subida de nivel",
    ANNOUNCE_CHANNEL: "Canal de anuncios",
    SUGGEST_CHANNEL: "canal de sugerencias",
    WELCOME_CHANNEL: "Canal de bienvenidas",
    LEAVE_CHANNEL: "Canal de salidas",
    PREFIX: "Prefijo",
    IS_VERIFIED: "Si, este servidor esta verificado",
    IS_PARTNERED: "Si, este servidor esta asociado",
    NOT_VERIFIED: "Nope, este servidor no esta verificado",
    NOT_PARTNERED: "Nope, este servidor no esta asociado",
    OWNER: "Dueño del gremio",
    CHANNEL_C: "Numero de canales",
    EMOJI_C: "Numero de emojis",
    ROLES_C: "Numero de roles",
    MEMBER_C: "Numero de miembros",
    REGION: "Region",
    VERIFICATION: "Nivel de verificacíon",
    MFA: "Nivel MFA",
    BOOSTS: "Mejoras",
    BOOST_LVL: "Nivel de mejora",
    VERIFIED: "Verificado",
    PARTNERED: "Asociado",
  },
  MEMBER: {
    TAG: "Tag",
    BOT: "Bot",
    ROLES: "Roles",
    BADGES: "Insignias",
    ONLINE: "Conectado",
    OFFLINE: "Desconectado",
    MEMBERS: "Miembros",
    STATUS: "Estado",
    CREATED_ON: "Creada en",
    JOINED_AT: "Entró en",
    ID: "Id",
    USERNAME: "Usuario",
    NICKNAME: "Apodo",
    PROVIDE_MEMBER: "Por favor proporciona un miembro",
    NOT_FOUND: "Miembro no encontrado",
    CANNOT_BE_BANNED: "Ese miembro no puede ser baneado",
    DM_BAN_MESSAGE:
      "Has sido **baneado** de **{guild_name}**, Razón: **{ban_reason}**",
    GUILD_BAN_MESSAGE:
      "{member} Ha sido baneado de este servidor. Razón: **{ban_reason}**. Tambien le he enviado un DM al usuario para hacerle saber.",
  },
  ROLES: {
    MY_ROLE_NOT_HIGH_ENOUGH: "Mi rol no es mas alto que el rol **{role}**!",
    MY_ROLE_MUST_BE_HIGHER:
      "Mi rol debe ser mas alto que el rol mas alto del usuario **{member}**!",
    YOUR_ROLE_MUST_BE_HIGHER: "Tu rol debe ser mas alto que el rol **{role}**!",
    PROVIDE_ROLE: "Por favor proporciona un rol",
    ALREADY_HAS_ROLE: "El miembro ya tiene ese rol",
    ADDED_ROLE_TO: "Se le ha añadido el rol **{role}** a {member}",
  },
  IMAGE: {
    CLICK_TO_VIEW: "[Click aqui si la imagen falla en cargar.]",
    CLYDE: "Clyde",
    CUDDLES: "abrazos con",
    FEEDED: "Alimentado",
    HUGGED: "Abrazado",
    PATTED: "Palmeado",
    KISSED: "Besadi",
    POKED: "Empujado",
    SLAPPED: "Abofeteado",
  },
  ANIMAL: {
    CAT_FACT: "Hecho de gato",
    DOG_FACT: "Hecho de perro",
    SNAIL_FACT: "Hecho de caracol",
    COW: "Vaca",
  },
  BOT_OWNER: {
    SHUTDOWN: "El bot se esta acabando",
    EVAL: "Comando de Eval",
    EVAL_TYPE: "Tipo",
    EVAL_INPUT: "Entrada",
    EVAL_OUTPUT: "Salida",
    UPDATE_NICKNAME: "Actualizado por el dueño del bot",
    UPDATED_NICKNAME: "Se ha actualizado el apodo a **{nickname}**",
    PROVIDE_TYPE: "Por favor proporciona un tipo",
    CANNOT_BL_OWNER: "No puedes poner en lista negra al dueño",
    NOT_BLD: "Usuario no esta en lista negra",
    ALREADY_BLD: "{member} ya esta en lista negra",
    NOT_OPTION: "**{type}** no es una opcion",
    BLACKLISTED: "En lista negra",
    UNBLACKLISTED: "No incluido en la lista negra",
    BLACKLISTED_SUCCESS: "{member} fue {type}",
    BLD_STATUS: "Estado de la lista negra",
  },
  LEVELS: {
    XP: "XP",
    LEVEL: "Nivel",
    LEADERBOARD: "Tabla de clasificación",
    MEMBER_IS_LEVEL: "{member} es nivel **{level}** con **{user_xp}XP**",
    RESET_CONF: "¿Reiniciar toda la experiencia? y/n",
    RESET_SUCCESS: "Se ha reiniciado la Xp de todos",
    RESET_CANCEL: "Reinicio de xp cancelado",
    PROVIDE_AMOUNT: "Por favor proporciona una cantidad",
    PROVIDE_VALID_NR: "Por favor proporciona un numero valido",
    GIVE_XP_SUCCESS: "Se le ha dado a **{member}** **{amount}** de XP",
  },
  MUSIC: {
    MUST_BE_IN_VC: "Necesitas estar en un canal de voz",
    NO_QUEUE: "No hay canciones sonando ahora",
    QUEUE_CLEARED: "La cola se ha vaciado",
    QUEUE: "Cola de canciones",
    BETWEEN_0_100: "El volumen debe estar entre 0 y 100",
    VOL_SUCCESS: "Se ha establecido el volumen a {vol}%",
    PLAYING: "Reproduciendo",
    PAUSED: "Pausado",
    DURATION: "Duración",
    UPLOADED_BY: "Subido por",
    UPLOADED_AT: "Subido a",
    VIEWS: "Vistas",
    LIKES: "Me gustas",
    DISLIKES: "No me gustas",
    SECONDS: "Segundos",
    VOLUME: "Volumen",
    PROVIDE_SEARCH: "Proporcione una consulta de búsqueda",
    ADDED_TO_QUEUE: "Cancion añadida a la cola | {songs} En cola",
    NOW_PLAYING: "Sonando ahora:",
    REQUESTED_BY: "Pedida por:",
    NO_PERMS: "No tengo los permisos correctos para ese canal de voz!",
    NOT_SAME_VC: "Debes estar en el mismo canal de voz que el bot",
    ALREADY_IN_VC: "Ya estoy en ese canal de voz",
  },
  ECONOMY: {
    MONEY: "Dinero",
    BANK: "Banco",
    BALANCE: "Balance",
    DAILY_ERROR: "Ya has recolectado tu premio diario",
    WEEKLY_ERROR: "Ya has recolectado tu premio semanal",
    DAILY_SUCCESS: "Has recolectado tu premio diario de **{amount}** monedas",
    WEEKLY_SUCCESS: "Has recolectado tu premio semanal de **{amount}** monedas",
    STORE_EMPTY:
      "La tienda de este servidor esta vacia! hablale a un moderador que agregue cosas usando `{prefix}store add <item>`",
    PROVIDE_ITEM_TO_BUY: "Proporciona el item para comprar",
    NOT_ENOUGH_MONEY: "No tienes suficiente dinero",
    BUY_SUCCESS: "Has comprado **{item}** pagado **{price}**",
    NOT_FOUND_STORE:
      "**{query}** No fue encontrado en la tienda, Por favor usa `{prefix}store` Para ver todos los items en la tienda",
    ALREADY_OWN_ITEM: "You already own this item",
    PROVIDE_VALID_AMOUNT: "Por favor proporciona una cantidad numerica valida",
    DEPOSITED_ALL: "Has depositado todo el dinero!",
    DEPOSITED_AMOUNT: "Has depositado **{amount} Monedas**",
    WITHDRAW_ALL: "Has retirado todo el dinero!",
    WITHDRAW_AMOUNT: "Has retirado **{amount} Monedas**",
    PROFILE: "Perfil",
    INV_EMPTY: "El inventario del usuario esta vacio",
    INVENTORY: "Inventario",
    INV_ITEMS: "Inventario de items",
    VIEW_INVENTORY:
      "Usa `{prefix}inventory <usuario>` Para su inventario de items.",
    MONEY_LEADERBOARD: "Tabla de clasificación de dinero",
    TOTAL_BALANCE: "Balance total",
    BOTH_COUNTED: "Dinero de banco y bolsillo contados",
    DICE_LANDED: "Ha caido un: {roll}",
    DICE_WON: "Felicidades! has ganado un premio de **{price} Monedas**",
    DICE_LOST: "Necesitas que caiga un **6** para obtener un premio de **{price} Monedas**",
    RECENTLY_WORKED: "Ya has trabajado recientemente, {time} restante",
    WORKED: "{member} trabajó de **{job_name}** y obtuvo **{amount}**!",
    CANNOT_PAY_SELF: "No te puedes pagar a ti mismo",
    PAY_SUCCESS: "Has dado a **{member}** **{amount} Monedas**",
    CANNOT_ROB_SELF: "No te puedes robar a ti mismo!",
    BETWEEN_1_1000: "La cantidad debe estar entre 1 y 1000",
    MEMBER_NO_MONEY:
      "El usuario no tiene ese dinero, por lo tanto no lo puedes robar.",
    ROB_SUCCESS: "Has robado una cantidad de **{amount} Monedas** a **{member}**",
    STORE: "Tienda",
    MANAGE_STORE_PERMS:
      "No tienes los permisos correctos para manejar la tienda! (Administrar servidor)",
    PROVIDE_VALID_ITEM: "Por favor proporciona un item para Añadir/remover!",
    PRICE: "Precio",
    ALREADY_EXISTS: "**{item}** ya existe en la tienda!",
    PROVIDE_PRICE: "Por favor proporciona un precio para el item!",
    MUST_BE_NUMBER: "El precio debe ser un numero!",
    ADDED_TO_STORE: "{item} fue añadido en el a la tienda!",
    NOT_IN_STORE: "**{item}** no existe en la tienda!",
    REMOVED_FROM_STORE: "{item} fue removido de la tienda!",
  },
  GAMES: {
    BETS_ON: "{member_1} Apostó a {member_2}",
    LOST_BET: "{member_1} Apostó a {member_2}!\n {member_1} No gano la apuesta",
    WON_BET: "{member_1} Apostó a {member_2} y {member_1} gano la apuesta!",
    CALC: "Calculadora",
    INVALID_CALC: "Calculación invalida",
    COMPLIMENT: "Cumplido",
    LANDED_TAILS: "Ha caido cara",
    LANDED_HEADS: "Ha caido sello",
    HAPPINESS: "Felicidas",
    IQ_TEST: "Test de IQ",
    IQ_IS: "Tu IQ es de: {iq}",
    RPS: "Piedra Papel Tijeras",
    ROCK: "Piedra",
    PAPER: "Papel",
    SCISSORS: "Tijeras",
    WYR: "¿Que prefieres?",
    ANSWER: "Respuesta",
    QUESTION: "Pregunta",
  },
  UTIL: {
    AVATAR: "Avatar",
    NOT_AFK: "Ya no estas AFK",
    AFK: "Ahora esta ADK",
    CLICK_TO_DOWNLOAD: "[Click Aqui para descargar]",
    BMI_WEIGHT: "Peso",
    BMI_HEIGHT: "Altura",
    BMI: "BMI",
    BMI_CM: "Por favor proporciona la altura en centimetros",
    BMI_KG: "Por facor proporciona el peso en kilogramos",
    SUPPORT_SERVER: "Apoya el servidor",
    BUG_REPORT: "{member} ha reportado un bug",
    BUG_REPORTED: "Bug reportado ha sido enviado!",
    CHANNEL_TOPIC: "Tema del canal",
    TEXT_CHANNEL: "Canal de texto",
    VOICE_CHANNEL: "Canal de voz",
    TEXT_CHANNELS: "Canales de texto" /* plural! */,
    VOICE_CHANNELS: "Canales de voz" /* plural! */,
    NO_DEF_FOUND: "Definición no encontrada para {word}",
    DEF_FOR_WORD: "Definición de {word}",
    CATEGORY: "Categoria",
    DEFINITION: "Definición",
    DEPENDENCIES: "Dependencias",
    ANIMATED: "Animado",
    NON_ANIMATED: "No animado",
    NEW_FEEDBACK: "Nuevos comentarios",
    FEEDBACK_SEND: "Se ha enviado el comentario!",
    GH_NOT_FOUND: "Cuenta de GitHub no encontrada",
    GH_FOLLOWING: "Siguiendo",
    GH_FOLLOWERS: "Seguidores",
    GH_WEBSITE: "Sitio web",
    GH_LOCATION: "Ubicacion",
    GH_BIO: "Biografia",
    GH_PROVIDE_USERNAME: "Proporciona un usuario!",
    SEARCHING: "Buscando",
    PROVIDE_EXT: "Por favor proporciona una extencion, e.j.: `ts`, `js`, `html`, ...",
    PROVIDE_CODE: "Por favor proporciona codigo",
    NO_IMG_FOUND: "Imagen no encontrada",
    PROVIDE_M_S: "Por favor proporciona el nombre de la pelicula o serie",
    DB_RATINGS: "Calificaciones",
    DB_COUNTRY: "Pais",
    DB_GENRES: "Genero",
    DB_AWARDS: "Premios",
    DB_LANGS: "Lenguajes",
    DB_RELEASED: "Liberada",
    DB_NOT_FOUND: "No fue encontrado nada con {search}",
    TOTAL_MB: "Total",
    HUMANS: "Humanos",
    BOTS: "Bots",
    PLAYERS: "Jugadores",
    VERSION: "Version",
    PROTOCOL: "Protocolo",
    DESCRIPTION: "Descripción",
    MC_NOT_FOUND: "Servidor no fue encontrado",
    MC_PROVIDE_IP: "Proporciona una IP",
    NPM_SEARCH: "Busqueda de NPM",
    NPM_TOP_5: "Top 5 de resultados para **{query}**",
    AUTHOR: "Autor",
    VIEW_ON_NPM: "ver en npm",
    MAX_PLAYERS: "Maximo de jugadores",
    PS_NOT_FOUND: "Aplicacion no encontrada",
    DEVELOPER: "Desarrollador",
    SCORE: "Puntaje",
    CREATED_BY: "Creado por {member}",
    MENTIONABLE: "Mencionable",
    ROLE_NOT_FOUND: "Role no encontrado",
    ROLES: "Roles",
    NO_GUILD_ICON: "Este gremio no tiene icono",
    PROVIDE_EMOJI: "Por favor proporciona un emoji",
    ENLARGED_EMOJI: "Version ampliada de {emoji}",
    INVALID_EMOJI: "Emoji invalido!",
    PROVIDE_SB: "Por favor proporciona un subreddit",
    PROVIDE_SKIN: "Por favor escribe el nombre de la skin",
    SKIN_NOT_FOUND: "Jugador `{search}` no fue encontrado!",
    SKIN_NAME: "Skin del jugador {name}",
    DOWNLOAD_SKIN: "[Descargar skin]",
    G_TRANSLATE: "Traducción de Google",
    NEW_SUGGESTION: "Nueva sugerencia",
    NO_SUGG_CHANNEL:
      "Tu servidor no tiene un canal de sugerencias!\n Usa `set suggest-channel <Mencion del canal>` Para establecer un canal por defecto.",
    UPTIME: "{member} ha estado activo por {time}",
    WEATHER: "Clima",
    PROVIDE_COUNTRY: "Por favor proporciona uan ciudad/pais",
    C_NOT_FOUND: "Ciudad: **{query}** no fue encontrada!",
    MAIN: "Principal",
    CURRENT: "Actual",
    CURRENT_TEMP: "Temperatura actual",
    FEELS_LIKE: "Se siente como",
    WIND_SPEED: "Velocidad del viento",
    WIND_DEGREES: "Direccion del viento",
    COUNTRY: "Pais",
    NO_W_FOUND: "No resultados fueron encontrados",
    TOTAL_EPISODES: "Episodios totales",
    ANIME_NOT_FOUND: "El anime no fue encontrado",
    START_DATE: "Fecha de inico",
    END_DATE: "Fecha de finalización",
    POPULARITY_RANK: "Rango de popularidad",
    DOC_NOT_FOUND: "No fue encontrado en los documentos"
  },
  BOT: {
    GUILDS: "Gremios",
    CHANNELS: "Canales",
    USERS: "Usuarios",
    COMMAND_COUNT: "Numero de comandos",
    VC_CONNS: "Conecciones de voz",
    INFO_2: "Información del bot",
    INFO: "Info del bot",
    SYSTEM_INFO: "Info del sistema",
    RAM_USAGE: "Uso de RAM",
    UPTIME: "Tiempo activo",
    DJS_V: "Version de Discord.js",
    NODE_V: "Version de NodeJS",
    REPO: "Repositorio",
  },
  CONFIG: {
    OPTION_CMD_WORK: "{option} necesita ser proporcionada, para que el comando funcione.",
  },
  HELP: {
    CAT_NOT_EXIST: "Esa categoria no fue encontrada",
    CMD_NOT_FOUND: "Comando o alias no encontrado",
    COMMANDS: "Comandos",
    COOLDOWN: "Refrescamiento",
    ALIASES: "Alias",
    USAGE: "Uso",
    COMMAND: "Comando",
    OPTIONS: "Opciones",
    ADMIN: "Comandos de admins",
    ANIMAL: "Comandos de animales",
    BO_CMDS: "Comandos del dueño del bot",
    NSFW: "Comandos NSFW",
    HENTAI: "Comandos Hentai",
    GAME: "Comandos de juegos",
    IMAGE: "Comandos de imagenes",
    MUSIC: "Comandos de musica",
    UTIL: "Comandos de utilidad",
    ECONOMY: "Comandos de economia",
    LEVEL: "Comandos de niveles",
    EXEMPT: "Comandos exentos (comandos que no pueden ser deshabilitados)",
    GUILD_PREFIX: "Prefijo del servidor",
    CMD_DESC:
      "usa `{prefix}help <nombre del comando | alias>` para ver mas informacion del comando\n Mas informacion puede ser encontrada usando el comando `botinfo`",
    OWNER_ONLY: "Solo el dueño puede ver esto!",
    NSFW_ONLY: "Para ver los comando NSFW debes estar en un canal NSFW!",
  },
  POKEMON: {
    SPECIES: "Especie",
    ABILITIES: "Habilidades",
    HEIGHT: "Altura",
    WEIGHT: "Peso",
    EXPERIENCE: "Experiencia",
    GENDER: "Genero",
    EGG_GROUPS: "Grupo de huevo",
    FAMILY: "Familia",
    EVO_STAGE: "Etapas de evolución",
    EVO_LINE: "Linea de evolucion",
    STATS: "Estadisticas",
    HP: "HP",
    ATTACK: "Ataque",
    DEFENSE: "Defensa",
    SP_ATK: "SP ATK",
    SP_DEF: "SP DEF",
    SPEED: "Veñocidad",
    TOTAL: "Total",
    PROVIDE_NAME: "Por favor proporciona el nombre de pokemon!",
    NOT_FOUND:
      "Ningun pokemon fue encontrado con {query}. Por favor usa el deletreo correcto e intenta de nuevo.",
  },
};
