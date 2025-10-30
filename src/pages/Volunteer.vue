<!-- eslint-disable max-lines -->
<script setup lang="ts">
import Button from '../components/common/ui/Button.vue'
</script>

<template>
  <section class="page-shell">
    <section class="form-card" aria-labelledby="form-title">
      <header class="form-header">
        <svg
          width="80"
          height="80"
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Dog paw icon"
        >
          <ellipse cx="28" cy="44" rx="11" ry="14" fill="#00a5ad" />
          <ellipse cx="100" cy="44" rx="11" ry="14" fill="#00a5ad" />

          <ellipse cx="52" cy="28" rx="11" ry="14" fill="#00a5ad" />
          <ellipse cx="76" cy="28" rx="11" ry="14" fill="#00a5ad" />

          <path
            fill="#00a5ad"
            d="M64 56
       c-20 0-36 15-36 32
       c0 11 9 20 22 20h28
       c13 0 22-9 22-20
       c0-17-16-32-36-32z"
          />
        </svg>

        <h1 id="form-title">Volunteer Application</h1>
      </header>

      <p class="lede">
        I Dream of Home Rescue (IDOHR) is an all-volunteer, nonprofit dedicated to helping homeless
        cats and kittens find loving, permanent homes. We’re looking for responsible volunteers to
        help with feeding and cleaning, socializing cats and kittens, supporting adoptions, and
        light administrative tasks. Volunteers must be 18 or older. If under 18, a parent or
        guardian must sign the waiver below. Join us and help change a life. You’ll connect with
        amazing animals, work alongside caring volunteers, and make a meaningful impact.
      </p>

      <fieldset class="grid" aria-labelledby="pi">
        <legend id="pi" class="section-title">Personal Information</legend>

        <div class="field">
          <label class="label">First Name:</label>
          <div class="control"><input placeholder="First name" /></div>
        </div>

        <div class="field">
          <label class="label">Last Name:</label>
          <div class="control"><input placeholder="Last name" /></div>
        </div>

        <div class="field col-span-1">
          <label class="label">If under 21, Age:</label>
          <div class="control"><input inputmode="numeric" placeholder="Age" /></div>
        </div>
        <div class="field">
          <label class="label">Address:</label>
          <div class="control"><input placeholder="Address" /></div>
        </div>
        <div class="field">
          <label class="label">City:</label>
          <div class="control"><input placeholder="City" /></div>
        </div>

        <div class="field">
          <label class="label">Zip:</label>
          <div class="control"><input inputmode="numeric" placeholder="Zip" /></div>
        </div>

        <div class="field">
          <label class="label">Phone Number:</label>
          <div class="control"><input inputmode="tel" placeholder="Phone" /></div>
        </div>

        <div class="field">
          <label class="label">Birthday:</label>
          <div class="control"><input type="date" placeholder="mm/dd/yyyy" /></div>
        </div>

        <div class="field col-span-2">
          <label class="label">Allergies?</label>

          <div class="switch-row">
            <span class="switch-text">No</span>
            <label class="switch">
              <input id="allergies" type="checkbox" class="switch-input" />
              <span class="switch__track"></span>
              <span class="switch__thumb"></span>
            </label>

            <span class="switch-text">Yes</span>
          </div>
        </div>

        <div class="field">
          <label class="label">Emergency Contact Person:</label>
          <div class="control"><input placeholder="Name" /></div>
        </div>

        <div class="field">
          <label class="label">Phone Number:</label>
          <div class="control"><input inputmode="tel" placeholder="Phone Number" /></div>
        </div>
      </fieldset>

      <fieldset aria-labelledby="exp">
        <legend id="exp" class="section-title">Experience & Interests</legend>

        <div class="field col-span-2">
          <label class="label">Volunteer Experience (if any):</label>
          <div class="control"><textarea rows="3" placeholder="Briefly describe" /></div>
        </div>

        <div class="field col-span-2">
          <label class="label">Why are you interested in being a volunteer:</label>
          <div class="control"><textarea rows="3" placeholder="Your reason" /></div>
        </div>

        <div class="field col-span-2">
          <label class="label">Volunteer Position Preferences:</label>
          <div class="chips">
            <label class="chip"><input type="checkbox" /> <span>Feeding/Cleaning</span></label>
            <label class="chip"><input type="checkbox" /> <span>Customer Support</span></label>
            <label class="chip"><input type="checkbox" /> <span>Cat Socializing</span></label>
          </div>
        </div>
      </fieldset>

      <fieldset aria-labelledby="avail">
        <legend id="avail" class="section-title">
          Preference on time of day (select all that apply):
        </legend>

        <div class="times">
          <label class="time-card">
            <input type="checkbox" />
            <div class="time-card__content">
              <strong>10AM – 12PM</strong>
              <small>Clean, feed & socialize with cats</small>
            </div>
          </label>

          <label class="time-card">
            <input type="checkbox" />
            <div class="time-card__content">
              <strong>12PM – 2PM</strong>
              <small>Focus on cat socializing & customer support</small>
            </div>
          </label>

          <label class="time-card">
            <input type="checkbox" />
            <div class="time-card__content">
              <strong>4PM – 6PM</strong>
              <small>Focus on cat socializing & customer support</small>
            </div>
          </label>

          <label class="time-card">
            <input type="checkbox" />
            <div class="time-card__content">
              <strong>3PM – 4PM</strong>
              <small>Clean, feed & socialize with cats</small>
            </div>
          </label>
        </div>
      </fieldset>

      <fieldset class="waiver-container">
        <legend id="waiv" class="section-title">Agreement</legend>
        <p class="waiver">
          I, (NAME), hereby volunteer to assist in various tasks to support IDOHR. I understand that
          IDOHR and partners are not responsible for any illness or injury caused during volunteer
          work. I agree to hold harmless IDOHR and partners should I become sick or injured from any
          animals as a result of my volunteer work.
        </p>

        <div class="grid">
          <div class="field">
            <label class="label">Signature:</label>
            <div class="control"><input placeholder="" /></div>
          </div>
          <div class="field">
            <label class="label">Date:</label>
            <div class="control"><input type="date" /></div>
          </div>
        </div>

        <label for="parental-consent" class="label"
          >If under 18, I (parent/guardian name) give permission for my child to volunteer with
          IDOHR and agree to the above waiver.</label
        >
        <div class="grid" style="margin-top: 12px">
          <div class="field">
            <label class="label">Parent/Guardian Signature:</label>
            <div class="control"><input placeholder="" /></div>
          </div>
          <div class="field">
            <label class="label">Date:</label>
            <div class="control"><input type="date" /></div>
          </div>
        </div>
      </fieldset>

      <div class="actions">
        <Button type="submit" title="Submit Application" color="green" size="large" />
      </div>
    </section>
  </section>
