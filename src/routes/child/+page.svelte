<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
</script>

<h1>Child Page</h1>

<p>Go to parent <a href="/">Parent</a></p>

This Child Page is fetching Data using `parent()` in `src/routes/child/+page.ts`
<p>
Parent Page Data: <b>{data.parentPageText}</b>
</p>
<p>
Parent Layout Data Data: <b>{data.parentLayoutText}</b>
</p>
<p>
Child Page Data: <b>{data.childText}</b>
</p>