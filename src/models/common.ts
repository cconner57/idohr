import type { TPetBreed } from '../constants/breeds.ts'

export type TSpecies = 'cat' | 'dog'
export type TSex = 'male' | 'female'
export type TSize = 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large'
export type TAgeGroup = 'baby' | 'young' | 'adult' | 'senior'
export type TEnergyLevel = 'low' | 'medium' | 'high'
export type TCoatLength = 'short' | 'medium' | 'long' | 'wire' | 'hairless'
export type TEnvironment = 'outdoor' | 'indoor' | 'indoor/outdoor'

export type TAdoptionFlow = 'cat' | 'dog'

export type TPetStatus =
  | 'intake'
  | 'available'
  | 'adoption-pending'
  | 'adopted'
  | 'foster'
  | 'hold'
  | 'archived'

export type TTemperament =
  | 'affectionate'
  | 'playful'
  | 'shy'
  | 'independent'
  | 'vocal'
  | 'curious'
  | 'laid-back'
  | 'bossy'
  | 'anxious'
  | 'hunter'

export type TMedicalConcern =
  | 'anemia'
  | 'asthma'
  | 'bladder infection'
  | 'cancer'
  | 'cystitis'
  | 'dental problems'
  | 'diabetes'
  | 'ear infections'
  | 'feline leukemia virus (felv)'
  | 'feline infectious peritonitis (fip)'
  | 'feline immunodeficiency (fiv)'
  | 'allergies - flea'
  | 'allergies - food'
  | 'allergies - skin'
  | 'gastrointestinal issues'
  | 'heartworm disease'
  | 'hyperthyroidism'
  | 'kidney disease'
  | 'obesity'
  | 'upper respiratory infections'

export interface IPet {
  id: string
  slug?: string

  name: string
  species: TSpecies
  breed: TPetBreed | 'Unknown' | 'Mix' | null
  sex: TSex | 'unknown'

  physical: {
    size: TSize | null
    color: string | null
    coatLength: TCoatLength | null
    ageGroup: TAgeGroup | null
    dateOfBirth?: string | null
    healthSummary?: string | null
  }

  behavior: {
    energyLevel: TEnergyLevel | null
    personalityTags: TTemperament[] | null
    isHouseTrained: boolean | null
    isGoodWithKids: boolean | null
    isGoodWithCats: boolean | null
    isGoodWithDogs: boolean | null
    prefersToBeAlone: boolean | null
    specialNeeds?: string | null
    mustGoWithAnotherCat?: boolean | null
    mustGoWithAnotherDog?: boolean | null
    bonded?: {
      isBonded?: boolean | null
      bondedWith?: string[] | null
    } | null
  }

  medical: {
    vaccinationsUpToDate: boolean | null
    spayedOrNeutered: boolean | null
    microchipped: boolean | null
    microchipID?: string | null
    microchipCompany?: string | null
    healthConcerns?: TMedicalConcern[] | null
    currentMedications?: string[] | null
    vaccinations: {
      rabies?: IVaccineRecord
      bordetella?: IVaccineRecord
      felineDistemper?: IVaccineSeries
      canineDistemper?: IVaccineSeries
      felineLeukemia?: IVaccineSeries
      leptospira?: IVaccineSeries
      other?: IVaccineRecord[]
    }
    surgeries: IMedicalProcedure[]
  }

  descriptions: {
    primary: string | null
    spotlight?: string | null
    behavioral?: string | null
    specialNeeds?: string | null
    origin?: string | null
    fun?: string | null
    additionalInformation?: string[] | null
  }

  details: {
    status: TPetStatus
    intakeDate?: string | null
    adoptionFee: number | null
    shelterLocation?: string | null
    preferredPetLitter?: string | null
    environmentType?: TEnvironment | null
  }

  adoption: {
    isAdopted: boolean
    date?: string | null
    price?: number | null
    newAdoptedName?: string | null
    adoptedBy?: string | null
    photo?: IPhoto | null
    surveyCompleted?: boolean | null
  }

  foster: {
    beingFostered: boolean
    startDate?: string | null
    endDate?: string | null
    parentName?: string | null
    parentPhoto?: IPhoto | null
  }

  returned: {
    isReturned: boolean
    date?: string | null
    reason?: string | null
  }

  sponsored: {
    isSponsored: boolean
    sponsoredBy?: string | null
    amount?: number | null
    date?: string | null
  }

  photos: IPhoto[]

  profileSettings: {
    adoptionProcess: TAdoptionFlow
    isSpotlightFeatured: boolean
    showAdditionalInformation: boolean
    showMedicalHistory: boolean
  }
}

export interface IVaccineRecord {
  dateAdministered: string
  expiresAt?: string
  veterinarian?: string
}

export interface IVaccineSeries {
  round1?: IVaccineRecord
  round2?: IVaccineRecord
  round3?: IVaccineRecord
  isComplete: boolean
}

export interface IMedicalProcedure {
  id: string
  name: string
  date: string
  notes?: string
}

export interface IPhoto {
  url: string
  thumbnailUrl?: string
  isPrimary: boolean
  uploadedAt: string
}
