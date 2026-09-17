import type { Metadata } from "next";
import StubPage from "@/components/StubPage";

export const metadata: Metadata = { title: "เกี่ยวกับเรา" };

export default function Page() {
  return (
    <StubPage
      eyebrow="เกี่ยวกับเรา"
      title="รู้จักบริษัท ที.เอส.จี. 2550"
      description="ประวัติบริษัท วิสัยทัศน์ และมาตรฐานการให้บริการรักษาความปลอดภัย"
    />
  );
}
