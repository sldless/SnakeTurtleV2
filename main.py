from turtle import *
from random import *
import time
turtle = Turtle()
screen = Screen()
enemy = Turtle()
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
enemy.shape('turtle')
enemy.speed(0)
enemy.goto(0, 60)
enemy.penup()
enemy.color('red')
enemy.clear()
score = 0
def up():
    if turtle.go != "down":
        turtle.sety(turtle.ycor() + 20)

def down():
    if turtle.go != "up":
        turtle.sety(turtle.ycor() - 20)

def left():
    if turtle.go != "left":
        turtle.setx(turtle.ycor() - 20)

def right():
    if turtle.go != "right":
        turtle.setx(turtle.ycor() + 20)
pen = Turtle()
pen.speed(0)
pen.color("white")
pen.penup()
pen.hideturtle()
pen.goto(0, 100)
turtle.clear()
pen.write("Score: 0", align="center", font=("Courier", 24, "normal"))
end = Turtle()
end.speed(0)
end.color('white')
end.penup()
end.hideturtle()
end.goto(0, 100)
end.clear()
color(randint(0, 255), randint(0, 255),randint(0, 255))
screen.bgcolor('black')
screen.listen()
screen.onkey(up, 'Up')
screen.onkey(down, 'Down')
screen.onkey(left, 'Left')
screen.onkey(right, 'Right')
screen.onkey(up, 'w')
screen.onkey(down, 's')
screen.onkey(left, 'a')
screen.onkey(right, 'd')
while True:
    screen.update()
    fx = randint(-130, round(turtle.distance(food)))
    fy = randint(-round(enemy.distance(turtle)), 20)
    ex = randint(-round(enemy.distance(turtle)), 190)
    ey = randint(-130, round(turtle.distance(food)))
    food.goto(fx,fy)
    enemy.goto(ex,ey)
    print(turtle.distance(food), enemy.distance(turtle))
    if turtle.distance(food) < 20:    
        score += 1      
        pen.clear()
        pen.write('Score: {}'.format(score), align="center", font=("Courier", 24, "normal"))
    if enemy.distance(turtle) < 20:   
        pen.clear()
        pen.write('Game ended', align="center", font=("Courier", 24, "normal"))
        time.sleep(0.80)
        pen.clear()
        pen.write('Score: 0', align="center", font=("Courier", 24, "normal"))
    
    time.sleep(1.4)
done()
