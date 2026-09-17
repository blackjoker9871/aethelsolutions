# AETHEL SOLUTIONS — ANALYTICS EVENT MAP & SPECIFICATION

This document outlines the privacy-conscious, non-PII analytics and conversion tracking schema implemented across the Aethel platform.

---

## 1. Event Taxonomy & Purpose

All events use lowercase `snake_case` nomenclature.

| Event Name | Category | Purpose | Properties Included |
|---|---|---|---|
| `page_view` | Traffic & Navigation | Track route transitions across SPA pages | `page_path`, `page_title`, `page_type`, `referrer_category` |
| `cta_clicked` | Intent & Engagement | Measure primary conversion button clicks | `cta_name`, `cta_location`, `destination` |
| `navigation_clicked` | Navigation | Track movement across navigation surfaces | `destination`, `location` (navbar/footer/mobile) |
| `industry_viewed` | Business Intelligence | Understand commercial sector interest | `industry` |
| `system_viewed` | Business Intelligence | Understand technical architecture interest | `system` |
| `case_study_opened` | Proof & Trust | Measure case study evaluation | `project`, `industry` |
| `project_intake_started` | Funnel | Measure initial intake intent | `step`, `step_number` |
| `project_intake_step_viewed` | Funnel | Track user progression through intake | `step`, `step_number` |
| `project_intake_step_completed` | Funnel | Track successful completion of intake steps | `step`, `step_number` |
| `project_brief_submitted` | **Primary Conversion** | Record verified backend project brief submission | `industry`, `system_types`, `project_stage`, `timeline`, `budget_range`, `attribution_first_source`, `attribution_last_source` |
| `contact_method_clicked` | Direct Intent | Measure clicks on direct email/phone links | `method` (email/phone/whatsapp/website), `location` |
| `outbound_link_clicked` | Navigation | Track external navigation | `destination_domain`, `link_context` |
| `application_error` | Diagnostic | Lightweight UI/app exception telemetry | `error_type`, `page`, `component` |

---

## 2. Privacy Boundaries & Data Protection

Under Aethel's strict data privacy architecture:
- **NO Personally Identifiable Information (PII)** is ever dispatched to third-party analytics platforms.
- The following fields are **NEVER sent** to GA4, Meta Pixel, or client analytics:
  - Full Name (`name`)
  - Work Email (`email`)
  - Phone / WhatsApp Number (`phone`)
  - Free-text Problem Descriptions (`problem`)
  - Free-text Workflow Descriptions (`current_workflow`)
  - Additional Client Notes (`additional_notes`)
  - Internal Database IDs / Keys

---

## 3. Campaign & Multi-Touch Attribution

The system captures campaign parameters upon client entry:
- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_term`
- `utm_content`
- Normalized Referrer (`google`, `linkedin`, `meta`, `direct`, `internal`, `other`)

Attribution is stored in session storage (`aethel_first_touch` and `aethel_last_touch`) and attached to the primary conversion event (`project_brief_submitted`).

---

## 4. Environment-Controlled Activation

Analytics providers remain completely inactive unless real public measurement IDs are configured in `.env`:

```env
# Google Analytics 4 (Public Measurement ID)
NEXT_PUBLIC_GA_MEASUREMENT_ID=

# Meta Pixel ID (Optional)
NEXT_PUBLIC_META_PIXEL_ID=

# Debug Event Logging in Browser Console (true | false)
NEXT_PUBLIC_ANALYTICS_DEBUG=false
```
