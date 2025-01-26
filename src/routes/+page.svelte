<script>
import Header from '$lib/Header.svelte';
import TasksList from '$lib/TasksList.svelte';

let tasks = [{
        id: 1,
        text: 'Write blog post',
        completed: false
    },
    {
        id: 2,
        text: 'Watch "Mr Robot"',
        completed: false
    },
    {
        id: 3,
        text: 'Run',
        completed: false
    },
];
</script>

<div class="min-h-screen bg-background-primary flex flex-col items-center p-12">
    <div class="bg-white w-full max-w-container shadow-container">
        <Header />
        <TasksList />
    </div>
</div>
