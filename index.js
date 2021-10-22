from turtle import *
from random import *
import time
screen = Screen()
turtle = Turtle()
turtle.go = None
food = Turtle()
food.speed(0)
food.shape("turtle")
food.color("green")
food.penup()
food.goto(0,100)
def go_up():
    if turtle.go != "down":
        turtle.sety(turtle.ycor() + 20)

def go_down():
    if turtle.go != "up":
        turtle.sety(turtle.ycor() - 20)

def go_left():
    if turtle.go != "right":
        turtle.setx(turtle.ycor() - 20)

def go_right():
    if turtle.go != "left":
        turtle.setx(turtle.ycor() + 20)

color(randint(0, 255), randint(0, 255),randint(0, 255))
screen.listen()
screen.onkey(go_up, 'Up')
screen.onkey(go_down, 'Down')
screen.onkey(go_left, 'Left')
screen.onkey(go_right, 'Right')
while True:
    x = randint(-100, 100)
    y = randint(-30, 20)
    food.goto(x,y)
    time.sleep(1)
done()
