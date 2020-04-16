/*
import React, {Component, useEffect, useState} from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import {createEvent, current, listEvents} from "../../../api/EventsApi";


const localizer = momentLocalizer(moment);


const BigCalendar =()=> {


        const InitialEvents= [{
            id: 2,
            title: 'DS STARTS',
            start: new Date(2016, 2, 13, 0, 0, 0),
            end: new Date(2016, 2, 20, 0, 0, 0),
        }];




    const [events,listEvent]=useState([]);
    const [newEvent, addEvent]=useState(events.push(newEvent));

    useEffect(()=>{
        //console.log("mount ",CurrentUser);
        current().then((data)=>{
            console.log("current",data);
        });

        listEvents().then((data) => {
            console.log("events mount", data);

            const events=data;
            const listEvent = {
                name: 'React',
                events,
                messages: messages,

            };

            this.setState({
                events:[
                    ...this.state.events,
                    data
                ]
            })
        });
        //console.log("user",this.state.userId);


    })
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

    const handleSelect = ({start, end}) => {

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
            createEvent({id: "eess", title: title, start: start, end: end});
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
                        messages={ this.messages}
                        events={this.state.events}
                        startAccessor="start"
                        endAccessor="end"
                        selectable
                        onSelectSlot={handleSelect}
                        defaultDate={moment().toDate()}
                        localizer={localizer}
                    />
                </div>
            </div>
        );
    }
}

export default BigCalendar;*/
