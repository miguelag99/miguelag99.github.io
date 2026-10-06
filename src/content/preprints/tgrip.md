---
title: "TGRIP: A Text-Guided Approach to Vehicle Instance Prediction in Autonomous Driving"
authors:
    - Miguel Antunes-García
    - Santiago Montiel-Marín
    - Fabio Sánchez-García
    - Rodrigo Gutiérrez-Moreno
    - Rafael Barea
    - Luis M. Bergasa
teaser: ../../assets/teasers/tgrip.png
arxiv_url: https://arxiv.org/abs/2607.04812
code_url: https://github.com/miguelag99/TGRIP
date: 2026-07-06
bibtex: |
    @misc{antunes2026tgrip,
      title={TGRIP: A Text-Guided Approach to Vehicle Instance Prediction in Autonomous Driving},
      author={Antunes-García, Miguel and Montiel-Marín, Santiago and Sánchez-García, Fabio and Gutiérrez-Moreno, Rodrigo and Barea, Rafael and Bergasa, Luis M.},
      year={2026},
      eprint={2607.04812},
      archivePrefix={arXiv},
      primaryClass={cs.CV},
      url={https://arxiv.org/abs/2607.04812}
    }
---

Bird's-Eye View (BEV) end-to-end instance prediction has emerged as a robust paradigm for autonomous driving perception, effectively mitigating the error propagation inherent in traditional modular pipelines. However, current state-of-the-art approaches rely predominantly on geometric supervision, such as occupancy regression and optical flow, effectively treating scene agents as generic moving obstacles. This absence of explicit semantic awareness imposes limitations on the capacity of the model to solve ambiguities in complex scenarios, particularly those where object-specific behavior is essential for accurate forecasting (e.g. overtaking, intersections). In this paper, we introduce Text-Guided Representation for Instance Prediction (TGRIP), a novel framework that bridges this gap by injecting rich semantic priors into the instance prediction loop. The proposed teacher-student pipeline employs Vision-Language Foundation Models to generate dense, semantic-enhanced BEV maps from multi-camera images. These maps serve as auxiliary supervision during training, guiding the network to learn spatio-temporal representations that are not only geometrically consistent but also semantically discriminative. To the best of our knowledge, this represents the first attempt to unify semantic guidance with the temporal task of future instance prediction. The experimental results demonstrate that TGRIP surpasses existing state-of-the-art models in nuScenes, validating the hypothesis that semantic enrichment is a fundamental element for robust, end-to-end motion prediction. Code is available on https://github.com/miguelag99/TGRIP.
