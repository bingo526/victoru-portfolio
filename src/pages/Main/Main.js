import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import {
  Navbar,
  Footer,
  Landing,
  About,
  Skills,
  Testimonials,
  Blog,
  Education,
  Experience,
  Contacts,
  Projects,
  Services,
  Video,
} from "../../components";
import { headerData } from "../../data/headerData";
import axios from "axios";
import { contactsData } from "../../data/contactsData";

function Main() {
  const sentEmail = async () => {
    const responseData = {
      name: "",
      email: "",
      message: "",
      date: new Date(),
    };

    await axios.post(contactsData.sheetAPI, responseData);
  };
  useEffect(() => {
    sentEmail();
  }, []);
  return (
    <div>
      <Helmet>
        <title>{headerData.name} - Porfolio</title>
      </Helmet>

      <Navbar />
      <Video />
      <Landing />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <Testimonials />
      <Blog />
      <Contacts />
      <Footer />
    </div>
  );
}

export default Main;
