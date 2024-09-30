import { Footer } from './Footer'
import { Navbar } from './Navbar'

export const Layout = ({ children }) => {
    return (
        <div className="min-vh-100 bg-white">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}
