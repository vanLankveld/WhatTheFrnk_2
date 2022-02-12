import { Component, h } from '@stencil/core';

@Component({
    tag: 'wtf-logo',
    styleUrl: 'wtf-logo.less',
    assetsDirs: ['../../assets'],
})
export class WtfLogo {

    render = () => {
        return [
            <div class="container d-none d-md-block">
                {this.getImage()}
            </div>,
            <div class="d-sm-block d-md-none">
                {this.getImage()}
            </div>
        ];
    }

    getImage = () => {
        return (
            <img src={`./assets/img/main.jpg`} class="img-fluid" alt="What The Frnk" />
        );
    }
}