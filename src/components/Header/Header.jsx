import React, { useState } from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "Explore Your Posts",
      slug: "/explore-your-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-1.5 shadow bg-purple sticky top-0 z-10 border border-b border-gray-900">
      <Container>
        <nav className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="mr-1">
            <Link to="/">
              <Logo width="70px" height="100px" />
            </Link>
          </div>
          {/* Hamburger Menu Icon */}
          <div
            className="md:hidden justify-between block rounded-full"
            onClick={toggleMenu}
          >
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
                />
              </svg>
            </button>
          </div>
          {/* Menu Items */}
          <div
            className={`md:h-auto transition-all duration-700 ease-in-out ${
              menuOpen ? "h-20" : "opacity-0 h-1"
            }`}
          >
            <ul className={`md:flex flex ml-auto`}>
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className="inline-block text-lg px-4 py-1 duration-200 hover:bg-blue-500 text-white rounded-full"
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
