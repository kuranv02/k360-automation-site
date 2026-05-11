import React from "react";

const productLines = [
  {
    title: "Flow Measurement",
    icon: "◌",
    copy: "Magnetic, ultrasonic, vortex, thermal mass, DP, and process measurement solutions for field-proven oil & gas applications."
  },
  {
    title: "Pressure Instrumentation",
    icon: "◷",
    copy: "Pressure gauges, transmitters, switches, diaphragm seals, thermowells, and engineered field assemblies."
  },
  {
    title: "Level Measurement",
    icon: "▥",
    copy: "Radar, guided wave radar, ultrasonic, displacer, interface level, and point level technologies."
  },
  {
    title: "Temperature",
    icon: "℃",
    copy: "RTDs, thermocouples, thermowells, temperature transmitters, and custom temperature assemblies."
  },
  {
    title: "Control Valves",
    icon: "◈",
    copy: "Control valves, automated valves, actuators, accessories, and application-specific valve packages."
  },
  {
    title: "Process Control",
    icon: "▦",
    copy: "Automation hardware, measurement packages, panels, analyzers, and PLC/DCS field integration support."
  }
];

const manufacturers = [
  "Tektrol",
  "Reotemp",
  "Proflo Valves",
  "Campbell Automation & Measurement"
];

const applications = [
  "Separator instrumentation",
  "SWD and produced water",
  "Compressor stations",
  "Gas processing plants",
  "LACT and measurement skids",
  "Pipeline pressure and flow",
  "Tank level and overfill",
  "Control valve replacement"
];

const differentiators = [
  {
    title: "Application-first support",
    copy: "We start with the process conditions, install constraints, accuracy needs, approvals, and maintenance realities before recommending equipment."
  },
  {
    title: "Oklahoma field coverage",
    copy: "Local support for operators, engineers, integrators, and maintenance teams across Oklahoma oil & gas and industrial process facilities."
  },
  {
    title: "Practical replacement help",
    copy: "Send an existing model number, photo, datasheet, or process issue. We help identify a practical replacement path without overcomplicating it."
  }
];

