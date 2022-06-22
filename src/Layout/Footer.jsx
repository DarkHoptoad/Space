function Footer() {
  return (
    <footer className="footer">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright by{" "}
          <span className="dark">Dark</span>
          <span className="frog">Frog</span>
          <a
            className="repo"
            href="https://github.com/DarkHoptoad/DarkFrogShop"
            target="_blank"
            rel="noreferrer"
          >
            <span className="link__txt">Repo</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
