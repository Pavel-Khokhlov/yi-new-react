import { useState } from "react";
import { Route, Switch } from "react-router-dom";

import {
  TranslationContext,
  translations,
} from "../../context/TranslationContext";

import Header from "../Header/Header";
import PageMain from "../PageMain/PageMain.jsx";
import PopupMenu from "../PopupMenu/PopupMenu";

import { ESC_CODE } from "../../utils/config";

import "./App.css";

const App = () => {
  const [lang, setLang] = useState("en"); // present lang
  const [isPopupMenuOpen, setIsPopupMenuOpen] = useState(false);

  const handleEsc = (e) => (e.keyCode === ESC_CODE ? handleClosePopup() : "");

  const handleSetRus = () => {
    setLang("ru");
  };
  const handleSetEng = () => {
    setLang("en");
  };

  const handleMenuClick = () => {
    setIsPopupMenuOpen(true);
    window.addEventListener("keydown", handleEsc);
  }

  const handleClosePopup = () => {
    setIsPopupMenuOpen(false);
    window.removeEventListener("keydown", handleEsc);
  };

  return (
    <TranslationContext.Provider value={translations[lang]}>
      <Header onOpenMenuClick={handleMenuClick} />
      <Switch>
        <Route exact path="/">
          <PageMain />
        </Route>
      </Switch>
      <PopupMenu
        isOpen={isPopupMenuOpen}
        onCloseMenuClick={handleClosePopup}
        onEngClick={handleSetEng}
        onRusClick={handleSetRus}
      />
    </TranslationContext.Provider>
  );
};

export default App;
