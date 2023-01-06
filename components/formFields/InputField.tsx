import React from 'react'
import { Flex, Input, InputGroup, InputLeftElement, FormLabel } from '@chakra-ui/react'

const InputField = React.forwardRef(
  ({ type, errorMessage, label, readOnly, icon, ...otherProps }, ref) => {
    type = type || 'text'
    return (
      <Flex direction={'column'} w="100%" mb={12}>
        <InputGroup>
          {icon && (
            <InputLeftElement pointerEvents="none" mt={2}>
              {icon}
            </InputLeftElement>
          )}
          <Input
            ref={ref}
            id={label}
            type={type}
            color="offWhite"
            border="1px solid"
            borderColor={errorMessage ? 'scarlet' : 'offWhite'}
            backgroundColor="navy"
            rounded={'16px'}
            fontSize="xs"
            w="100%"
            pl={icon ? '2rem' : '1rem'}
            h="3.5625rem"
            zIndex={0}
            _autofill={{
              WebkitBoxShadow: '0 0 0 100px var(--chakra-colors-navy) inset',
              WebkitTextFillColor: 'var(--chakra-colors-offWhite)',
            }}
            {...otherProps}
          />
        </InputGroup>
        {label && (
          <FormLabel
            htmlFor={label}
            fontSize="xs"
            color={errorMessage ? 'scarlet' : 'white'}
            ml={2}
            bg="navy"
            w="fit-content"
            size="xs"
            px={2}
            mt={-16}
            zIndex={1}
          >
            {label.toUpperCase()}
          </FormLabel>
        )}
      </Flex>
    )
  },
)

InputField.displayName = 'InputField'
export default InputField
