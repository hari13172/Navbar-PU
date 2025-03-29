// Define the types for our menu structure
export interface DeepSubmenu {
  id: string
  title: string
  href: string
}

export interface NestedSubmenu {
  id: string
  title: string
  href: string
  submenus?: DeepSubmenu[]
}

export interface Submenu {
  id: string
  title: string
  href: string
  submenus?: NestedSubmenu[] | DeepSubmenu[]
}

export interface MenuItem {
  title: string
  submenus: Submenu[]
}

// Export the menu data
export const menuItems: MenuItem[] = [
  {
    title: "About",
    submenus: [
      { id: "vision", title: "Vision", href: "#vision" },
      { id: "mission", title: "Mission", href: "#mission" },
      { id: "values", title: "Values", href: "#values" },
      { id: "goals", title: "Goals", href: "#goals" },
      { id: "graduate-attributes", title: "Graduate Attributes", href: "#graduate-attributes" },
      { id: "organogram", title: "Organogram", href: "#organogram" },
      { id: "acts-status", title: "Acts & Status", href: "#acts-status" },
      {
        id: "campus",
        title: "Campus",
        href: "#campus",
        submenus: [
          { id: "map", title: "Map", href: "#map" },
          { id: "virtual-tour", title: "Virtual Tour", href: "#virtual-tour" },
        ],
      },
      { id: "contact", title: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Authorities",
    submenus: [
      {
        id: "chancellor",
        title: "Chancellor",
        href: "#chancellor",
        submenus: [
          {
            id: "chancellor-in-office",
            title: "Chancellor-in-office",
            href: "#chancellor-in-office",
            submenus: [
              { id: "chancellor-profile", title: "Profile", href: "#chancellor-profile" },
              { id: "chancellor-message", title: "Message", href: "#chancellor-message" },
              { id: "chancellor-initiatives", title: "Initiatives", href: "#chancellor-initiatives" },
              { id: "chancellor-achievements", title: "Achievements", href: "#chancellor-achievements" },
            ],
          },
          { id: "chancellor-roll-call", title: "Roll Call", href: "#chancellor-roll-call" },
        ],
      },
      {
        id: "vice-chancellor",
        title: "Vice Chancellor",
        href: "#vice-chancellor",
        submenus: [
          {
            id: "vc-in-office",
            title: "ViceChancellor-in-office",
            href: "#vc-in-office",
            submenus: [
              { id: "vc-profile", title: "Profile", href: "#vc-profile" },
              { id: "vc-message", title: "Message", href: "#vc-message" },
              { id: "vc-initiatives", title: "Initiatives", href: "#vc-initiatives" },
              { id: "vc-achievements", title: "Achievements", href: "#vc-achievements" },
            ],
          },
          { id: "vc-roll-call", title: "Roll Call", href: "#vc-roll-call" },
        ],
      },
      { id: "syndicate", title: "Syndicate", href: "#syndicate" },
      { id: "scaa", title: "SCAA", href: "#scaa" },
      { id: "planning-board", title: "Planning Board", href: "#planning-board" },
    ],
  },
  {
    title: "Administration",
    submenus: [
      { id: "registrar", title: "Registrar", href: "#registrar" },
      { id: "controller-of-examination", title: "Controller of Examination", href: "#controller-of-examination" },
      { id: "finance-officer", title: "Finance Officer", href: "#finance-officer" },
      {
        id: "deans",
        title: "Deans",
        href: "#deans",
        submenus: [
          { id: "dean-coc", title: "Dean CoC", href: "#dean-coc" },
          { id: "dean", title: "Dean", href: "#dean" },
          { id: "director-cooe", title: "Director CooE", href: "#director-cooe" },
        ],
      },
      {
        id: "directors",
        title: "Directors",
        href: "#directors",
        submenus: [
          { id: "director-iqac", title: "Director IQAC", href: "#director-iqac" },
          { id: "director-dirc", title: "Director Dirc", href: "#director-dirc" },
          { id: "director", title: "Director", href: "#director" },
        ],
      },
      {
        id: "coordinators",
        title: "Coordinators",
        href: "#coordinators",
        submenus: [
          { id: "coordinator-rd", title: "Coordinator R&D", href: "#coordinator-rd" },
          { id: "coordinator-cbcs", title: "Coordinator CBCS", href: "#coordinator-cbcs" },
          { id: "coordinator-3", title: "Coordinator 3", href: "#coordinator-3" },
          { id: "coordinator-4", title: "Coordinator 4", href: "#coordinator-4" },
        ],
      },
      {
        id: "conveners",
        title: "Conveners",
        href: "#conveners",
        submenus: [
          { id: "convener-1", title: "Demo 1", href: "#convener-1" },
          { id: "convener-2", title: "Demo 2", href: "#convener-2" },
          { id: "convener-3", title: "Demo 3", href: "#convener-3" },
        ],
      },
      {
        id: "chairpersons",
        title: "Chairpersons",
        href: "#chairpersons",
        submenus: [
          { id: "chairperson-1", title: "Chairperson 1", href: "#chairperson-1" },
          { id: "chairperson-2", title: "Chairperson 2", href: "#chairperson-2" },
          { id: "chairperson-3", title: "Chairperson 3", href: "#chairperson-3" },
        ],
      },
      {
        id: "nodal-officers",
        title: "Nodal Officer(Scheme)",
        href: "#nodal-officers",
        submenus: [
          { id: "nodal-demo-1", title: "Nodal Demo 1", href: "#nodal-demo-1" },
          { id: "nodal-demo-2", title: "Nodal Demo 2", href: "#nodal-demo-2" },
          { id: "nodal-demo-3", title: "Nodal Demo 3", href: "#nodal-demo-3" },
        ],
      },
    ],
  },
  {
    title: "Academics",
    submenus: [
      { id: "schools-departments", title: "Schools and Departments", href: "#schools-departments" },
      { id: "pucpgrs", title: "PUCPGRS", href: "#pucpgrs" },
      {
        id: "affiliated-college",
        title: "Affiliated College",
        href: "#affiliated-college",
        submenus: [
          { id: "college-list", title: "List", href: "#college-list" },
          { id: "dean-cdc", title: "Dean CDC", href: "#dean-cdc" },
        ],
      },
      { id: "regulations", title: "Regulations", href: "#regulations" },
      {
        id: "bos-center-cell",
        title: "BOS Center and Cell",
        href: "#bos-center-cell",
        submenus: [
          { id: "uds-office", title: "UDS Office", href: "#uds-office" },
          { id: "affiliated-college-bos", title: "Affiliated college", href: "#affiliated-college-bos" },
        ],
      },
      { id: "cdoe", title: "CDOE", href: "#cdoe" },
    ],
  },
  {
    title: "Admission",
    submenus: [
      {
        id: "programmes",
        title: "Programmes",
        href: "#programmes",
        submenus: [
          { id: "university-departments", title: "University Departments", href: "#university-departments" },
          { id: "affiliated-colleges-prog", title: "Affiliated Colleges", href: "#affiliated-colleges-prog" },
          { id: "cdoe-prog", title: "CDOE", href: "#cdoe-prog" },
        ],
      },
      { id: "eligibility", title: "Eligibility", href: "#eligibility" },
      { id: "admission-process", title: "Admission Process", href: "#admission-process" },
      { id: "fee-structure", title: "Fee Structure", href: "#fee-structure" },
      { id: "scholarship", title: "Scholarship", href: "#scholarship" },
      { id: "scholarships-fellowships", title: "Scholarships/Fellowships", href: "#scholarships-fellowships" },
    ],
  },
  {
    title: "Menu 6",
    submenus: [
      { id: "submenu-6-1", title: "Submenu 6-1", href: "#submenu-6-1" },
      { id: "submenu-6-2", title: "Submenu 6-2", href: "#submenu-6-2" },
      { id: "submenu-6-3", title: "Submenu 6-3", href: "#submenu-6-3" },
    ],
  },
  {
    title: "Examination",
    submenus: [
      {
        id: "exam-fee-structure",
        title: "Fee Structure",
        href: "#exam-fee-structure",
        submenus: [
          { id: "regular-fee", title: "Regular", href: "#regular-fee" },
          { id: "cdoe-fee", title: "CDOE", href: "#cdoe-fee" },
        ],
      },
      { id: "exam-schedule", title: "Exam Schedule", href: "#exam-schedule" },
      { id: "result", title: "Result", href: "#result" },
      { id: "e-sanad-service", title: "E-Sanad Service", href: "#e-sanad-service" },
      { id: "downloads", title: "Downloads", href: "#downloads" },
      { id: "procedure-certification", title: "Procedure for Certification", href: "#procedure-certification" },
      { id: "unclaimed-certification", title: "Unclaimed Certification", href: "#unclaimed-certification" },
    ],
  },
  {
    title: "StudentLife",
    submenus: [
      { id: "hostel", title: "Hostel", href: "#hostel" },
      { id: "library", title: "Library", href: "#library" },
      { id: "sports", title: "Sports", href: "#sports" },
      {
        id: "student-class",
        title: "StudentClass",
        href: "#student-class",
        submenus: [
          { id: "clause1", title: "clause1", href: "#clause1" },
          { id: "clause2", title: "clause2", href: "#clause2" },
          { id: "clause3", title: "clause3", href: "#clause3" },
        ],
      },
      {
        id: "student-development",
        title: "Student Development Programmes",
        href: "#student-development",
        submenus: [
          { id: "nan-mudhalvan", title: "1.Nan mudhalvan", href: "#nan-mudhalvan" },
          { id: "edc", title: "2.EDC", href: "#edc" },
        ],
      },
      { id: "cultural-activities", title: "Cultural Activities", href: "#cultural-activities" },
      { id: "health-center", title: "Health Center", href: "#health-center" },
      {
        id: "redressals",
        title: "Redressals",
        href: "#redressals",
        submenus: [
          { id: "icc", title: "ICC", href: "#icc" },
          { id: "others-redressals", title: "Others", href: "#others-redressals" },
        ],
      },
      {
        id: "community-engagement",
        title: "Community Engagement",
        href: "#community-engagement",
        submenus: [
          { id: "nss", title: "NSS", href: "#nss" },
          { id: "yrc", title: "YRC", href: "#yrc" },
          { id: "rrc", title: "RRC", href: "#rrc" },
        ],
      },
      { id: "gallery", title: "Gallery", href: "#gallery" },
      { id: "puaa", title: "PUAA", href: "#puaa" },
    ],
  },
  {
    title: "Quality Assurance",
    submenus: [
      {
        id: "iqac",
        title: "IQAC",
        href: "#iqac",
        submenus: [
          {
            id: "about-iqac",
            title: "About IQAC",
            href: "#about-iqac",
            submenus: [
              { id: "establishment", title: "Establishment", href: "#establishment" },
              { id: "vision-mission", title: "Vision/Mission", href: "#vision-mission" },
              { id: "chairman", title: "Chairman", href: "#chairman" },
              { id: "director", title: "Director", href: "#director-iqac" },
            ],
          },
          { id: "members", title: "Members", href: "#members" },
          {
            id: "meeting",
            title: "Meeting",
            href: "#meeting",
            submenus: [
              { id: "mom", title: "MOM", href: "#mom" },
              { id: "atr", title: "ATR", href: "#atr" },
            ],
          },
          {
            id: "document",
            title: "Document",
            href: "#document",
            submenus: [
              { id: "idp", title: "IDP", href: "#idp" },
              { id: "policies", title: "Policies", href: "#policies" },
              { id: "best-practices", title: "Best Practices", href: "#best-practices" },
              { id: "aqar", title: "AQAR", href: "#aqar" },
              { id: "ssr", title: "SSR", href: "#ssr" },
              { id: "cas-application", title: "CAS Application", href: "#cas-application" },
            ],
          },
          { id: "feedback-system", title: "Feedback System", href: "#feedback-system" },
        ],
      },
      {
        id: "nirf",
        title: "NIRF",
        href: "#nirf",
        submenus: [
          { id: "nirf-coordinator", title: "Co-ordinator", href: "#nirf-coordinator" },
          { id: "nirf-members", title: "Members", href: "#nirf-members" },
          { id: "nirf-mom", title: "Minute of Meeting", href: "#nirf-mom" },
          { id: "nirf-ranking", title: "Ranking", href: "#nirf-ranking" },
        ],
      },
      {
        id: "iic",
        title: "IIC",
        href: "#iic",
        submenus: [
          { id: "iic-coordinator", title: "Coordinator", href: "#iic-coordinator" },
          { id: "iic-council", title: "Council", href: "#iic-council" },
          { id: "iic-division", title: "Division", href: "#iic-division" },
          { id: "iic-mom", title: "Minute of Meeting", href: "#iic-mom" },
        ],
      },
      {
        id: "ranking-certificates",
        title: "Ranking Certificates",
        href: "#ranking-certificates",
        submenus: [
          { id: "naac-certificate", title: "NAAC", href: "#naac-certificate" },
          { id: "nirf-certificate", title: "NIRF", href: "#nirf-certificate" },
        ],
      },
    ],
  },
  {
    title: "Quick Links",
    submenus: [
      { id: "pucpgrs-link", title: "PUCPGRS", href: "#pucpgrs-link" },
      { id: "cdoe-link", title: "CDOE", href: "#cdoe-link" },
      { id: "faculty-portal", title: "Faculty Portal", href: "#faculty-portal" },
      { id: "directerate-research", title: "Directerate of Research", href: "#directerate-research" },
      { id: "directerate-placements", title: "Directerate of Placements", href: "#directerate-placements" },
      { id: "duic", title: "DUIC", href: "#duic" },
      { id: "nisp", title: "NISP", href: "#nisp" },
      { id: "library-link", title: "Library", href: "#library-link" },
      { id: "physical-education", title: "Physical Education", href: "#physical-education" },
      { id: "naan-mudhalvan", title: "NAAN Mudhalvan", href: "#naan-mudhalvan" },
      { id: "puaa-link", title: "PUAA", href: "#puaa-link" },
      { id: "ugc", title: "UGC", href: "#ugc" },
      { id: "nad-cell", title: "NAD cell", href: "#nad-cell" },
    ],
  },
]

