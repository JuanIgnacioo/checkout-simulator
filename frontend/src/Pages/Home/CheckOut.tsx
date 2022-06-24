import React, { useCallback, useEffect } from "react";
import NavBar from "../../Components/Header/NavBar/NavBar";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import ItemsContainer from "../../Components/ItemsContainer/ItemsContainer";
import FormCheckout from "../../Components/FormCheckout/FormCheckout";
import { actions as checkoutActions } from "../../redux/checkout/actions";
import { useDispatch } from "react-redux";

const CheckOut: React.FC = () => {
  const dispatch = useDispatch();

  const getDataCheckout = useCallback(() => {
    dispatch(checkoutActions.getCheckoutRequest({}));
  }, [dispatch]);

  useEffect(() => {
    getDataCheckout();
  }, [getDataCheckout]);

  return (
    <div>
      <NavBar />
      <Box>
        <Center>
          <Text fontSize={28} fontWeight={595} marginTop={31}>
            Completá los datos para pagar
          </Text>
        </Center>
        <ItemsContainer />
        <Center>
          <Box width="sm">
            <Flex>
              <Text fontSize={15} fontWeight={500} marginTop={5}>
                Pagá con tarjeta de crédito o débito.
              </Text>
              <Text
                fontSize={15}
                fontWeight={500}
                color={"#8F2DF5"}
                marginTop={5}
                cursor="pointer"
                ml={1}
              >
                Ver tarjetas.
              </Text>
            </Flex>
          </Box>
        </Center>
        <FormCheckout />
      </Box>
    </div>
  );
};

export default CheckOut;
