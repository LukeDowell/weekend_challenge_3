/**
 * Created by lukedowell on 7/31/15.
 */
//Entry point
$(document).ready(function() {
    //'un'-define our carousel
    var carousel = undefined;

    //Make our ajax call right away so we don't have hold ups
    $.ajax({
        type: "GET",
        url: "/prime",
        success: function(data) {
            carousel = new Carousel($(".carousel"));
            carousel.populate(data, carousel.people);
        },
        error: function() {
            alert("Stuff is on fire yo");
        }
    });

    $("#leftButton").on('click', function() {
        if(!carousel.isAnimating) {
            carousel.isAnimating = true;
            carousel.slideLeft();
        }
    });

    $("#rightButton").on('click', function() {
        if(!carousel.isAnimating) {
            carousel.isAnimating = true;
            carousel.slideRight();
        }
    });
});

/**
 * Represents our carousel on the dom
 * @constructor
 */
function Carousel(element) {
    this.numBgImages = 6;
    this.currentBgImage = 1;
    this.element = element;
    this.people = [];
    this.currentIndex = 0;
    this.isAnimating = false;

    this.populate = function(jsonData, recepticle) {
        $.each(jsonData, function(index, obj) {
           var person = new Person(obj.name, obj.desc, obj.thanks);
            recepticle.push(person);
        });
    };
    this.slideLeft = function() {
        //Update index
        if(this.currentIndex === 0) {
            this.currentIndex = this.people.length-1;
        } else {
            this.currentIndex -= 1;
        }
        //Update slide
        this.transition(-1);
    };
    this.slideRight = function() {
        //Update index
        if(this.currentIndex === this.people.length-1) {
            this.currentIndex = 0;
        } else {
            this.currentIndex += 1;
        }
        //Update slide
        this.transition(1);
    };
    this.transition = function(dir) {
        //Gross big function

        //Update BG image
        this.currentBgImage += dir;
        if(this.currentBgImage > this.numBgImages) {
            this.currentBgImage = 1;
        } else if(this.currentBgImage < 1) {
            this.currentBgImage = this.numBgImages;
        }
        var currentSlide = this.element.find(".current-slide");
        var slideNum = this.currentBgImage;

        //Prepare next slide's information
        var person = this.people[this.currentIndex];

        //Fade the current slide out and replace all the information while its invisible
        currentSlide.fadeOut(500, function() {
            //While faded out, we are going to populate our slide with new information
            $(this).find('.student-name').text(person.name);
            $(this).find('.student-desc').text(person.desc);
            $(this).find('.student-thanks').text(person.thanks);
            currentSlide.css("background-image", "url(assets/images/bg"+slideNum+".jpg");
        });

        //Update our slider as the new slide comes in
        this.updateSlider();
        currentSlide.fadeIn(500);
    };
    this.updateSlider = function(){
        //Udates our position indicator
        var sliderWidth = $(".position-wrapper").width();
        var sliderIncrement = Math.round(sliderWidth / 22);
        var currentIndex = this.currentIndex;

        $(".position-indicator").animate({
            left: currentIndex*sliderIncrement
        }, 500);

        //End the animation sequence
        this.isAnimating = false;
    }
}

/**
 * Representation of a person
 * @param name
 * @param desc
 * @param thanks
 * @constructor
 */
function Person(name, desc, thanks) {
    this.name = name;
    this.desc = desc;
    this.thanks = thanks;
}