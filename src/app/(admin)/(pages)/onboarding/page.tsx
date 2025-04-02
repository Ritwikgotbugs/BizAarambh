import ProgressBar from "@/components/form/bar";
import StepForm from "@/components/form/stepform";
export default function Onboarding() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-6 p-6">
      <ProgressBar />
      <StepForm />
    </div>
  );
}
