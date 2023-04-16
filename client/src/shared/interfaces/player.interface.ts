import { type Dispatch } from 'react';

interface IPlayerSong {
	name: string;
	writer: string;
	img: string;
	src: string;
	id: number;
}
interface IAudioPlayerProps {
	isPlaying: boolean;
	muted: boolean;
	volume: number;
	curPlayId: number;
}
export interface IPlayerState {
	playlist: IPlayerSong[];
	audioInitialState: IAudioPlayerProps;
}
export interface IPlayerContext {
	state: IPlayerState;
	dispatch: Dispatch<IPlayerAction>;
}
export interface IPlayerAction {
	type: PlayerActions;
	payload: IPlayerActionPayload;
}
export interface IPlayerActionPayload {
	song: IPlayerSong;
	options: IPlayerOptions;
}
interface IPlayerOptions {
	curPlayId: number;
	isPlaying: boolean;
}
export enum PlayerActions {
	PLAY = 'play',
	ADD_TO_QUEUE = 'addToQueue',
	DELETE_FROM_QUEUE = 'deleteFromQueue',
}
