var Benson03Layer = cc.Layer.extend({
    sprite: null,
    isDragging: false,
    spriteRect: null,
    ctor: function () {

        this._super();
        this.sprite = new cc.Sprite(res.HelloWorld_png);
        this.sprite.attr({
            x: cc.winSize.width / 2,
            y: cc.winSize.height / 2

        });
        this.spriteRect = new cc.Rect(
            this.sprite.x - (this.sprite.width / 2),
            this.sprite.y - (this.sprite.height / 2),
            this.sprite.width,
            this.sprite.height
        );
        this.addChild(this.sprite);


        this.setUpMouse();

        return true;
    },
    setUpMouse: function () {
        cc.eventManager.addListener({
            event: cc.EventListener.MOUSE,
            lastX: -1,
            lastY: -1,
            dx:0,
            dy:0,
            onMouseDown: function (e) {
                let target = e.getCurrentTarget();

                let x = e.getLocationX();
                let y = e.getLocationY();

                let p = new cc.Point(x, y);
                if (cc.rectContainsPoint(target.spriteRect, p)) {
                    target.isDragging = true;
                     this.dx = x - target.sprite.x;
                     this.dy = y - target.sprite.y;


                }

            },
            onMouseUp: function (e) {
                let target = e.getCurrentTarget();
                target.isDragging = false;
                target.spriteRect = new cc.Rect(
                    target.sprite.x - (target.sprite.width / 2),
                    target.sprite.y - (target.sprite.height / 2),
                    target.sprite.width,
                    target.sprite.height
                );

            },
            onMouseMove: function (e) {
                let target = e.getCurrentTarget();
                if (target.isDragging) {
                    let x = e.getLocationX();
                    let y = e.getLocationY();
                    target.sprite.x = x-this.dx;
                    target.sprite.y = y-this.dy;
                }
            }
        }, this);
    }

});

var Benson03Scene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new Benson03Layer();
        this.addChild(layer);
    }
});

