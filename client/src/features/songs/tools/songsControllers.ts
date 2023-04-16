import { type IPlayerState } from '../../../shared/interfaces/player.interface';
import { type ISong } from '../../../shared/interfaces/song.interface';

export const isAnySongPlaying = (state: IPlayerState) => {
	return !state.audioInitialState.isPlaying;
};
export const isPlaying = (state: IPlayerState, song: ISong) => {
	if (
		+state.audioInitialState.curPlayId === +song.id &&
		state.audioInitialState.isPlaying
	)
		return true;
	else return false;
};
export const isInQueue = (state: IPlayerState, song: ISong) => {
	if (
		state.playlist.filter((s) => +s.id === +song.id).length &&
		state.playlist.length > 1
	)
		return true;
	else return false;
};
export const canAddToQueue = (state: IPlayerState, song: ISong) => {
	if (+state.audioInitialState.curPlayId !== +song.id) return true;
	else return false;
};
