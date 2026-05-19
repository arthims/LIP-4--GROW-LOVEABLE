export type Review = {
  id: string;
  store: "App Store" | "Play Store";
  rating: 1 | 2 | 3 | 4 | 5;
  title: string;
  text: string;
  date: string; // ISO
  theme: "Onboarding" | "KYC" | "Payments" | "Statements" | "Withdrawals";
};

const today = new Date();
const daysAgo = (n: number) =>
  new Date(today.getTime() - n * 86400000).toISOString().slice(0, 10);

export const reviews: Review[] = [
  { id: "1", store: "App Store", rating: 2, title: "Onboarding is endless", text: "Took me 25 minutes just to create an account. Way too many steps and the OTP never arrived the first time.", date: daysAgo(3), theme: "Onboarding" },
  { id: "2", store: "Play Store", rating: 1, title: "KYC rejected 4 times", text: "My ID is perfectly valid but the KYC keeps failing with no clear reason. Support takes days.", date: daysAgo(5), theme: "KYC" },
  { id: "3", store: "App Store", rating: 5, title: "Payments are smooth", text: "Sending money to friends is instant and the UI is gorgeous. Best finance app I've used.", date: daysAgo(7), theme: "Payments" },
  { id: "4", store: "App Store", rating: 2, title: "Withdrawal stuck", text: "Tried to withdraw $400 three days ago, still pending. No notification, no ETA.", date: daysAgo(9), theme: "Withdrawals" },
  { id: "5", store: "Play Store", rating: 3, title: "Statements hard to find", text: "Why is downloading a monthly statement buried under 5 menus? Should be one tap.", date: daysAgo(12), theme: "Statements" },
  { id: "6", store: "App Store", rating: 4, title: "Love the redesign", text: "Onboarding flow feels fresh, but the camera step for ID capture is finicky in low light.", date: daysAgo(14), theme: "Onboarding" },
  { id: "7", store: "Play Store", rating: 2, title: "KYC verification loop", text: "After uploading my passport it just spins and says 'pending review' for 6 days.", date: daysAgo(18), theme: "KYC" },
  { id: "8", store: "App Store", rating: 5, title: "Apple Pay integration is chef's kiss", text: "Payments through Apple Pay just work. Refunds also arrived in under a day.", date: daysAgo(21), theme: "Payments" },
  { id: "9", store: "Play Store", rating: 1, title: "Can't withdraw to my bank", text: "My bank isn't supported even though it's a major one. App suggests no alternative.", date: daysAgo(24), theme: "Withdrawals" },
  { id: "10", store: "App Store", rating: 3, title: "Statements PDF is broken", text: "Downloaded statement opens as a blank PDF. Had to email support to get a copy.", date: daysAgo(28), theme: "Statements" },
  { id: "11", store: "Play Store", rating: 2, title: "Sign-up crashes on Android 12", text: "App crashes on the email confirmation step on my Pixel 6. Reinstalled twice.", date: daysAgo(32), theme: "Onboarding" },
  { id: "12", store: "App Store", rating: 4, title: "KYC finally went through", text: "After 3 tries the selfie verification worked. Lighting matters a lot — guidance unclear.", date: daysAgo(36), theme: "KYC" },
  { id: "13", store: "Play Store", rating: 5, title: "Card payments are fast", text: "Tap-to-pay works flawlessly even on transit. Love the haptic confirmation.", date: daysAgo(40), theme: "Payments" },
  { id: "14", store: "App Store", rating: 1, title: "Withdrawal fee is hidden", text: "Got charged $8 to move my own money out. Fee was nowhere on the confirmation screen.", date: daysAgo(45), theme: "Withdrawals" },
  { id: "15", store: "Play Store", rating: 3, title: "Need yearly statement export", text: "Only monthly PDFs available. For taxes I need a yearly CSV. Please add this.", date: daysAgo(50), theme: "Statements" },
  { id: "16", store: "App Store", rating: 2, title: "Onboarding asks too much", text: "Why do you need my mother's maiden name AND my employer at sign-up? Felt invasive.", date: daysAgo(55), theme: "Onboarding" },
  { id: "17", store: "Play Store", rating: 2, title: "KYC support unreachable", text: "Stuck in KYC review for 10 days. Chat bot loops, no human ever responds.", date: daysAgo(60), theme: "KYC" },
  { id: "18", store: "App Store", rating: 5, title: "Recurring payments saved me", text: "Set up rent autopay in 30 seconds. Never missed a month since.", date: daysAgo(65), theme: "Payments" },
  { id: "19", store: "Play Store", rating: 2, title: "Withdraw delay killing me", text: "ACH withdrawal took 5 business days. Competitors do same-day.", date: daysAgo(70), theme: "Withdrawals" },
  { id: "20", store: "App Store", rating: 4, title: "Statements look great now", text: "New statement layout is much cleaner. Still wish I could filter by category.", date: daysAgo(76), theme: "Statements" },
];
