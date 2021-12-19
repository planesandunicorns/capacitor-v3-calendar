package cz.firest.calendar;

public class Calendar {
    String id;
    String name;
    String displayName;
    boolean defaultCalendar;
	Int type;

    public Calendar(String id, String name, String displayName, boolean defaultCalendar, Int type) {
        this.id = id;
        this.name = name;
        this.displayName = displayName;
		this.type = type;
        this.defaultCalendar = defaultCalendar;
    }
}
