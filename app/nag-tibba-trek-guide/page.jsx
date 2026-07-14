import GuideShell from "@/components/GuideShell";
import { guides } from "@/app/data";

const guide = guides.find((g) => g.slug === "nag-tibba-trek-guide");

export const metadata = {
  title: { absolute: guide.metaTitle },
  description: guide.description,
  keywords: [
    "Nag Tibba trek",
    "Nag Tibba trek itinerary",
    "Nag Tibba trek cost",
    "Nag Tibba trek difficulty",
    "Nag Tibba best time",
    "weekend trek from Dehradun",
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
        The <strong>Nag Tibba Trek</strong> is one of the most loved weekend treks in
        Uttarakhand — an easy Himalayan summit that beginners, families and first-time
        trekkers can complete in a single weekend. At <strong>9,915 ft (3,022 m)</strong>,
        Nag Tibba is the highest peak in the Nag Tibba range of the Garhwal Himalayas, and
        the summit rewards you with a sweeping panorama of Swargarohini, Bandarpoonch,
        Srikanth and the Gangotri group. This guide covers everything you need to plan the
        trek: difficulty, the best time to go, a day-by-day itinerary, cost, what to pack
        and how to book.
      </p>

      <h2>Nag Tibba trek at a glance</h2>
      <table>
        <tbody>
          <tr>
            <th>Altitude</th>
            <td>9,915 ft (3,022 m)</td>
          </tr>
          <tr>
            <th>Duration</th>
            <td>2 days / 1 night</td>
          </tr>
          <tr>
            <th>Trek distance</th>
            <td>8–10 km round trip</td>
          </tr>
          <tr>
            <th>Difficulty</th>
            <td>Easy (beginner-friendly)</td>
          </tr>
          <tr>
            <th>Base village</th>
            <td>Munglori Village (via Thatyur)</td>
          </tr>
          <tr>
            <th>Best season</th>
            <td>September to May (snow in Jan–Feb)</td>
          </tr>
        </tbody>
      </table>

      <h2>Is the Nag Tibba trek difficult?</h2>
      <p>
        No — Nag Tibba is graded <strong>easy</strong> and is widely considered one of the
        best treks for beginners in the Indian Himalayas. The trail climbs gradually
        through oak and rhododendron forest, and the total walking distance is only about
        8–10 km over two days. You do not need any prior trekking experience or technical
        skills. A basic level of fitness — the ability to walk 4–5 hours with a light
        daypack — is enough. Children and older first-timers do this trek comfortably with
        a guide.
      </p>

      <h2>Best time to visit Nag Tibba</h2>
      <p>
        Nag Tibba is a rare <strong>year-round trek</strong>, but each season feels
        different:
      </p>
      <ul>
        <li>
          <strong>September–November:</strong> clear skies, crisp air and the sharpest
          mountain views — the best window for photography.
        </li>
        <li>
          <strong>December–February:</strong> snow season. The trail and campsite turn
          white, making it Uttarakhand&apos;s most accessible winter snow trek. See our{" "}
          <a href="/nag-tibba-snow-trek">Nag Tibba snow trek guide</a> for details.
        </li>
        <li>
          <strong>March–May:</strong> pleasant temperatures and blooming rhododendrons on
          the lower slopes.
        </li>
      </ul>
      <p>The monsoon (July–August) is best avoided due to slippery trails and leeches.</p>

      <h2>Nag Tibba trek itinerary (2 days)</h2>
      <h3>Day 1 — Munglori Village to Summit Base Camp</h3>
      <p>
        The trek begins around 9:00 AM from Munglori Village. You&apos;ll walk 8–10 km
        (roughly 4–5 hours) through shaded forest to the Nag Tibba Summit Base Camp, where
        you check into tents. After lunch there&apos;s time to rest, enjoy evening tea, watch
        the sunset (weather permitting) and gather around a bonfire before dinner and an
        overnight stay under the stars.
      </p>
      <h3>Day 2 — Sunrise, Summit &amp; Return</h3>
      <p>
        Wake early for a Himalayan sunrise, then push to the Nag Tibba summit for panoramic
        views and photography. After breakfast at base camp, you trek back down to Munglori
        Village (about 3–4 hours), where the trek concludes. See the full{" "}
        <a href="/#itinerary">day-by-day itinerary</a> on our homepage.
      </p>

      <h2>How to reach the base</h2>
      <p>
        The trek starts from Munglori Village near Thatyur, reachable by road from Dehradun
        (~3 hours) and Mussoorie. Most trekkers travel to Dehradun by train, flight or bus,
        then drive to the base. Full routes and timings are in our{" "}
        <a href="/how-to-reach-nag-tibba">how to reach Nag Tibba</a> guide.
      </p>

      <h2>What to pack</h2>
      <ul>
        <li>Sturdy trekking shoes with good grip</li>
        <li>A 30–40L backpack</li>
        <li>Warm layers — fleece and a jacket (essential even in summer nights)</li>
        <li>A waterproof/windproof outer layer</li>
        <li>Water bottle, sunscreen, cap and sunglasses</li>
        <li>Personal medication and a small first-aid kit</li>
        <li>Headlamp or torch, and a power bank</li>
      </ul>

      <h2>Nag Tibba trek cost &amp; packages</h2>
      <p>
        Our group departures start at <strong>₹4,000 per trekker</strong> and include
        shared alpine camps, fresh mountain meals, sleeping bags and mats, forest permits
        and experienced local trek leaders. Premium small-batch and fully private options
        add Dehradun pickup, smaller groups and the Devalsari experience. Compare all three
        on our <a href="/#packages">packages section</a>.
      </p>

      <h2>Where you&apos;ll stay</h2>
      <p>
        You spend the night in shared alpine tents at the Summit Base Camp, with sleeping
        bags, liners and trekking mats provided. Meals are cooked fresh on the mountain by
        our support team. Everything except your personal gear and transport to the base is
        included.
      </p>

      <p>
        Ready to lock a weekend? <a href="/#faqs">Read the FAQs</a> or message us on
        WhatsApp below and we&apos;ll help you pick the right batch.
      </p>
    </GuideShell>
  );
}
