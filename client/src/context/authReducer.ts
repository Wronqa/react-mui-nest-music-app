import {
	ACTIONS,
	AuthContextInterface,
	AuthStateInterface,
	ShoppingCartAction,
	UserInterface,
} from '../self_types/types';

export const authReducer = (
	state: AuthStateInterface,
	action: ShoppingCartAction
): AuthStateInterface => {
	switch (action.type) {
		case ACTIONS.increaseCartQuantity:
			return { user: action.payload };
		default:
			return { ...state };
	}
};
