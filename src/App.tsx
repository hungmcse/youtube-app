import React, {Suspense} from 'react';
import {Spin} from 'antd';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {PageRoute} from './constants/route';
import AuthRoute from './components/auth/auth-route';
import {MasterPageLayout} from './layout/master-page.layout';

const App = () => {
	return (
		<BrowserRouter>
			<MasterPageLayout>
				<Suspense fallback={<Spin/>}>
					<Switch>
						<AuthRoute>
							<Route path={PageRoute.Share} exact={true}
								   component={React.lazy(() => import('./pages/share/share.page'))}/>
						</AuthRoute>
						<Route path={PageRoute.Home} exact={true}
							   component={React.lazy(() => import('./pages/home/home.page'))}/>
						<Route path="*" component={() => <Redirect to={PageRoute.Home}/>}/>
					</Switch>
				</Suspense>
			</MasterPageLayout>
		</BrowserRouter>

	);
};

export default App;