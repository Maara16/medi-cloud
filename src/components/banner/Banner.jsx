import "./banner.css";
// import ellipse from "../../assets/images/ellipse.png";
import video from "../../assets/images/banner-video.mp4";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <div className="banner-heading">
          <h2>
            Every good thing
            <br />
            starts with good
            <br />
            health
          </h2>
        </div>

        <div className="banner-subheading">
          <p>
            We are here to serve people with patient centered-care to deliver
            outstanding healthcare for better lives.
          </p>
        </div>

        {/* <div className="banner-buttons">
                    <button className="banner-appointment-button">Request appointment</button>
                    <button className="banner-learn-button">Learn More</button>
                </div> */}
      </div>

      <div className="banner-graphic">
        {/* <img src={ellipse} alt="ellipse" />
                <img src={doctor} alt="doctor" /> */}
        <video src={video} autoPlay loop muted></video>
      </div>
    </div>
  );
};

export default Banner;
