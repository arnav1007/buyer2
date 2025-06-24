'use client';

import { useRouter } from 'next/navigation';

export default function ThankYou() {
  const router = useRouter();

  return (
    <div className="h-[80vh] flex flex-col justify-center items-center bg-white px-4 pt-24 font-[NSregular] mt-10">
      {/* Checkmark Icon */}
      <div className="bg-[#194185] rounded-full w-28 h-28 flex items-center justify-center mb-6">
        <svg
          className="w-14 h-14 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      {/* Thank You Text */}
      <p className="text-center  text-[24px] md:text-[28px] font-semibold text-[#1A1A1A]">
        Thank you for your query,<br />we will connect with you shortly.
      </p>

      {/* Optional: Back to Home */}
      <button
        onClick={() => router.push('/')}
        className="mt-8  text-[#194185] px-6 py-2 rounded-[20px] border border-[#194185] cursor-pointer transition"
      >
        Back to Dashboard
      </button>
    </div>
  );
}
