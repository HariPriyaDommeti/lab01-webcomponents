import "./components/app-header.js";
import "./components/user-card.js";
import "./components/stats-panel.js";
import "./components/app-footer.js";

const app = document.querySelector("#app");

const page = document.createElement("div");
page.className = "page";

const header = document.createElement("app-header");
header.setAttribute("title", "TeamSpace");
header.setAttribute("subtitle", "Web Components Dashboard");
page.appendChild(header);

const main = document.createElement("main");
main.className = "main-layout";

const usersSection = document.createElement("section");
usersSection.className = "users-section";
usersSection.setAttribute("aria-labelledby", "team-heading");

usersSection.innerHTML = `
  <div class="section-heading">
    <div>
      <p class="eyebrow">TEAM DIRECTORY</p>
      <h1 id="team-heading">Meet the team</h1>
      <p class="section-description">
        Reusable user cards demonstrate attributes, encapsulation and cohesive component design.
      </p>
    </div>
    <span class="member-count">4 members</span>
  </div>
`;

const users = [
  {
    name: "Ava Johnson",
    role: "Product Designer",
    department: "Design",
    initials: "AJ",
    status: "Available"
  },
  {
    name: "Noah Williams",
    role: "Frontend Developer",
    department: "Engineering",
    initials: "NW",
    status: "In a meeting"
  },
  {
    name: "Mia Patel",
    role: "Data Analyst",
    department: "Analytics",
    initials: "MP",
    status: "Available"
  },
  {
    name: "Liam Garcia",
    role: "Project Manager",
    department: "Product",
    initials: "LG",
    status: "Away"
  }
];

const cards = document.createElement("div");
cards.className = "user-grid";

users.forEach(user => {
  const card = document.createElement("user-card");
  Object.entries(user).forEach(([key, value]) => card.setAttribute(key, value));
  cards.appendChild(card);
});

usersSection.appendChild(cards);

const detailsSection = document.createElement("section");
detailsSection.className = "details-section";
detailsSection.setAttribute("aria-labelledby", "details-heading");
detailsSection.innerHTML = `
  <div class="section-heading compact">
    <div>
      <p class="eyebrow">OVERVIEW</p>
      <h2 id="details-heading">Workspace details</h2>
    </div>
  </div>
`;

const stats = document.createElement("stats-panel");
stats.setAttribute("projects", "12");
stats.setAttribute("tasks", "48");
stats.setAttribute("completion", "86");
detailsSection.appendChild(stats);

const tip = document.createElement("aside");
tip.className = "design-note";
tip.innerHTML = `
  <div class="tip-icon" aria-hidden="true">✦</div>
  <div>
    <strong>Component-first design</strong>
    <p>Each element owns one clear responsibility, keeping cohesion high and coupling low.</p>
  </div>
`;
detailsSection.appendChild(tip);

main.append(usersSection, detailsSection);

const footer = document.createElement("app-footer");
footer.setAttribute("email", "team@teamspace.example");
footer.setAttribute("year", new Date().getFullYear());
page.appendChild(main);
page.appendChild(footer);

app.appendChild(page);
