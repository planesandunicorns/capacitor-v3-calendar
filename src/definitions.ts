export interface CalendarEventOptions {
  id?: string;
  title?: string;
  location?: string;
  notes?: string;
  startDate?: number;
  endDate?: number;
  calendarId?: string;
  commit?: boolean
}

export enum CalendarType {
	local = 0,
	calDav = 1,
	exchange = 2,
	subscription = 3,
	birthday = 4
}

export interface CalendarObject {
	id: string
	name: string;
	displayName: string
	type: CalendarType
	defaultCalendar: boolean
}

export interface CalendarEvent {
	id: string
	title: string;
	location: string
	notes: CalendarType
	startDate: number
	endDate: number
	allDay: boolean
}

export interface DeleteEventOptions {
  [key: string]: string;
}

export interface CapacitorCalendarPlugin {
	startTransaction(): Promise<any>
	openCalendar(options?: { date: number }): Promise<any>
	createEvent(options: CalendarEventOptions): Promise<{result: "success", commit: boolean}>
	findEvent(options: CalendarEventOptions): Promise<any>
	deleteEvent(options: DeleteEventOptions): Promise<{result: "success", commit: boolean}>
	deleteEventById(options: { id: string }): Promise<{result: "success", commit: boolean}>
	updateEvent(options: CalendarEventOptions): Promise<{result: "success", commit: boolean}>
	getAvailableCalendars(): Promise<{availableCalendars: Array<CalendarObject>}>
	commit(): Promise<boolean>
}
