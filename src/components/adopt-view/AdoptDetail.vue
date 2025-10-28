<script setup lang="ts">
import type { IPet } from '../../models/common'
import Button from '../ui/Button.vue'
import Capsules from '../ui/Capsules.vue'
import PetItem from '../pet-item/PetItem.vue'

defineProps<{
  pet: IPet
}>()

function handleStartAdoption() {
  // Implement start adoption logic here
}

function handleScheduleMeet() {
  // Implement scheduling logic here
}

function handleShare() {
  // Implement sharing logic here
}

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr)
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
</script>

<template>
  <div class="adopt-detail">
    <div class="adopt-detail__main">
      <img :src="`/images/${pet.name.toLowerCase() ?? ''}.jpeg`" :alt="pet.name" />
      <div class="adopt-detail__info">
        <div class="adopt-detail__info__main">
          <h1>{{ pet.name }}</h1>
          <div class="adopt-detail__traits">
            <Capsules :label="pet.physicalTraits?.species" />
            <Capsules :label="pet.physicalTraits?.sex" />
            <Capsules :label="pet.physicalTraits?.age" />
            <Capsules :label="pet.physicalTraits?.color" />
          </div>
          <p>{{ pet?.descriptions?.behavioralDescription }}</p>
          <div class="adopt-detail__actions">
            <Button
              title="Start Adoption"
              color="blue"
              @click="handleStartAdoption"
              :fullWidth="false"
            />
            <Button
              title="Schedule a Meet"
              color="purple"
              @click="handleScheduleMeet"
              :fullWidth="false"
            />
            <Button title="Share" color="green-weak" @click="handleShare" :fullWidth="false" />
          </div>
        </div>
        <div class="adopt-detail__additional-info">
          <div class="adopt-detail__additional-info__item">
            <p>Breed</p>
            <p>{{ pet.physicalTraits?.breed }}</p>
          </div>
          <div class="adopt-detail__additional-info__item">
            <p>Color</p>
            <p>{{ pet.physicalTraits?.color }}</p>
          </div>
          <div class="adopt-detail__additional-info__item">
            <p>Size</p>
            <p>{{ pet.physicalTraits?.size }}</p>
          </div>
          <div class="adopt-detail__additional-info__item">
            <p>House-trained</p>
            <p>{{ pet.behavioralTraits?.houseTrained ? 'Yes' : 'No' }}</p>
          </div>
          <div class="adopt-detail__additional-info__item">
            <p>Health</p>
            <p>
              {{ pet.medicalHistory?.vaccinationsUpToDate ? 'Vaccinated' : 'Not Vaccinated' }},
              {{
                pet.medicalHistory?.spayedOrNeutered ? 'Spayed/Neutered' : 'Not Spayed/Neutered'
              }},
              {{ pet.medicalHistory?.microchipped ? 'Microchipped' : 'Not Microchipped' }}
            </p>
          </div>
          <div class="adopt-detail__additional-info__item">
            <p>Good in a home with</p>
            <p>
              {{ pet.behavioralTraits?.goodWithCats ? 'Other Cats' : ''
              }}{{
                pet.behavioralTraits?.goodWithCats &&
                (pet.behavioralTraits?.goodWithDogs || pet.behavioralTraits?.goodWithKids)
                  ? ', '
                  : ''
              }}
              {{ pet.behavioralTraits?.goodWithDogs ? 'Other Dogs' : ''
              }}{{
                pet.behavioralTraits?.goodWithDogs &&
                (pet.behavioralTraits?.goodWithCats || pet.behavioralTraits?.goodWithKids)
                  ? ', '
                  : ''
              }}
              {{ pet.behavioralTraits?.goodWithKids ? 'Kids' : '' }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="adopt-detail__about">
      <div class="adopt-detail__about__content">
        <div class="adopt-detail__about__fun">
          <h2>From {{ pet.name }}</h2>
          <p>{{ pet.descriptions?.funDescription }}</p>
        </div>
        <div class="adopt-detail__about__additional-info">
          <h2>Additional Information</h2>
          <ul>
            <li>Not good with dogs</li>
            <li>Must be the only pet in the home</li>
            <li>Special dietary needs</li>
            <li>Requires regular grooming</li>
          </ul>
        </div>
      </div>
      <div class="adopt-detail__about__medical">
        <h2>Medical History</h2>
        <ul>
          <li v-for="(shot, index) in pet.medicalHistory?.shots" :key="index">
            <p>{{ shot?.description }}</p>
            <p>
              {{
                shot?.receivedTreatment
                  ? 'Received on ' + formatDate(shot?.dateAdministered ?? '')
                  : 'Not Received'
              }}
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="adopt-detail__adoption-process">
      <h2>Adoption Process</h2>
      <ol>
        <li>Fill out and submit an adoption application form</li>
        <li>Submit photos or video of your home</li>
        <li>Pay adoption fee via Venmo or Paypal</li>
        <li>Adoption day!</li>
      </ol>
    </div>
  </div>
  <div class="adopt-detail__more-friends">
    <h2>More Friends You Might Like</h2>
    <div class="adopt-detail__more-friends__list">
      <PetItem
        name="Crystal"
        :capsules="[
          pet.physicalTraits?.species ?? '',
          pet.physicalTraits?.sex ?? '',
          pet.physicalTraits?.age ?? '',
        ]"
      />
      <PetItem
        name="Crystal"
        :capsules="[
          pet.physicalTraits?.species ?? '',
          pet.physicalTraits?.sex ?? '',
          pet.physicalTraits?.age ?? '',
        ]"
      />
      <PetItem
        name="Crystal"
        :capsules="[
          pet.physicalTraits?.species ?? '',
          pet.physicalTraits?.sex ?? '',
          pet.physicalTraits?.age ?? '',
        ]"
      />
      <PetItem
        name="Crystal"
        :capsules="[
          pet.physicalTraits?.species ?? '',
          pet.physicalTraits?.sex ?? '',
          pet.physicalTraits?.age ?? '',
        ]"
      />
    </div>
  </div>
