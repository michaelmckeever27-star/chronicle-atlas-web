const monthlyPence = 199;
const annualPence = 999;
const annualComparisonPence = monthlyPence * 12;
const annualSavingPence = annualComparisonPence - annualPence;
const annualSavingPercent =
  annualSavingPence > 0
    ? Math.floor((annualSavingPence / annualComparisonPence) * 100)
    : 0;
const hasAnnualSaving = annualSavingPence > 0;

function formatGBP(pence: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2,
  }).format(pence / 100);
}

export const premiumPricing = Object.freeze({
  monthlyPence,
  annualPence,
  annualComparisonPence,
  annualSavingPence,
  annualSavingPercent,
  hasAnnualSaving,
  monthlyPrice: formatGBP(monthlyPence),
  annualPrice: formatGBP(annualPence),
  annualComparisonPrice: formatGBP(annualComparisonPence),
  annualSavingPrice: formatGBP(annualSavingPence),
});

export const premiumBillingDisclosure =
  "UK pricing. Prices may vary by App Store region. Subscribe inside the iPhone app. Subscriptions renew automatically unless cancelled. Manage or cancel in App Store settings.";
