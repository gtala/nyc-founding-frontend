import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faPersonWalking,
} from "@fortawesome/free-solid-svg-icons";
import "./globalStyles.scss";
import { useTranslation } from "react-i18next";
import jingLogo from './assets/index';
import { LanguageList, CurrentProfile, DogPenNavButton } from "./Components";
import routes from "./const/paths";

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <header>
        <Link exact="true" to={routes.HOME.path} className="HomeLink">
          <h1>{t("nav.title")}</h1>
          <img src={jingLogo} alt="jing" />
        </Link>
        <Link exact="true" to={routes.DOG_RESULTS.path} className="links">
          <div className="button">
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
            <h3>{t("nav.explore")}</h3>
          </div>
        </Link>
        <Link
          exact="true"
          to={routes.CREATE_NEW_PROFILE.path}
          className="links"
        >
          <div className="button">
            <FontAwesomeIcon icon={faPersonWalking} size="lg" />
            <h3>{t("nav.walker")}</h3>
          </div>
        </Link>
        <Link exact="true" to={routes.DOGPEN.path} className="links">
          <DogPenNavButton />
        </Link>
        <CurrentProfile className="links" path={routes.CURRENT_PROFILE.path} />
        <LanguageList />
      </header>

      <Routes>
        {Object.values(routes).map((route) => (
          <Route
            key={route.title}
            path={route.path}
            exact={route.exact}
            element={route.element}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
