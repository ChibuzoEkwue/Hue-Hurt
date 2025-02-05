import PlayersNameForm from "@/components/players-name-form";
import React from "react";

const HomePage = () => {
	return (
		<main className="flex flex-col items-center justify-center gap-6 px-4 sm:px-8 py-8 w-full max-w-2xl mx-auto ">
			{/* Title */}
			<h2 className="scroll-m-20 border-b-2 pb-2 text-3xl sm:text-4xl font-bold tracking-tight mx-auto text-center">
				Hue Hunt – Chase the Colors, Master the Shades!
			</h2>

			{/* Subtitle */}
			<p className="max-w-lg text-lg sm:text-xl text-gray-700 text-balance mx-auto text-center">
				Explore vibrant colors, test your vision, sharpen your skills, and
				uncover the right shade in every challenge!
			</p>

			{/* Player Name Input */}
			<PlayersNameForm />
		</main>
	);
};

export default HomePage;
