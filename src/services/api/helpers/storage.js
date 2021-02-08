export const storeData = (key, value) => {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (e) {
    return null;
  }
};

export const getData = async (key) => {
  try {
    const value = localStorage.getItem(key);
    return value;
  } catch (e) {
    return null;
  }
};

export const deleteData = async (key) => {
  try {
    const value = localStorage.removeItem(key);
    return value;
  } catch (e) {
    return null;
  }
};
