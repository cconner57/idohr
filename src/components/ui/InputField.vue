<script setup lang="ts">
const props = defineProps<{
  modelValue: string
  label: string
  id: string
  type?: string
}>()

const type = props.type ?? 'text'
</script>

<template>
  <div class="input-field">
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      v-model="modelValue"
      :type="type"
      @input="$emit('update:modelValue', $event?.target?.value || '')"
    />
  </div>
</template>

<style scoped lang="css">
.input-field {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.input-field label {
  margin-bottom: 0.5rem;
  color: var(--font-color-dark);
}

.input-field input {
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  transition:
    border 0.2s,
    box-shadow 0.2s;
}

.input-field input:focus {
  border: 1px solid var(--dark-gray);
  box-shadow: 0 0 5px var(--dark-gray);
}
</style>
