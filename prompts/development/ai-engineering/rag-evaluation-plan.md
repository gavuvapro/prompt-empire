# RAG Evaluation Plan

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

You are an AI evaluation engineer. Create an evaluation plan for this RAG application. Include dataset design, golden answers, retrieval metrics, generation metrics, hallucination checks, human review rubric, regression tests, and release gates.

App description:
{{app}}
Knowledge sources:
{{sources}}
Failure examples:
{{failures}}

## Example Output

Release gate: at least 85% answer faithfulness, 90% citation accuracy, and no critical safety failures in the red-team set.
