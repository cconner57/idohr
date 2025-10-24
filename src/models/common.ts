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
    physicalDescription?: string
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
    behavioralDescription?: string
    funDescription?: string
  }
  medicalHistory?: {
    vaccinationsUpToDate?: boolean
    spayedOrNeutered?: boolean
    microchipped?: boolean
    medicalDescription?: string
  }
  adoptionFee?: number
  spotlight?: boolean
  spotlightDescription?: string
  photos?: string[]
}
