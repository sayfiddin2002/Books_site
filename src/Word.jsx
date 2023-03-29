import rasm1 from "./img/rasm1.png";
import jame from "./img/jame.png";
import rasm3 from "./img/rasm3.png";


function Word() {
    return (
        <div className="word">
            <div className="word-one">
                <h1>Words From Our Readers</h1>
                <div className="round"></div>
                <p>
                    We believe that bookstores are
                    essential to a healthy culture.
                    They’re where authors can connect
                    with readers, where we discover
                    new writers, where children get
                    hooked on the thrill of reading
                    that can last a lifetime.
                </p>
                <div className="our">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <span>(4.8/5)</span>
                </div>
                <p>Overall Customer Ratings</p>
            </div>
            <div className="word-two">
                <div className="card-one">
                    <div className="card-1">
                        <div className="task-one">
                            <img src={rasm1} alt="Error" />
                            <div className="task-two">
                                <h3>James Williams</h3>
                                <div className="task-three">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div className="round"></div>
                                </div>
                            </div>
                        </div>
                        <div className="task-four">
                            <h4>“ Great Books Collections ”</h4>
                            <span>
                                I was searching this book for
                                many years and I was happy that
                                I could find it here.
                            </span>
                        </div>
                    </div>

                    <div className="card-1">
                        <div className="task-one">
                            <img src={jame} alt="Error" />
                            <div className="task-two">
                                <h3>Chris Adams</h3>
                                <div className="task-three">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div className="round"></div>
                                </div>
                            </div>
                        </div>
                        <div className="task-four">
                            <h4>“ Perfect Response Author”</h4>
                            <span>
                                I had a question about the book and
                                the author response was great & comfort.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="word-footer">
                    <div className="card-1">
                        <div className="task-one">
                            <img src={rasm3} alt="Error" />
                            <div className="task-two">
                                <h3>Angeline Flora</h3>
                                <div className="task-three">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div className="round"></div>
                                </div>
                            </div>
                        </div>
                        <div className="task-four">
                            <h4>“ Creative Writing Skill”</h4>
                            <span>
                                Sent an email after to books
                                arrived to ask about the author
                                & I received a reply.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Word