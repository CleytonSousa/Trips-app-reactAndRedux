import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li{
      display: flex;
      flex-direction: column;
      background: #fff;
      border-radius: 4px;
      padding: 13px;

      img{
          max-width: 280px;
          max-height: 220px;
          border-radius: 4px;
          margin: auto;
          margin-bottom: 15px;
      }

      strong{
          font-size: 16px;
          line-height: 20px;
          color: #191919;
      }

      button{
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          background: #191919;
          border: 0;
          border-radius: 4px;
          cursor: pointer;

          section{
              display: flex;
              align-items: center;
              padding: 10px;
              gap: 5px;
          }
      }
  }
`;
