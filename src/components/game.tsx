"use client";
import { colors } from "@/lib/colors";
import { randomNumber } from "@/lib/utils";
import { useEffect, useState, useCallback } from "react";
import { Button } from "./ui/button";
import { useGameStore } from "@/lib/store";

const Game = () => {
	const [colorToGuess, setColorToGuess] = useState("");
	const [selectedColor, setSelectedColor] = useState("");
	const [message, setMessage] = useState("");

	const { addScore, endGame } = useGameStore();

	

	// Function to start a new game
	const startNewGame = useCallback(() => {
		setColorToGuess(colors[randomNumber(colors.length)].color);
		setSelectedColor("");
		setMessage("");
	}, []);

	useEffect(() => {
		startNewGame();
	}, [startNewGame]);

	// Handle color selection
	const handleColorSelection = useCallback(
		(color: string) => {
			setSelectedColor(color);
			if (color === colorToGuess) {
				setMessage("Correct! 🎉");
				addScore();
				setTimeout(startNewGame, 1000);
			} else {
				setMessage("Try Again! ❌");
			}
		},
		[colorToGuess, addScore, startNewGame]
	);

	// End game and post high score
	const endGameHandler = async () => {
		endGame()
	};

	return (
		<div className="flex flex-col items-center justify-center h-full gap-8 p-6">
			<p data-testid="gameInstructions">Guess the correct color!</p>
			{/* Large Box */}
			<div
				className="w-[220px] aspect-square rounded-xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
				style={{ backgroundColor: colorToGuess }}
				data-testid="colorBox"
			/>

			{/* Message */}
			{message && (
				<p
					data-testid="gameStatus"
					className={`text-lg font-semibold ${
						selectedColor === colorToGuess ? "text-green-500" : "text-red-500"
					}`}
				>
					{message}
				</p>
			)}

			{/* Color Choices */}
			<div className="flex gap-6 justify-center flex-wrap">
				{colors.map(({ id, color }) => (
					<div
						key={id}
						onClick={() => handleColorSelection(color)}
						className={`w-[75px] aspect-square rounded-md shadow-md transition-transform duration-200 ease-in-out hover:scale-110 ${
							selectedColor === color ? "ring-2 ring-gray-500" : ""
						}`}
						style={{ backgroundColor: color }}
						aria-label={`Select color ${color}`}
						data-testid="colorOption"
					/>
				))}
			</div>

			{/* End Game Button */}
			<Button
				variant="destructive"
				size="lg"
				onClick={endGameHandler}
				data-testid="newGameButton"
			>
				End Game
			</Button>
		</div>
	);
};

export default Game;
