<script lang="ts">
	import Logo from '../lib/components/Logo.svelte';
</script>

<svelte:head>
	<title>Chicken Fried Dice!</title>
	<link rel="icon" type="image/svg" href="/favicon.ico" />
</svelte:head>

<div class="container mx-auto w-full flex flex-col items-center justify-center">
	<Logo />
	<div
		class="w-full mx-auto md:p-8 p-4 bg-white/[0.8] border-4 border-black md:border-b-0 rounded flex flex-col items-center text-center"
	>
		<h1 class="text-4xl">More details coming soon!</h1>
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
