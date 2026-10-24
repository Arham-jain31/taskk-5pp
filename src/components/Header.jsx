import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="flex flex-wrap items-center gap-3 border-b bg-white px-4 py-3 md:px-8">
      <Link to="/" className="mr-auto text-lg font-bold">
        DEV@Deakin
      </Link>

      <input
        type="text"
        placeholder="Search..."
        className="w-40 rounded border px-3 py-2 md:w-64"
      />

      <Link to="/post" className="rounded bg-gray-200 px-4 py-2">
        Post
      </Link>

      <Link to="/login" className="rounded bg-gray-200 px-4 py-2">
        Login
      </Link>
    </nav>
  );
}

export default Header;
