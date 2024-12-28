const menuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Objectives",
    path: "/objectives",
    newTab: false,
  },
  {
    id: 3,
    title: "Guidelines & Forms",
    path: "/guidelines-forms",
    newTab: false,
  },
  {
    id: 5,
    title: "Courses at IITH",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "Phase 4",
        path: "/courses/phase4",
        newTab: false,
      },
      {
        id: 52,
        title: "Phase 3",
        path: "/courses/phase3",
        newTab: false,
      },
      {
        id: 53,
        title: "Phase 2",
        path: "/courses/phase2",
        newTab: false,
      },
      {
        id: 54,
        title: "Phase 1",
        path: "/courses/phase1",
        newTab: false,
      },
    ],
  },
  {
    id: 6,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
