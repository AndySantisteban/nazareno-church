import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });
export default function MinisteriosForId() {
  const [data, setData] = useState();

  const router = useRouter();
  const { id } = router.query;
  async function getMinisteries() {
    const ministerio = await fetch(`/api/ministerios?id=${id}`);
    const min = await ministerio.json();
    setData(min);
  }

  async function getImagesForFacebook() {
    // const images = await fetch(`https://www.facebook.com/jniferre/photos`);
    // const imagesList = await images.json();
    // console.log(imagesList);
  }
  useEffect(() => {
    getMinisteries();
  }, [id]);

  return (
    <div className={inter.className + " pt-5"}>
      <div className="container ">
        <h2 className="display-4 fw-bold lh-1 mb-3 text-center">
          {data?.ministres[0]?.title}
        </h2>
        <div className="w-100 text-center mb-4">
          <img
            src={data?.ministres[0]?.img}
            alt={data?.ministres[0]?.img}
            className="img-fluid w-50"
          />
        </div>
        {data?.ministres[0]?.content && (
          <p className="display-6 fw-bold lh-1 mb-3 ">Nuestro Lema</p>
        )}
        <section className="mb-3 ">{data?.ministres[0]?.content ?? ""}</section>
        {data?.ministres[0]?.descripcion && (
          <p className="display-6 fw-bold lh-1 mb-3 ">¿Quiénes somos?</p>
        )}
        <div>{data?.ministres[0]?.descripcion ?? ""}</div>

        {data?.ministres[0]?.multimedia.videos.length > 0 && (
          <div>
            <p className="display-6 fw-bold lh-1 mb-3 ">Nuestros covers</p>
            {data?.ministres[0]?.multimedia.videos.length > 0 ? (
              <div className="row">
                {data?.ministres[0]?.multimedia.videos.map((i) => {
                  return (
                    <div className="col col-lg-6 col-md-6 col-sm-12 ">
                      <div className="ratio ratio-16x9">
                        <iframe
                          loading="lazy"
                          src={i.url}
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>
                  );
                }) ?? []}
              </div>
            ) : (
              "Hola"
            )}
          </div>
        )}
      </div>
    </div>
  );
}
