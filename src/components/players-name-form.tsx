"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { playerNameSchema } from "../../schema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGameStore } from "@/lib/store";
import { useRouter } from "next/navigation";

const PlayersNameForm = () => {
	const router = useRouter();
	const addPlayerName = useGameStore((state) => state.addPlayerName);

	const form = useForm<z.infer<typeof playerNameSchema>>({
		resolver: zodResolver(playerNameSchema),
		defaultValues: {
			name: "",
		},
	});

	function onSubmit(values: z.infer<typeof playerNameSchema>) {
		console.log(values);
		addPlayerName(values.name || "anonymous");
		router.push("/game");
	}

	return (
		<Card className="w-[500px]">
			<CardHeader>
				<CardTitle>Enter Your Name</CardTitle>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-8"
						autoComplete="off"
					>
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input
											placeholder="Enter your name defaults to anonymous"
											{...field}
										/>
									</FormControl>
									<FormDescription>
										Name would be in the high score section.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit">Let&apos;s Play</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
};

export default PlayersNameForm;
