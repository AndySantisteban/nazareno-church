// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function Cultos(req, res) {
  const urls = {
    cultos: [
      {
        horario: "Martes 7pm - 9pm",
        tipo: "Culto de oración",
      },
      {
        horario: "Jueves 7pm - 9pm",
        tipo: "Culto de oración",
      },
      {
        horario: "Sábados 8pm - 10pm",
        tipo: "Culto JNI",
      },
      {
        horario: "Domingos 7pm - 9pm",
        tipo: "Culto Principal",
      },
    ],
    redes: [
      {
        nombre: "facebook",
        url: "",
      },
      {
        nombre: "Youtube",
        url: "",
      },
      {
        nombre: "Instagram",
        url: "",
      },
      {
        nombre: "Tiktok",
        url: "",
      },
    ],
  };
  res.status(200).json(urls);
}
