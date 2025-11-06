export interface IPet {
  id: string
  name: string
  physicalTraits?: {
    sex: string
    age: string
    size: string
    breed: string
    color: string
    health?: string
    species: string
    coatLength: string
  }
  behavioralTraits?: {
    mustGoWithAnotherCat?: boolean
    mustGoWithAnotherDog?: boolean
    goodWithKids?: boolean
    goodWithDogs?: boolean
    goodWithCats?: boolean
    energyLevel: string
    temperament: string
    specialNeeds?: string
    houseTrained: boolean
  }
  medicalHistory?: {
    vaccinationsUpToDate: boolean
    spayedOrNeutered: boolean
    microchipped: boolean
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
  adoptionFee: number
  spotlightDescription?: string
  photos?: string[]
  descriptions?: {
    medicalDescription?: string
    physicalDescription?: string
    behavioralDescription?: string
    spotlightDescription?: string
    funDescription?: string
    aboutDescription?: string
    additionalInformation?: string[]
  }
  profileSettings: {
    isSpotlightFeatured: boolean
    showMedicalHistory: boolean
    showAdditionalInformation: boolean
    adoptionProcess: string
  }
}

interface IMedicalHistoryItem {
  description?: string
  dateAdministered?: string
  receivedTreatment?: boolean
}
