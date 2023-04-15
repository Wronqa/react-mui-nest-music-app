import { Dispatch } from 'react';
import { AudioPlayerProps } from 'react-modern-audio-player';

export interface PlayerContextInterface {
	state: PlayerInterface;
	dispatch: Dispatch<IPlayerAction>;
}
export interface PlayerInterface {
	playlist: PlayerSongInterface[];
	audioInitialState: AudioPlayerPropsInterface;
}
interface PlayerSongInterface {
	name: string;
	writer: string;
	img: string;
	src: string;
	id: number;
}
interface AudioPlayerPropsInterface {
	isPlaying: boolean;
	muted: boolean;
	volume: number;
	curPlayId: number;
}
export interface IPlayerAction {
	type: PlayerActions;
	payload: IPlayerActionPayload;
}
export interface IPlayerActionPayload {
	song: PlayerSongInterface;
	options: IPlayerOptionsInterface;
}
interface IPlayerOptionsInterface {
	curPlayId: number;
	isPlaying: boolean;
}
export enum PlayerActions {
	PLAY = 'play',
	ADD_TO_QUEUE = 'addToQueue',
	DELETE_FROM_QUEUE = 'deleteFromQueue',
}
