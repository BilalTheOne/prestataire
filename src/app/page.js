"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Phone,
  FileText,
  MapPin,
  CheckCircle,
  FileText as FileIcon,
  ClipboardList,
  Activity,
  CheckSquare,
  File,
  FileText as DocumentIcon,
  Clock,
  DollarSign,
  Calendar,
  ChevronDown,
  ChevronUp,
  X,
  Eye,
} from "lucide-react";

export default function InterventionList() {
  const [search, setSearch] = useState("");
  const [activeLink, setActiveLink] = useState("intervention");
  const [showStats, setShowStats] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedIntervention, setSelectedIntervention] = useState(null);
  const [interventionStatuses, setInterventionStatuses] = useState(
    Array(6).fill("not-yet") // Initial status of all interventions is "not-yet"
  );
  const router = useRouter();

  // Dummy data for interventions
  const interventions = Array(6).fill({
    id: "OS 101010",
    date: "Le 25/02/2024 à 15:00",
    name: "Gurau lungan",
    phone: "065252525",
    address: "Tanger casablanca, maroc , 0202020",
    description: "c'est la description du problème, ça doit contenir un text long et détaile",
    price: "250",
  });

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
  };

  const openPopup = (intervention, index) => {
    setSelectedIntervention({ item: intervention, index });
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedIntervention(null);
  };

  const acceptIntervention = (index) => {
    const newStatuses = [...interventionStatuses];
    newStatuses[index] = "accepted";
    setInterventionStatuses(newStatuses);
    closePopup();
  };

  const refuseIntervention = (index) => {
    const newStatuses = [...interventionStatuses];
    newStatuses[index] = "refused";
    setInterventionStatuses(newStatuses);
    closePopup();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "accepted":
        return "bg-green-100";
      case "refused":
        return "bg-red-100";
      default:
        return "bg-blue-100";
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
        <div className={`lg:flex flex-wrap justify-center items-center gap-6 mt-4 border-b bg-[#F2F6FA] ${showLinks ? "block" : "hidden"}`}>
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
            Liste des interventions
            <span className="ml-2 px-2 py-1">32</span>
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

        {/* Interventions List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {interventions.map((item, index) => (
            <div key={index} className="bg-white p-4 shadow-md rounded-lg border border-gray-200 text-left w-full">
              <div className={`flex justify-between items-center p-2 rounded-t-lg ${getStatusColor(interventionStatuses[index])}`}>
                <div className="text-sm text-gray-500">
                  <span>{item.id}</span>
                  <span className="block">{item.date}</span>
                </div>
                <button onClick={() => openPopup(item, index)} className="text-blue-500 hover:text-blue-700">
                  <Eye className="w-5 h-5" />
                </button>
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

      {/* Popup */}
      {showPopup && selectedIntervention && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex flex-col items-center">
              <img
                src="https://symbols.getvecta.com/stencil_34/21_female-factory-worker.7052c847e3.svg"
                alt="Profile"
                className="w-20 h-20 rounded-full border-4 border-white shadow-md mb-4"
              />
              <h4 className="font-semibold text-lg text-[#333] mb-4">Accepter l'ordre de service</h4>
            </div>
            <div className="text-sm text-gray-600">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-blue-500" />
                <span>{selectedIntervention.item.date}</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-blue-500" />
                <span>Heure: {selectedIntervention.item.date.split(" à ")[1]}</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span>Zipcode: 232323</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-4 h-4 text-blue-500" />
                <p className="text-gray-600">{selectedIntervention.item.description}</p>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-4 h-4 text-blue-500" />
                <span>Prix annoncé: {selectedIntervention.item.price}</span>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => acceptIntervention(selectedIntervention.index)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Accepter
              </button>
              <button
                onClick={() => refuseIntervention(selectedIntervention.index)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Refuser
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}