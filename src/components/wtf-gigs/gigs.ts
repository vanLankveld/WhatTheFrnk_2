export interface Gig {
    date: string; //in the form YYYY-MM-DD, will be rendered verbatim if otherwise
    time?: string; //in the form HH:mm
    city: string;
    venue?: string;
    website?: string;
}

export var gigs: Gig[] = [
    { date: '2022-03-27', city: 'Gemert', venue: 'Gij & Ik', website: 'https://gijenik.nl/' },
    { date: '2022-03-13', city: 'Roermond', venue: 'Den Heilige Cornelius', website: 'https://denheiligecornelius.nl/' },
    { date: '2022-03-26', city: 'Weert', time: '20:00', venue: 'De Bosuil - support voor Catfish', website: 'https://www.debosuil.nl/programma/catfish-2/' },
    { date: '2022-06-17', city: 'Wintelre', venue: 'Welons', website: 'https://welons.nl/' },
    { date: '2022-07-31', city: 'Brielle', venue: 'Brielle Blues', website: 'https://www.brielleblues.nl/' },
    { date: '2022-08-03', city: 'Tegelen', venue: 'Bluesrock Festival', website: 'https://www.bluesrockfestival.nl/' },
]

gigs.sort((a, b) => {
    let dateCompare = a.date.localeCompare(b.date);
    return dateCompare != null
        ? dateCompare
        : (a.time || "").localeCompare(b.time || "");
})