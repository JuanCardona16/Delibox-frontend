export const persistLocalStorage = <T,>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
}

export const clearLocalStorage = (value: string) => {
  localStorage.removeItem(value)
}

export const getLocalStorage = (key: string) => {
  const item = localStorage.getItem(key)
  return item
}
