// app/Providers.tsx
"use client"; // ← Bắt buộc phải có dòng này!

import { Provider } from "react-redux";
import { store } from "@/store"; // điều chỉnh đường dẫn nếu store nằm chỗ khác

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
