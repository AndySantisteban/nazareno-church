import { Inter } from "next/font/google";
import Image from "next/image";

import Banner from "@/assets/banner.png";
import BannerOracion from "@/assets/banner-oracion.png";
import { useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [info, setInfo] = useState({});

  async function getInfo() {
    const info = await fetch("/api/info");
    const infoData = await info.json();
    console.log(infoData);
    if (infoData) {
      setInfo(infoData);
    }
  }
  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className={inter.className}>
      <Image
        src={Banner}
        alt="iglesia del nazareno"
        className="img-fluid w-100"
      />
      {/*Bienvenida*/}
      <div className="py-5">
        <div className="container my-5 ">
          <div className="row flex-lg-row-reverse align-items-center g-5 ">
            <div className="col-10 col-sm-8 col-lg-6 m-0 p-0 ">
              <Image
                src={BannerOracion}
                className="mx-lg-auto img-fluid rounded-end"
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="display-2 fw-bold lh-1 mb-3">
                Bienvenidos a la Iglesia del NAZARENO
              </h2>
              <p className="lead">{info.motto}</p>
            </div>
          </div>
        </div>
      </div>
      {/*Mision y visión*/}
      <div className="py-5">
        <div className="container my-5">
          <div class="row flex-lg-row align-items-center">
            <div className="col-6 ">
              <div className="card-body ">
                <h3 className="display-7 fw-bold lh-1 mb-3">MISIÓN</h3>
                <p>{info.mision}</p>
              </div>
            </div>
            <div className="col-6 ">
              <div className="card-body">
                <h3 className="display-7 fw-bold lh-1 mb-3">VISIÓN</h3>
                <p>{info.vision}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
