import {createSlice, createAsyncThunk, configureStore} from "@reduxjs/toolkit";
// const initialState: [] = [];

export const fetchTickets = createAsyncThunk(
    "tickets/fetchTickets",
    async function (_, {rejectWithValue}) {
        try {
            const response = await fetch("http://localhost:3001/0");
            if (!response.ok) {
                throw new Error("Server Error");
            }
            const data = await response.json();
            return data;
        }
        catch (error) {
            // @ts-ignore
            return rejectWithValue(error.message);
        }

    }
)

const dataSlice = createSlice({
    name: "tickets",
    initialState: {
        data: [],
        status: null,
        error: null
    } as {data: [], status: null|string, error: null|string},
    reducers: {
        chep: (state: any) => {
            return state.data;
        },
        fast: (state: any) => {
            return state.data;
        },
        optimal: (state: any) => {
            return state.data;
        },
    },
    extraReducers: (builder) => {
        builder
        //когда происходит загрузка
        .addCase(fetchTickets.pending, (state: any) => {
            state.status = "loading";
            state.error = null;
        })
        //когда успешно получены данные
        .addCase(fetchTickets.fulfilled, (state: any, action: any) => {
            state.status = "resolve";
            state.data = action.payload;
        })
        // когда какая то ошибка
        .addCase(fetchTickets.rejected, (state: any, action: any) => {
            state.status = "rejected";
            state.error = action.payload;
        })
    }
})

export const {chep, fast, optimal} = dataSlice.actions;
export const store = configureStore({
    reducer: {
        dataSlice: dataSlice.reducer,
    }
})