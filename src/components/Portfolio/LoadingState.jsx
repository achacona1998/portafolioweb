import { memo } from "react";

export const LoadingState = memo(({ isLoading }) => {
  if (!isLoading) return null;
  
  return (
    <div className="flex gap-3 justify-center items-center py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#77001A]"></div>
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#77001A]"></div>
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#77001A]"></div>
    </div>
  );
});