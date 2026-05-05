import styled from "styled-components";
import {Device} from '../../styles/breakpoints' 
import {Header, CalendarLinear, CardTotals, useOperations, v, useMovementsStore, useUsersStore, TableMovements, useAccountStore, useCategoriesStore, BtnDropdown, ListMenuDropdown, DataDesplegableTipoMovements, ContentFilters, BtnFilter, RegisterMovements, getMovementsPerMonthYear} from "../../index"
import { useState } from "react";
import dayjs from 'dayjs'
import { useQuery } from "@tanstack/react-query";

export function MovementsTemplate() {

    const [value, setValue] = useState(dayjs(Date.now()))
    const [formatDate, setFormatDate] = useState("")
    const [openMenuUser, setOpenMenuUser] = useState(false)
    const [stateType, setStateType] = useState(false)
    const [openRegister, setOpenRegister] = useState(false)
    const [action, setAction] = useState('')
    const [dataSelect, setDataSelect] = useState([])

    const {idUser} = useUsersStore()

    const {type, setType, colorCategory, year, month, bgCategory, titleBtnDropMovements} = useOperations()
    const {dataMovements, totalYearMonth, totalYearMonthPaid, totalYearMonthPending, getMovements} = useMovementsStore()
    const {getAccounts} = useAccountStore()
    const {mostrarCategorias} = useCategoriesStore()

    const openType = () => {
        setStateType(!stateType)
        setOpenMenuUser(false)
    }
    
    const changeType = (p) => {
        setType(p)
        setStateType(!stateType)
        setOpenMenuUser(false)
    }

    const newRegister = () => {
        setOpenRegister(!openRegister)
        setAction('Nuevo')
        setDataSelect([])
    }

    useQuery({
        queryKey: ['getMovementsMonthYear'],
        queryFn: () => getMovements({year: year, month: month, idUser: idUser, typeCategories: type})
    })

    const {data: datamovemetns, isLoading} = useQuery({
        queryKey: ['getMovementsMonthYear'],
        queryFn: () => getMovementsPerMonthYear({year: year, month: month, idUser: idUser, typeCategories: type})
    })

    useQuery({
        queryKey: ['getAccount'],
        queryFn: () => getAccounts({userId: idUser})
    })

    useQuery({
        queryKey: ['getCategories'],
        queryFn:() => mostrarCategorias({idUser: idUser, type: type})
    })

    console.log(datamovemetns)

  return (
    <Container>

        {
            openRegister && <RegisterMovements dataSelect={dataSelect} state={openRegister} setState={() => setOpenRegister(!openRegister)}/>
        }

        <header className="header">
            <Header state={openMenuUser} setState={setOpenMenuUser} />
        </header>

        <section className="tipo">
            <div onClick={(e) => e.stopPropagation()}>
                <ContentFilters>
                    <BtnDropdown text={titleBtnDropMovements} bgColor={bgCategory} textColor={colorCategory} funcion={openType}/>
                    {stateType && <ListMenuDropdown data={DataDesplegableTipoMovements} top="112%" funcion={(p) => changeType(p)}/> }
                </ContentFilters>
            </div>

            <ContentFilter>
                <BtnFilter bgColor={bgCategory} textColor={colorCategory} icon={<v.agregar />} funcion={newRegister} />
            </ContentFilter>
        </section>

        <section className="totals">
            <CardTotals total={totalYearMonthPending} title={type == 'g' ? 'Gastos pendientes' : "Ingresos pendientes"} color={colorCategory} icon={<v.flechaarribalarga/>} />
            <CardTotals total={totalYearMonthPaid} title={type == 'g' ? 'Gastos pagados' : "Ingresos pagados"} color={colorCategory} icon={<v.flechaabajolarga/>} />
            <CardTotals total={totalYearMonth} title="Total" color={colorCategory} icon={<v.balance />} />
        </section>

        <section className="calendar">
            <CalendarLinear value={value} setValue={setValue} setFormatoFecha={setFormatDate} />
        </section>

        <section className="main">
            <TableMovements data={dataMovements} />
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
        "tipo" 100px
        "totals" 360px
        "calendar" 100px
        "main" auto;

        @media ${Device.tablet} {
            grid-template: 
            "header" 100px
            "tipo" 100px
            "totals" 130px
            "calendar" 100px
            "main" auto;
        }

        .header {
            grid-area: header;
            background-color: rgba(103, 93, 241, 0.14);
            display: flex;
            align-items: center;
        }
        .tipo {
            grid-area: tipo;
            background-color: rgba(107, 214, 14, 0.14);
            display: flex;
            align-items: center;
            justify-content: space-between
        }
        .totals {
            grid-area: totals;
            background-color: rgba(229, 67, 26, 0.14);
            display: grid;
            align-items: center;
            grid-template-columns: 1fr;
            gap: 10px;

            @media ${Device.tablet} {
                grid-template-columns: repeat(3, 1fr);
            }
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

const ContentFilter = styled.div `
    display: flex;
    flex-wrap: wrap;
`