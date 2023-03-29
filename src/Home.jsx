import rasm from "./img/IMAGE.png";

function Home() {
  return (
    <div className="wrapperr">
      <div className="home" id="Home">
        <div className="home-one">
          <div className="home-text">
            <div></div>
            <span>Welcome to Pages!!!</span>
          </div>
          <div className="big-text">
            <h1>
              Your Books From <br />
              The Best Writer.
            </h1>
            <span>
              We believe that reading books are essential to a healthy culture. <br />
              They’re where authors can connect with readers.
            </span>
            <div className="flur">
              <button>Order Today</button>
              <div>
                <span>
                  Read Free Demo
                </span>
                <div></div>
              </div>
            </div>
            <div className="home-footer">
              <div className="foter-h">
                <div className="foter-one"></div>
                <div>
                  <span className="foter-two">Pages:</span> <br />
                  <span className="foter-three">250pages</span>
                </div>
              </div>

              <div className="foter-h">
                <div className="foter-one"></div>
                <div>
                  <span className="foter-two">Length:</span> <br />
                  <span className="foter-three">10 Hours</span>
                </div>
              </div>

              <div className="foter-h">
                <div className="foter-one"></div>
                <div>
                  <span className="foter-two">Rating:</span> <br />
                  <span className="foter-three">4.5/5 (305 ratings)</span>
                </div>
              </div>

            </div>
          </div>
        </div>
        <img src={rasm} alt="Error" />
      </div>
    </div>
  )
}

export default Home