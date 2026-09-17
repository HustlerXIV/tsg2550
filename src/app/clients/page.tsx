import type { Metadata } from "next";
import StubPage from "@/components/StubPage";

export const metadata: Metadata = { title: "ผลงาน/ลูกค้า" };

export default function Page() {
  return (
    <StubPage
      eyebrow="ผลงาน / ลูกค้า"
      title="ผลงานและลูกค้าที่ไว้วางใจเรา"
      description="ตัวอย่างหน่วยงานและโครงการที่เราดูแลงานรักษาความปลอดภัย"
    />
  );
}
