import React, { lazy, Suspense } from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { Skeleton } from '@material-ui/lab';

const MarketingApp = lazy(() => import('./components/MarketingApp'));
const AuthApp = lazy(() => import('./components/AuthApp'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

export default () => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <div>
                    <Header />
                    <Suspense fallback={
                        <div style={{ padding: '20px' }}>
                            <Skeleton variant="rect" width="100%" height={118} />
                            <Skeleton width="60%" height={40} style={{ marginTop: '1rem' }} />
                            <Skeleton width="80%" height={40} style={{ marginTop: '1rem' }} />
                        </div>
                    }>
                        <Switch>
                            <Route path="/auth" component={AuthApp} />
                            <Route path="/" component={MarketingApp} />
                        </Switch>
                    </Suspense>
                </div>
            </BrowserRouter>
        </StylesProvider>
    );
};