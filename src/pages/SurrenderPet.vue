<script setup lang="ts">
import type { SurrenderFormState } from '../models/common'
import { reactive } from 'vue'
import {
  AggressiveSection,
  FeedingSection,
  HouseholdSection,
  MedicalSection,
  BehaviorSection,
  OtherSection,
} from '../components/about/surrender'
import Button from '../components/common/ui/Button.vue'
import SurrenderSteps from '../components/about/surrender/SurrenderSteps.vue'

const formState = reactive<SurrenderFormState>({
  // Cat & Household Information
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  streetAddress: '',
  city: '',
  state: '',
  zipCode: '',
  whenToSurrenderCat: '',
  catName: '',
  catSex: '',
  catAge: '',
  catOwnershipDuration: '',
  catLocationFound: '',
  catWhySurrendered: '',
  agesOfHouseholdMembers: '',
  otherPetsInHousehold: '',

  // Behavior
  catsBehaviorTowardsKnownPeople: '',
  catsBehaviorTowardsStrangers: '',
  catsBehaviorTowardsKnownAnimals: '',
  commentsOnBehavior: '',
  catsReactionToNewPeople: '',
  catHouseTrained: '',
  catSpendMajorityOfTime: '',
  catLeftAloneDuration: '',
  catWhenLeftAlone: '',
  catLeftAloneBehaviors: '',
  catHowItPlays: '',
  catToysItLikes: '',
  catGamesItLikes: '',
  catScaredOfAnything: '',
  catScaredOfAnythingExplanation: '',
  catBadHabits: '',
  catAllowedOnFurniture: '',
  catSleepAtNight: '',
  catBehaviorFoodOthers: '',
  catBehaviorToysOthers: '',
  catProblemsRidingInCar: '',
  catProblemsRidingInCarExplanation: '',
  catEscapedBefore: '',
  catEscapedBeforeExplanation: '',

  // Aggressive Behavior
  catEverAttackedPeople: '',
  catEverAttackedPeopleExplanation: '',
  catEverAttackedOtherCats: '',
  catEverAttackedOtherCatsExplanation: '',

  // Medical History
  catVeterinarianList: '',
  catVeterinarianYearlyVisits: '',
  catSpayedNeutered: '',
  catVaccinationHistory: '',
  catVaccinationsCurrent: '',
  catTestedHeartworm: '',
  catTestedHeartwormExplanation: '',
  catHeartwormPrevention: '',
  catHeartwormPreventionExplanation: '',
  catMicrochipped: '',
  catMicrochippedExplanation: '',
  catVetOrGroomerBehavior: '',
  catVetMuzzled: '',
  catPastOrPresentHealthProblems: '',
  catPastOrPresentHealthProblemsExplanation: '',
  catCurrentMedications: '',
  catCurrentMedicationsExplanation: '',

  // Feeding
  catTypeOfFood: '',
  catEatingFrequency: '',
  catAmountOfFood: '',
  catFoodTreats: '',
  catFoodTreatsExplanation: '',

  // Other
  additionalInformation: '',
  fullBodyPhotoOfCat: '',
  closeUpPhotoOfCatsFace: '',
  copiesOfRecords: '',
})

const formStep = reactive({
  currentStep: 1,
})

const handleSubmit = () => {
  console.log('Form submitted with state:', formState)
  // Add form validation and submission logic here
  if (formStep.currentStep < 6) {
    formStep.currentStep += 1
  } else {
    // Final submission logic
    alert('Form submitted successfully!')
  }
}
</script>

<template>
  <section class="page-shell">
    <section class="form-card" aria-labelledby="form-title">
      <div class="form-header">
        <img src="../../public/images/cat.png" alt="cat" height="50" width="100" />
        <h1>Feline Surrender</h1>
      </div>
      <SurrenderSteps :formStep="formStep.currentStep" />
      <content>
        <HouseholdSection v-if="formStep.currentStep === 1" :formState="formState" />
        <BehaviorSection v-if="formStep.currentStep === 2" :formState="formState" />
        <AggressiveSection v-if="formStep.currentStep === 3" :formState="formState" />
        <MedicalSection v-if="formStep.currentStep === 4" :formState="formState" />
        <FeedingSection v-if="formStep.currentStep === 5" :formState="formState" />
        <OtherSection v-if="formStep.currentStep === 6" :formState="formState" />
      </content>
      <div class="actions">
        <Button
          @click="handleSubmit"
          type="submit"
          :title="formStep.currentStep === 6 ? 'Submit' : 'Next'"
          color="green"
          size="large"
        />
      </div>
    </section>
  </section>
</template>

<style scoped lang="css">
.page-shell {
  min-height: 100vh;
  background-color: var(--green);
  padding: 9rem 16px 64px;
  .form-card {
    max-width: 1100px;
    margin: 0 auto;
    background: var(--white);
    color: var(--font-color-dark);
    border-radius: 24px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    padding: 48px 48px 32px;
    .form-header {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px;
      margin-bottom: 4px;
      color: var(--green);
      & h1 {
        font-size: 4.25rem;
        line-height: 1.2;
        letter-spacing: 0.2px;
      }
      img {
        width: 100px;
      }
    }
    .actions {
      display: flex;
      justify-content: center;
      gap: 16px;
      margin-top: 20px;
    }
  }
  @media (max-width: 440px) {
    .form-header {
      flex-direction: column;
      align-items: center;
      gap: 0px;
      margin-bottom: 1rem;
      & h1 {
        font-size: 1.75rem;
        text-align: center;
      }
    }
  }
}
</style>
