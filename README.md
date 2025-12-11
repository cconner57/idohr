# 🗺️ Product Roadmap (Year 1)

This roadmap outlines the strategic development plan for the IDOHR platform, moving from a foundational MVP to a fully automated "Smart Shelter" system. The schedule is designed for a pace of **one phase per month**.

---

## 🏗️ Phase 1: The Foundation (MVP)

**Goal:** Launch a functional public presence, digitalize intake forms, and seed the database.

- [ ] **Public Website:** Deploy Home, About, Adopt, and Donate pages with responsive mobile-first design.
- [ ] **Digital Intake Operations:** Replace paper forms with a smart `SurrenderPet` form that includes logic to flag behavioral risks (e.g., bite history) automatically.
- [ ] **Volunteer Portal:** Launch the volunteer application with a "Teen vs. Adult" logic gate to handle liability requirements dynamically.
- [ ] **Backend Core:** Initialize the Go server architecture and seed the PostgreSQL database with initial pet and volunteer data.

## 💸 Phase 2: Revenue & Reach

**Goal:** Secure cash flow and syndicate data to external platforms immediately.

- [ ] **Stripe Foundation:** Implement processing for **Adoption Fee Invoices** (Fixed $300/$250) and **General One-Time Donations**.
- [ ] **Petfinder & RescueGroups Sync:** Build a background Go job to auto-export our `IPet` database to external APIs nightly, eliminating manual double-entry.
- [ ] **Basic E-Ink Infrastructure:** Deploy Raspberry Pi Pico 2W units to kennels to display dynamic "Digital Kennel Cards" (Name, Breed, QR Code).

## 🎟️ Phase 3: Engagement Campaigns

**Goal:** Turn passive followers into active donors through gamification.

- [ ] **"Name the Litter" Campaigns:** A voting mechanism where donors pay $5 to suggest or vote on names for new litters.
- [ ] **Digital Raffle Manager:** A dedicated module to sell raffle tickets via Stripe and randomly select winners during events.
- [ ] **Pet Record Management (CRUD):** Build the Admin Dashboard view to Create, Read, Update, and Delete pet profiles efficiently.

## 🤝 Phase 4: Onboarding & Communication

**Goal:** Streamline the adopter journey and automate follow-ups.

- [ ] **Adopter Onboarding:** Automate "Welcome Home" emails containing PDF care guides triggered immediately upon adoption.
- [ ] **Foster-to-Adopt Fast-Track:** A "Keep Them" button in the Foster Portal that skips application review and immediately triggers the adoption invoice.
- [ ] **SMS Integration:** Connect a privacy-focused SMS provider to send automated "Application Received" text alerts.

## 🧠 Phase 5: Operational Intelligence

**Goal:** Optimize the usage of volunteer time and shelter resources.

- [ ] **Volunteer Management Core:** Implement a "Check-in" system for safety and a basic profile manager for contact info.
- [ ] **Smart Scheduling:** A shift management system that matches volunteers to roles based on their `positionPreferences` (e.g., only showing "Dog Walking" to qualified adults).
- [ ] **Medical "Concierge" Portal:** A view for Fosters to see only their specific pet's vaccine due dates and request medication refills.

## 🔄 Phase 6: Financial Stability

**Goal:** Convert one-time interactions into recurring support.

- [ ] **Monthly Subscriptions:** Enable recurring giving options in Stripe.
- [ ] **Pet Sponsorships:** Logic linking a recurring payment to a specific `petId` to fund their medical care.
- [ ] **The "Gotcha Day" Engine:** An automated job that sends "Happy 1st Anniversary" emails to adopters to encourage updates and alumni photos.

## 📺 Phase 7: Advanced Hardware

**Goal:** Integrate digital displays deeply into shelter workflows.

- [ ] **Intake Kiosk (E-Ink Level 2):** A larger display at the intake desk for immediate data entry (weight/intake details).
- [ ] **Vet Appointment Display:** An office dashboard screen showing the next 48 hours of medical appointments.
- [ ] **Device Health Monitor:** An admin view to track battery levels and connectivity status of all deployed Raspberry Pi units.

## 📊 Phase 8: Data & Inventory

**Goal:** Improve animal outcomes through better data tracking.

- [ ] **Weight Visualization:** Interactive charts on Pet Profiles to track kitten growth curves and auto-flag weight loss.
- [ ] **Inventory Tracking:** A "Supply Closet" system where volunteers can flag low stock, automatically updating a public "Wishlist" for donors.
- [ ] **Medication Audit Logs:** "Mark as Given" buttons for volunteers to prevent double-dosing.

## 🧩 Phase 9: Matchmaking & Discovery

**Goal:** Reduce decision fatigue and help adopters find the right fit.

- [ ] **"Find My Match" Quiz:** An interactive wizard that filters the pet database by lifestyle (Energy Level, Good with Kids, etc.) to suggest top 3 matches.
- [ ] **"Pet Alerts":** Users can subscribe to specific criteria (e.g., "Notify me when a Calico Kitten becomes available").
- [ ] **Lifestyle Badges:** Automated logic that tags pet profiles with badges like "Apartment Friendly" or "Couch Potato".

## 🏙️ Phase 10: Community Resources

**Goal:** Position IDOHR as a community hub, not just a shelter.

- [ ] **Lost & Found Generator:** A public tool allowing community members to upload lost pet info and generate a printable PDF flyer with our branding.
- [ ] **Volunteer "Skill Swap":** A directory of volunteer professional skills (e.g., Lawyer, Plumber, CPA) for internal resource sharing.
- [ ] **Community Calendar:** A public view of adoption events, fundraisers, and vaccine clinics.

## 🕊️ Phase 11: Specialized Care & Crisis

**Goal:** Support the most vulnerable populations and manage emergencies.

- [ ] **"SOS" Volunteer Broadcast:** A filtered alert system to text volunteers who are marked as "Available Today" for urgent needs.
- [ ] **Fospice (Hospice) Tracker:** A "Quality of Life" daily log for terminally ill pets.
- [ ] **Event Mode Casting:** A "TV Mode" route designed for adoption events that cycles through a slideshow of currently available pets.
- [ ] **Smart Visiting Hours:** A live website widget displaying "Open for Visits" or "Quiet Time" based on feeding schedules.

## 🌟 Phase 12: Security, Performance & Legacy

**Goal:** Harden the application to enterprise standards.

- [ ] **High-Security Auth (Passkeys):** Implement WebAuthn so admins can log in with FaceID/TouchID, eliminating password risks.
- [ ] **"Zero-Dependency" Audit:** Remove non-essential libraries to ensure long-term maintainability and speed.
- [ ] **Accessibility Certification:** Ensure full WCAG 2.1 AA compliance (Screen readers, Keyboard navigation).
- [ ] **"In Honor Of" Tributes:** A donation checkout option to send digital dedication cards for memorial gifts.
- [ ] **Legacy Giving Portal:** Information and forms for bequests and wills.
