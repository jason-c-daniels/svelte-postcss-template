<script>
	import GlobalCss from "../GlobalCss";
	import Credits from "../components/Credits";

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
	<Credits />
</main>