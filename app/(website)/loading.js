import React from 'react';
import Image from "next/image"; // Replace with your actual image library
import { urlForImage } from "@/lib/sanity/image"; // Replace with your actual image transformer function

export default function Loading(props) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-950">
      <div className="w-32 h-32 animate-pulse">
        {props.logo ? (
          <Image
            {...urlForImage(props.logo)}
            alt="Logo"
            priority={true}
            className="w-full h-full rounded-full"
          />
        ) : (
          <span className="block text-center">M-Texx</span>
        )}
      </div>
      <p className="mt-4 text-gray-600">Loading...</p>
    </div>
  );
}
