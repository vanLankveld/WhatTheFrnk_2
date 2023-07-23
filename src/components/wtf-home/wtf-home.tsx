import { Component, h } from '@stencil/core';

@Component({
  tag: 'wtf-home',
  styleUrl: 'wtf-home.less',
  assetsDirs: ['../../assets'],
})
export class WtfHome {

  render = () => {
    return [
      <div>
        <p>What the Frnk. Van ingetogen groot naar keihard klein. Een herkenbare eigen sound, overtuigend gebracht. Dat is What the Frnk. Live zijn ze op hun best, in leuke kroegen en op festivals, als er maar een professioneel podium onder zit.</p>
        <p>Frank Schurgers (gitaar en vocals) is degene die uitgelaten en solerend voorop staat. Maar daaromheen staat minstens zoveel muzikale en ritmische energie. Guus van Lankveld op Rhodes en Hammond, Twan van Hoof speelt basgitaar en Too Pierik zit achter de drums.</p>
        <p>De blazerssectie is een welkome aanvulling, een frisse wind er doorheen. “The Longhorns” zijn optioneel bij te boeken. What the Frnk, een lekkere live band voor elk zichzelf respecterende kroeg of festival.</p>
        <p>Oordeel, luister en beweeg zelf.</p>
        <br />
        <div class="home-button-container">
          <wtf-button newTab={true} buttonLink={"https://open.spotify.com/artist/2HklgMgtrhrEdQNdKEpmfn?si=96Y9jPECRoGCeXwkR6r5fQ"} textLeft={"Luister op Spotify"} iconUrl={"./assets/img/Spotify.svg"}></wtf-button>
          <br />
          <wtf-button newTab={true} buttonLink={"https://www.youtube.com/channel/UCUgGXpBi52ataMhukfCd98A"} textLeft={"Bekijk op Youtube"} iconUrl={"./assets/img/Youtube.svg"}></wtf-button>
        </div>
      </div>
    ];
  }
}
