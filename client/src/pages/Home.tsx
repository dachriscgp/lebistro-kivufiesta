/* Midnight Editorial Club — page principale : éditorial nocturne, asymétrie maîtrisée, lime signature et interactions courtes. */
import { useEffect, useState } from "react";

import {
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Instagram,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import logoBistro from '../assets/logo-le-bistro.png';
import cocktailImg from '../assets/cocktail.jpg';





import { ArrowUpRight, CalendarDays, Check, ChevronDown, Clock3, Instagram, MapPin, Menu, Phone, X } from "lucide-react";


const assets = {
  hero: "/manus-storage/le-bistro-hero_3541f113.jpg",
  event: "/manus-storage/le-bistro-event_8bc5f582.jpg",
  vip: "/manus-storage/le-bistro-vip_ca69fe14.jpg",
  gallery: "/manus-storage/le-bistro-gallery_c3a77f0a.jpg",

  monogram: "../assets/logo-le-bistro.png",
};

const whatsappLink =
  "https://api.whatsapp.com/send?phone=243998564425&text=Bonjour%20Le%20Bistro%20!%20Je%20souhaite%20r%C3%A9server%20une%20table.";

const events = [
  {
    date: "15",
    month: "AOÛT",
    title: "Friday Frequency",
    tag: "DJ set",
    time: "22:00 — late",
    image: assets.event,
  },
  {
    date: "22",
    month: "AOÛT",
    title: "Bistro After Dark",
    tag: "Signature night",
    time: "21:00 — late",
    image: assets.hero,
  },
  {
    date: "29",
    month: "AOÛT",
    title: "Rooftop Session",
    tag: "Guest artists",
    time: "20:00 — late",
    image: assets.gallery,
  },
];

const vipOffers = [
  {
    name: "Table Signature",
    detail: "Pour 4 à 6 personnes",
    price: "Sur réservation",
    perks: ["Bouteille au choix", "Service à table", "Accès prioritaire"],
  },
  {
    name: "Lounge Privé",
    detail: "Pour 8 à 12 personnes",
    price: "Sur demande",
    perks: ["Espace réservé", "Carte bouteilles dédiée", "Hôte VIP attitré"],
  },
];

function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="section-kicker">
      <span />
      {children}
    </p>
  );

  monogram: "/manus-storage/le-bistro-monogram_ed57408d.png",
};

const whatsappLink = "https://api.whatsapp.com/send?phone=243998564425&text=Bonjour%20Le%20Bistro%20!%20Je%20souhaite%20r%C3%A9server%20une%20table.";

const events = [
  { date: "15", month: "AOÛT", title: "Friday Frequency", tag: "DJ set", time: "22:00 — late", image: assets.event },
  { date: "22", month: "AOÛT", title: "Bistro After Dark", tag: "Signature night", time: "21:00 — late", image: assets.hero },
  { date: "29", month: "AOÛT", title: "Rooftop Session", tag: "Guest artists", time: "20:00 — late", image: assets.gallery },
];

const vipOffers = [
  { name: "Table Signature", detail: "Pour 4 à 6 personnes", price: "Sur réservation", perks: ["Bouteille au choix", "Service à table", "Accès prioritaire"] },
  { name: "Lounge Privé", detail: "Pour 8 à 12 personnes", price: "Sur demande", perks: ["Espace réservé", "Carte bouteilles dédiée", "Hôte VIP attitré"] },
];

