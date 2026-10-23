# AI Policy Tracker for Journals in RCWS and TPC

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.23604520.svg)](https://doi.org/10.5281/zenodo.23604520)

RCWS (Rhetoric, Composition, & Writing Studies) and TPC (Technical & Professional Communication) are interdisciplinary academic fields that study writing across domains. Over the last few years, journals in these fields have started to develop policies regarding the use of Generative AI tools. Our database curates links to these policies that govern scholarship in our field. 


**Browse online:** https://mettalrose.github.io/genai_policy_tracker_rcws_tpc/
**Download:** [`data/database.csv`](data/database.csv)

> **Working prototype.** This is a working prototype. Please excuse any errors. We will be iterating on it frequently. If you notice any errors, or know of an AI-related journal policy from RCWS and TPC that we have missed, or if you have any other feedback, please do write to us. Report an issue or suggest a journal using our [reporting form](https://forms.gle/kW1J3E3cJa9d1kUk6).

## What's included

Our tracker lists only those journals for which we could find a generative AI policy. If you know of a journal with a policy we have missed, or you see a broken or incorrect link, please use our [reporting form](https://forms.gle/kW1J3E3cJa9d1kUk6).. For anything else, you can email Anuj Gupta at anujguptaresearch7@gmail.com.


## Columns

| Column | Description |
|---|---|
| `journal` | Journal name |
| `policies` | Name of each policy that applies, separated by ` \| ` |
| `policy_links` | URL of each policy, in the same order as `policies`, separated by ` \| ` |
| `description` | For journals covered by more than one policy, how the policies relate |

## About the project

**The project**
This tracker is part of a broader project where we are analyzing how our academic journals in our field are responding to generative AI. We will be sharing our analysis in the coming months.

**What's included, and what's missing**
Our tracker lists only those journals for which we could find a generative AI policy. If you know of a journal with a policy we have missed, or you see a broken or incorrect link, please use our reporting form. For anything else, you can email Anuj Gupta at anujguptaresearch7@gmail.com.

**How we collected the data **

**Origins of the project **
Chris Anson presented early findings on emerging GenAI policies in some of the journals in our field at the Eleventh International Writing Analytics Conference (2025). Anuj Gupta and Susan Miller-Cochran took inspiration from his work and started building a more comprehensive database of journals and corresponding policies. In 2026, we joined forces and started a collaborative project to map emerging trends in these policies. 

**Building the journal list. **
We started with the list of journals in RCWS and TPC published by Doug Hesse (2019), and then added to it based on our knowledge of journals in the field. No list of journals in a field can probably ever be exhaustive, since what counts as a field and what counts as a journal within it are subjective to a degree. This is why we welcome your suggestions for other journals that we can add to our list.

**First round** **(January 2026)**. We checked each journal's website for a generative AI policy, using search engines like Google and DuckDuckGo to locate journal, publisher, and organisational policies. We used Google Sheets and Google Docs to document their findings and Zoom for regular meetings to discuss their work. 

**Update (October 2026)**. We used the web search and browsing tools of Claude Opus 5.5 to check whether any journals that didn’t have a policy in January 2026 had recently published one. We instructed Claude to respect each website's robots.txt rules and any other restrictions on automated access and to keep its requests to a minimum so as not to burden any website's servers. We manually verified every result Claude found by checking the policies ourselves.

**Website Design (October 2026)** The website was designed by Anuj Gupta with assistance from Claude.

**Reference:** Hesse, D. (2019). Journals in composition studies, thirty-five years after.
*College English, 81*(4), 367–396.

## How to cite

Gupta, A., Miller-Cochran, S., & Anson, C. (2026). *AI policy tracker for journals in RCWS and TPC* (Version 0.1.0) [Data set]. Zenodo.
https://doi.org/10.5281/zenodo.23604520

GitHub's "Cite this repository" button gives the same citation in other formats. The DOI
above always points to the latest version; each version also has its own DOI on Zenodo.

## License

- Data (`data/`): [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). You are free to
  share and adapt it, we just request that you cite our database in your uses. This covers our compilation only; for the policies
  themselves, follow the guidelines of the individual journals, editors and publishers.
- Code (website files): MIT, see `LICENSE`.
