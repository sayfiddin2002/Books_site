import bts from "./img/bts.png";
import girl from "./img/girl.png";
import afrikaniski from "./img/afrikaniski.png"


function Many() {
    return (
        <div className="many">
            <div className="many-body">
                <div className="many-header">
                    <h1>Articles & Resources</h1>
                    <div className="round"></div>
                </div>
                <div className="many-card">
                    <div data-aos="flip-left" className="card">
                        <img src={bts} alt="" />
                        <div className="card-body">
                            <h2>
                                Significant reading has more <br /> info number
                            </h2>
                            <p>
                                Override the digital divide
                                with additional clickthroughs
                                from DevOps for real-time schemas.
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Eos, maiores nam.
                                Iste ad odit voluptatibus!
                            </p>
                            <div className="card-footer">
                                <div className="foter-foter">
                                    <span>Readmore</span>
                                    <div className="zero"></div>
                                </div>
                                <p>October 6, 2021</p>
                            </div>
                        </div>
                    </div>
                    
                    <div data-aos="flip-left" className="card">
                        <img src={girl} alt="" />
                        <div className="card-body">
                            <h2>
                                Many variations of pass majority have suffered
                            </h2>
                            <p>
                                Override the digital divide
                                with additional clickthroughs
                                from DevOps for real-time schemas.
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Eos, maiores nam.
                                Iste ad odit voluptatibus!
                            </p>
                            <div className="card-footer">
                                <div className="foter-foter">
                                    <span>Readmore</span>
                                    <div className="zero"></div>
                                </div>
                                <p>October 6, 2021</p>
                            </div>
                        </div>
                    </div>

                    <div data-aos="flip-left" className="card">
                        <img src={afrikaniski} alt="" />
                        <div className="card-body">
                            <h2>
                                Words which don’t look even slightly believable
                            </h2>
                            <p>
                                Override the digital divide
                                with additional clickthroughs
                                from DevOps for real-time schemas.
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Eos, maiores nam.
                                Iste ad odit voluptatibus!
                            </p>
                            <div className="card-footer">
                                <div className="foter-foter">
                                    <span>Readmore</span>
                                    <div className="zero"></div>
                                </div>
                                <p>October 6, 2021</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Many