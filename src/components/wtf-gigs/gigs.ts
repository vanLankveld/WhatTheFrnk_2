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
    new Gig({ date: '2022-11-11', city: 'Rindern (DE)', venue: 'Culucu Bar', website: 'http://www.culucubar.de/' }),
]

gigs.sort((a, b) => {
    return a.date.getTime() - b.date.getTime();
})