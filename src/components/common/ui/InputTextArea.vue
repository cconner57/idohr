<script setup lang="ts">
const props = defineProps<{
  label: string
  placeholder: string
}>()
</script>

<template>
  <div class="field col-span-2">
    <label class="label">{{ props.label }}</label>
    <div class="control"><textarea rows="3" :placeholder="props.placeholder" /></div>
  </div>
</template>

<style scoped lang="css">
.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 12px;
}
.col-span-2 {
  grid-column: span 2;
}
.label {
  font-weight: 600;
  font-size: 14px;
  color: var(--text-700);
  user-select: none;
}
.control textarea {
  width: 100%;
  border: 1px solid #e7ebf0;
  border-radius: 10px;
  resize: vertical;
  padding: 10px 12px;
  font-size: 15px;
  transition:
    box-shadow 0.15s,
    border-color 0.15s;
  background: #fff;
}
.control textarea:focus {
  outline: none;
  border-color: var(--blue-600);
  box-shadow: 0 0 0 3px var(--ring);
}
</style>
