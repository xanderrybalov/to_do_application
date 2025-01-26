<script lang="ts">
    export let label: string = 'Add';
    export let classes: string = ''; 
    export let onClick: (() => void) | undefined; 
  </script>
  
  <button
  class={`bg-primary-green text-white text-button-text px-button-padding-x py-button-padding-y rounded-button ${classes}`}
  on:click={onClick}
>
  {label}
</button>
