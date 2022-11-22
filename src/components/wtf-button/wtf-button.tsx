import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'wtf-button',
  styleUrl: 'wtf-button.less',
})
export class WtfButton {

  @Prop() textLeft: string;
  @Prop() textRight: string;
  @Prop() iconUrl: string;
  @Prop() buttonLink: string = "#";
  @Prop() newTab: boolean;

  render() {
    return (
      <a class="button" href={this.buttonLink} target={this.newTab ? '_blank' : ''}>
        {this.textLeft &&
          <span class="wtf-button-text" innerHTML={this.textLeft}></span>
        }
        {this.iconUrl &&
          <img src={this.iconUrl} />
        }
        {this.textRight &&
          <span class="wtf-button-text" innerHTML={this.textRight}></span>
        }
      </a>
    );
  }
}
