class navBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav id="navbar">
            <ul class="navigationitems">
                <li class="navigationlist"><a href="#">About Me</a></li>
                <li class="navigationlist"><a href="#projects">Projects</a></li>
                <li class="navigationlist"><a href="#timeline">Timeline</a></li>
                <li class="navigationlist"><a href="#contact">Contact Me</a></li>
            </ul>
        </nav>
    `
    }
}
class navBarInner extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav id="navbar">
            <ul class="navigationitems">
                <li class="navigationlist"><a href="/../MyPortfolio">About Me</a></li>
                <li class="navigationlist"><a href="/../MyPortfolio/#projects">Projects</a></li>
                <li class="navigationlist"><a href="/../MyPortfolio/#timeline">Timeline</a></li>
                <li class="navigationlist"><a href="#contact">Contact Me</a></li>
            </ul>
        </nav>
    `
    }
}
class projectcards extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<div class="cards card-container">
    <div class="card-out">
        <a href="/MyPortfolio/src/projects/adTech.html">
            <div class="card">
                <div class="card-img"><img src="src/asset/images/card-images/gg-card.png" alt=""></div>
                <div class="info-card-context">
                    <div class="card-content">
                        <h3>Journey at GreedyGame</h3>
                        <h4>8th February 2024</h4>
                    </div>
                    <div class="card-details">
                        <div class="card-info">
                            <p>User Interface</p>
                            <p>User Experience</p>
                        </div>
                        <div class="card-link">
                            <button><a href="/MyPortfolio/src/projects/adTech.html">View Project</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>
    <div class="card-out">
        <a href="/MyPortfolio/src/projects/universalOtt.html">
            <div class="card">
                <div class="card-img"><img src="src/asset/images/card-images/universalOtt-card.png" alt=""></div>
                <div class="info-card-context">
                    <div class="card-content">
                        <h3>Universal OTT</h3>
                        <h4>6th February 2024</h4>
                    </div>
                    <div class="card-details">
                        <div class="card-info">
                            <p>Case Study</p>
                            <p>User Experience</p>
                        </div>
                        <div class="card-link">
                            <button><a href="/MyPortfolio/src/projects/universalOtt.html">View Project</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>
    <div class="card-out">
        <a href="/MyPortfolio/src/projects/signal.html">
            <div class="card">
                <div class="card-img"><img src="src/asset/images/card-images/signal-card.png" alt=""></div>
                <div class="info-card-context">
                    <div class="card-content">
                        <h3>Sginal</h3>
                        <h4>17th January 2022</h4>
                    </div>
                    <div class="card-details">
                        <div class="card-info">
                            <p>Case Study</p>
                            <p>User Experience</p>
                        </div>
                        <div class="card-link">
                            <button><a href="/MyPortfolio/src/projects/signal.html">View Project</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>
    <div class="card-out">
        <a href="/MyPortfolio/src/projects/coherence.html">
            <div class="card">
                <div class="card-img"><img src="src/asset/images/card-images/coherence-card.png" alt=""></div>
                <div class="info-card-context">
                    <div class="card-content">
                        <h3>Coherence</h3>
                        <h4>31st December 2021</h4>
                    </div>
                    <div class="card-details">
                        <div class="card-info">
                            <p>Case Study</p>
                            <p>User Experience</p>
                        </div>
                        <div class="card-link">
                            <button><a href="/MyPortfolio/src/projects/coherence.html">View Project</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>
    <div class="card-out">
        <a href="/MyPortfolio/src/projects/aer.html">
            <div class="card">
                <div class="card-img"><img src="src/asset/images/card-images/aer-card-updated.png" alt=""></div>
                <div class="info-card-context">
                    <div class="card-content">
                        <h3>AER</h3>
                        <h4>31st March 2019</h4>
                    </div>
                    <div class="card-details">
                        <div class="card-info">
                            <p>Case Study</p>
                            <p>User Experience</p>
                        </div>
                        <div class="card-link">
                            <button><a href="/MyPortfolio/src/projects/aer.html">View Project</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>
    <div class="card-out">
        <a href="/MyPortfolio/src/projects/hamsak.html">
            <div class="card">
                <div class="card-img"><img src="src/asset/images/card-images/hamsak-card.png" alt=""></div>
                <div class="info-card-context">
                    <div class="card-content">
                        <h3>Hamsak</h3>
                        <h4>17th January 2022</h4>
                    </div>
                    <div class="card-details">
                        <div class="card-info">
                            <p>Case Study</p>
                            <p>User Experience</p>
                        </div>
                        <div class="card-link">
                            <button><a href="/MyPortfolio/src/projects/hamsak.html">View
                                    Project</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>
</div>
`
    }
}

// add this if required in the above code after line 166 to add view more button
//<div class="custom-button-container">
//   <button class="custom-button" id="view-more-btn"><a>View More Projects</a></button>
//</div>
// home page view more button under projects
// class customButtons extends HTMLElement {
//     connectedCallback() {
//         this.innerHTML = `
//         <div class="custom-button-container">
//             <button class="custom-button"><a href="#">View More Projects</a></button>
//         </div>
//         `
//     }
// }
class customBackButtons extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="custom-button-container back-button">
            <button class="custom-button"><a href="/MyPortfolio/index.html#projects">Back to Projects</a></button>
        </div>
        `
    }
}
class footerCustom extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <section class="contactme" id="contact">
                <h2>Contact me</h2>
                <p>contact me at <a href="mailto:kritinvenugopal@gmail.com">kritinvenugopal@gmail.com</a></p>
                <div class="social">
                <a href="https://www.behance.net/KritinV"><img src="src/asset/images/behance.png" alt="Behance"></a>
                <a href="https://www.behance.net/KritinV"><img src="src/asset/images/linkedin.png" alt="linkedin"></a>
                </div>
            </section>
        </footer>
    `
    }
}
class footerCustomInnerPage extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <section class="contactme" id="contact">
                <h2>Contact me</h2>
                <p>contact me at <a href="mailto:kritinvenugopal@gmail.com">kritinvenugopal@gmail.com</a></p>
                <div class="social">
                    <a href="https://www.behance.net/KritinV"><img src="../asset/images/behance.png" alt="Behance"></a>
                    <a href="https://www.behance.net/KritinV"><img src="../asset/images/linkedin.png" alt="linkedin"></a>
                </div>
            </section>
        </footer>
    `
    }
}
customElements.define('page-navbar', navBar);
customElements.define('inner-page-navbar', navBarInner);
customElements.define('project-cards', projectcards);
// customElements.define('custom-buttons', customButtons);
customElements.define('custom-back-buttons', customBackButtons);
customElements.define('custom-footer', footerCustom);
customElements.define('custom-footer-inner-page', footerCustomInnerPage);
