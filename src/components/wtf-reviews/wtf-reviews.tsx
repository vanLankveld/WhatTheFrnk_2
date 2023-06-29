import { Component, h, State } from '@stencil/core';

@Component({
    tag: 'wtf-reviews',
    styleUrl: 'wtf-reviews.less',
})
export class WtfReviews {

    @State() topReviewOpen = false;

    render = () => {
        return [
            <div class="container d-none d-md-block">
                {this.renderContents()}
            </div>,
            <div class="d-md-none reviews-container">
                {this.renderContents()}
            </div>
        ];
    }

    readMoreClicked = () =>{
        this.topReviewOpen = true;
    }

    renderContents = () => {
        return (
            <div class="container reviews-container">
                <p class="review-p">
                    <span>Bleusmagazine Bluesrock Tegelen</span>
                    <blockquote>"Een verrassing deze Nederlandse band."</blockquote>
                    {!this.topReviewOpen && [
                        <span class="wtf-review-read-more" onClick={this.readMoreClicked}>Lees recensie &gt;</span>,
                        <br/>,
                        <br/>,
                        <br/>
                    ]}
                    {this.topReviewOpen && <p>
                        Nog onwennig van wat de gebruiken zijn op dit festival, mag voor de stoeltjes met je luchtgitaar in de aanslag van een band genieten of is dat niet de bedoeling. Als vrij snel kwam ik er achter dat de kon. De opening was voor de Nederlandse band What the Frnk, en wat voor een opening, een verrassende Nederlandse band. Hun blues viel zeer in de smaak en bevestigde mijn gelijk dat de beste bands vroeg in het programma zitten. Althans als je nieuwe idee&euml;n wilt opdoen moet je er vaak vroeg bij zijn, de gevestigde namen zitten vaak achter in het programma. What the Frnk, bestaat zo&rsquo;n jaar of vier en hadden de pech dat ze door de Corona nu pas aan hun eerste festival seizoen beginnen. Ze hadden hiervoor een blazers trio the Longhorns meegenomen, wat hun muziek vergeleken met de plaat erg verrijkte. Zanger/gitarist Frank Schurgers, de centrale man in de band, is gezegend met een fijne stem en goed gevarieerd gitaar spel. De band is puik, zeker drummer Mano van den Beuken deed zijn naam eer aan met een lekker potje beuken. What the Frnk bracht een mooie mix van eigen werk en wat covers; hoogtepunten Losing the faith en Because of you, een vette uitvoering van the Bobby Blue klassieker Further up down the road, en het afsluitende There&rsquo;s something about you. Een verrassing deze Nederlandse band die met hun optreden er voor zorgde dat de sfeer er gelijk goed in zat.
                    </p>
                    }
                </p>
                <p class="review-p">
                    "Nederland heeft er weer een prima band bij."<br />
                    (Blues Town Music)
                </p>
                <p class="review-p">
                    "What The Frnk dat moet live wel een feestje zijn."<br />
                    (Gitarist)
                </p>
                <p class="review-p">
                    "Een oerdegelijke band met dito sound."<br />
                    (D&eacute; Blueskrant)
                </p>
                <p class="review-p">
                    "Een lekkere scheurende gitaar, fijn Hammondorgel, mooi pianowerk en een uitstekende ritmesectie."<br />
                    (Musicmaker)
                </p>
            </div>
        );
    }
}
