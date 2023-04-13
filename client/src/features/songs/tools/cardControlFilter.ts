import { TYPES } from '../../../shared/interfaces/song.interface';

export const filterControls = (type: TYPES) => {
	const defaultControls = {
		play: true,
		add: false,
		favorite: true,
		remove: true,
	};
	switch (type) {
		case TYPES.search: {
			defaultControls.add = true;
			defaultControls.favorite = false;
			defaultControls.remove = false;
			break;
		}
	}
	return defaultControls;
};
