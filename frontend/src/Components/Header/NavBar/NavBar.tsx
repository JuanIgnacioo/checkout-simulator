import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { ReactComponent as Geopagos } from "../../../Assets/Geopagos.svg";
import { getCheckoutShopName } from "../../../redux/checkout/selectors";

const NavBar: React.FC = () => {
  const shop_name = useSelector(getCheckoutShopName);
  return (
    <>
      <Box bg="#191C3C" px={4}>
        <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
          <Geopagos />
          <Spacer />
          <Text fontSize="sm" mt={1} color={"white"}>
            {!shop_name.length ? "Cargando nombre de comercio ..." : shop_name}
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default NavBar;
