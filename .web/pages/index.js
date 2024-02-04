/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Box, Button, Container, HStack, Input, Text } from "@chakra-ui/react"
import { EventLoopContext, StateContexts } from "/utils/context"
import "focus-visible/dist/focus-visible"
import { DebounceInput } from "react-debounce-input"
import { Event, set_val } from "/utils/state"
import NextHead from "next/head"



export function Button_30b920b53608c0a320eeb0f8c09e58d5 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_f4ecaeca7ac4803e870637fe18cb1eea = useCallback((_e) => addEvents([Event("state.state.answer", {})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_f4ecaeca7ac4803e870637fe18cb1eea} sx={{"bg": "#CEFFEE", "boxShadow": "rgba(0, 0, 0, 0.15) 0px 2px 8px"}}>
  {`Ask`}
</Button>
  )
}

export function Box_81a6c199101243465e957da78cb5b9d5 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Box>
  {state__state.chat_history.map((messages, index_37da8f5a8b24c522ad6d6132a93c2367) => (
  <Box key={index_37da8f5a8b24c522ad6d6132a93c2367} sx={{"marginY": "1em"}}>
  <Box sx={{"textAlign": "right"}}>
  <Text sx={{"padding": "1em", "borderRadius": "5px", "marginY": "0.5em", "boxShadow": "rgba(0, 0, 0, 0.15) 0px 2px 8px", "maxWidth": "30em", "display": "inline-block", "bg": "#F5EFFE", "marginLeft": "20%"}}>
  {messages.at(0)}
</Text>
</Box>
  <Box sx={{"textAlign": "left"}}>
  <Text sx={{"padding": "1em", "borderRadius": "5px", "marginY": "0.5em", "boxShadow": "rgba(0, 0, 0, 0.15) 0px 2px 8px", "maxWidth": "30em", "display": "inline-block", "bg": "#DEEAFD", "marginRight": "20%"}}>
  {messages.at(1)}
</Text>
</Box>
</Box>
))}
</Box>
  )
}

export function Debounceinput_1764c75912cb8815d7251d2daf896920 () {
  const state__state = useContext(StateContexts.state__state)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_change_c1fe93b939c866e1de40fb642568d5e0 = useCallback((_e0) => addEvents([Event("state.state.set_question", {value:_e0.target.value})], (_e0), {}), [addEvents, Event])

  return (
    <DebounceInput debounceTimeout={50} element={Input} onChange={on_change_c1fe93b939c866e1de40fb642568d5e0} placeholder={`Ask a question`} sx={{"borderWidth": "1px", "padding": "1em", "boxShadow": "rgba(0, 0, 0, 0.15) 0px 2px 8px"}} type={`text`} value={state__state.question}/>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Container>
  <Box_81a6c199101243465e957da78cb5b9d5/>
  <HStack>
  <Debounceinput_1764c75912cb8815d7251d2daf896920/>
  <Button_30b920b53608c0a320eeb0f8c09e58d5/>
</HStack>
</Container>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
