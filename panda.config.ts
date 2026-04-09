import { green } from '~/core/theme/colors/green'
import { red } from '~/core/theme/colors/red'
import { neutral } from '~/core/theme/colors/neutral'
import { cyan } from '~/core/theme/colors/cyan'
import { animationStyles } from '~/core/theme/animation-styles'
import { zIndex } from '~/core/theme/tokens/z-index'
import { shadows } from '~/core/theme/tokens/shadows'
import { durations } from '~/core/theme/tokens/durations'
import { colors } from '~/core/theme/tokens/colors'
import { textStyles } from '~/core/theme/text-styles'
import { layerStyles } from '~/core/theme/layer-styles'
import { keyframes } from '~/core/theme/keyframes'
import { globalCss } from '~/core/theme/global-css'
import { conditions } from '~/core/theme/conditions'
import { slotRecipes, recipes } from '~/core/theme/recipes'
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  jsxFramework: 'solid',

  // Useful for theme customization
  theme: {
    extend: {
      animationStyles: animationStyles,
      recipes: recipes,
      slotRecipes: slotRecipes,
      keyframes: keyframes,
      layerStyles: layerStyles,
      textStyles: textStyles,

      tokens: {
        colors: colors,
        durations: durations,
        zIndex: zIndex,
      },

      semanticTokens: {
        colors: {
          fg: {
            default: {
              value: {
                _light: '{colors.gray.12}',
                _dark: '{colors.gray.12}',
              },
            },

            muted: {
              value: {
                _light: '{colors.gray.11}',
                _dark: '{colors.gray.11}',
              },
            },

            subtle: {
              value: {
                _light: '{colors.gray.10}',
                _dark: '{colors.gray.10}',
              },
            },
          },

          border: {
            value: {
              _light: '{colors.gray.4}',
              _dark: '{colors.gray.4}',
            },
          },

          error: {
            value: {
              _light: '{colors.red.9}',
              _dark: '{colors.red.9}',
            },
          },

          cyan: cyan,
          gray: neutral,
          red: red,
          green: green,
        },

        shadows: shadows,

        radii: {
          l1: {
            value: '{radii.xs}',
          },

          l2: {
            value: '{radii.sm}',
          },

          l3: {
            value: '{radii.md}',
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',

  globalCss: globalCss,
  conditions: conditions,
})
