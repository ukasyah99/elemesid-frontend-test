const Button = {
  baseStyle: {
    fontWeight: "medium",
    _focus: {
      shadow: "none",
    },
  },
  variants: {
    solid: {
      rounded: "full",
    },
  },
  sizes: {
    md: {
      h: "auto",
      fontSize: { base: "13px", md: "14px" },
      px: { base: "15px", md: "18px" },
      py: { base: "11px", md: "10px" },
    }
  },
}

export default Button
