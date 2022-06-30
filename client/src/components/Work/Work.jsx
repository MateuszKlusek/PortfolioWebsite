
// style
import * as S from "./Work.styled"

// hooks
import { Routes} from "react-router-dom";

const Work = () => {
    return <S.WorkContainer>

    <S.Tabs>
        <S.Tab>Explore Github</S.Tab>
        <S.Tab>Multiple Countdowns</S.Tab>
        <S.Tab>VSCode Clone</S.Tab>
    </S.Tabs>


<Routes>

</Routes>


    </S.WorkContainer>;
};

export default Work;
