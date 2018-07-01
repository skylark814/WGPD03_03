var Benson05Layer = cc.Layer.extend({
    sprite1: null,
    targetRect1: null,
    isShoot: false,
    dx:6,
    dy:4,
    ctor: function () {

        this._super();


        this.sprite1 = new cc.Sprite(res.HelloWorld_png);
        this.sprite1.attr({
            x: 0,
            y: 0
        });
        this.addChild(this.sprite1);


        this.setUpMouse1(this);

        this.scheduleUpdate();
        return true;


    },
    setUpMouse1: function (layer) {
        cc.eventManager.addListener({
            event: cc.EventListener.MOUSE,
            onMouseDown: function (e) {
                let target = e.getCurrentTarget();
                layer.isShoot = true;
            },
            onMouseUp: function (e) {
                let target = e.getCurrentTarget();
                layer.isShoot = false;

            }
        }, layer);
    },
    update: function () {
        if (this.isShoot) {
            this.sprite1.x = this.sprite1.x + this.dx;
            this.sprite1.y = this.sprite1.y + this.dy;
        }
    }

});

var Benson05Scene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new Benson05Layer();
        this.addChild(layer);
    }
});

