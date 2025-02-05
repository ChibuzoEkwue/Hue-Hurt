import { create } from "zustand";
import { persist } from "zustand/middleware";

export type State = {
	userName: string;
	totalScore: number;
	gameStart: boolean;
};

export type Actions = {
	addPlayerName: (name: string) => void;
	addScore: () => void;
	endGame: () => void;
};

export const useGameStore = create<State & Actions>()(
	persist(
		(set) => ({
			totalScore: 0,
			userName: "",
			gameStart: false,

			addPlayerName: (name) => set(() => ({ userName: name, gameStart: true })),
			addScore: () => set((state) => ({ totalScore: state.totalScore + 1 })),
			endGame: () =>
				set(() => ({ totalScore: 0})),
		}),
		{
			name: "hue-hunt-store", 
			partialize: (state) => ({
				userName: state.userName,
				totalScore: state.totalScore,
				gameStart: state.gameStart,
			}), 
		}
	)
);
