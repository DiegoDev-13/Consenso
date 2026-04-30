import styled from "styled-components";
import {v, useUsersStore, BtnCircular} from '../../index'

export function CardTotals({color, total, title, icon}) {

  const {dataUser} = useUsersStore()

  return (
    <Container>
        <section className="contentTextos">
          <section>
            <span className="title">{title}</span>
            <b>{<v.iconoFlechabajo />}</b>
          </section>

          <span className="total">{dataUser.currency} {total}</span>
        </section>

        <section className="contentIcon">
          <BtnCircular height="50px" width="50px" bgColor={color} fontSize="25px" icon={icon} textColor="#fff"/>
        </section>

    </Container>
);
}
const Container =styled.div`
  display: flex;
  align-items: center;
  background: ${({theme}) => theme.bg};
  border-radius: 25px;
  padding: 20px;
  width: 100%;
  justify-content: space-between;

  .contentTextos {
    display: flex;
    flex-direction: column;

    .title {
      font-size: 14px;
    }

    .total {
      font-size: 22px;
      font-weight: 500;
    }

    section {
      display: flex;
      gap: 10px;
      align-items: center;
    }
  }

  .contentIcon {
    display: flex;
  }
`