import { Component, h, Element } from '@stencil/core';

@Component({
    tag: 'wtf-media',
    styleUrl: 'wtf-media.less',
})
export class WtfMedia {

    @Element() element: HTMLElement;

    videos = [
        "NFFEIvoQfxU",
        "JqhWogFl7-A",
        "jO3Xqk6c3Qo"
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
                {this.videos.map(id => [
                    <wtf-youtube videoId={id} onPlayerStart={this.onPlayerStart}></wtf-youtube>
                ])}
                <a target="_blank" href="https://open.spotify.com/album/6Si7za91K7HlhUsm1pewj1?si=eWeJUJGRR5aoQeynhI1qxg">
                    <img src={`./assets/img/albumcover.jpg`} class="img-fluid" alt="What The Frnk" />
                </a>
            </div>
        );
    }
}
