import Navbar from "../components/Navbar";

export default function Layout({children}) {
    return<>
    <body>
        <Navbar />
    </body>
    {children}
    </>
}

