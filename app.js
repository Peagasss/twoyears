/**
 * =========================================================================
 * NOSSA HISTÓRIA - 2 ANOS DE AMOR (16 A 21 DE OUTUBRO)
 * Arquivo Principal de Lógica JavaScript (Editorial, Afetivo e Interativo)
 * =========================================================================
 */

// =========================================================================
// 1. CONFIGURAÇÕES PRINCIPAIS & MODO DE TESTE
// =========================================================================

/**
 * MODO DE TESTE (DEBUG_MODE):
 * - true  : Libera imediatamente todas as telas, contadores e os 11 cards da timeline
 *           para você testar e visualizar o flip das Polaroids, o envelope e o download da imagem.
 * - false : Modo real de produção com as travas de horário ativadas.
 */
const DEBUG_MODE = false;

/**
 * CONFIGURAÇÃO GERAL DE DATAS:
 */
const CONFIG = {
  // Ano de celebração dos 2 anos
  YEAR: 2026,

  // Data e hora de liberação inicial do site (16 de Outubro às 00:00)
  INITIAL_UNLOCK_DATE: "2026-10-16T00:00:00-03:00",

  // Data e hora oficial do Aniversário de 2 Anos (21 de Outubro às 00:00)
  ANNIVERSARY_DATE: "2026-10-21T00:00:00-03:00",

  // Data de início do namoro (21 de Outubro de 2024 às 00:00)
  RELATIONSHIP_START_DATE: "2024-10-21T00:00:00-03:00",
};

/**
 * CARTA DE AMOR COMPLETA (ENVELOPE DO DIA 21)
 * Edite livremente esta carta para expressar seus sentimentos mais profundos.
 */
const LOVE_LETTER_TEXT = `
Meu amor,

Parece que foi ontem que os nossos caminhos se cruzaram e todo o meu mundo ganhou um novo tom de cor, paz e propósito. Ao longo destes 730 dias ao seu lado, entendi com a mais pura certeza que o amor verdadeiro não é apenas um sentimento passageiro, mas a doce decisão diária de cuidar, acolher, admirar e caminhar de mãos dadas em qualquer estação.

Com você, os domingos preguiçosos têm gosto de felicidade, os risos frouxos têm melodia de lar e cada pequeno plano de futuro se transforma na minha maior certeza. Você me ensinou a beleza dos pequenos detalhes, a leveza do afeto sincero e a força inabalável da nossa cumplicidade.

Obrigado por ser minha melhor amiga, minha maior incentivadora, meu refúgio nos dias cansativos e o amor mais lindo e generoso que a vida poderia me presentear. Obrigado por cada abraço apertado que curou qualquer tempestade e por cada sorriso que me lembra diariamente da sorte infinita que tenho.

Hoje celebramos dois anos da melhor decisão que já tomei na vida. E se eu tivesse que recomeçar agora, escolheria você mais um milhão de vezes, sem hesitar nem por um segundo.

Que venha o nosso Ano 3, e todos os infinitos capítulos que ainda vamos escrever lado a lado.

Eu te amo com todo o meu coração, hoje, amanhã e para todo o sempre.
`;

/**
 * MENSAGENS AFETIVAS SINCRONIZADAS COM A TRILHA SONORA ("I Was Made For Lovin' You" - KISS)
 * Frases carinhosas exibidas de forma sutil no container flutuante (#music-toast).
 * Ajuste facilmente os timestamps (em segundos) conforme a sua versão do áudio.
 */
const MUSIC_SYNC_MESSAGES = [
  { start: 6, end: 14, text: "Aumente o som... Cada nota dessa música me lembra você." },
  { start: 25, end: 34, text: "Desde o primeiro dia, eu sabia que fomos feitos um para o outro." },
  { start: 58, end: 68, text: "'I was made for lovin' you, baby' — e eu escolheria você todos os dias de novo." },
  { start: 85, end: 96, text: "Dois anos inteiros de cumplicidade, risos e o melhor amor do mundo." },
  { start: 125, end: 137, text: "Nosso amor é aliança firme, sustentada pela graça de Deus." },
  { start: 180, end: 195, text: "Que venham mais 2, 20 e 200 anos ao seu lado!" }
];

// =========================================================================
// 2. TIMELINE_DATA: TOP 5 MEMÓRIAS INESQUECÍVEIS (16 A 20 DE OUTUBRO)
// =========================================================================
const TIMELINE_DATA = [
  {
    dayNumber: 1,
    dayLabel: "16 de Outubro",
    date: "2026-10-16T00:00:00-03:00",
    title: "O Doce Enleio do Nosso Início",
    quote: "A timidez nas palavras, o rubor no rosto e a certeza silenciosa de que aquele era o início de algo eterno.",
    photoUrl: "assets/Foto1.jpeg",
    location: "Na sua casa • Onde o mundo pareceu diminuir o ritmo",
    behindTheScenes: "Eu estava muito nervoso nesse dia pois não sabia o que poderia ser daquele momento para frente, não sabia o que esperar e nem o que fazer... Só sei que amei cada momento."
  },
  {
    dayNumber: 2,
    dayLabel: "17 de Outubro",
    date: "2026-10-17T00:00:00-03:00",
    title: "O Nosso Sim: O Pedido de Namoro",
    quote: "A melhor e mais bonita decisão da minha vida: escolher você, todos os dias, para sempre.",
    photoUrl: "assets/Foto2.jpeg",
    location: "O instante exato em que viramos Nós",
    behindTheScenes: "Mesmo ensaiando e imaginando mil vezes aquele momento, na hora me deu nervoso e ansiedade por causa de tanta emoção, mas a certeza daquele momento era absoluta e eterna. Ouvir seu \"Sim\" e o brilho nos seus olhos foi a maior benção que eu pude receber em minha vida."
  },
  {
    dayNumber: 3,
    dayLabel: "18 de Outubro",
    date: "2026-10-18T00:00:00-03:00",
    title: "Virada Inesquecível: Eu Te Amo 3000",
    quote: "Flores eternas em cetim e um amor que nem todo o multiverso conseguiria descrever.",
    photoUrl: "assets/Foto3.jpeg",
    location: "Virada de Ano • 2024 para 2025",
    behindTheScenes: "Eu cuidei de preparar cada detalhe daquela surpresa, desde o buquê até o livrinho artesanal, somente para ver o seu sorriso emocionado mais uma vez."
  },
  {
    dayNumber: 4,
    dayLabel: "19 de Outubro",
    date: "2026-10-19T00:00:00-03:00",
    title: "Livres Para Amar Diante do Mundo",
    quote: "Sem medos, sem segredos: apenas a pureza e a honra de segurar a sua mão à luz do dia.",
    photoUrl: "assets/Foto4.jpeg",
    location: "A paz de quem ama à vista de todos",
    behindTheScenes: "E depois de tanta espera e expectativa, finalmente o momento de abrirmos tudo para a Tia Su e seus familiares... E aquela sensação de tirar um peso do peito e poder olhar nos olhos de quem amamos com verdade, transparência e orgulho foi libertadora."
  },
  {
    dayNumber: 5,
    dayLabel: "20 de Outubro",
    date: "2026-10-20T00:00:00-03:00",
    title: "A Paz do Primeiro Denguinho",
    quote: "Adormecer ao som da sua respiração tranquila e acordar sabendo que o meu lugar preferido no mundo é o seu abraço.",
    photoUrl: "assets/Foto5.jpeg",
    location: "O nosso refúgio mais acolhedor",
    behindTheScenes: "Aquela noite em que o cansaço virou carinho manso, ficamos abraçados bem pertinho, envoltos de denguinho no silêncio do quarto até o sono chegar de vez. Ali só houve a paz de dividir o cobertor e o sossego de quem encontrou o que buscava."
  }
];

