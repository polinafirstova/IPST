import axios from "axios";

const API_URL = `http://212.113.102.189:7000`

export default class FoldersFilesService {
    static async uploadFile(folderId, file) {
        return axios.post(`${API_URL}/drive/files`, { folderId, file }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'multipart/form-data'
            }
        })
    }

    static async deleteFile(id) {
        return axios.delete(`${API_URL}/drive/files/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
    }

    static async viewFolder(id) {
        return axios.get(`${API_URL}/drive/folder/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
    }

    static async editFolder(id, name) {
        return axios.patch(`${API_URL}/drive/folder/${id}`, { name }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            }
        })
    }

    static async moveFolder(id, parentId) {
        return axios.patch(`${API_URL}/drive/folder/${id}`, { parentId }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            }
        })
    }

    static async deleteFolder(id) {
        return axios.delete(`${API_URL}/drive/folder/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
    }

    static async createFolder(parentId, name) {
        return axios.post(`${API_URL}/drive/folder`, { parentId, name }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            }
        })
    }
}