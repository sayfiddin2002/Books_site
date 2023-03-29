function Footer() {
    return (
        <div>
            <div className="foter" id="Contact">
                <div>
                    <div className="one">
                        <i class="bi bi-journal-bookmark-fill"></i>
                        <span>Pages</span>
                    </div>
                    <div className="two">
                        <span><i class="bi bi-facebook"></i></span>
                        <span><i class="bi bi-twitter"></i></span>
                        <span><i class="bi bi-linkedin"></i></span>
                        <span><i class="bi bi-instagram"></i></span>
                    </div>
                </div>

                <div className="foter-body">
                    <p className="touch">Explore</p>
                    <div className="explore">
                        <span>...</span>
                        <p>Home</p>
                    </div>
                    <div className="explore">
                        <span>...</span>
                        <p>About</p>
                    </div>
                    <div className="explore">
                        <span>...</span>
                        <p>Articles</p>
                    </div>
                    <div className="explore">
                        <span>...</span>
                        <p>Our Store</p>
                    </div>
                    <div className="explore">
                        <span>...</span>
                        <p>Contact Us</p>
                    </div>
                </div>

                <div className="foter-body">
                    <p className="touch">Utility Pages</p>
                    <div className="explore">
                        <span>...</span>
                        <p>Style Guide</p>
                    </div>
                    <div className="explore">
                        <span>...</span>
                        <p>404 Not Found</p>
                    </div>
                    <div className="explore">
                        <span>...</span>
                        <p>Password Protected</p>
                    </div>
                    <div className="explore">
                        <span>...</span>
                        <p>Licenses</p>
                    </div>
                    <div className="explore">
                        <span>...</span>
                        <p>Changelog</p>
                    </div>
                </div>

                <div className="the-end">
                    <p className="subs">Keep in Touch</p>
                    <div className="foterlink">
                        <div>
                            <p>Address :</p>
                        </div>
                        <div style={{ margin: "10px 0 0 0" }}>
                            <span style={{ color: "#B4C7E7" }}>24A Kingston St, Los Vegas</span> <br />
                            <span style={{ color: "#B4C7E7" }}>NC 28202, USA.</span>
                        </div>
                    </div>

                    <div classname="contact">
                        <p style={{ margin: "20px 0" }}>Mail: <span style={{ margin: "40px", color: "#B4C7E7" }}>support@gmail.com</span></p>
                        <p style={{ margin: "20px 0" }}>Phone: <span style={{ margin: "30px", color: "#B4C7E7" }}>(+22) 123 - 4567 - 900</span></p>

                    </div>
                </div>
            </div>
            <div className="footer-f">
                <span>© Drafted by </span>
                <span>VictorFlow </span>
                <span>- Powered by </span>
                <span>Webflow</span>
            </div>
        </div>
    )
}

export default Footer