import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';
import GlobalStyled from './styles/global';
import { AuthProvider } from './context/AuthProvider';
import { ToastContainer } from 'react-toastify';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Pet from './pages/Pet';
import AddPet from './pages/AddPet';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
    return (
        <AuthProvider>
            <Router history={history}>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/pet/:id" component={Pet} />
                    <Route exact path="/add" component={AddPet} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                </Switch>
                <Footer />
                <GlobalStyled />
                <ToastContainer autoClose={3000} />
            </Router>
        </AuthProvider>
    );
}

export default App;
