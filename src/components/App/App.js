import { useState, useEffect } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentPath,
  closeAllPopups,
  openMenuPopup,
  openUnsubscribePopup,
} from "../../store/appSlice";

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
import PageSignup from "../PageSignup/PageSignup";
import PageSignin from "../PageSignin/PageSignin";
import Footer from "../Footer/Footer";
import PopupWithMenu from "../Popup/PopupWithMenu/PopupWithMenu";

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
import UnsubscribePopup from "../Popup/UnsubscribePopup";
import PageBasket from "../PageBasket/PageBasket";

const App = ({ location }) => {
  const [lang, setLang] = useState("ru"); // present lang
  const { subscriber } = useSelector(
    (state) => state.subscribers
  );

  const { currentPath, isLoggedIn, isUnsubscribePopupOpen, isMenuPopupOpen } = useSelector(
    (state) => state.app
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const { pathname } = location;
    dispatch(setCurrentPath(pathname));
  }, [location]);

  console.log(subscriber);

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  console.log(vh);

  const handleEsc = (e) =>
    e.keyCode === ESC_CODE ? handleCloseAllPopups() : "";

  const handleSetRus = () => {
    setLang("ru");
  };
  const handleSetEng = () => {
    setLang("en");
  };

  const handleMenuClick = () => {
    dispatch(openMenuPopup());
    window.addEventListener("keydown", handleEsc);
  };

  const handleUnsubscribeClick = () => {
    dispatch(openUnsubscribePopup());
    window.addEventListener("keydown", handleEsc);
  };

  const handleCloseAllPopups = () => {
    dispatch(closeAllPopups());
    window.removeEventListener("keydown", handleEsc);
  };

  return (
    <TranslationContext.Provider value={translations[lang]}>
      <Header onMenuClick={handleMenuClick} />
      <Switch>
        <Route exact path="/">
          <PageMain onUnsubscribeClick={handleUnsubscribeClick} />
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
        <Route path="/basket">
          <PageBasket />
        </Route>
        <Route path="/signup">
          <PageSignup />
        </Route>
        <Route path="/signin">
          <PageSignin />
        </Route>
      </Switch>
      {isLoggedIn || currentPath === '/' ? <Footer /> : ""}
      <UnsubscribePopup />
      <PopupWithMenu
        isOpen={isMenuPopupOpen}
        onClose={handleCloseAllPopups}
        onEngClick={handleSetEng}
        onRusClick={handleSetRus}
      />
    </TranslationContext.Provider>
  );
};

export default withRouter(App);
