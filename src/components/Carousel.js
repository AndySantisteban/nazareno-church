import Image from "next/image";
import BgImage from "@/assets/bg_header.png";
export const Carousel = ({ listImages }) => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide position-relative"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active d-none"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          className=" d-none"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          className=" d-none"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        {listImages?.map((i, index) => {
          return (
            <div
              className={`carousel-item ${
                index === 0 ? " active" : ""
              } position-relative`}
              style={{ maxHeight: "750px" }}
              key={index}
            >
              <Image
                src={i.src}
                className=" img-fluid d-block w-100 h-100 opacity--25"
                alt="..."
                priority
                width={"auto"}
                height={"auto"}
              />
              <div className="text-white d-none d-md-block position-absolute top-50 start-0 container mx-5 px-5">
                <h5 className="display-3  mt--5 fw-bold  mx-5 px-5 mb-5">
                  {i.title}
                </h5>
                <p className="display-7  mt--5 mx-5 px-5 pt-5">{i.content}</p>
              </div>
            </div>
          );
        }) ?? []}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
      <Image
        className="w-100 position-absolute bottom-0 opacity--15"
        src={BgImage}
        alt="...."
        priority
        width={"auto"}
        height={"auto"}
      />
    </div>
  );
};
