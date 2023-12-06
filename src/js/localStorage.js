function saveTolS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getFromLS(key) {
  const data = localStorage.getItem(key);
  try {
    return JSON.parse(data);
  } catch {
    return data;
  }
}

export { saveTolS, getFromLS };

// const data = getFromLS(KEY) || { email: '', message: '' };
