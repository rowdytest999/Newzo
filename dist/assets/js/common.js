// Common utilities used across pages

function escapeHtml(text) {
  if (!text && text !== 0) return '';
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getDeviceId() {
  const key = 'newzo_device_id_v1';
  let id = localStorage.getItem(key);
  if (!id) {
    id = 'd_' + Math.random().toString(36).substr(2, 12) + Date.now().toString(36);
    localStorage.setItem(key, id);
  }
  return id;
}

function timeAgo(date) {
  if (!date) return '';
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  const intervals = [
    { label: 'yr', sec: 31536000 },
    { label: 'mo', sec: 2592000 },
    { label: 'd', sec: 86400 },
    { label: 'h', sec: 3600 },
    { label: 'm', sec: 60 },
    { label: 's', sec: 1 }
  ];
  for (const i of intervals) {
    const v = Math.floor(seconds / i.sec);
    if (v >= 1) {
      return `${v}${i.label} ago`;
    }
  }
  return 'just now';
}
