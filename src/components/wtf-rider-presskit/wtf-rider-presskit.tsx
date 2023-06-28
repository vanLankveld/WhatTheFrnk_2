import { Component, h } from '@stencil/core';

@Component({
    tag: 'wtf-rider-presskit',
    styleUrl: 'wtf-rider-presskit.less',
})
export class WtfPhotos {
    render = () => {
        return [
            <div class="container d-none d-md-block">
                {this.renderContents()}
            </div>,
            <div class="d-md-none rider-presskit-container">
                {this.renderContents()}
            </div>
        ];
    }

    renderContents() {
        return [
            <div class="container"><h4>Rider &amp; Presskit</h4></div>,
            <div class="riders-button-container">
                <div class="row">
                    <div class="col-12 col-md-3"><wtf-button newTab={true} buttonLink={"https://www.dropbox.com/sh/35394fphqbcskrb/AADd276V5XhCRx-J2aNraKhOa?dl=0"} textLeft={"Presskit"}></wtf-button></div>
                    <div class="col-12 col-md-4"><wtf-button newTab={true} buttonLink={`assets/docs/rider-wtf.pdf`} textLeft={"Rider What the Frnk"}></wtf-button></div>
                    <div class="col-12 col-md-5"><wtf-button newTab={true} buttonLink={`assets/docs/rider-wtf-horns.pdf`} textLeft={"Rider What the Frnk &amp; the Longhorns"}></wtf-button></div>
                </div>
            </div>
        ];
    }
}
