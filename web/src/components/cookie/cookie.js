import React, { useState, useEffect, useReducer } from 'react'


import { Heading, Typo } from 'src/components/typography'
import Button from 'src/components/button'
import './cookie.scss'

// https://gist.github.com/daankauwenberg/bf0daf4d4a9a157a078ba4ec4559e3ab

const COOKIE_NAME = 'consent'

function getCookie() {
  const regex = new RegExp(`(?:(?:^|.*;\\s*)${COOKIE_NAME}\\s*\\=\\s*([^;]*).*$)|^.*$`)
  const cookie = document.cookie.replace(regex, "$1")
  return cookie.length ? JSON.parse(cookie) : undefined
}

function setCookie() {
  const regex = new RegExp(`(?:(?:^|.*;\\s*)${COOKIE_NAME}\\s*\\=\\s*([^;]*).*$)|^.*$`)
  const cookie = document.cookie.replace(regex, "$1")
  document.cookie = `${COOKIE_NAME}=true`
  console.log(cookie)
}

function checkCookie() {
  const regex = new RegExp(`(?:(?:^|.*;\\s*)${COOKIE_NAME}\\s*\\=\\s*([^;]*).*$)|^.*$`)
  const cookie = document.cookie.replace(regex, "$1")
  return cookie.length ? JSON.parse(cookie) : false
}

// Initial value is cookie value OR prefered value but not yet set
let initialCookieValue = getCookie() || false

const CookiePopup = () => {
  const [popupIsOpen, setPopupIsOpen] = useState(!initialCookieValue)
  let checkCookieValue = checkCookie()

  const AcceptCookie = () => {
    setPopupIsOpen(popupIsOpen => !popupIsOpen)
    setCookie()
  }

  console.group()
    console.table(
      document.cookie, 
      initialCookieValue, 
      popupIsOpen, 
    )
  console.groupEnd()

  console.group()
    console.log("Kukisy zarejestrowane", document.cookie)
    console.info("Iniszjal kuki waljuł", initialCookieValue)
    console.log("Popap otwarty?", popupIsOpen)
    console.log("Stan kukisa?", checkCookieValue)
  console.groupEnd()

  return(
    <>
      {!checkCookieValue && (
            <div className='CookieContainer'>
              <Heading size={4}>Ta strona nie zawiera cukru</Heading>
              <Typo>Ale na naszej Stronie internetowej korzystamy z usługi <strong>Google Analytics</strong>, usługi analizy stron internetowych oferowanej przez <strong>Google Inc.</strong>, potrzebujemy jej do tylko do danych ilości odwiedzających nas użytkowników.</Typo>
              <Button onClick={AcceptCookie}>OK</Button>
            </div>
      )}
    </>
  )
}

export default CookiePopup
