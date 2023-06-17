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
    _id: string;
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

export interface IEventPlace {
    _id: string;
    name: string;
}

export interface IEventHappening {
    place: IEventPlace;
    date: Date;
    time: string;
}

export interface IEvent {
    name: string;
    price: number;
    quip: string;
    happenings: IEventHappening[];
    description: string;
    images: string[];
    tags?: string[];
    organizer: string;
    openinghours?: string[];
    available: number;
}