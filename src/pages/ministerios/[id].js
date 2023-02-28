import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Modal from "react-responsive-modal";
const inter = Inter({ subsets: ["latin"] });

export default function MinisteriosForId() {
  const [data, setData] = useState();
  const router = useRouter();
  const { id } = router.query;
  const [open, setOpen] = useState(false);
  const [imgSelected, setImgSelected] = useState("");

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  async function getMinisteries() {
    const ministerio = await fetch(`/api/ministerios?id=${id}`);
    const min = await ministerio.json();
    setData(min);
  }

  useEffect(() => {
    getMinisteries();
  }, [id]);

  return (
    <div className={inter.className + " pt-5"}>
      <Modal open={open} onClose={onCloseModal} center>
        <img src={imgSelected} alt="..." className="img-fluid" />
      </Modal>
      <div className="container ">
        <h2 className="display-4 fw-bold lh-1 mb-3 text-center">
          {data?.ministres[0]?.title}
        </h2>
        <section className="mb-3  text-primary text-center">
          {data?.ministres[0]?.content ?? ""}
        </section>
        <div className="w-100 text-center mb-4">
          <img
            src={data?.ministres[0]?.img}
            alt={data?.ministres[0]?.img}
            className="img-fluid w-50"
          />
        </div>

        {data?.ministres[0]?.descripcion && (
          <p className="display-6 fw-bold lh-1 mb-3 ">¿Quiénes somos?</p>
        )}
        <div>{data?.ministres[0]?.descripcion ?? ""}</div>

        {data?.ministres[0]?.multimedia.videos.length > 0 && (
          <div>
            <p className="display-6 fw-bold lh-1 mb-3 ">Videos</p>
            {data?.ministres[0]?.multimedia.videos.length > 0 ? (
              <div className="row">
                {data?.ministres[0]?.multimedia.videos.map((i, index) => {
                  return (
                    <div
                      className="col-lg-4 col-md-6 col-sm-12  mb-4"
                      key={index}
                    >
                      <div className="ratio ratio-16x9">
                        <iframe
                          loading="lazy"
                          src={i.url}
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  );
                }) ?? []}
              </div>
            ) : (
              ""
            )}
          </div>
        )}
        {data?.ministres[0]?.multimedia?.images?.length > 0 && (
          <div>
            <p className="display-6 fw-bold lh-1 my-3 ">Galería</p>
            {data?.ministres[0]?.multimedia?.images?.length > 0 ? (
              <div>
                {data?.ministres[0]?.multimedia?.images.map((i, index) => {
                  return (
                    <div key={index}>
                      <p className="display-7 fw-bold">{i.title}</p>
                      <div className="row ">
                        {i.photos &&
                          i.photos.map((i, idx) => {
                            return (
                              <div
                                className={
                                  idx === 0
                                    ? "col-lg-3 col-md-12 mb-4 mb-lg-0"
                                    : "col-lg-3 mb-4 mb-lg-0"
                                }
                                key={idx}
                              >
                                <img
                                  className="w-100 shadow-1-strong rounded mb-4"
                                  src={i.url}
                                  loading={"lazy"}
                                  onClick={() => {
                                    onOpenModal();
                                    setImgSelected(i.url);
                                  }}
                                ></img>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  );
                }) ?? []}
              </div>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </div>
  );
}
