/**
 * NO ENTRY - E.S.C. ARG Core
 * Progress & puzzle state managed via localStorage
 */

const STORAGE_KEY = 'esc_noentry_progress_v1';

const defaultState = {
  // Discovery flags
  visited_pictograms: false,
  noticed_missing: false,
  found_archive: false,
  found_accident: false,
  unlocked_internal: false,
  found_saeki_letter: false,
  found_esc000_desc: false,
  reconstructed_000: false,
  viewed_true_end: false,
  viewed_bad_end: false,
  viewed_secret_end: false,
  mizuno_confirm_seen: false,
  deeper_layer: false,
  quiet_note_seen: false,

  // Collected documents
  docs: {},

  // Puzzle answers (for verification)
  answers: {},

  // First visit timestamp
  firstVisit: null,
  lastVisit: null
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const s = { ...defaultState, firstVisit: Date.now(), lastVisit: Date.now() };
      saveState(s);
      return s;
    }
    const s = JSON.parse(raw);
    s.lastVisit = Date.now();
    // merge missing keys
    for (const k of Object.keys(defaultState)) {
      if (!(k in s)) s[k] = defaultState[k];
    }
    saveState(s);
    return s;
  } catch (e) {
    return { ...defaultState, firstVisit: Date.now(), lastVisit: Date.now() };
  }
}

function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {}
}

function getState() {
  return loadState();
}

function setFlag(key, value = true) {
  const s = loadState();
  s[key] = value;
  saveState(s);
  updateProgressUI();
  return s;
}

function hasFlag(key) {
  return !!loadState()[key];
}

function collectDoc(id) {
  const s = loadState();
  s.docs[id] = true;
  saveState(s);
  updateProgressUI();
}

function hasDoc(id) {
  return !!loadState().docs[id];
}

function resetProgress() {
  if (confirm('進行状況をすべてリセットしますか？\nこの操作は取り消せません。')) {
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  }
}

/* Progress calculation (rough) */
function calcProgress() {
  const s = loadState();
  const keys = [
    'visited_pictograms', 'noticed_missing', 'found_archive',
    'found_accident', 'unlocked_internal', 'found_saeki_letter',
    'found_esc000_desc', 'reconstructed_000'
  ];
  let n = 0;
  keys.forEach(k => { if (s[k]) n++; });
  return Math.round((n / keys.length) * 100);
}

function updateProgressUI() {
  const el = document.getElementById('progress-fill');
  if (el) {
    el.style.width = calcProgress() + '%';
  }
  // Update any conditional visibility
  document.querySelectorAll('[data-require]').forEach(node => {
    const req = node.getAttribute('data-require');
    if (hasFlag(req) || hasDoc(req)) {
      node.classList.remove('hidden');
      node.classList.remove('locked');
    }
  });
  document.querySelectorAll('[data-hide-if]').forEach(node => {
    const req = node.getAttribute('data-hide-if');
    if (hasFlag(req)) {
      node.classList.add('hidden');
    }
  });
}

/* Simple answer checker */
function checkAnswer(puzzleId, input, expected) {
  const normalized = (input || '').toString().trim().toLowerCase().replace(/\s+/g, '');
  const expectList = Array.isArray(expected) ? expected : [expected];
  const ok = expectList.some(e => normalized === e.toString().toLowerCase().replace(/\s+/g, ''));
  if (ok) {
    const s = loadState();
    s.answers[puzzleId] = true;
    saveState(s);
  }
  return ok;
}

/* Modal helpers */
function openModal(html) {
  let overlay = document.getElementById('modal-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'modal-overlay';
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `
      <div class="modal-content">
        <button class="modal-close" aria-label="閉じる">&times;</button>
        <div id="modal-body"></div>
      </div>`;
    document.body.appendChild(overlay);
    overlay.querySelector('.modal-close').addEventListener('click', closeModal);
    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeModal();
    });
  }
  document.getElementById('modal-body').innerHTML = html;
  overlay.classList.add('visible');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  if (overlay) {
    overlay.classList.remove('visible');
    document.body.style.overflow = '';
  }
}

/* FAQ toggle */
function initFaq() {
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => {
      q.parentElement.classList.toggle('open');
    });
  });
}

/* Active nav */
function setActiveNav() {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

/* Init on every page */
document.addEventListener('DOMContentLoaded', () => {
  updateProgressUI();
  setActiveNav();
  initFaq();

  // Subtle progress bar
  if (!document.querySelector('.progress-bar')) {
    const bar = document.createElement('div');
    bar.className = 'progress-bar';
    bar.innerHTML = '<div class="progress-fill" id="progress-fill"></div>';
    document.body.appendChild(bar);
    updateProgressUI();
  }
});

/* Export for other scripts */
window.ESC = {
  loadState, saveState, getState, setFlag, hasFlag,
  collectDoc, hasDoc, resetProgress, calcProgress,
  checkAnswer, openModal, closeModal, updateProgressUI
};
