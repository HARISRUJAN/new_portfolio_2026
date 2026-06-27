# `$ whoami`

```python
#!/usr/bin/env python3
"""harisrujan.py — an AI engineer, distilled into source code."""

from __future__ import annotations
from dataclasses import dataclass, field
from typing import Generator
from datetime import date


# ─────────────────────────────────────────────────────────────
# CONFIG
# ─────────────────────────────────────────────────────────────

@dataclass
class Harisrujan:
    """AI Engineer based in Tampere, Finland 🇫🇮"""

    name: str = "Harisrujan Chinnam"
    location: str = "Tampere, Finland"
    role: str = "AI Engineer · MSc Data Science"
    university: str = "Tampere University"
    website: str = "https://harisrujan.dev"

    def __repr__(self) -> str:
        return f"<Engineer '{self.name}' | shipping agents daily>"


# ─────────────────────────────────────────────────────────────
# STACK
# ─────────────────────────────────────────────────────────────

def load_toolkit() -> dict:
    """What I reach for when building."""
    return {
        "languages":    ["Python", "TypeScript", "SQL"],
        "ai_frameworks": ["LangChain", "LangGraph", "CrewAI", "Hugging Face", "OpenAI", "Ollama"],
        "vector_stores": ["Pinecone", "ChromaDB", "FAISS", "Qdrant"],
        "infra":        ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"],
        "backend":      ["FastAPI", "Flask", "Celery", "Redis"],
        "data":         ["PostgreSQL", "MongoDB", "Spark", "dbt"],
        "monitoring":   ["LangSmith", "Weights & Biases", "Prometheus"],
    }


# ─────────────────────────────────────────────────────────────
# WHAT I BUILD
# ─────────────────────────────────────────────────────────────

def build_agents() -> Generator[str, None, None]:
    """Multi-agent systems that actually ship to production."""
    yield "🤖 autonomous agent pipelines with tool-use & memory"
    yield "🧠 RAG systems — chunking, retrieval, reranking, evaluation"
    yield "🔗 LLM orchestration — chains, routers, fallbacks, guardrails"
    yield "⚡ real-time inference APIs behind FastAPI + async workers"
    yield "📊 evaluation frameworks — hallucination detection, RAGAS, custom metrics"
    yield "🏗️ end-to-end ML pipelines — from research notebooks to prod containers"


def prompt_engineer(task: str) -> str:
    """Crafting prompts is an engineering discipline, not guesswork."""
    techniques = [
        "chain-of-thought reasoning",
        "few-shot exemplars",
        "structured output schemas",
        "self-consistency checks",
        "dynamic context injection",
    ]
    return f"Solving '{task}' with: {', '.join(techniques)}"


def deploy(service: str, env: str = "production") -> dict:
    """Ship it. Every single day."""
    return {
        "service": service,
        "env": env,
        "containerized": True,
        "ci_cd": "GitHub Actions",
        "monitoring": "always-on",
        "status": "🟢 live",
    }


# ─────────────────────────────────────────────────────────────
# CURRENT FOCUS
# ─────────────────────────────────────────────────────────────

def now() -> dict:
    """What's on my workbench right now."""
    return {
        "researching": "multi-agent orchestration patterns & agent-to-agent protocols",
        "building":    "production AI systems — from research spike to deployed service",
        "exploring":   "agentic RAG, tool-augmented reasoning, code generation agents",
        "shipping":    "daily — check the green squares ⬛🟩🟩🟩🟩🟩⬛",
        "learning":    "reinforcement learning from human feedback (RLHF) & DPO",
    }


# ─────────────────────────────────────────────────────────────
# PHILOSOPHY
# ─────────────────────────────────────────────────────────────

class EngineeringPrinciples:
    """How I think about building AI systems."""

    @staticmethod
    def iterate() -> str:
        return "ship v0.1 today, not v1.0 never"

    @staticmethod
    def evaluate() -> str:
        return "if you can't measure it, you can't improve it"

    @staticmethod
    def simplify() -> str:
        return "the best architecture is the one you can debug at 2am"

    @staticmethod
    def collaborate() -> str:
        return "great agents need great humans steering them"


# ─────────────────────────────────────────────────────────────
# ENTRYPOINT
# ─────────────────────────────────────────────────────────────

if __name__ == "__main__":
    me = Harisrujan()
    print(me)

    for capability in build_agents():
        print(f"  → {capability}")

    print(f"\n📅 {date.today()} — status: {now()['shipping']}")
    print("💬 Let's build something intelligent together.")
```

---

### `> cat connect.md`

```
📫  harisrujan@pm.me
🔗  linkedin.com/in/harisrujan
🐙  github.com/HARISRUJAN
🌐  harisrujan.dev
```

---

<sub>This portfolio is built with React + TypeScript + Tailwind CSS — because even AI engineers need a frontend sometimes.</sub>
