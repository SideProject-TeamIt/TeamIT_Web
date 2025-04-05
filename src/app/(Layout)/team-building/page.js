import IntroSection from '@/components/team-building/IntroSection';
import ProcessSteps from '@/components/team-building/ProcessSteps';
import FeatureCards from '@/components/team-building/FeatureCards';
import SuccessStory from '@/components/team-building/SuccessStory';
import ServiceHighlights from '@/components/team-building/ServiceHighlights';

export default function TeamBuildingPage() {
  return (
    <main className="bg-sectionBg text-gray-800">
      <IntroSection />
      <ProcessSteps />
      <FeatureCards />
      <SuccessStory />
      <ServiceHighlights />
    </main>
  );
}
