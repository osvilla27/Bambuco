import styled from "styled-components";

const H1 = styled.h1`
  color: ${({theme}) => theme.bgColors.primary}
`
const App = () => {
  return <H1>Bambuco</H1>;
};

export default App;
