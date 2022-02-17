//import { Link } from "react-router-dom";

function Header(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: "Navy" }} aria-label="Ninth navbar example">
                <div className="container-xl">
                    <a href="/" className="navbar-brand">ABC Marketing</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample07XL">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a href="/add" className="nav-link active"><i className="bi bi-plus-circle"></i> &nbsp; Add new customer </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;