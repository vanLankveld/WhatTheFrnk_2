import { Component, h } from '@stencil/core';

@Component({
    tag: 'wtf-longhorns',
    styleUrl: 'wtf-longhorns.less',
})
export class WtfLonghorns {
    render = () => {
        return [
            <div class="container d-none d-md-block">
                <img src={`./assets/img/longhorns.jpg`} class="img-fluid" alt="The Longhorns" />
                { this.renderContents() }
            </div>,
            <div class="d-md-none longhorns-container">
                <img class="img-fluid" src={`./assets/img/longhorns.jpg`} alt="The Longhorns" />
                { this.renderContents() }
            </div>
        ];
    }

    renderContents() {
        return (
            <div class="container longhorns-container">
                <br />
                <h4>The Longhorns</h4>
                <p>
                    Iedereen wil ze, What The Frnk heeft ze! Wat begon als een experiment in de studio vormde de basis van een mooie samenwerking. Sinds kort is de band voor de grotere podia ook te boeken met deze drie-eenheid. Een blazerssectie van formaat die de band nog n&egrave;t even wat extra’s geeft.
                </p>
                <wtf-youtube videoId={"GAerb6fVwlQ"}></wtf-youtube>
                <br/>
                <br/>
                <div class="longhorns-button-container">
                    <wtf-button newTab={true} buttonLink={"https://monkeyman.nl"} textLeft={"Boekingen"} textRight="Monkeyman" iconUrl={"./assets/img/monkeyman.png"}></wtf-button>
                </div>
            </div>
        );
    }
}
