# NgRx Store Learning Playground

A hands-on Angular project for learning NgRx state management fundamentals.

## Overview

This repository demonstrates core NgRx concepts through a practical counter application, showcasing state management patterns and best practices.

## Features Demonstrated

- **Actions**: Declarative events (`increment`, `decrement`, `reset`, `customIncrement`)
- **Reducers**: Pure functions handling state transitions
- **Selectors**: Efficient state queries
- **Store**: Centralized state container
- **DevTools**: Redux DevTools integration for debugging

## Project Structure

```
src/app/
├── counter/
│   ├── states/
│   │   ├── counter.actions.ts    # Action definitions
│   │   ├── counter.reducer.ts    # State reducer
│   │   ├── counter.selector.ts   # State selectors
│   │   └── counter.state.ts      # State interface
│   ├── counter-button/           # Action dispatch components
│   ├── counter-value/            # State display component
│   └── custom-input/             # Dynamic action payloads
```

## Getting Started

```bash
npm install
npm start
```

Navigate to `http://localhost:4200`

## Tech Stack

- Angular 16
- @ngrx/store 16.3
- @ngrx/store-devtools
- TypeScript 5.1

## Learning Resources

- Counter component with increment/decrement actions
- Custom increment with action payloads
- State selectors for computed values
- Component communication via store
