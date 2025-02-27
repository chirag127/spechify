from kivy.app import App
from kivy.uix.floatlayout import FloatLayout
from kivy.uix.button import Button
from kivy.uix.label import Label
from kivy.core.window import Window
from kivy.clock import Clock
import speech_recognition as sr
from threading import Thread
import time

class FloatingWindow(FloatLayout):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        
        # Create a recognizer instance
        self.recognizer = sr.Recognizer()
        self.is_listening = False
        self.listening_thread = None
        
        # Create UI elements
        self.text_label = Label(
            text="Tap to start listening",
            size_hint=(None, None),
            size=(300, 100),
            pos_hint={'center_x': 0.5, 'center_y': 0.6}
        )
        self.add_widget(self.text_label)
        
        self.listen_button = Button(
            text="Start",
            size_hint=(None, None),
            size=(100, 50),
            pos_hint={'center_x': 0.5, 'center_y': 0.2}
        )
        self.listen_button.bind(on_press=self.toggle_listening)
        self.add_widget(self.listen_button)
        
        # Make window draggable
        Window.borderless = True
        self.bind(on_touch_down=self.on_touch_down)
        self.bind(on_touch_move=self.on_touch_move)
        
    def on_touch_down(self, instance, touch):
        if self.collide_point(*touch.pos):
            touch.grab(self)
            return True
        return super().on_touch_down(instance, touch)
    
    def on_touch_move(self, instance, touch):
        if touch.grab_current is self:
            Window.left += touch.dx
            Window.top += touch.dy
            
    def toggle_listening(self, instance):
        if not self.is_listening:
            self.start_listening()
            self.listen_button.text = "Stop"
        else:
            self.stop_listening()
            self.listen_button.text = "Start"
            
    def start_listening(self):
        self.is_listening = True
        self.listening_thread = Thread(target=self.listen_loop)
        self.listening_thread.daemon = True
        self.listening_thread.start()
        
    def stop_listening(self):
        self.is_listening = False
        if self.listening_thread:
            self.listening_thread.join()
            
    def listen_loop(self):
        with sr.Microphone() as source:
            self.recognizer.adjust_for_ambient_noise(source)
            
            while self.is_listening:
                try:
                    audio = self.recognizer.listen(source, timeout=1, phrase_time_limit=5)
                    text = self.recognizer.recognize_google(audio)
                    Clock.schedule_once(lambda dt: self.update_text(text))
                except sr.WaitTimeoutError:
                    continue
                except sr.UnknownValueError:
                    continue
                except sr.RequestError:
                    Clock.schedule_once(lambda dt: self.update_text("Could not connect to speech recognition service"))
                    
    def update_text(self, text):
        self.text_label.text = text

class SpechifyApp(App):
    def build(self):
        return FloatingWindow()

if __name__ == '__main__':
    SpechifyApp().run()
