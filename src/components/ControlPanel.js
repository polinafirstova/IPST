import React, { useLayoutEffect, useRef, useState } from 'react'
import Modal from '../components/Modal'
import AddFolder from './modals/AddFolder'
import AddFile from './modals/AddFile'
import EditFolder from './modals/EditFolder'
import Delete from './modals/Delete'

export default function ControlPanel({ store, path, setRootFolder, data, setData, selectItems, setSelectItems }) {
    const [modalActiveCreateFolder, setModalActiveCreateFolder] = useState(false)
    const [modalActiveCreateFile, setModalActiveCreateFile] = useState(false)
    const [modalActiveEditFolder, setModalActiveEditFolder] = useState(false)
    const [modalActiveDelete, setModalActiveDelete] = useState(false)

    return (
        <div className='border border-gray-200 rounded-lg p-1 w-11/12 md:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row lg:justify-between'>
            <span className='flex flex-row gap-1 cursor-pointer rounded-lg p-1 hover:bg-gray-100'
                onClick={() => setModalActiveCreateFolder(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                </svg>
                Добавить папку
            </span>
            <Modal active={modalActiveCreateFolder} setActive={setModalActiveCreateFolder}>
                <AddFolder store={store} setRootFolder={setRootFolder} data={data} setData={setData} modalActiveCreateFolder={modalActiveCreateFolder} setModalActiveCreateFolder={setModalActiveCreateFolder} />
            </Modal>
            <span className='flex flex-row gap-1 md:justify-self-end cursor-pointer rounded-lg p-1 hover:bg-gray-100'
                onClick={() => setModalActiveCreateFile(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
                Добавить файл
            </span>
            <Modal active={modalActiveCreateFile} setActive={setModalActiveCreateFile}>
                <AddFile store={store} setRootFolder={setRootFolder} data={data} setData={setData} setModalActiveCreateFile={setModalActiveCreateFile} />
            </Modal>
            {selectItems.length > 0 &&
                <>
                    <span className='flex flex-row gap-1 cursor-pointer rounded-lg p-1 hover:bg-gray-100'
                        onClick={() => {
                            setModalActiveDelete(true)
                        }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                        Удалить
                    </span>
                    <Modal active={modalActiveDelete} setActive={setModalActiveDelete}>
                        <Delete store={store} setRootFolder={setRootFolder} path={path} setData={setData} selectItems={selectItems} setSelectItems={setSelectItems} setModalActiveDelete={setModalActiveDelete} />
                    </Modal>
                </>
            }
            {(selectItems.length === 1 & selectItems[0]?.type === 'folder') ?
                <>
                    <span className='flex flex-row gap-1 md:justify-self-end cursor-pointer rounded-lg p-1 hover:bg-gray-100'
                        onClick={() => {
                            setModalActiveEditFolder(true)
                        }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                        </svg>
                        Редактировать
                    </span>
                    <Modal active={modalActiveEditFolder} setActive={setModalActiveEditFolder}>
                        <EditFolder store={store} setRootFolder={setRootFolder} path={path} setData={setData} selectItems={selectItems} setSelectItems={setSelectItems} modalActiveEditFolder={modalActiveEditFolder} setModalActiveEditFolder={setModalActiveEditFolder} />
                    </Modal>
                </>
                : <></>
            }
        </div>
    )
}
