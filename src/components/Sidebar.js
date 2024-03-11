import Link from "./Link";

function Sidebar() {
  const links = [
    { label: "Dropdown", path: "/" },
    { label: "Accordion", path: "/accordion" },
    { label: "Buttons", path: "/buttons" },
  ];

  const renderedOptions = links.map((link) => {
    return (
      <Link key={link.label} to={link.path} className="mb-3">
        {link.label}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col">
      {/* <Link to="/accordion">Go to accordion</Link>
      <Link to="/dropdown">Go to dropdown</Link> */}
      {renderedOptions}
    </div>
  );
}

export default Sidebar;
