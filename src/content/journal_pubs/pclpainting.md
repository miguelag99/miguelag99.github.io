---
title: Point Cloud Painting for 3D Object Detection with Camera and Automotive 3+1D RADAR Fusion
journal: Sensors
authors:
    - Santiago Montiel-Marín
    - Ángel Llamazares
    - Miguel Antunes-García
    - Pedro A. Revenga
    - Luis M. Bergasa
teaser_url: https://www.mdpi.com/sensors/sensors-24-01244/article_deploy/html/images/sensors-24-01244-g002-550.jpg
paper_url: https://www.mdpi.com/1424-8220/24/4/1244
date: 2024-02-13
---

RADARs and cameras have been present in automotives since the advent of ADAS, as they possess complementary strengths and weaknesses but have been underlooked in the context of learning-based methods. In this work, we propose a method to perform object detection in autonomous driving based on a geometrical and sequential sensor fusion of 3+1D RADAR and semantics extracted from camera data through point cloud painting from the perspective view. To achieve this objective, we adapt PointPainting from the LiDAR and camera domains to the sensors mentioned above. We first apply YOLOv8-seg to obtain instance segmentation masks and project their results to the point cloud. As a refinement stage, we design a set of heuristic rules to minimize the propagation of errors from the segmentation to the detection stage. Our pipeline concludes by applying PointPillars as an object detection network to the painted RADAR point cloud. We validate our approach in the novel View of Delft dataset, which includes 3+1D RADAR data sequences in urban environments. Experimental results show that this fusion is also suitable for RADAR and cameras as we obtain a significant improvement over the RADAR-only baseline, increasing mAP from 41.18 to 52.67 (+27.9%).
