import App from './App/App.svelte';

const app = new App({
	target: document.body,
	props: {
		appSettings:{ applicationName: "Svelte PostCSS demo app"},
		name: 'world'
	}
});

export default app;