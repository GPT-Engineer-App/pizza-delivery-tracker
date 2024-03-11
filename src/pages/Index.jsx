import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Stack, Text, VStack, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaMotorcycle, FaClipboardList, FaPlus } from "react-icons/fa";

const Index = () => {
  const [pedidos, setPedidos] = useState([]);
  const [nuevoPedido, setNuevoPedido] = useState("");

  const handleRegistroPedido = () => {
    if (nuevoPedido) {
      setPedidos([...pedidos, nuevoPedido]);
      setNuevoPedido("");
    }
  };

  return (
    <VStack spacing={8}>
      <Box>
        <Text fontSize="2xl" fontWeight="bold">
          Registro de Pedidos - Pizzería
        </Text>
        <FormControl id="pedido" isRequired>
          <FormLabel>Detalle del Pedido</FormLabel>
          <Input value={nuevoPedido} onChange={(e) => setNuevoPedido(e.target.value)} placeholder="Ejemplo: Pizza de Pepperoni Grande" />
        </FormControl>
        <Button leftIcon={<FaPlus />} colorScheme="green" mt={4} onClick={handleRegistroPedido}>
          Registrar Pedido
        </Button>
      </Box>
      <Box>
        <Text fontSize="xl" fontWeight="bold">
          Pedidos Pendientes
        </Text>
        <List spacing={3}>
          {pedidos.map((pedido, index) => (
            <ListItem key={index}>
              <Stack direction="row" align="center">
                <ListIcon as={FaClipboardList} color="green.500" />
                <Text>{pedido}</Text>
                <Button leftIcon={<FaMotorcycle />} colorScheme="orange" size="sm">
                  Asignar Repartidor
                </Button>
              </Stack>
            </ListItem>
          ))}
        </List>
      </Box>
    </VStack>
  );
};

export default Index;
