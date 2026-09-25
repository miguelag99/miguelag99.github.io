---
title: "A ROS-Based Modular End-to-End Architecture: Building and Validating a Safe and Reliable Autonomous Driving Stack"
journal: Sensors
authors:
    - Fabio Sánchez-García
    - Rodrigo Gutiérrez-Moreno
    - Miguel Antunes-García
    - Santiago Montiel-Marín
    - Franck Fierro
    - Elena López-Guillén
    - Rafael Barea
    - Luis M. Bergasa
paper_url: https://www.mdpi.com/1424-8220/26/13/4269
date: 2026-07-04
---

The implementation of safe and reliable Autonomous Driving Stacks in complex urban environments remains a formidable engineering challenge. While classical modular pipelines provide necessary component-level interpretability, they are inherently rigid, often struggling to adapt to novel environments and failing to provide robust scene interpretation in highly interactive scenarios. In this paper, we present a modular End-to-End ROS-based autonomous driving architecture that upgrades a classical modular baseline by injecting learning-based models into its individual processing layers, integrating GaussianCaR and CLIP for dense semantic BEV perception, expanding the Hierarchical Petri Net state space for safe multi-agent reasoning, refining the planning layer with continuous curve optimization, and replacing the previous reactive controller with an Adaptive Nonlinear Model Predictive Control strategy for superior trajectory tracking. Validated in the CARLA simulator across challenging traffic scenarios and adverse environmental conditions, the proposed architecture raises the Driving Score from 53.81% to 66.46% over the previous baseline, driven by a substantial increase in the Infraction Penalty from 0.59 to 0.79, reflecting a fundamental shift towards safer and more conservative driving behavior at the cost of a moderate reduction in route completion. Against pure End-to-End approaches, our architecture achieves the highest Driving Score at 73.9% and the strongest Infraction Penalty at 0.913, demonstrating that modular interpretability and competitive End-to-End performance are not mutually exclusive. Code will be made publicly available online.
