import GuideShell from "@/components/GuideShell";
import { guides } from "@/app/data";

const guide = guides.find((g) => g.slug === "devalsari");

export const metadata = {
  title: { absolute: guide.metaTitle },
  description: guide.description,
  keywords: [
    "Devalsari",
    "Devalsari Uttarakhand",
    "Devalsari deodar forest",
    "Devalsari temple",
    "Devalsari eco tourism",
    "Devalsari birding",
    "Aglar valley",
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
        Tucked into the <strong>Aglar River valley</strong> of Tehri Garhwal, Devalsari is a
        quiet forest hamlet that few travellers have heard of — and that is exactly its
        charm. Famous for its ancient deodar groves, a centuries-old Shiva temple and some of
        the richest birdlife in the Garhwal foothills, <strong>Devalsari</strong> is a
        growing eco-tourism destination and a perfect, gentle companion to the Nag Tibba
        trek. Here&apos;s what makes it special.
      </p>

      <h2>Where is Devalsari?</h2>
      <p>
        Devalsari sits at around 1,722 m (5,650 ft) in the Aglar valley, near Thatyur and
        Munglori Village — the same base area used for the Nag Tibba trek. Its location, off
        the main tourist routes, is why the forest here has stayed so pristine and the pace
        so unhurried.
      </p>

      <h2>The ancient deodar forest</h2>
      <p>
        Devalsari is best known for its <strong>old-growth deodar (Himalayan cedar)
        forest</strong> — one of the finest stands of these towering, fragrant conifers in
        the region. Walking beneath the deodars, with light filtering through the high
        canopy, is the essence of a Devalsari visit. The community has long protected these
        woods, and that stewardship is central to the area&apos;s eco-tourism today.
      </p>

      <h2>The Devalsari Mahadev temple</h2>
      <p>
        In a clearing within the forest stands the <strong>Devalsari Mahadev temple</strong>,
        an ancient shrine dedicated to Lord Shiva. It is an important place of worship for
        the surrounding villages and draws devotees, especially during its annual fair. Like
        the Nag Devta shrine on Nag Tibba, the temple is a reminder that in these valleys
        forest and faith are deeply intertwined — you can read more about that tradition in
        our <a href="/nag-tibba-history">history of Nag Tibba</a>.
      </p>

      <h2>A paradise for birdwatchers</h2>
      <p>
        The undisturbed deodar and oak forest makes Devalsari a superb{" "}
        <strong>birding and butterfly destination</strong>. Naturalists come here to spot
        Himalayan species that are hard to see elsewhere, and the area is increasingly on the
        map for wildlife photographers and slow-travel enthusiasts. A quiet walk with a local
        naturalist is the best way to experience it.
      </p>

      <h2>Devalsari with your Nag Tibba trek</h2>
      <p>
        Because it sits so close to the Nag Tibba base, Devalsari makes an ideal{" "}
        <strong>half-day add-on</strong> — a relaxed cultural visit or gentle acclimatisation
        walk before the summit push. It&apos;s included in our premium and private packages:
        you spend an unhurried half-day walking shaded village trails, visiting the temple and
        sharing tea with local families before the climb.
      </p>

      <h2>Plan your visit</h2>
      <p>
        Devalsari is best combined with the two-day summit trek. See the{" "}
        <a href="/nag-tibba-trek-guide">complete Nag Tibba trek guide</a> to plan your trip,
        check <a href="/how-to-reach-nag-tibba">how to reach the base</a>, or message us on
        WhatsApp below to book a package that includes the Devalsari experience.
      </p>
    </GuideShell>
  );
}
