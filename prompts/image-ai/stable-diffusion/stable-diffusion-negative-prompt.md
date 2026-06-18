#Stable Diffusion Prompt with Negative Prompt

## Description
Creates Stable Diffusion prompts with positive and negative components.

## Best AI Models
- Stable Diffusion

## Use Cases
- Improve image quality
- Control outputs

## Prompt

Act as a AI image prompt director and visual designer. Your objective: Creates Stable Diffusion prompts with positive and negative components.

Core task:
Create a Stable Diffusion prompt for {{image_goal}}. Include positive prompt, negative prompt, suggested model style, aspect ratio, CFG range, steps, and seed strategy.

Inputs to consider:
- {{image_goal}}
- {{audience}}
- {{goal}}
- {{context}}
- {{constraints}}

Workflow:
1. Review the inputs above. If required context is missing and prevents useful output, ask up to 3 targeted clarifying questions; otherwise, state explicit assumptions.
2. Apply the core task using best practices for image ai.
3. For image prompts, include aspect ratio, style, lighting, composition, and negative constraints.
4. Deliver a structured response.

Output format:
- Brief objective
- Assumptions (if any)
- Deliverable with concrete, actionable details
- Risks or tradeoffs
- Next steps

## Example Output

Negative: blurry, low quality, extra fingers, distorted text, watermark, oversaturated, bad anatomy.

