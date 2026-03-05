# token-generation-command

Generate a complete design token system using the provided inputs. 

Steps:
1. Ensure you have an understanding of the color scales provided. The primary color scales live in Figma here: `https://www.figma.com/design/rHAjVgzUqky5FnfyysTaSQ/Portsmith-Consultancy?node-id=604-21&t=MXuHmzTIBst3MSqZ-4`. Ask clarifying questions if needed. 
2. Generate a brand collection using the raw color scales provided. 
3. Generate an alias collection mapping brand colors to semantic roles
4. Generate a mapped collection including:
    - Surface, text, icon, and border groups
    - All sematnic intents
    - All interaction states
    - Explicit light and dark values
5. Generate repsonsive typography tokens for all text styles.
6. Ensure no mapped token reference brand values directly.
7. Output a single JSON file compatible with Token Studio import.
8. Do not invent values, infer meaning, or auto-correct contrast.
9. If required input is missing, pause and request clarification.

Return only the final JSON output. 

This command will be available in chat with /token-generation-command
