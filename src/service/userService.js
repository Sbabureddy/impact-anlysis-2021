export const userAPI = (url) => {
  return fetch(url).then((res) => {
    if (res.ok) return res;
  });
};
