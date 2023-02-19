import { 
  Container, 
  Text,
} from './styles';
import { useTranslation } from "react-i18next";

function TextArea() {
  const { t, i18n: { language } } = useTranslation();
	return (
    <Container>
      <Text>
      {t("letsMessage")}
      </Text>
    </Container>
	);
}

export default TextArea;