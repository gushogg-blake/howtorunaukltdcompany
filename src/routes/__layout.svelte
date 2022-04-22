<script>
import "$css/app.scss";

import {page} from "$app/stores";
import Gap from "$components/utils/Gap.svelte";
</script>

<style lang="scss">
#main {
	
}

#top {
	color: #f0f0f0;
	padding: 1em;
	background: #303030;
	
	a {
		color: #f0f0f0;
		text-decoration: none;
	}
}
</style>

<div id="main">
	<div id="top">
		<a href="/">Graph</a>
	</div>
	<Gap height={20}/>
	<div id="content">
		<slot/>
	</div>
</div>
