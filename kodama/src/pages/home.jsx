import logo from "../logo-kodama-2-png-white.png";
import "../style/home.scss";
import Header from "../components/header";

function Home() {
  return (
    <div className="home_wrapper">
      <Header />
      <div className="logo_wrapper">
        <img src={logo} alt="logo Kodama" />
      </div>
      <h1>Développement web </h1>
    </div>
  );
}

export default Home;
