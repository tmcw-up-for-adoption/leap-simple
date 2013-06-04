// Setup Leap loop with frame callback function
var controllerOptions = { enableGestures: true };

var width = 960,
    height = 500;

var svg = d3.select('div#container')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + [width/2, height/2] + ')');

var fingers = [],
    color = d3.scale.category20c();

function draw() {
    var balls = svg.selectAll('circle')
        .data(fingers, function(d) { return d.id; });
    balls.exit().remove();
    balls.enter().append('circle')
        .attr('r', 10)
        .attr('fill', function(d) {
            return color(d.id);
        });
    balls.attr('transform', function(d) {
        return 'translate(' + [d.tipPosition.x, -d.tipPosition.y] + ')';
    });
}

Leap.loop(controllerOptions, function(frame, done) {
    fingers = frame.pointables;
    draw();
    done();
});
