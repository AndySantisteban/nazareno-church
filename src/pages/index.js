import { Inter } from "next/font/google";
import Image from "next/image";
import Banner from "@/assets/nazareno-church.png";
import LogoPrincipal from "@/assets/nazareno-casa.png";
import Conciert from "@/assets/conciert.jpg";
import BannerOracion from "@/assets/banner-oracion.png";
import Cruz from "@/assets/cruz.jpg";
import { useEffect, useState } from "react";
import { Carousel } from "@/components/Carousel";
import { FaChurch, FaMousePointer, FaTiktok } from "react-icons/fa";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [info, setInfo] = useState({});
  const [cultos, setCultos] = useState({});
  async function getInfo() {
    const info = await fetch("/api/info");
    const infoData = await info.json();
    if (infoData) {
      setInfo(infoData);
    }
  }
  async function getCultos() {
    const data = await fetch(`/api/cultos`);
    const info = await data.json();

    if (info) {
      setCultos(info);
    }
  }

  useEffect(() => {
    getInfo();
    getCultos();
  }, []);

  return (
    <div className={inter.className}>
      <Carousel
        listImages={[
          {
            src: Banner,
            content: "Marcos, 11:24",
            title:
              "Crean que ya han recibido todo lo que estén pidiendo en oración, y lo obtendrán.",
          },
          {
            src: Conciert,
            content: "Juan, 3-18",
            title: "No amemos de palabra y de boca, sino de verdad y con obras",
          },
          {
            src: Cruz,
            content: "Lucas, 18-27",
            title:
              "Lo que es imposible para los hombres, es posible para Dios.",
          },
        ]}
      />

      <div className="py-5">
        <div className="container my-5 ">
          <div className="row flex-lg-row-reverse align-items-center g-5 ">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h2 className="display-3 fw-bold lh-1 mb-3 text-secondary">
                <span className="display-5 fw-bold text-muted lh-1 mb-3">
                  Bienvenidos a la casa de nuestro Señor
                </span>{" "}
              </h2>
              <p className="text-secondary">{info.motto}</p>
            </div>
            <div className="col col-lg-6 col-md-6 col-sm-12 text-center ">
              <Image
                src={LogoPrincipal}
                className="mx-lg-auto img-thumbnail rounded-circle"
                alt="Bootstrap Themes"
                width="auto"
                height="auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      {/*Mision y visión*/}
      <div className="py-5">
        <div className="container my-5">
          <div className="row flex-lg-row align-items-center">
            <div className="col-12 col-sm-12 col-lg-6 ">
              <div className="card-body ">
                <h3 className="display-7 fw-bold lh-1 mb-3">MISIÓN</h3>
                <p className="text-muted">{info.mision}</p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-lg-6 ">
              <div className="card-body">
                <h3 className="display-7 fw-bold lh-1 mb-3">VISIÓN</h3>
                <p className="text-muted">{info.vision}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-md mt-5">
        <h2 className="display-4 display-sm-6 fw-bold lh-2 text-center">
          NUESTRAS REUNIONES
        </h2>
        <p className="text-center">
          Forma parte de nuestras reuniones presenciales, además conéctate a
          través de nuestras reuniones online
        </p>
        <div className="row mt-4 ">
          <div className="col  col-md-6 col-sm-12 col-xs-12  text-center">
            <FaChurch size={70} className="text-muted" />
            <h3 className="display-5 fw-bold  lh-2">Presenciales</h3>
            <small className="text-muted">Acomódate en órden de llegada</small>
            <ul>
              {cultos?.cultos?.map((i, idx) => {
                return (
                  <li
                    key={idx}
                    className="list-group-item bg-light text-center lh-2 text-muted"
                  >
                    {i.tipo} - {i.horario}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col  col-md-6 col-sm-12 col-xs-12  text-center">
            <FaMousePointer size={70} className="text-muted" />
            <h3 className="display-5 fw-bold  lh-2">Online</h3>
            <small className="text-muted">
              Conéctate a través de nuestras redes sociales
            </small>
            <ul className="row text-center mt-4">
              {cultos?.redes?.map((i, idx) => {
                return (
                  <li
                    key={idx}
                    className="list-group-item bg-light text-center lh-2 text-muted col-3 "
                  >
                    <a
                      href={i.url}
                      className="text-decoration-none text-muted border-bottom"
                      target={"_blank"}
                    >
                      {(() => {
                        switch (i.nombre) {
                          case "facebook":
                            return <BsFacebook />;
                          case "Instagram":
                            return <BsInstagram />;
                          case "Youtube":
                            return <BsYoutube />;
                          case "Tiktok":
                            return <FaTiktok />;
                          default:
                            return <></>;
                        }
                      })()}{" "}
                      {i.nombre}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
