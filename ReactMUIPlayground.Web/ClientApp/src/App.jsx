import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import Tables from './Pages/Tables';
import DropDown from './Pages/DropDown';
import Dialogs from './Pages/Dialogs';

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/tables' element={<Tables />} />
                <Route path='/dropdown' element={<DropDown />} />
                <Route path='/dialogs' element={<Dialogs />} />
            </Routes>
        </Layout>
    );
}

export default App;