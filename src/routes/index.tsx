import { createFileRoute } from "@tanstack/react-router";
import {
  Instagram,
  MapPin,
  Phone,
  Clock,
  Star,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Reveal, PhotoSlot } from "@/components/site/Reveal";
import { images } from "@/lib/images";

export const Route = createFileRoute("/")({
  component: Index,
});

const popular = [
  {
    name: "Spanish Latte",
    desc: "Silky double shot with condensed milk — our house signature.",
    price: "dh33",
    img: images.latte,
  },
  {
    name: "Iced Matcha Latte",
    desc: "Ceremonial grade matcha layered over cold milk.",
    price: "dh33",
    img: images.matcha,
  },
  {
    name: "Almond Croissant",
    desc: "Laminated for two days, filled with almond cream.",
    price: "dh25",
    img: images.pastries,
  },
  {
    name: "Smoked Turkey Bagel",
    desc: "House-baked seeded bagel, melted cheese, smoked turkey.",
    price: "dh36",
    img: images.bagel,
  },
];

const menu = [
  {
    title: "Black",
    items: [
      ["Espresso", "dh19"],
      ["Americano", "dh20"],
      ["Long Black", "dh19"],
      ["Cold Brew", "dh29"],
      ["V60", "dh36"],
    ],
  },
  {
    title: "White",
    items: [
      ["3oz (Espresso + Milk)", "dh22"],
      ["5oz (Espresso + Milk)", "dh25"],
      ["6oz (Espresso + Milk)", "dh27"],
      ["Spanish Cortado", "dh30"],
      ["Spanish Latte", "dh33"],
    ],
  },
  {
    title: "Signature",
    items: [
      ["Espresso Tonic", "dh33"],
      ["Matcha Latte", "dh33"],
      ["Strawberry Field Matcha", "dh36"],
      ["Hibiscus", "dh33"],
      ["Affogato", "dh27"],
    ],
  },
  {
    title: "Ice Cream",
    items: [
      ["Cocoa Roots", "dh42"],
      ["Coconut Haven", "dh42"],
      ["Crisp & Cream", "dh42"],
      ["Caramel Dune", "dh42"],
      ["Saffron Bloom", "dh42"],
    ],
  },
  {
    title: "Pastries",
    items: [
      ["Almond Croissant", "dh25"],
      ["Cruffin Zaatar & Labneh", "dh27"],
      ["Cardamom Bun", "dh24"],
      ["Feta Cheese Danish", "dh24"],
      ["Pepito", "dh24"],
    ],
  },
  {
    title: "Dessert & Bagels",
    items: [
      ["Carrot Cake", "dh33"],
      ["Coconut Cake", "dh35"],
      ["Cheesecake", "dh42"],
      ["Brownie Cake", "dh28"],
      ["Smoked Turkey Bagel", "dh36"],
    ],
  },
];

const reviews = [
  {
    name: "Amira H.",
    text: "The coffee is sooo good — honestly one of the best I've had. The whole vibe of the place is elegant and cozy at the same time.",
    stars: 5,
  },
  {
    name: "Vladimir C.",
    text: "Very cozy vibe. The coffee tastes amazing and the pastries and bagels are delicious. Quiet and unassuming — perfect for remote work.",
    stars: 5,
  },
  {
    name: "Rashed A.",
    text: "Cool spot for coffee, already been there multiple times for their piccolo. Great quality coffee and highly recommended.",
    stars: 5,
  },
];

const hours = [
  ["Sunday", "7 AM – 11 PM"],
  ["Monday", "7 AM – 11 PM"],
  ["Tuesday", "7 AM – 11 PM"],
  ["Wednesday", "7 AM – 11 PM"],
  ["Thursday", "7 AM – 11 PM"],
  ["Friday", "7 AM – 11 PM"],
  ["Saturday", "7 AM – 11 PM"],
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-gold">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < count ? "fill-gold text-gold" : "text-gold/30"}
        />
      ))}
    </div>
  );
}

