<script setup lang="ts">
const props = defineProps<{
  id?: string
  label: string
  placeholder: string
  type?: string
  modelValue: string | number | null
}>()

// eslint-disable-next-line no-unused-vars
const emit = defineEmits<{ (e: 'update:modelValue', value: string | number | null): void }>()

const inputId = props.id ?? `input-${Math.random().toString(36).slice(2, 9)}`

function onInput(e: Event) {
  const target = e.target as HTMLInputElement | null
  emit('update:modelValue', target?.value ?? null)
}
</script>

<template>
  <div class="control field">
    <label class="label" :for="inputId">{{ props.label }}</label>
    <div class="field">
      <input
        :id="inputId"
        :placeholder="props.placeholder"
        :type="props.type"
        :value="props.modelValue"
        @input="onInput"
      />
    </div>
  </div>
</template>

<style scoped lang="css">
.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 12px;
}
.label {
  font-weight: 600;
  font-size: 14px;
  color: var(--text-700);
  user-select: none;
}
.control input {
  width: 100%;
  border: 1px solid #e7ebf0;
  border-radius: 10px;
  padding: 10px 12px;
  font-size: 15px;
  transition:
    box-shadow 0.15s,
    border-color 0.15s;
  background: #fff;
}
.control input:focus {
  outline: none;
  border-color: var(--blue-600);
  box-shadow: 0 0 0 3px var(--ring);
}
</style>
