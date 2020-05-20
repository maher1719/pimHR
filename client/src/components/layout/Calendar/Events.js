import {createAsyncThunk} from '@reduxjs/toolkit';
import EventsApi from 'api/EventsApi';

let initialState = {

    events: {},

};
export const createEvent = createAsyncThunk(
    'Calendar/BigCalendar',
    async(data, {
        async rejectWithValue(value) {
            try {

                await EventsApi.createEvent(data);
            } catch (error) {
                return rejectWithValue(error.data);
            }
        }
    })
);