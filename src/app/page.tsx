"use client";
import Dashboard from "./components/Dashboard";

export default function Home() {
  return (
    <>
      <div className="w-full h-[calc(100vh-49px)] bg-blue-50 overflow-auto ">
        <Dashboard />
      </div>
    </>
  );
}
