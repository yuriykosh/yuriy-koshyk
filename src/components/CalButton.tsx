"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export default function CalButton() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "default" });

      // Floating button
      cal("floatingButton", {
        calLink: "yuriy-koshyk/default",
        config: { layout: "column_view" },
        buttonColor: "#232323",
        buttonText: "Book a call",
      });

      // Inline UI (optional)
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#fccee8" },
          dark: { "cal-brand": "#fccee8" },
        },
        hideEventTypeDetails: false,
        layout: "column_view",
      });
    })();
  }, []);

  return null; // Nothing is rendered in DOM; floating button is handled by Cal.com
}
