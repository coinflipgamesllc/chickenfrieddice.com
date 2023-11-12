<script lang="ts">
	import Logo from '../lib/components/Logo.svelte';
</script>

<svelte:head>
	<title>Chicken Fried Dice!</title>
	<link rel="icon" type="image/svg" href="/favicon.ico" />
</svelte:head>

<div class="container mx-auto w-full flex flex-col items-center justify-center">
	<Logo />
	<a href="https://urbanprofessional.games" target="_blank" rel="noopener noreferrer">
		<img
			src="urban-professional.png"
			alt="Urban Professional Logo"
			class="w-1/4 absolute right-4 -top-16"
		/>
	</a>
	<div class="flex flex-row">
		<img src="trucks.svg" class="h-16 -mt-4" alt="row of truck illustrations" />
		<img src="trucks.svg" class="h-16 -mt-4 pl-8" alt="row of truck illustrations" />
	</div>
	<div
		class="w-full mx-auto md:p-8 p-4 bg-white/[0.8] border-4 border-black md:border-b-0 rounded flex flex-col items-center text-center"
	>
		<h1 class="text-4xl">
			<img src="chicken.svg" class="h-8 inline -mt-4" alt="chicken icon" /> What is all this?
		</h1>
		<p>
			Chicken Fried Dice is a game for 2-5 players taking about 30-40 minutes. Players are competing
			as chefs at a food truck festival serving up the best chicken (or non-meat chicken) dishes in
			town. Each customer is on a timer— Don't let them get hangry or they'll leave a bad review!
			The player with the highest score at the end of the game will be the winner and claim the
			crown of best chicken chef!
		</p>

		<h1 class="text-4xl">
			<img src="chop.svg" class="h-8 inline -mt-4" alt="chop icon" /> More details coming soon!
		</h1>
		<h2 class="text-2xl">Sign up for our newsletter</h2>
		<p class="text-xl">Be the first to hear about Chicken Fried Dice updates!</p>

		<script
			async
			src="https://eocampaign1.com/form/2f3eefe6-7763-11ee-a449-41078a26d697.js"
			data-form="2f3eefe6-7763-11ee-a449-41078a26d697"
		></script>

		<img src="/customers.png" alt="Customer cards showcase" class="customers md:inline hidden" />
	</div>
</div>

<footer class="-mt-40">
	<img src="/dice.png" alt="Dice footer" />
</footer>
