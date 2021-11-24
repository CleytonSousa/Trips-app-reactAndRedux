import styled from 'styled-components';

export const Container = styled.section`
  #title{
      color: #fff;
  }

  section{
      padding: 20px;
      margin-bottom: 10px;
      background: #fff;
      border-radius: 4px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      img{
          max-height: 100px;
      }

      button{
          border: 0;
          background: #fff;
          cursor: pointer;
      }
  }

  footer{
      button{
          border: 0;
          display: flex;
          padding: 10px;
          text-transform: uppercase;
          border-radius: 4px;
          margin-top: 10px;
          font-weight: bold;
          cursor: pointer;
      }
  }
`;
