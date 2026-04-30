import styled from "styled-components";
import {Header, CalendarLinear, CardTotals, useOperations, v} from "../../index"
import { useState } from "react";
import dayjs from 'dayjs'

export function MovementsTemplate() {

    const [value, setValue] = useState(dayjs(Date.now()))
    const [formatDate, setFormatDate] = useState("")
    const [openMenuUser, setOpenMenuUser] = useState(false)

    const {type, setType, colorCategory} = useOperations()

  return (
<Container>
    <header className="header">
        <Header state={openMenuUser} setState={setOpenMenuUser} />
    </header>

    <section className="totals">
        <CardTotals title={type == 'g' ? 'Gastos pendientes' : "Ingresos pendientes"} color={colorCategory} icon={<v.flechaarribalarga/>} />
        <CardTotals title={type == 'g' ? 'Gastos pagados' : "Ingresos pagados"} color={colorCategory} icon={<v.flechaabajolarga/>} />
        <CardTotals title="Total" color={colorCategory} icon={<v.balance />} />
    </section>

    <section className="calendar">
        <CalendarLinear value={value} setValue={setValue} setFormatoFecha={setFormatDate} />
    </section>

    <section className="main">
        
    </section>

</Container>
);
}
const Container =styled.div`
    min-height: 100dvh;
    padding: 15px;
    width: 100%;
    background: ${(props) => props.theme.bgtotal};
    color: ${(props) => props.theme.text};
    display: grid;
    grid-template: 
        "header" 100px
        "totals" 100px
        "calendar" 100px
        "main" auto;

        .header {
            grid-area: header;
            background-color: rgba(103, 93, 241, 0.14);
            display: flex;
            align-items: center;
        }
        .totals {
            grid-area: totals;
            background-color: rgba(229, 67, 26, 0.14);
            display: flex;
            align-items: center;
        }
        .calendar {
            grid-area: calendar;
            background-color: rgba(77, 237, 106, 0.14);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .main {
            grid-area: main;
            background-color: rgba(179, 46, 241, 0.14);
        }
    
`