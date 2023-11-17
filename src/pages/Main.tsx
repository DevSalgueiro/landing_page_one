
import ButtonContact from "../atoms/ButtonContact"
import Frontend from "../templates/Frontend"
import * as S from './styles'

import img01 from '../../public/img01.png'

function Main() {
  
  return (
    <>
      <div>
        
        <Frontend>
          
          <S.Container>
            <div>
              <h1>Design driven development of your web product</h1>

              <p>We are a full service digital agency that builds immesive user experience.</p>

              <ButtonContact />

            </div>

            <S.ColumnImage>

              <img src={img01} alt="Mulher lendo no computador."></img>

            </S.ColumnImage>
          </S.Container>

        </Frontend>
        
      </div>
      
    </>
  )
}

export default Main
