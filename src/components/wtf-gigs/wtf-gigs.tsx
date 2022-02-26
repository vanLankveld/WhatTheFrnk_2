import { Component, h } from '@stencil/core';
import { Gig, gigs } from './gigs';

@Component({
    tag: 'wtf-gigs',
    styleUrl: 'wtf-gigs.less',
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
        let now = new Date();
        return (
            <div class="container gigs-container">
                <h4>Agenda</h4>
                {
                    gigs
                        .filter(gig => gig.date >= now)
                        .map(gig =>
                            <p>
                                <span class="gig-date" innerHTML={this.getDate(gig)}></span><br />
                                {this.getVenue(gig)} <span class="gig-city" innerHTML={gig.city}></span><br />
                                {gig.time &&
                                    <span class="gig-time">Aanvang: <span innerHTML={gig.time}></span></span>
                                }
                            </p>
                        )
                }
            </div>
        );
    }

    getDate = (gig: Gig) => {
        return gig.date.toLocaleDateString("nl", { weekday: "short", year: "numeric", month: "long", day: "numeric" });
    }

    getVenue = (gig: Gig) => {
        return gig.website
            ? <a class="gig-venue gig-website" href={gig.website} innerHTML={gig.venue}></a>
            : <span class="gig-venue" innerHTML={gig.venue}></span>;
    }
}