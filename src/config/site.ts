/** Public contact details only. Leave unknown values empty; never add credentials here. */
export const site = {
  name: "FrameLab",
  url: "https://framelabstore.com/",
  location: "Quito, Ecuador",
  whatsappNumber: "593984395918", // International digits only, e.g. country code followed by number.
  email: "",
  socials: { instagram: "", facebook: "", linkedin: "" },
} as const;

export function getWhatsAppUrl(message: string): string | undefined {
  const number = site.whatsappNumber.replace(/\D/g, "");
  return number
    ? `https://wa.me/${number}?text=${encodeURIComponent(message)}`
    : undefined;
}
