# ConfigFlow AI

A configuration-driven frontend runtime that dynamically renders user interfaces from JSON configuration.

ConfigFlow AI demonstrates how applications can be generated and modified through metadata rather than hardcoded UI. The system parses JSON configuration and dynamically renders forms, tables, dashboard cards, and layouts while handling invalid configurations gracefully.

## Live Demo

Add your Vercel deployment link here:

https://your-project.vercel.app

---
## Features

### Dynamic UI Rendering
Generate UI components directly from JSON configuration:

- Dynamic Forms
- Dynamic Tables
- Dashboard Cards
- Layout Components

### Configuration Validation
The system validates configurations before rendering and provides meaningful feedback for:

- Missing fields
- Invalid values
- Broken configurations
- Incomplete schemas

### Graceful Error Handling
The application never crashes due to malformed configuration.

- Invalid JSON detection
- Unknown component fallback
- Validation warnings
- Safe rendering behavior

### Extensible Architecture
New components can be added through the renderer architecture without modifying existing component implementations.

---

## Supported Components

Form
Table
Card
Layout

---

## Architecture

```text
JSON Configuration
        │
        ▼
Validation Layer
        │
        ▼
Dynamic Renderer
        │
        ▼
UI Components
```

### Rendering Flow

1. User provides JSON configuration
2. Configuration is validated
3. Renderer identifies component type
4. Appropriate component is loaded
5. UI is generated dynamically
6. Errors are handled gracefully

---

## Tech Stack

- Next.js 16
- React
- TypeScript
- Tailwind CSS

---

## Project Structure

```text
app/
components/
│
├── JsonEditor.tsx
├── Renderer.tsx
├── ValidationPanel.tsx
├── DynamicForm.tsx
├── DynamicTable.tsx
├── DynamicCard.tsx
├── DynamicLayout.tsx
│
data/
├── sampleConfig.ts
├── examples.ts
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project:

```bash
cd configflow-ai
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Key Frontend Engineering Considerations

- Dynamic rendering from configuration
- Reusable component architecture
- Responsive UI
- Validation and reliability
- Error handling
- Extensibility
- Separation of concerns

---

## Future Improvements

- Natural language → JSON generation
- Theme customization
- Component marketplace
- Workflow visualization
- Backend schema generation
- API generation support

---

## Author

Eshitha reddy

Frontend Engineer Internship Submission