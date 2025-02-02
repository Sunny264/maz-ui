import { useNuxtApp } from 'nuxt/app'
import { useThemeHandler as useThemeHandlerComposable } from 'maz-ui'

export function useThemeHandler() {
  const { $config } = useNuxtApp()

  const themeHandlerOptions = $config.public.mazUi?.injectUseThemeHandler

  const options = typeof themeHandlerOptions === 'object' ? themeHandlerOptions : {}

  return useThemeHandlerComposable(options)
}
