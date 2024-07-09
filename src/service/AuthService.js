import axios from "axios";

const API_URL = `http://212.113.102.189:7000`

export default class AuthService {
    static async login(login, password) {
        return axios.post(`${API_URL}/auth/login`, { login, password })
    }

    static async registration(login, password) {
        return axios.post(`${API_URL}/auth/register`, { login, password })
    }
}