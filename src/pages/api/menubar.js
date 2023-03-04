export default function Menubar(req, res) {
  res.status(200).json({
    items: [
      {
        path: "/ministerios",
        name: "Ministerios",
      },
      {
        path: "/historia",
        name: "Historia",
      },
      {
        path: "/noticias",
        name: "Noticias",
      },
      {
        path: "/recursos",
        name: "Recursos",
      },
      // {
      //   path: "/cultos",
      //   name: "Cultos",
      // },
    ],
  });
}
