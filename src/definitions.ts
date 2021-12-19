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
  openCalendar(options?: { date: number }): Promise<any>
  createEvent(options: CalendarEventOptions): Promise<any>
  findEvent(options: CalendarEventOptions): Promise<{events: Array<CalendarEvent>}>
  deleteEvent(options: DeleteEventOptions): Promise<any>
  deleteEventById(options: { id: string }): Promise<any>
  updateEvent(options: CalendarEventOptions): Promise<any>
  getAvailableCalendars(): Promise<{availableCalendars: Array<CalendarObject>}>
  startTransaction(): Promise<boolean>
  commit(): Promise<boolean>
}
