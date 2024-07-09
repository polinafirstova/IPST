import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Authorisation from '../pages/Authorisation';
import Registration from '../pages/Registration';

export default class Main extends Component {
    render() {
        return (
            <main className='max-w-screen-xl mx-auto relative'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/authorisation' element={<Authorisation />} />
                    <Route path='/registration' element={<Registration />} />
                </Routes>
            </main>
        )
    }
}
