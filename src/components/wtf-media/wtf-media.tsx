import { Component, h, Element } from '@stencil/core';

@Component({
    tag: 'wtf-media',
    styleUrl: 'wtf-media.less',
})
export class WtfMedia {

    @Element() element: HTMLElement;

    videos = [
        "bfVfDqBMUHk?si=5-7QXwgN_Bzo_8h0",
        "ffiERFP7XSg",
        "9WYQOWhv6Z8",
        "JqhWogFl7-A",
        "lXnXEi-HqTw",
        "jO3Xqk6c3Qo",
    ]

    get players() {
        return this.element.querySelectorAll('wtf-youtube');
    }

    onPlayerStart = (e) => {
        this.players.forEach(player => {
            if (player != e.target) {
                player.pause();
            }
        })
    }

    render = () => {
        return (
            <div>
                <div class="d-sm-block d-md-none">
                    <h4>Media</h4>
                </div>
                <a class="wtf-media-item" target="_blank" href="spotify:album:6SAPdwBGJABWYS0TJIXDCr">
                    <img src={`./assets/img/albumcover.jpg`} class="img-fluid" alt="What The Frnk" />
                </a>
                {this.videos.map(id => [
                    <wtf-youtube videoId={id} onPlayerStart={this.onPlayerStart}></wtf-youtube>
                ])}
            </div>
        );
    }
}
