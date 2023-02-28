import {Component} from 'react'

import {
  AppContainer,
  MemeAppContainer,
  Heading,
  MemeGeneratorContainer,
  FormContainer,
  LabelName,
  InputBox,
  GenerateButton,
  MemeContainer,
  TextContent,
  SelectContainer,
  OptionName,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    bgImgValue: '',
    topTextValue: '',
    bottomTextValue: '',
    activeFontSizeValue: fontSizesOptionsList[0].optionId,
    bgImgUrl: '',
    topText: '',
    bottomText: '',
    fontSizeOption: '',
  }

  onBgImgValue = event => {
    this.setState({bgImgValue: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextValue: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomTextValue: event.target.value})
  }

  onChangeFontText = event => {
    this.setState({activeFontSizeValue: event.target.value})
  }

  onGenerateMeme = event => {
    event.preventDefault()

    const {
      bgImgValue,
      topTextValue,
      bottomTextValue,
      activeFontSizeValue,
    } = this.state

    this.setState({
      bgImgUrl: bgImgValue,
      topText: topTextValue,
      bottomText: bottomTextValue,
      fontSizeOption: activeFontSizeValue,
    })
  }

  renderMemeGenerator = () => {
    const {bgImgUrl, topText, bottomText, fontSizeOption} = this.state
    return (
      <MemeContainer backgroundImage={bgImgUrl} data-testid="meme">
        <TextContent fontText={fontSizeOption}>{topText}</TextContent>
        <TextContent fontText={fontSizeOption}>{bottomText}</TextContent>
      </MemeContainer>
    )
  }

  render() {
    const {
      bgImgValue,
      topTextValue,
      bottomTextValue,
      activeFontSizeValue,
    } = this.state
    return (
      <AppContainer>
        <MemeAppContainer>
          <Heading>Meme Generator</Heading>
          <MemeGeneratorContainer>
            <FormContainer onSubmit={this.onGenerateMeme}>
              <LabelName htmlFor="bgImg">Image URL</LabelName>
              <InputBox
                id="bgImg"
                placeholder="Enter the Image URL"
                onChange={this.onBgImgValue}
                value={bgImgValue}
              />
              <LabelName htmlFor="topTxt">Top Text</LabelName>
              <InputBox
                id="topTxt"
                placeholder="Enter the Top Text"
                onChange={this.onChangeTopText}
                value={topTextValue}
              />
              <LabelName htmlFor="bottomTxt">Bottom Text</LabelName>
              <InputBox
                id="bottomTxt"
                placeholder="Enter the Bottom Text"
                onChange={this.onChangeBottomText}
                value={bottomTextValue}
              />
              <LabelName htmlFor="select">Font Size</LabelName>
              <SelectContainer
                id="select"
                onChange={this.onChangeFontText}
                value={activeFontSizeValue}
              >
                {fontSizesOptionsList.map(eachFont => (
                  <OptionName key={eachFont.optionId} value={eachFont.optionId}>
                    {eachFont.displayText}
                  </OptionName>
                ))}
              </SelectContainer>
              <GenerateButton type="submit">Generate</GenerateButton>
            </FormContainer>
            {this.renderMemeGenerator()}
          </MemeGeneratorContainer>
        </MemeAppContainer>
      </AppContainer>
    )
  }
}

export default MemeGenerator
