import React, {Component} from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import {createEvent, current, deleteOneEvent, listEvents} from "../../../api/EventsApi";


const localizer = momentLocalizer(moment);


class BigCalendar extends Component {

    state = {
        events: [{
            id: 2,
            title: 'DS STARTS',
            start: new Date(2016, 2, 13, 0, 0, 0),
            end: new Date(2016, 2, 20, 0, 0, 0),
        }],


    };


    constructor() {
        super();
        const cur = current().then((data) => {
            return data
        });

    };

    componentDidMount() {
        //console.log("mount ",CurrentUser);
        //const cur=current().then((data)=>{return data});


        const messages = {
            allDay: 'journée',
            previous: 'précédent',
            next: 'suivant',
            today: 'aujourd\'hui',
            month: 'mois',
            week: 'semaine',
            day: 'jour',
            agenda: 'Agenda',
            date: 'date',
            time: 'heure',
            event: 'événement', // Or anything you want
            showMore: total => `+ ${total} événement(s) supplémentaire(s)`
        };

        //console.log("user Current",userCurrent);

        const getEvents = () => {
            current().then((currentUser) => {
                console.log("current", currentUser);
                listEvents({"user": currentUser.email}).then((data) => {
                    console.log("events mount", data);

                    const events = data;
                    this.state = {
                        name: 'React',
                        culture: "fr",
                        events,
                        messages: messages,

                    };

                    this.setState({
                        events: [
                            ...this.state.events,
                            data
                        ]
                    })
                });
            });
        };
        window.setTimeout(getEvents, 200);


    }

    deleteEvent = (event) => {
        const deleteEvent = window.confirm('Supprime ce évenement?');
        if (deleteEvent) {
            const events = this.state.events;
            const eventToDeleteId = events.indexOf(event);
            const eventToDelete = events[eventToDeleteId];
            console.log("event to selete react", eventToDelete._id);
            deleteOneEvent({_id: eventToDelete._id}).then((data) => {
                console.log("data delete", data);
            });
            const e = events.splice(eventToDeleteId, 1);
            console.log("eventDelete", typeof (e));
            //console.log(events)
        }
    };
    handleSelect = ({start, end}) => {

        const title = window.prompt('New Event name');
        if (title) {
            this.setState({
                events: [
                    ...this.state.events,
                    {
                        start,
                        end,
                        title,
                        id: this._id,
                    },
                ],
            });
            current().then((data) => {
                console.log("current", data);
                createEvent({user: data.email, title: title, start: start, end: end});
                console.log(data.email);
            });
        }
    };

    render() {
        return (
            <div>
                <p>
                    A test for the React Big Calendar.
                </p>
                <div style={{height: '500pt'}}>
                    <Calendar
                        messages={this.state.messages}
                        events={this.state.events}
                        startAccessor="start"
                        endAccessor="end"
                        selectable
                        culture={this.state.culture}
                        onSelectSlot={this.handleSelect}
                        defaultDate={moment().toDate()}
                        onSelectEvent={this.deleteEvent}
                        localizer={localizer}
                    />
                </div>
            </div>
        );
    }
}

export default BigCalendar;