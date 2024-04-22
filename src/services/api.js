import axios from "axios";
 
// 72120400/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
 });

 export default api;