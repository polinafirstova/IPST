import React, { useLayoutEffect, useRef, useState } from 'react'
import Input from '../Input'
import Button from '../Button'

export default function EditFolder({ store, setRootFolder, path, setData, selectItems, setSelectItems, modalActiveEditFolder, setModalActiveEditFolder }) {
    const [editFolderName, setEditFolderName] = useState(selectItems[0].name)

    const inputEditFolderNameRef = useRef(null)

    useLayoutEffect(() => {
        if (modalActiveEditFolder && inputEditFolderNameRef.current) {
            inputEditFolderNameRef.current.focus()
        }
    }, [modalActiveEditFolder])

    return (
        <>
            <h1 className='font-semibold text-lg'>Редактировать</h1>
            <Input
                ref={inputEditFolderNameRef}
                label='Название папки'
                onChange={e => setEditFolderName(e.target.value)}
                value={editFolderName}
                type='text'
                placeholder={'Введите название папки'}
                onEnterPress={async () => {
                    setModalActiveEditFolder(false)
                    const response = await store.editFolder(selectItems[0].id, editFolderName, path[path.length - 1].id)
                    setData(response)
                    const responseRoot = await store.viewFolder('root')
                    setRootFolder(responseRoot)
                    setEditFolderName('')
                }} />
            <Button
                title={'Редактировать'}
                onClick={async () => {
                    setModalActiveEditFolder(false)
                    const response = await store.editFolder(selectItems[0].id, editFolderName, path[path.length - 1].id)
                    setData(response)
                    const responseRoot = await store.viewFolder('root')
                    setRootFolder(responseRoot)
                    setEditFolderName('')
                    setSelectItems([])
                }} />
        </>
    )
}
