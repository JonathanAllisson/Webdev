import React, {useContext} from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import history from './history';
import GlobalStyled from './styles/global';
import { AuthProvider, Context } from './context/AuthProvider';
import { ToastContainer } from 'react-toastify';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Pet from './pages/Pet';
import AddPet from './pages/AddPet';
import Login from './pages/Login';
import Register from './pages/Register';
import Loading from './components/Loading';

function App() {

    function CustomRoute({ isPrivate, ...rest}){
      const { loading, authenticated } = useContext(Context);

      if(loading){
        return <Loading />
      }
      if(isPrivate && !authenticated){
        return <Redirect to="/login" />
      }
      return <Route {...rest} />;
    }

    return (
        <AuthProvider>
            <Router history={history}>
                <Header />
                <Switch>
                    <CustomRoute exact path="/" component={Home} />
                    <CustomRoute exact path="/pet/:id" component={Pet} />
                    <CustomRoute isPrivate exact path="/add" component={AddPet} />
                    <CustomRoute exact path="/login" component={Login} />
                    <CustomRoute exact path="/register" component={Register} />
                </Switch>
                <Footer />
                <GlobalStyled />
                <ToastContainer autoClose={3000} />
            </Router>
        </AuthProvider>
    );
}

export default App;
