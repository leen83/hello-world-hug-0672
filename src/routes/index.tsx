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
import { Reveal } from "@/components/site/Reveal";
import { images } from "@/lib/images";

export const Route = createFileRoute("/")({
  component: Index,
});

const popular = [
  {
    name: "Spanish Latte",
    desc: "Silky double shot with condensed milk — our house signature.",
    price: "AED 33",
    img: images.latte,
  },
  {
    name: "Iced Matcha Latte",
    desc: "Ceremonial grade matcha layered over cold milk.",
    price: "AED 33",
    img: images.matcha,
  },
  {
    name: "Almond Croissant",
    desc: "Laminated for two days, filled with almond cream.",
    price: "AED 25",
    img: images.pastries,
  },
  {
    name: "Smoked Turkey Bagel",
    desc: "House-baked seeded bagel, melted cheese, smoked turkey.",
    price: "AED 36",
    img: images.bagel,
  },
];

const menu = [
  {
    title: "Black",
    items: [
      ["Espresso", "AED 19"],
      ["Americano", "AED 20"],
      ["Long Black", "AED 19"],
      ["Cold Brew", "AED 29"],
      ["V60", "AED 36"],
    ],
  },
  {
    title: "White",
    items: [
      ["3oz (Espresso + Milk)", "AED 22"],
      ["5oz (Espresso + Milk)", "AED 25"],
      ["6oz (Espresso + Milk)", "AED 27"],
      ["Spanish Cortado", "AED 30"],
      ["Spanish Latte", "AED 33"],
    ],
  },
  {
    title: "Signature",
    items: [
      ["Espresso Tonic", "AED 33"],
      ["Matcha Latte", "AED 33"],
      ["Strawberry Field Matcha", "AED 36"],
      ["Hibiscus", "AED 33"],
      ["Affogato", "AED 27"],
    ],
  },
  {
    title: "Ice Cream",
    items: [
      ["Cocoa Roots", "AED 42"],
      ["Coconut Haven", "AED 42"],
      ["Crisp & Cream", "AED 42"],
      ["Caramel Dune", "AED 42"],
      ["Saffron Bloom", "AED 42"],
    ],
  },
  {
    title: "Pastries",
    items: [
      ["Almond Croissant", "AED 25"],
      ["Cruffin Zaatar & Labneh", "AED 27"],
      ["Cardamom Bun", "AED 24"],
      ["Feta Cheese Danish", "AED 24"],
      ["Pepito", "AED 24"],
    ],
  },
  {
    title: "Dessert and Bagels",
    items: [
      ["Carrot Cake", "AED 33"],
      ["Coconut Cake", "AED 35"],
      ["Cheesecake", "AED 42"],
      ["Brownie Cake", "AED 28"],
      ["Smoked Turkey Bagel", "AED 36"],
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
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="font-sans text-xs uppercase tracking-[0.35em] text-cream/65">
              Gallery
            </p>
            <h2 className="mt-5 text-4xl sm:text-5xl">Moments at JITHER</h2>
            <p className="mx-auto mt-5 max-w-xl font-sans text-sm font-light leading-7 text-cream/75 sm:text-base">
              A quiet look into our space — warm corners, soft light, fresh bakes,
              and the small details that make JITHER feel like home.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <article className="overflow-hidden rounded-[2rem] bg-cream p-3 text-forest shadow-[0_28px_90px_-45px_rgba(0,0,0,0.8)]">
                <img
                  src={images.interior}
                  alt="JITHER café table with dessert and drink"
                  className="h-[360px] w-full rounded-[1.5rem] object-cover object-center sm:h-[430px]"
                />
                <div className="px-3 pb-4 pt-5 sm:px-5">
                  <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-accent">
                    Inside the café
                  </p>
                  <h3 className="mt-2 text-2xl">A calm corner for slow mornings</h3>
                </div>
              </article>
            </Reveal>

            <Reveal delay={100}>
              <article className="overflow-hidden rounded-[2rem] bg-cream p-3 text-forest shadow-[0_28px_90px_-45px_rgba(0,0,0,0.8)]">
                <img
                  src={images.storefront}
                  alt="JITHER outdoor terrace"
                  className="h-[360px] w-full rounded-[1.5rem] object-cover object-center sm:h-[430px]"
                />
                <div className="px-3 pb-4 pt-5 sm:px-5">
                  <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-accent">
                    Al Raha
                  </p>
                  <h3 className="mt-2 text-2xl">A hidden stop in the city</h3>
                </div>
              </article>
            </Reveal>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <Reveal delay={80}>
              <article className="overflow-hidden rounded-[2rem] bg-cream p-3 text-forest shadow-[0_20px_70px_-45px_rgba(0,0,0,0.75)]">
                <img
                  src={images.signage}
                  alt="JITHER wall signage"
                  className="h-[250px] w-full rounded-[1.5rem] object-cover object-center"
                />
                <div className="px-3 pb-4 pt-4">
                  <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-accent">
                    Details
                  </p>
                  <h3 className="mt-2 text-xl">Warm light, natural textures</h3>
                </div>
              </article>
            </Reveal>

            <Reveal delay={150}>
              <article className="overflow-hidden rounded-[2rem] bg-cream p-3 text-forest shadow-[0_20px_70px_-45px_rgba(0,0,0,0.75)]">
                <img
                  src={images.coconutcake}
                  alt="JITHER coconut cake"
                  className="h-[250px] w-full rounded-[1.5rem] object-cover object-center"
                />
                <div className="px-3 pb-4 pt-4">
                  <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-accent">
                    Fresh bakes
                  </p>
                  <h3 className="mt-2 text-xl">Soft cakes and quiet moments</h3>
                </div>
              </article>
            </Reveal>

            <Reveal delay={220}>
              <article className="overflow-hidden rounded-[2rem] bg-cream p-3 text-forest shadow-[0_20px_70px_-45px_rgba(0,0,0,0.75)]">
                <img
                  src={images.coldbrew}
                  alt="JITHER drink on wooden tray"
                  className="h-[250px] w-full rounded-[1.5rem] object-cover object-center"
                />
                <div className="px-3 pb-4 pt-4">
                  <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-accent">
                    Crafted drinks
                  </p>
                  <h3 className="mt-2 text-xl">Simple pours, beautifully served</h3>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
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
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>


                  {/* LOCATION */}
      <section id="location" className="bg-secondary/60 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <Reveal>
            <div className="rounded-[2rem] bg-cream/70 px-6 py-10 shadow-[0_24px_80px_-55px_rgba(0,0,0,0.35)] sm:px-10 sm:py-12">
              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <div>
                  <p className="font-sans text-xs uppercase tracking-[0.35em] text-accent">
                    Visit
                  </p>
                  <h2 className="mt-5 text-4xl text-forest sm:text-5xl">
                    Find your way in
                  </h2>
                  <p className="mt-5 max-w-md font-sans text-sm font-light leading-7 text-muted-foreground">
                    Hidden in Al Raha, JITHER is open daily for slow mornings,
                    quiet coffee moments, and fresh bakes.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="rounded-[1.5rem] border border-forest/10 bg-background/70 p-5">
                    <div className="flex gap-4">
                      <MapPin className="mt-1 shrink-0 text-accent" size={20} />
                      <div>
                        <p className="font-serif text-xl text-forest">Address</p>
                        <p className="mt-1 font-sans text-sm font-light leading-6 text-muted-foreground">
                          Alzeina, Al Raha RBW2, 1 — Abu Dhabi, United Arab Emirates
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[1.5rem] border border-forest/10 bg-background/70 p-5">
                    <div className="flex gap-4">
                      <Clock className="mt-1 shrink-0 text-accent" size={20} />
                      <div>
                        <p className="font-serif text-xl text-forest">Opening Hours</p>
                        <p className="mt-1 font-sans text-sm font-light text-muted-foreground">
                          Open daily from 7 AM – 11 PM
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[1.5rem] border border-forest/10 bg-background/70 p-5">
                    <div className="flex gap-4">
                      <Phone className="mt-1 shrink-0 text-accent" size={20} />
                      <div>
                        <p className="font-serif text-xl text-forest">Call</p>
                        <a
                          href="tel:+971585861551"
                          className="mt-1 inline-block font-sans text-sm font-light text-muted-foreground transition-colors hover:text-accent"
                        >
                          058 586 1551
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
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
                </div>
              </div>
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
          <a
  href="https://www.tiktok.com/@jither.ae"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-3 rounded-full bg-accent/15 px-7 py-4 font-sans text-sm text-forest transition-colors hover:bg-accent/25"
>
  TikTok
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
