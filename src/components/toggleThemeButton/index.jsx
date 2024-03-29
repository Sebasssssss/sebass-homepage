import React from 'react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Button, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'

const animations = {
  hidden: { opacity: 0, y: '-20px' },
  show: {
    opacity: 1,
    y: 0
  },
  tap: {
    scale: 0.8
  },
  exit: {
    opacity: 0
  }
}

const themes = {
  sun: 'sun',
  moon: 'moon'
}

const AnimatedItem = ({ children, key }) => {
  return (
    <motion.div
      key={key}
      variants={animations}
      initial="hidden"
      animate="show"
      exit="exit"
      whileTap="tap"
    >
      {children}
    </motion.div>
  )
}

const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <AnimatePresence mode="wait" initial={false}>
      {colorMode === 'dark' ? (
        <AnimatedItem key={themes.sun}>
          <Button
            bg={useColorModeValue('#85586f', null)}
            _hover={{ bg: useColorModeValue('#774f63', null) }}
            textColor={useColorModeValue('#f8ede3', null)}
            colorScheme={useColorModeValue(null, 'orange')}
            p={1}
            onClick={() => toggleColorMode()}
          >
            <SunIcon />
          </Button>
        </AnimatedItem>
      ) : (
        <AnimatedItem key={themes.moon}>
          <Button
            bg={useColorModeValue('#85586f', null)}
            _hover={{ bg: useColorModeValue('#774f63', null) }}
            textColor={useColorModeValue('#f8ede3', null)}
            colorScheme={useColorModeValue(null, 'orange')}
            p={1}
            onClick={() => toggleColorMode()}
          >
            <MoonIcon />
          </Button>
        </AnimatedItem>
      )}
    </AnimatePresence>
  )
}

export default ToggleColorMode
