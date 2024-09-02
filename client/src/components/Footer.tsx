const Footer = () => {
  return (
    <footer className="bg-orange-500 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Logo and Tagline */}
        <div className="flex flex-col items-start md:items-center">
          <span className="text-4xl text-white font-bold tracking-tight">
            ReserveNow
          </span>
          <span className="text-white mt-2">
            Your favorite food, delivered to your door.
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="flex flex-col items-start md:items-center">
            <h2 className="text-white font-semibold mb-2">Company</h2>
            <ul className="text-white space-y-2">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start md:items-center">
            <h2 className="text-white font-semibold mb-2">Support</h2>
            <ul className="text-white space-y-2">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start md:items-center">
            <h2 className="text-white font-semibold mb-2">Legal</h2>
            <ul className="text-white space-y-2">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto mt-8 border-t border-orange-400 pt-4 text-center text-white">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} ReserveNow. All rights reserved.
        </p>
        <p className="text-sm">
          Made with ❤️ by <a href="https://prittoruban.vercel.app/">Pritto Ruban</a> && <a href="https://in.linkedin.com/in/m-prasanna-kumar-jothi-b78653290">Prasanna Kumar</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