// =========================================================================
// 3. ESTADO DA APLICAÇÃO E ELEMENTOS DOM
// =========================================================================

let state = {
  isInitiallyUnlocked: false,
  debugOverrideUnlocked: DEBUG_MODE,
  journeyViewMode: 'accumulated',
  isMusicPlaying: false,
};

const dom = {
  lockScreen: document.getElementById('lock-screen'),
  mainContent: document.getElementById('main-content'),
  lockDays: document.getElementById('lock-days'),
  lockHours: document.getElementById('lock-hours'),
  lockMinutes: document.getElementById('lock-minutes'),
  lockSeconds: document.getElementById('lock-seconds'),
  lockTargetDisplay: document.getElementById('lock-target-display'),

  // Countdown Hero
  countdownDays: document.getElementById('countdown-days'),
  countdownHours: document.getElementById('countdown-hours'),
  countdownMinutes: document.getElementById('countdown-minutes'),
  countdownSeconds: document.getElementById('countdown-seconds'),
  countdownStatus: document.getElementById('countdown-status'),

  // Jornada Hero
  journeyTotalHours: document.getElementById('journey-total-hours'),
  journeyTotalMinutes: document.getElementById('journey-total-minutes'),
  journeyTotalSeconds: document.getElementById('journey-total-seconds'),
  journeyAccumulatedView: document.getElementById('journey-accumulated-view'),
  journeyCalendarView: document.getElementById('journey-calendar-view'),
  journeyCalYears: document.getElementById('journey-cal-years'),
  journeyCalMonths: document.getElementById('journey-cal-months'),
  journeyCalDays: document.getElementById('journey-cal-days'),
  journeyCalHours: document.getElementById('journey-cal-hours'),
  viewAccumulatedBtn: document.getElementById('view-accumulated-btn'),
  viewCalendarBtn: document.getElementById('view-calendar-btn'),

  // Timeline
  timelineContainer: document.getElementById('timeline-container'),
  timelineProgressLine: document.getElementById('timeline-progress-line'),
  timelineProgressGlow: document.getElementById('timeline-progress-glow'),
  timelineWrapper: document.getElementById('timeline-wrapper'),

  // Modal / Lightbox Foto
  imageModal: document.getElementById('image-modal'),
  modalImage: document.getElementById('modal-image'),
  modalDate: document.getElementById('modal-date'),
  modalTitle: document.getElementById('modal-title'),
  modalQuote: document.getElementById('modal-quote'),
  modalCloseBtn: document.getElementById('modal-close-btn'),

  // Modal Carta de Amor
  loveLetterModal: document.getElementById('love-letter-modal'),
  loveLetterContent: document.getElementById('love-letter-content'),
  letterCloseBtn: document.getElementById('letter-close-btn'),

  // Notificação Flutuante de Música Sincronizada (#music-toast)
  musicToast: document.getElementById('music-toast'),
  musicToastText: document.getElementById('music-toast-text'),

  // Download da Imagem
  downloadTimelineBtn: document.getElementById('download-timeline-btn'),
  downloadProgressModal: document.getElementById('download-progress-modal'),
  exportCanvasTarget: document.getElementById('timeline-export-canvas-target'),
  exportMilestonesContainer: document.getElementById('export-milestones-container'),

  // Trilha Sonora Oficial & Pop-up de Escolha
  musicBtn: document.getElementById('music-btn'),
  romanticAudio: document.getElementById('romantic-audio'),
  musicText: document.getElementById('music-text'),
  musicIcon: document.getElementById('music-icon'),
  musicVisualizer: document.getElementById('music-visualizer'),
  tapToEnterBanner: document.getElementById('tap-to-enter-banner'),
  musicPromptModal: document.getElementById('music-prompt-modal'),
  musicAcceptBtn: document.getElementById('music-accept-btn'),
  musicDeclineBtn: document.getElementById('music-decline-btn'),

  // Chuva de Celebração
  celebrateBtn: document.getElementById('celebrate-btn'),

  // Debug Bar
  debugBar: document.getElementById('debug-bar'),
  toggleLockBtn: document.getElementById('toggle-lock-btn'),
  unlockAllBtn: document.getElementById('unlock-all-btn'),

  // Painel de Transição: "Rumo ao Grande Dia" (21 de Outubro)
  grandDayLockedCard: document.getElementById('grand-day-locked-card'),
  grandDayClimax: document.getElementById('grand-day-climax'),
  grandDayDays: document.getElementById('grand-day-days'),
  grandDayHours: document.getElementById('grand-day-hours'),
  grandDayMinutes: document.getElementById('grand-day-minutes'),
  grandDaySeconds: document.getElementById('grand-day-seconds'),
  providenceSection: document.getElementById('providence-section'),

  // Cápsula do Tempo para o Ano 3
  timeCapsuleInput: document.getElementById('time-capsule-input'),
  timeCapsuleSaveBtn: document.getElementById('time-capsule-save-btn'),
  timeCapsuleStatus: document.getElementById('time-capsule-status'),
};

// =========================================================================
// 4. MICROINTERAÇÕES: ATUALIZAÇÃO COM ANIMAÇÃO DE PULSO (TICK / FLIP)
// =========================================================================

function setAnimatedDigit(elem, newValue) {
  if (!elem) return;
  const strValue = String(newValue);
  if (elem.textContent !== strValue) {
    elem.textContent = strValue;
    elem.classList.remove('digit-bump');
    void elem.offsetWidth;
    elem.classList.add('digit-bump');
  }
}

// =========================================================================
// 5. FUNÇÕES DE CÁLCULO DE TEMPO
// =========================================================================

function getTimeDifference(targetDate, currentDate = new Date()) {
  const target = new Date(targetDate).getTime();
  const current = currentDate.getTime();
  const diffMs = target - current;

  if (diffMs <= 0) {
    return { isPast: true, days: 0, hours: 0, minutes: 0, seconds: 0, totalMs: 0 };
  }

  const seconds = Math.floor((diffMs / 1000) % 60);
  const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
  const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  return { isPast: false, days, hours, minutes, seconds, totalMs: diffMs };
}

