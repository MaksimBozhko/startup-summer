export const getContentText = (firm_activity: string, vacancyRichText: string) => {
  if (firm_activity?.includes("Обязанности") || firm_activity?.includes("Требования") || firm_activity?.includes("Условия")) {
    return firm_activity
  } else {
    return vacancyRichText
  }
}