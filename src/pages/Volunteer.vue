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
</script>

<template>
  <section class="page-shell">
    <section class="form-card" aria-labelledby="form-title">
      <ApplicationHeader />
      <fieldset class="grid" aria-labelledby="pi">
        <legend id="pi" class="section-title">Personal Information</legend>

        <InputField label="First Name" placeholder="First name" />
        <InputField label="Last Name" placeholder="Last name" />
        <InputField label="Address" placeholder="Address" />
        <InputField label="City" placeholder="City" />
        <InputField label="Zip" placeholder="Zip" type="number" />
        <InputField label="Phone Number" placeholder="Phone" type="tel" />
        <InputField label="Birthday" placeholder="mm/dd/yyyy" type="date" />
        <InputField label="If under 21, Age" placeholder="Age" type="number" />

        <Allergies />

        <InputField label="Emergency Contact Person" placeholder="Name" />
        <InputField label="Phone Number" placeholder="Phone Number" type="tel" />
      </fieldset>

      <fieldset aria-labelledby="exp">
        <legend id="exp" class="section-title">Experience & Interests</legend>

        <InputTextArea label="Volunteer Experience (if any):" placeholder="Briefly describe" />

        <InputTextArea
          label="Why are you interested in being a volunteer:"
          placeholder="Your reason"
        />

        <PositionPreferences />
      </fieldset>

      <Availability />

      <Agreement />

      <div class="actions">
        <Button type="submit" title="Submit Application" color="green" size="large" />
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
