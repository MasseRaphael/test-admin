import logo from './logo.svg';
import './App.css';
import { fetchUtils, Admin, Resource } from 'react-admin';
import simpleRestProvider from "./helpers/strapi";
import authProvider from './authProvider';
import Cookies from './helpers/Cookies';
import frenchMessages from 'ra-language-french';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import { SpecialsList } from './components/specials';

const i18nProvider = polyglotI18nProvider(() => frenchMessages, "fr")

const httpClient = (url, options = {}) =>{
  if (!options.header) {
    options.header = new Headers({ Accept: "application/json"});
  }
  const token = Cookies.getCookie("token");
  options.Headers.set("Authorization", `Beare ${token}`);
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider(
  "https://api.gill-cote-bistro.fr",
  httpClient
);

const App = () => (
  <Admin
  title="Restaurant"
  authProvider={authProvider}
  dataProvider={dataProvider}
  locale='fr'
  i18nProvider={i18nProvider}
  >
    <Resource list={SpecialsList} />

  </Admin>
)

export default App;