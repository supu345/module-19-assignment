import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <aside>
          <a href="/" className="flex flex-row">
            <p className="text-green font-bold text-xl">E</p>
            <span className="font-bold text-xl">MART</span>
          </a>
          <p>
            Suparna Developer
            <br />© 2024, Ostad ltd.
          </p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="hover:text-green" href="/">
            {" "}
            Home
          </a>
          <a className="hover:text-green" href="/product">
            {" "}
            Products
          </a>
          <a className="hover:text-green" href="/registration">
            registration
          </a>
          <a className="hover:text-green" href="/blog">
            blog
          </a>
          <a cclassName="hover:text-green" href="/cart">
            Cart
          </a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
