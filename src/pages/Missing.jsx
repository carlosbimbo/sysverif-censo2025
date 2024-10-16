import { Link } from "react-router-dom"

const Missing = () => {
    return (
        <article style={{ padding: "100px" }}>
            <h1>Oops!</h1>
            <p>Pagina No encontrada</p>
            <div className="flexGrow">
                <Link to="/">Visite Nuestra Pagina</Link>
            </div>
        </article>
    )
}

export default Missing