</template>

<style scoped>
.page-shell {
  min-height: 100vh;
  background-color: var(--green);
  padding: 9rem 16px 64px;
}
fieldset {
  border: 0;
  margin: 24px 0;
  padding: 0;
}
.form-card {
  max-width: 1100px;
  margin: 0 auto;
  background: var(--white);
  color: var(--font-color-dark);
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 48px 48px 32px;
}
.form-header {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 4px;
  color: var(--green);
  & h1 {
    font-size: 4.25rem;
    line-height: 1.2;
    letter-spacing: 0.2px;
  }
  & img {
    width: 80px;
    height: 80px;
    filter: invert(42%) sepia(87%) saturate(1630%) hue-rotate(150deg) brightness(92%) contrast(101%);
  }
}
.switch-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 6px;
}
.switch-text {
  color: var(--text-700);
  font-weight: 600;
}

.switch {
  position: relative;
  display: inline-block;
  width: 46px;
  height: 28px;
  border-radius: 999px;
  cursor: pointer;
}

.switch-input {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  margin: 0;
  cursor: pointer;
}

.switch__track {
  position: absolute;
  inset: 0;
  background: #e7ebf0;
  border-radius: 999px;
  transition: background 0.2s ease;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.03);
}
.switch__thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 22px;
  height: 22px;
  border-radius: 999px;
  background: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease;
}

.switch-input:checked ~ .switch__track {
  background: #00a5ad;
}
.switch-input:checked ~ .switch__thumb {
  transform: translateX(18px);
}

.switch-input:focus-visible ~ .switch__track {
  box-shadow: 0 0 0 3px rgba(0, 165, 173, 0.4);
}
.lede {
  color: var(--text-700);
  margin: 6px 0 18px;
  font-size: 1.125rem;
  line-height: 1.6;
  max-width: 1000px;
  user-select: none;
  font-weight: 400;
}

.section-title {
  font-weight: 700;
  font-size: 18px;
  margin: 18px 0 12px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}
