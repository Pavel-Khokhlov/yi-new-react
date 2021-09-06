//import { useContext } from 'react';
import CollectionFoto from "../images/collection.jpg";
//import { TranslationContext } from "../../context/TranslationContext";
export const REG_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export const PATTERN_EMAIL = `[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i`;
export const REG_PASSWORD =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9_]).{8,}/;
export const PATTERN_PASSWORD = `(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9_]).{8,}`;
// const translation = useContext(TranslationContext);

export const ESC_CODE = 27;

export const mainLinks = [
  {
    name: "translation.main_collection",
    img: CollectionFoto,
    path: `/collection`,
  },
  {
    name: `translation.main_bags`,
    img: CollectionFoto,
    path: `/bags`,
  },
  {
    name: `translation.main_accessorize`,
    img: CollectionFoto,
    path: `/accessorize`,
  },
  {
    name: `translation.main_bijouterie`,
    img: CollectionFoto,
    path: `/bijouterie`,
  },
];
