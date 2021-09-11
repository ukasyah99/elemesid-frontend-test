const Input = {
  sizes: {
    sm: {
      field: {
        px: "2.5",
        h: "9",
      },
      addon: {
        h: "9",
      }
    }
  },
  variants: {
    outline: {
      field: {
        borderColor: "gray.500",
        borderWidth: "2px",
        color: "dark.500",
        _hover: {
          borderColor: "gray.500",
        },
        _focus: {
          shadow: "none",
        }
      },
      addon: {
        borderColor: "primary.500",
        borderWidth: "2px",
      }
    }
  }
}

export default Input
