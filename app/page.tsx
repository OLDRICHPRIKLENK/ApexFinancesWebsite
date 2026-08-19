"use client";

import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-midnight text-text-primary selection:bg-indigo/30 selection:text-indigo-300 relative overflow-hidden font-sans">
      
      {/* Background Dot Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      
      {/* Background Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Header / Navbar */}
      <header className="border-b border-border-subtle/40 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {/* Logo Icon */}
            <div className="w-6 h-6 flex items-center justify-center bg-indigo rounded-sm shadow-md shadow-indigo/20">
              <span className="font-mono text-sm font-bold text-midnight select-none">D</span>
            </div>
            <span className="font-sans font-bold tracking-tight text-lg">
              DataOntologies
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-text-secondary">
            <a href="#features" className="hover:text-text-primary transition-colors">Features</a>
            <a href="#architecture" className="hover:text-text-primary transition-colors">Architecture</a>
            <a href="#download" className="hover:text-text-primary transition-colors">Download</a>
          </nav>

          <div className="flex items-center gap-4">
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-5xl mx-auto px-6 pt-20 pb-16 relative z-10">
        <div className="text-center flex flex-col items-center">

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-text-primary via-text-primary to-text-secondary/70 max-w-3xl mb-4">
            Order from Chaos.
          </h1>

          {/* Monospace Tag / Author */}
          <div className="font-mono text-xs tracking-widest text-text-secondary uppercase mb-8 flex items-center gap-2">
            <span>PLATFORM CORE</span>
            <span className="text-border-subtle">•</span>
            <span className="text-indigo font-bold bg-indigo/10 px-2 py-0.5 rounded border border-indigo/20">By Oldrich Priklenk</span>
          </div>

          {/* 3-Sentence Value Proposition */}
          <p className="text-base md:text-xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
            Consolidate your business ontology into a single, unified master schema within a high-performance OLAP engine. 
            Eliminate complex SQL joins and instantly cross-reference metrics from disparate sources in real time. 
            Ingest and process your data via massive, compute-optimized DataFrame bursts run fully locally or scaled to the cloud.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <a
              href="#download"
              className="px-6 py-3 rounded-md bg-indigo text-midnight font-semibold hover:bg-indigo/90 transition-all duration-300 shadow-lg shadow-indigo/20 flex items-center justify-center gap-2"
            >
              Get Started
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#features"
              className="px-6 py-3 rounded-md bg-charcoal text-text-primary font-semibold hover:bg-slate transition-all duration-300 border border-border-subtle flex items-center justify-center gap-2"
            >
              Explore Architecture
            </a>
          </div>

          {/* Central Control Room Interactive UI Mockup */}
          <div id="architecture" className="w-full rounded-lg border border-border-subtle bg-charcoal/40 p-1 md:p-2 mb-24 shadow-2xl shadow-indigo/5 relative group">
            <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-indigo/20 via-cyan/20 to-indigo/20 opacity-30 blur-sm group-hover:opacity-50 transition duration-1000" />
            <div className="relative rounded-md bg-midnight border border-border-subtle/60 p-4 md:p-6 overflow-hidden">
              
              {/* Mockup Header bar */}
              <div className="flex items-center justify-between pb-4 border-b border-border-subtle/40 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  <span className="font-mono text-xs text-text-secondary ml-4">fact_loader.py</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald" />
                  <span className="font-mono text-xs text-emerald tracking-tight">LOAD_ACTIVE</span>
                </div>
              </div>

              {/* Mockup Code & Status Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-left">
                
                {/* Schema Definition Code */}
                <div className="lg:col-span-2 space-y-4">
                  <div className="bg-charcoal/60 p-4 rounded border border-border-subtle/30 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto max-h-[320px] overflow-y-auto">
                    <div className="text-indigo-400">class <span className="text-text-primary">SnowflakeFactLoader</span>:</div>
                    <div className="pl-4 text-text-secondary">&quot;&quot;&quot;Extracts raw OLAP table data and loads normalized rows into fact_measurements.&quot;&quot;&quot;</div>
                    <br />
                    <div className="pl-4 text-indigo-400">def <span className="text-cyan">__init__</span>(self, duckdb_conn, relational_session):</div>
                    <div className="pl-8 text-text-primary">self.conn = duckdb_conn</div>
                    <div className="pl-8 text-text-primary">self.session = relational_session</div>
                    <br />
                    <div className="pl-4 text-indigo-400">def <span className="text-cyan">load_facts</span>(self, timeline_series_name: str, value_type_names: List[str], date_mappings: Dict[str, str]) -&gt; None:</div>
                    <div className="pl-8 text-text-primary">action_types = self.session.query(ActionType).all()</div>
                    <div className="pl-8 text-text-primary">table_vt_mappings = self._get_value_type_mappings()</div>
                    <br />
                    <div className="pl-8 text-text-primary">{"measures_cols_list = \", \".join(f'\"measure_{vt}\"' for vt in value_type_names)"}</div>
                    <br />
                    <div className="pl-8 text-indigo-400">for <span className="text-text-primary">at</span> in action_types:</div>
                    <div className="pl-12 text-indigo-400">if <span className="text-text-primary">at.table_name not in date_mappings</span>:</div>
                    <div className="pl-16 text-text-primary">continue</div>
                    <br />
                    <div className="pl-12 text-text-primary">date_col = date_mappings[at.table_name]</div>
                    <div className="pl-12 text-text-primary">{"measures_sql = self._build_measure_projections(at.table_name, value_type_names, table_vt_mappings)"}</div>
                    <br />
                    <div className="pl-12 text-indigo-400">if <span className="text-text-primary">at.source == &apos;column&apos;</span>:</div>
                    <div className="pl-16 text-text-primary">self._sync_dynamic_column_dimensions(at)</div>
                    <div className="pl-16 text-text-primary">{"join_clause = f\"\"\""}</div>
                    <div className="pl-16 text-text-primary">{"JOIN dim_action_type AS da "}</div>
                    <div className="pl-16 text-text-primary">{"  ON da.name = raw.\"{at.column_keyword}\""}</div>
                    <div className="pl-16 text-text-primary">{"\"\"\""}</div>
                  </div>
                </div>

                {/* System Metrics Panel */}
                <div className="bg-charcoal/60 p-4 rounded border border-border-subtle/30 flex flex-col justify-between font-mono">
                  <div>
                    <div className="text-xs text-text-secondary uppercase tracking-widest mb-4">Master OLAP Table</div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-xs border-b border-border-subtle/20 pb-1.5">
                        <span className="text-text-secondary">Table Dimensions</span>
                        <span className="text-text-primary">24 Columns</span>
                      </div>
                      <div className="flex justify-between text-xs border-b border-border-subtle/20 pb-1.5">
                        <span className="text-text-secondary">Snowflake Levels</span>
                        <span className="text-text-primary">4-Tier Tree</span>
                      </div>
                      <div className="flex justify-between text-xs pb-1">
                        <span className="text-text-secondary">Compute Mode</span>
                        <span className="text-indigo font-semibold">LOCAL_VECTOR</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-border-subtle/30">
                    <div className="text-[10px] text-text-secondary mb-1">DATA FLOW PIPELINE</div>
                    <div className="h-1.5 w-full bg-slate rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-gradient-to-r from-indigo to-cyan rounded-full animate-pulse" />
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Features Bento Grid Section */}
          <section id="features" className="w-full text-left mb-24">
            <div className="mb-12">
              <h2 className="text-3xl font-extrabold tracking-tight mb-3">Beta Version Features</h2>
              <p className="text-text-secondary max-w-xl">
                Streamline database complexity with a structural data engine designed for extreme speed and hierarchical modeling.
              </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Feature 1: Ingestion (Span 1) */}
              <div className="glassmorphism rounded-lg p-6 flex flex-col justify-between hover:border-indigo hover:shadow-lg transition-all duration-300 relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan/5 rounded-full blur-2xl group-hover:bg-cyan/10 transition-colors" />
                <div>
                  {/* Icon */}
                  <div className="w-8 h-8 rounded bg-cyan/10 border border-cyan/20 flex items-center justify-center text-cyan mb-5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">High-Performance Ingestion</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    Extract data from narrow source tables and load it into your wide master table via massive, compute-optimized DataFrame bursts. Run it fully locally for offline speed, or scale it dynamically to cloud clusters.
                  </p>
                </div>
                {/* Technical Meta info */}
                <div className="font-mono text-[10px] text-cyan/70 space-y-1.5 pt-4 border-t border-border-subtle/20">
                  <div className="flex justify-between">
                    <span>[CACHE_MODE]</span>
                    <span className="font-bold">LOCAL_PARQUET</span>
                  </div>
                  <div className="flex justify-between">
                    <span>[FORMAT_EXPORT]</span>
                    <span className="font-bold">CSV, EXCEL, PARQUET</span>
                  </div>
                </div>
              </div>

              {/* Feature 2: Ontology (Span 1) */}
              <div className="glassmorphism rounded-lg p-6 flex flex-col justify-between hover:border-indigo hover:shadow-lg transition-all duration-300 relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-indigo/5 rounded-full blur-2xl group-hover:bg-indigo/10 transition-colors" />
                <div>
                  {/* Icon */}
                  <div className="w-8 h-8 rounded bg-indigo/10 border border-indigo/20 flex items-center justify-center text-indigo mb-5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Ontology Management</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    Map and define complex hierarchical relationships across your existing databases. Merge disparate, chaotic data silos into a single, cohesive snowflake schema that functions as the definitive source of truth.
                  </p>
                </div>
                {/* Technical Meta info */}
                <div className="font-mono text-[10px] text-indigo/70 space-y-1.5 pt-4 border-t border-border-subtle/20">
                  <div className="flex justify-between">
                    <span>[SCHEMA_MODEL]</span>
                    <span className="font-bold">UNIVERSAL_SNOWFLAKE</span>
                  </div>
                  <div className="flex justify-between">
                    <span>[RELATIONS]</span>
                    <span className="font-bold">HIERARCHICAL_TREE</span>
                  </div>
                </div>
              </div>

              {/* Feature 3: Analysis (Span 1) */}
              <div className="glassmorphism rounded-lg p-6 flex flex-col justify-between hover:border-indigo hover:shadow-lg transition-all duration-300 relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald/5 rounded-full blur-2xl group-hover:bg-emerald/10 transition-colors" />
                <div>
                  {/* Icon */}
                  <div className="w-8 h-8 rounded bg-emerald/10 border border-emerald/20 flex items-center justify-center text-emerald mb-5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Multidimensional Analysis</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    Build custom, virtual data cubes directly on top of your ontology. Slice, dice, and pivot complex metrics effortlessly in real time, backed by mature computational Python frameworks and standard statistical operators.
                  </p>
                </div>
                {/* Technical Meta info */}
                <div className="font-mono text-[10px] text-emerald/70 space-y-1.5 pt-4 border-t border-border-subtle/20">
                  <div className="flex justify-between">
                    <span>[OPERATORS]</span>
                    <span className="font-bold">standard suite of data analysis</span>
                  </div>
                  <div className="flex justify-between">
                    <span>[FRAMEWORK]</span>
                    <span className="font-bold">olap cube compute - PygWalker based</span>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Download & Call to Action Section */}
          <section id="download" className="w-full glassmorphism rounded-xl p-8 md:p-12 text-center mb-24 border border-border-subtle relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo/5 to-transparent pointer-events-none" />
            <h2 className="text-3xl font-extrabold tracking-tight mb-4">Deploy the Data Engine</h2>
            <p className="text-text-secondary max-w-xl mx-auto mb-8 text-sm md:text-base">
              Run the platform locally on your machine for zero-latency, secure data processing, or export schemas instantly to your production databases.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* macOS Download Button */}
              <a
                href="#download"
                className="w-full sm:w-auto px-8 py-3.5 rounded bg-indigo text-midnight font-bold tracking-tight hover:bg-indigo/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-250 flex items-center justify-center gap-3 shadow-lg shadow-indigo/20"
              >
                {/* Apple SVG Icon */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.83-.98 2.94 1.07.08 2.15-.52 2.81-1.33z" />
                </svg>
                Download for macOS
              </a>

              {/* Windows Download Button */}
              <a
                href="#download"
                className="w-full sm:w-auto px-8 py-3.5 rounded bg-indigo text-midnight font-bold tracking-tight hover:bg-indigo/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-250 flex items-center justify-center gap-3 shadow-lg shadow-indigo/20"
              >
                {/* Windows SVG Icon */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M0 3.449L9.75 2.1v9.45H0V3.449zM0 12.45h9.75v9.45L0 20.551v-8.101zm10.75-10.589L24 0v11.55H10.75V1.861zM10.75 12.45H24v9.689l-13.25-1.83V12.45z" />
                </svg>
                Download for Windows
              </a>
            </div>

            {/* Monospace shell prompt command */}
            <div className="mt-8 max-w-md mx-auto bg-charcoal/80 rounded border border-border-subtle/50 p-3 flex items-center justify-between font-mono text-[11px] text-text-secondary">
              <span className="text-left select-all overflow-x-auto whitespace-nowrap pr-2">
                curl -sSL https://dataontologies.io/install.sh | sh
              </span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText("curl -sSL https://dataontologies.io/install.sh | sh");
                }}
                className="text-indigo hover:text-indigo/80 select-none font-bold uppercase shrink-0 transition-colors"
              >
                COPY
              </button>
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border-subtle/30 py-8 relative z-10 bg-midnight mt-auto">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-sans font-bold text-sm">DataOntologies</span>
            <span className="font-mono text-xs text-text-secondary">By Oldrich Priklenk</span>
          </div>
          <div className="text-xs text-text-secondary">
            © {new Date().getFullYear()} DataOntologies. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
