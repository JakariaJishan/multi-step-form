'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {addressSchema} from "@/app/schemas/formSchemas";

export default function Step2({ onSubmit, defaultValues }) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(addressSchema),
        defaultValues,
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input {...register("street")} placeholder="Street Address" className="input w-full p-2 border rounded" />
            {errors.street && <p className="text-red-500">{errors.street.message}</p>}

            <input {...register("city")} placeholder="City" className="input w-full p-2 border rounded" />
            {errors.city && <p className="text-red-500">{errors.city.message}</p>}

            <input {...register("zip")} placeholder="Zip Code" className="input w-full p-2 border rounded" />
            {errors.zip && <p className="text-red-500">{errors.zip.message}</p>}

            <button type="submit" className="btn btn-primary">Next</button>
        </form>
    );
}
