import React, {Component} from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import {createEvent, current, listEvents} from "../../../api/EventsApi";


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
        const now = new Date();

    };

    componentDidMount() {
        //console.log("mount ",CurrentUser);

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
        listEvents({"id": "ba.maher94@gmail.com"}).then((data) => {
            console.log("events mount", data);

            const events = data;
            this.state = {
                name: 'React',
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
        const loadEvents = () => {
            current().then((data) => {

            });

            window.setTimeout(loadEvents, 2000);

        }
    }

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
                        id: this.id,
                    },
                ],
            });
            current().then((data) => {
                console.log("current", data);
                createEvent({id: data.email, title: title, start: start, end: end});
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
                        onSelectSlot={this.handleSelect}
                        defaultDate={moment().toDate()}
                        localizer={localizer}
                    />
                </div>
            </div>
        );
    }
}

export default BigCalendar;