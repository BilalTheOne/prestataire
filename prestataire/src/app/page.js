"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Phone, FileText, MapPin, CheckCircle, FileText as FileIcon, ClipboardList, Activity, CheckSquare, File, FileText as DocumentIcon } from "lucide-react";

export default function InterventionList() {
  const [search, setSearch] = useState("");
  const [activeLink, setActiveLink] = useState("intervention");
  const router = useRouter();

  // Dummy data for interventions
  const interventions = Array(6).fill({
    id: "OS 101010",
    date: "Le 25/02/2024 à 15:00",
    name: "Gurau lungan",
    phone: "065252525",
    address: "Tanger casablanca, maroc , 0202020",
    description: "c'est la description du problème, ça doit contenir un text long et détaile",
  });

  return (
    <div className="min-h-screen bg-[#F8F4F3] p-6 flex justify-center">
      <div className="w-full max-w-7xl bg-white p-6 rounded-xl shadow-md">
        <div className="grid grid-cols-5 gap-6 pb-1 justify-items-center">
          {/* Statistics Section */}
          <div className="flex flex-col items-center p-5">
            <Activity className="w-6 h-6 text-blue-500 mb-1" />
            <p className="text-sm text-gray-500 font-bold text-center">Intervention encours</p>
            <p className="text-lg font-semibold text-[#333]">230</p>
          </div>
          <div className="flex flex-col items-center p-5">
            <CheckSquare className="w-6 h-6 text-blue-500 mb-1" />
            <p className="text-sm text-gray-500 font-bold text-center">Intervention terminer</p>
            <p className="text-lg font-semibold text-[#333]">250</p>
          </div>
          {/* Profile Section */}
          <div className="flex flex-col items-center mx-auto">
            <img
              src="data:image/svg+xml;utf8,%3Csvg%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20id%3D%22Construction-Worker-Flat-Medium-Light--Streamline-Fluent-Emoji%22%3E%3Cdesc%3EConstruction%20Worker%20Flat%20Medium%20Light%20Streamline%20Emoji%3A%20https%3A%2F%2Fstreamlinehq.com%3C%2Fdesc%3E%3Cpath%20d%3D%22M8.25%2022.5035C6.17638%2024.3961%204.79803%2027.0375%204.54285%2030H8.25l0.94872%20-3.7573L8.25%2022.5035Z%22%20fill%3D%22%23ff9c38%22%20stroke-width%3D%221%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M13.75%2030h4.5l1.6713%20-5.0348L18.25%2019.72c-0.7276%20-0.1443%20-1.48%20-0.22%20-2.25%20-0.22s-1.5224%200.0757%20-2.25%200.22l-1.2214%205.2452L13.75%2030Z%22%20fill%3D%22%23ff9c38%22%20stroke-width%3D%221%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22m23.75%2022.5036%20-1.3366%203.7391L23.75%2030h3.7071c-0.2552%20-2.9625%20-1.6335%20-5.6039%20-3.7071%20-7.4964Z%22%20fill%3D%22%23ff9c38%22%20stroke-width%3D%221%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M13.75%2019.7202c-0.6015%200.1193%20-1.1862%200.2856%20-1.75%200.4947l-0.8746%204.876L12%2030.0002h1.75v-10.28Z%22%20fill%3D%22%23ff6723%22%20stroke-width%3D%221%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M18.25%2019.7202c0.6015%200.1193%201.1862%200.2856%201.75%200.4948l0.9056%204.8759L20%2029.9901h-1.75V19.7202Z%22%20fill%3D%22%23ff6723%22%20stroke-width%3D%221%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M8.25%2022.5037c0.53888%20-0.4918%201.12472%20-0.9331%201.75%20-1.3162l0.916%204.3641L10%2029.99H8.25v-7.4863Z%22%20fill%3D%22%23ff6723%22%20stroke-width%3D%221%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M22%2021.1875c0.6253%200.3832%201.2111%200.8244%201.75%201.3162V29.99H22l-0.5081%20-4.0824L22%2021.1875Z%22%20fill%3D%22%23ff6723%22%20stroke-width%3D%221%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M21.443%208.24496c-0.3069%20-0.54244%200.2352%20-0.91798%20-0.2966%20-1.10575%20-0.583%20-0.1982%20-1.0945%20-0.59461%20-1.4115%20-1.12662%20-0.4296%20-0.71979%20-1.207%20-0.15648%20-2.0866%20-0.15648%20-0.3375%200%20-0.6648%20-0.97014%20-0.9512%20-0.84496%20-0.3989%200.17734%20-0.849%200.17734%20-1.2479%200%20-0.2966%20-0.12518%20-0.6137%200.84496%20-0.9512%200.84496%20-0.8694%200%20-1.6365%20-0.58417%20-2.0661%200.11475%20-0.3375%200.54245%20-0.8387%200.95971%20-1.4422%201.16835%20-0.5625%200.1982%20-0.0535%202.05503%20-0.0535%202.05503s-1.64435%200.95976%20-1.14317%201.70036c0.17388%200.2712%200.27617%200.5946%200.27617%200.918v4.35c0%200.9701%200.6035%201.8255%201.5035%202.1489l1.9332%200.6781v-7.7403c0.1534%20-0.1461%200.2761%20-0.3234%200.3887%20-0.5216%200.1738%20-0.3025%200.2761%20-0.6363%200.3068%20-0.95972%200.0921%200.01044%200.1943%200.02087%200.2864%200.02087%200.6035%200%201.1558%20-0.21907%201.5751%20-0.59461%200.4296%200.36511%200.9717%200.59461%201.5752%200.59461%200.1023%200%200.1943%20-0.01043%200.2864%20-0.02087%200.0409%200.33382%200.1329%200.65722%200.3068%200.95972%200.1125%200.1982%200.2455%200.3651%200.3887%200.5216V19l1.9331%20-0.6781c0.9001%20-0.3129%201.5036%20-1.1787%201.5036%20-2.1489v-4.35c0%20-0.3234%20-0.8977%20-0.6467%20-0.7136%20-0.918%200.5318%20-0.7719%200.5806%20-1.80464%200.0999%20-2.66004Z%22%20fill%3D%22%23fff9ba%22%20stroke-width%3D%221%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M15.9956%2022.75C14.8918%2022.75%2014%2021.942%2014%2020.942V19.75h4v1.192c-0.0088%200.992%20-0.9007%201.808%20-2.0044%201.808Z%22%20fill%3D%22%23e4b29a%22%20stroke-width%3D%221%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M13%2013.9902c0%200.9665%20-0.7835%201.75%20-1.75%201.75s-1.75%20-0.7835%20-1.75%20-1.75%200.7835%20-1.75%201.75%20-1.75%201.75%200.7835%201.75%201.75Z%22%20fill%3D%22%23e4b29a%22%20stroke-width%3D%221%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M22.5%2013.9902c0%200.9665%20-0.7835%201.75%20-1.75%201.75s-1.75%20-0.7835%20-1.75%20-1.75%200.7835%20-1.75%201.75%20-1.75%201.75%200.7835%201.75%201.75Z%22%20fill%3D%22%23e4b29a%22%20stroke-width%3D%221%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M17.1605%206h-2.338c-2.6241%200%20-4.597%202.26377%20-4.2912%205.0782l0.3946%206.2304C11.2021%2019.4296%2012.9482%2021%2015.0099%2021h1.9927c2.0618%200%203.8078%20-1.5806%204.0841%20-3.6914l0.3748%20-6.2304C21.8068%208.39633%2019.7845%206%2017.1605%206Z%22%20fill%3D%22%23eebfaa%22%20stroke-width%3D%221%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M12.0096%2013.68c0.158%20-0.66%200.7507%20-1.14%201.4421%20-1.14%200.7309%200%201.3334%200.52%201.4618%201.22%200.0296%200.15%20-0.0988%200.29%20-0.2469%200.29H12.296c-0.1876%200%20-0.3358%20-0.18%20-0.2864%20-0.37Z%22%20fill%3D%22%23ffffff%22%20stroke-width%3D%221%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M19.9904%2013.68c-0.158%20-0.66%20-0.7507%20-1.14%20-1.4421%20-1.14%20-0.721%200%20-1.3235%200.52%20-1.4618%201.22%20-0.0296%200.15%200.0988%200.29%200.2469%200.29h2.3706c0.1876%200%200.3358%20-0.18%200.2864%20-0.37Z%22%20fill%3D%22%23ffffff%22%20stroke-width%3D%221%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M12.7307%2013.7901c0%20-0.53%200.4247%20-0.96%200.9482%20-0.96%200.5235%200%200.9482%200.43%200.9482%200.97%200%200.08%20-0.0098%200.17%20-0.0197%200.25h-1.8372c-0.0296%20-0.09%20-0.0395%20-0.17%20-0.0395%20-0.26%200%20-0.26Z%22%20fill%3D%22%237d4533%22%20stroke-width%3D%221%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M19.2792%2013.7901c0%20-0.53%20-0.4247%20-0.96%20-0.9482%20-0.96%20-0.5334%200%20-0.9581%200.43%20-0.968%200.96%200%200.09%200.0198%200.18%200.0395%200.26h1.8372c0.0296%20-0.09%200.0395%20-0.17%200.0395%20-0.26%200%20-0.26Z%22%20fill%3D%22%237d4533%22%20stroke-width%3D%221%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M13.6789%2013.2402c0.2963%200%200.5432%200.25%200.5432%200.55%200%200.09%20-0.0296%200.17%20-0.0691%200.26h-0.9581c-0.0395%20-0.08%20-0.0593%20-0.17%20-0.0593%20-0.26%200%20-0.3%200.247%20-0.55%200.5433%20-0.55Z%22%20fill%3D%22%23000000%22%20stroke-width%3D%221%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M18.331%2013.2402c-0.2963%200%20-0.5432%200.25%20-0.5432%200.55%200%200.09%200.0198%200.17%200.0691%200.26h0.9581c0.0395%20-0.08%200.0593%20-0.17%200.0593%20-0.26%200%20-0.3%20-0.2469%20-0.55%20-0.5433%20-0.55Z%22%20fill%3D%22%23000000%22%20stroke-width%3D%221%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M13.5208%2013.4102c0%200.0939%20-0.0752%200.17%20-0.168%200.17%20-0.0927%200%20-0.1679%20-0.0761%20-0.1679%20-0.17%200%20-0.0939%200.0752%20-0.17%200.1679%20-0.17%200.0928%200%200.168%200.0761%200.168%200.17Z%22%20fill%3D%22%23ffffff%22%20stroke-width%3D%221%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M18.2026%2013.4102c0%200.0939%20-0.0752%200.17%20-0.1679%200.17%20-0.0928%200%20-0.1679%20-0.0761%20-0.1679%20-0.17%200%20-0.0939%200.0751%20-0.17%200.1679%20-0.17%200.0927%200%200.1679%200.0761%200.1679%200.17Z%22%20fill%3D%22%23ffffff%22%20stroke-width%3D%221%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22m15.5908%2013.534%20-0.5658%201.7476c-0.1111%200.3592%200.1617%200.7184%200.5557%200.7184h0.8386c0.394%200%200.6668%20-0.3592%200.5557%20-0.7184l-0.5658%20-1.7476c-0.1313%20-0.3787%20-0.6972%20-0.3787%20-0.8184%200Z%22%20fill%3D%22%23d19479%22%20stroke-width%3D%221%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M16.0019%2017.2765c-0.5517%200%20-1.0744%20-0.1423%20-1.51%20-0.3861%20-0.1451%20-0.0812%20-0.3097%200.0915%20-0.2129%200.2438%200.3678%200.5892%201.0066%200.9854%201.7229%200.9854%200.7259%200%201.3647%20-0.3962%201.7229%20-0.9854%200.0871%20-0.1523%20-0.0678%20-0.325%20-0.213%20-0.2438%20-0.4355%200.2438%20-0.9582%200.3861%20-1.5099%200.3861Z%22%20fill%3D%22%23990838%22%20stroke-width%3D%221%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M13.772%203h4.4658C20.3192%203%2022%204.8238%2022%207.05873V9.75h0.2457c0.6979%200%201.2643%200.56%201.2542%201.2401%200%200.68%20-0.5563%201.24%20-1.2542%201.24H9.7542c-0.68779%200%20-1.2542%20-0.55%20-1.2542%20-1.24%200%20-0.6801%200.5563%20-1.2401%201.2542%20-1.2401H10V7.05873C10%204.81325%2011.6906%203%2013.772%203Z%22%20fill%3D%22%23fff478%22%20stroke-width%3D%221%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M10%2021.1875c0.6293%20-0.3856%201.2985%20-0.7124%202%20-0.9727v9.7853h-2v-8.8126Z%22%20fill%3D%22%23fff478%22%20stroke-width%3D%221%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M20%2020.2148c0.7015%200.2603%201.3707%200.5871%202%200.9727v8.8126h-2v-9.7853Z%22%20fill%3D%22%23fff478%22%20stroke-width%3D%221%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M16.9517%202h-1.8931C13.9207%202%2013%202.88771%2013%203.98488V9.75h5.9999V3.98488C19.0103%202.88771%2018.0896%202%2016.9517%202Z%22%20fill%3D%22%23fcd53f%22%20stroke-width%3D%221%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
              alt="Profile"
              className="w-20 h-20 rounded-full border-4 border-white shadow-md mx-auto"
            />
            <h2 className="text-xl font-semibold mt-2 text-[#333] text-center">Hamid Serkouh</h2>
            <p className="text-gray-500 text-center">Électricien</p>
          </div>
          {/* More Statistics Section */}
          <div className="flex flex-col items-center p-5">
            <File className="w-6 h-6 text-blue-500 mb-1" />
            <p className="text-sm text-gray-500 font-bold text-center">Facture</p>
            <p className="text-lg font-semibold text-[#333]">230</p>
          </div>
          <div className="flex flex-col items-center p-5">
            <DocumentIcon className="w-6 h-6 text-blue-500 mb-1" />
            <p className="text-sm text-gray-500 font-bold text-center">Mes documents</p>
            <p className="text-lg font-semibold text-[#333]">4/5</p>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex justify-center items-center gap-6 mt-4 border-b bg-[#F2F6FA]">
          <button
            className={`flex items-center space-x-2 px-4 py-2 transition-colors duration-200 ${activeLink === "intervention" ? "text-red-600 font-bold border-b-2 border-red-600" : "text-gray-500 font-bold border-b-2 border-[#F2F6FA]"} hover:text-red-600`}
            onClick={() => setActiveLink("intervention")}
          >
            <CheckCircle className="w-5 h-5" />
            <span>Intervention</span>
          </button>
          <button
            className={`flex items-center space-x-2 px-4 py-2 transition-colors duration-200 ${activeLink === "facture" ? "text-red-600 font-bold border-b-2 border-red-600" : "text-gray-500 font-bold border-b-2 border-[#F2F6FA]"} hover:text-red-600`}
            onClick={() => {
              setActiveLink("facture");
              router.push("/facture");
            }}
          >
            <FileIcon className="w-5 h-5" />
            <span>Facture</span>
          </button>
          <button
            className={`flex items-center space-x-2 px-4 py-2 transition-colors duration-200 ${activeLink === "documents" ? "text-red-600 font-bold border-b-2 border-red-600" : "text-gray-500 font-bold border-b-2 border-[#F2F6FA]"} hover:text-red-600`}
            onClick={() => setActiveLink("documents")}
          >
            <ClipboardList className="w-5 h-5" />
            <span>Mes documents</span>
          </button>
        </div>

        {/* Search and List Header */}
        <div className="mt-6 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-[#333] flex items-center">
            List des interventions
            <span className='ml-2 px-2 py-1'>
              32
            </span>
          </h3>
          <div className="relative w-64">
            <input
              type="text"
              placeholder="Search Here"
              className="border rounded-lg py-2 pl-8 pr-4 w-full text-[#333] border-gray-300"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search className="absolute left-2 top-2.5 w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Interventions List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {interventions.map((item, index) => (
            <div key={index} className="bg-white p-4 shadow-md rounded-lg border border-gray-200">
              <div className="flex justify-between text-sm text-gray-500 border-b pb-2 mb-2">
                <span>{item.id}</span>
                <span>{item.date}</span>
              </div>
              <h4 className="font-semibold text-lg mt-2 text-[#333]">{item.name}</h4>
              <div className="mt-2 text-gray-600 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-500" />
                  <span>{item.phone}</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span>{item.address}</span>
                </div>
                <div className="flex items-start gap-2 mt-2">
                  <FileText className="w-4 h-4 text-blue-500 mt-1" />
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}