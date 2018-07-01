var Benson01Layer = cc.Layer.extend({
    isDrag:false,
    ctor: function () {

        this._super();

        this.setUpMouse();

        return true;
    },
    setUpMouse: function () {
        cc.eventManager.addListener({
            event: cc.EventListener.MOUSE,
            onMouseDown: function (e) {
                let target = e.getCurrentTarget();
                target.isDrag = true;
            },
            onMouseUp: function (e) {
                let target = e.getCurrentTarget();
                target.isDrag = false;
            },
            onMouseMove: function (e) {
                let target = e.getCurrentTarget();
                if(target.isDrag){
                    let x = e.getLocationX();
                    let y = e.getLocationY();
                    cc.log(x+":"+y);
                }
            },
            onMouseScroll: function (e) {

            },
        }, this);

    }
});

var Benson01Scene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new Benson01Layer();
        this.addChild(layer);
    }
});

