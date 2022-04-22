<script>
import {page} from "$app/stores";

export let title;
</script>

<style lang="scss">
#main {
	display: grid;
	grid-template-columns: auto 1fr auto;
	gap: 32px;
	padding: 0 1em;
}

</style>

<div id="main">
	<div id="details">
		<h1>
			{title}
		</h1>
		<slot name="details"/>
	</div>
	<div id="content">
		<slot/>
	</div>
	<div id="corrections">
		<slot name="corrections"/>
	</div>
</div>
