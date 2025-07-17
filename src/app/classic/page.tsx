import ClassicLayout from "@/app/classic/layout/ClassicLayout";
import { portfolioData } from "@/data/portfolioData";

export default function ClassicPage() {
  return <ClassicLayout data={portfolioData} />;
}
