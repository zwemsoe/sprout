const PREFIX = "sprout-";

export const updateLocalStorage = (key, value) => {
  const prefixKey = PREFIX + key;
  const existingKey = localStorage.getItem(prefixKey);
  if (existingKey !== null) {
    localStorage.removeItem(prefixKey);
  }
  localStorage.setItem(prefixKey, JSON.stringify(value));
};

export const getLocalStorage = (key) => {
  const prefixKey = PREFIX + key;
  return JSON.parse(localStorage.getItem(prefixKey));
};

export const removeLocalStorage = (key) => {
  const prefixKey = PREFIX + key;
  localStorage.removeItem(prefixKey);
};
