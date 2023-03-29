import rasm2 from "./img/rasm2.png"
import rasm3 from "./img/IMAGE.png"
function About() {
    return (
        <div className="about" id="About">
            <div className="about-header">
                <h1>The Author’s Book <div className="chiziq"></div></h1>

            </div>
            <div className="about-body">
                <div data-aos="fade-up" className="about-first">
                    <img src={rasm2} alt="Error" />
                </div>

                <div data-aos="fade-down" className="about-task">
                    <h2>Atomic One’s</h2>
                    <span>$ 13.84 USD</span>
                    <p>
                        As the book contains <br /> theoretical content as well as <br /> solved questions.
                    </p>
                    <div className="printed-book">
                        <div></div>
                        <h2>Printed Book</h2>
                    </div>
                    <button>Order Now</button>
                </div>

                <div data-aos="fade-up" className="about-picture">
                    <img src={rasm3} alt="Error" />
                </div>

                <div data-aos="fade-down"  className="about-task">
                    <h2>The Dark Light</h2>
                    <span>$ 86.11 USD</span>
                    <p>
                        As the book contains <br /> theoretical content as well as <br /> solved questions.
                    </p>
                    <div className="printed-book">
                        <div></div>
                        <h2>Printed Book</h2>
                    </div>
                    <button>Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default About