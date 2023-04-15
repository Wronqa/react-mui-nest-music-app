import {
	AuthActionInterface,
	AuthStateInterface,
} from '../../shared/interfaces/auth.interface';
import { authActions } from '../actions/auth.actions';

// export const authReducer = (
// 	state: AuthStateInterface,
// 	action: ActionInterface
// ): AuthStateInterface => {
// 	switch (action.type) {
// 		case ACTIONS.loadUser:
// 			return {user: action.payload };
// 		default:
// 			return { ...state };
// 	}
// };
export const authReducer = (
	state: AuthStateInterface,
	action: AuthActionInterface
) => {
	const handler = authActions[action.type];
	return handler(state, action);
};