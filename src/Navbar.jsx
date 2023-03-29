import { useState } from "react"

function Navbar() {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <div className="wrapper">
            <div className="navbar">
                <div className="logo">
                    <div className="logo-icon">
                        <i class="bi bi-journal-bookmark-fill"></i>
                        <span>Pages</span>
                    </div>
                    <div className="social">
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-twitter"></i>
                        <i className="bi bi-linkedin"></i>
                    </div>
                </div>
                <i onClick={() => setOpenMenu(!openMenu)} class={!openMenu ? "bi bi-list" : "bi bi-x"}></i>
                <ul onClick={() => setOpenMenu(!openMenu)}  className={!openMenu ? "not-active" : "active"} >
                    <li ><a href="#Home">Home</a></li>
                    <li ><a href="#About">About</a></li>
                    <li ><a href="#Pages">Pages</a></li>
                    <li ><a href="#Contact">Contact Us</a></li>
                    <button >Order Today</button>
                </ul>
            </div>
        </div>

    )
}

export default Navbar