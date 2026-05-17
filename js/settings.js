// ===== settings.js =====

requireAuth();

document.addEventListener('DOMContentLoaded', () => {
  const settings = Storage.getSettings();
  syncToggle('darkToggle', settings.darkMode);
  syncToggle('notifToggle', settings.notifications);

  const reminder = document.getElementById('reminderTime');
  if (reminder) reminder.value = settings.reminderTime || '08:00';

  const confirm = document.getElementById('confirmModal');
  if (confirm) {
    confirm.addEventListener('click', e => {
      if (e.target === e.currentTarget) closeConfirm();
    });
  }
});

function syncToggle(id, enabled) {
  const el = document.getElementById(id);
  if (el) el.classList.toggle('on', !!enabled);
}

function toggleSetting(key, el) {
  const settings = Storage.getSettings();
  settings[key] = !settings[key];
  Storage.saveSettings(settings);
  if (el) el.classList.toggle('on', !!settings[key]);

  if (key === 'darkMode') applyTheme(settings.darkMode);
  showToast(`${labelFor(key)} ${settings[key] ? 'enabled' : 'disabled'}`);
}

function labelFor(key) {
  return key === 'darkMode' ? 'Dark mode' : 'Notifications';
}

function saveTime() {
  const input = document.getElementById('reminderTime');
  const settings = Storage.getSettings();
  settings.reminderTime = input?.value || '08:00';
  Storage.saveSettings(settings);
  showToast('Reminder time saved');
}

function exportData() {
  const data = {
    user: localStorage.getItem('hb_user') || '',
    habits: Storage.getHabits(),
    settings: Storage.getSettings(),
    exportedAt: new Date().toISOString(),
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'habit-builder-data.json';
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast('Data exported');
}

function confirmReset() {
  document.getElementById('confirmModal')?.classList.add('open');
}

function closeConfirm() {
  document.getElementById('confirmModal')?.classList.remove('open');
}

function resetAll() {
  Storage.clearAll();
  closeConfirm();
  showToast('All data reset', 'error');
  setTimeout(() => window.location.href = 'today.html', 700);
}

function logout() {
  localStorage.removeItem('hb_user');
  window.location.href = 'index.html';
}