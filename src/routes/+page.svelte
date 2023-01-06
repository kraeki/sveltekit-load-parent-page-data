<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
</script>

<h1>Welcome to the Parent Page</h1>
<p>Go to Child <a href="/child">Child</a></p>

<p>
Parent Page Data: <b>{data.parentText}</b>
</p>