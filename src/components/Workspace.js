import React, { useState } from 'react'

export default function Workspace({ store, data, setData, path, setPath, selectItems, setSelectItems }) {
    const [dragItems, setDragItems] = useState([])

    function selectItem(item) {
        if (selectItems.includes(item)) {
            setSelectItems(selectItems.filter(el => el !== item))
        } else {
            setSelectItems([...selectItems, item])
        }
    }

    async function openFolder(folder) {
        const response = await store.viewFolder(folder.id)
        setData(response)
        setPath([...path, folder])
        setSelectItems([])
    }

    function handleDragStart(e) {
        setDragItems([...selectItems.filter(item => item.type === 'folder')])
        e.dataTransfer.setData('application/reactflow', JSON.stringify(dragItems))
        e.dataTransfer.effectAllowed = 'move'
    }

    function handleDragOver(e) {
        e.preventDefault()
        e.dataTransfer.dropEffect = 'move'
    }

    function handleDragEnd() {
        setDragItems([])
    }

    async function handleDrop(e, item) {
        e.preventDefault()
        dragItems.forEach(async el => {
            const response = await store.moveFolder(el.id, item.id, path[path.length - 1].id)
            setData(response)
        })
        setDragItems([])
        setSelectItems([])
    }

    return (
        <ul className='flex flex-col border border-gray-200 rounded-lg p-1 gap-2 w-11/12 md:w-2/3 max-w-screen-xl'>
            {(!data || data?.name !== 'root') &&
                <li className='cursor-pointer p-1 rounded-lg flex flex-row gap-2 hover:bg-gray-100'
                    draggable={true}
                    onDragOver={(e) => handleDragOver(e, path[path.length - 2])}
                    onDrop={(e) => { handleDrop(e, path[path.length - 2]) }}
                    onClick={async () => {
                        const response = await store.viewFolder(path[path.length - 2].id)
                        setData(response)
                        setPath(path.slice(0, path.length - 1))
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                    </svg>
                    . .
                </li>}
            {
                data?.children?.map(el => {
                    const isSelected = selectItems.includes(el)
                    const isDragged = dragItems.includes(el)
                    if (el.type === 'folder') {
                        return (
                            <li key={el.id} id={el.id}
                                draggable={isSelected}
                                onDragStart={isSelected ? (e) => handleDragStart(e, el) : null}
                                onDragEnd={handleDragEnd}
                                onDragOver={!isSelected ? (e) => handleDragOver(e, el) : null}
                                onDrop={!isSelected ? (e) => handleDrop(e, el) : null}
                                className={`cursor-pointer p-1 rounded-lg hover:bg-gray-100 ${isSelected && 'bg-gray-200 hover:bg-gray-200'} ${isDragged ? 'cursor-not-allowed' : (dragItems.length > 0) ? 'cursor-copy' : 'cursor-default'}}`}
                                onClick={() => {
                                    selectItem(el)
                                }}>
                                <span
                                    className={`flex flex-row gap-2 w-fit hover:underline hover:underline-offset-2`}
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        openFolder(el)
                                    }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                                    </svg>
                                    {el.name}
                                </span>
                            </li>
                        )
                    } else {
                        return (
                            <li key={el.id}
                                className={`cursor-pointer p-1 rounded-lg hover:bg-gray-100 ${isSelected && 'bg-gray-200 hover:bg-gray-200'}`}
                                onClick={() => {
                                    selectItem(el)
                                }}>
                                <span className='flex flex-row gap-2 w-fit hover:underline hover:underline-offset-2 transi'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                    </svg>
                                    {el.file.name}
                                </span>
                            </li>
                        )
                    }
                })}
        </ul >
    )
}
