class UserCard extends HTMLElement {
  static get observedAttributes() {
    return ["name", "role", "department", "initials", "status"];
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
    const name = this.getAttribute("name") || "Unnamed user";
    const role = this.getAttribute("role") || "Team member";
    const department = this.getAttribute("department") || "General";
    const initials = this.getAttribute("initials") || name.slice(0, 2).toUpperCase();
    const status = this.getAttribute("status") || "Available";
    const available = status.toLowerCase() === "available";

    this.shadowRoot.innerHTML = `
      <style>
        :host { display:block; }
        article {
          height:100%;
          box-sizing:border-box;
          padding:20px;
          border:1px solid #e4e8f0;
          border-radius:18px;
          background:#fff;
          box-shadow:0 8px 26px rgba(20,32,56,.06);
          transition:transform .2s ease, box-shadow .2s ease;
        }
        article:hover {
          transform:translateY(-3px);
          box-shadow:0 14px 34px rgba(20,32,56,.10);
        }
        .top { display:flex; align-items:center; gap:14px; }
        .avatar {
          width:52px; height:52px; flex:0 0 52px;
          display:grid; place-items:center;
          border-radius:16px;
          background:linear-gradient(135deg,#e9e6ff,#d9f4ff);
          color:#4338a8; font:800 15px system-ui,sans-serif;
        }
        h3 { margin:0; color:#172033; font:750 16px/1.25 system-ui,sans-serif; }
        .role { margin:4px 0 0; color:#667085; font:500 13px/1.4 system-ui,sans-serif; }
        .meta {
          display:flex; align-items:center; justify-content:space-between;
          margin-top:18px; padding-top:15px;
          border-top:1px solid #eef1f5;
        }
        .department { color:#667085; font:600 12px system-ui,sans-serif; }
        .status { display:flex; align-items:center; gap:6px; color:#667085; font:600 11px system-ui,sans-serif; }
        .dot { width:7px; height:7px; border-radius:50%; background:#f59e0b; }
        .dot.available { background:#22c55e; }
      </style>
      <article>
        <div class="top">
          <div class="avatar" aria-hidden="true">${initials}</div>
          <div>
            <h3>${name}</h3>
            <p class="role">${role}</p>
          </div>
        </div>
        <div class="meta">
          <span class="department">${department}</span>
          <span class="status"><i class="dot ${available ? "available" : ""}"></i>${status}</span>
        </div>
      </article>
    `;
  }
}

customElements.define("user-card", UserCard);
