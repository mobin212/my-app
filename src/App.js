import React from 'react'
import {Provider} from "react-redux"
// import { Store } from './redux/Store'
import './App.css'
import Fetchproduct from './components/Fetchproduct'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Select from './components/Select'
import Sabad from './components/Sabad'
import Navbar from './components/Navbar'
import PHOTOS from './components/PHOTOS'
import { applyMiddleware, createStore } from "redux";
import  Reducers  from './redux/reducers/combinereducers';
import thunk from 'redux-thunk'


const Store = createStore(Reducers, applyMiddleware(thunk))


function App() {

    return (
<div className='app'>
    <Provider store= {Store}>
    <Router>
        <Navbar/>
        <Route path='/' exact component={Fetchproduct} />
        <Route path='/detail/:id' exact component={Select} />
        <Route path='/sabad' exact component={Sabad} />
        <Route path='/photo' exact component={PHOTOS} />
    </Router>
    </Provider>
</div>
    )
}

export default App