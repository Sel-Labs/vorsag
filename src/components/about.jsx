import "../../styles/about.css";
// import "../../styles/mediaQuerry.css";
import madagascarImage from "../assets/madagascar.svg";
import image1 from "../assets/Image.svg";
import image2 from "../assets/Image-1.svg";
import lineImage from "../assets/line.svg";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="about__images" id="about__images">
        <img src={madagascarImage} alt="about3" className="image1" />
        <img src={image1} alt="about1" className="image2" />
        <img src={image2} alt="about2" className="image3" />
      </div>

      <div className="about__text" id="about__text">
        <h2 className="first_header">Our Association</h2>
        <h2 className="second_header">
          Volta Region <br /> Students Association Of Ghana
        </h2>

        <img src={lineImage} alt="line" className="line" />

        <p>
          Founded in 2019, the Volta Region Students’ Association of Ghana
          (VORSAG) is a non-profit organization that seeks to foster a sense of
          unity among students from the Volta Region, as well as to promote the
          welfare of its members and the development of the region.
          <br />
          <br />
          We are a coalition of student associations spanning multiple
          university campuses throughout Ghana, united by the common goal of
          contributing to the growth and advancement of our cherished region
          through collaborative initiatives and developmental projects.
          <br />
          <br />
          Our overarching mission extends beyond mere camaraderie, as we are
          dedicated to actively contributing to the growth and advancement of
          our cherished region through collaborative initiatives and
          developmental projects.
        </p>
      </div>
    </div>
  );
}