function getElapsedTime(startDate, currentDate = new Date()) {
  const start = new Date(startDate);
  const now = currentDate;

  const diffMs = Math.max(0, now.getTime() - start.getTime());
  const totalSeconds = Math.floor(diffMs / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  let days = now.getDate() - start.getDate();

  if (days < 0) {
    months--;
    const prevMonthDays = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    days += prevMonthDays;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const hoursRemaining = now.getHours();

  return {
    totalHours,
    totalMinutes,
    totalSeconds,
    years: Math.max(0, years),
    months: Math.max(0, months),
    days: Math.max(0, days),
    hoursRemaining
  };
}

function pad(num) {
  return String(num).padStart(2, '0');
}

function formatNumber(num) {
  return new Intl.NumberFormat('pt-BR').format(num);
}

// =========================================================================
// 6. ATUALIZAÇÃO DOS CONTADORES EM TEMPO REAL
// =========================================================================

function updateTimers() {
  const now = new Date();

  // 1. Bloqueio Inicial
  const initialLockDiff = getTimeDifference(CONFIG.INITIAL_UNLOCK_DATE, now);
  const shouldUnlock = state.debugOverrideUnlocked || initialLockDiff.isPast;

  setAnimatedDigit(dom.lockDays, pad(initialLockDiff.days));
  setAnimatedDigit(dom.lockHours, pad(initialLockDiff.hours));
  setAnimatedDigit(dom.lockMinutes, pad(initialLockDiff.minutes));
  setAnimatedDigit(dom.lockSeconds, pad(initialLockDiff.seconds));

  if (shouldUnlock && !state.isInitiallyUnlocked) {
    unlockMainApplication();
  } else if (!shouldUnlock && state.isInitiallyUnlocked) {
    lockMainApplication();
  }

  // 2. Painel 1: Contagem Regressiva para os 2 Anos (21 de Outubro)
  const anniversaryDiff = getTimeDifference(CONFIG.ANNIVERSARY_DATE, now);
  setAnimatedDigit(dom.countdownDays, pad(anniversaryDiff.days));
  setAnimatedDigit(dom.countdownHours, pad(anniversaryDiff.hours));
  setAnimatedDigit(dom.countdownMinutes, pad(anniversaryDiff.minutes));
  setAnimatedDigit(dom.countdownSeconds, pad(anniversaryDiff.seconds));

  if (dom.countdownSeconds && !dom.countdownSeconds.classList.contains('amethyst-digit-glow')) {
    dom.countdownSeconds.classList.add('amethyst-digit-glow');
  }

  if (dom.countdownStatus) {
    if (anniversaryDiff.isPast) {
      dom.countdownStatus.textContent = "Hoje é o grande dia: Dois anos inesquecíveis de amor!";
      dom.countdownStatus.className = "font-bold text-amethyst-600 animate-pulse";
    } else {
      dom.countdownStatus.textContent = "Contando cada segundo para a meia-noite!";
    }
  }

  // 3. Painel 2: Nossa Jornada Juntos
  const elapsed = getElapsedTime(CONFIG.RELATIONSHIP_START_DATE, now);
  setAnimatedDigit(dom.journeyTotalHours, formatNumber(elapsed.totalHours));
  setAnimatedDigit(dom.journeyTotalMinutes, formatNumber(elapsed.totalMinutes));
  setAnimatedDigit(dom.journeyTotalSeconds, formatNumber(elapsed.totalSeconds));

  setAnimatedDigit(dom.journeyCalYears, elapsed.years);
  setAnimatedDigit(dom.journeyCalMonths, elapsed.months);
  setAnimatedDigit(dom.journeyCalDays, elapsed.days);
  setAnimatedDigit(dom.journeyCalHours, pad(elapsed.hoursRemaining));

  // 4. Mini contadores dos cards bloqueados
  updateTimelineCardCountdowns(now);

  // 5. Painel de Transição: "Rumo ao Grande Dia" (21 de Outubro)
  updateGrandDayCountdown(now);
}

function isAnniversaryUnlocked(now = new Date()) {
  if (state.debugOverrideUnlocked) return true;
  return now.getTime() >= new Date(CONFIG.ANNIVERSARY_DATE).getTime();
}

function updateGrandDayCountdown(now = new Date()) {
  const isUnlocked = isAnniversaryUnlocked(now);
  const lockedCard = dom.grandDayLockedCard || document.getElementById('grand-day-locked-card');
  const climaxContainer = dom.grandDayClimax || document.getElementById('grand-day-climax');
  const providenceSection = dom.providenceSection || document.getElementById('providence-section');

  if (isUnlocked) {
    if (lockedCard) lockedCard.classList.add('hidden');
    if (climaxContainer) {
      climaxContainer.classList.remove('hidden');
      if (!climaxContainer.classList.contains('fade-in')) {
        climaxContainer.classList.add('fade-in');
      }
    }
    if (providenceSection) {
      providenceSection.classList.remove('hidden');
    }
  } else {
    if (lockedCard) lockedCard.classList.remove('hidden');
    if (climaxContainer) climaxContainer.classList.add('hidden');
    if (providenceSection) providenceSection.classList.add('hidden');

    const diff = getTimeDifference(CONFIG.ANNIVERSARY_DATE, now);
    const daysElem = dom.grandDayDays || document.getElementById('grand-day-days');
    const hoursElem = dom.grandDayHours || document.getElementById('grand-day-hours');
    const minutesElem = dom.grandDayMinutes || document.getElementById('grand-day-minutes');
    const secondsElem = dom.grandDaySeconds || document.getElementById('grand-day-seconds');

    if (daysElem) setAnimatedDigit(daysElem, pad(diff.days));
    if (hoursElem) setAnimatedDigit(hoursElem, pad(diff.hours));
    if (minutesElem) setAnimatedDigit(minutesElem, pad(diff.minutes));
    if (secondsElem) setAnimatedDigit(secondsElem, pad(diff.seconds));
  }
}

function unlockMainApplication() {
  state.isInitiallyUnlocked = true;
  if (dom.lockScreen && dom.mainContent) {
    dom.lockScreen.classList.add('fade-out');
    setTimeout(() => {
      dom.lockScreen.style.display = 'none';
      dom.mainContent.classList.remove('opacity-0', 'pointer-events-none');
      dom.mainContent.classList.add('fade-in');

      if (typeof AOS !== 'undefined') {
        AOS.refresh();
      }
      updateTimelineProgress();
    }, 700);
  }
}

function lockMainApplication() {
  state.isInitiallyUnlocked = false;
  if (dom.lockScreen && dom.mainContent) {
    dom.lockScreen.style.display = 'flex';
    dom.lockScreen.classList.remove('fade-out');
    dom.mainContent.classList.remove('fade-in');
    dom.mainContent.classList.add('opacity-0', 'pointer-events-none');
  }
}

// =========================================================================
// 7. RENDERIZAÇÃO DA TIMELINE COM FLIP 3D E ENVELOPE VIRTUAL
// =========================================================================

function renderTimeline() {
  if (!dom.timelineContainer) return;
  dom.timelineContainer.innerHTML = '';

  const now = new Date();

  TIMELINE_DATA.forEach((item, index) => {
    const isUnlocked = isCardUnlocked(item, now);
    const isAnniversary = Boolean(item.isAnniversary);
    const isOdd = index % 2 === 0;

    const article = document.createElement('article');
    article.className = 'timeline-item';
    article.setAttribute('data-index', index);

    // AOS
    const aosDirection = isOdd ? 'fade-right' : 'fade-left';
    article.setAttribute('data-aos', aosDirection);
    article.setAttribute('data-aos-duration', '750');
    article.setAttribute('data-aos-offset', '140');
    article.setAttribute('data-aos-easing', 'ease-out-cubic');

    // Marcador central
    const dotHtml = isUnlocked ? `
      <div class="timeline-dot w-8 h-8 rounded-full bg-royal-700 border-4 border-white shadow-md flex items-center justify-center text-white text-xs font-bold ring-2 ring-royal-200">
        <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
      </div>
    ` : `
      <div class="timeline-dot w-7 h-7 rounded-full bg-slate-300 border-4 border-white shadow flex items-center justify-center text-slate-500 text-[10px]">
        <svg class="w-3 h-3 text-slate-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
      </div>
    `;

    let contentHtml = '';

    if (isUnlocked) {
      // 1. CARD DESBLOQUEADO: POLAROID COM FLIP 3D (FRENTE E VERSO)
      const polaroidRotationClass = isOdd ? 'polaroid-odd' : 'polaroid-even';

      contentHtml = `
        <div class="timeline-content w-full sm:w-1/2">
          <div class="p-6 sm:p-7 rounded-3xl timeline-card-unlocked relative overflow-hidden group">
            
            <!-- Badge do Dia e Status -->
            <div class="flex items-center justify-between gap-2 mb-4">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold day-badge bg-royal-50 text-royal-700 border border-royal-200">
                <svg class="w-3.5 h-3.5 text-royal-600 inline shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                <span>${item.dayLabel} • Marco ${item.dayNumber}</span>
              </span>
              
              <span class="text-[11px] font-semibold text-emerald-600 flex items-center gap-1.5 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Liberado
              </span>
            </div>

            <!-- COMPONENTE POLAROID COM EFEITO FLIP 3D -->
            <div class="polaroid-flip-container ${polaroidRotationClass} mb-5" id="polaroid-card-${index}">
              <div class="polaroid-flip-inner">
                
                <!-- FRENTE: A Foto Polaroid -->
                <div class="polaroid-front">
                  <div class="polaroid-tape"></div>
                  <div class="aspect-[16/10] overflow-hidden rounded-xl bg-slate-100 relative group/img">
                    <img src="${item.photoUrl}" alt="${item.title}" loading="lazy" class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105">
                    
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3">
                      <button type="button" onclick="openLightbox(${index})" class="text-white text-xs font-semibold flex items-center gap-1.5 backdrop-blur-md bg-black/60 hover:bg-black/80 px-3.5 py-2 min-h-[44px] rounded-full transition-all active:scale-95 touch-manipulation cursor-pointer">
                        <svg class="w-4 h-4 text-amethyst-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/></svg>
                        Ampliar
                      </button>
                    </div>
                  </div>
                  
                  <!-- Rodapé com botão de Girar e Ver Bastidores -->
                  <div class="pt-3 pb-0.5 px-1 flex items-center justify-between text-slate-500">
                    <span class="font-script text-xl text-slate-800 leading-none">Memória #${item.dayNumber}</span>
                    <button type="button" onclick="togglePolaroidFlip(${index})" class="group/btn inline-flex items-center gap-1.5 text-xs font-bold text-amethyst-700 hover:text-amethyst-900 bg-amethyst-50 hover:bg-amethyst-100 px-3.5 py-2 min-h-[44px] rounded-full border border-amethyst-200 transition-all shadow-xs active:scale-95 touch-manipulation cursor-pointer">
                      <svg class="w-4 h-4 text-amethyst-600 group-hover/btn:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                      <span>Ver bastidores</span>
                    </button>
                  </div>
                </div>

                <!-- VERSO: Bastidores Secretos com Escrita Afetuosa -->
                <div class="polaroid-back">
                  <div class="polaroid-tape"></div>
                  <div class="h-full flex flex-col justify-between p-4 bg-gradient-to-br from-[#FAF5FF] via-white to-[#F3E8FF] rounded-xl border border-purple-200/80 shadow-inner text-left relative overflow-hidden">
                    <div class="absolute -right-3 -bottom-3 text-purple-200/30 w-24 h-24 select-none pointer-events-none">
                      <svg class="w-full h-full" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                    </div>
                    
                    <div>
                      <div class="flex items-center justify-between mb-2 pb-1.5 border-b border-purple-100">
                        <span class="text-[10px] font-bold uppercase tracking-wider text-amethyst-700 bg-white/90 px-2 py-0.5 rounded-md border border-purple-200">
                          História dos Bastidores
                        </span>
                        <span class="text-xs text-amethyst-600">
                          <svg class="w-3.5 h-3.5 text-amethyst-500 inline" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z"/></svg>
                        </span>
                      </div>
                      <h4 class="font-serif font-bold text-slate-800 text-sm mb-1">${item.title}</h4>
                      <p class="font-serif italic text-slate-700 text-xs sm:text-[13px] leading-relaxed">
                        "${item.behindTheScenes}"
                      </p>
                    </div>
                    
                    <div class="pt-2 mt-2 border-t border-purple-100 flex items-center justify-between">
                      <span class="font-script text-base text-amethyst-800">Nosso segredo</span>
                      <button type="button" onclick="togglePolaroidFlip(${index})" class="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-amethyst-700 bg-white px-3 py-2 min-h-[44px] rounded-xl border border-slate-200 transition-colors shadow-xs active:scale-95 touch-manipulation cursor-pointer">
                        <span>Voltar à foto</span>
                        <svg class="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <!-- Título do Momento -->
            <h3 class="font-serif text-xl sm:text-2xl font-bold text-slate-900 mb-2 leading-snug">
              ${item.title}
            </h3>

            <!-- Citação Romântica -->
            <p class="font-serif italic text-slate-700 text-sm sm:text-base leading-relaxed mb-4 border-l-2 border-royal-400 bg-royal-50/40 pl-3.5 py-1.5 rounded-r-lg">
              "${item.quote}"
            </p>

            <!-- Rodapé com Localização -->
            ${item.location ? `
              <div class="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-1">
                <svg class="w-3.5 h-3.5 text-royal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>${item.location}</span>
              </div>
            ` : ''}

          </div>
        </div>
      `;
    } else {
      // 2. CARD BLOQUEADO
      contentHtml = `
        <div class="timeline-content w-full sm:w-1/2">
          <div class="p-6 sm:p-7 rounded-3xl timeline-card-locked relative overflow-hidden">
            
            <div class="locked-content-blur select-none">
              <div class="flex items-center justify-between mb-4">
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-200 text-slate-700">
                  <svg class="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                  <span>${item.dayLabel} • Marco ${item.dayNumber}</span>
                </span>
              </div>
              <div class="aspect-[16/10] bg-slate-200 rounded-xl mb-4"></div>
              <div class="h-6 bg-slate-300 rounded-md w-3/4 mb-2"></div>
              <div class="h-4 bg-slate-200 rounded-md w-full mb-1"></div>
            </div>

            <!-- Overlay de Cadeado e Mini Contador de Desbloqueio -->
            <div class="timeline-lock-overlay">
              <div class="w-14 h-14 rounded-2xl bg-white shadow-md border border-slate-200 flex items-center justify-center text-royal-700 mb-3 animate-float">
                <svg class="w-7 h-7 text-amethyst-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>

              <span class="text-xs font-bold tracking-wider uppercase text-royal-800 mb-1">
                Bloqueado até ${item.dayLabel}
              </span>
              <p class="text-xs text-slate-500 mb-3 max-w-[220px]">
                Esta memória especial será revelada no momento certo.
              </p>

              <div class="bg-white/95 px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-2 text-xs font-mono font-bold text-slate-700">
                <svg class="w-3.5 h-3.5 text-amethyst-600 inline" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span id="mini-countdown-${index}">Calculando...</span>
              </div>
            </div>

          </div>
        </div>
      `;
    }

    article.innerHTML = dotHtml + contentHtml;
    dom.timelineContainer.appendChild(article);
  });

  if (typeof AOS !== 'undefined') {
    AOS.refresh();
  }
}

function isCardUnlocked(item, now = new Date()) {
  if (state.debugOverrideUnlocked) return true;
  const itemDate = new Date(item.date).getTime();
  return now.getTime() >= itemDate;
}

function updateTimelineCardCountdowns(now = new Date()) {
  TIMELINE_DATA.forEach((item, index) => {
    const isUnlocked = isCardUnlocked(item, now);
    const elem = document.getElementById(`mini-countdown-${index}`);
    if (elem && !isUnlocked) {
      const diff = getTimeDifference(item.date, now);
      if (diff.isPast) {
        renderTimeline();
      } else {
        elem.textContent = `${diff.days}d ${pad(diff.hours)}h ${pad(diff.minutes)}m ${pad(diff.seconds)}s`;
      }
    }
  });
}

// =========================================================================
// 8. INTERAÇÃO 3A: FLIP DA POLAROID
// =========================================================================

function togglePolaroidFlip(index) {
  const card = document.getElementById(`polaroid-card-${index}`);
  if (card) {
    card.classList.toggle('flipped');
    if (navigator.vibrate) navigator.vibrate(15);
  }
}

// =========================================================================
// 9. INTERAÇÃO 3B: ENVELOPE VIRTUAL & CARTA DE AMOR
// =========================================================================

function openLoveLetterEnvelope() {
  const waxSeal = document.getElementById('wax-seal');
  if (waxSeal) {
    waxSeal.classList.add('broken');
  }

  // Feedback tátil no rompimento do lacre
  if (navigator.vibrate) navigator.vibrate([25, 45, 25]);

  // Soltar confetes e corações celebratórios
  triggerConfetti();

  // Abrir modal da carta após animação do lacre
  setTimeout(() => {
    if (dom.loveLetterModal && dom.loveLetterContent) {
      // Formatar parágrafos da carta
      const paragraphs = LOVE_LETTER_TEXT.trim().split('\n\n');
      dom.loveLetterContent.innerHTML = paragraphs
        .map(p => `<p class="leading-relaxed mb-3">${p.replace(/\n/g, '<br>')}</p>`)
        .join('');

      dom.loveLetterModal.classList.remove('hidden');
      dom.loveLetterModal.classList.add('flex');
      document.body.style.overflow = 'hidden';
    }
  }, 350);
}

function closeLoveLetter() {
  if (!dom.loveLetterModal) return;
  dom.loveLetterModal.classList.add('hidden');
  dom.loveLetterModal.classList.remove('flex');
  document.body.style.overflow = '';
}

// =========================================================================
// 10. MENSAGENS AFETIVAS SINCRONIZADAS COM A TRILHA SONORA (#music-toast)
// =========================================================================

let currentToastText = '';

function checkMusicSyncMessages() {
  if (!dom.romanticAudio || dom.romanticAudio.paused || !state.isMusicPlaying) {
    hideMusicToast();
    return;
  }

  const currentTime = dom.romanticAudio.currentTime;
  const activeMsg = MUSIC_SYNC_MESSAGES.find(
    msg => currentTime >= msg.start && currentTime <= msg.end
  );

  if (activeMsg) {
    showMusicToast(activeMsg.text);
  } else {
    hideMusicToast();
  }
}

function showMusicToast(text) {
  if (!dom.musicToast || !dom.musicToastText) return;
  if (currentToastText !== text) {
    currentToastText = text;
    dom.musicToastText.textContent = text;
  }
  dom.musicToast.classList.add('active');
}

function hideMusicToast() {
  if (!dom.musicToast) return;
  dom.musicToast.classList.remove('active');
  currentToastText = '';
}

// =========================================================================
// 11. INTERAÇÃO 3D: GUARDAR NOSSA LINHA DO TEMPO (DOWNLOAD VIA HTML2CANVAS)
// =========================================================================

function setupDownloadTimeline() {
  if (!dom.downloadTimelineBtn) return;

  dom.downloadTimelineBtn.addEventListener('click', async () => {
    if (typeof html2canvas === 'undefined') {
      alert("Biblioteca de imagem carregando, por favor aguarde alguns segundos.");
      return;
    }

    // Exibir modal de progresso
    if (dom.downloadProgressModal) {
      dom.downloadProgressModal.classList.remove('hidden');
      dom.downloadProgressModal.classList.add('flex');
    }

    try {
      // Preencher o template off-screen com os 5 marcos + marco comemorativo
      if (dom.exportMilestonesContainer) {
        const milestonesHtml = TIMELINE_DATA.map(item => `
          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 14px; padding: 12px 14px; display: flex; align-items: center; gap: 12px;">
            <div style="width: 32px; height: 32px; border-radius: 10px; background: #7C3AED; color: #FFFFFF; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; flex-shrink: 0;">
              ${item.dayNumber}
            </div>
            <div>
              <span style="font-size: 10px; text-transform: uppercase; letter-spacing: 1px; color: #7C3AED; font-weight: bold;">
                ${item.dayLabel}
              </span>
              <div style="font-family: 'Cormorant Garamond', Georgia, serif; font-size: 14px; font-weight: bold; color: #0F172A; line-height: 1.2;">
                ${item.title}
              </div>
            </div>
          </div>
        `).join('');

        const celebrationHtml = `
          <div style="background: #FAF5FF; border: 1px solid #D8B4FE; border-radius: 14px; padding: 12px 14px; display: flex; align-items: center; gap: 12px;">
            <div style="width: 32px; height: 32px; border-radius: 10px; background: #9333EA; color: #FFFFFF; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; flex-shrink: 0;">
              2
            </div>
            <div>
              <span style="font-size: 10px; text-transform: uppercase; letter-spacing: 1px; color: #7C3AED; font-weight: bold;">
                21 de Outubro
              </span>
              <div style="font-family: 'Cormorant Garamond', Georgia, serif; font-size: 14px; font-weight: bold; color: #0F172A; line-height: 1.2;">
                Bodas de Algodão (2 Anos)
              </div>
            </div>
          </div>
        `;

        dom.exportMilestonesContainer.innerHTML = milestonesHtml + celebrationHtml;
      }

      // Aguardar meio segundo para rendering limpo
      await new Promise(r => setTimeout(r, 450));

      const target = dom.exportCanvasTarget;
      if (!target) return;

      const canvas = await html2canvas(target, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#F8FAFC'
      });

      const imageURL = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `Nossa-Linha-do-Tempo-2-Anos.png`;
      link.href = imageURL;
      link.click();

      triggerConfetti();
    } catch (err) {
      console.error("Erro ao gerar imagem:", err);
      alert("Não foi possível gerar a imagem no momento. Tente novamente.");
    } finally {
      if (dom.downloadProgressModal) {
        dom.downloadProgressModal.classList.add('hidden');
        dom.downloadProgressModal.classList.remove('flex');
      }
    }
  });
}

// =========================================================================
// 11B. CÁPSULA DO TEMPO: ANO 3 (2027)
// =========================================================================

function setupTimeCapsule() {
  const input = dom.timeCapsuleInput || document.getElementById('time-capsule-input');
  const btn = dom.timeCapsuleSaveBtn || document.getElementById('time-capsule-save-btn');
  const status = dom.timeCapsuleStatus || document.getElementById('time-capsule-status');

  if (!btn || !input) return;

  try {
    const saved = localStorage.getItem('twoyears_time_capsule_year3');
    if (saved) {
      input.value = saved;
      if (status) {
        status.textContent = "Mensagem selada e guardada com amor para 21.10.2027!";
        status.className = "text-[11px] text-amethyst-700 font-semibold";
      }
    }
  } catch (e) {
    console.warn("Storage inacessível:", e);
  }

  btn.addEventListener('click', () => {
    const text = input.value.trim();
    if (!text) {
      alert("Escreva uma palavrinha carinhosa antes de selar a cápsula!");
      return;
    }
    try {
      localStorage.setItem('twoyears_time_capsule_year3', text);
    } catch (e) {
      console.warn("Erro ao salvar:", e);
    }
    if (status) {
      status.textContent = "Mensagem selada com sucesso para 2027!";
      status.className = "text-[11px] text-emerald-600 font-bold";
    }
    triggerConfetti();
    if (navigator.vibrate) navigator.vibrate([30, 50, 30]);
  });
}

// =========================================================================
// 12. LINHA GUIA COM PREENCHIMENTO DINÂMICO (SCROLL PROGRESS TRACKER)
// =========================================================================

function updateTimelineProgress() {
  const wrapper = dom.timelineWrapper || document.getElementById('timeline-wrapper');
  const progressLine = dom.timelineProgressLine || document.getElementById('timeline-progress-line');
  const progressGlow = dom.timelineProgressGlow || document.getElementById('timeline-progress-glow');

  if (!wrapper || !progressLine) return;

  const rect = wrapper.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const triggerPoint = windowHeight * 0.65;
  const totalHeight = rect.height;

  const distanceScrolled = triggerPoint - rect.top;
  let percent = (distanceScrolled / totalHeight) * 100;
  percent = Math.max(0, Math.min(100, percent));

  progressLine.style.height = `${percent}%`;

  if (progressGlow) {
    if (percent > 1 && percent <= 99) {
      progressGlow.style.opacity = '1';
      progressGlow.style.top = `${percent}%`;
    } else if (percent > 99) {
      progressGlow.style.opacity = '1';
      progressGlow.style.top = '100%';
    } else {
      progressGlow.style.opacity = '0';
    }
  }
}

// =========================================================================
// 13. LIGHTBOX PARA FOTOS
// =========================================================================

function openLightbox(index) {
  const item = TIMELINE_DATA[index];
  if (!item || !dom.imageModal) return;

  dom.modalImage.src = item.photoUrl;
  dom.modalDate.textContent = `${item.dayLabel} • Marco ${item.dayNumber}`;
  dom.modalTitle.textContent = item.title;
  dom.modalQuote.textContent = `"${item.quote}"`;

  dom.imageModal.classList.remove('hidden');
  dom.imageModal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  if (!dom.imageModal) return;
  dom.imageModal.classList.add('hidden');
  dom.imageModal.classList.remove('flex');
  document.body.style.overflow = '';
}

// =========================================================================
// 14. CHUVA DE CONFETES E CORAÇÕES
// =========================================================================

function triggerConfetti() {
  const count = 130;
  const colors = ['#2563EB', '#1E40AF', '#7C3AED', '#A855F7', '#C084FC', '#E9D5FF', '#F43F5E', '#FFFFFF'];
  const container = document.body;

  for (let i = 0; i < count; i++) {
    const confetti = document.createElement('div');
    const isHeart = Math.random() > 0.55;
    const size = Math.random() * 8 + 6;

    confetti.style.position = 'fixed';
    confetti.style.zIndex = '9999';
    confetti.style.top = '-20px';
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.borderRadius = isHeart ? '50%' : (Math.random() > 0.5 ? '2px' : '50%');
    confetti.style.opacity = String(Math.random() * 0.7 + 0.3);
    confetti.style.pointerEvents = 'none';

    const duration = Math.random() * 3 + 2.5;
    const fallDistance = window.innerHeight + 50;
    const horizontalSway = (Math.random() - 0.5) * 220;
    const rotation = Math.random() * 720;

    confetti.animate([
      { transform: 'translate(0, 0) rotate(0deg)', opacity: 1 },
      { transform: `translate(${horizontalSway}px, ${fallDistance}px) rotate(${rotation}deg)`, opacity: 0 }
    ], {
      duration: duration * 1000,
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    });

    container.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, duration * 1000);
  }
}