function Button({ children, outline = false }: { children: React.ReactNode; outline?: boolean }) {
  return (
    <a
      href="#contact"
      className={
        outline
          ? "inline-flex rounded-2xl border border-slate-300 bg-white px-7 py-4 text-base font-semibold text-slate-900 shadow-sm transition hover:border-orange-500 hover:text-orange-700"
          : "inline-flex rounded-2xl bg-orange-600 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-500"
      }
    >
      {children}
    </a>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-3xl border border-slate-200 bg-white shadow-sm ${className}`}>{children}</div>;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-600 text-xl font-black text-white shadow-lg shadow-orange-200">
              K
            </div>
            <div>
              <div className="text-xl font-bold tracking-tight">K360 Automation</div>
              <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Oklahoma Instrumentation • Automation • Control</div>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#solutions" className="hover:text-orange-700">Solutions</a>
            <a href="#manufacturers" className="hover:text-orange-700">Manufacturers</a>
            <a href="#applications" className="hover:text-orange-700">Applications</a>
            <a href="#contact" className="hover:text-orange-700">Contact</a>
          </nav>
          <div className="hidden md:block">
            <Button>Request Support</Button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-slate-200 bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.18),transparent_35%),radial-gradient(circle_at_left,rgba(185,28,28,0.12),transparent_30%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-800">
                Oklahoma manufacturers&apos; representative for industrial process instrumentation
              </div>
              <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-slate-950 md:text-7xl">
                Automation support built for Oklahoma oil & gas.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                K360 represents proven manufacturers across flow, pressure, level, temperature, control valves, automation, and measurement — helping operators and engineers select equipment that works in the field, not just on paper.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button>Talk Through an Application →</Button>
                <Button outline>View Product Areas</Button>
              </div>
            </div>

            <Card className="rounded-[2rem] border-orange-100 bg-white/95 shadow-2xl shadow-orange-100">
              <div className="p-7">
                <div className="rounded-[1.5rem] border border-slate-200 bg-stone-50 p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-slate-500">Typical support areas</div>
                      <div className="text-2xl font-bold text-slate-950">From spec to startup</div>
                    </div>
                    <div className="text-4xl text-orange-600">✓</div>
                  </div>
                  <div className="space-y-4">
                    {[
                      "New project specification",
                      "Replacement and crossover support",
                      "Control valve sizing guidance",
                      "Hazardous-area instrumentation",
                      "Measurement troubleshooting",
                      "Lead-time and budgetary quotes"
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700">
                        <div className="h-2 w-2 rounded-full bg-orange-600" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section id="manufacturers" className="mx-auto max-w-7xl px-6 py-14">
          <div className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-orange-700">Initial Manufacturer Line Card</div>
          <div className="grid gap-4 md:grid-cols-4">
            {manufacturers.map((name) => (
              <div key={name} className="rounded-3xl border border-slate-200 bg-white p-6 text-center text-lg font-bold text-slate-800 shadow-sm">
                {name}
              </div>
            ))}
          </div>
        </section>

        <section id="solutions" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 max-w-3xl">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-orange-700">Product Lines</div>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Instrumentation and control solutions built around the application.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Whether you are replacing a failed field device, building a new skid, or standardizing across facilities, K360 helps narrow the options quickly and technically.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {productLines.map((line) => (
              <Card key={line.title} className="transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100">
                <div className="p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-2xl text-orange-700">
                    {line.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-950">{line.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{line.copy}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="applications" className="border-y border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-orange-700">Applications We Support</div>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Focused on Oklahoma oil & gas. Capable across industrial process.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                We understand the difference between a datasheet match and a solution that survives Oklahoma field conditions: wet gas, produced water, pressure swings, corrosive fluids, vibration, solids, and tight maintenance windows.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {applications.map((item) => (
                <div key={item} className="rounded-3xl border border-slate-200 bg-stone-50 p-5 text-lg font-semibold text-slate-800">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-5 lg:grid-cols-3">
            {differentiators.map((item) => (
              <Card key={item.title}>
                <div className="p-7">
                  <div className="mb-5 text-3xl text-orange-600">⚙</div>
                  <h3 className="text-2xl font-bold text-slate-950">{item.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{item.copy}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20">
          <div className="rounded-[2rem] border border-orange-200 bg-orange-50 p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <div className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-orange-700">Oklahoma Territory</div>
                <h2 className="text-4xl font-bold tracking-tight">Local coverage for operators, engineers, and integrators.</h2>
                <p className="mt-4 text-lg leading-8 text-slate-700">
                  K360 is positioned to support Oklahoma production, midstream, processing, SWD, and industrial facilities with practical equipment recommendations and responsive field-focused support.
                </p>
              </div>
              <div className="rounded-3xl border border-orange-200 bg-white p-8 shadow-sm">
                <div className="text-center text-7xl font-black tracking-tight text-orange-600">OK</div>
                <div className="mt-3 text-center text-lg font-semibold text-slate-700">Oklahoma Territory</div>
                <div className="mt-6 grid grid-cols-2 gap-3 text-sm font-medium text-slate-600">
                  <div className="rounded-2xl bg-stone-50 p-3 text-center">Upstream</div>
                  <div className="rounded-2xl bg-stone-50 p-3 text-center">Midstream</div>
                  <div className="rounded-2xl bg-stone-50 p-3 text-center">Processing</div>
                  <div className="rounded-2xl bg-stone-50 p-3 text-center">Industrial</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-24">
          <div className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60 md:p-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-orange-700">Request Support</div>
              <h2 className="text-4xl font-bold tracking-tight">Need help selecting or replacing instrumentation?</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Send process conditions, an existing model number, datasheet, photo, or application details. K360 will help identify a practical path forward.
              </p>
              <div className="mt-8 space-y-3 text-slate-700">
                <a href="mailto:sales@k360automation.com" className="block font-semibold text-orange-700">sales@k360automation.com</a>
                <div className="font-semibold">405-000-0000</div>
              </div>
            </div>
            <form action="mailto:sales@k360automation.com" method="post" encType="text/plain" className="rounded-3xl border border-slate-200 bg-stone-50 p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="rounded-2xl border border-slate-200 bg-white p-4 text-slate-900 outline-none focus:border-orange-500" name="name" placeholder="Name" />
                <input className="rounded-2xl border border-slate-200 bg-white p-4 text-slate-900 outline-none focus:border-orange-500" name="company" placeholder="Company" />
                <input className="rounded-2xl border border-slate-200 bg-white p-4 text-slate-900 outline-none focus:border-orange-500" name="email" placeholder="Email" />
                <input className="rounded-2xl border border-slate-200 bg-white p-4 text-slate-900 outline-none focus:border-orange-500" name="phone" placeholder="Phone" />
                <textarea className="min-h-32 rounded-2xl border border-slate-200 bg-white p-4 text-slate-900 outline-none focus:border-orange-500 sm:col-span-2" name="message" placeholder="Application / model number / process conditions" />
              </div>
              <div className="mt-5"><button className="rounded-2xl bg-orange-600 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-500">Submit Request</button></div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-6 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} K360 Automation. Oklahoma industrial instrumentation, automation, valve, and process control representation.
      </footer>
    </div>
  );
}
