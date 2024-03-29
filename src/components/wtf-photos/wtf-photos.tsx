import { Component, h } from '@stencil/core';

@Component({
    tag: 'wtf-photos',
    styleUrl: 'wtf-photos.less',
})
export class WtfPhotos {
    render = () => {
        return [
            <div class="container d-none d-md-block">
                {this.renderContents()}
            </div>,
            <div class="d-md-none photos-container">
                {this.renderContents()}
            </div>
        ];
    }

    renderContents() {
        return [
            <div class="container"><h4>Foto's</h4></div>,
            <img src={`assets/img/photos/1.jpg`} class="img-fluid wtf-photo" alt="Foto" />,
            <img src={`assets/img/photos/2.jpg`} class="img-fluid wtf-photo" alt="Foto" />,
            <img src={`assets/img/photos/3.jpg`} class="img-fluid wtf-photo" alt="Foto" />,
            <img src={`assets/img/photos/4.jpg`} class="img-fluid wtf-photo" alt="Foto" />,
            <img src={`assets/img/photos/5.jpg`} class="img-fluid wtf-photo" alt="Foto" />,
            <img src={`assets/img/photos/6.png`} class="img-fluid wtf-photo" alt="Foto" />,
            <img src={`assets/img/photos/7.png`} class="img-fluid wtf-photo" alt="Foto" />,
            <img src={`assets/img/photos/8.jpg`} class="img-fluid wtf-photo" alt="Foto" />,
            <img src={`assets/img/photos/9.jpg`} class="img-fluid wtf-photo" alt="Foto" />,
            <img src={`assets/img/photos/10.png`} class="img-fluid wtf-photo" alt="Foto" />,
            <img src={`assets/img/photos/11.jpg`} class="img-fluid wtf-photo" alt="Foto" />,
            <img src={`assets/img/photos/12.jpg`} class="img-fluid wtf-photo" alt="Foto" />,
            <img src={`assets/img/photos/13.jpg`} class="img-fluid wtf-photo" alt="Foto" />,
        ];
    }
}
