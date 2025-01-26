<script lang="ts">
  import Button from "./Button.svelte";
  import Task from "./Task.svelte";

  let tasks = [
    { id: 1, text: 'Buy new sweatshirt', completed: true },
    { id: 2, text: 'Read an article', completed: true },
    { id: 3, text: 'Write blog post', completed: false },
    { id: 4, text: 'Watch Mr Robot', completed: false },
    { id: 5, text: 'Run', completed: false }
  ];

  const addTask = () => {
    const newTask = { id: Date.now(), text: 'New Task', completed: false };
    tasks = [...tasks, newTask];
  };

  const toggleTask = (id: number) => {
    tasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
  };
</script>

<div class="relative flex justify-center p-container-padding">
  <div class="w-full">
    {#each tasks as task (task.id)}
      <Task {task} onToggle={() => toggleTask(task.id)} />
    {/each}
  </div>

  <Button
    label="Add"
    classes="absolute bottom-negative-button shadow-button-transform transition-transform duration-200 transform hover:scale-105"
    onClick={addTask}
  />
</div>
