import { makeAutoObservable } from 'mobx'
import AuthService from "../service/AuthService";
import FoldersFilesService from '../service/FoldersFilesService';

export default class Store {
    isAuth = false
    isLoading = false

    constructor() {
        makeAutoObservable(this)
        this.checkAuth()
    }

    setAuth(bool) {
        this.isAuth = bool
    }

    setLoading(bool) {
        this.isLoading = bool
    }

    checkAuth() {
        const token = localStorage.getItem('token')
        if (token) {
            this.setAuth(true)
        }
    }

    async login(login, password) {
        this.setLoading(true)
        try {
            const response = await AuthService.login(login, password)
            localStorage.setItem('token', response.data.token)
            this.setAuth(true)
        } catch (e) {
            console.log(e.response)
        } finally {
            this.setLoading(false)
        }
    }

    async registration(login, password) {
        this.setLoading(true)
        try {
            const response = await AuthService.registration(login, password)
            localStorage.setItem('token', response.data.token)
            this.setAuth(true)
        } catch (e) {
            console.log(e.response)
        } finally {
            this.setLoading(false)
        }
    }

    async logout() {
        try {
            localStorage.removeItem('token')
            this.setAuth(false)
        } catch (e) {
            console.log(e.response)
        }
    }

    async uploadFile(folderId, file) {
        try {
            await FoldersFilesService.uploadFile(folderId, file)
            return this.viewFolder(folderId)
        } catch (e) {
            console.log(e.response)
        }
    }

    async deleteFile(fileId, folderId) {
        try {
            await FoldersFilesService.deleteFile(fileId)
            return this.viewFolder(folderId)
        } catch (e) {
            console.log(e.response)
        }
    }

    async viewFolder(id) {
        try {
            const response = await FoldersFilesService.viewFolder(id)
            return (response.data.data)
        } catch (e) {
            console.log(e.response)
        }
    }

    async editFolder(id, name, parentId) {
        try {
            await FoldersFilesService.editFolder(id, name)
            return this.viewFolder(parentId)
        } catch (e) {
            console.log(e.response)
        }
    }

    async moveFolder(id, parentId, grandParentId) {
        try {
            await FoldersFilesService.moveFolder(id, parentId)
            return this.viewFolder(grandParentId)
        } catch (e) {
            console.log(e.response?.data)
        }
    }

    async deleteFolder(id, parentId) {
        try {
            await FoldersFilesService.deleteFolder(id)
            return this.viewFolder(parentId)
        } catch (e) {
            console.log(e.response?.data)
        }
    }

    async createFolder(parentId, name) {
        try {
            await FoldersFilesService.createFolder(parentId, name)
            const response = this.viewFolder(parentId)
            return response
        } catch (e) {
            console.log(e.response?.data)
        }
    }
}