import axios from "axios";

const client = axios.create({baseURL: "https://diydaily-blog-admin.netlify.app/api/"});

export default client;