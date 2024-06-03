<script lang="ts">
	import Gallery from '$lib/components/Gallery.svelte';
	import Newsletter from '$lib/components/Newsletter.svelte';
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

	<img src="logo.png" class="md:w-1/3 w-10/12 mb-10" alt="Chicken Fried Dice Logo" />

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
			Players operate their own Chicken (or chicken replacement) Food Trucks in this dice chucking
			and plucking roll-n-write. Feed customers by matching ingredient dice to the dishes they want
			before they get ticked off!
		</p>

		<a
			href="https://www.kickstarter.com/projects/urban-pro-games/chicken-fried-dice"
			target="_blank"
		>
			<h2 class="text-2xl">Follow us on</h2>
			<img src="kickstarter-logo.png" class="h-8 inline pl-2" alt="Kickstarter logo" />
		</a>

		<p>Or</p>

		<Newsletter />

		<Gallery />
	</div>
</div>

<footer class="-mt-32">
	<img src="/dice.png" alt="Dice footer" />
</footer>
