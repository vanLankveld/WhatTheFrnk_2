import { Component, h } from '@stencil/core';

@Component({
    tag: 'wtf-reviews',
    styleUrl: 'wtf-reviews.less',
})
export class WtfReviews {
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

    renderContents() {
        return (
            <div class="container reviews-container">
                <h4>De pers over het debuutalbum There's something about you</h4>
                <p class="review-p">
                    "Nederland heeft er weer een prima bluesband bij."<br/>
                    (Blues Town Music)
                </p>
                <p class="review-p">
                    "Een prettige kennismaking. What The Frnk dat moet live wel een feestje zijn."<br/>
                    (Gitarist)
                </p>
                <p class="review-p">
                    "Een mooi, gevarieerd en sterk debuutalbum."<br/>
                    (Realrootscaf&eacute; magazine)
                </p>
                <p class="review-p">
                    "Een oerdegelijke band met dito sound."<br/>
                    (D&eacute; Blueskrant)
                </p>
                <p class="review-p">
                    "Een lekkere scheurende gitaar, fijn Hammond-orgelspel, mooi pianowerk en een uitstekende ritmesectie."<br/>
                    (Musicmaker)
                </p>
                <p class="review-p">
                    "Deze funkende blusrockers hebben er een flink pak noeste arbeid in zitten en d&agrave;t hoor je!"<br/>
                    (Popei maandblad)
                </p>
            </div>
        );
    }
}
