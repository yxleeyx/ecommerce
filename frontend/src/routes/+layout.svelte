<script>
	import "../app.css";
	import { setContextClient } from "@urql/svelte";
	import gqlClient from "$lib/services/base.service";

	setContextClient(gqlClient);
</script>

<slot></slot>
