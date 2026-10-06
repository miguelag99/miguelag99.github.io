---
title: "BEVPredFormer: Spatio-temporal Attention for BEV Instance Prediction in Autonomous Driving"
authors:
    - Miguel Antunes-García
    - Santiago Montiel-Marín
    - Fabio Sánchez-García
    - Rodrigo Gutiérrez-Moreno
    - Rafael Barea
    - Luis M. Bergasa
teaser: ../../assets/teasers/bevpredformer.png
arxiv_url: https://arxiv.org/abs/2604.02930
code_url: https://github.com/miguelag99/BEVPredFormer
date: 2026-04-03
bibtex: |
    @misc{antunes2026bevpredformer,
      title={BEVPredFormer: Spatio-temporal Attention for BEV Instance Prediction in Autonomous Driving},
      author={Antunes-García, Miguel and Montiel-Marín, Santiago and Sánchez-García, Fabio and Gutiérrez-Moreno, Rodrigo and Barea, Rafael and Bergasa, Luis M.},
      year={2026},
      eprint={2604.02930},
      archivePrefix={arXiv},
      primaryClass={cs.CV},
      url={https://arxiv.org/abs/2604.02930}
    }
---

A robust awareness of how dynamic scenes evolve is essential for Autonomous Driving systems, as they must accurately detect, track, and predict the behaviour of surrounding obstacles. Traditional perception pipelines that rely on modular architectures tend to suffer from cumulative errors and latency. Instance Prediction models provide a unified solution, performing Bird's-Eye-View segmentation and motion estimation across current and future frames using information directly obtained from different sensors. However, a key challenge in these models lies in the effective processing of the dense spatial and temporal information inherent in dynamic driving environments. This level of complexity demands architectures capable of capturing fine-grained motion patterns and long-range dependencies without compromising real-time performance. We introduce BEVPredFormer, a novel camera-only architecture for BEV instance prediction that uses attention-based temporal processing to improve temporal and spatial comprehension of the scene and relies on an attention-based 3D projection of the camera information. BEVPredFormer employs a recurrent-free design that incorporates gated transformer layers, divided spatio-temporal attention mechanisms, and multi-scale head tasks. Additionally, we incorporate a difference-guided feature extraction module that enhances temporal representations. Extensive ablation studies validate the effectiveness of each architectural component. When evaluated on the nuScenes dataset, BEVPredFormer was on par or surpassed State-Of-The-Art methods, highlighting its potential for robust and efficient Autonomous Driving perception.
