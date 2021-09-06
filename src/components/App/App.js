import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
// import { fetchSubscibers } from "../../store/subscriberSlice";

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
import Footer from "../Footer/Footer";
import PopupMenu from "../PopupMenu/PopupMenu";

import { ESC_CODE } from "../../utils/config";

import "./App.css";
import PageAll from "../PageAll/PageAll";
import PageLeather from "../PageLeather/PageLeather";
import PageExclusive from "../PageExclusive/PageLeather";
import PageOutwear from "../PageOutwear/PageOutwear";
import PageJumpsuits from "../PageJumpsuits/PageJumpsuits";
import PageTrousers from "../PageTrousers/PageTrousers";
import PageBags from "../PageBags/PageBags";
import PageAccessorize from "../PageAccessorize/PageAccessorize";
import PageBijouterie from "../PageBijouterie/PageBijouterie";
import PageKnitted from "../PageKnitted/PageKnitted";
import PageTops from "../PageTops/PageTops";
import PageJackets from "../PageJackets/PageJackets";
import PageDresses from "../PageDresses/PageDresses";

const App = () => {
  const [lang, setLang] = useState("ru"); // present lang
  const { subscribers, status, error } = useSelector(
    (state) => state.subscribers
  );

  const [isPopupMenuOpen, setIsPopupMenuOpen] = useState(false);

  console.log(subscribers);

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  console.log(vh);

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
  };

  const handleClosePopup = () => {
    setIsPopupMenuOpen(false);
    window.removeEventListener("keydown", handleEsc);
  };

  return (
    <TranslationContext.Provider value={translations[lang]}>
      <Header onOpenMenuClick={handleMenuClick} />
      {status === "loading" && <h2>Loading</h2>}
      {error && <h2>ERROR OCCURED {error}</h2>}
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
        <Route path="/all">
          <PageAll />
        </Route>
        <Route path="/leather">
          <PageLeather />
        </Route>
        <Route path="/exclusive">
          <PageExclusive />
        </Route>
        <Route path="/outwear">
          <PageOutwear />
        </Route>
        <Route path="/jumpsuits">
          <PageJumpsuits />
        </Route>
        <Route path="/dresses">
          <PageDresses />
        </Route>
        <Route path="/jackets">
          <PageJackets />
        </Route>
        <Route path="/tops">
          <PageTops />
        </Route>
        <Route path="/knitted">
          <PageKnitted />
        </Route>
        <Route path="/trousers">
          <PageTrousers />
        </Route>
        <Route path="/bags">
          <PageBags />
        </Route>
        <Route path="/accessorize">
          <PageAccessorize />
        </Route>
        <Route path="/bijouterie">
          <PageBijouterie />
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
      <Footer />
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