function Index() {
  return (
    <div className="overflow-x-hidden bg-background text-foreground">
      <Navbar />

      {/* HERO */}
      <section id="home" className="relative flex min-h-screen items-center justify-center">
        <img
          src={images.icedcoffee}
          alt="JITHER iced coffee served beside a fresh croissant"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-espresso/55" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-cream">
          <p className="animate-fade-up font-sans text-xs uppercase tracking-[0.4em] text-cream/80">
            Al Raha · Abu Dhabi
          </p>
          <h1 className="animate-fade-up mt-6 font-wordmark text-6xl font-bold leading-none sm:text-8xl">
            JITHER
          </h1>
          <p className="mt-4 font-serif text-lg italic text-cream/90">جذر</p>
          <p className="mx-auto mt-6 max-w-xl font-sans text-base font-light leading-relaxed text-cream/85">
            A boutique specialty coffee house and bakery — where quiet luxury meets
            slow mornings, warm light, and craft in every cup.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#menu"
              className="rounded-full bg-cream px-7 py-3 font-sans text-sm text-forest transition-colors hover:bg-cream/90"
            >
              View the Menu
            </a>
            <a
              href="#location"
              className="rounded-full border border-cream/60 px-7 py-3 font-sans text-sm text-cream transition-colors hover:bg-cream hover:text-forest"
            >
              Find Us
            </a>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 font-sans text-[11px] uppercase tracking-[0.3em] text-cream/70">
          Open Daily · 7 AM – 11 PM
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-32">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
          <Reveal>
            <img
              src={images.sign}
              alt="Illuminated JITHER signage on a warm plaster wall"
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-[0_30px_60px_-30px_rgba(60,45,30,0.5)]"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="font-sans text-xs uppercase tracking-[0.35em] text-accent">
              Our Story
            </p>
            <h2 className="mt-5 text-4xl leading-tight text-forest sm:text-5xl">
              Rooted in warmth, brewed with intention
            </h2>
            <div className="mt-6 space-y-4 font-sans text-base font-light leading-relaxed text-muted-foreground">
              <p>
                JITHER — <span className="italic">جذر</span>, meaning “root” — is a
                hidden-gem café tucked into Al Raha. We built a calm, earthy space
                designed for lingering: soft light, natural wood, and the quiet ritual
                of a good cup of coffee.
              </p>
              <p>
                Every drink is crafted with specialty beans and ceremonial matcha,
                while our bakery turns out fresh pastries, cardamom buns, and seeded
                bagels each morning. Simple, considered, and made to feel like home.
              </p>
            </div>

          </Reveal>
        </div>
      </section>

      {/* POPULAR */}
      <section className="bg-secondary/60 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-sans text-xs uppercase tracking-[0.35em] text-accent">
              Loved by Regulars
            </p>
            <h2 className="mt-5 text-4xl text-forest sm:text-5xl">Popular Picks</h2>
          </Reveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {popular.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <article className="group overflow-hidden rounded-3xl bg-card shadow-[0_20px_50px_-30px_rgba(60,45,30,0.4)]">
                  <div className="overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xl text-forest">{p.name}</h3>
                      <span className="whitespace-nowrap font-sans text-sm text-accent">
                        {p.price}
                      </span>
                    </div>
                    <p className="mt-2 font-sans text-sm font-light leading-relaxed text-muted-foreground">
                      {p.desc}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-accent">
            Drinks · Bakery · Sweets
          </p>
          <h2 className="mt-5 text-4xl text-forest sm:text-5xl">The Menu</h2>
          <p className="mt-4 font-sans text-sm font-light text-muted-foreground">
            A curated selection — ask our baristas about seasonal specials.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-x-14 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {menu.map((cat, i) => (
            <Reveal key={cat.title} delay={(i % 3) * 100}>
              <div>
                <h3 className="border-b border-border pb-3 font-serif text-2xl text-forest">
                  {cat.title}
                </h3>
                <ul className="mt-5 space-y-4">
                  {cat.items.map(([name, price]) => (
                    <li key={name} className="flex items-baseline gap-3">
                      <span className="font-sans text-sm text-foreground">{name}</span>
                      <span className="mb-1 flex-1 border-b border-dotted border-border/70" />
                      <span className="font-sans text-sm text-accent">{price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* GALLERY / ATMOSPHERE */}
      <section id="gallery" className="bg-forest py-24 text-cream sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-sans text-xs uppercase tracking-[0.35em] text-cream/70">
              The Atmosphere
            </p>
            <h2 className="mt-5 text-4xl sm:text-5xl">A calm corner of the city</h2>
          </Reveal>

          <div className="mt-16 grid auto-rows-[220px] grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            <Reveal className="col-span-2 row-span-2 h-full">
              <img
                src={images.interior}
                alt="Cozy JITHER café interior with olive-green lounge chairs"
                className="h-full w-full rounded-3xl object-cover"
              />
            </Reveal>
            <Reveal delay={80} className="h-full">
              <img src={images.matcha} alt="Iced matcha latte" className="h-full w-full rounded-3xl object-cover" />
            </Reveal>
            <Reveal delay={140} className="h-full">
              <img src={images.coldbrew} alt="Cold brew on a wooden board" className="h-full w-full rounded-3xl object-cover" />
            </Reveal>
            <Reveal delay={200} className="h-full">
              <img src={images.toast} alt="Egg salad avocado toast" className="h-full w-full rounded-3xl object-cover" />
            </Reveal>
            <Reveal delay={260} className="h-full">
              <img src={images.storefront} alt="JITHER outdoor terrace" className="h-full w-full rounded-3xl object-cover" />
            </Reveal>
            <Reveal delay={80} className="h-full">
              <PhotoSlot aspect="h-full" className="!rounded-3xl border-cream/30 bg-cream/5 text-cream/60" />
            </Reveal>
            <Reveal delay={140} className="h-full">
              <PhotoSlot aspect="h-full" className="!rounded-3xl border-cream/30 bg-cream/5 text-cream/60" />
            </Reveal>
            <Reveal delay={200} className="col-span-2 h-full">
              <PhotoSlot aspect="h-full" className="!rounded-3xl border-cream/30 bg-cream/5 text-cream/60" />
            </Reveal>
            <Reveal delay={260} className="h-full">
              <PhotoSlot aspect="h-full" className="!rounded-3xl border-cream/30 bg-cream/5 text-cream/60" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-2">
            <Stars count={5} />
            <span className="font-sans text-sm text-muted-foreground">4.7 · 103 reviews</span>
          </div>
          <h2 className="mt-5 text-4xl text-forest sm:text-5xl">What guests say</h2>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-3xl bg-card p-8 shadow-[0_20px_50px_-30px_rgba(60,45,30,0.4)]">
                <Stars count={r.stars} />
                <blockquote className="mt-5 flex-1 font-sans text-sm font-light leading-relaxed text-muted-foreground">
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-6">
                  <p className="font-serif text-lg text-forest">{r.name}</p>
                  <p className="font-sans text-xs uppercase tracking-widest text-accent">
                    {r.role}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* LOCATION */}
      <section id="location" className="bg-secondary/60 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="font-sans text-xs uppercase tracking-[0.35em] text-accent">
              Visit
            </p>
            <h2 className="mt-5 text-4xl text-forest sm:text-5xl">Find your way in</h2>

            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <MapPin className="mt-1 shrink-0 text-accent" size={20} />
                <div>
                  <p className="font-serif text-lg text-forest">Address</p>
                  <p className="font-sans text-sm font-light text-muted-foreground">
                    Alzeina, Al Raha RBW2, 1 — Abu Dhabi, United Arab Emirates
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="mt-1 shrink-0 text-accent" size={20} />
                <div className="w-full">
                  <p className="font-serif text-lg text-forest">Opening Hours</p>
                  <ul className="mt-2 space-y-1">
                    {hours.map(([d, t]) => (
                      <li
                        key={d}
                        className="flex justify-between font-sans text-sm font-light text-muted-foreground"
                      >
                        <span>{d}</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="mt-1 shrink-0 text-accent" size={20} />
                <div>
                  <p className="font-serif text-lg text-forest">Call</p>
                  <a
                    href="tel:+971585861551"
                    className="font-sans text-sm font-light text-muted-foreground hover:text-accent"
                  >
                    058 586 1551
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://maps.google.com/?q=Jither+Cafe+Al+Raha+Abu+Dhabi"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-forest px-6 py-3 font-sans text-sm text-cream transition-colors hover:bg-forest/90"
              >
                Get Directions
              </a>
              <a
                href="https://wa.me/971585861551"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-forest/40 px-6 py-3 font-sans text-sm text-forest transition-colors hover:bg-forest hover:text-cream"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-3xl shadow-[0_30px_60px_-30px_rgba(60,45,30,0.5)]">
              <iframe
                title="JITHER Café location map"
                src="https://www.google.com/maps?q=Al%20Raha%20Beach%20Abu%20Dhabi&output=embed"
                className="h-[420px] w-full lg:h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* INSTAGRAM / SOCIAL */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-24 text-center sm:px-8 sm:py-32">
        <Reveal className="mx-auto max-w-2xl">
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-accent">
            Stay Connected
          </p>
          <h2 className="mt-5 text-4xl text-forest sm:text-5xl">
            Follow the everyday at JITHER
          </h2>
          <p className="mt-4 font-sans text-sm font-light text-muted-foreground">
            @jither.ae · 12.5K+ followers — new pours, bakes, and quiet moments.
          </p>
          <a
            href="https://instagram.com/jither.ae"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3 font-sans text-sm text-cream transition-colors hover:bg-forest/90"
          >
            <Instagram size={18} /> @jither.ae
          </a>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[images.latte, images.pastries, images.bagel, images.coldbrew].map((src, i) => (
            <Reveal key={i} delay={i * 80}>
              <a
                href="https://instagram.com/jither.ae"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-2xl"
              >
                <img src={src} alt="JITHER on Instagram" className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute inset-0 flex items-center justify-center bg-espresso/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <ArrowUpRight className="text-cream" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-espresso text-cream/80">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-3 sm:px-8">
          <div>
            <p className="font-wordmark text-2xl font-bold text-cream">JITHER</p>
            <p className="mt-4 max-w-xs font-sans text-sm font-light leading-relaxed">
              Boutique specialty coffee & bakery café. Rooted in Al Raha, Abu Dhabi.
            </p>
          </div>
          <div>
            <p className="font-serif text-lg text-cream">Explore</p>
            <ul className="mt-4 space-y-2 font-sans text-sm font-light">
              <li><a href="#about" className="hover:text-cream">About</a></li>
              <li><a href="#menu" className="hover:text-cream">Menu</a></li>
              <li><a href="#gallery" className="hover:text-cream">Gallery</a></li>
              <li><a href="#location" className="hover:text-cream">Location</a></li>
            </ul>
          </div>
          <div>
            <p className="font-serif text-lg text-cream">Contact</p>
            <ul className="mt-4 space-y-2 font-sans text-sm font-light">
              <li><a href="tel:+971585861551" className="hover:text-cream">058 586 1551</a></li>
              <li><a href="https://wa.me/971585861551" className="hover:text-cream">WhatsApp</a></li>
              <li><a href="https://instagram.com/jither.ae" className="hover:text-cream">@jither.ae</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-cream/10 py-6 text-center font-sans text-xs font-light text-cream/50">
          © {new Date().getFullYear()} JITHER · جذر — Al Raha, Abu Dhabi. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
