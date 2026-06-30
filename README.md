<div align="center">

<img src="https://raw.githubusercontent.com/loopchii/.github/main/logo.png" alt="LOOPCHii" width="168">

# LOOPCHii on GitHub

Public field notes, research surfaces, and open entry points for people who want something real to inspect.

[![Open Field](https://img.shields.io/badge/Open%20Field-GitHub%20Pages-A78BFA?style=for-the-badge)](https://loopchii.github.io/.github/)
[![Stream](https://img.shields.io/badge/Public%20Repo-Stream-FB923C?style=for-the-badge)](https://github.com/loopchii/Stream)
[![Website](https://img.shields.io/badge/Website-loopchii.com-5E78EE?style=for-the-badge)](https://www.loopchii.com/)
[![Research](https://img.shields.io/badge/Research-loopchii.space-74DDD0?style=for-the-badge)](https://www.loopchii.space/)

</div>

This repository powers two public-facing surfaces:

- `profile/README.md`
  The organization profile shown on the Loopchii GitHub page.
- `docs/`
  The GitHub Pages front door at [loopchii.github.io/.github](https://loopchii.github.io/.github/).

## Start Here

| Route | What it is for |
|---|---|
| [Open Field](https://loopchii.github.io/.github/) | The public GitHub Pages surface for engineers, researchers, operators, and curious people |
| [Stream](https://github.com/loopchii/Stream) | Inspectable media-analysis work with public code, live routes, and contribution paths |
| [loopchii.com](https://www.loopchii.com/) | The company surface and broader public context |
| [loopchii.space](https://www.loopchii.space/) | The working research environment |

## What Belongs Here

- Public research surfaces that people can actually open and evaluate
- Framework notes around ethics, review, consequence, and accountability
- Repo-level contribution guidance for the public open-source field
- A public front door that stays useful without collapsing into implementation disclosure

## Boundary

Loopchii publishes public work here.

Loopchii does **not** use this repository to publish private runtime mechanics, customer-shaped deployment logic, internal enforcement ordering, or other implementation detail that would function as a replication guide.

## Local Preview

```bash
cd docs
python3 -m http.server 4173
```

Then open `http://127.0.0.1:4173`.