// =========================================================================
// 15. CANVAS ATMOSFÉRICO VIVO (ORBES + CORAÇÕES GEOMÉTRICOS TRANSLÚCIDOS)
// =========================================================================

function setupAmbientCanvas() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }, { passive: true });

  const particles = Array.from({ length: 34 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 6 + 3,
    speedY: Math.random() * 0.45 + 0.15,
    swaySpeed: Math.random() * 0.02 + 0.005,
    swayOffset: Math.random() * Math.PI * 2,
    alpha: Math.random() * 0.23 + 0.15,
    isHeart: Math.random() > 0.45,
    isAmethyst: Math.random() > 0.5,
  }));

  function drawHeart(ctx, x, y, size) {
    ctx.beginPath();
    const topCurveHeight = size * 0.3;
    ctx.moveTo(x, y + topCurveHeight);
    ctx.bezierCurveTo(x, y, x - size / 2, y, x - size / 2, y + topCurveHeight);
    ctx.bezierCurveTo(x - size / 2, y + (size + topCurveHeight) / 2, x, y + size, x, y + size);
    ctx.bezierCurveTo(x, y + size, x + size / 2, y + (size + topCurveHeight) / 2, x + size / 2, y + topCurveHeight);
    ctx.bezierCurveTo(x + size / 2, y, x, y, x, y + topCurveHeight);
    ctx.closePath();
    ctx.fill();
  }

  function loop() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.y -= p.speedY;
      p.swayOffset += p.swaySpeed;
      const swayX = Math.sin(p.swayOffset) * 0.6;
      p.x += swayX;

      if (p.y < -20) p.y = height + 20;
      if (p.x < -20) p.x = width + 20;
      if (p.x > width + 20) p.x = -20;

      const colorBase = p.isAmethyst ? (Math.random() > 0.5 ? '168, 85, 247' : '124, 58, 237') : '37, 99, 235';
      ctx.fillStyle = `rgba(${colorBase}, ${p.alpha})`;

      if (p.isHeart) {
        drawHeart(ctx, p.x, p.y, p.size);
      } else {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    requestAnimationFrame(loop);
  }

  loop();
}

