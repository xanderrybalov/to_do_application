<script lang="ts">
const today: Date = new Date();

const monthName: string = today.toLocaleString('en-US', {
    month: 'long'
});
const dayName: string = today.toLocaleString('en-US', {
    weekday: 'long'
});
const day: number = today.getDate();
</script>

<div class="text-center p-container-margin border-b-header-line border-header-line-primary">
    <h1 class="text-header-title font-bold text-task-pending">{monthName}</h1>
    <p class="text-sm text-secondary-violett font-header-semibold pt-task-gap">{dayName}, {monthName} {day}</p>
</div>
