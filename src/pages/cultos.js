import { FaChurch, FaMousePointer, FaTiktok } from "react-icons/fa";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

export default function Cultos({ cultos }) {
  return (
    <div className="container mt-5">
      <h2 className="display-4 fw-bold lh-2 text-center">NUESTRAS REUNIONES</h2>
      <p className="text-center">
        Forma parte de nuestras reuniones presenciales, además conéctate a
        través de nuestras reuniones online
      </p>
      <div className="row mt-4 justify-content-center">
        <div className="col-3 text-center">
          <FaChurch size={70} className="text-muted" />
          <h3>Presenciales</h3>
          <small className="text-muted">Acomódate en órden de llegada</small>
          <ul className="list-group list-group-flush">
            {cultos?.cultos.map((i, idx) => {
              return (
                <li
                  key={idx}
                  className="list-group-item bg-light text-start text-muted"
                >
                  {i.tipo} - {i.horario}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-3 text-center">
          <FaMousePointer size={70} className="text-muted" />
          <h3>Online</h3>
          <small className="text-muted">
            Conéctate a través de Facebook y YouTube
          </small>
          <ul className="list-group list-group-flush">
            {cultos?.redes.map((i, idx) => {
              return (
                <li
                  key={idx}
                  className="list-group-item bg-light text-start text-muted"
                >
                  <a
                    href={i.url}
                    className="text-decoration-none d-flex align-items-center gap-3 text-muted"
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
  );
}

export async function getServerSideProps() {
  const data = await fetch(`${process.env.APIPATH}/api/cultos`);
  const cultos = await data.json();
  return {
    props: {
      cultos,
    },
  };
}
