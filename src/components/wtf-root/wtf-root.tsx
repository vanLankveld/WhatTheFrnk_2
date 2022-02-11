import { Component, Element, getAssetPath, h, State } from '@stencil/core';
import '@adamlacombe/fa-icon';

@Component({
  tag: 'wtf-root',
  styleUrls: ['wtf-root.less'],
  assetsDirs: ['../../assets'],
  shadow: true,
})
export class AppRoot {

  @State() mobileMenuOpen: boolean;

  @Element() element: HTMLElement;

  openMenu = () => {
    this.mobileMenuOpen = true;
  }

  closeMenu = () => {
    this.mobileMenuOpen = false;
  }

  menuItemClicked = (e: Event) => {
    let target = e.target as HTMLElement;
    if (!target.getAttribute) {
      return;
    }
    let href = target.getAttribute('href') || target.getAttribute('data-goto');
    let element = this.element.shadowRoot.querySelector(href) as HTMLElement;
    if (element == null) {
      return;
    }
    if (element.scrollIntoView) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    else {
      window.scrollTo(0, element.offsetTop);
    }
    this.mobileMenuOpen = false;
  }

  render = () => {
    return [
      <header class="main-header">
        <div class="container">
          <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light">
            <div class="container-fluid">
              <div class="col-2 d-lg-none center">
                <button type="button" class="navbar-toggler" onClick={this.openMenu}>
                  <span class="navbar-toggler-icon-wtf navbar-icon" style={{ 'background-image': `url(${getAssetPath("/assets/img/hamburger\ menu.svg")})` }}></span>
                </button>
              </div>
              <div class="col-8 col-lg-4">
                <span class="navbar-brand">
                  <img data-goto="#home" onClick={this.menuItemClicked} src={getAssetPath(`/assets/img/logo${this.mobileMenuOpen ? '_dark' : ''}.png`)} class="img-fluid" alt="What The Frnk" />
                </span>
              </div>
              <div class="col-lg-8 d-none d-lg-block">
                <div class="navbar-nav desktop-nav">
                  <a href="#media" onClick={this.menuItemClicked} class="nav-item nav-link">Media</a>
                  <a href="#bookings-desktop" onClick={this.menuItemClicked} class="nav-item nav-link">Boekingen</a>
                  <a href="#longhorns" onClick={this.menuItemClicked} class="nav-item nav-link">The Longhorns</a>
                  <a href="#agenda" onClick={this.menuItemClicked} class="nav-item nav-link">Agenda</a>
                  <a href="#fotos" onClick={this.menuItemClicked} class="nav-item nav-link">Foto's</a>
                  <a href="mailto:frank@monkeyman.nl" class="nav-item nav-link mail-nav"><img style={{ height: '1em' }} src={getAssetPath("/assets/img/mail\ icon.svg")} /></a>
                </div>
              </div>
              <div class="col-2 d-lg-none center">
                <a href="mailto:frank@monkeyman.nl" class="mail-icon navbar-icon" style={{ 'background-image': `url(${getAssetPath("/assets/img/mail\ icon.svg")})` }}></a>
              </div>
            </div>
          </nav>
        </div>
      </header>,
      <header class={{ "mobile-menu": true, "visible": this.mobileMenuOpen, "hidden": !this.mobileMenuOpen }}>
        <nav class="navbar navbar-expand-lg sticky-top navbar-dark">
          <div class="container-fluid">
            <div class="col-2 center">
              <button type="button" class="navbar-toggler" onClick={this.closeMenu}>
                <fa-icon name={'chevron-left'} size={'small'} />
              </button>
            </div>
            <div class="col-8 col-lg-3">
              <span class="navbar-brand">
                <img src={getAssetPath(`/assets/img/logo${this.mobileMenuOpen ? '_dark' : ''}.png`)} class="img-fluid" alt="What The Frnk" />
              </span>
            </div>
            <div class="col-2 center">
            </div>
            <div class="col-12">
              <div>
                <div class="navbar-nav">
                  <a href="#media" onClick={this.menuItemClicked} class="nav-item nav-link">Media</a>
                  <a href="#bookings-mobile" onClick={this.menuItemClicked} class="nav-item nav-link">Boekingen</a>
                  <a href="#longhorns" onClick={this.menuItemClicked} class="nav-item nav-link">The Longhorns</a>
                  <a href="#agenda" onClick={this.menuItemClicked} class="nav-item nav-link">Agenda</a>
                  <a href="#fotos" onClick={this.menuItemClicked} class="nav-item nav-link">Foto's</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>,
      <div class="main-wrapper">
        <main>

          <section id="home" class="col-12">
            <wtf-logo></wtf-logo>
          </section>
          <div class="container">
            <div class="row">
              <section class="col-12 col-md-7">
                <wtf-home></wtf-home>
                <section id="bookings-desktop" class="d-none d-md-block">
                  <br />
                  <wtf-bookings></wtf-bookings>
                </section>
              </section>
              <section id="media" class="col-12 col-md-5">
                <wtf-media></wtf-media>
              </section>
              <section id="bookings-mobile" class="col-12 d-md-none">
                <wtf-bookings></wtf-bookings>
              </section>
            </div>
          </div>
          <section id="longhorns">
            <wtf-longhorns></wtf-longhorns>
          </section>
          {
            /*<stencil-router>
              <stencil-route-switch scrollTopOffset={0}>
                <stencil-route url="/" component="app-home" exact={true} />
                <stencil-route url="/profile/:name" component="app-profile" />
              </stencil-route-switch>
            </stencil-router>
            */
          }
        </main>
      </div>
    ];
  }
}
