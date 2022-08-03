import { ModulesEnum, SubmodulesEnum } from "../enums";
import { buildTitle } from "../utils";
import { Img, P, Title } from "./Introduction.wrapper.styles";

const INTRODUCTION_TITLE = buildTitle([
  ModulesEnum.DOCUMENT,
  SubmodulesEnum.INTRO,
]);

const IntroductionWrapper = () => (
  <>
    <Title>Welcome</Title>

    <P>
      My name is Brayan Arango and this is my solution to the veritran
      challenge.
    </P>

    <P>
      Next you will see how a ComboBox component evolves iteration by iteration
      given the requirements of the challenge.
    </P>

    <P>Do not go!</P>

    <Img
      src={"https://media.giphy.com/media/tIeCLkB8geYtW/giphy.gif"}
      alt={"Good!"}
    />
  </>
);

export { INTRODUCTION_TITLE, IntroductionWrapper };
