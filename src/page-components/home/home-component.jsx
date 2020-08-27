import React from "react";
import Directory from "../../components/directory/directory.component";
import HomeContainer from "./home.styled.component";
//import "./home.style.scss";

const Home = () => {
  return (
    //<div className="homepage">
    <HomeContainer>
      <Directory />
    </HomeContainer>
    //</div>
  );
};

export default Home;
