# Prime Weekend Challenge 3

Hey Primates!

For this weekend, you are going to be building a [jQuery Carousel](http://sorgalla.com/jcarousel/examples/basic/). 
Neat huh? Except, unlike the linked Example, you are going to be building it not with information, but data to be displayed on the page. 

First, spin up a new project (the reps are good, I promise!), host it on Heroku and back it up on GitHub. The client side experience you will send back, will be a webpage that loads up a carousel. As the page loads, you will also need to need to make a AJAX request to have JSON information sent back to the clientside. The JSON information will come from a serverside JSON file that will be saved under a PUBLIC/ASSETS/DATA directory. 

Inside the JSON file, you will have one object ({ }), inside that object you will have sub objects. One for each person in your cohort. So 22 sub objects. Inside those sub objects, assign three keys. One for their name, one for  [each description](https://docs.google.com/spreadsheets/d/1cqmZvOzr3My-B16wgTuTaBvDODSICqaReB43qKo9s0g/edit#gid=0) of that person, and finally one key for a [shout out for that person ](https://docs.google.com/a/primeacademy.io/spreadsheets/d/15S06CN2bzVhknkPr3QJc9A3n4AzuUyArGeSoVnawE0Q/edit?usp=sharing) (as taken from the daily feedback form. Fill that out more if you have let it slip ;) )

Once that object comes back, populate that information into a 'Cell' of the carousel. Meaning only one person should be on the screen at any given time. There should be a next and prev button that moves through the list of people. Each time you navigate to the next person, all of the information should be displayed for that person. 

All other things that could be open for description, are up to you to decide how you would like to implement. 

##Hard Mode
Implement Bootstrap in a meaningful way. Meaning don't just pull it into the project, actually use it and style with it.

##Pro Mode
Your carousel should have index indicators showing where the user is at in the carousel. Note: If you hit up [Code Academy's Build an Interactive Website](https://www.codecademy.com/en/skills/make-an-interactive-website) shows you how to build a carousel with these specifications mentioned in this challenge. I would HIGHLY encourage that you check out how to build a carousel there!