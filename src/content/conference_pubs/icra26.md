---
title: "GaussianCaR: Gaussian Splatting for Efficient Camera-Radar Fusion"
conference: 2026 IEEE International Conference on Robotics and Automation (ICRA)
authors:
    - Santiago Montiel-Marín
    - Miguel Antunes-García
    - Fabio Sánchez-García
    - Angel Llamazares
    - Holger Caesar
    - Luis M. Bergasa
# Preprint link, replace with the IEEE Xplore link once the proceedings are published
paper_url: https://arxiv.org/abs/2602.08784
date: 2026-02-09
---

Robust and accurate perception of dynamic objects and map elements is crucial for autonomous vehicles performing safe navigation in complex traffic scenarios. While vision-only methods have become the de facto standard due to their technical advances, they can benefit from effective and cost-efficient fusion with radar measurements. In this work, we advance fusion methods by repurposing Gaussian Splatting as an efficient universal view transformer that bridges the view disparity gap, mapping both image pixels and radar points into a common Bird's-Eye View (BEV) representation. Our main contribution is GaussianCaR, an end-to-end network for BEV segmentation that, unlike prior BEV fusion methods, leverages Gaussian Splatting to map raw sensor information into latent features for efficient camera-radar fusion. Our architecture combines multi-scale fusion with a transformer decoder to efficiently extract BEV features. Experimental results demonstrate that our approach achieves performance on par with, or even surpassing, the state of the art on BEV segmentation tasks (57.3%, 82.9%, and 50.1% IoU for vehicles, roads, and lane dividers) on the nuScenes dataset, while maintaining a 3.2x faster inference runtime. Code and project page are available online.
