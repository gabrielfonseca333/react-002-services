import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Departamentos from './MaestroDetalle/Departamentos'
import Comics from './Comics'

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Departamentos/>}></Route>
            <Route path='/comics' element={<Comics/>}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}
