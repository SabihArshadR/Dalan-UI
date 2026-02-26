"use client";

const METRICS = [
  { sr: 1, metric: "Manhours Completed", value: "28,620" },
  { sr: 2, metric: "UA/UC cases registered", value: "20" },
  { sr: 3, metric: "UA/UC cases resolved", value: "19" },
  { sr: 4, metric: "PPE Violations", value: "10" },
  { sr: 5, metric: "PTW Violations", value: "2" },
  { sr: 6, metric: "Driving Violations", value: "3" },
  {
    sr: 7,
    metric: "Day Away, Restricted or Transferred (DART) cases",
    value: "0",
  },
  { sr: 8, metric: "LTI case", value: "0" },
  { sr: 9, metric: "Fatality case", value: "0" },
];

export default function HSEPerformance() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1320px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[40px] font-montserrat font-bold tracking-[4px]">
            <span className="text-blue">HSE </span>
            <span className="text-green">PERFORMANCE</span>
          </h2>
          <div className="flex justify-center mt-4">
            <div className="h-0.5 w-[100px] bg-blue" />
          </div>
          <div className="flex justify-center mt-1.5">
            <div className="h-0.5 w-[40px] bg-green" />
          </div>
          <p className="text-[#6b6b6b] font-roboto text-sm max-w-[648px] mx-auto mt-5 leading-6">
            Health, Safety & Environment metrics reflecting our commitment to zero harm and operational excellence.
          </p>
        </div>

        <div className="overflow-x-auto rounded-lg border border-[#e5e5e5] shadow-sm max-w-4xl mx-auto">
          <table className="w-full font-roboto text-[15px]">
            <thead>
              <tr className="bg-[#e8f5e9]">
                <th className="text-left py-4 px-5 font-semibold text-[#333] border-b border-[#c8e6c9] w-24">
                  Sr No.
                </th>
                <th className="text-left py-4 px-5 font-semibold text-[#333] border-b border-[#c8e6c9]">
                  HSE Metrics
                </th>
                <th className="text-right py-4 px-5 font-semibold text-[#333] border-b border-[#c8e6c9] w-32">
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              {METRICS.map((row, index) => (
                <tr
                  key={row.sr}
                  className={
                    index % 2 === 0 ? "bg-white" : "bg-[#fafafa]"
                  }
                >
                  <td className="py-3.5 px-5 border-b border-[#eee] text-[#555]">
                    {row.sr}
                  </td>
                  <td className="py-3.5 px-5 border-b border-[#eee] text-[#333]">
                    {row.metric}
                  </td>
                  <td className="py-3.5 px-5 border-b border-[#eee] text-right font-medium text-[#333]">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center font-roboto text-[13px] text-[#6b6b6b] mt-6">
          Updated as of Feb 2026
        </p>
      </div>
    </section>
  );
}
