"use client";

const projects = [
  {
    name: "Gas Processing Facility — Central Gas Plant",
    client: "Oil & Gas Client",
    location: "Pakistan",
    scope: "EPCC for central gas processing facility including gas sweetening, dehydration, and associated civil, mechanical, piping & E&I. Construction and commissioning.",
    budget: "USD 8.5 M",
    duration: "18 months",
    year: "2024",
    status: "Completed",
  },
  {
    name: "Cross-Country Gas Pipeline — Phase II",
    client: "Upstream Operator",
    location: "Pakistan",
    scope: "Construction and commissioning of cross-country gas pipeline, cathodic protection, tie-ins, and metering station. Full EPCC scope.",
    budget: "USD 12.2 M",
    duration: "24 months",
    year: "2023",
    status: "Completed",
  },
  {
    name: "LPG Bullets & Storage Terminal",
    client: "Petrochemicals Client",
    location: "Pakistan",
    scope: "Fabrication and installation of LPG bullets, storage tanks, loading bay, and E&I. QA/QC and commissioning.",
    budget: "USD 4.8 M",
    duration: "12 months",
    year: "2024",
    status: "Completed",
  },
  {
    name: "Wellhead to Sales Point — Field Development",
    client: "E&P Operator",
    location: "Pakistan",
    scope: "Civil, mechanical, piping and E&I from wellheads to hydrocarbon sales point. Gas conditioning and compression.",
    budget: "USD 6.0 M",
    duration: "14 months",
    year: "2023",
    status: "Completed",
  },
  {
    name: "Fertilizer Plant — Revamp & Commissioning",
    client: "Fertilizer Client",
    location: "Pakistan",
    scope: "Brownfield revamp, mechanical erection, piping, E&I and commissioning support for fertilizer facility.",
    budget: "USD 3.2 M",
    duration: "10 months",
    year: "2024",
    status: "Completed",
  },
];

export default function ProjectsDelivered() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1320px] mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-[40px] font-montserrat font-bold tracking-[4px]">
            <span className="text-blue">PROJECTS </span>
            <span className="text-green">SUCCESSFULLY DELIVERED</span>
          </h2>
          <div className="flex justify-center mt-4">
            <div className="h-0.5 w-[100px] bg-blue" />
          </div>
          <div className="flex justify-center mt-1.5">
            <div className="h-0.5 w-[40px] bg-green" />
          </div>
          <p className="text-[#6b6b6b] font-roboto text-sm max-w-[720px] mx-auto mt-5 leading-6">
            Select EPCC and construction projects delivered by JES with full scope, budget and timeline details.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <article
              key={index}
              className="bg-[#FBFBFB] border border-[#e5e5e5] rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:border-green/30 transition-all"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-montserrat font-bold text-[#333] text-[18px] tracking-[1px] mb-1">
                      {project.name}
                    </h3>
                    <p className="font-roboto text-[14px] text-[#555]">
                      {project.client} · {project.location}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-block bg-green/10 text-green font-roboto font-semibold text-[13px] px-3 py-1.5 rounded">
                      {project.status}
                    </span>
                    <span className="inline-block bg-blue/10 text-blue font-roboto font-semibold text-[13px] px-3 py-1.5 rounded">
                      {project.year}
                    </span>
                  </div>
                </div>
                <p className="font-roboto text-[14px] text-[#555] leading-[1.7] mb-5">
                  {project.scope}
                </p>
                <div className="flex flex-wrap gap-6 pt-4 border-t border-[#eee]">
                  <div>
                    <span className="font-roboto text-[12px] text-[#888] uppercase tracking-wider">Budget</span>
                    <p className="font-montserrat font-bold text-[#333] text-[16px]">{project.budget}</p>
                  </div>
                  <div>
                    <span className="font-roboto text-[12px] text-[#888] uppercase tracking-wider">Duration</span>
                    <p className="font-montserrat font-semibold text-[#333] text-[15px]">{project.duration}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
