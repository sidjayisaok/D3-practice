//json to define rectangle and circles
let jsonRectangle =[
  {
    "x_axis": 50,
    "y_axis": 275,
    "width": 100,
    "height": 100,
    "color": "blue"
  },

  {
    "x_axis": 250,
    "y_axis": 275,
    "width": 125,
    "height": 125,
    "color": "yellow"
  },

  {
    "x_axis": 500,
    "y_axis": 275,
    "width": 150,
    "height": 150,
    "color": "orange"
  }
];

let jsonCircles =[
  {
    "x_axis": 30,
    "y_axis": 150,
    "radius": 20,
    "color": "green"
  },

  {
    "x_axis": 300,
    "y_axis": 150,
    "radius": 40,
    "color": "purple"
  },

  {
    "x_axis": 570,
    "y_axis": 150,
    "radius": 80,
    "color": "red"
  }
];

let barData = [20, 25, 30, 50, 80, 130, 210, 340];

//definitions for the svgs
let svgContain = d3.select("body").append("svg")
              .attr("width", 1300)
              .attr("height", 1300);
//draws a circle
let circles = svgContain.selectAll("circle")
            .classed("myCircle", true)
            .data(jsonCircles)
            .enter()
            .append("circle");
//draws a rectangle
let rectangle = svgContain.selectAll("rect")
              .classed("myRectangle", true)
              .data(jsonRectangle)
              .enter()
              .append("rect");

//works with chart below
let x = d3.scale.linear()
        .domain([0, d3.max(barData)])
        .range([0, 420]);

//attempting to draw bar chart
let barChart =  d3.select("div")
                .selectAll(".chart")
                .data(barData)
                .enter()
                .append("div")
                .style("width", (d)=>{
                  return x(d) + "px";
                })
                .style("background-color", (d)=>{
                  if (d < 30) {
                    return "red";
                  }
                  else if (d > 20 && d < 81){
                    return "orange";
                  }
                  else{
                    return "teal";
                  }
                })
                .style("color", "white")
                .attr("class", "myChart")
                .text((d)=>{
                  return d;
                });

//circle properties
let circleAttributes = circles
                    .attr("cx", (d)=>{
                      return d.x_axis;
                    })
                    .attr("cy", (d)=>{
                      return d.y_axis;
                    })
                    .attr("r", (d)=>{
                      return d.radius;
                    })
                    .style("fill", (d)=> {
                      return d.color;
                   });

//rectangle properties
let rectAttributes = rectangle
                    .attr("x", (d)=>{
                      return d.x_axis;
                    })
                    .attr("y", (d)=>{
                      return d.y_axis;
                    })
                    .attr("width", (d)=>{
                      return d.width;
                    })
                    .attr("height", (d)=>{
                      return d.height;
                    })
                    .style("fill", (d)=>{
                      return d.color;
                    });

//animate.css jquery controls
$(function(){
//variables added to reduce repetition
let bounceClass ='animated jello';
let rubberClass = 'animated rubberBand';
let tadaClass = 'animated tada';
let flipClass ='animated shake';
let fadeinClass = 'animated fadeInLeft';
let fadeoutClass = 'animated fadeOutLeft';
let endClass ='webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
//animates rectangles
$('rect').on({
 'click': ()=>{
     $('rect').addClass(bounceClass).one(endClass, ()=>{
         $(this).removeClass(bounceClass);
     })
 },
//this makes them animate when hovering over them via the mouse
 'mouseover': ()=>{
     $('rect').addClass(flipClass).one(endClass, ()=>{
         $(this).removeClass(flipClass);
     })
 }

});
//animates circles
$('circle').on({
 'click': ()=>{
     $('circle').addClass(rubberClass).one(endClass, ()=>{
         $(this).removeClass(rubberClass);
     })
 },
//this makes them animate when hovering over them via the mouse
 'mouseover': ()=>{
     $('circle').addClass(tadaClass).one(endClass, ()=>{
         $(this).removeClass(tadaClass);
     })
 }

});

//animates bar chart
$('.myChart').on({
 'click': ()=>{
     $('.myChart').addClass(fadeinClass).one(endClass, ()=>{
         $(this).removeClass(fadeinClass);
     })
 },
//this makes them animate when hovering over them via the mouse
 'mouseover': ()=>{
     $('.myChart').addClass(fadeoutClass).one(endClass, ()=>{
         $(this).removeClass(fadeoutClass);
     })
 }

});

});
