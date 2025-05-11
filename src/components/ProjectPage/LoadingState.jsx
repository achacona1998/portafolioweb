import { memo } from "react";
import { LOADING_MESSAGE } from "../../constants/projectPageData";

export const LoadingState = memo(() => (
  <p className="py-10 text-center text-white">{LOADING_MESSAGE}</p>
));