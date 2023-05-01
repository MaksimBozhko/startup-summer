import React from "react"
import { Flex, Loader } from "@mantine/core"

export const Preloader = () => {
  return (
    <Flex
      style={{marginTop: "30px"}}
      justify="center"
      align="center"
      direction="row">
      <Loader size="xl" variant="dots" />;
    </Flex>
  )
}