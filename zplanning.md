A betting game played in the browser
We have a currency displayed at the top called points, starting with 300
Red is assigned a random percentage between 25% and 75%.
These percentages are shown to the user.
Blue is assigned the remaining percentage.
We can push a button to bet on red or blue.
Red and blue have an equal chance of being chosen.
If we bet on the correct color, we win 1/the percentage we bet on, then * how much we bet
If we bet on the wrong color, we lose how much we bet
This is one cycle of the game, after points are awarded or subtracted, calculate new percentages, etc.

Style sheet:
Have the percentage be large and match the color
under the percentage, have a bar that represents percentage: if it's 37%, the bar is 37% length, etc
red UI is on the left and blue UI is on the right
show the ratio in small font under that: 1:3.1 for example if the percentage is 37%
under that is a button colored red or blue