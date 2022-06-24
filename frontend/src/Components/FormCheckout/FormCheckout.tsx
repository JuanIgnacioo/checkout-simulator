import React from "react";
import InputMask from "react-input-mask";
import { useSelector } from "react-redux";
import {
  Box,
  Flex,
  Spacer,
  Center,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Button,  
  Spinner,
} from "@chakra-ui/react";
import { ReactComponent as QuestionIcon } from "../../Assets/Question.svg";
import { ReactComponent as Padlock } from "../../Assets/Padlock.svg";
import { ReactComponent as VisaCard } from "../../Assets/Visa.svg";
import { getCheckoutFetching } from "../../redux/checkout/selectors";
import DuesContainer from "../DuesContainer/DuesContainer";
import Swal from "sweetalert2";

const FormCheckout: React.FC = () => {
  const isfetching = useSelector(getCheckoutFetching);

  const handleSubmit = () => {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Ocurrió un error",
      showCloseButton: true,
      confirmButtonText: "Volver a intentar",
    });
  };

  return (
    <Center>
      <Box mt={4} width="sm">
        <Flex minWidth="max-content" alignItems="center" gap="3">
          <InputGroup>
            <Input
              variant="flushed"
              as={InputMask}
              mask={"**** **** **** ****"}
              maskChar={null}
              placeholder="Número de la tarjeta"
            />
            <InputRightElement children={<VisaCard />} />
          </InputGroup>
        </Flex>
        <Flex alignItems="center" gap="3" mt={10}>
          <Input variant="flushed" placeholder="MM/AA" />
          <Spacer />
          <InputGroup>
            <Input variant="flushed" placeholder="CÓD. de seguridad" />
            <InputRightElement children={<QuestionIcon />} />
          </InputGroup>
        </Flex>
        <Text fontSize="sm" mt={1} color={"#585858"}>
          Fecha de expiración
        </Text>
        <Flex minWidth="max-content" alignItems="center" gap="3" mt={10}>
          <Input variant="flushed" placeholder="Nombre del titular" />
        </Flex>
        <Text fontSize="sm" mt={1} color={"#585858"}>
          Como figura en la tarjeta
        </Text>
        <Flex minWidth="max-content" alignItems="center" gap="3" mt={10}>
          <Input variant="flushed" placeholder="DNI del titular" />
        </Flex>
        <Text fontSize="sm" mt={1} color={"#585858"}>
          Número de documento
        </Text>
        <Box width="sm">
          <Text fontSize={28} fontWeight={500} marginTop={31}>
            Cuotas
          </Text>
          {isfetching ? (
            <Center>
              <Spinner />
            </Center>
          ) : (
            <DuesContainer />
          )}
        </Box>
        <Box width="sm">
          <Text fontSize={28} fontWeight={500} marginTop={31}>
            Datos Personales
          </Text>
          <Flex minWidth="max-content" alignItems="center" gap="3" mt={3}>
            <Input
              variant="flushed"
              placeholder="E-mail"
              type={"email"}
              onChange={(e: any) => console.log(e.target.value)}
            />
          </Flex>
          <Text fontSize="sm" mt={1} color={"#585858"}>
            A este email te enviaremos el recibo de compra
          </Text>
          <Button
            colorScheme={"purple"}
            width={"100%"}
            mt={5}
            onClick={() => handleSubmit()}
          >
            Continuar
          </Button>
          <Box mt={4}>
            <Flex>
              <Padlock />
              <Text fontSize="sm" ml={2} color={"#A5A5A5"}>
                Todas las transacciones son seguras y encriptadas
              </Text>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Center>
  );
};

export default FormCheckout;
