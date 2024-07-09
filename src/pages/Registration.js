import React, { useContext, useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import { Context } from '..'
import { Link, Navigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

export default observer(function Registration() {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [passwordType, setPasswordType] = useState('password')
    const [loginMessage, setLoginMessage] = useState('')
    const [passwordMessage, setPasswordMessage] = useState('')

    function checker() {
        let flag = true
        if (login === '') {
            setLoginMessage('Заполните это поле!')
            flag = false
        } else {
            setLoginMessage('')
        }
        if (password === '') {
            setPasswordMessage('Заполните это поле!')
            flag = false
        } else {
            setPasswordMessage('')
        }
        return flag
    }

    const { store } = useContext(Context)

    if (store.isAuth) {
        return <Navigate to='/' />
    }

    if (store.isLoading) {
        return <div className='flex items-center justify-center h-screen'>Загрузка...</div>
    }

    return (
        <div className='flex flex-col gap-5 justify-center items-center h-screen'>
            <div className='flex flex-col gap-4 max-w-md'>
                <div className='flex flex-row justify-between items-center'>
                    <h1 className='font-semibold'>Регистрация</h1>
                    <Link to={'/authorisation'} >
                        <Button title={'Войти'} />
                    </Link>
                </div>
                <Input
                    label='Логин'
                    className={loginMessage !== '' && 'input-invalid'}
                    onChange={e => setLogin(e.target.value)}
                    value={login}
                    type='text'
                    placeholder={'Введите логин'}
                    message={loginMessage} />
                <Input
                    label='Пароль'
                    className={passwordMessage !== '' && 'input-invalid'}
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    type={passwordType}
                    setPasswordType={setPasswordType}
                    placeholder={'Введите пароль'}
                    message={passwordMessage} />
            </div>
            <Button
                title={'Зарегистрироваться'}
                onClick={() => {
                    if (checker()) {
                        store.registration(login, password)
                    }
                }} />
        </div>
    )
})
