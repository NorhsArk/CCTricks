
import MovingBGAssembler from "./MovingBGAssembler";

const {ccclass, property} = cc._decorator;

@ccclass
export default class MovingBGSprite extends cc.Sprite {
    @property(cc.Vec2)
    bgOffset: cc.Vec2 = cc.Vec2.ZERO;

    public FlushProperties() {
        //@ts-ignore
        let assembler: MovingBGAssembler = this._assembler;
        if (!assembler)
            return;

        assembler.bgOffset = this.bgOffset;
        this.setVertsDirty();
    }

    onEnable () {
        super.onEnable();
    }

    // // 使用cc.Sprite默认逻辑
    _resetAssembler () {
        this.setVertsDirty();
        let assembler = this._assembler = new MovingBGAssembler();
        this.FlushProperties();

        assembler.init(this);

        //@ts-ignore
        this._updateColor();        // may be no need
    }

    // // cc v2.2.2
    // _activateMaterialWebgl() {
    //     // cc.Sprite里根据webgl/canvas选择两种方法
    //     // _activateMaterialWebgl() / _activateMaterialCanvas()
    //     // 此处只处理webgl方法
    //     //@ts-ignore
    //     super._activateMaterialWebgl();

    //     // 正常情况下super._activateMaterial()内会初始化一个实例化的材质
    //     // canvas模式下没有材质
    //     let material = this.getMaterial(0);
    //     if (!material) {
    //         this.disableRender();
    //         return;
    //     }

    //     // material.setProperty("yStep", 1.0 / tex.height);
    // }
}
