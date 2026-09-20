class AppHeader extends HTMLElement {
  static get observedAttributes() {
    return ["title", "subtitle"];
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
    const title = this.getAttribute("title") || "Application";
    const subtitle = this.getAttribute("subtitle") || "";
    this.shadowRoot.innerHTML = `
      <style>
        :host { display:block; }
        header {
          min-height: 82px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:20px;
          padding:0 32px;
          background:#172033;
          color:white;
        }
        .brand { display:flex; align-items:center; gap:14px; }
        .logo {
          width:42px; height:42px; border-radius:12px;
          display:grid; place-items:center;
          background:#6d5dfc; font-weight:800;
          box-shadow:0 8px 24px rgba(109,93,252,.28);
        }
        h1 { margin:0; font:700 20px/1.2 system-ui,sans-serif; }
        p { margin:4px 0 0; color:#aeb8ca; font:400 13px/1.4 system-ui,sans-serif; }
        .badge {
          border:1px solid #3b465c; color:#dce2ee;
          border-radius:999px; padding:8px 13px;
          font:600 12px system-ui,sans-serif;
        }
        @media (max-width:600px) {
          header { padding:0 18px; }
          .badge { display:none; }
        }
      </style>
      <header>
        <div class="brand">
          <div class="logo" aria-hidden="true">T</div>
          <div>
            <h1>${title}</h1>
            <p>${subtitle}</p>
          </div>
        </div>
        <span class="badge">LAB 01 • UI COMPONENTS</span>
      </header>
    `;
  }
}

customElements.define("app-header", AppHeader);
