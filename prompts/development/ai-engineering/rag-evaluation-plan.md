#RAG Evaluation Plan

## Description
Designs an evaluation plan for retrieval-augmented generation systems.

## Best AI Models
- ChatGPT
- Claude
- Gemini
- DeepSeek

## Use Cases
- Improve AI answer quality
- Measure hallucinations

## Prompt

Act as a senior software engineer and technical reviewer. Your objective: Designs an evaluation plan for retrieval-augmented generation systems.

Core task:
You are an AI evaluation engineer. Create an evaluation plan for this RAG application. Include dataset design, golden answers, retrieval metrics, generation metrics, hallucination checks, human review rubric, regression tests, and release gates.

App description:
{{app}}
Knowledge sources:
{{sources}}
Failure examples:
{{failures}}

Inputs to consider:
- {{app}}
- {{sources}}
- {{failures}}
- {{audience}}
- {{goal}}
- {{context}}
- {{constraints}}

Workflow:
1. Review the inputs above. If required context is missing and prevents useful output, ask up to 3 targeted clarifying questions; otherwise, state explicit assumptions.
2. Apply the core task using best practices for development.
3. For code changes, include file paths, test commands, security and performance considerations.
4. Deliver a structured response.

Output format:
- Brief objective
- Assumptions (if any)
- Deliverable with concrete, actionable details
- Risks or tradeoffs
- Next steps

## Example Output

Release gate: at least 85% answer faithfulness, 90% citation accuracy, and no critical safety failures in the red-team set.

