"use client";

const NODE =
  "bg-white border-2 border-[#e0e0e0] rounded-lg px-3 py-2.5 text-center font-roboto text-[12px] font-medium text-[#333] shadow-sm hover:border-green hover:shadow transition-all";

const NODE_CEO = "!bg-blue text-white border-blue font-semibold text-[14px]";
const NODE_DIR = "border-blue/40 text-blue font-semibold text-[12px]";
const NODE_GREEN = "ring-2 ring-green ring-offset-1 border-green/40";

export default function Organogram() {
  return (
    <section className="bg-[#FBFBFB] py-20">
      <div className="max-w-[1320px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[40px] font-montserrat font-bold tracking-[4px]">
            <span className="text-blue">ORGANIZATION </span>
            <span className="text-green">STRUCTURE</span>
          </h2>
          <div className="flex justify-center mt-4">
            <div className="h-0.5 w-[100px] bg-blue" />
          </div>
          <div className="flex justify-center mt-1.5">
            <div className="h-0.5 w-[40px] bg-green" />
          </div>
          <p className="text-[#6b6b6b] font-roboto text-sm max-w-[648px] mx-auto mt-5 leading-6">
            JES reporting structure across business development, project delivery, HSE, admin, and finance.
          </p>
        </div>

        <div className="overflow-x-auto pb-6">
          <div className="min-w-[880px] max-w-6xl mx-auto">
            {/* Level 0: MD/CEO */}
            <div className="flex justify-center mb-2">
              <div className={`${NODE} ${NODE_CEO} min-w-[180px]`}>MD/CEO</div>
            </div>
            <div className="flex justify-center mb-0">
              <div className="w-0.5 h-5 bg-[#333]" />
            </div>
            <div className="w-full max-w-4xl mx-auto h-0.5 bg-[#333] mb-0" />
            <div className="flex max-w-4xl mx-auto justify-around px-4 mb-2">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className="w-0.5 h-4 bg-[#333]" />
              ))}
            </div>

            {/* Level 1: Five Directors/Managers */}
            <div className="grid grid-cols-5 gap-3 mb-4">
              <div className={`${NODE} ${NODE_DIR}`}>
                Director (Business development, contracts and commercial)
              </div>
              <div className={`${NODE} ${NODE_DIR}`}>
                Director (Project Delivery)
              </div>
              <div className={`${NODE} ${NODE_DIR} ${NODE_GREEN}`}>
                Director (HSE)
              </div>
              <div className={NODE}>
                Manager (Admin & HR)
              </div>
              <div className={NODE}>
                Manager (Finance, Accounts and Audit)
              </div>
            </div>

            {/* Connectors down to Level 2 */}
            <div className="grid grid-cols-5 gap-3 mb-2">
              <div className="flex justify-center"><div className="w-0.5 h-4 bg-[#333]" /></div>
              <div className="flex justify-center"><div className="w-0.5 h-4 bg-[#333]" /></div>
              <div className="flex justify-center"><div className="w-0.5 h-4 bg-green" /></div>
              <div className="flex justify-center"><div className="w-0.5 h-4 bg-[#333]" /></div>
              <div />
            </div>

            {/* Level 2 */}
            <div className="grid grid-cols-5 gap-3 items-start">
              <div className="space-y-2">
                <div className={NODE}>Manager (Contracts and Proposals)</div>
                <div className={NODE}>Manager (Procurement)</div>
              </div>
              <div className="space-y-2">
                <div className={NODE}>Manager (Planning and Development)</div>
                <div className={NODE}>Manager (QA/QC) – Site based</div>
                <div className={NODE}>Construction Manager – Site based</div>
              </div>
              <div className="space-y-2">
                <div className={`${NODE} ${NODE_GREEN}`}>Site Manager (HSE)</div>
              </div>
              <div className="space-y-2">
                <div className={`${NODE} ${NODE_GREEN}`}>Admin officer – Site Based</div>
                <div className={NODE}>HR/Labor officer</div>
              </div>
            </div>

            {/* Level 3 & 4: Grouped by branch for clarity */}
            <div className="mt-10 pt-8 border-t border-[#e5e5e5]">
              <h3 className="font-montserrat font-semibold text-[#333] text-sm tracking-wider mb-4 text-center">
                KEY ROLES BY BRANCH
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg border border-[#e5e5e5] p-4 shadow-sm">
                  <h4 className="text-blue font-montserrat font-semibold text-xs tracking-wider mb-3">Business Development & Commercial</h4>
                  <ul className="font-roboto text-[12px] text-[#555] space-y-1.5">
                    <li>Proposal Engineers</li>
                    <li>Contract Engineers</li>
                    <li>Procurement Officers</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg border border-[#e5e5e5] p-4 shadow-sm">
                  <h4 className="text-blue font-montserrat font-semibold text-xs tracking-wider mb-3">Project Delivery</h4>
                  <ul className="font-roboto text-[12px] text-[#555] space-y-1.5">
                    <li>Facilities Engineers (Design and Engineering)</li>
                    <li>Commissioning Engineer</li>
                    <li>Document controller</li>
                    <li>Engineers (QA/QC) & Engineers (Inspection)</li>
                    <li>Discipline Lead – Civil, Mechanical, E&I</li>
                    <li>Project reporting Engineer</li>
                    <li>Site coordinator</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg border border-green/30 p-4 shadow-sm ring-1 ring-green/20">
                  <h4 className="text-green font-montserrat font-semibold text-xs tracking-wider mb-3">HSE</h4>
                  <ul className="font-roboto text-[12px] text-[#555] space-y-1.5">
                    <li>HSE Lead</li>
                    <li>HSE Engineer / Officers</li>
                    <li>Medic / Doctor</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#e5e5e5] flex justify-center">
          <div className="flex items-center gap-2">
            <span className="w-6 h-1 bg-green rounded" />
            <span className="font-roboto text-[13px] text-[#6b6b6b]">
              Site-level collaboration (HSE & Admin)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}