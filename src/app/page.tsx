"use client";

import { useState } from "react";
import PriceForm from "@/components/ui/PriceForm";
import PriceSummary from "@/components/ui/PriceSummary";
import NavigationBar from "@/components/ui/NavigationBar";
import StrategiesModal from "@/components/ui/StrategiesModal";
import StrategiesList from "@/components/ui/StrategiesList";
import Loading from "@/components/ui/Loading";

export default function Page() {
  const [tab, setTab] = useState<"form" | "cartera" | "reiniciar">("form");
  const [priceData, setPriceData] = useState<PriceData | null>(null);
  const [strategies, setStrategies] = useState<PriceStrategy[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDataSubmit = async (data: PriceData) => {
    setPriceData(data);
    setLoading(true);
    try {
      const response = await fetch("/api/priceStrategy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Error en la API");
      }
      const result = await response.json();
      setStrategies(result);
      setShowModal(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleTabChange = (selectedTab: string) => {
    if (selectedTab === "reiniciar") {
      setTab("form");
      setPriceData(null);
      setStrategies([]);
      setShowModal(false);
      setLoading(false);
    } else if (selectedTab === "cartera") {
      setTab("cartera");
    } else {
      setTab("form");
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {" "}
      <NavigationBar onTabChange={handleTabChange} />{" "}
      <div className="flex grow">
        {" "}
        {tab === "form" && (
          <>
            {" "}
            <div className="w-1/2 p-4">
              {" "}
              <PriceForm onDataSubmit={handleDataSubmit} />{" "}
            </div>{" "}
            <div className="w-1/2 p-4">
              {" "}
              {priceData && <PriceSummary data={priceData} />}{" "}
            </div>{" "}
          </>
        )}{" "}
        {tab === "cartera" && <StrategiesList strategies={strategies} />}{" "}
      </div>{" "}
      {loading && <Loading />}{" "}
      {showModal && (
        <StrategiesModal
          strategies={strategies}
          onClose={() => setShowModal(false)}
        />
      )}{" "}
    </div>
  );
}
