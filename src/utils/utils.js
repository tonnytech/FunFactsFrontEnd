export const baseUrl = "http://127.0.0.1:8080";

export const setLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error setting localStorage item [${key}]:`, error);
  }
};

export const getLocalStorage = (key) => {
  try {
    const value = localStorage.getItem(key);
    return value && value !== undefined ? JSON.parse(value) : "";
  } catch (error) {
    console.error(`Error getting localStorage item [${key}]:`, error);
    return "";
  }
};