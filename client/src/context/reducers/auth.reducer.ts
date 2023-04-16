import {
	type IAuthAction,
	type IAuthState,
} from '../../shared/interfaces/auth.interface';
import { authActions } from '../actions/auth.actions';

export const authReducer = (state: IAuthState, action: IAuthAction) => {
	const handler = authActions[action.type];
	return handler(state, action);
};
