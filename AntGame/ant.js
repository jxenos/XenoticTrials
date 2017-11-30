picnicPanic = {
    ant:{
        width: 10,
        height: 10
    },
    gameSpecs:{
        canvas:{
            width:1000,
            height:800
        },
        interval: 1000/30
    },
    setup: function(width, height, interval){
        var canvas = document.createElement('canvas');
        canvas.height = height;
        canvas.width = width;
        document.body.appendChild(canvas);

        var context = canvas.getContext('2d');


        this.spawnPlayers(canvas);
        setInterval(function(){
            picnicPanic.update(canvas, context), interval
        })
    },

    update: function(canvas, context){
        context.fillStyle = 'black';
        context.fillRect(0,0,canvas.width,canvas.height);

        context.fillStyle = 'green';
        for (var i = 0; i < p1.length; i++) {
            context.fillRect(p1[i].x, p1[i].y, picnicPanic.ant.width, picnicPanic.ant.height);
        }

        context.fillStyle = 'red';
        for (var i = 0; i < p2.length; i++) {
            context.fillRect(p2[i].x, p2[i].y, picnicPanic.ant.width, picnicPanic.ant.height);
        }
    },
    spawnPlayers: function (canvas) {
        p1=[{x:10,y:10}];
        p2=[{x:canvas.width-10-picnicPanic.ant.width,y:canvas.height-10-picnicPanic.ant.height}];
    }

}

picnicPanic.setup(picnicPanic.gameSpecs.canvas.width, picnicPanic.gameSpecs.canvas.height, picnicPanic.gameSpecs.interval);
