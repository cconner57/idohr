# Copilot Instructions for IDOHR

Welcome to the IDOHR codebase! This document provides essential guidelines for AI coding agents to be productive in this project. Please follow these instructions to ensure consistency and alignment with the project's architecture and conventions.

## Project Overview

IDOHR is a Vue 3 application built with Vite. It features a modular structure with components organized by domain-specific functionality. The project emphasizes:

- **Component-based architecture**: Reusable and domain-specific components.
- **TypeScript integration**: Strong typing for `.ts` and `.vue` files.
- **State management**: Centralized data handling using Vue's Composition API.
- **Testing**: Unit tests using Vitest.

## Key Directories and Files

- **`src/components/`**: Contains reusable UI components, organized by feature (e.g., `adopt`, `volunteer`).
- **`src/pages/`**: Defines top-level pages for routing.
- **`src/router/index.ts`**: Centralized routing configuration.
- **`src/stores/`**: Contains mock data and state management files.
- **`src/utils/`**: Utility functions for shared logic.
- **`public/`**: Static assets like images and fonts.
- **`vite.config.ts`**: Vite configuration file.
- **`tsconfig.json`**: TypeScript configuration.

## Developer Workflows

### Setup

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```

### Testing

- Run unit tests:
  ```sh
  npm run test:unit
  ```
- Add tests in `src/__tests__/` following the `*.spec.ts` naming convention.

### Linting

- Check code quality:
  ```sh
  npm run lint
  ```

### Build

- Create a production build:
  ```sh
  npm run build
  ```

## Project-Specific Conventions

### Component Structure

- **File organization**: Group components by feature (e.g., `adopt`, `volunteer`).
- **Naming**: Use PascalCase for component names (e.g., `AdoptionFAQ.vue`).
- **Props and Events**: Define props and emit events explicitly with TypeScript annotations.

### State Management

- Use the Composition API for state management.
- Mock data is stored in `src/stores/mockPetData.ts`.

### Routing

- Define routes in `src/router/index.ts`.
- Use lazy loading for page components.

### Styling

- Global styles are in `src/styles/`.
- Follow the BEM methodology for CSS class naming.

## External Dependencies

- **Vue 3**: Core framework.
- **Vite**: Build tool.
- **Vitest**: Unit testing framework.
- **ESLint**: Linting tool.

## Examples

### Adding a New Component

1. Create the component in the appropriate feature folder under `src/components/`.
2. Use the following template:

   ```vue
   <script setup lang="ts">
   defineProps<{ propName: string }>()
   </script>

   <template>
     <div class="component-class">
       <!-- Component content -->
     </div>
   </template>

   <style scoped>
   .component-class {
     /* Styles */
   }
   </style>
   ```

### Writing a Test

1. Add a test file in `src/__tests__/`.
2. Use the following structure:

   ```ts
   import { describe, it, expect } from 'vitest'
   import { mount } from '@vue/test-utils'
   import ComponentName from '../components/ComponentName.vue'

   describe('ComponentName', () => {
     it('renders properly', () => {
       const wrapper = mount(ComponentName)
       expect(wrapper.text()).toContain('Expected Text')
     })
   })
   ```

## Notes

- Always follow the existing folder structure and naming conventions.
- Refer to `README.md` for additional setup instructions.

---

For any questions or clarifications, consult the project maintainers or refer to the documentation in the `docs/` folder (if available).
