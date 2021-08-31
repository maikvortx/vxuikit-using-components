import styled from 'styled-components';

export const Section = styled.div`
  padding: 70px 0;
  background-color: ${props => props.bgColor || "#FFFFFF"};
`;
export const Container = styled.div`
  border-radius: 4px;
  width: 90%;
  margin: 0 auto;
  margin-top: 30px;
  align-items: center;
  a {
    color: #343434;
    text-decoration: none;
    & :hover {
      color: #cb1e25;
    }
  }
`;
export const Title = styled.div`
  h1, h2, h3, h4 {
  font-family: ${props => props.fontFamily || '"Josefin Sans", "Times New Roman", serif'};
  font-weight: ${props => props.fontWeight || "400"};
  min-height: 32px;
  bottom: 10px;
    span {
      color: ${props => props.color || "#525252"};
    }
  }
`;
export const Subtitle = styled.h3`
  color: ${props => props.color || "#525252"};
  min-height: 32px;
  bottom: 10px;
  margin: 32px 0;
`;
export const Text = styled.p`
  color: ${props => props.color || "#525252"};
  bottom: 10px;
  margin: 32px 0;
  line-height: 24px;
  font-size: 16px;
  width: ${props => props.width ||'300px'};
  font-family: 'Open Sans', sans-serif;
`;
export const Box = styled.div`
  display: "block";
  background-color: ${props => props.bgColor || "#525252"};
  width: 80px;
  height: 80px;
  border: 0.5px solid #C4C4C4;
  border-radius: 4px 4px 0 0;
`;
export const Tag = styled.div`
  display: "block";
  background-color: #F7F7F7;
  width: 80px;
  text-align: center;
  padding: 5px 0;
  margin-bottom: 15px;
  border-radius: 0 0 4px 4px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
`;
export const H2 = styled.h2`
  font-family: ${props => props.fontFamily || '"Josefin Sans", "Times New Roman", serif'};
  font-weight: ${props => props.fontWeight || "500"};
`;
