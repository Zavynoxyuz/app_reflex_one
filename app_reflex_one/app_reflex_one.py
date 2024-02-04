# chatapp.py

import reflex as rx
from app_reflex_one import style
from app_reflex_one.state import State

def qa(question: str, answer: str) -> rx.Component:
    return rx.box(
        rx.box(
            rx.text(question, style=style.question_style),
            text_align="right",
        ),
        rx.box(
            rx.text(answer, style=style.answer_style),
            text_align="left",
        ),
        margin_y="1em",
    )

#Anteriormente definido como:
""" def chat() -> rx.Component:
    qa_pairs = [
        (
            "What is Reflex?",
            "A way to build web apps in pure Python!",
        ),
        (
            "What can I make with it?",
            "Anything from a simple website to a complex web app!",
        ),
    ]
    return rx.box(
        *[
            qa(question, answer)
            for question, answer in qa_pairs
        ]
    ) """

#Para el chatbox
def chat() -> rx.Component:
    return rx.box(
        rx.foreach(
            State.chat_history,
            lambda messages: qa(messages[0], messages[1]),
        )
    )

def index() -> rx.Component:
    return rx.container(chat())

#Antes
""" def action_bar() -> rx.Component:
    return rx.hstack(
        rx.input(placeholder="Ask a question",style=style.input_style,),
        
        rx.button("Ask", style=style.button_style),
    )
"""

#Para el chatbox
def action_bar() -> rx.Component:
    return rx.hstack(
        rx.input(
            value=State.question,
            placeholder="Ask a question",
            on_change=State.set_question,
            style=style.input_style),
        rx.button("Ask", on_click=State.answer, style=style.button_style),
    )

def index() -> rx.Component:
    return rx.container(
        chat(),
        action_bar(),
    )



# Add state and page to the app.
app = rx.App()
app.add_page(index)