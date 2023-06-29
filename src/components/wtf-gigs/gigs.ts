export class Gig {
    date: Date; //in the form YYYY-MM-DD, will be rendered verbatim if otherwise
    city: string;
    venue?: string;
    website?: string;
    timeTba: boolean;

    get time() {
        let time = this.date.toLocaleTimeString('nl', { hour: '2-digit', minute: '2-digit' });
        if (this.timeTba) {
            return null;
        }
        return time;
    }

    constructor(obj: any) {
        this.date = new Date(`${obj.date}${obj.time ? 'T' + obj.time : ""}`.trim());
        this.timeTba = !obj.time;
        this.city = obj.city;
        this.venue = obj.venue;
        this.website = obj.website;
    }
}

export var gigs: Gig[] = [
    new Gig({ date: '2022-03-27', city: 'Gemert', time: '16:30', venue: 'Gij & Ik', website: 'https://gijenik.nl/' }),
    new Gig({ date: '2022-03-26', city: 'Weert', time: '20:00', venue: 'De Bosuil - support voor Catfish', website: 'https://www.debosuil.nl/programma/catfish-2/' }),
    new Gig({ date: '2022-06-17', city: 'Wintelre', venue: 'Welons', website: 'https://welons.nl/' }),
    new Gig({ date: '2022-07-31', city: 'Brielle', venue: 'Brielle Blues', website: 'https://www.brielleblues.nl/' }),
    new Gig({ date: '2022-09-03', city: 'Tegelen', venue: 'Bluesrock Festival', website: 'https://www.bluesrockfestival.nl/' }),
    new Gig({ date: '2022-03-04', city: 'Dordrecht', time: '21:30', venue: 'DJS', website: 'https://www.muziekpodiumdjs.nl/' }),
    new Gig({ date: '2022-04-17', city: 'Bergen', venue: 'Taverne', website: 'https://www.tavernebergen.nl/' }),
    new Gig({ date: '2022-11-05', city: 'Rindern (DE)', venue: 'Culucu Bar', website: 'http://www.culucubar.de/' }),
    new Gig({ date: '2022-04-23', city: 'Helmond', venue: 'Cacaofabriek', website: 'https://cacaofabriek.nl/' }),
    new Gig({ date: '2022-04-29', city: 'Panningen', venue: 'Caf&eacute; tinus', website: 'https://goedtoeven.nl/' }),
    new Gig({ date: '2022-06-26', city: '\'s-Hertogenbosch', venue: 'Muziekcaf&eacute; het Warm Onthaal' }),
    new Gig({ date: '2022-05-13', city: 'Apeldoorn', venue: 'Bluescaf&eacute;', website: 'http://www.bluescafe.nl' }),
    new Gig({ date: '2022-05-25', city: 'Amsterdam', venue: 'Rollende Keukens', website: 'https://rollendekeukens.amsterdam' }),
    new Gig({ date: '2022-05-27', city: 'Breda', time: '23:00', venue: 'Breda Jazz', website: 'https://www.bredajazzfestival.nl/' }),
    new Gig({ date: '2022-10-14', city: 'Texel', venue: 'Texel Blues', website: 'https://www.texelblues.nl/' }),
    new Gig({ date: '2022-10-15', city: 'Texel', venue: 'Texel Blues', website: 'https://www.texelblues.nl/' }),
    new Gig({ date: '2022-09-11', city: 'Gorssel', venue: 'IJssel Jazz', time: '16:30', website: 'https://www.ijsseljazz.nl' }),
    new Gig({ date: '2022-10-30', city: 'Groningen', venue: 'Meziek mit bus' }),
    new Gig({ date: '2022-06-24', city: 'Rotterdam', venue: 'Hilligersberg jazz', website: 'https://www.jazzhillegersberg.nl/' }),
    new Gig({ date: '2022-09-09', city: 'Oldenzaal', venue: 'Oldenzaal Muzikaal', website: 'https://oldenzaalmuzikaal.nl/' }),
    new Gig({ date: '2022-10-29', city: 'Helmond', venue: 'Bluesroute', time: '16:00', website: 'https://www.bluesroutehelmond.nl/' }),

    new Gig({ date: '2023-02-12', city: 'Roermond', venue: 'Den Heilige Cornelius', website: 'https://www.denheiligecornelius.nl/' }),
    new Gig({ date: '2023-03-03', city: 'Hengelo', venue: 'De Cactus', time: '20:30', website: 'https://www.decactus.nl/' }),
    new Gig({ date: '2023-03-12', city: 'Gemert', venue: 'Gij & Ik', time: "16:30", website: 'https://gijenik.nl/' }),
    new Gig({ date: '2023-03-19', city: 'Eindhoven', venue: 'Caf&eacute; Wilhelmina', time: "17:00", website: 'https://www.cafewilhelmina.nl/' }),
    new Gig({ date: '2023-04-02', city: 'Ede', venue: 'De Compaen', website: 'https://www.cafedecompaen.nl/' }),
    new Gig({ date: '2023-04-08', city: 'Asten', venue: 'Paasblues' }),
    new Gig({ date: '2023-04-27', city: 'Bergeijk', venue: 'Markt Pleinfesteijn' }),
    new Gig({ date: '2023-05-17', city: 'Amsterdam', venue: 'Rollende Keukens', website: 'https://rollendekeukens.amsterdam/' }),
    new Gig({ date: '2023-06-03', city: 'Zoetermeer', venue: 'Zoetermeer Blues', time: "17:50", website: 'https://zoetermeer-blues.nl/' }),
    new Gig({ date: '2023-06-11', city: 'Veghel', venue: 'De Afzakkerij', website: 'https://www.afzakkerij.nl/' }),
    new Gig({ date: '2023-07-01', city: 'Lochem', venue: 'Blues rond de Kerk', time: "21:00", website: 'https://www.facebook.com/BluesRondDeKerk/' }),
    new Gig({ date: '2023-07-16', city: 'Blerick', time: "18:00", venue: 'Bli&euml;rock', website: "https://www.stichtingb4music.nl/blierock" }),
]

gigs.sort((a, b) => {
    return a.date.getTime() - b.date.getTime();
})