import React, { Component } from 'react';
import WeatherService from './services/WeatherService';
import './App.css';

class WeatherApp extends Component {
  private weatherService: WeatherService = new WeatherService("b16ee8b96aca0d1d2611397e5841df57");

  state = {
    nomeCidade: '' 
  };

  cliqueiNoBotao = (): void => {
    const cidade = (document.querySelector(".input-cidade") as HTMLInputElement).value;
    this.weatherService.buscarCidade(cidade);
  };

  render() {
    return (
      <section className="caixa-maior">

      <input className="input-cidade" placeholder="Digite o nome da cidade" />
      <button onClick={this.cliqueiNoBotao}>
        <img className="lupa" src="https://www.svgrepo.com/show/488200/find.svg" alt="Buscar" />
      </button>

      <article className="caixa-media">
        <h2 className="cidade">Tempo em <span className="nome-cidade">{this.state.nomeCidade}</span></h2>
        <p className="temp">°C</p>

        <figure className="caixa-menor">
          <img className="icone" src="https://openweathermap.org/img/wn/04n.png" alt="Ícone do tempo" />
          <figcaption className="descricao"></figcaption>
        </figure>

        <p className="umidade"></p>
      </article>

    </section>
    );
  }
}

export default WeatherApp;