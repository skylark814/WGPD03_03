var Benson06Layer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
       
        this._super();




        return true;
    }
});

var Benson06Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Benson06Layer();
        this.addChild(layer);
    }
});

