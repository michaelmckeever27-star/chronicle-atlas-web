import { BrandLogo } from "@/components/BrandLogo";

export default function Loading() {
  return (
    <div className="loading-screen" role="status">
      <BrandLogo className="loading-seal" symbolOnly />
      <span>Opening the Chronicle…</span>
    </div>
  );
}
