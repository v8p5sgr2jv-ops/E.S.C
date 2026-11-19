/**
 * Pictogram definitions and rendering for NO ENTRY
 */

const PICTOGRAMS = [
  {
    id: 'ESC-001',
    name: '背後確認禁止',
    category: '禁止',
    status: 'active',
    statusLabel: '有効',
    enacted: '1986-04-12',
    author: '技術部門',
    condition: '巡回中または単独作業中に、背後を振り返る行為を禁止する。',
    basis: '1964年以降の複数事故記録において、振り返り行動と異常認識の相関が指摘されたため。',
    history: '制定以降、適用施設での「背後からの声」報告件数が減少。ただし因果関係は未確定。',
    notes: '伝承「山の数え歌」との類似性が社内で議論されたことがある。',
    svg: `
      <svg viewBox="0 0 100 100" class="picto-svg" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="22" r="12" fill="none" stroke="#a32020" stroke-width="3"/>
        <rect x="38" y="36" width="24" height="32" fill="none" stroke="#a32020" stroke-width="3"/>
        <line x1="38" y1="48" x2="22" y2="62" stroke="#a32020" stroke-width="3"/>
        <line x1="62" y1="48" x2="78" y2="62" stroke="#a32020" stroke-width="3"/>
        <line x1="42" y1="68" x2="35" y2="90" stroke="#a32020" stroke-width="3"/>
        <line x1="58" y1="68" x2="65" y2="90" stroke="#a32020" stroke-width="3"/>
        <!-- arrow pointing back, crossed -->
        <path d="M50 8 L50 2 M45 6 L50 2 L55 6" fill="none" stroke="#a32020" stroke-width="2.5"/>
        <line x1="20" y1="20" x2="80" y2="80" stroke="#a32020" stroke-width="4"/>
      </svg>`
  },
  {
    id: 'ESC-014',
    name: '開扉禁止',
    category: '禁止',
    status: 'active',
    statusLabel: '有効',
    enacted: '1987-09-03',
    author: '安全管理部門',
    condition: '指示なく扉を開けてはならない。特に夜間および人員不足時。',
    basis: '存在しないはずの部屋への出入口が記録された事例への対策。',
    history: '適用後も「開いていた扉」報告は断続的に存在。',
    notes: '',
    svg: `
      <svg viewBox="0 0 100 100" class="picto-svg" xmlns="http://www.w3.org/2000/svg">
        <rect x="28" y="18" width="44" height="64" fill="none" stroke="#a32020" stroke-width="3"/>
        <line x1="28" y1="18" x2="72" y2="18" stroke="#a32020" stroke-width="3"/>
        <circle cx="62" cy="50" r="3" fill="#a32020"/>
        <line x1="20" y1="20" x2="80" y2="80" stroke="#a32020" stroke-width="4"/>
      </svg>`
  },
  {
    id: 'ESC-027',
    name: '単独行動禁止',
    category: '禁止',
    status: 'active',
    statusLabel: '有効',
    enacted: '1986-04-12',
    author: '安全管理部門',
    condition: '施設内での単独巡回・単独作業を禁止する。最低2名で行動すること。',
    basis: '人数の食い違いが報告された複数事例。',
    history: '遵守率の高い班では行方不明事案が報告されていない。',
    notes: 'ただし「2名で出発し3名で帰還した」記録も存在する。',
    svg: `
      <svg viewBox="0 0 100 100" class="picto-svg" xmlns="http://www.w3.org/2000/svg">
        <circle cx="35" cy="28" r="10" fill="none" stroke="#a32020" stroke-width="2.5"/>
        <rect x="27" y="40" width="16" height="26" fill="none" stroke="#a32020" stroke-width="2.5"/>
        <line x1="27" y1="50" x2="16" y2="62" stroke="#a32020" stroke-width="2.5"/>
        <line x1="43" y1="50" x2="50" y2="58" stroke="#a32020" stroke-width="2.5"/>
        <line x1="30" y1="66" x2="26" y2="85" stroke="#a32020" stroke-width="2.5"/>
        <line x1="40" y1="66" x2="44" y2="85" stroke="#a32020" stroke-width="2.5"/>
        <!-- second figure faded / crossed -->
        <circle cx="68" cy="28" r="10" fill="none" stroke="#a32020" stroke-width="2" opacity="0.4"/>
        <rect x="60" y="40" width="16" height="26" fill="none" stroke="#a32020" stroke-width="2" opacity="0.4"/>
        <line x1="20" y1="20" x2="80" y2="80" stroke="#a32020" stroke-width="4"/>
      </svg>`
  },
  {
    id: 'ESC-031',
    name: '空席維持',
    category: '保護',
    status: 'stopped',
    statusLabel: '使用停止',
    enacted: '1989-02-18',
    author: '記録管理部門',
    condition: '食事・休憩時に、意図的に一つ空席を残す。',
    basis: '民間伝承「空席の食卓」および複数の施設内記録との照合結果。',
    history: '2003年の部門解体時に使用停止。根拠資料の一部が欠落。',
    notes: '制定者メモ：「誰のための席か、定義しないこと。」',
    svg: `
      <svg viewBox="0 0 100 100" class="picto-svg" xmlns="http://www.w3.org/2000/svg">
        <rect x="18" y="42" width="64" height="8" fill="none" stroke="#1a4a7a" stroke-width="2.5"/>
        <!-- three chairs -->
        <rect x="22" y="52" width="14" height="18" fill="none" stroke="#1a4a7a" stroke-width="2"/>
        <rect x="43" y="52" width="14" height="18" fill="none" stroke="#1a4a7a" stroke-width="2" stroke-dasharray="3 2"/>
        <rect x="64" y="52" width="14" height="18" fill="none" stroke="#1a4a7a" stroke-width="2"/>
        <!-- people on sides -->
        <circle cx="29" cy="30" r="7" fill="none" stroke="#1a4a7a" stroke-width="2"/>
        <circle cx="71" cy="30" r="7" fill="none" stroke="#1a4a7a" stroke-width="2"/>
      </svg>`
  },
  {
    id: 'ESC-044',
    name: '人数照合',
    category: '保護',
    status: 'active',
    statusLabel: '有効',
    enacted: '1986-11-05',
    author: '安全管理部門',
    condition: '出入口通過時および作業終了時に、人数を声に出して照合する。記録と一致させる。',
    basis: '退勤記録と実人数の不一致事例への対応。',
    history: '有効とされているが、「記録上の人数が実在を超える」事例は継続。',
    notes: '',
    svg: `
      <svg viewBox="0 0 100 100" class="picto-svg" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30" cy="30" r="9" fill="none" stroke="#1a4a7a" stroke-width="2.5"/>
        <rect x="23" y="41" width="14" height="22" fill="none" stroke="#1a4a7a" stroke-width="2.5"/>
        <circle cx="50" cy="30" r="9" fill="none" stroke="#1a4a7a" stroke-width="2.5"/>
        <rect x="43" y="41" width="14" height="22" fill="none" stroke="#1a4a7a" stroke-width="2.5"/>
        <circle cx="70" cy="30" r="9" fill="none" stroke="#1a4a7a" stroke-width="2.5"/>
        <rect x="63" y="41" width="14" height="22" fill="none" stroke="#1a4a7a" stroke-width="2.5"/>
        <text x="50" y="88" text-anchor="middle" font-size="14" font-family="monospace" fill="#1a4a7a">3</text>
      </svg>`
  },
  {
    id: 'ESC-052',
    name: '帰路確認禁止',
    category: '禁止',
    status: 'stopped',
    statusLabel: '使用停止',
    enacted: '1991-07-22',
    author: '特殊環境安全対策部門（当時）',
    condition: '帰り道が分からなくなった場合、来た道を探してはならない。その場に留まる。',
    basis: '伝承「帰らずの道」および施設内での道順混乱事例。',
    history: '2003年に使用停止。一部の現場では口頭で継承されている。',
    notes: '制定時の議論録は非公開。',
    svg: `
      <svg viewBox="0 0 100 100" class="picto-svg" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 70 Q50 20 80 70" fill="none" stroke="#a32020" stroke-width="3"/>
        <circle cx="50" cy="55" r="10" fill="none" stroke="#a32020" stroke-width="2.5"/>
        <rect x="43" y="65" width="14" height="18" fill="none" stroke="#a32020" stroke-width="2.5"/>
        <line x1="25" y1="25" x2="75" y2="75" stroke="#a32020" stroke-width="3.5"/>
      </svg>`
  },
  {
    id: 'ESC-063',
    name: '記録との照合禁止',
    category: '未分類',
    status: 'unapproved',
    statusLabel: '未承認',
    enacted: '1997-12-01（提案）',
    author: '水野（標識設計）',
    condition: '記憶と記録が矛盾した場合、記録を優先して修正してはならない。',
    basis: '提案書のみ存在。正式制定プロセスを経ていない。',
    history: '未承認のまま提案書類が残されている。',
    notes: '「記録が現実を上書きすることを防ぐため」とメモされている。',
    svg: `
      <svg viewBox="0 0 100 100" class="picto-svg" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="20" width="50" height="60" fill="none" stroke="#666" stroke-width="2.5"/>
        <line x1="32" y1="35" x2="68" y2="35" stroke="#666" stroke-width="2"/>
        <line x1="32" y1="48" x2="60" y2="48" stroke="#666" stroke-width="2"/>
        <line x1="32" y1="61" x2="55" y2="61" stroke="#666" stroke-width="2"/>
        <line x1="20" y1="20" x2="80" y2="80" stroke="#666" stroke-width="3"/>
      </svg>`
  },
  {
    id: 'ESC-■■■',
    name: '帰還標識',
    category: '未分類',
    status: 'unregistered',
    statusLabel: '未登録',
    enacted: '1998-11-17',
    author: '水野',
    condition: '不明',
    basis: '第六管理区事故当日、管理室に残された図面。',
    history: '使用実績の公式記録なし。',
    notes: '二人の人物。一方はこちらを向き、もう一方は向いていない。',
    locked: true,
    svg: `
      <svg viewBox="0 0 100 100" class="picto-svg" xmlns="http://www.w3.org/2000/svg">
        <!-- left figure facing us (full) -->
        <circle cx="32" cy="28" r="11" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
        <rect x="23" y="42" width="18" height="28" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
        <line x1="23" y1="52" x2="12" y2="68" stroke="#1a1a1a" stroke-width="2.5"/>
        <line x1="41" y1="52" x2="48" y2="64" stroke="#1a1a1a" stroke-width="2.5"/>
        <line x1="27" y1="70" x2="22" y2="90" stroke="#1a1a1a" stroke-width="2.5"/>
        <line x1="37" y1="70" x2="42" y2="90" stroke="#1a1a1a" stroke-width="2.5"/>
        <!-- right figure turned away (back) -->
        <circle cx="70" cy="28" r="11" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
        <rect x="61" y="42" width="18" height="28" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
        <line x1="61" y1="52" x2="54" y2="64" stroke="#1a1a1a" stroke-width="2.5"/>
        <line x1="79" y1="52" x2="88" y2="68" stroke="#1a1a1a" stroke-width="2.5"/>
        <line x1="65" y1="70" x2="60" y2="90" stroke="#1a1a1a" stroke-width="2.5"/>
        <line x1="75" y1="70" x2="80" y2="90" stroke="#1a1a1a" stroke-width="2.5"/>
        <!-- small mark indicating "facing away" -->
        <line x1="66" y1="24" x2="74" y2="24" stroke="#1a1a1a" stroke-width="2"/>
      </svg>`
  }
];

