export const config = {
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || "",
  whatsappPhone: process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "",
  whatsappUrl: process.env.NEXT_PUBLIC_WHATSAPP_URL || "",
  trackSiteVisit: process.env.NEXT_PUBLIC_API_TRACKSITEVISIT || "",
  trackStartFreeClick: process.env.NEXT_PUBLIC_API_TRACKSTARTFREECLICK || "",
  trackScheduleDemoClick:
    process.env.NEXT_PUBLIC_API_TRACKSCHEDULEDEMOCLICK || "",
  trackScheduleQuestionClick:
    process.env.NEXT_PUBLIC_API_TRACKSCHEDULEQUESTIONCLICK || "",
  registerContact: process.env.NEXT_PUBLIC_API_REGISTERCONTACT || "",
};
