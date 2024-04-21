<script lang="ts">
	import Gallery from '$lib/components/Gallery.svelte';
	import Newsletter from '$lib/components/Newsletter.svelte';
	import Logo from '../lib/components/Logo.svelte';
</script>

<svelte:head>
	<title>Chicken Fried Dice!</title>
	<link rel="icon" type="image/svg" href="/favicon.ico" />
</svelte:head>

<div class="container mx-auto flex flex-col items-center justify-center">
	<a href="https://urbanprofessional.games" target="_blank" rel="noopener noreferrer">
		<img
			src="urban-professional.png"
			alt="Urban Professional Logo"
			class="md:w-1/6 w-1/3 absolute left-4 top-0"
		/>
	</a>

	<Logo />

	<div class="flex flex-row w-full justify-center overflow-hidden">
		<img src="trucks.svg" class="max-h-16 -mt-4" alt="row of truck illustrations" />
		<img src="trucks.svg" class="max-h-16 -mt-4 pl-8" alt="row of truck illustrations" />
	</div>

	<div
		class="w-full md:mx-auto md:p-8 p-4 bg-white/[0.8] border-4 border-black rounded flex flex-col items-center text-center"
	>
		<h1 class="text-4xl">
			<img src="chicken.png" class="h-8 inline -mt-4" alt="chicken icon" /> What is all this?
		</h1>
		<p>
			Chicken Fried Dice is a game for 2-5 players taking about 30-40 minutes. Players are competing
			as chefs at a food truck festival serving up the best chicken (or non-meat chicken) dishes in
			town. Each customer is on a timer— Don't let them get hangry or they'll leave a bad review!
			The player with the highest score at the end of the game will be the winner and claim the
			crown of best chicken chef!
		</p>

		<Newsletter />

		<Gallery />
	</div>
</div>

<footer class="-mt-32">
	<img src="/dice.png" alt="Dice footer" />
</footer>
