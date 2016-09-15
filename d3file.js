//json to define rectangle and circles
var jsonRectangle =[
  {
    "x_axis": 50,
    "y_axis": 175,
    "width": 100,
    "height": 100,
    "color": "blue"
  },

  {
    "x_axis": 250,
    "y_axis": 175,
    "width": 125,
    "height": 125,
    "color": "yellow"
  },

  {
    "x_axis": 500,
    "y_axis": 175,
    "width": 150,
    "height": 150,
    "color": "orange"
  }
];

var jsonCircles =[
  {
    "x_axis": 30,
    "y_axis": 75,
    "radius": 20,
    "color": "green"
  },

  {
    "x_axis": 300,
    "y_axis": 75,
    "radius": 20,
    "color": "purple"
  },

  {
    "x_axis": 570,
    "y_axis": 75,
    "radius": 20,
    "color": "red"
  }
];

var barData = [1, 2, 4, 8, 16, 32, 64, 128];

//definitions for the svgs
var svgContain = d3.select("body").append("svg")
              .attr("width", 1300)
              .attr("height", 1300);
//draws a circle
var circles = svgContain.selectAll("circle")
            .classed("myCircle", true)
            .data(jsonCircles)
            .enter()
            .append("circle");
//draws a rectangle
var rectangle = svgContain.selectAll("rect")
              .classed("myRectangle", true)
              .data(jsonRectangle)
              .enter()
              .append("rect");

//works with chart below
var x = d3.scale.linear()
        .domain([0, d3.max(barData)])
        .range([0, 420]);

//attempting to draw bar chart
var barChart =  d3.select("div")
                .selectAll(".chart")
                .data(barData)
                .enter()
                .append("div")
                .style("width", function(d){
                  return x(d) + "px";
                })
                .style("background-color", "teal")
                .attr("class", "myChart")
                .text(function(d){
                  return d;
                });

//circle properties
var circleAttributes = circles
                    .attr("cx", function(d){
                      return d.x_axis;
                    })
                    .attr("cy", function(d){
                      return d.y_axis;
                    })
                    .attr("r", function(d){
                      return d.radius;
                    })
                    .style("fill", function(d) {
                      return d.color;
                   });

//rectangle properties
var rectAttributes = rectangle
                    .attr("x", function(d){
                      return d.x_axis;
                    })
                    .attr("y", function(d){
                      return d.y_axis;
                    })
                    .attr("width", function(d){
                      return d.width;
                    })
                    .attr("height", function(d){
                      return d.height;
                    })
                    .style("fill", function(d){
                      return d.color;
                    });

//animate.css jquery controls
$(function(){
//variables added to reduce repetition
var bounceClass ='animated jello';
var rubberClass = 'animated rubberBand';
var tadaClass = 'animated tada';
var flipClass ='animated shake';
var fadeinClass = 'animated fadeInLeft';
var fadeoutClass = 'animated fadeOutLeft';
var endClass ='webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
//animates rectangles
$('rect').on({
 'click': function(){
     $('rect').addClass(bounceClass).one(endClass, function(){
         $(this).removeClass(bounceClass);
     })
 },
//this makes them animate when hovering over them via the mouse
 'mouseover': function(){
     $('rect').addClass(flipClass).one(endClass, function(){
         $(this).removeClass(flipClass);
     })
 }

});
//animates circles
$('circle').on({
 'click': function(){
     $('circle').addClass(rubberClass).one(endClass, function(){
         $(this).removeClass(rubberClass);
     })
 },
//this makes them animate when hovering over them via the mouse
 'mouseover': function(){
     $('circle').addClass(tadaClass).one(endClass, function(){
         $(this).removeClass(tadaClass);
     })
 }

});

//animates bar chart
$('.myChart').on({
 'click': function(){
     $('.myChart').addClass(fadeinClass).one(endClass, function(){
         $(this).removeClass(fadeinClass);
     })
 },
//this makes them animate when hovering over them via the mouse
 'mouseover': function(){
     $('.myChart').addClass(fadeoutClass).one(endClass, function(){
         $(this).removeClass(fadeoutClass);
     })
 }

});

});
