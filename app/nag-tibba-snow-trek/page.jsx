import GuideShell from "@/components/GuideShell";
import { guides } from "@/app/data";

const guide = guides.find((g) => g.slug === "nag-tibba-snow-trek");

export const metadata = {
  title: { absolute: guide.metaTitle },
  description: guide.description,
  keywords: [
    "Nag Tibba snow trek",
    "Nag Tibba in winter",
    "Nag Tibba in January",
    "Nag Tibba snowfall",
    "winter trek Uttarakhand",
    "snow trek near Delhi",
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
        Nag Tibba is one of the few Himalayan summits you can reach in deep snow without any
        technical mountaineering — which makes the{" "}
        <strong>Nag Tibba snow trek</strong> one of the most popular winter treks near
        Delhi and Dehradun. When the range turns white between December and February, the
        forest, the base camp and the summit ridge become a proper winter wonderland, and it
        stays achievable for fit beginners with the right gear and a guide.
      </p>

      <h2>When does it snow on Nag Tibba?</h2>
      <p>
        The reliable snow window is <strong>January and February</strong>, with the first
        snow often arriving in late December. By this time the higher sections of the trail
        and the Summit Base Camp are usually under a fresh white blanket. Snow conditions
        vary year to year, so message us before booking a winter batch and we&apos;ll tell
        you the current situation on the mountain.
      </p>

      <h2>What the winter trail is like</h2>
      <p>
        The route is the same 8–10 km two-day trek, but snow changes the experience:
      </p>
      <ul>
        <li>The forest floor and meadows are covered in snow, so pace is slower.</li>
        <li>The final push to the summit can be icy — trekking with a guide matters most here.</li>
        <li>Nights at base camp are cold, often below freezing, but the tents and sleeping bags are rated for it.</li>
        <li>Clear winter skies deliver some of the sharpest Himalayan views of the whole year.</li>
      </ul>

      <h2>Winter gear checklist</h2>
      <p>Snow trekking needs a bit more preparation than the summer trail. Bring:</p>
      <ul>
        <li>Waterproof trekking shoes with good grip (and gaiters if you have them)</li>
        <li>Multiple warm layers — thermals, fleece and an insulated jacket</li>
        <li>Waterproof gloves, a woollen cap and warm socks (carry a spare pair)</li>
        <li>A waterproof outer shell for jacket and trousers</li>
        <li>Sunglasses — snow glare is strong — plus sunscreen and lip balm</li>
        <li>A headlamp and a power bank (cold drains batteries fast)</li>
      </ul>
      <p>
        Our winter departures provide cold-rated sleeping bags, liners and mats; you handle
        your personal warm clothing.
      </p>

      <h2>Safety in the snow</h2>
      <p>
        A snow summit is very doable, but it is less forgiving than the summer trek. Trek
        with an experienced local leader, keep to the group&apos;s pace, stay hydrated even
        when it&apos;s cold, and tell someone your plans — mobile coverage is patchy beyond
        Thatyur. If conditions turn unsafe, our leaders will adjust the plan; the summit is
        never worth a needless risk.
      </p>

      <h2>Plan your winter trek</h2>
      <p>
        New to the trek? Start with the{" "}
        <a href="/nag-tibba-trek-guide">complete Nag Tibba trek guide</a>, then check{" "}
        <a href="/how-to-reach-nag-tibba">how to reach the base</a>. Winter weekends fill
        fast — message us on WhatsApp below to hold a slot.
      </p>
    </GuideShell>
  );
}
