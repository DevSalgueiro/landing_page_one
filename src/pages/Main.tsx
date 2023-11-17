
import ButtonContact from "../atoms/ButtonContact"
import Frontend from "../templates/Frontend"
import * as S from './styles'

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

            <div>Coluna 2</div>
          </S.Container>

        </Frontend>
        
      </div>
      
    </>
  )
}

export default Main
