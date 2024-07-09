import React from 'react'

export default function Path({ store, path, setPath, setData }) {
    return (
        <ul className='flex flex-col md:flex-row md:items-center md:flex-wrap border border-gray-200 rounded-lg p-1 gap w-11/12 md:w-2/3 max-w-screen-xl'>
            <li className='p-1'>Текущее расположение:</li>
            {path.map((el, i) => {
                return <div className='flex flex-row items-center justify-start p-1 gap-2 justify-self-start'>
                    <li>/</li>
                    <li key={i} className='cursor-pointer py-1 hover:underline hover:underline-offset-2'
                        onClick={async () => {
                            const response = await store.viewFolder(el.id)
                            setData(response)
                            setPath(path.slice(0, i + 1))
                        }}>
                        {el.name}</li>
                </div>
            }
            )}
        </ul>
    )
}
