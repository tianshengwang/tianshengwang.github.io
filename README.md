

Assistant Professor (from Sept 1, 2025) · Department of Pharmaceutical Health Outcomes & Policy (PHOP) · University of Houston College of Pharmacy
Former Postdoctoral Scholar · Department of Epidemiology · UNC Gillings School of Global Public Health

[Google Scholar](https://scholar.google.com/citations?user=JYtT5K8AAAAJ&hl=en) · [GitHub](https://github.com/tianshengwang) · ORCID: 0000-0002-0980-8896 · Email: [tianwang@uh.edu](mailto:tianwang@uh.edu)

---

## Research Focus

I develop and apply **causal inference** and **machine learning** methods in **pharmacoepidemiology** using real‑world data. Current themes:

* **Heterogeneous Treatment Effects (HTE):** Iterative Causal Forest (iCF) and **High‑dimensional iCF (hdiCF)** for subgroup identification.
* **Confounding Control:** Temporal/longitudinal patterns (e.g., thdPS) and target trial emulation.
* **Neuroepidemiology:** Claims‑based algorithms for **dementia** identification and drug repurposing pipelines.

---

## News

* **Aug 2025:** AJE paper on a claims‑based algorithm for incident and prevalent dementia (ARIC/Medicare) accepted.
* **Aug 2025:** Presenting *Temporal High‑dimensional Propensity Score (thdPS)* and *Statin utilization trajectories & 1‑year mortality* at **ICPE 2025**.

> For recent publications and talks, see below.

---

## Selected Publications

* **High‑dimensional Iterative Causal Forest (hdiCF):** Wang T\*, Pate V, Wyss R, Buse JB, Kosorok MR, Stürmer T. *Am J Epidemiol*, 2025.
* **Algorithm for Dementia Identification (Medicare, ARIC):** Wang T, Pate V, Kim DH, et al. *Am J Epidemiol*, 2025.
* **GLP‑1RA & Asthma Exacerbations (subgroups via hdiCF):** Wang T\*, Wang J, et al. *Pharmacoepidemiol Drug Saf*, 2025.
* **Proximal Causal Inference in Vaccine Effectiveness (TTE):** Guo J, **Wang T**, et al. *eClinicalMedicine*, 2025.

*A fuller list is available on* [Google Scholar](https://scholar.google.com/citations?user=JYtT5K8AAAAJ&hl=en).

---

## Software & Data Resources

* **iCF / hdiCF** — Causal ML for subgrouping in observational data.

  * Repo: [`tianshengwang/hdiCF`](https://github.com/tianshengwang/hdiCF)
* **HDsetting** — R & SAS utilities for generating high‑dimensional claims variables (HD variables).

  * Repo: [`tianshengwang/HDsetting`](https://github.com/tianshengwang/HDsetting)
* **Dementia Claims Algorithm (ARIC/Medicare)** — Code and documentation.

  * Repo: [`tianshengwang/IdentifyDementia_ARIC`](#) *(rename of Identify\_AD\_RWD suggested)*

> If you use these tools, please cite the corresponding paper(s). Issues & PRs are welcome.

---

## Figures & Notation (README‑safe)

Use HTML or math (Kramdown/KaTeX) so symbols render on GitHub Pages:

* Subscript: `X<sub>S</sub>` → X<sub>S</sub>
* Superscript hat (LaTeX): `$\hat{Y}$`, `$\hat{W}$`
* Precomposed alternatives: **Ŷ**, **Ŵ**

**Figure 1.** The key steps of the hdiCF algorithm.
All *n*, *c*, *m*, and *S* are parameters (*n* = 50, 100, 200; *c* = 0.01, 0.02, 0.05; *m* = 15, 20, 25; *S* = 0.01, 0.05, 0.1).
X<sub>S</sub> = selected variables; \$\hat{W}\$ = predicted propensity score (PS); \$\hat{Y}\$ = predicted outcome.

**Figure 2.** Heterogeneous treatment effect assessment by HDo and HDb settings.
HD = high‑dimensional; PS = propensity score; G<sub>D</sub> = subgroup decision of iCF.
All *n*, *c*, *m*, and *S* are parameters (*n* = 200; *c* = 0.01; *m* = 20; *S* = 0.05).
X<sub>S</sub> = selected variables; \$\hat{Y}\$ = predicted outcome; \$\hat{W}\$ = predicted propensity score.

---

## Talks (Selected)

* *Advancing Pharmacoepidemiology with Causal Inference & ML* — invited seminars (Pitt, UTHealth, OSU, HPHCI/HMS, HSPH), 2024–2025.
* *High‑dimensional Iterative Causal Forest (hdiCF)* — UNC DPOP (2024), ICPE (2023).
* *Temporal High‑dimensional PS (thdPS); Statin trajectories & mortality* — ICPE 2025.

---

## Teaching

* Methods & Issues in Pharmacoepidemiology (EPID 765) — TA.
* Quantitative Methods for Health Care Professionals (PUBH 741) — TA.
* Guest lectures in healthcare database epidemiology & clinical research methods.

---

## Contact

* **Email:** [tianwang@uh.edu](mailto:tianwang@uh.edu)
* **GitHub:** [@tianshengwang](https://github.com/tianshengwang)
* **Google Scholar:** T. Wang (Tiansheng)

---

### How this site works

This repository is a user site for GitHub Pages. To publish:

1. In repo **Settings → Pages**, set **Build and deployment** to the branch you prefer (e.g., `iCF`) and root.
2. Add an `index.md` (you may copy this README content) or `index.html` for a custom home page.
3. (Optional) Create `_config.yml` with `theme: minima` and set a title/description.

> If you prefer a one‑page HTML site with a custom layout, create `index.html` at the repo root; I can provide a fully styled version on request.
