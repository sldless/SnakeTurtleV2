from turtle import *
from random import *
import time
turtle = Turtle()
screen = Screen()
turtle.shape("triangle")
hideturtle()
turtle.color("white")
turtle.penup()
turtle.goto(-20,30)
turtle.go = None
food = Turtle()
food.speed(0)
food.shape("turtle")
food.color("green")
food.penup()
food.goto(20,100)
score = 0
highscore = 0
def up():
    if turtle.go != "down":
        turtle.sety(turtle.ycor() + 20)

def down():
    if turtle.go != "up":
        turtle.sety(turtle.ycor() - 20)

def left():
    if turtle.go != "right":
        turtle.setx(turtle.ycor() - 20)

def right():
    if turtle.go != "left":
        turtle.setx(turtle.ycor() + 20)
pen = Turtle()
pen.speed(0)
pen.color("white")
pen.penup()
pen.hideturtle()
pen.goto(0, 100)
turtle.clear()
pen_high = Turtle()
pen_high.speed(0)
pen_high.color("white")
pen_high.penup()
pen_high.hideturtle()
pen_high.goto(0, 60)
pen_high.write("HighScore: 0", align="center", font=("Courier", 24, "normal"))
turtle.clear()
pen.write("Score: 0", align="center", font=("Courier", 24, "normal"))
color(randint(0, 255), randint(0, 255),randint(0, 255))
screen.listen()
screen.onkey(up, 'Up')
screen.onkey(down, 'Down')
screen.onkey(left, 'Left')
screen.onkey(right, 'Right')
screen.bgcolor('black')
while True:
    screen.update()
    x = randint(-130, 130)
    y = randint(-30, 20)
    food.goto(x,y)
    if score > highscore:
        highscore = score+1
    if turtle.distance(food) <= 20:    
        score += 1      
        pen.clear()
        pen_high.clear()
        pen.write('Score: {}'.format(score), align="center", font=("Courier", 24, "normal"))
        pen.write("HighScore: {}".format(highscore), align="center", font=("Courier", 24, "normal"))
    time.sleep(1.4)
done()
