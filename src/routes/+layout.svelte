<script lang="ts">
	import { page } from '$app/stores';
	import { Hamburger } from 'svelte-hamburgers';

	let open: boolean = false;
</script>

<div class="wrapper">
	<header>
		<Hamburger bind:open --color="white" />
	</header>

	{#if open}
		<div class="menu">
			<a href="/">Home</a>
			<a href="/ships">Ships</a>
			<a href="/missions">Missions</a>
			<a href="/roadster">Roadster</a>
		</div>
	{/if}

	<div><slot /></div>

	<footer>
		<p>Created with ❤️ by <a href="https://timsmith.tech">Tim Smith</a></p>
	</footer>
</div>

<style>
	.wrapper {
		position: relative;
	}

	.menu {
		position: fixed;
		top: 5rem;
		right: 0;
		background: rgba(0, 0, 0, 0.33);
		display: flex;
		gap: 1rem;
		z-index: 9999;
	}

	footer {
		display: grid;
		background: #000;
		width: 100%;
		height: 200px;
		place-items: center;
	}
</style>
