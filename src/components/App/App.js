import { useState } from "react";
import { Route, Switch } from "react-router-dom";

import {
  TranslationContext,
  translations,
} from "../../context/TranslationContext";

import Header from "../Header/Header";
import PageMain from "../PageMain/PageMain";
import PageCollection from "../PageCollection/PageCollection";
import PageNew from "../PageNew/PageNew";
import PageSale from "../PageSale/PageSale";
import PageAbout from "../PageAbout/PageAbout";
import PagePay from "../PagePay/PagePay";
import PageWait from "../PageWait/PageWait";
import PageRefunds from "../PageRefunds/PageRefunds";
import PageContacts from "../PageContacts/PageContacts";
import PopupMenu from "../PopupMenu/PopupMenu";

import { ESC_CODE } from "../../utils/config";

import "./App.css";

const App = () => {
  const [lang, setLang] = useState("ru"); // present lang
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
        <Route path="/collection">
          <PageCollection />
        </Route>
        <Route path="/new">
          <PageNew />
        </Route>
        <Route path="/sale">
          <PageSale />
        </Route>
        <Route path="/about">
          <PageAbout />
        </Route>
        <Route path="/pay">
          <PagePay />
        </Route>
        <Route path="/waiting-list">
          <PageWait />
        </Route>
        <Route path="/refunds">
          <PageRefunds />
        </Route>
        <Route path="/contacts">
          <PageContacts />
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
