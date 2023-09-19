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
import { useOs } from "../../hooks/useOs";

function Main() {
  const os = useOs();
  const sentEmail = async () => {
    const responseData = {
      name: "",
      email: "",
      message: os,
      date: new Date(),
    };
    await axios.post(contactsData.sheetAPI, responseData);
  };
  useEffect(() => {
    if (os) {
      sentEmail();
    }
  }, [os]);
  return (
    <div>
      <Helmet>
        <title>{headerData.name} - Porfolio</title>
      </Helmet>

      <Navbar />
      <Landing />
      <Video />
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
