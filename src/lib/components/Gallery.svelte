<script lang="ts">
	let showModal = false;
	let dialog: HTMLDialogElement;
	let image = '';

	$: if (dialog && showModal) {
		dialog.showModal();
	}
</script>

<div class="mb-40">
	<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
		<div class="border-4 border-black rounded-xl p-1">
			<button
				on:click={() => {
					showModal = true;
					image = '/gallery/setup.jpg';
				}}
			>
				<img
					class="h-auto max-w-full rounded-lg"
					src="/gallery/setup.jpg"
					alt="View of the game setup on the table"
				/>
			</button>
		</div>
		<div class="border-4 border-black rounded-xl p-1">
			<button
				on:click={() => {
					showModal = true;
					image = '/gallery/feeding.jpg';
				}}
			>
				<img
					class="h-auto max-w-full rounded-lg"
					src="/gallery/feeding.jpg"
					alt="View of a game in progress where players are feeding customers"
				/>
			</button>
		</div>
		<div class="border-4 border-black rounded-xl p-1">
			<button
				on:click={() => {
					showModal = true;
					image = '/gallery/drafting.jpg';
				}}
			>
				<img
					class="h-auto max-w-full rounded-lg"
					src="/gallery/drafting.jpg"
					alt="View of a game in progress where players are attracting more customers to their trucks"
				/>
			</button>
		</div>
	</div>

	<dialog
		bind:this={dialog}
		on:close={() => (showModal = false)}
		on:click|self={() => dialog.close()}
		on:keyup={(e) => {
			if (e.key === 'Escape') {
				dialog.close();
			}
		}}
	>
		<div
			class="overflow-y-auto overflow-x-hidden fixed right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
		>
			<div class="relative p-4 w-full max-h-full">
				<div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
					<button
						class="absolute top-0 right-0 p-3 bg-transparent text-white text-3xl"
						on:click={() => dialog.close()}>✕</button
					>
					<img src={image} class="w-full" alt="Chicken Fried Dice preview" />
				</div>
			</div>
		</div>
	</dialog>
</div>
