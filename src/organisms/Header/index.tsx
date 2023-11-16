//COMPONENTES
import Logo from "../../molecules/logo";
import Button from "../../atoms/Button";
import Menu from "../Menu/menu";

//STYLED COMPONENTS
import * as S from "./styles"

const Header = () => {
  return (
  
  <S.Box>
    <Logo/>
    <Menu/>
    <Button/>

  </S.Box>
  
  
  )
}

export default Header;