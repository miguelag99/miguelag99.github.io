export interface NewsItem {
  date: string;
  title: string;
  // May contain inline HTML, use class="text-link" for links
  description: string;
  link?: string;
}

export interface NewsYear {
  year: number;
  items: NewsItem[];
}

export const news: NewsYear[] = [
  {
    year: 2026,
    items: [
      {
        date: 'September',
        title: 'ELLIS Summer School on Autonomous Driving',
        description: 'I attended the <strong>ELLIS Summer School on Autonomous Driving</strong>.',
        link: 'https://lnkd.in/p/eBgmAbgF',
      },
      {
        date: 'July',
        title: 'New Article Preprint',
        description: 'We have published a new article preprint titled <strong>TGRIP: A Text-Guided Approach to Vehicle Instance Prediction in Autonomous Driving</strong> on arXiv.',
        link: '/publications/tgrip',
      },
      {
        date: 'April',
        title: 'New Article Preprint',
        description: 'We have published a new article preprint titled <strong>BEVPredFormer: Spatio-temporal Attention for BEV Instance Prediction in Autonomous Driving</strong> on arXiv.',
        link: '/publications/bevpredformer',
      },
      {
        date: 'March',
        title: 'Research Internship at Intelligent Vehicles Lab, Hochschule München',
        description: 'I started my PhD research internship at <a href="https://iv.ee.hm.edu/" class="text-link">Intelligent Vehicles Lab, Hochschule München</a>, Germany, under the supervision of <a href="https://www.linkedin.com/in/fabian-flohr-a99031115/" class="text-link">Prof. Dr. Fabian Flohr</a>.',
        link: 'https://www.linkedin.com/posts/miguel-antunes-garcia_im-happy-to-share-that-ive-started-my-predoctoral-activity-7434871882832687104-WmIo',
      },
    ],
  },
  {
    year: 2025,
    items: [
      {
        date: 'November',
        title: 'Eighth Iberian Robotics Conference - ROBOT 2025',
        description: 'I had the pleasure of presenting the work of my undergraduate student, Marco Fernández Pérez, titled <strong>Low-cost Driver Monitoring System Using Deep Learning</strong>.',
        link: 'https://www.linkedin.com/posts/miguel-antunes-garcia_this-month-i-attended-the-eight-iberian-activity-7400504511750086656-wsfr',
      },
      {
        date: 'September',
        title: 'RobeSafe Autonomous Driving Demo',
        description: 'We showcased our Autonomous Driving Stack 🚗 at University of Alcalá during the European Researchers Night.',
        link: 'https://www.linkedin.com/posts/robesafe-research-group_europeanresearchersnight-nocheeuropeadelosinvestigadores-activity-7380154657915944960-GWLr',
      },
      {
        date: 'July',
        title: "Marco Fernández Bachelor's Thesis Defense",
        description: "Our supervised student Marco presented his Bachelor's Thesis with title <strong>Driver monitoring system on low-cost devices using Deep Learning</strong> with a grade of 9.5/10.",
      },
    ],
  },
  {
    year: 2024,
    items: [
      {
        date: 'September',
        title: 'ITSC 2024',
        description: "Our research paper <strong>Fast and Efficient Transformer-based Method for Bird's Eye View Instance Prediction</strong> was presented at the 27th IEEE International Conference on Intelligent Transportation Systems.",
        link: '/publications/itsc24',
      },
    ],
  },
];
