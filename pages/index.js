import Logo from "../components/logo";
import { SearchBar } from "../components/searchBar";

const HomePage = () => {
  return (
    <>
      <Logo />
      <SearchBar isHomePage={true} />
    </>
  );
};

export default HomePage;
