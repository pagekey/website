// Source: https://github.com/JuanM04/portfolio/blob/983b0ed0eabdac37bf8b7912d3e8128a443192b9/src/plugins/mermaid.ts
// From this comment: https://github.com/withastro/astro/issues/4433#issuecomment-1584019991
import type { RemarkPlugin } from "@astrojs/markdown-remark"
import { visit } from "unist-util-visit"

const escapeMap: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
}

const escapeHtml = (str: string) => str.replace(/[&<>"']/g, c => escapeMap[c])

export const mermaid: RemarkPlugin<[]> = () => tree => {
  visit(tree, "code", node => {
    if (node.lang !== "mermaid") return

    // @ts-ignore
    node.type = "html"
    node.value = `
      <div class="mermaid">
        <p>Loading graph...</p>
        <pre class="mermaid-src">${escapeHtml(node.value)}</pre>
        </div>
    `
  })
}
