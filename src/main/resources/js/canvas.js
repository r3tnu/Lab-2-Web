export class Canvas {
    canvas;
    context;
    xOffset;
    yOffset;
    rOffset;

    constructor(areaId) {
        this.canvas = document.getElementById(areaId);
        this.context = this.canvas.getContext("2d");
        this.setCanvasDPI();
        this.xOffset = this.canvas.width/2;
        this.yOffset = this.canvas.height/2;
        this.rOffset = 100;
        this.context.font = "12px Arial";
    }

    setCanvasDPI() {
        let height = +getComputedStyle(this.canvas).getPropertyValue('height').slice(0, -2);
        let width = +getComputedStyle(this.canvas).getPropertyValue('width').slice(0, -2);

        this.canvas.setAttribute('height', `${height}`);
        this.canvas.setAttribute('width', `${width}`);
    }

    clear() {
        this.context.clearRect(0, 0, this.canvas.height, this.canvas.width);
    }

    draw() {
        this.drawAxis();
        this.drawTicks();
        this.drawAreas();
    }

    redraw() {
        this.clear();
        this.draw();
    }

    drawAxis() {
        this.context.fillStyle = "rgba(0, 0, 0, 1)";
        this.context.beginPath();

        this.context.moveTo(this.canvas.width/2, this.canvas.height-25);
        this.context.lineTo(this.canvas.width/2, 25);

        this.context.fillText("y", this.canvas.width/2+10, 25);

        this.context.lineTo(this.canvas.width/2-2, 25+5)
        this.context.moveTo(this.canvas.width/2, 25);
        this.context.lineTo(this.canvas.width/2+2, 25+5)

        this.context.moveTo(25, this.canvas.height/2);
        this.context.lineTo(this.canvas.width-25, this.canvas.height/2);

        this.context.fillText("x", this.canvas.width-25+10, this.canvas.height/2);

        this.context.lineTo(this.canvas.width-25-5, this.canvas.height/2+2);
        this.context.moveTo(this.canvas.width-25, this.canvas.height/2);
        this.context.lineTo(this.canvas.width-25-5, this.canvas.height/2-2);

        this.context.stroke();

    }

    drawTicks() {
        this.context.fillStyle = "rgba(0, 0, 0, 1)";
        let x = this.xOffset + this.rOffset / 2;
        let y = this.yOffset;

        this.context.beginPath();
        this.context.moveTo(x, y-5);
        this.context.lineTo(x, y+5);
        this.context.fillText("R/2", x-8, y+20);

        x = this.xOffset + this.rOffset;

        this.context.moveTo(x, y-5);
        this.context.lineTo(x, y+5);
        this.context.fillText("R", x-5, y+20);

        x = this.xOffset - this.rOffset / 2;
        y = this.yOffset;

        this.context.moveTo(x, y-5);
        this.context.lineTo(x, y+5);
        this.context.fillText("-R/2", x-8, y+20);

        x = this.xOffset - this.rOffset;

        this.context.moveTo(x, y-5);
        this.context.lineTo(x, y+5);
        this.context.fillText("-R", x-5, y+20);

        x = this.xOffset;
        y = this.yOffset + this.rOffset / 2;

        this.context.moveTo(x-5, y);
        this.context.lineTo(x+5, y);
        this.context.fillText("-R/2", x + 10, y + 3);

        y = this.yOffset + this.rOffset;

        this.context.moveTo(x+5, y);
        this.context.lineTo(x-5, y);
        this.context.fillText("-R", x+10, y + 3);

        this.context.stroke();

        x = this.xOffset;
        y = this.yOffset - this.rOffset / 2;

        this.context.moveTo(x-5, y);
        this.context.lineTo(x+5, y);
        this.context.fillText("R/2", x + 10, y + 3);

        y = this.yOffset - this.rOffset;

        this.context.moveTo(x+5, y);
        this.context.lineTo(x-5, y);
        this.context.fillText("R", x+10, y + 3);

        this.context.fillText("0", this.xOffset+2, this.yOffset+15);

        this.context.stroke();

    }

    drawAreas() {
        this.context.fillStyle = "rgba(0, 100, 225, 0.2)";

        this.context.beginPath();

        this.context.moveTo(this.xOffset-this.rOffset, this.yOffset);
        this.context.lineTo(this.xOffset, this.yOffset);
        this.context.lineTo(this.xOffset, this.yOffset-this.rOffset);
        this.context.arc(this.xOffset, this.yOffset, this.rOffset, Math.PI, 1.5*Math.PI,);

        this.context.fill();

        this.context.fillRect(this.xOffset-this.rOffset/2, this.yOffset, this.rOffset/2, this.rOffset);

        this.context.beginPath();

        this.context.moveTo(this.xOffset, this.yOffset);
        this.context.lineTo(this.xOffset+this.rOffset, this.yOffset);
        this.context.lineTo(this.xOffset, this.yOffset+this.rOffset/2);

        this.context.fill();
    }

    drawPoint(x, y, r) {

        this.context.fillStyle = "rgba(255, 100, 0, 1)";

        x = this.convOX(x, r);
        y = this.convOY(y, r);

        this.context.beginPath();

        this.context.arc(x, y, 3, 0, 2*Math.PI);

        this.context.fill();

    }
    convOX(x, r) {
        return (x * this.rOffset / r) + this.xOffset
    }

    convOY(y, r) {
        return -(y * this.rOffset / r) + this.yOffset;
    }

    conRX(x, r) {
        return (x - this.xOffset) * r / this.rOffset;
    }

    conRY(y, r) {
        return (- y + this.yOffset) * r / this.rOffset;
    }

    onClick(successHandler, errorHandler) {
        let { canvas } = this
        $(canvas).click((e) => {
            let rValue = $('input[name="r"]:checked').val();
            if (!rValue || isNaN(parseFloat(rValue))) {
                errorHandler("Cannot determine point coords without R being set")
                return
            }

            let x = e.clientX - canvas.getBoundingClientRect().left;
            let y = e.clientY - canvas.getBoundingClientRect().top;
            let r = parseFloat(rValue)

            let graphX = Math.round(this.conRX(x, r));
            let graphY = this.conRY(y, r);

            graphX = Math.round(graphX)

            successHandler({x: graphX, y: graphY, r: r})
        })
    }


}