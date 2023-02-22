(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"main_atlas_", frames: [[0,0,1920,1200],[0,1202,565,364]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._1 = function() {
	this.spriteSheet = ss["main_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.MAGNIFYINGGLASS = function() {
	this.spriteSheet = ss["main_atlas_"];
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
	this.shape.graphics.f("rgba(102,102,102,0.898)").s().p("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");
	this.shape.setTransform(429.8,367.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(15.5,159.7,828.7,414.9), null);


(lib.補間動畫3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlKI0QAUgcAGgsIACglIgOpnQgEgXAFgaQAKg0AlgQIChhGQgNAJgMATQgZAoABAxIAGEGIEuiCIgKmkIAFgqQAKgvAWgXQBIATBQAuQgbAxACBVIATMqIjIBXQAbgNAIhFIgFlDIktCDIAIFdIgCAeQgHAigUAaQhWgXhNgsg");
	this.shape.setTransform(-8.1,-73);

	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(-4.1,-69.3,0.808,0.808,-23.5,0,0,91.1,107.4);
	this.instance.alpha = 0.199;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#7ECEF4","#136C9B"],[0,1],-54.3,-21.4,51.9,20.4).s().p("AjvJhQh3gvhchYQhghbg1h6Qg1h6gCiEQgBh/Avh3QAvh3BYhdQBbhfB6g1QB7g1CEgCQB+gBB3AvQB3AvBcBYQBgBbA2B6QA1B6ABCEQABB/gvB3QgvB3hXBdQhcBfh6A1Qh6A1iEACIgFAAQh8AAh1gug");
	this.shape_1.setTransform(-8.3,-73.2);

	this.instance_1 = new lib.元件2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13.6,12.5,1,1,0,0,0,443.4,319.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1B72A9").s().p("A1XHdIAvgWIARBbIA/gdIgQhZIAwgWIAjDhIgvAUIgRhlIg/AcIAQBmIgvAVgAxsJWQgPgHgDgXQgEgRAGgPQAGgSAPgPQADgDA+ghIAAgKQgDgNgIgGQgIgGgLAFQgUAKABAZIgpASQAAgkANgQQAOgPAhgQQALgFASgDQAOgBAJAFQAKAFAEAHQADAGAFAYIAKBPQACAWAEAIIgsAUIgDgJIgNAOQgFAGgVAJQgQAHgNAAQgJAAgGgDgAxSIjQABAJAGAFQAGADAJgEQATgIAEgJQAHgUgBgKIgCgSQg2AXAFAdgAvbFsIAsgTIAaCpIgsAUgAtQGGIhUhrIAsgUIA7BMIAjh1IAsgUIgyCnIAMBaIgtATgAq6GcQgKgBgGgLQgGgLgEgYIgOhwIAqgTIAQB3QAFAWAWgJQAHgDAHgKQAHgIABgHIgDgeIgNhgIAwgVIAYCtIgtAUIgEgfQgJAmglAQQgNAGgIAAIgHgBgAvlEtIAtgUIAGAnIgtAUgAnHBpIg4AZIgGghICehGIAFAhIg5AbIAeC+IgtAUgAksDnQgPgDgPgPQgNgOgGgcQgFgqAQghQARgiAhgOQAdgOAYAPQAXANAKAzIhhAsIAAAHQACASALAGQAIAFANgFQARgIAFgTIApgSQgIA6gyAWQgUAIgPAAIgFAAgAkaBQQgYALABAkIA3gYQgGgZgPAAQgFAAgGACgAiSCUQgXgOgHgoQgFgnAPgjQARghAigPQAegNAUAKQAPAJAKASIgrATQgLgUgRAHQgOAGgFASQgEASADAZQADAOAGAOQAEAOAEACQAKAGAKgEQATgIACgXIApgTQABAXgNAUQgPAagfAOQgQAHgOAAQgOAAgMgHgAgYiEIApgTIANBYQAHggAogRQAOgHAOADQANABAFALQAIAMADAUIARBwIgtAUIgVh+QgDgGgEgBQgFgDgIADQgOAGgJANQgGAJABAUIABANIAQBfIgrATgADjjqIBPgiQAmgQAYANQATAJAJAXQALAqgdAgIghAWIgwAXIAMBYIguAUgAE8juIglAQIAKBDIAlgRQARgHAGgPQAHgNgFgKQgJgTgOgCgAHeh0QgNgHgGgfIgOhXIgYAKIgEgfIAagMIgGgrIApgSIAHArIAggOIAGAeIgiAPIAOBQIABAOQACAJADADQAEADASgHIAHgFIAEAdIgWANQgTAJgMAAQgGAAgFgDgAJVinQgRgDgOgPQgNgPgFgbQgGgrAQggQARgiAggPQAegMAYANQAYAOAIAzIhhArIABAJQADARALAFQAIAGAOgGQASgHADgUIApgTQgKA8gvAWQgUAIgNAAIgIAAgAJnk+QgaALADAkIA1gYQgGgagOAAQgFAAgFADgALYkRIAugVIAIA1IguAVgANMoDIAxgWIAfDCIBYgnIADAlIiFA7gAQblzQgOgHgGggIgOhXIgYALIgEgfIAbgLIgHgtIAqgSIAGArIAhgOIAGAfIgiAOIANBQIACAOQABAJAEADQAEADAQgHIAIgEIAFAcIgXAOQgSAIgMAAQgGAAgFgCgAR7mrQgKgIgGgQQgFgOgDgTQgIgrALgfIACgEQAKgaAagMQANgGAPAAQAQAAAJAGIgOhRIArgTIAlDsIgoARIgFgcQgEAQgPARQgPAOgOAGQgKAFgKAAQgNAAgKgKgASio8QgKAEgFALQgIASAGAjQAKA1AYgLQARgHAFgMQAHgOgEgQIgEgfIgCgKQgGgTgJgEQgDgBgDAAQgGAAgJAEgAUhoWIAvgVIAIA1IgvAVg");
	this.shape_2.setTransform(212,-128.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#135E8A").s().p("A1ZM+QAqgUAHg1QADgYgEgzIgBgGQgHhVghjoIBLghQgOAHALBCQAUBtAMC1IACAYQAIBjgsAwQgWAXgXAEgAvSKeQAigMAngSQA3gYgBghIABgDIksCFIAAgNQgBhXgEhNIg2AZIgKg3IA9gaQgJhSgIhBIgEgaIFSiWIAaCqIAhgQIAJgRIALBEIgtAUQAFAfAJBRIAcgMIAKgWIAMBIIgvAVQAAA3gOAaQgSAkh0A0IgHACgAxIH+QAEAwABBGIDthqIgNhxgAxYFRIABACQAIA0AFA9IDghkIgPhygAwHINIAbgwQAzAOAbAOIgcA3QgbgTgygQgAneGwQAfgKAbgLQASgGAQgIQAcgNgDgPIgYiGIkNB3IgLhAIENh5IgShfIilBKIgMg+IFmieIAPgaIANBPIiPBAIAQBgIDrhpIANggIAQBYIj7BxIAZCQQAHAlgPAXQgEAIgHAGQgQAPgcAMIhgAqgAwjFlIAbgwQArAJAqATIgeA2QgdgRg1gRgAz4FaIAOgVQAegzAPgnQAQgvALhDIA5gBIgKA1IEkiDIAIgUIAPBMIlQCWIgCACQgKAjgYAuIgXAogA1REuQgVgIgJgWQgJgUAHgWQAJgUAUgJQAVgKAVAIQAWAJAJAUQAJAVgIAWQgIAVgVAJQgMAFgLAAQgJAAgKgEgACHhbIgFAbQgWBngoBWIgkg9QAhhDAWhIQALglAJgnIAHgeIhrAwIgIg8IBtgxIgRhfIhWAzIgTg3QArgYAogZQBCgqA1gtIAfAxQgeAageAWIgOAJIATBpIBVgnIAGgNIAMBFIhdApIADASIAcARIAeAWIA5ApIgYBDIhPhMIA4E2Ig4AZgArBgMIDKhZQAOAPAVAHQAUAEAVgKQATgJALgSIAGgMQADgOgBgNIAAgBIDyhtIAgC3IhBAdIgVh2ImsC+IAVB2IhBAcgAIEiDIjOB/IgSg5IDViFIhImUIA6gaIBFGLIApgaIAJgWIAUBKIg6AkIAkDGIg6AbgAL6h2QAZgFAZgLQAQgHAEgKQADgGgBgGIgaiRQgiAigkAcIgVhIIAFgDQAlgZAlggIgfikIhPAjIgLg9IBQgjIgXiBIA9gbIAWCCIAygXIASgaIAOBOIhGAfIAYCGQAjgmAZgjIANBJQgeAngfAhIAiC6QACAOAAAMQAAAUgJANQgEAJgHAGQgOAOgYAMIg0AWgAnZhdQgXgIgJgVQgEgIAAgHQgBgHABgHQABgHADgHQAIgUAVgJQAVgKAUAIQAWAJAIAUQADAIACAIQACAMgEANIgBACQgIAUgUAKQgMAFgLAAQgKAAgJgEgAOoi1QBDg5AugxQAbgdAUgaQhFgpg0hHIAtg2QA0BKA/AhIAEgHQAlg+Aah+Ij8BxIgLg/IB8g3IgQhdIh9A4IgLhCIB8g3IgShkIA/gcIARBkIB8g2IAQgjIAQBaIiQBBIARBbICCg6IAKA4QgTCFguBYIgPAgQAdAKA5ADQA1AFAwgDIAKgIQALgGAEgFIgfBcQg7gBg/gGQhEgGgfgNIgcAkQgxA7hIBHIgZAXgAFljHQgVgGgJgWQgJgUAIgVQAHgWAVgKQAVgJAWAJQAWAHAJAVQAJAVgJAVQgIAWgUAJQgLAFgLAAQgLAAgKgFgAFSl2QgWgIgJgVQgJgVAHgVQAJgWAVgJQAVgKAVAKQAVAGAJAWQAKAUgIAWQgIAVgVAKQgMAFgLAAQgKAAgJgEg");
	this.shape_3.setTransform(198.4,-178.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.instance_1},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-414.3,-267.3,828.7,534.8);


(lib.補間動畫2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlKI0QAUgcAGgsIACglIgOpnQgEgXAFgaQAKg0AlgQIChhGQgNAJgMATQgZAoABAxIAGEGIEuiCIgKmkIAFgqQAKgvAWgXQBIATBQAuQgbAxACBVIATMqIjIBXQAbgNAIhFIgFlDIktCDIAIFdIgCAeQgHAigUAaQhWgXhNgsg");
	this.shape.setTransform(-8.1,-73);

	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(-4.1,-69.3,0.808,0.808,-23.5,0,0,91.1,107.4);
	this.instance.alpha = 0.199;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#7ECEF4","#136C9B"],[0,1],-54.3,-21.4,51.9,20.4).s().p("AjvJhQh3gvhchYQhghbg1h6Qg1h6gCiEQgBh/Avh3QAvh3BYhdQBbhfB6g1QB7g1CEgCQB+gBB3AvQB3AvBcBYQBgBbA2B6QA1B6ABCEQABB/gvB3QgvB3hXBdQhcBfh6A1Qh6A1iEACIgFAAQh8AAh1gug");
	this.shape_1.setTransform(-8.3,-73.2);

	this.instance_1 = new lib.元件2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13.6,12.5,1,1,0,0,0,443.4,319.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1B72A9").s().p("A1XHdIAvgWIARBbIA/gdIgQhZIAwgWIAjDhIgvAUIgRhlIg/AcIAQBmIgvAVgAxsJWQgPgHgDgXQgEgRAGgPQAGgSAPgPQADgDA+ghIAAgKQgDgNgIgGQgIgGgLAFQgUAKABAZIgpASQAAgkANgQQAOgPAhgQQALgFASgDQAOgBAJAFQAKAFAEAHQADAGAFAYIAKBPQACAWAEAIIgsAUIgDgJIgNAOQgFAGgVAJQgQAHgNAAQgJAAgGgDgAxSIjQABAJAGAFQAGADAJgEQATgIAEgJQAHgUgBgKIgCgSQg2AXAFAdgAvbFsIAsgTIAaCpIgsAUgAtQGGIhUhrIAsgUIA7BMIAjh1IAsgUIgyCnIAMBaIgtATgAq6GcQgKgBgGgLQgGgLgEgYIgOhwIAqgTIAQB3QAFAWAWgJQAHgDAHgKQAHgIABgHIgDgeIgNhgIAwgVIAYCtIgtAUIgEgfQgJAmglAQQgNAGgIAAIgHgBgAvlEtIAtgUIAGAnIgtAUgAnHBpIg4AZIgGghICehGIAFAhIg5AbIAeC+IgtAUgAksDnQgPgDgPgPQgNgOgGgcQgFgqAQghQARgiAhgOQAdgOAYAPQAXANAKAzIhhAsIAAAHQACASALAGQAIAFANgFQARgIAFgTIApgSQgIA6gyAWQgUAIgPAAIgFAAgAkaBQQgYALABAkIA3gYQgGgZgPAAQgFAAgGACgAiSCUQgXgOgHgoQgFgnAPgjQARghAigPQAegNAUAKQAPAJAKASIgrATQgLgUgRAHQgOAGgFASQgEASADAZQADAOAGAOQAEAOAEACQAKAGAKgEQATgIACgXIApgTQABAXgNAUQgPAagfAOQgQAHgOAAQgOAAgMgHgAgYiEIApgTIANBYQAHggAogRQAOgHAOADQANABAFALQAIAMADAUIARBwIgtAUIgVh+QgDgGgEgBQgFgDgIADQgOAGgJANQgGAJABAUIABANIAQBfIgrATgADjjqIBPgiQAmgQAYANQATAJAJAXQALAqgdAgIghAWIgwAXIAMBYIguAUgAE8juIglAQIAKBDIAlgRQARgHAGgPQAHgNgFgKQgJgTgOgCgAHeh0QgNgHgGgfIgOhXIgYAKIgEgfIAagMIgGgrIApgSIAHArIAggOIAGAeIgiAPIAOBQIABAOQACAJADADQAEADASgHIAHgFIAEAdIgWANQgTAJgMAAQgGAAgFgDgAJVinQgRgDgOgPQgNgPgFgbQgGgrAQggQARgiAggPQAegMAYANQAYAOAIAzIhhArIABAJQADARALAFQAIAGAOgGQASgHADgUIApgTQgKA8gvAWQgUAIgNAAIgIAAgAJnk+QgaALADAkIA1gYQgGgagOAAQgFAAgFADgALYkRIAugVIAIA1IguAVgANMoDIAxgWIAfDCIBYgnIADAlIiFA7gAQblzQgOgHgGggIgOhXIgYALIgEgfIAbgLIgHgtIAqgSIAGArIAhgOIAGAfIgiAOIANBQIACAOQABAJAEADQAEADAQgHIAIgEIAFAcIgXAOQgSAIgMAAQgGAAgFgCgAR7mrQgKgIgGgQQgFgOgDgTQgIgrALgfIACgEQAKgaAagMQANgGAPAAQAQAAAJAGIgOhRIArgTIAlDsIgoARIgFgcQgEAQgPARQgPAOgOAGQgKAFgKAAQgNAAgKgKgASio8QgKAEgFALQgIASAGAjQAKA1AYgLQARgHAFgMQAHgOgEgQIgEgfIgCgKQgGgTgJgEQgDgBgDAAQgGAAgJAEgAUhoWIAvgVIAIA1IgvAVg");
	this.shape_2.setTransform(212,-128.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#135E8A").s().p("A1ZM+QAqgUAHg1QADgYgEgzIgBgGQgHhVghjoIBLghQgOAHALBCQAUBtAMC1IACAYQAIBjgsAwQgWAXgXAEgAvSKeQAigMAngSQA3gYgBghIABgDIksCFIAAgNQgBhXgEhNIg2AZIgKg3IA9gaQgJhSgIhBIgEgaIFSiWIAaCqIAhgQIAJgRIALBEIgtAUQAFAfAJBRIAcgMIAKgWIAMBIIgvAVQAAA3gOAaQgSAkh0A0IgHACgAxIH+QAEAwABBGIDthqIgNhxgAxYFRIABACQAIA0AFA9IDghkIgPhygAwHINIAbgwQAzAOAbAOIgcA3QgbgTgygQgAneGwQAfgKAbgLQASgGAQgIQAcgNgDgPIgYiGIkNB3IgLhAIENh5IgShfIilBKIgMg+IFmieIAPgaIANBPIiPBAIAQBgIDrhpIANggIAQBYIj7BxIAZCQQAHAlgPAXQgEAIgHAGQgQAPgcAMIhgAqgAwjFlIAbgwQArAJAqATIgeA2QgdgRg1gRgAz4FaIAOgVQAegzAPgnQAQgvALhDIA5gBIgKA1IEkiDIAIgUIAPBMIlQCWIgCACQgKAjgYAuIgXAogA1REuQgVgIgJgWQgJgUAHgWQAJgUAUgJQAVgKAVAIQAWAJAJAUQAJAVgIAWQgIAVgVAJQgMAFgLAAQgJAAgKgEgACHhbIgFAbQgWBngoBWIgkg9QAhhDAWhIQALglAJgnIAHgeIhrAwIgIg8IBtgxIgRhfIhWAzIgTg3QArgYAogZQBCgqA1gtIAfAxQgeAageAWIgOAJIATBpIBVgnIAGgNIAMBFIhdApIADASIAcARIAeAWIA5ApIgYBDIhPhMIA4E2Ig4AZgArBgMIDKhZQAOAPAVAHQAUAEAVgKQATgJALgSIAGgMQADgOgBgNIAAgBIDyhtIAgC3IhBAdIgVh2ImsC+IAVB2IhBAcgAIEiDIjOB/IgSg5IDViFIhImUIA6gaIBFGLIApgaIAJgWIAUBKIg6AkIAkDGIg6AbgAL6h2QAZgFAZgLQAQgHAEgKQADgGgBgGIgaiRQgiAigkAcIgVhIIAFgDQAlgZAlggIgfikIhPAjIgLg9IBQgjIgXiBIA9gbIAWCCIAygXIASgaIAOBOIhGAfIAYCGQAjgmAZgjIANBJQgeAngfAhIAiC6QACAOAAAMQAAAUgJANQgEAJgHAGQgOAOgYAMIg0AWgAnZhdQgXgIgJgVQgEgIAAgHQgBgHABgHQABgHADgHQAIgUAVgJQAVgKAUAIQAWAJAIAUQADAIACAIQACAMgEANIgBACQgIAUgUAKQgMAFgLAAQgKAAgJgEgAOoi1QBDg5AugxQAbgdAUgaQhFgpg0hHIAtg2QA0BKA/AhIAEgHQAlg+Aah+Ij8BxIgLg/IB8g3IgQhdIh9A4IgLhCIB8g3IgShkIA/gcIARBkIB8g2IAQgjIAQBaIiQBBIARBbICCg6IAKA4QgTCFguBYIgPAgQAdAKA5ADQA1AFAwgDIAKgIQALgGAEgFIgfBcQg7gBg/gGQhEgGgfgNIgcAkQgxA7hIBHIgZAXgAFljHQgVgGgJgWQgJgUAIgVQAHgWAVgKQAVgJAWAJQAWAHAJAVQAJAVgJAVQgIAWgUAJQgLAFgLAAQgLAAgKgFgAFSl2QgWgIgJgVQgJgVAHgVQAJgWAVgJQAVgKAVAKQAVAGAJAWQAKAUgIAWQgIAVgVAKQgMAFgLAAQgKAAgJgEg");
	this.shape_3.setTransform(198.4,-178.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.instance_1},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-414.3,-267.3,828.7,534.8);


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
	this.instance = new lib.元件7();
	this.instance.parent = this;
	this.instance.setTransform(435.7,183.8,1,1,0,0,0,101.7,101.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B72A9").s().p("A3nN7QgDgCgBgDIg1kAQgBgDACgDQABgDADgBIA1gbQACgCADAAIAFADIACAFIAWBdIA4gcIgXhhQAAgEACgCIADgEIA2gbQADgCADABQACAAACACIADAEIA2EDQAAADgBADQgCADgDABIg1AaIgFABQgDAAgBgCIgDgFIgXhqIg4AcIAYBwQABADgCACIgEAEIgxAZIgDAAIgFABQgEAAgCgCgA0EL7QgXgHgFggQgFgXAHgTIAAgBQAGgWARgUIABAAQADgDAugcIAWgNIgBgGQgDgKgHgFIgBAAQgEgDgIAEIABAAQgSAJACAXIAAAFIgEAEIgwAYIgGAAQgDAAgCgDQgCgCAAgDIAAgNQABgkAPgSIAAgBQAPgTAogUQAMgIAXgFIABAAIAMAAQAKAAAJAEIABAAQANAGAHAKQAFAHAHAfIAQBbQAEAYAFAIIAAAEIAAAFIgEADIgzAaIgFAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIgBgBIgGAGQgGAIgaANQgWAMgRAAQgKAAgJgFgAzdK2QACAFADAEQAEAAAGgCIAAABQAQgJAEgHQAHgWgBgKIAAgBIgBgIQgrAYADAZgAxDKmIgDgEIgojEQAAgDABgDIAEgDIAygZQACgCADABQABAAABAAQAAAAABAAQAAAAABABQAAAAABABQACACABACIAoDDQABACgCADIgEAFIgyAZIgFABQgDAAgCgCgAuxJeQgCgCgBgCIgXhkIhlh1IgCgFIABgFQAAAAAAgBQABgBAAAAQAAAAABgBQABAAAAAAIAygbQADgBADABQADAAACACIA9BJIAeh5QAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBIADgCIAygaQADgCADABQAEABACADQABADAAAEIgwDDIASBlQABADgCADQgBACgDACIgyAZIgFABIgFgDgAsTINQgSgCgJgRIAAgBIAAABQgIgNgGgcIAAgBIgXiBQgBgDABgCQACgDACgBIAxgZIAGgBQAAAAABAAQAAABABAAQABAAAAAAQABABAAAAIADAFIAZCKIAAgBQABAIAFACQAFACAIgEIABAAQAFgEAGgJIABAAIAGgMIgFgiIgUhvQgBgCACgDQABgDADgBIA2gbIAGgBQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQADACAAADIAlDIQABACgCADQgBADgDABIg0AZQgCACgDgBQgDAAgBgCIgDgFIAAgCQgKAQgQAMIAAgBQgIAGgJAFIABAAQgTAKgMAAIgHgBgAxyHHIgCgEIgJguQgBgDACgDQABgCACgCIA0gZQACgBADAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQACACABADIAJAtQAAADgBACQgBADgDACIg0AZIgFABIgFgCgAnjF1IgCgEIgrjSIg1AbIgGAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQgCgCgBgCIgIgmQgBgDACgDQABgCADgBICzhbQACgBADABQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQACABABADIAHAmQABABAAAAQAAABAAABQAAAAAAABQAAABgBAAIgEAEIg7AgIAsDUQABADgCADQgBACgDACIgyAZIgFACIgFgDgAlPElIgBAAQgVgEgUgTIAAAAQgSgRgHgiIgBgBQgFgbADgYQACgWAJgTIAAgBQATgsAngSIAAAAQAngUAgARQAfAPAPBAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQgCADgDABIhpA2IAAACQADAQAJAFQAHADAKgFIAAABQAPgJADgRQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBIADgCIAvgYQADgCAEABQADABABACQACADAAADQgHBJg9AfQgbANgWAAIgBAAgAlRCVIArgWQgEgJgGgEQgFgDgIAEIgBAAQgSAKgBAYgAilC6QgOgIgKgPQgMgRgGgbIAAAAQgIgwARgsQASgpAqgWQAkgSAcAMIABAAQAVAKAOAYIABAEQAAADgBABIgEADIgxAZQgDABgEAAQgDgCgBgCQgKgQgMAGIAAAAQgMAGgEARIAAgBQgEAUAFAbQAEAQAHAOIAAABQAFALADADIAAAAQAHAEAIgDQAPgJACgVIACgFQAAgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAIAvgYQADgCADABIAFACQABACAAAEQACAdgPAaIAAgBQgHAPgMANQgCACgCABIgDADQgMAKgRAKQgVALgTAAQgSAAgPgJgAANB7IgDgEIg1kPQgBgDACgCQABgDACgBIAvgYQACgCADAAQADAAACADIADAEIAOBIQAOgVAfgPIAAAAQASgKASADQAUABAKARQAKAOAFAZIAZCBQABADgBADQgBADgDABIg0AZQgCABgDAAQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAgBAAAAIgDgFIgfiQIgBgCIgCgBQgDgBgFACQgOAHgIANQgFAJACATIACAOIAYBuQAAADgBADQgBACgDACIgxAZIgFAAIgFgCgAEsgXQgCgCgBgDIg2j/QgBgEABgCIAEgEIBagsIAAgBQAvgXAhAQQAaALAMAeIAAAAQAKAigKAdQgGARgMAPIgCACIgjAcIgBAAIgzAaIASBfQABADgCACQAAADgDACIg1AaIgFABIgEgCgAFkkfIghARIALA7IAggQIAAAAQANgHAGgLIACgEIABgBQAEgLgEgIIAAgBQgIgQgMgCgAIiiaIAAgBQgTgIgKgpIAAAAIgThZIgRAIIgGABIgEgDIgDgFIgGgjQgBgDABgCQACgDADgBIAXgNIgIgrQgBgDACgDQABgCADgBIAugYQADgBADAAQACAAACADIADAEIAIAnIAagNQACgCADAAIAFACIADAFIAJAiIgBAGQgBADgDACIggAQIARBWIAAgBQACAFABAMIADAHQADAAANgGIAHgFQACgCADAAQADAAACACQADACAAADIAIAiQABACgCADQgBADgCABIgZAQIgBAAQgZAOgRAAQgIAAgGgDgAKsjcQgYgDgTgSIgFgGQgNgSgHgdIgBAAQgJg0ASgoQATgrAngVIAAgBQAggOAcAIQAFACAFADIABgBQAgAQANBAQABACgCAEQgBACgDACIhoA0IABAEQADAPAJAEIABABQAHADALgGQANgGAEgOIAAgFIACgFQAAAAAAAAQABgBAAAAQAAAAABAAQABgBAAAAIAvgYQADgCADACQADAAACACQACADAAAEQgHA2ggAfQgDACgDAAIgBAAIAAADIgDADIgSAMIgBAAQgbAMgSAAIgGAAgAKplqIAqgWQgEgLgFgEQgFgDgIAFIAAAAQgTAKgBAZgANEkkIgCgFIgMg8QgBgDACgDQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABgBIA1gbQACgCADAAQADAAABADQADACAAACIALA+QABADgCADQAAAAAAABQgBABAAAAQAAAAgBABQgBAAAAAAIg1AbIgFABQgDgBgCgCgAPrl4QgDgCAAgCIg4kIQgCgEACgCQABgCADgBIA4gdQACgCADABQACAAADACQABABAAAAQAAAAAAABQABAAAAABQAAABAAAAIAtDWIBaguQACgBAEABIAEACQABABAAAAQAAABAAAAQAAABABABQAAAAAAABIAFArQAAADgBACIgEAEIiXBMIgFABQgCgBgCgCgAStnjQgVgIgJgpIgBAAIgShaIgRAJQgDABgDgBQgCAAgDgCIgCgFIgHgkQAAgDACgCQABgDADgBIAZgLIgKgtQAAgDABgCQAAgBABAAQAAgBABAAQAAgBAAAAQABAAABgBIAugYQADgBADABQADgBACACQACACAAADIAIAnIAbgNQACgCAEABQACAAACACIADAEIAIAkQAAADgBADQgBACgDACIgfAPIASBWIAAgBQABAFABAMIADAIIAPgGIgBAAIAJgGQACgBADAAIAGADQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAIAGAhQABADgBADIgDADIgZASIgBAAQgZAMgQAAQgIAAgGgDgAUYopIgBgBQgOgKgIgUQgIgSgFgWQgLg0AMgmIACgGQAMgiAggRIAAAAQARgIATgBIASAAIgShMQgBgEACgCIAEgEIAwgZQADgBADAAQAAAAABAAQABABAAAAQABAAAAAAQABAAAAABQADACAAADIA4EQQABACgCADQgBACgDACIgtAXIgFABQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQgDgCgBgCIAAgGIgLAQIgBAAQgSATgRAIQgQAIgNAAQgRAAgNgLgAVKpnQAGAHAIgEQAQgIAFgLQAFgOgEgQIAAAAIgHgkIgDgLQgFgQgHgDIgBgBQgHgCgKAHIAAAAQgJAEgDAJIAAAAQgIATAIAmIAAAAQAGAbAKALgAXepzIgDgEIgMg9QgBgEACgCQABgCADgBIA1gcQACgBADAAQADAAACACIACAFIAMA+QABACgCADQgBADgDABIg1AaIgFABQgDAAgBgCg");
	this.shape.setTransform(706.3,116.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#135E8A").s().p("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AAAQABgBABAAIDlhyIABgBIgIgNIAAAAQgGgIgBgLQgCgJACgLIgBABQACgJADgJQAJgaAbgPQAbgNAbAIIAAAAQAfALALAaIAAAAIAGAOIACgBIETiLQACgCADAAQACAAADACQACADAAACIAvDTQABACgCADIgEAEIhJAlQgCABgDgBIgFgBQgCgDgBgCIgch9InXDtIAeCBQABADgCADQAAADgDABIhLAlIgDABIgCAAgAKEAmQgCAAgDgCQgCgCgBgCIgujOIjeCZQgCABgDAAIgFgBQgDgCAAgDIgYhBIgBgGQACgDACgCIDsijIhqnKQAAgEABgDQAAAAABgBQAAAAAAgBQABAAAAAAQABgBABAAIBCgiQADgBACABQADAAADABIACAGIBjG5IAggYIAJgXQABgDACgCQACgBADAAQADgBADADQAAAAAAABQABAAAAABQAAAAABABQAAAAAAABIAdBUIgBAHQgBACgCABIg8ArIAzDgIAAAFIgEADIhDAjIgDAAIgCAAgAOPhsIgDgDIgihIQgBgCABgEQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABgBQAAAAAAAAQABgBAAAAQABAAABAAIAdgJIAagMIAAAAQAOgHAFgKIAAABQABgEgBgEIgjiXIgKALIAAAAQgcAcgcAZQgDACgDAAQgDABgCgCQgDgCgBgDIgchTQgBgDABgCQABgDACgCIAGgDQAlgcAlgiIgBAAIAFgFIgpitIhRAqIgEAAQgBAAgBAAQAAAAgBgBQgBAAAAAAQgBgBAAAAIgDgFIgQhGQgBgDACgCQABgDADgBIBUgrIggiNQAAgDABgDIAEgEIBFgiQACgCADABQACgBADADIACAEIAfCKIAsgXIATgdQACgDAEgBQADgBAEADQACABABAEIAUBZQABADgCADIgEADIhJAmIAeCCQAfgnAXgiQACgDADgBQAEgBACADQAEABAAAEIAUBVIAAADIgCACQgfAtghAoIAxDRQADARABAOIAAABQAAAbgKARQgFAKgIAJIABAAQgRASgdAQIAAAAIg8AdIgFACIgEgDgARjjJIgEgDIgtg8QgDgDABgEQAAgDADgBQBKhHAyg7QAZgdAUgcQhOgsg+hOQgCgCAAgDQAAgDACgCIAkgwIg4AdIgFABIgFgDQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAIgQhKIABgFQABgDADgCICGhDIgThZIiEBCIgGABIgEgDQgCgBgBgCIgQhMQgBgDACgCIAEgFICGhDIgZhsQgBgEACgDIADgDIBIgkIAFgBQACAAADADQACABABADIAXBoIB/hAIAQgmQABgDACgCQACgCADABIAGACIACAFIAYBoQABACgCAEQgBADgDABIidBPIAUBZICLhHQACAAADAAQABAAAAAAQABAAAAABQABAAAAAAQABABABAAQACACABADIAOBAIAAACQgPCdgwBqIgMAdQAgAGA4ABIABAAQA7ADA2gGIAKgIIAPgLQACgDADgBQADAAACACQADABABACQABADgBADIgfBtQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAIgFACQhFADhKgEQhKgDgmgLIgbAmQg2BHhQBWIgbAdQgCACgDABIgCAAIgCAAgASRqQQA6BKBFAiIABAAQAjhGAYiEgAGUj5IABAAQgdgIgNgbIAAAAQgOgbAJgdQAJgdAbgOIABAAQAbgNAcAKIAAAAQAdAJAOAaQAOAcgLAbIAAABQgJAcgaAOIgBAAQgQAIgPAAQgNAAgMgEgAF1nEQgbgKgOgXIgCgDIgBAAQgMgcAIgbIAAgCQABgEADgDQALgXAXgMQAagOAcALQAdAIANAbQAOAbgIAeIAAAAQgKAbgbAPIAAAAQgRAIgQAAQgLAAgLgEg");
	this.shape_1.setTransform(687.6,59.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("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");
	this.shape_2.setTransform(440.8,346.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1B72A9").s().p("AlrCeIAFAAIgFAEgAFkihIAIAAIgIAGg");
	this.shape_3.setTransform(1020.9,344);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件4, new cjs.Rectangle(0,-50.8,1057.3,618.5), null);


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
(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 放大鏡
	this.instance = new lib.MAGNIFYINGGLASSpsb("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(510.1,746.3,1,1,0,0,0,331.5,188);
	this.instance.alpha = 0;

	this.instance_1 = new lib.元件3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(487,747.3,1,1,0,0,0,282.5,182);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,regX:282.5,regY:182,x:487,y:747.3,alpha:1,mode:"independent"},6).wait(160));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},6).to({x:1384.2,y:357.1,mode:"synched",startPosition:0},43).to({x:632,y:922.2},15).to({x:1539.2,y:534.4},41).wait(52).to({alpha:0.781},0).to({alpha:0},8).wait(1));

	// 圖層 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_6 = new cjs.Graphics().p("EACIA8hQmcmbAApHQAApGGcmcQGbmcJGAAQJHAAGcGcQGcGcgBJGQABJHmcGbQmcGcpHAAQpGAAmbmcg");
	var mask_graphics_7 = new cjs.Graphics().p("EATLBCQQpGgCmameQmZmeADpGQADpHGdmaQGdmZJGACQJHADGaGeQGZGegCJGQgDJHmeGZQmbGXpBAAIgIAAg");
	var mask_graphics_8 = new cjs.Graphics().p("EAUtBBkQpHgGmXmgQmXmfAFpHQAGpGGfmYQGfmYJGAGQJHAFGYGgQGXGggFJGQgGJHmfGXQmaGTo9AAIgPAAg");
	var mask_graphics_9 = new cjs.Graphics().p("EAWOBA3QpGgImWmiQmWmiAJpGQAIpGGimWQGhmWJGAIQJHAJGWGhQGVGigIJGQgIJHmiGVQmZGOo3AAIgYAAg");
	var mask_graphics_10 = new cjs.Graphics().p("EAXwBAKQpHgLmTmkQmUmjALpGQALpHGkmUQGjmTJGALQJHALGUGjQGTGkgLJGQgLJHmjGTQmZGJoyAAIgfAAg");
	var mask_graphics_11 = new cjs.Graphics().p("EAZRA/dQpGgOmSmlQmSmlAOpHQAOpGGmmSQGlmRJGANQJHAOGSGmQGRGlgOJGQgOJHmlGRQmXGFouAAIgngBg");
	var mask_graphics_12 = new cjs.Graphics().p("EAazA+wQpGgQmQmoQmQmnARpGQAQpGGomQQGnmQJGARQJGARGQGnQGQGngRJHQgQJGmnGPQmXGAopAAIgugBg");
	var mask_graphics_13 = new cjs.Graphics().p("EAcUA+EQpGgUmNmpQmOmpATpGQAUpGGpmOQGpmOJGAUQJGATGOGpQGOGqgUJGQgTJGmpGNQmWF7okABIg2gBg");
	var mask_graphics_14 = new cjs.Graphics().p("EAd2A9XQpGgXmMmrQmLmrAWpGQAWpGGrmMQGrmLJGAWQJGAXGMGqQGLGsgWJGQgWJGmrGLQmUF3ogAAIg9gBg");
	var mask_graphics_15 = new cjs.Graphics().p("EAfXA8qQpFgZmKmtQmKmtAZpGQAZpGGumKQGsmJJGAZQJGAZGKGtQGJGtgZJGQgZJGmtGJQmTFyobAAIhFgBg");
	var mask_graphics_16 = new cjs.Graphics().p("EAg5A79QpGgcmHmvQmImvAcpFQAcpGGvmIQGumHJGAcQJGAbGIGvQGHGvgcJGQgcJGmuGHQmTFuoWAAQgmAAgmgCg");
	var mask_graphics_17 = new cjs.Graphics().p("EAiaA7QQpFgfmFmxQmGmwAfpGQAepFGxmGQGwmFJGAeQJGAfGFGwQGGGxgfJGQgfJFmwGGQmSFpoRAAQgpAAgrgCg");
	var mask_graphics_18 = new cjs.Graphics().p("EAj8A6jQpFgimEmyQmDmzAhpFQAipFGymEQGzmDJFAhQJFAhGEGzQGDGzghJFQgiJFmyGDQmQFloNAAQgtAAgugCg");
	var mask_graphics_19 = new cjs.Graphics().p("EAleA52QpGgkmBm1QmBm0AkpFQAkpGG1mBQG0mBJFAkQJFAkGCG0QGBG1gkJFQglJFm0GBQmPFhoIAAQgxAAgxgDg");
	var mask_graphics_20 = new cjs.Graphics().p("EAm/A5JQpFgnl/m3Ql/m2AnpFQAmpFG3l/QG2l/JFAnQJFAnF/G2QF/G2gnJFQgnJFm1F/QmPFcoDAAQg0AAg2gDg");
	var mask_graphics_21 = new cjs.Graphics().p("EAohA4bQpFgpl9m5Ql9m3AppFQAqpFG4l9QG4l9JFAqQJFApF9G4QF9G4gqJFQgqJFm3F9QmNFXn/ABQg4AAg5gFg");
	var mask_graphics_22 = new cjs.Graphics().p("EAqCA3uQpEgsl7m6Ql7m6AspEQAspFG7l7QG5l7JFAsQJEAtF8G5QF6G7gsJEQgtJFm5F6QmMFUn7AAQg7AAg9gFg");
	var mask_graphics_23 = new cjs.Graphics().p("EArkA3BQpFgvl4m8Ql5m7AvpFQAvpEG8l5QG7l5JFAvQJEAwF5G7QF5G8gwJEQgvJFm7F4QmLFPn2AAQg/AAhAgFg");
	var mask_graphics_24 = new cjs.Graphics().p("EAtFA2UQpEgyl2m+Ql3m9AypEQAypEG9l3QG9l3JFAyQJEAyF3G9QF2G+gyJEQgyJEm9F3QmJFLnyAAQhDAAhEgGg");
	var mask_graphics_25 = new cjs.Graphics().p("EAunA1mQpEg0l0nAQl1m/A0pDQA1pEHAl1QG/l0JDA0QJEA1F1G/QF0G/g0JEQg1JEm/F0QmIFHnuAAQhFAAhIgHg");
	var mask_graphics_26 = new cjs.Graphics().p("EAwIA05QpDg3lynBQlznBA3pEQA4pDHBlzQHBlyJDA3QJEA4FzHBQFyHBg4JDQg3JEnBFyQmHFCnpAAQhJAAhMgHg");
	var mask_graphics_27 = new cjs.Graphics().p("EAxqA0MQpDg6lwnDQlxnDA6pDQA7pDHDlxQHClwJDA6QJEA7FwHCQFwHDg6JDQg6JEnDFwQmFE+nlAAQhNAAhPgIg");
	var mask_graphics_28 = new cjs.Graphics().p("EAzLAzeQpDg9ltnEQlvnEA9pDQA9pDHFlvQHEluJDA9QJDA9FvHFQFtHEg9JDQg9JDnEFuQmEE6nhAAQhQAAhTgJg");
	var mask_graphics_29 = new cjs.Graphics().p("EA0tAyxQpDhAlrnGQltnGBApDQBApCHGltQHGlrJDA/QJDBAFsHGQFsHHhAJCQhAJDnGFsQmDE2ncAAQhUAAhWgKg");
	var mask_graphics_30 = new cjs.Graphics().p("EA2PAyEQpDhDlpnIQlqnIBCpCQBDpCHIlqQHIlqJCBDQJCBCFqHIQFqHIhDJCQhCJDnIFpQmBEynZAAQhXAAhZgKg");
	var mask_graphics_31 = new cjs.Graphics().p("EA3wAxWQpChFlnnKQlonJBFpCQBGpCHJloQHKloJCBGQJCBFFoHJQFnHKhFJCQhGJCnJFoQmAEtnUAAQhbAAhdgLg");
	var mask_graphics_32 = new cjs.Graphics().p("EA5SAwpQpChIllnMQlmnLBIpCQBIpBHMlmQHLllJCBIQJBBIFmHLQFlHMhIJBQhIJCnLFlQl/EqnQAAQhdAAhhgMg");
	var mask_graphics_33 = new cjs.Graphics().p("EA6zAv7QpBhLljnNQljnNBKpBQBLpBHOlkQHMljJCBLQJBBLFjHNQFjHNhLJBQhLJCnMFjQl9ElnMAAQhhAAhlgNg");
	var mask_graphics_34 = new cjs.Graphics().p("EA8VAvOQpBhOlhnPQlhnOBOpBQBNpBHPlhQHOlhJBBNQJBBOFiHOQFgHPhNJBQhOJBnOFhQl8EinIAAQhkAAhogOg");
	var mask_graphics_35 = new cjs.Graphics().p("EA92AugQpAhQlfnRQlfnQBRpBQBQpAHRlfQHQlfJABRQJBBQFfHQQFeHRhQJAQhQJBnQFeQl7EenEAAQhnAAhsgPg");
	var mask_graphics_36 = new cjs.Graphics().p("EA/YAtyQpAhTlcnSQldnSBTpAQBTpAHSldQHSlcJABTQJABTFdHSQFcHShTJAQhTJAnSFdQl4EZnAAAQhrAAhvgQg");
	var mask_graphics_37 = new cjs.Graphics().p("EBA6AtFQpAhWlanUQlbnTBWpAQBWpAHUlaQHTlaJABVQJABWFaHUQFaHUhWI/QhVJAnUFaQl3EWm8AAQhuAAhygRg");
	var mask_graphics_38 = new cjs.Graphics().p("EBCbAsXQo/hZlYnVQlYnVBYo/QBZpAHWlYQHVlXI/BYQI/BYFYHVQFYHWhYI/QhZJAnVFXQl1ESm5AAQhxAAh2gSg");
	var mask_graphics_39 = new cjs.Graphics().p("EBD9ArpQo/hblWnXQlWnXBco/QBbo/HXlWQHXlUI/BaQI/BcFWHWQFVHXhbI/QhcI/nWFWQl0ENm1AAQh0AAh5gTg");
	var mask_graphics_40 = new cjs.Graphics().p("EBFeAq7Qo+helTnYQlUnZBeo+QBeo+HZlUQHYlSI+BeQI/BdFUHYQFTHZheI+QheI/nYFTQlzEKmwAAQh4AAh9gVg");
	var mask_graphics_41 = new cjs.Graphics().p("EBHAAqOQo+hhlRnaQlRnaBgo+QBho+HblSQHZlQI+BhQI+BgFSHaQFRHahhI+QhhI+naFRQlwEGmtAAQh7AAiAgVg");
	var mask_graphics_42 = new cjs.Graphics().p("EBIiApgQo+hklPncQlPnbBko+QBjo9HclPQHclOI9BkQI+BjFPHbQFPHchkI9QhkI9nbFPQlvEDmpAAQh+AAiDgXg");
	var mask_graphics_43 = new cjs.Graphics().p("EBKDAoyQo9hmlMneQlNndBmo9QBmo9HelNQHdlLI9BmQI9BmFNHdQFMHdhmI9QhmI9ndFMQluD/mlAAQiBAAiHgYg");
	var mask_graphics_44 = new cjs.Graphics().p("EBLlAoEQo9hplKnfQlKnfBpo8QBpo9HflKQHelJI9BpQI8BpFLHdQFKHfhpI9QhpI8nfFLQlrD6miAAQiEAAiKgZg");
	var mask_graphics_45 = new cjs.Graphics().p("EBNGAnWQo7hslIngQlJngBso8QBso8HhlIQHglHI8BrQI8BsFIHfQFIHhhsI8QhsI8ngFIQlqD3mdAAQiIAAiOgbg");
	var mask_graphics_46 = new cjs.Graphics().p("EBOoAmoQo7hulGniQlGniBvo8QBuo7HilFQHilGI7BvQI8BuFGHhQFFHihuI8QhvI7nhFGQloDzmaAAQiLAAiRgcg");
	var mask_graphics_47 = new cjs.Graphics().p("EBQKAl6Qo7hxlDnkQlEnjBxo7QBxo7HklCQHjlEI7ByQI7BxFEHiQFDHkhxI7QhxI7nkFDQlmDwmWAAQiOAAiUgeg");
	var mask_graphics_48 = new cjs.Graphics().p("EBRrAlMQo6h0lBnlQlBnlB0o6QB0o6HllBQHllBI6B0QI6B0FCHkQFBHlh0I7Qh0I6nlFBQllDsmSAAQiRAAiYgfg");
	var mask_graphics_49 = new cjs.Graphics().p("EBTNAkeQo6h3k+nmQlAnnB3o6QB3o5Hnk+QHmk/I6B3QI5B2E/HmQE/Hnh3I5Qh2I6nnE/QliDomPAAQiVAAiaggg");
	var mask_graphics_50 = new cjs.Graphics().p("EBPRAnYQo6h3k+nnQk/nmB2o6QB3o6Hnk+QHmk+I6B2QI6B3E/HlQE+Hnh2I6Qh3I6nmE+QljDpmPAAQiUAAibggg");
	var mask_graphics_51 = new cjs.Graphics().p("EBLVAqRQo5h2k/nnQk/nmB3o6QB2o6Hnk/QHmk+I6B3QI6B2E/HmQE+Hnh2I6Qh3I5nmE/QljDomPABQiUAAibghg");
	var mask_graphics_52 = new cjs.Graphics().p("EBHaAtLQo6h3k/nmQk/nnB3o5QB3o6Hmk/QHnk/I5B3QI6B2E/HnQE/Hnh3I5Qh3I6nmE/QljDomPAAQiUAAiaggg");
	var mask_graphics_53 = new cjs.Graphics().p("EBDeAwFQo6h3k+nnQk/nmB2o6QB3o5Hnk/QHmk/I6B3QI5B2E/HnQE/Hmh3I6Qh2I6nnE+QliDpmPAAQiVAAiaggg");
	var mask_graphics_54 = new cjs.Graphics().p("EA/iAy+Qo6h2k+nnQk/nmB2o6QB3o6Hnk/QHmk+I6B2QI6B3E/HmQE+Hnh2I6Qh3I5nmE/QljDpmPAAQiUAAibghg");
	var mask_graphics_55 = new cjs.Graphics().p("EA7mA14Qo5h2k/nnQk/nnB3o5QB2o6Hnk/QHmk/I6B3QI6B3E/HmQE/Hnh3I5Qh3I6nmE/QljDomPAAQiUAAibggg");
	var mask_graphics_56 = new cjs.Graphics().p("EA3rA4yQo6h3k/nnQk/nmB3o6QB3o5Hmk/QHnk/I5B3QI6B2E/HnQE/Hmh3I6Qh2I6nnE+QljDpmPAAQiUAAiaggg");
	var mask_graphics_57 = new cjs.Graphics().p("EAzvA7sQo6h3k+nnQk/nmB2o6QB3o6Hnk/QHmk+I6B2QI5B3FAHmQE+Hnh3I6Qh2I6nmE+QljDpmPAAQiVAAiaggg");
	var mask_graphics_58 = new cjs.Graphics().p("EAvzA+lQo5h2k/nnQk/nnB3o5QB2o6Hnk/QHmk/I6B3QI6B3E/HmQE+Hnh2I6Qh3I5nmE/QljDomPAAQiUAAibggg");
	var mask_graphics_59 = new cjs.Graphics().p("EAr4BBfQo6h3k/nmQk/nnB3o6QB2o5Hnk/QHnk/I5B3QI6B2E/HnQE/Hnh3I5Qh3I6nmE/QljDomPAAQiUAAiaggg");
	var mask_graphics_60 = new cjs.Graphics().p("EAn8BEZQo6h3k+nnQlAnmB3o6QB3o6Hnk/QHmk+I6B2QI5B3E/HmQE/Hnh3I6Qh2I6nnE+QljDpmOAAQiVAAiaggg");
	var mask_graphics_61 = new cjs.Graphics().p("EAkABHSQo6h2k+nnQk/nmB2o6QB3o6Hnk/QHmk/I6B3QI5B3FAHmQE+Hnh2I6Qh3I5nmE/QljDomPABQiVAAiaghg");
	var mask_graphics_62 = new cjs.Graphics().p("EAgEBKMQo5h3k/nmQk/nnB3o5QB2o6Hnk/QHmk/I6B3QI6B2E/HnQE+Hnh2I5Qh3I6nmE/QljDomPAAQiUAAibggg");
	var mask_graphics_63 = new cjs.Graphics().p("EAcJBNGQo6h3k/nnQk/nmB3o6QB2o5Hnk/QHnk/I5B3QI6B2E/HnQE/Hmh3I6Qh3I6nmE+QljDpmPAAQiUAAiaggg");
	var mask_graphics_64 = new cjs.Graphics().p("EAYNBP/Qo6h2k+nnQlAnmB3o6QB3o6Hnk/QHmk+I6B2QI5B3E/HmQE/Hnh3I6Qh2I5nnE/QliDpmPAAQiVAAiaghg");
	var mask_graphics_65 = new cjs.Graphics().p("EAZ8BPQQo6h2k/nnQk/nmB3o6QB2o6Hnk/QHnk+I5B2QI6B3E/HmQE/Hnh3I6Qh3I5nmE/QljDpmPAAQiUAAiaghg");
	var mask_graphics_66 = new cjs.Graphics().p("EAbqBOhQo5h2k/nnQk/nnB3o5QB2o6Hnk/QHmk/I6B3QI6B3E/HmQE+Hnh2I6Qh3I5nmE/QljDomPAAQiUAAibggg");
	var mask_graphics_67 = new cjs.Graphics().p("EAdZBNyQo6h2k+nnQk/nnB2o5QB3o6Hnk/QHmk/I6B3QI6B3E/HmQE+Hnh2I5Qh3I6nmE/QljDomPAAQiUAAibggg");
	var mask_graphics_68 = new cjs.Graphics().p("EAfIBNDQo6h3k+nmQlAnnB3o5QB3o6Hnk/QHmk/I6B3QI5B3E/HmQE/Hnh3I5Qh2I6nnE/QliDomPAAQiVAAiaggg");
	var mask_graphics_69 = new cjs.Graphics().p("EAg3BMUQo6h3k/nmQk/nnB3o5QB3o6Hmk/QHnk/I5B3QI6B2E/HnQE/Hnh3I5Qh3I6nmE/QljDomPAAQiUAAiaggg");
	var mask_graphics_70 = new cjs.Graphics().p("EAilBLlQo5h3k/nmQk/nnB3o6QB2o5Hnk/QHmk/I6B3QI6B2E/HnQE+Hmh2I6Qh3I6nmE/QljDomPAAQiUAAibggg");
	var mask_graphics_71 = new cjs.Graphics().p("EAkUBK2Qo6h3k+nnQk/nmB2o6QB3o5Hnk/QHmk/I6B3QI6B2E/HnQE+Hmh2I6Qh3I6nmE+QljDpmPAAQiUAAibggg");
	var mask_graphics_72 = new cjs.Graphics().p("EAmDBKHQo6h3k+nnQk/nmB2o6QB3o5Hnk/QHmk/I6B3QI5B2E/HnQE/Hmh3I6Qh2I6nnE+QliDpmPAAQiVAAiaggg");
	var mask_graphics_73 = new cjs.Graphics().p("EAnyBJYQo6h3k/nnQk/nmB3o6QB3o5HmlAQHnk+I5B2QI6B3E/HmQE/Hnh3I6Qh3I6nmE+QljDpmPAAQiUAAiaggg");
	var mask_graphics_74 = new cjs.Graphics().p("EApgBIpQo5h3k/nnQk/nmB3o6QB2o6Hnk/QHmk+I6B2QI6B3E/HmQE/Hnh3I6Qh3I6nmE+QljDpmPAAQiUAAibggg");
	var mask_graphics_75 = new cjs.Graphics().p("EArPBH6Qo6h3k+nnQk/nmB2o6QB3o6Hnk/QHmk+I6B2QI6B3E/HmQE+Hnh2I6Qh3I5nmE/QljDpmPAAQiUAAibggg");
	var mask_graphics_76 = new cjs.Graphics().p("EAs+BHKQo6h2k+nnQk/nmB2o6QB3o6Hnk/QHmk+I6B2QI5B3E/HmQE/Hnh3I6Qh2I5nnE/QliDpmPAAQiVAAiaghg");
	var mask_graphics_77 = new cjs.Graphics().p("EAutBGbQo6h2k/nnQk/nmB3o6QB3o6Hmk/QHnk/I5B3QI6B3E/HmQE/Hnh3I6Qh2I5nnE/QljDomPAAQiUABiaghg");
	var mask_graphics_78 = new cjs.Graphics().p("EAwbBFsQo5h2k/nnQk/nnB3o5QB2o6Hnk/QHmk/I6B3QI6B3E/HmQE/Hnh3I6Qh3I5nmE/QljDomPAAQiUAAibggg");
	var mask_graphics_79 = new cjs.Graphics().p("EAyKBE9Qo6h2k+nnQk/nnB2o5QB3o6Hnk/QHmk/I6B3QI6B3E/HmQE+Hnh2I5Qh3I6nmE/QljDomPAAQiUAAibggg");
	var mask_graphics_80 = new cjs.Graphics().p("EAz5BEOQo6h3k+nmQk/nnB2o5QB3o6Hnk/QHmk/I6B3QI5B3FAHmQE+Hnh3I5Qh2I6nnE/QliDomPAAQiVAAiaggg");
	var mask_graphics_81 = new cjs.Graphics().p("EA1oBDfQo6h3k/nmQk/nnB3o5QB3o6Hmk/QHnk/I5B3QI6B2E/HnQE/Hnh3I5Qh2I6nnE/QljDomPAAQiUAAiaggg");
	var mask_graphics_82 = new cjs.Graphics().p("EA3WBCwQo5h3k/nmQk/nnB3o6QB2o5Hnk/QHmk/I6B3QI6B2E/HnQE/Hmh3I6Qh3I6nmE/QljDomPAAQiUAAibggg");
	var mask_graphics_83 = new cjs.Graphics().p("EA5FBCBQo5h3k/nnQk/nmB2o6QB3o5Hnk/QHmk/I6B3QI6B2E/HnQE+Hmh2I6Qh3I6nmE+QljDpmPAAQiUAAibggg");
	var mask_graphics_84 = new cjs.Graphics().p("EA60BBSQo6h3k+nnQk/nmB2o6QB3o5Hnk/QHmk/I6B3QI5B2FAHnQE+Hmh3I6Qh2I6nmE+QljDpmPAAQiVAAiaggg");
	var mask_graphics_85 = new cjs.Graphics().p("EA8jBAjQo6h3k/nnQk/nmB3o6QB3o6Hmk/QHnk+I5B2QI6B3E/HmQE/Hnh3I6Qh2I6nnE+QljDpmPAAQiUAAiaggg");
	var mask_graphics_86 = new cjs.Graphics().p("EA+RA/0Qo5h3k/nnQk/nmB3o6QB2o6Hnk/QHnk+I5B2QI6B3E/HmQE/Hnh3I6Qh3I6nmE+QljDpmPAAQiUAAibggg");
	var mask_graphics_87 = new cjs.Graphics().p("EBAAA/EQo5h2k/nnQk/nmB2o6QB3o6Hnk/QHmk+I6B2QI6B3E/HmQE+Hnh2I6Qh3I5nmE/QljDpmPAAQiUAAibghg");
	var mask_graphics_88 = new cjs.Graphics().p("EBBvA+VQo6h2k+nnQk/nmB2o6QB3o6Hnk/QHmk+I6B2QI5B3FAHmQE+Hnh3I6Qh2I5nmE/QljDpmPAAQiVAAiaghg");
	var mask_graphics_89 = new cjs.Graphics().p("EBDeA9mQo6h2k/nnQk/nmB3o6QB3o6Hnk/QHmk/I5B3QI6B3E/HmQE/Hnh3I6Qh2I5nnE/QljDomOAAQiVAAiaggg");
	var mask_graphics_90 = new cjs.Graphics().p("EBFMA83Qo5h2k/nnQk/nnB3o5QB2o6Hnk/QHnk/I5B3QI6B3E/HmQE/Hnh3I5Qh3I6nmE/QljDomPAAQiUAAibggg");
	var mask_graphics_91 = new cjs.Graphics().p("EBG7A8IQo5h2k/nnQk/nnB3o5QB2o6Hnk/QHmk/I6B3QI6B3E/HmQE+Hnh2I5Qh3I6nmE/QljDomPAAQiUAAibggg");
	var mask_graphics_92 = new cjs.Graphics().p("EBIqA7ZQo6h3k+nmQk/nnB2o5QB3o6Hnk/QHmk/I6B3QI5B2FAHnQE+Hnh3I5Qh2I6nmE/QljDomPAAQiVAAiaggg");
	var mask_graphics_93 = new cjs.Graphics().p("EBKZA6qQo6h3k+nmQlAnnB3o6QB3o5Hnk/QHmk/I6B3QI5B2E/HnQE/Hnh3I5Qh2I6nnE/QljDomOAAQiVAAiaggg");
	var mask_graphics_94 = new cjs.Graphics().p("EBMIA57Qo6h3k/nnQk/nmB3o6QB2o5Hnk/QHnk/I5B3QI6B2E/HnQE/Hmh3I6Qh3I6nmE+QljDpmPAAQiUAAiaggg");
	var mask_graphics_95 = new cjs.Graphics().p("EBN2A5MQo5h3k/nnQk/nmB3o6QB2o5Hnk/QHmk/I6B3QI6B2E/HnQE+Hmh2I6Qh3I6nmE+QljDpmPAAQiUAAibggg");
	var mask_graphics_96 = new cjs.Graphics().p("EBPlA4dQo6h3k+nnQk/nmB2o6QB3o5Hnk/QHmk/I6B3QI5B2FAHnQE+Hmh2I6Qh3I6nmE+QljDpmPAAQiVAAiaggg");
	var mask_graphics_97 = new cjs.Graphics().p("EBRUA3uQo6h3k+nnQlAnmB3o6QB3o6Hnk/QHmk+I6B2QI5B3E/HmQE/Hnh3I6Qh2I6nnE+QljDpmOAAQiVAAiaggg");
	var mask_graphics_98 = new cjs.Graphics().p("EBTDA2/Qo6h3k/nnQk/nmB3o6QB2o6Hnk/QHnk+I5B2QI6B3E/HmQE/Hnh3I6Qh3I6nmE+QljDpmPAAQiUAAiaggg");
	var mask_graphics_99 = new cjs.Graphics().p("EBUxA2PQo5h2k/nnQk/nmB3o6QB2o6Hnk/QHmk+I6B2QI6B3E/HmQE+Hnh2I6Qh3I5nmE/QljDpmPAAQiUAAibghg");
	var mask_graphics_100 = new cjs.Graphics().p("EBWgA1gQo6h2k+nnQk/nmB2o6QB3o6Hnk/QHmk+I6B2QI5B3FAHmQE+Hnh2I6Qh3I5nmE/QljDpmPAAQiVAAiaghg");
	var mask_graphics_101 = new cjs.Graphics().p("EBYPA0xQo6h2k+nnQlAnmB3o6QB3o6Hnk/QHmk/I6B3QI5B3E/HmQE/Hnh3I6Qh2I5nnE/QljDomOAAQiVAAiaggg");
	var mask_graphics_102 = new cjs.Graphics().p("EBZ+A0CQo6h2k/nnQk/nnB3o5QB2o6Hnk/QHnk/I5B3QI6B3E/HmQE/Hnh3I5Qh3I6nmE/QljDomPAAQiUAAiaggg");
	var mask_graphics_103 = new cjs.Graphics().p("EBbsAzTQo5h3k/nmQk/nnB3o5QB2o6Hnk/QHmk/I6B3QI6B3E/HmQE+Hnh2I5Qh3I6nmE/QljDomPAAQiUAAibggg");
	var mask_graphics_104 = new cjs.Graphics().p("EBdbAykQo6h3k+nmQk/nnB2o5QB3o6Hnk/QHmk/I6B3QI6B2E/HnQE+Hnh2I5Qh3I6nmE/QljDomPAAQiUAAibggg");
	var mask_graphics_105 = new cjs.Graphics().p("EBfKAx1Qo6h3k+nmQlAnnB3o6QB3o5Hnk/QHmk/I6B3QI5B2E/HnQE/Hnh3I5Qh2I6nnE/QliDomPAAQiVAAiaggg");
	var mask_graphics_157 = new cjs.Graphics().p("EBfKAx1Qo5h3k+nmQk/nmB2o5QB3o6Hmk/QHmk+I6B3QI5B2E/HmQE+Hnh2I5Qh3I5nmE/QliDomPAAQiUAAibggg");
	var mask_graphics_158 = new cjs.Graphics().p("EBfKAx1Qo5h3k+nmQk/nmB2o6QB3o5Hmk/QHmk+I6B2QI5B3E/HmQE+Hmh2I6Qh3I5nmE/QliDomPAAQiUAAibggg");
	var mask_graphics_159 = new cjs.Graphics().p("EBfKAx1Qo5h3k/nmQk/nmB3o6QB3o5Hmk/QHmk+I6B2QI5B3E/HmQE+Hmh2I6Qh3I5nmE/QliDomPAAQiUAAibggg");
	var mask_graphics_160 = new cjs.Graphics().p("EBfKAx1Qo5h3k/nmQk/nmB3o6QB2o5Hnk/QHmk/I6B3QI5B2E/HnQE/Hmh3I6Qh3I5nmE/QliDomPAAQiUAAibggg");
	var mask_graphics_161 = new cjs.Graphics().p("EBfKAx1Qo5h3k/nmQk/nmB3o6QB2o5Hnk/QHmk/I6B3QI5B2E/HmQE/Hnh3I6Qh3I5nmE/QliDomPAAQiUAAibggg");
	var mask_graphics_162 = new cjs.Graphics().p("EBfKAx1Qo5h3k/nmQk/nnB3o5QB2o6Hnk/QHmk+I6B2QI5B3E/HmQE/Hnh3I5Qh2I6nnE/QliDomPAAQiVAAiaggg");
	var mask_graphics_163 = new cjs.Graphics().p("EBfKAx1Qo6h3k+nmQk/nnB2o5QB3o6Hnk/QHmk+I6B2QI5B3E/HmQE/Hnh3I5Qh2I6nnE/QliDomPAAQiVAAiaggg");
	var mask_graphics_164 = new cjs.Graphics().p("EBfKAx1Qo6h3k+nmQk/nnB2o5QB3o6Hnk/QHmk/I6B3QI5B3E/HmQE/Hnh3I5Qh2I6nnE/QliDomPAAQiVAAiaggg");
	var mask_graphics_165 = new cjs.Graphics().p("EBfKAx1Qo6h3k+nmQlAnnB3o6QB3o5Hnk/QHmk/I6B3QI5B2E/HnQE/Hnh3I5Qh2I6nnE/QliDomPAAQiVAAiaggg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(6).to({graphics:mask_graphics_6,x:253.6,y:428.5}).wait(1).to({graphics:mask_graphics_7,x:264,y:424}).wait(1).to({graphics:mask_graphics_8,x:274.4,y:419.6}).wait(1).to({graphics:mask_graphics_9,x:284.8,y:415.1}).wait(1).to({graphics:mask_graphics_10,x:295.2,y:410.6}).wait(1).to({graphics:mask_graphics_11,x:305.7,y:406.2}).wait(1).to({graphics:mask_graphics_12,x:316.1,y:401.7}).wait(1).to({graphics:mask_graphics_13,x:326.5,y:397.3}).wait(1).to({graphics:mask_graphics_14,x:336.9,y:392.8}).wait(1).to({graphics:mask_graphics_15,x:347.4,y:388.3}).wait(1).to({graphics:mask_graphics_16,x:357.8,y:383.9}).wait(1).to({graphics:mask_graphics_17,x:368.2,y:379.4}).wait(1).to({graphics:mask_graphics_18,x:378.6,y:374.9}).wait(1).to({graphics:mask_graphics_19,x:389.1,y:370.5}).wait(1).to({graphics:mask_graphics_20,x:399.5,y:366}).wait(1).to({graphics:mask_graphics_21,x:409.9,y:361.6}).wait(1).to({graphics:mask_graphics_22,x:420.3,y:357.1}).wait(1).to({graphics:mask_graphics_23,x:430.8,y:352.6}).wait(1).to({graphics:mask_graphics_24,x:441.2,y:348.2}).wait(1).to({graphics:mask_graphics_25,x:451.6,y:343.7}).wait(1).to({graphics:mask_graphics_26,x:462.1,y:339.2}).wait(1).to({graphics:mask_graphics_27,x:472.5,y:334.8}).wait(1).to({graphics:mask_graphics_28,x:482.9,y:330.3}).wait(1).to({graphics:mask_graphics_29,x:493.3,y:325.9}).wait(1).to({graphics:mask_graphics_30,x:503.8,y:321.4}).wait(1).to({graphics:mask_graphics_31,x:514.2,y:316.9}).wait(1).to({graphics:mask_graphics_32,x:524.6,y:312.5}).wait(1).to({graphics:mask_graphics_33,x:535,y:308}).wait(1).to({graphics:mask_graphics_34,x:545.5,y:303.6}).wait(1).to({graphics:mask_graphics_35,x:555.9,y:299.1}).wait(1).to({graphics:mask_graphics_36,x:566.3,y:294.6}).wait(1).to({graphics:mask_graphics_37,x:576.7,y:290.2}).wait(1).to({graphics:mask_graphics_38,x:587.2,y:285.7}).wait(1).to({graphics:mask_graphics_39,x:597.6,y:281.2}).wait(1).to({graphics:mask_graphics_40,x:608,y:276.8}).wait(1).to({graphics:mask_graphics_41,x:618.5,y:272.3}).wait(1).to({graphics:mask_graphics_42,x:628.9,y:267.9}).wait(1).to({graphics:mask_graphics_43,x:639.3,y:263.4}).wait(1).to({graphics:mask_graphics_44,x:649.7,y:258.9}).wait(1).to({graphics:mask_graphics_45,x:660.2,y:254.5}).wait(1).to({graphics:mask_graphics_46,x:670.6,y:250}).wait(1).to({graphics:mask_graphics_47,x:681,y:245.6}).wait(1).to({graphics:mask_graphics_48,x:691.4,y:241.1}).wait(1).to({graphics:mask_graphics_49,x:701.9,y:236.6}).wait(1).to({graphics:mask_graphics_50,x:676.7,y:255.2}).wait(1).to({graphics:mask_graphics_51,x:651.5,y:273.8}).wait(1).to({graphics:mask_graphics_52,x:626.3,y:292.3}).wait(1).to({graphics:mask_graphics_53,x:601.2,y:310.9}).wait(1).to({graphics:mask_graphics_54,x:576,y:329.5}).wait(1).to({graphics:mask_graphics_55,x:550.8,y:348}).wait(1).to({graphics:mask_graphics_56,x:525.6,y:366.6}).wait(1).to({graphics:mask_graphics_57,x:500.5,y:385.2}).wait(1).to({graphics:mask_graphics_58,x:475.3,y:403.7}).wait(1).to({graphics:mask_graphics_59,x:450.1,y:422.3}).wait(1).to({graphics:mask_graphics_60,x:424.9,y:440.9}).wait(1).to({graphics:mask_graphics_61,x:399.8,y:459.5}).wait(1).to({graphics:mask_graphics_62,x:374.6,y:478}).wait(1).to({graphics:mask_graphics_63,x:349.4,y:496.6}).wait(1).to({graphics:mask_graphics_64,x:324.3,y:515.2}).wait(1).to({graphics:mask_graphics_65,x:335.3,y:510.5}).wait(1).to({graphics:mask_graphics_66,x:346.4,y:505.7}).wait(1).to({graphics:mask_graphics_67,x:357.5,y:501}).wait(1).to({graphics:mask_graphics_68,x:368.6,y:496.3}).wait(1).to({graphics:mask_graphics_69,x:379.6,y:491.6}).wait(1).to({graphics:mask_graphics_70,x:390.7,y:486.9}).wait(1).to({graphics:mask_graphics_71,x:401.8,y:482.2}).wait(1).to({graphics:mask_graphics_72,x:412.9,y:477.5}).wait(1).to({graphics:mask_graphics_73,x:423.9,y:472.8}).wait(1).to({graphics:mask_graphics_74,x:435,y:468.1}).wait(1).to({graphics:mask_graphics_75,x:446.1,y:463.4}).wait(1).to({graphics:mask_graphics_76,x:457.2,y:458.7}).wait(1).to({graphics:mask_graphics_77,x:468.2,y:453.9}).wait(1).to({graphics:mask_graphics_78,x:479.3,y:449.2}).wait(1).to({graphics:mask_graphics_79,x:490.4,y:444.5}).wait(1).to({graphics:mask_graphics_80,x:501.5,y:439.8}).wait(1).to({graphics:mask_graphics_81,x:512.5,y:435.1}).wait(1).to({graphics:mask_graphics_82,x:523.6,y:430.4}).wait(1).to({graphics:mask_graphics_83,x:534.7,y:425.7}).wait(1).to({graphics:mask_graphics_84,x:545.8,y:421}).wait(1).to({graphics:mask_graphics_85,x:556.8,y:416.3}).wait(1).to({graphics:mask_graphics_86,x:567.9,y:411.6}).wait(1).to({graphics:mask_graphics_87,x:579,y:406.9}).wait(1).to({graphics:mask_graphics_88,x:590.1,y:402.2}).wait(1).to({graphics:mask_graphics_89,x:601.1,y:397.4}).wait(1).to({graphics:mask_graphics_90,x:612.2,y:392.7}).wait(1).to({graphics:mask_graphics_91,x:623.3,y:388}).wait(1).to({graphics:mask_graphics_92,x:634.4,y:383.3}).wait(1).to({graphics:mask_graphics_93,x:645.4,y:378.6}).wait(1).to({graphics:mask_graphics_94,x:656.5,y:373.9}).wait(1).to({graphics:mask_graphics_95,x:667.6,y:369.2}).wait(1).to({graphics:mask_graphics_96,x:678.7,y:364.5}).wait(1).to({graphics:mask_graphics_97,x:689.7,y:359.8}).wait(1).to({graphics:mask_graphics_98,x:700.8,y:355.1}).wait(1).to({graphics:mask_graphics_99,x:711.9,y:350.4}).wait(1).to({graphics:mask_graphics_100,x:723,y:345.7}).wait(1).to({graphics:mask_graphics_101,x:734,y:340.9}).wait(1).to({graphics:mask_graphics_102,x:745.1,y:336.2}).wait(1).to({graphics:mask_graphics_103,x:756.2,y:331.5}).wait(1).to({graphics:mask_graphics_104,x:767.3,y:326.8}).wait(1).to({graphics:mask_graphics_105,x:778.4,y:322.1}).wait(52).to({graphics:mask_graphics_157,x:778.3,y:322.1}).wait(1).to({graphics:mask_graphics_158,x:778.3,y:322.1}).wait(1).to({graphics:mask_graphics_159,x:778.3,y:322.1}).wait(1).to({graphics:mask_graphics_160,x:778.3,y:322.1}).wait(1).to({graphics:mask_graphics_161,x:778.3,y:322.1}).wait(1).to({graphics:mask_graphics_162,x:778.3,y:322.1}).wait(1).to({graphics:mask_graphics_163,x:778.3,y:322.1}).wait(1).to({graphics:mask_graphics_164,x:778.3,y:322.1}).wait(1).to({graphics:mask_graphics_165,x:778.4,y:322.1}).wait(1));

	// 文字放大
	this.instance_2 = new lib.元件4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(942.8,573.2,1,1,0,0,0,440.8,283.8);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).wait(151).to({alpha:0},8).wait(1));

	// 圖層 6 複製 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_6 = new cjs.Graphics().p("EACIA8hQmcmbAApHQAApGGcmcQGbmcJGAAQJHAAGcGcQGcGcgBJGQABJHmcGbQmcGcpHAAQpGAAmbmcg");
	var mask_1_graphics_7 = new cjs.Graphics().p("EATLBCQQpGgCmameQmZmeADpGQADpHGdmaQGdmZJGACQJHADGaGeQGZGegCJGQgDJHmeGZQmbGXpBAAIgIAAg");
	var mask_1_graphics_8 = new cjs.Graphics().p("EAUtBBkQpHgGmXmgQmXmfAFpHQAGpGGfmYQGfmYJGAGQJHAFGYGgQGXGggFJGQgGJHmfGXQmaGTo9AAIgPAAg");
	var mask_1_graphics_9 = new cjs.Graphics().p("EAWOBA3QpGgImWmiQmWmiAJpGQAIpGGimWQGhmWJGAIQJHAJGWGhQGVGigIJGQgIJHmiGVQmZGOo3AAIgYAAg");
	var mask_1_graphics_10 = new cjs.Graphics().p("EAXwBAKQpHgLmTmkQmUmjALpGQALpHGkmUQGjmTJGALQJHALGUGjQGTGkgLJGQgLJHmjGTQmZGJoyAAIgfAAg");
	var mask_1_graphics_11 = new cjs.Graphics().p("EAZRA/dQpGgOmSmlQmSmlAOpHQAOpGGmmSQGlmRJGANQJHAOGSGmQGRGlgOJGQgOJHmlGRQmXGFouAAIgngBg");
	var mask_1_graphics_12 = new cjs.Graphics().p("EAazA+wQpGgQmQmoQmQmnARpGQAQpGGomQQGnmQJGARQJGARGQGnQGQGngRJHQgQJGmnGPQmXGAopAAIgugBg");
	var mask_1_graphics_13 = new cjs.Graphics().p("EAcUA+EQpGgUmNmpQmOmpATpGQAUpGGpmOQGpmOJGAUQJGATGOGpQGOGqgUJGQgTJGmpGNQmWF7okABIg2gBg");
	var mask_1_graphics_14 = new cjs.Graphics().p("EAd2A9XQpGgXmMmrQmLmrAWpGQAWpGGrmMQGrmLJGAWQJGAXGMGqQGLGsgWJGQgWJGmrGLQmUF3ogAAIg9gBg");
	var mask_1_graphics_15 = new cjs.Graphics().p("EAfXA8qQpFgZmKmtQmKmtAZpGQAZpGGumKQGsmJJGAZQJGAZGKGtQGJGtgZJGQgZJGmtGJQmTFyobAAIhFgBg");
	var mask_1_graphics_16 = new cjs.Graphics().p("EAg5A79QpGgcmHmvQmImvAcpFQAcpGGvmIQGumHJGAcQJGAbGIGvQGHGvgcJGQgcJGmuGHQmTFuoWAAQgmAAgmgCg");
	var mask_1_graphics_17 = new cjs.Graphics().p("EAiaA7QQpFgfmFmxQmGmwAfpGQAepFGxmGQGwmFJGAeQJGAfGFGwQGGGxgfJGQgfJFmwGGQmSFpoRAAQgpAAgrgCg");
	var mask_1_graphics_18 = new cjs.Graphics().p("EAj8A6jQpFgimEmyQmDmzAhpFQAipFGymEQGzmDJFAhQJFAhGEGzQGDGzghJFQgiJFmyGDQmQFloNAAQgtAAgugCg");
	var mask_1_graphics_19 = new cjs.Graphics().p("EAleA52QpGgkmBm1QmBm0AkpFQAkpGG1mBQG0mBJFAkQJFAkGCG0QGBG1gkJFQglJFm0GBQmPFhoIAAQgxAAgxgDg");
	var mask_1_graphics_20 = new cjs.Graphics().p("EAm/A5JQpFgnl/m3Ql/m2AnpFQAmpFG3l/QG2l/JFAnQJFAnF/G2QF/G2gnJFQgnJFm1F/QmPFcoDAAQg0AAg2gDg");
	var mask_1_graphics_21 = new cjs.Graphics().p("EAohA4bQpFgpl9m5Ql9m3AppFQAqpFG4l9QG4l9JFAqQJFApF9G4QF9G4gqJFQgqJFm3F9QmNFXn/ABQg4AAg5gFg");
	var mask_1_graphics_22 = new cjs.Graphics().p("EAqCA3uQpEgsl7m6Ql7m6AspEQAspFG7l7QG5l7JFAsQJEAtF8G5QF6G7gsJEQgtJFm5F6QmMFUn7AAQg7AAg9gFg");
	var mask_1_graphics_23 = new cjs.Graphics().p("EArkA3BQpFgvl4m8Ql5m7AvpFQAvpEG8l5QG7l5JFAvQJEAwF5G7QF5G8gwJEQgvJFm7F4QmLFPn2AAQg/AAhAgFg");
	var mask_1_graphics_24 = new cjs.Graphics().p("EAtFA2UQpEgyl2m+Ql3m9AypEQAypEG9l3QG9l3JFAyQJEAyF3G9QF2G+gyJEQgyJEm9F3QmJFLnyAAQhDAAhEgGg");
	var mask_1_graphics_25 = new cjs.Graphics().p("EAunA1mQpEg0l0nAQl1m/A0pDQA1pEHAl1QG/l0JDA0QJEA1F1G/QF0G/g0JEQg1JEm/F0QmIFHnuAAQhFAAhIgHg");
	var mask_1_graphics_26 = new cjs.Graphics().p("EAwIA05QpDg3lynBQlznBA3pEQA4pDHBlzQHBlyJDA3QJEA4FzHBQFyHBg4JDQg3JEnBFyQmHFCnpAAQhJAAhMgHg");
	var mask_1_graphics_27 = new cjs.Graphics().p("EAxqA0MQpDg6lwnDQlxnDA6pDQA7pDHDlxQHClwJDA6QJEA7FwHCQFwHDg6JDQg6JEnDFwQmFE+nlAAQhNAAhPgIg");
	var mask_1_graphics_28 = new cjs.Graphics().p("EAzLAzeQpDg9ltnEQlvnEA9pDQA9pDHFlvQHEluJDA9QJDA9FvHFQFtHEg9JDQg9JDnEFuQmEE6nhAAQhQAAhTgJg");
	var mask_1_graphics_29 = new cjs.Graphics().p("EA0tAyxQpDhAlrnGQltnGBApDQBApCHGltQHGlrJDA/QJDBAFsHGQFsHHhAJCQhAJDnGFsQmDE2ncAAQhUAAhWgKg");
	var mask_1_graphics_30 = new cjs.Graphics().p("EA2PAyEQpDhDlpnIQlqnIBCpCQBDpCHIlqQHIlqJCBDQJCBCFqHIQFqHIhDJCQhCJDnIFpQmBEynZAAQhXAAhZgKg");
	var mask_1_graphics_31 = new cjs.Graphics().p("EA3wAxWQpChFlnnKQlonJBFpCQBGpCHJloQHKloJCBGQJCBFFoHJQFnHKhFJCQhGJCnJFoQmAEtnUAAQhbAAhdgLg");
	var mask_1_graphics_32 = new cjs.Graphics().p("EA5SAwpQpChIllnMQlmnLBIpCQBIpBHMlmQHLllJCBIQJBBIFmHLQFlHMhIJBQhIJCnLFlQl/EqnQAAQhdAAhhgMg");
	var mask_1_graphics_33 = new cjs.Graphics().p("EA6zAv7QpBhLljnNQljnNBKpBQBLpBHOlkQHMljJCBLQJBBLFjHNQFjHNhLJBQhLJCnMFjQl9ElnMAAQhhAAhlgNg");
	var mask_1_graphics_34 = new cjs.Graphics().p("EA8VAvOQpBhOlhnPQlhnOBOpBQBNpBHPlhQHOlhJBBNQJBBOFiHOQFgHPhNJBQhOJBnOFhQl8EinIAAQhkAAhogOg");
	var mask_1_graphics_35 = new cjs.Graphics().p("EA92AugQpAhQlfnRQlfnQBRpBQBQpAHRlfQHQlfJABRQJBBQFfHQQFeHRhQJAQhQJBnQFeQl7EenEAAQhnAAhsgPg");
	var mask_1_graphics_36 = new cjs.Graphics().p("EA/YAtyQpAhTlcnSQldnSBTpAQBTpAHSldQHSlcJABTQJABTFdHSQFcHShTJAQhTJAnSFdQl4EZnAAAQhrAAhvgQg");
	var mask_1_graphics_37 = new cjs.Graphics().p("EBA6AtFQpAhWlanUQlbnTBWpAQBWpAHUlaQHTlaJABVQJABWFaHUQFaHUhWI/QhVJAnUFaQl3EWm8AAQhuAAhygRg");
	var mask_1_graphics_38 = new cjs.Graphics().p("EBCbAsXQo/hZlYnVQlYnVBYo/QBZpAHWlYQHVlXI/BYQI/BYFYHVQFYHWhYI/QhZJAnVFXQl1ESm5AAQhxAAh2gSg");
	var mask_1_graphics_39 = new cjs.Graphics().p("EBD9ArpQo/hblWnXQlWnXBco/QBbo/HXlWQHXlUI/BaQI/BcFWHWQFVHXhbI/QhcI/nWFWQl0ENm1AAQh0AAh5gTg");
	var mask_1_graphics_40 = new cjs.Graphics().p("EBFeAq7Qo+helTnYQlUnZBeo+QBeo+HZlUQHYlSI+BeQI/BdFUHYQFTHZheI+QheI/nYFTQlzEKmwAAQh4AAh9gVg");
	var mask_1_graphics_41 = new cjs.Graphics().p("EBHAAqOQo+hhlRnaQlRnaBgo+QBho+HblSQHZlQI+BhQI+BgFSHaQFRHahhI+QhhI+naFRQlwEGmtAAQh7AAiAgVg");
	var mask_1_graphics_42 = new cjs.Graphics().p("EBIiApgQo+hklPncQlPnbBko+QBjo9HclPQHclOI9BkQI+BjFPHbQFPHchkI9QhkI9nbFPQlvEDmpAAQh+AAiDgXg");
	var mask_1_graphics_43 = new cjs.Graphics().p("EBKDAoyQo9hmlMneQlNndBmo9QBmo9HelNQHdlLI9BmQI9BmFNHdQFMHdhmI9QhmI9ndFMQluD/mlAAQiBAAiHgYg");
	var mask_1_graphics_44 = new cjs.Graphics().p("EBLlAoEQo9hplKnfQlKnfBpo8QBpo9HflKQHelJI9BpQI8BpFLHdQFKHfhpI9QhpI8nfFLQlrD6miAAQiEAAiKgZg");
	var mask_1_graphics_45 = new cjs.Graphics().p("EBNGAnWQo7hslIngQlJngBso8QBso8HhlIQHglHI8BrQI8BsFIHfQFIHhhsI8QhsI8ngFIQlqD3mdAAQiIAAiOgbg");
	var mask_1_graphics_46 = new cjs.Graphics().p("EBOoAmoQo7hulGniQlGniBvo8QBuo7HilFQHilGI7BvQI8BuFGHhQFFHihuI8QhvI7nhFGQloDzmaAAQiLAAiRgcg");
	var mask_1_graphics_47 = new cjs.Graphics().p("EBQKAl6Qo7hxlDnkQlEnjBxo7QBxo7HklCQHjlEI7ByQI7BxFEHiQFDHkhxI7QhxI7nkFDQlmDwmWAAQiOAAiUgeg");
	var mask_1_graphics_48 = new cjs.Graphics().p("EBRrAlMQo6h0lBnlQlBnlB0o6QB0o6HllBQHllBI6B0QI6B0FCHkQFBHlh0I7Qh0I6nlFBQllDsmSAAQiRAAiYgfg");
	var mask_1_graphics_49 = new cjs.Graphics().p("EBTNAkeQo6h3k+nmQlAnnB3o6QB3o5Hnk+QHmk/I6B3QI5B2E/HmQE/Hnh3I5Qh2I6nnE/QliDomPAAQiVAAiaggg");
	var mask_1_graphics_50 = new cjs.Graphics().p("EBPRAnYQo6h3k+nnQk/nmB2o6QB3o6Hnk+QHmk+I6B2QI6B3E/HlQE+Hnh2I6Qh3I6nmE+QljDpmPAAQiUAAibggg");
	var mask_1_graphics_51 = new cjs.Graphics().p("EBLVAqRQo5h2k/nnQk/nmB3o6QB2o6Hnk/QHmk+I6B3QI6B2E/HmQE+Hnh2I6Qh3I5nmE/QljDomPABQiUAAibghg");
	var mask_1_graphics_52 = new cjs.Graphics().p("EBHaAtLQo6h3k/nmQk/nnB3o5QB3o6Hmk/QHnk/I5B3QI6B2E/HnQE/Hnh3I5Qh3I6nmE/QljDomPAAQiUAAiaggg");
	var mask_1_graphics_53 = new cjs.Graphics().p("EBDeAwFQo6h3k+nnQk/nmB2o6QB3o5Hnk/QHmk/I6B3QI5B2E/HnQE/Hmh3I6Qh2I6nnE+QliDpmPAAQiVAAiaggg");
	var mask_1_graphics_54 = new cjs.Graphics().p("EA/iAy+Qo6h2k+nnQk/nmB2o6QB3o6Hnk/QHmk+I6B2QI6B3E/HmQE+Hnh2I6Qh3I5nmE/QljDpmPAAQiUAAibghg");
	var mask_1_graphics_55 = new cjs.Graphics().p("EA7mA14Qo5h2k/nnQk/nnB3o5QB2o6Hnk/QHmk/I6B3QI6B3E/HmQE/Hnh3I5Qh3I6nmE/QljDomPAAQiUAAibggg");
	var mask_1_graphics_56 = new cjs.Graphics().p("EA3rA4yQo6h3k/nnQk/nmB3o6QB3o5Hmk/QHnk/I5B3QI6B2E/HnQE/Hmh3I6Qh2I6nnE+QljDpmPAAQiUAAiaggg");
	var mask_1_graphics_57 = new cjs.Graphics().p("EAzvA7sQo6h3k+nnQk/nmB2o6QB3o6Hnk/QHmk+I6B2QI5B3FAHmQE+Hnh3I6Qh2I6nmE+QljDpmPAAQiVAAiaggg");
	var mask_1_graphics_58 = new cjs.Graphics().p("EAvzA+lQo5h2k/nnQk/nnB3o5QB2o6Hnk/QHmk/I6B3QI6B3E/HmQE+Hnh2I6Qh3I5nmE/QljDomPAAQiUAAibggg");
	var mask_1_graphics_59 = new cjs.Graphics().p("EAr4BBfQo6h3k/nmQk/nnB3o6QB2o5Hnk/QHnk/I5B3QI6B2E/HnQE/Hnh3I5Qh3I6nmE/QljDomPAAQiUAAiaggg");
	var mask_1_graphics_60 = new cjs.Graphics().p("EAn8BEZQo6h3k+nnQlAnmB3o6QB3o6Hnk/QHmk+I6B2QI5B3E/HmQE/Hnh3I6Qh2I6nnE+QljDpmOAAQiVAAiaggg");
	var mask_1_graphics_61 = new cjs.Graphics().p("EAkABHSQo6h2k+nnQk/nmB2o6QB3o6Hnk/QHmk/I6B3QI5B3FAHmQE+Hnh2I6Qh3I5nmE/QljDomPABQiVAAiaghg");
	var mask_1_graphics_62 = new cjs.Graphics().p("EAgEBKMQo5h3k/nmQk/nnB3o5QB2o6Hnk/QHmk/I6B3QI6B2E/HnQE+Hnh2I5Qh3I6nmE/QljDomPAAQiUAAibggg");
	var mask_1_graphics_63 = new cjs.Graphics().p("EAcJBNGQo6h3k/nnQk/nmB3o6QB2o5Hnk/QHnk/I5B3QI6B2E/HnQE/Hmh3I6Qh3I6nmE+QljDpmPAAQiUAAiaggg");
	var mask_1_graphics_64 = new cjs.Graphics().p("EAYNBP/Qo6h2k+nnQlAnmB3o6QB3o6Hnk/QHmk+I6B2QI5B3E/HmQE/Hnh3I6Qh2I5nnE/QliDpmPAAQiVAAiaghg");
	var mask_1_graphics_65 = new cjs.Graphics().p("EAZ8BPQQo6h2k/nnQk/nmB3o6QB2o6Hnk/QHnk+I5B2QI6B3E/HmQE/Hnh3I6Qh3I5nmE/QljDpmPAAQiUAAiaghg");
	var mask_1_graphics_66 = new cjs.Graphics().p("EAbqBOhQo5h2k/nnQk/nnB3o5QB2o6Hnk/QHmk/I6B3QI6B3E/HmQE+Hnh2I6Qh3I5nmE/QljDomPAAQiUAAibggg");
	var mask_1_graphics_67 = new cjs.Graphics().p("EAdZBNyQo6h2k+nnQk/nnB2o5QB3o6Hnk/QHmk/I6B3QI6B3E/HmQE+Hnh2I5Qh3I6nmE/QljDomPAAQiUAAibggg");
	var mask_1_graphics_68 = new cjs.Graphics().p("EAfIBNDQo6h3k+nmQlAnnB3o5QB3o6Hnk/QHmk/I6B3QI5B3E/HmQE/Hnh3I5Qh2I6nnE/QliDomPAAQiVAAiaggg");
	var mask_1_graphics_69 = new cjs.Graphics().p("EAg3BMUQo6h3k/nmQk/nnB3o5QB3o6Hmk/QHnk/I5B3QI6B2E/HnQE/Hnh3I5Qh3I6nmE/QljDomPAAQiUAAiaggg");
	var mask_1_graphics_70 = new cjs.Graphics().p("EAilBLlQo5h3k/nmQk/nnB3o6QB2o5Hnk/QHmk/I6B3QI6B2E/HnQE+Hmh2I6Qh3I6nmE/QljDomPAAQiUAAibggg");
	var mask_1_graphics_71 = new cjs.Graphics().p("EAkUBK2Qo6h3k+nnQk/nmB2o6QB3o5Hnk/QHmk/I6B3QI6B2E/HnQE+Hmh2I6Qh3I6nmE+QljDpmPAAQiUAAibggg");
	var mask_1_graphics_72 = new cjs.Graphics().p("EAmDBKHQo6h3k+nnQk/nmB2o6QB3o5Hnk/QHmk/I6B3QI5B2E/HnQE/Hmh3I6Qh2I6nnE+QliDpmPAAQiVAAiaggg");
	var mask_1_graphics_73 = new cjs.Graphics().p("EAnyBJYQo6h3k/nnQk/nmB3o6QB3o5HmlAQHnk+I5B2QI6B3E/HmQE/Hnh3I6Qh3I6nmE+QljDpmPAAQiUAAiaggg");
	var mask_1_graphics_74 = new cjs.Graphics().p("EApgBIpQo5h3k/nnQk/nmB3o6QB2o6Hnk/QHmk+I6B2QI6B3E/HmQE/Hnh3I6Qh3I6nmE+QljDpmPAAQiUAAibggg");
	var mask_1_graphics_75 = new cjs.Graphics().p("EArPBH6Qo6h3k+nnQk/nmB2o6QB3o6Hnk/QHmk+I6B2QI6B3E/HmQE+Hnh2I6Qh3I5nmE/QljDpmPAAQiUAAibggg");
	var mask_1_graphics_76 = new cjs.Graphics().p("EAs+BHKQo6h2k+nnQk/nmB2o6QB3o6Hnk/QHmk+I6B2QI5B3E/HmQE/Hnh3I6Qh2I5nnE/QliDpmPAAQiVAAiaghg");
	var mask_1_graphics_77 = new cjs.Graphics().p("EAutBGbQo6h2k/nnQk/nmB3o6QB3o6Hmk/QHnk/I5B3QI6B3E/HmQE/Hnh3I6Qh2I5nnE/QljDomPAAQiUABiaghg");
	var mask_1_graphics_78 = new cjs.Graphics().p("EAwbBFsQo5h2k/nnQk/nnB3o5QB2o6Hnk/QHmk/I6B3QI6B3E/HmQE/Hnh3I6Qh3I5nmE/QljDomPAAQiUAAibggg");
	var mask_1_graphics_79 = new cjs.Graphics().p("EAyKBE9Qo6h2k+nnQk/nnB2o5QB3o6Hnk/QHmk/I6B3QI6B3E/HmQE+Hnh2I5Qh3I6nmE/QljDomPAAQiUAAibggg");
	var mask_1_graphics_80 = new cjs.Graphics().p("EAz5BEOQo6h3k+nmQk/nnB2o5QB3o6Hnk/QHmk/I6B3QI5B3FAHmQE+Hnh3I5Qh2I6nnE/QliDomPAAQiVAAiaggg");
	var mask_1_graphics_81 = new cjs.Graphics().p("EA1oBDfQo6h3k/nmQk/nnB3o5QB3o6Hmk/QHnk/I5B3QI6B2E/HnQE/Hnh3I5Qh2I6nnE/QljDomPAAQiUAAiaggg");
	var mask_1_graphics_82 = new cjs.Graphics().p("EA3WBCwQo5h3k/nmQk/nnB3o6QB2o5Hnk/QHmk/I6B3QI6B2E/HnQE/Hmh3I6Qh3I6nmE/QljDomPAAQiUAAibggg");
	var mask_1_graphics_83 = new cjs.Graphics().p("EA5FBCBQo5h3k/nnQk/nmB2o6QB3o5Hnk/QHmk/I6B3QI6B2E/HnQE+Hmh2I6Qh3I6nmE+QljDpmPAAQiUAAibggg");
	var mask_1_graphics_84 = new cjs.Graphics().p("EA60BBSQo6h3k+nnQk/nmB2o6QB3o5Hnk/QHmk/I6B3QI5B2FAHnQE+Hmh3I6Qh2I6nmE+QljDpmPAAQiVAAiaggg");
	var mask_1_graphics_85 = new cjs.Graphics().p("EA8jBAjQo6h3k/nnQk/nmB3o6QB3o6Hmk/QHnk+I5B2QI6B3E/HmQE/Hnh3I6Qh2I6nnE+QljDpmPAAQiUAAiaggg");
	var mask_1_graphics_86 = new cjs.Graphics().p("EA+RA/0Qo5h3k/nnQk/nmB3o6QB2o6Hnk/QHnk+I5B2QI6B3E/HmQE/Hnh3I6Qh3I6nmE+QljDpmPAAQiUAAibggg");
	var mask_1_graphics_87 = new cjs.Graphics().p("EBAAA/EQo5h2k/nnQk/nmB2o6QB3o6Hnk/QHmk+I6B2QI6B3E/HmQE+Hnh2I6Qh3I5nmE/QljDpmPAAQiUAAibghg");
	var mask_1_graphics_88 = new cjs.Graphics().p("EBBvA+VQo6h2k+nnQk/nmB2o6QB3o6Hnk/QHmk+I6B2QI5B3FAHmQE+Hnh3I6Qh2I5nmE/QljDpmPAAQiVAAiaghg");
	var mask_1_graphics_89 = new cjs.Graphics().p("EBDeA9mQo6h2k/nnQk/nmB3o6QB3o6Hnk/QHmk/I5B3QI6B3E/HmQE/Hnh3I6Qh2I5nnE/QljDomOAAQiVAAiaggg");
	var mask_1_graphics_90 = new cjs.Graphics().p("EBFMA83Qo5h2k/nnQk/nnB3o5QB2o6Hnk/QHnk/I5B3QI6B3E/HmQE/Hnh3I5Qh3I6nmE/QljDomPAAQiUAAibggg");
	var mask_1_graphics_91 = new cjs.Graphics().p("EBG7A8IQo5h2k/nnQk/nnB3o5QB2o6Hnk/QHmk/I6B3QI6B3E/HmQE+Hnh2I5Qh3I6nmE/QljDomPAAQiUAAibggg");
	var mask_1_graphics_92 = new cjs.Graphics().p("EBIqA7ZQo6h3k+nmQk/nnB2o5QB3o6Hnk/QHmk/I6B3QI5B2FAHnQE+Hnh3I5Qh2I6nmE/QljDomPAAQiVAAiaggg");
	var mask_1_graphics_93 = new cjs.Graphics().p("EBKZA6qQo6h3k+nmQlAnnB3o6QB3o5Hnk/QHmk/I6B3QI5B2E/HnQE/Hnh3I5Qh2I6nnE/QljDomOAAQiVAAiaggg");
	var mask_1_graphics_94 = new cjs.Graphics().p("EBMIA57Qo6h3k/nnQk/nmB3o6QB2o5Hnk/QHnk/I5B3QI6B2E/HnQE/Hmh3I6Qh3I6nmE+QljDpmPAAQiUAAiaggg");
	var mask_1_graphics_95 = new cjs.Graphics().p("EBN2A5MQo5h3k/nnQk/nmB3o6QB2o5Hnk/QHmk/I6B3QI6B2E/HnQE+Hmh2I6Qh3I6nmE+QljDpmPAAQiUAAibggg");
	var mask_1_graphics_96 = new cjs.Graphics().p("EBPlA4dQo6h3k+nnQk/nmB2o6QB3o5Hnk/QHmk/I6B3QI5B2FAHnQE+Hmh2I6Qh3I6nmE+QljDpmPAAQiVAAiaggg");
	var mask_1_graphics_97 = new cjs.Graphics().p("EBRUA3uQo6h3k+nnQlAnmB3o6QB3o6Hnk/QHmk+I6B2QI5B3E/HmQE/Hnh3I6Qh2I6nnE+QljDpmOAAQiVAAiaggg");
	var mask_1_graphics_98 = new cjs.Graphics().p("EBTDA2/Qo6h3k/nnQk/nmB3o6QB2o6Hnk/QHnk+I5B2QI6B3E/HmQE/Hnh3I6Qh3I6nmE+QljDpmPAAQiUAAiaggg");
	var mask_1_graphics_99 = new cjs.Graphics().p("EBUxA2PQo5h2k/nnQk/nmB3o6QB2o6Hnk/QHmk+I6B2QI6B3E/HmQE+Hnh2I6Qh3I5nmE/QljDpmPAAQiUAAibghg");
	var mask_1_graphics_100 = new cjs.Graphics().p("EBWgA1gQo6h2k+nnQk/nmB2o6QB3o6Hnk/QHmk+I6B2QI5B3FAHmQE+Hnh2I6Qh3I5nmE/QljDpmPAAQiVAAiaghg");
	var mask_1_graphics_101 = new cjs.Graphics().p("EBYPA0xQo6h2k+nnQlAnmB3o6QB3o6Hnk/QHmk/I6B3QI5B3E/HmQE/Hnh3I6Qh2I5nnE/QljDomOAAQiVAAiaggg");
	var mask_1_graphics_102 = new cjs.Graphics().p("EBZ+A0CQo6h2k/nnQk/nnB3o5QB2o6Hnk/QHnk/I5B3QI6B3E/HmQE/Hnh3I5Qh3I6nmE/QljDomPAAQiUAAiaggg");
	var mask_1_graphics_103 = new cjs.Graphics().p("EBbsAzTQo5h3k/nmQk/nnB3o5QB2o6Hnk/QHmk/I6B3QI6B3E/HmQE+Hnh2I5Qh3I6nmE/QljDomPAAQiUAAibggg");
	var mask_1_graphics_104 = new cjs.Graphics().p("EBdbAykQo6h3k+nmQk/nnB2o5QB3o6Hnk/QHmk/I6B3QI6B2E/HnQE+Hnh2I5Qh3I6nmE/QljDomPAAQiUAAibggg");
	var mask_1_graphics_105 = new cjs.Graphics().p("EBfKAx1Qo6h3k+nmQlAnnB3o6QB3o5Hnk/QHmk/I6B3QI5B2E/HnQE/Hnh3I5Qh2I6nnE/QliDomPAAQiVAAiaggg");
	var mask_1_graphics_157 = new cjs.Graphics().p("EBfKAx1Qo5h3k+nmQk/nmB2o5QB3o6Hmk/QHmk+I6B3QI5B2E/HmQE+Hnh2I5Qh3I5nmE/QliDomPAAQiUAAibggg");
	var mask_1_graphics_158 = new cjs.Graphics().p("EBfKAx1Qo5h3k+nmQk/nmB2o6QB3o5Hmk/QHmk+I6B2QI5B3E/HmQE+Hmh2I6Qh3I5nmE/QliDomPAAQiUAAibggg");
	var mask_1_graphics_159 = new cjs.Graphics().p("EBfKAx1Qo5h3k/nmQk/nmB3o6QB3o5Hmk/QHmk+I6B2QI5B3E/HmQE+Hmh2I6Qh3I5nmE/QliDomPAAQiUAAibggg");
	var mask_1_graphics_160 = new cjs.Graphics().p("EBfKAx1Qo5h3k/nmQk/nmB3o6QB2o5Hnk/QHmk/I6B3QI5B2E/HnQE/Hmh3I6Qh3I5nmE/QliDomPAAQiUAAibggg");
	var mask_1_graphics_161 = new cjs.Graphics().p("EBfKAx1Qo5h3k/nmQk/nmB3o6QB2o5Hnk/QHmk/I6B3QI5B2E/HmQE/Hnh3I6Qh3I5nmE/QliDomPAAQiUAAibggg");
	var mask_1_graphics_162 = new cjs.Graphics().p("EBfKAx1Qo5h3k/nmQk/nnB3o5QB2o6Hnk/QHmk+I6B2QI5B3E/HmQE/Hnh3I5Qh2I6nnE/QliDomPAAQiVAAiaggg");
	var mask_1_graphics_163 = new cjs.Graphics().p("EBfKAx1Qo6h3k+nmQk/nnB2o5QB3o6Hnk/QHmk+I6B2QI5B3E/HmQE/Hnh3I5Qh2I6nnE/QliDomPAAQiVAAiaggg");
	var mask_1_graphics_164 = new cjs.Graphics().p("EBfKAx1Qo6h3k+nmQk/nnB2o5QB3o6Hnk/QHmk/I6B3QI5B3E/HmQE/Hnh3I5Qh2I6nnE/QliDomPAAQiVAAiaggg");
	var mask_1_graphics_165 = new cjs.Graphics().p("EBfKAx1Qo6h3k+nmQlAnnB3o6QB3o5Hnk/QHmk/I6B3QI5B2E/HnQE/Hnh3I5Qh2I6nnE/QliDomPAAQiVAAiaggg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(6).to({graphics:mask_1_graphics_6,x:253.6,y:428.5}).wait(1).to({graphics:mask_1_graphics_7,x:264,y:424}).wait(1).to({graphics:mask_1_graphics_8,x:274.4,y:419.6}).wait(1).to({graphics:mask_1_graphics_9,x:284.8,y:415.1}).wait(1).to({graphics:mask_1_graphics_10,x:295.2,y:410.6}).wait(1).to({graphics:mask_1_graphics_11,x:305.7,y:406.2}).wait(1).to({graphics:mask_1_graphics_12,x:316.1,y:401.7}).wait(1).to({graphics:mask_1_graphics_13,x:326.5,y:397.3}).wait(1).to({graphics:mask_1_graphics_14,x:336.9,y:392.8}).wait(1).to({graphics:mask_1_graphics_15,x:347.4,y:388.3}).wait(1).to({graphics:mask_1_graphics_16,x:357.8,y:383.9}).wait(1).to({graphics:mask_1_graphics_17,x:368.2,y:379.4}).wait(1).to({graphics:mask_1_graphics_18,x:378.6,y:374.9}).wait(1).to({graphics:mask_1_graphics_19,x:389.1,y:370.5}).wait(1).to({graphics:mask_1_graphics_20,x:399.5,y:366}).wait(1).to({graphics:mask_1_graphics_21,x:409.9,y:361.6}).wait(1).to({graphics:mask_1_graphics_22,x:420.3,y:357.1}).wait(1).to({graphics:mask_1_graphics_23,x:430.8,y:352.6}).wait(1).to({graphics:mask_1_graphics_24,x:441.2,y:348.2}).wait(1).to({graphics:mask_1_graphics_25,x:451.6,y:343.7}).wait(1).to({graphics:mask_1_graphics_26,x:462.1,y:339.2}).wait(1).to({graphics:mask_1_graphics_27,x:472.5,y:334.8}).wait(1).to({graphics:mask_1_graphics_28,x:482.9,y:330.3}).wait(1).to({graphics:mask_1_graphics_29,x:493.3,y:325.9}).wait(1).to({graphics:mask_1_graphics_30,x:503.8,y:321.4}).wait(1).to({graphics:mask_1_graphics_31,x:514.2,y:316.9}).wait(1).to({graphics:mask_1_graphics_32,x:524.6,y:312.5}).wait(1).to({graphics:mask_1_graphics_33,x:535,y:308}).wait(1).to({graphics:mask_1_graphics_34,x:545.5,y:303.6}).wait(1).to({graphics:mask_1_graphics_35,x:555.9,y:299.1}).wait(1).to({graphics:mask_1_graphics_36,x:566.3,y:294.6}).wait(1).to({graphics:mask_1_graphics_37,x:576.7,y:290.2}).wait(1).to({graphics:mask_1_graphics_38,x:587.2,y:285.7}).wait(1).to({graphics:mask_1_graphics_39,x:597.6,y:281.2}).wait(1).to({graphics:mask_1_graphics_40,x:608,y:276.8}).wait(1).to({graphics:mask_1_graphics_41,x:618.5,y:272.3}).wait(1).to({graphics:mask_1_graphics_42,x:628.9,y:267.9}).wait(1).to({graphics:mask_1_graphics_43,x:639.3,y:263.4}).wait(1).to({graphics:mask_1_graphics_44,x:649.7,y:258.9}).wait(1).to({graphics:mask_1_graphics_45,x:660.2,y:254.5}).wait(1).to({graphics:mask_1_graphics_46,x:670.6,y:250}).wait(1).to({graphics:mask_1_graphics_47,x:681,y:245.6}).wait(1).to({graphics:mask_1_graphics_48,x:691.4,y:241.1}).wait(1).to({graphics:mask_1_graphics_49,x:701.9,y:236.6}).wait(1).to({graphics:mask_1_graphics_50,x:676.7,y:255.2}).wait(1).to({graphics:mask_1_graphics_51,x:651.5,y:273.8}).wait(1).to({graphics:mask_1_graphics_52,x:626.3,y:292.3}).wait(1).to({graphics:mask_1_graphics_53,x:601.2,y:310.9}).wait(1).to({graphics:mask_1_graphics_54,x:576,y:329.5}).wait(1).to({graphics:mask_1_graphics_55,x:550.8,y:348}).wait(1).to({graphics:mask_1_graphics_56,x:525.6,y:366.6}).wait(1).to({graphics:mask_1_graphics_57,x:500.5,y:385.2}).wait(1).to({graphics:mask_1_graphics_58,x:475.3,y:403.7}).wait(1).to({graphics:mask_1_graphics_59,x:450.1,y:422.3}).wait(1).to({graphics:mask_1_graphics_60,x:424.9,y:440.9}).wait(1).to({graphics:mask_1_graphics_61,x:399.8,y:459.5}).wait(1).to({graphics:mask_1_graphics_62,x:374.6,y:478}).wait(1).to({graphics:mask_1_graphics_63,x:349.4,y:496.6}).wait(1).to({graphics:mask_1_graphics_64,x:324.3,y:515.2}).wait(1).to({graphics:mask_1_graphics_65,x:335.3,y:510.5}).wait(1).to({graphics:mask_1_graphics_66,x:346.4,y:505.7}).wait(1).to({graphics:mask_1_graphics_67,x:357.5,y:501}).wait(1).to({graphics:mask_1_graphics_68,x:368.6,y:496.3}).wait(1).to({graphics:mask_1_graphics_69,x:379.6,y:491.6}).wait(1).to({graphics:mask_1_graphics_70,x:390.7,y:486.9}).wait(1).to({graphics:mask_1_graphics_71,x:401.8,y:482.2}).wait(1).to({graphics:mask_1_graphics_72,x:412.9,y:477.5}).wait(1).to({graphics:mask_1_graphics_73,x:423.9,y:472.8}).wait(1).to({graphics:mask_1_graphics_74,x:435,y:468.1}).wait(1).to({graphics:mask_1_graphics_75,x:446.1,y:463.4}).wait(1).to({graphics:mask_1_graphics_76,x:457.2,y:458.7}).wait(1).to({graphics:mask_1_graphics_77,x:468.2,y:453.9}).wait(1).to({graphics:mask_1_graphics_78,x:479.3,y:449.2}).wait(1).to({graphics:mask_1_graphics_79,x:490.4,y:444.5}).wait(1).to({graphics:mask_1_graphics_80,x:501.5,y:439.8}).wait(1).to({graphics:mask_1_graphics_81,x:512.5,y:435.1}).wait(1).to({graphics:mask_1_graphics_82,x:523.6,y:430.4}).wait(1).to({graphics:mask_1_graphics_83,x:534.7,y:425.7}).wait(1).to({graphics:mask_1_graphics_84,x:545.8,y:421}).wait(1).to({graphics:mask_1_graphics_85,x:556.8,y:416.3}).wait(1).to({graphics:mask_1_graphics_86,x:567.9,y:411.6}).wait(1).to({graphics:mask_1_graphics_87,x:579,y:406.9}).wait(1).to({graphics:mask_1_graphics_88,x:590.1,y:402.2}).wait(1).to({graphics:mask_1_graphics_89,x:601.1,y:397.4}).wait(1).to({graphics:mask_1_graphics_90,x:612.2,y:392.7}).wait(1).to({graphics:mask_1_graphics_91,x:623.3,y:388}).wait(1).to({graphics:mask_1_graphics_92,x:634.4,y:383.3}).wait(1).to({graphics:mask_1_graphics_93,x:645.4,y:378.6}).wait(1).to({graphics:mask_1_graphics_94,x:656.5,y:373.9}).wait(1).to({graphics:mask_1_graphics_95,x:667.6,y:369.2}).wait(1).to({graphics:mask_1_graphics_96,x:678.7,y:364.5}).wait(1).to({graphics:mask_1_graphics_97,x:689.7,y:359.8}).wait(1).to({graphics:mask_1_graphics_98,x:700.8,y:355.1}).wait(1).to({graphics:mask_1_graphics_99,x:711.9,y:350.4}).wait(1).to({graphics:mask_1_graphics_100,x:723,y:345.7}).wait(1).to({graphics:mask_1_graphics_101,x:734,y:340.9}).wait(1).to({graphics:mask_1_graphics_102,x:745.1,y:336.2}).wait(1).to({graphics:mask_1_graphics_103,x:756.2,y:331.5}).wait(1).to({graphics:mask_1_graphics_104,x:767.3,y:326.8}).wait(1).to({graphics:mask_1_graphics_105,x:778.4,y:322.1}).wait(52).to({graphics:mask_1_graphics_157,x:778.3,y:322.1}).wait(1).to({graphics:mask_1_graphics_158,x:778.3,y:322.1}).wait(1).to({graphics:mask_1_graphics_159,x:778.3,y:322.1}).wait(1).to({graphics:mask_1_graphics_160,x:778.3,y:322.1}).wait(1).to({graphics:mask_1_graphics_161,x:778.3,y:322.1}).wait(1).to({graphics:mask_1_graphics_162,x:778.3,y:322.1}).wait(1).to({graphics:mask_1_graphics_163,x:778.3,y:322.1}).wait(1).to({graphics:mask_1_graphics_164,x:778.3,y:322.1}).wait(1).to({graphics:mask_1_graphics_165,x:778.4,y:322.1}).wait(1));

	// 白色圈起來的文字
	this.instance_3 = new lib.元件6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(921.7,568.6,1,1,0,0,0,543.6,362.6);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).wait(160));

	// 底層文字
	this.instance_4 = new lib.補間動畫2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(940.9,572);
	this.instance_4.alpha = 0;

	this.instance_5 = new lib.補間動畫3("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(940.9,572);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true,alpha:1},6).wait(160));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:false},6).wait(99).to({startPosition:0},0).wait(52).to({alpha:0.781},0).to({alpha:0},8).wait(1));

	// 備份
	this.instance_6 = new lib.元件1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(2330.5,515.6,1,1,0,0,0,215.6,148.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AkFKaQB1h3A+iBQA/iDgiizIh1A3Qg+AdgsAnIg/gXIEWiDQgdhqgcg9IB6AFIgTAsQALAjAHA0IEDh5IANg5IBqATIgYAuQBaD5gFBLQgGBKhRA9QgWgvilADIgEgVQCDgbAogTQAogTgXhiQgYhjgshzIkQB/QAqDShVCNQhWCNh5BsgAn+EbQCHh/Bdh5QBch4BEiHQiDgwiThbQgGBTgcBeQgcBdg4BkIgSgDQAxh9ATinQATingXh5IB+AKQgiAmgGBIIFOidIAThDIB2AfIgnA0QgOCzhIChQCOAYCggdQCegdBsgzIAJATQhQA9AOA4QhWAYigAGQihAHiDgjQhNCLhuB+QhuB+h7BpgAmDmhIgJAcQCiBOCGAoQA+iVAEijg");
	this.shape.setTransform(-247.7,617.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AluK0QAOi+hOilIksp+IFRifIG9OvQAjBLhLAjIhdAtIguhXIA8gdQATgJgJgTIiHkeIiWBHIANAcQBvDrgdDFgAnUALIBTCyICXhHIhVixgApSkAIBTCyICXhHIhViygAktn+IHjjkIBvDrQAjBMhLAjIiEA+IgzhVIBngxQATgJgJgTIg1hwIknCLICKEkIFRifIAHgWIBpAPQAcAJggAVQA7EOgPCLQCIAtCFgLIgICCQh9ACiUgtQgaB/hKBtIhshGQBPhwAUhqQiahehxi8Ig9AdIEMI3IhdAtgACpidQA+BsCABkQgEhqgfivg");
	this.shape_1.setTransform(-372.2,668.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AjfIxIirlqIF9i0IhJiaIlOCcIgqhYIGsjJICpFoIheAtIgNgcIkeCHIBvDrQAQAhAcgOIJUkZQAzgYgIgqIgShwIBygOIAWCFQARBUhVAoIqtFDQgbANgWAAQgwAAgbg5gAqQBdQCIkDgekoIBpgVQAbALgeAUQAFAxgDBMIJmkiIEGIrQAlBPhQAlIigBMIgzhWICNhBQAOgHgHgOIjQm5IouEHQgtD0hLCGg");
	this.shape_2.setTransform(-494.3,729);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AkzJkQBsirATkLQiHgohOgJQAEBfgZBdIhygWQBBkJhqlaIBwgSQAhAIgaAdIAWBjICzhVIAKgcIBcAaQAVAHgQAZQCjITjjGLgAmZhmIAMB4QBOAJCEAjQgJh/gih6gACCiLQiNhGiBhZIAyhcQBNA3BEAlIiYlFIBagqQAngNgWAnIC+GUQBAAzEyAcIgbB/QizgehfgeIDXHHIhfAsg");
	this.shape_3.setTransform(-622.9,787.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AjWJoQAPgegWguIh4j+IgdAMQg9AegsAnIg/gYIC4hWIhZi7IheArQgNA7gZBQIgTgCQAnj4hMliIB+AKQgbApAAAxQAAAwADA4ICEg+IAZhcIB9A4IkWCDQgDBzgIBPIDThiIAZhRIB0AwIjBBaIBYC8IBagqIAZhRIBuA0IjUBjIB6EDIB2ikIAVAHQhkDKgDBogAgKDEQh5j/hDiCIBdAOICahJQhYi8hbi1ICHgGIgYA6ICGEeICRhFIAOhFIBoAZIgWAzIEFIpQAsBThVBWQgwg/iAAfIgJgSQBJgdAxgXQAygYgig6IhJicIl4CyICLEoIg3BCQg2iBh4kAgAgIAfIBLCfIF4ixIhMiegAhciTIBHCVIF3iwIhHiWgAiQkPQg5g8iBhBIAKgQQCLAOArARQAqASALAXQALAXgGAmQgFAlgJAEIgHACQgSAAgZgjgACOljQAbiWgKidICBAfIgtAnQglBzgtB9g");
	this.shape_4.setTransform(-746,842.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AA3HGIhpjiIkaCFIAfBCIg3BCQhHiihQiqQhPiohHiKIBfAHIEViDQhAiIg6hvICFABIgXAzIBOCkIEeiHIAZhFIBgAiIgaA1QCxF4AxBbIg3BCIgbg4IkjCJIBjDUQAZAzA4gbIFFiYQAngZgQgvQgQgvg7iKIAXgLQA3B1AiAeQAiAeAsAIQAAAugVAeQgUAeg0AYIlvCtQggAQgbAAQg2AAgeg/gAm9B5IBkDUIEaiFIhkjSgAhhgpIBiDSIEkiJIhkjTgAophsIBfDJIEaiEIhfjKgAjOkQIBfDKIEjiJIhfjKg");
	this.shape_5.setTransform(-866.2,901.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AknHeQhRgZgihIQgihHAShfQAShfBpiNQg4gwgdgiQgcgjgRgkQgvhkAxhYQAmhEBJgjQBGghBAAVQA/AVAdA8QAdA/gUBDQgVBDhRBqQCJBhCEBIQAtirgohUQgMgbgcgNQgUgKgaAIIgJgWID2h0IAKAWQgxAcgPAfQgRAdgHB2QgIB2gbBuQBSAlA0AFQA1AFAqgUQAogTASgjQASgkgJgvIAeAFQARBdgeA+QgdA+hAAeQgxAWg9gCQg+gDhZgjQgqBkgtA0QgvA0hDAgQg/Adg4AAQgfAAgcgIgAlICTQgNBCAbA5QAdA/A/AcQA/AcBFggQAlgRAcgfQAagfAlhMQh/hFg1gjQg0gihHg4QgzBKgMBBgAktmlQgzAYgJAwQgKAvARAjQANAcAbAgQAbAeA+A4QA4hFAQg+QAPg9gag2QgUgqgngQQgRgHgSAAQgVAAgWALg");
	this.shape_6.setTransform(-694.3,656.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AluK0QAOi+hOilIksp+IFRifIG9OvQAjBLhLAjIhdAtIguhXIA9gdQASgJgJgTIiHkeIiWBHIANAcQBvDrgcDFgAnUALIBTCyICXhHIhUixgApSkAIBTCyICXhHIhUiygAktn+IHjjkIBvDrQAjBMhLAjIiDA+Ig0hVIBngxQATgJgJgTIg1hwIknCLICKEkIFRifIAHgWIBpAPQAbAJgeAVQA7EOgQCLQCJAtCEgLIgICCQh9ACiUgtQgaB/hKBtIhshGQBPhwAUhqQibhehwi8Ig8AdIELI3IhdAtgACpidQA+BsCABkQgEhqgfivg");
	this.shape_7.setTransform(-814.4,701.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AijFLQhYBchHA5IhUhRQDoiyCejVQhTgRhsgvQghB8htCgIhZg3QCXjWAMjaIBngOQAbAKgeAUIgIAsIE6iUIAKgcIBtAYIgPAdQgkCEhGCDQDIgDE5haIAOByQl5BbjEgdQhWCRh8B0II8kOICrFpIheAsIgOgcImwDMIAOAcIhdAtgAgmFgIBICbIGwjMIhJibgAidh3QBXAnBhALQAphGAhhmgAqPjIIG6jRIgzhsIBngxQA0gNgdAxIAhBGIG5jQIBuDrIheAtIhLigIsiF6IBLCgIheAsg");
	this.shape_8.setTransform(-946.9,758.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_6}]}).wait(166));

	// BG
	this.instance_7 = new lib._1();
	this.instance_7.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(166));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.2,600,3593.2,1200);
// library properties:
lib.properties = {
	width: 1920,
	height: 1200,
	fps: 19,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/main_atlas_.png", id:"main_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;