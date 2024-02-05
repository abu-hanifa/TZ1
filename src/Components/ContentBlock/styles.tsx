// @ts-ignore
import styled from 'styled-components'

export const Block = styled.div`
  display: grid;
  background: ${(props: { header: boolean; }) => props.header ? 'lightgrey' : ''};
  grid-template-columns: repeat(${(props: { columns: number; }) => props.columns}, 1fr);
  width: 100%;
  margin-bottom: 12px;
  
  .block{
    display: grid;
    place-items: center;
    height: ${(props: { header: boolean; }) => props.header ? '20px' : ''};;
  }
    `
;
