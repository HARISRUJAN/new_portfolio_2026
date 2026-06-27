```
                                                                            
    ██╗  ██╗ █████╗ ██████╗ ██╗███████╗██████╗ ██╗   ██╗     ██╗ █████╗ ███╗   ██╗
    ██║  ██║██╔══██╗██╔══██╗██║██╔════╝██╔══██╗██║   ██║     ██║██╔══██╗████╗  ██║
    ███████║███████║██████╔╝██║███████╗██████╔╝██║   ██║     ██║███████║██╔██╗ ██║
    ██╔══██║██╔══██║██╔══██╗██║╚════██║██╔══██╗██║   ██║██   ██║██╔══██║██║╚██╗██║
    ██║  ██║██║  ██║██║  ██║██║███████║██║  ██║╚██████╔╝╚█████╔╝██║  ██║██║ ╚████║
    ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝  ╚════╝ ╚═╝  ╚═╝╚═╝ ╚═══╝
                                                                            
              AI Engineer · Multi-Agent Systems · Tampere, Finland 🇫🇮
```

<div align="center">

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│   "Building intelligent agents that actually ship to production."       │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

[![Python](https://img.shields.io/badge/Python-Expert-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org)
[![LangChain](https://img.shields.io/badge/LangChain-🦜-1C3C3C?style=for-the-badge)](https://langchain.com)
[![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)](https://openai.com)
[![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com)
[![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white)](https://aws.amazon.com)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://docker.com)

</div>

---

## `$ python harisrujan.py`

```python
#!/usr/bin/env python3
"""harisrujan.py — an AI engineer, distilled into source code."""

from __future__ import annotations
from dataclasses import dataclass
from typing import Generator
from datetime import date


@dataclass
class Harisrujan:
    """AI Engineer based in Tampere, Finland 🇫🇮"""

    name: str = "Harisrujan Chinnam"
    location: str = "Tampere, Finland"
    role: str = "AI Engineer · MSc Data Science"
    university: str = "Tampere University"

    def __repr__(self) -> str:
        return f"<Engineer '{self.name}' | shipping agents daily>"
```

---

## `🧰 toolkit.load()`

<div align="center">

```
╔══════════════════╦═══════════════════════════════════════════════════════════╗
║  CATEGORY        ║  TOOLS                                                   ║
╠══════════════════╬═══════════════════════════════════════════════════════════╣
║  Languages       ║  Python · TypeScript · SQL · Bash                        ║
║  AI / LLM        ║  LangChain · LangGraph · CrewAI · OpenAI · Ollama       ║
║  ML / DL         ║  Hugging Face · PyTorch · scikit-learn · spaCy           ║
║  Vector DBs      ║  Pinecone · ChromaDB · FAISS · Qdrant                   ║
║  Backend         ║  FastAPI · Flask · Celery · Redis · RabbitMQ             ║
║  Data            ║  PostgreSQL · MongoDB · Spark · dbt · Airflow            ║
║  Infra           ║  AWS · Azure · Docker · Kubernetes · Terraform           ║
║  Monitoring      ║  LangSmith · W&B · Prometheus · Grafana                 ║
╚══════════════════╩═══════════════════════════════════════════════════════════╝
```

</div>

---

## `🤖 build_agents()`

```python
def build_agents() -> Generator[str, None, None]:
    """Multi-agent systems that actually ship to production."""
    yield "🤖 autonomous agent pipelines with tool-use & persistent memory"
    yield "🧠 RAG systems — chunking, retrieval, reranking, evaluation"
    yield "🔗 LLM orchestration — chains, routers, fallbacks, guardrails"
    yield "⚡ real-time inference APIs behind FastAPI + async workers"
    yield "📊 eval frameworks — hallucination detection, RAGAS, custom metrics"
    yield "🏗️ end-to-end ML pipelines — from notebooks to prod containers"
    yield "🎯 prompt engineering — CoT, few-shot, structured outputs, DSPy"
```

```
         ┌──────────────┐
         │   User Query │
         └──────┬───────┘
                │
                ▼
    ┌───────────────────────┐
    │    🧠 Orchestrator    │
    │   (LangGraph Router)  │
    └───┬───────┬───────┬───┘
        │       │       │
        ▼       ▼       ▼
   ┌────────┐┌────────┐┌────────┐
   │Agent 1 ││Agent 2 ││Agent 3 │
   │Research││Code Gen││  QA    │
   └───┬────┘└───┬────┘└───┬────┘
       │         │         │
       ▼         ▼         ▼
   ┌─────────────────────────────┐
   │   🗄️ Shared Memory / VectorDB│
   └─────────────────────────────┘
                │
                ▼
        ┌───────────────┐
        │  ✅ Response   │
        └───────────────┘
```

---

## `📡 now()`

```python
def now() -> dict:
    """What's on my workbench right now."""
    return {
        "🔬 researching": "multi-agent orchestration & agent-to-agent protocols",
        "🛠️ building":    "production AI systems — research spike → deployed service",
        "🧪 exploring":   "agentic RAG, tool-augmented reasoning, code agents",
        "📡 shipping":    "daily — check the green squares ⬛🟩🟩🟩🟩🟩⬛",
        "📚 learning":    "RLHF, DPO, constitutional AI, agent evaluations",
    }
```

---

## `💡 principles.py`

```python
class EngineeringPrinciples:
    """How I think about building AI systems."""

    rules = {
        "iterate":    "ship v0.1 today, not v1.0 never",
        "evaluate":   "if you can't measure it, you can't improve it",
        "simplify":   "the best architecture is the one you can debug at 2am",
        "automate":   "if you did it twice, write an agent for it",
        "collaborate": "great agents need great humans steering them",
    }
```

```
    ┌─────────────────────────────────────────────────────┐
    │                                                     │
    │   "if you did it twice, write an agent for it"      │
    │                                        — me, daily  │
    │                                                     │
    └─────────────────────────────────────────────────────┘
```

---

## `🔌 connect()`

<div align="center">

```python
def connect() -> dict:
    return {
        "📫 email":    "harisrujan@pm.me",
        "💼 linkedin": "linkedin.com/in/harisrujan",
        "🐙 github":   "github.com/HARISRUJAN",
        "🌐 web":      "harisrujan.dev",
    }
```

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/harisrujan)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/HARISRUJAN)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:harisrujan@pm.me)
[![Website](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://harisrujan.dev)

</div>

---

<div align="center">

```
if __name__ == "__main__":
    me = Harisrujan()
    me.build()    # shipping daily
    me.learn()    # always iterating
    me.connect()  # let's talk
```

<sub>⚡ Built with React + TypeScript + Tailwind CSS — because even AI engineers need a frontend sometimes.</sub>

</div>
