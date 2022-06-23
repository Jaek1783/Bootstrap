import './App.css';
import Nav from './Nav';
import Carousel from './Carousel';
import Collapse from './Collapse';
import Percent from './Percent';
import styled from 'styled-components';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Percent/>
      <StyledDiv>
          <Collapse/>
          <Carousel/>
      </StyledDiv>

    </div>
  );
}
export default App;

const StyledDiv = styled.div`
width:80%;
margin:0 auto;
display:flex;
padding:1rem;
border:3px solid #ccc;
margin-bottom:3rem;
`;
