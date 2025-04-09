'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {accountSchema} from "@/app/schemas/formSchemas";

export default function Step3({ onSubmit, defaultValues }) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(accountSchema),
        defaultValues,
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input {...register("username")} placeholder="Username" className="input w-full p-2 border rounded" />
            {errors.username && <p className="text-red-500">{errors.username.message}</p>}

            <input type="password" {...register("password")} placeholder="Password" className="input w-full p-2 border rounded" />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}

            <input type="password" {...register("confirmPassword")} placeholder="Confirm Password" className="input w-full p-2 border rounded" />
            {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}

            <button type="submit" className="btn btn-primary">Next</button>
        </form>
    );
}
