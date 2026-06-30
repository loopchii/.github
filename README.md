# LOOPCHii on GitHub

This repository powers the public-facing Loopchii organization profile and the GitHub Pages front door for people who want an inspectable entry point into the work.

It is intentionally narrow.

- It publishes public surfaces, contribution paths, and standards-facing materials.
- It does not publish private runtime systems, customer logic, or implementation detail that would map cleanly onto proprietary architecture.

## What Lives Here

- `profile/README.md`
  The organization profile shown on the Loopchii GitHub page.

- `docs/`
  A static GitHub Pages site for engineers, researchers, operators, and curious people who want a clean way into the public work.

- `CONTRIBUTING.md`
  Contribution boundaries for this repository.

- `SECURITY.md`
  How to report issues responsibly.

## Public Entry Points

- [Open the GitHub Pages front door](https://loopchii.github.io/.github/)
- [Explore Stream](https://github.com/loopchii/Stream)
- [Visit loopchii.com](https://www.loopchii.com/)
- [Visit loopchii.space](https://www.loopchii.space/)

## Local Preview

From this repository root:

```bash
cd docs
python3 -m http.server 4173
```

Then open `http://127.0.0.1:4173`.

## Boundary

Loopchii publishes public research surfaces, standards language, and inspectable examples here.

Loopchii does not publish private runtime mechanics, internal enforcement ordering, customer-shaped deployment logic, or proprietary implementation detail here.
