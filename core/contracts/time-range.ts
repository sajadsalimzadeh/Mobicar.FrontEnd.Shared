export enum DayOfWeek
{
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
}

export interface TimeRange {
    dayOfWeek: DayOfWeek;
    start: string;
    end: string;
}
