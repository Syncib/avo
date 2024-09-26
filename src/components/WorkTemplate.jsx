import work1 from "../assets/images/work-1.webp";
import "./WorkTemplate.css";
const WorkTemplate = ({ reverse, data }) => {
  return (
    <>
      <div className="row justify-content-center align-items-center">
        <img className={reverse ? "col-4 order-2" : "col-4"} src={work1} />
        <div className={reverse ? "col-5 order-1" : "col-5"}>
          <h2 className="work-subheading nunito-sans-600">Web Design</h2>
          <h1 className="work-heading">Cassette tape</h1>
          <p className="about-para">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <div className="row align-items-center">
            <img className="col-2 img-fluid rounded-circle" src={data} />
            <div className="col">
              <p>Jamie Jonson</p>
              <p className="work-website">avo.com</p>
              <p className="border d-inline py-1 px-3 rounded">View Portfolio</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkTemplate;
