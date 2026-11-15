# Career e-Portfolio — Erin M. Quiazon

A responsive career e-portfolio built with **Bootstrap 5.3** via CDN, showcasing my projects, experience, and growth as a Computer Engineering student at De La Salle University.

**Live site:** https://student-portfolio-plum.vercel.app

## Tech Stack
- HTML5 (semantic elements)
- Bootstrap 5.3 (CDN — no npm/build step)
- CSS Custom Properties (Bootstrap token overrides, light/dark themes)
- Vanilla JavaScript
- Google Fonts (DM Serif Display + Jost + DM Mono)
- Bootstrap Icons

## Bootstrap 5 Features
1. **Navbar** — `.navbar-expand-lg` with fixed positioning and hamburger collapse
2. **Cards** — Projects, skills, experience, reflections, education, coursework
3. **Modals** — Click project cards for full details with `data-bs-toggle="modal"`
4. **Badges** — Status (Completed/In Progress), tech stack, skill tags
5. **Grid System** — `.container`, `.row`, `.col-*`, `.row-cols-*` throughout
6. **Tooltips** — `data-bs-toggle="tooltip"` on social icons and skill tags

## Pages

### Homepage (`index.html`)
1. Navbar (fixed, responsive, dark mode toggle)
2. Hero (introduction and career goal)
3. Stats (4 quick stats)
4. Clock (live time + greeting)
5. About (bio, core skills, interests, career direction)
6. What I Do (3 focus areas)
7. Projects (4 cards with detail modals)
8. Skills (grouped by category)
9. Experience (leadership roles + volunteer work)
10. Reflections (Lasallian graduate attributes)
11. Education (DLSU + Holy Angel + relevant coursework)
12. Contact (validated form + social links)
13. Footer

### Resume (`resume.html`)
A web version of my resume with print-friendly styling.

## Project Structure
```
├── index.html
├── resume.html
├── css/
│   ├── style.css       # Homepage styles
│   ├── resume.css      # Resume page styles
│   └── normalize.css
├── js/
│   └── main.js         # Clock, greeting, dark mode, form validation
└── assets/
    ├── resume.pdf
    └── images/
```
## Deployment
Deployed on [Vercel](https://vercel.com) via GitHub integration. Every push to the main branch redeploys automatically.

## Author
**Erin M. Quiazon** — BS Computer Engineering, Minor in Financial Risk and Analytics, De La Salle University

[LinkedIn](https://www.linkedin.com/in/erin-quiazon-b76b72370) · [GitHub](https://github.com/erin-kyu)

Originally built for LBYCPG3 (Online Technologies Laboratory); expanded as my Career e-Portfolio for SAS3000.
