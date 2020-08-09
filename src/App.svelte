<script>
	import GlobalCss from "./GlobalCss";
	import Component1 from './components/Component1.svelte';
	import Component2 from './components/Component2';
	import Component3 from './components/Component3';
	import Component4 from "./components/Component4";

	export let name;
	export let appSettings = {applicationName: "WARNING: Please pass appSettings from within main.js props."};

</script>
<style>
	@import "App.css";
</style>

<svelte:head>
	<title>{appSettings.applicationName}</title>
</svelte:head>

<GlobalCss/>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

	<Component1 {name}/>
	<Component2/>
	<Component3/>
	<Component4/>
</main>