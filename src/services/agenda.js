import axios from "axios";
const baseUrl = "/api/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => {
    return response.data;
  });
};

const deleteNumber = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => {
    return response.data;
  });
};

const update = (id, updateObject) => {
  const request = axios.put(`${baseUrl}/${id}`, updateObject);
  return request.then((response) => {
    return response.data});
};

export default { getAll, create, deleteNumber, update };
