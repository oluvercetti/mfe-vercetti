import React, { lazy, Suspense, useState, useEffect } from 'react';
import Header from './components/Header';
import { Router, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { Skeleton } from '@material-ui/lab';
import { createBrowserHistory } from 'history';
const MarketingApp = lazy(() => import('./components/MarketingApp'));
const AuthApp = lazy(() => import('./components/AuthApp'));
const DashboardApp = lazy(() => import('./components/DashboardApp'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

const history = createBrowserHistory();

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        if (isSignedIn) {
            history.push('/dashboard');
        }
    }, [isSignedIn]);

    return (
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <div>
                    <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
                    <Suspense fallback={
                        <div style={{ padding: '20px' }}>
                            <Skeleton variant="rect" width="100%" height={118} />
                            <Skeleton width="60%" height={40} style={{ marginTop: '1rem' }} />
                            <Skeleton width="80%" height={40} style={{ marginTop: '1rem' }} />
                        </div>
                    }>
                        <Switch>
                            <Route path="/auth">
                                <AuthApp onSignIn={() => setIsSignedIn(true)} />
                            </Route>
                            <Route path="/dashboard">
                                {!isSignedIn && <Redirect to="/" />}
                                <DashboardApp />
                            </Route>
                            <Route path="/" component={MarketingApp} />
                        </Switch>
                    </Suspense>
                </div>
            </Router>
        </StylesProvider>
    );
};