<script setup lang="ts">
import {
  Agreement,
  Allergies,
  ApplicationHeader,
  Availability,
  PositionPreferences,
} from '../components/volunteer'
import Button from '../components/common/ui/Button.vue'
import InputField from '../components/common/ui/InputField.vue'
import InputTextArea from '../components/common/ui/InputTextArea.vue'

import { reactive } from 'vue'

const formState = reactive({
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  zip: '',
  phoneNumber: '',
  birthday: '',
  age: null as number | null,
  allergies: '',
  emergencyContactName: '',
  emergencyContactPhone: '',
  volunteerExperience: '',
  interestReason: '',
  positionPreferences: [] as string[],
  availability: [] as string[],
  nameFull: '',
  signatureData: null as string | null,
  signatureDate: '',
  parentName: '',
  parentSignatureData: null as string | null,
  parentSignatureDate: '',
})

const handleSubmit = () => {
  console.log('Form submitted with state:', formState)
  // Add form validation and submission logic here
}
</script>

<template>
  <section class="page-shell">
    <section class="form-card" aria-labelledby="form-title">
      <ApplicationHeader />
      <fieldset class="grid" aria-labelledby="pi">
        <legend id="pi" class="section-title">Personal Information</legend>

        <InputField v-model="formState.firstName" label="First Name" placeholder="First name" />
        <InputField v-model="formState.lastName" label="Last Name" placeholder="Last name" />
        <InputField v-model="formState.address" label="Address" placeholder="Address" />
        <InputField v-model="formState.city" label="City" placeholder="City" />
        <InputField v-model="formState.zip" label="Zip" placeholder="Zip" type="number" />
        <InputField
          v-model="formState.phoneNumber"
          label="Phone Number"
          placeholder="Phone"
          type="tel"
        />
        <InputField
          v-model="formState.birthday"
          label="Birthday"
          placeholder="mm/dd/yyyy"
          type="date"
        />
        <InputField
          v-model="formState.age"
          label="If under 21, Age"
          placeholder="Age"
          type="number"
        />

        <Allergies v-model="formState.allergies" />

        <InputField
          v-model="formState.emergencyContactName"
          label="Emergency Contact Person"
          placeholder="Name"
        />
        <InputField
          v-model="formState.emergencyContactPhone"
          label="Phone Number"
          placeholder="Phone Number"
          type="tel"
        />
      </fieldset>

      <fieldset aria-labelledby="exp">
        <legend id="exp" class="section-title">Experience & Interests</legend>

        <InputTextArea
          v-model="formState.volunteerExperience"
          label="Volunteer Experience (if any):"
          placeholder="Briefly describe"
        />

        <InputTextArea
          v-model="formState.interestReason"
          label="Why are you interested in being a volunteer:"
          placeholder="Your reason"
        />

        <PositionPreferences v-model="formState.positionPreferences" />
      </fieldset>

      <Availability v-model="formState.availability" />

      <Agreement
        :name="formState.nameFull"
        :age="formState.age!"
        :signature="formState.signatureData"
        :signature-date="formState.signatureDate"
        :parent-name="formState.parentName"
        :parent-signature="formState.parentSignatureData"
        :parent-date="formState.parentSignatureDate"
      />

      <div class="actions">
        <Button
          @click="handleSubmit"
          type="submit"
          title="Submit Application"
          color="green"
          size="large"
        />
      </div>
    </section>
  </section>
</template>

<style scoped>
.page-shell {
  min-height: 100vh;
  background-color: var(--green);
  padding: 9rem 16px 64px;
  @media (max-width: 440px) {
    padding: 6rem 16px 32px;
  }
}
fieldset {
  border: 0;
  margin: 24px 0;
  padding: 0;
}
.form-card {
  max-width: 1100px;
  margin: 0 auto;
  background: var(--white);
  color: var(--font-color-dark);
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 48px 48px 32px;
}

.section-title {
  font-weight: 700;
  font-size: 18px;
  margin: 18px 0 12px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}
.col-span-1 {
  grid-column: span 1;
}
.col-span-2 {
  grid-column: span 2;
}
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
.inline {
  display: flex;
  align-items: center;
  gap: 14px;
}
.radio {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 20px;
}

@media (max-width: 760px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .col-span-2 {
    grid-column: auto;
  }
  .form-header h1 {
    font-size: 26px;
  }
}
</style>
