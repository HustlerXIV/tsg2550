import type { Metadata } from "next";
import StubPage from "@/components/StubPage";

export const metadata: Metadata = { title: "ข่าวสาร" };

export default function Page() {
  return (
    <StubPage
      eyebrow="ข่าวสาร"
      title="ข่าวสารและประกาศจากบริษัท"
      description="ข่าวประชาสัมพันธ์ กิจกรรม และประกาศรับสมัครงาน"
    />
  );
}
