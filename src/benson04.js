var Benson04Layer = cc.Layer.extend({
    sprite1: null,
    sprite2: null,
    targetRect1: null,
    targetRect2: null,
    isTouch1: null,
    ctor: function () {

        this._super();


        this.sprite2 = new cc.Sprite(res.HelloWorld_png);
        this.sprite2.attr({
            x: cc.winSize.width * 1 / 2 + 40,
            y: cc.winSize.height / 2 - 20

        });
        this.addChild(this.sprite2);

        this.sprite1 = new cc.Sprite(res.HelloWorld_png);
        this.sprite1.attr({
            x: cc.winSize.width * 1 / 2 - 40,
            y: cc.winSize.height / 2 + 20

        });
        this.addChild(this.sprite1);


        this.setUpMouse1(this);
        this.setUpMouse2(this);

        return true;


    },

    setUpMouse1: function (layer) {
        cc.eventManager.addListener({
            event: cc.EventListener.MOUSE,
            onMouseDown: function (e) {
                let target = e.getCurrentTarget();

                this.targetRect1 = cc.rect(
                    target.x - target.width / 2,
                    target.y - target.height / 2,
                    target.width,
                    target.height
                );
                let point = new cc.Point(e.getLocationX(), e.getLocationY());
                if (cc.rectContainsPoint(this.targetRect1, point)) {
                    cc.log("touch1");
                    layer.isTouch1 = true;
                }
            },
            onMouseUp: function () {
                layer.isTouch1 = false;
            }
        }, layer.sprite1);
    },

    setUpMouse2: function (layer) {
        cc.eventManager.addListener({
            event: cc.EventListener.MOUSE,
            onMouseDown: function (e) {
                let target = e.getCurrentTarget();


                this.targetRect2 = cc.rect(
                    target.x - target.width / 2,
                    target.y - target.height / 2,
                    target.width,
                    target.height
                );
                let point = new cc.Point(e.getLocationX(), e.getLocationY());
                if (cc.rectContainsPoint(this.targetRect2, point) && !layer.isTouch1) {
                    cc.log("touch2");
                }
            }
        }, layer.sprite2);
    }
});

var Benson04Scene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new Benson04Layer();
        this.addChild(layer);
    }
});

