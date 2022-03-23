import React from 'react';
import {Redirect} from 'react-router-dom';
import {RoutesUtils} from '../../utils';
import {OffersConfig} from '../main/offers/OffersConfig';

const routeConfigs = [
    OffersConfig
];

 const routes = [
    ...RoutesUtils.generateRoutesFromConfigs(routeConfigs),
    {
        path     : '/',
        component: () => <Redirect to="/offers"/>
    }
];

 export default routes;
