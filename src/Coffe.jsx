import cofe from "./img/coffe.png";

function Coffe() {
    return(
        <div className="cofe">
            <div className="cofe-text">
                <h1>Get Book Copy Today!</h1>
                <div className="little"></div>
                <span>
                We believe that bookstores are
                essential to a healthy <br /> culture.
                They’re where authors can 
                connect with readers. <br />
                </span>
                <button>Order Today</button>
            </div>
            <div className="cofe-img">
                <img src={cofe} alt="Error" />
            </div>
        </div>
    )
}

export default Coffe