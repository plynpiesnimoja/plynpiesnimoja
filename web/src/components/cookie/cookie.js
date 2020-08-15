import React, { useState, useEffect } from 'react'

import Icon from 'src/components/icon'
import { Heading, Typo } from 'src/components/typography'
import Button from 'src/components/button'
import './cookie.scss'

// Inspiration for handling cookies with hooks:
// https://gist.github.com/daankauwenberg/bf0daf4d4a9a157a078ba4ec4559e3ab
// https://stackoverflow.com/questions/62905903/using-document-cookie-in-gatsby

const COOKIE_NAME = 'consent'

function getCookie() {
  const regex = new RegExp(`(?:(?:^|.*;\\s*)${COOKIE_NAME}\\s*\\=\\s*([^;]*).*$)|^.*$`)
  if (typeof document !== `undefined`) {
    const cookie = document.cookie.replace(regex, "$1")
    return cookie.length ? JSON.parse(cookie) : undefined
  } else {
    return false
  }
  
}

function setCookie(state) {
  if (typeof document !== `undefined`) {
    document.cookie = `${COOKIE_NAME}=${state}`
  }
}


const CookiePopup = () => {
  let cookie;
  // Check cookie value OR prefered value but not yet set
  const checkCookie = () => getCookie() || false

  const [popupIsOpen, setPopupIsOpen] = useState(false)
  
  useEffect(() => {
    cookie = checkCookie();
    setPopupIsOpen(!cookie)
  }, []);

  const acceptCookie = () => {
    setPopupIsOpen(false)
    setCookie(true)
  }

  // console.group()
  //   console.log("Jakie mamy tutaj Cookies?:", typeof document !== `undefined` ? document.cookie : "- błąd - efekt uboczny hook'a - hydracja Gatsbiego! -" || "Nic nie znaleziono")
  //   let initialCookieValue = checkCookie()
  //   console.log("Inicjowany stan wartości Cookies na stronie:")
  //   initialCookieValue 
  //   ? console.info("%c             Zgoda udzielona", "color:green")
  //   : console.info("%c             Brak zgody!", "color:red")
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
