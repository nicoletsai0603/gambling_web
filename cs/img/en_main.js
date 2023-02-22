(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"en_main_atlas_", frames: [[0,0,1920,1200],[0,1202,565,364]]}
];


// symbols:



(lib._1 = function() {
	this.initialize(ss["en_main_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.MAGNIFYINGGLASS = function() {
	this.initialize(ss["en_main_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.MAGNIFYINGGLASSpsb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MAGNIFYING GLASS
	this.instance = new lib.MAGNIFYINGGLASS();
	this.instance.parent = this;
	this.instance.setTransform(49,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(49,6,565,364);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak7LrQiRg+hwhxQhwhvg+iSQg/iXAAikQAAikA/iWQA+iSBwhwQBwhwCRg9QCXhACkAAQClAACWBAQCSA9BwBwQBwBwA9CSQBACWAACkQAACkhACXQg9CShwBvQhwBxiSA+QiWA/ilAAQikAAiXg/g");
	mask.setTransform(88.35,101);

	// 圖層 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#53C2E7","#14658F"],[0,1],-49.4,-49.4,59,59).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape.setTransform(164.075,12.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#53C2E7","#14658F"],[0,1],-137.7,-137.7,-29.3,-29.3).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_1.setTransform(164.075,189.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#53C2E7","#14658F"],[0,1],-125.1,-125.1,-16.7,-16.7).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_2.setTransform(164.075,164.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#53C2E7","#14658F"],[0,1],-112.4,-112.5,-4.1,-4.1).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_3.setTransform(164.075,138.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#53C2E7","#14658F"],[0,1],-99.8,-99.9,8.5,8.5).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_4.setTransform(164.075,113.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#53C2E7","#14658F"],[0,1],-87.2,-87.2,21.1,21.1).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_5.setTransform(164.075,88.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#53C2E7","#14658F"],[0,1],-74.6,-74.6,33.8,33.8).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_6.setTransform(164.075,63.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#53C2E7","#14658F"],[0,1],-62,-62,46.4,46.4).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_7.setTransform(164.075,37.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#53C2E7","#14658F"],[0,1],-36.8,-36.8,71.6,71.6).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_8.setTransform(138.825,12.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#53C2E7","#14658F"],[0,1],-125.1,-125.1,-16.7,-16.7).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_9.setTransform(138.825,189.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#53C2E7","#14658F"],[0,1],-112.4,-112.4,-4.1,-4.1).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_10.setTransform(138.825,164.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#53C2E7","#14658F"],[0,1],-99.8,-99.9,8.5,8.5).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_11.setTransform(138.825,138.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#53C2E7","#14658F"],[0,1],-87.2,-87.2,21.1,21.1).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_12.setTransform(138.825,113.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#53C2E7","#14658F"],[0,1],-74.6,-74.6,33.8,33.7).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_13.setTransform(138.825,88.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#53C2E7","#14658F"],[0,1],-62,-62,46.4,46.4).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_14.setTransform(138.825,63.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#53C2E7","#14658F"],[0,1],-49.4,-49.4,59,59).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_15.setTransform(138.825,37.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#53C2E7","#14658F"],[0,1],-24.1,-24.2,84.2,84.2).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_16.setTransform(113.6,12.625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#53C2E7","#14658F"],[0,1],-112.5,-112.4,-4.1,-4.1).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_17.setTransform(113.6,189.325);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#53C2E7","#14658F"],[0,1],-99.9,-99.8,8.5,8.5).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_18.setTransform(113.6,164.075);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#53C2E7","#14658F"],[0,1],-87.2,-87.2,21.1,21.1).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_19.setTransform(113.6,138.85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#53C2E7","#14658F"],[0,1],-74.6,-74.6,33.7,33.7).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_20.setTransform(113.6,113.625);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#53C2E7","#14658F"],[0,1],-62,-62,46.4,46.4).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_21.setTransform(113.6,88.375);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#53C2E7","#14658F"],[0,1],-49.4,-49.4,59,58.9).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_22.setTransform(113.6,63.125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#53C2E7","#14658F"],[0,1],-36.8,-36.8,71.6,71.6).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_23.setTransform(113.6,37.875);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#53C2E7","#14658F"],[0,1],26.3,26.3,134.7,134.7).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_24.setTransform(12.625,12.625);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#53C2E7","#14658F"],[0,1],-62,-62,46.4,46.4).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_25.setTransform(12.625,189.325);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#53C2E7","#14658F"],[0,1],-49.4,-49.4,59,59).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_26.setTransform(12.625,164.075);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#53C2E7","#14658F"],[0,1],-36.8,-36.8,71.6,71.6).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_27.setTransform(12.625,138.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#53C2E7","#14658F"],[0,1],-24.2,-24.2,84.2,84.2).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_28.setTransform(12.625,113.625);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#53C2E7","#14658F"],[0,1],-11.5,-11.5,96.8,96.8).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_29.setTransform(12.625,88.375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#53C2E7","#14658F"],[0,1],1.1,1.1,109.4,109.4).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_30.setTransform(12.625,63.125);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#53C2E7","#14658F"],[0,1],13.7,13.7,122.1,122.1).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_31.setTransform(12.625,37.875);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#53C2E7","#14658F"],[0,1],13.7,13.7,122.1,122.1).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_32.setTransform(37.875,12.625);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#53C2E7","#14658F"],[0,1],-74.6,-74.6,33.7,33.8).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_33.setTransform(37.875,189.325);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#53C2E7","#14658F"],[0,1],-62,-62,46.4,46.4).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_34.setTransform(37.875,164.075);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#53C2E7","#14658F"],[0,1],-49.4,-49.4,58.9,59).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_35.setTransform(37.875,138.85);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#53C2E7","#14658F"],[0,1],-36.8,-36.8,71.6,71.6).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_36.setTransform(37.875,113.625);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#53C2E7","#14658F"],[0,1],-24.2,-24.2,84.2,84.2).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_37.setTransform(37.875,88.375);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#53C2E7","#14658F"],[0,1],-11.5,-11.5,96.8,96.8).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_38.setTransform(37.875,63.125);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#53C2E7","#14658F"],[0,1],1.1,1.1,109.4,109.4).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_39.setTransform(37.875,37.875);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#53C2E7","#14658F"],[0,1],1.1,1.1,109.4,109.4).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_40.setTransform(63.125,12.625);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#53C2E7","#14658F"],[0,1],-87.2,-87.2,21.1,21.1).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_41.setTransform(63.125,189.325);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#53C2E7","#14658F"],[0,1],-74.6,-74.6,33.7,33.8).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_42.setTransform(63.125,164.075);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#53C2E7","#14658F"],[0,1],-62,-62,46.4,46.4).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_43.setTransform(63.125,138.85);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#53C2E7","#14658F"],[0,1],-49.4,-49.4,58.9,58.9).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_44.setTransform(63.125,113.625);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#53C2E7","#14658F"],[0,1],-36.8,-36.8,71.6,71.6).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_45.setTransform(63.125,88.375);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#53C2E7","#14658F"],[0,1],-24.2,-24.2,84.2,84.2).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_46.setTransform(63.125,63.125);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#53C2E7","#14658F"],[0,1],-11.5,-11.5,96.8,96.8).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_47.setTransform(63.125,37.875);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#53C2E7","#14658F"],[0,1],-11.6,-11.5,96.8,96.8).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_48.setTransform(88.375,12.625);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#53C2E7","#14658F"],[0,1],-99.9,-99.8,8.5,8.5).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_49.setTransform(88.375,189.325);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#53C2E7","#14658F"],[0,1],-87.2,-87.2,21.1,21.2).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_50.setTransform(88.375,164.075);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#53C2E7","#14658F"],[0,1],-74.6,-74.6,33.7,33.7).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_51.setTransform(88.375,138.85);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#53C2E7","#14658F"],[0,1],-62,-62,46.4,46.4).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_52.setTransform(88.375,113.625);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#53C2E7","#14658F"],[0,1],-49.4,-49.4,58.9,58.9).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_53.setTransform(88.375,88.375);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#53C2E7","#14658F"],[0,1],-36.8,-36.8,71.6,71.6).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_54.setTransform(88.375,63.125);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#53C2E7","#14658F"],[0,1],-24.2,-24.2,84.2,84.2).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_55.setTransform(88.375,37.875);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(7.4,20,162,162), null);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhU8gBKMCKyg3fIbMYsID6YjInMMpMg2sAjfMhJJAP8g");
	this.shape.setTransform(543.65,362.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件6, new cjs.Rectangle(0,0,1087.3,725.2), null);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("An3KIQgFAAgEgDQhYhGhDhbQgDgEgBgFQAAgFACgFQADgEAEgDQAggTAagqIAUgpIEfrAQAJgcATgdIAAAAQAqhAA7ABIDYAAQAHAAAFAFQAFAEABAHQAAAGgDAGQgEAFgHACQgQAEgUANQgqAegVA0IAAgBIhyEWIFyAAIDAnWIABgDIAbgtIABgBQAlg1AogRQAEgCAFABQAFAAAEADQBLA8BEBcQAFAGgBAHQgBAHgGAFQgzAoglBcIl7OiQgCAFgFADQgEADgGAAIkNAAQgHAAgFgFQgFgFAAgHQgBgHAFgGQAFgFAIAAQAdgEAkhAIAAABIAjhNIgBAAIBtkLIlxAAIifGGIgBACIgRAgIgBABQgaAogoAVQgEACgEAAIgCAAg");
	this.shape.setTransform(103.1726,104.8137,1.0086,1.0086,-23.4966);

	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(106.7,106.4,0.954,0.954,-23.4963,0,0,91.2,107.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#7ECEF4","#136C9B"],[0,1],-51.1,-51.1,48.8,48.8).s().p("AlBL6QiUg+hzhzQhzhzg/iUQhAiagBioQABioBAiZQA/iUByhzIABAAQBzhzCUg/QCZhACoAAQCpAACZBAQCUA/BzBzIAAAAQBzBzA/CUQBACZAACoQAACohACaQg/CUhzBzQhzBziUA+QiZBBipABQiogBiZhBg");
	this.shape_1.setTransform(102.8378,104.3456,1.0086,1.0086,-23.4966);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件7, new cjs.Rectangle(-14,-20.3,231.4,243.9), null);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.元件7();
	this.instance.parent = this;
	this.instance.setTransform(528.9,299.8,0.7559,0.7559,0,0,0,102,101.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ah2FhIBChcQA9AWBBgiQAmgSAUgcQAVgcAEgeQADgegQgxQggBOhIAmQgyAZg3gDQg3gEgvggQgwghgcg3Qgfg+AEhFQAEhIAng7QAmg8A8gfQAlgSAlgBQAkAAAtASIgTg2IBmg1IB8FpQAkBpACAnQADA+glA9QglA7hRApQhDAjg+AAQg/gBgtgcgAhLixQg5AdgUA7QgTA7AdA4QAXAwAsAMQArAOAwgZQAlgTAXgiQAXgfACgpQACgqgTglQgWgtgugNQgQgGgRAAQgcAAgeAQg");
	this.shape.setTransform(443.8298,365.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AkCiZIBng0IAQAtQAfhTBAghQA2gcA0ASQA0AQAbA1QANAYASA1IBXD6IhnA0IhVj0QgNgmgJgSQgNgZgVgGQgVgGgbANQgaANgQAfQgRAfACAnQACAnAhBcIA3CfIhmA0g");
	this.shape_1.setTransform(393.825,386.8135);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhkhzIBlg0ICcG/IhmA0gAhqi/QgdgJgNgbQgNgaAJgcQAJgcAagOQAbgNAcAJQAcAKANAaQAOAagJAcQgKAcgaANQgQAIgQAAQgLAAgLgDg");
	this.shape_2.setTransform(359.8494,392.2909);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhXD+QhUgagthYQg0hmAihpQAhhsBug3QB7g/BuBCIg/BcQg8gcg+AfQgqAWgXAiQgXAjgDAqQgBAsATAlQAYAxAuAOQAtANA0gbQBKglAOhGIBtAQQgNA7goAxQgnAxg/AgQhAAhg6AAQgeAAgcgIg");
	this.shape_3.setTransform(331.1649,416.487);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AiBinIBcgvIAWA9QAHhZA5gdQAOgHASgBIAKBxQgOACgGADQgeAPgFAvQgHAvApBwIA8CnIhoA1g");
	this.shape_4.setTransform(290.15,434.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgaEVQhEgUgkhHQgWgrgYhJIg6iqIBmg0IBPDkQAOAmAJARQAOAcAcAJQAcAJAfgQQAogUAJgjQAJgjgchOIhOjhIBmg0IBVDxQAcBRgDA2QgDA2geArQgdArg3AcQgxAZguAAQgZAAgYgIg");
	this.shape_5.setTransform(258.0191,449.3435);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhSD5QhQgcgthXQg1hqAkhpQAlhqBggxQA4gdA5ADQA7ADAyAiQAxAjAeA7QAyBigjBnQgjBohnA0Qg3Adg0AAQgfAAgfgKgAgxiDQg/AggLA/QgKA9AbA1QAYAvAqAPQApAOAugXQBAghANg9QALg8gdg5QgXgugrgOQgRgFgRAAQgbAAgcAOg");
	this.shape_6.setTransform(213.5097,476.4635);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhlDiIAahrQBIAkAygbQAUgKAIgQQAHgQgHgNQgFgLgPgHQgPgHg4gIQhAgKgfgOQgrgUgTgmQgbg1AYg1QAWg2A3gcQAmgTAsABQAqABAoAVIgKBnQghgSgagCQgcgDgSAJQgOAHgGANQgFAMAEAKQAFAJAMAGQANAFAxAIQBRAMAhAVQAjAUASAjQAXAugQA9QgSA+hJAlQgqAVgrABIgCAAQgpAAhAgXg");
	this.shape_7.setTransform(172.8935,497.273);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhCgTIgzAYIghhdIAzgaIg6imIBmg0IA5CmIBBghIAgBfIhAAhIB7FgIhnA0g");
	this.shape_8.setTransform(141.8,502.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgaEVQhEgUgkhHQgWgrgYhJIg6iqIBmg0IBPDkQAOAmAJARQAOAcAcAJQAcAJAfgQQAogUAJgjQAJgjgchOIhOjhIBmg0IBVDxQAcBRgDA2QgDA2geArQgdArg3AcQgxAZguAAQgZAAgYgIg");
	this.shape_9.setTransform(110.2191,524.4435);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhwFUQhtgjg8h1QhDiFAmiKQAqicCWhMQB0g7BxAlQByAkA7B0QAtBYgEBlQgGBlg1BQQg2BQhgAxQhNAnhHAAQgpAAgngNgAhHjUQg9AfgjA3QgkA3gCBHQgDBGAeA7QAjBGBEAaQBDAbBPgpQBdgvAghiQAfhigvhdQgnhOhGgXQgbgJgbAAQgrAAgtAXg");
	this.shape_10.setTransform(55.0861,547.6403);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhEDOQhFgWglhKQgrhUAbhWQAchYBRgpQAxgZAwACQAwACArAeQArAdAYAwQAIAPAGAWIkTCLQAUAjAhALQAhAKAngVQAvgYAVgzIBfABQgIAuggApQggAogzAaQgzAaguAAQgZAAgYgHgAgthrQgfAQgRAeQgRAdADAlIC0hbQgbgbgegFIgPgBQgXAAgXAMg");
	this.shape_11.setTransform(798.0005,53.0251);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhIDSQhGgVglhKQgqhTAbhXQAchZBbguQBlg0BcA3Ig0BMQgzgYgzAaQgiASgUAcQgTAdgBAjQgCAkAPAfQAVAoAmAMQAlALArgXQA8geAMg6IBbAOQgLAwggAoQghApg0AaQg2AcgwAAQgYAAgXgHg");
	this.shape_12.setTransform(758.8598,72.7281);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhThfIBTgrICCFxIhVArgAhYieQgXgIgLgVQgLgWAIgXQAHgYAWgLQAVgLAYAIQAXAIALAVQALAWgIAXQgHAXgWALQgNAHgNAAQgJAAgKgDg");
	this.shape_13.setTransform(729.0816,79.923);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Aiqg8IBUgrICXCkIANj4IBcgvIgYHAIgqAVg");
	this.shape_14.setTransform(700.1,95.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhqiKIBMgnIASAyQAFhJAvgYQAMgGAPAAIAIBdQgLABgFADQgZAMgEAnQgFAnAhBcIAxCLIhVArg");
	this.shape_15.setTransform(677.425,111.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhEDOQhFgWglhKQgrhUAbhWQAchYBRgpQAxgZAwACQAwACArAeQArAdAYAwQAIAPAGAWIkTCLQAUAjAhALQAhAKAngVQAvgYAVgzIBfABQgIAuggApQggAogzAaQgzAaguAAQgZAAgYgHgAgthrQgfAQgRAeQgRAdADAlIC0hbQgbgbgegFIgPgBQgXAAgXAMg");
	this.shape_16.setTransform(652.0505,127.2251);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhkDyIAohZQBIApAvgYQAXgLAIgXQAIgWgLgVQgIgQgSgMQgSgNhDgYQhIgZgbgRQgmgYgQghQgWgrALgxQANg9A9gfQBTgqBeAxIgjBZQhAgfgiARQgRAJgGAQQgGAPAHAOQAGANATALQASALBOAcQAqAPAPAIQAjARAWATQAVAUANAZQAcA4gUA7QgVA7g/AgQgqAVgtAAQg3AAg7ghg");
	this.shape_17.setTransform(614.1955,138.9794);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhqiKIBMgnIASAyQAFhJAvgYQAMgGAPAAIAIBdQgLABgFADQgZAMgEAnQgFAnAhBcIAxCLIhVArg");
	this.shape_18.setTransform(571.025,165.675);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhEDOQhFgWglhKQgrhUAbhWQAchYBRgpQAxgZAwACQAwACArAeQArAdAYAwQAIAPAGAWIkTCLQAUAjAhALQAhAKAngVQAwgYAUgzIBfABQgIAuggApQggAogzAaQgzAaguAAQgZAAgYgHgAgthrQgfAQgRAeQgRAdADAlIC0hbQgbgbgegFIgPgBQgXAAgXAMg");
	this.shape_19.setTransform(545.6505,181.2751);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AlEhHIBWgrIANApQAXhHA5gcQAXgMAZgDQAYgCATAGQATAGAUARQAJgqAWghQAYggAjgRQAsgXArAPQArAPAYAuQAJASAKAcIBNDbIhWAsIhBi9QgOgngGgMQgNgYgSgHQgTgGgWALQgWALgOAbQgPAbABAfQACAfAYBDIAwCLIhUArIhGjIQgIgYgIgRQgMgWgTgHQgVgHgVALQgVALgOAZQgOAZABAeQAAAdATA3IA4CfIhVArg");
	this.shape_20.setTransform(495.9,208.15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AhDDOQhDgXgkhIQgthXAehXQAfhYBPgoQAugYAwACQAwADApAcQApAcAZAxQApBRgdBVQgdBWhVAsQguAXgrAAQgZAAgZgIgAgohsQg0AbgJA0QgJAyAWArQAUAnAjANQAiAMAmgUQA1gbAKgyQAKgygYguQgTgmgkgMQgOgFgOAAQgWAAgXAMg");
	this.shape_21.setTransform(446.5424,231.5989);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ag2gQIgrAVIgbhOIArgVIgwiKIBUgqIAvCJIA1gbIAbBOIg1AcIBmEiIhVAsg");
	this.shape_22.setTransform(414.5,239.55);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhUC7IAWhYQA7AdApgWQARgIAGgNQAGgNgFgLQgFgJgMgGQgMgGgugGQg2gIgZgNQgjgQgQgfQgWgsATgsQATgsAtgXQAfgQAkAAQAjABAhASIgIBVQgbgPgWgCQgXgCgPAHQgLAGgFALQgFAKAEAIQAEAIALAEQAKAFAoAGQBDAKAcASQAcARAPAcQAUAmgOAzQgPAyg8AfQgjASgjAAIgCAAQgiAAg1gTg");
	this.shape_23.setTransform(395.8273,257.4749);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgVDlQg5gRgdg7QgSgjgVg8IgwiNIBVgrIBCC8QALAgAHAOQAMAXAXAIQAYAHAZgNQAhgRAHgdQAIgdgXhAIhBi6IBUgrIBGDIQAYBCgDAtQgCAsgZAkQgYAkgtAXQgpAVgmAAQgUAAgUgHg");
	this.shape_24.setTransform(362.212,270.7208);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgYEhQhCgCg7gmQg7gmghg/QgihEAGhQQAFhSAthDQAthEBLgmQBog2BxAhIghBcQghgNglACQgjADgjARQgxAZggAwQggAwgEA2QgEA1AYAvQAgBABCAUQA/ATBFgjQBKglAghGIBXAqQgzBhhpA2QhHAjg+AAIgGAAg");
	this.shape_25.setTransform(321.3306,287.1256);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Ah8EGQg1gPgXguQgUgnAIguQAHgtAvhIQgjgYgPgQQgPgQgKgTQgYgvAUg0QATg0A0gbQAtgWAsANQArAOAWArQARAjgFAqQgDAqgeA4QA2AeAlAPQAWgnAPggIBOAnQgJAYgMAYIgMAWIAgAOIBLAjIhoA1QgagJgYgLQgWAoggAgQggAgggARQgcAOgeAAQgUAAgVgHgAhzBoQgIAQAAAPQAAAMAFAJQAIAQAQAEQAQAFASgKQAQgHATgUIAkgxQgKgEgTgLIg/ghQgSAagQAfgAiDipQgQAHgFAQQgFAPAGANQALAWAfAUQAgg6gOgbQgFgJgLgDIgHgBQgJAAgIAFg");
	this.shape_26.setTransform(264.0129,323.2709);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AkFjrIBUgqIBfEQIBKi9IB0g8IhhDzID7ByIhmA0IjdhkIA9C1IhSAqg");
	this.shape_27.setTransform(204.925,352.35);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AhqiKIBMgnIASAyQAFhJAvgYQAMgGAPAAIAIBdQgLABgFADQgZAMgEAnQgFAnAhBcIAxCLIhVArg");
	this.shape_28.setTransform(173.725,367.575);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AhDDOQhDgXgkhIQgthXAehXQAfhYBPgoQAugYAwACQAwADApAcQApAcAZAxQApBRgdBVQgdBWhVAsQguAXgrAAQgZAAgZgIgAgohsQg0AbgJA0QgJAyAWArQAUAnAjANQAiAMAmgUQA1gbAKgyQAKgygYguQgTgmgkgMQgOgFgOAAQgWAAgXAMg");
	this.shape_29.setTransform(148.0924,383.2489);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("Aj7gWIBSgqICPCgIAGjrIAggRICPCfIAHjrIBaguIgNG5IgpAVIiMifIgFDpIgoAVg");
	this.shape_30.setTransform(95.925,402.875);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("Ag2gQIgrAUIgbhNIArgVIgxiKIBVgrIAvCKIA1gbIAcBOIg2AbIBlEkIhUArg");
	this.shape_31.setTransform(66,416.65);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AhEDOQhFgWglhKQgrhUAbhWQAchYBRgpQAxgZAwACQAwACArAeQArAdAYAwQAIAPAGAWIkTCLQAUAjAhALQAhAKAngVQAvgYAVgzIBfABQgIAuggApQggAogzAaQgzAaguAAQgZAAgYgHgAgthrQgfAQgRAeQgRAdADAlIC0hbQgbgbgegFIgPgBQgXAAgXAMg");
	this.shape_32.setTransform(41.1505,437.6251);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AkRiaIBMgnIFKDoIh2lUIBVgsICvH0IhMAmIlNjqIB4FXIhVAsg");
	this.shape_33.setTransform(-4.25,452.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#666666").s().p("ApuH/IG4AAIAAtpQAAhVgFhuIB9A/IgvArIAAPCIDVAAIAAtlQAAhJgEh+ICCA/Ig0AlIAALxQDHkqBJkaIB+BZIg6AaQi8FjiYCYIAACtID2AAIBThUIB0BzIwwAAQhEAAg6AQgAlzDJQgViCiclJIAPgLQDxFKAQBRQAPBQgfAmQggAkgKAAQgaAAgLhfg");
	this.shape_34.setTransform(1991.45,610.25);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#666666").s().p("ACvJHQgvguhehAQhdg/ijhOIAGgVQCyA0B3A1QBPhfCCixIm2AAIglApIhDhDQAagVAMgYQANgYAgiGIkGAAQhEAAg5APIgvgvIG4AAQAUhZAViIIiyAAQhEAAg5APIgwguIFlAAQAPhkAQiNIBtA+IgkAbQgPBJgLBPIE0AAIBThFIBZBkInmAAQgVB4gUBpIH7AAIBThJIBjBpIq2AAQgbB3gaBOIGxAAIAwg0IBjBjQhEAQhJBEQhKBEhuB0QB0AuAFAgQAGAfgBAQQAAAagIATQgIASgFAAQgQAAgaggg");
	this.shape_35.setTransform(1856.65,612.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#666666").s().p("AqQHWQh3g7jBhKIAAhrQB9AbCxA7QB5haBahTIpAAAIAAh9QAzhNAdg7IlBAAIAAh9IF4AAQAUgyAXhAIlTAAIAAh9IF7AAIAhiHIDRAAQgWBYgRAvIHJAAIAAB9In7AAQgaA5gfA5IKWAAIAAB9IrhAAIhaCIIKfAAIAAB9QhqBXhTA3IiBBUQAvAUBIAjIAADCQiNhghpg0gABQIfIAAh9IFcAAIAAwBIC8AAIAAQBIB8AAIAAwBIC7AAIAAQBIFaAAIAAB9gAOkDBQB4kcAykWICFAAQgTEHg5ErgADEDBQgFh2gajKQgJhEglitICEAAQAyB8AuCiQAyCuAWBlg");
	this.shape_36.setTransform(1609.625,531.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AgIACIAEgCQAGgDAHADIAAAAIgGACg");
	this.shape_37.setTransform(831.1625,125.3269);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1B72A9").s().p("AZdSTIAFAAIgFAFgEAktANTIAIAAIgIAHgEgk0gCrIB7g8IBYEGIDghuIhYkGIB7g9IDnK3Ih6A9Ihqk8IjfBuIBpE8Ih6A8gA3KCIQhcgqguheQgjhGAEhSQAFhTArhCQArhCBDghQAsgWAwABQAwADAsAbIgYhJIB3g6ICqIDIh1A5IgTg2QgVA2gaAeQgbAfgpAVQgzAZgxAAQgsAAgrgVgA2XknQg/AfgVBEQgWBFAkBJQAcA4AzASQAyASA1gaQAsgUAXgkQAXgjABg1QACg1gVgrQgdg5gygSQgVgIgVAAQgfAAggAQgAxPpBIB1g6ICsIDIh2A6gAqaoEIlZk9IB8g9IDnDTIA4lhICMhFIhVIRIBeEVIh7A9gAhJoWQhOgZgohRQgYgygbhUIg/jEIB1g6IBYEHQAPAsAKAUQAPAgAhALQAgAKAjgRQAugXALgoQALgogfhbIhVkCIBrg1IAGgDIAEgCIBcEVQAgBegFA+QgEA9giAxQgiAxg/AfQg4AcgzAAQgeAAgdgKgAxWqYQgggLgPgeQgPgeALggQALggAegPQAfgPAgALQAgALAPAeQAPAegLAgQgLAggfAPQgRAJgSAAQgNAAgOgFg");
	this.shape_38.setTransform(821.575,242.6125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件4, new cjs.Rectangle(-60,-22.2,2120.7,714.5), null);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.MAGNIFYINGGLASSpsb("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(282.5,182,1,1,0,0,0,331.5,188);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件3, new cjs.Rectangle(0,0,565,364), null);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqNHZQAjgUAdgvIAVgqIEfrBQAIgbASgbQAlg3AyAAIDYAAQgTAFgXAPQguAggYA5Ih7EtIGYAAIDEngIAbguQAigwAkgQQBJA7BDBaQg2AqgoBiIl7OhIkNAAQAlgBArhLIAjhOIB3kjImXAAIijGQIgRAhQgYAjgkAUQhWhEhChag");
	this.shape.setTransform(86.3649,194.4931,0.8079,0.8079,-23.4964);

	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(90.2,198,0.8079,0.8079,-23.4964,0,0,91.1,107.4);
	this.instance.alpha = 0.1992;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#7ECEF4","#136C9B"],[0,1],-51.2,-51.2,48.8,48.8).s().p("Ak7LrQiRg+hwhxQhwhvg+iSQg/iXAAikQAAikA/iWQA+iSBwhwQBwhwCRg9QCXhACkAAQClAACWBAQCSA9BwBwQBwBwA9CSQBACWAACkQAACkhACXQg9CShwBvQhwBxiSA+QiWA/ilAAQikAAiXg/g");
	this.shape_1.setTransform(86.0951,194.1259,0.8079,0.8079,-23.4964);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1B72A9").s().p("A1WHdIAugWIARBbIA/gdIgQhZIAvgWIAkDhIgvAUIgRhlIg/AcIAQBmIgvAVgAxsJWQgPgHgDgXQgEgRAGgPQAGgSAOgPQAEgDA+ghIAAgKQgEgNgIgGQgGgGgMAFQgUAKABAZIgpASQAAgkANgQQAOgPAhgQQALgFASgDQANgBAKAFQAKAFAEAHQADAGAFAYIAKBPQADAWADAIIgsAUIgDgJIgNAOQgFAGgVAJQgQAHgNAAQgJAAgGgDgAxSIjQABAJAGAFQAGADAJgEQATgIAEgJQAHgUgBgKIgCgSQg2AXAFAdgAvbFsIAsgTIAbCpIgtAUgAtRGGIhThrIAsgUIA7BMIAih1IAtgUIgyCnIAMBaIgtATgAq6GcQgLgBgFgLQgGgLgEgYIgOhwIAqgTIAQB3QAFAWAWgJQAHgDAHgKQAHgIABgHIgDgeIgMhgIAvgVIAYCtIgtAUIgEgfQgJAmglAQQgNAGgIAAIgHgBgAvlEtIAtgUIAGAnIgtAUgAnHBpIg4AZIgGghICehGIAFAhIg5AbIAeC+IgtAUgAksDnQgPgDgPgPQgNgOgFgcQgGgqAQghQARgiAhgOQAdgOAYAPQAYANAJAzIhiAsIABAHQADASAKAGQAIAFANgFQASgIAEgTIApgSQgIA6gxAWQgVAIgPAAIgFAAgAkaBQQgYALACAkIA2gYQgGgZgPAAQgFAAgGACgAiSCUQgXgOgHgoQgFgnAPgjQARghAigPQAegNAUAKQAPAJAKASIgrATQgLgUgRAHQgOAGgFASQgEASADAZQADAOAGAOQAFAOADACQAKAGAKgEQATgIACgXIApgTQABAXgNAUQgPAagfAOQgQAHgOAAQgOAAgMgHgAgYiEIApgTIANBYQAHggAogRQAPgHANADQANABAFALQAHAMAEAUIARBwIgtAUIgVh+QgDgGgEgBQgFgDgIADQgOAGgJANQgGAJABAUIABANIAQBfIgrATgADjjqIBPgiQAlgQAZANQAUAJAIAXQALAqgdAgIghAWIgwAXIAMBYIguAUgAE8juIglAQIAKBDIAlgRQARgHAGgPQAHgNgFgKQgJgTgOgCgAHeh0QgNgHgGgfIgOhXIgYAKIgEgfIAagMIgGgrIApgSIAHArIAggOIAGAeIgiAPIAOBQIABAOQACAJADADQAFADARgHIAHgFIAEAdIgWANQgTAJgMAAQgGAAgFgDgAJVinQgRgDgOgPQgNgPgFgbQgGgrAQggQARgiAggPQAegMAYANQAYAOAIAzIhhArIABAJQADARALAFQAJAGANgGQASgHADgUIApgTQgKA8gvAWQgUAIgNAAIgIAAgAJnk+QgaALADAkIA1gYQgGgagOAAQgFAAgFADgALYkRIAvgVIAHA1IguAVgANMoDIAxgWIAfDCIBYgnIADAlIiFA7gAQblzQgOgHgGggIgNhXIgZALIgEgfIAbgLIgHgtIAqgSIAGArIAhgOIAGAfIghAOIAMBQIABAOQACAJAEADQAEADAQgHIAIgEIAFAcIgXAOQgSAIgMAAQgGAAgFgCgAR7mrQgKgIgGgQQgFgOgDgTQgIgrALgfIACgEQAKgaAagMQANgGAPAAQAQAAAJAGIgOhRIArgTIAlDsIgoARIgFgcQgEAQgPARQgOAOgPAGQgKAFgKAAQgNAAgKgKgASio8QgKAEgFALQgIASAGAjQAJA1AZgLQARgHAGgMQAGgOgEgQIgEgfIgCgKQgFgTgKgEQgDgBgDAAQgGAAgJAEgAUhoWIAvgVIAIA1IgvAVg");
	this.shape_2.setTransform(306.3,138.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#135E8A").s().p("A1ZM+QAqgUAHg1QADgYgEgzIgBgGQgHhVghjoIBLghQgOAHALBCQAUBtAMC1IACAYQAIBjgsAwQgWAXgXAEgAvSKeQAigMAngSQA3gYgBghIABgEIksCGIAAgNQgBhXgEhNIg2AZIgKg3IA9gaQgJhSgIhBIgEgaIFSiWIAaCqIAhgQIAJgRIALBEIgtAUQAFAfAJBRIAcgMIAKgWIAMBIIgvAVQAAA3gOAaQgSAkh0A0IgHACgAxIH+QAEAwABBGIDthqIgNhxgAxYFRIABACQAIA0AFA9IDghkIgPhygAwHINIAbgwQAzAOAbAOIgcA3QgbgTgygQgAneGwQAfgKAbgLQASgGAQgIQAcgNgDgPIgYiGIkNB3IgLhAIENh5IgShfIilBKIgMg+IFmieIAPgaIANBPIiPBAIAQBgIDrhpIANghIAQBZIj7BxIAZCQQAHAlgPAXQgEAIgHAGQgQAPgcAMIhgAqgAwjFlIAbgwQArAJAqATIgeA2QgdgRg1gRgAz4FaIAOgVQAegzAPgnQAQgvALhDIA5gBIgKA1IEkiDIAIgUIAPBMIlQCWIgCACQgKAjgYAuIgXAogA1REuQgVgIgJgWQgJgUAHgWQAJgUAUgJQAVgKAVAIQAWAJAJAUQAJAVgIAWQgIAVgVAJQgMAFgLAAQgJAAgKgEgACHhbIgFAbQgWBngoBWIgkg9QAhhDAWhIQAQg0ALg2IhrAwIgIg8IBtgxIgRhfIhWAzIgTg3QArgYAogZQBCgqA1gtIAfAxQgeAageAWIgOAJIATBpIBVgnIAGgNIAMBFIhdApIADASIAcARQAoAbAvAkIgYBDIhPhMIA4E2Ig4AZgArBgMIDKhZQAOAPAVAHQAUAEAVgKQATgJALgSIAGgMQAEgOgCgOIDyhtIAgC3IhBAcIgVh1ImsC+IAVB2IhBAcgAIEiDIjOB/IgSg5IDViFIhImUIA6gaIBFGKIApgZIAJgWIAUBKIg6AkIAkDGIg6AbgAL6h2QAZgFAZgLQAZgLgDgSIgaiRQgiAigkAcIgVhIIAFgDQAlgZAlggIgfikIhPAjIgLg9IBQgjIgXiBIA9gbIAWCCIAygXIASgaIAOBOIhGAfIAYCGQAjgmAZgjIANBJQgeAngfAhIAiC6QAHAngOAUQgEAJgHAGQgOAOgYAMIg0AWgAnZhdQgXgIgJgVQgEgIAAgHQgCgOAGgOQAIgUAVgJQAVgKAUAIQAWAJAIAUQAJAUgGAVIgBACQgIAUgUAJQgMAGgLAAQgKAAgJgEgAOoi1QBDg5AugxQAbgdAUgaQhFgpg0hHIAtg2QA0BKA/AhIAEgHQAlg+Aah+Ij8BxIgLg/IB8g3IgQhdIh9A4IgLhCIB8g3IgShkIA/gcIARBkIB8g2IAQgjIAQBaIiQBBIARBbICCg6IAKA4QgTCFguBYIgPAgQAdAKA5ADQA1AFAwgDIAKgIQALgGAEgFIgfBcQg7gBg/gGQhEgGgfgNIgcAkQg5BFhZBUgAFljHQgVgGgJgWQgJgUAIgVQAHgWAVgKQAVgJAWAJQAWAHAJAVQAJAVgJAVQgIAWgUAJQgLAFgLAAQgLAAgKgFgAFSl2QgWgIgJgVQgJgVAHgWQAJgVAVgJQAVgKAVAKQAVAGAJAWQAKAUgIAWQgIAVgVAKQgMAFgLAAQgKAAgJgEg");
	this.shape_3.setTransform(292.7969,88.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(-11.9,0,455,297.4), null);


(lib.補間動畫3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2078A6").s().p("AggErQhKgYgmhNQgXgvgZhPIg9i6IBvg3IBUD5QAOApAJAUQAPAeAfAKQAfALAhgRQArgVALgnQAKglgdhWIhRj1IBvg3IBYEHQAeBYgEA6QgEA7ghAuQggAvg8AdQg1AbgxAAQgcAAgbgKg");
	this.shape.setTransform(391.5489,-114.7953);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2078A6").s().p("AA+CUIlHksIB3g6IDZDIIA2lOICFhCIhRH0IBYEIIhzA5g");
	this.shape_1.setTransform(325.75,-97.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2078A6").s().p("Ahrh/IBug2ICkHnIhxA3gAhxjRQgegKgOgdQgOgdAKgeQAKgfAdgOQAcgOAfALQAeAKAOAdQAOAcgKAfQgLAegcAOQgRAIgRAAQgMAAgNgEg");
	this.shape_2.setTransform(301.3,-76.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2078A6").s().p("Ah/EvQhXgpgshYQghhEAEhOQAEhNApg+QAphAA/gfQArgVAtACQAuACAoAaIgWhFIBwg4ICiHoIhvA3IgSg0QgUA0gZAdQgZAdgnAUQgwAYgtAAQgrAAgpgUgAhPhrQg8AegTBBQgVBAAjBGQAaA1AwASQAwARAxgZQApgUAWgiQAWgiACgyQABgxgUgoQgbg3gwgRQgTgHgUAAQgdAAgfAOg");
	this.shape_3.setTransform(267.3034,-51.4977);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2078A6").s().p("AlLjcIB0g5IBTD5IDThoIhSj5IB0g6IDcKUIh0A5IhlkrIjTBoIBiEsIhyA5g");
	this.shape_4.setTransform(204.95,-28.425);

	this.instance = new lib.元件7();
	this.instance.parent = this;
	this.instance.setTransform(112.85,21,0.7169,0.7169,0,0,0,101.9,101.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 圖層 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AhyFVIBAhYQA6AUA/ggQAlgSAUgbQAUgaADgeQADgegPguQgfBMhGAjQgwAZg1gDQg1gDguggQgugfgbg2Qgeg7AEhDQAEhFAlg6QAmg6A5gdQAkgSAjgBQAjgBArASIgSg0IBjgzIB4FdQAjBlACAnQADA7gkA6QgkA6hOAoQhBAhg8AAQg9gBgrgbgAhJirQg3AcgTA5QgTA5AcA3QAXAtAqANQAqAMAvgYQAkgSAVggQAWgfACgoQACgogSgkQgWgqgsgOQgPgFgQAAQgcAAgdAPg");
	this.shape_5.setTransform(27.8599,86.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("Aj5iUIBjgyIAQArQAehQA+gfQAzgbAzAQQAzARAZAyQAMAYASAzIBUDxIhjAzIhTjsQgNgkgIgSQgMgYgVgGQgTgHgbANQgZANgPAeQgRAfACAlQADAlAfBZIA1CaIhiAyg");
	this.shape_6.setTransform(-20.4,106.6871);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AhhhwIBhgyICXGwIhjAygAhni5QgbgJgNgZQgNgaAJgbQAJgbAZgNQAZgNAcAJQAbAJANAZQAMAZgIAcQgJAbgZANQgPAIgQAAQgLAAgLgEg");
	this.shape_7.setTransform(-53.1841,111.957);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AhUD1QhRgZgshVQgyhiAhhmQAghoBqg2QB3g8BrBAIg9BYQg7gbg7AfQgpAUgXAiQgWAhgCApQgCAqASAkQAYAvAsANQAsAOAzgaQBHgkANhDIBqAPQgNA5gmAvQgmAvg8AfQg/Agg4AAQgcAAgcgIg");
	this.shape_8.setTransform(-80.9152,135.3749);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("Ah8iiIBYgtIAVA7QAHhWA3gcQANgHASAAIAKBsQgNACgGADQgdAPgGAtQgGAuAnBsIA6CiIhkAyg");
	this.shape_9.setTransform(-120.525,152.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AgZEMQhCgUgihEQgVgqgYhHIg4ikIBigyIBNDcQANAlAJARQANAbAcAJQAbAIAegPQAmgUAJgiQAJghgbhMIhLjZIBigyIBSDpQAbBNgDA1QgDA0gcAqQgcApg1AbQgwAYgtAAQgYAAgXgHg");
	this.shape_10.setTransform(-151.6102,167.1384);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AhPDxQhOgbgrhUQg0hmAkhmQAjhnBdgvQA2gcA4ADQA4ADAwAhQAwAhAdA5QAwBfgiBjQghBlhjAzQg2AbgyAAQgfAAgdgJgAgvh+Qg9AfgLA8QgKA7AaAzQAXAtApAPQAoAOAsgXQA+gfAMg7QALg6gbg2QgXgtgqgOQgQgFgQAAQgZAAgcAOg");
	this.shape_11.setTransform(-194.5987,193.3224);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AhiDbIAZhoQBGAjAwgaQAUgKAIgPQAGgPgGgOQgGgJgOgHQgPgGg1gJQg/gJgdgPQgpgTgTgkQgagzAWg0QAXg0A0gaQAlgTAqABQApAAAmAVIgIBkQgggRgagDQgbgDgSAJQgNAHgFAMQgGAMAFAJQAEAKAMAFQAMAFAvAHQBPAMAhAVQAgATASAiQAXAsgQA7QgRA8hHAkQgoAUgqAAIgCABQgoAAg+gWg");
	this.shape_12.setTransform(-233.851,213.3999);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AhBgTIgwAZIghhbIAygZIg4ihIBjgyIA2ChIA/ggIAgBcIg/AfIB3FVIhjAyg");
	this.shape_13.setTransform(-263.9,218.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AgZEMQhCgUgihEQgVgqgYhHIg4ikIBigyIBNDcQANAlAJARQANAbAcAJQAbAIAegPQAmgUAJgiQAJghgbhMIhLjZIBigyIBSDpQAbBNgDA1QgDA0gcAqQgcApg1AbQgwAYgtAAQgYAAgXgHg");
	this.shape_14.setTransform(-294.4102,239.6884);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("AhsFIQhqghg5hyQhBiAAkiGQApiVCRhKQBxg5BtAjQBuAjA5BwQArBVgEBhQgFBig0BNQgzBNheAwQhKAmhFAAQgnAAgmgNgAhFjNQg7AeghA1QgjA1gCBFQgDBDAdA5QAiBDBCAaQBAAaBNgnQBZguAfhfQAfheguhaQgmhLhDgXQgagIgbAAQgpAAgsAWg");
	this.shape_15.setTransform(-347.7102,262.131);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("AhCDHQhCgVgkhHQgphSAahTQAahVBPgoQAvgYAuADQAvACApAcQAqAdAXAuQAIAOAGAVIkKCHQATAiAhAKQAgAKAlgUQAugXAUgxIBbAAQgIAtgeAnQgfAngxAYQgyAagtAAQgYAAgXgHgAgrhnQgeAPgRAdQgPAdACAjICthXQgZgbgdgEIgPgCQgVAAgXAMg");
	this.shape_16.setTransform(370.0586,-215.6586);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("AhGDKQhDgUgkhHQgphQAbhVQAahVBYgtQBigyBYA1IgyBJQgxgWgxAZQghARgTAbQgSAcgCAiQgBAjAPAeQATAmAlALQAkALApgVQA7geALg4IBYANQgLAvgfAnQggAngyAaQgzAaguAAQgYAAgXgHg");
	this.shape_17.setTransform(332.2548,-196.5899);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("AhQhcIBQgpIB9FkIhSAqgAhViZQgWgHgLgVQgLgVAIgXQAHgWAVgLQAVgKAWAHQAXAHAKAVQALAVgHAWQgIAXgVALQgMAGgMAAQgJAAgKgDg");
	this.shape_18.setTransform(303.4188,-189.69);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#666666").s().p("Aikg7IBRgoICSCeIANjvIBZgtIgYGvIgoAUg");
	this.shape_19.setTransform(275.425,-174.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#666666").s().p("AhmiFIBJglIARAwQAFhIAugWQALgHAPAAIAIBbQgLABgFACQgYANgFAlQgFAlAhBZIAvCGIhSArg");
	this.shape_20.setTransform(253.525,-159);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AhCDHQhCgVgkhHQgphSAahTQAahVBPgoQAvgYAuADQAvACApAcQAqAdAXAuQAIAOAGAVIkKCHQATAiAhAKQAgAKAlgUQAugXAUgxIBbAAQgIAtgeAnQgfAngxAYQgyAagtAAQgYAAgXgHgAgrhnQgeAPgRAdQgPAdACAjICthXQgZgbgdgEIgPgCQgVAAgXAMg");
	this.shape_21.setTransform(229.0086,-143.9586);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#666666").s().p("AhgDqIAmhWQBFAoAugXQAWgLAIgWQAHgWgKgUQgIgQgRgLQgRgMhBgXQhGgZgagQQgkgXgQggQgWgqALgvQANg7A7geQBQgpBbAvIgiBXQg+geghAQQgQAJgGAPQgGAPAHAOQAGAMASALQASAKBLAbQApAPAOAHQAiARAVASQAUATANAYQAcA3gVA5QgTA4g9AfQgpAVgrAAQg1AAg5ggg");
	this.shape_22.setTransform(192.4471,-132.6082);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#666666").s().p("AhmiFIBJglIARAwQAFhIAugWQALgHAPAAIAIBbQgLABgFACQgYANgFAlQgFAlAhBZIAvCGIhSArg");
	this.shape_23.setTransform(150.725,-106.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("AhCDHQhCgVgkhHQgphSAahTQAahVBPgoQAvgYAuADQAvACApAcQAqAdAXAuQAIAOAGAVIkKCHQATAiAhAKQAgAKAlgUQAugXAUgxIBbAAQgIAtgeAnQgfAngxAYQgyAagtAAQgYAAgXgHgAgrhnQgeAPgRAdQgPAdACAjICthXQgZgbgdgEIgPgCQgVAAgXAMg");
	this.shape_24.setTransform(126.2086,-91.7086);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#666666").s().p("Ak5hEIBTgqIANAnQAWhEA3gcQAWgMAYgCQAYgCARAGQATAGAUARQAHgqAXgfQAWgfAigRQArgWAqAPQApANAXAtQAIARALAcIBJDUIhRAqIhAi3QgOglgFgMQgNgYgRgGQgSgGgWALQgVALgOAaQgNAZABAfQABAeAWA/IAwCIIhSAqIhDjCQgIgYgIgPQgLgWgTgHQgUgGgVALQgTAKgOAYQgOAYAAAdQABAdASA0IA2CaIhSAqg");
	this.shape_25.setTransform(78.1,-65.742);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#666666").s().p("AhBDHQhAgWgkhGQgrhUAehUQAdhVBMgnQAtgXAuADQAvACAnAbQAoAbAYAvQAnBPgbBSQgcBThSAqQgtAXgpAAQgZAAgYgIgAgnhoQgyAZgJAzQgIAwAVAqQATAmAiAMQAgALAlgSQA0gbAKgxQAJgvgXgtQgTglgigMQgNgEgOAAQgVAAgXAMg");
	this.shape_26.setTransform(30.4142,-43.064);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#666666").s().p("Ag1gPIgoAUIgahLIAogVIguiFIBRgpIAuCFIA0gbIAaBMIg0AaIBiEZIhSAqg");
	this.shape_27.setTransform(-0.475,-35.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#666666").s().p("AhQC1IAUhVQA6AcAogVQAQgIAGgNQAFgNgFgLQgFgIgLgFQgMgGgsgGQg0gIgYgMQgjgQgPgeQgVgqASgrQATgrArgWQAegPAjAAQAiABAfARIgHBTQgagPgVgCQgWgCgPAHQgLAGgFAKQgEAKAEAIQAEAHAJAEQAKAFAnAGQBBAKAbAQQAbARAOAbQATAlgNAxQgOAxg6AdQghARgjABIgCAAQghAAgygSg");
	this.shape_28.setTransform(-18.5724,-18.1751);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#666666").s().p("AgVDdQg2gRgdg4QgRgigUg7IguiHIBSgpIBAC1QAKAeAHAPQALAWAXAHQAXAHAYgMQAggQAHgdQAIgbgXg/Ig+izIBRgpIBEC/QAXBBgDArQgDArgXAjQgXAigsAWQgoAUglAAQgTAAgUgGg");
	this.shape_29.setTransform(-51.0077,-5.324);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#666666").s().p("AgXEYQhAgCg5glQg5glgfg9QghhCAFhNQAFhOAshCQArhCBIglQBlgzBuAgIghBZQgggNgjACQgiACgiASQgvAYgfAuQgfAugEA0QgEA0AXAtQAfA9BAAUQA+ATBCgiQBHgkAfhEIBUApQgxBehmAzQhEAjg8AAIgGAAg");
	this.shape_30.setTransform(-90.5138,10.492);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#666666").s().p("Ah4D9QgzgPgWgsQgTgmAHgsQAHgsAthFQghgXgOgQQgPgPgJgTQgYgtATgzQASgxA0gaQArgWAqANQAqANAVApQAQAigEApQgDApgdA1QA0AeAjAOQAWgmAPgfIBLAmQgJAXgMAXIgLAWIAfAOQAwAVAXAMIhkAzQgZgIgXgLQgVAngfAeQgeAfggAQQgbAPgeAAQgTAAgUgHgAhuBkQgIAPAAAPQgBALAFAJQAIAPAPAFQAQAEASgJQAPgHASgTIAjgwIgdgOIg8ggQgRAZgPAegAh+ikQgPAHgFAPQgFAPAGAMQALAWAeATQAdg3gNgbQgFgJgKgCIgIgBQgHAAgIAEg");
	this.shape_31.setTransform(-145.8747,45.5013);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#666666").s().p("Aj8jjIBRgpIBbEGIBJi2IBvg5IhdDrIDyBtIhiAyIjXhhIA9CwIhQApg");
	this.shape_32.setTransform(-202.95,73.575);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#666666").s().p("AhmiGIBJglIARAxQAFhHAugXQALgHAPAAIAIBbQgLABgFADQgYAMgFAlQgFAlAhBZIAvCGIhSArg");
	this.shape_33.setTransform(-233.125,88.25);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#666666").s().p("AhBDHQhAgWgkhGQgrhUAehUQAdhVBMgnQAtgXAuADQAvACAnAbQAoAbAYAvQAnBPgbBSQgcBThSAqQgtAXgpAAQgZAAgYgIgAgnhoQgyAZgJAzQgIAwAVAqQATAmAiAMQAgALAlgSQA0gbAKgxQAJgvgXgtQgTglgigMQgNgEgOAAQgVAAgXAMg");
	this.shape_34.setTransform(-257.8858,103.436);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#666666").s().p("AjygVIBPgoICJCaIAGjjIAggQICKCaIAGjkIBXgsIgMGqIgnAUIiIiaIgFDiIgnATg");
	this.shape_35.setTransform(-308.325,122.325);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#666666").s().p("Ag1gPIgoAUIgahLIAogVIguiFIBRgpIAuCFIA0gaIAaBLIg0AaIBiEZIhSAqg");
	this.shape_36.setTransform(-337.175,135.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#666666").s().p("AhCDHQhCgVgkhHQgphSAahTQAahVBPgoQAvgYAuADQAvACApAcQAqAdAXAuQAIAOAGAVIkKCHQATAiAhAKQAgAKAlgUQAugXAUgxIBbAAQgIAtgeAnQgfAngxAYQgyAagtAAQgYAAgXgHgAgrhnQgeAPgRAdQgPAdACAjICthXQgZgbgdgEIgPgCQgVAAgXAMg");
	this.shape_37.setTransform(-361.2414,155.9414);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#666666").s().p("AkIiVIBKgmIE/DgIhzlIIBTgqICoHjIhIAlIlCjiIBzFLIhRAqg");
	this.shape_38.setTransform(-405.175,170.625);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1B72A9").s().p("AlrCeIAFAAIgFAEgAFkihIAIAAIgIAGg");
	this.shape_39.setTransform(523.2,109.525);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AgLACIAEgCQAHgDAGADIAGACg");
	this.shape_40.setTransform(333.8,-109.1231);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-459.1,-288.5,1018.7,614);


// stage content:
(lib.en_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 放大鏡
	this.instance = new lib.MAGNIFYINGGLASSpsb("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(686.05,1028.3,1,1,0,0,0,331.5,188);
	this.instance.alpha = 0;

	this.instance_1 = new lib.元件3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(487,747.25,1,1,0,0,0,282.5,182);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,regX:282.5,regY:182,x:487,y:747.25,alpha:1,mode:"independent"},7).wait(203));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},7).to({x:1384.2,y:357.1,mode:"synched",startPosition:0},56).to({x:632,y:922.2},15).to({x:1539.2,y:534.4},56).wait(67).to({alpha:0.7813},0).to({alpha:0},8).wait(1));

	// 圖層 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_7 = new cjs.Graphics().p("EACIA8hQmcmbAApHQAApGGcmcQGbmcJGAAQJHAAGcGcQGcGcgBJGQABJHmcGbQmcGcpHAAQpGAAmbmcg");
	var mask_graphics_8 = new cjs.Graphics().p("EAS0BCbQpGgCmameQmamdADpGQACpHGcmaQGdmaJHACQJGACGbGdQGaGdgCJHQgDJGmdGaQmbGZpDAAIgGAAg");
	var mask_graphics_9 = new cjs.Graphics().p("EAT/BB4QpGgEmZmfQmYmeAFpHQAEpGGemZQGemZJHAFQJGAEGZGeQGZGfgEJHQgFJGmeGZQmbGUo/AAIgMAAg");
	var mask_graphics_10 = new cjs.Graphics().p("EAVKBBWQpGgGmXmhQmXmgAHpGQAGpHGgmXQGgmXJGAGQJHAHGXGgQGXGggGJHQgHJGmgGXQmaGRo7AAIgSAAg");
	var mask_graphics_11 = new cjs.Graphics().p("EAWVBA0QpGgJmWmiQmWmhAJpHQAJpGGhmWQGimVJGAIQJHAJGWGhQGVGigJJHQgIJGmiGVQmZGOo3AAIgYAAg");
	var mask_graphics_12 = new cjs.Graphics().p("EAXgBARQpGgKmUmkQmVmjALpGQALpGGjmVQGjmUJHALQJGALGUGjQGUGjgLJGQgKJHmjGUQmZGKozAAIgegBg");
	var mask_graphics_13 = new cjs.Graphics().p("EAYrA/vQpGgNmTmlQmTmkANpHQANpGGlmTQGkmSJHANQJGANGTGkQGSGlgNJGQgMJHmlGSQmYGGovAAIgkAAg");
	var mask_graphics_14 = new cjs.Graphics().p("EAZ2A/NQpGgPmRmnQmRmmAPpGQAOpGGnmRQGmmRJGAPQJGAPGRGmQGRGmgPJGQgPJGmmGRQmXGDosAAIgpAAg");
	var mask_graphics_15 = new cjs.Graphics().p("EAbBA+qQpGgRmQmoQmPmnARpGQARpHGomPQGnmPJGARQJGARGQGnQGPGogRJGQgRJGmnGPQmXGAooAAIgvgBg");
	var mask_graphics_16 = new cjs.Graphics().p("EAcMA+IQpHgUmNmpQmOmpATpGQATpGGpmOQGpmOJGAUQJGATGPGpQGNGpgTJGQgTJGmpGOQmWF7okAAIg1AAg");
	var mask_graphics_17 = new cjs.Graphics().p("EAdWA9lQpGgVmMmrQmMmqAVpGQAWpGGqmNQGrmMJGAWQJGAVGMGqQGMGrgVJGQgWJGmqGMQmVF4ogAAIg8gBg");
	var mask_graphics_18 = new cjs.Graphics().p("EAehA9DQpGgYmKmsQmLmsAXpGQAYpGGsmLQGsmKJGAXQJGAYGLGsQGKGsgXJGQgYJGmsGKQmUF1odAAIhBgBg");
	var mask_graphics_19 = new cjs.Graphics().p("EAfsA8gQpGgZmImuQmKmtAapGQAZpGGumJQGtmJJGAZQJGAaGJGtQGJGugaJGQgZJFmtGJQmUFyoZAAQgjAAgkgCg");
	var mask_graphics_20 = new cjs.Graphics().p("EAg3A7+QpGgcmHmvQmImvAcpFQAcpGGvmIQGumHJGAbQJGAcGIGvQGHGvgcJFQgcJGmuGIQmTFtoWAAQglAAgngBg");
	var mask_graphics_21 = new cjs.Graphics().p("EAiCA7bQpGgemFmwQmHmwAepGQAepFGxmHQGwmFJFAdQJGAeGGGwQGGGxgeJFQgeJGmwGGQmSFqoSAAQgpAAgpgCg");
	var mask_graphics_22 = new cjs.Graphics().p("EAjNA64QpGggmEmxQmEmyAgpFQAgpGGymEQGxmFJFAgQJGAgGFGyQGEGyggJFQggJGmyGEQmRFnoOAAQgsAAgsgDg");
	var mask_graphics_23 = new cjs.Graphics().p("EAkYA6WQpFgimDm0QmDmyAipGQAipFG0mDQGymDJGAiQJFAjGDGyQGDG0gjJFQgiJFmzGDQmQFkoLAAQguAAgvgDg");
	var mask_graphics_24 = new cjs.Graphics().p("EAljA5zQpFgkmBm1QmCm0AkpFQAlpFG0mCQG1mBJFAlQJFAkGBG0QGBG1gkJFQgkJFm0GBQmQFgoHAAQgxAAgygDg");
	var mask_graphics_25 = new cjs.Graphics().p("EAmuA5RQpFgnmAm2QmAm2AnpFQAmpFG2l/QG2mAJFAnQJFAmGAG2QF/G2gmJFQgnJFm1F/QmOFdoFAAQg0AAg0gDg");
	var mask_graphics_26 = new cjs.Graphics().p("EAn5A4uQpFgpl+m3Ql+m3AopFQAppFG3l+QG3l+JFApQJFAoF+G3QF+G4gpJFQgoJFm3F9QmNFaoBAAQg3AAg3gEg");
	var mask_graphics_27 = new cjs.Graphics().p("EApDA4LQpEgql8m5Ql9m5ArpEQAqpFG5l9QG5l8JEArQJFAqF9G5QF8G5grJFQgrJEm4F8QmMFXn+AAQg5AAg7gFg");
	var mask_graphics_28 = new cjs.Graphics().p("EAqOA3pQpEgtl7m6Ql7m6AtpFQAtpEG6l7QG6l7JFAtQJEAtF7G6QF7G6gtJEQgtJFm6F6QmLFTn7AAQg7AAg+gEg");
	var mask_graphics_29 = new cjs.Graphics().p("EArZA3GQpEgvl5m8Ql5m7AvpEQAupFG8l5QG7l5JFAvQJEAvF5G7QF5G8gvJEQgvJFm7F4QmKFQn3AAQg/AAhAgFg");
	var mask_graphics_30 = new cjs.Graphics().p("EAskA2jQpEgxl3m9Ql4m8AxpFQAxpEG9l4QG9l3JEAxQJEAxF4G9QF3G9gxJEQgxJEm9F3QmJFNn0AAQhBAAhDgGg");
	var mask_graphics_31 = new cjs.Graphics().p("EAtvA2AQpEgzl2m+Ql2m+A0pEQAzpEG+l2QG+l2JEAzQJEA0F2G+QF2G+g0JEQgzJEm+F2QmIFJnwAAQhEAAhGgHg");
	var mask_graphics_32 = new cjs.Graphics().p("EAu6A1eQpEg2l0m/Ql0nAA1pEQA1pDHAl1QG/l0JEA2QJEA1F0G/QF0HAg1JEQg1JEm/F0QmIFFntAAQhGAAhJgGg");
	var mask_graphics_33 = new cjs.Graphics().p("EAwFA07QpEg4lynBQlznAA4pEQA3pEHBlyQHBlzJDA4QJEA3FzHBQFyHBg3JEQg4JDnAFyQmHFDnqAAQhJAAhLgHg");
	var mask_graphics_34 = new cjs.Graphics().p("EAxQA0YQpEg6lwnCQlxnCA5pDQA6pEHClxQHClwJEA5QJDA6FxHCQFxHCg6JDQg5JEnCFwQmGFAnmAAQhMAAhOgIg");
	var mask_graphics_35 = new cjs.Graphics().p("EAybAz1QpEg7lunEQlwnEA8pDQA7pDHElvQHElvJDA7QJDA8FvHDQFvHEg7JDQg8JDnDFvQmFE9njAAQhOAAhRgJg");
	var mask_graphics_36 = new cjs.Graphics().p("EAzmAzSQpDg9lunGQltnEA9pDQA+pDHFluQHFltJDA+QJDA9FuHFQFtHFg+JDQg+JDnEFtQmEE5ngAAQhRAAhTgJg");
	var mask_graphics_37 = new cjs.Graphics().p("EA0wAyvQpCg/lsnHQlsnGBApDQBApCHGlsQHGlsJDBAQJDBAFsHGQFrHGhAJDQg/JDnGFrQmDE2ncAAQhUAAhXgKg");
	var mask_graphics_38 = new cjs.Graphics().p("EA17AyNQpChClqnIQlqnIBCpCQBCpCHHlrQHIlqJCBCQJDBCFqHIQFqHHhCJDQhCJCnHFqQmCEznZAAQhWAAhagKg");
	var mask_graphics_39 = new cjs.Graphics().p("EA3GAxqQpChElonKQlpnIBEpCQBEpDHKloQHIlpJCBFQJCBEFpHIQFoHJhEJDQhEJCnIFoQmBEvnWAAQhZAAhcgKg");
	var mask_graphics_40 = new cjs.Graphics().p("EA4RAxHQpChHlmnKQlnnKBGpCQBGpCHLlnQHJlmJCBGQJCBGFnHKQFnHLhGJBQhHJCnJFnQmAEsnTAAQhbAAhfgLg");
	var mask_graphics_41 = new cjs.Graphics().p("EA5cAwkQpChJlknLQlmnMBJpBQBIpCHMllQHLllJCBIQJBBJFmHLQFkHMhIJBQhIJCnMFlQl+EpnQAAQheAAhhgMg");
	var mask_graphics_42 = new cjs.Graphics().p("EA6nAwBQpBhLljnNQlknMBKpCQBLpBHNlkQHMljJCBLQJBBKFkHNQFjHNhLJBQhKJBnNFkQl9EmnMAAQhhAAhkgNg");
	var mask_graphics_43 = new cjs.Graphics().p("EA7yAveQpBhNlinOQlinOBNpBQBNpBHOliQHOliJBBNQJBBNFiHOQFhHOhMJBQhNJBnOFhQl8EjnJAAQhjAAhngNg");
	var mask_graphics_44 = new cjs.Graphics().p("EA89Au7QpBhPlgnPQlgnQBPpAQBOpBHQlgQHPlgJBBOQJBBPFgHPQFgHQhPJBQhPJAnPFgQl7EgnGAAQhmAAhpgOg");
	var mask_graphics_45 = new cjs.Graphics().p("EA+IAuYQpBhRlenRQlenQBQpBQBRpAHRlfQHRleJABRQJBBRFeHQQFeHRhRJAQhQJBnRFeQl6EdnDAAQhoAAhsgPg");
	var mask_graphics_46 = new cjs.Graphics().p("EA/TAt1QpAhTldnSQldnSBTpAQBTpAHSldQHSldJABTQJABTFdHSQFdHShTJAQhTJAnSFdQl5EanAAAQhrAAhugQg");
	var mask_graphics_47 = new cjs.Graphics().p("EBAeAtSQpAhVlbnUQlbnTBVpAQBVo/HUlbQHSlbJABVQJABVFbHTQFbHThVJAQhVJAnTFbQl3EWm+AAQhtAAhxgQg");
	var mask_graphics_48 = new cjs.Graphics().p("EBBpAsvQpAhYlZnUQlZnUBXpAQBXo/HVlaQHUlYI/BWQJABYFZHUQFZHUhXJAQhXI/nUFZQl2EUm7AAQhvAAh0gRg");
	var mask_graphics_49 = new cjs.Graphics().p("EBC0AsMQpAhalXnWQlYnVBao/QBZo/HWlYQHVlWJABYQI/BZFXHWQFYHWhaI/QhZI/nVFXQl1ERm4AAQhyAAh2gSg");
	var mask_graphics_50 = new cjs.Graphics().p("EBD+AroQo+hblWnXQlWnXBco/QBbo/HXlVQHXlVI/BaQI+BcFXHXQFVHXhbI+QhcI/nWFWQl0EOm1AAQh0AAh6gUg");
	var mask_graphics_51 = new cjs.Graphics().p("EBFJArFQo+hdlUnZQlUnYBdo+QBeo/HYlUQHYlTI/BeQI+BcFVHYQFTHZhdI+QheI/nYFUQlyEKmyAAQh3AAh8gUg");
	var mask_graphics_52 = new cjs.Graphics().p("EBGUAqiQo+hflSnaQlSnZBfo+QBgo/HalSQHZlRI+BgQI+BeFTHZQFSHahgI+QhgI+nZFSQlxEImvAAQh5AAh/gVg");
	var mask_graphics_53 = new cjs.Graphics().p("EBHfAp/Qo9hilRnbQlQnaBho+QBio+HblQQHalQI+BiQI+BhFRHaQFQHbhiI+QhiI+naFQQlwEFmsAAQh8AAiBgWg");
	var mask_graphics_54 = new cjs.Graphics().p("EBIqApcQo9hklPncQlPncBko9QBko+HclOQHclOI9BkQI9BkFQHaQFOHchkI+QhkI9nbFPQlvECmpAAQh+AAiEgXg");
	var mask_graphics_55 = new cjs.Graphics().p("EBJ1Ao5Qo9hmlNneQlNncBmo9QBmo+HdlNQHdlMI9BmQI9BmFNHcQFNHdhmI9QhmI9ncFNQluD/mmAAQiBAAiGgXg");
	var mask_graphics_56 = new cjs.Graphics().p("EBLAAoVQo8holLneQlMneBoo9QBoo8HflMQHelKI8BoQI9BoFLHdQFLHfhoI8QhoI9neFLQlsD8mjAAQiDAAiJgZg");
	var mask_graphics_57 = new cjs.Graphics().p("EBMLAnyQo8hqlJngQlKnfBqo8QBqo8HglKQHflII8BqQI9BqFJHeQFKHghrI8QhqI8nfFJQlrD6mgAAQiGAAiLgag");
	var mask_graphics_58 = new cjs.Graphics().p("EBNWAnPQo8hslHnhQlInhBso8QBso7HhlHQHhlII7BsQI8BtFIHfQFIHhhsI8QhtI8ngFHQlqD3mdAAQiIAAiOgbg");
	var mask_graphics_59 = new cjs.Graphics().p("EBOhAmsQo7hvlGniQlGnhBuo8QBuo7HilFQHilGI7BuQI8BuFGHhQFGHihuI7QhvI8nhFGQlpDzmaAAQiLAAiQgbg");
	var mask_graphics_60 = new cjs.Graphics().p("EBPsAmIQo7hwlEnjQlEnjBwo7QBwo7HklEQHjlEI7BxQI7BwFEHiQFEHjhwI7QhxI7njFEQlnDxmXAAQiNAAiTgdg");
	var mask_graphics_61 = new cjs.Graphics().p("EBQ3AllQo7hzlCnkQlCnkByo7QBzo6HklCQHklCI7BzQI6ByFDHjQFCHkhyI7QhzI7nkFCQllDumVAAQiQAAiVgeg");
	var mask_graphics_62 = new cjs.Graphics().p("EBSCAlCQo6h1lAnmQlBnlB0o6QB1o6HllAQHmlAI6B0QI6B1FBHkQFAHmh0I6Qh1I6nlFAQlkDsmSAAQiSAAiYgfg");
	var mask_graphics_63 = new cjs.Graphics().p("EBTNAkeQo6h3k+nmQlAnnB3o6QB3o5Hnk+QHmk/I6B3QI5B2E/HmQE/Hnh3I5Qh2I6nnE/QliDomPAAQiVAAiaggg");
	var mask_graphics_64 = new cjs.Graphics().p("EBPRAnYQo6h3k+nnQk/nmB2o6QB3o6Hnk+QHmk+I6B2QI6B3E/HlQE+Hnh2I6Qh3I6nmE+QljDpmPAAQiUAAibggg");
	var mask_graphics_65 = new cjs.Graphics().p("EBLVAqRQo5h2k/nnQk/nmB3o6QB2o6Hnk/QHmk+I6B3QI6B2E/HmQE+Hnh2I6Qh3I5nmE/QljDomPABQiUAAibghg");
	var mask_graphics_66 = new cjs.Graphics().p("EBHaAtLQo6h3k/nmQk/nnB3o5QB3o6Hmk/QHnk/I5B3QI6B2E/HnQE/Hnh3I5Qh3I6nmE/QljDomPAAQiUAAiaggg");
	var mask_graphics_67 = new cjs.Graphics().p("EBDeAwFQo6h3k+nnQk/nmB2o6QB3o5Hnk/QHmk/I6B3QI5B2E/HnQE/Hmh3I6Qh2I6nnE+QliDpmPAAQiVAAiaggg");
	var mask_graphics_68 = new cjs.Graphics().p("EA/iAy+Qo6h2k+nnQk/nmB2o6QB3o6Hnk/QHmk+I6B2QI6B3E/HmQE+Hnh2I6Qh3I5nmE/QljDpmPAAQiUAAibghg");
	var mask_graphics_69 = new cjs.Graphics().p("EA7mA14Qo5h2k/nnQk/nnB3o5QB2o6Hnk/QHmk/I6B3QI6B3E/HmQE/Hnh3I5Qh3I6nmE/QljDomPAAQiUAAibggg");
	var mask_graphics_70 = new cjs.Graphics().p("EA3rA4yQo6h3k/nnQk/nmB3o6QB3o5Hmk/QHnk/I5B3QI6B2E/HnQE/Hmh3I6Qh2I6nnE+QljDpmPAAQiUAAiaggg");
	var mask_graphics_71 = new cjs.Graphics().p("EAzvA7sQo6h3k+nnQk/nmB2o6QB3o6Hnk/QHmk+I6B2QI5B3FAHmQE+Hnh3I6Qh2I6nmE+QljDpmPAAQiVAAiaggg");
	var mask_graphics_72 = new cjs.Graphics().p("EAvzA+lQo5h2k/nnQk/nnB3o5QB2o6Hnk/QHmk/I6B3QI6B3E/HmQE+Hnh2I6Qh3I5nmE/QljDomPAAQiUAAibggg");
	var mask_graphics_73 = new cjs.Graphics().p("EAr4BBfQo6h3k/nmQk/nnB3o6QB2o5Hnk/QHnk/I5B3QI6B2E/HnQE/Hnh3I5Qh3I6nmE/QljDomPAAQiUAAiaggg");
	var mask_graphics_74 = new cjs.Graphics().p("EAn8BEZQo6h3k+nnQlAnmB3o6QB3o6Hnk/QHmk+I6B2QI5B3E/HmQE/Hnh3I6Qh2I6nnE+QljDpmOAAQiVAAiaggg");
	var mask_graphics_75 = new cjs.Graphics().p("EAkABHSQo6h2k+nnQk/nmB2o6QB3o6Hnk/QHmk/I6B3QI5B3FAHmQE+Hnh2I6Qh3I5nmE/QljDomPABQiVAAiaghg");
	var mask_graphics_76 = new cjs.Graphics().p("EAgEBKMQo5h3k/nmQk/nnB3o5QB2o6Hnk/QHmk/I6B3QI6B2E/HnQE+Hnh2I5Qh3I6nmE/QljDomPAAQiUAAibggg");
	var mask_graphics_77 = new cjs.Graphics().p("EAcJBNGQo6h3k/nnQk/nmB3o6QB2o5Hnk/QHnk/I5B3QI6B2E/HnQE/Hmh3I6Qh3I6nmE+QljDpmPAAQiUAAiaggg");
	var mask_graphics_78 = new cjs.Graphics().p("EAYNBP/Qo6h2k+nnQlAnmB3o6QB3o6Hnk/QHmk+I6B2QI5B3E/HmQE/Hnh3I6Qh2I5nnE/QliDpmPAAQiVAAiaghg");
	var mask_graphics_79 = new cjs.Graphics().p("EAZeBPdQo6h3k+nmQk/nnB2o6QB3o5Hnk/QHmk/I6B3QI5B2FAHnQE+Hnh3I5Qh2I6nnE/QliDomPAAQiVAAiaggg");
	var mask_graphics_80 = new cjs.Graphics().p("EAavBO7Qo6h3k+nnQk/nmB2o6QB3o6Hnk/QHmk+I6B2QI5B3FAHmQE+Hnh3I6Qh2I5nmE/QljDpmPAAQiVAAiaggg");
	var mask_graphics_81 = new cjs.Graphics().p("EAcABOYQo6h3k+nmQk/nnB2o5QB3o6Hnk/QHmk/I6B3QI6B2E/HnQE+Hnh2I5Qh3I6nmE/QljDomPAAQiUAAibggg");
	var mask_graphics_82 = new cjs.Graphics().p("EAdRBN2Qo6h3k+nnQk/nmB2o6QB3o6Hnk/QHmk+I6B2QI6B3E/HmQE+Hnh2I6Qh3I6nmE+QljDpmPAAQiUAAibggg");
	var mask_graphics_83 = new cjs.Graphics().p("EAeiBNTQo5h3k/nmQk/nnB3o5QB2o6Hnk/QHmk/I6B3QI6B3E/HmQE+Hnh2I5Qh3I6nmE/QljDomPAAQiUAAibggg");
	var mask_graphics_84 = new cjs.Graphics().p("EAfzBMxQo5h3k/nnQk/nmB3o6QB2o6Hnk/QHmk+I6B2QI6B3E/HmQE+Hnh2I6Qh3I6nmE+QljDpmPAAQiUAAibggg");
	var mask_graphics_85 = new cjs.Graphics().p("EAhEBMOQo5h3k/nmQk/nnB3o5QB2o6Hnk/QHnk/I5B3QI6B3E/HmQE/Hnh3I5Qh3I6nmE/QljDomPAAQiUAAibggg");
	var mask_graphics_86 = new cjs.Graphics().p("EAiWBLsQo6h3k/nnQk/nmB3o6QB2o6Hnk/QHnk+I5B2QI6B3E/HmQE/Hnh3I6Qh3I6nmE+QljDpmPAAQiUAAiaggg");
	var mask_graphics_87 = new cjs.Graphics().p("EAjnBLJQo6h2k/nnQk/nnB3o5QB3o6Hmk/QHnk/I5B3QI6B3E/HmQE/Hnh3I5Qh3I6nmE/QljDomPAAQiUAAiaggg");
	var mask_graphics_88 = new cjs.Graphics().p("EAk4BKnQo6h3k/nnQk/nmB3o6QB3o5Hmk/QHnk/I5B3QI6B2E/HnQE/Hmh3I6Qh2I6nnE+QljDpmOAAQiVAAiaggg");
	var mask_graphics_89 = new cjs.Graphics().p("EAmJBKEQo6h2k+nnQlAnnB3o5QB3o6Hnk/QHmk/I6B3QI5B3E/HmQE/Hnh3I6Qh2I5nnE/QljDomOAAQiVAAiaggg");
	var mask_graphics_90 = new cjs.Graphics().p("EAnaBJiQo6h3k+nnQk/nmB2o6QB3o5Hnk/QHmk/I6B3QI5B2E/HnQE/Hmh3I6Qh2I6nnE+QliDpmPAAQiVAAiaggg");
	var mask_graphics_91 = new cjs.Graphics().p("EAorBI/Qo6h2k+nnQk/nmB2o6QB3o6Hnk/QHmk/I6B3QI5B3FAHmQE+Hnh3I6Qh2I5nmE/QljDomPAAQiVAAiaggg");
	var mask_graphics_92 = new cjs.Graphics().p("EAp8BIdQo6h3k+nnQk/nmB2o6QB3o5Hnk/QHmk/I6B3QI6B2E/HnQE+Hmh2I6Qh3I6nmE+QljDpmPAAQiUAAibggg");
	var mask_graphics_93 = new cjs.Graphics().p("EArNBH6Qo6h2k+nnQk/nmB2o6QB3o6Hnk/QHmk+I6B2QI6B3E/HmQE+Hnh2I6Qh3I5nmE/QljDomPABQiUAAibghg");
	var mask_graphics_94 = new cjs.Graphics().p("EAseBHYQo5h3k/nnQk/nmB3o6QB2o5Hnk/QHmk/I6B3QI6B2E/HnQE+Hmh2I6Qh3I6nmE+QljDpmPAAQiUAAibggg");
	var mask_graphics_95 = new cjs.Graphics().p("EAtvBG1Qo5h2k/nnQk/nmB3o6QB2o6Hnk/QHmk+I6B2QI6B3E/HmQE+Hnh2I6Qh3I5nmE/QljDpmPAAQiUAAibghg");
	var mask_graphics_96 = new cjs.Graphics().p("EAvABGTQo5h3k/nmQk/nnB3o6QB2o5Hnk/QHmk/I6B3QI6B2E/HnQE/Hmh3I6Qh3I6nmE/QljDomPAAQiUAAibggg");
	var mask_graphics_97 = new cjs.Graphics().p("EAwSBFwQo6h2k/nnQk/nmB3o6QB2o6Hnk/QHnk+I5B2QI6B3E/HmQE/Hnh3I6Qh3I5nmE/QljDpmPAAQiUAAiaghg");
	var mask_graphics_98 = new cjs.Graphics().p("EAxjBFOQo6h3k/nmQk/nnB3o5QB3o6Hmk/QHnk/I5B3QI6B2E/HnQE/Hnh3I5Qh3I6nmE/QljDomPAAQiUAAiaggg");
	var mask_graphics_99 = new cjs.Graphics().p("EAy0BEsQo6h3k/nnQk/nmB3o6QB3o6Hmk/QHnk+I5B2QI6B3E/HmQE/Hnh3I6Qh2I5nnE/QljDpmOAAQiVAAiaggg");
	var mask_graphics_100 = new cjs.Graphics().p("EA0FBEJQo6h3k+nmQlAnnB3o5QB3o6Hnk/QHmk/I6B3QI5B2E/HnQE/Hnh3I5Qh2I6nnE/QljDomOAAQiVAAiaggg");
	var mask_graphics_101 = new cjs.Graphics().p("EA1WBDnQo6h3k+nnQk/nmB2o6QB3o6Hnk/QHmk+I6B2QI5B3E/HmQE/Hnh3I6Qh2I6nnE+QliDpmPAAQiVAAiaggg");
	var mask_graphics_102 = new cjs.Graphics().p("EA2nBDEQo6h3k+nmQk/nnB2o5QB3o6Hnk/QHmk/I6B3QI5B3FAHmQE+Hnh3I5Qh2I6nmE/QljDomPAAQiVAAiaggg");
	var mask_graphics_103 = new cjs.Graphics().p("EA34BCiQo6h3k+nnQk/nmB2o6QB3o6Hnk/QHmk+I6B2QI6B3E/HmQE+Hnh2I6Qh3I6nmE+QljDpmPAAQiVAAiaggg");
	var mask_graphics_104 = new cjs.Graphics().p("EA5JBB/Qo6h3k+nmQk/nnB2o5QB3o6Hnk/QHmk/I6B3QI6B3E/HmQE+Hnh2I5Qh3I6nmE/QljDomPAAQiUAAibggg");
	var mask_graphics_105 = new cjs.Graphics().p("EA6aBBdQo5h3k/nnQk/nmB3o6QB2o6Hnk/QHmk+I6B2QI6B3E/HmQE+Hnh2I6Qh3I6nmE+QljDpmPAAQiUAAibggg");
	var mask_graphics_106 = new cjs.Graphics().p("EA7rBA6Qo5h2k/nnQk/nnB3o5QB2o6Hnk/QHmk/I6B3QI6B3E/HmQE+Hnh2I5Qh3I6nmE/QljDomPAAQiUAAibggg");
	var mask_graphics_107 = new cjs.Graphics().p("EA88BAYQo5h3k/nnQk/nmB3o6QB2o5Hnk/QHmk/I6B3QI6B2E/HnQE/Hmh3I6Qh3I6nmE+QljDpmPAAQiUAAibggg");
	var mask_graphics_108 = new cjs.Graphics().p("EA+OA/1Qo6h2k/nnQk/nnB3o5QB2o6Hnk/QHnk/I5B3QI6B3E/HmQE/Hnh3I6Qh3I5nmE/QljDomPAAQiUAAiaggg");
	var mask_graphics_109 = new cjs.Graphics().p("EA/fA/TQo6h3k/nnQk/nmB3o6QB3o5Hmk/QHnk/I5B3QI6B2E/HnQE/Hmh3I6Qh3I6nmE+QljDpmPAAQiUAAiaggg");
	var mask_graphics_110 = new cjs.Graphics().p("EBAwA+wQo6h2k/nnQk/nmB3o6QB3o6Hmk/QHnk/I5B3QI6B3E/HmQE/Hnh3I6Qh2I5nnE/QljDomPAAQiUAAiaggg");
	var mask_graphics_111 = new cjs.Graphics().p("EBCBA+OQo6h3k+nnQlAnmB3o6QB3o5Hnk/QHmk/I6B3QI5B2E/HnQE/Hmh3I6Qh2I6nnE+QljDpmOAAQiVAAiaggg");
	var mask_graphics_112 = new cjs.Graphics().p("EBDSA9rQo6h2k+nnQlAnmB3o6QB3o6Hnk/QHmk+I6B2QI5B3E/HmQE/Hnh3I6Qh2I5nnE/QliDpmPAAQiVAAiaghg");
	var mask_graphics_113 = new cjs.Graphics().p("EBEjA9JQo6h3k+nnQk/nmB2o6QB3o5Hnk/QHmk/I6B3QI5B2FAHnQE+Hmh3I6Qh2I6nmE+QljDpmPAAQiVAAiaggg");
	var mask_graphics_114 = new cjs.Graphics().p("EBF0A8mQo6h2k+nnQk/nmB2o6QB3o6Hnk/QHmk+I6B2QI5B3FAHmQE+Hnh2I6Qh3I5nmE/QljDpmPAAQiVAAiaghg");
	var mask_graphics_115 = new cjs.Graphics().p("EBHFA8EQo6h3k+nmQk/nnB2o6QB3o5Hnk/QHmk/I6B3QI6B2E/HnQE+Hmh2I6Qh3I6nmE/QljDomPAAQiUAAibggg");
	var mask_graphics_116 = new cjs.Graphics().p("EBIWA7hQo5h2k/nnQk/nmB3o6QB2o6Hnk/QHmk+I6B2QI6B3E/HmQE+Hnh2I6Qh3I5nmE/QljDpmPAAQiUAAibghg");
	var mask_graphics_117 = new cjs.Graphics().p("EBJnA6/Qo5h3k/nmQk/nnB3o5QB2o6Hnk/QHmk/I6B3QI6B2E/HnQE+Hnh2I5Qh3I6nmE/QljDomPAAQiUAAibggg");
	var mask_graphics_118 = new cjs.Graphics().p("EBK4A6dQo5h3k/nnQk/nmB3o6QB2o6Hnk/QHmk+I6B2QI6B3E/HmQE/Hnh3I6Qh3I5nmE/QljDpmPAAQiUAAibggg");
	var mask_graphics_119 = new cjs.Graphics().p("EBMKA56Qo6h3k/nmQk/nnB3o5QB2o6Hnk/QHnk/I5B3QI6B2E/HnQE/Hnh3I5Qh3I6nmE/QljDomPAAQiUAAiaggg");
	var mask_graphics_120 = new cjs.Graphics().p("EBNbA5YQo6h3k/nnQk/nmB3o6QB2o6Hnk/QHnk+I5B2QI6B3E/HmQE/Hnh3I6Qh3I6nmE+QljDpmPAAQiUAAiaggg");
	var mask_graphics_121 = new cjs.Graphics().p("EBOsA41Qo6h3k/nmQk/nnB3o5QB3o6Hmk/QHnk/I5B3QI6B3E/HmQE/Hnh3I5Qh2I6nnE/QljDomPAAQiUAAiaggg");
	var mask_graphics_122 = new cjs.Graphics().p("EBP9A4TQo6h3k+nnQlAnmB3o6QB3o6Hnk/QHmk+I6B2QI5B3E/HmQE/Hnh3I6Qh2I6nnE+QljDpmOAAQiVAAiaggg");
	var mask_graphics_123 = new cjs.Graphics().p("EBROA3wQo6h2k+nnQlAnnB3o5QB3o6Hnk/QHmk/I6B3QI5B3E/HmQE/Hnh3I5Qh2I6nnE/QliDomPAAQiVAAiaggg");
	var mask_graphics_124 = new cjs.Graphics().p("EBSfA3OQo6h3k+nnQk/nmB2o6QB3o5HnlAQHmk+I6B2QI5B3FAHmQE+Hnh3I6Qh2I6nmE+QljDpmPAAQiVAAiaggg");
	var mask_graphics_125 = new cjs.Graphics().p("EBTwA2rQo6h2k+nnQk/nnB2o5QB3o6Hnk/QHmk/I6B3QI5B3FAHmQE+Hnh2I5Qh3I6nmE/QljDomPAAQiVAAiaggg");
	var mask_graphics_126 = new cjs.Graphics().p("EBVBA2JQo6h3k+nnQk/nmB2o6QB3o5Hnk/QHmk/I6B3QI6B2E/HnQE+Hmh2I6Qh3I6nmE+QljDpmPAAQiUAAibggg");
	var mask_graphics_127 = new cjs.Graphics().p("EBWSA1mQo5h2k/nnQk/nnB2o5QB3o6Hnk/QHmk/I6B3QI6B3E/HmQE+Hnh2I6Qh3I5nmE/QljDomPAAQiUAAibggg");
	var mask_graphics_128 = new cjs.Graphics().p("EBXjA1EQo5h3k/nnQk/nmB3o6QB2o5Hnk/QHmk/I6B3QI6B2E/HnQE+Hmh2I6Qh3I6nmE+QljDpmPAAQiUAAibggg");
	var mask_graphics_129 = new cjs.Graphics().p("EBY0A0hQo5h2k/nnQk/nmB3o6QB2o6Hnk/QHmk/I6B3QI6B3E/HmQE/Hnh3I6Qh3I5nmE/QljDomPAAQiUAAibggg");
	var mask_graphics_130 = new cjs.Graphics().p("EBaFAz/Qo5h3k/nnQk/nmB3o6QB2o5Hnk/QHnk/I5B3QI6B2E/HnQE/Hmh3I6Qh3I6nmE+QljDpmPAAQiUAAibggg");
	var mask_graphics_131 = new cjs.Graphics().p("EBbXAzcQo6h2k/nnQk/nmB3o6QB2o6Hnk/QHnk+I5B2QI6B3E/HmQE/Hnh3I6Qh3I5nmE/QljDpmPAAQiUAAiaghg");
	var mask_graphics_132 = new cjs.Graphics().p("EBcoAy6Qo6h3k/nnQk/nmB3o6QB3o5Hmk/QHnk/I5B3QI6B2E/HnQE/Hmh3I6Qh3I6nmE/QljDomPAAQiUAAiaggg");
	var mask_graphics_133 = new cjs.Graphics().p("EBd5AyXQo6h2k+nnQlAnmB3o6QB3o6Hnk/QHmk+I5B2QI6B3E/HmQE/Hnh3I6Qh2I5nnE/QljDpmOAAQiVAAiaghg");
	var mask_graphics_134 = new cjs.Graphics().p("EBfKAx1Qo6h3k+nmQlAnnB3o6QB3o5Hnk/QHmk/I6B3QI5B2E/HnQE/Hnh3I5Qh2I6nnE/QliDomPAAQiVAAiaggg");
	var mask_graphics_201 = new cjs.Graphics().p("EBfKAx1Qo5h3k+nmQk/nmB2o5QB3o6Hmk/QHmk+I6B3QI5B2E/HmQE+Hnh2I5Qh3I5nmE/QliDomPAAQiUAAibggg");
	var mask_graphics_202 = new cjs.Graphics().p("EBfKAx1Qo5h3k+nmQk/nmB2o6QB3o5Hmk/QHmk+I6B2QI5B3E/HmQE+Hmh2I6Qh3I5nmE/QliDomPAAQiUAAibggg");
	var mask_graphics_203 = new cjs.Graphics().p("EBfKAx1Qo5h3k/nmQk/nmB3o6QB3o5Hmk/QHmk+I6B2QI5B3E/HmQE+Hmh2I6Qh3I5nmE/QliDomPAAQiUAAibggg");
	var mask_graphics_204 = new cjs.Graphics().p("EBfKAx1Qo5h3k/nmQk/nmB3o6QB2o5Hnk/QHmk/I6B3QI5B2E/HnQE/Hmh3I6Qh3I5nmE/QliDomPAAQiUAAibggg");
	var mask_graphics_205 = new cjs.Graphics().p("EBfKAx1Qo5h3k/nmQk/nmB3o6QB2o5Hnk/QHmk/I6B3QI5B2E/HmQE/Hnh3I6Qh3I5nmE/QliDomPAAQiUAAibggg");
	var mask_graphics_206 = new cjs.Graphics().p("EBfKAx1Qo5h3k/nmQk/nnB3o5QB2o6Hnk/QHmk+I6B2QI5B3E/HmQE/Hnh3I5Qh2I6nnE/QliDomPAAQiVAAiaggg");
	var mask_graphics_207 = new cjs.Graphics().p("EBfKAx1Qo6h3k+nmQk/nnB2o5QB3o6Hnk/QHmk+I6B2QI5B3E/HmQE/Hnh3I5Qh2I6nnE/QliDomPAAQiVAAiaggg");
	var mask_graphics_208 = new cjs.Graphics().p("EBfKAx1Qo6h3k+nmQk/nnB2o5QB3o6Hnk/QHmk/I6B3QI5B3E/HmQE/Hnh3I5Qh2I6nnE/QliDomPAAQiVAAiaggg");
	var mask_graphics_209 = new cjs.Graphics().p("EBfKAx1Qo6h3k+nmQlAnnB3o6QB3o5Hnk/QHmk/I6B3QI5B2E/HnQE/Hnh3I5Qh2I6nnE/QliDomPAAQiVAAiaggg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(7).to({graphics:mask_graphics_7,x:253.55,y:428.5}).wait(1).to({graphics:mask_graphics_8,x:261.5534,y:425.0716}).wait(1).to({graphics:mask_graphics_9,x:269.557,y:421.6434}).wait(1).to({graphics:mask_graphics_10,x:277.5607,y:418.2154}).wait(1).to({graphics:mask_graphics_11,x:285.5645,y:414.7875}).wait(1).to({graphics:mask_graphics_12,x:293.5685,y:411.3597}).wait(1).to({graphics:mask_graphics_13,x:301.5727,y:407.9321}).wait(1).to({graphics:mask_graphics_14,x:309.5769,y:404.5046}).wait(1).to({graphics:mask_graphics_15,x:317.5813,y:401.0773}).wait(1).to({graphics:mask_graphics_16,x:325.5859,y:397.65}).wait(1).to({graphics:mask_graphics_17,x:333.5905,y:394.2229}).wait(1).to({graphics:mask_graphics_18,x:341.5953,y:390.7959}).wait(1).to({graphics:mask_graphics_19,x:349.6002,y:387.369}).wait(1).to({graphics:mask_graphics_20,x:357.6051,y:383.9422}).wait(1).to({graphics:mask_graphics_21,x:365.6102,y:380.5155}).wait(1).to({graphics:mask_graphics_22,x:373.6154,y:377.089}).wait(1).to({graphics:mask_graphics_23,x:381.6207,y:373.6625}).wait(1).to({graphics:mask_graphics_24,x:389.6261,y:370.2361}).wait(1).to({graphics:mask_graphics_25,x:397.6315,y:366.8098}).wait(1).to({graphics:mask_graphics_26,x:405.6371,y:363.3835}).wait(1).to({graphics:mask_graphics_27,x:413.6427,y:359.9574}).wait(1).to({graphics:mask_graphics_28,x:421.6484,y:356.5313}).wait(1).to({graphics:mask_graphics_29,x:429.6542,y:353.1053}).wait(1).to({graphics:mask_graphics_30,x:437.66,y:349.6794}).wait(1).to({graphics:mask_graphics_31,x:445.6659,y:346.2535}).wait(1).to({graphics:mask_graphics_32,x:453.6719,y:342.8277}).wait(1).to({graphics:mask_graphics_33,x:461.6779,y:339.4019}).wait(1).to({graphics:mask_graphics_34,x:469.684,y:335.9762}).wait(1).to({graphics:mask_graphics_35,x:477.6901,y:332.5505}).wait(1).to({graphics:mask_graphics_36,x:485.6963,y:329.1249}).wait(1).to({graphics:mask_graphics_37,x:493.7025,y:325.6994}).wait(1).to({graphics:mask_graphics_38,x:501.7088,y:322.2738}).wait(1).to({graphics:mask_graphics_39,x:509.7151,y:318.8483}).wait(1).to({graphics:mask_graphics_40,x:517.7214,y:315.4229}).wait(1).to({graphics:mask_graphics_41,x:525.7278,y:311.9975}).wait(1).to({graphics:mask_graphics_42,x:533.7342,y:308.5721}).wait(1).to({graphics:mask_graphics_43,x:541.7406,y:305.1467}).wait(1).to({graphics:mask_graphics_44,x:549.7471,y:301.7214}).wait(1).to({graphics:mask_graphics_45,x:557.7535,y:298.296}).wait(1).to({graphics:mask_graphics_46,x:565.76,y:294.8707}).wait(1).to({graphics:mask_graphics_47,x:573.7665,y:291.4454}).wait(1).to({graphics:mask_graphics_48,x:581.773,y:288.0201}).wait(1).to({graphics:mask_graphics_49,x:589.7795,y:284.5948}).wait(1).to({graphics:mask_graphics_50,x:597.7861,y:281.1696}).wait(1).to({graphics:mask_graphics_51,x:605.7926,y:277.7443}).wait(1).to({graphics:mask_graphics_52,x:613.7991,y:274.319}).wait(1).to({graphics:mask_graphics_53,x:621.8057,y:270.8937}).wait(1).to({graphics:mask_graphics_54,x:629.8122,y:267.4685}).wait(1).to({graphics:mask_graphics_55,x:637.8187,y:264.0432}).wait(1).to({graphics:mask_graphics_56,x:645.8252,y:260.6179}).wait(1).to({graphics:mask_graphics_57,x:653.8317,y:257.1926}).wait(1).to({graphics:mask_graphics_58,x:661.8382,y:253.7672}).wait(1).to({graphics:mask_graphics_59,x:669.8447,y:250.3419}).wait(1).to({graphics:mask_graphics_60,x:677.8511,y:246.9166}).wait(1).to({graphics:mask_graphics_61,x:685.8576,y:243.4912}).wait(1).to({graphics:mask_graphics_62,x:693.864,y:240.0658}).wait(1).to({graphics:mask_graphics_63,x:701.85,y:236.6098}).wait(1).to({graphics:mask_graphics_64,x:676.6777,y:255.1808}).wait(1).to({graphics:mask_graphics_65,x:651.5043,y:273.7508}).wait(1).to({graphics:mask_graphics_66,x:626.331,y:292.3208}).wait(1).to({graphics:mask_graphics_67,x:601.1577,y:310.8908}).wait(1).to({graphics:mask_graphics_68,x:575.9843,y:329.4608}).wait(1).to({graphics:mask_graphics_69,x:550.811,y:348.0308}).wait(1).to({graphics:mask_graphics_70,x:525.6377,y:366.6008}).wait(1).to({graphics:mask_graphics_71,x:500.4643,y:385.1708}).wait(1).to({graphics:mask_graphics_72,x:475.291,y:403.7408}).wait(1).to({graphics:mask_graphics_73,x:450.1177,y:422.3108}).wait(1).to({graphics:mask_graphics_74,x:424.9443,y:440.8808}).wait(1).to({graphics:mask_graphics_75,x:399.771,y:459.4508}).wait(1).to({graphics:mask_graphics_76,x:374.5977,y:478.0208}).wait(1).to({graphics:mask_graphics_77,x:349.4243,y:496.5908}).wait(1).to({graphics:mask_graphics_78,x:324.25,y:515.1598}).wait(1).to({graphics:mask_graphics_79,x:332.3599,y:511.7135}).wait(1).to({graphics:mask_graphics_80,x:340.4689,y:508.2662}).wait(1).to({graphics:mask_graphics_81,x:348.5778,y:504.8189}).wait(1).to({graphics:mask_graphics_82,x:356.6867,y:501.3715}).wait(1).to({graphics:mask_graphics_83,x:364.7957,y:497.9242}).wait(1).to({graphics:mask_graphics_84,x:372.9046,y:494.4769}).wait(1).to({graphics:mask_graphics_85,x:381.0135,y:491.0296}).wait(1).to({graphics:mask_graphics_86,x:389.1224,y:487.5822}).wait(1).to({graphics:mask_graphics_87,x:397.2314,y:484.1349}).wait(1).to({graphics:mask_graphics_88,x:405.3403,y:480.6876}).wait(1).to({graphics:mask_graphics_89,x:413.4492,y:477.2403}).wait(1).to({graphics:mask_graphics_90,x:421.5582,y:473.793}).wait(1).to({graphics:mask_graphics_91,x:429.6671,y:470.3456}).wait(1).to({graphics:mask_graphics_92,x:437.776,y:466.8983}).wait(1).to({graphics:mask_graphics_93,x:445.8849,y:463.451}).wait(1).to({graphics:mask_graphics_94,x:453.9939,y:460.0037}).wait(1).to({graphics:mask_graphics_95,x:462.1028,y:456.5564}).wait(1).to({graphics:mask_graphics_96,x:470.2117,y:453.109}).wait(1).to({graphics:mask_graphics_97,x:478.3207,y:449.6617}).wait(1).to({graphics:mask_graphics_98,x:486.4296,y:446.2144}).wait(1).to({graphics:mask_graphics_99,x:494.5385,y:442.7671}).wait(1).to({graphics:mask_graphics_100,x:502.6474,y:439.3197}).wait(1).to({graphics:mask_graphics_101,x:510.7564,y:435.8724}).wait(1).to({graphics:mask_graphics_102,x:518.8653,y:432.4251}).wait(1).to({graphics:mask_graphics_103,x:526.9742,y:428.9778}).wait(1).to({graphics:mask_graphics_104,x:535.0832,y:425.5305}).wait(1).to({graphics:mask_graphics_105,x:543.1921,y:422.0831}).wait(1).to({graphics:mask_graphics_106,x:551.301,y:418.6358}).wait(1).to({graphics:mask_graphics_107,x:559.4099,y:415.1885}).wait(1).to({graphics:mask_graphics_108,x:567.5189,y:411.7412}).wait(1).to({graphics:mask_graphics_109,x:575.6278,y:408.2939}).wait(1).to({graphics:mask_graphics_110,x:583.7367,y:404.8465}).wait(1).to({graphics:mask_graphics_111,x:591.8457,y:401.3992}).wait(1).to({graphics:mask_graphics_112,x:599.9546,y:397.9519}).wait(1).to({graphics:mask_graphics_113,x:608.0635,y:394.5046}).wait(1).to({graphics:mask_graphics_114,x:616.1724,y:391.0572}).wait(1).to({graphics:mask_graphics_115,x:624.2814,y:387.6099}).wait(1).to({graphics:mask_graphics_116,x:632.3903,y:384.1626}).wait(1).to({graphics:mask_graphics_117,x:640.4992,y:380.7153}).wait(1).to({graphics:mask_graphics_118,x:648.6082,y:377.268}).wait(1).to({graphics:mask_graphics_119,x:656.7171,y:373.8206}).wait(1).to({graphics:mask_graphics_120,x:664.826,y:370.3733}).wait(1).to({graphics:mask_graphics_121,x:672.9349,y:366.926}).wait(1).to({graphics:mask_graphics_122,x:681.0439,y:363.4787}).wait(1).to({graphics:mask_graphics_123,x:689.1528,y:360.0314}).wait(1).to({graphics:mask_graphics_124,x:697.2617,y:356.584}).wait(1).to({graphics:mask_graphics_125,x:705.3707,y:353.1367}).wait(1).to({graphics:mask_graphics_126,x:713.4796,y:349.6894}).wait(1).to({graphics:mask_graphics_127,x:721.5885,y:346.2421}).wait(1).to({graphics:mask_graphics_128,x:729.6974,y:342.7947}).wait(1).to({graphics:mask_graphics_129,x:737.8064,y:339.3474}).wait(1).to({graphics:mask_graphics_130,x:745.9153,y:335.9001}).wait(1).to({graphics:mask_graphics_131,x:754.0242,y:332.4528}).wait(1).to({graphics:mask_graphics_132,x:762.1332,y:329.0055}).wait(1).to({graphics:mask_graphics_133,x:770.2421,y:325.5581}).wait(1).to({graphics:mask_graphics_134,x:778.35,y:322.1098}).wait(67).to({graphics:mask_graphics_201,x:778.2943,y:322.1076}).wait(1).to({graphics:mask_graphics_202,x:778.3025,y:322.1092}).wait(1).to({graphics:mask_graphics_203,x:778.3094,y:322.1094}).wait(1).to({graphics:mask_graphics_204,x:778.3164,y:322.1096}).wait(1).to({graphics:mask_graphics_205,x:778.3233,y:322.1099}).wait(1).to({graphics:mask_graphics_206,x:778.3302,y:322.1101}).wait(1).to({graphics:mask_graphics_207,x:778.3371,y:322.1103}).wait(1).to({graphics:mask_graphics_208,x:778.3441,y:322.1106}).wait(1).to({graphics:mask_graphics_209,x:778.35,y:322.1098}).wait(1));

	// 文字放大
	this.instance_2 = new lib.元件4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(960.75,580.2,1,1,0,0,0,440.8,283.8);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).wait(194).to({alpha:0},8).wait(1));

	// 圖層 6 複製 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_7 = new cjs.Graphics().p("EACIA8hQmcmbAApHQAApGGcmcQGbmcJGAAQJHAAGcGcQGcGcgBJGQABJHmcGbQmcGcpHAAQpGAAmbmcg");
	var mask_1_graphics_8 = new cjs.Graphics().p("EAS0BCbQpGgCmameQmamdADpGQACpHGcmaQGdmaJHACQJGACGbGdQGaGdgCJHQgDJGmdGaQmbGZpDAAIgGAAg");
	var mask_1_graphics_9 = new cjs.Graphics().p("EAT/BB4QpGgEmZmfQmYmeAFpHQAEpGGemZQGemZJHAFQJGAEGZGeQGZGfgEJHQgFJGmeGZQmbGUo/AAIgMAAg");
	var mask_1_graphics_10 = new cjs.Graphics().p("EAVKBBWQpGgGmXmhQmXmgAHpGQAGpHGgmXQGgmXJGAGQJHAHGXGgQGXGggGJHQgHJGmgGXQmaGRo7AAIgSAAg");
	var mask_1_graphics_11 = new cjs.Graphics().p("EAWVBA0QpGgJmWmiQmWmhAJpHQAJpGGhmWQGimVJGAIQJHAJGWGhQGVGigJJHQgIJGmiGVQmZGOo3AAIgYAAg");
	var mask_1_graphics_12 = new cjs.Graphics().p("EAXgBARQpGgKmUmkQmVmjALpGQALpGGjmVQGjmUJHALQJGALGUGjQGUGjgLJGQgKJHmjGUQmZGKozAAIgegBg");
	var mask_1_graphics_13 = new cjs.Graphics().p("EAYrA/vQpGgNmTmlQmTmkANpHQANpGGlmTQGkmSJHANQJGANGTGkQGSGlgNJGQgMJHmlGSQmYGGovAAIgkAAg");
	var mask_1_graphics_14 = new cjs.Graphics().p("EAZ2A/NQpGgPmRmnQmRmmAPpGQAOpGGnmRQGmmRJGAPQJGAPGRGmQGRGmgPJGQgPJGmmGRQmXGDosAAIgpAAg");
	var mask_1_graphics_15 = new cjs.Graphics().p("EAbBA+qQpGgRmQmoQmPmnARpGQARpHGomPQGnmPJGARQJGARGQGnQGPGogRJGQgRJGmnGPQmXGAooAAIgvgBg");
	var mask_1_graphics_16 = new cjs.Graphics().p("EAcMA+IQpHgUmNmpQmOmpATpGQATpGGpmOQGpmOJGAUQJGATGPGpQGNGpgTJGQgTJGmpGOQmWF7okAAIg1AAg");
	var mask_1_graphics_17 = new cjs.Graphics().p("EAdWA9lQpGgVmMmrQmMmqAVpGQAWpGGqmNQGrmMJGAWQJGAVGMGqQGMGrgVJGQgWJGmqGMQmVF4ogAAIg8gBg");
	var mask_1_graphics_18 = new cjs.Graphics().p("EAehA9DQpGgYmKmsQmLmsAXpGQAYpGGsmLQGsmKJGAXQJGAYGLGsQGKGsgXJGQgYJGmsGKQmUF1odAAIhBgBg");
	var mask_1_graphics_19 = new cjs.Graphics().p("EAfsA8gQpGgZmImuQmKmtAapGQAZpGGumJQGtmJJGAZQJGAaGJGtQGJGugaJGQgZJFmtGJQmUFyoZAAQgjAAgkgCg");
	var mask_1_graphics_20 = new cjs.Graphics().p("EAg3A7+QpGgcmHmvQmImvAcpFQAcpGGvmIQGumHJGAbQJGAcGIGvQGHGvgcJFQgcJGmuGIQmTFtoWAAQglAAgngBg");
	var mask_1_graphics_21 = new cjs.Graphics().p("EAiCA7bQpGgemFmwQmHmwAepGQAepFGxmHQGwmFJFAdQJGAeGGGwQGGGxgeJFQgeJGmwGGQmSFqoSAAQgpAAgpgCg");
	var mask_1_graphics_22 = new cjs.Graphics().p("EAjNA64QpGggmEmxQmEmyAgpFQAgpGGymEQGxmFJFAgQJGAgGFGyQGEGyggJFQggJGmyGEQmRFnoOAAQgsAAgsgDg");
	var mask_1_graphics_23 = new cjs.Graphics().p("EAkYA6WQpFgimDm0QmDmyAipGQAipFG0mDQGymDJGAiQJFAjGDGyQGDG0gjJFQgiJFmzGDQmQFkoLAAQguAAgvgDg");
	var mask_1_graphics_24 = new cjs.Graphics().p("EAljA5zQpFgkmBm1QmCm0AkpFQAlpFG0mCQG1mBJFAlQJFAkGBG0QGBG1gkJFQgkJFm0GBQmQFgoHAAQgxAAgygDg");
	var mask_1_graphics_25 = new cjs.Graphics().p("EAmuA5RQpFgnmAm2QmAm2AnpFQAmpFG2l/QG2mAJFAnQJFAmGAG2QF/G2gmJFQgnJFm1F/QmOFdoFAAQg0AAg0gDg");
	var mask_1_graphics_26 = new cjs.Graphics().p("EAn5A4uQpFgpl+m3Ql+m3AopFQAppFG3l+QG3l+JFApQJFAoF+G3QF+G4gpJFQgoJFm3F9QmNFaoBAAQg3AAg3gEg");
	var mask_1_graphics_27 = new cjs.Graphics().p("EApDA4LQpEgql8m5Ql9m5ArpEQAqpFG5l9QG5l8JEArQJFAqF9G5QF8G5grJFQgrJEm4F8QmMFXn+AAQg5AAg7gFg");
	var mask_1_graphics_28 = new cjs.Graphics().p("EAqOA3pQpEgtl7m6Ql7m6AtpFQAtpEG6l7QG6l7JFAtQJEAtF7G6QF7G6gtJEQgtJFm6F6QmLFTn7AAQg7AAg+gEg");
	var mask_1_graphics_29 = new cjs.Graphics().p("EArZA3GQpEgvl5m8Ql5m7AvpEQAupFG8l5QG7l5JFAvQJEAvF5G7QF5G8gvJEQgvJFm7F4QmKFQn3AAQg/AAhAgFg");
	var mask_1_graphics_30 = new cjs.Graphics().p("EAskA2jQpEgxl3m9Ql4m8AxpFQAxpEG9l4QG9l3JEAxQJEAxF4G9QF3G9gxJEQgxJEm9F3QmJFNn0AAQhBAAhDgGg");
	var mask_1_graphics_31 = new cjs.Graphics().p("EAtvA2AQpEgzl2m+Ql2m+A0pEQAzpEG+l2QG+l2JEAzQJEA0F2G+QF2G+g0JEQgzJEm+F2QmIFJnwAAQhEAAhGgHg");
	var mask_1_graphics_32 = new cjs.Graphics().p("EAu6A1eQpEg2l0m/Ql0nAA1pEQA1pDHAl1QG/l0JEA2QJEA1F0G/QF0HAg1JEQg1JEm/F0QmIFFntAAQhGAAhJgGg");
	var mask_1_graphics_33 = new cjs.Graphics().p("EAwFA07QpEg4lynBQlznAA4pEQA3pEHBlyQHBlzJDA4QJEA3FzHBQFyHBg3JEQg4JDnAFyQmHFDnqAAQhJAAhLgHg");
	var mask_1_graphics_34 = new cjs.Graphics().p("EAxQA0YQpEg6lwnCQlxnCA5pDQA6pEHClxQHClwJEA5QJDA6FxHCQFxHCg6JDQg5JEnCFwQmGFAnmAAQhMAAhOgIg");
	var mask_1_graphics_35 = new cjs.Graphics().p("EAybAz1QpEg7lunEQlwnEA8pDQA7pDHElvQHElvJDA7QJDA8FvHDQFvHEg7JDQg8JDnDFvQmFE9njAAQhOAAhRgJg");
	var mask_1_graphics_36 = new cjs.Graphics().p("EAzmAzSQpDg9lunGQltnEA9pDQA+pDHFluQHFltJDA+QJDA9FuHFQFtHFg+JDQg+JDnEFtQmEE5ngAAQhRAAhTgJg");
	var mask_1_graphics_37 = new cjs.Graphics().p("EA0wAyvQpCg/lsnHQlsnGBApDQBApCHGlsQHGlsJDBAQJDBAFsHGQFrHGhAJDQg/JDnGFrQmDE2ncAAQhUAAhXgKg");
	var mask_1_graphics_38 = new cjs.Graphics().p("EA17AyNQpChClqnIQlqnIBCpCQBCpCHHlrQHIlqJCBCQJDBCFqHIQFqHHhCJDQhCJCnHFqQmCEznZAAQhWAAhagKg");
	var mask_1_graphics_39 = new cjs.Graphics().p("EA3GAxqQpChElonKQlpnIBEpCQBEpDHKloQHIlpJCBFQJCBEFpHIQFoHJhEJDQhEJCnIFoQmBEvnWAAQhZAAhcgKg");
	var mask_1_graphics_40 = new cjs.Graphics().p("EA4RAxHQpChHlmnKQlnnKBGpCQBGpCHLlnQHJlmJCBGQJCBGFnHKQFnHLhGJBQhHJCnJFnQmAEsnTAAQhbAAhfgLg");
	var mask_1_graphics_41 = new cjs.Graphics().p("EA5cAwkQpChJlknLQlmnMBJpBQBIpCHMllQHLllJCBIQJBBJFmHLQFkHMhIJBQhIJCnMFlQl+EpnQAAQheAAhhgMg");
	var mask_1_graphics_42 = new cjs.Graphics().p("EA6nAwBQpBhLljnNQlknMBKpCQBLpBHNlkQHMljJCBLQJBBKFkHNQFjHNhLJBQhKJBnNFkQl9EmnMAAQhhAAhkgNg");
	var mask_1_graphics_43 = new cjs.Graphics().p("EA7yAveQpBhNlinOQlinOBNpBQBNpBHOliQHOliJBBNQJBBNFiHOQFhHOhMJBQhNJBnOFhQl8EjnJAAQhjAAhngNg");
	var mask_1_graphics_44 = new cjs.Graphics().p("EA89Au7QpBhPlgnPQlgnQBPpAQBOpBHQlgQHPlgJBBOQJBBPFgHPQFgHQhPJBQhPJAnPFgQl7EgnGAAQhmAAhpgOg");
	var mask_1_graphics_45 = new cjs.Graphics().p("EA+IAuYQpBhRlenRQlenQBQpBQBRpAHRlfQHRleJABRQJBBRFeHQQFeHRhRJAQhQJBnRFeQl6EdnDAAQhoAAhsgPg");
	var mask_1_graphics_46 = new cjs.Graphics().p("EA/TAt1QpAhTldnSQldnSBTpAQBTpAHSldQHSldJABTQJABTFdHSQFdHShTJAQhTJAnSFdQl5EanAAAQhrAAhugQg");
	var mask_1_graphics_47 = new cjs.Graphics().p("EBAeAtSQpAhVlbnUQlbnTBVpAQBVo/HUlbQHSlbJABVQJABVFbHTQFbHThVJAQhVJAnTFbQl3EWm+AAQhtAAhxgQg");
	var mask_1_graphics_48 = new cjs.Graphics().p("EBBpAsvQpAhYlZnUQlZnUBXpAQBXo/HVlaQHUlYI/BWQJABYFZHUQFZHUhXJAQhXI/nUFZQl2EUm7AAQhvAAh0gRg");
	var mask_1_graphics_49 = new cjs.Graphics().p("EBC0AsMQpAhalXnWQlYnVBao/QBZo/HWlYQHVlWJABYQI/BZFXHWQFYHWhaI/QhZI/nVFXQl1ERm4AAQhyAAh2gSg");
	var mask_1_graphics_50 = new cjs.Graphics().p("EBD+AroQo+hblWnXQlWnXBco/QBbo/HXlVQHXlVI/BaQI+BcFXHXQFVHXhbI+QhcI/nWFWQl0EOm1AAQh0AAh6gUg");
	var mask_1_graphics_51 = new cjs.Graphics().p("EBFJArFQo+hdlUnZQlUnYBdo+QBeo/HYlUQHYlTI/BeQI+BcFVHYQFTHZhdI+QheI/nYFUQlyEKmyAAQh3AAh8gUg");
	var mask_1_graphics_52 = new cjs.Graphics().p("EBGUAqiQo+hflSnaQlSnZBfo+QBgo/HalSQHZlRI+BgQI+BeFTHZQFSHahgI+QhgI+nZFSQlxEImvAAQh5AAh/gVg");
	var mask_1_graphics_53 = new cjs.Graphics().p("EBHfAp/Qo9hilRnbQlQnaBho+QBio+HblQQHalQI+BiQI+BhFRHaQFQHbhiI+QhiI+naFQQlwEFmsAAQh8AAiBgWg");
	var mask_1_graphics_54 = new cjs.Graphics().p("EBIqApcQo9hklPncQlPncBko9QBko+HclOQHclOI9BkQI9BkFQHaQFOHchkI+QhkI9nbFPQlvECmpAAQh+AAiEgXg");
	var mask_1_graphics_55 = new cjs.Graphics().p("EBJ1Ao5Qo9hmlNneQlNncBmo9QBmo+HdlNQHdlMI9BmQI9BmFNHcQFNHdhmI9QhmI9ncFNQluD/mmAAQiBAAiGgXg");
	var mask_1_graphics_56 = new cjs.Graphics().p("EBLAAoVQo8holLneQlMneBoo9QBoo8HflMQHelKI8BoQI9BoFLHdQFLHfhoI8QhoI9neFLQlsD8mjAAQiDAAiJgZg");
	var mask_1_graphics_57 = new cjs.Graphics().p("EBMLAnyQo8hqlJngQlKnfBqo8QBqo8HglKQHflII8BqQI9BqFJHeQFKHghrI8QhqI8nfFJQlrD6mgAAQiGAAiLgag");
	var mask_1_graphics_58 = new cjs.Graphics().p("EBNWAnPQo8hslHnhQlInhBso8QBso7HhlHQHhlII7BsQI8BtFIHfQFIHhhsI8QhtI8ngFHQlqD3mdAAQiIAAiOgbg");
	var mask_1_graphics_59 = new cjs.Graphics().p("EBOhAmsQo7hvlGniQlGnhBuo8QBuo7HilFQHilGI7BuQI8BuFGHhQFGHihuI7QhvI8nhFGQlpDzmaAAQiLAAiQgbg");
	var mask_1_graphics_60 = new cjs.Graphics().p("EBPsAmIQo7hwlEnjQlEnjBwo7QBwo7HklEQHjlEI7BxQI7BwFEHiQFEHjhwI7QhxI7njFEQlnDxmXAAQiNAAiTgdg");
	var mask_1_graphics_61 = new cjs.Graphics().p("EBQ3AllQo7hzlCnkQlCnkByo7QBzo6HklCQHklCI7BzQI6ByFDHjQFCHkhyI7QhzI7nkFCQllDumVAAQiQAAiVgeg");
	var mask_1_graphics_62 = new cjs.Graphics().p("EBSCAlCQo6h1lAnmQlBnlB0o6QB1o6HllAQHmlAI6B0QI6B1FBHkQFAHmh0I6Qh1I6nlFAQlkDsmSAAQiSAAiYgfg");
	var mask_1_graphics_63 = new cjs.Graphics().p("EBTNAkeQo6h3k+nmQlAnnB3o6QB3o5Hnk+QHmk/I6B3QI5B2E/HmQE/Hnh3I5Qh2I6nnE/QliDomPAAQiVAAiaggg");
	var mask_1_graphics_64 = new cjs.Graphics().p("EBPRAnYQo6h3k+nnQk/nmB2o6QB3o6Hnk+QHmk+I6B2QI6B3E/HlQE+Hnh2I6Qh3I6nmE+QljDpmPAAQiUAAibggg");
	var mask_1_graphics_65 = new cjs.Graphics().p("EBLVAqRQo5h2k/nnQk/nmB3o6QB2o6Hnk/QHmk+I6B3QI6B2E/HmQE+Hnh2I6Qh3I5nmE/QljDomPABQiUAAibghg");
	var mask_1_graphics_66 = new cjs.Graphics().p("EBHaAtLQo6h3k/nmQk/nnB3o5QB3o6Hmk/QHnk/I5B3QI6B2E/HnQE/Hnh3I5Qh3I6nmE/QljDomPAAQiUAAiaggg");
	var mask_1_graphics_67 = new cjs.Graphics().p("EBDeAwFQo6h3k+nnQk/nmB2o6QB3o5Hnk/QHmk/I6B3QI5B2E/HnQE/Hmh3I6Qh2I6nnE+QliDpmPAAQiVAAiaggg");
	var mask_1_graphics_68 = new cjs.Graphics().p("EA/iAy+Qo6h2k+nnQk/nmB2o6QB3o6Hnk/QHmk+I6B2QI6B3E/HmQE+Hnh2I6Qh3I5nmE/QljDpmPAAQiUAAibghg");
	var mask_1_graphics_69 = new cjs.Graphics().p("EA7mA14Qo5h2k/nnQk/nnB3o5QB2o6Hnk/QHmk/I6B3QI6B3E/HmQE/Hnh3I5Qh3I6nmE/QljDomPAAQiUAAibggg");
	var mask_1_graphics_70 = new cjs.Graphics().p("EA3rA4yQo6h3k/nnQk/nmB3o6QB3o5Hmk/QHnk/I5B3QI6B2E/HnQE/Hmh3I6Qh2I6nnE+QljDpmPAAQiUAAiaggg");
	var mask_1_graphics_71 = new cjs.Graphics().p("EAzvA7sQo6h3k+nnQk/nmB2o6QB3o6Hnk/QHmk+I6B2QI5B3FAHmQE+Hnh3I6Qh2I6nmE+QljDpmPAAQiVAAiaggg");
	var mask_1_graphics_72 = new cjs.Graphics().p("EAvzA+lQo5h2k/nnQk/nnB3o5QB2o6Hnk/QHmk/I6B3QI6B3E/HmQE+Hnh2I6Qh3I5nmE/QljDomPAAQiUAAibggg");
	var mask_1_graphics_73 = new cjs.Graphics().p("EAr4BBfQo6h3k/nmQk/nnB3o6QB2o5Hnk/QHnk/I5B3QI6B2E/HnQE/Hnh3I5Qh3I6nmE/QljDomPAAQiUAAiaggg");
	var mask_1_graphics_74 = new cjs.Graphics().p("EAn8BEZQo6h3k+nnQlAnmB3o6QB3o6Hnk/QHmk+I6B2QI5B3E/HmQE/Hnh3I6Qh2I6nnE+QljDpmOAAQiVAAiaggg");
	var mask_1_graphics_75 = new cjs.Graphics().p("EAkABHSQo6h2k+nnQk/nmB2o6QB3o6Hnk/QHmk/I6B3QI5B3FAHmQE+Hnh2I6Qh3I5nmE/QljDomPABQiVAAiaghg");
	var mask_1_graphics_76 = new cjs.Graphics().p("EAgEBKMQo5h3k/nmQk/nnB3o5QB2o6Hnk/QHmk/I6B3QI6B2E/HnQE+Hnh2I5Qh3I6nmE/QljDomPAAQiUAAibggg");
	var mask_1_graphics_77 = new cjs.Graphics().p("EAcJBNGQo6h3k/nnQk/nmB3o6QB2o5Hnk/QHnk/I5B3QI6B2E/HnQE/Hmh3I6Qh3I6nmE+QljDpmPAAQiUAAiaggg");
	var mask_1_graphics_78 = new cjs.Graphics().p("EAYNBP/Qo6h2k+nnQlAnmB3o6QB3o6Hnk/QHmk+I6B2QI5B3E/HmQE/Hnh3I6Qh2I5nnE/QliDpmPAAQiVAAiaghg");
	var mask_1_graphics_79 = new cjs.Graphics().p("EAZeBPdQo6h3k+nmQk/nnB2o6QB3o5Hnk/QHmk/I6B3QI5B2FAHnQE+Hnh3I5Qh2I6nnE/QliDomPAAQiVAAiaggg");
	var mask_1_graphics_80 = new cjs.Graphics().p("EAavBO7Qo6h3k+nnQk/nmB2o6QB3o6Hnk/QHmk+I6B2QI5B3FAHmQE+Hnh3I6Qh2I5nmE/QljDpmPAAQiVAAiaggg");
	var mask_1_graphics_81 = new cjs.Graphics().p("EAcABOYQo6h3k+nmQk/nnB2o5QB3o6Hnk/QHmk/I6B3QI6B2E/HnQE+Hnh2I5Qh3I6nmE/QljDomPAAQiUAAibggg");
	var mask_1_graphics_82 = new cjs.Graphics().p("EAdRBN2Qo6h3k+nnQk/nmB2o6QB3o6Hnk/QHmk+I6B2QI6B3E/HmQE+Hnh2I6Qh3I6nmE+QljDpmPAAQiUAAibggg");
	var mask_1_graphics_83 = new cjs.Graphics().p("EAeiBNTQo5h3k/nmQk/nnB3o5QB2o6Hnk/QHmk/I6B3QI6B3E/HmQE+Hnh2I5Qh3I6nmE/QljDomPAAQiUAAibggg");
	var mask_1_graphics_84 = new cjs.Graphics().p("EAfzBMxQo5h3k/nnQk/nmB3o6QB2o6Hnk/QHmk+I6B2QI6B3E/HmQE+Hnh2I6Qh3I6nmE+QljDpmPAAQiUAAibggg");
	var mask_1_graphics_85 = new cjs.Graphics().p("EAhEBMOQo5h3k/nmQk/nnB3o5QB2o6Hnk/QHnk/I5B3QI6B3E/HmQE/Hnh3I5Qh3I6nmE/QljDomPAAQiUAAibggg");
	var mask_1_graphics_86 = new cjs.Graphics().p("EAiWBLsQo6h3k/nnQk/nmB3o6QB2o6Hnk/QHnk+I5B2QI6B3E/HmQE/Hnh3I6Qh3I6nmE+QljDpmPAAQiUAAiaggg");
	var mask_1_graphics_87 = new cjs.Graphics().p("EAjnBLJQo6h2k/nnQk/nnB3o5QB3o6Hmk/QHnk/I5B3QI6B3E/HmQE/Hnh3I5Qh3I6nmE/QljDomPAAQiUAAiaggg");
	var mask_1_graphics_88 = new cjs.Graphics().p("EAk4BKnQo6h3k/nnQk/nmB3o6QB3o5Hmk/QHnk/I5B3QI6B2E/HnQE/Hmh3I6Qh2I6nnE+QljDpmOAAQiVAAiaggg");
	var mask_1_graphics_89 = new cjs.Graphics().p("EAmJBKEQo6h2k+nnQlAnnB3o5QB3o6Hnk/QHmk/I6B3QI5B3E/HmQE/Hnh3I6Qh2I5nnE/QljDomOAAQiVAAiaggg");
	var mask_1_graphics_90 = new cjs.Graphics().p("EAnaBJiQo6h3k+nnQk/nmB2o6QB3o5Hnk/QHmk/I6B3QI5B2E/HnQE/Hmh3I6Qh2I6nnE+QliDpmPAAQiVAAiaggg");
	var mask_1_graphics_91 = new cjs.Graphics().p("EAorBI/Qo6h2k+nnQk/nmB2o6QB3o6Hnk/QHmk/I6B3QI5B3FAHmQE+Hnh3I6Qh2I5nmE/QljDomPAAQiVAAiaggg");
	var mask_1_graphics_92 = new cjs.Graphics().p("EAp8BIdQo6h3k+nnQk/nmB2o6QB3o5Hnk/QHmk/I6B3QI6B2E/HnQE+Hmh2I6Qh3I6nmE+QljDpmPAAQiUAAibggg");
	var mask_1_graphics_93 = new cjs.Graphics().p("EArNBH6Qo6h2k+nnQk/nmB2o6QB3o6Hnk/QHmk+I6B2QI6B3E/HmQE+Hnh2I6Qh3I5nmE/QljDomPABQiUAAibghg");
	var mask_1_graphics_94 = new cjs.Graphics().p("EAseBHYQo5h3k/nnQk/nmB3o6QB2o5Hnk/QHmk/I6B3QI6B2E/HnQE+Hmh2I6Qh3I6nmE+QljDpmPAAQiUAAibggg");
	var mask_1_graphics_95 = new cjs.Graphics().p("EAtvBG1Qo5h2k/nnQk/nmB3o6QB2o6Hnk/QHmk+I6B2QI6B3E/HmQE+Hnh2I6Qh3I5nmE/QljDpmPAAQiUAAibghg");
	var mask_1_graphics_96 = new cjs.Graphics().p("EAvABGTQo5h3k/nmQk/nnB3o6QB2o5Hnk/QHmk/I6B3QI6B2E/HnQE/Hmh3I6Qh3I6nmE/QljDomPAAQiUAAibggg");
	var mask_1_graphics_97 = new cjs.Graphics().p("EAwSBFwQo6h2k/nnQk/nmB3o6QB2o6Hnk/QHnk+I5B2QI6B3E/HmQE/Hnh3I6Qh3I5nmE/QljDpmPAAQiUAAiaghg");
	var mask_1_graphics_98 = new cjs.Graphics().p("EAxjBFOQo6h3k/nmQk/nnB3o5QB3o6Hmk/QHnk/I5B3QI6B2E/HnQE/Hnh3I5Qh3I6nmE/QljDomPAAQiUAAiaggg");
	var mask_1_graphics_99 = new cjs.Graphics().p("EAy0BEsQo6h3k/nnQk/nmB3o6QB3o6Hmk/QHnk+I5B2QI6B3E/HmQE/Hnh3I6Qh2I5nnE/QljDpmOAAQiVAAiaggg");
	var mask_1_graphics_100 = new cjs.Graphics().p("EA0FBEJQo6h3k+nmQlAnnB3o5QB3o6Hnk/QHmk/I6B3QI5B2E/HnQE/Hnh3I5Qh2I6nnE/QljDomOAAQiVAAiaggg");
	var mask_1_graphics_101 = new cjs.Graphics().p("EA1WBDnQo6h3k+nnQk/nmB2o6QB3o6Hnk/QHmk+I6B2QI5B3E/HmQE/Hnh3I6Qh2I6nnE+QliDpmPAAQiVAAiaggg");
	var mask_1_graphics_102 = new cjs.Graphics().p("EA2nBDEQo6h3k+nmQk/nnB2o5QB3o6Hnk/QHmk/I6B3QI5B3FAHmQE+Hnh3I5Qh2I6nmE/QljDomPAAQiVAAiaggg");
	var mask_1_graphics_103 = new cjs.Graphics().p("EA34BCiQo6h3k+nnQk/nmB2o6QB3o6Hnk/QHmk+I6B2QI6B3E/HmQE+Hnh2I6Qh3I6nmE+QljDpmPAAQiVAAiaggg");
	var mask_1_graphics_104 = new cjs.Graphics().p("EA5JBB/Qo6h3k+nmQk/nnB2o5QB3o6Hnk/QHmk/I6B3QI6B3E/HmQE+Hnh2I5Qh3I6nmE/QljDomPAAQiUAAibggg");
	var mask_1_graphics_105 = new cjs.Graphics().p("EA6aBBdQo5h3k/nnQk/nmB3o6QB2o6Hnk/QHmk+I6B2QI6B3E/HmQE+Hnh2I6Qh3I6nmE+QljDpmPAAQiUAAibggg");
	var mask_1_graphics_106 = new cjs.Graphics().p("EA7rBA6Qo5h2k/nnQk/nnB3o5QB2o6Hnk/QHmk/I6B3QI6B3E/HmQE+Hnh2I5Qh3I6nmE/QljDomPAAQiUAAibggg");
	var mask_1_graphics_107 = new cjs.Graphics().p("EA88BAYQo5h3k/nnQk/nmB3o6QB2o5Hnk/QHmk/I6B3QI6B2E/HnQE/Hmh3I6Qh3I6nmE+QljDpmPAAQiUAAibggg");
	var mask_1_graphics_108 = new cjs.Graphics().p("EA+OA/1Qo6h2k/nnQk/nnB3o5QB2o6Hnk/QHnk/I5B3QI6B3E/HmQE/Hnh3I6Qh3I5nmE/QljDomPAAQiUAAiaggg");
	var mask_1_graphics_109 = new cjs.Graphics().p("EA/fA/TQo6h3k/nnQk/nmB3o6QB3o5Hmk/QHnk/I5B3QI6B2E/HnQE/Hmh3I6Qh3I6nmE+QljDpmPAAQiUAAiaggg");
	var mask_1_graphics_110 = new cjs.Graphics().p("EBAwA+wQo6h2k/nnQk/nmB3o6QB3o6Hmk/QHnk/I5B3QI6B3E/HmQE/Hnh3I6Qh2I5nnE/QljDomPAAQiUAAiaggg");
	var mask_1_graphics_111 = new cjs.Graphics().p("EBCBA+OQo6h3k+nnQlAnmB3o6QB3o5Hnk/QHmk/I6B3QI5B2E/HnQE/Hmh3I6Qh2I6nnE+QljDpmOAAQiVAAiaggg");
	var mask_1_graphics_112 = new cjs.Graphics().p("EBDSA9rQo6h2k+nnQlAnmB3o6QB3o6Hnk/QHmk+I6B2QI5B3E/HmQE/Hnh3I6Qh2I5nnE/QliDpmPAAQiVAAiaghg");
	var mask_1_graphics_113 = new cjs.Graphics().p("EBEjA9JQo6h3k+nnQk/nmB2o6QB3o5Hnk/QHmk/I6B3QI5B2FAHnQE+Hmh3I6Qh2I6nmE+QljDpmPAAQiVAAiaggg");
	var mask_1_graphics_114 = new cjs.Graphics().p("EBF0A8mQo6h2k+nnQk/nmB2o6QB3o6Hnk/QHmk+I6B2QI5B3FAHmQE+Hnh2I6Qh3I5nmE/QljDpmPAAQiVAAiaghg");
	var mask_1_graphics_115 = new cjs.Graphics().p("EBHFA8EQo6h3k+nmQk/nnB2o6QB3o5Hnk/QHmk/I6B3QI6B2E/HnQE+Hmh2I6Qh3I6nmE/QljDomPAAQiUAAibggg");
	var mask_1_graphics_116 = new cjs.Graphics().p("EBIWA7hQo5h2k/nnQk/nmB3o6QB2o6Hnk/QHmk+I6B2QI6B3E/HmQE+Hnh2I6Qh3I5nmE/QljDpmPAAQiUAAibghg");
	var mask_1_graphics_117 = new cjs.Graphics().p("EBJnA6/Qo5h3k/nmQk/nnB3o5QB2o6Hnk/QHmk/I6B3QI6B2E/HnQE+Hnh2I5Qh3I6nmE/QljDomPAAQiUAAibggg");
	var mask_1_graphics_118 = new cjs.Graphics().p("EBK4A6dQo5h3k/nnQk/nmB3o6QB2o6Hnk/QHmk+I6B2QI6B3E/HmQE/Hnh3I6Qh3I5nmE/QljDpmPAAQiUAAibggg");
	var mask_1_graphics_119 = new cjs.Graphics().p("EBMKA56Qo6h3k/nmQk/nnB3o5QB2o6Hnk/QHnk/I5B3QI6B2E/HnQE/Hnh3I5Qh3I6nmE/QljDomPAAQiUAAiaggg");
	var mask_1_graphics_120 = new cjs.Graphics().p("EBNbA5YQo6h3k/nnQk/nmB3o6QB2o6Hnk/QHnk+I5B2QI6B3E/HmQE/Hnh3I6Qh3I6nmE+QljDpmPAAQiUAAiaggg");
	var mask_1_graphics_121 = new cjs.Graphics().p("EBOsA41Qo6h3k/nmQk/nnB3o5QB3o6Hmk/QHnk/I5B3QI6B3E/HmQE/Hnh3I5Qh2I6nnE/QljDomPAAQiUAAiaggg");
	var mask_1_graphics_122 = new cjs.Graphics().p("EBP9A4TQo6h3k+nnQlAnmB3o6QB3o6Hnk/QHmk+I6B2QI5B3E/HmQE/Hnh3I6Qh2I6nnE+QljDpmOAAQiVAAiaggg");
	var mask_1_graphics_123 = new cjs.Graphics().p("EBROA3wQo6h2k+nnQlAnnB3o5QB3o6Hnk/QHmk/I6B3QI5B3E/HmQE/Hnh3I5Qh2I6nnE/QliDomPAAQiVAAiaggg");
	var mask_1_graphics_124 = new cjs.Graphics().p("EBSfA3OQo6h3k+nnQk/nmB2o6QB3o5HnlAQHmk+I6B2QI5B3FAHmQE+Hnh3I6Qh2I6nmE+QljDpmPAAQiVAAiaggg");
	var mask_1_graphics_125 = new cjs.Graphics().p("EBTwA2rQo6h2k+nnQk/nnB2o5QB3o6Hnk/QHmk/I6B3QI5B3FAHmQE+Hnh2I5Qh3I6nmE/QljDomPAAQiVAAiaggg");
	var mask_1_graphics_126 = new cjs.Graphics().p("EBVBA2JQo6h3k+nnQk/nmB2o6QB3o5Hnk/QHmk/I6B3QI6B2E/HnQE+Hmh2I6Qh3I6nmE+QljDpmPAAQiUAAibggg");
	var mask_1_graphics_127 = new cjs.Graphics().p("EBWSA1mQo5h2k/nnQk/nnB2o5QB3o6Hnk/QHmk/I6B3QI6B3E/HmQE+Hnh2I6Qh3I5nmE/QljDomPAAQiUAAibggg");
	var mask_1_graphics_128 = new cjs.Graphics().p("EBXjA1EQo5h3k/nnQk/nmB3o6QB2o5Hnk/QHmk/I6B3QI6B2E/HnQE+Hmh2I6Qh3I6nmE+QljDpmPAAQiUAAibggg");
	var mask_1_graphics_129 = new cjs.Graphics().p("EBY0A0hQo5h2k/nnQk/nmB3o6QB2o6Hnk/QHmk/I6B3QI6B3E/HmQE/Hnh3I6Qh3I5nmE/QljDomPAAQiUAAibggg");
	var mask_1_graphics_130 = new cjs.Graphics().p("EBaFAz/Qo5h3k/nnQk/nmB3o6QB2o5Hnk/QHnk/I5B3QI6B2E/HnQE/Hmh3I6Qh3I6nmE+QljDpmPAAQiUAAibggg");
	var mask_1_graphics_131 = new cjs.Graphics().p("EBbXAzcQo6h2k/nnQk/nmB3o6QB2o6Hnk/QHnk+I5B2QI6B3E/HmQE/Hnh3I6Qh3I5nmE/QljDpmPAAQiUAAiaghg");
	var mask_1_graphics_132 = new cjs.Graphics().p("EBcoAy6Qo6h3k/nnQk/nmB3o6QB3o5Hmk/QHnk/I5B3QI6B2E/HnQE/Hmh3I6Qh3I6nmE/QljDomPAAQiUAAiaggg");
	var mask_1_graphics_133 = new cjs.Graphics().p("EBd5AyXQo6h2k+nnQlAnmB3o6QB3o6Hnk/QHmk+I5B2QI6B3E/HmQE/Hnh3I6Qh2I5nnE/QljDpmOAAQiVAAiaghg");
	var mask_1_graphics_134 = new cjs.Graphics().p("EBfKAx1Qo6h3k+nmQlAnnB3o6QB3o5Hnk/QHmk/I6B3QI5B2E/HnQE/Hnh3I5Qh2I6nnE/QliDomPAAQiVAAiaggg");
	var mask_1_graphics_201 = new cjs.Graphics().p("EBfKAx1Qo5h3k+nmQk/nmB2o5QB3o6Hmk/QHmk+I6B3QI5B2E/HmQE+Hnh2I5Qh3I5nmE/QliDomPAAQiUAAibggg");
	var mask_1_graphics_202 = new cjs.Graphics().p("EBfKAx1Qo5h3k+nmQk/nmB2o6QB3o5Hmk/QHmk+I6B2QI5B3E/HmQE+Hmh2I6Qh3I5nmE/QliDomPAAQiUAAibggg");
	var mask_1_graphics_203 = new cjs.Graphics().p("EBfKAx1Qo5h3k/nmQk/nmB3o6QB3o5Hmk/QHmk+I6B2QI5B3E/HmQE+Hmh2I6Qh3I5nmE/QliDomPAAQiUAAibggg");
	var mask_1_graphics_204 = new cjs.Graphics().p("EBfKAx1Qo5h3k/nmQk/nmB3o6QB2o5Hnk/QHmk/I6B3QI5B2E/HnQE/Hmh3I6Qh3I5nmE/QliDomPAAQiUAAibggg");
	var mask_1_graphics_205 = new cjs.Graphics().p("EBfKAx1Qo5h3k/nmQk/nmB3o6QB2o5Hnk/QHmk/I6B3QI5B2E/HmQE/Hnh3I6Qh3I5nmE/QliDomPAAQiUAAibggg");
	var mask_1_graphics_206 = new cjs.Graphics().p("EBfKAx1Qo5h3k/nmQk/nnB3o5QB2o6Hnk/QHmk+I6B2QI5B3E/HmQE/Hnh3I5Qh2I6nnE/QliDomPAAQiVAAiaggg");
	var mask_1_graphics_207 = new cjs.Graphics().p("EBfKAx1Qo6h3k+nmQk/nnB2o5QB3o6Hnk/QHmk+I6B2QI5B3E/HmQE/Hnh3I5Qh2I6nnE/QliDomPAAQiVAAiaggg");
	var mask_1_graphics_208 = new cjs.Graphics().p("EBfKAx1Qo6h3k+nmQk/nnB2o5QB3o6Hnk/QHmk/I6B3QI5B3E/HmQE/Hnh3I5Qh2I6nnE/QliDomPAAQiVAAiaggg");
	var mask_1_graphics_209 = new cjs.Graphics().p("EBfKAx1Qo6h3k+nmQlAnnB3o6QB3o5Hnk/QHmk/I6B3QI5B2E/HnQE/Hnh3I5Qh2I6nnE/QliDomPAAQiVAAiaggg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(7).to({graphics:mask_1_graphics_7,x:253.55,y:428.5}).wait(1).to({graphics:mask_1_graphics_8,x:261.5534,y:425.0716}).wait(1).to({graphics:mask_1_graphics_9,x:269.557,y:421.6434}).wait(1).to({graphics:mask_1_graphics_10,x:277.5607,y:418.2154}).wait(1).to({graphics:mask_1_graphics_11,x:285.5645,y:414.7875}).wait(1).to({graphics:mask_1_graphics_12,x:293.5685,y:411.3597}).wait(1).to({graphics:mask_1_graphics_13,x:301.5727,y:407.9321}).wait(1).to({graphics:mask_1_graphics_14,x:309.5769,y:404.5046}).wait(1).to({graphics:mask_1_graphics_15,x:317.5813,y:401.0773}).wait(1).to({graphics:mask_1_graphics_16,x:325.5859,y:397.65}).wait(1).to({graphics:mask_1_graphics_17,x:333.5905,y:394.2229}).wait(1).to({graphics:mask_1_graphics_18,x:341.5953,y:390.7959}).wait(1).to({graphics:mask_1_graphics_19,x:349.6002,y:387.369}).wait(1).to({graphics:mask_1_graphics_20,x:357.6051,y:383.9422}).wait(1).to({graphics:mask_1_graphics_21,x:365.6102,y:380.5155}).wait(1).to({graphics:mask_1_graphics_22,x:373.6154,y:377.089}).wait(1).to({graphics:mask_1_graphics_23,x:381.6207,y:373.6625}).wait(1).to({graphics:mask_1_graphics_24,x:389.6261,y:370.2361}).wait(1).to({graphics:mask_1_graphics_25,x:397.6315,y:366.8098}).wait(1).to({graphics:mask_1_graphics_26,x:405.6371,y:363.3835}).wait(1).to({graphics:mask_1_graphics_27,x:413.6427,y:359.9574}).wait(1).to({graphics:mask_1_graphics_28,x:421.6484,y:356.5313}).wait(1).to({graphics:mask_1_graphics_29,x:429.6542,y:353.1053}).wait(1).to({graphics:mask_1_graphics_30,x:437.66,y:349.6794}).wait(1).to({graphics:mask_1_graphics_31,x:445.6659,y:346.2535}).wait(1).to({graphics:mask_1_graphics_32,x:453.6719,y:342.8277}).wait(1).to({graphics:mask_1_graphics_33,x:461.6779,y:339.4019}).wait(1).to({graphics:mask_1_graphics_34,x:469.684,y:335.9762}).wait(1).to({graphics:mask_1_graphics_35,x:477.6901,y:332.5505}).wait(1).to({graphics:mask_1_graphics_36,x:485.6963,y:329.1249}).wait(1).to({graphics:mask_1_graphics_37,x:493.7025,y:325.6994}).wait(1).to({graphics:mask_1_graphics_38,x:501.7088,y:322.2738}).wait(1).to({graphics:mask_1_graphics_39,x:509.7151,y:318.8483}).wait(1).to({graphics:mask_1_graphics_40,x:517.7214,y:315.4229}).wait(1).to({graphics:mask_1_graphics_41,x:525.7278,y:311.9975}).wait(1).to({graphics:mask_1_graphics_42,x:533.7342,y:308.5721}).wait(1).to({graphics:mask_1_graphics_43,x:541.7406,y:305.1467}).wait(1).to({graphics:mask_1_graphics_44,x:549.7471,y:301.7214}).wait(1).to({graphics:mask_1_graphics_45,x:557.7535,y:298.296}).wait(1).to({graphics:mask_1_graphics_46,x:565.76,y:294.8707}).wait(1).to({graphics:mask_1_graphics_47,x:573.7665,y:291.4454}).wait(1).to({graphics:mask_1_graphics_48,x:581.773,y:288.0201}).wait(1).to({graphics:mask_1_graphics_49,x:589.7795,y:284.5948}).wait(1).to({graphics:mask_1_graphics_50,x:597.7861,y:281.1696}).wait(1).to({graphics:mask_1_graphics_51,x:605.7926,y:277.7443}).wait(1).to({graphics:mask_1_graphics_52,x:613.7991,y:274.319}).wait(1).to({graphics:mask_1_graphics_53,x:621.8057,y:270.8937}).wait(1).to({graphics:mask_1_graphics_54,x:629.8122,y:267.4685}).wait(1).to({graphics:mask_1_graphics_55,x:637.8187,y:264.0432}).wait(1).to({graphics:mask_1_graphics_56,x:645.8252,y:260.6179}).wait(1).to({graphics:mask_1_graphics_57,x:653.8317,y:257.1926}).wait(1).to({graphics:mask_1_graphics_58,x:661.8382,y:253.7672}).wait(1).to({graphics:mask_1_graphics_59,x:669.8447,y:250.3419}).wait(1).to({graphics:mask_1_graphics_60,x:677.8511,y:246.9166}).wait(1).to({graphics:mask_1_graphics_61,x:685.8576,y:243.4912}).wait(1).to({graphics:mask_1_graphics_62,x:693.864,y:240.0658}).wait(1).to({graphics:mask_1_graphics_63,x:701.85,y:236.6098}).wait(1).to({graphics:mask_1_graphics_64,x:676.6777,y:255.1808}).wait(1).to({graphics:mask_1_graphics_65,x:651.5043,y:273.7508}).wait(1).to({graphics:mask_1_graphics_66,x:626.331,y:292.3208}).wait(1).to({graphics:mask_1_graphics_67,x:601.1577,y:310.8908}).wait(1).to({graphics:mask_1_graphics_68,x:575.9843,y:329.4608}).wait(1).to({graphics:mask_1_graphics_69,x:550.811,y:348.0308}).wait(1).to({graphics:mask_1_graphics_70,x:525.6377,y:366.6008}).wait(1).to({graphics:mask_1_graphics_71,x:500.4643,y:385.1708}).wait(1).to({graphics:mask_1_graphics_72,x:475.291,y:403.7408}).wait(1).to({graphics:mask_1_graphics_73,x:450.1177,y:422.3108}).wait(1).to({graphics:mask_1_graphics_74,x:424.9443,y:440.8808}).wait(1).to({graphics:mask_1_graphics_75,x:399.771,y:459.4508}).wait(1).to({graphics:mask_1_graphics_76,x:374.5977,y:478.0208}).wait(1).to({graphics:mask_1_graphics_77,x:349.4243,y:496.5908}).wait(1).to({graphics:mask_1_graphics_78,x:324.25,y:515.1598}).wait(1).to({graphics:mask_1_graphics_79,x:332.3599,y:511.7135}).wait(1).to({graphics:mask_1_graphics_80,x:340.4689,y:508.2662}).wait(1).to({graphics:mask_1_graphics_81,x:348.5778,y:504.8189}).wait(1).to({graphics:mask_1_graphics_82,x:356.6867,y:501.3715}).wait(1).to({graphics:mask_1_graphics_83,x:364.7957,y:497.9242}).wait(1).to({graphics:mask_1_graphics_84,x:372.9046,y:494.4769}).wait(1).to({graphics:mask_1_graphics_85,x:381.0135,y:491.0296}).wait(1).to({graphics:mask_1_graphics_86,x:389.1224,y:487.5822}).wait(1).to({graphics:mask_1_graphics_87,x:397.2314,y:484.1349}).wait(1).to({graphics:mask_1_graphics_88,x:405.3403,y:480.6876}).wait(1).to({graphics:mask_1_graphics_89,x:413.4492,y:477.2403}).wait(1).to({graphics:mask_1_graphics_90,x:421.5582,y:473.793}).wait(1).to({graphics:mask_1_graphics_91,x:429.6671,y:470.3456}).wait(1).to({graphics:mask_1_graphics_92,x:437.776,y:466.8983}).wait(1).to({graphics:mask_1_graphics_93,x:445.8849,y:463.451}).wait(1).to({graphics:mask_1_graphics_94,x:453.9939,y:460.0037}).wait(1).to({graphics:mask_1_graphics_95,x:462.1028,y:456.5564}).wait(1).to({graphics:mask_1_graphics_96,x:470.2117,y:453.109}).wait(1).to({graphics:mask_1_graphics_97,x:478.3207,y:449.6617}).wait(1).to({graphics:mask_1_graphics_98,x:486.4296,y:446.2144}).wait(1).to({graphics:mask_1_graphics_99,x:494.5385,y:442.7671}).wait(1).to({graphics:mask_1_graphics_100,x:502.6474,y:439.3197}).wait(1).to({graphics:mask_1_graphics_101,x:510.7564,y:435.8724}).wait(1).to({graphics:mask_1_graphics_102,x:518.8653,y:432.4251}).wait(1).to({graphics:mask_1_graphics_103,x:526.9742,y:428.9778}).wait(1).to({graphics:mask_1_graphics_104,x:535.0832,y:425.5305}).wait(1).to({graphics:mask_1_graphics_105,x:543.1921,y:422.0831}).wait(1).to({graphics:mask_1_graphics_106,x:551.301,y:418.6358}).wait(1).to({graphics:mask_1_graphics_107,x:559.4099,y:415.1885}).wait(1).to({graphics:mask_1_graphics_108,x:567.5189,y:411.7412}).wait(1).to({graphics:mask_1_graphics_109,x:575.6278,y:408.2939}).wait(1).to({graphics:mask_1_graphics_110,x:583.7367,y:404.8465}).wait(1).to({graphics:mask_1_graphics_111,x:591.8457,y:401.3992}).wait(1).to({graphics:mask_1_graphics_112,x:599.9546,y:397.9519}).wait(1).to({graphics:mask_1_graphics_113,x:608.0635,y:394.5046}).wait(1).to({graphics:mask_1_graphics_114,x:616.1724,y:391.0572}).wait(1).to({graphics:mask_1_graphics_115,x:624.2814,y:387.6099}).wait(1).to({graphics:mask_1_graphics_116,x:632.3903,y:384.1626}).wait(1).to({graphics:mask_1_graphics_117,x:640.4992,y:380.7153}).wait(1).to({graphics:mask_1_graphics_118,x:648.6082,y:377.268}).wait(1).to({graphics:mask_1_graphics_119,x:656.7171,y:373.8206}).wait(1).to({graphics:mask_1_graphics_120,x:664.826,y:370.3733}).wait(1).to({graphics:mask_1_graphics_121,x:672.9349,y:366.926}).wait(1).to({graphics:mask_1_graphics_122,x:681.0439,y:363.4787}).wait(1).to({graphics:mask_1_graphics_123,x:689.1528,y:360.0314}).wait(1).to({graphics:mask_1_graphics_124,x:697.2617,y:356.584}).wait(1).to({graphics:mask_1_graphics_125,x:705.3707,y:353.1367}).wait(1).to({graphics:mask_1_graphics_126,x:713.4796,y:349.6894}).wait(1).to({graphics:mask_1_graphics_127,x:721.5885,y:346.2421}).wait(1).to({graphics:mask_1_graphics_128,x:729.6974,y:342.7947}).wait(1).to({graphics:mask_1_graphics_129,x:737.8064,y:339.3474}).wait(1).to({graphics:mask_1_graphics_130,x:745.9153,y:335.9001}).wait(1).to({graphics:mask_1_graphics_131,x:754.0242,y:332.4528}).wait(1).to({graphics:mask_1_graphics_132,x:762.1332,y:329.0055}).wait(1).to({graphics:mask_1_graphics_133,x:770.2421,y:325.5581}).wait(1).to({graphics:mask_1_graphics_134,x:778.35,y:322.1098}).wait(67).to({graphics:mask_1_graphics_201,x:778.2943,y:322.1076}).wait(1).to({graphics:mask_1_graphics_202,x:778.3025,y:322.1092}).wait(1).to({graphics:mask_1_graphics_203,x:778.3094,y:322.1094}).wait(1).to({graphics:mask_1_graphics_204,x:778.3164,y:322.1096}).wait(1).to({graphics:mask_1_graphics_205,x:778.3233,y:322.1099}).wait(1).to({graphics:mask_1_graphics_206,x:778.3302,y:322.1101}).wait(1).to({graphics:mask_1_graphics_207,x:778.3371,y:322.1103}).wait(1).to({graphics:mask_1_graphics_208,x:778.3441,y:322.1106}).wait(1).to({graphics:mask_1_graphics_209,x:778.35,y:322.1098}).wait(1));

	// 白色圈起來的文字
	this.instance_3 = new lib.元件6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(921.7,568.6,1,1,0,0,0,543.6,362.6);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({_off:false},0).wait(203));

	// 圖層 6   複製 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_7 = new cjs.Graphics().p("AqLqNIHpj/IMuYaInpD/g");
	var mask_2_graphics_8 = new cjs.Graphics().p("ArVppIKClGIMpYRIp6FOg");
	var mask_2_graphics_9 = new cjs.Graphics().p("AsfpGIMamMIMlYIIsKGdg");
	var mask_2_graphics_10 = new cjs.Graphics().p("AtooiIOxnTIMgX/IuYHsg");
	var mask_2_graphics_11 = new cjs.Graphics().p("Auyn+IRJoaIMcX2IwpI7g");
	var mask_2_graphics_12 = new cjs.Graphics().p("Av8nbITipgIMXXtIy5KKg");
	var mask_2_graphics_13 = new cjs.Graphics().p("AxFm3IV5qmIMSXiI1JLZg");
	var mask_2_graphics_14 = new cjs.Graphics().p("AyPmTIYSrtIMNXZI3ZMog");
	var mask_2_graphics_15 = new cjs.Graphics().p("AzZlvIaqs0IMJXQI5pN3g");
	var mask_2_graphics_16 = new cjs.Graphics().p("A0ilLIdCt7IMDXHI75PGg");
	var mask_2_graphics_17 = new cjs.Graphics().p("A1skoIfbvBIL+W+I+JQVg");
	var mask_2_graphics_18 = new cjs.Graphics().p("A22kEMAhzgQIIL6W1MggZARkg");
	var mask_2_graphics_19 = new cjs.Graphics().p("A3/jgMAkLgRPIL0WsMgipASzg");
	var mask_2_graphics_20 = new cjs.Graphics().p("A5Ji9MAmjgSVILwWiMgk5AUDg");
	var mask_2_graphics_21 = new cjs.Graphics().p("A6TiZMAo8gTbILqWYMgnIAVRg");
	var mask_2_graphics_22 = new cjs.Graphics().p("A7ch1MArTgUiILmWQMgpZAWfg");
	var mask_2_graphics_23 = new cjs.Graphics().p("A8mhRMAtsgVpILhWHMgrpAXug");
	var mask_2_graphics_24 = new cjs.Graphics().p("A9vgtMAwDgWwILcV+Mgt5AY9g");
	var mask_2_graphics_25 = new cjs.Graphics().p("A+5gKMAycgX2ILXV1MgwJAaMg");
	var mask_2_graphics_26 = new cjs.Graphics().p("EggDAAZMA00gY8ILTVsMgyZAbbg");
	var mask_2_graphics_27 = new cjs.Graphics().p("EghMAA9MA3MgaDILNViMg0pAcrg");
	var mask_2_graphics_28 = new cjs.Graphics().p("EgiWABgMA5kgbIILJVYMg25Ad5g");
	var mask_2_graphics_29 = new cjs.Graphics().p("EgjgACEMA79gcPILEVPMg5JAfIg");
	var mask_2_graphics_30 = new cjs.Graphics().p("EgkpACoMA+UgdWIK/VGMg7ZAgXg");
	var mask_2_graphics_31 = new cjs.Graphics().p("EglzADMMBAtgedIK6U9Mg9pAhmg");
	var mask_2_graphics_32 = new cjs.Graphics().p("Egm9ADwMBDFgfkIK2U0Mg/6Ai1g");
	var mask_2_graphics_33 = new cjs.Graphics().p("EgoGAETMBFdggqIKwUrMhCJAkEg");
	var mask_2_graphics_34 = new cjs.Graphics().p("EgpQAE3MBH1ghxIKsUhMhEZAlUg");
	var mask_2_graphics_35 = new cjs.Graphics().p("EgqaAFbMBKOgi4IKnUYMhGqAmig");
	var mask_2_graphics_36 = new cjs.Graphics().p("EgrjAF+MBMmgj9IKhUOMhI5Anxg");
	var mask_2_graphics_37 = new cjs.Graphics().p("EgstAGiMBO+glEIKdUFMhLKApAg");
	var mask_2_graphics_38 = new cjs.Graphics().p("Egt3AHGMBRXgmLIKYT8MhNaAqPg");
	var mask_2_graphics_39 = new cjs.Graphics().p("EgvAAHqMBTugnSIKTTzMhPpAreg");
	var mask_2_graphics_40 = new cjs.Graphics().p("EgwKAIOMBWHgoZIKOTqMhR6Astg");
	var mask_2_graphics_41 = new cjs.Graphics().p("EgxUAIxMBYfgpfIKKTgMhUKAt9g");
	var mask_2_graphics_42 = new cjs.Graphics().p("EgydAJVMBa3gqmIKETXMhWZAvMg");
	var mask_2_graphics_43 = new cjs.Graphics().p("EgznAJ5MBdPgrsIKATNMhYqAwag");
	var mask_2_graphics_44 = new cjs.Graphics().p("Eg0xAKcMBfogsyIJ7TEMha6Axpg");
	var mask_2_graphics_45 = new cjs.Graphics().p("Eg16ALAMBh/gt5IJ2S7MhdKAy4g");
	var mask_2_graphics_46 = new cjs.Graphics().p("Eg3EALkMBkYgvAIJxSyMhfaA0Hg");
	var mask_2_graphics_47 = new cjs.Graphics().p("Eg4OAMIMBmwgwHIJtSpMhhqA1Wg");
	var mask_2_graphics_48 = new cjs.Graphics().p("Eg5XAMsMBpIgxOIJnSfMhj6A2mg");
	var mask_2_graphics_49 = new cjs.Graphics().p("Eg6hANPMBrggyUIJjSWMhmKA31g");
	var mask_2_graphics_50 = new cjs.Graphics().p("Eg7rANzMBt5gzaIJeSMMhoaA5Dg");
	var mask_2_graphics_51 = new cjs.Graphics().p("Eg80AOXMBwQg0hIJZSDMhqqA6Sg");
	var mask_2_graphics_52 = new cjs.Graphics().p("Eg9+AO6MBypg1nIJUR6Mhs6A7hg");
	var mask_2_graphics_53 = new cjs.Graphics().p("Eg/IAPeMB1Bg2uIJQRxMhvKA8wg");
	var mask_2_graphics_54 = new cjs.Graphics().p("EhARAQCMB3Zg31IJKRoMhxaA9/g");
	var mask_2_graphics_55 = new cjs.Graphics().p("EhBbAQmMB5yg48IJFReMhzqA/Pg");
	var mask_2_graphics_56 = new cjs.Graphics().p("EhClARKMB8Kg6DIJBRVMh17BAeg");
	var mask_2_graphics_57 = new cjs.Graphics().p("EhDuARtMB+ig7JII7RMMh4KBBtg");
	var mask_2_graphics_58 = new cjs.Graphics().p("EhE4ASRMCA6g8PII3RCMh6aBC7g");
	var mask_2_graphics_59 = new cjs.Graphics().p("EhGCAS1MCDTg9WIIyQ5Mh8rBEKg");
	var mask_2_graphics_60 = new cjs.Graphics().p("EhHLATYMCFqg+cIItQwMh+6BFZg");
	var mask_2_graphics_61 = new cjs.Graphics().p("EhIVAT8MCIDg/jIIoQnMiBKBGog");
	var mask_2_graphics_62 = new cjs.Graphics().p("EhJfAUgMCKbhAqIIkQdMiDbBH4g");
	var mask_2_graphics_63 = new cjs.Graphics().p("EhKoAVEMCMzhBxIIeQUMiFqBJHg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(7).to({graphics:mask_2_graphics_7,x:449.175,y:753.325}).wait(1).to({graphics:mask_2_graphics_8,x:456.975,y:749.3705}).wait(1).to({graphics:mask_2_graphics_9,x:464.775,y:745.4161}).wait(1).to({graphics:mask_2_graphics_10,x:472.575,y:741.4616}).wait(1).to({graphics:mask_2_graphics_11,x:480.375,y:737.5071}).wait(1).to({graphics:mask_2_graphics_12,x:488.175,y:733.5527}).wait(1).to({graphics:mask_2_graphics_13,x:495.975,y:729.5982}).wait(1).to({graphics:mask_2_graphics_14,x:503.775,y:725.6438}).wait(1).to({graphics:mask_2_graphics_15,x:511.575,y:721.6893}).wait(1).to({graphics:mask_2_graphics_16,x:519.375,y:717.7348}).wait(1).to({graphics:mask_2_graphics_17,x:527.175,y:713.7804}).wait(1).to({graphics:mask_2_graphics_18,x:534.975,y:709.8259}).wait(1).to({graphics:mask_2_graphics_19,x:542.775,y:705.8714}).wait(1).to({graphics:mask_2_graphics_20,x:550.575,y:701.917}).wait(1).to({graphics:mask_2_graphics_21,x:558.375,y:697.9625}).wait(1).to({graphics:mask_2_graphics_22,x:566.175,y:694.008}).wait(1).to({graphics:mask_2_graphics_23,x:573.975,y:690.0536}).wait(1).to({graphics:mask_2_graphics_24,x:581.775,y:686.0991}).wait(1).to({graphics:mask_2_graphics_25,x:589.575,y:682.1446}).wait(1).to({graphics:mask_2_graphics_26,x:597.375,y:678.1902}).wait(1).to({graphics:mask_2_graphics_27,x:605.175,y:674.2357}).wait(1).to({graphics:mask_2_graphics_28,x:612.975,y:670.2813}).wait(1).to({graphics:mask_2_graphics_29,x:620.775,y:666.3268}).wait(1).to({graphics:mask_2_graphics_30,x:628.575,y:662.3723}).wait(1).to({graphics:mask_2_graphics_31,x:636.375,y:658.4179}).wait(1).to({graphics:mask_2_graphics_32,x:644.175,y:654.4634}).wait(1).to({graphics:mask_2_graphics_33,x:651.975,y:650.5089}).wait(1).to({graphics:mask_2_graphics_34,x:659.775,y:646.5545}).wait(1).to({graphics:mask_2_graphics_35,x:667.575,y:642.6}).wait(1).to({graphics:mask_2_graphics_36,x:675.375,y:638.6455}).wait(1).to({graphics:mask_2_graphics_37,x:683.175,y:634.6911}).wait(1).to({graphics:mask_2_graphics_38,x:690.975,y:630.7366}).wait(1).to({graphics:mask_2_graphics_39,x:698.775,y:626.7821}).wait(1).to({graphics:mask_2_graphics_40,x:706.575,y:622.8277}).wait(1).to({graphics:mask_2_graphics_41,x:714.375,y:618.8732}).wait(1).to({graphics:mask_2_graphics_42,x:722.175,y:614.9188}).wait(1).to({graphics:mask_2_graphics_43,x:729.975,y:610.9643}).wait(1).to({graphics:mask_2_graphics_44,x:737.775,y:607.0098}).wait(1).to({graphics:mask_2_graphics_45,x:745.575,y:603.0554}).wait(1).to({graphics:mask_2_graphics_46,x:753.375,y:599.1009}).wait(1).to({graphics:mask_2_graphics_47,x:761.175,y:595.1464}).wait(1).to({graphics:mask_2_graphics_48,x:768.975,y:591.192}).wait(1).to({graphics:mask_2_graphics_49,x:776.775,y:587.2375}).wait(1).to({graphics:mask_2_graphics_50,x:784.575,y:583.283}).wait(1).to({graphics:mask_2_graphics_51,x:792.375,y:579.3286}).wait(1).to({graphics:mask_2_graphics_52,x:800.175,y:575.3741}).wait(1).to({graphics:mask_2_graphics_53,x:807.975,y:571.4196}).wait(1).to({graphics:mask_2_graphics_54,x:815.775,y:567.4652}).wait(1).to({graphics:mask_2_graphics_55,x:823.575,y:563.5107}).wait(1).to({graphics:mask_2_graphics_56,x:831.375,y:559.5563}).wait(1).to({graphics:mask_2_graphics_57,x:839.175,y:555.6018}).wait(1).to({graphics:mask_2_graphics_58,x:846.975,y:551.6473}).wait(1).to({graphics:mask_2_graphics_59,x:854.775,y:547.6929}).wait(1).to({graphics:mask_2_graphics_60,x:862.575,y:543.7384}).wait(1).to({graphics:mask_2_graphics_61,x:870.375,y:539.7839}).wait(1).to({graphics:mask_2_graphics_62,x:878.175,y:535.8295}).wait(1).to({graphics:mask_2_graphics_63,x:885.975,y:531.875}).wait(147));

	// 底層文字 複製
	this.instance_4 = new lib.補間動畫3("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(940.9,572);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7).to({_off:false},0).wait(194).to({alpha:0.7813},0).to({alpha:0},8).wait(1));

	// 圖層 6   複製 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_78 = new cjs.Graphics().p("AqLqNIHpj/IMuYaInpD/g");
	var mask_3_graphics_79 = new cjs.Graphics().p("ArVpsIJ9lCIMuYbIp9FCg");
	var mask_3_graphics_80 = new cjs.Graphics().p("AsepKIMPmFIMuYaIsPGFg");
	var mask_3_graphics_81 = new cjs.Graphics().p("AtnopIOgnHIMvYaIugHHg");
	var mask_3_graphics_82 = new cjs.Graphics().p("AuxoIIQ0oKIMvYbIw0IKg");
	var mask_3_graphics_83 = new cjs.Graphics().p("Av6nmITGpNIMvYaIzGJNg");
	var mask_3_graphics_84 = new cjs.Graphics().p("AxEnFIVaqQIMvYbI1aKQg");
	var mask_3_graphics_85 = new cjs.Graphics().p("AyNmjIXsrTIMvYaI3sLTg");
	var mask_3_graphics_86 = new cjs.Graphics().p("AzXmCIaAsVIMvYaI6AMVg");
	var mask_3_graphics_87 = new cjs.Graphics().p("A0glhIcStYIMvYbI8SNYg");
	var mask_3_graphics_88 = new cjs.Graphics().p("A1pk/IekubIMvYaI+kObg");
	var mask_3_graphics_89 = new cjs.Graphics().p("A2zkeMAg4gPeIMvYbMgg4APeg");
	var mask_3_graphics_90 = new cjs.Graphics().p("A38j8MAjKgQhIMvYaMgjKAQhg");
	var mask_3_graphics_91 = new cjs.Graphics().p("A5GjbMAlegRkIMvYbMgleARkg");
	var mask_3_graphics_92 = new cjs.Graphics().p("A6Pi6MAnwgSmIMvYbMgnwASmg");
	var mask_3_graphics_93 = new cjs.Graphics().p("A7YiYMAqCgTpIMvYaMgqCATpg");
	var mask_3_graphics_94 = new cjs.Graphics().p("A8ih3MAsWgUsIMvYbMgsWAUsg");
	var mask_3_graphics_95 = new cjs.Graphics().p("A9rhVMAuogVvIMvYaMguoAVvg");
	var mask_3_graphics_96 = new cjs.Graphics().p("A+1g0MAw8gWyIMvYbMgw8AWyg");
	var mask_3_graphics_97 = new cjs.Graphics().p("A/+gTMAzOgX0IMvYbMgzOAX0g");
	var mask_3_graphics_98 = new cjs.Graphics().p("EghHAAOMA1ggY2IMvYbMg1gAY2g");
	var mask_3_graphics_99 = new cjs.Graphics().p("EgiRAAvMA30gZ5IMvYcMg30AZ5g");
	var mask_3_graphics_100 = new cjs.Graphics().p("EgjaABRMA6Gga8IMvYbMg6GAa8g");
	var mask_3_graphics_101 = new cjs.Graphics().p("EgkkAByMA8agb/IMvYcMg8aAb/g");
	var mask_3_graphics_102 = new cjs.Graphics().p("EgltACUMA+sgdCIMvYbMg+sAdCg");
	var mask_3_graphics_103 = new cjs.Graphics().p("Egm3AC1MBBAgeEIMvYbMhBAAeEg");
	var mask_3_graphics_104 = new cjs.Graphics().p("EgoAADWMBDSgfHIMvYcMhDSAfHg");
	var mask_3_graphics_105 = new cjs.Graphics().p("EgpJAD4MBFkggKIMvYbMhFkAgKg");
	var mask_3_graphics_106 = new cjs.Graphics().p("EgqTAEZMBH4ghNIMvYcMhH4AhNg");
	var mask_3_graphics_107 = new cjs.Graphics().p("EgrcAE7MBKKgiQIMvYbMhKKAiQg");
	var mask_3_graphics_108 = new cjs.Graphics().p("EgsmAFcMBMegjSIMvYbMhMeAjSg");
	var mask_3_graphics_109 = new cjs.Graphics().p("EgtvAF9MBOwgkVIMvYcMhOwAkVg");
	var mask_3_graphics_110 = new cjs.Graphics().p("Egu4AGfMBRCglYIMvYbMhRCAlYg");
	var mask_3_graphics_111 = new cjs.Graphics().p("EgwCAHAMBTWgmbIMvYcMhTWAmbg");
	var mask_3_graphics_112 = new cjs.Graphics().p("EgxLAHiMBVogneIMvYbMhVoAneg");
	var mask_3_graphics_113 = new cjs.Graphics().p("EgyVAIDMBX8gogIMvYbMhX8Aogg");
	var mask_3_graphics_114 = new cjs.Graphics().p("EgzeAIkMBaOgpjIMvYcMhaOApjg");
	var mask_3_graphics_115 = new cjs.Graphics().p("Eg0nAJGMBcggqmIMvYbMhcgAqmg");
	var mask_3_graphics_116 = new cjs.Graphics().p("Eg1xAJnMBe0grpIMvYcMhe0Arpg");
	var mask_3_graphics_117 = new cjs.Graphics().p("Eg26AKJMBhGgssIMvYbMhhGAssg");
	var mask_3_graphics_118 = new cjs.Graphics().p("Eg4EAKqMBjagtvIMvYcMhjaAtug");
	var mask_3_graphics_119 = new cjs.Graphics().p("Eg5NALLMBlsguxIMvYcMhlsAuxg");
	var mask_3_graphics_120 = new cjs.Graphics().p("Eg6XALtMBoAgv0IMuYbMhn+Av0g");
	var mask_3_graphics_121 = new cjs.Graphics().p("Eg7gAMOMBqSgw3IMvYcMhqSAw3g");
	var mask_3_graphics_122 = new cjs.Graphics().p("Eg8pAMwMBskgx6IMvYbMhskAx6g");
	var mask_3_graphics_123 = new cjs.Graphics().p("Eg9zANRMBu4gy9IMvYcMhu4Ay9g");
	var mask_3_graphics_124 = new cjs.Graphics().p("Eg+8ANyMBxKgz/IMvYcMhxKAz/g");
	var mask_3_graphics_125 = new cjs.Graphics().p("EhAGAOUMBzeg1CIMvYbMhzeA1Cg");
	var mask_3_graphics_126 = new cjs.Graphics().p("EhBPAO1MB1wg2FIMvYcMh1wA2Fg");
	var mask_3_graphics_127 = new cjs.Graphics().p("EhCYAPXMB4Cg3IIMvYbMh4CA3Ig");
	var mask_3_graphics_128 = new cjs.Graphics().p("EhDiAP4MB6Wg4LIMvYcMh6WA4Lg");
	var mask_3_graphics_129 = new cjs.Graphics().p("EhErAQZMB8og5NIMvYcMh8oA5Ng");
	var mask_3_graphics_130 = new cjs.Graphics().p("EhF1AQ7MB+8g6QIMvYbMh+8A6Qg");
	var mask_3_graphics_131 = new cjs.Graphics().p("EhG+ARcMCBOg7TIMvYcMiBOA7Tg");
	var mask_3_graphics_132 = new cjs.Graphics().p("EhIHAR+MCDgg8WIMvYbMiDgA8Wg");
	var mask_3_graphics_133 = new cjs.Graphics().p("EhJRASfMCF0g9ZIMvYcMiF0A9Zg");
	var mask_3_graphics_134 = new cjs.Graphics().p("EhKaATBMCIGg+cIMvYcMiIGA+bg");
	var mask_3_graphics_201 = new cjs.Graphics().p("EhKaATBMCIGg+cIMvYcMiIGA+bg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(78).to({graphics:mask_3_graphics_78,x:556.175,y:830.325}).wait(1).to({graphics:mask_3_graphics_79,x:563.5161,y:826.9844}).wait(1).to({graphics:mask_3_graphics_80,x:570.8571,y:823.6438}).wait(1).to({graphics:mask_3_graphics_81,x:578.1982,y:820.3031}).wait(1).to({graphics:mask_3_graphics_82,x:585.5393,y:816.9625}).wait(1).to({graphics:mask_3_graphics_83,x:592.8804,y:813.6219}).wait(1).to({graphics:mask_3_graphics_84,x:600.2214,y:810.2813}).wait(1).to({graphics:mask_3_graphics_85,x:607.5625,y:806.9406}).wait(1).to({graphics:mask_3_graphics_86,x:614.9036,y:803.6}).wait(1).to({graphics:mask_3_graphics_87,x:622.2446,y:800.2594}).wait(1).to({graphics:mask_3_graphics_88,x:629.5857,y:796.9188}).wait(1).to({graphics:mask_3_graphics_89,x:636.9268,y:793.5781}).wait(1).to({graphics:mask_3_graphics_90,x:644.2679,y:790.2375}).wait(1).to({graphics:mask_3_graphics_91,x:651.6089,y:786.8969}).wait(1).to({graphics:mask_3_graphics_92,x:658.95,y:783.5563}).wait(1).to({graphics:mask_3_graphics_93,x:666.2911,y:780.2156}).wait(1).to({graphics:mask_3_graphics_94,x:673.6321,y:776.875}).wait(1).to({graphics:mask_3_graphics_95,x:680.9732,y:773.5344}).wait(1).to({graphics:mask_3_graphics_96,x:688.3143,y:770.1938}).wait(1).to({graphics:mask_3_graphics_97,x:695.6554,y:766.8531}).wait(1).to({graphics:mask_3_graphics_98,x:702.9964,y:763.5125}).wait(1).to({graphics:mask_3_graphics_99,x:710.3375,y:760.1719}).wait(1).to({graphics:mask_3_graphics_100,x:717.6786,y:756.8313}).wait(1).to({graphics:mask_3_graphics_101,x:725.0196,y:753.4906}).wait(1).to({graphics:mask_3_graphics_102,x:732.3607,y:750.15}).wait(1).to({graphics:mask_3_graphics_103,x:739.7018,y:746.8094}).wait(1).to({graphics:mask_3_graphics_104,x:747.0429,y:743.4688}).wait(1).to({graphics:mask_3_graphics_105,x:754.3839,y:740.1281}).wait(1).to({graphics:mask_3_graphics_106,x:761.725,y:736.7875}).wait(1).to({graphics:mask_3_graphics_107,x:769.0661,y:733.4469}).wait(1).to({graphics:mask_3_graphics_108,x:776.4071,y:730.1063}).wait(1).to({graphics:mask_3_graphics_109,x:783.7482,y:726.7656}).wait(1).to({graphics:mask_3_graphics_110,x:791.0893,y:723.425}).wait(1).to({graphics:mask_3_graphics_111,x:798.4304,y:720.0844}).wait(1).to({graphics:mask_3_graphics_112,x:805.7714,y:716.7438}).wait(1).to({graphics:mask_3_graphics_113,x:813.1125,y:713.4031}).wait(1).to({graphics:mask_3_graphics_114,x:820.4536,y:710.0625}).wait(1).to({graphics:mask_3_graphics_115,x:827.7946,y:706.7219}).wait(1).to({graphics:mask_3_graphics_116,x:835.1357,y:703.3813}).wait(1).to({graphics:mask_3_graphics_117,x:842.4768,y:700.0406}).wait(1).to({graphics:mask_3_graphics_118,x:849.8179,y:696.7}).wait(1).to({graphics:mask_3_graphics_119,x:857.1589,y:693.3594}).wait(1).to({graphics:mask_3_graphics_120,x:864.5,y:690.0188}).wait(1).to({graphics:mask_3_graphics_121,x:871.8411,y:686.6781}).wait(1).to({graphics:mask_3_graphics_122,x:879.1821,y:683.3375}).wait(1).to({graphics:mask_3_graphics_123,x:886.5232,y:679.9969}).wait(1).to({graphics:mask_3_graphics_124,x:893.8643,y:676.6563}).wait(1).to({graphics:mask_3_graphics_125,x:901.2054,y:673.3156}).wait(1).to({graphics:mask_3_graphics_126,x:908.5464,y:669.975}).wait(1).to({graphics:mask_3_graphics_127,x:915.8875,y:666.6344}).wait(1).to({graphics:mask_3_graphics_128,x:923.2286,y:663.2938}).wait(1).to({graphics:mask_3_graphics_129,x:930.5696,y:659.9531}).wait(1).to({graphics:mask_3_graphics_130,x:937.9107,y:656.6125}).wait(1).to({graphics:mask_3_graphics_131,x:945.2518,y:653.2719}).wait(1).to({graphics:mask_3_graphics_132,x:952.5929,y:649.9313}).wait(1).to({graphics:mask_3_graphics_133,x:959.9339,y:646.5906}).wait(1).to({graphics:mask_3_graphics_134,x:967.275,y:643.25}).wait(67).to({graphics:mask_3_graphics_201,x:967.275,y:643.25}).wait(9));

	// 底層文字
	this.instance_5 = new lib.補間動畫3("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(940.9,572);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(78).to({_off:false},0).wait(123).to({alpha:0.7813},0).to({alpha:0},8).wait(1));

	// 備份
	this.instance_6 = new lib.元件1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(2330.5,515.55,1,1,0,0,0,215.6,148.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AjeJKIBZgqQA+geg0huQhijQhHiBIgSAJQB8E6hyDpIg8iAQAjinhTjOIhjAvIgwhnIDXhkQhXgphoAXIgthfQBkgeBRAIQA3h/gOgeQgJgSgPAGIkNB/IgvhkIFKibQBXgdAoBEQApBWghBNQgcBQgWAzQAfAQAeAaIBRgnQAZgLAhAUQAaANAUArQAVAsAKA6QATBeAGA3IhdAsQAdA6AcA9QA0BwgLBJQgOBNhCAgIh1A3gAiRAAIgiAOQAqBMAwBkIgIg9QgNhXgRglQgEgHgHAAQgEAAgDACgACoGDQA5iKgbiVIhjAvIgxhqIB1g3QgKgagOgeIBug1QAPAgAKAZIB8g6QBPgaBBAtQBDAsAsBdQAyBqgPBKQgNBKhMAqQh2A4g3APIgyhqQBGgYBTgoQBDggg1hwQg+h3g5AbIh2A2QA7EHiIDbgAgfh6QBOglAzglQhMgtg+hmQgVBMgsBLIg8h+QAvh6gaiJIBmgxQAOArACAsIFOifIAyBrIhTAnQA3CUgbBtQBFgQBegtIAxBoQiqBQhwAEQhFBOiUBHgAAem1QBIB8BJAYIAHAAQAPglAAgjQADg0gihYg");
	this.shape.setTransform(-507.7769,714.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AoCBXIjCmaID1hzQBygmA5BiQBUCBCFEZQBsDnArBsQBDCNh8BBIh2AyIgyhqQA2gUAygYQAhgUgPgnIhbjMIiyBTQBrEHAVBoIhtAzQg4jli1mPgAmqAFIAPAfQAmBUAeBFICvhTIgJgSQgohWgnhMgAm7lKIhzA2IBTCyICmhOQglhJglhAQgKgWgZAAQgLAAgOAFgAkSoTIFwitQA/gYA8AkQA6AsAlBPQAkBNgKA/QgNA+hDAiIiLBBIgvhlIBjgvQA8gdgkhNQgkhLg5AOIjWBlICQE1ID9h3QA5gZA1ASQA7ASAcA9QBNC7gkCoQBCAPBCgGIA2B0Qh5AVhlgfQguBhhPBYIg9iBQAqg3AaguQiLhUhnitIBggtQBUB9BpA9QAah2g0h9QgYgzg/AdIjbBnID0IFIhyA1g");
	this.shape_1.setTransform(-630.15,775.049);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AlIGyQhpjfhcjfQgsBHg4A9Ig9h9QCdi9hGjJICDg+QAKAsADAqIF3ixQB4g2BjAlQBjAeA3BuQBXC5AXBSQAnBlgqBVQgmBPhtA4QhkAvhEAUIgyhpQBNgYBggsQBdgxgXh4QgOhFhUizQgag5hBgaQhCgag2AaImkDEQgHBMgZBFIFBiXQBtglBJATQBMAPAjBKQAjBHgkBOQgoBPhOAmIkoCMQAgBKAgBEQBCB5BwghQBwghCehKQD5h4CjhbIAvBjQhxBIkyCQQjbBohWAPQgsALgmAAQiLAAhGiTgAiEiNIkAB4QAfBKAcBCIEIh8QBng7geg+QgOgigtAAQghAAgwATg");
	this.shape_2.setTransform(-749.25,830.4943);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AlMJMQCJiDAjiwQiUgiiGiIQgXBJglBCIhGiRQBhj+hykIIB0g3QAUAzAMAvIB6g5QA6gXA+AXQA7AfAaA4QBTCvAICTQATCpglCsQg1DqixCggAiQCcQAEj4hKigQgZg1g9AIIhzA3QAYCsglCQIBRgmQBjBuBoAKgADBh0QhegXhXgfIhHiZQBeAfBWAZIi4mKIB1g3IDkHkQB/AbBxABIBDCQQh9gHhxgUIDJGsIh1A4g");
	this.shape_3.setTransform(-878.1,892.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("Ak7JwQBPglBLgmIiVk8IiaBJIgxhpICZhJIhAiGIg9AbQALAwAGAjIh0A2Qgci9gukeIC3hWQBAgUBHBAQB/CiBgCLIhpAxQgaghgYgkIg0AYIBACHIChhMIAyBpIihBLICTE5ICfhUIAwBnQiiBdj3B5gAnQkkIhPAlIAlChICqhRQgfgwgiguQgVgYggAAIgKABgAm5FVIBagqQA9BrBEB1IhaArQg/hyhChvgAihjyIC9haIh9kLIB1g3IB+ELIBKgjQBpggBEBKQA1BKBsDcQBBCKAgBTQAjCRhtA+QhlAvg5AQIgxhnQA6gVBBgbQAvgZgLgyQgIgfgOggIkoCLIBqDiIhxA1gABoAeIA5B3IEriMIg4h3gADkkwIjlBsIA4B6IEoiLQgVgmgTgbQgTgjgfAAQgPAAgSAJgAiCDFIBXgpQA4CDAgBrIhZAqQgph6gth1gAkXnhIByg2QA6BYBHBcIhyA2QhBhXhAhdgAB9qjIBzg2QAiB+AOBiIhsAzQgZhxgehsg");
	this.shape_4.setTransform(-193.7654,401.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AmzEeIK7lJQDKhaBXC1QBMCkilBdIjrBvQAzAiA7gdQCwhUCmhfIAxBoQiiBYi/BaQhVAkhLgSQhGgQgkg2Il4CwgAjbHHIAXAyIEFh8IgYgxgAkbE/IAXA0IEDh6QgNgegMgVgACXEYIAYAyIDjhqQA8gegJg4gAEvAqIjaBnIAYAzIEwiOQgXgaghAAQgYAAgeAOgAqHgxIGfjCIgWgvImuDLIguhhIPUnPIAuBiIm4DPIAXAvIEeiHQCLg2BUCJQAtBkALBIIh0A3QgJhUgohTQgrg/hHAdIj0BzIBrDkIhtA0IhsjkIkuCPIBqDgIhxA1gAl6B9IDchnIAgBFIjbBngAmuAMIDbhmIAhBIIjaBmgAAjhEIDkhsIAgBFIjjBrgAgRi0IDmhtIAhBHIjnBtg");
	this.shape_5.setTransform(-319.25,451.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AoCBXIjCmaID2hzQBwgmA6BiQBUCBCFEZQBsDnAsBsQBCCNh9BBIh2AyIgxhqQA2gUAygYQAhgUgPgnIhbjMIiyBTQBrEHAVBoIhtAzQg4jli1mPgAmpAFIAOAfQAnBUAdBFICvhTIgJgSQgohWgnhMgAm7lKIh0A2IBUCyICnhOQgmhJglhAQgKgWgZAAQgLAAgOAFgAkRoTIFwitQA+gYA8AkQA6AsAlBPQAkBNgKA/QgNA+hDAiIiLBBIgvhlIBigvQA9gdgkhNQgjhLg6AOIjWBlICRE1ID8h3QA5gZA0ASQA8ASAdA9QBMC7gkCoQBBAPBDgGIA2B0Qh4AVhngfQgtBhhPBYIg9iBQAqg3AZguQiKhUhoitIBhgtQBTB9BqA9QAZh2gzh9QgYgzg/AdIjcBnID0IFIhwA1g");
	this.shape_6.setTransform(-444,522.599);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AkCFEIhzBKIg4h3QDsiACIh9QhdgNhMgoQgwByhnByIg6h7QCCiTgTirIB1g3QAJAcABAYIFFiaQA0gYAqAJQAkAMATApQAZA1ghBNQgQA6guBEQCggeDAhZIA1BxQkoB8jXAMQhvB6ieBzIH8jwQDShdBUCxQBMCiivBhIp4ErgAF+B+IniDjIBKCcIHujpQBTgoglhPQgXgwguAAQgcAAgjARgABvkLIkhCJQBrAsB/gBQAfgjARgdQA7hFgNghQgIgSgPAAQgIAAgIAEgAqQkDIGkjFIgehAIB4g4IAeBAIEeiIQCag0A0BqQA0B4AJBJIh3A4QgciEgQgjQgVgshAAeIqiE+IBVC1Ih2A3g");
	this.shape_7.setTransform(-574.0115,579.3583);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AjLHaQiEgbg8iAQgohVAZhgQAShBA8hrQiThAgohUQgmhRAohOQAihGBVgoQBPgmBSAPQBXARAkBNQA0BvhZCvIEqB2QgHh0hajAIByg2QBsDvACCvIEIBtIidBKIiEg3QhBCliMBBQhfAuhZAAQggAAgfgGgAkcEFQAjBIBTASQBKAOBPglQBmgwAth9IleiMQhpCmAlBQgAlYlZQhaArAmBRQANAbB0AyQBDh1gUgrQgTgogkgGQgPgDgOAAQgWAAgSAIg");
	this.shape_8.setTransform(-686.8441,642.4974);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AlsIqQgChihSiuIBdgsQCFErhLChgAlZC9Ig9AdQhNAkgdg9QgIgSAOg2IAZiEIhOAkQg4AQgbg5QgKgVAHgdIBGlkICFg/IhNFyIBEggIAji2ICDg+IhkHaIBrgyQAdgOgUgqIgmhRIBkgvIA6B8QAtBfhlA3IgiAQIDZHOIhqAygAi/CgIBagrQA9B/A5BNIBcDDQiShNiakXgAlGnxIGIi5QC3g7BXCzQBBB6BNClQBLCfBBCUQBYDGilBVQg+Adg1AUIgvhkQA1gUA8gcQBJgigyhqQg2h5hUi0QhGiThKiFQgzhshXAiIkPCAIGqOKIhoAxgACpChQgbgvgZg2QglhOgdhGIBdgrIgyhrIhqAyIguhhIApgTQgog5grhGIBWgpIBUB+IAggPQgRhOgWhEIBWgoQAcBJAJBJIAugVIAuBhIhfAtIAyBqIBUgnIAsBgIiwBTIARAiQAXAxAPAaQAjAzApgTQBKgoAtgkIAtBfQgeAgh5A5QgeAOgbAAQg7AAgshEg");
	this.shape_9.setTransform(-816.2446,698.9937);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AlIGyQhpjfhcjfQgrBHg5A9Ig9h9QCdi9hGjJICEg+QAJAsADAqIF3ixQB4g2BjAlQBjAeA3BuQBXC5AXBSQAnBlgrBVQgmBPhsA4QhkAvhEAUIgxhpQBMgYBggsQBdgxgXh4QgOhFhUizQgbg5hAgaQhCgag2AaImjDEQgJBMgYBFIFBiXQBtglBJATQBNAPAiBKQAiBHgjBOQgoBPhOAmIkpCMQAhBKAgBEQBDB5BvghQBwghCdhKQD6h4CjhbIAuBjQhwBIkxCQQjcBohVAPQgtALgmAAQiLAAhGiTgAiEiNIj/B4QAeBKAbBCIEJh8QBng7gdg+QgPgigtAAQghAAgwATg");
	this.shape_10.setTransform(-937.6,754.5943);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_6}]}).wait(210));

	// BG
	this.instance_7 = new lib._1();
	this.instance_7.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(210));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.2,600,2633.2,610.3);
// library properties:
lib.properties = {
	id: 'E89A8B62AD09F8488DA60F12CFE41699',
	width: 1920,
	height: 1200,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/en_main_atlas_.png?1576472034757", id:"en_main_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E89A8B62AD09F8488DA60F12CFE41699'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;