---
title: Fast and Efficient Transformer-based Method for Bird's Eye View Instance Prediction
conference: 2024 IEEE 27th International Conference on Intelligent Transportation Systems (ITSC)
authors:
    - Miguel Antunes
    - Luis M. Bergasa
    - Santiago Montiel-Marín
    - Rafael Barea
    - Fabio Sánchez-García
    - Angel Llamazares
teaser_url: https://raw.githubusercontent.com/miguelag99/Efficient-Instance-Prediction/7340c4cc06ffd901f0a2373dfa6b9f223a9a136c/docs/results.png
paper_url: https://ieeexplore.ieee.org/abstract/document/10919912
date: 2024-09-24
---

Accurate object detection and prediction are critical to ensure the safety and efficiency of self-driving architectures. Predicting object trajectories and occupancy enables autonomous vehicles to anticipate movements and make decisions with future information, increasing their adaptability and reducing the risk of accidents. Current State-Of-The-Art (SOTA) approaches often isolate the detection, tracking, and prediction stages, which can lead to significant prediction errors due to accumulated inaccuracies between stages. Recent advances have improved the feature representation of multi-camera perception systems through Bird's-Eye View (BEV) transformations, boosting the development of end-to-end systems capable of predicting environmental elements directly from vehicle sensor data. These systems, however, often suffer from high processing times and number of parameters, creating challenges for real-world deployment. To address these issues, this paper introduces a novel BEV instance prediction architecture based on a simplified paradigm that relies only on instance segmentation and flow prediction. The proposed system prioritizes speed, aiming at reduced parameter counts and inference times compared to existing SOTA architectures, thanks to the incorporation of an efficient transformer-based architecture. Furthermore, the implementation of the proposed architecture is optimized for performance improvements in PyTorch version 2.1. Code and trained models are available at https://github.com/miguelag99/Efficient-Instance-Prediction
