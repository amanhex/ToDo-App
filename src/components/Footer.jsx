import { IoIosHeart } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        Made with{" "}
        <sub>
          <IoIosHeart />
        </sub>{" "}
        by{" "}
        <span>
          <a
            href="https://github.com/amanhex"
            target="_blank"
            className="creator"
          >
            Aman
          </a>
        </span>
      </footer>
    </>
  );
};

export default Footer;
