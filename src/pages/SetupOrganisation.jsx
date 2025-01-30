import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  IconBuildingCommunity,
  IconWorld,
  IconFileDescription,
  IconArrowRight,
  IconX,
  IconCheck,
  IconLoader2,
} from "@tabler/icons-react";

const SetupOrganisation = () => {
  const [companyName, setCompanyName] = useState("");
  const [companyURL, setCompanyURL] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [scrapedPages, setScrapedPages] = useState([]);
  const [selectedPage, setSelectedPage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetchingMeta, setIsFetchingMeta] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setScrapedPages([
      {
        url: "https://example.com/home",
        status: "Scraped",
        data: ["Welcome text", "Feature list"],
      },
      { url: "https://example.com/about", status: "Pending", data: [] },
      {
        url: "https://example.com/contact",
        status: "Scraped",
        data: ["Contact form details", "Office address"],
      },
    ]);
  }, []);

  const handleFetchMetaDescription = async () => {
    setIsFetchingMeta(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setCompanyDescription(
        "This is a dummy meta-description fetched from the website."
      );
    } finally {
      setIsFetchingMeta(false);
    }
  };

  const handleSave = async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  const openModal = (page) => {
    setSelectedPage(page);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100 p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-xl p-4 sm:p-6 md:p-8 mt-4 sm:mt-8">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b">
          <IconBuildingCommunity size={32} className="text-purple-600" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Setup Organisation
          </h2>
        </div>

        <div className="space-y-6">
          <div className="form-group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Company Name
            </label>
            <div className="relative group">
              <IconBuildingCommunity
                className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-400 group-hover:text-purple-500 transition-colors"
                size={20}
              />
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="Enter company name"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Company Website URL
            </label>
            <div className="relative group">
              <IconWorld
                className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-400 group-hover:text-purple-500 transition-colors"
                size={20}
              />
              <input
                type="text"
                value={companyURL}
                onChange={(e) => setCompanyURL(e.target.value)}
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="Enter website URL"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Company Description
            </label>
            <div className="relative group">
              <IconFileDescription
                className="absolute top-3 left-3 text-gray-400 group-hover:text-purple-500 transition-colors"
                size={20}
              />
              <textarea
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                rows="4"
                placeholder="Enter company description"
              ></textarea>
              <button
                onClick={handleFetchMetaDescription}
                disabled={isFetchingMeta}
                className="mt-2 text-sm text-purple-600 hover:text-purple-700 transition-colors hover:underline focus:outline-none inline-flex items-center gap-2"
              >
                {isFetchingMeta ? (
                  <>
                    <IconLoader2 size={16} className="animate-spin" />
                    Fetching description...
                  </>
                ) : (
                  "Auto-fetch meta description"
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Webpages Detected</h3>
          <div className="border rounded-lg overflow-hidden shadow-sm">
            {scrapedPages.map((page, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border-b last:border-none hover:bg-gray-50 transition-colors gap-2 sm:gap-4"
              >
                <span className="text-gray-700 break-all">{page.url}</span>
                <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      page.status === "Scraped"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {page.status === "Scraped" ? (
                      <span className="flex items-center gap-1">
                        <IconCheck size={16} />
                        {page.status}
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <IconLoader2 size={16} className="animate-spin" />
                        {page.status}
                      </span>
                    )}
                  </span>
                  {page.status === "Scraped" && (
                    <button
                      onClick={() => openModal(page)}
                      className="text-purple-600 hover:text-purple-700 transition-colors hover:underline focus:outline-none"
                    >
                      View Data
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <button
            onClick={handleSave}
            disabled={isLoading}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-70"
          >
            {isLoading ? (
              <>
                <IconLoader2 size={20} className="animate-spin mr-2" />
                Saving Changes...
              </>
            ) : (
              <>
                <IconCheck size={20} className="mr-2" />
                Save Changes
              </>
            )}
          </button>
          <button
            onClick={() => {
              handleSave();
              setTimeout(() => {
                navigate("/chatbot-intigration");
              }, 1000);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Go to Chatbot Integration
            <IconArrowRight size={20} className="ml-2" />
          </button>
        </div>
      </div>
      {saveSuccess && (
        <div className="fixed bottom-4 right-4 bg-green-100 border-l-4 border-green-500 p-4 rounded-md shadow-lg animate-fade-in-up">
          <p className="text-green-700 text-sm flex items-center">
            <IconCheck size={20} className="mr-2" />
            Changes saved successfully!
          </p>
        </div>
      )}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div
            className="absolute inset-0 bg-black bg-opacity-75 transition-opacity"
            onClick={closeModal}
          ></div>
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <div className="pointer-events-auto w-screen max-w-md transform transition-transform duration-500 ease-in-out">
              <div className="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                <div className="px-4 sm:px-6 py-6 bg-purple-50 border-b border-gray-200">
                  <div className="flex items-start justify-between">
                    <h2 className="text-xl font-semibold text-gray-900">
                      Scraped Data
                    </h2>
                    <button
                      onClick={closeModal}
                      className="ml-3 flex h-7 w-7 items-center justify-center rounded-full bg-purple-50 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <IconX size={20} />
                    </button>
                  </div>
                </div>
                <div className="relative flex-1 px-4 sm:px-6 py-6">
                  {selectedPage && (
                    <div className="space-y-4">
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <h3 className="text-sm font-medium text-purple-800 break-all">
                          {selectedPage.url}
                        </h3>
                      </div>
                      <div className="space-y-3">
                        {selectedPage.data.map((chunk, i) => (
                          <div key={i} className="flex gap-3 items-start">
                            <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-purple-400"></div>
                            <p className="text-gray-600 text-sm">{chunk}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SetupOrganisation;
