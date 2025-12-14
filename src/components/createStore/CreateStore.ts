import {createContext} from "react";
import victoty from "../../images/png/victory.png";
import redWings from "../../images/png/red_wings.png";
import airlines from "../../images/png/airline.png";

export const defaultState = {
    "0": [
        { "id": 1,
            "from": 20000,
            "to": 22100,
            "company": "Победа",
            "price": 21000,
            "currency": "RUB",
            "time": "14:20 - 16:30",
            "svo": "14:20",
            "led": "16:30",
            "wayClock": "2",
            "wayMinutes": "10",
            "date": "25.12.2025",
            "connectionAmount":  "Без пересадок",
            "icon": victoty
        },
        { "id": 2,
            "from": 25000,
            "to": 26100,
            "company": "Red Wings",
            "price": 25200,
            "currency": "RUB",
            "time": "14:19 - 15:30",
            "svo": "14:19",
            "led": "15:30",
            "wayClock": "1",
            "wayMinutes": "11",
            "date": "25.12.2025",
            "connectionAmount":  "1 пересадка",
            "icon": redWings
        },
        { "id": 3,
            "from": 28000,
            "to": 29000,
            "company": "S7 Airlines",
            "price": 28100,
            "currency": "RUB",
            "time": "14:20 - 16:10",
            "svo": "14:20",
            "led": "16:10",
            "wayClock": "1",
            "wayMinutes": "50",
            "date": "25.12.2025",
            "connectionAmount":  "2 пересадки",
            "icon": airlines
        }
    ]
}
interface createStoreState {
    "0":
        {   "id": number,
            "from": number,
            "to": number,
            "company": string,
            "price": number,
            "currency": string,
            "time": string,
            "svo": string,
            "led": string,
            "wayClock": string,
            "wayMinutes": string,
            "date": string,
            "connectionAmount":  string,
            "icon": string,
        } []

}
export const createStoreLayout = createContext<createStoreState>(defaultState);