import { Component, h } from '@stencil/core';

@Component({
    tag: 'wtf-bookings',
    styleUrl: 'wtf-bookings.less',
})
export class WtfMedia {
    render = () => {
        return (
            <div>
                <h4>Boekingen</h4>
                <p>
                    Wilt u meer weten over What The Frnk en de mogelijkheden m.b.t. boeken? Bel of mail info@monkeyman.nl
                </p>
                <br/>
                <br/>
                <img data-goto="#home" src={`./assets/img/logo.png`} class="bookings-wtf-logo" alt="What The Frnk" />
            </div>
        );
    }
}
