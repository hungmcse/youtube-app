import React  from 'react';
import { Redirect } from 'react-router-dom';
import { Container } from 'typedi';
import { PageRoute } from '../../constants/route';
import { HttpService } from '../../services/http.service';

interface IAuthRouter {
	children: any,
}

const AuthRouter = ({ children }: IAuthRouter) => {
	// Constantly ping user to check if token expired
	const httpService: HttpService = Container.get(HttpService);

	if (!httpService.tokenInfo) {
		return <Redirect to={PageRoute.Login} />;
	}

	return children;
}

export default AuthRouter;
