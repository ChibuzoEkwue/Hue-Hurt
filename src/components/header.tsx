"use client"
import Link from "next/link";
import { useGameStore } from "@/lib/store";

const Header = () => {
	const { userName, totalScore, gameStart } = useGameStore((state) => state);
	return (
		<header className="container flex h-[7vh] w-full items-center justify-between border-b-[1px] border-gray-200">
			<nav className="flex w-full items-center justify-between">
				<Link
					href={gameStart ? "/game" : "/"}
					className="scroll-m-20 text-lg font-thin tracking-wide"
				>
					HueHunt
				</Link>

				<div className="flex items-center gap-4">
					{gameStart && (
						<>
							<div className="text-base font-thin text-center ">
								Hello, {userName}
							</div>
							<div
								className="text-base font-thin text-center "
								data-testid="score"
							>
								Score: {totalScore}
							</div>
						</>
					)}
				</div>
			</nav>
		</header>
	);
};

export default Header;
