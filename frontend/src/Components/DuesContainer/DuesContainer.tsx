import {
  Box,
  Flex,
  Spacer,
  Center,
  Radio,
  Text,
  RadioGroup,
} from "@chakra-ui/react";
import {
  getCheckoutCurrencySymbol,
  getCheckoutInstallments,
} from "../../redux/checkout/selectors";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actions as checkoutActions } from "../../redux/checkout/actions";

const DuesContainer: React.FC = () => {
  const dispatch = useDispatch();
  const dues = useSelector(getCheckoutInstallments);
  const currencysymbol = useSelector(getCheckoutCurrencySymbol);
  const [value, setValue] = useState<any>("");

  const updatePrice = (newprice: number) => {
    dispatch(checkoutActions.updateTotalPrice({ price: newprice }));
  };

  return (
    <Center>
      <RadioGroup
        onChange={(e: any) => {
          setValue(e);
          updatePrice(e);
        }}
        value={value}
      >
        {dues.map((item: any, key: number) => {
          return (
            <Box
              borderWidth="1px"
              borderRadius="lg"
              mt={4}
              width="sm"
              key={key}
              backgroundColor={
                item.total.toString() === value ? "#F7F0FE" : "#F2F2F2"
              }
            >
              <Flex minWidth="max-content" flexDirection={"column"} gap="3">
                <Flex>
                  <Box p="3" fontSize={15} color={"#585858"}>
                    <Radio size="lg" value={item.total.toString()}>
                      <Text color={"#413F42"}>
                        {item.installment} Cuotas de ${item.installmentPrice}
                      </Text>
                      <Text color={"#747474"}>CF: {item.financialRate} %</Text>
                    </Radio>
                  </Box>
                  <Spacer />
                  <Box p="8" fontSize={15} color={"#585858"}>
                    <Text>
                      {item.financialRate === 0
                        ? "Sin interés"
                        : currencysymbol + item.total}
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            </Box>
          );
        })}
      </RadioGroup>
      )
    </Center>
  );
};

export default DuesContainer;
