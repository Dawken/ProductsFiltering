import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './app/routes/products/products'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/products' element={<Products />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
