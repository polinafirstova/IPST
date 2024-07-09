import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite'
import { Context } from '..'

export default observer(function Header() {
    const { store } = useContext(Context)

    return (
        <header className='absolute top-2 left-2 z-10'>
            {!store.isLoading ?
                <div className='flex flex-row items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                        <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                    </svg>
                    {store.isAuth ?
                        <>
                            <span>
                                Вы авторизованы.
                            </span>
                            <span className='cursor-pointer hover:underline hover:underline-offset-2'
                                onClick={() => { store.logout() }}>
                                Нажмите для выхода.
                            </span>
                        </>
                        : <span>
                            Вы не авторизованы.
                        </span>
                    }
                </div>
                : <></>
            }
        </header >
    )
})