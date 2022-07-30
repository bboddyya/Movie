import "./Header.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header-wrapper">
      <div className="header-wrapper__navigation">
        <div className="header-wrapper__logo-wrapper">
          <Link to="/">
            <div className="header-wrapper__logo">
              <img
                src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png"
                width="200"
                alt="netflix logo text emblem"
              />
            </div>{" "}
          </Link>
        </div>
        <div className="header-wrapper__movie">Кино</div>
        <div className="header-wrapper__shows">Сериалы</div>
        <div className="header-wrapper__favorite-movie">Избранное</div>
      </div>

      <div className="header-wrapper__right-side">
        <input
          type="text"
          className="header-wrapper__input"
          placeholder="Поиск"
        />{" "}
        <div className="header-wrapper__input-control">
          <AiOutlineSearch className="header-wrapper__search-icon" />
        </div>
      </div>
    </header>
  );
}

export default Header;
