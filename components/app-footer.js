class AppFooter extends HTMLElement {
  static get observedAttributes() {
    return ["email", "year"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    if (this.shadowRoot) this.render();
  }

  render() {
    const email = this.getAttribute("email") || "hello@example.com";
    const year = this.getAttribute("year") || new Date().getFullYear();

    this.shadowRoot.innerHTML = `
      <style>
        :host { display:block; }
        footer {
          min-height:70px; box-sizing:border-box;
          display:flex; align-items:center; justify-content:space-between;
          gap:20px; padding:0 32px;
          color:#667085; background:#fff;
          border-top:1px solid #e4e8f0;
          font:500 12px/1.4 system-ui,sans-serif;
        }
        a { color:#5548d8; text-decoration:none; font-weight:700; }
        a:hover { text-decoration:underline; }
        @media (max-width:600px) {
          footer { padding:0 18px; flex-direction:column; justify-content:center; gap:4px; }
        }
      </style>
      <footer>
        <span>© ${year} TeamSpace • Built with Web Components</span>
        <a href="mailto:${email}">${email}</a>
      </footer>
    `;
  }
}

customElements.define("app-footer", AppFooter);
