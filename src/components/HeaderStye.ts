import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
  padding: 10px;

  .logo{
      width: 8vw;
  }

  .reserva{
    display: flex;
    align-items: center;
    text-decoration: none;

    section{
        text-align: right;
        margin-right: 10px;

        strong{
            color: #fff;
            display: block;
        }

        span{
            color: #ddd;
            font-size: 15px;
        }
    }
  }
`;
