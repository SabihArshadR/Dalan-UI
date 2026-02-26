"use client";

import Image from "next/image";

export default function CEOVision() {
  return (
    <section className="bg-[#FBFBFB] py-20">
      <div className="max-w-[1320px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[40px] font-montserrat font-bold tracking-[4px]">
            <span className="text-blue">CEO&apos;S </span>
            <span className="text-green">VISION & COMMITMENT</span>
          </h2>
          <div className="flex justify-center mt-4">
            <div className="h-0.5 w-[100px] bg-blue" />
          </div>
          <div className="flex justify-center mt-1.5">
            <div className="h-0.5 w-[40px] bg-green" />
          </div>
        </div>

        <div className="lg:flex gap-12 items-start mb-16">
          <div className="shrink-0 mx-auto lg:mx-0">
            <div className="relative w-[280px] h-[320px] rounded-lg overflow-hidden shadow-lg border border-[#e5e5e5]">
              <Image
                src="/ceo/usman.jpeg"
                alt="CEO — JES Joint Engineering Services"
                fill
                className="object-cover object-top"
                sizes="280px"
                priority
              />
            </div>
            <p className="text-center mt-4 font-montserrat font-semibold text-[#333] tracking-wider text-sm">
              CEO – JES
            </p>
            <p className="text-center font-roboto text-[#6b6b6b] text-sm">
              Joint Engineering Services
            </p>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-[22px] font-montserrat font-bold text-blue tracking-[2px] mb-4">
              Vision Statement
            </h3>
            <p className="text-[#545353] font-roboto text-[15px] leading-[1.8] mb-6">
              To be a leading Engineering, Construction, and Commissioning partner in the oil & gas and process industries, recognized for technical excellence, uncompromising HSEQ standards, reliable project delivery, and long-term value creation for our clients and stakeholders.
            </p>
            <p className="text-[#545353] font-roboto text-[15px] leading-[1.8]">
              We envision JES as a contractor of choice—trusted for complex industrial infrastructure projects, admired for its safety culture, and respected for its integrity and performance across local and international markets.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-[22px] font-montserrat font-bold text-blue tracking-[2px] mb-4">
            Mission Statement
          </h3>
          <p className="text-[#545353] font-roboto text-[15px] leading-[1.8] mb-6">
            At JES, our mission is to deliver high-quality construction and commissioning solutions for oil & gas, petrochemical, and processing facilities through:
          </p>
          <ul className="space-y-3 text-[#545353] font-roboto text-[15px] leading-[1.8] list-none pl-0">
            <li className="flex gap-3">
              <span className="text-green font-bold shrink-0">›</span>
              <span>Engineering-driven execution and meticulous project planning</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green font-bold shrink-0">›</span>
              <span>Strong HSEQ governance embedded in every operational layer</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green font-bold shrink-0">›</span>
              <span>Skilled manpower supported by modern equipment and fabrication capability</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green font-bold shrink-0">›</span>
              <span>Transparent client engagement and contractual integrity</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green font-bold shrink-0">›</span>
              <span>Continuous improvement in cost, schedule, and performance management</span>
            </li>
          </ul>
          <p className="text-[#545353] font-roboto text-[15px] leading-[1.8] mt-6">
            We are committed to building infrastructure that is safe, durable, efficient, and aligned with international standards.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-[22px] font-montserrat font-bold text-blue tracking-[2px] mb-4">
            CEO&apos;s HSEQ Commitment Statement
          </h3>
          <p className="text-[#545353] font-roboto text-[15px] leading-[1.8] mb-8">
            At JES, Health, Safety, Environment, and Quality are not compliance requirements — they are core business values. As a construction and commissioning contractor operating in oil & gas fields and processing plants, we recognize the high-risk nature of our work environments, including classified hazardous areas, high-pressure systems, and live operating facilities. Therefore, we maintain a structured and disciplined HSEQ management framework to ensure safe execution and operational excellence. Our commitments are as follows:
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg border border-[#e5e5e5] shadow-sm">
              <h4 className="font-montserrat font-bold text-[#333] text-[17px] tracking-[1px] mb-3 flex items-center gap-2">
                <span className="w-1 h-6 bg-green rounded" />
                Health & Safety
              </h4>
              <p className="text-[#545353] font-roboto text-[14px] leading-[1.75]">
                We are committed to a Zero Harm philosophy — protecting our employees, clients, subcontractors, and surrounding communities. Safety leadership starts from top management and cascades down to every worker on site. We ensure structured risk assessments, method statements, permit-to-work compliance, toolbox talks, and continuous HSE monitoring. All managers and supervisors receive regular HSE training from reputable institutions, and project-specific safety inductions are conducted before commencement of work.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-[#e5e5e5] shadow-sm">
              <h4 className="font-montserrat font-bold text-[#333] text-[17px] tracking-[1px] mb-3 flex items-center gap-2">
                <span className="w-1 h-6 bg-green rounded" />
                Environmental Responsibility
              </h4>
              <p className="text-[#545353] font-roboto text-[14px] leading-[1.75]">
                We operate with environmental stewardship, minimizing emissions, waste, and ecological disturbance. Our activities comply with regulatory environmental requirements and client standards. We promote responsible resource utilization and pollution prevention practices across projects.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-[#e5e5e5] shadow-sm">
              <h4 className="font-montserrat font-bold text-[#333] text-[17px] tracking-[1px] mb-3 flex items-center gap-2">
                <span className="w-1 h-6 bg-green rounded" />
                Quality Excellence
              </h4>
              <p className="text-[#545353] font-roboto text-[14px] leading-[1.75]">
                We are committed to delivering projects that meet or exceed contractual and technical specifications. Quality planning, inspection & test plans (ITPs), QA/QC controls, and documentation discipline are integrated into our execution process. Continuous improvement, lessons learned, and performance reviews drive our quality culture.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-[#e5e5e5] shadow-sm">
              <h4 className="font-montserrat font-bold text-[#333] text-[17px] tracking-[1px] mb-3 flex items-center gap-2">
                <span className="w-1 h-6 bg-green rounded" />
                Leadership Accountability
              </h4>
              <p className="text-[#545353] font-roboto text-[14px] leading-[1.75]">
                HSEQ objectives are measurable, monitored, and reviewed at management level. Performance indicators form part of leadership accountability. We promote open reporting of hazards, near misses, and improvement opportunities without fear of reprisal.
              </p>
            </div>
          </div>

          <p className="text-[#545353] font-roboto text-[15px] leading-[1.8] mt-8">
            At JES, we firmly believe that sustainable business growth is only possible through disciplined execution, safety leadership, environmental responsibility, and uncompromising quality standards.
          </p>
        </div>

        <div className="pt-8 border-t border-[#e5e5e5] text-center">
          <p className="font-montserrat font-bold text-[#333] tracking-[3px] text-lg">
            CEO – JES
          </p>
          <p className="font-roboto text-[#6b6b6b] text-[15px] mt-1">
            Joint Engineering Services
          </p>
        </div>
      </div>
    </section>
  );
}
