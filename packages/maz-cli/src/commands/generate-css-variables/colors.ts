import tinycolor from 'tinycolor2'
import { type MazUiConfig, type OutputColorVariant, type VariantColor } from '../../types'

export function generateColorVariants({
  kind,
  config,
}: {
  kind: VariantColor
  config: Required<MazUiConfig>
}): OutputColorVariant {
  const color = tinycolor(config.theme.colors?.[kind])

  if (!color.isValid()) {
    throw new Error(`Color "${kind}" with value "${config.theme.colors?.[kind]}" is not valid`)
  }

  return {
    50: color.clone().lighten(40).toHslString(),
    100: color.clone().lighten(30).toHslString(),
    200: color.clone().lighten(25).toHslString(),
    300: color.clone().lighten(15).toHslString(),
    400: color.clone().lighten(10).toHslString(),
    base: color.clone().toHslString(),
    600: color.clone().darken(10).toHslString(),
    700: color.clone().darken(20).toHslString(),
    800: color.clone().darken(30).toHslString(),
    900: color.clone().darken(40).toHslString(),
    alpha: color.clone().setAlpha(0.6).toHslString(),
    'alpha-20': color.clone().setAlpha(0.2).toHslString(),
    contrast: getContrastColor(color.clone()),
  }
}

export function getContrastColor(color: tinycolor.Instance) {
  const luma = color.getLuminance()

  const threshold = 0.52

  const contrast = luma < threshold ? 'white' : 'black'

  return tinycolor(contrast).toHslString()
}
