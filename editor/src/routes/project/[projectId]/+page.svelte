<script lang="ts">
	import { page } from '$app/stores';
	import PageContainer from '$root/src/lib/components/glue/PageContainer.svelte';

	$: ({ project } = $page?.data);
</script>

<PageContainer title="Edit project" limitWidth={false}>
	<div class="w-full">
		{project?.prompt}
	</div>
</PageContainer>
