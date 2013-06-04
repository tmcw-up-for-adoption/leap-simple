// Setup Leap loop with frame callback function
var controllerOptions = { enableGestures: true },
    width = 960,
    height = 500,
    canvas = d3.select('div#container')
        .append('canvas')
        .attr('width', width)
        .attr('height', height).node(),
    ctx = canvas.getContext('2d'),
    before = {},
    after = {},
    color = d3.scale.category20();

ctx.lineWidth = 5;
ctx.translate(width/2, height/2);

function draw() {
    var a, b;

    for (var id in after) {
        b = before[id],
        a = after[id];
        if (!b) continue;

        ctx.strokeStyle = color(id);
        ctx.moveTo(b.tipPosition.x, -b.tipPosition.y);
        ctx.lineTo(a.tipPosition.x, -a.tipPosition.y);
        ctx.stroke();
        ctx.beginPath();
    }

    before = after;

    return true;
}

Leap.loop(controllerOptions, function(frame, done) {
    after = {};
    for (var i = 0; i < frame.pointables.length; i++) {
        after[frame.pointables[i].id] = frame.pointables[i];
    }
    draw();
    done();
});
