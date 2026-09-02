function Layout({ children }) {
  return (
    <div>
      <header>
        <h1>NotebookHub</h1>
      </header>

      <main>{children}</main>

      <footer>
        <p>© {new Date().getFullYear()} NotebookHub</p>
      </footer>
    </div>
  );
}

export default Layout;