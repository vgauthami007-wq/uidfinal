// ===== habits.js - shared constants & helpers =====

const EMOJIS = [
  '\u{1F3C3}', '\u{1F4DA}', '\u{1F9D8}', '\u{1F4A7}', '\u{1F319}',
  '\u{1F3AF}', '\u{1F4AA}', '\u{1F34E}', '\u270D\uFE0F', '\u{1F3B5}',
  '\u{1F33F}', '\u{1F525}', '\u{1F634}', '\u{1F3CB}\uFE0F', '\u{1F6B4}',
  '\u{1F938}', '\u{1F957}', '\u{1F9E0}', '\u{1F4D6}', '\u{1F3A8}',
];
const COLORS = ['#7C6FE0', '#4ECDC4', '#FF6B6B', '#45B7D1', '#96CEB4', '#F7DC6F', '#BB8FCE', '#98D8C8', '#FD9644', '#A29BFE'];

function todayStr() {
  return new Date().toISOString().split('T')[0];
}

function dateStr(offset = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  return d.toISOString().split('T')[0];
}

function getWeekDays() {
  const days = [];
  for (let i = -3; i <= 3; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);
    days.push({
      date: d.toISOString().split('T')[0],
      dayName: d.toLocaleDateString('en-US', { weekday: 'short' }),
      dayNum: d.getDate(),
      isToday: i === 0,
    });
  }
  return days;
}

function goPage(page) {
  window.location.href = page;
}

function showToast(msg, type = 'success') {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = msg;
  toast.className = 'toast show' + (type === 'error' ? ' error' : '');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => {
    toast.className = 'toast';
  }, 2600);
}

function requireAuth() {
  if (!localStorage.getItem('hb_user')) {
    window.location.href = 'index.html';
  }
}