function SectionKicker({ children }: { children: React.ReactNode }) {
  return <p className="section-kicker"><span />{children}</p>;

}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">

      <header
        className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}
      >
        <a
          href="#accueil"
          className="brand-mark"
          aria-label="Le Bistro, retour à l'accueil"
        >
          <img src={logoBistro} alt="logo le Bistro" />
          <span>LE BISTRO</span>
        </a>
        <nav
          className={`main-nav ${menuOpen ? "main-nav--open" : ""}`}
          aria-label="Navigation principale"
        >
          <a href="#accueil" onClick={closeMenu}>
            Accueil
          </a>
          <a href="#events" onClick={closeMenu}>
            Événements
          </a>
          <a href="#vip" onClick={closeMenu}>
            Menu / VIP
          </a>
          <a href="#galerie" onClick={closeMenu}>
            Galerie
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
          <a
            className="nav-cta"
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
          >
            Réserver <ArrowUpRight size={16} />
          </a>
        </nav>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >

      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <a href="#accueil" className="brand-mark" aria-label="Le Bistro, retour à l'accueil">
          <img src={assets.monogram} alt="" />
          <span>LE BISTRO</span>
        </a>
        <nav className={`main-nav ${menuOpen ? "main-nav--open" : ""}`} aria-label="Navigation principale">
          <a href="#accueil" onClick={closeMenu}>Accueil</a>
          <a href="#events" onClick={closeMenu}>Événements</a>
          <a href="#vip" onClick={closeMenu}>Menu / VIP</a>
          <a href="#galerie" onClick={closeMenu}>Galerie</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href={whatsappLink} target="_blank" rel="noreferrer">Réserver <ArrowUpRight size={16} /></a>
        </nav>
        <button className="menu-toggle" aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>

          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main>
        <section id="accueil" className="hero-section">

          <img
            className="hero-image"
            src={assets.hero}
            alt="Ambiance nocturne au bar du Bistro"
            fetchPriority="high"
          />

          <img className="hero-image" src={assets.hero} alt="Ambiance nocturne au bar du Bistro" fetchPriority="high" />

          <div className="hero-overlay" />
          <div className="hero-orbit hero-orbit--one" />
          <div className="hero-orbit hero-orbit--two" />
          <div className="hero-content container">
            <div className="hero-copy">

              <p className="eyebrow">
                <span className="live-dot" /> Goma · RDC · Ouvert tard
              </p>
              <h1>
                La nuite
                <br />
                <em>commence</em>
                <br />à table.
              </h1>
              <p className="hero-lede">
                Le Bistro est le point de rencontre où la cuisine, les cocktails
                et les basses se répondent jusqu’au bout de la nuit.
              </p>
              <div className="hero-actions">
                <a
                  className="button button--lime"
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Réserver une table <ArrowUpRight size={18} />
                </a>
                <a className="text-link" href="#events">
                  Voir le programme <span>↓</span>
                </a>
              </div>
            </div>
            <div className="hero-note">
              <span>01</span>
              <div>
                Une table.
                <br />
                <strong>Une histoire.</strong>
              </div>
            </div>
          </div>
          <div className="hero-bottom container">
            <span>Scroll to explore</span>
            <span className="hero-line" />
            <span>01 — 06</span>
          </div>
        </section>

        <section className="pulse-strip" aria-label="Informations pratiques">
          <div>
            <Clock3 size={18} />
            <span>
              <b>Bar & cuisine</b> 18:00 — 02:00
            </span>
          </div>
          <div>
            <CalendarDays size={18} />
            <span>
              <b>DJ live</b> chaque week-end
            </span>
          </div>
          <div>
            <MapPin size={18} />
            <span>
              <b>Goma</b> Rue de la bière
            </span>
          </div>

              <p className="eyebrow"><span className="live-dot" /> Goma · RDC · Ouvert tard</p>
              <h1>La nuit<br /><em>commence</em><br />à table.</h1>
              <p className="hero-lede">Le Bistro est le point de rencontre où la cuisine, les cocktails et les basses se répondent jusqu’au bout de la nuit.</p>
              <div className="hero-actions">
                <a className="button button--lime" href={whatsappLink} target="_blank" rel="noreferrer">Réserver une table <ArrowUpRight size={18} /></a>
                <a className="text-link" href="#events">Voir le programme <span>↓</span></a>
              </div>
            </div>
            <div className="hero-note"><span>01</span><div>Une table.<br /><strong>Une histoire.</strong></div></div>
          </div>
          <div className="hero-bottom container"><span>Scroll to explore</span><span className="hero-line" /><span>01 — 06</span></div>
        </section>

        <section className="pulse-strip" aria-label="Informations pratiques">
          <div><Clock3 size={18} /><span><b>Bar & cuisine</b> 18:00 — 02:00</span></div>
          <div><CalendarDays size={18} /><span><b>DJ live</b> chaque week-end</span></div>
          <div><MapPin size={18} /><span><b>Goma</b> Rue de la bière</span></div>

        </section>

        <section id="events" className="events-section section-pad">
          <div className="container">
            <div className="section-heading split-heading">

              <div>
                <SectionKicker>Le programme</SectionKicker>
                <h2>
                  Chaque nuit a<br />
                  <em>son tempo.</em>
                </h2>
              </div>
              <p>
                DJ sets, concerts, soirées à thème : au Bistro, la programmation
                se vit en direct, dans une atmosphère qui ne ressemble qu’à
                elle.
              </p>
            </div>
            <div className="events-grid">
              {events.map((event, index) => (
                <article
                  className={`event-card ${index === 1 ? "event-card--featured" : ""}`}
                  key={event.title}
                >
                  <div className="event-visual">
                    <img
                      src={event.image}
                      alt={`${event.title}, ambiance au Bistro`}
                      loading="lazy"
                    />
                    <span className="event-index">0{index + 1}</span>
                    <span className="event-tag">{event.tag}</span>
                  </div>
                  <div className="event-meta">
                    <div className="event-date">
                      <strong>{event.date}</strong>
                      <span>{event.month}</span>
                    </div>
                    <div>
                      <h3>{event.title}</h3>
                      <p>{event.time}</p>
                    </div>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Réserver pour ${event.title}`}
                    >
                      <ArrowUpRight size={20} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <div className="section-footer-link">
              <a
                className="text-link"
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
              >
                Programmer une soirée privée <ArrowUpRight size={16} />
              </a>
            </div>

              <div><SectionKicker>Le programme</SectionKicker><h2>Chaque nuit a<br /><em>son tempo.</em></h2></div>
              <p>DJ sets, concerts, soirées à thème : au Bistro, la programmation se vit en direct, dans une atmosphère qui ne ressemble qu’à elle.</p>
            </div>
            <div className="events-grid">
              {events.map((event, index) => <article className={`event-card ${index === 1 ? "event-card--featured" : ""}`} key={event.title}>
                <div className="event-visual"><img src={event.image} alt={`${event.title}, ambiance au Bistro`} loading="lazy" /><span className="event-index">0{index + 1}</span><span className="event-tag">{event.tag}</span></div>
                <div className="event-meta"><div className="event-date"><strong>{event.date}</strong><span>{event.month}</span></div><div><h3>{event.title}</h3><p>{event.time}</p></div><a href={whatsappLink} target="_blank" rel="noreferrer" aria-label={`Réserver pour ${event.title}`}><ArrowUpRight size={20} /></a></div>
              </article>)}
            </div>
            <div className="section-footer-link"><a className="text-link" href={whatsappLink} target="_blank" rel="noreferrer">Programmer une soirée privée <ArrowUpRight size={16} /></a></div>

          </div>
        </section>

        <section id="vip" className="vip-section section-pad">
          <div className="container vip-layout">

            <div className="vip-image-wrap">
              <img
                src={assets.vip}
                alt="Lounge VIP avec service à table"
                loading="lazy"
              />
              <div className="image-caption">Le salon · côté nuit</div>
            </div>
            <div className="vip-copy">
              <SectionKicker>Le menu / les espaces</SectionKicker>
              <h2>
                Votre angle
                <br />
                <em>de la soirée.</em>
              </h2>
              <p>
                Installez-vous, on s’occupe du reste. Des tables intimes aux
                salons privés, nos formules VIP donnent à chaque groupe son
                propre rythme.
              </p>
              <div className="vip-list">
                {vipOffers.map(offer => (
                  <div className="vip-offer" key={offer.name}>
                    <div className="offer-top">
                      <div>
                        <h3>{offer.name}</h3>
                        <p>{offer.detail}</p>
                      </div>
                      <strong>{offer.price}</strong>
                    </div>
                    <ul>
                      {offer.perks.map(perk => (
                        <li key={perk}>
                          <Check size={14} />
                          {perk}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <a
                className="button button--outline"
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
              >
                Demander une offre VIP <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="vip-image-wrap"><img src={assets.vip} alt="Lounge VIP avec service à table" loading="lazy" /><div className="image-caption">Le salon · côté nuit</div></div>
            <div className="vip-copy"><SectionKicker>Le menu / les espaces</SectionKicker><h2>Votre angle<br /><em>de la soirée.</em></h2><p>Installez-vous, on s’occupe du reste. Des tables intimes aux salons privés, nos formules VIP donnent à chaque groupe son propre rythme.</p><div className="vip-list">{vipOffers.map((offer) => <div className="vip-offer" key={offer.name}><div className="offer-top"><div><h3>{offer.name}</h3><p>{offer.detail}</p></div><strong>{offer.price}</strong></div><ul>{offer.perks.map((perk) => <li key={perk}><Check size={14} />{perk}</li>)}</ul></div>)}</div><a className="button button--outline" href={whatsappLink} target="_blank" rel="noreferrer">Demander une offre VIP <ArrowUpRight size={17} /></a></div>

          </div>
        </section>

        <section id="galerie" className="gallery-section section-pad">

          <div className="container">
            <div className="section-heading gallery-heading">
              <div>
                <SectionKicker>Les nuits du Bistro</SectionKicker>
                <h2>
                  À voir.
                  <br />
                  <em>À vivre.</em>
                </h2>
              </div>
              <p>
                Un peu de lumière, beaucoup de mouvement. Laissez la galerie
                vous donner le ton.
              </p>
            </div>
            <div className="gallery-grid">
              <div className="gallery-tall">
                <img
                  src={assets.gallery}
                  alt="Foule dansant sous les lumières du club"
                  loading="lazy"
                />
                <span>01 / dancefloor</span>
              </div>
              <div className="gallery-block gallery-block--lime">
                <span className="gallery-symbol">✦</span>
                <strong>
                  La musique
                  <br />
                  ne dort
                  <br />
                  <em>jamais.</em>
                </strong>
                <span className="gallery-caption">Le Bistro — depuis Goma</span>
              </div>
              <div className="gallery-small">
                <img src={assets.event} alt="DJ aux platines" loading="lazy" />
                <span>02 / live set</span>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section section-pad">
          <div className="container contact-layout">
            <div className="contact-intro">
              <SectionKicker>Votre prochaine sortie</SectionKicker>
              <h2>
                On vous
                <br />
                <em>attend.</em>
              </h2>
              <p>
                Pour une table, un événement privé ou simplement une question,
                notre équipe vous répond directement.
              </p>
              <div className="contact-details">
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  <Phone size={18} /> +243 998 564 425{" "}
                  <ArrowUpRight size={15} />
                </a>
                <a
                  href="https://maps.app.goo.gl/ms9qrNhL8tEjbRmM6"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MapPin size={18} /> Rue de la bière, Goma{" "}
                  <ArrowUpRight size={15} />
                </a>
                <span>
                  <Clock3 size={18} /> Ouvert du mercredi au dimanche
                </span>
              </div>
            </div>
            <form
              className="booking-form"
              onSubmit={e => {
                e.preventDefault();
                setSubmitted(true);
              }}
              >
              <p className="form-label">Réservation express</p>
              {submitted ? (
                <div className="form-success">
                  <span>
                    <Check size={20} />
                  </span>
                  <h3>Demande reçue.</h3>
                  <p>Notre équipe revient vers vous très vite sur WhatsApp.</p>
                  <a
                    className="button button--lime"
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Continuer sur WhatsApp <ArrowUpRight size={16} />
                  </a>
                </div>
              ) : (
                <>
                  <label>
                    Votre nom
                    <input required placeholder="Nom & prénom" />
                  </label>
                  <label>
                    Nombre de personnes
                    <select defaultValue="">
                      <option value="" disabled>
                        Choisir
                      </option>
                      <option>2 personnes</option>
                      <option>3 à 5 personnes</option>
                      <option>6 à 10 personnes</option>
                      <option>Plus de 10 personnes</option>
                    </select>
                  </label>
                  <label>
                    Date souhaitée
                    <input required type="date" />
                  </label>
                  <button className="button button--lime" type="submit">
                    Envoyer la demande <ArrowUpRight size={17} />
                  </button>
                  <p className="form-fineprint">
                    Pas de confirmation automatique : nous vous contactons pour
                    valider chaque détail.
                  </p>
                </>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-top">
          <a href="#accueil" className="brand-mark brand-mark--footer">
            <img src={logoBistro} alt="logo le Bistro" />
            <span>LE BISTRO</span>
          </a>
          <p>
            La nuit, côté table.
            <br />
            Côté musique. Côté vous.
          </p>
          <div className="footer-socials">
            <a
              href="https://www.instagram.com/kivufiesta/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={19} />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <Phone size={18} />
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Le Bistro Nightclub</span>
          <span>Goma, RDC</span>
          <a href="#accueil">Retour en haut ↑</a>
        </div>
      </footer>

          <div className="container"><div className="section-heading gallery-heading"><div><SectionKicker>Les nuits du Bistro</SectionKicker><h2>À voir.<br /><em>À vivre.</em></h2></div><p>Un peu de lumière, beaucoup de mouvement. Laissez la galerie vous donner le ton.</p></div><div className="gallery-grid"><div className="gallery-tall"><img src={assets.gallery} alt="Foule dansant sous les lumières du club" loading="lazy" /><span>01 / dancefloor</span></div><div className="gallery-block gallery-block--lime"><span className="gallery-symbol">✦</span><strong>La musique<br />ne dort<br /><em>jamais.</em></strong><span className="gallery-caption">Le Bistro — depuis Goma</span></div><div className="gallery-small"><img src={assets.event} alt="DJ aux platines" loading="lazy" /><span>02 / live set</span></div></div></div>
        </section>

        <section id="contact" className="contact-section section-pad">
          <div className="container contact-layout"><div className="contact-intro"><SectionKicker>Votre prochaine sortie</SectionKicker><h2>On vous<br /><em>attend.</em></h2><p>Pour une table, un événement privé ou simplement une question, notre équipe vous répond directement.</p><div className="contact-details"><a href={whatsappLink} target="_blank" rel="noreferrer"><Phone size={18} /> +243 998 564 425 <ArrowUpRight size={15} /></a><a href="https://maps.app.goo.gl/ms9qrNhL8tEjbRmM6" target="_blank" rel="noreferrer"><MapPin size={18} /> Rue de la bière, Goma <ArrowUpRight size={15} /></a><span><Clock3 size={18} /> Ouvert du mercredi au dimanche</span></div></div><form className="booking-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}><p className="form-label">Réservation express</p>{submitted ? <div className="form-success"><span><Check size={20} /></span><h3>Demande reçue.</h3><p>Notre équipe revient vers vous très vite sur WhatsApp.</p><a className="button button--lime" href={whatsappLink} target="_blank" rel="noreferrer">Continuer sur WhatsApp <ArrowUpRight size={16} /></a></div> : <><label>Votre nom<input required placeholder="Nom & prénom" /></label><label>Nombre de personnes<select defaultValue=""><option value="" disabled>Choisir</option><option>2 personnes</option><option>3 à 5 personnes</option><option>6 à 10 personnes</option><option>Plus de 10 personnes</option></select></label><label>Date souhaitée<input required type="date" /></label><button className="button button--lime" type="submit">Envoyer la demande <ArrowUpRight size={17} /></button><p className="form-fineprint">Pas de confirmation automatique : nous vous contactons pour valider chaque détail.</p></>}</form></div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-top"><a href="#accueil" className="brand-mark brand-mark--footer"><img src={assets.monogram} alt="" /><span>LE BISTRO</span></a><p>La nuit, côté table.<br />Côté musique. Côté vous.</p><div className="footer-socials"><a href="https://www.instagram.com/kivufiesta/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={19} /></a><a href={whatsappLink} target="_blank" rel="noreferrer" aria-label="WhatsApp"><Phone size={18} /></a></div></div><div className="container footer-bottom"><span>© 2026 Le Bistro Nightclub</span><span>Goma, RDC</span><a href="#accueil">Retour en haut ↑</a></div></footer>

    </div>
  );
}
