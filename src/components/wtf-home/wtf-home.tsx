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
        <h4 class="wtf-title">What the Frnk</h4>

        <p>Van ingetogen groot naar keihard klein. Een echte live band voor elk zichzelf respecterende kroeg of festival. Lekkere grooves en funky solo&rsquo;s op Hammond en messcherpe gitaarriffs van gitarist en zanger Frank Schurgers geven de band een herkenbare, eigen sound.</p>

        <p>Frank weet met zijn uitgelaten performance het publiek keer op keer op zijn hand te krijgen. Naast Frank op gitaar bestaat de band uit Guus van Lankveld op Rhodes en Hammond, Twan van hoof op basgitaar en Too Pierik op drums.<br />
          What the Frnk, een lekkere live band voor elk zichzelf respecterende kroeg of festival.</p>

        <p>En mocht je willen dan is What the Frnk te boeken met &ldquo;The Longhorns&rdquo;. Een blazerssectie van formaat die de band nog n&egrave;t even wat extra&rsquo;s geeft.</p>
        <p><i>&ldquo;Good vibes in tha house&rdquo;</i></p>
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