// =========================================================================
// 16. RASTRO DE CENTELHAS TRANSLÚCIDAS AO MOVER O MOUSE OU TOCAR
// =========================================================================

function setupCursorTrail() {
  let lastTime = 0;
  const throttleMs = 32;

  function spawnSpark(x, y) {
    const spark = document.createElement('span');
    spark.className = 'spark-particle';
    const size = Math.random() * 5 + 4;
    spark.style.width = `${size}px`;
    spark.style.height = `${size}px`;
    spark.style.left = `${x}px`;
    spark.style.top = `${y}px`;

    if (Math.random() > 0.5) {
      spark.style.background = 'radial-gradient(circle, rgba(233, 213, 255, 0.95) 0%, rgba(168, 85, 247, 0.6) 50%, rgba(124, 58, 237, 0.3) 75%, transparent 100%)';
    } else {
      spark.style.background = 'radial-gradient(circle, rgba(243, 232, 255, 0.95) 0%, rgba(168, 85, 247, 0.7) 60%, transparent 100%)';
    }

    document.body.appendChild(spark);
    setTimeout(() => spark.remove(), 650);
  }

  window.addEventListener('mousemove', (e) => {
    const now = performance.now();
    if (now - lastTime > throttleMs) {
      lastTime = now;
      spawnSpark(e.clientX, e.clientY);
    }
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches[0]) {
      const now = performance.now();
      if (now - lastTime > throttleMs * 1.5) {
        lastTime = now;
        spawnSpark(e.touches[0].clientX, e.touches[0].clientY);
      }
    }
  }, { passive: true });
}

