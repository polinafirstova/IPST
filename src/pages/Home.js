import React, { useContext, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '..'
import { Navigate } from 'react-router-dom'
import ControlPanel from '../components/ControlPanel'
import Path from '../components/Path'
import Workspace from '../components/Workspace'

export default observer(function Home() {
    const { store } = useContext(Context)

    const [data, setData] = useState(null)
    const [rootFolder, setRootFolder] = useState(null)
    const [path, setPath] = useState([])
    const [selectItems, setSelectItems] = useState([])

    useEffect(() => {
        async function viewFolder() {
            const response = await store.viewFolder('root')
            setData(response)
        }

        async function viewRootFolder() {
            const response = await store.viewFolder('root')
            setRootFolder(response)
        }

        async function rootPath() {
            setPath([...path, rootFolder])
        }

        if (store.isAuth && !data) {
            viewFolder()
        }

        if (store.isAuth && !rootFolder) {
            viewRootFolder()
        }

        if (rootFolder && path.length === 0) {
            rootPath()
        }
    }, [store.isAuth, data, rootFolder, path])

    if (!store.isAuth) {
        return <Navigate to='/authorisation' />
    }

    if (store.isLoading) {
        return <div className='flex items-center justify-center h-screen'>Загрузка...</div>
    }

    return (
        <div className='flex flex-col gap-3 items-center justify-center h-screen w-full'>
            <Path store={store} path={path} setPath={setPath} setData={setData} />
            <ControlPanel store={store} path={path} setRootFolder={setRootFolder} data={data} setData={setData} selectItems={selectItems} setSelectItems={setSelectItems} />
            <Workspace store={store} data={data} setData={setData} path={path} setPath={setPath} selectItems={selectItems} setSelectItems={setSelectItems} />
        </div >
    )
})
