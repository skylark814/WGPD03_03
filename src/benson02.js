var Benson02Layer = cc.Layer.extend({
    drawing: null,
    isDrawing: null,
    ctor: function () {

        this._super();

        this.drawing = new cc.DrawNode();
        this.addChild(this.drawing);
        this.setUpMouse();

        return true;
    },
    setUpMouse: function () {
        cc.eventManager.addListener({
            event: cc.EventListener.MOUSE,
            lastX: -1,
            lastY: -1,
            onMouseDown: function (e) {
                let target = e.getCurrentTarget();
                target.isDrawing = true;
                this.lastX = e.getLocationX();
                this.lastY = e.getLocationY();
            },
            onMouseUp: function (e) {
                let target = e.getCurrentTarget();
                target.isDrawing = false;
            },
            onMouseMove: function (e) {
                let target = e.getCurrentTarget();
                if (!target.isDrawing) return;
                let x = e.getLocationX();
                let y = e.getLocationY();
                target.drawing.drawSegment(cc.p(this.lastX, this.lastY)
                    , cc.p(x, y), 2, cc.color(255, 0, 0));
                this.lastX = x;
                this.lastY = y;
            }
        }, this);
    }

});

var Benson02Scene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new Benson02Layer();
        this.addChild(layer);
    }
});

