import { CldImage } from 'next-cloudinary'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })
export default function Ministeries() {
    const [ministerios, setMinisterios] = useState([])
    async function getMinisteries() {
        const ministres = await fetch('/api/ministerios')
        const data = await ministres.json()
        setMinisterios(data)
    }

    useEffect(() => {
        getMinisteries()
    }, [])

    return (
        <div className={inter.className + ' pt-5'}>
            <div className="text-center">
                <h2 className="display-4 fw-bold lh-1 mb-3"> Ministerios</h2>
            </div>
            <div className="container">
                {ministerios.ministres?.map((min) => {
                    return (
                        <div className={`row flex-lg-row-${min.id % 2 == 0 ? 'reverse' : ' '} align-items-center g-5  my-5`}>
                            <div className="col-12 col-sm-12 col-lg-6 text-center">
                                <CldImage
                                    src={min.img} // Use this sample image or upload your own via the Media Explorer
                                    width={1200}
                                    height={350}
                                    className="img-fluid"
                                    crop={{
                                        type: 'auto',
                                        source: true,
                                    }}
                                />
                            </div>
                            <div className="col-lg-6">
                                <h2 className="display-6 fw-bold lh-1 mb-3">{min.title}</h2>
                                <p className="lead">{min.content}</p>
                                <Link href={`/ministerios/${min.id}`} className="btn btn-primary">
                                    Ver más
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
