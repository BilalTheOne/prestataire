"use client";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'; // Correct import statement
import { Search, Phone, MapPin, CheckCircle, FileText as FileIcon, ClipboardList, Activity, CheckSquare, File, FileText as DocumentIcon, ChevronDown, ChevronUp, Eye } from "lucide-react";

export default function InterventionList() {
  const [search, setSearch] = useState("");
  const [activeLink, setActiveLink] = useState("facture");
  const [showStats, setShowStats] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const router = useRouter(); // Ensure this is within the functional component

  useEffect(() => {
    if (!router.isReady) return;
    // Any additional logic that depends on the router being ready
  }, [router.isReady]);

  // Dummy data for interventions with mixed status
  const interventions = [
    {
      id: "OS 101010",
      date: "Le 25/02/2024 à 15:00",
      client: "Gurau lungan",
      status: "non verser",
      phone: "065252525",
      address: "Tanger casablanca, maroc , 0202020",
      description: "c'est la description du problème, ça doit contenir un text long et détaile",
      prix: "500 MAD",
      portion: "50",
    },
    {
      id: "OS 101011",
      date: "Le 26/02/2024 à 16:00",
      client: "Ahmed Ben",
      status: "verser",
      phone: "065252526",
      address: "Rabat, Maroc , 0303030",
      description: "Description du problème",
      prix: "600 MAD",
      portion: "50",
    },
    {
      id: "OS 101012",
      date: "Le 27/02/2024 à 17:00",
      client: "Sara Ali",
      status: "non verser",
      phone: "065252527",
      address: "Casablanca, Maroc , 0404040",
      description: "Description du problème",
      prix: "700 MAD",
      portion: "50",
    },
    {
      id: "OS 101013",
      date: "Le 28/02/2024 à 18:00",
      client: "Mohamed El",
      status: "verser",
      phone: "065252528",
      address: "Fes, Maroc , 0505050",
      description: "Description du problème",
      prix: "800 MAD",
      portion: "50",
    },
    {
      id: "OS 101014",
      date: "Le 01/03/2024 à 19:00",
      client: "Fatima Zahra",
      status: "non verser",
      phone: "065252529",
      address: "Marrakech, Maroc , 0606060",
      description: "Description du problème",
      prix: "900 MAD",
      portion: "50",
    },
    {
      id: "OS 101015",
      date: "Le 02/03/2024 à 20:00",
      client: "Youssef Karim",
      status: "verser",
      phone: "065252530",
      address: "Agadir, Maroc , 0707070",
      description: "Description du problème",
      prix: "1000 MAD",
      portion: "50",
    },
  ];

  const links = [
    { name: "Intervention", icon: CheckCircle, key: "intervention" },
    { name: "Facture", icon: FileIcon, key: "facture" },
    { name: "Mes documents", icon: ClipboardList, key: "documents" },
  ];
  
  const handleLinkClick = (link) => {
    setActiveLink(link.key);
    setShowLinks(false);
    if (link.key === "facture") {
      router.push("/facture");
    }
    if (link.key === "documents") {
      router.push("/docs");
    }
    if (link.key === "intervention") {
        router.push("/");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F4F3] p-6 flex justify-center">
      <div className="w-full max-w-7xl bg-white p-6 rounded-xl shadow-md">
        <div className="flex justify-end mb-4 lg:hidden">
          <button
            onClick={() => setShowStats(!showStats)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            {showStats ? "Hide Statistics" : "Show Statistics"}
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 pb-1 justify-items-center">
          {/* Statistics Section */}
          <div className={`flex flex-col items-center p-5 ${showStats ? "block" : "hidden"} lg:flex`}>
            <Activity className="w-6 h-6 text-blue-500 mb-1" />
            <p className="text-sm text-gray-500 font-bold text-center">Intervention en cours</p>
            <p className="text-lg font-semibold text-[#333]">230</p>
          </div>
          <div className={`flex flex-col items-center p-5 ${showStats ? "block" : "hidden"} lg:flex`}>
            <CheckSquare className="w-6 h-6 text-blue-500 mb-1" />
            <p className="text-sm text-gray-500 font-bold text-center">Intervention terminée</p>
            <p className="text-lg font-semibold text-[#333]">250</p>
          </div>
          {/* Profile Section */}
          <div className="flex flex-col items-center mx-auto p-5 lg:p-0">
            <img
              src="https://symbols.getvecta.com/stencil_34/21_female-factory-worker.7052c847e3.svg"
              alt="Profile"
              className="w-20 h-20 rounded-full border-4 border-white shadow-md mx-auto"
            />
            <h2 className="text-xl font-semibold mt-2 text-[#333] text-center">Hamid Serkouh</h2>
            <p className="text-gray-500 text-center">Électricien</p>
          </div>
          {/* More Statistics Section */}
          <div className={`flex flex-col items-center p-5 ${showStats ? "block" : "hidden"} lg:flex`}>
            <File className="w-6 h-6 text-blue-500 mb-1" />
            <p className="text-sm text-gray-500 font-bold text-center">Facture</p>
            <p className="text-lg font-semibold text-[#333]">230</p>
          </div>
          <div className={`flex flex-col items-center p-5 ${showStats ? "block" : "hidden"} lg:flex`}>
            <DocumentIcon className="w-6 h-6 text-blue-500 mb-1" />
            <p className="text-sm text-gray-500 font-bold text-center">Mes documents</p>
            <p className="text-lg font-semibold text-[#333]">4/5</p>
          </div>
        </div>

        {/* Links Section */}
        <div className="lg:hidden flex justify-center items-center mt-4">
          <button
            onClick={() => setShowLinks(!showLinks)}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-200 rounded-lg"
          >
            <span className="font-bold text-gray-700">{links.find(link => link.key === activeLink).name}</span>
            {showLinks ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>
        <div className={`lg:flex flex-wrap justify-center items-center gap-6 mt-4 border-b bg-[#F2F6FA] ${showLinks ? "block" : "hidden"} lg:block`}>
          {links.map((link) => (
            <button
              key={link.key}
              className={`flex items-center space-x-2 px-4 py-2 transition-colors duration-200 ${activeLink === link.key ? "text-red-600 font-bold border-b-2 border-red-600" : "text-gray-500 font-bold border-b-2 border-[#F2F6FA]"} hover:text-red-600`}
              onClick={() => handleLinkClick(link)}
            >
              <link.icon className="w-5 h-5" />
              <span>{link.name}</span>
            </button>
          ))}
        </div>

        {/* Search and List Header */}
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center">
          <h3 className="text-lg font-semibold text-[#333] flex items-center mb-4 sm:mb-0">
            Liste des factures
          </h3>
          <div className="relative w-full sm:w-64">
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
        
        {/* Interventions Table */}
        <div className="overflow-x-auto mt-6">
          <table className="min-w-full bg-white text-black">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b text-left">Numero</th>
                <th className="px-4 py-2 border-b text-left">Client</th>
                <th className="px-4 py-2 border-b text-center">Status</th>
                <th className="px-4 py-2 border-b text-center">Date</th>
                <th className="px-4 py-2 border-b text-center">Prix</th>
                <th className="px-4 py-2 border-b text-center">Portion</th>
                <th className="px-4 py-2 border-b text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {interventions.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border-b text-left">{index + 1}</td>
                  <td className="px-4 py-2 border-b text-left">{item.client}</td>
                  <td className="px-4 py-2 border-b text-center">
                    <span className={`px-2 py-1 rounded-full font-bold text-gray-500 text-sm ${item.status === "verser" ? "bg-cyan-50" : "bg-amber-50"} whitespace-nowrap`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 border-b text-center">{item.date}</td>
                  <td className="px-4 py-2 border-b text-center">{item.prix}</td>
                  <td className="px-4 py-2 border-b text-center">{item.portion}</td>
                  <td className="px-4 py-2 border-b text-center">
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={() => router.push('/facturefinal')}
                    >
                      <Eye className="w-5 h-5 inline-block" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}