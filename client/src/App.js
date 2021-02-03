import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/pages/Landing/Landing';
import Register from './components/Register/register';
import Login from './components/Login/login';
import Dashboard from './components/pages/Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppContextProvider } from './store/index';
// import Auth from './Auth';

import './App.css';

function App() {
    return (
        <AppContextProvider>
            <Router>
                <div className="pl-0 pr-0 m-0 container-fluid">
                    <Navbar />
                    <Route exact path="/" component={Landing} />
                    <div className="p-0 m-0 container-fluid">
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/dashboard" component={Dashboard} />
                    </div>
                </div>
            </Router>
        </AppContextProvider>
    );
}

export default App;
