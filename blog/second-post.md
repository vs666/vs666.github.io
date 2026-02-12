# Why Robust ICL Needs Bandits

In-context learning is brittle.

We propose a multi-armed bandit approach to partition selection
to improve robustness under distribution shift.

Key idea:
- Treat example partitions as arms
- Optimize via UCB
- Improve generalization under shift

This was accepted at DataFM @ ICLR 2025.
