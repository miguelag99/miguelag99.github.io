export const subjects = [
  {
    name: 'Computer Vision / Computer Vision Systems',
    icon: `
      <a href="https://www.uah.es/es/estudios/estudios-oficiales/grados/asignatura/Vision-Artificial-370009/ ">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline ml-2 hover:text-accent transition-colors">
          <path d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"/>
        </svg>
      </a>
      <a href="https://www.uah.es/es/estudios/estudios-oficiales/grados/asignatura/Sistemas-de-VIsion-Artificial-780029/ ">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline ml-2 hover:text-accent transition-colors">
          <path d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"/>
        </svg>
      </a>` ,
    level: "Undergraduate",
    period: "2024 - Present",
    institution: "University of Alcalá",
    role: "Teaching assistant",
    coprofessor: '<a href="https://scholar.google.es/citations?user=uEBILewAAAAJ" style="color: #4f46e5; text-decoration: none;">Luis M. Bergasa </a> and <a href="https://santimontiel.github.io" style="color: #4f46e5; text-decoration: none;"> Santiago Montiel-Marín</a>',
    description: `
      Computer Vision aims to introduce students to the study of computer vision and design of digital image processing algorithms.
      The theoretical concepts explained in the lectures are programmed later in the laboratory in Python with OpenCV.
    `,
    topics: [
      "Computer Vision basics",
      "Classic techniques for image processing",
      "Classic segmentation techinques",
    ]
  },
  {
    name: "Perception Systems",
    icon: `
      <a href="https://www.uah.es/es/estudios/estudios-oficiales/grados/asignatura/Sistemas-de-Percepcion-202005/ ">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline ml-2 hover:text-accent transition-colors">
          <path d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"/>
        </svg>
      </a>` ,
    level: "Graduate",
    period: "2024 - Present",
    institution: "University of Alcalá",
    role: "Teaching assistant",
    coprofessor: '<a href="https://scholar.google.es/citations?user=uEBILewAAAAJ" style="color: #4f46e5; text-decoration: none;">Luis M. Bergasa </a> and <a href="https://santimontiel.github.io" style="color: #4f46e5; text-decoration: none;"> Santiago Montiel-Marín</a>',
    description: `
      This course introduces students to advanced perception techniques for understanding scenes based on
      data provided by robot sensors. Both classical and deep learning (DL) approaches using neural
      networks (NNs) are addressed, primarily from camera data. Theoretical concepts explained are
      practically validated in the laboratory. The topics covered include: introduction to perception systems,
      computer vision, NNs for perception, advanced NN architectures and applications, and object tracking.
      Upon completing the course, students will be able to utilize NNs to solve robotic problems applicable to
      other relevant engineering domains.
    `,
    topics: [
      "Sensors and sensor fusion",
      "Camera geometric model and transformations",
      "Neural Networks for perception",
      "3D perception",
      "Object tracking",
    ]
  }
];

// Thesis supervision data
export const theses = {
  bachelor: [
    {
      title: "Driver monitoring system on low-cost devices using Deep Learning",
      student: "Marco Fernández Pérez",
      period: "2024-2025",
      codirector: '<a href="https://scholar.google.es/citations?user=uEBILewAAAAJ" style="color: #4f46e5; text-decoration: none;">Luis M. Bergasa</a>',
      status: "In Progress",
      description: "Multiple neural networks are employed to detect and classify the driver's state and actions in an autonomous system. The challenges of implementing these models on low-power embedded devices are also examined.",
      topics: [
        "Driver Monitoring systems",
        "Deep Learning architectures",
        "Autonomous driving"
      ]
    },
  ],
  master: [
    {
      title: "AAAA",
      student: "María Rodríguez",
      period: "2023-2024",
      codirector: "",
      status: "In Progress",
      description: "Development of a CNN-based system for real-time traffic sign detection and classification.",
      topics: [
        "Convolutional Neural Networks",
        "Data augmentation techniques",
        "Embedded system deployment"
      ]
    },
  ]
};