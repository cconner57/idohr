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
/* Component-specific styles only */
</style>
