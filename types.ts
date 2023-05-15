//create event type
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
}