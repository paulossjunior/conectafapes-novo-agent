# Agile Standards & Workflow (LEDS)

## 1. Requirement The Hierarchy

To ensure traceability from business value to code, we use a strict 3-level hierarchy.

### 1.1 EPIC (Business Initiative)
- **Concept**: A large body of work that can be broken down into smaller stories. Usually spans multiple sprints.
- **Format**: `System/Module Name (Epic)`
- **Example**: "Authentication System", "Researcher Profile Management".
- **Goal**: Delivers a complete module or major feature set.

### 1.2 USER STORY (US) (User Value)
- **Concept**: A feature or requirement viewed from the end-user's perspective. Small enough to be delivered in a sprint.
- **Format**: "As a [Role], I want [Action], So that [Benefit]".
- **Components**:
    - **Description**: The "As a..." statement.
    - **Acceptance Criteria (AC)**: List of conditions that must be met (e.g., "User receives email after sign up").
- **Example**: "As a Researcher, I want to login with Gov.br, So that I can access my grant information safely."

### 1.3 TASK (Technical Implementation)
- **Concept**: A unit of technical work required to deliver a User Story.
- **Format**: `Type: Action [Component/Context]`
- **Types**: `Feat`, `Fix`, `Chore`, `Refactor`, `Docs`, `Test`.
- **Relationship**: Every Task **MUST** belong to a User Story.
- **Example**: "Feat: Implement API Service for Auth", "Test: Unit tests for Login Component".

---

## 2. Definition of Done (DoD)

### 2.1 Task DoD
- [ ] Code implemented and pushed to a feature branch.
- [ ] **Unit Tests** written and passing (TDD).
- [ ] **Accessibility (WCAG)** verified for UI components.
- [ ] Pull Request opened and linked to the GitHub Issue.

### 2.2 User Story DoD
- [ ] All related Tasks are Done.
- [ ] Acceptance Criteria met.
- [ ] Validated on Staging/Dev environment.
- [ ] No critical accessibility violations.

### 2.3 Epic DoD
- [ ] All User Stories completed.
- [ ] Value accepted by the Product Owner / Stakeholder.

---

## 3. Pull Request (PR) Standard

All PRs must be merged into `developing` (Gitflow).

### 3.1 Title Convention
Follow [Conventional Commits](https://www.conventionalcommits.org/):
- `feat(scope): description`
- `fix(scope): description`
- `refactor(scope): description`

### 3.2 PR Description Template

```markdown
## Related Issue
Closes #<ISSUE_ID>

## Proposed Changes
- Brief summary of changes.
- Bullet points of technical details.

## Checklist
- [ ] Unit Tests passed?
- [ ] Accessibility (WCAG/e-MAG) validated?
- [ ] Mobile Layout verified?
- [ ] No console errors?

## Screenshots (if UI)
[Insert Screenshots here]
```

## 4. Gitflow Summary
1.  **Branch**: Create `feat/<name>` from `developing`.
2.  **Commit**: Atomic commits referencing the Task Issue if possible.
3.  **Push**: Push to origin.
4.  **PR**: Open PR to `developing` using the template above.
