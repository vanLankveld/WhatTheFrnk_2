import { Component, Prop, h, Event, EventEmitter, Element, Method } from '@stencil/core';
import { loadScript, youtubePromise } from '../../util/util';

declare const YT: any;

@Component({
    tag: 'wtf-youtube',
    styleUrl: 'wtf-youtube.less',
})
export class Youtube {

    @Prop() videoId: string;

    @Event() playerReady: EventEmitter;
    @Event() playerStart: EventEmitter;
    @Event() playerStop: EventEmitter;

    @Element() element: HTMLElement;

    player: any;

    loadPromise: Promise<void>

    @Method()
    play() {
        this.player.playVideo();
    }

    @Method()
    pause() {
        this.player.stopVideo();
    }

    onPlayerStateChange = (e) => {
        switch (e.data) {
            case 1: //playing
                this.playerStart.emit();
                break;
            case 2: //paused
                this.playerStop.emit();
                break;
        }
    }

    onPlayerReady = (e) => {
        this.player.stopVideo(); //Pause so control bar is hidden initially
        this.playerReady.emit(e);
    }

    onPlayerError = (e) => {
        console.error(e);
    }

    componentWillLoad = () => {
        this.loadPromise = loadScript("https://www.youtube.com/iframe_api");
    }

    componentDidLoad = async () => {
        await this.loadPromise;
        await youtubePromise;
        let div = this.element.querySelector('.video');
        this.player = new YT.Player(div, {
            videoId: this.videoId,
            playerVars: {
                'playsinline': 1
            },
            events: {
                'onReady': this.onPlayerReady,
                'onStateChange': this.onPlayerStateChange,
                'onError': this.onPlayerError
            }
        });
    }

    render = () => {
        return (
            <div>
                <div class="video-container">
                    <div class="video"></div>
                </div>
            </div>
        );
    }
}
