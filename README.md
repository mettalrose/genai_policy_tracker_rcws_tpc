# AI Policy Tracker for Journals in RCWS and TPC

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.XXXXXXX.svg)](https://doi.org/10.5281/zenodo.XXXXXXX)

Links to the generative AI policies that govern journals in rhetoric, composition and writing studies (RCWS) and technical and professional communication (TPC), whether set by the
journal itself, by its publisher, or by organizations such as COPE. Where several linked
policies apply to a journal, all are listed.

**Browse online:** https://mettalrose.github.io/genai_policy_tracker_rcws_tpc/
**Download:** [`data/database.csv`](data/database.csv)

> **Working prototype.** Please excuse any errors; we are adding more content in the coming days.
> To report a mistake, a broken link, or a journal policy we've missed, please use our
> [reporting form](https://forms.gle/kW1J3E3cJa9d1kUk6).

## What's included

Only journals for which we located a generative AI policy are listed. If a journal from our
fields is missing, that is only because we could not find such a policy on its website.
Policies were first collected in January 2026 and updated in October 2026 (see "About the project").

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

We started with the list of journals in rhetoric, composition and writing studies, and
technical and professional communication published by Doug Hesse (2019), and added to it based
on our knowledge of journals in the field. The project also took inspiration from Chris Anson's
presentation at the Eleventh International Writing Analytics Conference (2025).

In January 2026, Anuj Gupta and Susan Miller-Cochran checked each journal's website for a
generative AI policy, using search engines to locate journal, publisher and organizational policies.

In October 2026, we used the web search and browsing tools of Claude, an AI model made by
Anthropic, to check whether any journals had published a policy since January, re-checking each
journal for which we had not found one. We instructed Claude to respect each website's
robots.txt rules and any other restrictions on automated access, and to keep its requests to a
minimum so as not to burden any website's servers. We manually verified every result Claude found by checking the
policy ourselves.

The public CSV is generated from our internal data-collection sheet by a script and is never
edited by hand. The website was designed by Anuj Gupta with assistance from Claude.

**Reference:** Hesse, D. (2019). Journals in composition studies, thirty-five years after.
*College English, 81*(4), 367–396.

## How to cite

Gupta, A., Miller-Cochran, S., & Anson, C. (2026). *AI policy tracker for journals in RCWS and TPC* (Version 0.1.0) [Data set]. Zenodo.
https://doi.org/10.5281/zenodo.XXXXXXX

GitHub's "Cite this repository" button gives the same citation in other formats. The DOI
above always points to the latest version; each version also has its own DOI on Zenodo.

## License

- Data (`data/`): [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). You are free to
  share and adapt it as long as you cite us. This covers our compilation only; for the policies
  themselves, follow the guidelines of the individual journals, editors and publishers.
- Code (website files): MIT, see `LICENSE`.
