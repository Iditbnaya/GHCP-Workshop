# Stakeholder Request: Digital Motor Insurance Journey

The digital insurance team wants the existing motor-insurance quote calculation
to support a customer-facing quote-and-buy journey for private customers in
Israel.

Requested outcomes:

| Request ID | Requested outcome |
|---|---|
| SR-01 | A customer can start from a Hebrew, right-to-left landing page. |
| SR-02 | A customer can enter the information needed to receive a motor-insurance quote. |
| SR-03 | The journey displays both an annual premium and a monthly illustration. |
| SR-04 | The customer can choose comprehensive or third-party coverage. |
| SR-05 | A customer who accepts the quote can continue to purchase. |
| SR-06 | Validation failures produce clear, actionable messages without losing entered data. |
| SR-07 | The current premium calculation remains unchanged unless underwriting approves a new rule. |

The stakeholder has not yet decided:

- Which landing-page fields are required before the full quote journey begins.
- Why ID number and vehicle license plate are needed at the lead stage.
- Whether the monthly illustration represents 12 equal payments or a financing arrangement.
- Which underwriting service supplies the final price.
- Which payment and policy-administration systems receive an accepted quote.
- How long personal data and incomplete quotes are retained.
- Whether marketing consent is required to receive a quote.
- The exact validation, failure, and eligibility messages.
- Whether accessibility, privacy, legal, and brand baselines in
  `references/organizational-requirements.md` are approved organizational policy.

This document describes a business request, not an approved functional specification.
