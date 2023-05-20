//create event type

export interface TicketInfo {
    price: number;
    //currency: string;
    //currencySymbol: string;
    available: number;
    ticketTypes: object[];
    name: string;
}

export interface Event {
    _id?: string;
    title: string;
    description: string;
    date: Date;
    time: string;
    location: string;
    category: string;
    tags: string[];
    organizer: string;
    maxParticipants: number;
    image: string;
    imageName: string;
    ticketInfo: TicketInfo;
}