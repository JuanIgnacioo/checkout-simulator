import {
  Box,
  Flex,
  Spacer,
  Center,
  Text,
  Spinner,
  Skeleton,
} from "@chakra-ui/react";
import {
  getCheckoutItems,
  getCheckoutTotalPrice,
  getCheckoutCurrencySymbol,
  getCheckoutFetching,
} from "../../redux/checkout/selectors";

import React from "react";
import { useSelector } from "react-redux";

const ItemsContainer: React.FC = () => {
  const checkoutItems = useSelector(getCheckoutItems);
  const total_price = useSelector(getCheckoutTotalPrice);
  const currency_symbol = useSelector(getCheckoutCurrencySymbol);
  const isfetching = useSelector(getCheckoutFetching);

  return (
    <Center>
      <Box borderWidth="1px" borderRadius="lg" mt={4} width="sm">
        <Flex minWidth="max-content" alignItems="center" gap="3">
          <Box p="3" fontWeight="semibold" fontSize={20} color={"#9D47F6"}>
            <Text>Total</Text>
          </Box>
          <Spacer />
          <Box
            p="3"
            fontWeight="semibold"
            fontSize={20}
            color={"#9D47F6"}
            as="h4"
          >
            {isfetching ? <Spinner /> : currency_symbol + total_price}
          </Box>
        </Flex>
        <Flex minWidth="max-content" gap="1" flexDirection={"column"}>
          {isfetching ? (
            <Box>
              <Skeleton height="20px" mb={2} mr={2} ml={2} />
              <Skeleton height="20px" mb={2} mr={2} ml={2}/>
              <Skeleton height="20px" mb={2} mr={2} ml={2}/>
            </Box>
          ) : (
            checkoutItems.map((item: any, index: number) => {
              return (
                <Flex key={index}>
                  <Box
                    p="3"
                    fontWeight="semibold"
                    fontSize={14}
                    color={"#00000"}
                  >
                    <Text>
                      {item.name} x {item.quantity}
                    </Text>
                  </Box>
                  <Spacer />
                  <Box
                    p="3"
                    fontWeight="semibold"
                    fontSize={14}
                    color={"#00000"}
                  >
                    <Text>
                      {currency_symbol} {item.unitPrice.amount.toString()}
                    </Text>
                  </Box>
                </Flex>
              );
            })
          )}
        </Flex>
      </Box>
    </Center>
  );
};

export default ItemsContainer;
