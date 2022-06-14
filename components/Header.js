import menu from "configaration/menu.json";
import config from "configaration/config.json";
import headers from "@/styles/header.module.css";
import Link from "next/link";

const Header = () => {
  const { header } = menu;
  const { logo } = config.parameters;

  return (
    <>
      <haader className={headers.header}>
        <div className="container">
          <nav className={headers.navigation}>
            <ul>
              {header.slice(0, 3).map((menu, i) => (
                <li key={`menu-${i}`}>
                  <Link href={menu.link}>
                    <a>{menu.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/">
              <a className={headers.logo}>{logo}</a>
            </Link>
            <ul>
              {header.slice(3, 6).map((menu, i) => (
                <li key={`menu-${i}`}>
                  <Link href={menu.link}>
                    <a>{menu.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </haader>
    </>
  );
};

export default Header;