</template>

<style scoped lang="css">
.adopt-detail {
}

.adopt-detail__main {
  display: flex;
  gap: 30px;
  img {
    height: 500px;
    width: 780px;
    object-fit: cover;
    border-radius: 16px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25);
  }
}

.adopt-detail__info {
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: var(--white);
  color: var(--font-color-dark);
  padding: 20px;
  border-radius: 16px;
  max-width: 560px;
  height: 500px;
  max-height: 550px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25);
}

.adopt-detail__info__main {
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-bottom: 1px solid rgb(178, 177, 177);
  padding-bottom: 20px;
  h1 {
    font-size: 1.75rem;
  }
}

.adopt-detail__traits {
  display: flex;
  flex-direction: row;
  gap: 10px;
  & p {
    background-color: var(--green-weak);
    padding: 4px 12px;
    border-radius: 16px;
  }
}

.adopt-detail__actions {
  display: flex;
  flex-direction: row;
  gap: 16px;
}
.adopt-detail__actions .start-adoption {
  background-color: var(--blue);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.adopt-detail__actions .schedule-meet {
  background-color: var(--purple);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.adopt-detail__actions .share {
  background-color: var(--green-weak);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.adopt-detail__additional-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.adopt-detail__additional-info__item {
  display: flex;
  flex-direction: row;
  & p:first-child {
    width: 200px;
  }
  & p:last-child {
    font-weight: bold;
    width: 300px;
  }
}

.adopt-detail__about {
  display: flex;
  margin-top: 20px;
  background-color: var(--white);
  padding: 20px;
  border-radius: 16px;
  color: var(--font-color-dark);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25);
  & .adopt-detail__about__content {
    width: 50%;
    margin-right: 20px;
    & .adopt-detail__about__fun {
      width: 100%;
      height: 50%;
    }
    & .adopt-detail__about__additional-info {
      margin-top: 2rem;
      width: 50%;
      ul {
        padding-left: 20px;
        list-style: disc;
        li {
          margin-bottom: 8px;
        }
      }
    }
  }
  & .adopt-detail__about__medical {
    width: 50%;
    ul {
      margin-bottom: 16px;
      li {
        margin-bottom: 8px;
        display: flex;
        border-bottom: 1px solid rgb(178, 177, 177);
        width: 500px;
        p {
          margin-bottom: 8px;
        }
        p:first-child {
          margin-right: 8px;
          width: 300px;
        }
        p:last-child {
          font-weight: bold;
        }
      }
      li:last-of-type {
        border-bottom: none;
        margin-bottom: 0px;
      }
    }
  }
  h2 {
    font-size: 1.5rem;
    margin-bottom: 16px;
  }
  p {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 12px;
  }
}

.adopt-detail__adoption-process {
  margin-top: 20px;
  background-color: var(--white);
  color: var(--font-color-dark);
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25);
  h2 {
    font-size: 1.5rem;
    margin-bottom: 16px;
  }
  ol {
    padding-left: 20px;
    margin-bottom: 16px;
    list-style-type: decimal;
    list-style-position: inside;
  }
  li {
    margin-bottom: 8px;
  }
}

.adopt-detail__more-friends {
  margin-top: 30px;
  width: 100%;
  background-color: var(--white);
  color: var(--font-color-dark);
  padding: 20px 20px 30px;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25);
  h2 {
    font-size: 1.5rem;
    margin-bottom: 16px;
  }
}

.adopt-detail__more-friends__list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 0 30px;
}

.adopt-detail__more-friends__item__traits {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
</style>
