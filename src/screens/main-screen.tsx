import * as React from 'react';
import {useState} from 'react';
import {Text, Box, Center, VStack, useColorModeValue} from 'native-base';
import ThemeToggle from '../components/theme-toggle';
import TaskItem from '../components/task-item';

export default function MainScreen() {
  const [checked, setChecked] = useState<boolean>(false);

  const handlePressCheckbox = () => {
    setChecked(prev => {
      return !prev;
    });
  };
  return (
    <Center
      _dark={{bg: 'blueGray.900'}}
      _light={{bg: 'blueGray.50'}}
      px={4}
      flex={1}>
      <VStack space={5} alignItems="center" w="full">
        <TaskItem isDone={checked} onToggleCheckbox={handlePressCheckbox} />
        <Box p={10} bg={useColorModeValue('red.500', 'yellow.500')}>
          <Text>Hello</Text>
        </Box>
        <ThemeToggle />
      </VStack>
    </Center>
  );
}
