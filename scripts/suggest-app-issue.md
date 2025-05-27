### ⭐️◽️◽️ Add "Suggest an app or improvement" button

**Description:**  
We want to give users a simple way to suggest new apps or ideas for the guide. To keep things light and open, we’ll start by adding a button that links to a GitHub issue form with a predefined template.

**What to do:**
- Create a visible button in the UI (e.g., footer or top menu)
  - Label: “Suggest an app” or “Suggest an idea”
  - Style: Light, non-intrusive, mobile-friendly
- Link the button to GitHub’s [issue creation URL with parameters](https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-issues/about-issue-templates)
  - Example format:  
    `https://github.com/Sovereinia/guia/issues/new?labels=suggestion&template=suggestion.yml`
- Create an `ISSUE_TEMPLATE/suggestion.yml` file in the repo (if it doesn't exist yet)

**Suggestion template could include:**
```yaml
name: App or feature suggestion
description: Suggest a new app to include, or a feature to improve the guide
title: "[Suggestion] "
labels: [suggestion]
body:
  - type: input
    id: name
    attributes:
      label: What's the name of the app or idea?
  - type: textarea
    id: description
    attributes:
      label: Describe your suggestion
      placeholder: What makes this app interesting or useful?
  - type: input
    id: link
    attributes:
      label: Link to the app (if applicable)
```

**Helpful tips:**
- Use `target="_blank"` and `rel="noopener noreferrer"` for safety if opening in a new tab
- Ask for feedback on label wording or placement in our [Discord channel](https://discordapp.com/channels/1365364448461721611/1376586127443623976)

**Good first issue?** Yes  
**Type:** Feature  
**Labels:** `hackathon`, `good first issue`  
**Difficulty:** ⭐️◽️◽️
