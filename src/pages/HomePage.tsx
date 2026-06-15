import HeroSection from "@/components/homes/HeroSection";
import SearchDocuments from "@/components/homes/SearchDocuments";

function HomePage() {
  return (
    <div className="px-10">
      {/* HeroSection  */}
      <HeroSection />
      {/* Search Documents */}
      <SearchDocuments />

      {/* Còn các phần khác nữa */}
    </div>
  );
}

export default HomePage;
