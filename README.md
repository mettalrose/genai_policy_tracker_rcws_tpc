# AI Policy Tracker for Journals in Rhetoric, Writing Studies, and Technical-Professional Communication

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.XXXXXXX.svg)](https://doi.org/10.5281/zenodo.XXXXXXX)

Links to the generative AI policies that govern journals in our fields, whether set by the
journal itself, by its publisher, or by organizations such as COPE. Where several linked
policies apply to a journal, all are listed.

**Browse online:** https://mettalrose.github.io/genai_policy_tracker_rcws_tpc/
**Download:** [`data/database.csv`](data/database.csv)

> **Working prototype.** Please excuse any errors; we are adding more content in the coming days.
> To report a mistake, a broken link, or a journal policy we've missed, email Anuj Gupta at
> anujguptaresearch7@gmail.com.

## What's included

Only journals for which we located a generative AI policy are listed. If a journal from our
fields is missing, that is only because we could not find such a policy on its website.
Policy links were last checked in January 2026.

## Columns

| Column | Description |
|---|---|
| `journal` | Journal name |
| `policies` | Name of each policy that applies, separated by ` \| ` |
| `policy_links` | URL of each policy, in the same order as `policies`, separated by ` \| ` |
| `description` | For journals covered by more than one policy, how the policies relate |

## About the project

This tracker is part of a longer project analyzing emerging trends in how our fields are
responding to generative AI, particularly in terms of changing scholarly norms. We will
release our analysis of these journals in the coming months.

The data was collected by Anuj Gupta and Susan Miller-Cochran over several months, taking
inspiration from a similar data collection project that Chris Anson began a few years ago.
The public CSV is generated from our internal data-collection sheet by a script and is never
edited by hand. The website was designed by Anuj Gupta with assistance from Claude.

## How to cite

Gupta, A., Miller-Cochran, S., & Anson, C. (2026). *AI policy tracker for journals in rhetoric,
writing studies, and technical-professional communication* (Version 0.1.0) [Data set]. Zenodo.
https://doi.org/10.5281/zenodo.XXXXXXX

GitHub's "Cite this repository" button gives the same citation in other formats. The DOI
above always points to the latest version; each version also has its own DOI on Zenodo.

## License

- Data (`data/`): [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). You are free to
  share and adapt it as long as you cite us. This covers our compilation only; for the policies
  themselves, follow the guidelines of the individual journals, editors and publishers.
- Code (website files): MIT, see `LICENSE`.
