import navLinks from "../../config/navLinks";

export default function Navbar({ setCurrentPage, setIsMenu }) {
  return (
    <div className="w-full flex bg-slate-200 h-16 shadow-md">
      <ul className="flex  w-full justify-between items-center align-middle">
        {navLinks.map((navlink) => (
          <li
            onClick={() => setCurrentPage(navlink.path)}
            className="font-bold cursor-pointer"
          >
            {navlink.name}
          </li>
        ))}
        <button onClick={() => setIsMenu((state) => !state)}>BURGER</button>
      </ul>
    </div>
  );
}
