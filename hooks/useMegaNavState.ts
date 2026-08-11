'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

const OPEN_DELAY_MS = 150
const CLOSE_DELAY_MS = 300

export interface UseMegaNavStateReturn {
  activeMenu: string | null
  isOpen: boolean
  openMenu: (menuId: string) => void
  closeMenu: () => void
  scheduleOpen: (menuId: string) => void
  scheduleClose: () => void
  cancelTimers: () => void
  handleMenuEnter: (menuId: string) => void
  handleMenuLeave: () => void
  handlePanelEnter: () => void
  handlePanelLeave: () => void
}

export function useMegaNavState(): UseMegaNavStateReturn {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const openTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const cancelTimers = useCallback(() => {
    if (openTimerRef.current) {
      clearTimeout(openTimerRef.current)
      openTimerRef.current = null
    }
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
  }, [])

  const openMenu = useCallback(
    (menuId: string) => {
      cancelTimers()
      setActiveMenu(menuId)
    },
    [cancelTimers]
  )

  const closeMenu = useCallback(() => {
    cancelTimers()
    setActiveMenu(null)
  }, [cancelTimers])

  const scheduleOpen = useCallback(
    (menuId: string) => {
      cancelTimers()
      openTimerRef.current = setTimeout(() => openMenu(menuId), OPEN_DELAY_MS)
    },
    [cancelTimers, openMenu]
  )

  const scheduleClose = useCallback(() => {
    cancelTimers()
    closeTimerRef.current = setTimeout(() => closeMenu(), CLOSE_DELAY_MS)
  }, [cancelTimers, closeMenu])

  const handleMenuEnter = useCallback(
    (menuId: string) => {
      scheduleOpen(menuId)
    },
    [scheduleOpen]
  )

  const handleMenuLeave = useCallback(() => {
    scheduleClose()
  }, [scheduleClose])

  const handlePanelEnter = useCallback(() => {
    cancelTimers()
  }, [cancelTimers])

  const handlePanelLeave = useCallback(() => {
    scheduleClose()
  }, [scheduleClose])

  useEffect(() => cancelTimers, [cancelTimers])

  return {
    activeMenu,
    isOpen: activeMenu !== null,
    openMenu,
    closeMenu,
    scheduleOpen,
    scheduleClose,
    cancelTimers,
    handleMenuEnter,
    handleMenuLeave,
    handlePanelEnter,
    handlePanelLeave,
  }
}
