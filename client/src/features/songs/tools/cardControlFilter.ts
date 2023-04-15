import { ISongsViewType } from '../../../shared/interfaces/song.interface';

export const filterControls = (type: ISongsViewType) => {
	const defaultControls = {
		play: true,
		add: false,
		favorite: true,
		remove: true,
		addToQueue: true,
	};
	switch (type) {
		case ISongsViewType.SEARCH: {
			defaultControls.add = true;
			defaultControls.favorite = false;
			defaultControls.remove = false;
			defaultControls.addToQueue = false;
			break;
		}
	}
	return defaultControls;
};
