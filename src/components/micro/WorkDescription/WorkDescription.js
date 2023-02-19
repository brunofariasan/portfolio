import { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  Container,
  Job,
} from './styles';

function WorkDescription() {

  const { t, i18n: { language } } = useTranslation();

  return (
    <Container>
      <Job>{t("job")}</Job>
    </Container>
  );
}

export default WorkDescription;