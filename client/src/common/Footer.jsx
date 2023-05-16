const Footer = () => {
  const date = new Date();
  return (
    <footer id="footer">
      <span id="footer-text">&copy; Copyright {date.getFullYear()}</span>
    </footer>
  );
};

export default Footer;
