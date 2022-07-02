// styles
import * as S from "./App.styled"

// components
import Navbar from "./components/Navbar/Navbar";
import Separator from "./components/Separator/Separator";
import MainTitle from "./components/MainTitle/MainTitle";
import Work from "./components/Work/Work";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

// hooks
import { Routes,Route,Navigate } from "react-router-dom";

function App() {
  return (
    <S.AppContainer>
      <S.MainPageContainer >
        <Navbar />
        <Separator />
        <MainTitle />

        <Routes>
          <Route path="/work/*" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/work" replace />}/>
        </Routes>
        
       <Separator />
      </S.MainPageContainer>
    </S.AppContainer>
  );
}

export default App;
