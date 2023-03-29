import amazon1 from "./img/amazon1.png";
import amazon2 from "./img/amazon2.png";
import amazon3 from "./img/amazon3.png";
import amazon4 from "./img/amazon4.png";


function Amazon() {
    return(
        <div className="amazon">
            <div className="amazon-header">
                <div id="megan">
                <h1>Trusted By The Best</h1>
                <div id="bow"></div>
                </div>
            </div>
            <div className="amazon-body">
                <div data-aos="fade-right" className="amazon-one">
                    <img src={amazon4} alt="Error" />
                    <h2>Amazen Corp.</h2>
                    <span>
                    They has been helping readers,
                    music lovers, and videophiles
                    find quality material.
                    </span>
                </div>

                <div data-aos="fade-up" className="amazon-one">
                    <img src={amazon2} alt="Error" />
                    <h2>Amazen Corp.</h2>
                    <span>
                    They has been helping readers,
                    music lovers, and videophiles
                    find quality material.
                    </span>
                </div>

                <div data-aos="fade-up" className="amazon-one">
                    <img src={amazon3} alt="Error" />
                    <h2>Amazen Corp.</h2>
                    <span>
                    They has been helping readers,
                    music lovers, and videophiles
                    find quality material.
                    </span>
                </div>

                <div data-aos="fade-left" className="amazon-one" >
                    <img src={amazon1} alt="Error" />
                    <h2>Amazen Corp.</h2>
                    <span>
                    They has been helping readers,
                    music lovers, and videophiles
                    find quality material.
                    </span>
                </div>
            </div>
        </div>
    )
}


export default Amazon