import React from "react";

import { storiesOf } from "@storybook/react";

import { OverrideTestDiv } from "../components/atom/testDiv";
import { PrimaryButton, SecondaryButton, DangerButton } from "../components/atom/button";
import { SmallTextBox, LargeTextBox, MediumTextBox } from "../components/atom/textBox";

const onclick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  console.log("clicked");
}

storiesOf("TestDiv", module)
  .add("with style", () => <OverrideTestDiv>test string</OverrideTestDiv>);

storiesOf("atom", module)
  .add("button", () => {
    return (
      <>
        <p>
          <PrimaryButton
            disabled={false}
            onClick={onclick}
            label="button"
          >
            button
          </PrimaryButton>
        </p>
        <p>
          <SecondaryButton
            disabled={false}
            onClick={onclick}
            label="button"
          >
            button
          </SecondaryButton>
        </p>
        <p>
          <DangerButton
            disabled={false}
            onClick={onclick}
            label="button"
          >
            button
          </DangerButton>
        </p>
      </>
  )})
  .add("text", () => {
    return (
      <>
        <p>
          <SmallTextBox />
        </p>
        <p>
          <MediumTextBox />
        </p>
        <p>
          <LargeTextBox />
        </p>
      </>
    )
  });
  // .add("secondary button ", () => <SecondaryButton>button</SecondaryButton>);

