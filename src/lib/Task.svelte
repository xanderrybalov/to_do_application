<script lang="ts">
    let props = $props<{
      task: {
        id: number;
        text: string;
        completed: boolean;
      };
      onToggle: () => void;
    }>();
  
    function toggleState() {
      props.onToggle();
    }
  </script>
  
  <div
    class="flex justify-between items-center p-input-padding"
  >
    <span
      class="{props.task.completed ? 'line-through text-task-completed' : 'text-task-pending'}"
    >
      {props.task.text}
    </span>
  
    <button
      class="w-6 h-6 flex items-center justify-center"
      onclick={toggleState}
    >
      {#if props.task.completed}
        <img src="/smile.svg" alt="Completed" class="w-emojis" />
      {:else}
        <img src="/meh.svg" alt="Pending" class="w-emojis" />
      {/if}
    </button>
  </div>
  
