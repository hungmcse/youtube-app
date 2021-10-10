import React  from 'react';
import { Redirect } from 'react-router-dom';
import { Container } from 'typedi';
import { PageRoute } from '../../constants/route';
import {UserService} from '../../services/user.service';

interface IAuthRouter {
	children: any,
}

const AuthRoute = ({ children }: IAuthRouter) => {
	// Constantly ping user to check if token expired
	const userService: UserService = Container.get(UserService);
	if (!userService.user) {
		return <Redirect to={PageRoute.Home} />;
	}
	return children;
}

export default AuthRoute;
