import Link from 'next/link';

const Navbar = () => (
  <section>
    <div className="container">
      <nav className="navbar is-dark is-spaced">
        
        <div className="navbar-brand">
          <img src="http://pngimg.com/uploads/bitcoin/bitcoin_PNG48.png" width="112" height="28"></img>
        </div>

        <div className="navbar-menu navbar-start">
          <a className="navbar-item" href="/">
            Home
          </a>

          <a className="navbar-item" href="/about">
            About
          </a>

        </div>

      </nav>
    </div>
  </section>
);

export default Navbar;