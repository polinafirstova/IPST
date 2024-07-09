import React, { useLayoutEffect, useRef, useState } from 'react'
import Input from '../Input'
import Button from '../Button'

export default function AddFolder({ store, setRootFolder, data, setData, modalActiveCreateFolder, setModalActiveCreateFolder }) {
    const [newFolderName, setNewFolderName] = useState('')

    const inputNewFolderNameRef = useRef(null)

    useLayoutEffect(() => {
        if (modalActiveCreateFolder && inputNewFolderNameRef.current) {
            inputNewFolderNameRef.current.focus()
        }
    }, [modalActiveCreateFolder])

    return (
        <>
            <h1 className='font-semibold text-lg'>Новая папка</h1>
            <Input
                ref={inputNewFolderNameRef}
                label='Название папки'
                onChange={e => setNewFolderName(e.target.value)}
                value={newFolderName}
                type='text'
                placeholder={'Введите название папки'}
                onEnterPress={async () => {
                    setModalActiveCreateFolder(false)
                    const response = await store.createFolder(data.id, newFolderName)
                    setData(response)
                    const responseRoot = await store.viewFolder('root')
                    setRootFolder(responseRoot)
                    setNewFolderName('')
                }} />
            <Button
                title={'Создать'}
                onClick={async () => {
                    setModalActiveCreateFolder(false)
                    const response = await store.createFolder(data.id, newFolderName)
                    setData(response)
                    const responseRoot = await store.viewFolder('root')
                    setRootFolder(responseRoot)
                    setNewFolderName('')
                }} />
        </>
    )
}
