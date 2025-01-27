<script>
import Header from '$lib/Header.svelte';
import TasksList from '$lib/TasksList.svelte';
</script>

<div class="min-h-screen bg-background-primary flex flex-col items-center p-container-padding">
    <div class="bg-white w-full max-w-container shadow-container">
        <Header />
        <TasksList />
    </div>
</div>
