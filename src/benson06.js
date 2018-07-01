var Benson06Layer = cc.Layer.extend({
    bg: null,
    man: null,
    dx: 50,
    manFrame: new Array(4),
    action: 0,
    ctor: function () {

        this._super();

        this.bg = new cc.Sprite(res.bg_png);
        this.bg.x = this.bg.width / 2;
        this.bg.y = cc.winSize.height / 2;
        this.addChild(this.bg);

        let frameCache = cc.spriteFrameCache;
        frameCache.addSpriteFrames(res.man_plist, res.man_png);
        let img37 = frameCache.getSpriteFrame("image37.png");
        let img38 = frameCache.getSpriteFrame("image38.png");
        let img39 = frameCache.getSpriteFrame("image39.png");
        let img40 = frameCache.getSpriteFrame("image40.png");
        this.manFrame = [img37, img38, img39, img40];

        this.man = new cc.Sprite(this.manFrame[this.action]);
        this.man.x = cc.winSize.width / 2;
        this.man.y = cc.winSize.height / 2 + 44;
        this.addChild(this.man);
        this.man.runAction(cc.flipX(true));

        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function (keyCode, event) {
                let target = event.getCurrentTarget();
                switch (keyCode) {
                    case 39:
                        target.goForward();
                        break;
                    case 37:
                        target.goBack();
                        break;
                }
            },
            onKeyReleased: function (keyCode, event) {
                cc.log("release:" + keyCode);
            }
        }, this);


        return true;
    },

    goForward: function () {
        this.man.runAction(cc.flipX(true));

        if (this.bg.x + this.bg.width / 2 - this.dx >= cc.winSize.width) {
            this.bg.x -= this.dx;
            this.action = this.action === 3 ? 0 : this.action + 1;
            this.man.setSpriteFrame(this.manFrame[this.action]);
        }
        else {
            this.man.x += this.dx;
            this.action = this.action === 3 ? 0 : this.action + 1;
            this.man.setSpriteFrame(this.manFrame[this.action]);
        }

    },

    goBack: function () {
        this.man.runAction(cc.flipX(false));
        if (this.bg.x - this.bg.width / 2 + this.dx <= 0) {
            this.bg.x += this.dx;
            this.action = this.action === 3 ? 0 : this.action + 1;
            this.man.setSpriteFrame(this.manFrame[this.action]);
        }
        else {
            this.man.x -= this.dx;
            this.action = this.action === 3 ? 0 : this.action + 1;
            this.man.setSpriteFrame(this.manFrame[this.action]);


        }


    },


});

var Benson06Scene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new Benson06Layer();
        this.addChild(layer);
    }
});

