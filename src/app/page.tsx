import type { Metadata } from "next";
import StubPage from "@/components/StubPage";

export const metadata: Metadata = { title: "หน้าแรก" };

export default function HomePage() {
  return (
    <StubPage
      eyebrow="หน้าแรก"
      title="บริการรักษาความปลอดภัยครบวงจร"
      description="บริษัท รักษาความปลอดภัย ที.เอส.จี. 2550 จำกัด ให้บริการงานรักษาความปลอดภัยและงานทำความสะอาด ด้วยทีมงานที่ผ่านการฝึกอบรม"
    />
  );
}