.col-span-1 {
  grid-column: span 1;
}
.col-span-2 {
  grid-column: span 2;
}
.col-span-3 {
  grid-column: span 3;
}
.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 12px;
}
.label {
  font-weight: 600;
  font-size: 14px;
  color: var(--text-700);
  user-select: none;
}
.inline {
  display: flex;
  align-items: center;
  gap: 14px;
}
.radio {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.control input,
.control textarea {
  width: 100%;
  border: 1px solid #e7ebf0;
  border-radius: 10px;
  padding: 10px 12px;
  font-size: 15px;
  transition:
    box-shadow 0.15s,
    border-color 0.15s;
  background: #fff;
}
.control textarea {
  resize: vertical;
}
.control input:focus,
.control textarea:focus {
  outline: none;
  border-color: var(--blue-600);
  box-shadow: 0 0 0 3px var(--ring);
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.chip {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid #e7ebf0;
  background: #f8fafc;
  cursor: pointer;
  user-select: none;
  transition:
    background 0.2s,
    border-color 0.2s,
    box-shadow 0.2s;
}
.chip > input {
  position: absolute;
  opacity: 0;
  width: 1px;
  height: 1px;
  pointer-events: none;
}
.chip:has(> input:checked) {
  background: var(--green-weak);
  border-color: var(--green);
  box-shadow: 0 0 0 3px #1e63d92e inset;
  color: var(--font-color-dark);
}
.chip:has(> input:focus-visible) {
  box-shadow: 0 0 0 3px var(--ring);
}
.chip span {
  font-weight: 600;
  color: var(--text-900);
}
.chip:hover {
  border-color: #d7e2f2;
  background: #f2f7ff;
}
@supports not (selector(:has(*))) {
  .chip > input:checked + span {
    background: #e8f1ff;
    border-radius: 999px;
    padding: 6px 10px;
    margin: -6px -10px;
    box-shadow: 0 0 0 2px #bfd0ff inset;
  }
  .chip > input:focus-visible + span {
    box-shadow: 0 0 0 3px var(--ring);
  }
}

.times {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
}
.time-card {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px;
  border: 1px solid #e7ebf0;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  cursor: pointer;
  user-select: none;
  transition:
    background 0.2s,
    border-color 0.2s,
    box-shadow 0.2s;
}
.time-card > input {
  position: absolute;
  opacity: 0;
  width: 1px;
  height: 1px;
  pointer-events: none;
}
.time-card:has(> input:checked) {
  background: var(--green-weak);
  border-color: var(--green);
  box-shadow: 0 0 0 3px rgba(30, 99, 217, 0.18) inset;
}
.time-card:has(> input:focus-visible) {
  box-shadow: 0 0 0 3px rgba(30, 99, 217, 0.45);
}
.time-card__content small {
  color: #6b7b8a;
  display: block;
  margin-top: 4px;
}
@supports not (selector(:has(*))) {
  .time-card > input:checked + .time-card__content {
    background: #e8f1ff;
    border-radius: 10px;
    margin: -12px;
    padding: 12px;
    box-shadow: 0 0 0 2px #bfd0ff inset;
  }
}

.waiver {
  color: var(--text-700);
  background: #f7fbff;
  border: 1px dashed #cfe2ff;
  padding: 12px;
  border-radius: 10px;
  font-size: 1rem;
  line-height: 1.4;
  margin-bottom: 12px;
  width: 100%;
  min-width: 1000px;
  max-width: 100%;
}
.actions {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 20px;
}

.switch-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.switch {
  --track-off: #e7ebf0;
  --track-on: var(--blue-600);
  --thumb: #ffffff;

  position: relative;
  display: inline-flex;
  align-items: center;
  width: 46px;
  height: 28px;
  border-radius: 999px;
  cursor: pointer;
}

.switch__track {
  position: absolute;
  inset: 0;
  background: var(--track-off);
  border-radius: 999px;
  transition: background 0.2s ease;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.03);
}

.switch__thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 22px;
  height: 22px;
  background: var(--thumb);
  border-radius: 999px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease;
}

.switch-input:checked + .switch .switch__track {
  background: #00a5ad;
}
.switch-input:checked + .switch .switch__thumb {
  transform: translateX(18px);
}

.switch-input:focus-visible + .switch .switch__track {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 165, 173, 0.4);
}

.muted {
  color: var(--muted);
  font-weight: 500;
  margin-left: 6px;
}

@media (max-width: 760px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .col-span-2 {
    grid-column: auto;
  }
  .form-header h1 {
    font-size: 26px;
  }
}
</style>
