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
      title: "Menu 4",
      submenus: [
        { id: "submenu-4-1", title: "Submenu 4-1", href: "#submenu-4-1" },
        { id: "submenu-4-2", title: "Submenu 4-2", href: "#submenu-4-2" },
        { id: "submenu-4-3", title: "Submenu 4-3", href: "#submenu-4-3" },
      ],
    },
    {
      title: "Menu 5",
      submenus: [
        { id: "submenu-5-1", title: "Submenu 5-1", href: "#submenu-5-1" },
        { id: "submenu-5-2", title: "Submenu 5-2", href: "#submenu-5-2" },
        { id: "submenu-5-3", title: "Submenu 5-3", href: "#submenu-5-3" },
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
      title: "Menu 7",
      submenus: [
        { id: "submenu-7-1", title: "Submenu 7-1", href: "#submenu-7-1" },
        { id: "submenu-7-2", title: "Submenu 7-2", href: "#submenu-7-2" },
        { id: "submenu-7-3", title: "Submenu 7-3", href: "#submenu-7-3" },
      ],
    },
    {
      title: "Menu 8",
      submenus: [
        { id: "submenu-8-1", title: "Submenu 8-1", href: "#submenu-8-1" },
        { id: "submenu-8-2", title: "Submenu 8-2", href: "#submenu-8-2" },
        { id: "submenu-8-3", title: "Submenu 8-3", href: "#submenu-8-3" },
      ],
    },
    {
      title: "Menu 9",
      submenus: [
        { id: "submenu-9-1", title: "Submenu 9-1", href: "#submenu-9-1" },
        { id: "submenu-9-2", title: "Submenu 9-2", href: "#submenu-9-2" },
        { id: "submenu-9-3", title: "Submenu 9-3", href: "#submenu-9-3" },
      ],
    },
    {
      title: "Menu 10",
      submenus: [
        { id: "submenu-10-1", title: "Submenu 10-1", href: "#submenu-10-1" },
        { id: "submenu-10-2", title: "Submenu 10-2", href: "#submenu-10-2" },
        { id: "submenu-10-3", title: "Submenu 10-3", href: "#submenu-10-3" },
      ],
    },
  ]
  
  