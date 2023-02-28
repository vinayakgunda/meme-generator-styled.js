// Style your components here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 30px;
`

export const MemeAppContainer = styled.div`
  width: 80%;
  padding: 30px;
  box-shadow: 0px 0px 5px 1px #d7dfe9;
  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    width: 90%;
  }
`

export const Heading = styled.h1`
  font-family: 'Open Sans';
  font-size: 30px;
  color: #35469c;
`
export const MemeGeneratorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 80%;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media screen and (max-width: 576px) {
    order: 1;
    width: 100%;
  }
`

export const MemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  width: 50%;
  height: 500px;
  @media screen and (max-width: 576px) {
    order: 0;
    width: 100%;
    margin-bottom: 50px;
    width: 100%;
    height: 200px;
  }
`

export const LabelName = styled.label`
  font-family: 'Open Sans';
  font-size: 13px;
  color: #7e858e;
  margin-bottom: 5px;
`

export const InputBox = styled.input`
  height: 5vh;
  margin-bottom: 30px;
  border: 1px solid #d7dfe9;
  border-radius: 3px;
  padding: 5px;
  padding-left: 10px;
  outline: none;
  width: 90%;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`

export const TextContent = styled.p`
  font-family: 'Open Sans';
  font-size: ${props => props.fontText}px;
  color: #ffffff;
`

export const SelectContainer = styled.select`
  font-family: 'Open Sans';
  height: 5vh;
  margin-bottom: 30px;
  border: 1px solid #d7dfe9;
  border-radius: 3px;
  padding: 5px;
  padding-left: 10px;
  outline: none;
  width: 90%;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`

export const OptionName = styled.option`
  font-family: 'Open Sans';
  padding: 10px;
`

export const GenerateButton = styled.button`
  font-family: 'Open Sans';
  padding: 10px;
  width: 200px;
  color: #ffffff;
  background-color: #0b69ff;
  cursor: pointer;
  border: none;
  border-radius: 5px;
`
