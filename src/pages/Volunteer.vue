<script setup lang="ts"></script>

<template>
  <h1>I Dream of Home Rescue</h1>
  <h5>Volunteer Application</h5>
  <p>
    I DREAM OF HOME RESCUE (IDOHR) is non-profit all volunteer organization dedicated to helping
    homeless cats and kittens find their forever homes. We are seeking responsible mature people to
    assist with various tasks involved in feeding the animals, cleaning, socializing with
    cats/kittens, providing customer support for adoptions, administration, etc.
    <span>Please consider volunteering,</span>
    <span>you will meet a lot of wonderful animals and many other animal lovers.</span>
  </p>
  <form action="" class="volunteer-form">
    <div>
      <section class="date-section">
        <label for="todaysDate"
          >Date: <input type="date" name="todaysDate" id="todaysDate"
        /></label>
      </section>
      <section class="name-section">
        <TextInput label="First Name" modelValue="" type="text" />
        <label for="firstName"
          >First Name: <input type="text" name="firstName" id="firstName" autocomplete="given-name"
        /></label>
        <label for="lastName"
          >Last Name: <input type="text" name="lastName" id="lastName" autocomplete="family-name"
        /></label>
      </section>

      <section class="under21-section">
        <label for="under21"
          >If under 21, Age: <input type="checkbox" name="under21" id="under21"
        /></label>
      </section>

      <section class="address-section">
        <label for="address"
          >Address: <input type="text" name="address" id="address" autocomplete="address-line1"
        /></label>
        <label for="aptNumber">Apt.#: <input type="text" name="aptNumber" id="aptNumber" /></label>
        <label for="city"
          >City: <input type="text" name="city" id="city" autocomplete="address-level2"
        /></label>
        <label for="zipCode"
          >Zip: <input type="text" name="zipCode" id="zipCode" autocomplete="postal-code"
        /></label>
      </section>

      <section class="otherContact-section">
        <label for="phoneNumber"
          >Phone Number: <input type="tel" name="phoneNumber" id="phoneNumber" autocomplete="tel"
        /></label>

        <label for="birthday"
          >Birthday: <input type="date" name="birthday" id="birthday" autocomplete="bday"
        /></label>
      </section>

      <section class="allergies-section">
        <label for="allergies">Allergies:</label>
        <label for="allergiesYes"
          >Yes <input type="radio" name="allergies" id="allergiesYes"
        /></label>
        <label for="allergiesNo"
          >No <input type="radio" name="allergies" id="allergiesNo" />
          <input type="radio" name="allergies" id="allergiesNo"
        /></label>
      </section>

      <section class="emergencyContact-section">
        <label for="emergencyContact"
          >Emergency Contact Person:
          <input type="text" name="emergencyContact" id="emergencyContact"
        /></label>

        <label for="emPhoneNumber"
          >Phone Number: <input type="tel" name="emPhoneNumber" id="emPhoneNumber"
        /></label>

        <label for="relationship"
          >Relationship: <input type="text" name="relationship" id="relationship"
        /></label>
      </section>
    </div>

    <div>
      <section class="volunteerExperience-section">
        <label for="volunteerExperience"
          >Volunteer Experience (if any):
          <textarea
            name="volunteerExperience"
            id="volunteerExperience"
            rows="4"
            cols="50"
          ></textarea>
        </label>
      </section>

      <section class="hobbies-section">
        <label for="hobbies"
          >Special Interests, Hobbies:
          <textarea name="hobbies" id="hobbies" rows="4" cols="50"></textarea>
        </label>
      </section>

      <section class="interest-section">
        <label for="whyInterested"
          >Why are you interested in being a volunteer:
          <textarea name="whyInterested" id="whyInterested" rows="4" cols="50"></textarea>
        </label>
      </section>

      <section class="volunteerPosition-section">
        <label for="volunteerPosition">Volunteer Position Preferences:</label>

        <label for="feeding/cleaning"
          >Feeding/Cleaning <input type="checkbox" name="volunteerPosition" id="feeding/cleaning"
        /></label>
        <label for="customerSupport"
          >Customer Support <input type="checkbox" name="volunteerPosition" id="customerSupport"
        /></label>
        <label for="catSocializing"
          >Cat Socializing <input type="checkbox" name="volunteerPosition" id="catSocializing"
        /></label>
      </section>

      <section class="supportWork-section">
        <label for="supportWork"
          >Other desired support work:
          <textarea name="supportWork" id="supportWork" rows="4" cols="50"></textarea>
        </label>
      </section>

      <section class="dayAvailability-section">
        <label for="dayAvailability">When are you available (select all that apply):</label>
        <label for="sunday"
          >Sunday <input type="checkbox" name="dayAvailability" id="sunday"
        /></label>
        <label for="monday"
          >Monday <input type="checkbox" name="dayAvailability" id="monday"
        /></label>
        <label for="tuesday"
          >Tuesday <input type="checkbox" name="dayAvailability" id="tuesday"
        /></label>
        <label for="wednesday"
          >Wednesday <input type="checkbox" name="dayAvailability" id="wednesday"
        /></label>
        <label for="thursday"
          >Thursday <input type="checkbox" name="dayAvailability" id="thursday"
        /></label>
        <label for="friday"
          >Friday <input type="checkbox" name="dayAvailability" id="friday"
        /></label>
        <label for="saturday"
          >Saturday <input type="checkbox" name="dayAvailability" id="saturday"
        /></label>
      </section>

      <section class="timeAvailability-section">
        <label for="timeAvailability">Preference on time of day (select all that apply):</label>
        <div class="time-slots">
          <label class="time-slot">
            <input type="checkbox" name="timeAvailability" id="10-12" />
            <div>
              <p>10AM - 12PM</p>
              <p>Clean, feed & socialize with cats</p>
            </div>
          </label>
          <label class="time-slot">
            <input type="checkbox" name="timeAvailability" id="12-2" />
            <div>
              <p>12PM - 2PM</p>
              <p>Focus on cat socializing & customer support</p>
            </div>
          </label>
          <label class="time-slot">
            <input type="checkbox" name="timeAvailability" id="1-3" />
            <div>
              <p>1PM - 3PM</p>
              <p>Focus on cat socializing & customer support</p>
            </div>
          </label>
          <label class="time-slot">
            <input type="checkbox" name="timeAvailability" id="2-4" />
            <div>
              <p>2PM - 4PM</p>
              <p>Focus on cat socializing & customer support</p>
            </div>
          </label>
          <label class="time-slot">
            <input type="checkbox" name="timeAvailability" id="3-5" />
            <div>
              <p>3PM - 5PM</p>
              <p>Focus on cat socializing & customer support</p>
            </div>
          </label>
          <label class="time-slot">
            <input type="checkbox" name="timeAvailability" id="4-6" />
            <div>
              <p>4PM - 6PM</p>
              <p>Focus on cat socializing & customer support</p>
            </div>
          </label>
          <label class="time-slot">
            <input type="checkbox" name="timeAvailability" id="6-8" />
            <div>
              <p>6PM - 8PM</p>
              <p>Clean, feed & socialize with cats</p>
            </div>
          </label>
        </div>
      </section>
    </div>

    <p>
      I, NAME, herby volunteer to assist in various tasks to support IDOHR. I understand that IDOHR
      or PetSmart is not responsible for any illness or injury caused by any animals that I come
      into contact with during my volunteer work. I agree to hold harmless and release from
      liability IDOHR and PetSmart should I become sick or injured from any animals as a result of
      my volunteer work.
    </p>

    <section class="signature-section">
      <label for="signature"
        >Signature: <input type="text" name="signature" id="signature"
      /></label>
      <label for="signatureDate"
        >Date: <input type="date" name="signatureDate" id="signatureDate"
      /></label>
    </section>
    <section class="parentSignature-section">
      <label for="parentSignature"
        >Signature of Parent (if under 18 years old):
        <input type="text" name="parentSignature" id="parentSignature"
      /></label>
      <label for="parentSignatureDate"
        >Date: <input type="date" name="parentSignatureDate" id="parentSignatureDate"
      /></label>
    </section>
  </form>
</template>

<style scoped lang="css">
h5 {
  text-align: center;
}
.name-section {
  margin-bottom: 1rem;
  display: flex;
  flex-wrap: wrap;
  & label {
    margin-right: 0.5rem;
  }
  & :nth-child(3) {
    margin-left: 1rem;
  }
}
.volunteer-form {
  display: flex;
  flex-direction: column;
}

.time-slots {
  display: flex;
}

textarea {
  resize: none;
}
</style>
