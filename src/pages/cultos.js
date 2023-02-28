import { FaChurch, FaMousePointer } from "react-icons/fa";
import Fade from "react-reveal/Fade";
export default function Cultos() {
  return (
    <div className="container mt-5">
      <Fade>
        <h2 className="display-4 fw-bold lh-2 text-center">
          NUESTRAS REUNIONES
        </h2>
        <p className="text-center">
          Forma parte de nuestras reuniones presenciales, además conéctate a
          través de nuestras reuniones online
        </p>
        <div className="row mt-4">
          <div className="col-6 text-center">
            <FaChurch size={70} className="text-muted" />
            <h3>Presenciales</h3>
            <small className="text-muted">Acomódate en órden de llegada</small>

            <p></p>
          </div>
          <div className="col-6 text-center">
            <FaMousePointer size={70} className="text-muted" />
            <h3>Online</h3>
            <small className="text-muted">
              Conéctate a través de Facebook y YouTube
            </small>
            <p></p>
          </div>
        </div>
      </Fade>
    </div>
  );
}