// =========================================================================
// 17. CONTROLE DE ÁUDIO E TRILHA SONORA OFICIAL (KISS - I WAS MADE FOR LOVIN' YOU)
//     COM POP-UP INTERATIVO E ELEVAÇÃO GRADUAL DE VOLUME ATÉ 50% (DE 2% EM 2%)
// =========================================================================

let volumeFadeInterval = null;

/**
 * Eleva gradualmente o volume do áudio de 2% em 2% até atingir 50%.
 * @param {number} targetVolume - Volume final alvo (0.50 = 50%)
 * @param {number} step - Incremento por etapa (0.02 = 2%)
 * @param {number} intervalMs - Intervalo entre cada etapa (120ms para fade suave de ~3s)
 */
function fadeInVolumeGradually(targetVolume = 0.50, step = 0.02, intervalMs = 120) {
  if (!dom.romanticAudio) return;

  if (volumeFadeInterval) {
    clearInterval(volumeFadeInterval);
    volumeFadeInterval = null;
  }

  // Inicia o volume em 0%
  let currentVolume = 0.0;
  try {
    dom.romanticAudio.volume = currentVolume;
  } catch (e) {
    console.log("Ajuste de volume:", e);
  }

  volumeFadeInterval = setInterval(() => {
    if (!dom.romanticAudio) {
      clearInterval(volumeFadeInterval);
      volumeFadeInterval = null;
      return;
    }

    // Eleva de 2% em 2% com precisão decimal
    currentVolume = Math.min(targetVolume, Math.round((currentVolume + step) * 100) / 100);

    try {
      dom.romanticAudio.volume = currentVolume;
    } catch (e) {
      // Plataformas móveis com volume de hardware fixado (ex: iOS) ignoram sem travar
    }

    // Ao atingir 50% (0.50), finaliza o fade e estabiliza
    if (currentVolume >= targetVolume) {
      clearInterval(volumeFadeInterval);
      volumeFadeInterval = null;
    }
  }, intervalMs);
}

