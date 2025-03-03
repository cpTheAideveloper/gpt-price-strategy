"use client";

export default function NavigationBar({
  onTabChange,
}: {
  onTabChange: (tab: string) => void;
}) {
  return (
    <nav className="bg-gray-200 p-4 flex gap-4">
      {" "}
      <button
        onClick={() => onTabChange("form")}
        className="bg-blue-500 text-white px-4 py-2"
      >
        {" "}
        Formulario{" "}
      </button>{" "}
      <button
        onClick={() => onTabChange("cartera")}
        className="bg-blue-500 text-white px-4 py-2"
      >
        {" "}
        Cartera{" "}
      </button>{" "}
      <button
        onClick={() => onTabChange("reiniciar")}
        className="bg-red-500 text-white px-4 py-2"
      >
        {" "}
        Reiniciar{" "}
      </button>{" "}
    </nav>
  );
}
