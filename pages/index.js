import Head from "next/head";
import React, { Component } from "react";
import CustomHeader from "./components/CustomHeader.js";
import CustomCardPokemon from "./components/CustomCardPokemon.js";
import CustomFooter from "./components/CustomFooter.js";
import "./_app.js";

export default class Home extends Component {
  render() {
    return (
      <>
        <Head>
          <title className="col-3">Pokedex - Online</title>
          <meta name="Pokedex" content="Reac+next.js+bootstrap" />
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
            crossorigin="anonymous"
          ></link>
        </Head>

        <CustomHeader />

        <div
          className="alert alert-danger border col-10 col-sm-6 m-auto mt-4"
          role="alert"
        >
          ATENÇÃO, PLATAFORMA EM DESENVOLVIMENTO!
        </div>

        <CustomCardPokemon></CustomCardPokemon>

        <CustomFooter />
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
          integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
          integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
          crossorigin="anonymous"
        ></script>
      </>
    );
  }
}
