"use client";
import dynamic from "next/dynamic";
import UseEffectPage from "@/components/useEffectPage";

const UseMemoAndUseCallback = dynamic(
  () => import("@/components/useMemoAndUseCallBack"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

export default function Demo2() {
  return (
    <>
      {/* UseMemoAndUseCallback */}
      <hr className="mt-2 mb-4" />
      <UseMemoAndUseCallback />
      {/* UseEffectPage */}
      <hr className="mt-2 mb-4" />
      <UseEffectPage />
    </>
  );
}
