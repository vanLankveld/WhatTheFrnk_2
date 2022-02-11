import { Component, getAssetPath, h } from '@stencil/core';

@Component({
  tag: 'wtf-home',
  styleUrl: 'wtf-home.less',
  assetsDirs: ['../../assets'],
})
export class WtfHome {

  render = () => {
    return [
      <div>
        <h4 class="wtf-title">What The Frnk brengt funky bluesrock en is geformeerd rondom gitarist en zanger Frank Schurgers.</h4>

        <p>What the Frnk, een echte live band! Good vibes in the house. Lekkere grooves, messcherpe gitaarriffs en funky solo's op Rhodes en Hammond geven de band een herkenbare, eigen sound.</p>

        <p>Sinds kort is de band voor de grotere podia ook te boeken met The <b>LongHorns</b>, een drie-koppige blazerssectie die de band nog n&egrave;t even wat extra's geeft.</p>
        <br />
        <div class="home-button-container">
          <wtf-button newTab={true} buttonLink={"https://open.spotify.com/artist/2HklgMgtrhrEdQNdKEpmfn?si=96Y9jPECRoGCeXwkR6r5fQ"} textLeft={"Luister op Spotify"} iconUrl={getAssetPath("/assets/img/Spotify.svg")}></wtf-button>
          <br />
          <wtf-button newTab={true} buttonLink={"https://www.youtube.com/channel/UCUgGXpBi52ataMhukfCd98A"} textLeft={"Bekijk op Youtube"} iconUrl={getAssetPath("/assets/img/Youtube.svg")}></wtf-button>
        </div>
      </div>
    ];
  }
}
