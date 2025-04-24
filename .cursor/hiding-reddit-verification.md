# Hiding Reddit Verification from the VerusID Profile UI

This document explains the change made to prevent Reddit social links from being displayed in the VerusID profile UI, even if they exist in the user's profile data.

## Goal

The objective was to filter out Reddit links specifically from the social links section rendered on the profile page, without altering the backend verification logic (which might still run but its result won't be shown for Reddit).

## Implementation: UI Filtering

The change was implemented directly in the frontend component responsible for rendering the verified social links.

1.  **File Modified:**
    `components/verusid-search/VerifiedSocialLinks.tsx`

2.  **Logic:**
    Inside the `map` function that iterates through the `services` object to render each social link, a conditional check was added at the very beginning of the loop iteration.

3.  **Code Added:**
    The following `if` block was inserted just inside the `Object.entries(services).map(...)` callback:

    ```typescript
    if (key.toLowerCase().includes('reddit')) {
      // Log that we are skipping this specific service
      console.log(`VerifiedSocialLinks: Skipping rendering for Reddit service key: ${key}`);
      // Return null to prevent rendering anything for this item
      return null;
    }
    ```

4.  **Mechanism:**
    -   `key.toLowerCase().includes('reddit')`: Checks if the key identifying the service (e.g., 'reddit', 'twitter', 'linkedin') contains the word "reddit", ignoring case.
    -   `return null;`: If the condition is true (it's a Reddit service), the `map` function returns `null` for this specific iteration. In React, returning `null` from a map effectively renders nothing for that item.
    -   Services that are *not* Reddit pass this check and proceed with the original rendering logic (checking for a URL, getting the icon, displaying the link and verification badge).

## How to Re-enable Reddit Display

To show Reddit links again in the UI:

1.  **Edit:** Open the file `components/verusid-search/VerifiedSocialLinks.tsx`.
2.  **Remove:** Delete or comment out the following `if` block:
    ```typescript
    if (key.toLowerCase().includes('reddit')) {
      console.log(`VerifiedSocialLinks: Skipping rendering for Reddit service key: ${key}`);
      return null;
    }
    ```
3.  **Save:** Save the file.

After removing this block, the component will no longer filter out services based on the "reddit" key, and any Reddit links present in the `services` prop will be rendered along with the others. 