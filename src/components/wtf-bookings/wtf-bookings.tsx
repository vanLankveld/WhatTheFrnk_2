import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'wtf-bookings',
    styleUrl: 'wtf-bookings.less',
})
export class WtfMedia {

    @Prop() showLogo: boolean = true;

    render = () => {
        return (
            <div>
                <h4>Boekingen</h4>
                <p>
                    Wilt u meer weten over What The Frnk en de mogelijkheden m.b.t. boeken? 
                    <br />
                    <br />
                    <wtf-button newTab={true} buttonLink={"tel:0497 54 00 54"} textLeft={"Bel 0497 54 00 54"}></wtf-button>
                    <br />
                    <wtf-button newTab={true} buttonLink={"mailto: info@monkeyman.nl"} textLeft={"Mail info@monkeyman.nl"}></wtf-button>
                </p>
                <br/>
                <br/>
                {this.showLogo &&
                    <img data-goto="#home" src={`./assets/img/logo.png`} class="bookings-wtf-logo" alt="What The Frnk" />
                }
            </div>
        );
    }
}
