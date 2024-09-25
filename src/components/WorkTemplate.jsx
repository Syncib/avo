import work1 from "../assets/images/work-1.webp";
const WorkTemplate = () => {
  return (
    <div className="row justify-content-center align-items-center">
      <img className="col-4" src={work1} />
      <div className="col-5">
        <h2>Web Design</h2>
        <h1>Cassette tape</h1>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>
    </div>
  );
};

export default WorkTemplate;
