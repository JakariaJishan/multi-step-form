'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {personalSchema} from "@/app/schemas/formSchemas";

export default function Step1({ onSubmit, defaultValues }) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(personalSchema),
        defaultValues,
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input {...register("fullName")} placeholder="Full Name" className="input" />
            {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}

            <input {...register("email")} placeholder="Email" className="input" />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}

            <input {...register("phone")} placeholder="Phone" className="input" />
            {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}

            <button type="submit" className="btn btn-primary">Next</button>
        </form>
    );
}
