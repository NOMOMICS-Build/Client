import { ButtonWithLoader } from "@/components/ui";
import { comicTypes } from "@/constants/data";
import { MainLayout } from "@/layouts";
import { CircleCheck, Circle } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const handleSelectType = (type: string) => {
    setSelectedType(type);
  };

  const handleContinue = () => {
    if (selectedType) {
      setLoading(true);
      setTimeout(() => {
        navigate(`${selectedType}`);
      }, 1000);
    }
  };

  return (
    <>
      <MainLayout>
        
        <div className="layout my-10 space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-secondary">Select Comic Type</h1>
            <p className="text-muted">
              Choose the type of comic you want to create
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {comicTypes.map((type) => (
              <div
                key={type.label}
                className={`flex cursor-pointer items-center justify-between gap-6 border border-line rounded-xl p-4 ${
                  selectedType === type.href
                    ? "bg-secondary/10 ring-secondary border-transparent group ring-2"
                    : ""
                }`}
                onClick={() => handleSelectType(type.href)}
              >
                <div className="space-y-1">
                  <h2 className="text-md font-medium capitalize group-hover:text-secondary">
                    {type.label}
                  </h2>
                  <p className="text-xs md:text-sm text-muted">
                    {type.description}
                  </p>
                </div>

                {selectedType === type.href ? (
                  <CircleCheck
                    size={18}
                    className="flex-shrink-0 text-secondary"
                  />
                ) : (
                  <Circle size={18} className="flex-shrink-0 text-muted" />
                )}
              </div>
            ))}
          </div>

          <ButtonWithLoader
          type="button"
          disabled={!selectedType}
          className="w-full btn-primary h-11 rounded-full"
          initialText="Continue"
          loadingText="Loading..."
          onClick={handleContinue}
          loading={loading}
        />
        </div>
      </MainLayout>
    </>
  );
};

export default Create;
