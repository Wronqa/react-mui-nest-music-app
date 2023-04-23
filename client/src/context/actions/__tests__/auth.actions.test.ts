import { authActions } from './../auth.actions';
import { AuthActions } from '../../../shared/interfaces/auth.interface';
import { type IUser } from '../../../shared/interfaces/auth.interface';

const initialState = { user: null };
const user: IUser = { username: 'Wronqa', email: 'kuba.wrona@onet.pl' };

describe('(Function) loadUser', () => {
	it('Should load user into state', () => {
		const action = { type: AuthActions.LOAD_USER, payload: user };
		const newState = authActions.loadUser(initialState, action);

		expect(newState.user).toEqual(user);
	});
});
describe('(Function) removeUser', () => {
	it('Should remove user from state', () => {
		const action = { type: AuthActions.REMOVE_USER, payload: null };
		const newState = authActions.removeUser({ user }, action);

		expect(newState.user).toBeNull();
	});
});
