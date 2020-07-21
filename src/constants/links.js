export default [
  {
    path: "/",
    text: "ETUSIVU"
  },
  {
    path: "/ominaisuudet",
    text: "OMINAISUUDET"
  },
  {
    path: "/ratkaisut",
    text: "RATKAISUT",
    submenu: [
      {
        path: "/pwa",
        text: "PWA"
      },
      {
        path: "/jamstack",
        text: "JAMSTACK"
      },
    ],
  },



  // {
  //   path: "/blog",
  //   text: "TIETOPANKKI"
  // },

  {
    path: "/yhteystiedot",
    text: "YHTEYSTIEDOT"
  },
]