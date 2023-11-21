class WeatherService {
    private chave: string;
  
    constructor(chave: string) {
      this.chave = chave;
    }
  
    private colocarNaTela(dados: any): void {
      console.log(dados);
      (document.querySelector(".cidade") as HTMLElement).innerHTML = `Tempo em ${dados.name}`;
      (document.querySelector(".temp") as HTMLElement).innerHTML = `${Math.floor(dados.main.temp)}°C`;
      (document.querySelector(".descricao") as HTMLElement).innerHTML = dados.weather[0].description;
      (document.querySelector(".umidade") as HTMLElement).innerHTML = `Umidade ${dados.main.humidity}%`;
      (document.querySelector(".icone") as HTMLImageElement).src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
    }
  
    async buscarCidade(cidade: string): Promise<void> {
      try {
        const resposta = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${this.chave}&lang=pt_br&units=metric`
        );
  
        if (!resposta.ok) {
          console.error(`Erro na requisição: ${resposta.status} - ${resposta.statusText}`);
          return;
        }
  
        const dados = await resposta.json();
        this.colocarNaTela(dados);
      } catch (erro) {
        console.error('Erro na requisição:', erro);
      }
    }
  
    cliqueiNoBotao(): void {
      const cidade = (document.querySelector(".input-cidade") as HTMLInputElement).value;
      this.buscarCidade(cidade);
    }
  }
  
  export default WeatherService;
  
  // Instância da classe
  const weatherService = new WeatherService("b16ee8b96aca0d1d2611397e5841df57");
  
  // Event listener para o botão
  const botao = document.querySelector(".botao") as HTMLButtonElement | null;
  if (botao) {
    botao.addEventListener("click", () => {
      weatherService.cliqueiNoBotao();
    });
  }