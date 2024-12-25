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
        title: "2020",
        path: "/courses/2020",
        newTab: false,
      },
      {
        id: 52,
        title: "2017-2019",
        path: "/courses/2017-2019",
        newTab: false,
      },
      {
        id: 53,
        title: "2015-2016",
        path: "/courses/2015-2016",
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
