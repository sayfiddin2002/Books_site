import john from "./img/john.png"
import scaner from "./img/scaner.png"


function John() {
    return (
        <div className="john" id="Pages">
            <div className="john-header">
                <div className="pustoy">
                    <img src={john} id="rasm" alt="" />
                </div>
                <div className="john-body">
                    <h2>About the Author</h2>
                    <div className="john-div"></div>
                    <p>
                        We believe that bookstores are essential to a healthy culture.
                        They’re where authors can connect with readers, where we
                        discover new writers, where children get hooked on the thrill
                        of reading that can last a lifetime.
                    </p>

                    <div className="john-card">
                        <div className="card-one">
                            <h1>02</h1>
                            <span>Books Published</span>
                        </div>

                        <div className="card-two">
                            <h1>4.5</h1>
                            <span>User Reviews</span>
                        </div>

                        <div className="card-three">
                            <h1>04</h1>
                            <span>Best Seller </span>
                        </div>
                    </div>
                    <div className="john-footer">
                        <img id="scaner" src={scaner} alt="Error" />
                        <div id="john-foter">
                            <span id="john-span">John Abraham , Ph.d</span> <br />
                            <span>Mail: johnabraham@gmail.com</span> <br />
                            <span>Phone: (+2) 123 545 9000</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default John