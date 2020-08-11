<script>
	import GlobalCss from "../GlobalCss";
	import About from "../components/About";

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
	<About />
</main>