<script setup lang="ts">
import InputSignature from '../../common/ui/InputSignature.vue'
import InputField from '../../common/ui/InputField.vue'

const props = defineProps<{
  name: string
  age: number
  signature: string | null
  signatureDate: string
  parentName: string
  parentSignature: string | null
  parentDate: string
}>()
</script>

<template>
  <fieldset class="waiver-container">
    <legend id="waiv" class="section-title">Agreement</legend>
    <p class="waiver">
      I, {{ props.name }}, hereby volunteer to assist in various tasks to support IDOHR. I
      understand that IDOHR and partners are not responsible for any illness or injury caused during
      volunteer work. I agree to hold harmless IDOHR and partners should I become sick or injured
      from any animals as a result of my volunteer work.
    </p>

    <div class="acknowledgement">
      <InputField label="Name" placeholder="" :modelValue="props.name" />
      <InputSignature label="Signature" placeholder="" :modelValue="props.signature" />
      <InputField label="Date" placeholder="" type="date" :modelValue="props.signatureDate" />
    </div>

    <label v-if="props.age < 18" for="parental-consent" class="label"
      >If under 18, I (parent/guardian name) give permission for my child to volunteer with IDOHR
      and agree to the above waiver.</label
    >
    <div v-if="props.age < 18" class="parentGuardian">
      <InputField label="Parent/Guardian Name" placeholder="" :modelValue="props.parentName" />
      <InputSignature
        label="Parent/Guardian Signature"
        placeholder=""
        :modelValue="props.parentSignature"
      />
      <InputField label="Date" placeholder="" type="date" :modelValue="props.parentDate" />
    </div>
  </fieldset>
</template>

<style scoped lang="css">
.waiver-container {
  margin-bottom: 24px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;

  & .acknowledgement {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 12px;
  }

  label {
    border-top: 2px solid gray;
    padding-top: 12px;
    margin-top: 12px;
    font-weight: 600;
  }

  & .parentGuardian {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 12px;
  }

  @media (max-width: 440px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 8px;
  }
}
.waiver {
  color: var(--text-700);
  background: #f7fbff;
  border: 1px dashed #cfe2ff;
  padding: 12px;
  border-radius: 10px;
  font-size: 1rem;
  line-height: 1.4;
  margin-bottom: 12px;
  width: 100%;
  min-width: 1000px;
  max-width: 100%;

  @media (max-width: 440px) {
    font-size: 0.9rem;
    min-width: 100%;
    max-width: 100%;
  }
}
</style>
