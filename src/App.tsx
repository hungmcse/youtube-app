import React, {Suspense} from 'react';
import {Spin} from 'antd';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {PageRoute} from './constants/route';
import AuthRouter from './components/auth/AuthRouter';
import {MasterPageLayout} from './layout/master-page.layout';

const App = () => {
	return (
		<MasterPageLayout>
			<Suspense fallback={<Spin/>}>
				<BrowserRouter>
					<Switch>
						<Route path={PageRoute.Home} exact={true}
							   component={React.lazy(() => import('./pages/home/home.page'))}/>
						<AuthRouter>
							<Route path={PageRoute.Share}
								   component={React.lazy(() => import('./pages/share/share.page'))}/>
						</AuthRouter>
						<Route path="*" component={() => <Redirect to={PageRoute.Home}/>}/>
					</Switch>
				</BrowserRouter>
			</Suspense>
		</MasterPageLayout>
	);
};

export default App;