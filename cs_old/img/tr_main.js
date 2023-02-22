(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"tr_main_atlas_", frames: [[0,0,1920,1200],[0,1202,565,364]]}
];


// symbols:



(lib._1 = function() {
	this.spriteSheet = ss["tr_main_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.MAGNIFYINGGLASS = function() {
	this.spriteSheet = ss["tr_main_atlas_"];
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
	mask.setTransform(88.4,101);

	// 圖層 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#53C2E7","#14658F"],[0,1],-49.4,-49.4,59,59).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape.setTransform(164.1,12.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#53C2E7","#14658F"],[0,1],-137.7,-137.7,-29.3,-29.3).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_1.setTransform(164.1,189.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#53C2E7","#14658F"],[0,1],-125.1,-125.1,-16.7,-16.7).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_2.setTransform(164.1,164.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#53C2E7","#14658F"],[0,1],-112.4,-112.5,-4.1,-4.1).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_3.setTransform(164.1,138.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#53C2E7","#14658F"],[0,1],-99.8,-99.9,8.5,8.5).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_4.setTransform(164.1,113.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#53C2E7","#14658F"],[0,1],-87.2,-87.2,21.1,21.1).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_5.setTransform(164.1,88.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#53C2E7","#14658F"],[0,1],-74.6,-74.6,33.8,33.8).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_6.setTransform(164.1,63.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#53C2E7","#14658F"],[0,1],-62,-62,46.4,46.4).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_7.setTransform(164.1,37.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#53C2E7","#14658F"],[0,1],-36.8,-36.8,71.6,71.6).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_8.setTransform(138.8,12.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#53C2E7","#14658F"],[0,1],-125.1,-125.1,-16.7,-16.7).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_9.setTransform(138.8,189.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#53C2E7","#14658F"],[0,1],-112.4,-112.4,-4.1,-4.1).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_10.setTransform(138.8,164.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#53C2E7","#14658F"],[0,1],-99.8,-99.9,8.5,8.5).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_11.setTransform(138.8,138.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#53C2E7","#14658F"],[0,1],-87.2,-87.2,21.1,21.1).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_12.setTransform(138.8,113.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#53C2E7","#14658F"],[0,1],-74.6,-74.6,33.8,33.7).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_13.setTransform(138.8,88.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#53C2E7","#14658F"],[0,1],-62,-62,46.4,46.4).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_14.setTransform(138.8,63.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#53C2E7","#14658F"],[0,1],-49.4,-49.4,59,59).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_15.setTransform(138.8,37.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#53C2E7","#14658F"],[0,1],-24.1,-24.2,84.2,84.2).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_16.setTransform(113.6,12.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#53C2E7","#14658F"],[0,1],-112.5,-112.4,-4.1,-4.1).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_17.setTransform(113.6,189.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#53C2E7","#14658F"],[0,1],-99.9,-99.8,8.5,8.5).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_18.setTransform(113.6,164.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#53C2E7","#14658F"],[0,1],-87.2,-87.2,21.1,21.1).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_19.setTransform(113.6,138.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#53C2E7","#14658F"],[0,1],-74.6,-74.6,33.7,33.7).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_20.setTransform(113.6,113.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#53C2E7","#14658F"],[0,1],-62,-62,46.4,46.4).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_21.setTransform(113.6,88.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#53C2E7","#14658F"],[0,1],-49.4,-49.4,59,58.9).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_22.setTransform(113.6,63.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#53C2E7","#14658F"],[0,1],-36.8,-36.8,71.6,71.6).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_23.setTransform(113.6,37.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#53C2E7","#14658F"],[0,1],26.3,26.3,134.7,134.7).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_24.setTransform(12.6,12.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#53C2E7","#14658F"],[0,1],-62,-62,46.4,46.4).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_25.setTransform(12.6,189.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#53C2E7","#14658F"],[0,1],-49.4,-49.4,59,59).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_26.setTransform(12.6,164.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#53C2E7","#14658F"],[0,1],-36.8,-36.8,71.6,71.6).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_27.setTransform(12.6,138.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#53C2E7","#14658F"],[0,1],-24.2,-24.2,84.2,84.2).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_28.setTransform(12.6,113.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#53C2E7","#14658F"],[0,1],-11.5,-11.5,96.8,96.8).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_29.setTransform(12.6,88.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#53C2E7","#14658F"],[0,1],1.1,1.1,109.4,109.4).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_30.setTransform(12.6,63.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#53C2E7","#14658F"],[0,1],13.7,13.7,122.1,122.1).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_31.setTransform(12.6,37.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#53C2E7","#14658F"],[0,1],13.7,13.7,122.1,122.1).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_32.setTransform(37.9,12.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#53C2E7","#14658F"],[0,1],-74.6,-74.6,33.7,33.8).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_33.setTransform(37.9,189.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#53C2E7","#14658F"],[0,1],-62,-62,46.4,46.4).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_34.setTransform(37.9,164.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#53C2E7","#14658F"],[0,1],-49.4,-49.4,58.9,59).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_35.setTransform(37.9,138.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#53C2E7","#14658F"],[0,1],-36.8,-36.8,71.6,71.6).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_36.setTransform(37.9,113.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#53C2E7","#14658F"],[0,1],-24.2,-24.2,84.2,84.2).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_37.setTransform(37.9,88.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#53C2E7","#14658F"],[0,1],-11.5,-11.5,96.8,96.8).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_38.setTransform(37.9,63.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#53C2E7","#14658F"],[0,1],1.1,1.1,109.4,109.4).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_39.setTransform(37.9,37.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#53C2E7","#14658F"],[0,1],1.1,1.1,109.4,109.4).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_40.setTransform(63.1,12.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#53C2E7","#14658F"],[0,1],-87.2,-87.2,21.1,21.1).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_41.setTransform(63.1,189.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#53C2E7","#14658F"],[0,1],-74.6,-74.6,33.7,33.8).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_42.setTransform(63.1,164.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#53C2E7","#14658F"],[0,1],-62,-62,46.4,46.4).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_43.setTransform(63.1,138.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#53C2E7","#14658F"],[0,1],-49.4,-49.4,58.9,58.9).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_44.setTransform(63.1,113.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#53C2E7","#14658F"],[0,1],-36.8,-36.8,71.6,71.6).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_45.setTransform(63.1,88.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#53C2E7","#14658F"],[0,1],-24.2,-24.2,84.2,84.2).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_46.setTransform(63.1,63.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#53C2E7","#14658F"],[0,1],-11.5,-11.5,96.8,96.8).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_47.setTransform(63.1,37.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#53C2E7","#14658F"],[0,1],-11.6,-11.5,96.8,96.8).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_48.setTransform(88.4,12.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#53C2E7","#14658F"],[0,1],-99.9,-99.8,8.5,8.5).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_49.setTransform(88.4,189.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#53C2E7","#14658F"],[0,1],-87.2,-87.2,21.1,21.2).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_50.setTransform(88.4,164.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#53C2E7","#14658F"],[0,1],-74.6,-74.6,33.7,33.7).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_51.setTransform(88.4,138.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#53C2E7","#14658F"],[0,1],-62,-62,46.4,46.4).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_52.setTransform(88.4,113.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#53C2E7","#14658F"],[0,1],-49.4,-49.4,58.9,58.9).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_53.setTransform(88.4,88.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#53C2E7","#14658F"],[0,1],-36.8,-36.8,71.6,71.6).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_54.setTransform(88.4,63.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#53C2E7","#14658F"],[0,1],-24.2,-24.2,84.2,84.2).s().p("Ah9AAIB9h9IB+B9Ih+B+g");
	this.shape_55.setTransform(88.4,37.9);

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
	this.shape.setTransform(543.7,362.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件6, new cjs.Rectangle(0,0,1087.3,725.2), null);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E6E6E").s().p("AjkJsIBdgtQBCgfg4h1QhpjbhMiHIgTAKQCEFKh2D3IhBiHQAjiyhYjXIhoAyIg0htIDjhsQhcgqhtAZIgwhjQBpghBWAJQA4iJgOgeQgKgVgQAIIkdCIIgyhpIFcinQBbgfAsBJQArBbgiBRQgeBUgVA1QAhASAfAaIBWgqQAZgMAkAVQAbAQAVAsQAWAtANA+QAUBkAGA6IhhAvQAeA9AeBAQA4B1gLBOQgNBThHAiIh6A7gAiXAAIglAQQArBPA1BpQgEghgGgeQgMhdgSgmQgFgIgHAAQgEAAgDACgAC1GWQA8iTgdibIhoAyIg1hwIB7g6QgLgdgPgfIBzg3QAQAgAKAcICFhAQBSgbBFAuQBHAuAvBhQA2BwgQBPQgMBPhRAuQh9A8g6AQIg2hxQBLgZBYgqQBFgkg5h1QhCh9g7AcIh8A7QBAEUiNDngAgiiBQBSgpA3gnQhQgthEhsQgUBQguBQIhAiGQAxiBgeiQIBsg0QAPAuAEAtIFfioIA1BwIhXApQA8CbgfBzQBLgSBigvIA1BtQi0BWh1AGQhJBSicBLgAAfnOQBLCCBMAYIAJAAQARgngCgkQADg4gkhbg");
	this.shape.setTransform(805.5,214.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6E6E6E").s().p("AoeBgIjQmxIECh8QB3gnA+BnQBaCFCOEoQB1D1AvByQBHCViEBFIh8A1Ig2hwQA5gVA1gaQAigWgPgoIhijXIi8BbQB1ETAVBuIhzA3Qg9jzjBmigAnBAJIAPAgQApBXAfBKIC6hZIgKgVQgrhagphOgAnVlbIh7A7IBaC8ICwhVQgphOgnhCQgLgXgaAAQgMAAgOAFgAkkowIGCi5QBCgbBAAoQA/AuAnBSQAnBRgLBEQgOBBhHAkIiSBGIgzhqIBpgyQBBghgnhRQgmhOg9AOIjjBtICcFHIEJiAQA9gbA3ASQA/ASAgBAQBSDFglCxQBFAQBGgGIA7B6QiBAWhtgeQgtBlhUBdIhAiIQAqg4AcgzQiUhWhui4IBmgwQBYCFBwBAQAbh/g3iCQgag1hCAeIjoBwIEGIgIh2A4g");
	this.shape_1.setTransform(681.6,277.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6E6E6E").s().p("AlWHMQhyjshjjoQgsBLg+BAIhAiDQCljIhMjUICKhCQALAuAEArIGKi9QB+g7BpAoQBpAdA7B0QBeDEAXBXQApBpgqBbQgnBUhzA8QhpAyhJAVIg1hvQBTgZBjgwQBhg0gYh/QgPhIhbi8Qgdg9hDgaQhEgbg6AcIm6DTQgHBPgaBJIFSiiQBzgoBNAUQBRAPAkBNQAlBLgkBTQgqBThTApIk4CXQAiBOAiBHQBJCAB0glQB3gjCnhQQEGiBCrhhIAyBpQh2BMlDCbQjnBvhZAQQgwANgqAAQiQAAhJiagAiOiTIkMCBQAfBMAeBGIEYiFQBtg/gghCQgPghguAAQgjAAg2AUg");
	this.shape_2.setTransform(561,334.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6E6E6E").s().p("AlaJtQCRiLAki5QicgiiPiPQgYBNgnBEIhKiXQBjkOh5kVIB6g7QAUA3AOAyICCg+QA8gZBBAXQA+AiAcA7QBYC3ALCcQAVCzgnC0Qg0D4i7CqgAiWClQADkGhRipQgbg4g+AJIh6A6QAcC2goCZIBWgpQBpB1BuAJgADNh9QhlgXhbggIhMigQBjAgBcAYIjFmfIB5g6ID1H9QCHAbB4ABIBICXQiEgGh6gTIDYHBIh7A6g");
	this.shape_3.setTransform(430,398.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6E6E6E").s().p("AlLKCQCBhtAihmIjoBwIg3hyIHRjfIgmhTImkDJIg0hsIGkjJIgphUIm4DSIg0hsICyhVIhNhVIisBSIg3hzICIhBQgug0gzhAIB3g5QAyA9AxA2IBYgqIhIiWIB1g3IBHCVIB9g8IhIiWIB1g3IBHCWIBggvQgKhNgQhIIB2g4QAUBOAKBEIB+g8IA3BzIiaBKQALA9ADA3ICxhUIA0BsInCDXIAoBVIGnjKIA0BrImnDJIAoBTIHLjaIA2BxIjdBqQCAAoCBgcIA6B6QkKAwi/hyIhgAtIB1DzIh7A6Ih0jxIhiAvQgPDIjjDAgAmHjEQAoAvAnAnIGYjEIgMh1g");
	this.shape_4.setTransform(303.2,457.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6E6E6E").s().p("AiiJKICAg9QBVAyA5A+Ih5A7Qg6hAhbgugAmBIPILSlbIgcg4IqYE/IgthdIGZjEIgag4ImCC6Ii0l3IGCi4IgZg0ImqDNIgwhlIGqjMIgghFIBzg3IAgBEIG5jUIAwBlIm5DUIAZAzIDVhnQBhgtBOAdQBOAYArBOQAnBUgeBHQgcBThcAxIjbBoIAbA3IDxhyQAwgXgNgbIgPghIBug1IAXAxQAyBniIBCIgIADIAcA4IDDhdIAyBpIjCBdIAaA2QAiBIgSA/QgiBGg/AgIi0BWIgyhpICVhHQBLgkgTgoIgihHIrTFcgAlsBTIAcA5IEUiEIgcg4gAmtg1IAZA1IEUiEIgZg1gAAahnIAcA4IDOhjQBIgogHg9gAColUIjOBkIAZA0IEqiPQgZgWgiAAQgaAAggANg");
	this.shape_5.setTransform(171.4,511.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6E6E6E").s().p("AofBgIjQmxIEDh8QB3gnA9BnQBbCFCOEoQB1D1AuByQBHCViEBFIh6A1Ig2hwQA4gVA2gaQAhgWgPgoIhijXIi8BbQB1ETAVBuIhzA3Qg8jzjDmigAnBAJIAQAgQAnBXAhBKIC5hZIgKgVQgrhagphOgAnVlbIh7A7IBaC8ICvhVQgohOgnhCQgLgXgaAAQgMAAgOAFgAkkowIGCi5QBDgbA/AoQA/AuAnBSQAnBRgMBEQgNBBhGAkIiSBGIgzhqIBngyQBBghgnhRQglhOg+AOIjiBtICcFHIEJiAQA8gbA4ASQBAASAeBAQBTDFglCxQBEAQBHgGIA6B6Qh/AWhtgeQguBlhTBdIhCiIQAsg4AbgzQiThWhui4IBlgwQBYCFBwBAQAbh/g3iCQgZg1hCAeIjpBwIEFIgIh1A4g");
	this.shape_6.setTransform(240.2,331);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6E6E6E").s().p("AkOFYQg6AnhAAnIg7h7QD3iKCQiGQhjgNhQgpQgwB5hsB5Ig/iDQCHiZgVi1IB8g8QAIAeACAaIFYilQA2gaAqAJQAoANAVArQAbA4giBRQgTA+gvBGQCqghDHheIA5B3Qk2CEjkAQQh0CCilB4IIVkAQDehjBZC5QBSCri3BoIqZFAgAGVCCIn8D0IBOCjIIIj4QBYgsgnhSQgYgzgwAAQgdAAgmASgAB0kZIkwCSQBvAuCHgDQAgglATgeQA8hLgNgiQgIgRgPAAQgIAAgJAEgAq2kOIG5jSIgfhBIB/g9IAfBBIEsiQQCjg4A3BxQA5B+AKBLIh9A8QgfiKgSglQgXgvhDAgIrGFVIBcDAIh7A6g");
	this.shape_7.setTransform(108,389.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(16.5,-12,887.1,624.3), null);


(lib.補間動畫3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlKI0QAUgcAGgsIACglIgOpnQgEgXAFgaQAKg0AlgQIChhGQgNAJgMATQgZAoABAxIAGEGIEuiCIgKmkIAFgqQAKgvAWgXQBIATBQAuQgbAxACBVIATMqIjIBXQAbgNAIhFIgFlDIktCDIAIFdIgCAeQgHAigUAaQhWgXhNgsg");
	this.shape.setTransform(-58.6,-54,1.108,1.108);

	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(-54.3,-50.1,0.896,0.896,-23.5,0,0,91,107.3);
	this.instance.alpha = 0.199;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#7ECEF4","#136C9B"],[0,1],-54.3,-21.4,51.9,20.4).s().p("AjvJhQh3gvhchYQhghbg1h6Qg1h6gCiEQgBh/Avh3QAvh3BYhdQBbhfB6g1QB7g1CEgCQB+gBB3AvQB3AvBcBYQBgBbA2B6QA1B6ABCEQABB/gvB3QgvB3hXBdQhcBfh6A1Qh6A1iEACIgFAAQh8AAh1gug");
	this.shape_1.setTransform(-58.8,-54.3,1.108,1.108);

	this.instance_1 = new lib.元件2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13.6,12.5,1,1,0,0,0,443.4,319.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1B72A9").s().p("A3rIQIAzgXIATBkIBGggIgShjIA1gYIAnD5IgzAXIgThxIhGAfIASByIg1AXgAzoKXQgQgIgDgZQgFgUAIgQQAGgUAQgRQAEgDBEglIAAgLQgEgOgIgGQgIgHgNAGQgWAKACAcIguAUQAAgoAPgSQAPgQAkgSQAMgFAUgEQAPgBAMAFQAKAGAFAIQAEAGAEAbIALBXQADAZAFAJIgyAWIgDgKIgPAPQgFAHgXAKQgSAIgOAAQgKAAgIgDgAzKJfQABAJAHAFQAGAEALgEQAUgJAEgKQAJgWgBgMIgCgUQg8AaAFAhgAxGGUIAxgWIAdC7IgxAXgAutGwIhdh2IAygXIBBBUIAmiBIAygWIg4C5IAOBjIgyAWgAsGHJQgMgCgGgMQgHgMgDgaIgRh8IAwgWIARCEQAFAZAZgKQAIgEAHgLQAIgJABgHIgDghIgOhrIA1gYIAaDBIgyAVIgEgiQgKArgpARQgOAHgKAAIgHgBgAxSFNIAzgWIAGAsIgyAWgAn4B1Ig+AbIgHgkICvhOIAFAkIg/AfIAhDSIgxAWgAlNEAQgRgEgQgQQgPgQgFgeQgHgvASgkQATgnAkgPQAhgPAaAQQAbAOAKA5IhsAxIAAAIQADATAMAIQAJAFAOgGQAUgJAEgUIAugVQgKBAg2AZQgWAJgSAAIgFAAgAk4BZQgcALACApIA8gbQgGgcgQAAQgGAAgGADgAiiCkQgZgQgJgsQgFgrASgnQARgkAngSQAggOAXAMQARAJALAVIgwAUQgNgWgSAIQgPAGgGAUQgEAVADAbQADAQAHAQQAEAPAFACQAKAHAMgEQAUgKADgZIAugVQABAagQAVQgPAegjAPQgRAIgQAAQgQAAgNgIgAgbiTIAugVIAPBiQAGgjAugUQAQgHAOADQAOABAGANQAJANADAWIATB9IgyAVIgXiLQgCgHgFgBQgGgDgJADQgPAHgLAOQgGAKABAWIABAOIASBqIgwAVgAD7kDIBYgnQApgRAcAOQAVALAKAZQAMAuggAkIgkAZIg2AZIANBhIgzAXgAFekIIgpASIAMBKIAogTQATgHAHgSQAHgNgGgMQgIgVgRgCgAISiBQgPgHgGgjIgQhhIgaAMIgFgiIAdgOIgGgvIAtgVIAIAwIAjgQIAHAiIgmAQIAPBZIABAQQADAKADADQAFADATgIIAIgFIAGAgIgaAOQgUAKgOAAQgHAAgFgDgAKXi6QgVgCgPgRQgOgRgGgeQgHgvATgkQATglAjgRQAhgOAaAPQAbAPAJA5IhrAwIACAKQACATAMAFQAJAHAQgHQAUgIADgWIAugVQgMBDg0AYQgWAJgOAAIgIgBgAKqlhQgdANADAoIA7gbQgGgdgQAAQgFAAgGADgAMnkvIAzgXIAIA7IgzAXgAOoo7IA2gZIAiDYIBigrIADApIiUBBgASNmcQgQgHgGgjIgPhhIgcAMIgEgjIAegMIgHgxIAtgVIAHAxIAlgQIAHAiIglAPIAOBaIABAPQACAKAEADQAGAEARgIIAJgFIAEAgIgYAPQgUAJgOAAQgHAAgFgDgAT3nZQgKgKgIgRQgFgQgEgVQgIgvAMgiIADgFQALgdAdgOQAOgGARAAQARAAAKAGIgQhZIAwgVIApEFIgsAUIgFgfQgGARgQATQgQAPgPAHQgMAFgLAAQgOAAgMgKgAUip6QgKAEgGAMQgJAUAGAnQALA7AbgMQAUgIAFgOQAIgPgFgRIgFgjIgBgLQgHgVgKgEQgDgCgEAAQgHAAgKAFgAWwpQIA0gYIAIA8IgzAWg");
	this.shape_2.setTransform(191.3,-118.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#135E8A").s().p("A3uOXQAugVAIg7QAEgagEg5IgBgHQgJhdgkkCIBTglQgQAIAMBJQAXB5ANDJIACAaQAJBugwA1QgZAagaAFgAw9LnQAmgOAsgUQA9gagBgkIAAgFIlMCUIAAgOQgBhggFhVIg8AbIgKg9IBDgdQgKhbgJhIIgEgdIF3imIAcC8IAlgRIAKgTIAMBLIgyAWQAFAjALBaIAfgOIALgYIANBPIg0AYQAAA9gQAdQgUAniAA6IgIADgAy/I1QAEA2ACBOIEGh3IgOh9gAzRF2IABACQAJA5AFBEID5hvIgRh+gAx3JFIAdg1QA5AQAeAQIgfA9QgegWg3gSgAoSHeQAigKAegMQAUgHASgJQAfgOgEgSIgaiUIkqCEIgMhHIEpiFIgThrIi3BTIgNhFIGMivIARgdIAOBYIieBHIASBqIEEh0IAPgkIASBiIkXB9IAbCgQAJAogRAaQgFAJgHAHQgSARgfANIhrAvgAyWGMIAeg1QAwAKAuAVIghA8QghgTg6gTgA2DGAIAQgYQAhg4ARgsQASg0AMhKIA/AAIgLA5IFDiQIAKgXIAQBVIl0CmIgCADQgLAmgbAzIgaAsgA3lFPQgYgKgKgYQgKgWAIgYQALgXAWgKQAXgKAXAJQAYAJAKAXQALAXgJAYQgJAXgYALQgMAFgMAAQgLAAgLgEgACVhkIgFAdQgYBygtBgIgnhFQAkhJAYhQQANgqAKgrIAHghIh2A1IgKhCIB6g2IgUhpIheA3IgWg8QAwgbAsgbQBJguA7gzIAjA3QghAcgiAZIgPAKIAUBzIBfgqIAGgPIAOBNIhoAuIAEAUIAfATIAiAXIA+AuIgaBKIhXhUIA+FYIg/AbgAsOgNIDghjQAQARAXAHQAWAFAXgLQAWgKAMgUQAEgHACgHQAEgPgBgPIAAgBIEMh4IAjDKIhIAgIgXiDInbDTIAYCDIhJAggAI8iSIjlCOIgUhAIDtiUIhRm/IBBgdIBNG1IAtgcIAKgZIAWBSIhAApIAoDcIhBAdgANNiDQAbgFAcgNQASgHAFgMQACgGgBgHIgdigQgmAlgnAgIgYhRIAGgEQApgbApgjIgii2IhYAnIgMhDIBYgoIgZiOIBEgeIAYCPIA3gZIAVgcIAPBVIhOAjIAbCVQAngrAbgmIAPBRQghArgiAkIAlDOQADAQAAANQgBAXgJAPQgFAIgIAIQgPAPgbANIg6AZgAoMhnQgagJgKgYQgEgIgBgIQgBgIACgIQABgHADgIQAIgWAYgLQAXgKAWAIQAZALAJAWIAGARQABAOgEAOIgBACQgJAXgWAKQgNAGgMAAQgLAAgKgEgAQOjJQBKg/Azg3IAZgcQAOgQAMgQQhMgtg5hQIAyg7QA5BSBGAkIAFgHQAohFAdiLIkXB8IgMhGICJg9IgShmIiKA9IgMhIICJg9IgUhvIBGgfIATBvICJg8IASgnIARBkIifBIIATBlICQhBIALA+IAAAAQgVCTgzBiIgQAkQAfAKBAAEQA7AFA1gDIALgIQAMgIAEgEIgiBlQhCAAhFgHQg/gGgigLIgNgEIgDAEIgcAkQg2BBhQBOIgbAagAGMjcQgYgIgKgXQgKgXAJgYQAIgYAXgLQAYgJAYAJQAYAJAKAWQAKAYgKAXQgIAYgXAKQgMAGgMAAQgMAAgLgFgAF2mfQgYgJgKgXQgKgYAIgXQAKgXAXgLQAYgLAWALQAYAHAKAYQALAWgJAZQgJAXgXALQgNAGgMAAQgLAAgLgFg");
	this.shape_3.setTransform(176.3,-174.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.instance_1},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-413.3,-319.1,887.1,624.3);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("An3KIQgFAAgEgDQhYhGhDhbQgDgEgBgFQAAgFACgFQADgEAEgDQAggTAagqIAUgpIEfrAQAJgcATgdIAAAAQAqhAA7ABIDYAAQAHAAAFAFQAFAEABAHQAAAGgDAGQgEAFgHACQgQAEgUANQgqAegVA0IAAgBIhyEWIFyAAIDAnWIABgDIAbgtIABgBQAlg1AogRQAEgCAFABQAFAAAEADQBLA8BEBcQAFAGgBAHQgBAHgGAFQgzAoglBcIl7OiQgCAFgFADQgEADgGAAIkNAAQgHAAgFgFQgFgFAAgHQgBgHAFgGQAFgFAIAAQAdgEAkhAIAAABIAjhNIgBAAIBtkLIlxAAIifGGIgBACIgRAgIgBABQgaAogoAVQgEACgEAAIgCAAg");
	this.shape.setTransform(103.2,104.8,1.009,1.009,-23.5);

	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(106.7,106.4,0.954,0.954,-23.5,0,0,91.2,107.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#7ECEF4","#136C9B"],[0,1],-51.1,-51.1,48.8,48.8).s().p("AlBL6QiUg+hzhzQhzhzg/iUQhAiagBioQABioBAiZQA/iUByhzIABAAQBzhzCUg/QCZhACoAAQCpAACZBAQCUA/BzBzIAAAAQBzBzA/CUQBACZAACoQAACohACaQg/CUhzBzQhzBziUA+QiZBBipABQiogBiZhBg");
	this.shape_1.setTransform(102.8,104.3,1.009,1.009,-23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件7, new cjs.Rectangle(-14,-20.3,231.4,243.9), null);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5).p("AAEAeIBUAAQACgaAAgNIBOAAQAAAXgCAQIBaAAQA1AHAaArQAbAtAABCQAABLgdAoQgdApg4AEQhWAAgkgHIAAhMQAwAGA8AAQAwgCAAhQQgDhWgpAAIhUAAQgmCpiKBaIABhlQBHhCAYhcIhGAAgAB9j/QAGBcAlAiIAEACQAVgRAIgVQARgeADg8gABihgQgggtgKhOQggAmguAgIAAhaQA9g7AWhYIBIAAQgEAegJAaIDuAAIAABLIg7AAQgIBmgvA4QAvAKBCAAIAABKQh5AAhEgcQg8AahrAAIAAhJQA4AAApgIgAjLgwIgNAAQgPDZiCBpIAAhcQBChZAIiNIhGAAIAAhKICaAAQgngwhDgPIAAhDQBDAKAsAbQBEg8AAgVQAAgOgLAAIjBAAIAAhHIDsAAQA7AHAEAzQAAA+goAkQgkAkgdAaQAOASAKAXIA7AAQARAAAOAVQALAQAAAeQAAAggKAjQgNA6gNAlIhDAAIAABVQAABQgbAoQgcAqgxAAIhTAAIAAhQIBAAAQAsAAAAhQQAAiVgGhdgAh2BOQAFgQAGgWQASg2AAgZQAAgJgJAAIgZAAQAEA7ABBDg");
	this.shape.setTransform(797.7,190.5,1.62,1.62,-24.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgVETQBHhCAYhcIhGAAIAAhMIBUAAIACgoIBOAAQAAAXgCARIBaAAQA1AGAaAsQAbAtAABCQAABLgdAoQgdApg5AEQhVgBgjgGIAAhMQAvAFA8AAQAwgBAAhQQgDhXgpABIhTAAQgnCpiKBagAkxFtIAAhRIBAAAQAtAAAAhQQAAiUgHhdIgNAAQgODZiDBoIAAhbQBChaAJiMIhHAAIAAhKICaAAQgngwhDgPIAAhDQBDAJAtAcQBDg9AAgUQAAgOgLAAIjBAAIAAhIIDtAAQA6AIAFAzQgBA+goAkQgjAjgeAbQAOASAKAXIA7AAQARAAAOAVQALAPAAAfQAAAfgJAkQgPA6gMAlIhEAAIACBVQAABQgbAoQgdAqgxAAgAh3BYIANglQARg2AAgZQAAgJgIAAIgaAAQAEA6AABDgACogfQg8AahrAAIAAhIQA4gBApgHQgggugKhOQggAnguAgIAAhbQA9g6AVhYIBKAAQgFAegJAZIDvAAIAABMIg8AAQgIBlguA5QAuAKBCAAIAABJQh5AAhEgcgACoh3IAEADQAUgSAJgUQARgeADg8IhgAAQAHBcAkAhg");
	this.shape_1.setTransform(797,188.9,1.62,1.62,-24.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5).p("AgBl4IEGAAQAsAEAYAmQAXAqAAA4QAAA3gZAjQgZAhgwAAIhjAAIAAhIIBHAAQAsgBAAg3QAAg1gmgJIiaAAIAADeIC0AAQAoABAbAYQAeAbAAArQgHCDhDBYQAhAaApAQIAABTQhMgVg1guQgyArhIAeIAAhcQAkgSAfgXQg7hWgMiDIBFAAQAOBhAsBBQAxg/AEhXQAAgigsgBIieAAIAAFxIhPAAgAjvixIB4AAQgDhEgDghQAAgXgfgEIhTAAgAiKl2QBNAKAGBJQAPBjAADHQAACngFBLQAABlhbADIhSgDIAAhNQAiAEAnAAQAYgDACgbQACgxABhfIiAAAQgIC4gSBBIhOAAQAfiWAEkZIAAkngAjxAaIB+AAIAAgOQAAg8gCg3Ih6AAg");
	this.shape_2.setTransform(668.7,249.5,1.62,1.62,-24.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABlEWQAkgSAfgXQg7hWgMiDIBFAAQAOBhAsBBQAxg/AEhWQAAgjgsgBIieAAIAAFxIhPAAIAArfIEGAAQAsAEAYAlQAXAqAAA4QAAA3gZAjQgZAhgwAAIhjAAIAAhIIBHAAQAsgBAAg3QAAg0gmgJIiaAAIAADeIC0AAQAoABAbAXQAeAbAAArQgHCDhDBZQAhAZApAQIAABTQhMgVg1guQgyArhIAegAjdFkIAAhNQAiAEAnAAQAYgDACgbIADiQIiAAAQgIC4gSBCIhOAAQAfiWAEkaIAAknICvAAQBNAKAGBJQAPBkAADGQAACngFBLQAABlhbAEgAj0AhIB+AAIAAgOQAAg9gCg3Ih6AAgAjyirIB4AAQgDhDgDgiQAAgXgfgEIhTAAg");
	this.shape_3.setTransform(668.7,248.4,1.62,1.62,-24.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5).p("AjRluIBdAAQgGAdgJAYIEKAAQBWABAwAyQAyAsACBQQAACDgKA3QgFBFgwAoQgsAkhQACQhHAAgtgHIAAhMQA1AJBDAAQBDgEAVhOQAKgoAAiCQAAgpgeggQgfghgoAAIkrgBQgZAqgiAiIDmAAQBJAIAmAgQApAeAAAzQAAAzgqAkQgtAjg5ABIjTABQgCAtAAA3QAGBZBKALQBKAMByAAQCugCB9gIIAABIQhWAKjbAAQicAAg2gPQiFgYAAiHQAAimAHiVQgsAegzAUIgBhaQCQhDAPiJgAi9hZQgDAtgCA0IC+AAQBMgGAAgsQAAgohPgHg");
	this.shape_4.setTransform(543.8,302.7,1.62,1.62,-24.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AiSFgQiFgYAAiGQAAinAHiVQgsAfgzATIgBhaQCQhDAPiJIBdAAQgGAdgJAYIEKAAQBWABAwAzQAyArACBQQAACDgKA3QgFBFgwAnQgsAlhQACQhHAAgtgHIAAhMQA1AJBDgBQBDgDAVhOQAKgoAAiCQAAgpgeghQgfgggoAAIkrgBQgZAqgiAiIDmAAQBJAIAmAfQApAfAAAzQAAAygqAkQgtAkg5AAIjTABQgCAvAAA1QAGBaBKAKQBKANByAAQCugBB9gJIAABIQhWAKjbAAQicAAg2gPgAjCAIIC+AAQBMgGAAgsQAAgohPgHIi2AAQgDAtgCA0g");
	this.shape_5.setTransform(543.8,302.7,1.62,1.62,-24.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5).p("Ajll6IBTAAQgEAmgFAcIBYAAQApADAcAeQAZAiAAApQAAB9giBXQgkBphFBZQhfB8iUAsIAAhdQB1gnBFhcQhNg8gqh0QgiAjgnAcIgBhnQB+h7AHi5gACSl6IBTAAIAAFaQBDAxBDAhIAABnQhJgog9gqIAAEyIhTAAIAAluQgzgogogpIAAhtQAwAvArAjgAkOgxIA7AAQAaBbA6AjQBIiQAAhyQAAgmglgMIhSAAQghBrg/BLg");
	this.shape_6.setTransform(417.8,362.6,1.62,1.62,-24.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("ACSF6IAAluQgzgogogpIAAhtQAwAvArAjIAAkZIBTAAIAAFaQBDAxBDAhIAABnQhJgog9gqIAAEygAljEWQB1gnBFhcQhNg8gqh0QgiAjgnAcIgBhnQB+h7AHi5IBTAAQgEAmgFAcIBYAAQApADAcAeQAZAiAAApQAAB9giBXQgkBphFBZQhfB8iUAsgAkOgwIA7AAQAaBbA6AjQBIiQAAhyQAAgmglgMIhSAAQghBrg/BLg");
	this.shape_7.setTransform(417.7,362.5,1.62,1.62,-24.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5).p("Ah3l2IBPAAIAABlIBTAAIAAhlIBPAAIAABlIBCAAQAPgwAKgpIBQAAQgKAzgMAmIBWAAIAABOIhpAAQgMApgMAbIB5AAIAABJIkyAAIAAA5IEgAAIAABJIkgAAIAAA5IE4AAIAABNIiWAAQA6A4BQATIAABTQiggshLhyIhBAAIAAClIhSAAIAAilIhDAAQg9BrixAuIAAhQQBlgaAtgvIidAAIAAhNIE8AAIAAg5IkeAAIAAhJIEeAAIAAg5IkrAAIAAhJIB5AAQgFgQgPg0Ih1AAIAAhOIBcAAQgKglgNg1IBSAAQAGAeASA8IA8AAgAiGh/IEVAAIAZhEIlDAAQAMAoAJAcg");
	this.shape_8.setTransform(290.3,421,1.62,1.62,-24.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgnF3IAAilIhDAAQg+BriwAuIAAhPQBlgbAtgvIieAAIAAhNIE9AAIAAg4IkdAAIAAhJIEdAAIAAg6IkrAAIAAhJIB5AAIgUhEIh1AAIAAhNIBdAAQgMglgMg1IBRAAQAIAdAQA9IA9AAIAAhmIBOAAIAABmIBUAAIAAhmIBPAAIAABmIBCAAQAPgxAKgoIBRAAQgLAygNAnIBXAAIAABNIhpAAQgMApgMAbIB5AAIAABJIkyAAIAAA6IEgAAIAABJIkgAAIAAA4IE3AAIAABNIiVAAQA6A4BQATIAABTQiggshLhyIhBAAIAAClgAiGh/IEVAAIAZhEIlDAAQALAoAKAcg");
	this.shape_9.setTransform(290.3,421,1.62,1.62,-24.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5).p("AlDlNIEiAAIAAgvIBNAAIAAAvIEsAAIAABEIksAAIAAAjICRAAQBCAAAjAlQAlAiAEA2QgCA5gjAfQgmAng/ABIiVAAIAAAnICkAAQAhAAAAgTIAAgWIBKAAIAAAhQAABHhcAAIgFAAIABAmICEAAIAABIIiEAAIAAAlQAAAxgbAdQglAegsABIh4AAIAAhIIBjAAQA0AAAAgbIAAgvInsAAIAAhIIHrAAIgBgmInDAAIAAg/IEWAAIAAgnIkGAAIAAj9IEGAAIAAgjIkiAAgAAsioIAAAkIDLAAQgOghgwgDgAAshLIAAAmICMAAQAygDANgjgAjciEIC7AAIAAgkIi7AAgAjcglIC7AAIAAgmIi7AAgAjyD/IBWAAQAjAyAPAyIhTAAQgQg0glgwg");
	this.shape_10.setTransform(162.5,478.5,1.62,1.62,-24.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgJF8IAAhHIBjAAQA0AAAAgbIAAgvInsAAIAAhIIHrAAIgBgmInDAAIAAg/IEWAAIAAgmIkGAAIAAj+IEGAAIAAgjIkiAAIAAhEIEiAAIAAguIBNAAIAAAuIEsAAIAABEIksAAIAAAjICRAAQBCAAAjAlQAlAhAEA3QgCA5gjAfQgmAmg/ADIiVAAIAAAmICkAAQAhAAAAgTIAAgWIBKAAIAAAhQAABHhcAAIgFAAIABAmICEAAIAABIIiEAAIAAAkQAAAygbAdQglAegsAAgAAsglICMAAQAygDANgkIjLAAgAjcglIC7AAIAAgnIi7AAgAAsiFIDLAAQgOgggwgEIiNAAgAjciFIC7AAIAAgkIi7AAgAi9FiQgQgyglgyIBWAAQAjAzAPAxg");
	this.shape_11.setTransform(162.5,478.5,1.62,1.62,-24.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5).p("AgBl4IEGAAQAsAEAYAmQAXAqAAA4QAAA3gZAjQgZAhgwAAIhjAAIAAhIIBHAAQAsgBAAg3QAAg1gmgJIiaAAIAADeIC0AAQAoABAbAYQAeAbAAArQgHCDhDBYQAhAaApAQIAABTQhMgVg1guQgyArhIAeIAAhcQAkgSAfgXQg7hWgMiDIBFAAQAOBhAsBBQAxg/AEhXQAAgigsgBIieAAIAAFxIhPAAgAjvixIB4AAQgDhEgDghQAAgXgfgEIhTAAgAiKl2QBNAKAGBJQAPBjAADHQAACngFBLQAABlhbADIhSgDIAAhNQAiAEAnAAQAYgDACgbQACgxABhfIiAAAQgIC4gSBBIhOAAQAfiWAEkZIAAkngAjxAaIB+AAIAAgOQAAg8gCg3Ih6AAg");
	this.shape_12.setTransform(229.3,294.4,1.62,1.62,-24.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("ABlEWQAkgSAfgWQg7hXgMiDIBFAAQAOBhAsBBQAxg/AEhWQAAgjgsgBIieAAIAAFxIhPAAIAArgIEGAAQAsAEAYAnQAXApAAA4QAAA3gZAjQgZAhgwAAIhjAAIAAhIIBHAAQAsAAAAg4QAAg0gmgKIiaAAIAADfIC0AAQAoABAbAYQAeAbAAAqQgHCDhDBZQAhAZApAQIAABUQhMgWg1guQgyArhIAegAjdFkIAAhNQAiAEAnAAQAYgDACgbIADiQIiAAAQgIC4gSBBIhOAAQAfiWAEkZIAAknICvAAQBNAKAGBJQAPBkAADHQAACmgFBMQAABkhbADgAj0AhIB+AAIAAgPQAAg7gCg4Ih6AAgAjyirIB4AAQgDhDgDgiQAAgWgfgFIhTAAg");
	this.shape_13.setTransform(229.3,293.3,1.62,1.62,-24.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5).p("AgIlxIBVAAIAAAtIDMAAQBqALAABOQgDBVgOArIhVAAQAUhUAAgZQAAggguAAInhAAIAACCIhUAAIgBjPIErABgADEBzQCUADAAB/QAAB0iAAJInEAAIAAj0QhJAJgPABIAAhUQCsgKB0gkQgzgggigtQg7A3hbAlIAAhYQB0gxAkhqIBUAAQgDAPgGATIDpAAQAlAAAVAQQASARAAAeQAAAlgoAlQgaAdgtAZQBnAbCGABIAABQQjOgIiDgzQhiAoh6AXgAA8gcQAbgLAUgMQA1gaABgWQAAgSgSAAIjPAAQAzA3BJAigAiYEpIFhABQA8gBAAg4QAAg3hEAAIlZAAg");
	this.shape_14.setTransform(98.6,350.3,1.62,1.62,-24.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AkNFyIAAj0IhYAKIAAhUQCsgKB0gkQgzgggigtQg7A3hbAlIAAhYQB0gxAkhqIBUAAQgDAPgGATIDpAAQAlAAAVAQQASARAAAeQAAAlgoAlQgaAdgtAZQBnAbCGABIAABQQjOgIiDgzQhiAoh6AXIFqAAQCUADAAB/QAAB0iAAJgAi5EpIFhABQA8gBAAg4QAAg3hEAAIlZAAgAAbgcQAbgLAUgMQA1gaABgWQAAgSgSAAIjPAAQAzA3BJAigAD8hrQAUhUAAgZQAAggguAAInhAAIAACCIhUAAIgBjPIErABIAAgtIBVAAIAAAtIDMAAQBqALAABOQgDBVgOArg");
	this.shape_15.setTransform(103.4,348.1,1.62,1.62,-24.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("ApuH/IG4AAIAAtpQAAhVgFhuIB9A/IgvArIAAPCIDVAAIAAtlQAAhJgEh+ICCA/Ig0AlIAALxQDHkqBJkaIB+BZIg6AaQi8FjiYCYIAACtID2AAIBThUIB0BzIwwAAQhEAAg6AQgAl2DJQgSiCiclJIAPgLQDxFKAQBRQAPBRgvA3QgOAQgLAAQgbAAgOhdg");
	this.shape_16.setTransform(1991.5,610.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("ACtJJQgtgvheg/Qhdg/ijhOIAGgVQCyA0B3A1QBPhfCCixIm2AAIglApIhDhEQAagVAMgXQANgYAgiHIkGAAQhEAAg5AQIgvgvIG4AAQAUhZAViIIiyAAQhEAAg5APIgwgvIFlAAQAPhjAQiNIBtA+IgkAbQgPBJgLBOIE0AAIBThEIBZBkInmAAQgVB4gUBpIH7AAIBThJIBjBoIq2AAQgbB4gaBOIGxAAIAwg0IBjBjQhEAQhJBEQhKBEhuBzQB0AvAHAvQAJAwgOAfQgFAMgKAAQgPAAgbgcg");
	this.shape_17.setTransform(1856.7,612.7);

	this.instance = new lib.元件7();
	this.instance.parent = this;
	this.instance.setTransform(361.7,219.2,1,1,0,0,0,101.7,101.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1B72A9").s().p("A3nN7QgDgCgBgDIg1kAQgBgDACgDQABgDADgBIA1gbQACgCADAAIAFADIACAFIAWBdIA4gcIgXhhQAAgEACgCIADgEIA2gbQADgCADABQACAAACACIADAEIA2EDQAAADgBADQgCADgDABIg1AaIgFABQgDAAgBgCIgDgFIgXhqIg4AcIAYBwQABADgCACIgEAEIgxAZIgDAAIgFABQgEAAgCgCgA0EL7QgXgHgFggQgFgXAHgTIAAgBQAGgWARgUIABAAQADgDAugcIAWgNIgBgGQgDgKgHgFIgBAAQgEgDgIAEIABAAQgSAJACAXIAAAFIgEAEIgwAYIgGAAQgDAAgCgDQgCgCAAgDIAAgNQABgkAPgSIAAgBQAPgTAogUQAMgIAXgFIABAAIAMAAQAKAAAJAEIABAAQANAGAHAKQAFAHAHAfIAQBbQAEAYAFAIIAAAEIAAAFIgEADIgzAaIgFAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIgBgBIgGAGQgGAIgaANQgWAMgRAAQgKAAgJgFgAzdK2QACAFADAEQAEAAAGgCIAAABQAQgJAEgHQAHgWgBgKIAAgBIgBgIQgrAYADAZgAxDKmIgDgEIgojEQAAgDABgDIAEgDIAygZQACgCADABQABAAABAAQAAAAABAAQAAAAABABQAAAAABABQACACABACIAoDDQABACgCADQgBADgDACIgyAZIgFABQgDAAgCgCgAuxJeQgCgCgBgCIgXhkIhlh1IgCgFIABgFQAAAAAAgBQABgBAAAAQAAAAABgBQABAAAAAAIAygbQADgBADABQADAAACACIA9BJIAeh5QAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBIADgCIAygaQADgCADABQAEABACADQABADAAAEIgwDDIASBlQABADgCADQgBACgDACIgyAZIgFABIgFgDgAsTINQgSgCgJgRIAAgBIAAABQgIgNgGgcIAAgBIgXiBQgBgDABgCQACgDACgBIAxgZIAGgBQAAAAABAAQAAABABAAQABAAAAAAQABABAAAAIADAFIAZCKIAAgBQABAIAFACQAFACAIgEIABAAQAFgEAGgJIABAAIAGgMIgFgiIgUhvQgBgCACgDQABgDADgBIA2gbIAGgBQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQADACAAADIAlDIQABACgCADQgBADgDABIg0AZQgCACgDgBQgDAAgBgCIgDgFIAAgCQgKAQgQAMIAAgBQgIAGgJAFIABAAQgTAKgMAAIgHgBgAxyHHIgCgEIgJguQgBgDACgDQABgCACgCIA0gZQACgBADAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQACACABADIAJAtQAAADgBACQgBADgDACIg0AZIgFABIgFgCgAnjF1IgCgEIgrjSIg1AbIgGAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQgCgCgBgCIgIgmQgBgDACgDQABgCADgBICzhbQACgBADABQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQACABABADIAHAmQACACgCADIgEAEIg7AgIAsDUQABADgCADQgBACgDACIgyAZIgFACIgFgDgAlPElIgBAAQgVgEgUgTIAAAAQgSgRgHgiIgBgBQgFgbADgYQACgWAJgTIAAgBQATgsAngSIAAAAQAngUAgARQAfAPAPBAQABADgBACQgCADgDABIhpA2IAAACQADAQAJAFQAHADAKgFIAAABQAPgJADgRQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBIADgCIAvgYQADgCAEABQADABABACQACADAAADQgHBJg9AfQgbANgWAAIgBAAgAlRCVIArgWQgEgJgGgEQgFgDgIAEIgBAAQgSAKgBAYgAilC6QgOgIgKgPQgMgRgGgbIAAAAQgIgwARgsQASgpAqgWQAkgSAcAMIABAAQAVAKAOAYIABAEQAAADgBABIgEADIgxAZQgDABgEAAQgDgCgBgCQgKgQgMAGIAAAAQgMAGgEARIAAgBQgEAUAFAbQAEAQAHAOIAAABQAFALADADIAAAAQAHAEAIgDQAPgJACgVIACgFQAAgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAIAvgYQADgCADABIAFACQABACAAAEQACAdgPAaIAAgBQgHAPgMANQgBAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAIgDADQgMAKgRAKQgVALgTAAQgSAAgPgJgAANB7IgDgEIg1kPQgBgDACgCQABgDACgBIAvgYQACgCADAAQADAAACADIADAEIAOBIQAOgVAfgPIAAAAQASgKASADQAUABAKARQAKAOAFAZIAZCBIAAAGQgBADgDABIg0AZQgCABgDAAQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAgBAAAAIgDgFIgfiQIgBgCIgCgBQgDgBgFACQgOAHgIANQgFAJACATIACAOIAYBuQAAADgBADIgEAEIgxAZIgFAAIgFgCgAEsgXQgCgCgBgDIg2j/QgBgEABgCIAEgEIBagsIAAgBQAvgXAhAQQAaALAMAeIAAAAQAKAigKAdQgGARgMAPIgCACIgjAcIgBAAIgzAaIASBfQABADgCACQAAADgDACIg1AaIgFABIgEgCgAFkkfIghARIALA7IAggQIAAAAQANgHAGgLIACgEIABgBQAEgLgEgIIAAgBQgIgQgMgCgAIiiaIAAgBQgTgIgKgpIAAAAIgThZIgRAIIgGABIgEgDIgDgFIgGgjQgBgDABgCQACgDADgBIAXgNIgIgrQgBgDACgDQABgCADgBIAugYQADgBADAAQACAAACADQABAAAAAAQAAABABAAQAAABAAAAQAAABABABIAIAnIAagNQACgCADAAIAFACIADAFIAJAiIgBAGQgBADgDACIggAQIARBWIAAgBQACAFABAMIADAHQADAAANgGIAHgFQACgCADAAQADAAACACQADACAAADIAIAiQABACgCADQgBADgCABIgZAQIgBAAQgZAOgRAAQgIAAgGgDgAKsjcQgXgDgUgSIgFgGQgNgSgHgdIgBAAQgJg0ASgoQATgrAngVIAAgBQAggOAcAIQAFACAFADIABgBQAgAQANBAQABACgCAEQgBACgDACIhoA0IABAEQADAPAJAEIABABQAHADALgGQANgGAEgOIAAgFIACgFQAAAAAAAAQABgBAAAAQAAAAABAAQABgBAAAAIAvgYQADgCADACQADAAACACQACADAAAEQgHA2ggAfQgDACgDAAIgBAAIAAADIgDADIgSAMIgBAAQgbAMgSAAIgGAAgAKplqIAqgWQgEgLgFgEQgFgDgIAFIAAAAQgTAKgBAZgANEkkIgCgFIgMg8QgBgDACgDQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABgBIA1gbQACgCADAAQADAAABADQADACAAACIALA+QABADgCADQAAAAAAABQgBABAAAAQAAAAgBABQgBAAAAAAIg1AbIgFABQgDgBgCgCgAPrl4QgDgCAAgCIg4kIQgCgEACgCQABgCADgBIA4gdQACgCADABQACAAADACQABABAAAAQAAAAAAABQABAAAAABQAAABAAAAIAtDWIBaguQACgBAEABIAEACQABABAAAAQAAABAAAAQAAABABABQAAAAAAABIAFArQAAADgBACIgEAEIiXBMIgFABQgCgBgCgCgAStnjQgVgIgJgpIgBAAIgShaIgRAJQgDABgDgBQgCAAgDgCIgCgFIgHgkQAAgDACgCQABgDADgBIAZgLIgKgtQAAgDABgCQAAgBABAAQAAgBABAAQAAgBAAAAQABAAABgBIAugYQADgBADABQADgBACACQACACAAADIAIAnIAbgNQACgCAEABQACAAACACIADAEIAIAkQAAADgBADQgBACgDACIgfAPIASBWIAAgBQABAFABAMIADAIIAPgGIgBAAIAJgGQACgBADAAIAGADQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAIAGAhQABADgBADIgDADIgZASIgBAAQgZAMgQAAQgIAAgGgDgAUYopIgBgBQgOgKgIgUQgIgSgFgWQgLg0AMgmIACgGQAMgiAggRIAAAAQARgIATgBIASAAIgShMQgBgEACgCIAEgEIAwgZQADgBADAAQAAAAABAAQABABAAAAQABAAAAAAQABAAAAABQADACAAADIA4EQQABACgCADQgBACgDACIgtAXIgFABQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQgDgCgBgCIAAgGIgLAQIgBAAQgSATgRAIQgQAIgNAAQgRAAgNgLgAVKpnQAGAHAIgEQAQgIAFgLQAFgOgEgQIAAAAIgHgkIgDgLQgFgQgHgDIgBgBQgHgCgKAHIAAAAQgJAEgDAJIAAAAQgIATAIAmIAAAAQAGAbAKALgAXepzIgDgEIgMg9QgBgEACgCQAAgBAAAAQABgBAAAAQABAAAAgBQABAAABAAIA1gcQACgBADAAQADAAACACIACAFIAMA+QABACgCADQgBADgDABIg1AaIgFABQgDAAgBgCg");
	this.shape_18.setTransform(632.3,151.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#135E8A").s().p("A3fRSQgDgDgBgCIgBgBQgLgsgDgwQAXgXADgqQADgbgIg5IgBgHQgOhhgykMQgBgDACgDIADgDIBVgsQADgCAEACQADABACADQABADAAADIgFAGQgKAIAPBDIAAAAQAeB+AYDSIADAcIAAABQAPB2gyA8IAAABQgbAdgcAIIgDAAIgDAAgAwfN+QgEgBgBgCIgqg9QAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgDACgCQABgCADgBIBTgoQAwgYAGgaIlHCkQgCABgDAAQgDgBgCgCQgCgCAAgDIgCgQQgEhVgIhOIgCgNIgyAaQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQgBAAAAgBQgBAAAAgBQgCgBgBgDIgOg/QgBgDACgDQABgDADAAIA/ggIgbijIgCgMIgGANIAAAAIgZAwQgBACgDACQgEABgDgBIg+gaQgDgBgBgCIgCgFIABgEIAQgbQAeg7AQgtQAQg3AIhMQAAgEADgDQACgBAEAAIBCgFQAAAAABAAQAAAAABABQABAAAAAAQABAAAAABQABAAAAABQABAAAAAAQABABAAAAQAAABABAAQACACgBAEIgHAsIE6ieIAIgVQABgEACgBQADgCADABIAEACQADACABADIAVBXIgBAGQgBADgDABIl7DAQgFAWgLAaIFzi6IAFgBQADAAACADIADAEIAkC4IAZgNIAJgRQAAgDADgBQACgCADABIAFACQACACABACIAQBOQABACgCAEIgEADIgtAYQAIAiAMBNIATgJIAJgWQABgEACgBQADgCADABIAFABQACADAAADIASBTIAAAEQgCADgDACIgwAZIAAABQACA9gPAfIAAAAQgTAsiIBGIABAAIgJAEIgCAAIgDgBgAzPKKIAFA0IAGBDICIhGQgbgQgsgNIAAAAIgMgCQgBgBAAAAQgBAAAAgBQgBAAAAgBQgBAAAAAAQgCgDAAgDQgBAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAIAXgugAxiJUQA1AMAeAPQADAAABAEIAAAHIgYA1IBaguIgRhxgAzqHDQALA0AIA+IB3g7QgTgKgZgIQgUgHgYgHIgEgCQgDgCAAgDIACgFIAWgtgAyLGSQAtAKAsAQIAEAEQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAIgBAGIgaAzIBegvIgVhxgAn0JVIgEgDIgfhGQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBABgBQAAgDACgBIAEgDQAigMAggOQATgJASgJQAZgNgCgMIAAAAIggiQIkoCUIgFACIgFgDQgCgBAAgDIgRhKQgBgDACgDQABgDADgBIEriXIgVhdIizBaIgEACQgDgBgDgCQAAAAgBgBQAAgBAAAAQgBgBAAAAQAAgBAAAAIgRhHQgBgDACgDQABgDACgBIGUjKIAPgeQABgCADgBQACgCADAAIAFADIACAFIAUBbIgBAGIgEAFIicBOIAVBdID9iAIAMgiQABgDADgCQACgCADABIAFABQACADABACIAYBlQAAADgBADIgEAEIkXCOIAjCgIAAAAQALAtgSAeQgFALgHAIQgTATgjARIhsA2IgFABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgA4aGrIAAAAQgdgKgOgcIABAAQgOgZAJgcIAAgCQALgcAagNQAbgNAcAJQAdAJANAbQAOAbgJAdIAAABQgKAcgbANQgQAIgRAAQgLAAgLgEgADpDxQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgDgEIhFkyQgUBwgnBhQgBACgDACQgDABgDAAQgEgBgBgDIguhGIgBgEQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAhhPAXhUQAKgsAJguIADgRIhrA1IgFACIgEgDIgCgEIgOhFQgBgEACgBQAAgBAAgBQAAAAABgBQAAAAABAAQAAgBABAAIB3g+IgVhZIhVA4IgGACQAAAAgBgBQAAAAgBAAQgBAAAAgBQgBAAAAAAQgDgCAAgDIgag9QgCgDABgDQABgEADgBQAwgeAtgfQBKg0A7g3IAEgDIAGABIADAEIAmA3QADADgBADIgCAFQgjAgghAbIgBABIgKAHIAXBpIBUgsIAFgMQAAgDADgCQACgBADAAIAFACQADADAAACIATBQQAAADgBACIgEAFIhkAxIACALIAfAQIAAAAIAlAXIBDAtQADACABADIgBAFIgXBQIgEAEIgFABQgDAAgCgCIhLhBIBLFKQABADgBACQgBADgDACIhAAfIgEABIgCAAgAsCDsIgEgDIgEgEIgujSQgBgDACgDQAAAAABgBQAAAAAAgBQABAAAAAAQABgBABAAIDlhzIABAAIgIgNIAAABQgGgKgBgKQgCgJACgLIgBABQACgJADgJQAJgaAbgOQAbgOAbAIIAAAAQAfAMALAZIAAAAIAGAOIACgBIETiMQACgBADAAQACAAADACQACACAAADIAvDSQABADgCADIgEAEIhJAlQgCABgDgBIgFgBQgCgDgBgCIgch9InXDtIAeCCQABACgCADQAAACgDACIhLAlIgDABIgCAAgAKEAmQgCAAgDgCQgCgCgBgDIgujNIjeCYQgCACgDAAIgFgCQgDgBAAgCIgYhCIgBgGQACgEACgBIDsijIhqnLQAAgCABgDQAAgBABgBQAAAAAAgBQABAAAAAAQABgBABAAIBCgiQADgBACABQADgBADADIACAEIBjG5IAggWIAJgYQABgDACgCQACgBADAAQADAAADACIACAEIAdBUIgBAGQgBADgCABIg8ArIAzDgIAAAFIgEADIhDAjIgDAAIgCAAgAOPhrIgDgEIgihIQgBgCABgDQAAgBAAAAQAAgBAAAAQABgBAAgBQAAAAABgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAABAAIAdgJIAagLIAAgBQAOgHAFgJIAAAAQABgFgBgDIgjiXIgKALIAAAAQgcAcgcAZQgDACgDAAQgDAAgCgBQgDgCgBgDIgchTQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBQABgDACgCIAGgEQAlgbAlgiIgBAAIAFgEIgpitIhRAoIgEABQgBAAgBAAQAAAAgBAAQgBgBAAAAQgBgBAAAAQgCgCgBgDIgQhFQgBgEACgDQABgCADgBIBUgrIggiNQAAgEABgCIAEgEIBFgiQACgCADAAQACABADACIACAEIAfCKIAsgWIATgeQACgDAEgBQADgBAEADQACABABAEIAUBZQABACgCADIgEAFIhJAlIAeCCQAfgnAXgiQACgDADgBQAEAAACACQAEACAAADIAUBVIAAADIgCADQgfAsghAoIAxDRQADARABAPIAAAAQAAAbgKARQgFAKgIAJIABABQgRARgdAQIAAAAIg8AdIgFACIgEgCgARjjKIgEgCIgtg8QgDgDABgDQAAgEADgCQBKhGAyg7QAZgeAUgcQhOgrg+hNQgCgDAAgDQAAgEACgBIAkgwIg4AdIgFABIgFgDQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAIgQhKIABgGQABgCADgBICGhEIgThZIiEBCIgGABIgEgDQgCgCgBgBIgQhLQgBgEACgDIAEgDICGhEIgZhtQgBgCACgEIADgDIBIgkIAFgBQACAAADACQACACABADIAXBoIB/hAIAQgmQABgDACgCQACgBADAAIAGACIACAFIAYBpQABABgCAEQgBADgDABIidBPIAUBYICLhGQACgBADABQABAAAAAAQABAAAAABQABAAAAAAQABAAABABQACABABADIAOBBIAAADQgPCcgwBrIgMAcQAgAGA4ACIABAAQA7ABA2gFIAKgHIAPgNQACgCADgBQADAAACACQADABABACQABADgBADIgfBsQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABIgFACQhFAChKgEQhKgDgmgLIgbAmQg2BIhQBWIgbAcQgCACgDAAIgCABIgCgBgASRqQQA6BLBFAhIABAAQAjhGAYiEgAGUj5IABAAQgdgIgNgcIAAAAQgOgaAJgdQAJgcAbgPIABAAQAbgMAcAJIAAAAQAdAJAOAaQAOAcgLAbIAAABQgJAcgaAOIgBABQgQAHgPAAQgNAAgMgEgAF1nEQgbgKgOgWIgCgEIgBgBQgMgcAIgbIAAgBQABgEADgEQALgVAXgNQAagOAcALQAdAIANAbQAOAagIAeIAAABQgKAbgbAPIAAAAQgRAIgQAAQgLAAgLgEg");
	this.shape_19.setTransform(613.6,95.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#666666").s().p("AqQHWQh3g7jBhKIAAhrQB9AbCxA7QB5haBahTIpAAAIAAh9QAzhNAdg7IlBAAIAAh9IF4AAQAUgyAXhAIlTAAIAAh9IF7AAIAhiHIDRAAQgWBYgRAvIHJAAIAAB9In7AAQgaA5gfA5IKWAAIAAB9IrhAAIhaCIIKfAAIAAB9QhqBXhTA3IiBBUQAvAUBIAjIAADCQiNhghpg0gABQIfIAAh9IFcAAIAAwBIC8AAIAAQBIB8AAIAAwBIC7AAIAAQBIFaAAIAAB9gAOkDBQB4kcAykWICFAAQgTEHg5ErgADEDBQgFh2gajKQgJhEglitICEAAQAyB8AuCiQAyCuAWBlg");
	this.shape_20.setTransform(1609.6,531.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgLACIAEgCQAHgDAGADIAGACg");
	this.shape_21.setTransform(831.4,125.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1B72A9").s().p("AlrCeIAFAAIgFAEgAFkihIAIAAIgIAGg");
	this.shape_22.setTransform(1020.9,344);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.instance},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件4, new cjs.Rectangle(27.8,-15.4,2032.9,709.1), null);


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
	this.shape.setTransform(86.4,194.5,0.808,0.808,-23.5);

	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(90.2,198,0.808,0.808,-23.5,0,0,91.1,107.4);
	this.instance.alpha = 0.199;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#7ECEF4","#136C9B"],[0,1],-51.2,-51.2,48.8,48.8).s().p("Ak7LrQiRg+hwhxQhwhvg+iSQg/iXAAikQAAikA/iWQA+iSBwhwQBwhwCRg9QCXhACkAAQClAACWBAQCSA9BwBwQBwBwA9CSQBACWAACkQAACkhACXQg9CShwBvQhwBxiSA+QiWA/ilAAQikAAiXg/g");
	this.shape_1.setTransform(86.1,194.1,0.808,0.808,-23.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1B72A9").s().p("A1WHdIAugWIARBbIA/gdIgQhZIAvgWIAkDhIgvAUIgRhlIg/AcIAQBmIgvAVgAxsJWQgPgHgDgXQgEgRAGgPQAGgSAOgPQAEgDA+ghIAAgKQgEgNgIgGQgGgGgMAFQgUAKABAZIgpASQAAgkANgQQAOgPAhgQQALgFASgDQANgBAKAFQAKAFAEAHQADAGAFAYIAKBPQADAWADAIIgsAUIgDgJIgNAOQgFAGgVAJQgQAHgNAAQgJAAgGgDgAxSIjQABAJAGAFQAGADAJgEQATgIAEgJQAHgUgBgKIgCgSQg2AXAFAdgAvbFsIAsgTIAbCpIgtAUgAtRGGIhThrIAsgUIA7BMIAih1IAtgUIgyCnIAMBaIgtATgAq6GcQgLgBgFgLQgGgLgEgYIgOhwIAqgTIAQB3QAFAWAWgJQAHgDAHgKQAHgIABgHIgDgeIgMhgIAvgVIAYCtIgtAUIgEgfQgJAmglAQQgNAGgIAAIgHgBgAvlEtIAtgUIAGAnIgtAUgAnHBpIg4AZIgGghICehGIAFAhIg5AbIAeC+IgtAUgAksDnQgPgDgPgPQgNgOgFgcQgGgqAQghQARgiAhgOQAdgOAYAPQAYANAJAzIhiAsIABAHQADASAKAGQAIAFANgFQASgIAEgTIApgSQgIA6gxAWQgVAIgPAAIgFAAgAkaBQQgYALACAkIA2gYQgGgZgPAAQgFAAgGACgAiSCUQgXgOgHgoQgFgnAPgjQARghAigPQAegNAUAKQAPAJAKASIgrATQgLgUgRAHQgOAGgFASQgEASADAZQADAOAGAOQAFAOADACQAKAGAKgEQATgIACgXIApgTQABAXgNAUQgPAagfAOQgQAHgOAAQgOAAgMgHgAgYiEIApgTIANBYQAHggAogRQAPgHANADQANABAFALQAHAMAEAUIARBwIgtAUIgVh+QgDgGgEgBQgFgDgIADQgOAGgJANQgGAJABAUIABANIAQBfIgrATgADjjqIBPgiQAlgQAZANQAUAJAIAXQALAqgdAgIghAWIgwAXIAMBYIguAUgAE8juIglAQIAKBDIAlgRQARgHAGgPQAHgNgFgKQgJgTgOgCgAHeh0QgNgHgGgfIgOhXIgYAKIgEgfIAagMIgGgrIApgSIAHArIAggOIAGAeIgiAPIAOBQIABAOQACAJADADQAFADARgHIAHgFIAEAdIgWANQgTAJgMAAQgGAAgFgDgAJVinQgRgDgOgPQgNgPgFgbQgGgrAQggQARgiAggPQAegMAYANQAYAOAIAzIhhArIABAJQADARALAFQAJAGANgGQASgHADgUIApgTQgKA8gvAWQgUAIgNAAIgIAAgAJnk+QgaALADAkIA1gYQgGgagOAAQgFAAgFADgALYkRIAvgVIAHA1IguAVgANMoDIAxgWIAfDCIBYgnIADAlIiFA7gAQblzQgOgHgGggIgNhXIgZALIgEgfIAbgLIgHgtIAqgSIAGArIAhgOIAGAfIghAOIAMBQIABAOQACAJAEADQAEADAQgHIAIgEIAFAcIgXAOQgSAIgMAAQgGAAgFgCgAR7mrQgKgIgGgQQgFgOgDgTQgIgrALgfIACgEQAKgaAagMQANgGAPAAQAQAAAJAGIgOhRIArgTIAlDsIgoARIgFgcQgEAQgPARQgOAOgPAGQgKAFgKAAQgNAAgKgKgASio8QgKAEgFALQgIASAGAjQAJA1AZgLQARgHAGgMQAGgOgEgQIgEgfIgCgKQgFgTgKgEQgDgBgDAAQgGAAgJAEgAUhoWIAvgVIAIA1IgvAVg");
	this.shape_2.setTransform(306.3,138.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#135E8A").s().p("A1ZM+QAqgUAHg1QADgYgEgzIgBgGQgHhVghjoIBLghQgOAHALBCQAUBtAMC1IACAYQAIBjgsAwQgWAXgXAEgAvSKeQAigMAngSQA3gYgBghIABgEIksCGIAAgNQgBhXgEhNIg2AZIgKg3IA9gaQgJhSgIhBIgEgaIFSiWIAaCqIAhgQIAJgRIALBEIgtAUQAFAfAJBRIAcgMIAKgWIAMBIIgvAVQAAA3gOAaQgSAkh0A0IgHACgAxIH+QAEAwABBGIDthqIgNhxgAxYFRIABACQAIA0AFA9IDghkIgPhygAwHINIAbgwQAzAOAbAOIgcA3QgbgTgygQgAneGwQAfgKAbgLQASgGAQgIQAcgNgDgPIgYiGIkNB3IgLhAIENh5IgShfIilBKIgMg+IFmieIAPgaIANBPIiPBAIAQBgIDrhpIANghIAQBZIj7BxIAZCQQAHAlgPAXQgEAIgHAGQgQAPgcAMIhgAqgAwjFlIAbgwQArAJAqATIgeA2QgdgRg1gRgAz4FaIAOgVQAegzAPgnQAQgvALhDIA5gBIgKA1IEkiDIAIgUIAPBMIlQCWIgCACQgKAjgYAuIgXAogA1REuQgVgIgJgWQgJgUAHgWQAJgUAUgJQAVgKAVAIQAWAJAJAUQAJAVgIAWQgIAVgVAJQgMAFgLAAQgJAAgKgEgACHhbIgFAbQgWBngoBWIgkg9QAhhDAWhIQAQg0ALg2IhrAwIgIg8IBtgxIgRhfIhWAzIgTg3QArgYAogZQBCgqA1gtIAfAxQgeAageAWIgOAJIATBpIBVgnIAGgNIAMBFIhdApIADASIAcARQAoAbAvAkIgYBDIhPhMIA4E2Ig4AZgArBgMIDKhZQAOAPAVAHQAUAEAVgKQATgJALgSIAGgMQAEgOgCgOIDyhtIAgC3IhBAcIgVh1ImsC+IAVB2IhBAcgAIEiDIjOB/IgSg5IDViFIhImUIA6gaIBFGKIApgZIAJgWIAUBKIg6AkIAkDGIg6AbgAL6h2QAZgFAZgLQAZgLgDgSIgaiRQgiAigkAcIgVhIIAFgDQAlgZAlggIgfikIhPAjIgLg9IBQgjIgXiBIA9gbIAWCCIAygXIASgaIAOBOIhGAfIAYCGQAjgmAZgjIANBJQgeAngfAhIAiC6QAHAngOAUQgEAJgHAGQgOAOgYAMIg0AWgAnZhdQgXgIgJgVQgEgIAAgHQgCgOAGgOQAIgUAVgJQAVgKAUAIQAWAJAIAUQAJAUgGAVIgBACQgIAUgUAJQgMAGgLAAQgKAAgJgEgAOoi1QBDg5AugxQAbgdAUgaQhFgpg0hHIAtg2QA0BKA/AhIAEgHQAlg+Aah+Ij8BxIgLg/IB8g3IgQhdIh9A4IgLhCIB8g3IgShkIA/gcIARBkIB8g2IAQgjIAQBaIiQBBIARBbICCg6IAKA4QgTCFguBYIgPAgQAdAKA5ADQA1AFAwgDIAKgIQALgGAEgFIgfBcQg7gBg/gGQhEgGgfgNIgcAkQg5BFhZBUgAFljHQgVgGgJgWQgJgUAIgVQAHgWAVgKQAVgJAWAJQAWAHAJAVQAJAVgJAVQgIAWgUAJQgLAFgLAAQgLAAgKgFgAFSl2QgWgIgJgVQgJgVAHgWQAJgVAVgJQAVgKAVAKQAVAGAJAWQAKAUgIAWQgIAVgVAKQgMAFgLAAQgKAAgJgEg");
	this.shape_3.setTransform(292.8,88.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(-11.9,0,455,297.4), null);


// stage content:
(lib.tr_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 放大鏡
	this.instance = new lib.MAGNIFYINGGLASSpsb("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(686.1,1028.3,1,1,0,0,0,331.5,188);
	this.instance.alpha = 0;

	this.instance_1 = new lib.元件3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(487,747.3,1,1,0,0,0,282.5,182);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,regX:282.5,regY:182,x:487,y:747.3,alpha:1,mode:"independent"},7).wait(203));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},7).to({x:1384.2,y:357.1,mode:"synched",startPosition:0},56).to({x:632,y:922.2},15).to({x:1539.2,y:534.4},56).wait(67).to({alpha:0.781},0).to({alpha:0},8).wait(1));

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

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(7).to({graphics:mask_graphics_7,x:253.6,y:428.5}).wait(1).to({graphics:mask_graphics_8,x:261.6,y:425.1}).wait(1).to({graphics:mask_graphics_9,x:269.6,y:421.6}).wait(1).to({graphics:mask_graphics_10,x:277.6,y:418.2}).wait(1).to({graphics:mask_graphics_11,x:285.6,y:414.8}).wait(1).to({graphics:mask_graphics_12,x:293.6,y:411.4}).wait(1).to({graphics:mask_graphics_13,x:301.6,y:407.9}).wait(1).to({graphics:mask_graphics_14,x:309.6,y:404.5}).wait(1).to({graphics:mask_graphics_15,x:317.6,y:401.1}).wait(1).to({graphics:mask_graphics_16,x:325.6,y:397.7}).wait(1).to({graphics:mask_graphics_17,x:333.6,y:394.2}).wait(1).to({graphics:mask_graphics_18,x:341.6,y:390.8}).wait(1).to({graphics:mask_graphics_19,x:349.6,y:387.4}).wait(1).to({graphics:mask_graphics_20,x:357.6,y:383.9}).wait(1).to({graphics:mask_graphics_21,x:365.6,y:380.5}).wait(1).to({graphics:mask_graphics_22,x:373.6,y:377.1}).wait(1).to({graphics:mask_graphics_23,x:381.6,y:373.7}).wait(1).to({graphics:mask_graphics_24,x:389.6,y:370.2}).wait(1).to({graphics:mask_graphics_25,x:397.6,y:366.8}).wait(1).to({graphics:mask_graphics_26,x:405.6,y:363.4}).wait(1).to({graphics:mask_graphics_27,x:413.6,y:360}).wait(1).to({graphics:mask_graphics_28,x:421.6,y:356.5}).wait(1).to({graphics:mask_graphics_29,x:429.7,y:353.1}).wait(1).to({graphics:mask_graphics_30,x:437.7,y:349.7}).wait(1).to({graphics:mask_graphics_31,x:445.7,y:346.3}).wait(1).to({graphics:mask_graphics_32,x:453.7,y:342.8}).wait(1).to({graphics:mask_graphics_33,x:461.7,y:339.4}).wait(1).to({graphics:mask_graphics_34,x:469.7,y:336}).wait(1).to({graphics:mask_graphics_35,x:477.7,y:332.6}).wait(1).to({graphics:mask_graphics_36,x:485.7,y:329.1}).wait(1).to({graphics:mask_graphics_37,x:493.7,y:325.7}).wait(1).to({graphics:mask_graphics_38,x:501.7,y:322.3}).wait(1).to({graphics:mask_graphics_39,x:509.7,y:318.8}).wait(1).to({graphics:mask_graphics_40,x:517.7,y:315.4}).wait(1).to({graphics:mask_graphics_41,x:525.7,y:312}).wait(1).to({graphics:mask_graphics_42,x:533.7,y:308.6}).wait(1).to({graphics:mask_graphics_43,x:541.7,y:305.1}).wait(1).to({graphics:mask_graphics_44,x:549.7,y:301.7}).wait(1).to({graphics:mask_graphics_45,x:557.8,y:298.3}).wait(1).to({graphics:mask_graphics_46,x:565.8,y:294.9}).wait(1).to({graphics:mask_graphics_47,x:573.8,y:291.4}).wait(1).to({graphics:mask_graphics_48,x:581.8,y:288}).wait(1).to({graphics:mask_graphics_49,x:589.8,y:284.6}).wait(1).to({graphics:mask_graphics_50,x:597.8,y:281.2}).wait(1).to({graphics:mask_graphics_51,x:605.8,y:277.7}).wait(1).to({graphics:mask_graphics_52,x:613.8,y:274.3}).wait(1).to({graphics:mask_graphics_53,x:621.8,y:270.9}).wait(1).to({graphics:mask_graphics_54,x:629.8,y:267.5}).wait(1).to({graphics:mask_graphics_55,x:637.8,y:264}).wait(1).to({graphics:mask_graphics_56,x:645.8,y:260.6}).wait(1).to({graphics:mask_graphics_57,x:653.8,y:257.2}).wait(1).to({graphics:mask_graphics_58,x:661.8,y:253.8}).wait(1).to({graphics:mask_graphics_59,x:669.8,y:250.3}).wait(1).to({graphics:mask_graphics_60,x:677.9,y:246.9}).wait(1).to({graphics:mask_graphics_61,x:685.9,y:243.5}).wait(1).to({graphics:mask_graphics_62,x:693.9,y:240.1}).wait(1).to({graphics:mask_graphics_63,x:701.9,y:236.6}).wait(1).to({graphics:mask_graphics_64,x:676.7,y:255.2}).wait(1).to({graphics:mask_graphics_65,x:651.5,y:273.8}).wait(1).to({graphics:mask_graphics_66,x:626.3,y:292.3}).wait(1).to({graphics:mask_graphics_67,x:601.2,y:310.9}).wait(1).to({graphics:mask_graphics_68,x:576,y:329.5}).wait(1).to({graphics:mask_graphics_69,x:550.8,y:348}).wait(1).to({graphics:mask_graphics_70,x:525.6,y:366.6}).wait(1).to({graphics:mask_graphics_71,x:500.5,y:385.2}).wait(1).to({graphics:mask_graphics_72,x:475.3,y:403.7}).wait(1).to({graphics:mask_graphics_73,x:450.1,y:422.3}).wait(1).to({graphics:mask_graphics_74,x:424.9,y:440.9}).wait(1).to({graphics:mask_graphics_75,x:399.8,y:459.5}).wait(1).to({graphics:mask_graphics_76,x:374.6,y:478}).wait(1).to({graphics:mask_graphics_77,x:349.4,y:496.6}).wait(1).to({graphics:mask_graphics_78,x:324.3,y:515.2}).wait(1).to({graphics:mask_graphics_79,x:332.4,y:511.7}).wait(1).to({graphics:mask_graphics_80,x:340.5,y:508.3}).wait(1).to({graphics:mask_graphics_81,x:348.6,y:504.8}).wait(1).to({graphics:mask_graphics_82,x:356.7,y:501.4}).wait(1).to({graphics:mask_graphics_83,x:364.8,y:497.9}).wait(1).to({graphics:mask_graphics_84,x:372.9,y:494.5}).wait(1).to({graphics:mask_graphics_85,x:381,y:491}).wait(1).to({graphics:mask_graphics_86,x:389.1,y:487.6}).wait(1).to({graphics:mask_graphics_87,x:397.2,y:484.1}).wait(1).to({graphics:mask_graphics_88,x:405.3,y:480.7}).wait(1).to({graphics:mask_graphics_89,x:413.4,y:477.2}).wait(1).to({graphics:mask_graphics_90,x:421.6,y:473.8}).wait(1).to({graphics:mask_graphics_91,x:429.7,y:470.3}).wait(1).to({graphics:mask_graphics_92,x:437.8,y:466.9}).wait(1).to({graphics:mask_graphics_93,x:445.9,y:463.5}).wait(1).to({graphics:mask_graphics_94,x:454,y:460}).wait(1).to({graphics:mask_graphics_95,x:462.1,y:456.6}).wait(1).to({graphics:mask_graphics_96,x:470.2,y:453.1}).wait(1).to({graphics:mask_graphics_97,x:478.3,y:449.7}).wait(1).to({graphics:mask_graphics_98,x:486.4,y:446.2}).wait(1).to({graphics:mask_graphics_99,x:494.5,y:442.8}).wait(1).to({graphics:mask_graphics_100,x:502.6,y:439.3}).wait(1).to({graphics:mask_graphics_101,x:510.8,y:435.9}).wait(1).to({graphics:mask_graphics_102,x:518.9,y:432.4}).wait(1).to({graphics:mask_graphics_103,x:527,y:429}).wait(1).to({graphics:mask_graphics_104,x:535.1,y:425.5}).wait(1).to({graphics:mask_graphics_105,x:543.2,y:422.1}).wait(1).to({graphics:mask_graphics_106,x:551.3,y:418.6}).wait(1).to({graphics:mask_graphics_107,x:559.4,y:415.2}).wait(1).to({graphics:mask_graphics_108,x:567.5,y:411.7}).wait(1).to({graphics:mask_graphics_109,x:575.6,y:408.3}).wait(1).to({graphics:mask_graphics_110,x:583.7,y:404.8}).wait(1).to({graphics:mask_graphics_111,x:591.8,y:401.4}).wait(1).to({graphics:mask_graphics_112,x:600,y:398}).wait(1).to({graphics:mask_graphics_113,x:608.1,y:394.5}).wait(1).to({graphics:mask_graphics_114,x:616.2,y:391.1}).wait(1).to({graphics:mask_graphics_115,x:624.3,y:387.6}).wait(1).to({graphics:mask_graphics_116,x:632.4,y:384.2}).wait(1).to({graphics:mask_graphics_117,x:640.5,y:380.7}).wait(1).to({graphics:mask_graphics_118,x:648.6,y:377.3}).wait(1).to({graphics:mask_graphics_119,x:656.7,y:373.8}).wait(1).to({graphics:mask_graphics_120,x:664.8,y:370.4}).wait(1).to({graphics:mask_graphics_121,x:672.9,y:366.9}).wait(1).to({graphics:mask_graphics_122,x:681,y:363.5}).wait(1).to({graphics:mask_graphics_123,x:689.2,y:360}).wait(1).to({graphics:mask_graphics_124,x:697.3,y:356.6}).wait(1).to({graphics:mask_graphics_125,x:705.4,y:353.1}).wait(1).to({graphics:mask_graphics_126,x:713.5,y:349.7}).wait(1).to({graphics:mask_graphics_127,x:721.6,y:346.2}).wait(1).to({graphics:mask_graphics_128,x:729.7,y:342.8}).wait(1).to({graphics:mask_graphics_129,x:737.8,y:339.3}).wait(1).to({graphics:mask_graphics_130,x:745.9,y:335.9}).wait(1).to({graphics:mask_graphics_131,x:754,y:332.5}).wait(1).to({graphics:mask_graphics_132,x:762.1,y:329}).wait(1).to({graphics:mask_graphics_133,x:770.2,y:325.6}).wait(1).to({graphics:mask_graphics_134,x:778.4,y:322.1}).wait(67).to({graphics:mask_graphics_201,x:778.3,y:322.1}).wait(1).to({graphics:mask_graphics_202,x:778.3,y:322.1}).wait(1).to({graphics:mask_graphics_203,x:778.3,y:322.1}).wait(1).to({graphics:mask_graphics_204,x:778.3,y:322.1}).wait(1).to({graphics:mask_graphics_205,x:778.3,y:322.1}).wait(1).to({graphics:mask_graphics_206,x:778.3,y:322.1}).wait(1).to({graphics:mask_graphics_207,x:778.3,y:322.1}).wait(1).to({graphics:mask_graphics_208,x:778.3,y:322.1}).wait(1).to({graphics:mask_graphics_209,x:778.4,y:322.1}).wait(1));

	// 文字放大
	this.instance_2 = new lib.元件4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(960.8,573.2,1,1,0,0,0,440.8,283.8);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).wait(194).to({x:942.8},0).to({alpha:0},8).wait(1));

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

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(7).to({graphics:mask_1_graphics_7,x:253.6,y:428.5}).wait(1).to({graphics:mask_1_graphics_8,x:261.6,y:425.1}).wait(1).to({graphics:mask_1_graphics_9,x:269.6,y:421.6}).wait(1).to({graphics:mask_1_graphics_10,x:277.6,y:418.2}).wait(1).to({graphics:mask_1_graphics_11,x:285.6,y:414.8}).wait(1).to({graphics:mask_1_graphics_12,x:293.6,y:411.4}).wait(1).to({graphics:mask_1_graphics_13,x:301.6,y:407.9}).wait(1).to({graphics:mask_1_graphics_14,x:309.6,y:404.5}).wait(1).to({graphics:mask_1_graphics_15,x:317.6,y:401.1}).wait(1).to({graphics:mask_1_graphics_16,x:325.6,y:397.7}).wait(1).to({graphics:mask_1_graphics_17,x:333.6,y:394.2}).wait(1).to({graphics:mask_1_graphics_18,x:341.6,y:390.8}).wait(1).to({graphics:mask_1_graphics_19,x:349.6,y:387.4}).wait(1).to({graphics:mask_1_graphics_20,x:357.6,y:383.9}).wait(1).to({graphics:mask_1_graphics_21,x:365.6,y:380.5}).wait(1).to({graphics:mask_1_graphics_22,x:373.6,y:377.1}).wait(1).to({graphics:mask_1_graphics_23,x:381.6,y:373.7}).wait(1).to({graphics:mask_1_graphics_24,x:389.6,y:370.2}).wait(1).to({graphics:mask_1_graphics_25,x:397.6,y:366.8}).wait(1).to({graphics:mask_1_graphics_26,x:405.6,y:363.4}).wait(1).to({graphics:mask_1_graphics_27,x:413.6,y:360}).wait(1).to({graphics:mask_1_graphics_28,x:421.6,y:356.5}).wait(1).to({graphics:mask_1_graphics_29,x:429.7,y:353.1}).wait(1).to({graphics:mask_1_graphics_30,x:437.7,y:349.7}).wait(1).to({graphics:mask_1_graphics_31,x:445.7,y:346.3}).wait(1).to({graphics:mask_1_graphics_32,x:453.7,y:342.8}).wait(1).to({graphics:mask_1_graphics_33,x:461.7,y:339.4}).wait(1).to({graphics:mask_1_graphics_34,x:469.7,y:336}).wait(1).to({graphics:mask_1_graphics_35,x:477.7,y:332.6}).wait(1).to({graphics:mask_1_graphics_36,x:485.7,y:329.1}).wait(1).to({graphics:mask_1_graphics_37,x:493.7,y:325.7}).wait(1).to({graphics:mask_1_graphics_38,x:501.7,y:322.3}).wait(1).to({graphics:mask_1_graphics_39,x:509.7,y:318.8}).wait(1).to({graphics:mask_1_graphics_40,x:517.7,y:315.4}).wait(1).to({graphics:mask_1_graphics_41,x:525.7,y:312}).wait(1).to({graphics:mask_1_graphics_42,x:533.7,y:308.6}).wait(1).to({graphics:mask_1_graphics_43,x:541.7,y:305.1}).wait(1).to({graphics:mask_1_graphics_44,x:549.7,y:301.7}).wait(1).to({graphics:mask_1_graphics_45,x:557.8,y:298.3}).wait(1).to({graphics:mask_1_graphics_46,x:565.8,y:294.9}).wait(1).to({graphics:mask_1_graphics_47,x:573.8,y:291.4}).wait(1).to({graphics:mask_1_graphics_48,x:581.8,y:288}).wait(1).to({graphics:mask_1_graphics_49,x:589.8,y:284.6}).wait(1).to({graphics:mask_1_graphics_50,x:597.8,y:281.2}).wait(1).to({graphics:mask_1_graphics_51,x:605.8,y:277.7}).wait(1).to({graphics:mask_1_graphics_52,x:613.8,y:274.3}).wait(1).to({graphics:mask_1_graphics_53,x:621.8,y:270.9}).wait(1).to({graphics:mask_1_graphics_54,x:629.8,y:267.5}).wait(1).to({graphics:mask_1_graphics_55,x:637.8,y:264}).wait(1).to({graphics:mask_1_graphics_56,x:645.8,y:260.6}).wait(1).to({graphics:mask_1_graphics_57,x:653.8,y:257.2}).wait(1).to({graphics:mask_1_graphics_58,x:661.8,y:253.8}).wait(1).to({graphics:mask_1_graphics_59,x:669.8,y:250.3}).wait(1).to({graphics:mask_1_graphics_60,x:677.9,y:246.9}).wait(1).to({graphics:mask_1_graphics_61,x:685.9,y:243.5}).wait(1).to({graphics:mask_1_graphics_62,x:693.9,y:240.1}).wait(1).to({graphics:mask_1_graphics_63,x:701.9,y:236.6}).wait(1).to({graphics:mask_1_graphics_64,x:676.7,y:255.2}).wait(1).to({graphics:mask_1_graphics_65,x:651.5,y:273.8}).wait(1).to({graphics:mask_1_graphics_66,x:626.3,y:292.3}).wait(1).to({graphics:mask_1_graphics_67,x:601.2,y:310.9}).wait(1).to({graphics:mask_1_graphics_68,x:576,y:329.5}).wait(1).to({graphics:mask_1_graphics_69,x:550.8,y:348}).wait(1).to({graphics:mask_1_graphics_70,x:525.6,y:366.6}).wait(1).to({graphics:mask_1_graphics_71,x:500.5,y:385.2}).wait(1).to({graphics:mask_1_graphics_72,x:475.3,y:403.7}).wait(1).to({graphics:mask_1_graphics_73,x:450.1,y:422.3}).wait(1).to({graphics:mask_1_graphics_74,x:424.9,y:440.9}).wait(1).to({graphics:mask_1_graphics_75,x:399.8,y:459.5}).wait(1).to({graphics:mask_1_graphics_76,x:374.6,y:478}).wait(1).to({graphics:mask_1_graphics_77,x:349.4,y:496.6}).wait(1).to({graphics:mask_1_graphics_78,x:324.3,y:515.2}).wait(1).to({graphics:mask_1_graphics_79,x:332.4,y:511.7}).wait(1).to({graphics:mask_1_graphics_80,x:340.5,y:508.3}).wait(1).to({graphics:mask_1_graphics_81,x:348.6,y:504.8}).wait(1).to({graphics:mask_1_graphics_82,x:356.7,y:501.4}).wait(1).to({graphics:mask_1_graphics_83,x:364.8,y:497.9}).wait(1).to({graphics:mask_1_graphics_84,x:372.9,y:494.5}).wait(1).to({graphics:mask_1_graphics_85,x:381,y:491}).wait(1).to({graphics:mask_1_graphics_86,x:389.1,y:487.6}).wait(1).to({graphics:mask_1_graphics_87,x:397.2,y:484.1}).wait(1).to({graphics:mask_1_graphics_88,x:405.3,y:480.7}).wait(1).to({graphics:mask_1_graphics_89,x:413.4,y:477.2}).wait(1).to({graphics:mask_1_graphics_90,x:421.6,y:473.8}).wait(1).to({graphics:mask_1_graphics_91,x:429.7,y:470.3}).wait(1).to({graphics:mask_1_graphics_92,x:437.8,y:466.9}).wait(1).to({graphics:mask_1_graphics_93,x:445.9,y:463.5}).wait(1).to({graphics:mask_1_graphics_94,x:454,y:460}).wait(1).to({graphics:mask_1_graphics_95,x:462.1,y:456.6}).wait(1).to({graphics:mask_1_graphics_96,x:470.2,y:453.1}).wait(1).to({graphics:mask_1_graphics_97,x:478.3,y:449.7}).wait(1).to({graphics:mask_1_graphics_98,x:486.4,y:446.2}).wait(1).to({graphics:mask_1_graphics_99,x:494.5,y:442.8}).wait(1).to({graphics:mask_1_graphics_100,x:502.6,y:439.3}).wait(1).to({graphics:mask_1_graphics_101,x:510.8,y:435.9}).wait(1).to({graphics:mask_1_graphics_102,x:518.9,y:432.4}).wait(1).to({graphics:mask_1_graphics_103,x:527,y:429}).wait(1).to({graphics:mask_1_graphics_104,x:535.1,y:425.5}).wait(1).to({graphics:mask_1_graphics_105,x:543.2,y:422.1}).wait(1).to({graphics:mask_1_graphics_106,x:551.3,y:418.6}).wait(1).to({graphics:mask_1_graphics_107,x:559.4,y:415.2}).wait(1).to({graphics:mask_1_graphics_108,x:567.5,y:411.7}).wait(1).to({graphics:mask_1_graphics_109,x:575.6,y:408.3}).wait(1).to({graphics:mask_1_graphics_110,x:583.7,y:404.8}).wait(1).to({graphics:mask_1_graphics_111,x:591.8,y:401.4}).wait(1).to({graphics:mask_1_graphics_112,x:600,y:398}).wait(1).to({graphics:mask_1_graphics_113,x:608.1,y:394.5}).wait(1).to({graphics:mask_1_graphics_114,x:616.2,y:391.1}).wait(1).to({graphics:mask_1_graphics_115,x:624.3,y:387.6}).wait(1).to({graphics:mask_1_graphics_116,x:632.4,y:384.2}).wait(1).to({graphics:mask_1_graphics_117,x:640.5,y:380.7}).wait(1).to({graphics:mask_1_graphics_118,x:648.6,y:377.3}).wait(1).to({graphics:mask_1_graphics_119,x:656.7,y:373.8}).wait(1).to({graphics:mask_1_graphics_120,x:664.8,y:370.4}).wait(1).to({graphics:mask_1_graphics_121,x:672.9,y:366.9}).wait(1).to({graphics:mask_1_graphics_122,x:681,y:363.5}).wait(1).to({graphics:mask_1_graphics_123,x:689.2,y:360}).wait(1).to({graphics:mask_1_graphics_124,x:697.3,y:356.6}).wait(1).to({graphics:mask_1_graphics_125,x:705.4,y:353.1}).wait(1).to({graphics:mask_1_graphics_126,x:713.5,y:349.7}).wait(1).to({graphics:mask_1_graphics_127,x:721.6,y:346.2}).wait(1).to({graphics:mask_1_graphics_128,x:729.7,y:342.8}).wait(1).to({graphics:mask_1_graphics_129,x:737.8,y:339.3}).wait(1).to({graphics:mask_1_graphics_130,x:745.9,y:335.9}).wait(1).to({graphics:mask_1_graphics_131,x:754,y:332.5}).wait(1).to({graphics:mask_1_graphics_132,x:762.1,y:329}).wait(1).to({graphics:mask_1_graphics_133,x:770.2,y:325.6}).wait(1).to({graphics:mask_1_graphics_134,x:778.4,y:322.1}).wait(67).to({graphics:mask_1_graphics_201,x:778.3,y:322.1}).wait(1).to({graphics:mask_1_graphics_202,x:778.3,y:322.1}).wait(1).to({graphics:mask_1_graphics_203,x:778.3,y:322.1}).wait(1).to({graphics:mask_1_graphics_204,x:778.3,y:322.1}).wait(1).to({graphics:mask_1_graphics_205,x:778.3,y:322.1}).wait(1).to({graphics:mask_1_graphics_206,x:778.3,y:322.1}).wait(1).to({graphics:mask_1_graphics_207,x:778.3,y:322.1}).wait(1).to({graphics:mask_1_graphics_208,x:778.3,y:322.1}).wait(1).to({graphics:mask_1_graphics_209,x:778.4,y:322.1}).wait(1));

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
	var mask_2_graphics_8 = new cjs.Graphics().p("ArPpsIJxlBIMuYaIpxFBg");
	var mask_2_graphics_9 = new cjs.Graphics().p("AsTpLIL5mDIMuYaIr5GDg");
	var mask_2_graphics_10 = new cjs.Graphics().p("AtXoqIOAnGIMvYbIuAHGg");
	var mask_2_graphics_11 = new cjs.Graphics().p("AuboJIQHoIIMwYbIwHIIg");
	var mask_2_graphics_12 = new cjs.Graphics().p("AvenoISOpJIMvYaIyOJKg");
	var mask_2_graphics_13 = new cjs.Graphics().p("AwinHIUWqMIMvYbI0WKMg");
	var mask_2_graphics_14 = new cjs.Graphics().p("AxmmmIWerOIMvYbI2eLOg");
	var mask_2_graphics_15 = new cjs.Graphics().p("AyqmFIYlsQIMwYbI4lMQg");
	var mask_2_graphics_16 = new cjs.Graphics().p("AzulkIattSIMwYbI6tNSg");
	var mask_2_graphics_17 = new cjs.Graphics().p("A0xlDIc0uUIMvYbI80OUg");
	var mask_2_graphics_18 = new cjs.Graphics().p("A11kiIe8vWIMvYbI+8PWg");
	var mask_2_graphics_19 = new cjs.Graphics().p("A25kBMAhEgQYIMvYbMghEAQYg");
	var mask_2_graphics_20 = new cjs.Graphics().p("A39jgMAjMgRaIMuYaMgjKARbg");
	var mask_2_graphics_21 = new cjs.Graphics().p("A5Bi/MAlUgScIMuYbMglSAScg");
	var mask_2_graphics_22 = new cjs.Graphics().p("A6EieMAnagTeIMvYbMgnaATeg");
	var mask_2_graphics_23 = new cjs.Graphics().p("A7Ih9MApigUgIMvYaMgpiAUhg");
	var mask_2_graphics_24 = new cjs.Graphics().p("A8MhbMArqgVjIMvYaMgrqAVjg");
	var mask_2_graphics_25 = new cjs.Graphics().p("A9Qg6MAtygWlIMuYaMgtwAWlg");
	var mask_2_graphics_26 = new cjs.Graphics().p("A+TgZMAv4gXnIMvYaMgv4AXng");
	var mask_2_graphics_27 = new cjs.Graphics().p("A/XAHMAyAgYoIMvYbMgyAAYog");
	var mask_2_graphics_28 = new cjs.Graphics().p("EggbAAoMA0IgZqIMvYbMg0IAZqg");
	var mask_2_graphics_29 = new cjs.Graphics().p("EghfABJMA2QgasIMvYbMg2QAatg");
	var mask_2_graphics_30 = new cjs.Graphics().p("EgijABqMA4XgbuIMwYbMg4XAbvg");
	var mask_2_graphics_31 = new cjs.Graphics().p("EgjmACLMA6egcxIMvYcMg6eAcxg");
	var mask_2_graphics_32 = new cjs.Graphics().p("EgkqACsMA8mgdyIMvYbMg8mAdzg");
	var mask_2_graphics_33 = new cjs.Graphics().p("EgluADNMA+uge1IMvYcMg+uAe1g");
	var mask_2_graphics_34 = new cjs.Graphics().p("EgmyADuMBA2gf3IMvYcMhA2Af3g");
	var mask_2_graphics_35 = new cjs.Graphics().p("Egn2AEPMBC+gg5IMuYcMhC8Ag5g");
	var mask_2_graphics_36 = new cjs.Graphics().p("Ego5AEwMBFEgh7IMvYcMhFEAh7g");
	var mask_2_graphics_37 = new cjs.Graphics().p("Egp9AFRMBHMgi9IMvYcMhHMAi9g");
	var mask_2_graphics_38 = new cjs.Graphics().p("EgrBAFyMBJUgj/IMvYbMhJUAkAg");
	var mask_2_graphics_39 = new cjs.Graphics().p("EgsFAGTMBLcglBIMvYcMhLcAlBg");
	var mask_2_graphics_40 = new cjs.Graphics().p("EgtJAG0MBNkgmDIMuYbMhNiAmEg");
	var mask_2_graphics_41 = new cjs.Graphics().p("EguMAHVMBPqgnFIMvYbMhPqAnGg");
	var mask_2_graphics_42 = new cjs.Graphics().p("EgvQAH2MBRygoHIMvYcMhRyAoHg");
	var mask_2_graphics_43 = new cjs.Graphics().p("EgwUAIYMBT6gpKIMvYbMhT6ApKg");
	var mask_2_graphics_44 = new cjs.Graphics().p("EgxYAI5MBWCgqMIMvYbMhWCAqMg");
	var mask_2_graphics_45 = new cjs.Graphics().p("EgycAJaMBYJgrOIMwYbMhYJArOg");
	var mask_2_graphics_46 = new cjs.Graphics().p("EgzfAJ7MBaQgsQIMvYbMhaQAsQg");
	var mask_2_graphics_47 = new cjs.Graphics().p("Eg0jAKcMBcYgtSIMvYbMhcYAtTg");
	var mask_2_graphics_48 = new cjs.Graphics().p("Eg1nAK9MBegguVIMvYcMhegAuVg");
	var mask_2_graphics_49 = new cjs.Graphics().p("Eg2rALeMBgogvXIMvYcMhgoAvXg");
	var mask_2_graphics_50 = new cjs.Graphics().p("Eg3vAL/MBivgwYIMvYbMhiuAwZg");
	var mask_2_graphics_51 = new cjs.Graphics().p("Eg4yAMgMBk2gxbIMvYcMhk2Axbg");
	var mask_2_graphics_52 = new cjs.Graphics().p("Eg52ANBMBm+gydIMvYcMhm+Aydg");
	var mask_2_graphics_53 = new cjs.Graphics().p("Eg66ANiMBpGgzfIMvYcMhpGAzfg");
	var mask_2_graphics_54 = new cjs.Graphics().p("Eg7+AODMBrOg0hIMuYcMhrMA0hg");
	var mask_2_graphics_55 = new cjs.Graphics().p("Eg9CAOkMBtWg1jIMuYcMhtUA1jg");
	var mask_2_graphics_56 = new cjs.Graphics().p("Eg+FAPFMBvcg2lIMvYcMhvcA2lg");
	var mask_2_graphics_57 = new cjs.Graphics().p("Eg/JAPmMBxkg3nIMvYbMhxkA3og");
	var mask_2_graphics_58 = new cjs.Graphics().p("EhANAQHMBzsg4pIMvYbMhzsA4qg");
	var mask_2_graphics_59 = new cjs.Graphics().p("EhBRAQoMB1zg5rIMwYcMh1zA5rg");
	var mask_2_graphics_60 = new cjs.Graphics().p("EhCUARJMB36g6tIMvYbMh36A6ug");
	var mask_2_graphics_61 = new cjs.Graphics().p("EhDYARrMB6Cg7wIMvYbMh6CA7wg");
	var mask_2_graphics_62 = new cjs.Graphics().p("EhEcASMMB8Kg8yIMvYbMh8KA8yg");
	var mask_2_graphics_63 = new cjs.Graphics().p("EhFgAStMB+Sg90IMvYbMh+SA90g");
	var mask_2_graphics_134 = new cjs.Graphics().p("EhN+AW2MCPOhGHIMvYcMiPOBGHg");
	var mask_2_graphics_201 = new cjs.Graphics().p("EhN+AW2MCPOhGHIMvYcMiPOBGHg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(7).to({graphics:mask_2_graphics_7,x:496.2,y:690.3}).wait(1).to({graphics:mask_2_graphics_8,x:503,y:687}).wait(1).to({graphics:mask_2_graphics_9,x:509.7,y:683.7}).wait(1).to({graphics:mask_2_graphics_10,x:516.5,y:680.4}).wait(1).to({graphics:mask_2_graphics_11,x:523.3,y:677.1}).wait(1).to({graphics:mask_2_graphics_12,x:530.1,y:673.8}).wait(1).to({graphics:mask_2_graphics_13,x:536.9,y:670.5}).wait(1).to({graphics:mask_2_graphics_14,x:543.6,y:667.2}).wait(1).to({graphics:mask_2_graphics_15,x:550.4,y:663.9}).wait(1).to({graphics:mask_2_graphics_16,x:557.2,y:660.6}).wait(1).to({graphics:mask_2_graphics_17,x:564,y:657.3}).wait(1).to({graphics:mask_2_graphics_18,x:570.8,y:654}).wait(1).to({graphics:mask_2_graphics_19,x:577.5,y:650.7}).wait(1).to({graphics:mask_2_graphics_20,x:584.3,y:647.4}).wait(1).to({graphics:mask_2_graphics_21,x:591.1,y:644.1}).wait(1).to({graphics:mask_2_graphics_22,x:597.9,y:640.8}).wait(1).to({graphics:mask_2_graphics_23,x:604.7,y:637.5}).wait(1).to({graphics:mask_2_graphics_24,x:611.4,y:634.1}).wait(1).to({graphics:mask_2_graphics_25,x:618.2,y:630.8}).wait(1).to({graphics:mask_2_graphics_26,x:625,y:627.5}).wait(1).to({graphics:mask_2_graphics_27,x:631.8,y:624.2}).wait(1).to({graphics:mask_2_graphics_28,x:638.6,y:620.9}).wait(1).to({graphics:mask_2_graphics_29,x:645.3,y:617.6}).wait(1).to({graphics:mask_2_graphics_30,x:652.1,y:614.3}).wait(1).to({graphics:mask_2_graphics_31,x:658.9,y:611}).wait(1).to({graphics:mask_2_graphics_32,x:665.7,y:607.7}).wait(1).to({graphics:mask_2_graphics_33,x:672.5,y:604.4}).wait(1).to({graphics:mask_2_graphics_34,x:679.2,y:601.1}).wait(1).to({graphics:mask_2_graphics_35,x:686,y:597.8}).wait(1).to({graphics:mask_2_graphics_36,x:692.8,y:594.5}).wait(1).to({graphics:mask_2_graphics_37,x:699.6,y:591.2}).wait(1).to({graphics:mask_2_graphics_38,x:706.4,y:587.9}).wait(1).to({graphics:mask_2_graphics_39,x:713.1,y:584.6}).wait(1).to({graphics:mask_2_graphics_40,x:719.9,y:581.3}).wait(1).to({graphics:mask_2_graphics_41,x:726.7,y:578}).wait(1).to({graphics:mask_2_graphics_42,x:733.5,y:574.7}).wait(1).to({graphics:mask_2_graphics_43,x:740.2,y:571.3}).wait(1).to({graphics:mask_2_graphics_44,x:747,y:568}).wait(1).to({graphics:mask_2_graphics_45,x:753.8,y:564.7}).wait(1).to({graphics:mask_2_graphics_46,x:760.6,y:561.4}).wait(1).to({graphics:mask_2_graphics_47,x:767.4,y:558.1}).wait(1).to({graphics:mask_2_graphics_48,x:774.1,y:554.8}).wait(1).to({graphics:mask_2_graphics_49,x:780.9,y:551.5}).wait(1).to({graphics:mask_2_graphics_50,x:787.7,y:548.2}).wait(1).to({graphics:mask_2_graphics_51,x:794.5,y:544.9}).wait(1).to({graphics:mask_2_graphics_52,x:801.3,y:541.6}).wait(1).to({graphics:mask_2_graphics_53,x:808,y:538.3}).wait(1).to({graphics:mask_2_graphics_54,x:814.8,y:535}).wait(1).to({graphics:mask_2_graphics_55,x:821.6,y:531.7}).wait(1).to({graphics:mask_2_graphics_56,x:828.4,y:528.4}).wait(1).to({graphics:mask_2_graphics_57,x:835.2,y:525.1}).wait(1).to({graphics:mask_2_graphics_58,x:841.9,y:521.8}).wait(1).to({graphics:mask_2_graphics_59,x:848.7,y:518.5}).wait(1).to({graphics:mask_2_graphics_60,x:855.5,y:515.2}).wait(1).to({graphics:mask_2_graphics_61,x:862.3,y:511.8}).wait(1).to({graphics:mask_2_graphics_62,x:869.1,y:508.5}).wait(1).to({graphics:mask_2_graphics_63,x:875.8,y:505.2}).wait(71).to({graphics:mask_2_graphics_134,x:930,y:478.7}).wait(67).to({graphics:mask_2_graphics_201,x:930,y:478.7}).wait(9));

	// 底層文字 複製
	this.instance_4 = new lib.補間動畫3("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(940.9,572);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7).to({_off:false},0).wait(194).to({alpha:0.781},0).to({alpha:0},8).wait(1));

	// 圖層 6   複製 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_78 = new cjs.Graphics().p("AqLqNIHpj/IMuYaInpD/g");
	var mask_3_graphics_79 = new cjs.Graphics().p("ArVpsIJ9lCIMuYbIp9FCg");
	var mask_3_graphics_80 = new cjs.Graphics().p("AsepKIMPmFIMuYaIsPGFg");
	var mask_3_graphics_81 = new cjs.Graphics().p("AtoopIOhnHIMwYaIuhHHg");
	var mask_3_graphics_82 = new cjs.Graphics().p("AuxoIIQ0oKIMvYbIw0IKg");
	var mask_3_graphics_83 = new cjs.Graphics().p("Av6nmITGpNIMvYaIzGJNg");
	var mask_3_graphics_84 = new cjs.Graphics().p("AxEnFIVaqQIMvYbI1aKQg");
	var mask_3_graphics_85 = new cjs.Graphics().p("AyNmjIXsrTIMvYaI3sLTg");
	var mask_3_graphics_86 = new cjs.Graphics().p("AzXmCIaAsVIMuYaI5+MVg");
	var mask_3_graphics_87 = new cjs.Graphics().p("A0glgIcStZIMvYaI8SNZg");
	var mask_3_graphics_88 = new cjs.Graphics().p("A1pk/IekubIMvYaI+kObg");
	var mask_3_graphics_89 = new cjs.Graphics().p("A2zkeMAg4gPeIMvYbMgg4APeg");
	var mask_3_graphics_90 = new cjs.Graphics().p("A38j8MAjKgQhIMvYaMgjKAQhg");
	var mask_3_graphics_91 = new cjs.Graphics().p("A5GjbMAldgRjIMvYaMglcARjg");
	var mask_3_graphics_92 = new cjs.Graphics().p("A6Pi5MAnwgSnIMvYaMgnwASng");
	var mask_3_graphics_93 = new cjs.Graphics().p("A7ZiYMAqDgTpIMwYaMgqDATpg");
	var mask_3_graphics_94 = new cjs.Graphics().p("A8ih3MAsWgUsIMvYbMgsWAUsg");
	var mask_3_graphics_95 = new cjs.Graphics().p("A9rhVMAuogVvIMvYaMguoAVvg");
	var mask_3_graphics_96 = new cjs.Graphics().p("A+1g0MAw8gWyIMvYbMgw8AWxg");
	var mask_3_graphics_97 = new cjs.Graphics().p("A/+gSMAzOgX1IMvYaMgzOAX1g");
	var mask_3_graphics_98 = new cjs.Graphics().p("EghIAAOMA1igY2IMuYbMg1gAY2g");
	var mask_3_graphics_99 = new cjs.Graphics().p("EgiRAAvMA30gZ5IMvYcMg30AZ5g");
	var mask_3_graphics_100 = new cjs.Graphics().p("EgjaABRMA6Gga8IMvYbMg6GAa8g");
	var mask_3_graphics_101 = new cjs.Graphics().p("EgkkAByMA8agb/IMvYcMg8aAb+g");
	var mask_3_graphics_102 = new cjs.Graphics().p("EgltACUMA+sgdCIMvYbMg+sAdCg");
	var mask_3_graphics_103 = new cjs.Graphics().p("Egm3AC1MBA/geFIMwYcMhA/AeEg");
	var mask_3_graphics_104 = new cjs.Graphics().p("EgoAADWMBDSgfHIMvYcMhDSAfHg");
	var mask_3_graphics_105 = new cjs.Graphics().p("EgpJAD4MBFkggKIMvYbMhFkAgKg");
	var mask_3_graphics_106 = new cjs.Graphics().p("EgqTAEZMBH4ghNIMvYcMhH4AhMg");
	var mask_3_graphics_107 = new cjs.Graphics().p("EgrcAE7MBKKgiQIMvYbMhKKAiQg");
	var mask_3_graphics_108 = new cjs.Graphics().p("EgsmAFcMBMegjTIMuYcMhMcAjSg");
	var mask_3_graphics_109 = new cjs.Graphics().p("EgtvAF9MBOwgkVIMvYcMhOwAkVg");
	var mask_3_graphics_110 = new cjs.Graphics().p("Egu5AGfMBRDglYIMwYbMhRDAlYg");
	var mask_3_graphics_111 = new cjs.Graphics().p("EgwCAHAMBTWgmbIMvYcMhTWAmbg");
	var mask_3_graphics_112 = new cjs.Graphics().p("EgxLAHiMBVogneIMvYcMhVoAndg");
	var mask_3_graphics_113 = new cjs.Graphics().p("EgyVAIDMBX8gohIMvYcMhX8Aogg");
	var mask_3_graphics_114 = new cjs.Graphics().p("EgzeAIkMBaOgpjIMvYcMhaOApjg");
	var mask_3_graphics_115 = new cjs.Graphics().p("Eg0oAJGMBcigqmIMvYbMhchAqmg");
	var mask_3_graphics_116 = new cjs.Graphics().p("Eg1xAJnMBe0grpIMvYcMhe0Arpg");
	var mask_3_graphics_117 = new cjs.Graphics().p("Eg26AKJMBhGgssIMvYcMhhGAsrg");
	var mask_3_graphics_118 = new cjs.Graphics().p("Eg4EAKqMBjagtvIMvYcMhjaAtug");
	var mask_3_graphics_119 = new cjs.Graphics().p("Eg5NALMMBlsguyIMvYcMhlsAuxg");
	var mask_3_graphics_120 = new cjs.Graphics().p("Eg6XALtMBoAgv0IMuYbMhn+Av0g");
	var mask_3_graphics_121 = new cjs.Graphics().p("Eg7gAMOMBqSgw3IMvYcMhqSAw3g");
	var mask_3_graphics_122 = new cjs.Graphics().p("Eg8pAMwMBskgx6IMvYbMhskAx6g");
	var mask_3_graphics_123 = new cjs.Graphics().p("Eg9zANRMBu4gy9IMvYcMhu4Ay8g");
	var mask_3_graphics_124 = new cjs.Graphics().p("Eg+8ANzMBxKg0AIMvYcMhxKAz/g");
	var mask_3_graphics_125 = new cjs.Graphics().p("EhAGAOUMBzdg1CIMwYbMhzdA1Cg");
	var mask_3_graphics_126 = new cjs.Graphics().p("EhBPAO1MB1wg2FIMvYcMh1wA2Fg");
	var mask_3_graphics_127 = new cjs.Graphics().p("EhCZAPXMB4Eg3IIMuYbMh4CA3Ig");
	var mask_3_graphics_128 = new cjs.Graphics().p("EhDiAP4MB6Wg4KIMvYbMh6WA4Kg");
	var mask_3_graphics_129 = new cjs.Graphics().p("EhErAQaMB8og5OIMvYcMh8oA5Ng");
	var mask_3_graphics_130 = new cjs.Graphics().p("EhF1AQ7MB+8g6RIMuYcMh+6A6Qg");
	var mask_3_graphics_131 = new cjs.Graphics().p("EhG+ARcMCBOg7TIMvYcMiBOA7Tg");
	var mask_3_graphics_132 = new cjs.Graphics().p("EhIIAR+MCDhg8WIMwYbMiDhA8Wg");
	var mask_3_graphics_133 = new cjs.Graphics().p("EhJRASfMCF0g9YIMvYbMiF0A9Yg");
	var mask_3_graphics_134 = new cjs.Graphics().p("EhKaATBMCIGg+cIMvYcMiIGA+bg");
	var mask_3_graphics_201 = new cjs.Graphics().p("EhKaATBMCIGg+cIMvYcMiIGA+bg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(78).to({graphics:mask_3_graphics_78,x:556.2,y:830.3}).wait(1).to({graphics:mask_3_graphics_79,x:563.5,y:827}).wait(1).to({graphics:mask_3_graphics_80,x:570.9,y:823.7}).wait(1).to({graphics:mask_3_graphics_81,x:578.2,y:820.3}).wait(1).to({graphics:mask_3_graphics_82,x:585.6,y:817}).wait(1).to({graphics:mask_3_graphics_83,x:592.9,y:813.6}).wait(1).to({graphics:mask_3_graphics_84,x:600.2,y:810.3}).wait(1).to({graphics:mask_3_graphics_85,x:607.6,y:807}).wait(1).to({graphics:mask_3_graphics_86,x:614.9,y:803.6}).wait(1).to({graphics:mask_3_graphics_87,x:622.3,y:800.3}).wait(1).to({graphics:mask_3_graphics_88,x:629.6,y:796.9}).wait(1).to({graphics:mask_3_graphics_89,x:636.9,y:793.6}).wait(1).to({graphics:mask_3_graphics_90,x:644.3,y:790.3}).wait(1).to({graphics:mask_3_graphics_91,x:651.6,y:786.9}).wait(1).to({graphics:mask_3_graphics_92,x:659,y:783.6}).wait(1).to({graphics:mask_3_graphics_93,x:666.3,y:780.2}).wait(1).to({graphics:mask_3_graphics_94,x:673.6,y:776.9}).wait(1).to({graphics:mask_3_graphics_95,x:681,y:773.5}).wait(1).to({graphics:mask_3_graphics_96,x:688.3,y:770.2}).wait(1).to({graphics:mask_3_graphics_97,x:695.7,y:766.9}).wait(1).to({graphics:mask_3_graphics_98,x:703,y:763.5}).wait(1).to({graphics:mask_3_graphics_99,x:710.4,y:760.2}).wait(1).to({graphics:mask_3_graphics_100,x:717.7,y:756.8}).wait(1).to({graphics:mask_3_graphics_101,x:725,y:753.5}).wait(1).to({graphics:mask_3_graphics_102,x:732.4,y:750.2}).wait(1).to({graphics:mask_3_graphics_103,x:739.7,y:746.8}).wait(1).to({graphics:mask_3_graphics_104,x:747.1,y:743.5}).wait(1).to({graphics:mask_3_graphics_105,x:754.4,y:740.1}).wait(1).to({graphics:mask_3_graphics_106,x:761.7,y:736.8}).wait(1).to({graphics:mask_3_graphics_107,x:769.1,y:733.5}).wait(1).to({graphics:mask_3_graphics_108,x:776.4,y:730.1}).wait(1).to({graphics:mask_3_graphics_109,x:783.8,y:726.8}).wait(1).to({graphics:mask_3_graphics_110,x:791.1,y:723.4}).wait(1).to({graphics:mask_3_graphics_111,x:798.4,y:720.1}).wait(1).to({graphics:mask_3_graphics_112,x:805.8,y:716.8}).wait(1).to({graphics:mask_3_graphics_113,x:813.1,y:713.4}).wait(1).to({graphics:mask_3_graphics_114,x:820.5,y:710.1}).wait(1).to({graphics:mask_3_graphics_115,x:827.8,y:706.7}).wait(1).to({graphics:mask_3_graphics_116,x:835.1,y:703.4}).wait(1).to({graphics:mask_3_graphics_117,x:842.5,y:700.1}).wait(1).to({graphics:mask_3_graphics_118,x:849.8,y:696.7}).wait(1).to({graphics:mask_3_graphics_119,x:857.2,y:693.4}).wait(1).to({graphics:mask_3_graphics_120,x:864.5,y:690}).wait(1).to({graphics:mask_3_graphics_121,x:871.9,y:686.7}).wait(1).to({graphics:mask_3_graphics_122,x:879.2,y:683.3}).wait(1).to({graphics:mask_3_graphics_123,x:886.5,y:680}).wait(1).to({graphics:mask_3_graphics_124,x:893.9,y:676.7}).wait(1).to({graphics:mask_3_graphics_125,x:901.2,y:673.3}).wait(1).to({graphics:mask_3_graphics_126,x:908.6,y:670}).wait(1).to({graphics:mask_3_graphics_127,x:915.9,y:666.6}).wait(1).to({graphics:mask_3_graphics_128,x:923.2,y:663.3}).wait(1).to({graphics:mask_3_graphics_129,x:930.6,y:660}).wait(1).to({graphics:mask_3_graphics_130,x:937.9,y:656.6}).wait(1).to({graphics:mask_3_graphics_131,x:945.3,y:653.3}).wait(1).to({graphics:mask_3_graphics_132,x:952.6,y:649.9}).wait(1).to({graphics:mask_3_graphics_133,x:959.9,y:646.6}).wait(1).to({graphics:mask_3_graphics_134,x:967.3,y:643.3}).wait(67).to({graphics:mask_3_graphics_201,x:967.3,y:643.3}).wait(9));

	// 底層文字
	this.instance_5 = new lib.補間動畫3("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(940.9,572);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(78).to({_off:false},0).wait(56).to({startPosition:0},0).wait(67).to({alpha:0.781},0).to({alpha:0},8).wait(1));

	// 備份
	this.instance_6 = new lib.元件1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(2330.5,515.6,1,1,0,0,0,215.6,148.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AkFKaQB1h3A+iBQA/iDgiizIh1A3Qg+AdgsAnIg/gXIEWiDQgdhqgcg9IB6AFIgTAsQALAjAHA0IEDh5IANg5IBqATIgYAuQBaD5gFBLQgGBKhRA9QgWgvilADIgEgVQCDgbAogTQAogTgXhiQgYhjgshzIkQB/QAqDShVCNQhWCNh5BsgAn+EbQCHh/Bdh5QBch4BEiHQiDgwiThbQgGBTgcBeQgcBdg4BkIgSgDQAxh9ATinQATingXh5IB+AKQgiAmgGBIIFOidIAThDIB2AfIgnA0QgOCzhIChQCOAYCggdQCegdBsgzIAJATQhQA9AOA4QhWAYigAGQihAHiDgjQhNCLhuB+QhuB+h7BpgAmDmhIgJAcQCiBOCGAoQA+iVAEijg");
	this.shape.setTransform(-247.7,617.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AlYLYQAFj0hujrIkXpPIBYAEICzhUIAKgzIBYAQQAnALgqAfIGCM1QAZA0gUAsQgKAcgbANQgTAJgIgTQgMgYggAEIhEAPQgYgBAPgSIBegsQAhgPgPghIinlhIjKBfIAUAqQB8EIgwEIQgGALgFAAQgGAAgGgMgAoPhLIBhDOIDKhfIhhjOgAp8kxIBfDKIDKhfIhfjKgACwGvInRvaIBZAFIEiiKIAKgzIBZAQQAnAKgrAgIBbDBQAYAzgTAsQgKAcgdANQgSAJgJgTQgLgYghAFIhEAOQgXAAAPgSIBegtQAhgPgQghIhZi8Ik6CUIC0F9IFWiiIAUg3IBTASQAsAIg5AmQAWCogeC/QCdA0ClgCQgyA0gGAlQhjgQi0hBQgnCWhFB3QgWAQADgeQA5h8AYibQiXhaiDibIhGAhIDuH7QgVA0gSAAQgKAAgJgTgABZiZQCECFCFA+QAWiTghiog");
	this.shape_1.setTransform(-370.9,673.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AjmI2Ii8mPIBWAAIEMh/Ihbi/IlOCcIgNgbIE/iWIALg0IBYAQQAnALgqAfIB0D4QghBVgZgzIgWgvIkVCDICWE/QAJATATgJII8kOQA9gdAfggQAfgggGglIgoiqQAKgQAGAOIBMCfQALAYAXAAQAlAGgWAnQg7BEh/A8IpZEbQgSAJgPAAQggAAgSgngAqHDZQBklNg2lnIBiALQBDAJhLAkIgECLIJBkRIALgzIBYAQQAnALgrAfIDIGnQAnBVgFAvQgEBBgwA5QgpAwgWgvQgPghgfAJIhNATQgggIAhgPIBqgsQAigLAPgeQAWgmgqhZIjHmnIpdEeQgVEchYC/QgJALgFAAQgIAAgBgYg");
	this.shape_2.setTransform(-490.6,728.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AmGKEQCckYAVjqQgTAVgdgbQhphYhkgFQgfCNg4BaQgaASAGgmQBqkchRmgIBegJQBBgIg+A0IABCgIDFhdIALgyIBpACQA3gDgtAmQBXBKBbAxIi7mQIBWgXQAxAGg0AkIDGGnQDeA4DQgvQg3A3gDA1QimAPitg+IDcHQQgjBVgYgzIj9oXQh/hNhthiIgKAEQBnIvk4G+QgKAHgGAAQgLAAAGgagAjNBLQAOi+gsjWIjYBmQAFB2gWBwQAggDAdAAQB9AABNBLg");
	this.shape_3.setTransform(-619.2,790.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AjWJoQAPgegWguIh4j+IgdAMQg9AegsAnIg/gYIC4hWIhZi7IheArQgNA7gZBQIgTgCQAnj4hMliIB+AKQgbApAAAxQAAAwADA4ICEg+IAZhcIB9A4IkWCDQgDBzgIBPIDThiIAZhRIB0AwIjBBaIBYC8IBagqIAZhRIBuA0IjUBjIB6EDIB2ikIAVAHQhkDKgDBogAgKDEQh5j/hDiCIBdAOICahJQhYi8hbi1ICHgGIgYA6ICGEeICRhFIAOhFIBoAZIgWAzIEFIpQAsBThVBWQgwg/iAAfIgJgSQBJgdAxgXQAygYgig6IhJicIl4CyICLEoIg3BCQg2iBh4kAgAgIAfIBLCfIF4ixIhMiegAhciTIBHCVIF3iwIhHiWgAiSkMQg3g/iBhBIAKgQQCLAOA4AWQA5AXgMBKQgGAogTAAQgQAAgZgdgACOljQAbiWgKidICBAfIgtAnQglBzgtB9g");
	this.shape_4.setTransform(-746,842.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AA3HGIhpjiIkaCFIAfBCIg3BCQhHiihQiqQhPiohHiKIBfAHIEViDQhAiIg6hvICFABIgXAzIBOCkIEeiHIAZhFIBgAiIgaA1QCxF4AxBbIg3BCIgbg4IkjCJIBjDUQAZAzA4gbIFFiYQAngZgQgvQgQgvg7iKIAXgLQA3B1AiAeQAiAeAsAIQAAAugVAeQgUAeg0AYIlvCtQggAQgbAAQg2AAgeg/gAm9B5IBkDUIEaiFIhkjSgAhhgpIBiDSIEkiJIhkjTgAophsIBfDJIEaiEIhfjKgAjOkQIBfDKIEjiJIhfjKg");
	this.shape_5.setTransform(-866.2,901.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AknHeQhRgZgihIQgihHAShfQAShfBpiNQg4gwgdgiQgcgjgRgkQgvhkAxhYQAmhEBJgjQBGghBAAVQA/AVAdA8QAdA/gUBDQgVBDhRBqQCJBhCEBIQAtirgohUQgMgbgcgNQgUgKgaAIIgJgWID2h0IAKAWQgxAcgPAfQgRAdgHB2QgIB2gbBuQBSAlA0AFQA1AFAqgUQAogTASgjQASgkgJgvIAeAFQARBdgeA+QgdA+hAAeQgxAWg9gCQg+gDhZgjQgqBkgtA0QgvA0hDAgQg/Adg4AAQgfAAgcgIgAlICTQgNBCAbA5QAdA/A/AcQA/AcBFggQAlgRAcgfQAagfAlhMQh/hFg1gjQg0gihHg4QgzBKgMBBgAktmlQgzAYgJAwQgKAvARAjQANAcAbAgQAbAeA+A4QA4hFAQg+QAPg9gag2QgUgqgngQQgRgHgSAAQgVAAgWALg");
	this.shape_6.setTransform(-694.3,656.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AlYLYQAFj0hujrIkXpPIBYAEICzhUIAKgzIBYAQQAnALgqAfIGCM1QAZA0gUAsQgKAcgbANQgTAJgIgTQgMgYggAEIhEAPQgYgBAPgSIBegsQAhgPgPghIinlhIjKBfIAUAqQB8EIgwEIQgGALgFAAQgGAAgGgMgAoPhLIBhDOIDKhfIhhjOgAp8kxIBfDKIDKhfIhfjKgACwGvInRvaIBZAFIEiiKIAKgzIBZAQQAnAKgrAgIBbDBQAYAzgTAsQgKAcgdANQgSAJgJgTQgLgYghAFIhEAOQgXAAAPgSIBegtQAhgPgQghIhZi8Ik6CUIC0F9IFWiiIAUg3IBTASQAsAIg5AmQAWCogeC/QCdA0ClgCQgyA0gGAlQhjgQi0hBQgnCWhFB3QgWAQADgeQA5h8AYibQiXhaiDibIhGAhIDuH7QgVA0gSAAQgKAAgJgTgABZiZQCECFCFA+QAWiTghiog");
	this.shape_7.setTransform(-813.1,706.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AACJyIiRk2QhbBkh+BkQgjAWAKgnQDvjHCKk9QhxghhwhPQg5D0iRCnQgWAPAFgZQCmj1AClSIkMB+QAsBegHBIQgDApghAPQgoAZgSgmQgLgXASgwQAbhMgjhuQgIgqAgAfIAUAfIFXiiIhJibIBbgaQA9gFhCA2IAwBnIF8izIAWg+ICLAyQAtAYgvAWQg/AYgRAZIgnBMQgTAVABgjIABh5InoDmIAzgBQBBAEhHAtIgXBsIEUiDIANg5IBtAXQAsAUhFAaQgcB7gvB4QDsAlExh4QgoAwAABKQkqA7jhgxQhLCchWBuIAeADIF3ixIALgzIBYAQQAnAKgrAfIB6EDQgiBVgZgzIgRgmImQC8IAZA0QgWA1gRAAQgLAAgJgUgAhMEtIBjDUIGPi8IhjjUgAjKiVQBZBDB0ATQAmhcATh2g");
	this.shape_8.setTransform(-941.4,759.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_6}]}).wait(210));

	// BG
	this.instance_7 = new lib._1();
	this.instance_7.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(210));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.2,600,3593.2,1210.3);
// library properties:
lib.properties = {
	width: 1920,
	height: 1200,
	fps: 19,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/tr_main_atlas_.png?1546617694584", id:"tr_main_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;