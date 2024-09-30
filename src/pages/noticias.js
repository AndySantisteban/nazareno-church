import { CldImage } from 'next-cloudinary'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })
export default function Noticias() {
    const [ministerios, setMinisterios] = useState([])
    async function getMinisteries() {
        const ministres = await fetch('/api/noticias')
        const data = await ministres.json()
        setMinisterios(data)
    }

    useEffect(() => {
        getMinisteries()
    }, [])

    return (
        <div className={inter.className + ' pt-5'}>
            <div className="text-center">
                <h2 className="display-5  fw-bold lh-1 mb-4"> Noticias</h2>
            </div>
            <div className="container ">
                <hr />

                <ul className="list-group">
                    {ministerios?.map((min) => {
                        return (
                            <div className="list-group-item p-0 ">
                                <Link href={`/noticias/${min.title}`} className="text-decoration-none">
                                    <div className="d-flex mb-0">
                                        <CldImage
                                            src={min.imagen[0]} // Use this sample image or upload your own via the Media Explorer
                                            width={300}
                                            height={150}
                                            crop={{
                                                type: 'auto',
                                                source: true,
                                            }}
                                        />
                                        <div className="pt-4 px-3">
                                            <div className="fw-bold lh-1 mb-3 text-dark">{min.title}</div>
                                            <small className="text-muted lh-1 mb-3">{min.date}</small>
                                            <p className="lead">{min.content}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
