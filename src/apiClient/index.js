const apiBase = 'https://aviasales-test-api.kata.academy/';

export const getSearchId = async () => {
  const res = await fetch(`${apiBase}search`).then((res) => {
    if (!res.ok) {
      throw new Error(`${res.status}`);
    }
    return res.json();
  });
  return res;
};

export const getTicketsData = (searchId) => fetch(`${apiBase}tickets?searchId=${searchId}`).then((res) => res.json());
