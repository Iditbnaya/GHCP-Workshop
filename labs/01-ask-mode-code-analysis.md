# Lab 1: Ask Mode & Context Selection

**Time:** 20 minutes

## Goal

Use Ask mode to analyze unfamiliar code, trace one insurance calculation, and
compare folder context with selected-code context.

## Connection to real work

**Real task:** A system analyst joins an existing product and must understand
what the system currently does before discussing a change.

**Uses:** `starter-app/src`.

**Provides to Lab 2:** Verified questions, calculations, and evidence that the
reverse-engineering plan must cover.

## 1. Open Ask mode (2 min)

1. Open the workshop root in VS Code.
2. Locate Explorer, Search, Markdown Preview, and Copilot Chat.
3. Open Copilot Chat and select **Ask** mode.
4. Keep Ask mode selected for the entire lab.

Ask mode is appropriate because the goal is to understand the application, not
to edit files or run actions.

## 2. Map the complete application (5 min)

In Copilot Chat, type `#starter-app` and select the `starter-app` folder from the
context picker. Then ask:

```text
Using #starter-app, analyze this application for a system analyst.
Return a compact table with each source file, its business responsibility,
public functions, inputs, outputs, and direct dependencies. Cite exact files
and functions.
```

Check that the answer uses files from the selected folder and correctly
identifies the motor-insurance quote calculation.

## 3. Answer a business question from code (5 min)

Open `starter-app/src/index.js`. Keep `#starter-app` as context and ask:

```text
The `main` function in `starter-app/src/index.js` creates and displays a sample
motor-insurance quote.

Explain to a system analyst what quote the customer receives and how the
application arrives at each displayed amount. Use this table:
| Business step | Implemented rule | Amount | Code evidence |

Start with the sample customer data in `index.js` and follow only the relevant
rules in `quoteService.js`. Include the annual premium and monthly illustration.
Use business language, not programming syntax or a function-call sequence.
Separate current implemented behavior from any business rationale that the code
does not prove.
```

Compare the answer with the values printed by `main`. Check that every amount
and rule has code evidence. If Copilot explains why the organization chose a
rate or age threshold, mark that explanation as an assumption because the code
does not contain that business decision.

## 4. Use selected code as focused context (5 min)

1. Open `starter-app/src/quoteService.js`.
2. Select only the `driverMultiplier` function.
3. Ask:

```text
Describe `driverMultiplier` twice:
1. As a technical explanation for a developer.
2. As a business rule for a functional specification.
Keep each explanation under 80 words.
```

Compare the two answers:

- Which technical details were useful to the developer?
- Which condition and outcome belong in the functional specification?
- Did either answer introduce a business reason that is not present in the code?

## 5. Compare models (3 min)

If more than one model is available:

1. Keep **Ask** mode selected.
2. Change to another available model.
3. Keep the same `driverMultiplier` selection and repeat the exact same prompt.
4. Compare the two responses:

   - Did both models identify the same condition and outcome?
   - What changed in accuracy, detail, clarity, or instruction-following?
   - Did either model introduce an unsupported assumption?

Do not treat a different writing style as a different business rule. Model
availability depends on the participant's Copilot plan and organizational
policy.

**Checkpoint:** In Ask mode, you can use a folder for broad context, narrow the
context to a code selection, explain implemented business behavior, request
explanations for different audiences, and compare models without changing the
task.
