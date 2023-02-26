import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import { useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });
export const Navbar = () => {
  const [items, setItems] = useState([]);
  const [info, setInfo] = useState({});

  async function getItems() {
    const res = await fetch(`/api/menubar`);
    const data = await res.json();
    if (data) {
      setItems(data.items);
    }
    const info = await fetch(`/api/info`);
    const infoData = await info.json();
    if (infoData) {
      setInfo(infoData);
    }
    return;
  }
  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className={inter.className + " sticky-top"}>
      <div className="bg-light d-flex justify-content-between p-2 px-3 fw-bold">
        <small>Telefono: {info.telephone ?? ""}</small>
        <small>Ubicación: {info.address ?? ""}</small>
      </div>
      <nav className="navbar navbar-expand-lg navbar-white bg-white py-3">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            <Image src={Logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {items.map((item, index) => {
                return (
                  <li className="nav-item" key={index}>
                    <Link
                      className={
                        "nav-link " +
                        (item.path === location.pathname ? "active" : "")
                      }
                      aria-current="page"
                      href={item.path}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
