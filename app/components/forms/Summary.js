'use client';

export default function Summary({
                                    data,
                                    onConfirm,
                                    isPending
                                }) {
    return (
        <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-2">Review Your Information</h2>

            <div className="space-y-1">
                <h3 className="font-bold">Personal Info</h3>
                <p><strong>Name:</strong> {data.fullName}</p>
                <p><strong>Email:</strong> {data.email}</p>
                <p><strong>Phone:</strong> {data.phone}</p>
            </div>

            <div className="space-y-1">
                <h3 className="font-bold">Address</h3>
                <p><strong>Street:</strong> {data.street}</p>
                <p><strong>City:</strong> {data.city}</p>
                <p><strong>Zip:</strong> {data.zip}</p>
            </div>

            <div className="space-y-1">
                <h3 className="font-bold">Account</h3>
                <p><strong>Username:</strong> {data.username}</p>
            </div>

            <button
                onClick={onConfirm}
                disabled={isPending}
                className="btn w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
            >
                {isPending ? "Submitting..." : "Confirm & Submit"}
            </button>
        </div>
    );
}
