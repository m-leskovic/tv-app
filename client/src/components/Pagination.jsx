import { Link } from "react-router-dom";

const Pagination = () => {
    return (
        <div id="page-wrapper">
            { window.location.pathname === "/brands"? <BrandPages />
            : window.location.pathname === "/models"? <ModelPages />
            : null
            }
        </div>
    )
}

const BrandPages = () => {
    let brandPages = [];
    for (let i = 1; i <= 10 / 5; i++) {
        brandPages.push(i);
    }
    return (
        <>
            {brandPages.map(num => {
                return (
                    <span key={num} onClick={()=> window.location.reload()}>
                        <Link id="page-link" to={`/brands?page=${num}`}>
                            {num}
                        </Link>
                    </span>
                )
            })}
        </>
    )
}

const ModelPages = () => {
    let modelPages = [];
    for (let i = 1; i <= 100 / 10; i++) {
        modelPages.push(i);
    }
    return (
        <>
            {modelPages.map(num => {
                return (
                    <span key={num} onClick={()=> window.location.reload()}>
                        <Link id="page-link" to={`/models?page=${num}`}>
                            {num}
                        </Link>
                    </span>
                )
            })}
        </>
    )
}


export default Pagination