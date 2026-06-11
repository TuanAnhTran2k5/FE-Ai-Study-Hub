import { ROUTE } from "@/models/routePath";
import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { HeroSection } from "./home/HeroSection";
import { DocumentHubSection } from "./home/HomeDocumentHubSection";
import { FeaturesSection } from "./home/HomeFeaturesSection";
import { HomeFooterSection } from "./home/HomeFooterSection";
import { RankingSection } from "./home/HomeRankingSection";
import { StepsSection } from "./home/HomeStepsSection";
import { TopRatedDocumentsSection } from "./home/HomeTopRatedDocumentsSection";
import { studyDocuments, studySubjects } from "./home/homeData";

const LOGIN_PATH = `/${ROUTE.AUTH}/${ROUTE.LOGIN}`;

function HomePage() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [selectedSemester, setSelectedSemester] = useState("all");

  const goToLogin = () => {
    navigate(LOGIN_PATH);
  };

  const filteredDocuments = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    const semesterMatches = (document: (typeof studyDocuments)[number]) =>
      selectedSemester === "all" || String(document.semester) === selectedSemester;
    const subjectMatches = (document: (typeof studyDocuments)[number]) =>
      selectedSubject === "all" || document.subjectCode === selectedSubject;

    return studyDocuments.filter((document) => {
      if (!semesterMatches(document) || !subjectMatches(document)) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      const searchableText =
        `${document.title} ${document.subjectCode} ${document.subjectName} ${document.description} ${document.uploader} semester ${document.semester}`.toLowerCase();
      return searchableText.includes(normalizedQuery);
    });
  }, [searchQuery, selectedSemester, selectedSubject]);

  const availableSubjects = useMemo(() => {
    if (selectedSemester === "all") {
      return studySubjects;
    }

    return studySubjects.filter((subject) => String(subject.semester) === selectedSemester);
  }, [selectedSemester]);

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchQuery(searchValue);
  };

  const handleSemesterChange = (semester: string) => {
    setSelectedSemester(semester);
    setSelectedSubject("all");
  };

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <main className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <HeroSection onLoginClick={goToLogin} />
        <FeaturesSection onLoginClick={goToLogin} />
        <StepsSection onLoginClick={goToLogin} />
        <DocumentHubSection
          availableSubjects={availableSubjects}
          filteredDocuments={filteredDocuments}
          searchQuery={searchQuery}
          searchValue={searchValue}
          selectedSemester={selectedSemester}
          selectedSubject={selectedSubject}
          onLoginClick={goToLogin}
          onSearchSubmit={handleSearchSubmit}
          onSearchValueChange={setSearchValue}
          onSearchQueryChange={setSearchQuery}
          onSelectedSemesterChange={handleSemesterChange}
          onSelectedSubjectChange={setSelectedSubject}
        />
        <RankingSection onLoginClick={goToLogin} />
        <TopRatedDocumentsSection onLoginClick={goToLogin} />
        <HomeFooterSection onLoginClick={goToLogin} />
      </main>
    </div>
  );
}

export default HomePage;
