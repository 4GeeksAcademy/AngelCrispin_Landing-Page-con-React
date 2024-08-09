import React from "react";
import NavBar from "./navbar";
import Container from "./container";
import Footer from "./footer";

//create your first component
const Home = () => {
	return (
		<>
			<NavBar></NavBar>
			<Container></Container>
			<Footer></Footer>
		</>
	);
};

export default Home;
