import React from "react";
import dynamic from "next/dynamic";

export default function favs() {
  const DynamicComponent = dynamic(() => import("../components/Favs"));

  return <DynamicComponent />;
}
