import { memo } from "react";

export const ErrorState = memo(({ error }) => {
  if (!error) return null;
  
  return (
    <div className="p-4 my-4 text-center text-red-500 rounded-lg border bg-red-100/10 border-red-500/20">
      {error}
    </div>
  );
});