export interface IPet {
  id: string
  name: string
  adoptedName?: string | null
  physicalTraits?: {
    age: string | null
    breed: string | null
    coatLength: string | null
    color: string | null
    health?: string | null
    sex: 'male' | 'female' | null
    size: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large' | null
    species: 'cat' | 'dog' | null
  }
  behavioralTraits?: {
    energyLevel: 'low' | 'medium' | 'high' | null
    goodWithCats?: boolean | null
    goodWithDogs?: boolean | null
    goodWithKids?: boolean | null
    houseTrained: boolean | null
    mustGoWithAnotherCat?: boolean | null
    mustGoWithAnotherDog?: boolean | null
    specialNeeds?: string | null
    temperament: string | null
  }
  medicalHistory?: {
    vaccinationsUpToDate: boolean | null
    spayedOrNeutered: boolean | null
    microchipped: boolean | null
    microchipID?: string | null
    shots?: {
      felineHerpesVirus?: IMedicalHistoryItem
      felineCalicivirus?: IMedicalHistoryItem
      felinePanleukopenia1?: IMedicalHistoryItem
      felinePanleukopenia2?: IMedicalHistoryItem
      felinePanleukopenia3?: IMedicalHistoryItem
      felineLeukemina1?: IMedicalHistoryItem
      felineLeukemina2?: IMedicalHistoryItem
      rabies?: IMedicalHistoryItem
      spayNeuter?: IMedicalHistoryItem
      canineDistemperAdenovirusParvovirusParainfluenza?: IMedicalHistoryItem
      leptospira?: IMedicalHistoryItem
      bordetella?: IMedicalHistoryItem
      borrelia?: IMedicalHistoryItem
      h3n2H3n8?: IMedicalHistoryItem
    }
  }
  adoption: {
    fee: number | null
    adopted: boolean | null
    adoptionDate?: Date | null
    beingFostered?: boolean | null
    returned?: boolean | null
    sponsored?: boolean | null
  }
  spotlightDescription?: string | null
  photos: {
    primaryPhoto: string | null
    photos: string[] | null
  }
  descriptions?: {
    aboutDescription?: string | null
    additionalInformation?: string[] | null
    behavioralDescription?: string | null
    funDescription?: string | null
    medicalDescription?: string | null
    physicalDescription?: string | null
    spotlightDescription?: string | null
  }
  profileSettings: {
    adoptionProcess: string
    isSpotlightFeatured: boolean
    showAdditionalInformation: boolean
    showMedicalHistory: boolean
  }
}

interface IMedicalHistoryItem {
  description?: string
  dateAdministered?: string
  receivedTreatment?: boolean
}

export interface VolunteerFormState {
  firstName: string
  lastName: string
  address: string
  city: string
  zip: string
  phoneNumber: string
  birthday: string
  age: number | null
  allergies: string
  emergencyContactName: string
  emergencyContactPhone: string
  volunteerExperience: string
  interestReason: string
  positionPreferences: string[]
  availability: string[]
  nameFull: string
  signatureData: string | null
  signatureDate: string
  parentName: string
  parentSignatureData: string | null
  parentSignatureDate: string
}

export interface SurrenderFormState {
  firstName: string
  lastName: string
  phoneNumber: string
  email: string
  streetAddress: string
  city: string
  state: string
  zipCode: string
  whenToSurrenderCat: string
  catName: string
  catSex: string
  catAge: string
  catOwnershipDuration: string
  catLocationFound: string
  catWhySurrendered: string
  agesOfHouseholdMembers: string
  otherPetsInHousehold: string
  catsBehaviorTowardsKnownPeople: string
  catsBehaviorTowardsStrangers: string
  catsBehaviorTowardsKnownAnimals: string
  commentsOnBehavior: string
  catsReactionToNewPeople: string
  catHouseTrained: string
  catSpendMajorityOfTime: string
  catLeftAloneDuration: string
  catWhenLeftAlone: string
  catLeftAloneBehaviors: string
  catHowItPlays: string
  catToysItLikes: string
  catGamesItLikes: string
  catScaredOfAnything: string
  catScaredOfAnythingExplanation: string
  catBadHabits: string
  catAllowedOnFurniture: string
  catSleepAtNight: string
  catBehaviorFoodOthers: string
  catBehaviorToysOthers: string
  catProblemsRidingInCar: string
  catProblemsRidingInCarExplanation: string
  catEscapedBefore: string
  catEscapedBeforeExplanation: string
  catEverAttackedPeople: string
  catEverAttackedPeopleExplanation: string
  catEverAttackedOtherCats: string
  catEverAttackedOtherCatsExplanation: string
  catVeterinarianList: string
  catVeterinarianYearlyVisits: string
  catSpayedNeutered: string
  catVaccinationHistory: string
  catVaccinationsCurrent: string
  catTestedHeartworm: string
  catTestedHeartwormExplanation: string
  catHeartwormPrevention: string
  catHeartwormPreventionExplanation: string
  catMicrochipped: string
  catMicrochippedExplanation: string
  catVetOrGroomerBehavior: string
  catVetMuzzled: string
  catPastOrPresentHealthProblems: string
  catPastOrPresentHealthProblemsExplanation: string
  catCurrentMedications: string
  catCurrentMedicationsExplanation: string
  catTypeOfFood: string
  catEatingFrequency: string
  catAmountOfFood: string
  catFoodTreats: string
  catFoodTreatsExplanation: string
  additionalInformation: string
  fullBodyPhotoOfCat: string
  closeUpPhotoOfCatsFace: string
  copiesOfRecords: string
}