function updateMusicUI(isPlaying) {
  if (!dom.musicBtn) return;

  if (isPlaying) {
    dom.musicBtn.classList.add('music-playing');
    if (dom.musicText) dom.musicText.textContent = "KISS - Lovin' You";
    if (dom.musicIcon) dom.musicIcon.classList.add('animate-spin-slow');
    if (dom.tapToEnterBanner) {
      dom.tapToEnterBanner.innerHTML = `
        <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
        <span class="font-semibold text-emerald-800 text-center flex items-center justify-center gap-1.5">
          <span>Tocando nossa trilha: KISS - I Was Made For Lovin' You</span>
          <svg class="w-3.5 h-3.5 text-emerald-700 animate-pulse" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/></svg>
        </span>
      `;
    }
  } else {
    dom.musicBtn.classList.remove('music-playing');
    if (dom.musicText) dom.musicText.textContent = "Tocar Trilha";
    if (dom.musicIcon) dom.musicIcon.classList.remove('animate-spin-slow');
  }
}

function closeMusicPromptModal() {
  if (!dom.musicPromptModal) return;
  dom.musicPromptModal.classList.add('fade-out');
  setTimeout(() => {
    dom.musicPromptModal.style.display = 'none';
  }, 600);
}

function tryPlayAudioWithFade(targetVolume = 0.50, step = 0.02, intervalMs = 120) {
  if (!dom.romanticAudio) return;

  try {
    dom.romanticAudio.volume = 0.0;
  } catch (e) {}

  const playPromise = dom.romanticAudio.play();
  if (playPromise !== undefined) {
    playPromise.then(() => {
      state.isMusicPlaying = true;
      updateMusicUI(true);
      fadeInVolumeGradually(targetVolume, step, intervalMs);
    }).catch(err => {
      console.warn("Reprodução de áudio:", err);
      state.isMusicPlaying = false;
      updateMusicUI(false);
    });
  }
}

