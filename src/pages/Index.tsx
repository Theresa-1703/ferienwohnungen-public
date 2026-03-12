import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ApartmentsSection from "@/components/ApartmentsSection";
import HistorySection from "@/components/HistorySection";
import GondelSection from "@/components/GondelSection.tsx";
import ActivitiesSection from "@/components/ActivitiesSection";
import InquiryForm from "@/components/InquiryForm";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen home-page">
      <Header />
      <HeroSection />
      <ApartmentsSection />
      <HistorySection />
      <GondelSection />
      <ActivitiesSection />
      <InquiryForm />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;
