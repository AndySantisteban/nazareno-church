import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useEffect, useState } from 'react'
const inter = Inter({ subsets: ['latin'] })
export const Footer = () => {
    const [items, setItems] = useState([])

    async function getItems() {
        const res = await fetch(`/api/menubar`)
        const data = await res.json()
        if (data) {
            return setItems(data.items)
        }
        return
    }
    useEffect(() => {
        getItems()
    }, [])

    return (
        <div className={inter.className}>
            <footer className="py-3 mt-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item">
                        <Link href="/" className="nav-link px-2 text-muted">
                            Inicio
                        </Link>
                    </li>

                    {items?.map((item, index) => {
                        return (
                            <li className="nav-item" key={index}>
                                <Link className={'nav-link px-2 text-muted ' + (item.path === location.pathname ? 'active' : '')} aria-current="page" href={item.path}>
                                    {item.name}
                                </Link>
                            </li>
                        )
                    }) ?? []}
                </ul>
                <p className="text-center text-muted">© {new Date().getFullYear()} Iglesia Del Nazareno - Diseñado por Andy Santisteban</p>
            </footer>
        </div>
    )
}
