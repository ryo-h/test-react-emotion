import React from "react";

import { storiesOf } from "@storybook/react";

import { OverrideTestDiv } from "../components/atom/testDiv";
import { PrimaryButton, SecondaryButton, DangerButton } from "../components/atom/button";
import { BootPrimaryButton } from "../components/atom/bootstrapButton";

storiesOf("TestDiv", module)
  .add("with style", () => <OverrideTestDiv>test string</OverrideTestDiv>);

storiesOf("atom", module)
  .add("button", () => {
    return (
      <>
        <p>
          <PrimaryButton>button</PrimaryButton>
        </p>
        <p>
          <SecondaryButton>button</SecondaryButton>
        </p>
        <p>
          <DangerButton>button</DangerButton>
        </p>
        <p>
          <BootPrimaryButton>button</BootPrimaryButton>
        </p>
      </>
  )});
  // .add("secondary button ", () => <SecondaryButton>button</SecondaryButton>);
