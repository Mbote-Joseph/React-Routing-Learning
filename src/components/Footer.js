import "./Footer.css";

const Footer = () => {
  let year = new Date().getFullYear();
  return <footer>Created by : Mbote Joseph - {year}</footer>;
};

export default Footer;
