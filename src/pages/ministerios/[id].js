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
            className="img-fluid w-50 "
          />
        </div>
        <section>{data?.ministres[0]?.content ?? ""}</section>
      </div>
    </div>
  );
}
