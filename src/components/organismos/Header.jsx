import styled from "styled-components";
import {ContentHeader, DataUser} from '../../index'

export function Header({state, setState}) {
  return (
    <ContentHeader>
      <div onClick={(e) => e.stopPropagation()}>
        <DataUser state={state} setState={setState} />
      </div>
    </ContentHeader>
);
}