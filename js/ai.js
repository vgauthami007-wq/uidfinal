// ===== ai.js =====

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }[char]));
}

async function getAITip() {
  const btn = document.getElementById('aiBtn');
  const body = document.getElementById('aiBody');
  if (!btn || !body) return;

  btn.disabled = true;
  btn.textContent = 'Thinking...';
  body.innerHTML = '<p class="ai-placeholder">Analyzing your habits...</p>';

  const habits = Storage.getHabits();
  const bestHabit = habits.reduce((best, habit) => (
    habit.streak > (best?.streak || 0) ? habit : best
  ), null);
  const incomplete = habits.find(h => !h.completions[todayStr()]);

  const tips = habits.length
    ? [
        bestHabit
          ? `Protect your "${bestHabit.name}" streak by doing the smallest useful version on busy days.`
          : 'Pick one habit and make it easy enough to finish even on a low-energy day.',
        incomplete
          ? `Put "${incomplete.name}" next to something you already do today so it has a natural trigger.`
          : 'You finished everything today, so write down what made today work and repeat it tomorrow.',
        'Keep the first two minutes friction-free: prepare the book, bottle, shoes, or workspace before you need it.',
      ]
    : [
        'Start with one habit you can finish in under two minutes.',
        'Attach it to an existing routine, like after brushing your teeth or before breakfast.',
        'Track daily, but judge progress weekly so one missed day does not break momentum.',
      ];

  body.innerHTML = `<ol class="ai-text">${tips.map(t => `<li>${escapeHTML(t)}</li>`).join('')}</ol>`;
  btn.disabled = false;
  btn.textContent = 'Refresh Tips';
}
