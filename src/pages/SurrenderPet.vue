<script setup lang="ts">
import type { SurrenderFormState } from '../models/common'
import { reactive } from 'vue'
import InputField from '../components/common/ui/InputField.vue'

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
</script>

<template>
  <h1>Feline Surrender Form</h1>
  <h5>Cat & Household Information</h5>
  <form>
    <InputField label="First Name" placeholder="First Name" :modelValue="formState.firstName" />
    <InputField label="Last Name" placeholder="Last Name" :modelValue="formState.lastName" />
    <InputField
      label="Phone Number"
      placeholder="Phone Number"
      :modelValue="formState.phoneNumber"
    />
    <InputField label="Email" placeholder="Email" :modelValue="formState.email" />
    <InputField
      label="Street Address"
      placeholder="Street Address"
      :modelValue="formState.streetAddress"
    />
    <InputField label="City" placeholder="City" :modelValue="formState.city" />
    <InputField label="State" placeholder="State" :modelValue="formState.state" />
    <InputField label="Zip Code" placeholder="Zip Code" :modelValue="formState.zipCode" />
    <InputField
      label="When do you need to surrender your cat"
      placeholder="When do you need to surrender your cat"
      :modelValue="formState.whenToSurrenderCat"
    />
    <InputField label="Cat's Name" placeholder="Cat's Name" :modelValue="formState.catName" />
    <InputField label="Sex" placeholder="Cat Sex" :modelValue="formState.catSex" />
    <InputField label="Age" placeholder="Age" :modelValue="formState.catAge" />
    <InputField
      label="How long have you had your cat?"
      placeholder="How long have you had your cat?"
      :modelValue="formState.catOwnershipDuration"
    />
    <InputField
      label="Where did you get your cat?"
      placeholder="Where did you get your cat?"
      :modelValue="formState.catLocationFound"
    />
    <InputField
      label="Why are you surrendering your cat?"
      placeholder="Why are you surrendering your cat?"
      :modelValue="formState.catWhySurrendered"
    />
    <InputField
      label="Including yourself, how many people of the following ages live in your home?"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField
      label="What other animals did the cat live with?"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField
      label="How does the cat usually behave towards people they do know?"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField
      label="How does the cat usually behave towards animals they do not know?"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField
      label="How does the cat usually behave towards animals they know"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField
      label="Comments on answers above"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField
      label="How does the cat usually react when an unfamiliar person approaches or enters the yard or house?"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField
      label="Is the cat housetrained?"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField
      label="Where does the cat spend the majority of their time?"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField
      label="How many hours a day is the cat left alone without a human?"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField
      label="When left alone, is he/she..."
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField
      label="When left alone, does the cat usually show any of the following behaviors?"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField
      label="When the cat plays, do they typically..."
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField
      label="What toys does the cat like?"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField
      label="What games does the cat like?"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField
      label="Is the cat scared of anything?"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField label="If yes, please explain" placeholder="Email" :modelValue="formState.email" />
    <InputField
      label="Please tell us the cats bad habits"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField
      label="Is the cat allowed on furniture?"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField
      label="Where does the pet usually sleep at overnight?"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField
      label="Describe the pets reaction if a person or other cat gets near or attempts to take food he/she is eating"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField
      label="Describe the pets reaction if a person or other cat attempts to take a toy they are playing with"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField
      label="Does the cat have problems riding in cars?"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField label="If yes, please explain" placeholder="Email" :modelValue="formState.email" />
    <InputField
      label="Has the pet escaped your property 2 or more times in the last 6 months?"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField label="If yes, please explain" placeholder="Email" :modelValue="formState.email" />
    <InputField
      label="Has the cat ever attacked or bit a person?"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField label="If yes, please explain" placeholder="Email" :modelValue="formState.email" />
    <InputField
      label="Has the cat ever attacked or bit a cat?"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField label="If yes, please explain" placeholder="Email" :modelValue="formState.email" />
    <InputField
      label="Please list all veterniarians that have seen the cat, including address and number"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField
      label="Does the cat see a veterinarian at least once a year?"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField
      label="Is the cat spayed/neutered?"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField
      label="What vaccinations has the cat received?"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField
      label="Are vaccinations current?"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField
      label="Has the cat been tested for heartworm?"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField
      label="If yes, what were the test results"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField
      label="Is the pet taking heartworm preventative?"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField
      label="If yes, when is the next dosage due?"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField
      label="Is the pet microchipped?"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField
      label="If yes, please provide microchip number"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField
      label="Check if the cat has ever shown any of the following behaviors when handled by a vet or groomer"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField
      label="Does the cat have to be muzzled at the veterinarians?"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField
      label="Does the pet have any past or present health problems"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField label="If yes, please describe" placeholder="Email" :modelValue="formState.email" />
    <InputField
      label="Is the cat currently taking any medications?"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField
      label="If yes, please list medications"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField
      label="What type of food does the cat eat?"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField
      label="How many times a day is pet fed?"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField
      label="How much is fed per feeding?"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField
      label="Does the pet get treats?"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField
      label="If yes, what treats does the pet like?"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField
      label="Please feel free to tell us any other information about the pet you feel is important"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField
      label="Please upload a full body picture of the pet"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField
      label="Please upload a up close head shot of the pet"
      placeholder="Email"
      :modelValue="formState.email"
    />
    <InputField
      label="Please updload any records you have for the pet"
      placeholder="Email"
      :modelValue="formState.email"
    />

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<style scoped lang="css">
h1 {
  color: blue;
  margin-top: 5rem;
  font-size: 72px;
}
</style>
