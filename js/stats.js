// ===== stats.js =====

requireAuth();

let statsRange = 7;

document.addEventListener('DOMContentLoaded', () => {
  renderStats();
});

function habitsForStats() {
  return Storage.getHabits();
}

function completionCount(habits, date) {
  return habits.filter(h => h.completions && h.completions[date]).length;
}

function renderStats() {
  const habits = habitsForStats();
  const today = todayStr();
  const total = habits.length;
  const completed = completionCount(habits, today);
  const totalPossible = total * statsRange;
  let totalDone = 0;

  for (let i = statsRange - 1; i >= 0; i--) {
    totalDone += completionCount(habits, dateStr(-i));
  }

  const rate = totalPossible ? Math.round((totalDone / totalPossible) * 100) : 0;
  const best = habits.reduce((max, h) => Math.max(max, h.streak || 0), 0);

  setText('totalHabits', total);
  setText('completedToday', completed);
  setText('successRate', `${rate}%`);
  setText('bestStreak', `${best}d`);

  renderBarChart(habits);
  renderHeatmap(habits);
  renderStreakList(habits);
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function setRange(days, el) {
  statsRange = days;
  document.querySelectorAll('.range-tab').forEach(tab => tab.classList.remove('active'));
  if (el) el.classList.add('active');
  renderStats();
}

function renderBarChart(habits) {
  const chart = document.getElementById('barChart');
  const labels = document.getElementById('barLabels');
  if (!chart || !labels) return;

  chart.innerHTML = '';
  labels.innerHTML = '';

  const max = Math.max(1, habits.length);
  for (let i = statsRange - 1; i >= 0; i--) {
    const date = dateStr(-i);
    const count = completionCount(habits, date);
    const pct = Math.max(6, Math.round((count / max) * 100));
    const isToday = i === 0;
    const d = new Date(date + 'T00:00:00');

    const col = document.createElement('div');
    col.className = 'bar-col';
    col.title = `${count} completed on ${date}`;
    col.innerHTML = `
      <div class="bar-val">${count}</div>
      <div class="bar-fill${isToday ? ' today-bar' : ''}" style="height:${pct}%"></div>
    `;
    chart.appendChild(col);

    const label = document.createElement('div');
    label.className = `bar-label${isToday ? ' today' : ''}`;
    label.textContent = d.toLocaleDateString('en-US', { weekday: 'short' }).slice(0, 1);
    labels.appendChild(label);
  }
}

function renderHeatmap(habits) {
  const heatmap = document.getElementById('heatmap');
  if (!heatmap) return;

  heatmap.innerHTML = '';
  const max = Math.max(1, habits.length);

  for (let i = 27; i >= 0; i--) {
    const date = dateStr(-i);
    const count = completionCount(habits, date);
    const level = count === 0 ? 0 : Math.ceil((count / max) * 4);
    const cell = document.createElement('div');
    cell.className = `heat-cell${level ? ` h${level}` : ''}`;
    cell.title = `${count} completed on ${date}`;
    heatmap.appendChild(cell);
  }
}

function renderStreakList(habits) {
  const list = document.getElementById('streakList');
  if (!list) return;

  list.innerHTML = '';
  const sorted = [...habits].sort((a, b) => (b.streak || 0) - (a.streak || 0));

  if (!sorted.length) {
    list.innerHTML = '<p class="ai-placeholder">No habits yet.</p>';
    return;
  }

  sorted.slice(0, 5).forEach((habit, index) => {
    const row = document.createElement('div');
    row.className = 'streak-row';
    row.innerHTML = `
      <div class="streak-rank">${index + 1}</div>
      <div style="font-size:22px">${habit.emoji}</div>
      <div class="streak-info">
        <div class="streak-name">${escapeHTML(habit.name)}</div>
      </div>
      <div class="streak-val">${habit.streak || 0}d</div>
    `;
    list.appendChild(row);
  });
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }[char]));
}