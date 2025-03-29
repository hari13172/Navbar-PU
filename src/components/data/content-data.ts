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

  // Academics menu items
  "schools-departments": {
    title: "Schools and Departments",
    description: "Academic schools and departments of the university",
    content:
      "Information about the various schools and academic departments of the university, their programs, faculty, and research areas.",
  },
  pucpgrs: {
    title: "PUCPGRS",
    description: "Post-University College Postgraduate Research Studies",
    content:
      "Information about the Post-University College Postgraduate Research Studies program, admission requirements, research areas, and faculty.",
  },
  "affiliated-college": {
    title: "Affiliated College",
    description: "Colleges affiliated with the university",
    content: "Information about colleges affiliated with the university, their programs, and academic offerings.",
  },
  "college-list": {
    title: "List of Affiliated Colleges",
    description: "Complete list of colleges affiliated with the university",
    content:
      "A comprehensive list of all colleges affiliated with the university, including their location, programs offered, and contact information.",
  },
  "dean-cdc": {
    title: "Dean CDC",
    description: "Dean of College Development Council",
    content:
      "Information about the Dean of College Development Council, their role, responsibilities, and initiatives for college development.",
  },
  regulations: {
    title: "Regulations",
    description: "Academic regulations of the university",
    content:
      "Detailed information about the academic regulations, policies, and procedures of the university for various programs and courses.",
  },
  "bos-center-cell": {
    title: "BOS Center and Cell",
    description: "Board of Studies Centers and Cells",
    content: "Information about the Board of Studies Centers and Cells, their functions, members, and activities.",
  },
  "uds-office": {
    title: "UDS Office",
    description: "University Department of Studies Office",
    content:
      "Information about the University Department of Studies Office, its functions, staff, and services provided to students and faculty.",
  },
  "affiliated-college-bos": {
    title: "Affiliated College BOS",
    description: "Board of Studies for Affiliated Colleges",
    content:
      "Information about the Board of Studies for Affiliated Colleges, its composition, functions, and role in curriculum development.",
  },
  cdoe: {
    title: "CDOE",
    description: "Center for Distance and Online Education",
    content:
      "Information about the Center for Distance and Online Education, its programs, admission process, and learning resources.",
  },

  // Admission menu items
  programmes: {
    title: "Programmes",
    description: "Academic programmes offered by the university",
    content:
      "Information about the various academic programmes offered by the university at undergraduate, postgraduate, and doctoral levels.",
  },
  "university-departments": {
    title: "University Departments Programmes",
    description: "Programmes offered by university departments",
    content:
      "Detailed information about the academic programmes offered by various university departments, including admission requirements, curriculum, and career prospects.",
  },
  "affiliated-colleges-prog": {
    title: "Affiliated Colleges Programmes",
    description: "Programmes offered by affiliated colleges",
    content:
      "Information about the academic programmes offered by colleges affiliated with the university, including admission requirements and curriculum.",
  },
  "cdoe-prog": {
    title: "CDOE Programmes",
    description: "Programmes offered through distance and online education",
    content:
      "Information about the academic programmes offered through the Center for Distance and Online Education, including admission requirements, curriculum, and learning methodology.",
  },
  eligibility: {
    title: "Eligibility",
    description: "Eligibility criteria for admission",
    content:
      "Detailed information about the eligibility criteria for admission to various programmes offered by the university and its affiliated colleges.",
  },
  "admission-process": {
    title: "Admission Process",
    description: "Process for admission to university programmes",
    content:
      "Step-by-step guide to the admission process for various programmes offered by the university, including application procedure, entrance examinations, and counseling.",
  },
  "fee-structure": {
    title: "Fee Structure",
    description: "Fee structure for various programmes",
    content:
      "Detailed information about the fee structure for various programmes offered by the university, including tuition fees, examination fees, and other charges.",
  },
  scholarship: {
    title: "Scholarship",
    description: "Scholarships available for students",
    content:
      "Information about various scholarships available for students, including eligibility criteria, application procedure, and benefits.",
  },
  "scholarships-fellowships": {
    title: "Scholarships/Fellowships",
    description: "Scholarships and fellowships for research scholars",
    content:
      "Detailed information about various scholarships and fellowships available for research scholars, including eligibility criteria, application procedure, and financial benefits.",
  },

  // Examination menu items
  "exam-fee-structure": {
    title: "Examination Fee Structure",
    description: "Fee structure for examinations",
    content: "Detailed information about the fee structure for various examinations conducted by the university.",
  },
  "regular-fee": {
    title: "Regular Examination Fees",
    description: "Fee structure for regular examinations",
    content:
      "Information about the fee structure for regular examinations, including application fees, examination fees, and other charges.",
  },
  "cdoe-fee": {
    title: "CDOE Examination Fees",
    description: "Fee structure for CDOE examinations",
    content:
      "Information about the fee structure for examinations conducted for CDOE students, including application fees, examination fees, and other charges.",
  },
  "exam-schedule": {
    title: "Examination Schedule",
    description: "Schedule of upcoming examinations",
    content:
      "Detailed schedule of upcoming examinations, including dates, times, and venues for various courses and programs.",
  },
  result: {
    title: "Examination Results",
    description: "Results of examinations",
    content:
      "Information about examination results, including how to access results online, result statistics, and revaluation procedures.",
  },
  "e-sanad-service": {
    title: "E-Sanad Service",
    description: "Electronic document attestation service",
    content:
      "Information about the E-Sanad service for electronic attestation of academic documents, including procedure, fees, and processing time.",
  },
  downloads: {
    title: "Downloads",
    description: "Downloadable forms and documents",
    content:
      "Various forms and documents related to examinations that can be downloaded, including application forms, revaluation forms, and guidelines.",
  },
  "procedure-certification": {
    title: "Procedure for Certification",
    description: "Procedure to obtain certificates",
    content:
      "Step-by-step guide to the procedure for obtaining various certificates from the university, including degree certificates, transcripts, and provisional certificates.",
  },
  "unclaimed-certification": {
    title: "Unclaimed Certification",
    description: "Information about unclaimed certificates",
    content:
      "List of unclaimed certificates and the procedure to claim them, including required documents and contact information.",
  },

  // StudentLife menu items
  hostel: {
    title: "Hostel",
    description: "University hostels for students",
    content:
      "Information about university hostels, including facilities, rules and regulations, fee structure, and application procedure.",
  },
  library: {
    title: "Library",
    description: "University library facilities",
    content:
      "Information about the university library, including collections, digital resources, working hours, and membership details.",
  },
  sports: {
    title: "Sports",
    description: "Sports facilities and activities",
    content:
      "Information about sports facilities, activities, tournaments, and achievements of the university in various sports.",
  },
  "student-class": {
    title: "Student Class",
    description: "Student class information",
    content: "Information about student classes, including schedules, regulations, and activities.",
  },
  clause1: {
    title: "Clause 1",
    description: "Student class clause 1",
    content: "Detailed information about clause 1 of student class regulations and its implications for students.",
  },
  clause2: {
    title: "Clause 2",
    description: "Student class clause 2",
    content: "Detailed information about clause 2 of student class regulations and its implications for students.",
  },
  clause3: {
    title: "Clause 3",
    description: "Student class clause 3",
    content: "Detailed information about clause 3 of student class regulations and its implications for students.",
  },
  "student-development": {
    title: "Student Development Programmes",
    description: "Programmes for student development",
    content:
      "Information about various programmes aimed at student development, including skill enhancement, personality development, and career guidance.",
  },
  "nan-mudhalvan": {
    title: "1.Nan mudhalvan",
    description: "Nan mudhalvan programme",
    content: "Information about the Nan mudhalvan programme, its objectives, activities, and benefits for students.",
  },
  edc: {
    title: "2.EDC",
    description: "Entrepreneurship Development Cell",
    content:
      "Information about the Entrepreneurship Development Cell, its activities, initiatives, and support for student entrepreneurs.",
  },
  "cultural-activities": {
    title: "Cultural Activities",
    description: "Cultural activities and events",
    content:
      "Information about various cultural activities and events organized by the university, including festivals, competitions, and performances.",
  },
  "health-center": {
    title: "Health Center",
    description: "University health center",
    content:
      "Information about the university health center, including facilities, services, working hours, and emergency contact details.",
  },
  redressals: {
    title: "Redressals",
    description: "Grievance redressal mechanisms",
    content:
      "Information about various grievance redressal mechanisms available for students, including procedures and contact details.",
  },
  icc: {
    title: "ICC",
    description: "Internal Complaints Committee",
    content:
      "Information about the Internal Complaints Committee, its composition, functions, and procedures for filing complaints.",
  },
  "others-redressals": {
    title: "Other Redressal Mechanisms",
    description: "Other grievance redressal mechanisms",
    content:
      "Information about other grievance redressal mechanisms available for students, including anti-ragging committee, SC/ST cell, and OBC cell.",
  },
  "community-engagement": {
    title: "Community Engagement",
    description: "Community engagement activities",
    content:
      "Information about various community engagement activities undertaken by the university, including outreach programs, awareness campaigns, and social service initiatives.",
  },
  nss: {
    title: "NSS",
    description: "National Service Scheme",
    content:
      "Information about the National Service Scheme unit of the university, its activities, achievements, and opportunities for students.",
  },
  yrc: {
    title: "YRC",
    description: "Youth Red Cross",
    content:
      "Information about the Youth Red Cross unit of the university, its activities, achievements, and opportunities for students.",
  },
  rrc: {
    title: "RRC",
    description: "Red Ribbon Club",
    content:
      "Information about the Red Ribbon Club of the university, its activities, awareness campaigns, and initiatives for HIV/AIDS prevention.",
  },
  gallery: {
    title: "Gallery",
    description: "Photo gallery of university events",
    content:
      "A collection of photographs from various events, activities, and achievements of the university and its students.",
  },
  puaa: {
    title: "PUAA",
    description: "University Alumni Association",
    content:
      "Information about the University Alumni Association, its activities, membership details, and notable alumni.",
  },

  // Quality Assurance menu items
  iqac: {
    title: "IQAC",
    description: "Internal Quality Assurance Cell",
    content: "Information about the Internal Quality Assurance Cell, its functions, objectives, and initiatives.",
  },
  "about-iqac": {
    title: "About IQAC",
    description: "About the Internal Quality Assurance Cell",
    content:
      "Detailed information about the Internal Quality Assurance Cell, its establishment, vision, mission, and leadership.",
  },
  establishment: {
    title: "Establishment",
    description: "Establishment of IQAC",
    content:
      "Information about the establishment of the Internal Quality Assurance Cell, its history, and development over the years.",
  },
  "vision-mission": {
    title: "Vision/Mission",
    description: "Vision and Mission of IQAC",
    content:
      "The vision and mission statements of the Internal Quality Assurance Cell, guiding its activities and initiatives.",
  },
  chairman: {
    title: "Chairman",
    description: "Chairman of IQAC",
    content:
      "Information about the Chairman of the Internal Quality Assurance Cell, their role, responsibilities, and contributions.",
  },
  members: {
    title: "Members",
    description: "Members of IQAC",
    content:
      "List of members of the Internal Quality Assurance Cell, including faculty, administrative staff, and external experts.",
  },
  meeting: {
    title: "Meeting",
    description: "Meetings of IQAC",
    content:
      "Information about the meetings of the Internal Quality Assurance Cell, including frequency, agenda, and outcomes.",
  },
  mom: {
    title: "MOM",
    description: "Minutes of Meetings",
    content:
      "Minutes of meetings of the Internal Quality Assurance Cell, documenting discussions, decisions, and action plans.",
  },
  atr: {
    title: "ATR",
    description: "Action Taken Reports",
    content:
      "Action Taken Reports based on the decisions and recommendations of the Internal Quality Assurance Cell meetings.",
  },
  document: {
    title: "Document",
    description: "Documents of IQAC",
    content:
      "Various documents related to the Internal Quality Assurance Cell, including policies, reports, and best practices.",
  },
  idp: {
    title: "IDP",
    description: "Institutional Development Plan",
    content:
      "The Institutional Development Plan, outlining the strategic goals, objectives, and action plans for institutional growth and improvement.",
  },
  policies: {
    title: "Policies",
    description: "Policies of IQAC",
    content:
      "Various policies developed and implemented by the Internal Quality Assurance Cell to enhance institutional quality.",
  },
  "best-practices": {
    title: "Best Practices",
    description: "Best Practices promoted by IQAC",
    content:
      "Best practices identified, promoted, and institutionalized by the Internal Quality Assurance Cell to enhance quality in various aspects of the institution.",
  },
  aqar: {
    title: "AQAR",
    description: "Annual Quality Assurance Report",
    content:
      "Annual Quality Assurance Reports submitted to NAAC, documenting the quality initiatives and achievements of the institution.",
  },
  ssr: {
    title: "SSR",
    description: "Self-Study Report",
    content:
      "Self-Study Reports prepared for NAAC accreditation, providing a comprehensive assessment of the institution's performance across various criteria.",
  },
  "cas-application": {
    title: "CAS Application",
    description: "Career Advancement Scheme Application",
    content:
      "Information about the Career Advancement Scheme application process, guidelines, and requirements for faculty members.",
  },
  "feedback-system": {
    title: "Feedback System",
    description: "Feedback System of IQAC",
    content:
      "Information about the feedback system implemented by the Internal Quality Assurance Cell to collect, analyze, and utilize feedback from various stakeholders.",
  },

  // NIRF section
  nirf: {
    title: "NIRF",
    description: "National Institutional Ranking Framework",
    content:
      "Information about the National Institutional Ranking Framework (NIRF) and our institution's participation and performance.",
  },
  "nirf-coordinator": {
    title: "NIRF Coordinator",
    description: "Coordinator for NIRF",
    content: "Information about the coordinator responsible for NIRF-related activities and submissions.",
  },
  "nirf-members": {
    title: "NIRF Members",
    description: "Members of the NIRF team",
    content: "List of members who are part of the NIRF team, along with their roles and responsibilities.",
  },
  "nirf-mom": {
    title: "NIRF Minutes of Meeting",
    description: "Minutes of NIRF meetings",
    content: "Records of discussions, decisions, and action plans from NIRF team meetings.",
  },
  "nirf-ranking": {
    title: "NIRF Ranking",
    description: "NIRF ranking of the institution",
    content:
      "Information about our institution's ranking in the NIRF, including historical data and improvement strategies.",
  },

  // IIC section
  iic: {
    title: "IIC",
    description: "Institution's Innovation Council",
    content:
      "Information about the Institution's Innovation Council (IIC), its objectives, activities, and achievements.",
  },
  "iic-coordinator": {
    title: "IIC Coordinator",
    description: "Coordinator for IIC",
    content: "Information about the coordinator responsible for IIC activities and initiatives.",
  },
  "iic-council": {
    title: "IIC Council",
    description: "Council members of IIC",
    content: "List of council members who oversee the functioning of the Institution's Innovation Council.",
  },
  "iic-division": {
    title: "IIC Division",
    description: "Divisions within IIC",
    content:
      "Information about various divisions within the Institution's Innovation Council and their specific focus areas.",
  },
  "iic-mom": {
    title: "IIC Minutes of Meeting",
    description: "Minutes of IIC meetings",
    content: "Records of discussions, decisions, and action plans from IIC meetings.",
  },

  // Ranking Certificates section
  "ranking-certificates": {
    title: "Ranking Certificates",
    description: "Certificates of ranking and accreditation",
    content:
      "Certificates and documentation related to our institution's rankings and accreditations from various agencies.",
  },
  "naac-certificate": {
    title: "NAAC Certificate",
    description: "NAAC accreditation certificate",
    content:
      "Certificate of accreditation from the National Assessment and Accreditation Council (NAAC), including grade, score, and validity period.",
  },
  "nirf-certificate": {
    title: "NIRF Certificate",
    description: "NIRF ranking certificate",
    content:
      "Certificate of ranking from the National Institutional Ranking Framework (NIRF), including rank, score, and year of ranking.",
  },

  // Quick Links content
  "pucpgrs-link": {
    title: "PUCPGRS",
    description: "Post-University College Postgraduate Research Studies",
    content: "Information about the PUCPGRS program, research opportunities, and resources for postgraduate students.",
  },
  "cdoe-link": {
    title: "CDOE",
    description: "Center for Distance and Online Education",
    content: "Information about distance and online education programs, courses, and resources offered by the university.",
  },
  "faculty-portal": {
    title: "Faculty Portal",
    description: "Portal for faculty members",
    content: "A dedicated portal for faculty members to access resources, submit grades, and manage course materials.",
  },
  "directerate-research": {
    title: "Directerate of Research",
    description: "Research initiatives and support",
    content: "Information about research initiatives, funding opportunities, and support services for researchers.",
  },
  "directerate-placements": {
    title: "Directerate of Placements",
    description: "Career and placement services",
    content: "Information about career development, placement services, and job opportunities for students and alumni.",
  },
  "duic": {
    title: "DUIC",
    description: "University Innovation Center",
    content: "Information about the University Innovation Center, its initiatives, and opportunities for students and faculty.",
  },
  "nisp": {
    title: "NISP",
    description: "National Innovation and Startup Policy",
    content: "Information about the National Innovation and Startup Policy implementation at the university.",
  },
  "library-link": {
    title: "Library",
    description: "University library resources",
    content: "Information about library resources, services, digital collections, and facilities available to students and faculty.",
  },
  "physical-education": {
    title: "Physical Education",
    description: "Sports and physical education", 
    content: "Information about sports facilities, physical education programs, and athletic opportunities at the university.",
  },
  "naan-mudhalvan": {
    title: "NAAN Mudhalvan",
    description: "Skill development program",
    content: "Information about the NAAN Mudhalvan program, its objectives, courses, and benefits for students.",
  },
  "puaa-link": {
    title: "PUAA",
    description: "University Alumni Association",
    content: "Information about the University Alumni Association, its activities, events, and opportunities for alumni engagement.",
  },
  "ugc": {
    title: "UGC",
    description: "University Grants Commission",
    content: "Information about UGC guidelines, regulations, and initiatives relevant to the university.",
  },
  "nad-cell": {
    title: "NAD Cell",
    description: "National Academic Depository Cell",
    content: "Information about the National Academic Depository Cell and its services for digital storage of academic records.",
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

