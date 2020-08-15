import React, { useState } from 'react'

import Icon from 'src/components/icon'
import { Heading, Typo } from 'src/components/typography'
import Button from 'src/components/button'
import './cookie.scss'

// Inspiration for handling cookies with hooks:
// https://gist.github.com/daankauwenberg/bf0daf4d4a9a157a078ba4ec4559e3ab

const COOKIE_NAME = 'consent'

function getCookie() {
  const regex = new RegExp(`(?:(?:^|.*;\\s*)${COOKIE_NAME}\\s*\\=\\s*([^;]*).*$)|^.*$`)
  const cookie = document.cookie.replace(regex, "$1")
  return cookie.length ? JSON.parse(cookie) : undefined
}

function setCookie(state) {
  document.cookie = `${COOKIE_NAME}=${state}`
}

// Initial value is cookie value OR prefered value but not yet set
let initialCookieValue = getCookie() || false

const CookiePopup = () => {
  const [popupIsOpen, setPopupIsOpen] = useState(!initialCookieValue)

  const acceptCookie = () => {
    setPopupIsOpen(false)
    setCookie(true)
  }

  // console.group()
  //   console.log("Jakie mamy tutaj Cookies?:", document.cookie || "Nic nie znaleziono")
  //   console.info("Inicjowany stan wartości Cookies na stronie:", initialCookieValue)
  //   console.log("Cookies Popup otwarty?:", popupIsOpen ? "Tak" : "Nie")
  // console.groupEnd()

  return(
    <>
      {popupIsOpen && (
            <div className='CookieContainer'>
              <Icon symbol='cookie' />
              <Heading size={3}>Ta strona nie zawiera cukru</Heading>
              <Typo size='small' bolder>
                  Ale kto by od czasu do czasu nie zjadł pysznego ciasteczka?
              </Typo>
              <Typo size='small' regular>
                  Zwłaszcza jeśli pomoże to twórcom w określeniu liczby odwiedzających stronę.
              </Typo>
              <Button primary onClick={acceptCookie}>OK</Button>
            </div>
      )}
    </>
  )
}

export default CookiePopup
