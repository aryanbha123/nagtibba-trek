import GuideShell from "@/components/GuideShell";
import { guides } from "@/app/data";

const guide = guides.find((g) => g.slug === "how-to-reach-nag-tibba");

export const metadata = {
  title: { absolute: guide.metaTitle },
  description: guide.description,
  keywords: [
    "how to reach Nag Tibba",
    "Nag Tibba from Delhi",
    "Nag Tibba from Dehradun",
    "Nag Tibba from Mussoorie",
    "Nag Tibba base village",
    "Munglori village",
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
        The Nag Tibba Trek starts from <strong>Munglori Village</strong>, near Thatyur in
        Tehri Garhwal, Uttarakhand. The nearest major city is <strong>Dehradun</strong>,
        which is well connected to Delhi and the rest of India by air, train and road. This
        guide breaks down every route to the base — whether you&apos;re coming from Delhi,
        Dehradun or Mussoorie.
      </p>

      <h2>Quick reference</h2>
      <table>
        <thead>
          <tr>
            <th>From</th>
            <th>Distance</th>
            <th>Approx. time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Delhi → Dehradun</td>
            <td>~250 km</td>
            <td>6–7 hours</td>
          </tr>
          <tr>
            <td>Dehradun → Munglori (base)</td>
            <td>~80 km</td>
            <td>3–3.5 hours</td>
          </tr>
          <tr>
            <td>Mussoorie → Munglori (base)</td>
            <td>~55 km</td>
            <td>2.5–3 hours</td>
          </tr>
        </tbody>
      </table>

      <h2>Getting to Dehradun first</h2>
      <p>
        Almost every route to Nag Tibba passes through Dehradun, so reach here first:
      </p>
      <ul>
        <li>
          <strong>By air:</strong> Jolly Grant Airport (DED) has daily flights from Delhi,
          Mumbai, Bengaluru and other cities. The base is about a 3.5-hour drive from the
          airport.
        </li>
        <li>
          <strong>By train:</strong> Dehradun Railway Station is connected to Delhi by the
          Nanda Devi Express, Shatabdi and Jan Shatabdi. Overnight trains from Delhi are the
          most popular option for weekend trekkers.
        </li>
        <li>
          <strong>By bus:</strong> Regular Volvo and state buses run from Delhi&apos;s ISBT
          Kashmiri Gate to Dehradun ISBT through the night.
        </li>
      </ul>

      <h2>From Delhi to Nag Tibba</h2>
      <p>
        Most trekkers take an <strong>overnight train or bus from Delhi to Dehradun</strong>{" "}
        (6–7 hours), arriving early morning, then continue to the base by road. If you book
        a premium or private package with us, we arrange pickup from Dehradun so you can
        travel straight through. Self-drivers can take the Delhi–Dehradun Expressway, then
        the Dehradun → Mussoorie → Thatyur → Munglori road.
      </p>

      <h2>From Dehradun to the base (Munglori Village)</h2>
      <p>
        From Dehradun, the drive to Munglori is roughly 80 km and 3–3.5 hours via Mussoorie
        and Thatyur. The road is scenic but winding in the final stretch through the Aglar
        valley, so allow buffer time. Shared taxis and private cabs are available from
        Dehradun; on our group departures, transport arrangements are shared with your batch
        before departure.
      </p>

      <h2>From Mussoorie to the base</h2>
      <p>
        If you&apos;re already in Mussoorie, the base is only about 55 km away (2.5–3 hours)
        via the Thatyur road. This is the shortest approach and a good option if you&apos;re
        combining the trek with a Mussoorie stay.
      </p>

      <h2>A note on the final stretch</h2>
      <p>
        The last leg to Munglori is a mountain road with limited public transport, so a
        pre-arranged vehicle is strongly recommended. Mobile network can be patchy beyond
        Thatyur — download your route offline and share your plans before you leave. Prefer
        us to handle the logistics? Our{" "}
        <a href="/nag-tibba-trek-guide">complete trek guide</a> explains the packages that
        include Dehradun pickup and drop.
      </p>
    </GuideShell>
  );
}
