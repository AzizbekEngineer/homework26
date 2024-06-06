import React from "react";
import Button from "@mui/material/Button";
import PrimarySearchAppBar from "./components/header/Header";
import ContactForm from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import RecipeReviewCard from "./components/card/Cards";
import CustomImageList from "./components/imgList/Img";

const App = () => {
  return (
    <div>
      <PrimarySearchAppBar />
      {/* <Hero /> */}
      <RecipeReviewCard />
      <ContactForm />
      <CustomImageList />
      <Footer />
    </div>
  );
};

export default App;
