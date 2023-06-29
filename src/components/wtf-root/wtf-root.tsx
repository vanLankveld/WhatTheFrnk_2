import { Component, Element, h, Method, State } from '@stencil/core';
import '@adamlacombe/fa-icon';
import { youtubeResolve } from '../../util/util';

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

  @Method()
  youTubeIframeAPIReady() {
    youtubeResolve();
    return Promise.resolve();
  }

  componentDidLoad = () => {
    //If the url contains a # to a section. Go there
    let url = window.location.href;
    let i = url.indexOf('#');
    if (i != -1) {
      let sectionHref = url.substring(i);
      this.scrollTo(sectionHref);
    }
  }

  menuItemClicked = (e: Event) => {
    let target = e.target as HTMLElement;
    if (!target.getAttribute) {
      return;
    }
    let href = target.getAttribute('href') || target.getAttribute('data-goto');
    this.scrollTo(href);
    this.mobileMenuOpen = false;
  }

  scrollTo(href: string) {
    let linkParts = (href || "").split(':');
    let element
    if (linkParts.length > 0 && linkParts[linkParts.length - 1] == 'resp') {
      //try mobile and desktop
      let mobile = this.element.shadowRoot.querySelector(href.replace(':resp', "-mobile")) as HTMLElement;
      let desktop = this.element.shadowRoot.querySelector(href.replace(':resp', "-desktop")) as HTMLElement;
      if (!mobile.hidden && window.getComputedStyle(mobile).display != "none") {
        element = mobile;
      }
      else if (!desktop.hidden && window.getComputedStyle(desktop).display != "none") {
        element = desktop;
      }
    }
    else {
      element = this.element.shadowRoot.querySelector(href) as HTMLElement;
    }
    if (element == null) {
      return;
    }
    if (element.scrollIntoView) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    else {
      window.scrollTo(0, element.offsetTop);
    }
  }

  renderMainMenu = () => {
    return [
      <div class="col-2 d-lg-none center toggler-container">
        <button type="button" class="navbar-toggler" onClick={this.openMenu}>
          <span class="navbar-toggler-icon-wtf navbar-icon" style={{ 'background-image': `url(${"assets/img/hamburger%20menu.svg"})` }}></span>
        </button>
      </div>,
      <div class="col-8 col-lg-4">
        <span class="navbar-brand">
          <img data-goto="#home" onClick={this.menuItemClicked} src={`assets/img/logo${this.mobileMenuOpen ? '_dark' : ''}.png`} class="img-fluid" alt="What The Frnk" />
        </span>
      </div>,
      <div class="col-lg-8 d-none d-lg-block">
        <div class="navbar-nav desktop-nav">
          {
            this.renderCommonMenu()
          }
          <a href="mailto:frank@monkeyman.nl" class="nav-item nav-link mail-nav"><img style={{ height: '1em' }} src={"assets/img/mail%20icon.svg"} /></a>
        </div>
      </div>,
      <div class="col-2 d-lg-none center">
        <a href="mailto:frank@monkeyman.nl" class="mail-icon navbar-icon" style={{ 'background-image': `url(${"assets/img/mail%20icon.svg"})` }}></a>
      </div>
    ];
  }

  renderCommonMenu = () => {
    return [
      <a href="#media" onClick={this.menuItemClicked} class="nav-item nav-link">Media</a>,
      <a href="#bookings:resp" onClick={this.menuItemClicked} class="nav-item nav-link">Boekingen</a>,
      <a href="#agenda" onClick={this.menuItemClicked} class="nav-item nav-link">Agenda</a>,
      <a href="#fotos" onClick={this.menuItemClicked} class="nav-item nav-link">Foto's</a>,
      <a href="#riders" onClick={this.menuItemClicked} class="nav-item nav-link">Rider &amp; Presskit</a>
    ];
  }

  render = () => {
    return [
      <header class="main-header">
        <div class="container">
          <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light">
            {this.renderMainMenu()}
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
                <img src={`assets/img/logo${this.mobileMenuOpen ? '_dark' : ''}.png`} class="img-fluid" alt="What The Frnk" />
              </span>
            </div>
            <div class="col-2 center">
            </div>
            <div class="col-12">
              <div>
                <div class="navbar-nav">
                  {
                    this.renderCommonMenu()
                  }
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>,
      <div class="main-wrapper">
        <main>

          <section id="home" class="col-12 can-scroll-to">
            <wtf-logo></wtf-logo>
          </section>
          <div class="container">
            <div class="row">
              <section class="col-12 col-md-7">
                <wtf-home></wtf-home>
                <section id="bookings-desktop" class="d-none d-md-block can-scroll-to">
                  <br />
                  <wtf-bookings></wtf-bookings>
                </section>
              </section>
              <section id="media" class="col-12 col-md-5 can-scroll-to">
                <wtf-media></wtf-media>
              </section>
              <section id="bookings-mobile" class="col-12 d-md-none can-scroll-to">
                <wtf-bookings></wtf-bookings>
              </section>
            </div>
          </div>
          <section id="reviews" class="can-scroll-to">
            <wtf-reviews></wtf-reviews>
          </section>
          <section id="agenda" class="can-scroll-to">
            <wtf-gigs></wtf-gigs>
          </section>
          <section id="fotos" class="can-scroll-to">
            <wtf-photos></wtf-photos>
          </section>
          <section id="riders" class="can-scroll-to">
            <wtf-rider-presskit></wtf-rider-presskit>
          </section>
          <section id="bookings-repeat" class="col-12">
            <div class="container">
              <div class="row">
                <wtf-bookings></wtf-bookings>
              </div>
            </div>
          </section>
        </main>
      </div>
    ];
  }
}
