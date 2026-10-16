// Loads data/database.csv and renders a searchable list of journals and their AI policies.
// CSV columns: journal, policies, policy_links, description
// Multiple policies in one cell are separated by " | " (same order in both columns).
const CSV_PATH = "data/database.csv";
const SEP = " | ";

let rows = [];
const $ = (id) => document.getElementById(id);

Papa.parse(CSV_PATH, {
  download: true,
  header: true,
  skipEmptyLines: true,
  complete: (result) => {
    rows = result.data.map((r) => {
      const names = (r.policies || "").split(SEP);
      const urls = (r.policy_links || "").split(SEP);
      return {
        journal: r.journal || "",
        description: r.description || "",
        links: urls.filter(Boolean).map((u, i) => ({ url: u, name: names[i] || u })),
      };
    }).sort((a, b) => a.journal.localeCompare(b.journal));
    render();
  },
  error: (err) => { $("count").textContent = "Could not load data: " + err.message; }
});

function render() {
  const q = $("search").value.trim().toLowerCase();
  const shown = q
    ? rows.filter((r) => [r.journal, r.description, ...r.links.map((l) => l.name)]
        .join(" ").toLowerCase().includes(q))
    : rows;

  $("table").tBodies[0].replaceChildren(...shown.map((r) => {
    const tr = document.createElement("tr");

    const tdJ = document.createElement("td");
    tdJ.className = "journal";
    tdJ.textContent = r.journal;

    const tdP = document.createElement("td");
    const ul = document.createElement("ul");
    r.links.forEach((l) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = l.url;
      a.textContent = l.name;
      a.target = "_blank";
      a.rel = "noopener";
      li.appendChild(a);
      ul.appendChild(li);
    });
    tdP.appendChild(ul);
    if (r.description) {
      const p = document.createElement("p");
      p.className = "desc";
      p.textContent = r.description;
      tdP.appendChild(p);
    }

    tr.append(tdJ, tdP);
    return tr;
  }));

  $("count").textContent = q
    ? `${shown.length} of ${rows.length} journals`
    : `${rows.length} journals`;
}

$("search").addEventListener("input", render);

$("copy-cite").addEventListener("click", async () => {
  const text = $("citation").innerText.replace(/\s+/g, " ").trim();
  try {
    await navigator.clipboard.writeText(text);
    $("copy-cite").textContent = "Copied";
  } catch {
    $("copy-cite").textContent = "Select the text above to copy";
  }
  setTimeout(() => { $("copy-cite").textContent = "Copy citation"; }, 2000);
});
