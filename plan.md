Build a static Next.js (App Router) website using TypeScript and Tailwind CSS. The design identity is "Order from Chaos," acting as a premium enterprise data control room.  
Initialize the project utilizing npx create-next-app@latest with TypeScript, Tailwind CSS, and ESLint enabled.
Configure next.config.js with output: 'export' and images: { unoptimized: true } to adhere to static website development best practices.
Enforce a global dark mode with heavy whitespace, ensuring a clean, Swiss-Tech aesthetic across all viewports.  

Tailwind Configuration Tokens
Strictly map the brand identity into the tailwind.config.ts theme extension.
Backgrounds & Surfaces: Define midnight: '#0A0F1C', charcoal: '#111827', and slate: '#1E293B'.  

Accents & Typography: Set indigo: '#6366F1', use Inter for sans-serif headings, and JetBrains Mono for technical labels.  

Visuals: Generate custom utilities for restrained glassmorphism (backdrop-blur-md bg-slate/50) to give depth to UI elements.  

Page Structure & Layout
Assemble app/page.tsx sequentially using clean, semantic HTML5 tags.
Header & Hero: Create a minimalist navbar with "DataOntologies". Below it, render a massive, bold headline, followed by a monospace tag "By Oldrich Priklenk", and the 3-sentence value proposition.  

Features Section: Implement a responsive CSS grid using a Bento Box layout (grid-cols-1 md:grid-cols-3) to neatly display Ingestion, Ontology, and Analysis feature cards.  

Download & Footer: Build a centralized CTA section featuring two high-contrast electric indigo buttons for "macOS" and "Windows", capped with a minimalistic footer.  

Interaction & Polish
Ensure the UI feels like a heavy-duty data engine.
Hover States: Apply subtle hover transitions (hover:border-indigo and hover:shadow-lg) to the feature cards to simulate calm intelligence.  

Alignment: Restrict the maximum width of the content (e.g., max-w-5xl mx-auto) so the entire layout snaps perfectly to a unified, mathematical grid.  
