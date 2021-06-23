import React, { Component } from "react";
import styles from "../../styles/CustomCardPokemon.module.css";
import Image from "next/image";
import pikachu from "../../public/pikachu.png";
export default class CustomCardPokemon extends Component {
  render() {
    return (
      <>
        <div className="card row col-11 col-sm-6 m-auto border-1 border container mt-4 p-3">
          <div className="card-body">
            <section className="col-6 border img-fluid float-end">
              <Image src={pikachu} />
            </section>

            <section className="col-6">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </section>
          </div>
        </div>
      </>
    );
  }
}
