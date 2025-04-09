import { useState } from 'react';

export const useMultiStepForm = (steps) => {
    const [currentStep, setCurrentStep] = useState(0);

    const next = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    const back = () => setCurrentStep((prev) => Math.max(prev - 1, 0));
    const goTo = (step) => setCurrentStep(step);

    return {
        currentStep,
        step: steps[currentStep],
        isFirstStep: currentStep === 0,
        isLastStep: currentStep === steps.length - 1,
        next,
        back,
        goTo,
    };
};
