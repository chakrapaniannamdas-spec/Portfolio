export const portfolioData = {
  name: "Chakrapani Annamdas",
  role: "Systems Engineering Leader | Product Owner | Automotive E/E Expert",
  location: "Stuttgart, Germany",
  email: "chakrapaniannamdas@gmail.com",
  github: "https://github.com/annamdaschakri324-netizen",
  linkedin: "https://www.linkedin.com/in/chakrapani-annamdas-347b2573/",
  hero: {
    title: "Engineering Leadership in Complex Systems.",
    subtitle: "I build and lead global teams to deliver intelligent automotive software and systems engineering solutions — from E/E architecture and functional safety to enterprise toolchains.",
    image: "/profile.jpg"
  },
  about: {
    title: "Global Leadership & Systems Engineering.",
    paragraphs: [
      "I am a Software and Systems Engineering Leader at Daimler Truck AG, where I serve as Product Owner for Engineering Life Cycle Management (ELM) and lead a team of 15 employees. I also lead the Tools & Templates work package with a global cross-functional team of 6, driving Systems Engineering implementation across the organization.",
      "My career spans major automotive OEMs and suppliers — Volkswagen, Daimler Buses, Roche, and Capgemini — through roles managing gateway ECUs, functional safety, supplier networks, and cross-continental engineering programs across Brazil, Europe, and India. I operate as a bridge between German process culture and Indian delivery culture.",
      "I combine deep technical knowledge of E/E architecture, functional safety (FuSi), and powertrain engineering with agile project management (PMP, Scrum) and a passion for coaching and developing engineering talent."
    ],
    principles: [
      { title: "Multi-Continent Team Leadership", description: "Leading diverse engineering teams across Brazil, Europe, and India — synchronizing priorities, communication norms, and delivery cadence across three time zones while developing talent at every site." },
      { title: "Cross-Functional Orchestration", description: "Aligning systems engineering, quality, production, security, and OBD stakeholders around a single roadmap by owning the interfaces between functions, not the functions themselves." },
      { title: "Trust Architecture & Execution Discipline", description: "Designing the feedback loops, ownership boundaries, and escalation paths that let distributed teams operate with predictability — and holding the line on delivery so trust is backed by measurable outcomes." },
      { title: "German–Indian Engineering Bridge", description: "Operating fluently across German precision-and-process culture and Indian delivery culture — adapting communication, escalation norms, and decision cadence so both sides experience collaboration as predictable rather than friction-laden." }
    ]
  },
  profiles: [
    { id: "recruiter", label: "Recruiter", hint: "Fast overview of scope, scale and outcomes", order: ["hero", "about", "experience", "skills", "projects"] },
    { id: "engineering-manager", label: "Engineering Manager", hint: "Depth on technical leadership and delivery", order: ["hero", "experience", "projects", "about", "skills"] },
    { id: "collaborator", label: "Collaborator", hint: "What it is like to work with me", order: ["hero", "about", "projects", "experience", "skills"] }
  ],
  experience: [
    {
      role: "Product Owner ELM & Work Package Lead — Tools & Templates",
      company: "Daimler Truck AG",
      location: "Stuttgart, Germany",
      date: "Sep 2022 – Present",
      description: "Product Owner for Engineering Life Cycle Management (ELM) leading a team of 15 employees, and Work Package Lead for Tools & Templates directing a global cross-functional team of 6 to implement Systems Engineering across the organization. Architected trust across the team during a major toolchain migration by defining clear ownership boundaries and structured escalation paths — reducing cross-team blockers and stabilizing delivery cadence. Orchestrated alignment across systems engineering, quality, production, security, and OBD stakeholders around a single roadmap supporting millions of requirements."
    },
    {
      role: "Project Management E/E Development",
      company: "Volkswagen AG · via Capgemini",
      location: "Wolfsburg, Germany",
      date: "Jun 2022 – Aug 2022",
      description: "Planning, steering, and delivery of work packages for a gateway ECU, including technical management of suppliers (component specification, requirements documents, functional safety, change control, hardware/software validation, release). Coordinated change scopes with internal and external suppliers, drove AVON change management and KPM defect/risk management with schedule and cost ownership, and planned and steered HW/SW test activities (smoke, unit, integration). Served as the translation layer between ECU engineers and program management."
    },
    {
      role: "Project Management E/E Development",
      company: "Volkswagen AG · via Alten",
      location: "Wolfsburg, Germany",
      date: "Feb 2021 – May 2022",
      description: "Aligned technical requirements across cross-functional teams (Sys-V, functional safety, packaging, production, quality, routing, diagnostics, security, OBD). Prioritized resulting component requirements, reviewed data specifications, clarified requirements with suppliers, and managed changes including non-chargeable ones. Aligned the component safety concept with the supplier and safety owner, evaluated BsM relevance, and accompanied the CCB process. Directed test planning with all test instances (system owners, routing, networking, integration, EMC) and tracked KPM defect tickets."
    },
    {
      role: "Project Management Solo Program (Agile)",
      company: "Roche Diabetes Care GmbH · via Alten",
      location: "Mannheim, Germany",
      date: "Feb 2020 – Jan 2021",
      description: "Business Analyst and Jira Administrator for agile medical-device projects — daily issue ticket handling, sprint planning, backlog refinement, PI planning, reviews, retrospectives, and risk planning. Created, planned, and prioritized epics/user stories/tasks, coordinated release support activities, and administered Jira for the Mannheim site across locations. Modeled a new business model in SysML, managed PTC Integrity and Windchill documentation, and drove process improvement through MIRO process mapping in a highly audited regulatory environment."
    },
    {
      role: "Project Management Powertrain Engineering (PPE-DC)",
      company: "Daimler Buses / EvoBus GmbH · via Alten",
      location: "Mannheim, Germany",
      date: "Aug 2018 – Dec 2019",
      description: "Coordinated the DOORS issue process and analyzed risks for the project lead. Documented cross-functional project work across ÜL2020, NAFTA, MOPF CC/TC, Chassis India, and MENA variants, and planned ECU release cycles. Commissioned E/E ECUs for Ü2020 and CC/TC MOPF 500 projects. Undertook Global Lead Engineering responsibility for ride controllers of conventional drives, including coordination, leadership, and decision-making. Coordinated cross-sectional electric powertrain projects across Brazil, Europe, and India, and planned, coordinated, and commissioned development partners."
    }
  ],
  projects: [
    { title: "ELM Toolchain Transformation", role: "Product Owner · Daimler Truck AG", tech: ["Systems Engineering", "Toolchain Management", "Agile"], description: "Leading the architectural and process transformation of the Engineering Life Cycle Management platform at Daimler Truck to support growing vehicle projects and millions of requirements.", link: "#" },
    { title: "Global E/E Platform Integration", role: "Technical Project Manager · Volkswagen AG", tech: ["E/E Architecture", "Functional Safety", "Supplier Management"], description: "Coordinated complex gateway ECU developments for Volkswagen, ensuring strict adherence to FuSi standards and seamless integration of hardware and software components across a multi-supplier network.", link: "#" },
    { title: "Low-Cost Automation in Bus Assembly", role: "Master Thesis & Project Lead · Daimler Buses / EvoBus", tech: ["Automation", "Manufacturing", "Process Optimization"], description: "Designed and implemented a low-cost automation concept to improve overhead installation in bus assembly at EvoBus Mannheim. Achieved a verified project savings of €8.1 Million.", link: "#" }
  ],
  skills: {
    "Leadership & Management": ["Multi-Continent Team Leadership", "Cross-Functional Orchestration", "Technical–Organizational Bridge", "Execution Discipline", "Trust Architecture", "Coaching & Mentoring", "PMP", "Agile Scrum", "KVP / Kaizen", "Stakeholder Management"],
    "Automotive & Systems Engineering": ["E/E Architecture", "Functional Safety (FuSi)", "Powertrain Engineering", "ECU Development", "Supplier Management", "System Engineering (SysML)"],
    "Tools & Technologies": ["Jira", "PTC Integrity", "DOORS", "Windchill", "SAP ERP", "CATIA V5", "AutoCAD", "MIRO"],
    "Languages & Culture": ["German (Fluent)", "English (Fluent)", "Telugu / Hindi (Native)", "German–Indian Engineering Bridge"]
  },
  certifications: [
    { name: "PMP — Project Management Professional", issuer: "PMI", date: "Oct 2019 – Jan 2020" },
    { name: "Agile Scrum", issuer: "Certification", date: "Sep 2019 – Dec 2019" },
    { name: "Project Administration in Jira Server", issuer: "Certification", date: "Oct 2020" },
    { name: "Process Improvement with Process Mapping (KVP / Kaizen)", issuer: "Certification", date: "Sep 2020" },
    { name: "Quality Management System", issuer: "Certification", date: "Nov 2019" },
    { name: "Expert Module — Technical Compliance & Integrity @ Buses", issuer: "Daimler Buses", date: "May 2019" },
    { name: "SAP ERP", issuer: "Course Program", date: "May 2016 – Sep 2016" },
    { name: "CATIA V5, Ansys 13.0", issuer: "Certification", date: "Dec 2012 – Jan 2013" },
    { name: "AutoCAD 2012", issuer: "Certification", date: "Jan 2013 – Feb 2013" }
  ],
  education: [
    {
      degree: "Master of Engineering — Maschinenbau: Produktion und Logistik",
      institution: "Universität Duisburg-Essen, Duisburg",
      year: "Oct 2014 – May 2018",
      details: "Master thesis: Low-Cost Automation to improve overhead installation in bus assembly (Daimler Buses / EvoBus, Mannheim) — delivered €8.1M verified savings."
    },
    {
      degree: "Bachelor of Engineering — Maschinenbau",
      institution: "Kakatiya University, Warangal, India",
      year: "Oct 2009 – Mar 2013",
      details: "Foundation in mechanical engineering."
    }
  ]
};
