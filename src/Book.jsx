import book from "./img/bookgirl.png";

function Book() {
    return (
        <div className="learn">
            <div className="learn-header">
                <h1>What Will You Learn?</h1>
                <div id="learn-bow"></div>
            </div>
            <div className="learn-body">
                <div className="learn-first">
                    <div data-aos="fade-up" className="learn-item">
                        <span>01</span>
                        <p>
                            Use HDFS & Map Reduce
                            for storing & analyzing
                            data at scale.
                        </p>
                    </div>

                    <div data-aos="fade-up" className="learn-item">
                        <span>02</span>
                        <p>
                            Use HDFS & Map Reduce
                            for storing & analyzing
                            data at scale.
                        </p>
                    </div>

                    <div data-aos="fade-up" className="learn-item">
                        <span>03</span>
                        <p>
                            Use HDFS & Map Reduce
                            for storing & analyzing
                            data at scale.
                        </p>
                    </div>

                    <div data-aos="fade-up" className="learn-item">
                        <span>04</span>
                        <p>
                            Use HDFS & Map Reduce
                            for storing & analyzing
                            data at scale.
                        </p>
                    </div>
                </div>
                <div data-aos="fade-left" className="learn-img">
                    <div>
                        <img src={book} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Book