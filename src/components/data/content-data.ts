// Define the type for content items
export interface ContentItem {
    title: string
    description: string
    content: string
  }
  
  // Export the content map
  export const contentMap: Record<string, ContentItem> = {
    // About section
    vision: {
      title: "Our Vision",
      description: "The vision that guides our institution",
      content:
        "To be a leading institution of excellence in education, research, and innovation that transforms lives and contributes to societal development.",
    },
    mission: {
      title: "Our Mission",
      description: "What we strive to accomplish",
      content:
        "To provide quality education, foster innovative research, and promote community engagement that prepares students to be responsible global citizens and leaders.",
    },
    values: {
      title: "Our Values",
      description: "The principles that guide our actions",
      content:
        "Excellence, Integrity, Innovation, Inclusivity, Collaboration, and Social Responsibility form the foundation of our institutional values.",
    },
    goals: {
      title: "Our Goals",
      description: "Strategic objectives we aim to achieve",
      content:
        "Our goals include enhancing academic excellence, expanding research capabilities, strengthening community partnerships, promoting global engagement, and ensuring institutional sustainability.",
    },
    "graduate-attributes": {
      title: "Graduate Attributes",
      description: "Qualities our graduates possess",
      content:
        "Our graduates are critical thinkers, effective communicators, ethically responsible, globally aware, and lifelong learners equipped with the skills to succeed in their chosen fields.",
    },
    organogram: {
      title: "Organogram",
      description: "Our organizational structure",
      content:
        "This page displays the hierarchical structure of our institution, showing the relationships between departments, faculties, and administrative units.",
    },
    "acts-status": {
      title: "Acts & Status",
      description: "Legal framework and institutional status",
      content: "Information about the legislative acts that govern our institution and our current accreditation status.",
    },
  
    // Campus section
    campus: {
      title: "Our Campus",
      description: "Explore our campus facilities",
      content:
        "Our state-of-the-art campus provides a conducive environment for learning, research, and personal development. Explore our campus through the map or take a virtual tour.",
    },
    map: {
      title: "Campus Map",
      description: "Navigate our campus",
      content:
        "An interactive map of our campus showing buildings, facilities, parking areas, and points of interest to help you find your way around.",
    },
    "virtual-tour": {
      title: "Virtual Tour",
      description: "Experience our campus virtually",
      content:
        "Take a virtual tour of our state-of-the-art facilities, classrooms, laboratories, libraries, and recreational spaces from anywhere in the world.",
    },
  
    // Contact section
    contact: {
      title: "Contact Us",
      description: "Get in touch with us",
      content:
        "For inquiries, please contact us at: info@example.edu\nPhone: (123) 456-7890\nAddress: 123 University Avenue, Education City, State 12345",
    },
  
    // Authorities section
    chancellor: {
      title: "Chancellor",
      description: "About the Chancellor",
      content: "Information about the Chancellor of our institution.",
    },
    "chancellor-in-office": {
      title: "Chancellor-in-office",
      description: "Current Chancellor",
      content: "Information about the current Chancellor of our institution.",
    },
    "chancellor-profile": {
      title: "Chancellor Profile",
      description: "Biography of the Chancellor",
      content: "Detailed biography and background of our current Chancellor.",
    },
    "chancellor-message": {
      title: "Chancellor's Message",
      description: "Message from the Chancellor",
      content: "A personal message from our Chancellor to the university community.",
    },
    "chancellor-initiatives": {
      title: "Chancellor's Initiatives",
      description: "Key initiatives by the Chancellor",
      content: "Overview of the key initiatives and programs launched by our Chancellor.",
    },
    "chancellor-achievements": {
      title: "Chancellor's Achievements",
      description: "Achievements of the Chancellor",
      content: "Notable achievements and contributions of our Chancellor to the institution.",
    },
    "chancellor-roll-call": {
      title: "Chancellor Roll Call",
      description: "Past Chancellors",
      content: "A historical list of all past Chancellors who have served our institution.",
    },
    "vice-chancellor": {
      title: "Vice Chancellor",
      description: "About the Vice Chancellor",
      content: "Information about the Vice Chancellor of our institution.",
    },
    "vc-in-office": {
      title: "Vice Chancellor-in-office",
      description: "Current Vice Chancellor",
      content: "Information about the current Vice Chancellor of our institution.",
    },
    "vc-profile": {
      title: "Vice Chancellor Profile",
      description: "Biography of the Vice Chancellor",
      content: "Detailed biography and background of our current Vice Chancellor.",
    },
    "vc-message": {
      title: "Vice Chancellor's Message",
      description: "Message from the Vice Chancellor",
      content: "A personal message from our Vice Chancellor to the university community.",
    },
    "vc-initiatives": {
      title: "Vice Chancellor's Initiatives",
      description: "Key initiatives by the Vice Chancellor",
      content: "Overview of the key initiatives and programs launched by our Vice Chancellor.",
    },
    "vc-achievements": {
      title: "Vice Chancellor's Achievements",
      description: "Achievements of the Vice Chancellor",
      content: "Notable achievements and contributions of our Vice Chancellor to the institution.",
    },
    "vc-roll-call": {
      title: "Vice Chancellor Roll Call",
      description: "Past Vice Chancellors",
      content: "A historical list of all past Vice Chancellors who have served our institution.",
    },
    syndicate: {
      title: "Syndicate",
      description: "About the Syndicate",
      content: "Information about the Syndicate, its members, and its role in university governance.",
    },
    scaa: {
      title: "SCAA",
      description: "Standing Committee on Academic Affairs",
      content: "Information about the Standing Committee on Academic Affairs, its composition, and its functions.",
    },
    "planning-board": {
      title: "Planning Board",
      description: "About the Planning Board",
      content: "Information about the Planning Board, its members, and its role in university planning and development.",
    },
  
    // Administration section
    registrar: {
      title: "Registrar",
      description: "About the Registrar",
      content: "Information about the Registrar's office and its functions in the university administration.",
    },
    "controller-of-examination": {
      title: "Controller of Examination",
      description: "About the Controller of Examination",
      content: "Information about the Controller of Examination and the examination system of the university.",
    },
    "finance-officer": {
      title: "Finance Officer",
      description: "About the Finance Officer",
      content: "Information about the Finance Officer and the financial management of the university.",
    },
    deans: {
      title: "Deans",
      description: "About the Deans",
      content: "Information about the Deans of various faculties and their roles in academic leadership.",
    },
    "dean-coc": {
      title: "Dean CoC",
      description: "Dean of College of Computing",
      content: "Information about the Dean of the College of Computing and their academic leadership.",
    },
    dean: {
      title: "Dean",
      description: "About the Dean",
      content: "Information about the Dean and their role in academic administration.",
    },
    "director-cooe": {
      title: "Director CooE",
      description: "Director of Center of Excellence",
      content: "Information about the Director of the Center of Excellence and their initiatives.",
    },
    directors: {
      title: "Directors",
      description: "About the Directors",
      content: "Information about the Directors of various centers and their roles in the university.",
    },
    "director-iqac": {
      title: "Director IQAC",
      description: "Director of Internal Quality Assurance Cell",
      content: "Information about the Director of IQAC and their role in quality assurance.",
    },
    "director-dirc": {
      title: "Director Dirc",
      description: "Director of Directorate of International Relations and Collaboration",
      content: "Information about the Director of DIRC and their role in international collaborations.",
    },
    director: {
      title: "Director",
      description: "About the Director",
      content: "Information about the Director and their role in the university administration.",
    },
    coordinators: {
      title: "Coordinators",
      description: "About the Coordinators",
      content: "Information about the Coordinators of various programs and their roles.",
    },
    "coordinator-rd": {
      title: "Coordinator R&D",
      description: "Coordinator of Research and Development",
      content: "Information about the Coordinator of R&D and their role in promoting research activities.",
    },
    "coordinator-cbcs": {
      title: "Coordinator CBCS",
      description: "Coordinator of Choice Based Credit System",
      content: "Information about the Coordinator of CBCS and their role in curriculum development.",
    },
    "coordinator-3": {
      title: "Coordinator 3",
      description: "About Coordinator 3",
      content: "Information about Coordinator 3 and their responsibilities.",
    },
    "coordinator-4": {
      title: "Coordinator 4",
      description: "About Coordinator 4",
      content: "Information about Coordinator 4 and their responsibilities.",
    },
    conveners: {
      title: "Conveners",
      description: "About the Conveners",
      content: "Information about the Conveners of various committees and their roles.",
    },
    "convener-1": {
      title: "Demo 1",
      description: "About Demo 1",
      content: "Information about Demo 1 and their responsibilities as a Convener.",
    },
    "convener-2": {
      title: "Demo 2",
      description: "About Demo 2",
      content: "Information about Demo 2 and their responsibilities as a Convener.",
    },
    "convener-3": {
      title: "Demo 3",
      description: "About Demo 3",
      content: "Information about Demo 3 and their responsibilities as a Convener.",
    },
    chairpersons: {
      title: "Chairpersons",
      description: "About the Chairpersons",
      content: "Information about the Chairpersons of various departments and their roles.",
    },
    "chairperson-1": {
      title: "Chairperson 1",
      description: "About Chairperson 1",
      content: "Information about Chairperson 1 and their responsibilities.",
    },
    "chairperson-2": {
      title: "Chairperson 2",
      description: "About Chairperson 2",
      content: "Information about Chairperson 2 and their responsibilities.",
    },
    "chairperson-3": {
      title: "Chairperson 3",
      description: "About Chairperson 3",
      content: "Information about Chairperson 3 and their responsibilities.",
    },
    "nodal-officers": {
      title: "Nodal Officer(Scheme)",
      description: "About the Nodal Officers",
      content: "Information about the Nodal Officers for various schemes and their roles.",
    },
    "nodal-demo-1": {
      title: "Nodal Demo 1",
      description: "About Nodal Demo 1",
      content: "Information about Nodal Demo 1 and their responsibilities.",
    },
    "nodal-demo-2": {
      title: "Nodal Demo 2",
      description: "About Nodal Demo 2",
      content: "Information about Nodal Demo 2 and their responsibilities.",
    },
    "nodal-demo-3": {
      title: "Nodal Demo 3",
      description: "About Nodal Demo 3",
      content: "Information about Nodal Demo 3 and their responsibilities.",
    },
  
    // Keep some of the original content for the remaining menus
    "submenu-4-1": {
      title: "Submenu 4-1 Content",
      description: "This is the content for Submenu 4-1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
    },
    // Add more content for other submenus as needed
  }
  
  // Default content when no submenu is selected
  export const defaultContent: ContentItem = {
    title: "Welcome to our website",
    description: "Select a menu item to view its content",
    content:
      "This is a demo of a navbar with navigation and submenus. Click on any menu item to display its content here.",
  }
  
  