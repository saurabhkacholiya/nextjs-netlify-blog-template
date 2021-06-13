import React from "react";
import { useRouter } from "next/router";

export default function Dynamic() {
  const router = useRouter();
  console.log("router: ", router);
  return <h1>{`Whatever ${router}`}</h1>;
}
