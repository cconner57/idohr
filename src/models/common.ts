export interface IPet {
  id: string
  name: string
  physicalTraits?: {
    age: string | null
    breed: string | null
    coatLength: string | null
    color: string | null
    health?: string | null
    sex: string | null
    size: string | null
    species: string | null
  }
  behavioralTraits?: {
    energyLevel: string | null
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
  adoptionFee: number | null
  spotlightDescription?: string | null
  photos?: string[] | null
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