function setupAudioPlayer() {
  if (!dom.romanticAudio) return;

  // 1. Interação no Pop-up Musical Inicial (Aceitar ou Deixar em silêncio)
  if (dom.musicAcceptBtn) {
    dom.musicAcceptBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (navigator.vibrate) navigator.vibrate(25);
      closeMusicPromptModal();
      tryPlayAudioWithFade(0.50, 0.02, 120);
    });
  }

  if (dom.musicDeclineBtn) {
    dom.musicDeclineBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeMusicPromptModal();
      hideMusicToast();
      if (dom.romanticAudio) {
        dom.romanticAudio.pause();
      }
      state.isMusicPlaying = false;
      updateMusicUI(false);
      if (volumeFadeInterval) {
        clearInterval(volumeFadeInterval);
        volumeFadeInterval = null;
      }
    });
  }

  // Listener no banner da tela de bloqueio
  if (dom.tapToEnterBanner) {
    dom.tapToEnterBanner.addEventListener('click', (e) => {
      e.stopPropagation();
      closeMusicPromptModal();
      tryPlayAudioWithFade(0.50, 0.02, 120);
      if (state.debugOverrideUnlocked) {
        unlockMainApplication();
      }
    });
  }

  // 2. Botão Flutuante / Header de Controle de Áudio com Feedback Tátil
  if (dom.musicBtn) {
    dom.musicBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (navigator.vibrate) navigator.vibrate(20);

      // Fecha o modal caso ainda esteja visível
      closeMusicPromptModal();

      if (state.isMusicPlaying) {
        dom.romanticAudio.pause();
        state.isMusicPlaying = false;
        updateMusicUI(false);
        hideMusicToast();
        if (volumeFadeInterval) {
          clearInterval(volumeFadeInterval);
          volumeFadeInterval = null;
        }
      } else {
        tryPlayAudioWithFade(0.50, 0.02, 120);
      }
    });
  }

  // Sincronização de eventos nativos do elemento de áudio
  dom.romanticAudio.addEventListener('play', () => {
    state.isMusicPlaying = true;
    updateMusicUI(true);
    checkMusicSyncMessages();
  });

  dom.romanticAudio.addEventListener('pause', () => {
    state.isMusicPlaying = false;
    updateMusicUI(false);
    hideMusicToast();
  });

  dom.romanticAudio.addEventListener('ended', () => {
    state.isMusicPlaying = false;
    updateMusicUI(false);
    hideMusicToast();
  });

  // Mensagens sincronizadas ao longo da reprodução
  dom.romanticAudio.addEventListener('timeupdate', checkMusicSyncMessages);
}

// =========================================================================
// 18. INICIALIZAÇÃO
// =========================================================================

function init() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      once: true,
      easing: 'ease-out-cubic',
      duration: 750,
      offset: 140
    });
  }

  // Toggle jornada
  if (dom.viewAccumulatedBtn && dom.viewCalendarBtn) {
    dom.viewAccumulatedBtn.addEventListener('click', () => {
      dom.journeyAccumulatedView.classList.remove('hidden');
      dom.journeyCalendarView.classList.add('hidden');
      dom.viewAccumulatedBtn.classList.add('bg-white', 'text-royal-800', 'shadow-sm');
      dom.viewAccumulatedBtn.classList.remove('text-slate-600');
      dom.viewCalendarBtn.classList.remove('bg-white', 'text-royal-800', 'shadow-sm');
      dom.viewCalendarBtn.classList.add('text-slate-600');
    });

    dom.viewCalendarBtn.addEventListener('click', () => {
      dom.journeyAccumulatedView.classList.add('hidden');
      dom.journeyCalendarView.classList.remove('hidden');
      dom.viewCalendarBtn.classList.add('bg-white', 'text-royal-800', 'shadow-sm');
      dom.viewCalendarBtn.classList.remove('text-slate-600');
      dom.viewAccumulatedBtn.classList.remove('bg-white', 'text-royal-800', 'shadow-sm');
      dom.viewAccumulatedBtn.classList.add('text-slate-600');
    });
  }

  // Eventos do Modal Lightbox Foto
  if (dom.modalCloseBtn) {
    dom.modalCloseBtn.addEventListener('click', closeLightbox);
  }
  if (dom.imageModal) {
    dom.imageModal.addEventListener('click', (e) => {
      if (e.target === dom.imageModal) closeLightbox();
    });
  }

  // Eventos do Modal Carta de Amor
  if (dom.letterCloseBtn) {
    dom.letterCloseBtn.addEventListener('click', closeLoveLetter);
  }
  if (dom.loveLetterModal) {
    dom.loveLetterModal.addEventListener('click', (e) => {
      if (e.target === dom.loveLetterModal) closeLoveLetter();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      closeLoveLetter();
      closeMusicPromptModal();
    }
  });

  // Botão de chuva de amor
  if (dom.celebrateBtn) {
    dom.celebrateBtn.addEventListener('click', () => {
      triggerConfetti();
    });
  }

  // Barra de Debug / Teste
  if (DEBUG_MODE && dom.debugBar) {
    dom.debugBar.classList.remove('hidden');

    dom.toggleLockBtn.addEventListener('click', () => {
      state.debugOverrideUnlocked = !state.debugOverrideUnlocked;
      if (state.debugOverrideUnlocked) {
        unlockMainApplication();
        dom.toggleLockBtn.textContent = "Simular Bloqueio";
      } else {
        lockMainApplication();
        dom.toggleLockBtn.textContent = "Simular Liberado";
      }
      renderTimeline();
      updateGrandDayCountdown(new Date());
    });

    dom.unlockAllBtn.addEventListener('click', () => {
      state.debugOverrideUnlocked = true;
      unlockMainApplication();
      renderTimeline();
      updateGrandDayCountdown(new Date());
      triggerConfetti();
    });
  }

  // Expor funções globais para os handlers inline
  window.openLightbox = openLightbox;
  window.triggerConfetti = triggerConfetti;
  window.togglePolaroidFlip = togglePolaroidFlip;
  window.openLoveLetterEnvelope = openLoveLetterEnvelope;
  window.closeLoveLetter = closeLoveLetter;
  window.showMusicToast = showMusicToast;
  window.hideMusicToast = hideMusicToast;
  window.closeMusicPromptModal = closeMusicPromptModal;

  // Render inicial
  renderTimeline();
  setupDownloadTimeline();
  setupTimeCapsule();

  // Efeitos visuais e áudio
  setupAmbientCanvas();
  setupCursorTrail();
  setupAudioPlayer();

  // Scroll Progress Tracker
  window.addEventListener('scroll', updateTimelineProgress, { passive: true });
  updateTimelineProgress();

  // Timers
  updateTimers();
  setInterval(updateTimers, 1000);
}

document.addEventListener('DOMContentLoaded', init);
