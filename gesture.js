// Setup Leap loop with frame callback function
var controllerOptions = { enableGestures: true };

var width = 960,
    height = 500;

var svg = d3.select('div#container')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g');

// this approach abuses javascript's object reference - technically
// we would reassign .datum() each frame
var pos = [width/2, height/2, 10],
    ball = svg.append('circle')
        .datum(pos),
    vector = [0, 0];

function draw() {
    // move the ball
    pos[0] += vector[0];
    pos[1] += vector[1];

    if (pos[0] < 0 || pos[0] > width) vector[0] *= -1;
    if (pos[1] < 0 || pos[1] > height) vector[1] *= -1;

    ball.attr('transform', function(d) {
        return 'translate(' + d.slice(0, 2) + ')';
    }).attr('r', function(d) {
        return d[2];
    });

    // slow down the movement of the ball
    vector[0] *= 0.9;
    vector[1] *= 0.9;
}

Leap.loop(controllerOptions, function(frame, done) {
    if (frame.gestures.length > 0) {
        for (var i = 0; i < frame.gestures.length; i++) {
            var gesture = frame.gestures[i];
            if (gesture.type == 'circle') {
                pos[2] = gesture.radius;
            } else if (gesture.type === 'swipe') {
                vector[0] += gesture.direction.x;
                vector[1] -= gesture.direction.y;
            }
        }
    }
    draw();
    done();
});
