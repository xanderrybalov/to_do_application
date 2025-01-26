<script>
  import Header from '$lib/Header.svelte';
  import Footer from '$lib/Footer.svelte';

  let tasks = [
    { id: 1, text: 'Write blog post', completed: false },
    { id: 2, text: 'Watch "Mr Robot"', completed: false },
    { id: 3, text: 'Run', completed: false },
  ];

  function addTask(newTask) {
    tasks = [...tasks, { id: Date.now(), text: newTask, completed: false }];
  }

  function toggleTask(id) {
    tasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
  }
</script>

<div class="min-h-screen bg-background-primary flex flex-col items-center p-12">
  <div class="bg-white w-full max-w-container shadow-container">
  <Header />
  <Footer />
</div>
</div>
