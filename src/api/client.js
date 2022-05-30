import axios from "axios";

const client = axios.create({baseURL: "https://n37-backend-api.herokuapp.com/api/"});

export default client;