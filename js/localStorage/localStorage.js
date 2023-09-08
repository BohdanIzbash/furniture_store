export function saveToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getLocalStorageData(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function removeLocalStorage(key) {
  return localStorage.removeItem(key);
}
