import Global from "./public/assets/global.svg";
import Card from "./public/assets/Card.svg";
import Cookie from "./public/assets/Cookie.svg";
import Key from "./public/assets/Key.svg";

import Edge from "./public/assets/Edge.svg";
import Chrome from "./public/assets/Chrome.svg";
import Firefox from "./public/assets/Firefox.svg";

import Paypal from "./public/assets/Paypal.svg";
import Netflix from "./public/assets/Netflix.svg";

export const countryDropdown = [
  {
    id: 1,
    country: "Global",
    icon: Global,
  },
  { id: 2, country: "United States", icon: Global },
  { id: 3, country: "United Kingdom", icon: Global },
  { id: 4, country: "Canada", icon: Global },
  { id: 5, country: "India", icon: Global },
];

export const cardsNcookiesContent = [
  {
    id: "Cards",
    icon: Card,
    quantity: 999,
  },
  {
    id: "Cookies",
    icon: Cookie,
    quantity: 999,
  },
  {
    id: "Keys",
    icon: Key,
    quantity: 999,
  },
];

export const browsersContent = [
  {
    id: "edge",
    icon: Edge,
    quantity: 99,
  },
  {
    id: "chrome",
    icon: Chrome,
    quantity: 99,
  },
  {
    id: "firefox",
    icon: Firefox,
    quantity: 99,
  },
];

export const websitesContent = [
  {
    id: "paypal",
    icon: Paypal,
    link: "paypal.com",
  },
  {
    id: "netflix",
    icon: Netflix,
    link: "netflix.com",
  },
];
