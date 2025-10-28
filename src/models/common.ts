export interface IPet {
  slug: string
  name: string
  physicalTraits?: {
    sex?: string
    age?: string
    size?: string
    breed: string
    color?: string
    health?: string
    species: string
  }
  behavioralTraits?: {
    mustGoWithAnotherCat?: boolean
    goodWithKids?: boolean
    goodWithDogs?: boolean
    goodWithCats?: boolean
    energyLevel?: string
    temperament?: string
    specialNeeds?: string
    houseTrained?: boolean
  }
  medicalHistory?: {
    vaccinationsUpToDate?: boolean
    spayedOrNeutered?: boolean
    microchipped?: boolean
    shots?: {
      felineHerpesVirus?: {
        description?: string
        dateAdministered?: string
        receivedTreatment?: boolean
      }
      felineCalicivirus?: {
        description?: string
        dateAdministered?: string
        receivedTreatment?: boolean
      }
      felinePanleukopenia1?: {
        description?: string
        dateAdministered?: string
        receivedTreatment?: boolean
      }
      felinePanleukopenia2?: {
        description?: string
        dateAdministered?: string
        receivedTreatment?: boolean
      }
      felinePanleukopenia3?: {
        description?: string
        dateAdministered?: string
        receivedTreatment?: boolean
      }
      felineLeukemina1?: {
        description?: string
        dateAdministered?: string
        receivedTreatment?: boolean
      }
      felineLeukemina2?: {
        description?: string
        dateAdministered?: string
        receivedTreatment?: boolean
      }
      rabies?: {
        description?: string
        dateAdministered?: string
        receivedTreatment?: boolean
      }
      spayNeuter?: {
        description?: string
        dateAdministered?: string
        receivedTreatment?: boolean
      }
    }
  }
  adoptionFee?: number
  spotlight?: boolean
  spotlightDescription?: string
  photos?: string[]
  descriptions?: {
    medicalDescription?: string
    physicalDescription?: string
    behavioralDescription?: string
    spotlightDescription?: string
    funDescription?: string
    aboutDescription?: string
  }
}
