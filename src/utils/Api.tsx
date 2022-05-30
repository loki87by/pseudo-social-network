const BASE_URL = "https://jsonplaceholder.typicode.com";

export function getUsers<T>(): Promise<T | unknown> {
  const uri = `${BASE_URL}/users/`;
  return fetch(uri, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      try {
        if (res.ok) {
          return res.json();
        }
      } catch (e) {
        return e;
      }
    })
    .catch((err) => {
      return Promise.reject(err);
    });
}

export function getPosts<T>(): Promise<T | unknown> {
  const uri = `${BASE_URL}/posts`;
  return fetch(uri, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      try {
        if (res.ok) {
          return res.json();
        }
      } catch (e) {
        return e;
      }
    })
    .catch((err) => {
      return Promise.reject(err);
    });
}

export function getComments<T>(): Promise<T | unknown> {
  const uri = `${BASE_URL}/comments`;
  return fetch(uri, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      try {
        if (res.ok) {
          return res.json();
        }
      } catch (e) {
        return e;
      }
    })
    .catch((err) => {
      return Promise.reject(err);
    });
}

export function saveComments<T>(
  postId: number,
  name: string,
  email: string,
  body: string
): Promise<T | unknown> {
  const uri = `${BASE_URL}/comments`;
  return fetch(uri, {
    method: "POST",
    body: JSON.stringify({
      postId,
      name,
      email,
      body,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => {
      try {
        if (res.ok) {
          return res.json();
        }
      } catch (e) {
        return e;
      }
    })
    .catch((err) => {
      return Promise.reject(err);
    });
}
