import { ChatResponse } from "../types.ts";

export function createResponse(
  user_id: string,
  session_id: string
): ChatResponse {
  return {
    user_id,
    session_id,
    title: "Order football t-shirts",
    answer: "",
    products: [],
    customizations: [],
    show_upload_placeholder: false,
  };
}
