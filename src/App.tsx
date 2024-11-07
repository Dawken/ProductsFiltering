import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WashingMachines from './app/routes/washingMachines/washingMachines'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/washing-machines' element={<WashingMachines />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
