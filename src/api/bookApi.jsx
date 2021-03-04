import axiosClient from "./axiosClient";

const booksApi = {};

booksApi.getMany = (params) => {
  const url = "/books";
  return axiosClient.get(url, { params });
};

booksApi.add = (data) => {
  const url = "/books";
  return axiosClient.post(url, data);
};

booksApi.get = (id) => {
  const url = "/books/" + id;
  return axiosClient.get(url);
};

booksApi.update = (data) => {
  const url = "/books/" + data.id;
  console.log(data.id);
  return axiosClient.put(url, data);
};
booksApi.remvoe = (id) => {
  const url = "/books/" + id;
  return axiosClient.delete(url);
};

export default booksApi;