function statusClass(status) {
  return {
    active: 'status-active',
    stopped: 'status-stopped',
    unapproved: 'status-unapproved',
    unregistered: 'status-unregistered'
  }[status] || '';
}

function renderGrid() {
  const grid = document.getElementById('picto-grid');
  if (!grid) return;

  const unlocked000 = ESC.hasFlag('reconstructed_000');

  grid.innerHTML = PICTOGRAMS.map(p => {
    const isLocked = p.locked && !unlocked000;
    return `
      <div class="picto-card ${isLocked ? 'locked' : ''}" data-id="${p.id}" ${isLocked ? '' : `onclick="showDetail('${p.id}')"`}>
        ${isLocked ? '<div style="height:96px;display:flex;align-items:center;justify-content:center;color:#999;font-size:0.8rem;">未登録</div>' : p.svg}
        <div class="picto-id">${p.id}</div>
        <div class="picto-name">${isLocked ? '？？？' : p.name}</div>
        <div class="picto-status ${statusClass(p.status)}">${isLocked ? '未登録' : p.statusLabel}</div>
      </div>`;
  }).join('');

  // Notice missing
  if (!unlocked000) {
    const notice = document.getElementById('missing-notice');
    if (notice) notice.style.display = 'block';
    ESC.setFlag('visited_pictograms');
    // If user looks carefully they notice 000 is missing → set noticed
    ESC.setFlag('noticed_missing');
  }
}

function showDetail(id) {
  const p = PICTOGRAMS.find(x => x.id === id);
  if (!p) return;
  if (p.locked && !ESC.hasFlag('reconstructed_000')) return;

  const panel = document.getElementById('detail-panel');
  document.getElementById('detail-svg').innerHTML = p.svg;
  document.getElementById('detail-title').textContent = `${p.id}　${p.name}`;
  document.getElementById('detail-meta').innerHTML = `
    <li><strong>分類</strong> ${p.category}</li>
    <li><strong>状態</strong> ${p.statusLabel}</li>
    <li><strong>制定日</strong> ${p.enacted}</li>
    <li><strong>制定者</strong> ${p.author}</li>
  `;
  document.getElementById('detail-body').innerHTML = `
    <p><strong>適用条件</strong><br>${p.condition}</p>
    <p class="mt-2"><strong>根拠資料</strong><br>${p.basis}</p>
    <p class="mt-2"><strong>使用履歴</strong><br>${p.history}</p>
    ${p.notes ? `<p class="mt-2 muted small">${p.notes}</p>` : ''}
  `;
  panel.classList.add('visible');
  panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  if (id === 'ESC-000') {
    ESC.setFlag('found_esc000_desc');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderGrid();
});
