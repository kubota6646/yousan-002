/* =========================================================
   ✏️  ここを編集してサイトをカスタマイズしてください
   ========================================================= */

const SKILLS = [
  { name: "JavaScript", color: "#f7df1e" },
  { name: "TypeScript",  color: "#3178c6" },
  { name: "Python",      color: "#3572a5" },
  { name: "AWS",         color: "#ff9900" },
  { name: "AWS Amplify", color: "#ff9900" },
  { name: "Node.js",     color: "#3fb950" },
  { name: "Docker",      color: "#2496ed" },
  { name: "Terraform",   color: "#7b42bc" },
  { name: "GitHub",      color: "#8b949e" },
  { name: "CI/CD",       color: "#58a6ff" },
];

const WORKS = [
  {
    title: "🚀 My Portfolio Site",
    desc:  "AWS Amplify でホストしている個人サイト。HTML/CSS/JS のみで構築。",
    tags:  ["HTML", "CSS", "AWS Amplify"],
    link:  "https://github.com/kubota6646",
  },
  {
    title: "⚙️ Sample App",
    desc:  "サンプルアプリケーションの説明をここに書いてください。",
    tags:  ["Python", "AWS Lambda", "DynamoDB"],
    link:  "https://github.com/kubota6646",
  },
  {
    title: "📦 OSS Contribution",
    desc:  "オープンソースへのコントリビュートをここに紹介できます。",
    tags:  ["TypeScript", "Node.js"],
    link:  "https://github.com/kubota6646",
  },
];

/* =========================================================
   描画ロジック（基本的に変更不要）
   ========================================================= */

// ── スキルバッジ
const skillsGrid = document.getElementById("skillsGrid");
SKILLS.forEach(skill => {
  const el = document.createElement("span");
  el.className = "skill-badge";
  el.innerHTML = `<span class="dot" style="background:${skill.color}"></span>${skill.name}`;
  skillsGrid.appendChild(el);
});

// ── 作品カード
const worksGrid = document.getElementById("worksGrid");
WORKS.forEach(work => {
  const tagsHtml = work.tags.map(t => `<span class="card-tag">${t}</span>`).join("");
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <div class="card-title">${work.title}</div>
    <div class="card-desc">${work.desc}</div>
    <div class="card-tags">${tagsHtml}</div>
    <a class="card-link" href="${work.link}" target="_blank" rel="noopener">→ 見る</a>
  `;
  worksGrid.appendChild(card);
});

// ── フェードイン アニメーション
const observer = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = "1";
      e.target.style.transform = "translateY(0)";
    }
  }),
  { threshold: 0.1 }
);

document.querySelectorAll(".section").forEach(sec => {
  sec.style.opacity    = "0";
  sec.style.transform  = "translateY(24px)";
  sec.style.transition = "opacity .5s ease, transform .5s ease";
  observer.observe(sec);
});
