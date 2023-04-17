import React from 'react'
import { View } from 'react-native'
import { NativeRouter, Route, Routes } from 'react-router-native'
import Home from '../views/Home/Home'
import SignUp from '../views/SignUp/SignUp'
import SignIn from '../views/SignIn/SignIn'
import RestorePassword from '../views/RestorePassword/RestorePassword'

const Router = () => {
  return (
    <Routes >
      <Route path='/' element={<Home />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/restorePassword' element={<RestorePassword />} />
    </Routes>
  )
}

export default Router
