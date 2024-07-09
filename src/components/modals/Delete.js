import React from 'react'
import Button from '../Button'

export default function Delete({ store, setRootFolder, path, setData, selectItems, setSelectItems, setModalActiveDelete }) {
    return (
        <>
            Вы действительно хотите удалить выбранные элементы?
            <ul className='flex flex-col gap-2'>
                {selectItems.map(el => {
                    return <li key={el.name} className='text-gray-700 flex flex-row justify-between gap-2'>
                        {el.type === 'folder' ? el.name : el.file.name}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 cursor-pointer"
                            onClick={() => {
                                setSelectItems(selectItems.filter(element => element.name !== el.name))
                            }}>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </li>
                })}
            </ul>
            <Button
                title={'Удалить'}
                onClick={async () => {
                    setModalActiveDelete(false)
                    selectItems.forEach(async el => {
                        if (el.type === 'folder') {
                            const response = await store.deleteFolder(el.id, path[path.length - 1].id)
                            setData(response)
                        } else {
                            console.log(el, path[path.length - 1])
                            const response = await store.deleteFile(el.id, path[path.length - 1].id)
                            setData(response)
                        }
                    })
                    const responseRoot = await store.viewFolder('root')
                    setRootFolder(responseRoot)
                    setSelectItems([])
                }} />
        </>
    )
}
