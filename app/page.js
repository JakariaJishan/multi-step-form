'use client';

import {useState} from 'react';
import {useMultiStepForm} from './hooks/useMultiStepForm';
import Step1 from "@/app/components/forms/Step1";
import Step2 from "@/app/components/forms/Step2";
import Step3 from "@/app/components/forms/Step3";
import Summary from "@/app/components/forms/Summary";
import {useMutation} from "@tanstack/react-query";
import {submitForm} from "@/app/lib/api";
import ThemeToggle from "@/app/components/theme/ThemeToggle";

const initialState = {
    fullName: '', email: '', phone: '',
    street: '', city: '', zip: '',
    username: '', password: '', confirmPassword: ''
};

export default function MultiStepFormPage() {
    const [data, setData] = useState(initialState);

    const updateFields = (fields) => {
        setData(prev => ({...prev, ...fields}));
    };

    const mutation = useMutation({
        mutationFn: submitForm,
        onSuccess: () => {
            alert("Form submitted!");
            setData(initialState);
            goTo(0);
        },
    });

    const steps = [
        <Step1 key="1" defaultValues={data} onSubmit={(d) => {
            updateFields(d);
            next();
        }}/>,
        <Step2 key="2" defaultValues={data} onSubmit={(d) => {
            updateFields(d);
            next();
        }}/>,
        <Step3 key="3" defaultValues={data} onSubmit={(d) => {
            updateFields(d);
            next();
        }}/>,
        <Summary key="4" data={data} onConfirm={() => mutation.mutate(data)}
                 isPending={mutation.isPending}/>
    ];

    const {step, currentStep, next, back, isFirstStep, isLastStep, goTo} = useMultiStepForm(steps);

    return (
        <div className="max-w-xl mx-auto p-6 ">
            <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600 dark:text-gray-300">Step {currentStep + 1} of {steps.length}</span>
                <ThemeToggle />
            </div>

            {step}

            {!isFirstStep && (
                <button onClick={back} className="btn btn-secondary mt-4">Previous</button>
            )}
        </div>
    );
}
