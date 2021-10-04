import { useContext } from "react";

import CollectionFoto from "../../images/collection.jpg";
import BagFoto from "../../images/bags.jpg";
import AccessorizeFoto from "../../images/accessorize.jpg";
import BijouterieFoto from "../../images/bijouterie.jpg";

import InstagramPng from "../../images/instagram2.png";
import WhatsappPng from "../../images/whatsapp2.png";
import TelegramPng from "../../images/telegram2.png";
import GmailPng from "../../images/gmail2.png";

import { TranslationContext } from "../../context/TranslationContext";

const useLinks = () => {
  const translation = useContext(TranslationContext);

  const mainLinks = [
    {
      img: CollectionFoto,
      name: translation.link_collection,
      path: `/collection`,
    },
    {
      img: null,
      name: translation.link_new,
      path: `/new`,
    },
    {
      img: null,
      name: translation.link_all,
      path: `/all`,
    },
    {
      img: null,
      name: translation.link_leather,
      path: `/leather`,
    },
    {
      img: null,
      name: translation.link_exclusive,
      path: `/exclusive`,
    },
    {
      img: null,
      name: translation.link_outwear,
      path: `/outwear`,
    },
    {
      img: null,
      name: translation.link_jumpsuits,
      path: `/jumpsuits`,
    },
    {
      img: null,
      name: translation.link_dresses,
      path: `/dresses`,
    },
    {
      img: null,
      name: translation.link_jackets_shirts,
      path: `/jackets`,
    },
    {
      img: null,
      name: translation.link_tops,
      path: `/tops`,
    },
    {
      img: null,
      name: translation.link_knitted,
      path: `/knitted`,
    },
    {
      img: null,
      name: translation.link_trousers,
      path: `/trousers`,
    },
    {
      img: BagFoto,
      name: translation.link_bags,
      path: `/bags`,
    },
    {
      img: AccessorizeFoto,
      name: translation.link_accessorize,
      path: `/accessorize`,
    },
    {
      img: BijouterieFoto,
      name: translation.link_bijouterie,
      path: `/bijouterie`,
    },
    {
      img: null,
      name: translation.link_sale,
      path: `/sale`,
    },
    {
      img: null,
      name: translation.link_about,
      path: `/about`,
    },
    {
      img: null,
      name: translation.link_pay,
      path: `/pay`,
    },
    {
      img: null,
      name: translation.link_wait,
      path: `/waiting-list`,
    },
    {
      img: null,
      name: translation.link_refunds,
      path: `/refunds`,
    },
    {
      img: null,
      name: translation.link_contacts,
      path: `/contacts`,
    },
  ];

  const socialLinks = [
    {
      path: "https://www.instagram.com/irinayuzifovich/",
      icon: InstagramPng,
      alt: `инконка instagram`,
    },
    {
      path: "https://www.mail.ru",
      icon: WhatsappPng,
      alt: `инконка whatsapp`,
    },
    {
      path: "https://www.t.me",
      icon: TelegramPng,
      alt: `инконка telegram`,
    },
    {
      path: "https://www.gmail.com",
      icon: GmailPng,
      alt: `инконка gmail`,
    },
  ];

  return {
    mainLinks,
    socialLinks,
  };
};

export default useLinks;
