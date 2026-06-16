// ============================================================
// FICHIER DE CONFIGURATION CENTRALISÉ
// Modifiez ce fichier pour personnaliser tout le site
// ============================================================

export const siteConfig = {
  // --- IDENTITÉ DE L'AGENCE ---
  name: "AviaTours",           // Nom de l'agence
  tagline: "Votre voyage, notre expertise",
  taglineAr: "رحلتك، خبرتنا",
  description: "AviaTours, votre agence de voyage de confiance : voyages organisés en groupe, demandes de visa et réservations d'hôtels. Un accompagnement de A à Z, en toute sérénité.",

  // --- COORDONNÉES ---
  contact: {
    phone: "+213 XX XX XX XX",
    phoneWhatsapp: "+213XXXXXXXXX",   // Format international sans espaces
    email: "contact@voyagealgerie.dz",
    address: "XX Rue de l'Indépendance, Alger, Algérie",
    city: "Alger",
    country: "Algérie",
  },

  // --- RÉSEAUX SOCIAUX ---
  social: {
    facebook: "https://facebook.com/votreagence",
    instagram: "https://instagram.com/votreagence",
    tiktok: "https://tiktok.com/@votreagence",
    youtube: "",
    twitter: "",
  },

  // --- SEO ---
  seo: {
    siteUrl: "https://votredomaine.netlify.app",
    defaultLocale: "fr",
    supportedLocales: ["fr", "ar", "en"],
  },

  // --- NOS SERVICES (3 piliers) ---
  // icon = nom d'une icône lucide-react (voir lucide.dev)
  services: [
    {
      id: "voyages",
      icon: "Plane",
      title: "Voyages Organisés",
      desc: "Des séjours en groupe clés en main : vol, hébergement, guide et programme complet.",
      to: "/voyages-organises",
      points: ["Départs garantis", "Guide francophone", "Formule tout inclus"],
    },
    {
      id: "visa",
      icon: "FileCheck",
      title: "Visa",
      desc: "Constitution et suivi complet de votre dossier de visa pour un traitement rapide et fiable.",
      to: "/visa",
      points: ["Dossier vérifié", "Suivi personnalisé", "Gain de temps"],
    },
    {
      id: "hotels",
      icon: "BedDouble",
      title: "Hôtels",
      desc: "Réservation d'hôtels au meilleur prix, du 3 au 5 étoiles, partout dans le monde.",
      to: "/hotels",
      points: ["Meilleurs tarifs", "Confirmation immédiate", "Annulation flexible"],
    },
  ],

  // --- DESTINATIONS POPULAIRES ---
  destinations: [
    {
      id: "sahara",
      slug: "sahara-algérien",
      name: { fr: "Sahara Algérien", ar: "الصحراء الجزائرية", en: "Algerian Sahara" },
      region: "Sud",
      image: "/images/destinations/sahara.jpg",
      description: {
        fr: "Plongez dans l'immensité du Grand Erg Occidental et découvrez les trésors du Sahara.",
        ar: "اكتشف روعة الصحراء الجزائرية وعظمة العرق الغربي الكبير.",
        en: "Dive into the vastness of the Grand Erg Occidental and discover the Sahara's treasures.",
      },
      highlights: ["Dunes de sable", "Nuit sous les étoiles", "Chameaux", "Villages berbères"],
      duration: "5-7 jours",
      priceFrom: 35000,
      featured: true,
    },
    {
      id: "taghit",
      slug: "taghit",
      name: { fr: "Taghit", ar: "تاغيت", en: "Taghit" },
      region: "Béchar",
      image: "/images/destinations/taghit.jpg",
      description: {
        fr: "L'oasis de Taghit, joyau du désert algérien avec ses dunes dorées et son ksar millénaire.",
        ar: "واحة تاغيت، جوهرة الصحراء الجزائرية بكثبانها الذهبية وقصرها العريق.",
        en: "The oasis of Taghit, jewel of the Algerian desert with its golden dunes and ancient ksar.",
      },
      highlights: ["Ksar historique", "Dunes", "Peintures rupestres", "Oued"],
      duration: "3-4 jours",
      priceFrom: 22000,
      featured: true,
    },
    {
      id: "tlemcen",
      slug: "tlemcen",
      name: { fr: "Tlemcen", ar: "تلمسان", en: "Tlemcen" },
      region: "Ouest",
      image: "/images/destinations/tlemcen.jpg",
      description: {
        fr: "La perle du Maghreb, ville millénaire aux monuments islamiques exceptionnels.",
        ar: "لؤلؤة المغرب، المدينة العريقة ذات المعالم الإسلامية الرائعة.",
        en: "The pearl of the Maghreb, a millennial city with exceptional Islamic monuments.",
      },
      highlights: ["Grande Mosquée", "Mansoura", "Parc national", "Artisanat"],
      duration: "2-3 jours",
      priceFrom: 15000,
      featured: true,
    },
    {
      id: "tipaza",
      slug: "tipaza",
      name: { fr: "Tipaza", ar: "تيپازة", en: "Tipaza" },
      region: "Centre",
      image: "/images/destinations/tipaza.jpg",
      description: {
        fr: "Site archéologique romain classé UNESCO, face à la mer Méditerranée.",
        ar: "موقع أثري روماني مصنف من قبل اليونسكو، يطل على البحر الأبيض المتوسط.",
        en: "UNESCO-listed Roman archaeological site facing the Mediterranean Sea.",
      },
      highlights: ["Ruines romaines", "Plages", "UNESCO", "Musée"],
      duration: "1-2 jours",
      priceFrom: 8000,
      featured: false,
    },
    {
      id: "constantine",
      slug: "constantine",
      name: { fr: "Constantine", ar: "قسنطينة", en: "Constantine" },
      region: "Est",
      image: "/images/destinations/constantine.jpg",
      description: {
        fr: "La ville des ponts suspendus, cité antique perchée sur des rochers vertigineux.",
        ar: "مدينة الجسور المعلقة، المدينة القديمة المتربعة على صخور شاهقة.",
        en: "The city of suspended bridges, an ancient city perched on vertiginous rocks.",
      },
      highlights: ["Ponts suspendus", "Médina", "Gorges du Rhumel", "Palais du Bey"],
      duration: "2-3 jours",
      priceFrom: 12000,
      featured: false,
    },
    {
      id: "djurdjura",
      slug: "djurdjura",
      name: { fr: "Djurdjura", ar: "جرجرة", en: "Djurdjura" },
      region: "Kabylie",
      image: "/images/destinations/djurdjura.jpg",
      description: {
        fr: "Le parc national de Djurdjura, paradis de la randonnée et de la culture berbère.",
        ar: "الحديقة الوطنية لجرجرة، جنة المشي لمسافات طويلة والثقافة الأمازيغية.",
        en: "Djurdjura National Park, a paradise for hiking and Berber culture.",
      },
      highlights: ["Randonnées", "Villages kabyles", "Cascades", "Panoramas"],
      duration: "3-5 jours",
      priceFrom: 18000,
      featured: false,
    },
  ],

  // --- CIRCUITS ORGANISÉS ---
  circuits: [
    {
      id: "grand-sud",
      name: { fr: "Grand Tour du Sud", ar: "الجولة الكبرى في الجنوب", en: "Grand South Tour" },
      duration: "10 jours / 9 nuits",
      groupSize: "6-12 personnes",
      difficulty: "Modéré",
      price: 85000,
      image: "/images/circuits/grand-sud.jpg",
      itinerary: ["Alger", "Ghardaïa", "El Oued", "Tamanrasset", "Djanet"],
      featured: true,
    },
    {
      id: "nord-historique",
      name: { fr: "Nord Historique", ar: "الشمال التاريخي", en: "Historic North" },
      duration: "7 jours / 6 nuits",
      groupSize: "8-15 personnes",
      difficulty: "Facile",
      price: 45000,
      image: "/images/circuits/nord-historique.jpg",
      itinerary: ["Alger", "Tipaza", "Cherchell", "Tlemcen", "Constantine"],
      featured: true,
    },
  ],

  // --- TÉMOIGNAGES ---
  testimonials: [
    {
      id: 1,
      name: "Sarah M.",
      location: "Paris, France",
      rating: 5,
      text: "Un voyage inoubliable dans le Sahara ! L'équipe était professionnelle et attentionnée. Je recommande vivement.",
      avatar: "/images/avatars/avatar1.jpg",
      trip: "Grand Tour du Sud",
    },
    {
      id: 2,
      name: "Karim B.",
      location: "Alger, Algérie",
      rating: 5,
      text: "Taghit m'a coupé le souffle. Organisation parfaite, hébergement confortable, guide excellent.",
      avatar: "/images/avatars/avatar2.jpg",
      trip: "Taghit & Désert",
    },
    {
      id: 3,
      name: "Marie D.",
      location: "Lyon, France",
      rating: 5,
      text: "Première visite en Algérie et certainement pas la dernière ! Un pays magnifique, une agence sérieuse.",
      avatar: "/images/avatars/avatar3.jpg",
      trip: "Nord Historique",
    },
  ],

  // --- FAQ ---
  faq: [
    {
      question: { fr: "Avez-vous besoin d'un visa pour visiter l'Algérie ?", en: "Do you need a visa to visit Algeria?", ar: "هل تحتاج إلى تأشيرة لزيارة الجزائر؟" },
      answer: { fr: "Les ressortissants algériens n'ont pas besoin de visa. Pour les étrangers, cela dépend de leur nationalité. Contactez-nous pour plus d'informations.", en: "Algerian nationals don't need a visa. For foreigners, it depends on their nationality. Contact us for more information.", ar: "المواطنون الجزائريون لا يحتاجون إلى تأشيرة. بالنسبة للأجانب، يعتمد الأمر على جنسيتهم. اتصل بنا للمزيد من المعلومات." },
    },
    {
      question: { fr: "Quelle est la meilleure période pour visiter le Sahara ?", en: "What is the best time to visit the Sahara?", ar: "ما هو أفضل وقت لزيارة الصحراء؟" },
      answer: { fr: "La meilleure période est d'octobre à avril, quand les températures sont plus douces (15-25°C). Évitez juillet-août où il fait très chaud (40-50°C).", en: "The best period is October to April, when temperatures are milder (15-25°C). Avoid July-August when it's very hot (40-50°C).", ar: "أفضل فترة هي من أكتوبر إلى أبريل، عندما تكون درجات الحرارة معتدلة (15-25 درجة). تجنب يوليو وأغسطس." },
    },
    {
      question: { fr: "Proposez-vous des circuits personnalisés ?", en: "Do you offer customized tours?", ar: "هل تقدمون رحلات مخصصة؟" },
      answer: { fr: "Oui ! Nous créons des itinéraires sur mesure selon vos préférences, budget et disponibilités. Contactez-nous via le formulaire de devis.", en: "Yes! We create tailor-made itineraries according to your preferences, budget, and availability. Contact us via the quote form.", ar: "نعم! نقوم بإنشاء مسارات مصممة خصيصًا وفقًا لتفضيلاتك وميزانيتك وتوفرك." },
    },
    {
      question: { fr: "Le paiement en ligne est-il sécurisé ?", en: "Is online payment secure?", ar: "هل الدفع عبر الإنترنت آمن؟" },
      answer: { fr: "Nous proposons actuellement le paiement par virement bancaire et espèces. Le paiement en ligne sécurisé sera disponible prochainement.", en: "We currently offer payment by bank transfer and cash. Secure online payment will be available soon.", ar: "نقدم حاليًا الدفع عن طريق التحويل المصرفي والنقد. سيكون الدفع الآمن عبر الإنترنت متاحًا قريبًا." },
    },
  ],

  // --- COULEURS DU THÈME (référence Tailwind) ---
  theme: {
    primary: "#1B4F72",     // Bleu marine algérien
    secondary: "#F39C12",   // Doré du désert
    accent: "#27AE60",      // Vert nature
    dark: "#1a1a2e",
    light: "#F8F9FA",
  },
}

export default siteConfig
