import React from 'react';
import {createGenerateClassName, jssPreset} from '@material-ui/core';
import {JssProvider} from 'react-jss'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom';
import {create} from 'jss';
import jssExtend from 'jss-extend';
import history from '../history';
import store from './store';
import AppContext from './AppContext';
import routes from './configs/routesConfig';
import Layout from './layout';


const jss = create({
    ...jssPreset(),
    plugins: [...jssPreset().plugins, jssExtend()]
});

jss.options.insertionPoint = document.getElementById('jss-insertion-point');
const generateClassName = createGenerateClassName();

const App = () => {
    return (
        <AppContext.Provider
            value={{
                routes
            }}
        >
            <JssProvider jss={jss} generateClassName={generateClassName}>
                <Provider store={store}>
                    <Router history={history}>
                    <Layout/>
                    </Router>
                </Provider>
            </JssProvider>
        </AppContext.Provider>
    );
};

export default App;
