import axios from "axios";
import apiEndpoint from "./endpoint";

/**
 * makes POST request to /backend/property with property
 **/

export function addProperty(property) {
  return axios
    .post(`${apiEndpoint}/property`, property)
    .then((r) => {
      return Promise.resolve(r.data);
    })
    .catch((err) => {
      return Promise.resolve(err.response.data);
    });
}

export function updateProperty(propertyId, property)

export function deleteProperty(propertyId)