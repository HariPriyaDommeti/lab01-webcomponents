class StatsPanel extends HTMLElement {
  static get observedAttributes() {
    return ["projects", "tasks", "completion"];
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
    const projects = this.getAttribute("projects") || "0";
    const tasks = this.getAttribute("tasks") || "0";
    const completion = this.getAttribute("completion") || "0";

    this.shadowRoot.innerHTML = `
      <style>
        :host { display:block; }
        .panel {
          display:grid; gap:0;
          border:1px solid #e4e8f0; border-radius:18px;
          background:#fff; overflow:hidden;
          box-shadow:0 8px 26px rgba(20,32,56,.06);
        }
        .row {
          display:grid; grid-template-columns:1fr auto;
          gap:16px; padding:18px 20px;
          border-bottom:1px solid #eef1f5;
          font-family:system-ui,sans-serif;
        }
        .row:last-child { border-bottom:0; }
        .label { color:#667085; font-size:13px; font-weight:600; }
        .value { color:#172033; font-size:16px; font-weight:800; }
        .progress { margin-top:7px; width:150px; height:7px; background:#eef0f5; border-radius:99px; overflow:hidden; }
        .bar { height:100%; width:${Math.min(100, Math.max(0, Number(completion)))}%; background:#6d5dfc; border-radius:inherit; }
        .completion { display:flex; align-items:center; gap:12px; }
      </style>
      <div class="panel" aria-label="Workspace statistics">
        <div class="row"><span class="label">Active projects</span><span class="value">${projects}</span></div>
        <div class="row"><span class="label">Open tasks</span><span class="value">${tasks}</span></div>
        <div class="row">
          <span>
            <span class="label">Overall completion</span>
            <span class="progress"><span class="bar"></span></span>
          </span>
          <span class="value">${completion}%</span>
        </div>
      </div>
    `;
  }
}

customElements.define("stats-panel", StatsPanel);
