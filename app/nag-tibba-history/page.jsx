import GuideShell from "@/components/GuideShell";
import { guides } from "@/app/data";

const guide = guides.find((g) => g.slug === "nag-tibba-history");

export const metadata = {
  title: { absolute: guide.metaTitle },
  description: guide.description,
  keywords: [
    "Nag Tibba history",
    "Nag Tibba meaning",
    "Serpent's Peak",
    "Nag Devta temple",
    "Nag Tibba mythology",
    "Nag Tibba serpent god",
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
        Long before it became a favourite weekend trek, Nag Tibba was — and still is — a
        sacred mountain to the people of the Garhwal hills. Its name, its summit shrine and
        the traditions of the shepherds who graze these slopes all point to a peak woven
        into local faith. Here is the story behind{" "}
        <strong>Nag Tibba, the &ldquo;Serpent&apos;s Peak.&rdquo;</strong>
      </p>

      <h2>What does &ldquo;Nag Tibba&rdquo; mean?</h2>
      <p>
        The name comes from the local Garhwali language: <strong>&ldquo;Nag&rdquo;</strong>{" "}
        means serpent or snake — and, by extension, the serpent deity — while{" "}
        <strong>&ldquo;Tibba&rdquo;</strong> means a hill or peak. Put together, Nag Tibba
        translates to the <strong>&ldquo;Serpent&apos;s Peak&rdquo;</strong> or
        &ldquo;Hill of the Snake God.&rdquo; At 9,915 ft (3,022 m) it is the highest point
        of the Nag Tibba range in the Lesser Himalaya of the Garhwal region.
      </p>

      <h2>The Nag Devta temple</h2>
      <p>
        The heart of the mountain&apos;s significance is the{" "}
        <strong>Nag Devta (serpent-god) temple</strong> set among the trees below the
        summit. According to local belief, Nag Devta is the guardian deity of the region,
        and villagers come here to pray for the protection and well-being of their livestock
        and families. A small trident and shrine near the top mark the peak as a place of
        worship, not just a viewpoint — many trekkers pause here out of respect before
        taking in the views.
      </p>

      <h2>A mountain of the shepherds</h2>
      <p>
        For generations, Garhwali shepherds have brought their flocks up to the high meadows
        around Nag Tibba during the warmer months. It is largely their trails — worn in over
        centuries of seasonal grazing — that today&apos;s trekkers follow through the oak and
        rhododendron forest. The reverence for Nag Devta grew naturally from this life:
        communities that depend on cattle and sheep sought the blessing of the serpent god
        believed to watch over them.
      </p>

      <h2>Serpent worship in the Himalayas</h2>
      <p>
        Nag Tibba is part of a much older Himalayan tradition of <strong>Nag (serpent)
        worship</strong>. Across Uttarakhand and the wider hill regions, serpent deities are
        honoured as protectors of water, forests and livestock, and several peaks, springs
        and temples carry their name. Nag Tibba&apos;s summit shrine is one of the most
        visible expressions of this living folk faith — a reminder that in the Garhwal
        hills, the mountains themselves are considered sacred.
      </p>

      <h2>The peak today</h2>
      <p>
        Modern trekking discovered Nag Tibba as an ideal beginner summit — close to Mussoorie
        and Dehradun, walkable in a weekend, and open almost year-round. Yet its older
        identity endures: the temple, the trident and the shepherds&apos; trails are all part
        of what makes standing on the Serpent&apos;s Peak feel like more than just reaching a
        viewpoint.
      </p>

      <p>
        Want to stand on the summit yourself? Read our{" "}
        <a href="/nag-tibba-trek-guide">complete Nag Tibba trek guide</a>, or explore nearby{" "}
        <a href="/devalsari">Devalsari</a> — another corner of this valley shaped by faith and
        forest.
      </p>
    </GuideShell>
  );
}
