const fleet = [
  {
    name: "Citadine Éco",
    description: "Idéale pour la ville avec un budget maîtrisé.",
    price: "220 MAD / jour",
    tag: "Automatique"
  },
  {
    name: "SUV Confort",
    description: "Espace généreux et conduite souple pour la famille.",
    price: "450 MAD / jour",
    tag: "4x4"
  },
  {
    name: "Berline Premium",
    description: "Finition haut de gamme pour vos déplacements professionnels.",
    price: "690 MAD / jour",
    tag: "Business"
  }
];

const services = [
  {
    title: "Livraison rapide",
    detail: "Votre voiture livrée en 90 minutes à l'aéroport ou à l'hôtel.",
    icon: "🚗"
  },
  {
    title: "Assurance incluse",
    detail: "Couverture complète avec assistance 24/7 partout au Maroc.",
    icon: "🛡️"
  },
  {
    title: "Paiement flexible",
    detail: "Réglez en ligne ou sur place, sans frais cachés.",
    icon: "💳"
  }
];

const testimonials = [
  {
    name: "Imane El Fassi",
    quote:
      "Service impeccable, voiture neuve et équipe très professionnelle. Je recommande !"
  },
  {
    name: "Rachid B.",
    quote: "Réservation simple et rapide. Le SUV était parfait pour notre road trip."
  }
];

export default function HomePage() {
  return (
    <main>
      <header className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div className="text-xl font-semibold tracking-wide text-white">
            Top Car
          </div>
          <div className="hidden items-center gap-8 text-sm text-slate-200 md:flex">
            <a href="#services" className="hover:text-white">
              Services
            </a>
            <a href="#fleet" className="hover:text-white">
              Flotte
            </a>
            <a href="#testimonials" className="hover:text-white">
              Avis
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
          <button className="rounded-full bg-brand-blue px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/20">
            Réserver maintenant
          </button>
        </nav>

        <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-blue-300">
              Agence de location premium
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
              Louez votre voiture en toute confiance avec Top Car
            </h1>
            <p className="mt-6 text-lg text-slate-200">
              Des véhicules récents, un service personnalisé et une assistance 24/7 pour
              voyager l'esprit léger.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900">
                Voir la flotte
              </button>
              <button className="rounded-full border border-slate-500 px-6 py-3 text-sm font-semibold text-white">
                Demander un devis
              </button>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-slate-300">
              <div>
                <p className="text-2xl font-semibold text-white">+150</p>
                <p>Véhicules disponibles</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-white">4.9/5</p>
                <p>Note clients</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-white">12</p>
                <p>Agences partenaires</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl">
            <div className="flex items-center justify-between text-sm text-slate-300">
              <span className="rounded-full bg-slate-800 px-3 py-1">Offre spéciale</span>
              <span>Été 2024</span>
            </div>
            <h2 className="mt-6 text-2xl font-semibold text-white">
              -15% sur les réservations longue durée
            </h2>
            <p className="mt-4 text-slate-300">
              Profitez d'un tarif préférentiel dès 7 jours de location. Offre valable sur
              toute la flotte.
            </p>
            <div className="mt-6 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-500 p-6 text-white">
              <p className="text-sm uppercase tracking-[0.25em] text-blue-100">
                Pack Sérénité
              </p>
              <p className="mt-2 text-3xl font-bold">À partir de 390 MAD</p>
              <p className="mt-2 text-sm text-blue-100">
                Assurance premium + kilométrage illimité
              </p>
            </div>
          </div>
        </div>
      </header>

      <section id="services" className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-blue-300">
              Nos services
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              Tout pour une expérience fluide
            </h2>
          </div>
          <p className="max-w-xl text-slate-300">
            De la réservation à la remise du véhicule, nos équipes s'occupent de chaque
            détail.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
            >
              <div className="text-3xl">{service.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-slate-300">{service.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="fleet" className="bg-slate-900/40 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-blue-300">
                Notre flotte
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                Des véhicules adaptés à chaque besoin
              </h2>
            </div>
            <button className="rounded-full border border-slate-700 px-5 py-2 text-sm text-slate-200">
              Télécharger le catalogue
            </button>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {fleet.map((car) => (
              <article
                key={car.name}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-6"
              >
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span className="rounded-full bg-slate-800 px-3 py-1">
                    {car.tag}
                  </span>
                  <span>{car.price}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{car.name}</h3>
                <p className="mt-3 text-slate-300">{car.description}</p>
                <button className="mt-6 w-full rounded-full bg-brand-blue px-4 py-2 text-sm font-semibold text-white">
                  Réserver ce modèle
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-blue-300">
              Avis clients
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              Ils font confiance à Top Car
            </h2>
            <p className="mt-4 text-slate-300">
              Nous plaçons la satisfaction au cœur de notre service. Découvrez ce que nos
              clients pensent de leurs expériences.
            </p>
          </div>
          <div className="grid gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
              >
                <p className="text-slate-200">“{testimonial.quote}”</p>
                <p className="mt-4 text-sm font-semibold text-white">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white">
              Prêt à prendre la route ?
            </h2>
            <p className="mt-3 text-blue-100">
              Réservez en ligne en quelques minutes et récupérez votre voiture où vous le
              souhaitez.
            </p>
          </div>
          <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900">
            Commencer la réservation
          </button>
        </div>
      </section>

      <footer id="contact" className="bg-slate-950 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h3 className="text-2xl font-semibold text-white">Top Car</h3>
            <p className="mt-4 text-slate-300">
              Agence de location de voitures à Casablanca, Marrakech et Tanger.
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm text-slate-400">
              <span>📍 Boulevard Mohammed V, Casablanca</span>
              <span>📞 +212 5 20 00 00 00</span>
              <span>✉️ contact@topcar.ma</span>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h4 className="text-lg font-semibold text-white">Demande rapide</h4>
            <p className="mt-2 text-sm text-slate-300">
              Envoyez-nous vos dates et nous vous répondons sous 30 minutes.
            </p>
            <form className="mt-6 grid gap-4 text-sm">
              <input
                className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500"
                placeholder="Nom complet"
              />
              <input
                className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500"
                placeholder="Email"
              />
              <input
                className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500"
                placeholder="Dates souhaitées"
              />
              <button className="rounded-full bg-brand-blue px-4 py-2 font-semibold text-white">
                Envoyer la demande
              </button>
            </form>
          </div>
        </div>
        <p className="mt-12 text-center text-xs text-slate-500">
          © 2024 Top Car. Tous droits réservés.
        </p>
      </footer>
    </main>
  );
}
