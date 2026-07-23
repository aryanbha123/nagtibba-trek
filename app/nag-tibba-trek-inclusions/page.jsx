import GuideShell from "@/components/GuideShell";
import { guides } from "@/app/data";

const guide = guides.find((g) => g.slug === "nag-tibba-trek-inclusions");

export const metadata = {
  title: { absolute: guide.metaTitle },
  description: guide.description,
  keywords: [
    "Nag Tibba trek inclusions",
    "what is included in Nag Tibba trek",
    "Nag Tibba trek package details",
    "Nag Tibba trek exclusions",
    "Nag Tibba trek cost included",
    "Nag Tibba trek what to carry",
  ],
  alternates: { canonical: `/${guide.slug}` },
  openGraph: {
    type: "article",
    url: `https://nagtibbatreks.in/${guide.slug}`,
    title: guide.title,
    description: guide.description,
    images: [{ url: guide.image }],
  },
};

export default function Page() {
  return (
    <GuideShell {...guide}>
      <p>
        Before you book, it helps to know exactly what your{" "}
        <strong>Nag Tibba Trek</strong> package covers — and what you&apos;ll want to
        carry or budget for yourself. Here is a clear, honest breakdown of the inclusions
        and exclusions for our small-batch departures from Munglori Village.
      </p>

      <h2>What&apos;s included in the Nag Tibba Trek</h2>
      <p>Every group departure comes with the essentials taken care of:</p>
      <ul>
        <li>Nutritious meals during the trek</li>
        <li>Comfortable alpine camping</li>
        <li>Sleeping bags, sleeping mats &amp; tent accommodation</li>
        <li>Experienced local trek leader and support staff</li>
        <li>Basic first-aid kit for emergencies</li>
        <li>Bonfire (weather permitting)</li>
        <li>Trek briefing and assistance throughout the journey</li>
        <li>Transportation to and from Munglori Village (included only in selected packages)</li>
      </ul>
      <p>
        Transport is bundled with our premium and private packages rather than every batch,
        so check the{" "}
        <a href="/#packages">package details</a> or message us to confirm which itinerary
        includes pickup and drop.
      </p>

      <h2>What&apos;s not included</h2>
      <p>To keep pricing transparent, these are handled by you:</p>
      <ul>
        <li>Packaged drinking water, personal snacks &amp; beverages</li>
        <li>Personal trekking gear, clothing &amp; toiletries</li>
        <li>Personal medication and medical expenses</li>
        <li>Travel insurance</li>
        <li>Any expense arising due to weather, natural calamities, or unforeseen circumstances</li>
      </ul>

      <h2>Planning around the exclusions</h2>
      <p>
        Most exclusions are about your personal comfort and safety. Carry your own warm
        layers, sturdy trekking shoes and any medication you rely on. For a full checklist of
        what to pack, read the{" "}
        <a href="/nag-tibba-trek-guide">complete Nag Tibba trek guide</a>, and if you&apos;re
        trekking in winter, see the extra gear listed in the{" "}
        <a href="/nag-tibba-snow-trek">Nag Tibba snow trek guide</a>.
      </p>

      <h2>Ready to book?</h2>
      <p>
        Once you know what&apos;s covered, the rest is easy. Check{" "}
        <a href="/how-to-reach-nag-tibba">how to reach the base at Munglori</a>, pick a batch,
        and message us on WhatsApp below — we&apos;ll confirm current pricing, available
        weekends and exactly what your chosen package includes.
      </p>
    </GuideShell>
  );
}
