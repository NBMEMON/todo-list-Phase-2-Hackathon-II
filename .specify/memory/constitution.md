# FlowForge Todo Application Constitution

## Core Principles

### I. Spec-Driven Development
All code must be generated from specification documents; no manual coding allowed. Implementation follows spec and plan documents precisely.

### II. Security First
All features must implement security measures from the start; authentication and authorization required for all user data access.

### III. Multi-User Isolation
Each user's data must be isolated from others; no cross-user data access allowed.

### IV. Clean Architecture
Follow layered architecture with clear separation between frontend, backend, and database layers.

### V. Reusable Intelligence
Implementation should leverage subagents and reusable components for different functionality areas.

### VI. Test-First Development
All functionality must have tests before implementation; TDD approach required.

## Additional Constraints

Technology Stack: Next.js 16+, FastAPI, SQLModel, Neon PostgreSQL, Better Auth, Tailwind CSS, Framer Motion
Performance: API response time <200ms for 95% of requests; support 100+ concurrent users
Security: All user data must be protected with JWT authentication; input validation required
Quality: All code must pass linting and formatting checks before merge

## Development Workflow

- All changes must be specified before implementation
- Code reviews must verify compliance with spec and plan
- Automated tests must pass before merge
- Performance targets must be met for all features

## Governance

This constitution supersedes all other practices. All development must comply with these principles.

Version: 1.0.0 | Ratified: 2026-01-11 | Last Amended: 2026-01-11
