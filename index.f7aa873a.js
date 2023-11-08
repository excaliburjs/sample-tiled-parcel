function t(t,e,i,s){Object.defineProperty(t,e,{get:i,set:s,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var i,s,r,n,o=globalThis,a={},h={},l=o.parcelRequire2e5f;null==l&&((l=function(t){if(t in a)return a[t].exports;if(t in h){var e=h[t];delete h[t];var i={id:t,exports:{}};return a[t]=i,e.call(i.exports,i,i.exports),i.exports}var s=Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){h[t]=e},o.parcelRequire2e5f=l),(0,l.register)("3MXpL",function(e,i){t(e.exports,"ActionContext",()=>a),t(e.exports,"ActionQueue",()=>h),t(e.exports,"ActionSequence",()=>l),t(e.exports,"ActionsComponent",()=>A),t(e.exports,"ActionsSystem",()=>d),t(e.exports,"ActivateEvent",()=>c),t(e.exports,"Actor",()=>u),t(e.exports,"AddedComponent",()=>g),t(e.exports,"AddedEntity",()=>p),t(e.exports,"AffineMatrix",()=>_),t(e.exports,"Animation",()=>f),t(e.exports,"AnimationDirection",()=>m),t(e.exports,"AnimationEvents",()=>y),t(e.exports,"AnimationStrategy",()=>C),t(e.exports,"ArcadeSolver",()=>x),t(e.exports,"AudioContextFactory",()=>w),t(e.exports,"Axes",()=>I),t(e.exports,"Axis",()=>v),t(e.exports,"BaseAlign",()=>E),t(e.exports,"Blink",()=>B),t(e.exports,"BodyComponent",()=>b),t(e.exports,"BoundingBox",()=>Q),t(e.exports,"BroadphaseStrategy",()=>S),t(e.exports,"BrowserComponent",()=>T),t(e.exports,"BrowserEvents",()=>D),t(e.exports,"Buttons",()=>F),t(e.exports,"Camera",()=>k),t(e.exports,"CameraEvents",()=>P),t(e.exports,"Canvas",()=>R),t(e.exports,"Circle",()=>M),t(e.exports,"CircleCollider",()=>L),t(e.exports,"Clock",()=>N),t(e.exports,"ClosestLine",()=>U),t(e.exports,"ClosestLineJumpTable",()=>G),t(e.exports,"Collider",()=>z),t(e.exports,"ColliderComponent",()=>O),t(e.exports,"CollisionContact",()=>H),t(e.exports,"CollisionEndEvent",()=>q),t(e.exports,"CollisionGroup",()=>V),t(e.exports,"CollisionGroupManager",()=>Y),t(e.exports,"CollisionJumpTable",()=>j),t(e.exports,"CollisionPostSolveEvent",()=>K),t(e.exports,"CollisionPreSolveEvent",()=>W),t(e.exports,"CollisionResolutionStrategy",()=>J),t(e.exports,"CollisionStartEvent",()=>X),t(e.exports,"CollisionSystem",()=>Z),t(e.exports,"CollisionType",()=>$),t(e.exports,"Color",()=>tt),t(e.exports,"ColorBlindFlags",()=>te),t(e.exports,"ColorBlindnessMode",()=>ti),t(e.exports,"ColorBlindnessPostProcessor",()=>ts),t(e.exports,"Component",()=>tr),t(e.exports,"CompositeCollider",()=>tn),t(e.exports,"Configurable",()=>to),t(e.exports,"ConsoleAppender",()=>ta),t(e.exports,"ContactConstraintPoint",()=>th),t(e.exports,"ContactEndEvent",()=>tl),t(e.exports,"ContactStartEvent",()=>tA),t(e.exports,"CoordPlane",()=>td),t(e.exports,"DeactivateEvent",()=>tc),t(e.exports,"Debug",()=>tu),t(e.exports,"DebugGraphicsComponent",()=>tg),t(e.exports,"DebugSystem",()=>tp),t(e.exports,"DebugText",()=>t_),t(e.exports,"DegreeOfFreedom",()=>tf),t(e.exports,"Delay",()=>tm),t(e.exports,"Detector",()=>ty),t(e.exports,"Die",()=>tC),t(e.exports,"Direction",()=>tx),t(e.exports,"DisplayMode",()=>tw),t(e.exports,"DynamicTree",()=>tI),t(e.exports,"DynamicTreeCollisionProcessor",()=>tv),t(e.exports,"EX_VERSION",()=>tE),t(e.exports,"EaseBy",()=>tB),t(e.exports,"EaseTo",()=>tb),t(e.exports,"EasingFunctions",()=>tQ),t(e.exports,"EdgeCollider",()=>tS),t(e.exports,"ElasticToActorStrategy",()=>tT),t(e.exports,"EmitterType",()=>tD),t(e.exports,"Engine",()=>tF),t(e.exports,"EngineEvents",()=>tk),t(e.exports,"EnterTriggerEvent",()=>tP),t(e.exports,"EnterViewPortEvent",()=>tR),t(e.exports,"Entity",()=>tM),t(e.exports,"EntityEvents",()=>tL),t(e.exports,"EntityManager",()=>tN),t(e.exports,"EventDispatcher",()=>tU),t(e.exports,"EventEmitter",()=>tG),t(e.exports,"EventTypes",()=>tz),t(e.exports,"Events",()=>tO),t(e.exports,"ExResponse",()=>tH),t(e.exports,"ExcaliburGraphicsContext2DCanvas",()=>tq),t(e.exports,"ExcaliburGraphicsContextWebGL",()=>tV),t(e.exports,"ExitTriggerEvent",()=>tY),t(e.exports,"ExitViewPortEvent",()=>tj),t(e.exports,"Fade",()=>tK),t(e.exports,"Flags",()=>tW),t(e.exports,"Follow",()=>tJ),t(e.exports,"Font",()=>tX),t(e.exports,"FontCache",()=>tZ),t(e.exports,"FontStyle",()=>t$),t(e.exports,"FontUnit",()=>t0),t(e.exports,"FpsSampler",()=>t1),t(e.exports,"FrameStats",()=>t2),t(e.exports,"Future",()=>t5),t(e.exports,"GameEvent",()=>t3),t(e.exports,"GameStartEvent",()=>t4),t(e.exports,"GameStopEvent",()=>t6),t(e.exports,"Gamepad",()=>t8),t(e.exports,"GamepadAxisEvent",()=>t9),t(e.exports,"GamepadButtonEvent",()=>t7),t(e.exports,"GamepadConnectEvent",()=>et),t(e.exports,"GamepadDisconnectEvent",()=>ee),t(e.exports,"Gamepads",()=>ei),t(e.exports,"Gif",()=>es),t(e.exports,"GlobalCoordinates",()=>er),t(e.exports,"Graphic",()=>en),t(e.exports,"GraphicsComponent",()=>eo),t(e.exports,"GraphicsGroup",()=>ea),t(e.exports,"GraphicsLayer",()=>eh),t(e.exports,"GraphicsLayers",()=>el),t(e.exports,"GraphicsSystem",()=>eA),t(e.exports,"HiddenEvent",()=>ed),t(e.exports,"ImageFiltering",()=>ec),t(e.exports,"ImageSource",()=>eu),t(e.exports,"InitializeEvent",()=>eg),t(e.exports,"Input",()=>ep),t(e.exports,"InputMapper",()=>e_),t(e.exports,"Integrator",()=>ef),t(e.exports,"IsometricEntityComponent",()=>em),t(e.exports,"IsometricEntitySystem",()=>ey),t(e.exports,"IsometricMap",()=>eC),t(e.exports,"IsometricTile",()=>ex),t(e.exports,"KeyEvent",()=>ew),t(e.exports,"Keyboard",()=>eI),t(e.exports,"Keys",()=>ev),t(e.exports,"KillEvent",()=>eE),t(e.exports,"Label",()=>eB),t(e.exports,"LimitCameraBoundsStrategy",()=>eb),t(e.exports,"Line",()=>eQ),t(e.exports,"LineSegment",()=>eS),t(e.exports,"Loader",()=>eT),t(e.exports,"LoaderEvents",()=>eD),t(e.exports,"LockCameraToActorAxisStrategy",()=>eF),t(e.exports,"LockCameraToActorStrategy",()=>ek),t(e.exports,"LogLevel",()=>eP),t(e.exports,"Logger",()=>eR),t(e.exports,"Material",()=>eM),t(e.exports,"Matrix",()=>eL),t(e.exports,"MatrixLocations",()=>eN),t(e.exports,"MediaEvent",()=>eU),t(e.exports,"Meet",()=>eG),t(e.exports,"MotionComponent",()=>ez),t(e.exports,"MotionSystem",()=>eO),t(e.exports,"MoveBy",()=>eH),t(e.exports,"MoveTo",()=>eq),t(e.exports,"NativePointerButton",()=>eV),t(e.exports,"NativeSoundEvent",()=>eY),t(e.exports,"NativeSoundProcessedEvent",()=>ej),t(e.exports,"Observable",()=>eK),t(e.exports,"OffscreenSystem",()=>eW),t(e.exports,"Pair",()=>eJ),t(e.exports,"ParallaxComponent",()=>eX),t(e.exports,"ParallelActions",()=>eZ),t(e.exports,"ParseGif",()=>e$),t(e.exports,"Particle",()=>e0),t(e.exports,"ParticleEmitter",()=>e1),t(e.exports,"ParticleTransform",()=>e2),t(e.exports,"Physics",()=>e5),t(e.exports,"PhysicsStats",()=>e3),t(e.exports,"PhysicsWorld",()=>e4),t(e.exports,"PointerButton",()=>e6),t(e.exports,"PointerComponent",()=>e8),t(e.exports,"PointerEvent",()=>e9),t(e.exports,"PointerEventReceiver",()=>e7),t(e.exports,"PointerScope",()=>it),t(e.exports,"PointerSystem",()=>ie),t(e.exports,"PointerType",()=>ii),t(e.exports,"Polygon",()=>is),t(e.exports,"PolygonCollider",()=>ir),t(e.exports,"Pool",()=>io),t(e.exports,"PostCollisionEvent",()=>ia),t(e.exports,"PostDebugDrawEvent",()=>ih),t(e.exports,"PostDrawEvent",()=>il),t(e.exports,"PostFrameEvent",()=>iA),t(e.exports,"PostKillEvent",()=>id),t(e.exports,"PostUpdateEvent",()=>ic),t(e.exports,"PreCollisionEvent",()=>iu),t(e.exports,"PreDebugDrawEvent",()=>ig),t(e.exports,"PreDrawEvent",()=>ip),t(e.exports,"PreFrameEvent",()=>i_),t(e.exports,"PreKillEvent",()=>im),t(e.exports,"PreUpdateEvent",()=>iy),t(e.exports,"Projection",()=>iC),t(e.exports,"QuadIndexBuffer",()=>ix),t(e.exports,"Query",()=>iw),t(e.exports,"QueryManager",()=>iI),t(e.exports,"RadiusAroundActorStrategy",()=>iv),t(e.exports,"Random",()=>iE),t(e.exports,"Raster",()=>iB),t(e.exports,"Ray",()=>ib),t(e.exports,"RealisticSolver",()=>iQ),t(e.exports,"Rectangle",()=>iS),t(e.exports,"RemovedComponent",()=>iT),t(e.exports,"RemovedEntity",()=>iD),t(e.exports,"Repeat",()=>iF),t(e.exports,"RepeatForever",()=>ik),t(e.exports,"Resolution",()=>iP),t(e.exports,"Resource",()=>iR),t(e.exports,"ResourceEvents",()=>iM),t(e.exports,"RotateBy",()=>iL),t(e.exports,"RotateTo",()=>iN),t(e.exports,"RotationType",()=>iU),t(e.exports,"ScaleBy",()=>iG),t(e.exports,"ScaleTo",()=>iz),t(e.exports,"Scene",()=>iO),t(e.exports,"SceneEvents",()=>iH),t(e.exports,"Screen",()=>iq),t(e.exports,"ScreenAppender",()=>iV),t(e.exports,"ScreenElement",()=>iY),t(e.exports,"ScreenShader",()=>ij),t(e.exports,"ScrollPreventionMode",()=>iK),t(e.exports,"Semaphore",()=>iW),t(e.exports,"Shader",()=>iJ),t(e.exports,"Shape",()=>iX),t(e.exports,"Side",()=>iZ),t(e.exports,"Sound",()=>i$),t(e.exports,"SoundEvents",()=>i0),t(e.exports,"Sprite",()=>i1),t(e.exports,"SpriteFont",()=>i2),t(e.exports,"SpriteSheet",()=>i5),t(e.exports,"StandardClock",()=>i3),t(e.exports,"StateMachine",()=>i4),t(e.exports,"StrategyContainer",()=>i6),t(e.exports,"Stream",()=>i8),t(e.exports,"System",()=>i9),t(e.exports,"SystemManager",()=>i7),t(e.exports,"SystemType",()=>st),t(e.exports,"TagComponent",()=>se),t(e.exports,"TestClock",()=>si),t(e.exports,"Text",()=>ss),t(e.exports,"TextAlign",()=>sr),t(e.exports,"TextureLoader",()=>sn),t(e.exports,"Tile",()=>so),t(e.exports,"TileMap",()=>sa),t(e.exports,"TileMapEvents",()=>sh),t(e.exports,"Timer",()=>sl),t(e.exports,"Toaster",()=>sA),t(e.exports,"Transform",()=>sd),t(e.exports,"TransformComponent",()=>sc),t(e.exports,"TreeNode",()=>su),t(e.exports,"Trigger",()=>sg),t(e.exports,"TriggerEvents",()=>sp),t(e.exports,"TwoPI",()=>s_),t(e.exports,"Util",()=>sf),t(e.exports,"Vector",()=>sm),t(e.exports,"VectorView",()=>sy),t(e.exports,"VertexBuffer",()=>sC),t(e.exports,"VertexLayout",()=>sx),t(e.exports,"VisibleEvent",()=>sw),t(e.exports,"WebAudio",()=>sI),t(e.exports,"WebAudioInstance",()=>sv),t(e.exports,"WheelDeltaMode",()=>sE),t(e.exports,"WheelEvent",()=>sB),t(e.exports,"World",()=>sb),t(e.exports,"canonicalizeAngle",()=>sQ),t(e.exports,"clamp",()=>sS),t(e.exports,"createId",()=>sT),t(e.exports,"frac",()=>sD),t(e.exports,"hasGraphicsTick",()=>sF),t(e.exports,"hasOnInitialize",()=>sk),t(e.exports,"hasOnPostUpdate",()=>sP),t(e.exports,"hasOnPreUpdate",()=>sR),t(e.exports,"hasPostDraw",()=>sM),t(e.exports,"hasPreDraw",()=>sL),t(e.exports,"has_initialize",()=>sN),t(e.exports,"has_postupdate",()=>sU),t(e.exports,"has_preupdate",()=>sG),t(e.exports,"isAddedComponent",()=>sz),t(e.exports,"isAddedSystemEntity",()=>sO),t(e.exports,"isRemoveSystemEntity",()=>sH),t(e.exports,"isRemovedComponent",()=>sq),t(e.exports,"isScreenElement",()=>sV),t(e.exports,"maxMessages",()=>sY),t(e.exports,"obsolete",()=>sj),t(e.exports,"pixelSnapEpsilon",()=>sK),t(e.exports,"randomInRange",()=>sW),t(e.exports,"randomIntInRange",()=>sJ),t(e.exports,"range",()=>sX),t(e.exports,"resetObsoleteCounter",()=>sZ),t(e.exports,"sign",()=>s$),t(e.exports,"toDegrees",()=>s0),t(e.exports,"toRadians",()=>s1),t(e.exports,"vec",()=>s2),t(e.exports,"webgl",()=>s5);/*!
 * excalibur - 0.28.0 - 2023-8-10
 * https://github.com/excaliburjs/Excalibur
 * Copyright (c) 2023 Excalibur.js <https://github.com/excaliburjs/Excalibur/graphs/contributors>
 * Licensed BSD-2-Clause
 * @preserve
 *//******/var s={/***/4662:/***/(t,e,i)=>{i(3430);var s=i(8791);t.exports=s("Array","sort");/***/},/***/8343:/***/(t,e,i)=>{i(4769);var s=i(9276);t.exports=s.Object.keys;/***/},/***/7111:/***/(t,e,i)=>{var s=i(6733),r=i(9821),n=TypeError;// `Assert: IsCallable(argument) is true`
t.exports=function(t){if(s(t))return t;throw n(r(t)+" is not a function")};/***/},/***/1176:/***/(t,e,i)=>{var s=i(5052),r=String,n=TypeError;// `Assert: Type(argument) is Object`
t.exports=function(t){if(s(t))return t;throw n(r(t)+" is not an object")};/***/},/***/9540:/***/(t,e,i)=>{var s=i(905),r=i(3231),n=i(9646),o=function(t){return function(e,i,o){var a,h=s(e),l=n(h),A=r(o,l);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(t&&i!=i){for(;l>A;)// eslint-disable-next-line no-self-compare -- NaN check
if((a=h[A++])!=a)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;l>A;A++)if((t||A in h)&&h[A]===i)return t||A||0;return!t&&-1}};t.exports={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:o(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:o(!1)};/***/},/***/6038:/***/(t,e,i)=>{var s=i(4229);t.exports=function(t,e){var i=[][t];return!!i&&s(function(){// eslint-disable-next-line no-useless-call -- required for testing
i.call(null,e||function(){return 1},1)})};/***/},/***/9794:/***/(t,e,i)=>{var s=i(3231),r=i(9646),n=i(2324),o=Array,a=Math.max;t.exports=function(t,e,i){for(var h=r(t),l=s(e,h),A=s(void 0===i?h:i,h),d=o(a(A-l,0)),c=0;l<A;l++,c++)n(d,c,t[l]);return d.length=c,d};/***/},/***/3867:/***/(t,e,i)=>{var s=i(9794),r=Math.floor,n=function(t,e){var i=t.length,h=r(i/2);return i<8?o(t,e):a(t,n(s(t,0,h),e),n(s(t,h),e),e)},o=function(t,e){for(var i,s,r=t.length,n=1;n<r;){for(s=n,i=t[n];s&&e(t[s-1],i)>0;)t[s]=t[--s];s!==n++&&(t[s]=i)}return t},a=function(t,e,i,s){for(var r=e.length,n=i.length,o=0,a=0;o<r||a<n;)t[o+a]=o<r&&a<n?0>=s(e[o],i[a])?e[o++]:i[a++]:o<r?e[o++]:i[a++];return t};t.exports=n;/***/},/***/7079:/***/(t,e,i)=>{var s=i(5968),r=s({}.toString),n=s("".slice);t.exports=function(t){return n(r(t),8,-1)};/***/},/***/1589:/***/(t,e,i)=>{var s=i(1601),r=i(6733),n=i(7079),o=i(95)("toStringTag"),a=Object,h="Arguments"==n(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(t){}};// getting tag from ES6+ `Object.prototype.toString`
t.exports=s?n:function(t){var e,i,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(i=l(e=a(t),o))?i:h?n(e):"Object"==(s=n(e))&&r(e.callee)?"Arguments":s};/***/},/***/7081:/***/(t,e,i)=>{var s=i(8270),r=i(4826),n=i(7933),o=i(1787);t.exports=function(t,e,i){for(var a=r(e),h=o.f,l=n.f,A=0;A<a.length;A++){var d=a[A];s(t,d)||i&&s(i,d)||h(t,d,l(e,d))}};/***/},/***/5762:/***/(t,e,i)=>{var s=i(7400),r=i(1787),n=i(5358);t.exports=s?function(t,e,i){return r.f(t,e,n(1,i))}:function(t,e,i){return t[e]=i,t};/***/},/***/5358:/***/t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}};/***/},/***/2324:/***/(t,e,i)=>{var s=i(9310),r=i(1787),n=i(5358);t.exports=function(t,e,i){var o=s(e);o in t?r.f(t,o,n(0,i)):t[o]=i};/***/},/***/4768:/***/(t,e,i)=>{var s=i(6733),r=i(1787),n=i(6039),o=i(8400);t.exports=function(t,e,i,a){a||(a={});var h=a.enumerable,l=void 0!==a.name?a.name:e;if(s(i)&&n(i,l,a),a.global)h?t[e]=i:o(e,i);else{try{a.unsafe?t[e]&&(h=!0):delete t[e]}catch(t){}h?t[e]=i:r.f(t,e,{value:i,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t};/***/},/***/8400:/***/(t,e,i)=>{var s=i(9859),r=Object.defineProperty;t.exports=function(t,e){try{r(s,t,{value:e,configurable:!0,writable:!0})}catch(i){s[t]=e}return e};/***/},/***/9563:/***/(t,e,i)=>{var s=i(9821),r=TypeError;t.exports=function(t,e){if(!delete t[e])throw r("Cannot delete property "+s(e)+" of "+s(t))};/***/},/***/7400:/***/(t,e,i)=>{var s=i(4229);// Detect IE8's incomplete defineProperty implementation
t.exports=!s(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]});/***/},/***/3777:/***/t=>{var e="object"==typeof document&&document.all;t.exports={all:e,IS_HTMLDDA:void 0===e&&void 0!==e};/***/},/***/2635:/***/(t,e,i)=>{var s=i(9859),r=i(5052),n=s.document,o=r(n)&&r(n.createElement);t.exports=function(t){return o?n.createElement(t):{}};/***/},/***/2671:/***/(t,e,i)=>{var s=i(598).match(/firefox\/(\d+)/i);t.exports=!!s&&+s[1];/***/},/***/8506:/***/(t,e,i)=>{var s=i(598);t.exports=/MSIE|Trident/.test(s);/***/},/***/598:/***/t=>{t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||"";/***/},/***/5884:/***/(t,e,i)=>{var s,r,n=i(9859),o=i(598),a=n.process,h=n.Deno,l=a&&a.versions||h&&h.version,A=l&&l.v8;A&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(r=(s=A.split("."))[0]>0&&s[0]<4?1:+(s[0]+s[1])),!r&&o&&(!(s=o.match(/Edge\/(\d+)/))||s[1]>=74)&&(s=o.match(/Chrome\/(\d+)/))&&(r=+s[1]),t.exports=r;/***/},/***/9811:/***/(t,e,i)=>{var s=i(598).match(/AppleWebKit\/(\d+)\./);t.exports=!!s&&+s[1];/***/},/***/8791:/***/(t,e,i)=>{var s=i(9859),r=i(5968);t.exports=function(t,e){return r(s[t].prototype[e])};/***/},/***/3837:/***/t=>{// IE8- don't enum bug keys
t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"];/***/},/***/3103:/***/(t,e,i)=>{var s=i(9859),r=i(7933).f,n=i(5762),o=i(4768),a=i(8400),h=i(7081),l=i(6541);/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/t.exports=function(t,e){var i,A,d,c,u,g=t.target,p=t.global,_=t.stat;if(i=p?s:_?s[g]||a(g,{}):(s[g]||{}).prototype)for(A in e){// contained in target
if(c=e[A],d=t.dontCallGetSet?(u=r(i,A))&&u.value:i[A],!l(p?A:g+(_?".":"#")+A,t.forced)&&void 0!==d){if(typeof c==typeof d)continue;h(c,d)}(t.sham||d&&d.sham)&&n(c,"sham",!0),o(i,A,c,t)}};/***/},/***/4229:/***/t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}};/***/},/***/7188:/***/(t,e,i)=>{var s=i(4229);t.exports=!s(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var t=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof t||t.hasOwnProperty("prototype")});/***/},/***/266:/***/(t,e,i)=>{var s=i(7188),r=Function.prototype.call;t.exports=s?r.bind(r):function(){return r.apply(r,arguments)};/***/},/***/1805:/***/(t,e,i)=>{var s=i(7400),r=i(8270),n=Function.prototype,o=s&&Object.getOwnPropertyDescriptor,a=r(n,"name"),h=a&&(!s||s&&o(n,"name").configurable);t.exports={EXISTS:a,PROPER:a&&"something"===(function(){}).name,CONFIGURABLE:h};/***/},/***/5968:/***/(t,e,i)=>{var s=i(7188),r=Function.prototype,n=r.call,o=s&&r.bind.bind(n,n);t.exports=s?o:function(t){return function(){return n.apply(t,arguments)}};/***/},/***/1333:/***/(t,e,i)=>{var s=i(9859),r=i(6733);t.exports=function(t,e){var i;return arguments.length<2?r(i=s[t])?i:void 0:s[t]&&s[t][e]};/***/},/***/5300:/***/(t,e,i)=>{var s=i(7111),r=i(9650);// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
t.exports=function(t,e){var i=t[e];return r(i)?void 0:s(i)};/***/},/***/9859:/***/function(t,e,i){var s=function(t){return t&&t.Math==Math&&t};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
t.exports=s("object"==typeof globalThis&&globalThis)||s("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
s("object"==typeof self&&self)||s("object"==typeof i.g&&i.g)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||this||Function("return this")();/***/},/***/8270:/***/(t,e,i)=>{var s=i(5968),r=i(2991),n=s({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
t.exports=Object.hasOwn||function(t,e){return n(r(t),e)};/***/},/***/5977:/***/t=>{t.exports={};/***/},/***/4394:/***/(t,e,i)=>{var s=i(7400),r=i(4229),n=i(2635);// Thanks to IE8 for its funny defineProperty
t.exports=!s&&!r(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!=Object.defineProperty(n("div"),"a",{get:function(){return 7}}).a});/***/},/***/9337:/***/(t,e,i)=>{var s=i(5968),r=i(4229),n=i(7079),o=Object,a=s("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
t.exports=r(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!o("z").propertyIsEnumerable(0)})?function(t){return"String"==n(t)?a(t,""):o(t)}:o;/***/},/***/8511:/***/(t,e,i)=>{var s=i(5968),r=i(6733),n=i(5353),o=s(Function.toString);r(n.inspectSource)||(n.inspectSource=function(t){return o(t)}),t.exports=n.inspectSource;/***/},/***/6407:/***/(t,e,i)=>{var s,r,n,o=i(1180),a=i(9859),h=i(5052),l=i(5762),A=i(8270),d=i(5353),c=i(4399),u=i(5977),g="Object already initialized",p=a.TypeError,_=a.WeakMap;if(o||d.state){var f=d.state||(d.state=new _);/* eslint-disable no-self-assign -- prototype methods protection */f.get=f.get,f.has=f.has,f.set=f.set,/* eslint-enable no-self-assign -- prototype methods protection */s=function(t,e){if(f.has(t))throw p(g);return e.facade=t,f.set(t,e),e},r=function(t){return f.get(t)||{}},n=function(t){return f.has(t)}}else{var m=c("state");u[m]=!0,s=function(t,e){if(A(t,m))throw p(g);return e.facade=t,l(t,m,e),e},r=function(t){return A(t,m)?t[m]:{}},n=function(t){return A(t,m)}}t.exports={set:s,get:r,has:n,enforce:function(t){return n(t)?r(t):s(t,{})},getterFor:function(t){return function(e){var i;if(!h(e)||(i=r(e)).type!==t)throw p("Incompatible receiver, "+t+" required");return i}}};/***/},/***/6733:/***/(t,e,i)=>{var s=i(3777),r=s.all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
t.exports=s.IS_HTMLDDA?function(t){return"function"==typeof t||t===r}:function(t){return"function"==typeof t};/***/},/***/6541:/***/(t,e,i)=>{var s=i(4229),r=i(6733),n=/#|\.prototype\./,o=function(t,e){var i=h[a(t)];return i==A||i!=l&&(r(e)?s(e):!!e)},a=o.normalize=function(t){return String(t).replace(n,".").toLowerCase()},h=o.data={},l=o.NATIVE="N",A=o.POLYFILL="P";t.exports=o;/***/},/***/9650:/***/t=>{// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
t.exports=function(t){return null==t};/***/},/***/5052:/***/(t,e,i)=>{var s=i(6733),r=i(3777),n=r.all;t.exports=r.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:s(t)||t===n}:function(t){return"object"==typeof t?null!==t:s(t)};/***/},/***/4231:/***/t=>{t.exports=!1;/***/},/***/9395:/***/(t,e,i)=>{var s=i(1333),r=i(6733),n=i(1321),o=i(6969),a=Object;t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=s("Symbol");return r(e)&&n(e.prototype,a(t))};/***/},/***/9646:/***/(t,e,i)=>{var s=i(4237);// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
t.exports=function(t){return s(t.length)};/***/},/***/6039:/***/(t,e,i)=>{var s=i(5968),r=i(4229),n=i(6733),o=i(8270),a=i(7400),h=i(1805).CONFIGURABLE,l=i(8511),A=i(6407),d=A.enforce,c=A.get,u=String,g=Object.defineProperty,p=s("".slice),_=s("".replace),f=s([].join),m=a&&!r(function(){return 8!==g(function(){},"length",{value:8}).length}),y=String(String).split("String"),C=t.exports=function(t,e,i){"Symbol("===p(u(e),0,7)&&(e="["+_(u(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),i&&i.getter&&(e="get "+e),i&&i.setter&&(e="set "+e),(!o(t,"name")||h&&t.name!==e)&&(a?g(t,"name",{value:e,configurable:!0}):t.name=e),m&&i&&o(i,"arity")&&t.length!==i.arity&&g(t,"length",{value:i.arity});try{i&&o(i,"constructor")&&i.constructor?a&&g(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var s=d(t);return o(s,"source")||(s.source=f(y,"string"==typeof e?e:"")),t};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=C(function(){return n(this)&&c(this).source||l(this)},"toString");/***/},/***/917:/***/t=>{var e=Math.ceil,i=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
t.exports=Math.trunc||function(t){var s=+t;return(s>0?i:e)(s)};/***/},/***/1787:/***/(t,e,i)=>{var s=i(7400),r=i(4394),n=i(7137),o=i(1176),a=i(9310),h=TypeError,l=Object.defineProperty,A=Object.getOwnPropertyDescriptor,d="enumerable",c="configurable",u="writable";// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
e.f=s?n?function(t,e,i){if(o(t),e=a(e),o(i),"function"==typeof t&&"prototype"===e&&"value"in i&&u in i&&!i[u]){var s=A(t,e);s&&s[u]&&(t[e]=i.value,i={configurable:c in i?i[c]:s[c],enumerable:d in i?i[d]:s[d],writable:!1})}return l(t,e,i)}:l:function(t,e,i){if(o(t),e=a(e),o(i),r)try{return l(t,e,i)}catch(t){}if("get"in i||"set"in i)throw h("Accessors not supported");return"value"in i&&(t[e]=i.value),t};/***/},/***/7933:/***/(t,e,i)=>{var s=i(7400),r=i(266),n=i(9195),o=i(5358),a=i(905),h=i(9310),l=i(8270),A=i(4394),d=Object.getOwnPropertyDescriptor;// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
e.f=s?d:function(t,e){if(t=a(t),e=h(e),A)try{return d(t,e)}catch(t){}if(l(t,e))return o(!r(n.f,t,e),t[e])};/***/},/***/8151:/***/(t,e,i)=>{var s=i(140),r=i(3837).concat("length","prototype");// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
e.f=Object.getOwnPropertyNames||function(t){return s(t,r)};/***/},/***/894:/***/(t,e)=>{// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
e.f=Object.getOwnPropertySymbols;/***/},/***/1321:/***/(t,e,i)=>{var s=i(5968);t.exports=s({}.isPrototypeOf);/***/},/***/140:/***/(t,e,i)=>{var s=i(5968),r=i(8270),n=i(905),o=i(9540).indexOf,a=i(5977),h=s([].push);t.exports=function(t,e){var i,s=n(t),l=0,A=[];for(i in s)!r(a,i)&&r(s,i)&&h(A,i);// Don't enum bug & hidden keys
for(;e.length>l;)r(s,i=e[l++])&&(~o(A,i)||h(A,i));return A};/***/},/***/5632:/***/(t,e,i)=>{var s=i(140),r=i(3837);// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
t.exports=Object.keys||function(t){return s(t,r)};/***/},/***/9195:/***/(t,e)=>{var i={}.propertyIsEnumerable,s=Object.getOwnPropertyDescriptor,r=s&&!i.call({1:2},1);// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
e.f=r?function(t){var e=s(this,t);return!!e&&e.enumerable}:i;/***/},/***/2914:/***/(t,e,i)=>{var s=i(266),r=i(6733),n=i(5052),o=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
t.exports=function(t,e){var i,a;if("string"===e&&r(i=t.toString)&&!n(a=s(i,t))||r(i=t.valueOf)&&!n(a=s(i,t))||"string"!==e&&r(i=t.toString)&&!n(a=s(i,t)))return a;throw o("Can't convert object to primitive value")};/***/},/***/4826:/***/(t,e,i)=>{var s=i(1333),r=i(5968),n=i(8151),o=i(894),a=i(1176),h=r([].concat);// all object keys, includes non-enumerable and symbols
t.exports=s("Reflect","ownKeys")||function(t){var e=n.f(a(t)),i=o.f;return i?h(e,i(t)):e};/***/},/***/9276:/***/(t,e,i)=>{var s=i(9859);t.exports=s;/***/},/***/8885:/***/(t,e,i)=>{var s=i(9650),r=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
t.exports=function(t){if(s(t))throw r("Can't call method on "+t);return t};/***/},/***/4399:/***/(t,e,i)=>{var s=i(3036),r=i(1441),n=s("keys");t.exports=function(t){return n[t]||(n[t]=r(t))};/***/},/***/5353:/***/(t,e,i)=>{var s=i(9859),r=i(8400),n="__core-js_shared__",o=s[n]||r(n,{});t.exports=o;/***/},/***/3036:/***/(t,e,i)=>{var s=i(4231),r=i(5353);(t.exports=function(t,e){return r[t]||(r[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.32.0",mode:s?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.0/LICENSE",source:"https://github.com/zloirock/core-js"});/***/},/***/4860:/***/(t,e,i)=>{/* eslint-disable es/no-symbol -- required for testing */var s=i(5884),r=i(4229),n=i(9859).String;// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
t.exports=!!Object.getOwnPropertySymbols&&!r(function(){var t=Symbol();// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!n(t)||!(Object(t) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&s&&s<41});/***/},/***/3231:/***/(t,e,i)=>{var s=i(3329),r=Math.max,n=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
t.exports=function(t,e){var i=s(t);return i<0?r(i+e,0):n(i,e)};/***/},/***/905:/***/(t,e,i)=>{// toObject with fallback for non-array-like ES3 strings
var s=i(9337),r=i(8885);t.exports=function(t){return s(r(t))};/***/},/***/3329:/***/(t,e,i)=>{var s=i(917);// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
t.exports=function(t){var e=+t;// eslint-disable-next-line no-self-compare -- NaN check
return e!=e||0===e?0:s(e)};/***/},/***/4237:/***/(t,e,i)=>{var s=i(3329),r=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
t.exports=function(t){return t>0?r(s(t),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
};/***/},/***/2991:/***/(t,e,i)=>{var s=i(8885),r=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
t.exports=function(t){return r(s(t))};/***/},/***/2066:/***/(t,e,i)=>{var s=i(266),r=i(5052),n=i(9395),o=i(5300),a=i(2914),h=i(95),l=TypeError,A=h("toPrimitive");// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
t.exports=function(t,e){if(!r(t)||n(t))return t;var i,h=o(t,A);if(h){if(void 0===e&&(e="default"),!r(i=s(h,t,e))||n(i))return i;throw l("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)};/***/},/***/9310:/***/(t,e,i)=>{var s=i(2066),r=i(9395);// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
t.exports=function(t){var e=s(t,"string");return r(e)?e:e+""};/***/},/***/1601:/***/(t,e,i)=>{var s=i(95)("toStringTag"),r={};r[s]="z",t.exports="[object z]"===String(r);/***/},/***/3326:/***/(t,e,i)=>{var s=i(1589),r=String;t.exports=function(t){if("Symbol"===s(t))throw TypeError("Cannot convert a Symbol value to a string");return r(t)};/***/},/***/9821:/***/t=>{var e=String;t.exports=function(t){try{return e(t)}catch(t){return"Object"}};/***/},/***/1441:/***/(t,e,i)=>{var s=i(5968),r=0,n=Math.random(),o=s(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++r+n,36)};/***/},/***/6969:/***/(t,e,i)=>{/* eslint-disable es/no-symbol -- required for testing */var s=i(4860);t.exports=s&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;/***/},/***/7137:/***/(t,e,i)=>{var s=i(7400),r=i(4229);// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
t.exports=s&&r(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!=Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});/***/},/***/1180:/***/(t,e,i)=>{var s=i(9859),r=i(6733),n=s.WeakMap;t.exports=r(n)&&/native code/.test(String(n));/***/},/***/95:/***/(t,e,i)=>{var s=i(9859),r=i(3036),n=i(8270),o=i(1441),a=i(4860),h=i(6969),l=s.Symbol,A=r("wks"),d=h?l.for||l:l&&l.withoutSetter||o;t.exports=function(t){return n(A,t)||(A[t]=a&&n(l,t)?l[t]:d("Symbol."+t)),A[t]};/***/},/***/3430:/***/(t,e,i)=>{var s=i(3103),r=i(5968),n=i(7111),o=i(2991),a=i(9646),h=i(9563),l=i(3326),A=i(4229),d=i(3867),c=i(6038),u=i(2671),g=i(8506),p=i(5884),_=i(9811),f=[],m=r(f.sort),y=r(f.push),C=A(function(){f.sort(void 0)}),x=A(function(){f.sort(null)}),w=c("sort"),I=!A(function(){// feature detection can be too slow, so check engines versions
if(p)return p<70;if(!u||!(u>3)){if(g)return!0;if(_)return _<603;var t,e,i,s,r="";// generate an array with more 512 elements (Chakra and old V8 fails only in this case)
for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:i=3;break;case 68:case 71:i=4;break;default:i=2}for(s=0;s<47;s++)f.push({k:e+s,v:i})}for(f.sort(function(t,e){return e.v-t.v}),s=0;s<f.length;s++)e=f[s].k.charAt(0),r.charAt(r.length-1)!==e&&(r+=e);return"DGBEFHACIJK"!==r}});// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
s({target:"Array",proto:!0,forced:C||!x||!w||!I},{sort:function(t){void 0!==t&&n(t);var e,i,s=o(this);if(I)return void 0===t?m(s):m(s,t);var r=[],A=a(s);for(i=0;i<A;i++)i in s&&y(r,s[i]);for(d(r,function(e,i){return void 0===i?-1:void 0===e?1:void 0!==t?+t(e,i)||0:l(e)>l(i)?1:-1}),e=a(r),i=0;i<e;)s[i]=r[i++];for(;i<A;)h(s,i++);return s}});/***/},/***/4769:/***/(t,e,i)=>{var s=i(3103),r=i(2991),n=i(5632);// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
s({target:"Object",stat:!0,forced:i(4229)(function(){n(1)})},{keys:function(t){return n(r(t))}});/***/},/***/1388:/***/(t,e,i)=>{/* harmony export */i.d(e,{/* harmony export */Z:()=>a});/* harmony import */var s=i(272),r=/*#__PURE__*/i.n(s),n=i(2609),o=/*#__PURE__*/i.n(n)()(r());// Module
o.push([t.id,`/* Buttons styles start */

button#excalibur-play {
  display: inline-block;
  position: relative;
  z-index: 999;
  border-radius: 6px;
  border: none;
  /*border: 3px solid;
    border-color: white;
    box-shadow: 0 0 10px #ccc;*/
  padding: 1rem 1.5rem 1rem 4rem;
  margin: 0;
  text-decoration: none;
  background: #00b233;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 2rem;
  white-space: nowrap;
  line-height: 1;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;

  -webkit-animation: excalibur-button-fadein 200ms; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: excalibur-button-fadein 200ms; /* Firefox < 16 */
  -ms-animation: excalibur-button-fadein 200ms; /* Internet Explorer */
  -o-animation: excalibur-button-fadein 200ms; /* Opera < 12.1 */
  animation: excalibur-button-fadein 200ms;
}

/*
button#excalibur-play {
  display: none;
}*/

button#excalibur-play:after {
  position: absolute;
  content: '';
  border: 8px solid;
  border-color: transparent transparent transparent white;
  left: 35px;
  top: 24px;
  width: 0;
  height: 0;
}

button#excalibur-play:before {
  position: absolute;
  content: '';
  border: 3px solid;
  left: 19px;
  top: 14px;
  border-radius: 20px;
  width: 30px;
  height: 30px;
}

button#excalibur-play:hover,
button#excalibur-play:focus {
  background: #00982c;
}

button#excalibur-play:focus {
  outline: 1px solid #fff;
  outline-offset: -4px;
}

button#excalibur-play:active {
  transform: scale(0.99);
}

@keyframes excalibur-button-fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Firefox < 16 */
@-moz-keyframes excalibur-button-fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes excalibur-button-fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Internet Explorer */
@-ms-keyframes excalibur-button-fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Opera < 12.1 */
@-o-keyframes excalibur-button-fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`,"",{version:3,sources:["webpack://./Loader.css"],names:[],mappings:"AAAA,yBAAyB;;AAEzB;EACE,qBAAqB;EACrB,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ;;+BAE6B;EAC7B,8BAA8B;EAC9B,SAAS;EACT,qBAAqB;EACrB,mBAAmB;EACnB,cAAc;EACd,uBAAuB;EACvB,eAAe;EACf,mBAAmB;EACnB,cAAc;EACd,eAAe;EACf,kBAAkB;EAClB,8DAA8D;EAC9D,wBAAwB;EACxB,qBAAqB;;EAErB,gDAAgD,EAAE,oCAAoC;EACtF,6CAA6C,EAAE,iBAAiB;EAChE,4CAA4C,EAAE,sBAAsB;EACpE,2CAA2C,EAAE,iBAAiB;EAC9D,wCAAwC;AAC1C;;AAEA;;;EAGE;;AAEF;EACE,kBAAkB;EAClB,WAAW;EACX,iBAAiB;EACjB,uDAAuD;EACvD,UAAU;EACV,SAAS;EACT,QAAQ;EACR,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,iBAAiB;EACjB,UAAU;EACV,SAAS;EACT,mBAAmB;EACnB,WAAW;EACX,YAAY;AACd;;AAEA;;EAEE,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,oBAAoB;AACtB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA,iBAAiB;AACjB;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA,oCAAoC;AACpC;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA,sBAAsB;AACtB;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA,iBAAiB;AACjB;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF",sourcesContent:["/* Buttons styles start */\r\n\r\nbutton#excalibur-play {\r\n  display: inline-block;\r\n  position: relative;\r\n  z-index: 999;\r\n  border-radius: 6px;\r\n  border: none;\r\n  /*border: 3px solid;\r\n    border-color: white;\r\n    box-shadow: 0 0 10px #ccc;*/\r\n  padding: 1rem 1.5rem 1rem 4rem;\r\n  margin: 0;\r\n  text-decoration: none;\r\n  background: #00b233;\r\n  color: #ffffff;\r\n  font-family: sans-serif;\r\n  font-size: 2rem;\r\n  white-space: nowrap;\r\n  line-height: 1;\r\n  cursor: pointer;\r\n  text-align: center;\r\n  transition: background 250ms ease-in-out, transform 150ms ease;\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n\r\n  -webkit-animation: excalibur-button-fadein 200ms; /* Safari, Chrome and Opera > 12.1 */\r\n  -moz-animation: excalibur-button-fadein 200ms; /* Firefox < 16 */\r\n  -ms-animation: excalibur-button-fadein 200ms; /* Internet Explorer */\r\n  -o-animation: excalibur-button-fadein 200ms; /* Opera < 12.1 */\r\n  animation: excalibur-button-fadein 200ms;\r\n}\r\n\r\n/*\r\nbutton#excalibur-play {\r\n  display: none;\r\n}*/\r\n\r\nbutton#excalibur-play:after {\r\n  position: absolute;\r\n  content: '';\r\n  border: 8px solid;\r\n  border-color: transparent transparent transparent white;\r\n  left: 35px;\r\n  top: 24px;\r\n  width: 0;\r\n  height: 0;\r\n}\r\n\r\nbutton#excalibur-play:before {\r\n  position: absolute;\r\n  content: '';\r\n  border: 3px solid;\r\n  left: 19px;\r\n  top: 14px;\r\n  border-radius: 20px;\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n\r\nbutton#excalibur-play:hover,\r\nbutton#excalibur-play:focus {\r\n  background: #00982c;\r\n}\r\n\r\nbutton#excalibur-play:focus {\r\n  outline: 1px solid #fff;\r\n  outline-offset: -4px;\r\n}\r\n\r\nbutton#excalibur-play:active {\r\n  transform: scale(0.99);\r\n}\r\n\r\n@keyframes excalibur-button-fadein {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n/* Firefox < 16 */\r\n@-moz-keyframes excalibur-button-fadein {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n/* Safari, Chrome and Opera > 12.1 */\r\n@-webkit-keyframes excalibur-button-fadein {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n/* Internet Explorer */\r\n@-ms-keyframes excalibur-button-fadein {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n/* Opera < 12.1 */\r\n@-o-keyframes excalibur-button-fadein {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n"],sourceRoot:""}]);// Exports
/* harmony default export */let a=o;/***/},/***/7379:/***/(t,e,i)=>{/* harmony export */i.d(e,{/* harmony export */Z:()=>a});/* harmony import */var s=i(272),r=/*#__PURE__*/i.n(s),n=i(2609),o=/*#__PURE__*/i.n(n)()(r());// Module
o.push([t.id,`
#ex-toast-container {
  position: absolute;
  height: 0;
  min-width: 50%;
  left: 50%;
  top: 0;
}

.ex-toast-message {
  left: -50%;
  position: relative;
  display: flex;
  justify-content: space-between;


  padding: 10px;
  margin-top: 5px;
  font-size: 18px;
  font-family: sans-serif;
  border-radius: 6px;
  border: 3px solid #b7b779;
  background-color: rgb(253, 253, 192);
}


.ex-toast-message button {
  align-self: flex-start;
}`,"",{version:3,sources:["webpack://./Util/Toaster.css"],names:[],mappings:";AACA;EACE,kBAAkB;EAClB,SAAS;EACT,cAAc;EACd,SAAS;EACT,MAAM;AACR;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,aAAa;EACb,8BAA8B;;;EAG9B,aAAa;EACb,eAAe;EACf,eAAe;EACf,uBAAuB;EACvB,kBAAkB;EAClB,yBAAyB;EACzB,oCAAoC;AACtC;;;AAGA;EACE,sBAAsB;AACxB",sourcesContent:["\r\n#ex-toast-container {\r\n  position: absolute;\r\n  height: 0;\r\n  min-width: 50%;\r\n  left: 50%;\r\n  top: 0;\r\n}\r\n\r\n.ex-toast-message {\r\n  left: -50%;\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: space-between;\r\n\r\n\r\n  padding: 10px;\r\n  margin-top: 5px;\r\n  font-size: 18px;\r\n  font-family: sans-serif;\r\n  border-radius: 6px;\r\n  border: 3px solid #b7b779;\r\n  background-color: rgb(253, 253, 192);\r\n}\r\n\r\n\r\n.ex-toast-message button {\r\n  align-self: flex-start;\r\n}"],sourceRoot:""}]);// Exports
/* harmony default export */let a=o;/***/},/***/2609:/***/t=>{/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/t.exports=function(t){var e=[];return(// return the list of modules as css string
e.toString=function(){return this.map(function(e){var i="",s=void 0!==e[5];return e[4]&&(i+="@supports (".concat(e[4],") {")),e[2]&&(i+="@media ".concat(e[2]," {")),s&&(i+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),i+=t(e),s&&(i+="}"),e[2]&&(i+="}"),e[4]&&(i+="}"),i}).join("")},// import a list of modules into the list
e.i=function(t,i,s,r,n){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(s)for(var a=0;a<this.length;a++){var h=this[a][0];null!=h&&(o[h]=!0)}for(var l=0;l<t.length;l++){var A=[].concat(t[l]);s&&o[A[0]]||(void 0!==n&&(void 0===A[5]||(A[1]="@layer".concat(A[5].length>0?" ".concat(A[5]):""," {").concat(A[1],"}")),A[5]=n),i&&(A[2]&&(A[1]="@media ".concat(A[2]," {").concat(A[1],"}")),A[2]=i),r&&(A[4]?(A[1]="@supports (".concat(A[4],") {").concat(A[1],"}"),A[4]=r):A[4]="".concat(r)),e.push(A))}},e)};/***/},/***/272:/***/t=>{t.exports=function(t){var e=t[1],i=t[3];if(!i)return e;if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(i))));return[e].concat(["/*# ".concat("sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s)," */")]).join("\n")}return[e].join("\n")};/***/}},r={};/******//******/// The require function
/******/function n(t){/******/// Check if module is in cache
/******/var e=r[t];/******/if(void 0!==e)/******/return e.exports;/******/// Create a new module (and put it into the cache)
/******/var i=r[t]={/******/id:t,/******/// no module.loaded needed
/******/exports:{}};/******//******/// Return the exports of the module
/******/return(/******//******/// Execute the module function
/******/s[t].call(i.exports,i,i.exports,n),i.exports);/******/}/******/// getDefaultExport function for compatibility with non-harmony modules
/******/n.n=t=>{/******/var e=t&&t.__esModule?/******/()=>t.default:/******/()=>t;/******/return /******/n.d(e,{a:e}),e;/******/},/******/// define getter functions for harmony exports
/******/n.d=(t,e)=>{/******/for(var i in e)/******/n.o(e,i)&&!n.o(t,i)&&/******/Object.defineProperty(t,i,{enumerable:!0,get:e[i]});/******/},/******/n.g=function(){/******/if("object"==typeof globalThis)return globalThis;/******/try{/******/return this||Function("return this")();/******/}catch(t){/******/if("object"==typeof window)return window;/******/}/******/}(),/******/n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),/******/// define __esModule on exports
/******/n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&/******/Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),/******/Object.defineProperty(t,"__esModule",{value:!0});/******/};/******//************************************************************************/var o={};// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(()=>{// EXPORTS
n.d(o,{fWn:()=>/* reexport */sF,Ia8:()=>/* reexport */sg,rqv:()=>/* reexport */rJ,hLI:()=>/* reexport */sk,yyv:()=>/* reexport */ry,tX5:()=>/* reexport */t1,vtX:()=>/* reexport */sL,r7K:()=>/* reexport */st,lCh:()=>/* reexport */s3,cE4:()=>/* reexport */eQ,fwF:()=>/* reexport */Animation,sce:()=>/* reexport */ta,AQ6:()=>/* reexport */rA,_c7:()=>/* reexport */th,KUs:()=>/* reexport */ro,Ajp:()=>/* reexport */io,dkO:()=>/* reexport */U,RDh:()=>/* reexport */tn,_H9:()=>/* reexport */ti,mxs:()=>/* reexport */sB,OmD:()=>/* reexport */i7,kBf:()=>/* reexport */ey,C4F:()=>/* reexport */W,NQt:()=>/* reexport */rF,JjN:()=>/* reexport */rk,EK_:()=>/* reexport */N,V1s:()=>/* reexport */s$,xHm:()=>/* reexport */sZ,Xz7:()=>/* reexport */ip,Cdc:()=>/* reexport */sd,FKn:()=>/* reexport */i1,SUY:()=>/* reexport */rN,ab2:()=>/* reexport */i$,GfZ:()=>/* reexport */i0,YMS:()=>/* reexport */iJ,oyv:()=>/* reexport */i9,aUb:()=>/* reexport */i2,SdD:()=>/* reexport */t$,JUv:()=>/* reexport */iH,jEj:()=>/* reexport */rZ,TFq:()=>/* reexport */i3,HDU:()=>/* reexport */tX,R_y:()=>/* reexport */tJ,ydN:()=>/* reexport */K,t50:()=>/* reexport */tZ,s$$:()=>/* reexport */rl,v2G:()=>/* reexport */j,Ilk:()=>/* reexport */ef,s9i:()=>/* reexport */rQ,dxL:()=>/* reexport */td,LLX:()=>/* reexport */rb,wA2:()=>/* reexport */iN,R_p:()=>/* reexport */iX,IQ$:()=>/* reexport */rc,I5F:()=>/* reexport */t7,X8$:()=>/* reexport */ra,FR6:()=>/* reexport */tW,U8o:()=>/* reexport */tK,kbG:()=>/* reexport */X,iS_:()=>/* reexport */t2,cGG:()=>/* reexport */rS,RPN:()=>/* reexport */sO,skb:()=>/* reexport */rf,SLU:()=>/* reexport */ez,RdJ:()=>/* reexport */Z,cNu:()=>/* reexport */sQ,gU7:()=>/* reexport */iQ,LSk:()=>/* reexport */sS,Nmp:()=>/* reexport */tr,d1Y:()=>/* reexport */Y,xrL:()=>/* reexport */ij,sRW:()=>/* reexport */iW,cmV:()=>/* binding */na,qWz:()=>/* reexport */sE,N0Q:()=>/* reexport */sv,q8b:()=>/* reexport */su,ynB:()=>/* reexport */i4,jT9:()=>/* reexport */sW,wAz:()=>/* reexport */tl,D4V:()=>/* reexport */rV,NLr:()=>/* reexport */rq,N6H:()=>/* reexport */t4,W1A:()=>/* reexport */t3,JHW:()=>/* reexport */sn,ZZ$:()=>/* reexport */sr,v2K:()=>/* reexport */s9,pBf:()=>/* reexport */rY,vpe:()=>/* reexport */tE,GMl:()=>/* reexport */L,zW2:()=>/* reexport */tf,B0K:()=>/* reexport */i_,Nv7:()=>/* reexport */is,C_p:()=>/* reexport */ie,MUA:()=>/* reexport */t6,xqU:()=>/* reexport */t5,pTp:()=>/* reexport */sb,vUK:()=>/* reexport */tI,j9l:()=>/* reexport */sT,Zxw:()=>/* reexport */sM,v51:()=>/* reexport */sR,Hdx:()=>/* reexport */ts,Z$d:()=>/* reexport */tt,iqV:()=>/* reexport */rL,o$7:()=>/* reexport */rT,olM:()=>/* reexport */eC,Zm$:()=>/* reexport */tB,$QH:()=>/* reexport */tT,i78:()=>/* reexport */tD,nJg:()=>/* reexport */Gamepad,h6u:()=>/* reexport */tH,hts:()=>/* reexport */tO,j88:()=>/* reexport */tG,VME:()=>/* reexport */tz,fy2:()=>/* reexport */t8,nt:()=>/* reexport */r8,Ukr:()=>/* reexport */rP,zsu:()=>/* reexport */eR,oA6:()=>/* reexport */sl,TVh:()=>/* reexport */rd,TwZ:()=>/* reexport */sa,GTT:()=>/* reexport */sh,xxj:()=>/* reexport */r_,XdK:()=>/* reexport */tV,Jmb:()=>/* reexport */V,cXo:()=>/* reexport */eN,Dm5:()=>/* reexport */t0,IIB:()=>/* reexport */tC,ebW:()=>/* reexport */rH,zI0:()=>/* reexport */J,LYD:()=>/* reexport */rC,cEG:()=>/* reexport */rx,SEl:()=>/* reexport */rW,t9V:()=>/* reexport */rK,ez5:()=>/* reexport */ei,N1d:()=>/* reexport */es,R8U:()=>/* reexport */z,SKZ:()=>/* reexport */tb,__J:()=>/* reexport */rj,RI$:()=>/* reexport */sX,x12:()=>/* reexport */ns,ccz:()=>/* reexport */iZ,aNw:()=>/* reexport */iB,XrL:()=>/* reexport */iE,xwn:()=>/* reexport */sK,dNK:()=>/* reexport */sj,ini:()=>/* reexport */G,YdH:()=>/* reexport */t9,F5T:()=>/* reexport */e8,y3G:()=>/* reexport */eb,l57:()=>/* reexport */q,xn0:()=>/* reexport */iC,t2V:()=>/* reexport */sD,uxB:()=>/* reexport */iO,cpd:()=>/* reexport */rn,fiy:()=>/* reexport */sf,$XZ:()=>/* reexport */sm,UG6:()=>/* reexport */tu,uqK:()=>/* reexport */ix,STE:()=>/* reexport */iw,y$z:()=>/* reexport */iG,mAD:()=>/* reexport */rw,sOq:()=>/* reexport */iq,hUw:()=>/* reexport */sz,_0G:()=>/* reexport */rX,Sqs:()=>/* reexport */ni,hpZ:()=>/* reexport */rg,Vol:()=>/* reexport */rp,vYX:()=>/* reexport */tA,wIZ:()=>/* reexport */iP,cBi:()=>/* reexport */rD,c30:()=>/* reexport */rI,MPV:()=>/* reexport */tg,RFv:()=>/* reexport */sc,Ux6:()=>/* reexport */PointerEvent,rxy:()=>/* reexport */rM,I$c:()=>/* reexport */O,kfC:()=>/* reexport */rm,VjY:()=>/* reexport */tp,mgq:()=>/* reexport */nr,YVA:()=>/* reexport */i6,Kgp:()=>/* reexport */e3,HH$:()=>/* reexport */tj,M_d:()=>/* reexport */tR,rgh:()=>/* reexport */tk,Ra6:()=>/* reexport */tU,KhR:()=>/* reexport */tS,BS5:()=>/* reexport */tL,xhz:()=>/* reexport */tY,xOq:()=>/* reexport */tP,a9j:()=>/* reexport */tF,bHk:()=>/* reexport */tN,CgK:()=>/* reexport */tQ,cuY:()=>/* reexport */tM,kvE:()=>/* reexport */iV,SBu:()=>/* reexport */e0,AE_:()=>/* reexport */rt,ctO:()=>/* reexport */re,OLH:()=>/* reexport */sJ,kky:()=>/* reexport */er,nSF:()=>/* reexport */ig,zHn:()=>/* reexport */iK,zwx:()=>/* reexport */rh,AeJ:()=>/* reexport */sA,hLz:()=>/* reexport */si,D9g:()=>/* reexport */s6,wA:()=>/* reexport */sp,jhr:()=>/* reexport */s_,GVs:()=>/* reexport */ir,_zO:()=>/* reexport */eF,LXZ:()=>/* reexport */eD,w6$:()=>/* reexport */sC,mhV:()=>/* reexport */sy,MOD:()=>/* reexport */$,kwd:()=>/* reexport */sw,Lmr:()=>/* reexport */sx,xsS:()=>/* reexport */rE,K5l:()=>/* reexport */rv,lLr:()=>/* reexport */Screen,Z$r:()=>/* reexport */et,IXb:()=>/* reexport */sU,SGH:()=>/* reexport */rB,SMj:()=>/* reexport */t_,L34:()=>/* reexport */no,exe:()=>/* reexport */ej,bnF:()=>/* reexport */i8,MFA:()=>/* reexport */H,$uU:()=>/* reexport */iv,Sap:()=>/* reexport */iI,jyi:()=>/* reexport */eM,E03:()=>/* reexport */eG,V6q:()=>/* reexport */eU,rg2:()=>/* reexport */rU,DVW:()=>/* reexport */im,nVo:()=>/* reexport */sY,F6N:()=>/* reexport */nt,xP7:()=>/* reexport */s5,Odq:()=>/* reexport */ri,Zif:()=>/* reexport */to,ZGJ:()=>/* reexport */iU,MJk:()=>/* reexport */rG,xvT:()=>/* reexport */Text,PHM:()=>/* reexport */te,dpR:()=>/* reexport */eL,n9L:()=>/* reexport */sV,KwO:()=>/* reexport */sq,SxM:()=>/* reexport */sH,B7y:()=>/* reexport */sG,x7r:()=>/* reexport */rO,wx7:()=>/* reexport */iL,Uvn:()=>/* reexport */iz,OFT:()=>/* reexport */iY,xzN:()=>/* reexport */s2,CcZ:()=>/* reexport */s0,M5Z:()=>/* reexport */en,ZrN:()=>/* reexport */tx,OWs:()=>/* reexport */ep,dF9:()=>/* reexport */iR,oZy:()=>/* reexport */eK,rD2:()=>/* reexport */eW,VHo:()=>/* reexport */tq,ohE:()=>/* reexport */ia,R$E:()=>/* reexport */iy,xQN:()=>/* reexport */tc,AdJ:()=>/* reexport */WheelEvent,q3I:()=>/* reexport */rs,Pab:()=>/* reexport */el,uZ5:()=>/* reexport */eh,McK:()=>/* reexport */tv,F9c:()=>/* reexport */eo,k0b:()=>/* reexport */so,hnT:()=>/* reexport */r0,RSJ:()=>/* reexport */r3,Mku:()=>/* reexport */r2,h90:()=>/* reexport */r6,rms:()=>/* reexport */r4,ErP:()=>/* reexport */r$,aVg:()=>/* reexport */r5,lPc:()=>/* reexport */r1,Z8E:()=>/* reexport */se,_N2:()=>/* reexport */s4,yFn:()=>/* reexport */s8,lNv:()=>/* reexport */ss,cu9:()=>/* reexport */sN,MZQ:()=>/* reexport */iS,FUM:()=>/* reexport */ik,BxR:()=>/* reexport */e7,vdf:()=>/* reexport */eu,iaL:()=>/* reexport */eg,w6H:()=>/* reexport */ec,Q4c:()=>/* reexport */iD,Xxe:()=>/* reexport */ea,Uxb:()=>/* reexport */eA,Yr5:()=>/* reexport */ed,Bhw:()=>/* reexport */e_,yOA:()=>/* reexport */tm});// NAMESPACE OBJECT: ./Events.ts
var t,e,i,s,r,a,h,l,A,d,c,u,g,p,_,f,m,y,C,x,w,I,v,E,B,b,Q,S,T,D,F,k,P,R,M,L,N,U,G,z,O,H,q,V,Y,j,K,W,J,X,Z,$,tt,te,ti,ts,tr,tn,to,ta,th,tl,tA,td,tc,tu,tg,tp,t_,tf={};n.r(tf),n.d(tf,{ActivateEvent:()=>t1,CollisionEndEvent:()=>t$,CollisionPostSolveEvent:()=>tX,CollisionPreSolveEvent:()=>tJ,CollisionStartEvent:()=>tZ,ContactEndEvent:()=>tW,ContactStartEvent:()=>tK,DeactivateEvent:()=>t2,EnterTriggerEvent:()=>t4,EnterViewPortEvent:()=>t3,EventTypes:()=>L,ExitTriggerEvent:()=>t6,ExitViewPortEvent:()=>t5,GameEvent:()=>tB,GameStartEvent:()=>tT,GameStopEvent:()=>tD,GamepadAxisEvent:()=>tH,GamepadButtonEvent:()=>tO,GamepadConnectEvent:()=>tG,GamepadDisconnectEvent:()=>tz,HiddenEvent:()=>tV,InitializeEvent:()=>t0,KillEvent:()=>tb,PostCollisionEvent:()=>tj,PostDebugDrawEvent:()=>tR,PostDrawEvent:()=>tk,PostFrameEvent:()=>tU,PostKillEvent:()=>tS,PostUpdateEvent:()=>tL,PreCollisionEvent:()=>tY,PreDebugDrawEvent:()=>tP,PreDrawEvent:()=>tF,PreFrameEvent:()=>tN,PreKillEvent:()=>tQ,PreUpdateEvent:()=>tM,VisibleEvent:()=>tq});// NAMESPACE OBJECT: ./Graphics/Context/webgl-util.ts
var tm={};n.r(tm),n.d(tm,{getAttributeComponentSize:()=>eV,getAttributePointerType:()=>eY,getGlTypeSizeBytes:()=>eq});// NAMESPACE OBJECT: ./Util/DrawUtil.ts
var ty={};n.r(ty),n.d(ty,{circle:()=>ic,line:()=>ih,point:()=>il,roundRect:()=>id,vector:()=>iA});// NAMESPACE OBJECT: ./Input/Index.ts
var tC={};n.r(tC),n.d(tC,{Axes:()=>U,Buttons:()=>N,Gamepad:()=>Gamepad,Gamepads:()=>t8,KeyEvent:()=>ei,Keyboard:()=>es,Keys:()=>z,NativePointerButton:()=>tu,PointerButton:()=>tg,PointerComponent:()=>sc,PointerEvent:()=>PointerEvent,PointerEventReceiver:()=>rM,PointerScope:()=>O,PointerSystem:()=>rm,PointerType:()=>tp,WheelDeltaMode:()=>tc,WheelEvent:()=>WheelEvent});// NAMESPACE OBJECT: ./Util/Index.ts
var tx={};/**
 * Polyfill adding function
 */function tw(){/* istanbul ignore next */if("undefined"==typeof window&&(window={audioContext:function(){}}),"undefined"==typeof window||window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setInterval(t,1e3/60)}),"undefined"==typeof window||window.cancelAnimationFrame||(window.cancelAnimationFrame=window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(){}),"undefined"!=typeof window&&!window.AudioContext){if(window.webkitAudioContext){let t=window.webkitAudioContext,e=t.prototype.decodeAudioData;window.webkitAudioContext.prototype.decodeAudioData=function(t){return new Promise((i,s)=>{e.call(this,t,i,s)})}}window.AudioContext=window.AudioContext||window.webkitAudioContext||window.mozAudioContext||window.msAudioContext||window.oAudioContext}"undefined"==typeof window||window.devicePixelRatio||(window.devicePixelRatio=window.devicePixelRatio||1)}n.r(tx),n.d(tx,{ConsoleAppender:()=>t7,DrawUtil:()=>ty,EasingFunctions:()=>su,LogLevel:()=>G,Logger:()=>t9,Observable:()=>iG,ScreenAppender:()=>et,addItemToArray:()=>ew,contains:()=>ev,delay:()=>eB,fail:()=>eE,getPosition:()=>ex,removeItemFromArray:()=>eI}),n(4662),n(8343);/**
 * Flags is a feature flag implementation for Excalibur. They can only be operated **before [[Engine]] construction**
 * after which they are frozen and are read-only.
 *
 * Flags are used to enable experimental or preview features in Excalibur.
 */class tI{/**
     * Force excalibur to load the Canvas 2D graphics context fallback
     *
     * @warning not all features of excalibur are supported in the Canvas 2D fallback
     */static useCanvasGraphicsContext(){tI.enable("use-canvas-context")}/**
     * Freeze all flag modifications making them readonly
     */static freeze(){tI._FROZEN=!0}/**
     * Resets internal flag state, not meant to be called by users. Only used for testing.
     *
     * Calling this in your game is UNSUPPORTED
     * @internal
     */static _reset(){tI._FROZEN=!1,tI._FLAGS={}}/**
     * Enable a specific feature flag by name. **Note: can only be set before [[Engine]] constructor time**
     * @param flagName
     */static enable(t){if(this._FROZEN)throw Error("Feature flags can only be enabled before Engine constructor time");tI._FLAGS[t]=!0}/**
     * Disable a specific feature flag by name. **Note: can only be set before [[Engine]] constructor time**
     * @param flagName
     */static disable(t){if(this._FROZEN)throw Error("Feature flags can only be disabled before Engine constructor time");tI._FLAGS[t]=!1}/**
     * Check if a flag is enabled. If the flag is disabled or does not exist `false` is returned
     * @param flagName
     */static isEnabled(t){return!!tI._FLAGS[t]}/**
     * Show a list of currently known flags
     */static show(){return Object.keys(tI._FLAGS)}}/**
 * Create a branded ID type from a number
 */function tv(t,e){return{type:t,value:e}}tI._FROZEN=!1,tI._FLAGS={};/**
 * Excalibur's typed event emitter, this allows events to be sent with any string to Type mapping
 */class tE{constructor(){this._paused=!1,this._listeners={},this._listenersOnce={},this._pipes=[]}clear(){this._listeners={},this._listenersOnce={},this._pipes.length=0}on(t,e){var i;return this._listeners[t]=null!==(i=this._listeners[t])&&void 0!==i?i:[],this._listeners[t].push(e),{close:()=>this.off(t,e)}}once(t,e){var i;return this._listenersOnce[t]=null!==(i=this._listenersOnce[t])&&void 0!==i?i:[],this._listenersOnce[t].push(e),{close:()=>this.off(t,e)}}off(t,e){var i,s,r,n;if(e){let o=null===(i=this._listeners[t])||void 0===i?void 0:i.indexOf(e);o>-1&&(null===(s=this._listeners[t])||void 0===s||s.splice(o,1));let a=null===(r=this._listenersOnce[t])||void 0===r?void 0:r.indexOf(e);a>-1&&(null===(n=this._listenersOnce[t])||void 0===n||n.splice(a,1))}else delete this._listeners[t]}emit(t,e){var i;if(this._paused)return;null===(i=this._listeners[t])||void 0===i||i.forEach(t=>t(e));let s=this._listenersOnce[t];this._listenersOnce[t]=[],s&&s.forEach(t=>t(e)),this._pipes.forEach(i=>{i.emit(t,e)})}pipe(t){if(this===t)throw Error("Cannot pipe to self");return this._pipes.push(t),{close:()=>{let e=this._pipes.indexOf(t);e>-1&&this._pipes.splice(e,1)}}}unpipe(t){let e=this._pipes.indexOf(t);e>-1&&this._pipes.splice(e,1)}pause(){this._paused=!0}unpause(){this._paused=!1}}(t=L||(L={})).Kill="kill",t.PreKill="prekill",t.PostKill="postkill",t.PreDraw="predraw",t.PostDraw="postdraw",t.PreDebugDraw="predebugdraw",t.PostDebugDraw="postdebugdraw",t.PreUpdate="preupdate",t.PostUpdate="postupdate",t.PreFrame="preframe",t.PostFrame="postframe",t.PreCollision="precollision",t.CollisionStart="collisionstart",t.CollisionEnd="collisionend",t.PostCollision="postcollision",t.Initialize="initialize",t.Activate="activate",t.Deactivate="deactivate",t.ExitViewport="exitviewport",t.EnterViewport="enterviewport",t.ExitTrigger="exit",t.EnterTrigger="enter",t.Connect="connect",t.Disconnect="disconnect",t.Button="button",t.Axis="axis",t.Visible="visible",t.Hidden="hidden",t.Start="start",t.Stop="stop",t.PointerUp="pointerup",t.PointerDown="pointerdown",t.PointerMove="pointermove",t.PointerEnter="pointerenter",t.PointerLeave="pointerleave",t.PointerCancel="pointercancel",t.PointerWheel="pointerwheel",t.Up="up",t.Down="down",t.Move="move",t.Enter="enter",t.Leave="leave",t.Cancel="cancel",t.Wheel="wheel",t.Press="press",t.Release="release",t.Hold="hold",t.PointerDragStart="pointerdragstart",t.PointerDragEnd="pointerdragend",t.PointerDragEnter="pointerdragenter",t.PointerDragLeave="pointerdragleave",t.PointerDragMove="pointerdragmove";/**
 * Base event type in Excalibur that all other event types derive from. Not all event types are thrown on all Excalibur game objects,
 * some events are unique to a type, others are not.
 *
 */class tB{constructor(){this._bubbles=!0}/**
     * If set to false, prevents event from propagating to other actors. If true it will be propagated
     * to all actors that apply.
     */get bubbles(){return this._bubbles}set bubbles(t){this._bubbles=t}/**
     * Prevents event from bubbling
     */stopPropagation(){this.bubbles=!1}}/**
 * The 'kill' event is emitted on actors when it is killed. The target is the actor that was killed.
 */class tb extends tB{constructor(t){super(),this.target=t}}/**
 * The 'prekill' event is emitted directly before an actor is killed.
 */class tQ extends tB{constructor(t){super(),this.target=t}}/**
 * The 'postkill' event is emitted directly after the actor is killed.
 */class tS extends tB{constructor(t){super(),this.target=t}}/**
 * The 'start' event is emitted on engine when has started and is ready for interaction.
 */class tT extends tB{constructor(t){super(),this.target=t}}/**
 * The 'stop' event is emitted on engine when has been stopped and will no longer take input, update or draw.
 */class tD extends tB{constructor(t){super(),this.target=t}}/**
 * The 'predraw' event is emitted on actors, scenes, and engine before drawing starts. Actors' predraw happens inside their graphics
 * transform so that all drawing takes place with the actor as the origin.
 *
 */class tF extends tB{constructor(t,e,i){super(),this.ctx=t,this.delta=e,this.target=i}}/**
 * The 'postdraw' event is emitted on actors, scenes, and engine after drawing finishes. Actors' postdraw happens inside their graphics
 * transform so that all drawing takes place with the actor as the origin.
 *
 */class tk extends tB{constructor(t,e,i){super(),this.ctx=t,this.delta=e,this.target=i}}/**
 * The 'predebugdraw' event is emitted on actors, scenes, and engine before debug drawing starts.
 */class tP extends tB{constructor(t,e){super(),this.ctx=t,this.target=e}}/**
 * The 'postdebugdraw' event is emitted on actors, scenes, and engine after debug drawing starts.
 */class tR extends tB{constructor(t,e){super(),this.ctx=t,this.target=e}}/**
 * The 'preupdate' event is emitted on actors, scenes, camera, and engine before the update starts.
 */class tM extends tB{constructor(t,e,i){super(),this.engine=t,this.delta=e,this.target=i}}/**
 * The 'postupdate' event is emitted on actors, scenes, camera, and engine after the update ends.
 */class tL extends tB{constructor(t,e,i){super(),this.engine=t,this.delta=e,this.target=i}}/**
 * The 'preframe' event is emitted on the engine, before the frame begins.
 */class tN extends tB{constructor(t,e){super(),this.engine=t,this.prevStats=e,this.target=t}}/**
 * The 'postframe' event is emitted on the engine, after a frame ends.
 */class tU extends tB{constructor(t,e){super(),this.engine=t,this.stats=e,this.target=t}}/**
 * Event received when a gamepad is connected to Excalibur. [[Gamepads]] receives this event.
 */class tG extends tB{constructor(t,e){super(),this.index=t,this.gamepad=e,this.target=e}}/**
 * Event received when a gamepad is disconnected from Excalibur. [[Gamepads]] receives this event.
 */class tz extends tB{constructor(t,e){super(),this.index=t,this.gamepad=e,this.target=e}}/**
 * Gamepad button event. See [[Gamepads]] for information on responding to controller input. [[Gamepad]] instances receive this event;
 */class tO extends tB{/**
     * @param button  The Gamepad button
     * @param value   A numeric value between 0 and 1
     */constructor(t,e,i){super(),this.button=t,this.value=e,this.target=i}}/**
 * Gamepad axis event. See [[Gamepads]] for information on responding to controller input. [[Gamepad]] instances receive this event;
 */class tH extends tB{/**
     * @param axis  The Gamepad axis
     * @param value A numeric value between -1 and 1
     */constructor(t,e,i){super(),this.axis=t,this.value=e,this.target=i}}/**
 * Event received by the [[Engine]] when the browser window is visible on a screen.
 */class tq extends tB{constructor(t){super(),this.target=t}}/**
 * Event received by the [[Engine]] when the browser window is hidden from all screens.
 */class tV extends tB{constructor(t){super(),this.target=t}}/**
 * Event thrown on an [[Actor|actor]] when a collision will occur this frame if it resolves
 */class tY extends tB{/**
     * @param actor         The actor the event was thrown on
     * @param other         The actor that will collided with the current actor
     * @param side          The side that will be collided with the current actor
     * @param intersection  Intersection vector
     */constructor(t,e,i,s){super(),this.other=e,this.side=i,this.intersection=s,this.target=t}}/**
 * Event thrown on an [[Actor|actor]] when a collision has been resolved (body reacted) this frame
 */class tj extends tB{/**
     * @param actor         The actor the event was thrown on
     * @param other         The actor that did collide with the current actor
     * @param side          The side that did collide with the current actor
     * @param intersection  Intersection vector
     */constructor(t,e,i,s){super(),this.other=e,this.side=i,this.intersection=s,this.target=t}get actor(){return this.target}set actor(t){this.target=t}}class tK{constructor(t,e,i){this.target=t,this.other=e,this.contact=i}}class tW{constructor(t,e){this.target=t,this.other=e}}class tJ{constructor(t,e,i,s,r){this.target=t,this.other=e,this.side=i,this.intersection=s,this.contact=r}}class tX{constructor(t,e,i,s,r){this.target=t,this.other=e,this.side=i,this.intersection=s,this.contact=r}}/**
 * Event thrown the first time an [[Actor|actor]] collides with another, after an actor is in contact normal collision events are fired.
 */class tZ extends tB{/**
     *
     * @param actor
     * @param other
     * @param contact
     */constructor(t,e,i){super(),this.other=e,this.contact=i,this.target=t}get actor(){return this.target}set actor(t){this.target=t}}/**
 * Event thrown when the [[Actor|actor]] is no longer colliding with another
 */class t$ extends tB{/**
     *
     */constructor(t,e){super(),this.other=e,this.target=t}get actor(){return this.target}set actor(t){this.target=t}}/**
 * Event thrown on an [[Actor]], [[Scene]], and [[Engine]] only once before the first update call
 */class t0 extends tB{/**
     * @param engine  The reference to the current engine
     */constructor(t,e){super(),this.engine=t,this.target=e}}/**
 * Event thrown on a [[Scene]] on activation
 */class t1 extends tB{/**
     * @param context  The context for the scene activation
     */constructor(t,e){super(),this.context=t,this.target=e}}/**
 * Event thrown on a [[Scene]] on deactivation
 */class t2 extends tB{/**
     * @param context  The context for the scene deactivation
     */constructor(t,e){super(),this.context=t,this.target=e}}/**
 * Event thrown on an [[Actor]] when it completely leaves the screen.
 */class t5 extends tB{constructor(t){super(),this.target=t}}/**
 * Event thrown on an [[Actor]] when it completely leaves the screen.
 */class t3 extends tB{constructor(t){super(),this.target=t}}class t4 extends tB{constructor(t,e){super(),this.target=t,this.actor=e}}class t6 extends tB{constructor(t,e){super(),this.target=t,this.actor=e}}/**
 * Excalibur leverages the HTML5 Gamepad API [where it is supported](http://caniuse.com/#feat=gamepad)
 * to provide controller support for your games.
 */class t8{constructor(){this.events=new tE,/**
         * Whether or not to poll for Gamepad input (default: `false`)
         */this.enabled=!1,/**
         * Whether or not Gamepad API is supported
         */this.supported=!!navigator.getGamepads,this._gamePadTimeStamps=[0,0,0,0],this._oldPads=[],this._pads=[],this._initSuccess=!1,this._navigator=navigator,this._minimumConfiguration=null}init(){this.supported&&!this._initSuccess&&(// In Chrome, this will return 4 undefined items until a button is pressed
// In FF, this will not return any items until a button is pressed
this._oldPads=this._clonePads(this._navigator.getGamepads()),this._oldPads.length&&this._oldPads[0]&&(this._initSuccess=!0))}/**
     * Sets the minimum gamepad configuration, for example {axis: 4, buttons: 4} means
     * this game requires at minimum 4 axis inputs and 4 buttons, this is not restrictive
     * all other controllers with more axis or buttons are valid as well. If no minimum
     * configuration is set all pads are valid.
     */setMinimumGamepadConfiguration(t){this._enableAndUpdate(),this._minimumConfiguration=t}/**
     * When implicitly enabled, set the enabled flag and run an update so information is updated
     */_enableAndUpdate(){this.enabled||(this.enabled=!0,this.update())}/**
     * Checks a navigator gamepad against the minimum configuration if present.
     */_isGamepadValid(t){if(!this._minimumConfiguration)return!0;if(!t)return!1;let e=t.axes.filter(t=>!0).length,i=t.buttons.filter(t=>!0).length;return e>=this._minimumConfiguration.axis&&i>=this._minimumConfiguration.buttons&&t.connected}emit(t,e){this.events.emit(t,e)}on(t,e){return this._enableAndUpdate(),this.events.on(t,e)}once(t,e){return this.events.once(t,e)}off(t,e){this._enableAndUpdate(),this.events.off(t,e)}/**
     * Updates Gamepad state and publishes Gamepad events
     */update(){if(!this.enabled||!this.supported)return;this.init();let t=this._navigator.getGamepads();for(let e=0;e<t.length;e++){let i,s,r,n,o;if(t[e])!this.at(e).connected&&this._isGamepadValid(t[e])&&this.events.emit("connect",new tG(e,this.at(e))),// Set connection status
this.at(e).connected=!0;else{let t=this.at(e);t.connected&&this.events.emit("disconnect",new tz(e,t)),// Reset connection status
t.connected=!1;continue}// Only supported in Chrome
if(this.at(e).update(),!t[e].timestamp||t[e].timestamp!==this._gamePadTimeStamps[e]){for(i in this._gamePadTimeStamps[e]=t[e].timestamp,// Add reference to navigator gamepad
this.at(e).navigatorGamepad=t[e],N)"number"==typeof(s=N[i])&&t[e].buttons[s]&&(o=t[e].buttons[s].value)!==this._oldPads[e].getButton(s)&&(t[e].buttons[s].pressed?(this.at(e).updateButton(s,o),this.at(e).events.emit("button",new tO(s,o,this.at(e)))):this.at(e).updateButton(s,0));// Axes
for(r in U)"number"==typeof(n=U[r])&&(o=t[e].axes[n])!==this._oldPads[e].getAxes(n)&&(this.at(e).updateAxes(n,o),this.at(e).events.emit("axis",new tH(n,o,this.at(e))));this._oldPads[e]=this._clonePad(t[e])}}}/**
     * Safely retrieves a Gamepad at a specific index and creates one if it doesn't yet exist
     */at(t){if(this._enableAndUpdate(),t>=this._pads.length)for(let e=this._pads.length-1;e<t;e++)this._pads.push(new Gamepad),this._oldPads.push(new Gamepad);return this._pads[t]}/**
     * Returns a list of all valid gamepads that meet the minimum configuration requirement.
     */getValidGamepads(){this._enableAndUpdate();let t=[];for(let e=0;e<this._pads.length;e++)this._isGamepadValid(this.at(e).navigatorGamepad)&&this.at(e).connected&&t.push(this.at(e));return t}/**
     * Gets the number of connected gamepads
     */count(){return this._pads.filter(t=>t.connected).length}_clonePads(t){let e=[];for(let i=0,s=t.length;i<s;i++)e.push(this._clonePad(t[i]));return e}/**
     * Fastest way to clone a known object is to do it yourself
     */_clonePad(t){let e,i;let s=new Gamepad;if(!t)return s;for(e=0,i=t.buttons.length;e<i;e++)t.buttons[e]&&s.updateButton(e,t.buttons[e].value);for(e=0,i=t.axes.length;e<i;e++)s.updateAxes(e,t.axes[e]);return s}}/**
 * The minimum value an axis has to move before considering it a change
 */t8.MinAxisMoveThreshold=.05;/**
 * Gamepad holds state information for a connected controller. See [[Gamepads]]
 * for more information on handling controller input.
 */class Gamepad{constructor(){this.events=new tE,this.connected=!1,this._axes=[,,,,],this._buttons=Array(16),this._buttonsUp=Array(16),this._buttonsDown=Array(16);for(let t=0;t<this._buttons.length;t++)this._buttons[t]=0;for(let t=0;t<this._axes.length;t++)this._axes[t]=0}update(){// Reset buttonsDown and buttonsUp after update is complete
this._buttonsDown=Array(16),this._buttonsUp=Array(16)}/**
     * Whether or not the given button is pressed
     *
     * @deprecated will be removed in v0.28.0. Use isButtonHeld instead
     * @param button     The button to query
     * @param threshold  The threshold over which the button is considered to be pressed
     */isButtonPressed(t,e=1){return this._buttons[t]>=e}/**
     * Tests if a certain button is held down. This is persisted between frames.
     *
     * @param button     The button to query
     * @param threshold  The threshold over which the button is considered to be pressed
     */isButtonHeld(t,e=1){return this._buttons[t]>=e}/**
     * Tests if a certain button was just pressed this frame. This is cleared at the end of the update frame.
     *
     * @param button Test whether a button was just pressed
     * @param threshold  The threshold over which the button is considered to be pressed
     */wasButtonPressed(t,e=1){return this._buttonsDown[t]>=e}/**
     * Tests if a certain button was just released this frame. This is cleared at the end of the update frame.
     *
     * @param button  Test whether a button was just released
     */wasButtonReleased(t){return!!this._buttonsUp[t]}/**
     * Gets the given button value between 0 and 1
     */getButton(t){return this._buttons[t]}/**
     * Gets the given axis value between -1 and 1. Values below
     * [[MinAxisMoveThreshold]] are considered 0.
     */getAxes(t){let e=this._axes[t];return Math.abs(e)<t8.MinAxisMoveThreshold?0:e}updateButton(t,e){0===e&&this._buttons[t]?this._buttonsUp[t]=1:this._buttonsDown[t]=e,this._buttons[t]=e}updateAxes(t,e){this._axes[t]=e}emit(t,e){this.events.emit(t,e)}on(t,e){return this.events.on(t,e)}once(t,e){return this.events.once(t,e)}off(t,e){this.events.off(t,e)}}/**
     * Face 1 button (e.g. A)
     */(e=N||(N={}))[e.Face1=0]="Face1",/**
     * Face 2 button (e.g. B)
     */e[e.Face2=1]="Face2",/**
     * Face 3 button (e.g. X)
     */e[e.Face3=2]="Face3",/**
     * Face 4 button (e.g. Y)
     */e[e.Face4=3]="Face4",/**
     * Left bumper button
     */e[e.LeftBumper=4]="LeftBumper",/**
     * Right bumper button
     */e[e.RightBumper=5]="RightBumper",/**
     * Left trigger button
     */e[e.LeftTrigger=6]="LeftTrigger",/**
     * Right trigger button
     */e[e.RightTrigger=7]="RightTrigger",/**
     * Select button
     */e[e.Select=8]="Select",/**
     * Start button
     */e[e.Start=9]="Start",/**
     * Left analog stick press (e.g. L3)
     */e[e.LeftStick=10]="LeftStick",/**
     * Right analog stick press (e.g. R3)
     */e[e.RightStick=11]="RightStick",/**
     * D-pad up
     */e[e.DpadUp=12]="DpadUp",/**
     * D-pad down
     */e[e.DpadDown=13]="DpadDown",/**
     * D-pad left
     */e[e.DpadLeft=14]="DpadLeft",/**
     * D-pad right
     */e[e.DpadRight=15]="DpadRight",/**
     * Left analogue stick X direction
     */(i=U||(U={}))[i.LeftStickX=0]="LeftStickX",/**
     * Left analogue stick Y direction
     */i[i.LeftStickY=1]="LeftStickY",/**
     * Right analogue stick X direction
     */i[i.RightStickX=2]="RightStickX",/**
     * Right analogue stick Y direction
     */i[i.RightStickY=3]="RightStickY",(s=G||(G={}))[s.Debug=0]="Debug",s[s.Info=1]="Info",s[s.Warn=2]="Warn",s[s.Error=3]="Error",s[s.Fatal=4]="Fatal";/**
 * Static singleton that represents the logging facility for Excalibur.
 * Excalibur comes built-in with a [[ConsoleAppender]] and [[ScreenAppender]].
 * Derive from [[Appender]] to create your own logging appenders.
 */class t9{constructor(){if(this._appenders=[],/**
         * Gets or sets the default logging level. Excalibur will only log
         * messages if equal to or above this level. Default: [[LogLevel.Info]]
         */this.defaultLevel=G.Info,t9._INSTANCE)throw Error("Logger is a singleton");return t9._INSTANCE=this,// Default console appender
t9._INSTANCE.addAppender(new t7),t9._INSTANCE}/**
     * Gets the current static instance of Logger
     */static getInstance(){return null==t9._INSTANCE&&(t9._INSTANCE=new t9),t9._INSTANCE}/**
     * Adds a new [[Appender]] to the list of appenders to write to
     */addAppender(t){this._appenders.push(t)}/**
     * Clears all appenders from the logger
     */clearAppenders(){this._appenders.length=0}/**
     * Logs a message at a given LogLevel
     * @param level  The LogLevel`to log the message at
     * @param args   An array of arguments to write to an appender
     */_log(t,e){null==t&&(t=this.defaultLevel);let i=this._appenders.length;for(let s=0;s<i;s++)t>=this.defaultLevel&&this._appenders[s].log(t,e)}/**
     * Writes a log message at the [[LogLevel.Debug]] level
     * @param args  Accepts any number of arguments
     */debug(...t){this._log(G.Debug,t)}/**
     * Writes a log message at the [[LogLevel.Info]] level
     * @param args  Accepts any number of arguments
     */info(...t){this._log(G.Info,t)}/**
     * Writes a log message at the [[LogLevel.Warn]] level
     * @param args  Accepts any number of arguments
     */warn(...t){this._log(G.Warn,t)}/**
     * Writes a log message at the [[LogLevel.Error]] level
     * @param args  Accepts any number of arguments
     */error(...t){this._log(G.Error,t)}/**
     * Writes a log message at the [[LogLevel.Fatal]] level
     * @param args  Accepts any number of arguments
     */fatal(...t){this._log(G.Fatal,t)}}t9._INSTANCE=null;/**
 * Console appender for browsers (i.e. `console.log`)
 */class t7{/**
     * Logs a message at the given [[LogLevel]]
     * @param level  Level to log at
     * @param args   Arguments to log
     */log(t,e){// Check for console support
if(!console&&!console.log&&console.warn&&console.error)return;// Create a new console args array
let i=[];i.unshift.apply(i,e),i.unshift("["+G[t]+"] : "),t<G.Warn?console.log.apply?console.log.apply(console,i):console.log(i.join(" ")):t<G.Error?console.warn.apply?console.warn.apply(console,i):console.warn(i.join(" ")):console.error.apply?console.error.apply(console,i):console.error(i.join(" "))}}/**
 * On-screen (canvas) appender
 */class et{/**
     * @param width   Width of the screen appender in pixels
     * @param height  Height of the screen appender in pixels
     */constructor(t,e){// @todo Clean this up
this._messages=[],this._canvas=document.createElement("canvas"),this._canvas.width=t||window.innerWidth,this._canvas.height=e||window.innerHeight,this._canvas.style.position="absolute",// eslint-disable-next-line
this._ctx=this._canvas.getContext("2d"),document.body.appendChild(this._canvas)}/**
     * Logs a message at the given [[LogLevel]]
     * @param level  Level to log at
     * @param args   Arguments to log
     */log(t,e){let i=e.join(",");this._ctx.clearRect(0,0,this._canvas.width,this._canvas.height),this._messages.unshift("["+G[t]+"] : "+i);let s=10,r=1;for(let t=0;t<this._messages.length;t++)this._ctx.fillStyle="rgba(255,255,255,"+r.toFixed(2)+")",this._ctx.fillText(this._messages[t],200,s),s+=10,r=r>0?r-.05:0}}/**
 * Checks if excalibur is in a x-origin iframe
 */function ee(){try{// Try and listen to events on top window frame if within an iframe.
//
// See https://github.com/excaliburjs/Excalibur/issues/1294
//
// Attempt to add an event listener, which triggers a DOMException on
// cross-origin iframes
let t=()=>{};window.top.addEventListener("blur",t),window.top.removeEventListener("blur",t)}catch(t){return!0}return!1}// NUMPAD
(r=z||(z={})).Num0="Numpad0",r.Num1="Numpad1",r.Num2="Numpad2",r.Num3="Numpad3",r.Num4="Numpad4",r.Num5="Numpad5",r.Num6="Numpad6",r.Num7="Numpad7",r.Num8="Numpad8",r.Num9="Numpad9",r.NumAdd="NumpadAdd",r.NumSubtract="NumpadSubtract",r.NumMultiply="NumpadMultiply",r.NumDivide="NumpadDivide",// NumComma = 'NumpadComma', // not x-browser
r.NumDecimal="NumpadDecimal",r.Numpad0="Numpad0",r.Numpad1="Numpad1",r.Numpad2="Numpad2",r.Numpad3="Numpad3",r.Numpad4="Numpad4",r.Numpad5="Numpad5",r.Numpad6="Numpad6",r.Numpad7="Numpad7",r.Numpad8="Numpad8",r.Numpad9="Numpad9",r.NumpadAdd="NumpadAdd",r.NumpadSubtract="NumpadSubtract",r.NumpadMultiply="NumpadMultiply",r.NumpadDivide="NumpadDivide",// NumpadComma = 'NumpadComma', // not x-browser
r.NumpadDecimal="NumpadDecimal",// MODIFIERS
r.NumLock="NumLock",r.ShiftLeft="ShiftLeft",r.ShiftRight="ShiftRight",r.AltLeft="AltLeft",r.AltRight="AltRight",r.ControlLeft="ControlLeft",r.ControlRight="ControlRight",r.MetaLeft="MetaLeft",r.MetaRight="MetaRight",// NUMBERS
r.Key0="Digit0",r.Key1="Digit1",r.Key2="Digit2",r.Key3="Digit3",r.Key4="Digit4",r.Key5="Digit5",r.Key6="Digit6",r.Key7="Digit7",r.Key8="Digit8",r.Key9="Digit9",r.Digit0="Digit0",r.Digit1="Digit1",r.Digit2="Digit2",r.Digit3="Digit3",r.Digit4="Digit4",r.Digit5="Digit5",r.Digit6="Digit6",r.Digit7="Digit7",r.Digit8="Digit8",r.Digit9="Digit9",// FUNCTION KEYS
r.F1="F1",r.F2="F2",r.F3="F3",r.F4="F4",r.F5="F5",r.F6="F6",r.F7="F7",r.F8="F8",r.F9="F9",r.F10="F10",r.F11="F11",r.F12="F12",// LETTERS
r.A="KeyA",r.B="KeyB",r.C="KeyC",r.D="KeyD",r.E="KeyE",r.F="KeyF",r.G="KeyG",r.H="KeyH",r.I="KeyI",r.J="KeyJ",r.K="KeyK",r.L="KeyL",r.M="KeyM",r.N="KeyN",r.O="KeyO",r.P="KeyP",r.Q="KeyQ",r.R="KeyR",r.S="KeyS",r.T="KeyT",r.U="KeyU",r.V="KeyV",r.W="KeyW",r.X="KeyX",r.Y="KeyY",r.Z="KeyZ",r.KeyA="KeyA",r.KeyB="KeyB",r.KeyC="KeyC",r.KeyD="KeyD",r.KeyE="KeyE",r.KeyF="KeyF",r.KeyG="KeyG",r.KeyH="KeyH",r.KeyI="KeyI",r.KeyJ="KeyJ",r.KeyK="KeyK",r.KeyL="KeyL",r.KeyM="KeyM",r.KeyN="KeyN",r.KeyO="KeyO",r.KeyP="KeyP",r.KeyQ="KeyQ",r.KeyR="KeyR",r.KeyS="KeyS",r.KeyT="KeyT",r.KeyU="KeyU",r.KeyV="KeyV",r.KeyW="KeyW",r.KeyX="KeyX",r.KeyY="KeyY",r.KeyZ="KeyZ",// SYMBOLS
r.Semicolon="Semicolon",r.Quote="Quote",r.Comma="Comma",r.Minus="Minus",r.Period="Period",r.Slash="Slash",r.Equal="Equal",r.BracketLeft="BracketLeft",r.Backslash="Backslash",r.BracketRight="BracketRight",r.Backquote="Backquote",// DIRECTIONS
r.Up="ArrowUp",r.Down="ArrowDown",r.Left="ArrowLeft",r.Right="ArrowRight",r.ArrowUp="ArrowUp",r.ArrowDown="ArrowDown",r.ArrowLeft="ArrowLeft",r.ArrowRight="ArrowRight",// OTHER
r.Space="Space",r.Backspace="Backspace",r.Delete="Delete",r.Esc="Escape",r.Escape="Escape",r.Enter="Enter",r.NumpadEnter="NumpadEnter",r.ContextMenu="ContextMenu";/**
 * Event thrown on a game object for a key event
 */class ei extends tB{/**
     * @param key  The key responsible for throwing the event
     * @param value The key's typed value the browser detected
     * @param originalEvent The original keyboard event that Excalibur handled
     */constructor(t,e,i){super(),this.key=t,this.value=e,this.originalEvent=i}}/**
 * Provides keyboard support for Excalibur.
 */class es{constructor(){this.events=new tE,/**
         * Keys that are currently held down
         */this._keys=[],/**
         * Keys up in the current frame
         */this._keysUp=[],/**
         * Keys down in the current frame
         */this._keysDown=[],this._releaseAllKeys=t=>{for(let e of this._keys){let i=new ei(e,t.key,t);this.events.emit("up",i),this.events.emit("release",i)}this._keysUp=Array.from(new Set(this._keys.concat(this._keysUp))),this._keys.length=0},this._handleKeyDown=t=>{// handle macos meta key issue
// https://github.com/excaliburjs/Excalibur/issues/2608
!t.metaKey&&(this._keys.includes(z.MetaLeft)||this._keys.includes(z.MetaRight))&&this._releaseAllKeys(t);let e=t.code;if(-1===this._keys.indexOf(e)){this._keys.push(e),this._keysDown.push(e);let i=new ei(e,t.key,t);this.events.emit("down",i),this.events.emit("press",i)}},this._handleKeyUp=t=>{let e=t.code,i=this._keys.indexOf(e);this._keys.splice(i,1),this._keysUp.push(e);let s=new ei(e,t.key,t);// alias the old api, we may want to deprecate this in the future
this.events.emit("up",s),this.events.emit("release",s),"Meta"===t.key&&this._releaseAllKeys(t)}}emit(t,e){this.events.emit(t,e)}on(t,e){return this.events.on(t,e)}once(t,e){return this.events.once(t,e)}off(t,e){this.events.off(t,e)}/**
     * Initialize Keyboard event listeners
     */init(t){let{global:e}=t,{grabWindowFocus:i}=t;e||(ee()?(e=window,i&&window.focus(),t9.getInstance().warn("Excalibur might be in a cross-origin iframe, in order to receive keyboard events it must be in focus")):e=window.top),e.addEventListener("blur",()=>{this._keys.length=0;// empties array efficiently
}),// key up is on window because canvas cannot have focus
e.addEventListener("keyup",this._handleKeyUp),// key down is on window because canvas cannot have focus
e.addEventListener("keydown",this._handleKeyDown)}update(){// Reset keysDown and keysUp after update is complete
this._keysDown.length=0,this._keysUp.length=0;// Emit synthetic "hold" event
for(let t=0;t<this._keys.length;t++)this.events.emit("hold",new ei(this._keys[t]))}/**
     * Gets list of keys being pressed down
     */getKeys(){return this._keys}/**
     * Tests if a certain key was just pressed this frame. This is cleared at the end of the update frame.
     * @param key Test whether a key was just pressed
     */wasPressed(t){return this._keysDown.indexOf(t)>-1}/**
     * Tests if a certain key is held down. This is persisted between frames.
     * @param key  Test whether a key is held down
     */isHeld(t){return this._keys.indexOf(t)>-1}/**
     * Tests if a certain key was just released this frame. This is cleared at the end of the update frame.
     * @param key  Test whether a key was just released
     */wasReleased(t){return this._keysUp.indexOf(t)>-1}/**
     * Trigger a manual key event
     * @param type
     * @param key
     * @param character
     */triggerEvent(t,e,i){"down"===t&&this._handleKeyDown(new KeyboardEvent("keydown",{code:e,key:null!=i?i:null})),"up"===t&&this._handleKeyUp(new KeyboardEvent("keyup",{code:e,key:null!=i?i:null}))}}/**
     * Handle events on the `canvas` element only. Events originating outside the
     * `canvas` will not be handled.
     */(a=O||(O={})).Canvas="Canvas",/**
     * Handles events on the entire document. All events will be handled by Excalibur.
     */a.Document="Document";/**
 * Pseudo-random number generator following the Mersenne_Twister algorithm. Given a seed this generator will produce the same sequence
 * of numbers each time it is called.
 * See https://en.wikipedia.org/wiki/Mersenne_Twister for more details.
 * Uses the MT19937-32 (2002) implementation documented here http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/MT2002/emt19937ar.html
 *
 * Api inspired by http://chancejs.com/# https://github.com/chancejs/chancejs
 */class er{/**
     * If no seed is specified, the Date.now() is used
     */constructor(t){this.seed=t,// Separation point of one one word, the number of bits in the lower bitmask 0 <= r <= w-1
this._lowerMask=2147483647,this._upperMask=2147483648,// Word size, 64 bits
this._w=32,// Degree of recurrence
this._n=624,// Middle word, an offset used in the recurrence defining the series x, 1<=m<n
this._m=397,// coefficients of teh rational normal form twist matrix
this._a=2567483615,// tempering bit shifts and masks
this._u=11,this._s=7,this._b=2636928640,this._t=15,this._c=4022730752,this._l=18,this._f=1812433253,this._mt=Array(this._n),// need to mask to support higher bit machines
this._mt[0]=(t||Date.now())>>>0;for(let t=1;t<this._n;t++){let e=this._mt[t-1]^this._mt[t-1]>>>this._w-2;// numbers are bigger than the JS max safe int, add in 16-bit chunks to prevent IEEE rounding errors on high bits
this._mt[t]=(this._f*((4294901760&e)>>>16)<<16)+this._f*(65535&e)+t>>>0}this._index=this._n}/**
     * Apply the twist
     */_twist(){let t=[0,this._a],e=0,i=0;for(;i<this._n-this._m;i++)e=this._mt[i]&this._upperMask|this._mt[i+1]&this._lowerMask,this._mt[i]=this._mt[i+this._m]^e>>>1^4294967295&t[1&e];for(;i<this._n-1;i++)e=this._mt[i]&this._upperMask|this._mt[i+1]&this._lowerMask,this._mt[i]=this._mt[i+(this._m-this._n)]^e>>>1^4294967295&t[1&e];e=this._mt[this._n-1]&this._upperMask|this._mt[0]&this._lowerMask,this._mt[this._n-1]=this._mt[this._m-1]^e>>>1^4294967295&t[1&e],this._index=0}/**
     * Return next 32 bit integer number in sequence
     */nextInt(){this._index>=this._n&&this._twist();let t=this._mt[this._index++];return t^=t>>>this._u,t^=t<<this._s&this._b,t^=t<<this._t&this._c,(t^=t>>>this._l)>>>0}/**
     * Return a random floating point number between [0, 1)
     */next(){return this.nextInt()*(1/4294967296);// divided by 2^32
}/**
     * Return a random floating point in range [min, max) min is included, max is not included
     */floating(t,e){return(e-t)*this.next()+t}/**
     * Return a random integer in range [min, max] min is included, max is included.
     * Implemented with rejection sampling, see https://medium.com/@betable/tifu-by-using-math-random-f1c308c4fd9d#.i13tdiu5a
     */integer(t,e){return Math.floor((e-t+1)*this.next()+t)}/**
     * Returns true or false randomly with 50/50 odds by default.
     * By default the likelihood of returning a true is .5 (50%).
     * @param likelihood takes values between [0, 1]
     */bool(t=.5){return this.next()<=t}/**
     * Returns one element from an array at random
     */pickOne(t){return t[this.integer(0,t.length-1)]}/**
     * Returns a new array random picking elements from the original
     * @param array Original array to pick from
     * @param numPicks can be any positive number
     * @param allowDuplicates indicates whether the returned set is allowed duplicates (it does not mean there will always be duplicates
     * just that it is possible)
     */pickSet(t,e,i=!1){return i?this._pickSetWithDuplicates(t,e):this._pickSetWithoutDuplicates(t,e)}/**
     * Returns a new array randomly picking elements in the original (not reused)
     * @param array Array to pick elements out of
     * @param numPicks must be less than or equal to the number of elements in the array.
     */_pickSetWithoutDuplicates(t,e){if(e>t.length||e<0)throw Error("Invalid number of elements to pick, must pick a value 0 < n <= length");if(e===t.length)return t;let i=Array(e),s=0,r=t.slice(0);for(;s<e;){let t=this.integer(0,r.length-1);i[s++]=r[t],r.splice(t,1)}return i}/**
     * Returns a new array random picking elements from the original allowing duplicates
     * @param array Array to pick elements out of
     * @param numPicks can be any positive number
     */_pickSetWithDuplicates(t,e){// Typescript numbers are all floating point, so do we add check for int? (or floor the input?)
if(e<0)throw Error("Invalid number of elements to pick, must pick a value 0 <= n < MAX_INT");let i=Array(e);for(let s=0;s<e;s++)i[s]=this.pickOne(t);return i}/**
     * Returns a new array that has its elements shuffled. Using the Fisher/Yates method
     * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
     */shuffle(t){let e=t.slice(0),i=null;for(let t=0;t<e.length-2;t++){let s=this.integer(t,e.length-1);i=e[t],e[t]=e[s],e[s]=i}return e}/**
     * Generate a list of random integer numbers
     * @param length the length of the final array
     * @param min the minimum integer number to generate inclusive
     * @param max the maximum integer number to generate inclusive
     */range(t,e,i){let s=Array(t);for(let r=0;r<t;r++)s[r]=this.integer(e,i);return s}/**
     * Returns the result of a d4 dice roll
     */d4(){return this.integer(1,4)}/**
     * Returns the result of a d6 dice roll
     */d6(){return this.integer(1,6)}/**
     * Returns the result of a d8 dice roll
     */d8(){return this.integer(1,8)}/**
     * Returns the result of a d10 dice roll
     */d10(){return this.integer(1,10)}/**
     * Returns the result of a d12 dice roll
     */d12(){return this.integer(1,12)}/**
     * Returns the result of a d20 dice roll
     */d20(){return this.integer(1,20)}}/**
 * Two PI constant
 */let en=2*Math.PI;/**
 * Returns the fractional part of a number
 * @param x
 */function eo(t){return t>=0?t-Math.floor(t):t-Math.ceil(t)}/**
 * Returns the sign of a number, if 0 returns 0
 */function ea(t){return 0===t?0:t<0?-1:1}/**
 * Clamps a value between a min and max inclusive
 */function eh(t,e,i){return Math.min(Math.max(e,t),i)}/**
 * Convert an angle to be the equivalent in the range [0, 2PI]
 */function el(t){let e=t;if(t>en)for(;e>en;)e-=en;if(t<0)for(;e<0;)e+=en;return e}/**
 * Convert radians to degrees
 */function eA(t){return 180/Math.PI*t}/**
 * Convert degrees to radians
 */function ed(t){return t/180*Math.PI}/**
 * Generate a range of numbers
 * For example: range(0, 5) -> [0, 1, 2, 3, 4, 5]
 * @param from inclusive
 * @param to inclusive
 */let ec=(t,e)=>Array.from(Array(e-t+1),(e,i)=>i+t);/**
 * Find a random floating point number in range
 */function eu(t,e,i=new er){return i?i.floating(t,e):t+Math.random()*(e-t)}/**
 * Find a random integer in a range
 */function eg(t,e,i=new er){return i?i.integer(t,e):Math.round(eu(t,e))}/**
 * A 2D vector on a plane.
 */class ep{/**
     * A (0, 0) vector
     */static get Zero(){return new ep(0,0)}/**
     * A (1, 1) vector
     */static get One(){return new ep(1,1)}/**
     * A (0.5, 0.5) vector
     */static get Half(){return new ep(.5,.5)}/**
     * A unit vector pointing up (0, -1)
     */static get Up(){return new ep(0,-1)}/**
     * A unit vector pointing down (0, 1)
     */static get Down(){return new ep(0,1)}/**
     * A unit vector pointing left (-1, 0)
     */static get Left(){return new ep(-1,0)}/**
     * A unit vector pointing right (1, 0)
     */static get Right(){return new ep(1,0)}/**
     * Returns a vector of unit length in the direction of the specified angle in Radians.
     * @param angle The angle to generate the vector
     */static fromAngle(t){return new ep(Math.cos(t),Math.sin(t))}/**
     * Checks if vector is not null, undefined, or if any of its components are NaN or Infinity.
     */static isValid(t){return!(null==t||isNaN(t.x)||isNaN(t.y))&&t.x!==1/0&&t.y!==1/0&&t.x!==-1/0&&t.y!==-1/0}/**
     * Calculates distance between two Vectors
     * @param vec1
     * @param vec2
     */static distance(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}static min(t,e){return new ep(Math.min(t.x,e.x),Math.min(t.y,e.y))}static max(t,e){return new ep(Math.max(t.x,e.x),Math.max(t.y,e.y))}/**
     * @param x  X component of the Vector
     * @param y  Y component of the Vector
     */constructor(t,e){this._x=0,this._y=0,this._x=t,this._y=e}/**
     * Get the x component of the vector
     */get x(){return this._x}/**
     * Set the x component, THIS MUTATES the current vector. It is usually better to create a new vector.
     * @warning **Be very careful setting components on shared vectors, mutating shared vectors can cause hard to find bugs**
     */set x(t){this._x=t}/**
     * Get the y component of the vector
     */get y(){return this._y}/**
     * Set the y component, THIS MUTATES the current vector. It is usually better to create a new vector.
     * @warning **Be very careful setting components on shared vectors, mutating shared vectors can cause hard to find bugs**
     */set y(t){this._y=t}/**
     * Sets the x and y components at once, THIS MUTATES the current vector. It is usually better to create a new vector.
     *
     * @warning **Be very careful using this, mutating vectors can cause hard to find bugs**
     */setTo(t,e){this.x=t,this.y=e}/**
     * Compares this point against another and tests for equality
     * @param vector The other point to compare to
     * @param tolerance Amount of euclidean distance off we are willing to tolerate
     */equals(t,e=.001){return Math.abs(this.x-t.x)<=e&&Math.abs(this.y-t.y)<=e}/**
     * The distance to another vector. If no other Vector is specified, this will return the [[magnitude]].
     * @param v  The other vector. Leave blank to use origin vector.
     */distance(t){if(!t)return Math.sqrt(this.x*this.x+this.y*this.y);let e=this.x-t.x,i=this.y-t.y;return Math.sqrt(e*e+i*i)}squareDistance(t){t||(t=ep.Zero);let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}/**
     * Clamps the current vector's magnitude mutating it
     * @param magnitude
     */clampMagnitude(t){let e=this.size,i=eh(e,0,t);return this.size=i,this}/**
     * The size (magnitude) of the Vector
     */get size(){return this.distance()}/**
     * Setting the size mutates the current vector
     *
     * @warning Can be used to set the size of the vector, **be very careful using this, mutating vectors can cause hard to find bugs**
     */set size(t){let e=this.normalize().scale(t);this.setTo(e.x,e.y)}/**
     * Normalizes a vector to have a magnitude of 1.
     */normalize(){let t=this.distance();return t>0?new ep(this.x/t,this.y/t):new ep(0,1)}/**
     * Returns the average (midpoint) between the current point and the specified
     */average(t){return this.add(t).scale(.5)}scale(t,e){let i=e||new ep(0,0);return t instanceof ep?(i.x=this.x*t.x,i.y=this.y*t.y):(i.x=this.x*t,i.y=this.y*t),i}/**
     * Adds one vector to another
     * @param v The vector to add
     * @param dest Optionally copy the result into a provided vector
     */add(t,e){return e?(e.x=this.x+t.x,e.y=this.y+t.y,e):new ep(this.x+t.x,this.y+t.y)}/**
     * Subtracts a vector from another, if you subtract vector `B.sub(A)` the resulting vector points from A -> B
     * @param v The vector to subtract
     */sub(t){return new ep(this.x-t.x,this.y-t.y)}/**
     * Adds one vector to this one modifying the original
     * @param v The vector to add
     * @warning Be very careful using this, mutating vectors can cause hard to find bugs
     */addEqual(t){return this.setTo(this.x+t.x,this.y+t.y),this}/**
     * Subtracts a vector from this one modifying the original
     * @param v The vector to subtract
     * @warning Be very careful using this, mutating vectors can cause hard to find bugs
     */subEqual(t){return this.setTo(this.x-t.x,this.y-t.y),this}/**
     * Scales this vector by a factor of size and modifies the original
     * @warning Be very careful using this, mutating vectors can cause hard to find bugs
     */scaleEqual(t){return this.setTo(this.x*t,this.y*t),this}/**
     * Performs a dot product with another vector
     * @param v  The vector to dot
     */dot(t){return this.x*t.x+this.y*t.y}cross(t){return t instanceof ep?this.x*t.y-this.y*t.x:"number"==typeof t?new ep(t*this.y,-t*this.x):void 0}static cross(t,e){return new ep(-t*e.y,t*e.x)}/**
     * Returns the perpendicular vector to this one
     */perpendicular(){return new ep(this.y,-this.x)}/**
     * Returns the normal vector to this one, same as the perpendicular of length 1
     */normal(){return this.perpendicular().normalize()}/**
     * Negate the current vector
     */negate(){return this.scale(-1)}/**
     * Returns the angle of this vector.
     */toAngle(){return Math.atan2(this.y,this.x)}/**
     * Rotates the current vector around a point by a certain number of
     * degrees in radians
     */rotate(t,e){e||(e=new ep(0,0));let i=Math.sin(t),s=Math.cos(t),r=s*(this.x-e.x)-i*(this.y-e.y)+e.x,n=i*(this.x-e.x)+s*(this.y-e.y)+e.y;return new ep(r,n)}/**
     * Creates new vector that has the same values as the previous.
     */clone(t){let e=null!=t?t:new ep(0,0);return e.x=this.x,e.y=this.y,e}/**
     * Returns a string representation of the vector.
     */toString(t){return t?`(${this.x.toFixed(t)}, ${this.y.toFixed(t)})`:`(${this.x}, ${this.y})`}}/**
 * Shorthand for creating new Vectors - returns a new Vector instance with the
 * provided X and Y components.
 *
 * @param x  X component of the Vector
 * @param y  Y component of the Vector
 */function e_(t,e){return new ep(t,e)}/**
 * Provides standard colors (e.g. [[Color.Black]])
 * but you can also create custom colors using RGB, HSL, or Hex. Also provides
 * useful color operations like [[Color.lighten]], [[Color.darken]], and more.
 */class ef{/**
     * Creates a new instance of Color from an r, g, b, a
     *
     * @param r  The red component of color (0-255)
     * @param g  The green component of color (0-255)
     * @param b  The blue component of color (0-255)
     * @param a  The alpha component of color (0-1.0)
     */constructor(t,e,i,s){this.r=t,this.g=e,this.b=i,this.a=null!=s?s:1}/**
     * Creates a new instance of Color from an r, g, b, a
     *
     * @param r  The red component of color (0-255)
     * @param g  The green component of color (0-255)
     * @param b  The blue component of color (0-255)
     * @param a  The alpha component of color (0-1.0)
     */static fromRGB(t,e,i,s){return new ef(t,e,i,s)}/**
     * Creates a new instance of Color from a rgb string
     *
     * @param string  CSS color string of the form rgba(255, 255, 255, 1) or rgb(255, 255, 255)
     */static fromRGBString(t){let e=null;if(e=t.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)/i)){let t=parseInt(e[1],10),i=parseInt(e[2],10),s=parseInt(e[3],10),r=1;return e[4]&&(r=parseFloat(e[4])),new ef(t,i,s,r)}throw Error("Invalid rgb/a string: "+t)}/**
     * Creates a new instance of Color from a hex string
     *
     * @param hex  CSS color string of the form #ffffff, the alpha component is optional
     */static fromHex(t){let e=null;if(e=t.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i)){let t=parseInt(e[1],16),i=parseInt(e[2],16),s=parseInt(e[3],16),r=1;return e[4]&&(r=parseInt(e[4],16)/255),new ef(t,i,s,r)}throw Error("Invalid hex string: "+t)}/**
     * Creates a new instance of Color from hsla values
     *
     * @param h  Hue is represented [0-1]
     * @param s  Saturation is represented [0-1]
     * @param l  Luminance is represented [0-1]
     * @param a  Alpha is represented [0-1]
     */static fromHSL(t,e,i,s=1){let r=new em(t,e,i,s);return r.toRGBA()}/**
     * Lightens the current color by a specified amount
     *
     * @param factor  The amount to lighten by [0-1]
     */lighten(t=.1){let e=em.fromRGBA(this.r,this.g,this.b,this.a);return e.l+=(1-e.l)*t,e.toRGBA()}/**
     * Darkens the current color by a specified amount
     *
     * @param factor  The amount to darken by [0-1]
     */darken(t=.1){let e=em.fromRGBA(this.r,this.g,this.b,this.a);return e.l-=e.l*t,e.toRGBA()}/**
     * Saturates the current color by a specified amount
     *
     * @param factor  The amount to saturate by [0-1]
     */saturate(t=.1){let e=em.fromRGBA(this.r,this.g,this.b,this.a);return e.s+=e.s*t,e.toRGBA()}/**
     * Desaturates the current color by a specified amount
     *
     * @param factor  The amount to desaturate by [0-1]
     */desaturate(t=.1){let e=em.fromRGBA(this.r,this.g,this.b,this.a);return e.s-=e.s*t,e.toRGBA()}/**
     * Multiplies a color by another, results in a darker color
     *
     * @param color  The other color
     */multiply(t){let e=t.r/255*this.r/255*255,i=t.g/255*this.g/255*255,s=t.b/255*this.b/255*255,r=t.a*this.a;return new ef(e,i,s,r)}/**
     * Screens a color by another, results in a lighter color
     *
     * @param color  The other color
     */screen(t){let e=t.invert(),i=t.invert();return e.multiply(i).invert()}/**
     * Inverts the current color
     */invert(){return new ef(255-this.r,255-this.g,255-this.b,1-this.a)}/**
     * Averages the current color with another
     *
     * @param color  The other color
     */average(t){let e=(t.r+this.r)/2,i=(t.g+this.g)/2,s=(t.b+this.b)/2,r=(t.a+this.a)/2;return new ef(e,i,s,r)}equal(t){return this.toString()===t.toString()}/**
     * Returns a CSS string representation of a color.
     *
     * @param format Color representation, accepts: rgb, hsl, or hex
     */toString(t="rgb"){switch(t){case"rgb":return this.toRGBA();case"hsl":return this.toHSLA();case"hex":return this.toHex();default:throw Error("Invalid Color format")}}/**
     * Returns Hex Value of a color component
     * @param c color component
     * @see https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
     */_componentToHex(t){let e=t.toString(16);return 1===e.length?"0"+e:e}/**
     * Return Hex representation of a color.
     */toHex(){return"#"+this._componentToHex(this.r)+this._componentToHex(this.g)+this._componentToHex(this.b)}/**
     * Return RGBA representation of a color.
     */toRGBA(){let t=String(this.r.toFixed(0))+", "+String(this.g.toFixed(0))+", "+String(this.b.toFixed(0));return void 0!==this.a||null!==this.a?"rgba("+t+", "+String(this.a)+")":"rgb("+t+")"}/**
     * Return HSLA representation of a color.
     */toHSLA(){return em.fromRGBA(this.r,this.g,this.b,this.a).toString()}/**
     * Returns a CSS string representation of a color.
     */fillStyle(){return this.toString()}/**
     * Returns a clone of the current color.
     */clone(){return new ef(this.r,this.g,this.b,this.a)}/**
     * Black (#000000)
     */static get Black(){return ef.fromHex("#000000")}/**
     * White (#FFFFFF)
     */static get White(){return ef.fromHex("#FFFFFF")}/**
     * Gray (#808080)
     */static get Gray(){return ef.fromHex("#808080")}/**
     * Light gray (#D3D3D3)
     */static get LightGray(){return ef.fromHex("#D3D3D3")}/**
     * Dark gray (#A9A9A9)
     */static get DarkGray(){return ef.fromHex("#A9A9A9")}/**
     * Yellow (#FFFF00)
     */static get Yellow(){return ef.fromHex("#FFFF00")}/**
     * Orange (#FFA500)
     */static get Orange(){return ef.fromHex("#FFA500")}/**
     * Red (#FF0000)
     */static get Red(){return ef.fromHex("#FF0000")}/**
     * Vermilion (#FF5B31)
     */static get Vermilion(){return ef.fromHex("#FF5B31")}/**
     * Rose (#FF007F)
     */static get Rose(){return ef.fromHex("#FF007F")}/**
     * Magenta (#FF00FF)
     */static get Magenta(){return ef.fromHex("#FF00FF")}/**
     * Violet (#7F00FF)
     */static get Violet(){return ef.fromHex("#7F00FF")}/**
     * Blue (#0000FF)
     */static get Blue(){return ef.fromHex("#0000FF")}/**
     * Azure (#007FFF)
     */static get Azure(){return ef.fromHex("#007FFF")}/**
     * Cyan (#00FFFF)
     */static get Cyan(){return ef.fromHex("#00FFFF")}/**
     * Viridian (#59978F)
     */static get Viridian(){return ef.fromHex("#59978F")}/**
     * Green (#00FF00)
     */static get Green(){return ef.fromHex("#00FF00")}/**
     * Chartreuse (#7FFF00)
     */static get Chartreuse(){return ef.fromHex("#7FFF00")}/**
     * Transparent (#FFFFFF00)
     */static get Transparent(){return ef.fromHex("#FFFFFF00")}/**
     * ExcaliburBlue (#176BAA)
     */static get ExcaliburBlue(){return ef.fromHex("#176BAA")}}/**
 * Internal HSL Color representation
 *
 * http://en.wikipedia.org/wiki/HSL_and_HSV
 * http://axonflux.com/handy-rgb-to-hsl-and-rgb-to-hsv-color-model-c
 */class em{constructor(t,e,i,s){this.h=t,this.s=e,this.l=i,this.a=s}static hue2rgb(t,e,i){return(i<0&&(i+=1),i>1&&(i-=1),i<1/6)?t+(e-t)*6*i:i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t}static fromRGBA(t,e,i,s){let r,n;t/=255,e/=255,i/=255;let o=Math.max(t,e,i),a=Math.min(t,e,i),h=(o+a)/2;if(o===a)r=n=0;// achromatic
else{let s=o-a;switch(n=h>.5?s/(2-o-a):s/(o+a),o){case t:r=(e-i)/s+(e<i?6:0);break;case e:r=(i-t)/s+2;break;case i:r=(t-e)/s+4}r/=6}return new em(r,n,h,s)}toRGBA(){let t,e,i;if(0===this.s)t=e=i=this.l;// achromatic
else{let s=this.l<.5?this.l*(1+this.s):this.l+this.s-this.l*this.s,r=2*this.l-s;t=em.hue2rgb(r,s,this.h+1/3),e=em.hue2rgb(r,s,this.h),i=em.hue2rgb(r,s,this.h-1/3)}return new ef(255*t,255*e,255*i,this.a)}toString(){let t=this.h.toFixed(0),e=this.s.toFixed(0),i=this.l.toFixed(0),s=this.a.toFixed(0);return`hsla(${t}, ${e}, ${i}, ${s})`}}(h=H||(H={})).None="None",h.Top="Top",h.Bottom="Bottom",h.Left="Left",h.Right="Right",(l=H||(H={})).getOpposite=/**
     * Returns the opposite side from the current
     */function(t){return t===l.Top?l.Bottom:t===l.Bottom?l.Top:t===l.Left?l.Right:t===l.Right?l.Left:l.None},l.fromDirection=/**
     * Given a vector, return the Side most in that direction (via dot product)
     */function(t){let e=[ep.Left,ep.Right,ep.Up,ep.Down],i=[l.Left,l.Right,l.Top,l.Bottom],s=-Number.MAX_VALUE,r=-1;for(let i=0;i<e.length;i++)e[i].dot(t)>s&&(s=e[i].dot(t),r=i);return i[r]};/**
 * Axis Aligned collision primitive for Excalibur.
 */class ey{/**
     * Constructor allows passing of either an object with all coordinate components,
     * or the coordinate components passed separately.
     * @param leftOrOptions    Either x coordinate of the left edge or an options object
     * containing the four coordinate components.
     * @param top     y coordinate of the top edge
     * @param right   x coordinate of the right edge
     * @param bottom  y coordinate of the bottom edge
     */constructor(t=0,e=0,i=0,s=0){"object"==typeof t?(this.left=t.left,this.top=t.top,this.right=t.right,this.bottom=t.bottom):"number"==typeof t&&(this.left=t,this.top=e,this.right=i,this.bottom=s)}/**
     * Returns a new instance of [[BoundingBox]] that is a copy of the current instance
     */clone(){return new ey(this.left,this.top,this.right,this.bottom)}/**
     * Given bounding box A & B, returns the side relative to A when intersection is performed.
     * @param intersection Intersection vector between 2 bounding boxes
     */static getSideFromIntersection(t){return t?t?Math.abs(t.x)>Math.abs(t.y)?t.x<0?H.Right:H.Left:t.y<0?H.Bottom:H.Top:H.None:H.None}static fromPoints(t){let e=1/0,i=1/0,s=-1/0,r=-1/0;for(let n=0;n<t.length;n++)t[n].x<e&&(e=t[n].x),t[n].x>s&&(s=t[n].x),t[n].y<i&&(i=t[n].y),t[n].y>r&&(r=t[n].y);return new ey(e,i,s,r)}static fromDimension(t,e,i=ep.Half,s=ep.Zero){return new ey(-t*i.x+s.x,-e*i.y+s.y,t-t*i.x+s.x,e-e*i.y+s.y)}/**
     * Returns the calculated width of the bounding box
     */get width(){return this.right-this.left}/**
     * Returns the calculated height of the bounding box
     */get height(){return this.bottom-this.top}/**
     * Return whether the bounding box has zero dimensions in height,width or both
     */hasZeroDimensions(){return 0===this.width||0===this.height}/**
     * Returns the center of the bounding box
     */get center(){return new ep((this.left+this.right)/2,(this.top+this.bottom)/2)}translate(t){return new ey(this.left+t.x,this.top+t.y,this.right+t.x,this.bottom+t.y)}/**
     * Rotates a bounding box by and angle and around a point, if no point is specified (0, 0) is used by default. The resulting bounding
     * box is also axis-align. This is useful when a new axis-aligned bounding box is needed for rotated geometry.
     */rotate(t,e=ep.Zero){let i=this.getPoints().map(i=>i.rotate(t,e));return ey.fromPoints(i)}/**
     * Scale a bounding box by a scale factor, optionally provide a point
     * @param scale
     * @param point
     */scale(t,e=ep.Zero){let i=this.translate(e);return new ey(i.left*t.x,i.top*t.y,i.right*t.x,i.bottom*t.y)}/**
     * Transform the axis aligned bounding box by a [[Matrix]], producing a new axis aligned bounding box
     * @param matrix
     */transform(t){// inlined these calculations to not use vectors would speed it up slightly
// const matFirstColumn = vec(matrix.data[0], matrix.data[1]);
// const xa = matFirstColumn.scale(this.left);
let e=t.data[0]*this.left,i=t.data[1]*this.left,s=t.data[0]*this.right,r=t.data[1]*this.right,n=t.data[2]*this.top,o=t.data[3]*this.top,a=t.data[2]*this.bottom,h=t.data[3]*this.bottom,l=t.getPosition(),A=Math.min(e,s)+Math.min(n,a)+l.x,d=Math.min(i,r)+Math.min(o,h)+l.y,c=Math.max(e,s)+Math.max(n,a)+l.x,u=Math.max(i,r)+Math.max(o,h)+l.y;return new ey({left:A,top:d,right:c,bottom:u//: bottomRight.y
})}/**
     * Returns the perimeter of the bounding box
     */getPerimeter(){let t=this.width,e=this.height;return 2*(t+e)}getPoints(){let t=[];return t.push(new ep(this.left,this.top)),t.push(new ep(this.right,this.top)),t.push(new ep(this.right,this.bottom)),t.push(new ep(this.left,this.bottom)),t}/**
     * Determines whether a ray intersects with a bounding box
     */rayCast(t,e=1/0){// algorithm from https://tavianator.com/fast-branchless-raybounding-box-intersections/
let i=-1/0,s=1/0,r=0===t.dir.x?Number.MAX_VALUE:1/t.dir.x,n=0===t.dir.y?Number.MAX_VALUE:1/t.dir.y,o=(this.left-t.pos.x)*r,a=(this.right-t.pos.x)*r;i=Math.min(o,a),s=Math.max(o,a);let h=(this.top-t.pos.y)*n,l=(this.bottom-t.pos.y)*n;return i=Math.max(i,Math.min(h,l)),(s=Math.min(s,Math.max(h,l)))>=Math.max(0,i)&&i<e}rayCastTime(t,e=1/0){// algorithm from https://tavianator.com/fast-branchless-raybounding-box-intersections/
let i=-1/0,s=1/0,r=0===t.dir.x?Number.MAX_VALUE:1/t.dir.x,n=0===t.dir.y?Number.MAX_VALUE:1/t.dir.y,o=(this.left-t.pos.x)*r,a=(this.right-t.pos.x)*r;i=Math.min(o,a),s=Math.max(o,a);let h=(this.top-t.pos.y)*n,l=(this.bottom-t.pos.y)*n;return(i=Math.max(i,Math.min(h,l)),(s=Math.min(s,Math.max(h,l)))>=Math.max(0,i)&&i<e)?i:-1}contains(t){return t instanceof ep?this.left<=t.x&&this.top<=t.y&&this.bottom>=t.y&&this.right>=t.x:t instanceof ey&&this.left<=t.left&&this.top<=t.top&&t.bottom<=this.bottom&&t.right<=this.right}/**
     * Combines this bounding box and another together returning a new bounding box
     * @param other  The bounding box to combine
     */combine(t){let e=new ey(Math.min(this.left,t.left),Math.min(this.top,t.top),Math.max(this.right,t.right),Math.max(this.bottom,t.bottom));return e}get dimensions(){return new ep(this.width,this.height)}/**
     * Returns true if the bounding boxes overlap.
     * @param other
     * @param epsilon Optionally specify a small epsilon (default 0) as amount of overlap to ignore as overlap.
     * This epsilon is useful in stable collision simulations.
     */overlaps(t,e){let i=e||0;if(t.hasZeroDimensions())return this.contains(t);if(this.hasZeroDimensions())return t.contains(this);let s=this.combine(t);return s.width+i<t.width+this.width&&s.height+i<t.height+this.height}/**
     * Test wether this bounding box intersects with another returning
     * the intersection vector that can be used to resolve the collision. If there
     * is no intersection null is returned.
     *
     * @param other  Other [[BoundingBox]] to test intersection with
     * @returns A Vector in the direction of the current BoundingBox, this <- other
     */intersect(t){let e=this.combine(t);// If the total bounding box is less than or equal the sum of the 2 bounds then there is collision
if(e.width<t.width+this.width&&e.height<t.height+this.height&&!e.dimensions.equals(t.dimensions)&&!e.dimensions.equals(this.dimensions)){// collision
let e=0;// right edge is between the other's left and right edge
/**
             *     +-this-+
             *     |      |
             *     |    +-other-+
             *     +----|-+     |
             *          |       |
             *          +-------+
             *         <---
             *          ^ overlap
             */e=this.right>=t.left&&this.right<=t.right?t.left-this.right:t.right-this.left;let i=0;return Math.abs(e)<Math.abs(i=this.top<=t.bottom&&this.top>=t.top?t.bottom-this.top:t.top-this.bottom)?new ep(e,0):new ep(0,i);// Case of total containment of one bounding box by another
}if(!(e.dimensions.equals(t.dimensions)||e.dimensions.equals(this.dimensions)))return null;{let e=0;// this is wider than the other
e=this.width-t.width>=0?this.right-t.right<=t.left-this.left?t.left-this.right:t.right-this.left:t.right-this.right<=this.left-t.left?this.left-t.right:this.right-t.left;let i=0;return Math.abs(e)<Math.abs(i=this.height-t.height>=0?this.bottom-t.bottom<=t.top-this.top?t.top-this.bottom:t.bottom-this.top:t.bottom-this.bottom<=this.top-t.top?this.top-t.bottom:this.bottom-t.top)?new ep(e,0):new ep(0,i)}}/**
     * Test whether the bounding box has intersected with another bounding box, returns the side of the current bb that intersected.
     * @param bb The other actor to test
     */intersectWithSide(t){let e=this.intersect(t);return ey.getSideFromIntersection(e)}/**
     * Draw a debug bounding box
     * @param ex
     * @param color
     */draw(t,e=ef.Yellow){t.debug.drawRect(this.left,this.top,this.width,this.height,{color:e})}}/**
 * Future is a wrapper around a native browser Promise to allow resolving/rejecting at any time
 */class eC{constructor(){this._isCompleted=!1,this.promise=new Promise((t,e)=>{this._resolver=t,this._rejecter=e})}get isCompleted(){return this._isCompleted}resolve(t){this._isCompleted||(this._isCompleted=!0,this._resolver(t))}reject(t){this._isCompleted||(this._isCompleted=!0,this._rejecter(t))}}/**
 * Find the screen position of an HTML element
 */function ex(t){let e=0,i=0,s=t=>{e+=t.offsetLeft,t.offsetParent&&s(t.offsetParent)},r=t=>{i+=t.offsetTop,t.offsetParent&&r(t.offsetParent)};return s(t),r(t),new ep(e,i)}/**
 * Add an item to an array list if it doesn't already exist. Returns true if added, false if not and already exists in the array.
 * @deprecated Will be removed in v0.26.0
 */function ew(t,e){return -1===e.indexOf(t)&&(e.push(t),!0)}/**
 * Remove an item from an list
 * @deprecated Will be removed in v0.26.0
 */function eI(t,e){let i=-1;return(i=e.indexOf(t))>-1&&(e.splice(i,1),!0)}/**
 * See if an array contains something
 */function ev(t,e){for(let i=0;i<t.length;i++)if(t[i]===e)return!0;return!1}/**
 * Used for exhaustive checks at compile time
 */function eE(t){throw Error(t)}/**
 * Create a promise that resolves after a certain number of milliseconds
 *
 * It is strongly recommended you pass the excalibur clock so delays are bound to the
 * excalibur clock which would be unaffected by stop/pause.
 * @param milliseconds
 * @param clock
 */function eB(t,e){var i;let s=new eC,r=null!==(i=null==e?void 0:e.schedule.bind(e))&&void 0!==i?i:setTimeout;return r(()=>{s.resolve()},t),s.promise}(A=q||(q={}))[A.X=12]="X",A[A.Y=13]="Y";/**
 * Excalibur Matrix helper for 4x4 matrices
 *
 * Useful for webgl 4x4 matrices
 */class eb{constructor(){/**
         *  4x4 matrix in column major order
         *
         * |         |         |          |          |
         * | ------- | ------- | -------- | -------- |
         * | data[0] | data[4] | data[8]  | data[12] |
         * | data[1] | data[5] | data[9]  | data[13] |
         * | data[2] | data[6] | data[10] | data[14] |
         * | data[3] | data[7] | data[11] | data[15] |
         *
         */this.data=new Float32Array(16),this._scaleX=1,this._scaleSignX=1,this._scaleY=1,this._scaleSignY=1}/**
     * Creates an orthographic (flat non-perspective) projection
     * https://en.wikipedia.org/wiki/Orthographic_projection
     * @param left
     * @param right
     * @param bottom
     * @param top
     * @param near
     * @param far
     */static ortho(t,e,i,s,r,n){let o=new eb;return o.data[0]=2/(e-t),o.data[1]=0,o.data[2]=0,o.data[3]=0,o.data[4]=0,o.data[5]=2/(s-i),o.data[6]=0,o.data[7]=0,o.data[8]=0,o.data[9]=0,o.data[10]=-2/(n-r),o.data[11]=0,o.data[12]=-(e+t)/(e-t),o.data[13]=-(s+i)/(s-i),o.data[14]=-(n+r)/(n-r),o.data[15]=1,o}/**
     * Creates a new Matrix with the same data as the current 4x4
     */clone(t){let e=t||new eb;return e.data[0]=this.data[0],e.data[1]=this.data[1],e.data[2]=this.data[2],e.data[3]=this.data[3],e.data[4]=this.data[4],e.data[5]=this.data[5],e.data[6]=this.data[6],e.data[7]=this.data[7],e.data[8]=this.data[8],e.data[9]=this.data[9],e.data[10]=this.data[10],e.data[11]=this.data[11],e.data[12]=this.data[12],e.data[13]=this.data[13],e.data[14]=this.data[14],e.data[15]=this.data[15],e}/**
     * Converts the current matrix into a DOMMatrix
     *
     * This is useful when working with the browser Canvas context
     * @returns {DOMMatrix} DOMMatrix
     */toDOMMatrix(){return new DOMMatrix([...this.data])}static fromFloat32Array(t){let e=new eb;return e.data=t,e}/**
     * Creates a new identity matrix (a matrix that when applied does nothing)
     */static identity(){let t=new eb;return t.data[0]=1,t.data[1]=0,t.data[2]=0,t.data[3]=0,t.data[4]=0,t.data[5]=1,t.data[6]=0,t.data[7]=0,t.data[8]=0,t.data[9]=0,t.data[10]=1,t.data[11]=0,t.data[12]=0,t.data[13]=0,t.data[14]=0,t.data[15]=1,t}/**
     * Resets the current matrix to the identity matrix, mutating it
     * @returns {Matrix} Current matrix as identity
     */reset(){return this.data[0]=1,this.data[1]=0,this.data[2]=0,this.data[3]=0,this.data[4]=0,this.data[5]=1,this.data[6]=0,this.data[7]=0,this.data[8]=0,this.data[9]=0,this.data[10]=1,this.data[11]=0,this.data[12]=0,this.data[13]=0,this.data[14]=0,this.data[15]=1,this}/**
     * Creates a brand new translation matrix at the specified 3d point
     * @param x
     * @param y
     */static translation(t,e){let i=eb.identity();return i.data[12]=t,i.data[13]=e,i}/**
     * Creates a brand new scaling matrix with the specified scaling factor
     * @param sx
     * @param sy
     */static scale(t,e){let i=eb.identity();return i.data[0]=t,i.data[5]=e,i.data[10]=1,i.data[15]=1,i}/**
     * Creates a brand new rotation matrix with the specified angle
     * @param angleRadians
     */static rotation(t){let e=eb.identity();return e.data[0]=Math.cos(t),e.data[4]=-Math.sin(t),e.data[1]=Math.sin(t),e.data[5]=Math.cos(t),e}multiply(t,e){if(t instanceof ep){let i=e||new ep(0,0),s=t.x*this.data[0]+t.y*this.data[4]+this.data[12],r=t.x*this.data[1]+t.y*this.data[5]+this.data[13];return i.x=s,i.y=r,i}{let i=e||new eb,s=this.data[0],r=this.data[1],n=this.data[2],o=this.data[3],a=this.data[4],h=this.data[5],l=this.data[6],A=this.data[7],d=this.data[8],c=this.data[9],u=this.data[10],g=this.data[11],p=this.data[12],_=this.data[13],f=this.data[14],m=this.data[15],y=t.data[0],C=t.data[1],x=t.data[2],w=t.data[3],I=t.data[4],v=t.data[5],E=t.data[6],B=t.data[7],b=t.data[8],Q=t.data[9],S=t.data[10],T=t.data[11],D=t.data[12],F=t.data[13],k=t.data[14],P=t.data[15];i.data[0]=s*y+a*C+d*x+p*w,i.data[1]=r*y+h*C+c*x+_*w,i.data[2]=n*y+l*C+u*x+f*w,i.data[3]=o*y+A*C+g*x+m*w,i.data[4]=s*I+a*v+d*E+p*B,i.data[5]=r*I+h*v+c*E+_*B,i.data[6]=n*I+l*v+u*E+f*B,i.data[7]=o*I+A*v+g*E+m*B,i.data[8]=s*b+a*Q+d*S+p*T,i.data[9]=r*b+h*Q+c*S+_*T,i.data[10]=n*b+l*Q+u*S+f*T,i.data[11]=o*b+A*Q+g*S+m*T,i.data[12]=s*D+a*F+d*k+p*P,i.data[13]=r*D+h*F+c*k+_*P,i.data[14]=n*D+l*F+u*k+f*P,i.data[15]=o*D+A*F+g*k+m*P;let R=this.getScale();return i._scaleSignX=ea(R.x)*ea(i._scaleSignX),i._scaleSignY=ea(R.y)*ea(i._scaleSignY),i}}/**
     * Applies translation to the current matrix mutating it
     * @param x
     * @param y
     */translate(t,e){let i=this.data[0],s=this.data[1],r=this.data[2],n=this.data[3],o=this.data[4],a=this.data[5],h=this.data[6],l=this.data[7],A=this.data[8],d=this.data[9],c=this.data[10],u=this.data[11],g=this.data[12],p=this.data[13],_=this.data[14],f=this.data[15];return this.data[12]=i*t+o*e+0*A+1*g,this.data[13]=s*t+a*e+0*d+1*p,this.data[14]=r*t+h*e+0*c+1*_,this.data[15]=n*t+l*e+0*u+1*f,this}setPosition(t,e){this.data[12]=t,this.data[13]=e}getPosition(){return e_(this.data[12],this.data[13])}/**
     * Applies rotation to the current matrix mutating it
     * @param angle in Radians
     */rotate(t){let e=this.data[0],i=this.data[1],s=this.data[2],r=this.data[3],n=this.data[4],o=this.data[5],a=this.data[6],h=this.data[7],l=Math.sin(t),A=Math.cos(t);return this.data[0]=A*e+l*n,this.data[1]=A*i+l*o,this.data[2]=A*s+l*a,this.data[3]=A*r+l*h,this.data[4]=A*n-l*e,this.data[5]=A*o-l*i,this.data[6]=A*a-l*s,this.data[7]=A*h-l*r,this}/**
     * Applies scaling to the current matrix mutating it
     * @param x
     * @param y
     */scale(t,e){let i=this.data[0],s=this.data[1],r=this.data[2],n=this.data[3],o=this.data[4],a=this.data[5],h=this.data[6],l=this.data[7];return this.data[0]=i*t,this.data[1]=s*t,this.data[2]=r*t,this.data[3]=n*t,this.data[4]=o*e,this.data[5]=a*e,this.data[6]=h*e,this.data[7]=l*e,this}setRotation(t){let e=this.getScale(),i=Math.sin(t),s=Math.cos(t);this.data[0]=s*e.x,this.data[1]=i*e.y,this.data[4]=-i*e.x,this.data[5]=s*e.y}getRotation(){let t=Math.atan2(this.data[1]/this.getScaleY(),this.data[0]/this.getScaleX());return el(t)}getScaleX(){// absolute scale of the matrix (we lose sign so need to add it back)
let t=e_(this.data[0],this.data[4]).size;return this._scaleSignX*t}getScaleY(){// absolute scale of the matrix (we lose sign so need to add it back)
let t=e_(this.data[1],this.data[5]).size;return this._scaleSignY*t}/**
     * Get the scale of the matrix
     */getScale(){return e_(this.getScaleX(),this.getScaleY())}setScaleX(t){if(this._scaleX===t)return;this._scaleSignX=ea(t);// negative scale acts like a 180 rotation, so flip
let e=e_(this.data[0]*this._scaleSignX,this.data[4]*this._scaleSignX).normalize();this.data[0]=e.x*t,this.data[4]=e.y*t,this._scaleX=t}setScaleY(t){if(this._scaleY===t)return;this._scaleSignY=ea(t);// negative scale acts like a 180 rotation, so flip
let e=e_(this.data[1]*this._scaleSignY,this.data[5]*this._scaleSignY).normalize();this.data[1]=e.x*t,this.data[5]=e.y*t,this._scaleY=t}setScale(t){this.setScaleX(t.x),this.setScaleY(t.y)}/**
     * Determinant of the upper left 2x2 matrix
     */getBasisDeterminant(){return this.data[0]*this.data[5]-this.data[1]*this.data[4]}/**
     * Return the affine inverse, optionally store it in a target matrix.
     *
     * It's recommended you call .reset() the target unless you know what you're doing
     * @param target
     */getAffineInverse(t){// See http://negativeprobability.blogspot.com/2011/11/affine-transformations-and-their.html
// See https://www.mathsisfun.com/algebra/matrix-inverse.html
// Since we are actually only doing 2D transformations we can use this hack
// We don't actually use the 3rd or 4th dimension
let e=this.getBasisDeterminant(),i=1/e,s=this.data[0],r=this.data[4],n=this.data[1],o=this.data[5],a=t||eb.identity();// inverts rotation and scale
a.data[0]=o*i,a.data[1]=-n*i,a.data[4]=-r*i,a.data[5]=s*i;let h=this.data[12],l=this.data[13];return(// invert translation
// transform translation into the matrix basis created by rot/scale
a.data[12]=-(h*a.data[0]+l*a.data[4]),a.data[13]=-(h*a.data[1]+l*a.data[5]),a)}isIdentity(){return 1===this.data[0]&&0===this.data[1]&&0===this.data[2]&&0===this.data[3]&&0===this.data[4]&&1===this.data[5]&&0===this.data[6]&&0===this.data[7]&&0===this.data[8]&&0===this.data[9]&&1===this.data[10]&&0===this.data[11]&&0===this.data[12]&&0===this.data[13]&&0===this.data[14]&&1===this.data[15]}toString(){return`
[${this.data[0]} ${this.data[4]} ${this.data[8]} ${this.data[12]}]
[${this.data[1]} ${this.data[5]} ${this.data[9]} ${this.data[13]}]
[${this.data[2]} ${this.data[6]} ${this.data[10]} ${this.data[14]}]
[${this.data[3]} ${this.data[7]} ${this.data[11]} ${this.data[15]}]
`}}class eQ{constructor(){/**
         * |         |         |          |
         * | ------- | ------- | -------- |
         * | data[0] | data[2] | data[4]  |
         * | data[1] | data[3] | data[5]  |
         * |   0     |    0    |    1     |
         */this.data=new Float64Array(6),this._scale=new Float64Array([1,1]),this._scaleSignX=1,this._scaleSignY=1}/**
     * Converts the current matrix into a DOMMatrix
     *
     * This is useful when working with the browser Canvas context
     * @returns {DOMMatrix} DOMMatrix
     */toDOMMatrix(){return new DOMMatrix([...this.data])}static identity(){let t=new eQ;return t.data[0]=1,t.data[1]=0,t.data[2]=0,t.data[3]=1,t.data[4]=0,t.data[5]=0,t}/**
     * Creates a brand new translation matrix at the specified 3d point
     * @param x
     * @param y
     */static translation(t,e){let i=eQ.identity();return i.data[4]=t,i.data[5]=e,i}/**
     * Creates a brand new scaling matrix with the specified scaling factor
     * @param sx
     * @param sy
     */static scale(t,e){let i=eQ.identity();return i.data[0]=t,i.data[3]=e,i._scale[0]=t,i._scale[1]=e,i}/**
     * Creates a brand new rotation matrix with the specified angle
     * @param angleRadians
     */static rotation(t){let e=eQ.identity();return e.data[0]=Math.cos(t),e.data[1]=Math.sin(t),e.data[2]=-Math.sin(t),e.data[3]=Math.cos(t),e}setPosition(t,e){this.data[4]=t,this.data[5]=e}getPosition(){return e_(this.data[4],this.data[5])}/**
     * Applies rotation to the current matrix mutating it
     * @param angle in Radians
     */rotate(t){let e=this.data[0],i=this.data[1],s=this.data[2],r=this.data[3],n=Math.sin(t),o=Math.cos(t);return this.data[0]=o*e+n*s,this.data[1]=o*i+n*r,this.data[2]=o*s-n*e,this.data[3]=o*r-n*i,this}/**
     * Applies translation to the current matrix mutating it
     * @param x
     * @param y
     */translate(t,e){let i=this.data[0],s=this.data[1],r=this.data[2],n=this.data[3],o=this.data[4],a=this.data[5];return(// const a33 = 1;
// Doesn't change z
this.data[4]=i*t+r*e+o,this.data[5]=s*t+n*e+a,this)}/**
     * Applies scaling to the current matrix mutating it
     * @param x
     * @param y
     */scale(t,e){let i=this.data[0],s=this.data[1],r=this.data[2],n=this.data[3];return this.data[0]=i*t,this.data[1]=s*t,this.data[2]=r*e,this.data[3]=n*e,this._scale[0]=t,this._scale[1]=e,this}determinant(){return this.data[0]*this.data[3]-this.data[1]*this.data[2]}/**
     * Return the affine inverse, optionally store it in a target matrix.
     *
     * It's recommended you call .reset() the target unless you know what you're doing
     * @param target
     */inverse(t){// See http://negativeprobability.blogspot.com/2011/11/affine-transformations-and-their.html
// See https://www.mathsisfun.com/algebra/matrix-inverse.html
// Since we are actually only doing 2D transformations we can use this hack
// We don't actually use the 3rd or 4th dimension
let e=this.determinant(),i=1/e,s=this.data[0],r=this.data[2],n=this.data[1],o=this.data[3],a=t||eQ.identity();// inverts rotation and scale
a.data[0]=o*i,a.data[1]=-n*i,a.data[2]=-r*i,a.data[3]=s*i;let h=this.data[4],l=this.data[5];return(// invert translation
// transform translation into the matrix basis created by rot/scale
a.data[4]=-(h*a.data[0]+l*a.data[2]),a.data[5]=-(h*a.data[1]+l*a.data[3]),a)}multiply(t,e){if(t instanceof ep){let i=e||new ep(0,0),s=t.x*this.data[0]+t.y*this.data[2]+this.data[4],r=t.x*this.data[1]+t.y*this.data[3]+this.data[5];return i.x=s,i.y=r,i}{let i=e||new eQ,s=this.data[0],r=this.data[1],n=this.data[2],o=this.data[3],a=this.data[4],h=this.data[5],l=t.data[0],A=t.data[1],d=t.data[2],c=t.data[3],u=t.data[4],g=t.data[5];//  const b33 = 1;
i.data[0]=s*l+n*A,i.data[1]=r*l+o*A,i.data[2]=s*d+n*c,i.data[3]=r*d+o*c,i.data[4]=s*u+n*g+a,i.data[5]=r*u+o*g+h;let p=this.getScale();return i._scaleSignX=ea(p.x)*ea(i._scaleSignX),i._scaleSignY=ea(p.y)*ea(i._scaleSignY),i}}to4x4(){let t=new eb;return t.data[0]=this.data[0],t.data[1]=this.data[1],t.data[2]=0,t.data[3]=0,t.data[4]=this.data[2],t.data[5]=this.data[3],t.data[6]=0,t.data[7]=0,t.data[8]=0,t.data[9]=0,t.data[10]=1,t.data[11]=0,t.data[12]=this.data[4],t.data[13]=this.data[5],t.data[14]=0,t.data[15]=1,t}setRotation(t){let e=this.getScale(),i=Math.sin(t),s=Math.cos(t);this.data[0]=s*e.x,this.data[1]=i*e.y,this.data[2]=-i*e.x,this.data[3]=s*e.y}getRotation(){let t=Math.atan2(this.data[1]/this.getScaleY(),this.data[0]/this.getScaleX());return el(t)}getScaleX(){// absolute scale of the matrix (we lose sign so need to add it back)
let t=e_(this.data[0],this.data[2]).distance();return this._scaleSignX*t}getScaleY(){// absolute scale of the matrix (we lose sign so need to add it back)
let t=e_(this.data[1],this.data[3]).distance();return this._scaleSignY*t}/**
     * Get the scale of the matrix
     */getScale(){return e_(this.getScaleX(),this.getScaleY())}setScaleX(t){if(t===this._scale[0])return;this._scaleSignX=ea(t);// negative scale acts like a 180 rotation, so flip
let e=e_(this.data[0]*this._scaleSignX,this.data[2]*this._scaleSignX).normalize();this.data[0]=e.x*t,this.data[2]=e.y*t,this._scale[0]=t}setScaleY(t){if(t===this._scale[1])return;this._scaleSignY=ea(t);// negative scale acts like a 180 rotation, so flip
let e=e_(this.data[1]*this._scaleSignY,this.data[3]*this._scaleSignY).normalize();this.data[1]=e.x*t,this.data[3]=e.y*t,this._scale[1]=t}setScale(t){this.setScaleX(t.x),this.setScaleY(t.y)}isIdentity(){return 1===this.data[0]&&0===this.data[1]&&0===this.data[2]&&1===this.data[3]&&0===this.data[4]&&0===this.data[5]}/**
     * Resets the current matrix to the identity matrix, mutating it
     * @returns {AffineMatrix} Current matrix as identity
     */reset(){return this.data[0]=1,this.data[1]=0,this.data[2]=0,this.data[3]=1,this.data[4]=0,this.data[5]=0,this}/**
     * Creates a new Matrix with the same data as the current 4x4
     */clone(t){let e=t||new eQ;return e.data[0]=this.data[0],e.data[1]=this.data[1],e.data[2]=this.data[2],e.data[3]=this.data[3],e.data[4]=this.data[4],e.data[5]=this.data[5],e}toString(){return`
[${this.data[0]} ${this.data[2]} ${this.data[4]}]
[${this.data[1]} ${this.data[3]} ${this.data[5]}]
[0 0 1]
`}}class eS{constructor(){this._transforms=[],this._currentTransform=eQ.identity()}save(){this._transforms.push(this._currentTransform),this._currentTransform=this._currentTransform.clone()}restore(){this._currentTransform=this._transforms.pop()}translate(t,e){return this._currentTransform.translate(t,e)}rotate(t){return this._currentTransform.rotate(t)}scale(t,e){return this._currentTransform.scale(t,e)}set current(t){this._currentTransform=t}get current(){return this._currentTransform}}class eT{constructor(){this._states=[],this._currentState=this._getDefaultState()}_getDefaultState(){return{opacity:1,z:0,tint:ef.White,material:null}}_cloneState(){return{opacity:this._currentState.opacity,z:this._currentState.z,tint:this._currentState.tint.clone(),material:this._currentState.material// TODO is this going to cause problems when cloning
}}save(){this._states.push(this._currentState),this._currentState=this._cloneState()}restore(){this._currentState=this._states.pop()}get current(){return this._currentState}set current(t){this._currentState=t}}let eD={Complete:"complete",Load:"load",LoadStart:"loadstart",Progress:"progress",Error:"error"};/**
 * The [[Resource]] type allows games built in Excalibur to load generic resources.
 * For any type of remote resource it is recommended to use [[Resource]] for preloading.
 */class eF{/**
     * @param path          Path to the remote resource
     * @param responseType  The type to expect as a response: "" | "arraybuffer" | "blob" | "document" | "json" | "text";
     * @param bustCache     Whether or not to cache-bust requests
     */constructor(t,e,i=!1){this.path=t,this.responseType=e,this.bustCache=i,this.data=null,this.logger=t9.getInstance(),this.events=new tE}/**
     * Returns true if the Resource is completely loaded and is ready
     * to be drawn.
     */isLoaded(){return null!==this.data}_cacheBust(t){return/\?\w*=\w*/.test(t)?t+="&__="+Date.now():t+="?__="+Date.now(),t}/**
     * Begin loading the resource and returns a promise to be resolved on completion
     */load(){return new Promise((t,e)=>{// Exit early if we already have data
if(null!==this.data){this.logger.debug("Already have data for resource",this.path),this.events.emit("complete",this.data),t(this.data);return}let i=new XMLHttpRequest;i.open("GET",this.bustCache?this._cacheBust(this.path):this.path,!0),i.responseType=this.responseType,i.addEventListener("loadstart",t=>this.events.emit("loadstart",t)),i.addEventListener("progress",t=>this.events.emit("progress",t)),i.addEventListener("error",t=>this.events.emit("error",t)),i.addEventListener("load",t=>this.events.emit("load",t)),i.addEventListener("load",()=>{// XHR on file:// success status is 0, such as with PhantomJS
if(0!==i.status&&200!==i.status){this.logger.error("Failed to load resource ",this.path," server responded with error code",i.status),this.events.emit("error",i.response),e(Error(i.statusText));return}this.data=i.response,this.events.emit("complete",this.data),this.logger.debug("Completed loading resource",this.path),t(this.data)}),i.send()})}}/**
 * Watch an object with a proxy, only fires if property value is different
 */function ek(t,e){return t&&void 0===t.__isProxy?new Proxy(t,{set:(t,i,s)=>(t[i]!==s&&(t[i]=s,"string"==typeof i&&"_"!==i[0]&&e(t)),!0),get:(t,e)=>"__isProxy"===e||t[e]}):t}/**
 * Watch an object with a proxy, fires change on any property value change
 */function eP(t,e){return t&&void 0===t.__isProxy?new Proxy(t,{set:(t,i,s)=>(// The default behavior to store the value
    t[i]=s,"string"==typeof i&&"_"!==i[0]&&e(t),!0),get:(t,e)=>"__isProxy"===e||t[e]}):t}/**
 * A Graphic is the base Excalibur primitive for something that can be drawn to the [[ExcaliburGraphicsContext]].
 * [[Sprite]], [[Animation]], [[GraphicsGroup]], [[Canvas]], [[Rectangle]], [[Circle]], and [[Polygon]] all derive from the
 * [[Graphic]] abstract class.
 *
 * Implementors of a Graphic must override the abstract [[Graphic._drawImage]] method to render an image to the graphics context. Graphic
 * handles all the position, rotation, and scale transformations in [[Graphic._preDraw]] and [[Graphic._postDraw]]
 */class eR{isStale(){return this._transformStale}/**
     * Gets or sets the flipHorizontal, which will flip the graphic horizontally (across the y axis)
     */get flipHorizontal(){return this._flipHorizontal}set flipHorizontal(t){this._flipHorizontal=t,this._transformStale=!0}/**
     * Gets or sets the flipVertical, which will flip the graphic vertically (across the x axis)
     */get flipVertical(){return this._flipVertical}set flipVertical(t){this._flipVertical=t,this._transformStale=!0}/**
     * Gets or sets the rotation of the graphic
     */get rotation(){return this._rotation}set rotation(t){this._rotation=t,this._transformStale=!0}/**
     * Gets or sets the scale of the graphic, this affects the width and
     */get scale(){return this._scale}set scale(t){this._scale=ek(t,()=>{this._transformStale=!0}),this._transformStale=!0}/**
     * Gets or sets the origin of the graphic, if not set the center of the graphic is the origin
     */get origin(){return this._origin}set origin(t){this._origin=ek(t,()=>{this._transformStale=!0}),this._transformStale=!0}constructor(t){var e,i,s,r,n,o;this.id=eR._ID++,this.transform=eQ.identity(),this.tint=null,this._transformStale=!0,/**
         * Gets or sets wether to show debug information about the graphic
         */this.showDebug=!1,this._flipHorizontal=!1,this._flipVertical=!1,this._rotation=0,/**
         * Gets or sets the opacity of the graphic, 0 is transparent, 1 is solid (opaque).
         */this.opacity=1,this._scale=ep.One,this._origin=null,this._width=0,this._height=0,t&&(this.origin=null!==(e=t.origin)&&void 0!==e?e:this.origin,this.flipHorizontal=null!==(i=t.flipHorizontal)&&void 0!==i?i:this.flipHorizontal,this.flipVertical=null!==(s=t.flipVertical)&&void 0!==s?s:this.flipVertical,this.rotation=null!==(r=t.rotation)&&void 0!==r?r:this.rotation,this.opacity=null!==(n=t.opacity)&&void 0!==n?n:this.opacity,this.scale=null!==(o=t.scale)&&void 0!==o?o:this.scale)}cloneGraphicOptions(){return{origin:this.origin?this.origin.clone():null,flipHorizontal:this.flipHorizontal,flipVertical:this.flipVertical,rotation:this.rotation,opacity:this.opacity,scale:this.scale?this.scale.clone():null}}/**
     * Gets or sets the width of the graphic (always positive)
     */get width(){return Math.abs(this._width*this.scale.x)}/**
     * Gets or sets the height of the graphic (always positive)
     */get height(){return Math.abs(this._height*this.scale.y)}set width(t){this._width=t,this._transformStale=!0}set height(t){this._height=t,this._transformStale=!0}/**
     * Gets a copy of the bounds in pixels occupied by the graphic on the the screen. This includes scale.
     */get localBounds(){return ey.fromDimension(this.width,this.height,ep.Zero)}/**
     * Draw the whole graphic to the context including transform
     * @param ex The excalibur graphics context
     * @param x
     * @param y
     */draw(t,e,i){this._preDraw(t,e,i),this._drawImage(t,0,0),this._postDraw(t)}/**
     * Apply affine transformations to the graphics context to manipulate the graphic before [[Graphic._drawImage]]
     * @param ex
     * @param x
     * @param y
     */_preDraw(t,e,i){t.save(),t.translate(e,i),this._transformStale&&(this.transform.reset(),this.transform.scale(Math.abs(this.scale.x),Math.abs(this.scale.y)),this._rotate(this.transform),this._flip(this.transform),this._transformStale=!1),t.multiply(this.transform),// it is important to multiply alphas so graphics respect the current context
t.opacity=t.opacity*this.opacity,this.tint&&(t.tint=this.tint)}_rotate(t){var e;let i=this.scale.x>0?1:-1,s=this.scale.y>0?1:-1,r=null!==(e=this.origin)&&void 0!==e?e:e_(this.width/2,this.height/2);t.translate(r.x,r.y),t.rotate(this.rotation),// This is for handling direction changes 1 or -1, that way we don't have mismatched translates()
t.scale(i,s),t.translate(-r.x,-r.y)}_flip(t){this.flipHorizontal&&(t.translate(this.width/this.scale.x,0),t.scale(-1,1)),this.flipVertical&&(t.translate(0,this.height/this.scale.y),t.scale(1,-1))}/**
     * Apply any additional work after [[Graphic._drawImage]] and restore the context state.
     * @param ex
     */_postDraw(t){this.showDebug&&t.debug.drawRect(0,0,this.width,this.height),t.restore()}}eR._ID=0;class eM extends eR{static from(t){return new eM({image:t})}constructor(t){var e,i;super(t),this._logger=t9.getInstance(),this._dirty=!0,this._logNotLoadedWarning=!1,this.image=t.image;let{width:s,height:r}=t;this.sourceView=null!==(e=t.sourceView)&&void 0!==e?e:{x:0,y:0,width:null!=s?s:0,height:null!=r?r:0},this.destSize=null!==(i=t.destSize)&&void 0!==i?i:{width:null!=s?s:0,height:null!=r?r:0},this._updateSpriteDimensions(),this.image.ready.then(()=>{this._updateSpriteDimensions()})}get width(){return Math.abs(this.destSize.width*this.scale.x)}get height(){return Math.abs(this.destSize.height*this.scale.y)}set width(t){t/=Math.abs(this.scale.x),this.destSize.width=t,super.width=Math.ceil(this.destSize.width)}set height(t){t/=Math.abs(this.scale.y),this.destSize.height=t,super.height=Math.ceil(this.destSize.height)}_updateSpriteDimensions(){var t,e,i,s,r,n;let{width:o,height:a}=this.image;// This code uses || to avoid 0's
// If the source is not specified, use the native dimension
this.sourceView.width=(null===(t=this.sourceView)||void 0===t?void 0:t.width)||o,this.sourceView.height=(null===(e=this.sourceView)||void 0===e?void 0:e.height)||a,// If the destination is not specified, use the source if specified, then native
this.destSize.width=(null===(i=this.destSize)||void 0===i?void 0:i.width)||(null===(s=this.sourceView)||void 0===s?void 0:s.width)||o,this.destSize.height=(null===(r=this.destSize)||void 0===r?void 0:r.height)||(null===(n=this.sourceView)||void 0===n?void 0:n.height)||a,this.width=Math.ceil(this.destSize.width)*this.scale.x,this.height=Math.ceil(this.destSize.height)*this.scale.y}_preDraw(t,e,i){this.image.isLoaded()&&this._dirty&&(this._dirty=!1,this._updateSpriteDimensions()),super._preDraw(t,e,i)}_drawImage(t,e,i){this.image.isLoaded()?t.drawImage(this.image.image,this.sourceView.x,this.sourceView.y,this.sourceView.width,this.sourceView.height,e,i,this.destSize.width,this.destSize.height):(this._logNotLoadedWarning||this._logger.warn(`ImageSource ${this.image.path} is not yet loaded and won't be drawn. Please call .load() or include in a Loader.

Read https://excaliburjs.com/docs/imagesource for more information.`),this._logNotLoadedWarning=!0)}clone(){return new eM({image:this.image,sourceView:{...this.sourceView},destSize:{...this.destSize},...this.cloneGraphicOptions()})}}/**
     * Pixel is useful when you do not want smoothing aka antialiasing applied to your graphics.
     *
     * Useful for Pixel art aesthetics.
     */(d=V||(V={})).Pixel="Pixel",/**
     * Blended is useful when you have high resolution artwork and would like it blended and smoothed
     */d.Blended="Blended";/**
 * Manages loading image sources into webgl textures, a unique id is associated with all sources
 */class eL{constructor(t){this._textureMap=new Map,this._gl=t,eL._MAX_TEXTURE_SIZE=t.getParameter(t.MAX_TEXTURE_SIZE)}/**
     * Get the WebGL Texture from a source image
     * @param image
     */get(t){return this._textureMap.get(t)}/**
     * Returns whether a source image has been loaded as a texture
     * @param image
     */has(t){return this._textureMap.has(t)}/**
     * Loads a graphic into webgl and returns it's texture info, a webgl context must be previously registered
     * @param image Source graphic
     * @param filtering {ImageFiltering} The ImageFiltering mode to apply to the loaded texture
     * @param forceUpdate Optionally force a texture to be reloaded, useful if the source graphic has changed
     */load(t,e,i=!1){// Ignore loading if webgl is not registered
let s=this._gl;if(!s)return null;let r=null;// Update existing webgl texture and return early
if(this.has(t)&&(r=this.get(t)),r)return i&&(s.bindTexture(s.TEXTURE_2D,r),s.texImage2D(s.TEXTURE_2D,0,s.RGBA,s.RGBA,s.UNSIGNED_BYTE,t)),r;// No texture exists create a new one
r=s.createTexture(),eL.checkImageSizeSupportedAndLog(t),s.bindTexture(s.TEXTURE_2D,r),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE);// NEAREST for pixel art, LINEAR for hi-res
let n=null!=e?e:eL.filtering;return s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,n===V.Pixel?s.NEAREST:s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,n===V.Pixel?s.NEAREST:s.LINEAR),s.texImage2D(s.TEXTURE_2D,0,s.RGBA,s.RGBA,s.UNSIGNED_BYTE,t),this._textureMap.set(t,r),r}delete(t){// Ignore loading if webgl is not registered
let e=this._gl;if(!e)return null;let i=null;this.has(t)&&(i=this.get(t),e.deleteTexture(i))}/**
     * Takes an image and returns if it meets size criteria for hardware
     * @param image
     * @returns if the image will be supported at runtime
     */static checkImageSizeSupportedAndLog(t){var e;let i=null!==(e=t.dataset.originalSrc)&&void 0!==e?e:"internal canvas bitmap";return t.width>eL._MAX_TEXTURE_SIZE||t.height>eL._MAX_TEXTURE_SIZE?(eL._LOGGER.error(`The image [${i}] provided to Excalibur is too large for the device's maximum texture size of (${eL._MAX_TEXTURE_SIZE}x${eL._MAX_TEXTURE_SIZE}) please resize to an image for excalibur to render properly.

Images will likely render as black rectangles.

Read more here: https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices#understand_system_limits`),!1):((t.width>4096||t.height>4096)&&eL._LOGGER.warn(`The image [${i}] provided to excalibur is too large may not work on all mobile devices, it is recommended you resize images to a maximum (4096x4096).

Images will likely render as black rectangles on some mobile platforms.

Read more here: https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices#understand_system_limits`),!0)}}eL._LOGGER=t9.getInstance(),/**
 * Sets the default filtering for the Excalibur texture loader, default [[ImageFiltering.Blended]]
 */eL.filtering=V.Blended,eL._MAX_TEXTURE_SIZE=4096;class eN{/**
     * The original size of the source image in pixels
     */get width(){return this.image.naturalWidth}/**
     * The original height of the source image in pixels
     */get height(){return this.image.naturalHeight}/**
     * Returns true if the Texture is completely loaded and is ready
     * to be drawn.
     */isLoaded(){return this._src||(this._src=this.data.src),!!this._src}get image(){return this.data}/**
     * The path to the image, can also be a data url like 'data:image/'
     * @param path {string} Path to the image resource relative from the HTML document hosting the game, or absolute
     * @param bustCache {boolean} Should excalibur add a cache busting querystring?
     * @param filtering {ImageFiltering} Optionally override the image filtering set by [[EngineOptions.antialiasing]]
     */constructor(t,e=!1,i){this.path=t,this._logger=t9.getInstance(),/**
         * Access to the underlying html image element
         */this.data=new Image,this._readyFuture=new eC,/**
         * Promise the resolves when the image is loaded and ready for use, does not initiate loading
         */this.ready=this._readyFuture.promise,this._resource=new eF(t,"blob",e),this.filtering=i,(t.endsWith(".svg")||t.endsWith(".gif"))&&this._logger.warn(`Image type is not fully supported, you may have mixed results ${t}. Fully supported: jpg, bmp, and png`)}/**
     * Should excalibur add a cache busting querystring? By default false.
     * Must be set before loading
     */get bustCache(){return this._resource.bustCache}set bustCache(t){this._resource.bustCache=t}/**
     * Begins loading the image and returns a promise that resolves when the image is loaded
     */async load(){if(this.isLoaded())return this.data;try{let t;if(this.path.includes("data:image/"))t=this.path;else{let e=await this._resource.load();t=URL.createObjectURL(e)}// Decode the image
let e=new Image,i=new eC;e.onload=()=>i.resolve(),e.src=t,e.setAttribute("data-original-src",this.path),await i.promise,// Set results
// We defer loading the texture into webgl until the first draw that way we avoid a singleton
// and for the multi-engine case the texture needs to be created in EACH webgl context to work
// See image-renderer.ts draw()
this.data=e,// emit warning if potentially too big
eL.checkImageSizeSupportedAndLog(this.data)}catch(t){throw`Error loading ImageSource from path '${this.path}' with error [${t.message}]`}return(// Do a bad thing to pass the filtering as an attribute
this.data.setAttribute("filtering",this.filtering),// todo emit complete
this._readyFuture.resolve(this.data),this.data)}/**
     * Build a sprite from this ImageSource
     */toSprite(){return eM.from(this)}/**
     * Unload images from memory
     */unload(){this.data=new Image}}/**
 * Represents a collection of sprites from a source image with some organization in a grid
 */class eU{/**
     * Build a new sprite sheet from a list of sprites
     *
     * Use [[SpriteSheet.fromImageSource]] to create a SpriteSheet from an [[ImageSource]] organized in a grid
     * @param options
     */constructor(t){this._logger=t9.getInstance(),this.sprites=[];let{sprites:e,rows:i,columns:s}=t;this.sprites=e,this.rows=null!=i?i:1,this.columns=null!=s?s:this.sprites.length}/**
     * Find a sprite by their x/y position in the SpriteSheet, for example `getSprite(0, 0)` is the [[Sprite]] in the top-left
     * @param x
     * @param y
     */getSprite(t,e){if(t>=this.columns||t<0)return this._logger.warn(`No sprite exists in the SpriteSheet at (${t}, ${e}), x: ${t} should be between 0 and ${this.columns-1}`),null;if(e>=this.rows||e<0)return this._logger.warn(`No sprite exists in the SpriteSheet at (${t}, ${e}), y: ${e} should be between 0 and ${this.rows-1}`),null;let i=t+e*this.columns;return this.sprites[i]}/**
     * Create a sprite sheet from a sparse set of [[SourceView]] rectangles
     * @param options
     */static fromImageSourceWithSourceViews(t){let e=t.sourceViews.map(e=>new eM({image:t.image,sourceView:e}));return new eU({sprites:e})}/**
     * Create a SpriteSheet from an [[ImageSource]] organized in a grid
     *
     * Example:
     * ```
     * const spriteSheet = SpriteSheet.fromImageSource({
     *   image: imageSource,
     *   grid: {
     *     rows: 5,
     *     columns: 2,
     *     spriteWidth: 32, // pixels
     *     spriteHeight: 32 // pixels
     *   },
     *   // Optionally specify spacing
     *   spacing: {
     *     // pixels from the top left to start the sprite parsing
     *     originOffset: {
     *       x: 5,
     *       y: 5
     *     },
     *     // pixels between each sprite while parsing
     *     margin: {
     *       x: 1,
     *       y: 1
     *     }
     *   }
     * })
     * ```
     *
     * @param options
     */static fromImageSource(t){var e;let i=[];t.spacing=null!==(e=t.spacing)&&void 0!==e?e:{};let{image:s,grid:{rows:r,columns:n,spriteWidth:o,spriteHeight:a},spacing:{originOffset:h,margin:l}}=t,A={x:0,y:0,...h},d={x:0,y:0,...l};for(let t=0;t<n;t++)for(let e=0;e<r;e++)i[t+e*n]=new eM({image:s,sourceView:{x:t*o+d.x*t+A.x,y:e*a+d.y*e+A.y,width:o,height:a},destSize:{height:a,width:o}});return new eU({sprites:i,rows:r,columns:n})}clone(){return new eU({sprites:this.sprites.map(t=>t.clone()),rows:this.rows,columns:this.columns})}}class eG extends eR{constructor(t){super(t),this._text="",this.alphabet="",this.shadow=null,this.caseInsensitive=!1,this.spacing=0,this._logger=t9.getInstance(),this._alreadyWarnedAlphabet=!1,this._alreadyWarnedSpriteSheet=!1;let{alphabet:e,spriteSheet:i,caseInsensitive:s,spacing:r,shadow:n}=t;this.alphabet=e,this.spriteSheet=i,this.caseInsensitive=null!=s?s:this.caseInsensitive,this.spacing=null!=r?r:this.spacing,this.shadow=null!=n?n:this.shadow}_getCharacterSprites(t){let e=[],i=this.caseInsensitive?t.toLocaleLowerCase():t,s=this.caseInsensitive?this.alphabet.toLocaleLowerCase():this.alphabet;// for each letter in text
for(let t=0;t<i.length;t++){// find the sprite index in alphabet , if there is an error pick the first
let r=i[t],n=s.indexOf(r);-1!==n||(n=0,this._alreadyWarnedAlphabet||(this._logger.warn(`SpriteFont - Cannot find letter '${r}' in configured alphabet '${s}'.`),this._logger.warn("There maybe be more issues in the SpriteFont configuration. No additional warnings will be logged."),this._alreadyWarnedAlphabet=!0));let o=this.spriteSheet.sprites[n];o?e.push(o):this._alreadyWarnedSpriteSheet||(this._logger.warn(`SpriteFont - Cannot find sprite for '${r}' at index '${n}' in configured SpriteSheet`),this._logger.warn("There maybe be more issues in the SpriteFont configuration. No additional warnings will be logged."),this._alreadyWarnedSpriteSheet=!0)}return e}measureText(t,e){let i=this._getLinesFromText(t,e),s=i.reduce((t,e)=>t.length>e.length?t:e),r=this._getCharacterSprites(s),n=0,o=0;for(let t of r)n+=t.width+this.spacing,o=Math.max(o,t.height);return ey.fromDimension(n,o*i.length,ep.Zero)}_drawImage(t,e,i,s){let r=0,n=0,o=0,a=this._getLinesFromText(this._text,s);for(let s of a){for(let a of this._getCharacterSprites(s))// draw it in the right spot and increase the cursor by sprite width
a.draw(t,e+r,i+n),r+=a.width+this.spacing,o=Math.max(o,a.height);r=0,n+=o}}render(t,e,i,s,r,n){// SpriteFont doesn't support _color, yet...
this._text=e;let o=this.measureText(e,n);this.width=o.width,this.height=o.height,this.shadow&&(t.save(),t.translate(this.shadow.offset.x,this.shadow.offset.y),this._preDraw(t,s,r),this._drawImage(t,0,0,n),this._postDraw(t),t.restore()),this._preDraw(t,s,r),this._drawImage(t,0,0,n),this._postDraw(t)}clone(){return new eG({alphabet:this.alphabet,spriteSheet:this.spriteSheet,spacing:this.spacing})}_getLinesFromText(t,e){if(this._cachedText===t&&this._cachedRenderWidth===e)return this._cachedLines;let i=t.split("\n");if(null==e)return i;// If the current line goes past the maxWidth, append a new line without modifying the underlying text.
for(let t=0;t<i.length;t++){let s=i[t],r="";// Note: we subtract the spacing to counter the initial padding on the left side.
if(this.measureText(s).width>e){for(;this.measureText(s).width>e;)r=s[s.length-1]+r,s=s.slice(0,-1);// Update the array with our new values
i[t]=s,i[t+1]=r}}return this._cachedText=t,this._cachedLines=i,this._cachedRenderWidth=e,i}}/**
 * Internal debugtext helper
 */class ez{constructor(){/**
         * base64 font
         */this.fontSheet="data:image/png;base64,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",this.size=16,this.load()}load(){return this._imageSource=new eN(this.fontSheet),this._imageSource.load().then(()=>{this._spriteSheet=eU.fromImageSource({image:this._imageSource,grid:{rows:3,columns:16,spriteWidth:16,spriteHeight:16}}),this._spriteFont=new eG({alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ,!'&.\"?-()+ ",caseInsensitive:!0,spriteSheet:this._spriteSheet,spacing:-6})})}/**
     * Writes debug text using the built in sprint font
     * @param ctx
     * @param text
     * @param pos
     */write(t,e,i){this._imageSource.isLoaded()&&this._spriteFont.render(t,e,null,i.x,i.y)}}class eO{constructor(t,e){this._gl=t,this._texture=e}use(){let t=this._gl;t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this._texture)}disable(){let t=this._gl;t.bindTexture(t.TEXTURE_2D,null)}}class eH{constructor(t){this.width=t.width,this.height=t.height,this._gl=t.gl,this._setupFramebuffer()}setResolution(t,e){let i=this._gl;this.width=t,this.height=e,i.bindTexture(i.TEXTURE_2D,this._frameTexture),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,null)}get frameBuffer(){return this._frameBuffer}get frameTexture(){return this._frameTexture}_setupFramebuffer(){// Allocates frame buffer
let t=this._gl;this._frameTexture=t.createTexture(),t.bindTexture(t.TEXTURE_2D,this._frameTexture),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,this.width,this.height,0,t.RGBA,t.UNSIGNED_BYTE,null),// set the filtering so we don't need mips
t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE);// attach the texture as the first color attachment
let e=t.COLOR_ATTACHMENT0;// After this bind all draw calls will draw to this framebuffer texture
this._frameBuffer=t.createFramebuffer(),t.bindFramebuffer(t.FRAMEBUFFER,this._frameBuffer),t.framebufferTexture2D(t.FRAMEBUFFER,e,t.TEXTURE_2D,this._frameTexture,0),// Reset after initialized
this.disable()}toRenderSource(){let t=new eO(this._gl,this._frameTexture);return t}/**
     * When called, all drawing gets redirected to this render target
     */use(){let t=this._gl;t.bindFramebuffer(t.FRAMEBUFFER,this._frameBuffer),// very important to set the viewport to the size of the framebuffer texture
t.viewport(0,0,this.width,this.height)}/**
     * When called, all drawing is sent back to the canvas
     */disable(){let t=this._gl;// passing null switches rendering back to the canvas
t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,null)}}/**
 * Return the size of the GlType in bytes
 * @param gl
 * @param type
 */function eq(t,e){switch(e){case t.FLOAT:return 4;case t.SHORT:case t.UNSIGNED_SHORT:return 2;case t.BYTE:case t.UNSIGNED_BYTE:default:return 1}}/**
 * Based on the type return the number of attribute components
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/vertexAttribPointer
 * @param gl
 * @param type
 */function eV(t,e){switch(e){case t.LOW_FLOAT:case t.HIGH_FLOAT:case t.FLOAT:return 1;case t.FLOAT_VEC2:return 2;case t.FLOAT_VEC3:return 3;case t.FLOAT_VEC4:return 4;case t.BYTE:case t.UNSIGNED_BYTE:case t.UNSIGNED_SHORT:case t.SHORT:default:return 1}}/**
 * Based on the attribute return the corresponding supported attrib pointer type
 * https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/vertexAttribPointer
 *
 * @param gl
 * @param type
 */function eY(t,e){switch(e){case t.LOW_FLOAT:case t.HIGH_FLOAT:case t.FLOAT:case t.FLOAT_VEC2:case t.FLOAT_VEC3:case t.FLOAT_VEC4:return t.FLOAT;case t.BYTE:return t.BYTE;case t.UNSIGNED_BYTE:return t.UNSIGNED_BYTE;case t.SHORT:return t.SHORT;case t.UNSIGNED_SHORT:return t.UNSIGNED_SHORT;default:return t.FLOAT}}class ej{get compiled(){return this._compiled}/**
     * Create a shader program in excalibur
     * @param options specify shader vertex and fragment source
     */constructor(t){this._logger=t9.getInstance(),this.uniforms={},this.attributes={},this._compiled=!1;let{gl:e,vertexSource:i,fragmentSource:s}=t;this._gl=e,this.vertexSource=i,this.fragmentSource=s}/**
     * Binds the shader program
     */use(){let t=this._gl;t.useProgram(this.program),ej._ACTIVE_SHADER_INSTANCE=this}isCurrentlyBound(){return ej._ACTIVE_SHADER_INSTANCE===this}/**
     * Compile the current shader against a webgl context
     */compile(){let t=this._gl,e=this._compileShader(t,this.vertexSource,t.VERTEX_SHADER),i=this._compileShader(t,this.fragmentSource,t.FRAGMENT_SHADER);this.program=this._createProgram(t,e,i);let s=this.getAttributes();for(let t of s)this.attributes[t.name]=t;let r=this.getUniforms();for(let t of r)this.uniforms[t.name]=t;return this._compiled=!0,this.program}getUniforms(){let t=this._gl,e=t.getProgramParameter(this.program,t.ACTIVE_UNIFORMS),i=[];for(let s=0;s<e;s++){let e=t.getActiveUniform(this.program,s),r=t.getUniformLocation(this.program,e.name);i.push({name:e.name,glType:e.type,location:r})}return i}getAttributes(){let t=this._gl,e=t.getProgramParameter(this.program,t.ACTIVE_ATTRIBUTES),i=[];for(let s=0;s<e;s++){let e=t.getActiveAttrib(this.program,s),r=t.getAttribLocation(this.program,e.name);i.push({name:e.name,glType:eY(t,e.type),size:eV(t,e.type),location:r,normalized:!1})}return i}/**
     * Set a texture in a gpu texture slot
     * @param slotNumber
     * @param texture
     */setTexture(t,e){let i=this._gl;i.activeTexture(i.TEXTURE0+t),i.bindTexture(i.TEXTURE_2D,e)}/**
     * Set an integer uniform for the current shader
     *
     * **Important** Must call ex.Shader.use() before setting a uniform!
     *
     * @param name
     * @param value
     */setUniformInt(t,e){this.setUniform("uniform1i",t,~~e)}/**
     * Set an integer uniform for the current shader, WILL NOT THROW on error.
     *
     * **Important** Must call ex.Shader.use() before setting a uniform!
     *
     * @param name
     * @param value
     */trySetUniformInt(t,e){return this.trySetUniform("uniform1i",t,~~e)}/**
     * Set an integer array uniform for the current shader
     *
     * **Important** Must call ex.Shader.use() before setting a uniform!
     *
     * @param name
     * @param value
     */setUniformIntArray(t,e){this.setUniform("uniform1iv",t,e)}/**
     * Set an integer array uniform for the current shader, WILL NOT THROW on error.
     *
     * **Important** Must call ex.Shader.use() before setting a uniform!
     *
     * @param name
     * @param value
     */trySetUniformIntArray(t,e){return this.trySetUniform("uniform1iv",t,e)}/**
     * Set a boolean uniform for the current shader
     *
     * **Important** Must call ex.Shader.use() before setting a uniform!
     *
     * @param name
     * @param value
     */setUniformBoolean(t,e){this.setUniform("uniform1i",t,e?1:0)}/**
     * Set a boolean uniform for the current shader, WILL NOT THROW on error.
     *
     * **Important** Must call ex.Shader.use() before setting a uniform!
     *
     * @param name
     * @param value
     */trySetUniformBoolean(t,e){return this.trySetUniform("uniform1i",t,e?1:0)}/**
     * Set a float uniform for the current shader
     *
     * **Important** Must call ex.Shader.use() before setting a uniform!
     *
     * @param name
     * @param value
     */setUniformFloat(t,e){this.setUniform("uniform1f",t,e)}/**
     * Set a float uniform for the current shader, WILL NOT THROW on error.
     *
     * **Important** Must call ex.Shader.use() before setting a uniform!
     *
     * @param name
     * @param value
     */trySetUniformFloat(t,e){return this.trySetUniform("uniform1f",t,e)}/**
     * Set a float array uniform for the current shader
     *
     * **Important** Must call ex.Shader.use() before setting a uniform!
     *
     * @param name
     * @param value
     */setUniformFloatArray(t,e){this.setUniform("uniform1fv",t,e)}/**
     * Set a float array uniform for the current shader, WILL NOT THROW on error.
     *
     * **Important** Must call ex.Shader.use() before setting a uniform!
     *
     * @param name
     * @param value
     */trySetUniformFloatArray(t,e){return this.trySetUniform("uniform1fv",t,e)}/**
     * Set a [[Vector]] uniform for the current shader
     *
     * **Important** Must call ex.Shader.use() before setting a uniform!
     *
     * @param name
     * @param value
     */setUniformFloatVector(t,e){this.setUniform("uniform2f",t,e.x,e.y)}/**
     * Set a [[Vector]] uniform for the current shader, WILL NOT THROW on error.
     *
     * **Important** Must call ex.Shader.use() before setting a uniform!
     *
     * @param name
     * @param value
     */trySetUniformFloatVector(t,e){return this.trySetUniform("uniform2f",t,e.x,e.y)}/**
     * Set a [[Color]] uniform for the current shader
     *
     * **Important** Must call ex.Shader.use() before setting a uniform!
     *
     * @param name
     * @param value
     */setUniformFloatColor(t,e){this.setUniform("uniform4f",t,e.r/255,e.g/255,e.b/255,e.a)}/**
     * Set a [[Color]] uniform for the current shader, WILL NOT THROW on error.
     *
     * **Important** Must call ex.Shader.use() before setting a uniform!
     *
     * @param name
     * @param value
     */trySetUniformFloatColor(t,e){return this.trySetUniform("uniform4f",t,e.r/255,e.g/255,e.b/255,e.a)}/**
     * Set an [[Matrix]] uniform for the current shader
     *
     * **Important** Must call ex.Shader.use() before setting a uniform!
     *
     * @param name
     * @param value
     */setUniformMatrix(t,e){this.setUniform("uniformMatrix4fv",t,!1,e.data)}/**
     * Set an [[Matrix]] uniform for the current shader, WILL NOT THROW on error.
     *
     * **Important** Must call ex.Shader.use() before setting a uniform!
     *
     * @param name
     * @param value
     */trySetUniformMatrix(t,e){return this.trySetUniform("uniformMatrix4fv",t,!1,e.data)}/**
     * Set any available uniform type in webgl
     *
     * For example setUniform('uniformMatrix2fv', 'u_my2x2_mat`, ...);
     */setUniform(t,e,...i){if(!this._compiled)throw Error(`Must compile shader before setting a uniform ${t}:${e}`);if(!this.isCurrentlyBound())throw Error("Currently accessed shader instance is not the current active shader in WebGL, must call `shader.use()` before setting uniforms");let s=this._gl,r=s.getUniformLocation(this.program,e);if(r){let e=[r,...i];this._gl[t].apply(this._gl,e)}else throw Error(`Uniform ${t}:${e} doesn't exist or is not used in the shader source code, unused uniforms are optimized away by most browsers`)}/**
     * Set any available uniform type in webgl. Will try to set the uniform, will return false if the uniform didn't exist,
     * true if it was set.
     *
     * WILL NOT THROW on error
     *
     * For example setUniform('uniformMatrix2fv', 'u_my2x2_mat`, ...);
     *
     */trySetUniform(t,e,...i){if(!this._compiled)return this._logger.warn(`Must compile shader before setting a uniform ${t}:${e}`),!1;if(!this.isCurrentlyBound())return this._logger.warn("Currently accessed shader instance is not the current active shader in WebGL, must call `shader.use()` before setting uniforms"),!1;let s=this._gl,r=s.getUniformLocation(this.program,e);if(!r)return!1;{let e=[r,...i];this._gl[t].apply(this._gl,e)}return!0}_createProgram(t,e,i){let s=t.createProgram();if(null===s)throw Error("Could not create graphics shader program");// attach the shaders.
t.attachShader(s,e),t.attachShader(s,i),// link the program.
t.linkProgram(s);let r=t.getProgramParameter(s,t.LINK_STATUS);if(!r)throw Error(`Could not link the program: [${t.getProgramInfoLog(s)}]`);return s}_compileShader(t,e,i){let s=t.VERTEX_SHADER===i?"vertex":"fragment",r=t.createShader(i);if(null===r)throw Error(`Could not build shader: [${e}]`);t.shaderSource(r,e),t.compileShader(r);let n=t.getShaderParameter(r,t.COMPILE_STATUS);if(!n){let i=t.getShaderInfoLog(r);throw Error(`Could not compile ${s} shader:

${i}${this._processSourceForError(e,i)}`)}return r}_processSourceForError(t,e){let i=t.split("\n"),s=e.search(/\d:\d/),r=e.indexOf(" ",s),[n,o]=e.slice(s,r).split(":").map(t=>Number(t));for(let t=0;t<i.length;t++)i[t]=`${t+1}: ${i[t]}${o===t+1?" <----- ERROR!":""}`;return"\n\nSource:\n"+i.join("\n")}}ej._ACTIVE_SHADER_INSTANCE=null;/**
 * Helper around vertex buffer to simplify creating and uploading geometry
 *
 * Under the hood uses Float32Array
 */class eK{constructor(t){/**
         * If the vertices never change switching 'static' can be more efficient on the gpu
         *
         * Default is 'dynamic'
         */this.type="dynamic";let{gl:e,size:i,type:s,data:r}=t;if(this._gl=e,this.buffer=this._gl.createBuffer(),!r&&!i)throw Error("Must either provide data or a size to the VertexBuffer");r?this.bufferData=r:this.bufferData=new Float32Array(i),this.type=null!=s?s:this.type,// Allocate buffer
e.bindBuffer(e.ARRAY_BUFFER,this.buffer),e.bufferData(e.ARRAY_BUFFER,this.bufferData,"static"===this.type?e.STATIC_DRAW:e.DYNAMIC_DRAW)}/**
     * Bind this vertex buffer
     */bind(){let t=this._gl;t.bindBuffer(t.ARRAY_BUFFER,this.buffer)}/**
     * Upload vertex buffer geometry to the GPU
     */upload(t){let e=this._gl;e.bindBuffer(e.ARRAY_BUFFER,this.buffer),t?e.bufferSubData(e.ARRAY_BUFFER,0,this.bufferData,0,t):e.bufferData(e.ARRAY_BUFFER,this.bufferData,"static"===this.type?e.STATIC_DRAW:e.DYNAMIC_DRAW)}}/**
 * Helper around creating vertex attributes in a given [[VertexBuffer]], this is useful for describing
 * the memory layout for your vertices inside a particular buffer
 *
 * Note: This helper assumes interleaved attributes in one [[VertexBuffer]], not many.
 *
 * Working with `gl.vertexAttribPointer` can be tricky, and this attempts to double check you
 */class eW{get vertexBuffer(){return this._vertexBuffer}get attributes(){return this._attributes}constructor(t){this._logger=t9.getInstance(),this._layout=[],this._attributes=[],this._vertexTotalSizeBytes=0;let{gl:e,shader:i,vertexBuffer:s,attributes:r}=t;this._gl=e,this._vertexBuffer=s,this._attributes=r,this._shader=i,i&&this.initialize()}/**
     * Total number of bytes that the vertex will take up
     */get totalVertexSizeBytes(){return this._vertexTotalSizeBytes}set shader(t){t&&this._shader!==t&&(this._shader=t,this.initialize())}get shader(){return this._shader}/**
     * Layouts need shader locations and must be bound to a shader
     */initialize(){if(!this._shader)return;if(!this._shader.compiled)throw Error("Shader not compiled, shader must be compiled before defining a vertex layout");this._layout.length=0;let t=this._shader.attributes;for(let e of this._attributes){let i=t[e[0]];if(!i)throw Error(`The attribute named: ${e[0]} size ${e[1]} not found in the shader source code:
 ${this._shader.vertexSource}`);if(i.size!==e[1])throw Error(`VertexLayout size definition for attribute: [${e[0]}, ${e[1]}], doesnt match shader source size ${i.size}:
 ${this._shader.vertexSource}`);this._layout.push(i)}// calc size
let e=0;for(let t of this._layout){let i=eq(this._gl,t.glType);this._vertexTotalSizeBytes+=i*t.size,e+=t.size}this._vertexBuffer.bufferData.length%e!=0&&this._logger.warn(`The vertex component size (${e})  does divide evenly into the specified vertex buffer (${this._vertexBuffer.bufferData.length})`)}/**
     * Bind this layout with it's associated vertex buffer
     *
     * @param uploadBuffer Optionally indicate you wish to upload the buffer to the GPU associated with this layout
     */use(t=!1,e){if(!this._shader)throw Error("No shader is associated with this vertex layout, a shader must be set");let i=this._gl;if(!this._shader.isCurrentlyBound())throw Error("Shader associated with this vertex layout is not active! Call shader.use() before layout.use()");this._vertexBuffer.bind(),t&&this._vertexBuffer.upload(e);let s=0;// TODO switch to VAOs if the extension is
for(let t of this._layout)i.vertexAttribPointer(t.location,t.size,t.glType,t.normalized,this.totalVertexSizeBytes,s),i.enableVertexAttribArray(t.location),s+=eq(i,t.glType)*t.size}}class eJ{static clear(){eJ.DrawCallCount=0,eJ.DrawnImagesCount=0}}eJ.DrawCallCount=0,eJ.DrawnImagesCount=0;class eX{constructor(){this.type="ex.line",this.priority=0,this._maxLines=10922,this._vertexIndex=0,this._lineCount=0}initialize(t,e){this._gl=t,this._context=e,this._shader=new ej({gl:t,vertexSource:"#version 300 es\r\nin vec2 a_position;\r\nin vec4 a_color;\r\n\r\nout lowp vec4 v_color;\r\n\r\nuniform mat4 u_matrix;\r\n\r\nvoid main() {\r\n   // Set the vertex position using the ortho transform matrix\r\n   gl_Position = u_matrix * vec4(a_position, 0.0, 1.0);\r\n\r\n   // Passthrough the color\r\n   v_color = a_color;\r\n}",fragmentSource:"#version 300 es\r\nprecision mediump float;\r\n\r\n// Color\r\nin lowp vec4 v_color;\r\n\r\nout vec4 fragColor;\r\n\r\nvoid main() {\r\n  fragColor = v_color;\r\n}"}),this._shader.compile(),this._shader.use(),this._shader.setUniformMatrix("u_matrix",this._context.ortho),this._vertexBuffer=new eK({gl:t,size:12*this._maxLines,type:"dynamic"}),this._layout=new eW({gl:t,vertexBuffer:this._vertexBuffer,shader:this._shader,attributes:[["a_position",2],["a_color",4]]})}draw(t,e,i){this._isFull()&&this.flush(),this._lineCount++;let s=this._context.getTransform(),r=s.multiply(t),n=s.multiply(e),o=this._vertexBuffer.bufferData;// Start
o[this._vertexIndex++]=r.x,o[this._vertexIndex++]=r.y,o[this._vertexIndex++]=i.r/255,o[this._vertexIndex++]=i.g/255,o[this._vertexIndex++]=i.b/255,o[this._vertexIndex++]=i.a,// End
o[this._vertexIndex++]=n.x,o[this._vertexIndex++]=n.y,o[this._vertexIndex++]=i.r/255,o[this._vertexIndex++]=i.g/255,o[this._vertexIndex++]=i.b/255,o[this._vertexIndex++]=i.a}_isFull(){return this._lineCount>=this._maxLines}hasPendingDraws(){return 0!==this._lineCount}flush(){// nothing to draw early exit
if(0===this._lineCount)return;let t=this._gl;this._shader.use(),this._layout.use(!0),this._shader.setUniformMatrix("u_matrix",this._context.ortho),t.drawArrays(t.LINES,0,2*this._lineCount),eJ.DrawnImagesCount+=this._lineCount,eJ.DrawCallCount++,// reset
this._vertexIndex=0,this._lineCount=0}}class eZ{constructor(){this.type="ex.point",this.priority=0,this._maxPoints=10922,this._pointCount=0,this._vertexIndex=0}initialize(t,e){this._gl=t,this._context=e,this._shader=new ej({gl:t,vertexSource:"#version 300 es\r\nin vec2 a_position;\r\nin vec4 a_color;\r\nin float a_size;\r\nout lowp vec4 v_color;\r\nuniform mat4 u_matrix;\r\n\r\nvoid main() {\r\n  gl_Position = u_matrix * vec4(a_position, 0.0, 1.0);\r\n  gl_PointSize = a_size * 2.0;\r\n  v_color = a_color;\r\n}",fragmentSource:'#version 300 es\r\n\r\nprecision mediump float;\r\nin lowp vec4 v_color;\r\n\r\nout vec4 fragColor;\r\n\r\nvoid main() {\r\n  float r = 0.0, delta = 0.0, alpha = 1.0;\r\n  vec2 cxy = 2.0 * gl_PointCoord - 1.0;\r\n  r = dot(cxy, cxy);\r\n\r\n  delta = fwidth(r);\r\n  alpha = 1.0 - smoothstep(1.0 - delta, 1.0 + delta, r);\r\n  // "premultiply" the color by alpha\r\n  vec4 color = v_color;\r\n  color.a = color.a * alpha;\r\n  color.rgb = color.rgb * color.a;\r\n  fragColor = color;\r\n}'}),this._shader.compile(),this._shader.use(),this._shader.setUniformMatrix("u_matrix",this._context.ortho),this._buffer=new eK({gl:t,size:7*this._maxPoints,type:"dynamic"}),this._layout=new eW({gl:t,shader:this._shader,vertexBuffer:this._buffer,attributes:[["a_position",2],["a_color",4],["a_size",1]]})}draw(t,e,i){this._isFull()&&this.flush(),this._pointCount++;let s=this._context.getTransform(),r=this._context.opacity,n=this._context.snapToPixel,o=s.multiply(t);n&&(o.x=~~(o.x+e7),o.y=~~(o.y+e7));let a=this._buffer.bufferData;a[this._vertexIndex++]=o.x,a[this._vertexIndex++]=o.y,a[this._vertexIndex++]=e.r/255,a[this._vertexIndex++]=e.g/255,a[this._vertexIndex++]=e.b/255,a[this._vertexIndex++]=e.a*r,a[this._vertexIndex++]=i*Math.max(s.getScaleX(),s.getScaleY())}_isFull(){return this._pointCount>=this._maxPoints}hasPendingDraws(){return 0!==this._pointCount}flush(){// nothing to draw early exit
if(0===this._pointCount)return;let t=this._gl;this._shader.use(),this._layout.use(!0),this._shader.setUniformMatrix("u_matrix",this._context.ortho),t.drawArrays(t.POINTS,0,this._pointCount),eJ.DrawnImagesCount+=this._pointCount,eJ.DrawCallCount++,this._pointCount=0,this._vertexIndex=0}}/**
 * This is responsible for painting the entire screen during the render passes
 */class e${constructor(t){this._gl=t,this._shader=new ej({gl:t,vertexSource:"#version 300 es\r\nin vec2 a_position;\r\n\r\nin vec2 a_texcoord;\r\nout vec2 v_texcoord;\r\n\r\nvoid main() {\r\n  gl_Position = vec4(a_position, 0.0, 1.0);\r\n\r\n  // Pass the texcoord to the fragment shader.\r\n  v_texcoord = a_texcoord;\r\n}",fragmentSource:"#version 300 es\r\nprecision mediump float;\r\n\r\n// Passed in from the vertex shader.\r\nin vec2 v_texcoord;\r\n\r\n// The texture.\r\nuniform sampler2D u_texture;\r\n\r\nout vec4 fragColor;\r\n\r\nvoid main() {\r\n   fragColor = texture(u_texture, v_texcoord);\r\n}"}),this._shader.compile(),// Setup memory layout
this._buffer=new eK({gl:t,type:"static",// clip space quad + uv since we don't need a camera
data:new Float32Array([-1,-1,0,0,-1,1,0,1,1,-1,1,0,1,-1,1,0,-1,1,0,1,1,1,1,1])}),this._layout=new eW({gl:t,shader:this._shader,vertexBuffer:this._buffer,attributes:[["a_position",2],["a_texcoord",2]]}),this._buffer.upload()}renderWithPostProcessor(t){let e=this._gl;t.getShader().use(),t.getLayout().use(),e.drawArrays(e.TRIANGLES,0,6)}renderToScreen(){let t=this._gl;this._shader.use(),this._layout.use(),t.drawArrays(t.TRIANGLES,0,6)}}/**
 * Helper that defines and index buffer for quad geometry
 *
 * Index buffers allow you to save space in vertex buffers when you share vertices in geometry
 * it is almost always worth it in terms of performance to use an index buffer.
 */class e0{/**
     * @param gl WebGL2RenderingContext this layout will be attached to, these cannot be reused across contexts.
     * @param numberOfQuads Specify the max number of quads you want to draw
     * @param useUint16 Optionally force a uint16 buffer
     */constructor(t,e,i){this._logger=t9.getInstance(),this._gl=t,this.buffer=t.createBuffer(),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.buffer);let s=6*e;if(i){let i=Math.floor(16383.5);// max quads
this.bufferGlType=t.UNSIGNED_SHORT,this.bufferData=new Uint16Array(s),e>i&&this._logger.warn(`Total quads exceeds hardware index buffer limit (uint16), max(${i}) requested quads(${e})`)}else this.bufferData=new Uint32Array(s);let r=0;for(let t=0;t<s;t+=6)// first triangle
this.bufferData[t+0]=r+0,this.bufferData[t+1]=r+1,this.bufferData[t+2]=r+2,// second triangle
this.bufferData[t+3]=r+2,this.bufferData[t+4]=r+1,this.bufferData[t+5]=r+3,r+=4;t.bufferData(t.ELEMENT_ARRAY_BUFFER,this.bufferData,t.STATIC_DRAW)}get size(){return this.bufferData.length}/**
     * Upload data to the GPU
     */upload(){let t=this._gl;t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.buffer),t.bufferData(t.ELEMENT_ARRAY_BUFFER,this.bufferData,t.STATIC_DRAW)}/**
     * Bind this index buffer
     */bind(){let t=this._gl;t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.buffer)}}class e1{constructor(){this.type="ex.image",this.priority=0,this._maxImages=10922,this._maxTextures=0,// Per flush vars
this._imageCount=0,this._textures=[],this._vertexIndex=0}initialize(t,e){this._gl=t,this._context=e,// Transform shader source
// FIXME: PIXEL 6 complains `ERROR: Expression too complex.` if we use it's reported max texture units, 125 seems to work for now...
this._maxTextures=Math.min(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),125);let i=this._transformFragmentSource("#version 300 es\r\nprecision mediump float;\r\n\r\n// UV coord\r\nin vec2 v_texcoord;\r\n\r\n// Texture index\r\nin lowp float v_textureIndex;\r\n\r\n// Textures in the current draw\r\nuniform sampler2D u_textures[%%count%%];\r\n\r\n// Opacity\r\nin float v_opacity;\r\n\r\nin vec4 v_tint;\r\n\r\nout vec4 fragColor;\r\n\r\nvoid main() {\r\n   // In order to support the most efficient sprite batching, we have multiple\r\n   // textures loaded into the gpu (usually 8) this picker logic skips over textures\r\n   // that do not apply to a particular sprite.\r\n\r\n   vec4 color = vec4(1.0, 0, 0, 1.0);\r\n\r\n   // GLSL is templated out to pick the right texture and set the vec4 color\r\n   %%texture_picker%%\r\n\r\n   color.rgb = color.rgb * v_opacity;\r\n   color.a = color.a * v_opacity;\r\n   fragColor = color * v_tint;\r\n}",this._maxTextures);// Compile shader
this._shader=new ej({gl:t,fragmentSource:i,vertexSource:"#version 300 es\r\nin vec2 a_position;\r\n\r\n// Opacity \r\nin float a_opacity;\r\nout float v_opacity;\r\n\r\n// UV coordinate\r\nin vec2 a_texcoord;\r\nout vec2 v_texcoord;\r\n\r\n// Texture number\r\nin lowp float a_textureIndex;\r\nout lowp float v_textureIndex;\r\n\r\nin vec4 a_tint;\r\nout vec4 v_tint;\r\n\r\nuniform mat4 u_matrix;\r\n\r\nvoid main() {\r\n   // Set the vertex position using the ortho transform matrix\r\n   gl_Position = u_matrix * vec4(a_position, 0.0, 1.0);\r\n\r\n   // Pass through the Opacity to the fragment shader\r\n   v_opacity = a_opacity;\r\n   // Pass through the UV coord to the fragment shader\r\n   v_texcoord = a_texcoord;\r\n   // Pass through the texture number to the fragment shader\r\n   v_textureIndex = a_textureIndex;\r\n   // Pass through the tint\r\n   v_tint = a_tint;\r\n}"}),this._shader.compile(),// setup uniforms
this._shader.use(),this._shader.setUniformMatrix("u_matrix",e.ortho),// Initialize texture slots to [0, 1, 2, 3, 4, .... maxGPUTextures]
this._shader.setUniformIntArray("u_textures",[...Array(this._maxTextures)].map((t,e)=>e)),// Setup memory layout
this._buffer=new eK({gl:t,size:40*this._maxImages,type:"dynamic"}),this._layout=new eW({gl:t,shader:this._shader,vertexBuffer:this._buffer,attributes:[["a_position",2],["a_opacity",1],["a_texcoord",2],["a_textureIndex",1],["a_tint",4]]}),// Setup index buffer
this._quads=new e0(t,this._maxImages,!0)}_transformFragmentSource(t,e){let i=t.replace("%%count%%",e.toString()),s="";for(let t=0;t<e;t++)0===t?s+=`if (v_textureIndex <= ${t}.5) {
`:s+=`   else if (v_textureIndex <= ${t}.5) {
`,s+=`      color = texture(u_textures[${t}], v_texcoord);
   }
`;return i.replace("%%texture_picker%%",s)}_addImageAsTexture(t){let e=t.getAttribute("filtering"),i=null;(e===V.Blended||e===V.Pixel)&&(i=e);let s="true"===t.getAttribute("forceUpload"),r=this._context.textureLoader.load(t,i,s);// remove force attribute after upload
t.removeAttribute("forceUpload"),-1===this._textures.indexOf(r)&&this._textures.push(r)}_bindTextures(t){// Bind textures in the correct order
for(let e=0;e<this._maxTextures;e++)t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,this._textures[e]||this._textures[0])}_getTextureIdForImage(t){if(t){let e=this._context.textureLoader.get(t);return this._textures.indexOf(e)}return -1}_isFull(){return this._imageCount>=this._maxImages||this._textures.length>=this._maxTextures}draw(t,e,i,s,r,n,o,a,h){var l,A,d,c;this._isFull()&&this.flush(),this._imageCount++,// This creates and uploads the texture if not already done
this._addImageAsTexture(t);let u=(null==t?void 0:t.width)||s||0,g=(null==t?void 0:t.height)||r||0,p=[0,0,null!==(l=null!=s?s:null==t?void 0:t.width)&&void 0!==l?l:0,null!==(A=null!=r?r:null==t?void 0:t.height)&&void 0!==A?A:0],_=[null!=e?e:1,null!=i?i:1];void 0!==n&&void 0!==o&&void 0!==a&&void 0!==h&&(p=[null!=e?e:1,null!=i?i:1,null!==(d=null!=s?s:null==t?void 0:t.width)&&void 0!==d?d:0,null!==(c=null!=r?r:null==t?void 0:t.height)&&void 0!==c?c:0],_=[n,o],u=a,g=h),e=p[0],i=p[1];let f=p[2],m=p[3],y=this._context.getTransform(),C=this._context.opacity,x=this._context.snapToPixel,w=e_(_[0],_[1]),I=e_(_[0]+u,_[1]),v=e_(_[0],_[1]+g),E=e_(_[0]+u,_[1]+g);w=y.multiply(w),I=y.multiply(I),v=y.multiply(v),E=y.multiply(E),x&&(w.x=~~(w.x+e7),w.y=~~(w.y+e7),I.x=~~(I.x+e7),I.y=~~(I.y+e7),v.x=~~(v.x+e7),v.y=~~(v.y+e7),E.x=~~(E.x+e7),E.y=~~(E.y+e7));let B=this._context.tint,b=this._getTextureIdForImage(t),Q=t.width||u,S=t.height||g,T=e/Q,D=i/S,F=(e+f-.01)/Q,k=(i+m-.01)/S,P=this._layout.vertexBuffer.bufferData;// (0, 0) - 0
P[this._vertexIndex++]=w.x,P[this._vertexIndex++]=w.y,P[this._vertexIndex++]=C,P[this._vertexIndex++]=T,P[this._vertexIndex++]=D,P[this._vertexIndex++]=b,P[this._vertexIndex++]=B.r/255,P[this._vertexIndex++]=B.g/255,P[this._vertexIndex++]=B.b/255,P[this._vertexIndex++]=B.a,// (0, 1) - 1
P[this._vertexIndex++]=v.x,P[this._vertexIndex++]=v.y,P[this._vertexIndex++]=C,P[this._vertexIndex++]=T,P[this._vertexIndex++]=k,P[this._vertexIndex++]=b,P[this._vertexIndex++]=B.r/255,P[this._vertexIndex++]=B.g/255,P[this._vertexIndex++]=B.b/255,P[this._vertexIndex++]=B.a,// (1, 0) - 2
P[this._vertexIndex++]=I.x,P[this._vertexIndex++]=I.y,P[this._vertexIndex++]=C,P[this._vertexIndex++]=F,P[this._vertexIndex++]=D,P[this._vertexIndex++]=b,P[this._vertexIndex++]=B.r/255,P[this._vertexIndex++]=B.g/255,P[this._vertexIndex++]=B.b/255,P[this._vertexIndex++]=B.a,// (1, 1) - 3
P[this._vertexIndex++]=E.x,P[this._vertexIndex++]=E.y,P[this._vertexIndex++]=C,P[this._vertexIndex++]=F,P[this._vertexIndex++]=k,P[this._vertexIndex++]=b,P[this._vertexIndex++]=B.r/255,P[this._vertexIndex++]=B.g/255,P[this._vertexIndex++]=B.b/255,P[this._vertexIndex++]=B.a}hasPendingDraws(){return 0!==this._imageCount}flush(){// nothing to draw early exit
if(0===this._imageCount)return;let t=this._gl;// Bind the shader
this._shader.use(),// Bind the memory layout and upload data
this._layout.use(!0,40*this._imageCount),// Update ortho matrix uniform
this._shader.setUniformMatrix("u_matrix",this._context.ortho),// Bind textures to
this._bindTextures(t),// Bind index buffer
this._quads.bind(),// Draw all the quads
t.drawElements(t.TRIANGLES,6*this._imageCount,this._quads.bufferGlType,0),eJ.DrawnImagesCount+=this._imageCount,eJ.DrawCallCount++,// Reset
this._imageCount=0,this._vertexIndex=0,this._textures.length=0}}class e2{constructor(){this.type="ex.rectangle",this.priority=0,this._maxRectangles=10922,this._rectangleCount=0,this._vertexIndex=0}initialize(t,e){this._gl=t,this._context=e,// https://stackoverflow.com/questions/59197671/glsl-rounded-rectangle-with-variable-border
this._shader=new ej({gl:t,fragmentSource:"#version 300 es\r\n\r\nprecision mediump float;\r\n\r\n// UV coord\r\nin vec2 v_uv;\r\n\r\nin vec2 v_size; // in pixels\r\n\r\n// Color coord to blend with image\r\nin lowp vec4 v_color;\r\n\r\n// Stroke color if used\r\nin lowp vec4 v_strokeColor;\r\n\r\n// Stroke thickness if used\r\nin lowp float v_strokeThickness; // in pixels\r\n\r\n// Opacity\r\nin float v_opacity;\r\n\r\nout vec4 fragColor;\r\n\r\nvoid main() {\r\n    // modified from https://stackoverflow.com/questions/59197671/glsl-rounded-rectangle-with-variable-border\r\n    vec2 uv = v_uv;\r\n    vec2 fragCoord = uv * v_size;\r\n    float maxX = v_size.x - v_strokeThickness;\r\n    float minX = v_strokeThickness;\r\n    float maxY = v_size.y - v_strokeThickness;\r\n    float minY = v_strokeThickness;\r\n\r\n    if (fragCoord.x < maxX && fragCoord.x > minX &&\r\n        fragCoord.y < maxY && fragCoord.y > minY) {\r\n      fragColor = v_color;\r\n    } else {\r\n      fragColor = v_strokeColor;\r\n    }\r\n    fragColor.a *= v_opacity;\r\n    fragColor.rgb *= fragColor.a;\r\n\r\n    // vec2 v2CenteredPos     = abs(fragCoord - v_size.xy / 2.0);\r\n    // vec2 v2HalfShapeSizePx = v_size.xy/2.0 - v_strokeThickness/2.0;\r\n\r\n    // float fHalfBorderDist      = 0.0;\r\n    // float fHalfBorderThickness = 0.0;\r\n\r\n    // if (fragCoord.x > max(v_radius, v_strokeThickness) && \r\n    //     fragCoord.x < v_size.x - max(v_radius, v_strokeThickness))\r\n    // {\r\n    //     fHalfBorderDist      = v2CenteredPos.y - v2HalfShapeSizePx.y;\r\n    //     fHalfBorderThickness = v_strokeThickness / 2.0;\r\n    // }\r\n    // else if (fragCoord.y > max(v_radius, v_strokeThickness) && \r\n    //          fragCoord.y < v_size.y - max(v_radius, v_strokeThickness))\r\n    // {\r\n    //     fHalfBorderDist      = v2CenteredPos.x - v2HalfShapeSizePx.x;\r\n    //     fHalfBorderThickness = v_strokeThickness / 2.0;\r\n    // }\r\n    // else\r\n    // {\r\n    //     vec2 edgeVec = max(vec2(0.0), v_radius - vec2(\r\n    //         uv.x > 0.5 ? v_size.x - fragCoord.x : fragCoord.x,\r\n    //         uv.y > 0.5 ? v_size.y - fragCoord.y : fragCoord.y));\r\n        \r\n    //     float ellipse_ab    = v_radius-v_strokeThickness;\r\n    //     vec2 ellipse_isect = (v_strokeThickness > v_radius || v_strokeThickness > v_radius) ? vec2(0.0) :\r\n    //                             edgeVec.xy * ellipse_ab*ellipse_ab / length(ellipse_ab*edgeVec.yx); \r\n            \r\n    //     fHalfBorderThickness = (v_radius - length(ellipse_isect)) / 2.0;\r\n    //     fHalfBorderDist      = length(edgeVec) - (v_radius - fHalfBorderThickness);\r\n    // }\r\n\r\n    // vec4 v4FromColor = v_strokeColor;\r\n    // v4FromColor.rgb *= v4FromColor.a;\r\n    // vec4 v4ToColor   = vec4(0.0); // background color is transparent\r\n    // if (fHalfBorderDist < 0.0) {\r\n    //     v4ToColor = v_color;\r\n    //     v4ToColor.rgb *= v4ToColor.a;\r\n    // }\r\n\r\n    // float mixPct = abs(fHalfBorderDist) - fHalfBorderThickness;\r\n\r\n    // vec4 finalColor = mix(v4FromColor, v4ToColor, mixPct);\r\n    // gl_FragColor = finalColor;\r\n}",vertexSource:"#version 300 es\r\nin vec2 a_position;\r\n\r\n// UV coordinate\r\nin vec2 a_uv;\r\nout vec2 v_uv;\r\n\r\nin vec2 a_size;\r\nout vec2 v_size;\r\n\r\n// Opacity \r\nin float a_opacity;\r\nout float v_opacity;\r\n\r\nin vec4 a_color;\r\nout vec4 v_color;\r\n\r\nin vec4 a_strokeColor;\r\nout vec4 v_strokeColor;\r\n\r\nin float a_strokeThickness;\r\nout float v_strokeThickness;\r\n\r\nuniform mat4 u_matrix;\r\n\r\n\r\nvoid main() {\r\n   // Set the vertex position using the ortho transform matrix\r\n   gl_Position = u_matrix * vec4(a_position, 0.0, 1.0);\r\n\r\n   // Pass through UV coords\r\n   v_uv = a_uv;\r\n   // Pass through size\r\n   v_size = a_size;\r\n   // Pass through the Opacity to the fragment shader\r\n   v_opacity = a_opacity;\r\n   // Pass through the color to the fragment shader\r\n   v_color = a_color;\r\n   // Pass through the stroke color to the fragment shader\r\n   v_strokeColor = a_strokeColor;\r\n   // Pass through the stroke thickenss to the fragment shader\r\n   v_strokeThickness = a_strokeThickness;\r\n}"}),this._shader.compile(),// setup uniforms
this._shader.use(),this._shader.setUniformMatrix("u_matrix",e.ortho),this._buffer=new eK({gl:t,size:64*this._maxRectangles,type:"dynamic"}),this._layout=new eW({gl:t,shader:this._shader,vertexBuffer:this._buffer,attributes:[["a_position",2],["a_uv",2],["a_size",2],["a_opacity",1],["a_color",4],["a_strokeColor",4],["a_strokeThickness",1]]}),this._quads=new e0(t,this._maxRectangles,!0)}_isFull(){return this._rectangleCount>=this._maxRectangles}draw(...t){t[0]instanceof ep&&t[1]instanceof ep?this.drawLine.apply(this,t):this.drawRectangle.apply(this,t)}drawLine(t,e,i,s=1){this._isFull()&&this.flush(),this._rectangleCount++;// transform based on current context
let r=this._context.getTransform(),n=this._context.opacity,o=this._context.snapToPixel,a=e.sub(t),h=a.size,l=a.normalize().perpendicular(),A=s/2,d=r.multiply(l.scale(A).add(t)),c=r.multiply(l.scale(-A).add(t)),u=r.multiply(l.scale(A).add(e)),g=r.multiply(l.scale(-A).add(e));o&&(d.x=~~(d.x+e7),d.y=~~(d.y+e7),u.x=~~(u.x+e7),u.y=~~(u.y+e7),c.x=~~(c.x+e7),c.y=~~(c.y+e7),g.x=~~(g.x+e7),g.y=~~(g.y+e7));let p=ef.Transparent,_=this._layout.vertexBuffer.bufferData;// (0, 0) - 0
_[this._vertexIndex++]=d.x,_[this._vertexIndex++]=d.y,_[this._vertexIndex++]=0,_[this._vertexIndex++]=0,_[this._vertexIndex++]=h,_[this._vertexIndex++]=s,_[this._vertexIndex++]=n,_[this._vertexIndex++]=i.r/255,_[this._vertexIndex++]=i.g/255,_[this._vertexIndex++]=i.b/255,_[this._vertexIndex++]=i.a,_[this._vertexIndex++]=p.r/255,_[this._vertexIndex++]=p.g/255,_[this._vertexIndex++]=p.b/255,_[this._vertexIndex++]=p.a,_[this._vertexIndex++]=0,// (0, 1) - 1
_[this._vertexIndex++]=c.x,_[this._vertexIndex++]=c.y,_[this._vertexIndex++]=0,_[this._vertexIndex++]=1,_[this._vertexIndex++]=h,_[this._vertexIndex++]=s,_[this._vertexIndex++]=n,_[this._vertexIndex++]=i.r/255,_[this._vertexIndex++]=i.g/255,_[this._vertexIndex++]=i.b/255,_[this._vertexIndex++]=i.a,_[this._vertexIndex++]=p.r/255,_[this._vertexIndex++]=p.g/255,_[this._vertexIndex++]=p.b/255,_[this._vertexIndex++]=p.a,_[this._vertexIndex++]=0,// (1, 0) - 2
_[this._vertexIndex++]=u.x,_[this._vertexIndex++]=u.y,_[this._vertexIndex++]=1,_[this._vertexIndex++]=0,_[this._vertexIndex++]=h,_[this._vertexIndex++]=s,_[this._vertexIndex++]=n,_[this._vertexIndex++]=i.r/255,_[this._vertexIndex++]=i.g/255,_[this._vertexIndex++]=i.b/255,_[this._vertexIndex++]=i.a,_[this._vertexIndex++]=p.r/255,_[this._vertexIndex++]=p.g/255,_[this._vertexIndex++]=p.b/255,_[this._vertexIndex++]=p.a,_[this._vertexIndex++]=0,// (1, 1) - 3
_[this._vertexIndex++]=g.x,_[this._vertexIndex++]=g.y,_[this._vertexIndex++]=1,_[this._vertexIndex++]=1,_[this._vertexIndex++]=h,_[this._vertexIndex++]=s,_[this._vertexIndex++]=n,_[this._vertexIndex++]=i.r/255,_[this._vertexIndex++]=i.g/255,_[this._vertexIndex++]=i.b/255,_[this._vertexIndex++]=i.a,_[this._vertexIndex++]=p.r/255,_[this._vertexIndex++]=p.g/255,_[this._vertexIndex++]=p.b/255,_[this._vertexIndex++]=p.a,_[this._vertexIndex++]=0}drawRectangle(t,e,i,s,r=ef.Transparent,n=0){this._isFull()&&this.flush(),this._rectangleCount++;// transform based on current context
let o=this._context.getTransform(),a=this._context.opacity,h=this._context.snapToPixel,l=o.multiply(t.add(e_(0,0))),A=o.multiply(t.add(e_(e,0))),d=o.multiply(t.add(e_(e,i))),c=o.multiply(t.add(e_(0,i)));h&&(l.x=~~(l.x+e7),l.y=~~(l.y+e7),A.x=~~(A.x+e7),A.y=~~(A.y+e7),c.x=~~(c.x+e7),c.y=~~(c.y+e7),d.x=~~(d.x+e7),d.y=~~(d.y+e7));// update data
let u=this._layout.vertexBuffer.bufferData;// (0, 0) - 0
u[this._vertexIndex++]=l.x,u[this._vertexIndex++]=l.y,u[this._vertexIndex++]=0,u[this._vertexIndex++]=0,u[this._vertexIndex++]=e,u[this._vertexIndex++]=i,u[this._vertexIndex++]=a,u[this._vertexIndex++]=s.r/255,u[this._vertexIndex++]=s.g/255,u[this._vertexIndex++]=s.b/255,u[this._vertexIndex++]=s.a,u[this._vertexIndex++]=r.r/255,u[this._vertexIndex++]=r.g/255,u[this._vertexIndex++]=r.b/255,u[this._vertexIndex++]=r.a,u[this._vertexIndex++]=n,// (0, 1) - 1
u[this._vertexIndex++]=c.x,u[this._vertexIndex++]=c.y,u[this._vertexIndex++]=0,u[this._vertexIndex++]=1,u[this._vertexIndex++]=e,u[this._vertexIndex++]=i,u[this._vertexIndex++]=a,u[this._vertexIndex++]=s.r/255,u[this._vertexIndex++]=s.g/255,u[this._vertexIndex++]=s.b/255,u[this._vertexIndex++]=s.a,u[this._vertexIndex++]=r.r/255,u[this._vertexIndex++]=r.g/255,u[this._vertexIndex++]=r.b/255,u[this._vertexIndex++]=r.a,u[this._vertexIndex++]=n,// (1, 0) - 2
u[this._vertexIndex++]=A.x,u[this._vertexIndex++]=A.y,u[this._vertexIndex++]=1,u[this._vertexIndex++]=0,u[this._vertexIndex++]=e,u[this._vertexIndex++]=i,u[this._vertexIndex++]=a,u[this._vertexIndex++]=s.r/255,u[this._vertexIndex++]=s.g/255,u[this._vertexIndex++]=s.b/255,u[this._vertexIndex++]=s.a,u[this._vertexIndex++]=r.r/255,u[this._vertexIndex++]=r.g/255,u[this._vertexIndex++]=r.b/255,u[this._vertexIndex++]=r.a,u[this._vertexIndex++]=n,// (1, 1) - 3
u[this._vertexIndex++]=d.x,u[this._vertexIndex++]=d.y,u[this._vertexIndex++]=1,u[this._vertexIndex++]=1,u[this._vertexIndex++]=e,u[this._vertexIndex++]=i,u[this._vertexIndex++]=a,u[this._vertexIndex++]=s.r/255,u[this._vertexIndex++]=s.g/255,u[this._vertexIndex++]=s.b/255,u[this._vertexIndex++]=s.a,u[this._vertexIndex++]=r.r/255,u[this._vertexIndex++]=r.g/255,u[this._vertexIndex++]=r.b/255,u[this._vertexIndex++]=r.a,u[this._vertexIndex++]=n}hasPendingDraws(){return 0!==this._rectangleCount}flush(){// nothing to draw early exit
if(0===this._rectangleCount)return;let t=this._gl;// Bind the shader
this._shader.use(),// Bind the memory layout and upload data
this._layout.use(!0),// Update ortho matrix uniform
this._shader.setUniformMatrix("u_matrix",this._context.ortho),// Bind index buffer
this._quads.bind(),// Draw all the quads
t.drawElements(t.TRIANGLES,6*this._rectangleCount,this._quads.bufferGlType,0),eJ.DrawnImagesCount+=this._rectangleCount,eJ.DrawCallCount++,// Reset
this._rectangleCount=0,this._vertexIndex=0}}class e5{constructor(){this.type="ex.circle",this.priority=0,this._maxCircles=10922,this._circleCount=0,this._vertexIndex=0}initialize(t,e){this._gl=t,this._context=e,this._shader=new ej({gl:t,fragmentSource:"#version 300 es\r\nprecision highp float;\r\n\r\n// UV coord\r\nin vec2 v_uv;\r\n\r\n// Color coord to blend with image\r\nin lowp vec4 v_color;\r\n\r\n// Stroke color if used\r\nin lowp vec4 v_strokeColor;\r\n\r\n// Stroke thickness if used\r\nin lowp float v_strokeThickness;\r\n\r\n// Opacity\r\nin float v_opacity;\r\n\r\nout vec4 fragColor;\r\n\r\nvoid main() {\r\n  // make (0, 0) the center the uv \r\n  vec2 uv = v_uv * 2.0 - 1.0;\r\n\r\n  vec4 color = v_color;\r\n  vec4 strokeColor = v_strokeColor;\r\n\r\n  // circle border is at radius 1.0 \r\n  // dist is > 0 when inside the circle \r\n  float d = length(uv);\r\n  float dist = 1.0 - length(uv);\r\n\r\n  // Fade based on fwidth\r\n  float fade = fwidth(dot(uv, uv));\r\n\r\n  // if dist is greater than 0 step to 1;\r\n  // when we cross this 0 threshold add a smooth fade\r\n  float fill = smoothstep(-fade/2.0, fade/2.0, dist);\r\n\r\n  // if dist is greater than the stroke thickness step to 1\r\n  float stroke = 1.0 - smoothstep(v_strokeThickness, v_strokeThickness + fade, dist);\r\n\r\n  strokeColor.a *= fill * stroke;\r\n  strokeColor.rgb *= strokeColor.a;\r\n\r\n  color.a *= fill * (1.0 - stroke);\r\n  color.rgb *= color.a;\r\n\r\n  vec4 finalColor = mix(vec4(0.0), (color + strokeColor), fill);\r\n  finalColor.rgb = finalColor.rgb * v_opacity;\r\n  finalColor.a = finalColor.a * v_opacity;\r\n  fragColor = finalColor;\r\n}",vertexSource:"#version 300 es\r\nin vec2 a_position;\r\n\r\n// UV coordinate\r\nin vec2 a_uv;\r\nout vec2 v_uv;\r\n\r\n// Opacity \r\nin float a_opacity;\r\nout float v_opacity;\r\n\r\nin vec4 a_color;\r\nout vec4 v_color;\r\n\r\nin vec4 a_strokeColor;\r\nout vec4 v_strokeColor;\r\n\r\nin float a_strokeThickness;\r\nout float v_strokeThickness;\r\n\r\nuniform mat4 u_matrix;\r\n\r\n\r\nvoid main() {\r\n   // Set the vertex position using the ortho transform matrix\r\n   gl_Position = u_matrix * vec4(a_position, 0.0, 1.0);\r\n\r\n   // Pass through UV coords\r\n   v_uv = a_uv;\r\n   // Pass through the Opacity to the fragment shader\r\n   v_opacity = a_opacity;\r\n   // Pass through the color to the fragment shader\r\n   v_color = a_color;\r\n   // Pass through the stroke color to the fragment shader\r\n   v_strokeColor = a_strokeColor;\r\n   // Pass through the stroke thickenss to the fragment shader\r\n   v_strokeThickness = a_strokeThickness;\r\n}"}),this._shader.compile(),// setup uniforms
this._shader.use(),this._shader.setUniformMatrix("u_matrix",e.ortho),this._buffer=new eK({gl:t,size:56*this._maxCircles,type:"dynamic"}),this._layout=new eW({gl:t,shader:this._shader,vertexBuffer:this._buffer,attributes:[["a_position",2],["a_uv",2],["a_opacity",1],["a_color",4],["a_strokeColor",4],["a_strokeThickness",1]]}),this._quads=new e0(t,this._maxCircles,!0)}_isFull(){return this._circleCount>=this._maxCircles}draw(t,e,i,s=ef.Transparent,r=0){this._isFull()&&this.flush(),this._circleCount++;// transform based on current context
let n=this._context.getTransform(),o=this._context.opacity,a=this._context.snapToPixel,h=n.multiply(t.add(e_(-e,-e))),l=n.multiply(t.add(e_(e,-e))),A=n.multiply(t.add(e_(e,e))),d=n.multiply(t.add(e_(-e,e)));a&&(h.x=~~(h.x+e7),h.y=~~(h.y+e7),l.x=~~(l.x+e7),l.y=~~(l.y+e7),d.x=~~(d.x+e7),d.y=~~(d.y+e7),A.x=~~(A.x+e7),A.y=~~(A.y+e7));// update data
let c=this._layout.vertexBuffer.bufferData;// (0, 0) - 0
c[this._vertexIndex++]=h.x,c[this._vertexIndex++]=h.y,c[this._vertexIndex++]=0,c[this._vertexIndex++]=0,c[this._vertexIndex++]=o,c[this._vertexIndex++]=i.r/255,c[this._vertexIndex++]=i.g/255,c[this._vertexIndex++]=i.b/255,c[this._vertexIndex++]=i.a,c[this._vertexIndex++]=s.r/255,c[this._vertexIndex++]=s.g/255,c[this._vertexIndex++]=s.b/255,c[this._vertexIndex++]=s.a,c[this._vertexIndex++]=r/e,// (0, 1) - 1
c[this._vertexIndex++]=d.x,c[this._vertexIndex++]=d.y,c[this._vertexIndex++]=0,c[this._vertexIndex++]=1,c[this._vertexIndex++]=o,c[this._vertexIndex++]=i.r/255,c[this._vertexIndex++]=i.g/255,c[this._vertexIndex++]=i.b/255,c[this._vertexIndex++]=i.a,c[this._vertexIndex++]=s.r/255,c[this._vertexIndex++]=s.g/255,c[this._vertexIndex++]=s.b/255,c[this._vertexIndex++]=s.a,c[this._vertexIndex++]=r/e,// (1, 0) - 2
c[this._vertexIndex++]=l.x,c[this._vertexIndex++]=l.y,c[this._vertexIndex++]=1,c[this._vertexIndex++]=0,c[this._vertexIndex++]=o,c[this._vertexIndex++]=i.r/255,c[this._vertexIndex++]=i.g/255,c[this._vertexIndex++]=i.b/255,c[this._vertexIndex++]=i.a,c[this._vertexIndex++]=s.r/255,c[this._vertexIndex++]=s.g/255,c[this._vertexIndex++]=s.b/255,c[this._vertexIndex++]=s.a,c[this._vertexIndex++]=r/e,// (1, 1) - 3
c[this._vertexIndex++]=A.x,c[this._vertexIndex++]=A.y,c[this._vertexIndex++]=1,c[this._vertexIndex++]=1,c[this._vertexIndex++]=o,c[this._vertexIndex++]=i.r/255,c[this._vertexIndex++]=i.g/255,c[this._vertexIndex++]=i.b/255,c[this._vertexIndex++]=i.a,c[this._vertexIndex++]=s.r/255,c[this._vertexIndex++]=s.g/255,c[this._vertexIndex++]=s.b/255,c[this._vertexIndex++]=s.a,c[this._vertexIndex++]=r/e}hasPendingDraws(){return 0!==this._circleCount}flush(){// nothing to draw early exit
if(0===this._circleCount)return;let t=this._gl;// Bind the shader
this._shader.use(),// Bind the memory layout and upload data
this._layout.use(!0),// Update ortho matrix uniform
this._shader.setUniformMatrix("u_matrix",this._context.ortho),// Bind index buffer
this._quads.bind(),// Draw all the quads
t.drawElements(t.TRIANGLES,6*this._circleCount,this._quads.bufferGlType,0),eJ.DrawnImagesCount+=this._circleCount,eJ.DrawCallCount++,// Reset
this._circleCount=0,this._vertexIndex=0}}class e3{constructor(t,e,i=100){this.builder=t,this.recycler=e,this.maxObjects=i,this.totalAllocations=0,this.index=0,this.objects=[],this.disableWarnings=!1,this._logger=t9.getInstance()}preallocate(){for(let t=0;t<this.maxObjects;t++)this.objects[t]=this.builder()}/**
     * Use many instances out of the in the context and return all to the pool.
     *
     * By returning values out of the context they will be un-hooked from the pool and are free to be passed to consumers
     * @param context
     */using(t){let e=t(this);return e?this.done(...e):this.done()}/**
     * Use a single instance out of th pool and immediately return it to the pool
     * @param context
     */borrow(t){let e=this.get();t(e),this.index--}/**
     * Retrieve a value from the pool, will allocate a new instance if necessary or recycle from the pool
     * @param args
     */get(...t){if(this.index===this.maxObjects&&(this.disableWarnings||this._logger.warn("Max pooled objects reached, possible memory leak? Doubling"),this.maxObjects=2*this.maxObjects),this.objects[this.index])return this.recycler(this.objects[this.index++],...t);{// New allocation
this.totalAllocations++;let e=this.objects[this.index++]=this.builder(...t);return e}}done(...t){for(let e of(// All objects in pool now considered "free"
this.index=0,t)){let t=this.objects.indexOf(e);// Build a new object to take the pool place
this.objects[t]=this.builder(),this.totalAllocations++}return t}}class e4{constructor(){this.z=0,this.priority=0,this.transform=eQ.identity(),this.state={z:0,opacity:1,tint:ef.White,material:null}}}let e6=`#version 300 es
in vec2 a_position;

in vec2 a_uv;
out vec2 v_uv;

uniform mat4 u_matrix;
uniform mat4 u_transform;

void main() {
  // Set the vertex position using the ortho & transform matrix
  gl_Position = u_matrix * u_transform * vec4(a_position, 0.0, 1.0);

  // Pass through the UV coord to the fragment shader
  v_uv = a_uv;
}
`;class e8{constructor(t){this._color=ef.Transparent,this._initialized=!1;let{color:e,name:i,vertexSource:s,fragmentSource:r}=t;this._name=i,this._vertexSource=null!=s?s:e6,this._fragmentSource=r,this._color=null!=e?e:this._color}initialize(t,e){this._initialized||(this._shader=e.createShader({vertexSource:this._vertexSource,fragmentSource:this._fragmentSource}),this._shader.compile(),this._initialized=!0)}get name(){var t;return null!==(t=this._name)&&void 0!==t?t:"anonymous material"}getShader(){return this._shader}use(){if(this._initialized)// bind the shader
this._shader.use(),// Apply standard uniforms
this._shader.trySetUniformFloatColor("u_color",this._color);else throw Error(`Material ${this.name} not yet initialized, use the ExcaliburGraphicsContext.createMaterial() to work around this.`)}}class e9{constructor(){this.type="ex.material",this.priority=0,this._textures=[]}initialize(t,e){this._gl=t,this._context=e,// Setup memory layout
this._buffer=new eK({gl:t,size:16,type:"dynamic"}),// Setup a vertex layout/buffer to the material
this._layout=new eW({gl:t,vertexBuffer:this._buffer,attributes:[["a_position",2],["a_uv",2]]}),// Setup index buffer
this._quads=new e0(t,1,!0)}draw(t,e,i,s,r,n,o,a,h){var l,A,d,c;let u=this._gl,g=this._context.material;g.initialize(u,this._context);let p=this._context.getTransform(),_=this._context.opacity,f=g.getShader(),m=this._layout.vertexBuffer.bufferData,y=0,C=(null==t?void 0:t.width)||s||0,x=(null==t?void 0:t.height)||r||0,w=[0,0,null!==(l=null!=s?s:null==t?void 0:t.width)&&void 0!==l?l:0,null!==(A=null!=r?r:null==t?void 0:t.height)&&void 0!==A?A:0],I=[null!=e?e:1,null!=i?i:1];void 0!==n&&void 0!==o&&void 0!==a&&void 0!==h&&(w=[null!=e?e:1,null!=i?i:1,null!==(d=null!=s?s:null==t?void 0:t.width)&&void 0!==d?d:0,null!==(c=null!=r?r:null==t?void 0:t.height)&&void 0!==c?c:0],I=[n,o],C=a,x=h),e=w[0],i=w[1];let v=w[2],E=w[3],B=e_(I[0],I[1]),b=e_(I[0]+C,I[1]),Q=e_(I[0],I[1]+x),S=e_(I[0]+C,I[1]+x),T=t.width||C,D=t.height||x,F=e/T,k=i/D,P=(e+v-.01)/T,R=(i+E-.01)/D;// (0, 0) - 0
m[y++]=B.x,m[y++]=B.y,m[y++]=F,m[y++]=k,// (0, 1) - 1
m[y++]=Q.x,m[y++]=Q.y,m[y++]=F,m[y++]=R,// (1, 0) - 2
m[y++]=b.x,m[y++]=b.y,m[y++]=P,m[y++]=k,// (1, 1) - 3
m[y++]=S.x,m[y++]=S.y,m[y++]=P,m[y++]=R;// This creates and uploads the texture if not already done
let M=this._addImageAsTexture(t);// apply material
g.use(),this._layout.shader=f,// apply layout and geometry
this._layout.use(!0),// apply opacity
f.trySetUniformFloat("u_opacity",_),// apply resolution
f.trySetUniformFloatVector("u_resolution",e_(this._context.width,this._context.height)),// apply size
f.trySetUniformFloatVector("u_size",e_(v,E)),// apply orthographic projection
f.trySetUniformMatrix("u_matrix",this._context.ortho),// apply geometry transform
f.trySetUniformMatrix("u_transform",p.to4x4()),// bind graphic image texture 'uniform sampler2D u_graphic;'
u.activeTexture(u.TEXTURE0+0),u.bindTexture(u.TEXTURE_2D,M),f.trySetUniformInt("u_graphic",0),// bind quad index buffer
this._quads.bind(),// Draw a single quad
u.drawElements(u.TRIANGLES,6,this._quads.bufferGlType,0)}_addImageAsTexture(t){let e=t.getAttribute("filtering"),i=null;(e===V.Blended||e===V.Pixel)&&(i=e);let s="true"===t.getAttribute("forceUpload"),r=this._context.textureLoader.load(t,i,s);return(// remove force attribute after upload
t.removeAttribute("forceUpload"),-1===this._textures.indexOf(r)&&this._textures.push(r),r)}hasPendingDraws(){return!1}flush(){// flush does not do anything, material renderer renders immediately per draw
}}// renderers
let e7=1e-4;class it{constructor(t){this._webglCtx=t,this._debugText=new ez}/**
     * Draw a debugging rectangle to the context
     * @param x
     * @param y
     * @param width
     * @param height
     */drawRect(t,e,i,s,r={color:ef.Black}){this.drawLine(e_(t,e),e_(t+i,e),{...r}),this.drawLine(e_(t+i,e),e_(t+i,e+s),{...r}),this.drawLine(e_(t+i,e+s),e_(t,e+s),{...r}),this.drawLine(e_(t,e+s),e_(t,e),{...r})}/**
     * Draw a debugging line to the context
     * @param start
     * @param end
     * @param lineOptions
     */drawLine(t,e,i={color:ef.Black}){this._webglCtx.draw("ex.line",t,e,i.color)}/**
     * Draw a debugging point to the context
     * @param point
     * @param pointOptions
     */drawPoint(t,e={color:ef.Black,size:5}){this._webglCtx.draw("ex.point",t,e.color,e.size)}drawText(t,e){this._debugText.write(this._webglCtx,t,e)}}class ie{get z(){return this._state.current.z}set z(t){this._state.current.z=t}get opacity(){return this._state.current.opacity}set opacity(t){this._state.current.opacity=t}get tint(){return this._state.current.tint}set tint(t){this._state.current.tint=t}get width(){return this.__gl.canvas.width}get height(){return this.__gl.canvas.height}get ortho(){return this._ortho}/**
     * Checks the underlying webgl implementation if the requested internal resolution is supported
     * @param dim
     */checkIfResolutionSupported(t){// Slight hack based on this thread https://groups.google.com/g/webgl-dev-list/c/AHONvz3oQTo
let e=!0;return(t.width>4096||t.height>4096)&&(e=!1),e}constructor(t){this._logger=t9.getInstance(),this._renderers=new Map,this._isDrawLifecycle=!1,this.useDrawSorting=!0,this._drawCallPool=new e3(()=>new e4,t=>(t.priority=0,t.z=0,t.renderer=void 0,t.args=void 0,t),4e3),this._drawCalls=[],// Postprocessing is a tuple with 2 render targets, these are flip-flopped during the postprocessing process
this._postProcessTargets=[],this._postprocessors=[],this._transform=new eS,this._state=new eT,this.snapToPixel=!1,this.smoothing=!1,this.backgroundColor=ef.ExcaliburBlue,this._alreadyWarnedDrawLifecycle=!1,this.debug=new it(this),this._totalPostProcessorTime=0;let{canvasElement:e,enableTransparency:i,smoothing:s,snapToPixel:r,backgroundColor:n,useDrawSorting:o}=t;if(this.__gl=e.getContext("webgl2",{antialias:null!=s?s:this.smoothing,premultipliedAlpha:!1,alpha:null==i||i,depth:!0,powerPreference:"high-performance"}),!this.__gl)throw Error("Failed to retrieve webgl context from browser");this.textureLoader=new eL(this.__gl),this.snapToPixel=null!=r?r:this.snapToPixel,this.smoothing=null!=s?s:this.smoothing,this.backgroundColor=null!=n?n:this.backgroundColor,this.useDrawSorting=null!=o?o:this.useDrawSorting,this._drawCallPool.disableWarnings=!0,this._drawCallPool.preallocate(),this._init()}_init(){let t=this.__gl;// Setup viewport and view matrix
this._ortho=eb.ortho(0,t.canvas.width,t.canvas.height,0,400,-400),t.viewport(0,0,t.canvas.width,t.canvas.height),// Clear background
t.clearColor(this.backgroundColor.r/255,this.backgroundColor.g/255,this.backgroundColor.b/255,this.backgroundColor.a),t.clear(t.COLOR_BUFFER_BIT),// Enable alpha blending
// https://www.realtimerendering.com/blog/gpus-prefer-premultiplication/
t.enable(t.BLEND),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),t.blendEquationSeparate(t.FUNC_ADD,t.FUNC_ADD),t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA),// Setup builtin renderers
this.register(new e1),this.register(new e9),this.register(new e2),this.register(new e5),this.register(new eZ),this.register(new eX),this._screenRenderer=new e$(t),this._renderTarget=new eH({gl:t,width:t.canvas.width,height:t.canvas.height}),this._postProcessTargets=[new eH({gl:t,width:t.canvas.width,height:t.canvas.height}),new eH({gl:t,width:t.canvas.width,height:t.canvas.height})]}register(t){this._renderers.set(t.type,t),t.initialize(this.__gl,this)}get(t){return this._renderers.get(t)}_isCurrentRenderer(t){return!this._currentRenderer||this._currentRenderer===t}beginDrawLifecycle(){this._isDrawLifecycle=!0}endDrawLifecycle(){this._isDrawLifecycle=!1}draw(t,...e){this._isDrawLifecycle||this._alreadyWarnedDrawLifecycle||(this._logger.warn(`Attempting to draw outside the the drawing lifecycle (preDraw/postDraw) is not supported and is a source of bugs/errors.
If you want to do custom drawing, use Actor.graphics, or any onPreDraw or onPostDraw handler.`),this._alreadyWarnedDrawLifecycle=!0);let i=this._renderers.get(t);if(i){if(this.useDrawSorting){let s=this._drawCallPool.get();s.z=this._state.current.z,s.priority=i.priority,s.renderer=t,this.getTransform().clone(s.transform),s.state.z=this._state.current.z,s.state.opacity=this._state.current.opacity,s.state.tint=this._state.current.tint,s.state.material=this._state.current.material,s.args=e,this._drawCalls.push(s)}else this._currentRenderer||(this._currentRenderer=i),this._isCurrentRenderer(i)||this._currentRenderer.flush(),// If we are still using the same renderer we can add to the current batch
i.draw(...e),this._currentRenderer=i}else throw Error(`No renderer with name ${t} has been registered`)}resetTransform(){this._transform.current=eQ.identity()}updateViewport(t){let e=this.__gl;this._ortho=this._ortho=eb.ortho(0,t.width,t.height,0,400,-400),this._renderTarget.setResolution(e.canvas.width,e.canvas.height),this._postProcessTargets[0].setResolution(e.canvas.width,e.canvas.height),this._postProcessTargets[1].setResolution(e.canvas.width,e.canvas.height)}drawImage(t,e,i,s,r,n,o,a,h){if(0!==s&&0!==r&&0!==a&&0!==h&&0!==t.width&&0!==t.height){if(!t){t9.getInstance().warn("Cannot draw a null or undefined image"),console.trace&&console.trace();return}this._state.current.material?this.draw("ex.material",t,e,i,s,r,n,o,a,h):this.draw("ex.image",t,e,i,s,r,n,o,a,h)}// zero dimension source exit early
}drawLine(t,e,i,s=1){this.draw("ex.rectangle",t,e,i,s)}drawRectangle(t,e,i,s,r,n){this.draw("ex.rectangle",t,e,i,s,r,n)}drawCircle(t,e,i,s,r){this.draw("ex.circle",t,e,i,s,r)}save(){this._transform.save(),this._state.save()}restore(){this._transform.restore(),this._state.restore()}translate(t,e){this._transform.translate(this.snapToPixel?~~(t+e7):t,this.snapToPixel?~~(e+e7):e)}rotate(t){this._transform.rotate(t)}scale(t,e){this._transform.scale(t,e)}transform(t){this._transform.current=t}getTransform(){return this._transform.current}multiply(t){this._transform.current.multiply(t,this._transform.current)}addPostProcessor(t){this._postprocessors.push(t),t.initialize(this.__gl)}removePostProcessor(t){let e=this._postprocessors.indexOf(t);-1!==e&&this._postprocessors.splice(e,1)}clearPostProcessors(){this._postprocessors.length=0}updatePostProcessors(t){for(let e of this._postprocessors){let i=e.getShader();i.use();let s=i.getUniforms();this._totalPostProcessorTime+=t,s.find(t=>"u_time_ms"===t.name)&&i.setUniformFloat("u_time_ms",this._totalPostProcessorTime),s.find(t=>"u_elapsed_ms"===t.name)&&i.setUniformFloat("u_elapsed_ms",t),s.find(t=>"u_resolution"===t.name)&&i.setUniformFloatVector("u_resolution",e_(this.width,this.height)),e.onUpdate&&e.onUpdate(t)}}set material(t){this._state.current.material=t}get material(){return this._state.current.material}/**
     * Creates and initializes the material which compiles the internal shader
     * @param options
     * @returns Material
     */createMaterial(t){let e=new e8(t);return e.initialize(this.__gl,this),e}createShader(t){let e=this.__gl,{vertexSource:i,fragmentSource:s}=t,r=new ej({gl:e,vertexSource:i,fragmentSource:s});return r.compile(),r}clear(){let t=this.__gl;this._renderTarget.use(),t.clearColor(this.backgroundColor.r/255,this.backgroundColor.g/255,this.backgroundColor.b/255,this.backgroundColor.a),// Clear the context with the newly set color. This is
// the function call that actually does the drawing.
t.clear(t.COLOR_BUFFER_BIT)}/**
     * Flushes all batched rendering to the screen
     */flush(){let t=this.__gl;if(// render target captures all draws and redirects to the render target
this._renderTarget.use(),this.useDrawSorting){// sort draw calls
// Find the original order of the first instance of the draw call
let t=new Map;for(let[e]of this._renderers){let i=this._drawCalls.findIndex(t=>t.renderer===e);t.set(e,i)}this._drawCalls.sort((e,i)=>{let s=e.z-i.z,r=t.get(e.renderer)-t.get(i.renderer),n=e.priority-i.priority;return 0===s?0===n?r:n// use the original order to inform draw call packing to maximally preserve painter order
:s});let e=this._transform.current,i=this._state.current;if(this._drawCalls.length){let t=this._drawCalls[0].renderer,e=this._renderers.get(t);for(let i=0;i<this._drawCalls.length;i++)// hydrate the state for renderers
this._transform.current=this._drawCalls[i].transform,this._state.current=this._drawCalls[i].state,this._drawCalls[i].renderer!==t&&(// switching graphics renderer means we must flush the previous
e.flush(),t=this._drawCalls[i].renderer,e=this._renderers.get(t)),// If we are still using the same renderer we can add to the current batch
e.draw(...this._drawCalls[i].args);e.hasPendingDraws()&&e.flush()}// reset state
this._transform.current=e,this._state.current=i,// reclaim draw calls
this._drawCallPool.done(),this._drawCalls.length=0}else // This is the final flush at the moment to draw any leftover pending draw
for(let t of this._renderers.values())t.hasPendingDraws()&&t.flush();this._renderTarget.disable();// post process step
let e=this._renderTarget.toRenderSource();e.use();// flip flop render targets
for(let t=0;t<this._postprocessors.length;t++)this._postProcessTargets[t%2].use(),this._screenRenderer.renderWithPostProcessor(this._postprocessors[t]),this._postProcessTargets[t%2].toRenderSource().use();// passing null switches rendering back to the canvas
t.bindFramebuffer(t.FRAMEBUFFER,null),this._screenRenderer.renderToScreen()}}class ii{constructor(t){this._ex=t,this._debugText=new ez}/**
     * Draw a debug rectangle to the context
     * @param x
     * @param y
     * @param width
     * @param height
     */drawRect(t,e,i,s){this._ex.__ctx.save(),this._ex.__ctx.strokeStyle="red",this._ex.__ctx.strokeRect(this._ex.snapToPixel?~~(t+1e-4):t,this._ex.snapToPixel?~~(e+1e-4):e,this._ex.snapToPixel?~~(i+1e-4):i,this._ex.snapToPixel?~~(s+1e-4):s),this._ex.__ctx.restore()}drawLine(t,e,i={color:ef.Black}){this._ex.__ctx.save(),this._ex.__ctx.beginPath(),this._ex.__ctx.strokeStyle=i.color.toString(),this._ex.__ctx.moveTo(this._ex.snapToPixel?~~(t.x+1e-4):t.x,this._ex.snapToPixel?~~(t.y+1e-4):t.y),this._ex.__ctx.lineTo(this._ex.snapToPixel?~~(e.x+1e-4):e.x,this._ex.snapToPixel?~~(e.y+1e-4):e.y),this._ex.__ctx.lineWidth=2,this._ex.__ctx.stroke(),this._ex.__ctx.closePath(),this._ex.__ctx.restore()}drawPoint(t,e={color:ef.Black,size:5}){this._ex.__ctx.save(),this._ex.__ctx.beginPath(),this._ex.__ctx.fillStyle=e.color.toString(),this._ex.__ctx.arc(this._ex.snapToPixel?~~(t.x+1e-4):t.x,this._ex.snapToPixel?~~(t.y+1e-4):t.y,e.size,0,2*Math.PI),this._ex.__ctx.fill(),this._ex.__ctx.closePath(),this._ex.__ctx.restore()}drawText(t,e){this._debugText.write(this._ex,t,e)}}class is{get width(){return this.__ctx.canvas.width}get height(){return this.__ctx.canvas.height}get opacity(){return this._state.current.opacity}set opacity(t){this._state.current.opacity=t}get tint(){return this._state.current.tint}set tint(t){this._state.current.tint=t}get smoothing(){return this.__ctx.imageSmoothingEnabled}set smoothing(t){this.__ctx.imageSmoothingEnabled=t}constructor(t){/**
         * Unused in Canvas implementation
         */this.useDrawSorting=!1,/**
         * Unused in Canvas implementation
         */this.z=0,this.backgroundColor=ef.ExcaliburBlue,this._state=new eT,this.snapToPixel=!1,this.debug=new ii(this);let{canvasElement:e,enableTransparency:i,snapToPixel:s,smoothing:r,backgroundColor:n}=t;this.__ctx=e.getContext("2d",{alpha:null==i||i}),this.backgroundColor=null!=n?n:this.backgroundColor,this.snapToPixel=null!=s?s:this.snapToPixel,this.smoothing=null!=r?r:this.smoothing}resetTransform(){this.__ctx.resetTransform()}updateViewport(t){// pass
}drawImage(t,e,i,s,r,n,o,a,h){if(0===s||0===r||0===a||0===h||0===t.width||0===t.height)return;// zero dimension dest exit early
// zero dimension source exit early
this.__ctx.globalAlpha=this.opacity;let l=[t,e,i,s,r,n,o,a,h].filter(t=>void 0!==t).map(t=>"number"==typeof t&&this.snapToPixel?~~t:t);this.__ctx.drawImage.apply(this.__ctx,l),eJ.DrawCallCount++,eJ.DrawnImagesCount=1}drawLine(t,e,i,s=1){this.__ctx.save(),this.__ctx.beginPath(),this.__ctx.strokeStyle=i.toString(),this.__ctx.moveTo(this.snapToPixel?~~(t.x+1e-4):t.x,this.snapToPixel?~~(t.y+1e-4):t.y),this.__ctx.lineTo(this.snapToPixel?~~(e.x+1e-4):e.x,this.snapToPixel?~~(e.y+1e-4):e.y),this.__ctx.lineWidth=s,this.__ctx.stroke(),this.__ctx.closePath(),this.__ctx.restore()}drawRectangle(t,e,i,s){this.__ctx.save(),this.__ctx.fillStyle=s.toString(),this.__ctx.fillRect(this.snapToPixel?~~(t.x+1e-4):t.x,this.snapToPixel?~~(t.y+1e-4):t.y,this.snapToPixel?~~(e+1e-4):e,this.snapToPixel?~~(i+1e-4):i),this.__ctx.restore()}drawCircle(t,e,i,s,r){this.__ctx.save(),this.__ctx.beginPath(),s&&(this.__ctx.strokeStyle=s.toString()),r&&(this.__ctx.lineWidth=r),this.__ctx.fillStyle=i.toString(),this.__ctx.arc(this.snapToPixel?~~(t.x+1e-4):t.x,this.snapToPixel?~~(t.y+1e-4):t.y,e,0,2*Math.PI),this.__ctx.fill(),s&&this.__ctx.stroke(),this.__ctx.closePath(),this.__ctx.restore()}/**
     * Save the current state of the canvas to the stack (transforms and opacity)
     */save(){this.__ctx.save()}/**
     * Restore the state of the canvas from the stack
     */restore(){this.__ctx.restore()}/**
     * Translate the origin of the context by an x and y
     * @param x
     * @param y
     */translate(t,e){this.__ctx.translate(this.snapToPixel?~~(t+1e-4):t,this.snapToPixel?~~(e+1e-4):e)}/**
     * Rotate the context about the current origin
     */rotate(t){this.__ctx.rotate(t)}/**
     * Scale the context by an x and y factor
     * @param x
     * @param y
     */scale(t,e){this.__ctx.scale(t,e)}getTransform(){throw Error("Not implemented")}multiply(t){this.__ctx.setTransform(this.__ctx.getTransform().multiply(t.toDOMMatrix()))}addPostProcessor(t){// pass
}removePostProcessor(t){// pass
}clearPostProcessors(){// pass
}updatePostProcessors(t){// pass
}beginDrawLifecycle(){// pass
}endDrawLifecycle(){// pass
}set material(t){this._state.current.material=t}get material(){return this._state.current.material}createMaterial(t){// pass
return null}clear(){// Clear frame
this.__ctx.clearRect(0,0,this.width,this.height),this.__ctx.fillStyle=this.backgroundColor.toString(),this.__ctx.fillRect(0,0,this.width,this.height),eJ.clear()}/**
     * Flushes the batched draw calls to the screen
     */flush(){// pass
}}/**
     * Default, use a specified resolution for the game. Like 800x600 pixels for example.
     */(c=Y||(Y={})).Fixed="Fixed",/**
     * Fit the aspect ratio given by the game resolution within the container at all times will fill any gaps with canvas.
     * The displayed area outside the aspect ratio is not guaranteed to be on the screen, only the [[Screen.contentArea]]
     * is guaranteed to be on screen.
     */c.FitContainerAndFill="FitContainerAndFill",/**
     * Fit the aspect ratio given by the game resolution the screen at all times will fill the screen.
     * This displayed area outside the aspect ratio is not guaranteed to be on the screen, only the [[Screen.contentArea]]
     * is guaranteed to be on screen.
     */c.FitScreenAndFill="FitScreenAndFill",/**
     * Fit the viewport to the parent element maintaining aspect ratio given by the game resolution, but zooms in to avoid the black bars
     * (letterbox) that would otherwise be present in [[FitContainer]].
     *
     * **warning** This will clip some drawable area from the user because of the zoom,
     * use [[Screen.contentArea]] to know the safe to draw area.
     */c.FitContainerAndZoom="FitContainerAndZoom",/**
     * Fit the viewport to the device screen maintaining aspect ratio given by the game resolution, but zooms in to avoid the black bars
     * (letterbox) that would otherwise be present in [[FitScreen]].
     *
     * **warning** This will clip some drawable area from the user because of the zoom,
     * use [[Screen.contentArea]] to know the safe to draw area.
     */c.FitScreenAndZoom="FitScreenAndZoom",/**
     * Fit to screen using as much space as possible while maintaining aspect ratio and resolution.
     * This is not the same as [[Screen.goFullScreen]] but behaves in a similar way maintaining aspect ratio.
     *
     * You may want to center your game here is an example
     * ```html
     * <!-- html -->
     * <body>
     * <main>
     *   <canvas id="game"></canvas>
     * </main>
     * </body>
     * ```
     *
     * ```css
     * // css
     * main {
     *   display: flex;
     *   align-items: center;
     *   justify-content: center;
     *   height: 100%;
     *   width: 100%;
     * }
     * ```
     */c.FitScreen="FitScreen",/**
     * Fill the entire screen's css width/height for the game resolution dynamically. This means the resolution of the game will
     * change dynamically as the window is resized. This is not the same as [[Screen.goFullScreen]]
     */c.FillScreen="FillScreen",/**
     * Fit to parent element width/height using as much space as possible while maintaining aspect ratio and resolution.
     */c.FitContainer="FitContainer",/**
     * Use the parent DOM container's css width/height for the game resolution dynamically
     */c.FillContainer="FillContainer";/**
 * Convenience class for quick resolutions
 * Mostly sourced from https://emulation.gametechwiki.com/index.php/Resolution
 */class ir{/* istanbul ignore next */static get SVGA(){return{width:800,height:600}}/* istanbul ignore next */static get Standard(){return{width:1920,height:1080}}/* istanbul ignore next */static get Atari2600(){return{width:160,height:192}}/* istanbul ignore next */static get GameBoy(){return{width:160,height:144}}/* istanbul ignore next */static get GameBoyAdvance(){return{width:240,height:160}}/* istanbul ignore next */static get NintendoDS(){return{width:256,height:192}}/* istanbul ignore next */static get NES(){return{width:256,height:224}}/* istanbul ignore next */static get SNES(){return{width:256,height:244}}}/**
 * The Screen handles all aspects of interacting with the screen for Excalibur.
 */class Screen{constructor(t){var e,i,s;this._antialiasing=!0,this._resolutionStack=[],this._viewportStack=[],this._pixelRatioOverride=null,this._isFullScreen=!1,this._isDisposed=!1,this._logger=t9.getInstance(),this._fullscreenChangeHandler=()=>{this._isFullScreen=!this._isFullScreen,this._logger.debug("Fullscreen Change",this._isFullScreen)},this._pixelRatioChangeHandler=()=>{this._logger.debug("Pixel Ratio Change",window.devicePixelRatio),this._listenForPixelRatio(),this._devicePixelRatio=this._calculateDevicePixelRatio(),this.applyResolutionAndViewport()},this._resizeHandler=()=>{let t=this.parent;this._logger.debug("View port resized"),this._setResolutionAndViewportByDisplayMode(t),this.applyResolutionAndViewport()},// Asking the window.devicePixelRatio is expensive we do it once
this._devicePixelRatio=this._calculateDevicePixelRatio(),this._alreadyWarned=!1,this._contentArea=new ey,this.viewport=t.viewport,this.resolution=null!==(e=t.resolution)&&void 0!==e?e:{...this.viewport},this._contentResolution=this.resolution,this._displayMode=null!==(i=t.displayMode)&&void 0!==i?i:Y.Fixed,this._canvas=t.canvas,this.graphicsContext=t.context,this._antialiasing=null!==(s=t.antialiasing)&&void 0!==s?s:this._antialiasing,this._browser=t.browser,this._pixelRatioOverride=t.pixelRatio,this._applyDisplayMode(),this._listenForPixelRatio(),this._canvas.addEventListener("fullscreenchange",this._fullscreenChangeHandler),this.applyResolutionAndViewport()}_listenForPixelRatio(){this._mediaQueryList&&!this._mediaQueryList.addEventListener&&this._mediaQueryList.removeListener(this._pixelRatioChangeHandler),this._mediaQueryList=this._browser.window.nativeComponent.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this._mediaQueryList.addEventListener?this._mediaQueryList.addEventListener("change",this._pixelRatioChangeHandler,{once:!0}):this._mediaQueryList.addListener(this._pixelRatioChangeHandler)}dispose(){this._isDisposed||(// Clean up handlers
this._isDisposed=!0,this._browser.window.off("resize",this._resizeHandler),this._resizeObserver&&this._resizeObserver.disconnect(),this.parent.removeEventListener("resize",this._resizeHandler),this._mediaQueryList.removeEventListener?this._mediaQueryList.removeEventListener("change",this._pixelRatioChangeHandler):this._mediaQueryList.removeListener(this._pixelRatioChangeHandler),this._canvas.removeEventListener("fullscreenchange",this._fullscreenChangeHandler))}_calculateDevicePixelRatio(){if(window.devicePixelRatio<1)return 1;let t=window.devicePixelRatio||1;return t}get pixelRatio(){return this._pixelRatioOverride?this._pixelRatioOverride:this._devicePixelRatio}get isHiDpi(){return 1!==this.pixelRatio}get displayMode(){return this._displayMode}get canvas(){return this._canvas}get parent(){switch(this.displayMode){case Y.FillContainer:case Y.FitContainer:case Y.FitContainerAndFill:case Y.FitContainerAndZoom:return this.canvas.parentElement||document.body;default:return window}}get resolution(){return this._resolution}set resolution(t){this._resolution=t}get viewport(){return this._viewport?this._viewport:this._resolution}set viewport(t){this._viewport=t}get aspectRatio(){return this._resolution.width/this._resolution.height}get scaledWidth(){return this._resolution.width*this.pixelRatio}get scaledHeight(){return this._resolution.height*this.pixelRatio}setCurrentCamera(t){this._camera=t}pushResolutionAndViewport(){this._resolutionStack.push(this.resolution),this._viewportStack.push(this.viewport),this.resolution={...this.resolution},this.viewport={...this.viewport}}peekViewport(){return this._viewportStack[this._viewportStack.length-1]}peekResolution(){return this._resolutionStack[this._resolutionStack.length-1]}popResolutionAndViewport(){this.resolution=this._resolutionStack.pop(),this.viewport=this._viewportStack.pop()}applyResolutionAndViewport(){if(this._canvas.width=this.scaledWidth,this._canvas.height=this.scaledHeight,this.graphicsContext instanceof ie){let t=this.graphicsContext.checkIfResolutionSupported({width:this.scaledWidth,height:this.scaledHeight});t||this._alreadyWarned||(this._alreadyWarned=!0,this._logger.warn(`The currently configured resolution (${this.resolution.width}x${this.resolution.height}) and pixel ratio (${this.pixelRatio}) are too large for the platform WebGL implementation, this may work but cause WebGL rendering to behave oddly. Try reducing the resolution or disabling Hi DPI scaling to avoid this (read more here https://excaliburjs.com/docs/screens#understanding-viewport--resolution).`))}this._antialiasing?this._canvas.style.imageRendering="auto":(this._canvas.style.imageRendering="pixelated",""===this._canvas.style.imageRendering&&(this._canvas.style.imageRendering="crisp-edges")),this._canvas.style.width=this.viewport.width+"px",this._canvas.style.height=this.viewport.height+"px",// After messing with the canvas width/height the graphics context is invalidated and needs to have some properties reset
this.graphicsContext.updateViewport(this.resolution),this.graphicsContext.resetTransform(),this.graphicsContext.smoothing=this._antialiasing,this.graphicsContext instanceof is&&this.graphicsContext.scale(this.pixelRatio,this.pixelRatio)}get antialiasing(){return this._antialiasing}set antialiasing(t){this._antialiasing=t,this.graphicsContext.smoothing=this._antialiasing}/**
     * Returns true if excalibur is fullscreen using the browser fullscreen api
     */get isFullScreen(){return this._isFullScreen}/**
     * Requests to go fullscreen using the browser fullscreen api, requires user interaction to be successful.
     * For example, wire this to a user click handler.
     *
     * Optionally specify a target element id to go fullscreen, by default the game canvas is used
     * @param elementId
     */goFullScreen(t){if(t){let e=document.getElementById(t);if(e)return e.requestFullscreen()}return this._canvas.requestFullscreen()}/**
     * Requests to exit fullscreen using the browser fullscreen api
     */exitFullScreen(){return document.exitFullscreen()}/**
     * Takes a coordinate in normal html page space, for example from a pointer move event, and translates it to
     * Excalibur screen space.
     *
     * Excalibur screen space starts at the top left (0, 0) corner of the viewport, and extends to the
     * bottom right corner (resolutionX, resolutionY)
     * @param point
     */pageToScreenCoordinates(t){let e=t.x,i=t.y;// if fullscreen api on it centers with black bars
// we need to adjust the screen to world coordinates in this case
if(this._isFullScreen||(e-=ex(this._canvas).x,i-=ex(this._canvas).y),this._isFullScreen){if(window.innerWidth/this.aspectRatio<window.innerHeight){let t=window.innerWidth/this.aspectRatio,s=(window.innerHeight-t)/2;i=(i-s)/t*this.viewport.height,e=e/window.innerWidth*this.viewport.width}else{let t=window.innerHeight*this.aspectRatio,s=(window.innerWidth-t)/2;e=(e-s)/t*this.viewport.width,i=i/window.innerHeight*this.viewport.height}}return new ep(e=e/this.viewport.width*this.resolution.width,i=i/this.viewport.height*this.resolution.height)}/**
     * Takes a coordinate in Excalibur screen space, and translates it to normal html page space. For example,
     * this is where html elements might live if you want to position them relative to Excalibur.
     *
     * Excalibur screen space starts at the top left (0, 0) corner of the viewport, and extends to the
     * bottom right corner (resolutionX, resolutionY)
     * @param point
     */screenToPageCoordinates(t){let e=t.x,i=t.y;if(e=e/this.resolution.width*this.viewport.width,i=i/this.resolution.height*this.viewport.height,this._isFullScreen){if(window.innerWidth/this.aspectRatio<window.innerHeight){let t=window.innerWidth/this.aspectRatio,s=(window.innerHeight-t)/2;i=i/this.viewport.height*t+s,e=e/this.viewport.width*window.innerWidth}else{let t=window.innerHeight*this.aspectRatio,s=(window.innerWidth-t)/2;e=e/this.viewport.width*t+s,i=i/this.viewport.height*window.innerHeight}}return this._isFullScreen||(e+=ex(this._canvas).x,i+=ex(this._canvas).y),new ep(e,i)}/**
     * Takes a coordinate in Excalibur screen space, and translates it to Excalibur world space.
     *
     * World space is where [[Entity|entities]] in Excalibur live by default [[CoordPlane.World]]
     * and extends infinitely out relative from the [[Camera]].
     * @param point  Screen coordinate to convert
     */screenToWorldCoordinates(t){return(// the only difference between screen & world is the camera transform
this._camera?this._camera.inverse.multiply(t):t.sub(e_(this.resolution.width/2,this.resolution.height/2)))}/**
     * Takes a coordinate in Excalibur world space, and translates it to Excalibur screen space.
     *
     * Screen space is where [[ScreenElement|screen elements]] and [[Entity|entities]] with [[CoordPlane.Screen]] live.
     * @param point  World coordinate to convert
     */worldToScreenCoordinates(t){return this._camera?this._camera.transform.multiply(t):t.add(e_(this.resolution.width/2,this.resolution.height/2))}pageToWorldCoordinates(t){let e=this.pageToScreenCoordinates(t);return this.screenToWorldCoordinates(e)}worldToPageCoordinates(t){let e=this.worldToScreenCoordinates(t);return this.screenToPageCoordinates(e)}/**
     * Returns a BoundingBox of the top left corner of the screen
     * and the bottom right corner of the screen.
     *
     * World bounds are in world coordinates, useful for culling objects offscreen
     */getWorldBounds(){let t=ey.fromDimension(this.resolution.width,this.resolution.height,ep.Half).scale(e_(1/this._camera.zoom,1/this._camera.zoom)).rotate(this._camera.rotation).translate(this._camera.pos);return t}/**
     * The width of the game canvas in pixels (physical width component of the
     * resolution of the canvas element)
     */get canvasWidth(){return this.canvas.width}/**
     * Returns half width of the game canvas in pixels (half physical width component)
     */get halfCanvasWidth(){return this.canvas.width/2}/**
     * The height of the game canvas in pixels, (physical height component of
     * the resolution of the canvas element)
     */get canvasHeight(){return this.canvas.height}/**
     * Returns half height of the game canvas in pixels (half physical height component)
     */get halfCanvasHeight(){return this.canvas.height/2}/**
     * Returns the width of the engine's visible drawing surface in pixels including zoom and device pixel ratio.
     */get drawWidth(){return this._camera?this.resolution.width/this._camera.zoom:this.resolution.width}/**
     * Returns half the width of the engine's visible drawing surface in pixels including zoom and device pixel ratio.
     */get halfDrawWidth(){return this.drawWidth/2}/**
     * Returns the height of the engine's visible drawing surface in pixels including zoom and device pixel ratio.
     */get drawHeight(){return this._camera?this.resolution.height/this._camera.zoom:this.resolution.height}/**
     * Returns half the height of the engine's visible drawing surface in pixels including zoom and device pixel ratio.
     */get halfDrawHeight(){return this.drawHeight/2}/**
     * Returns screen center coordinates including zoom and device pixel ratio.
     */get center(){return e_(this.halfDrawWidth,this.halfDrawHeight)}/**
     * Returns the content area in screen space where it is safe to place content
     */get contentArea(){return this._contentArea}_computeFit(){document.body.style.margin="0px",document.body.style.overflow="hidden";let t=this.aspectRatio,e=0,i=0;window.innerWidth/t<window.innerHeight?(e=window.innerWidth,i=window.innerWidth/t):(e=window.innerHeight*t,i=window.innerHeight),this.viewport={width:e,height:i},this._contentArea=ey.fromDimension(this.resolution.width,this.resolution.height,ep.Zero)}_computeFitScreenAndFill(){document.body.style.margin="0px",document.body.style.overflow="hidden";let t=window.innerWidth,e=window.innerHeight;this._computeFitAndFill(t,e)}_computeFitContainerAndFill(){document.body.style.margin="0px",document.body.style.overflow="hidden";let t=this.canvas.parentElement,e=t.clientWidth,i=t.clientHeight;this._computeFitAndFill(e,i)}_computeFitAndFill(t,e){// if the current screen aspectRatio is less than the original aspectRatio
if(this.viewport={width:t,height:e},t/e<=this._contentResolution.width/this._contentResolution.height){// compute new resolution to match the original aspect ratio
this.resolution={width:t*this._contentResolution.width/t,height:t*this._contentResolution.width/t*e/t};let i=(this.resolution.height-this._contentResolution.height)/2;this._contentArea=new ey({top:i,left:0,right:this._contentResolution.width,bottom:this.resolution.height-i})}else{this.resolution={width:e*this._contentResolution.height/e*t/e,height:e*this._contentResolution.height/e};let i=(this.resolution.width-this._contentResolution.width)/2;this._contentArea=new ey({top:0,left:i,right:this.resolution.width-i,bottom:this._contentResolution.height})}}_computeFitScreenAndZoom(){document.body.style.margin="0px",document.body.style.overflow="hidden",this.canvas.style.position="absolute";let t=window.innerWidth,e=window.innerHeight;this._computeFitAndZoom(t,e)}_computeFitContainerAndZoom(){document.body.style.margin="0px",document.body.style.overflow="hidden",this.canvas.style.position="absolute";let t=this.canvas.parentElement;t.style.position="relative",t.style.overflow="hidden";let e=t.clientWidth,i=t.clientHeight;this._computeFitAndZoom(e,i)}_computeFitAndZoom(t,e){let i=this.aspectRatio,s=0,r=0;t/i<e?(s=t,r=t/i):(s=e*i,r=e);let n=t/s,o=e/r,a=Math.max(n,o),h=s*a,l=r*a;h>t?this.canvas.style.left=-(h-t)/2+"px":this.canvas.style.left="",l>e?this.canvas.style.top=-(l-e)/2+"px":this.canvas.style.top="",this.viewport={width:h,height:l};let A=ey.fromDimension(this.viewport.width,this.viewport.height,ep.Zero);// return safe area
if(this.viewport.width>t){let e=(this.viewport.width-t)/this.viewport.width*this.resolution.width;A.top=0,A.left=e/2,A.right=this.resolution.width-e/2,A.bottom=this.resolution.height}if(this.viewport.height>e){let t=(this.viewport.height-e)/this.viewport.height*this.resolution.height;A.top=t/2,A.left=0,A.bottom=this.resolution.height-t/2,A.right=this.resolution.width}this._contentArea=A}_computeFitContainer(){let t=this.aspectRatio,e=0,i=0,s=this.canvas.parentElement;s.clientWidth/t<s.clientHeight?(e=s.clientWidth,i=s.clientWidth/t):(e=s.clientHeight*t,i=s.clientHeight),this.viewport={width:e,height:i},this._contentArea=ey.fromDimension(this.resolution.width,this.resolution.height,ep.Zero)}_applyDisplayMode(){this._setResolutionAndViewportByDisplayMode(this.parent),this.parent instanceof Window?this._browser.window.on("resize",this._resizeHandler):(this._resizeObserver=new ResizeObserver(()=>{this._resizeHandler()}),this._resizeObserver.observe(this.parent)),this.parent.addEventListener("resize",this._resizeHandler)}/**
     * Sets the resolution and viewport based on the selected display mode.
     */_setResolutionAndViewportByDisplayMode(t){this.displayMode===Y.FillContainer&&(this.resolution={width:t.clientWidth,height:t.clientHeight},this.viewport=this.resolution),this.displayMode===Y.FillScreen&&(document.body.style.margin="0px",document.body.style.overflow="hidden",this.resolution={width:t.innerWidth,height:t.innerHeight},this.viewport=this.resolution),this._contentArea=ey.fromDimension(this.resolution.width,this.resolution.height,ep.Zero),this.displayMode===Y.FitScreen&&this._computeFit(),this.displayMode===Y.FitContainer&&this._computeFitContainer(),this.displayMode===Y.FitScreenAndFill&&this._computeFitScreenAndFill(),this.displayMode===Y.FitContainerAndFill&&this._computeFitContainerAndFill(),this.displayMode===Y.FitScreenAndZoom&&this._computeFitScreenAndZoom(),this.displayMode===Y.FitContainerAndZoom&&this._computeFitContainerAndZoom()}}/**
 * Internal class used to build instances of AudioContext
 *//* istanbul ignore next */class io{static create(){return!this._INSTANCE&&(window.AudioContext||window.webkitAudioContext)&&(this._INSTANCE=new AudioContext),this._INSTANCE}}io._INSTANCE=null;class ia{/**
     * Play an empty sound to unlock Safari WebAudio context. Call this function
     * right after a user interaction event.
     * @source https://paulbakaus.com/tutorials/html5/web-audio-on-ios/
     */static unlock(){let t=new Promise((t,e)=>{if(ia._UNLOCKED||!io.create())return t(!0);let i=setTimeout(()=>{t9.getInstance().warn("Excalibur was unable to unlock the audio context, audio probably will not play in this browser."),t(!1)},200),s=io.create();s.resume().then(()=>{// create empty buffer and play it
let e=s.createBuffer(1,1,22050),r=s.createBufferSource(),n=!1;r.buffer=e,r.connect(s.destination),r.onended=()=>n=!0,r.start(0),// by checking the play state after some time, we know if we're really unlocked
setTimeout(()=>{r.playbackState?(r.playbackState===r.PLAYING_STATE||r.playbackState===r.FINISHED_STATE)&&(ia._UNLOCKED=!0):(s.currentTime>0||n)&&(ia._UNLOCKED=!0)},0),clearTimeout(i),t(!0)},()=>{e()})});return t}static isUnlocked(){return this._UNLOCKED}}/* istanbul ignore next *//**
 * Draw a line on canvas context
 *
 * @param ctx The canvas context
 * @param color The color of the line
 * @param x1 The start x coordinate
 * @param y1 The start y coordinate
 * @param x2 The ending x coordinate
 * @param y2 The ending y coordinate
 * @param thickness The line thickness
 * @param cap The [[LineCapStyle]] (butt, round, or square)
 */function ih(t,e=ef.Red,i,s,r,n,o=1,a="butt"){t.save(),t.beginPath(),t.lineWidth=o,t.lineCap=a,t.strokeStyle=e.toString(),t.moveTo(i,s),t.lineTo(r,n),t.closePath(),t.stroke(),t.restore()}/* istanbul ignore next *//**
 * Draw the vector as a point onto the canvas.
 */function il(t,e=ef.Red,i){t.beginPath(),t.strokeStyle=e.toString(),t.arc(i.x,i.y,5,0,2*Math.PI),t.closePath(),t.stroke()}/**
 * Draw the vector as a line onto the canvas starting a origin point.
 *//* istanbul ignore next *//**
 *
 */function iA(t,e,i,s,r=1){let n=e?e.toString():"blue",o=s.scale(r);t.beginPath(),t.strokeStyle=n,t.moveTo(i.x,i.y),t.lineTo(i.x+o.x,i.y+o.y),t.closePath(),t.stroke()}/**
 * Draw a round rectangle on a canvas context
 *
 * @param ctx The canvas context
 * @param x The top-left x coordinate
 * @param y The top-left y coordinate
 * @param width The width of the rectangle
 * @param height The height of the rectangle
 * @param radius The border radius of the rectangle
 * @param stroke The [[Color]] to stroke rectangle with
 * @param fill The [[Color]] to fill rectangle with
 */function id(t,e,i,s,r,n=5,o=ef.White,a=null){let h;if("number"==typeof n)h={tl:n,tr:n,br:n,bl:n};else{let t={tl:0,tr:0,br:0,bl:0};for(let e in t)t.hasOwnProperty(e)&&(h[e]=n[e]||t[e])}t.beginPath(),t.moveTo(e+h.tl,i),t.lineTo(e+s-h.tr,i),t.quadraticCurveTo(e+s,i,e+s,i+h.tr),t.lineTo(e+s,i+r-h.br),t.quadraticCurveTo(e+s,i+r,e+s-h.br,i+r),t.lineTo(e+h.bl,i+r),t.quadraticCurveTo(e,i+r,e,i+r-h.bl),t.lineTo(e,i+h.tl),t.quadraticCurveTo(e,i,e+h.tl,i),t.closePath(),a&&(t.fillStyle=a.toString(),t.fill()),o&&(t.strokeStyle=o.toString(),t.stroke())}/**
 *
 */function ic(t,e,i,s,r=ef.White,n=null){t.beginPath(),t.arc(e,i,s,0,2*Math.PI),t.closePath(),n&&(t.fillStyle=n.toString(),t.fill()),r&&(t.strokeStyle=r.toString(),t.stroke())}ia._UNLOCKED=!1;// EXTERNAL MODULE: ./Loader.css
var iu=n(1388);/**
 * A Raster is a Graphic that needs to be first painted to a HTMLCanvasElement before it can be drawn to the
 * [[ExcaliburGraphicsContext]]. This is useful for generating custom images using the 2D canvas api.
 *
 * Implementors must implement the [[Raster.execute]] method to rasterize their drawing.
 */class ig extends eR{constructor(t){var e,i,s,r,n,o,a,h,l,A;super(t),this.filtering=null,this.lineCap="butt",this.quality=1,this._dirty=!0,this._smoothing=!1,this._color=ek(ef.Black,()=>this.flagDirty()),this._lineWidth=1,this._lineDash=[],this._padding=0,t&&(this.quality=null!==(e=t.quality)&&void 0!==e?e:this.quality,this.color=null!==(i=t.color)&&void 0!==i?i:ef.Black,this.strokeColor=null==t?void 0:t.strokeColor,this.smoothing=null!==(s=t.smoothing)&&void 0!==s?s:this.smoothing,this.lineWidth=null!==(r=t.lineWidth)&&void 0!==r?r:this.lineWidth,this.lineDash=null!==(n=t.lineDash)&&void 0!==n?n:this.lineDash,this.lineCap=null!==(o=t.lineCap)&&void 0!==o?o:this.lineCap,this.padding=null!==(a=t.padding)&&void 0!==a?a:this.padding,this.filtering=null!==(h=t.filtering)&&void 0!==h?h:this.filtering),this._bitmap=document.createElement("canvas");// get the default canvas width/height as a fallback
let d=null!==(l=null==t?void 0:t.width)&&void 0!==l?l:this._bitmap.width,c=null!==(A=null==t?void 0:t.height)&&void 0!==A?A:this._bitmap.height;this.width=d,this.height=c;let u=this._bitmap.getContext("2d");if(u)this._ctx=u;else /* istanbul ignore next */throw Error("Browser does not support 2d canvas drawing, cannot create Raster graphic")}cloneRasterOptions(){return{color:this.color?this.color.clone():null,strokeColor:this.strokeColor?this.strokeColor.clone():null,smoothing:this.smoothing,lineWidth:this.lineWidth,lineDash:this.lineDash,lineCap:this.lineCap,quality:this.quality,padding:this.padding}}/**
     * Gets whether the graphic is dirty, this means there are changes that haven't been re-rasterized
     */get dirty(){return this._dirty}/**
     * Flags the graphic as dirty, meaning it must be re-rasterized before draw.
     * This should be called any time the graphics state changes such that it affects the outputted drawing
     */flagDirty(){this._dirty=!0}/**
     * Gets or sets the current width of the Raster graphic. Setting the width will cause the raster
     * to be flagged dirty causing a re-raster on the next draw.
     *
     * Any `padding`s or `quality` set will be factored into the width
     */get width(){return Math.abs(this._getTotalWidth()*this.scale.x)}set width(t){t/=Math.abs(this.scale.x),this._bitmap.width=t,this._originalWidth=t,this.flagDirty()}/**
     * Gets or sets the current height of the Raster graphic. Setting the height will cause the raster
     * to be flagged dirty causing a re-raster on the next draw.
     *
     * Any `padding` or `quality` set will be factored into the height
     */get height(){return Math.abs(this._getTotalHeight()*this.scale.y)}set height(t){t/=Math.abs(this.scale.y),this._bitmap.height=t,this._originalHeight=t,this.flagDirty()}_getTotalWidth(){var t;return((null!==(t=this._originalWidth)&&void 0!==t?t:this._bitmap.width)+2*this.padding)*1}_getTotalHeight(){var t;return((null!==(t=this._originalHeight)&&void 0!==t?t:this._bitmap.height)+2*this.padding)*1}/**
     * Returns the local bounds of the Raster including the padding
     */get localBounds(){return ey.fromDimension(this._getTotalWidth()*this.scale.x,this._getTotalHeight()*this.scale.y,ep.Zero)}/**
     * Gets or sets the smoothing (anti-aliasing of the graphic). Setting the height will cause the raster
     * to be flagged dirty causing a re-raster on the next draw.
     */get smoothing(){return this._smoothing}set smoothing(t){this._smoothing=t,this.flagDirty()}/**
     * Gets or sets the fillStyle of the Raster graphic. Setting the fillStyle will cause the raster to be
     * flagged dirty causing a re-raster on the next draw.
     */get color(){return this._color}set color(t){this.flagDirty(),this._color=ek(t,()=>this.flagDirty())}/**
     * Gets or sets the strokeStyle of the Raster graphic. Setting the strokeStyle will cause the raster to be
     * flagged dirty causing a re-raster on the next draw.
     */get strokeColor(){return this._strokeColor}set strokeColor(t){this.flagDirty(),this._strokeColor=ek(t,()=>this.flagDirty())}/**
     * Gets or sets the line width of the Raster graphic. Setting the lineWidth will cause the raster to be
     * flagged dirty causing a re-raster on the next draw.
     */get lineWidth(){return this._lineWidth}set lineWidth(t){this._lineWidth=t,this.flagDirty()}get lineDash(){return this._lineDash}set lineDash(t){this._lineDash=t,this.flagDirty()}get padding(){return this._padding}set padding(t){this._padding=t,this.flagDirty()}/**
     * Rasterize the graphic to a bitmap making it usable as in excalibur. Rasterize is called automatically if
     * the graphic is [[Raster.dirty]] on the next [[Graphic.draw]] call
     */rasterize(){this._dirty=!1,this._ctx.clearRect(0,0,this._getTotalWidth(),this._getTotalHeight()),this._ctx.save(),this._applyRasterProperties(this._ctx),this.execute(this._ctx),this._ctx.restore()}_applyRasterProperties(t){var e,i,s;this._bitmap.width=this._getTotalWidth()*this.quality,this._bitmap.height=this._getTotalHeight()*this.quality,// Do a bad thing to pass the filtering as an attribute
this._bitmap.setAttribute("filtering",this.filtering),this._bitmap.setAttribute("forceUpload","true"),t.scale(this.quality,this.quality),t.translate(this.padding,this.padding),t.imageSmoothingEnabled=this.smoothing,t.lineWidth=this.lineWidth,t.setLineDash(null!==(e=this.lineDash)&&void 0!==e?e:t.getLineDash()),t.lineCap=this.lineCap,t.strokeStyle=null===(i=this.strokeColor)||void 0===i?void 0:i.toString(),t.fillStyle=null===(s=this.color)||void 0===s?void 0:s.toString()}_drawImage(t,e,i){this._dirty&&this.rasterize(),t.scale(1/this.quality,1/this.quality),t.drawImage(this._bitmap,e,i)}}/**
 * A canvas [[Graphic]] to provide an adapter between the 2D Canvas API and the [[ExcaliburGraphicsContext]].
 *
 * The [[Canvas]] works by re-rastering a draw handler to a HTMLCanvasElement for every draw which is then passed
 * to the [[ExcaliburGraphicsContext]] implementation as a rendered image.
 *
 * **Low performance API**
 */class ip extends ig{/**
     * Return the 2D graphics context of this canvas
     */get ctx(){return this._ctx}constructor(t){super(t),this._options=t}clone(){return new ip({...this._options,...this.cloneGraphicOptions(),...this.cloneRasterOptions()})}execute(t){var e,i;(null===(e=this._options)||void 0===e?void 0:e.draw)&&(null===(i=this._options)||void 0===i||i.draw(t)),this._options.cache||this.flagDirty()}}class i_{}i_.type={any:"",blob:"blob",json:"json",text:"text",document:"document",arraybuffer:"arraybuffer"};class im{constructor(){this.states=new Map}get currentState(){return this._currentState}set currentState(t){this._currentState=t}static create(t,e){let i=new im;for(let s in i.data=e,t.states)i.states.set(s,{name:s,...t.states[s]});// validate transitions are states
for(let t of i.states.values())for(let e of t.transitions)if("*"!==e&&!i.states.has(e))throw Error(`Invalid state machine, state [${t.name}] has a transition to another state that doesn't exist [${e}]`);return i.currentState=i.startState=i.states.get(t.start),i}in(t){return this.currentState.name===t}go(t,e){var i,s;if(this.currentState.transitions.includes(t)||this.currentState.transitions.includes("*")){let r=this.states.get(t);if(this.currentState.onExit){let t=null===(i=this.currentState)||void 0===i?void 0:i.onExit({to:r.name,data:this.data});if(!1===t)return!1}if(null==r?void 0:r.onEnter){let t=null==r?void 0:r.onEnter({from:this.currentState.name,eventData:e,data:this.data});if(!1===t)return!1}return(// console.log(`${this.currentState.name} => ${potentialNewState.name} (${eventData})`);
this.currentState=r,(null===(s=this.currentState)||void 0===s?void 0:s.onState)&&this.currentState.onState(),!0)}return!1}update(t){this.currentState.onUpdate&&this.currentState.onUpdate(this.data,t)}save(t){localStorage.setItem(t,JSON.stringify({currentState:this.currentState.name,data:this.data}))}restore(t){let e=JSON.parse(localStorage.getItem(t));this.currentState=this.states.get(e.currentState),this.data=e.data}}/**
 * Internal class representing a Web Audio AudioBufferSourceNode instance
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API
 */class iy{_createNewBufferSource(){this._instance=this._audioContext.createBufferSource(),this._instance.buffer=this._src,this._instance.loop=this.loop,this._instance.playbackRate.value=this._playbackRate,this._instance.connect(this._volumeNode),this._volumeNode.connect(this._audioContext.destination)}_handleEnd(){this.loop||(this._instance.onended=()=>{this._playingResolve(!0)})}set loop(t){this._loop=t,this._instance&&(this._instance.loop=t,this.loop||(this._instance.onended=()=>{this._playingResolve(!0)}))}get loop(){return this._loop}set volume(t){t=eh(t,0,1),this._volume=t,this._stateMachine.in("PLAYING")&&this._volumeNode.gain.setTargetAtTime?// After each .1 seconds timestep, the target value will ~63.2% closer to the target value.
// This exponential ramp provides a more pleasant transition in gain
this._volumeNode.gain.setTargetAtTime(t,this._audioContext.currentTime,.1):this._volumeNode.gain.value=t}get volume(){return this._volume}/**
     * Returns the set duration to play, otherwise returns the total duration if unset
     */get duration(){var t;return null!==(t=this._duration)&&void 0!==t?t:this.getTotalPlaybackDuration()}/**
     * Set the duration that this audio should play.
     *
     * Note: if you seek to a specific point the duration will start from that point, for example
     *
     * If you have a 10 second clip, seek to 5 seconds, then set the duration to 2, it will play the clip from 5-7 seconds.
     */set duration(t){this._duration=t}constructor(t){this._src=t,this._audioContext=io.create(),this._volumeNode=this._audioContext.createGain(),this._playingPromise=new Promise(t=>{this._playingResolve=t}),this._stateMachine=im.create({start:"STOPPED",states:{PLAYING:{onEnter:({data:t})=>{// Buffer nodes are single use
this._createNewBufferSource(),this._handleEnd(),this.loop?this._instance.start(0,t.pausedAt*this._playbackRate):this._instance.start(0,t.pausedAt*this._playbackRate,this.duration),t.startedAt=this._audioContext.currentTime-t.pausedAt,t.pausedAt=0},onState:()=>this._playStarted(),onExit:({to:t})=>{"STOPPED"===t&&this._playingResolve(!0),// Whenever you're not playing... you stop!
this._instance.onended=null,this._instance.disconnect(),this._instance.stop(0),this._instance=null},transitions:["STOPPED","PAUSED","SEEK"]},SEEK:{onEnter:({eventData:t,data:e})=>{e.pausedAt=(null!=t?t:0)/this._playbackRate,e.startedAt=0},transitions:["*"]},STOPPED:{onEnter:({data:t})=>{t.pausedAt=0,t.startedAt=0,this._playingResolve(!0)},transitions:["PLAYING","PAUSED","SEEK"]},PAUSED:{onEnter:({data:t})=>{// Playback rate will be a scale factor of how fast/slow the audio is being played
// default is 1.0
// we need to invert it to get the time scale
t.pausedAt=this._audioContext.currentTime-t.startedAt},transitions:["PLAYING","STOPPED","SEEK"]}}},{startedAt:0,pausedAt:0}),this._volume=1,this._loop=!1,// eslint-disable-next-line @typescript-eslint/no-empty-function
this._playStarted=()=>{},this._playbackRate=1,this._createNewBufferSource()}isPlaying(){return this._stateMachine.in("PLAYING")}isPaused(){return this._stateMachine.in("PAUSED")||this._stateMachine.in("SEEK")}// eslint-disable-next-line @typescript-eslint/no-empty-function
play(t=()=>{}){return this._playStarted=t,this._stateMachine.go("PLAYING"),this._playingPromise}pause(){this._stateMachine.go("PAUSED")}stop(){this._stateMachine.go("STOPPED")}seek(t){this._stateMachine.go("PAUSED"),this._stateMachine.go("SEEK",t)}getTotalPlaybackDuration(){return this._src.duration}getPlaybackPosition(){let{pausedAt:t,startedAt:e}=this._stateMachine.data;return t?t*this._playbackRate:e?(this._audioContext.currentTime-e)*this._playbackRate:0}set playbackRate(t){this._instance.playbackRate.value=this._playbackRate=t}get playbackRate(){return this._instance.playbackRate.value}}class iC extends tB{/**
     * Media event cannot bubble
     */set bubbles(t){// stubbed
}/**
     * Media event cannot bubble
     */get bubbles(){return!1}/**
     * Media event cannot bubble, so they have no path
     */get _path(){return null}/**
     * Media event cannot bubble, so they have no path
     */set _path(t){// stubbed
}constructor(t,e="MediaEvent"){super(),this.target=t,this._name=e}/**
     * Prevents event from bubbling
     */stopPropagation(){/**
         * Stub
         */}/**
     * Action, that calls when event happens
     */action(){/**
         * Stub
         */}/**
     * Propagate event further through event path
     */propagate(){/**
         * Stub
         */}layPath(t){/**
         * Stub
         */}}class ix extends iC{constructor(t,e){super(t,"NativeSoundEvent"),this.track=e}}class iw extends iC{constructor(t,e){super(t,"NativeSoundProcessedEvent"),this._processedData=e,this.data=this._processedData}}let iI={VolumeChange:"volumechange",Processed:"processed",Pause:"pause",Stop:"stop",PlaybackEnd:"playbackend",Resume:"resume",PlaybackStart:"playbackstart"};/**
 * The [[Sound]] object allows games built in Excalibur to load audio
 * components, from soundtracks to sound effects. [[Sound]] is an [[Loadable]]
 * which means it can be passed to a [[Loader]] to pre-load before a game or level.
 */class iv{/**
     * Indicates whether the clip should loop when complete
     * @param value  Set the looping flag
     */set loop(t){for(let e of(this._loop=t,this._tracks))e.loop=this._loop;this.logger.debug("Set loop for all instances of sound",this.path,"to",this._loop)}get loop(){return this._loop}set volume(t){for(let e of(this._volume=t,this._tracks))e.volume=this._volume;this.events.emit("volumechange",new ix(this)),this.logger.debug("Set loop for all instances of sound",this.path,"to",this._volume)}get volume(){return this._volume}/**
     * Get the duration that this audio should play. If unset the total natural playback duration will be used.
     */get duration(){return this._duration}/**
     * Set the duration that this audio should play. If unset the total natural playback duration will be used.
     *
     * Note: if you seek to a specific point the duration will start from that point, for example
     *
     * If you have a 10 second clip, seek to 5 seconds, then set the duration to 2, it will play the clip from 5-7 seconds.
     */set duration(t){this._duration=t}/**
     * Return array of Current AudioInstances playing or being paused
     */get instances(){return this._tracks}get path(){return this._resource.path}set path(t){this._resource.path=t}/**
     * Should excalibur add a cache busting querystring? By default false.
     * Must be set before loading
     */get bustCache(){return this._resource.bustCache}set bustCache(t){this._resource.bustCache=t}/**
     * @param paths A list of audio sources (clip.wav, clip.mp3, clip.ogg) for this audio clip. This is done for browser compatibility.
     */constructor(...t){/**
         * Chrome : MP3, WAV, Ogg
         * Firefox : WAV, Ogg,
         * IE : MP3, WAV coming soon
         * Safari MP3, WAV, Ogg
         */for(let e of(this.events=new tE,this.logger=t9.getInstance(),this._loop=!1,this._volume=1,this._isStopped=!1,// private _isPaused = false;
this._tracks=[],this._wasPlayingOnHidden=!1,this._playbackRate=1,this._audioContext=io.create(),this._resource=new eF("",i_.type.arraybuffer),t))if(/**
 * Whether or not the browser can play this file as HTML5 Audio
 */function(t){try{let e=new Audio,i=t.match(/.*\.([A-Za-z0-9]+)(?:(?:\?|\#).*)*$/)[1];if(e.canPlayType("audio/"+i))return!0;return!1}catch(t){return t9.getInstance().warn("Cannot determine audio support, assuming no support for the Audio Tag",t),!1}}(e)){this.path=e;break}this.path||(this.logger.warn("This browser does not support any of the audio files specified:",t.join(", ")),this.logger.warn("Attempting to use",t[0]),this.path=t[0])}isLoaded(){return!!this.data}async load(){var t,e;if(this.data)return this.data;let i=await this._resource.load(),s=await this.decodeAudio(i.slice(0));return this._duration=null!==(e=null!==(t=this._duration)&&void 0!==t?t:null==s?void 0:s.duration)&&void 0!==e?e:void 0,this.events.emit("processed",new iw(this,s)),this.data=s}async decodeAudio(t){try{return await this._audioContext.decodeAudioData(t.slice(0))}catch(t){return this.logger.error("Unable to decode  this browser may not fully support this format, or the file may be corrupt, if this is an mp3 try removing id3 tags and album art from the file."),await Promise.reject()}}wireEngine(t){t&&(this._engine=t,this._engine.on("hidden",()=>{t.pauseAudioWhenHidden&&this.isPlaying()&&(this._wasPlayingOnHidden=!0,this.pause())}),this._engine.on("visible",()=>{t.pauseAudioWhenHidden&&this._wasPlayingOnHidden&&(this.play(),this._wasPlayingOnHidden=!1)}),this._engine.on("start",()=>{this._isStopped=!1}),this._engine.on("stop",()=>{this.stop(),this._isStopped=!0}))}/**
     * Returns how many instances of the sound are currently playing
     */instanceCount(){return this._tracks.length}/**
     * Whether or not the sound is playing right now
     */isPlaying(){return this._tracks.some(t=>t.isPlaying())}isPaused(){return this._tracks.some(t=>t.isPaused())}/**
     * Play the sound, returns a promise that resolves when the sound is done playing
     * An optional volume argument can be passed in to play the sound. Max volume is 1.0
     */play(t){return this.isLoaded()?this._isStopped?(this.logger.warn("Cannot start playing. Engine is in a stopped state."),Promise.resolve(!1)):(this.volume=t||this.volume,this.isPaused())?this._resumePlayback():this._startPlayback():(this.logger.warn("Cannot start playing. Resource",this.path,"is not loaded yet"),Promise.resolve(!0))}/**
     * Stop the sound, and do not rewind
     */pause(){if(this.isPlaying()){for(let t of this._tracks)t.pause();this.events.emit("pause",new ix(this)),this.logger.debug("Paused all instances of sound",this.path)}}/**
     * Stop the sound if it is currently playing and rewind the track. If the sound is not playing, rewinds the track.
     */stop(){for(let t of this._tracks)t.stop();this.events.emit("stop",new ix(this)),this._tracks.length=0,this.logger.debug("Stopped all instances of sound",this.path)}get playbackRate(){return this._playbackRate}set playbackRate(t){this._playbackRate=t,this._tracks.forEach(t=>{t.playbackRate=this._playbackRate})}seek(t,e=0){0===this._tracks.length&&this._getTrackInstance(this.data),this._tracks[e].seek(t)}getTotalPlaybackDuration(){return this.data.duration}/**
     * Return the current playback time of the playing track in seconds from the start.
     *
     * Optionally specify the track to query if multiple are playing at once.
     * @param trackId
     */getPlaybackPosition(t=0){return this._tracks.length?this._tracks[t].getPlaybackPosition():0}/**
     * Get Id of provided AudioInstance in current trackList
     * @param track [[Audio]] which Id is to be given
     */getTrackId(t){return this._tracks.indexOf(t)}async _resumePlayback(){if(this.isPaused){let t=[];// ensure we resume *current* tracks (if paused)
for(let e of this._tracks)t.push(e.play().then(()=>(this.events.emit("playbackend",new ix(this,e)),this._tracks.splice(this.getTrackId(e),1),!0)));this.events.emit("resume",new ix(this)),this.logger.debug("Resuming paused instances for sound",this.path,this._tracks),// resolve when resumed tracks are done
await Promise.all(t)}return!0}/**
     * Starts playback, returns a promise that resolves when playback is complete
     */async _startPlayback(){let t=await this._getTrackInstance(this.data),e=await t.play(()=>{this.events.emit("playbackstart",new ix(this,t)),this.logger.debug("Playing new instance for sound",this.path)});return(// when done, remove track
this.events.emit("playbackend",new ix(this,t)),this._tracks.splice(this.getTrackId(t),1),e)}_getTrackInstance(t){let e=new iy(t);return e.loop=this.loop,e.volume=this.volume,e.duration=this.duration,e.playbackRate=this._playbackRate,this._tracks.push(e),e}emit(t,e){this.events.emit(t,e)}on(t,e){return this.events.on(t,e)}once(t,e){return this.events.once(t,e)}off(t,e){this.events.off(t,e)}}let iE={};/**
 * Pre-loading assets
 *
 * The loader provides a mechanism to preload multiple resources at
 * one time. The loader must be passed to the engine in order to
 * trigger the loading progress bar.
 *
 * The [[Loader]] itself implements [[Loadable]] so you can load loaders.
 *
 * ## Example: Pre-loading resources for a game
 *
 * ```js
 * // create a loader
 * var loader = new ex.Loader();
 *
 * // create a resource dictionary (best practice is to keep a separate file)
 * var resources = {
 *   TextureGround: new ex.Texture("/images/textures/ground.png"),
 *   SoundDeath: new ex.Sound("/sound/death.wav", "/sound/death.mp3")
 * };
 *
 * // loop through dictionary and add to loader
 * for (var loadable in resources) {
 *   if (resources.hasOwnProperty(loadable)) {
 *     loader.addResource(resources[loadable]);
 *   }
 * }
 *
 * // start game
 * game.start(loader).then(function () {
 *   console.log("Game started!");
 * });
 * ```
 *
 * ## Customize the Loader
 *
 * The loader can be customized to show different, text, logo, background color, and button.
 *
 * ```typescript
 * const loader = new ex.Loader([playerTexture]);
 *
 * // The loaders button text can simply modified using this
 * loader.playButtonText = 'Start the best game ever';
 *
 * // The logo can be changed by inserting a base64 image string here
 *
 * loader.logo = 'data:image/png;base64,iVBORw...';
 * loader.logoWidth = 15;
 * loader.logoHeight = 14;
 *
 * // The background color can be changed like so by supplying a valid CSS color string
 *
 * loader.backgroundColor = 'red'
 * loader.backgroundColor = '#176BAA'
 *
 * // To build a completely new button
 * loader.startButtonFactory = () => {
 *     let myButton = document.createElement('button');
 *     myButton.textContent = 'The best button';
 *     return myButton;
 * };
 *
 * engine.start(loader).then(() => {});
 * ```
 */class iB{get _image(){return this._imageElement||(this._imageElement=new Image,this._imageElement.src=this.logo),this._imageElement}get playButtonRootElement(){return this._playButtonRootElement}get playButtonElement(){return this._playButtonElement}get _playButton(){let t=document.getElementById("excalibur-play-root");return t&&(this._playButtonRootElement=t),this._playButtonRootElement||(this._playButtonRootElement=document.createElement("div"),this._playButtonRootElement.id="excalibur-play-root",this._playButtonRootElement.style.position="absolute",document.body.appendChild(this._playButtonRootElement)),this._styleBlock||(this._styleBlock=document.createElement("style"),this._styleBlock.textContent=this._playButtonStyles,document.head.appendChild(this._styleBlock)),this._playButtonElement||(this._playButtonElement=this.startButtonFactory(),this._playButtonRootElement.appendChild(this._playButtonElement)),this._playButtonElement}/**
     * @param loadables  Optionally provide the list of resources you want to load at constructor time
     */constructor(t){this.events=new tE,this.canvas=new ip({filtering:V.Blended,smoothing:!0,cache:!0,draw:this.draw.bind(this)}),this._resourceList=[],this._index=0,this._playButtonShown=!1,this._resourceCount=0,this._numLoaded=0,this._progressCounts={},this._totalCounts={},// logo drawing stuff
// base64 string encoding of the excalibur logo (logo-white.png)
this.logo="data:image/png;base64,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",this.logoWidth=468,this.logoHeight=118,/**
         * Gets or sets the color of the loading bar, default is [[Color.White]]
         */this.loadingBarColor=ef.White,/**
         * Gets or sets the background color of the loader as a hex string
         */this.backgroundColor="#176BAA",this.suppressPlayButton=!1,/** Loads the css from Loader.css */this._playButtonStyles=iu/* default */.Z.toString(),/**
         * Get/set play button text
         */this.playButtonText="Play game",/**
         * Return a html button element for excalibur to use as a play button
         */this.startButtonFactory=()=>{let t=document.getElementById("excalibur-play");return t||(t=document.createElement("button")),t.id="excalibur-play",t.textContent=this.playButtonText,t.style.display="none",t},this._loadingFuture=new eC,t&&this.addResources(t)}wireEngine(t){this._engine=t,this.canvas.width=this._engine.canvas.width,this.canvas.height=this._engine.canvas.height}/**
     * Add a resource to the loader to load
     * @param loadable  Resource to add
     */addResource(t){let e=this._index++;this._resourceList.push(t),this._progressCounts[e]=0,this._totalCounts[e]=1,this._resourceCount++}/**
     * Add a list of resources to the loader to load
     * @param loadables  The list of resources to load
     */addResources(t){let e=0,i=t.length;for(;e<i;e++)this.addResource(t[e])}/**
     * Returns true if the loader has completely loaded all resources
     */isLoaded(){return this._numLoaded===this._resourceCount}/**
     * Shows the play button and returns a promise that resolves when clicked
     */async showPlayButton(){var t,e;if(this.suppressPlayButton)this.hidePlayButton(),// Delay is to give the logo a chance to show, otherwise don't delay
await eB(500,null===(t=this._engine)||void 0===t?void 0:t.clock);else{let t=()=>{this._positionPlayButton()};(null===(e=this._engine)||void 0===e?void 0:e.browser)&&this._engine.browser.window.on("resize",t),this._playButtonShown=!0,this._playButton.style.display="block",document.body.addEventListener("keyup",t=>{"Enter"===t.key&&this._playButton.click()}),this._positionPlayButton();let i=new Promise(e=>{let i=i=>{var s;// We want to stop propagation to keep bubbling to the engine pointer handlers
i.stopPropagation(),// Hide Button after click
this.hidePlayButton(),(null===(s=this._engine)||void 0===s?void 0:s.browser)&&this._engine.browser.window.off("resize",t),e()};this._playButton.addEventListener("click",i),this._playButton.addEventListener("touchend",i),this._playButton.addEventListener("pointerup",i)});return await i}}hidePlayButton(){this._playButtonShown=!1,this._playButton.style.display="none"}/**
     * Clean up generated elements for the loader
     */dispose(){this._playButtonRootElement.parentElement&&(this._playButtonRootElement.removeChild(this._playButtonElement),document.body.removeChild(this._playButtonRootElement),document.head.removeChild(this._styleBlock),this._playButtonRootElement=null,this._playButtonElement=null,this._styleBlock=null)}update(t,e){// override me
}areResourcesLoaded(){return this._loadingFuture.promise}/**
     * Begin loading all of the supplied resources, returning a promise
     * that resolves when loading of all is complete AND the user has clicked the "Play button"
     */async load(){var t,e;// Wire all sound to the engine
for(let e of(await (null===(t=this._image)||void 0===t?void 0:t.decode()),this.canvas.flagDirty(),await Promise.all(this._resourceList.map(async t=>{await t.load().finally(()=>{// capture progress
this._numLoaded++,this.canvas.flagDirty()})})),this._resourceList))e instanceof iv&&e.wireEngine(this._engine);return this._loadingFuture.resolve(),// short delay in showing the button for aesthetics
await eB(200,null===(e=this._engine)||void 0===e?void 0:e.clock),this.canvas.flagDirty(),await this.showPlayButton(),// Unlock browser AudioContext in after user gesture
// See: https://github.com/excaliburjs/Excalibur/issues/262
// See: https://github.com/excaliburjs/Excalibur/issues/1031
await ia.unlock(),this.data=this._resourceList}markResourceComplete(){this._numLoaded++}/**
     * Returns the progress of the loader as a number between [0, 1] inclusive.
     */get progress(){return this._resourceCount>0?eh(this._numLoaded,0,this._resourceCount)/this._resourceCount:1}_positionPlayButton(){if(this._engine){let t=this._engine.screen.viewport.height,e=this._engine.screen.viewport.width;if(this._playButtonRootElement){let i=this._engine.canvas.offsetLeft,s=this._engine.canvas.offsetTop,r=this._playButton.clientWidth,n=this._playButton.clientHeight;this.playButtonPosition?(this._playButtonRootElement.style.left=`${this.playButtonPosition.x}px`,this._playButtonRootElement.style.top=`${this.playButtonPosition.y}px`):(this._playButtonRootElement.style.left=`${i+e/2-r/2}px`,this._playButtonRootElement.style.top=`${s+t/2-n/2+100}px`)}}}/**
     * Loader draw function. Draws the default Excalibur loading screen.
     * Override `logo`, `logoWidth`, `logoHeight` and `backgroundColor` properties
     * to customize the drawing, or just override entire method.
     */draw(t){let e=this._engine.canvasHeight/this._engine.pixelRatio,i=this._engine.canvasWidth/this._engine.pixelRatio;this._positionPlayButton(),t.fillStyle=this.backgroundColor,t.fillRect(0,0,i,e);let s=e/2,r=Math.min(this.logoWidth,.75*i),n=i/2-r/2;this.logoPosition&&(n=this.logoPosition.x,s=this.logoPosition.y);let o=Math.floor(r*(this.logoHeight/this.logoWidth)),a=this._engine.getAntialiasing();// OG height/width factor
// loading box
if(this._engine.setAntialiasing(!0),this.logoPosition?t.drawImage(this._image,0,0,this.logoWidth,this.logoHeight,n,s,r,o):t.drawImage(this._image,0,0,this.logoWidth,this.logoHeight,n,s-o-20,r,o),!this.suppressPlayButton&&this._playButtonShown){this._engine.setAntialiasing(a);return}let h=n,l=s;this.loadingBarPosition&&(h=this.loadingBarPosition.x,l=this.loadingBarPosition.y),t.lineWidth=2,id(t,h,l,r,20,10,this.loadingBarColor);let A=r*this.progress,d=A-10;id(t,h+5,l+5,d>10?d:10,10,5,null,this.loadingBarColor),this._engine.setAntialiasing(a)}emit(t,e){this.events.emit(t,e)}on(t,e){return this.events.on(t,e)}once(t,e){return this.events.once(t,e)}off(t,e){this.events.off(t,e)}}/**
 * This is the list of features that will be used to log the supported
 * features to the console when Detector.logBrowserFeatures() is called.
 */let ib={webgl:"WebGL",webaudio:"WebAudio",gamepadapi:"Gamepad API"};/**
 * Excalibur internal feature detection helper class
 */class iQ{constructor(){this._features=null,this.failedTests=[],// critical browser features required for ex to run
this._criticalTests={// Test canvas/2d context support
canvasSupport:function(){let t=document.createElement("canvas");return!!(t.getContext&&t.getContext("2d"))},// Test array buffer support ex uses for downloading binary data
arrayBufferSupport:function(){let t=new XMLHttpRequest;t.open("GET","/");try{t.responseType="arraybuffer"}catch(t){return!1}return"arraybuffer"===t.responseType},// Test data urls ex uses for sprites
dataUrlSupport:function(){let t=document.createElement("canvas");return 0===t.toDataURL("image/png").indexOf("data:image/png")},// Test object url support for loading
objectUrlSupport:function(){return"URL"in window&&"revokeObjectURL"in URL&&"createObjectURL"in URL},// RGBA support for colors
rgbaSupport:function(){let t=document.createElement("a").style;return t.cssText="background-color:rgba(150,255,150,.5)",(""+t.backgroundColor).indexOf("rgba")>-1}},// warnings excalibur performance will be degraded
this._warningTest={webAudioSupport:function(){return!!(window.AudioContext||window.webkitAudioContext||window.mozAudioContext||window.msAudioContext||window.oAudioContext)},webglSupport:function(){let t=document.createElement("canvas");return!!(t.getContext&&t.getContext("webgl"))}},this._features=this._loadBrowserFeatures()}/**
     * Returns a map of currently supported browser features. This method
     * treats the features as a singleton and will only calculate feature
     * support if it has not previously been done.
     */getBrowserFeatures(){return null===this._features&&(this._features=this._loadBrowserFeatures()),this._features}/**
     * Report on non-critical browser support for debugging purposes.
     * Use native browser console colors for visibility.
     */logBrowserFeatures(){let t="%cSUPPORTED BROWSER FEATURES\n==========================%c\n",e=["font-weight: bold; color: navy","font-weight: normal; color: inherit"],i=this.getBrowserFeatures();for(let s of Object.keys(ib))i[s]?(t+="(%c✓%c)",e.push("font-weight: bold; color: green")):(t+="(%c✗%c)",e.push("font-weight: bold; color: red")),e.push("font-weight: normal; color: inherit"),t+=" "+ib[s]+"\n";e.unshift(t),// eslint-disable-next-line no-console
console.log.apply(console,e)}/**
     * Executes several IIFE's to get a constant reference to supported
     * features within the current execution context.
     */_loadBrowserFeatures(){return{// IIFE to check canvas support
canvas:this._criticalTests.canvasSupport(),// IIFE to check arraybuffer support
arraybuffer:this._criticalTests.arrayBufferSupport(),// IIFE to check dataurl support
dataurl:this._criticalTests.dataUrlSupport(),// IIFE to check objecturl support
objecturl:this._criticalTests.objectUrlSupport(),// IIFE to check rgba support
rgba:this._criticalTests.rgbaSupport(),// IIFE to check webaudio support
webaudio:this._warningTest.webAudioSupport(),// IIFE to check webgl support
webgl:this._warningTest.webglSupport(),// IIFE to check gamepadapi support
gamepadapi:!!navigator.getGamepads}}test(){// Critical test will for ex not to run
let t=!1;for(let e in this._criticalTests)this._criticalTests[e].call(this)||(this.failedTests.push(e),t9.getInstance().error("Critical browser feature missing, Excalibur requires:",e),t=!0);if(t)return!1;// Warning tests do not for ex to return false to compatibility
for(let t in this._warningTest)this._warningTest[t]()||t9.getInstance().warn("Warning browser feature missing, Excalibur will have reduced performance:",t);return!0}}/**
     * Bodies with the `PreventCollision` setting do not participate in any
     * collisions and do not raise collision events.
     */(u=j||(j={})).PreventCollision="PreventCollision",/**
     * Bodies with the `Passive` setting only raise collision events, but are not
     * influenced or moved by other bodies and do not influence or move other bodies.
     * This is useful for use in trigger type behavior.
     */u.Passive="Passive",/**
     * Bodies with the `Active` setting raise collision events and participate
     * in collisions with other bodies and will be push or moved by bodies sharing
     * the `Active` or `Fixed` setting.
     */u.Active="Active",/**
     * Bodies with the `Fixed` setting raise collision events and participate in
     * collisions with other bodies. Actors with the `Fixed` setting will not be
     * pushed or moved by other bodies sharing the `Fixed`. Think of Fixed
     * bodies as "immovable/unstoppable" objects. If two `Fixed` bodies meet they will
     * not be pushed or moved by each other, they will not interact except to throw
     * collision events.
     */u.Fixed="Fixed";let iS=5,iT={},iD=()=>{for(let t in iT)iT[t]=0},iF=(t,e)=>{let i=tI.isEnabled("suppress-obsolete-message");iT[t]<iS&&!i&&(t9.getInstance().warn(t),console.trace&&e.showStackTrace&&console.trace()),iT[t]++};/**
 * Obsolete decorator for marking Excalibur methods obsolete, you can optionally specify a custom message and/or alternate replacement
 * method do the deprecated one. Inspired by https://github.com/jayphelps/core-decorators.js
 */function ik(t){return t={message:"This feature will be removed in future versions of Excalibur.",alternateMethod:null,showStackTrace:!1,...t},function(e,i,s){if(s&&!("function"==typeof s.value||"function"==typeof s.get||"function"==typeof s.set))throw SyntaxError("Only classes/functions/getters/setters can be marked as obsolete");let r=`${e.name||""}${e.name&&i?".":""}${i||""}`,n=`${r} is marked obsolete: ${t.message}`+(t.alternateMethod?` Use ${t.alternateMethod} instead`:"");iT[n]||(iT[n]=0);// If descriptor is null it is a class
let o=s?{...s}:e;return s?(s&&s.value?o.value=function(){return iF(n,t),s.value.apply(this,arguments)}:(s&&s.get&&(o.get=function(){return iF(n,t),s.get.apply(this,arguments)}),s&&s.set&&(o.set=function(){return iF(n,t),s.set.apply(this,arguments)})),o):// with es2015 classes we need to change our decoration tactic
class extends o{constructor(...e){iF(n,t),super(...e)}}}}(g=K||(K={})).Arcade="arcade",g.Realistic="realistic",(p=W||(W={}))[p.DynamicAABBTree=0]="DynamicAABBTree",(_=J||(J={}))[_.Euler=0]="Euler";/**
 * The [[Physics]] object is the global configuration object for all Excalibur physics.
 *//* istanbul ignore next */class iP{static get gravity(){return iP.acc}static set gravity(t){iP.acc=t}/**
     * Configures Excalibur to use "arcade" physics. Arcade physics which performs simple axis aligned arcade style physics.
     */static useArcadePhysics(){iP.collisionResolutionStrategy=K.Arcade}/**
     * Configures Excalibur to use rigid body physics. Rigid body physics allows for complicated
     * simulated physical interactions.
     */static useRealisticPhysics(){iP.collisionResolutionStrategy=K.Realistic}static get dynamicTreeVelocityMultiplyer(){return iP.dynamicTreeVelocityMultiplier}static set dynamicTreeVelocityMultiplyer(t){iP.dynamicTreeVelocityMultiplier=t}}/**
 * Global acceleration that is applied to all vanilla actors that have a [[CollisionType.Active|active]] collision type.
 * Global acceleration won't effect [[Label|labels]], [[ScreenElement|ui actors]], or [[Trigger|triggers]] in Excalibur.
 *
 * This is a great way to globally simulate effects like gravity.
 */iP.acc=new ep(0,0),/**
 * Globally switches all Excalibur physics behavior on or off.
 */iP.enabled=!0,/**
 * Gets or sets the broadphase pair identification strategy.
 *
 * The default strategy is [[BroadphaseStrategy.DynamicAABBTree]] which uses a binary tree of axis-aligned bounding boxes to identify
 * potential collision pairs which is O(nlog(n)) faster.
 */iP.broadphaseStrategy=W.DynamicAABBTree,/**
 * Gets or sets the global collision resolution strategy (narrowphase).
 *
 * The default is [[CollisionResolutionStrategy.Arcade]] which performs simple axis aligned arcade style physics.
 *
 * More advanced rigid body physics are enabled by setting [[CollisionResolutionStrategy.Realistic]] which allows for complicated
 * simulated physical interactions.
 */iP.collisionResolutionStrategy=K.Arcade,/**
 * The default mass to use if none is specified
 */iP.defaultMass=10,/**
 * Gets or sets the position and velocity positional integrator, currently only Euler is supported.
 */iP.integrator=J.Euler,/**
 * Factor to add to the RigidBody BoundingBox, bounding box (dimensions += vel * dynamicTreeVelocityMultiplier);
 */iP.dynamicTreeVelocityMultiplier=2,/**
 * Pad RigidBody BoundingBox by a constant amount
 */iP.boundsPadding=5,/**
 * Number of position iterations (overlap) to run in the solver
 */iP.positionIterations=3,/**
 * Number of velocity iteration (response) to run in the solver
 */iP.velocityIterations=8,/**
 * Amount of overlap to tolerate in pixels
 */iP.slop=1,/**
 * Amount of positional overlap correction to apply each position iteration of the solver
 * O - meaning no correction, 1 - meaning correct all overlap
 */iP.steeringFactor=.2,/**
 * Warm start set to true re-uses impulses from previous frames back in the solver
 */iP.warmStart=!0,/**
 * By default bodies do not sleep
 */iP.bodiesCanSleepByDefault=!1,/**
 * Surface epsilon is used to help deal with surface penetration
 */iP.surfaceEpsilon=.1,iP.sleepEpsilon=.07,iP.wakeThreshold=3*iP.sleepEpsilon,iP.sleepBias=.9,/**
 * Enable fast moving body checking, this enables checking for collision pairs via raycast for fast moving objects to prevent
 * bodies from tunneling through one another.
 */iP.checkForFastBodies=!0,/**
 * Disable minimum fast moving body raycast, by default if ex.Physics.checkForFastBodies = true Excalibur will only check if the
 * body is moving at least half of its minimum dimension in an update. If ex.Physics.disableMinimumSpeedForFastBody is set to true,
 * Excalibur will always perform the fast body raycast regardless of speed.
 */iP.disableMinimumSpeedForFastBody=!1,function(t,e,i,s){var r,n=arguments.length,o=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);n>3&&o&&Object.defineProperty(e,i,o)}([ik({message:"Alias for incorrect spelling used in older versions, will be removed in v0.25.0",alternateMethod:"dynamicTreeVelocityMultiplier"})],iP,"dynamicTreeVelocityMultiplyer",null),/**
     * The world coordinate plane (default) represents world space, any entities drawn with world
     * space move when the camera moves.
     */(f=X||(X={})).World="world",/**
     * The screen coordinate plane represents screen space, entities drawn in screen space are pinned
     * to screen coordinates ignoring the camera.
     */f.Screen="screen";class iR extends ep{constructor(t){super(0,0),this._getX=t.getX,this._getY=t.getY,this._setX=t.setX,this._setY=t.setY}get x(){return this._x=this._getX()}set x(t){this._setX(t),this._x=t}get y(){return this._y=this._getY()}set y(t){this._setY(t),this._y=t}}/**
 * Wraps a vector and watches for changes in the x/y, modifies the original vector.
 */class iM extends ep{constructor(t,e){super(t.x,t.y),this.original=t,this.change=e}get x(){return this._x=this.original.x}set x(t){this.change(t,this._y),this._x=this.original.x=t}get y(){return this._y=this.original.y}set y(t){this.change(this._x,t),this._y=this.original.y=t}}class iL{constructor(){this._parent=null,this._children=[],this._pos=e_(0,0),this._rotation=0,this._scale=e_(1,1),this._isDirty=!1,this._isInverseDirty=!1,this._matrix=eQ.identity(),this._inverse=eQ.identity()}get parent(){return this._parent}set parent(t){if(this._parent){let t=this._parent._children.indexOf(this);t>-1&&this._parent._children.splice(t,1)}this._parent=t,this._parent&&this._parent._children.push(this),this.flagDirty()}get children(){return this._children}set pos(t){t.equals(this._pos)||(this._pos.x=t.x,this._pos.y=t.y,this.flagDirty())}get pos(){return new iM(this._pos,(t,e)=>{(t!==this._pos.x||e!==this._pos.y)&&this.flagDirty()})}set globalPos(t){let e=t.clone();this.parent&&(e=this.parent.inverse.multiply(t)),e.equals(this._pos)||(this._pos=e,this.flagDirty())}get globalPos(){return new iR({getX:()=>this.matrix.data[4],getY:()=>this.matrix.data[5],setX:t=>{if(this.parent){let{x:e}=this.parent.inverse.multiply(e_(t,this.pos.y));this.pos.x=e}else this.pos.x=t;t!==this.matrix.data[4]&&this.flagDirty()},setY:t=>{if(this.parent){let{y:e}=this.parent.inverse.multiply(e_(this.pos.x,t));this.pos.y=e}else this.pos.y=t;t!==this.matrix.data[5]&&this.flagDirty()}})}set rotation(t){let e=el(t);e!==this._rotation&&this.flagDirty(),this._rotation=e}get rotation(){return this._rotation}set globalRotation(t){let e=0;this.parent&&(e=this.parent.globalRotation);let i=el(t+e);i!==this._rotation&&this.flagDirty(),this._rotation=i}get globalRotation(){return this.parent?this.matrix.getRotation():this.rotation}set scale(t){t.equals(this._scale)||(this._scale.x=t.x,this._scale.y=t.y,this.flagDirty())}get scale(){return new iM(this._scale,(t,e)=>{(t!==this._scale.x||e!==this._scale.y)&&this.flagDirty()})}set globalScale(t){let e=e_(1,1);this.parent&&(e=this.parent.globalScale),this.scale=t.scale(e_(1/e.x,1/e.y))}get globalScale(){return new iR({getX:()=>this.parent?this.matrix.getScaleX():this.scale.x,getY:()=>this.parent?this.matrix.getScaleY():this.scale.y,setX:t=>{if(this.parent){let e=this.parent.globalScale.x;this.scale.x=t/e}else this.scale.x=t},setY:t=>{if(this.parent){let e=this.parent.globalScale.y;this.scale.y=t/e}else this.scale.y=t}})}get matrix(){return this._isDirty&&(null===this.parent?this._matrix=this._calculateMatrix():this._matrix=this.parent.matrix.multiply(this._calculateMatrix()),this._isDirty=!1),this._matrix}get inverse(){return this._isInverseDirty&&(this._inverse=this.matrix.inverse(),this._isInverseDirty=!1),this._inverse}_calculateMatrix(){let t=eQ.identity().translate(this.pos.x,this.pos.y).rotate(this.rotation).scale(this.scale.x,this.scale.y);return t}flagDirty(){this._isDirty=!0,this._isInverseDirty=!0;for(let t=0;t<this._children.length;t++)this._children[t].flagDirty()}apply(t){return this.matrix.multiply(t)}applyInverse(t){return this.inverse.multiply(t)}setTransform(t,e,i){this._pos.x=t.x,this._pos.y=t.y,this._rotation=el(e),this._scale.x=i.x,this._scale.y=i.y,this.flagDirty()}clone(t){let e=null!=t?t:new iL;return this._pos.clone(e._pos),e._rotation=this._rotation,this._scale.clone(e._scale),e.flagDirty(),e}}/**
 * Components are containers for state in Excalibur, the are meant to convey capabilities that an Entity possesses
 *
 * Implementations of Component must have a zero-arg constructor to support dependencies
 *
 * ```typescript
 * class MyComponent extends ex.Component<'my'> {
 *   public readonly type = 'my';
 *   // zero arg support required if you want to use component dependencies
 *   constructor(public optionalPos?: ex.Vector) {}
 * }
 * ```
 */class iN{constructor(){/**
         * Current owning [[Entity]], if any, of this component. Null if not added to any [[Entity]]
         */this.owner=null}/**
     * Clones any properties on this component, if that property value has a `clone()` method it will be called
     */clone(){let t=new this.constructor;for(let e in this)if(this.hasOwnProperty(e)){let i=this[e];(null==i?void 0:i.clone)&&"owner"!==e&&"clone"!==e?t[e]=i.clone():t[e]=i}return t}}/**
 * Tag components are a way of tagging a component with label and a simple value
 *
 * For example:
 *
 * ```typescript
 * const isOffscreen = new TagComponent('offscreen');
 * entity.addComponent(isOffscreen);
 * entity.tags.includes
 * ```
 */class iU extends iN{constructor(t,e){super(),this.type=t,this.value=e}}/**
 * Simple Observable implementation
 * @template T is the typescript Type that defines the data being observed
 */class iG{constructor(){this.observers=[],this.subscriptions=[]}/**
     * Register an observer to listen to this observable
     * @param observer
     */register(t){this.observers.push(t)}/**
     * Register a callback to listen to this observable
     * @param func
     */subscribe(t){this.subscriptions.push(t)}/**
     * Remove an observer from the observable
     * @param observer
     */unregister(t){let e=this.observers.indexOf(t);-1!==e&&this.observers.splice(e,1)}/**
     * Remove a callback that is listening to this observable
     * @param func
     */unsubscribe(t){let e=this.subscriptions.indexOf(t);-1!==e&&this.subscriptions.splice(e,1)}/**
     * Broadcasts a message to all observers and callbacks
     * @param message
     */notifyAll(t){let e=this.observers.length;for(let i=0;i<e;i++)this.observers[i].notify(t);let i=this.subscriptions.length;for(let e=0;e<i;e++)this.subscriptions[e](t)}/**
     * Removes all observers and callbacks
     */clear(){this.observers.length=0,this.subscriptions.length=0}}class iz extends iN{constructor(){super(...arguments),this.type="ex.transform",this._transform=new iL,this._addChildTransform=t=>{let e=t.get(iz);e&&(e._transform.parent=this._transform)},/**
         * Observable that emits when the z index changes on this component
         */this.zIndexChanged$=new iG,this._z=0,/**
         * The [[CoordPlane|coordinate plane|]] for this transform for the entity.
         */this.coordPlane=X.World}get(){return this._transform}onAdd(t){for(let e of t.children)this._addChildTransform(e);t.childrenAdded$.subscribe(t=>this._addChildTransform(t)),t.childrenRemoved$.subscribe(t=>{let e=t.get(iz);e&&(e._transform.parent=null)})}onRemove(t){this._transform.parent=null}/**
     * The z-index ordering of the entity, a higher values are drawn on top of lower values.
     * For example z=99 would be drawn on top of z=0.
     */get z(){return this._z}set z(t){let e=this._z;this._z=t,e!==t&&this.zIndexChanged$.notifyAll(t)}get pos(){return this._transform.pos}set pos(t){this._transform.pos=t}get globalPos(){return this._transform.globalPos}set globalPos(t){this._transform.globalPos=t}get rotation(){return this._transform.rotation}set rotation(t){this._transform.rotation=t}get globalRotation(){return this._transform.globalRotation}set globalRotation(t){this._transform.globalRotation=t}get scale(){return this._transform.scale}set scale(t){this._transform.scale=t}get globalScale(){return this._transform.globalScale}set globalScale(t){this._transform.globalScale=t}applyInverse(t){return this._transform.applyInverse(t)}apply(t){return this._transform.apply(t)}clone(){let t=new iz;return t._transform=this._transform.clone(),t._z=this._z,t}}class iO extends iN{constructor(){super(...arguments),this.type="ex.motion",/**
         * The velocity of an entity in pixels per second
         */this.vel=ep.Zero,/**
         * The acceleration of entity in pixels per second^2
         */this.acc=ep.Zero,/**
         * The scale rate of change in scale units per second
         */this.scaleFactor=ep.Zero,/**
         * The angular velocity which is how quickly the entity is rotating in radians per second
         */this.angularVelocity=0,/**
         * The amount of torque applied to the entity, angular acceleration is torque * inertia
         */this.torque=0,/**
         * Inertia can be thought of as the resistance to motion
         */this.inertia=1}}/**
 * CollisionGroups indicate like members that do not collide with each other. Use [[CollisionGroupManager]] to create [[CollisionGroup]]s
 *
 * For example:
 *
 * Players have collision group "player"
 *
 * ![Player Collision Group](/assets/images/docs/CollisionGroupsPlayer.png)
 *
 * Enemies have collision group "enemy"
 *
 * ![Enemy Collision Group](/assets/images/docs/CollisionGroupsEnemy.png)
 *
 * Blocks have collision group "ground"
 *
 * ![Ground collision group](/assets/images/docs/CollisionGroupsGround.png)
 *
 * Players don't collide with each other, but enemies and blocks. Likewise, enemies don't collide with each other but collide
 * with players and blocks.
 *
 * This is done with bitmasking, see the following pseudo-code
 *
 * PlayerGroup = `0b001`
 * PlayerGroupMask = `0b110`
 *
 * EnemyGroup = `0b010`
 * EnemyGroupMask = `0b101`
 *
 * BlockGroup = `0b100`
 * BlockGroupMask = `0b011`
 *
 * Should Players collide? No because the bitwise mask evaluates to 0
 * `(player1.group & player2.mask) === 0`
 * `(0b001 & 0b110) === 0`
 *
 * Should Players and Enemies collide? Yes because the bitwise mask is non-zero
 * `(player1.group & enemy1.mask) === 1`
 * `(0b001 & 0b101) === 1`
 *
 * Should Players and Blocks collide? Yes because the bitwise mask is non-zero
 * `(player1.group & blocks1.mask) === 1`
 * `(0b001 & 0b011) === 1`
 */class iH{/**
     * STOP!!** It is preferred that [[CollisionGroupManager.create]] is used to create collision groups
     *  unless you know how to construct the proper bitmasks. See https://github.com/excaliburjs/Excalibur/issues/1091 for more info.
     * @param name Name of the collision group
     * @param category 32 bit category for the group, should be a unique power of 2. For example `0b001` or `0b010`
     * @param mask 32 bit mask of category, or `~category` generally. For a category of `0b001`, the mask would be `0b110`
     */constructor(t,e,i){this._name=t,this._category=e,this._mask=i}/**
     * Get the name of the collision group
     */get name(){return this._name}/**
     * Get the category of the collision group, a 32 bit number which should be a unique power of 2
     */get category(){return this._category}/**
     * Get the mask for this collision group
     */get mask(){return this._mask}/**
     * Evaluates whether 2 collision groups can collide
     * @param other  CollisionGroup
     */canCollide(t){return(this.category&t.mask)!=0&&(t.category&this.mask)!=0}/**
     * Inverts the collision group. For example, if before the group specified "players",
     * inverting would specify all groups except players
     * @returns CollisionGroup
     */invert(){return new iH("~("+this.name+")",~this.category,~this.mask)}/**
     * Combine collision groups with each other. The new group includes all of the previous groups.
     *
     * @param collisionGroups
     */static combine(t){let e=t.map(t=>t.name).join("+"),i=t.reduce((t,e)=>e.category|t,0);return new iH(e,i,~i)}/**
     * Creates a collision group that collides with the listed groups
     * @param collisionGroups
     */static collidesWith(t){return iH.combine(t).invert()}}/**
 * The `All` [[CollisionGroup]] is a special group that collides with all other groups including itself,
 * it is the default collision group on colliders.
 */iH.All=new iH("Collide with all groups",-1,-1);/**
 * Models a potential collision between 2 colliders
 */class iq{constructor(t,e){this.colliderA=t,this.colliderB=e,this.id=null,this.id=iq.calculatePairHash(t.id,e.id)}/**
     * Returns whether a it is allowed for 2 colliders in a Pair to collide
     * @param colliderA
     * @param colliderB
     */static canCollide(t,e){var i,s;let r=null===(i=null==t?void 0:t.owner)||void 0===i?void 0:i.get(i7),n=null===(s=null==e?void 0:e.owner)||void 0===s?void 0:s.get(i7);return!(t.id===e.id||t.owner&&e.owner&&t.owner.id===e.owner.id||t.localBounds.hasZeroDimensions()||e.localBounds.hasZeroDimensions())&&!!r&&!!n&&!!r.group.canCollide(n.group)&&(r.collisionType!==j.Fixed||n.collisionType!==j.Fixed)&&n.collisionType!==j.PreventCollision&&r.collisionType!==j.PreventCollision&&!!r.active&&!!n.active}/**
     * Returns whether or not it is possible for the pairs to collide
     */get canCollide(){let t=this.colliderA,e=this.colliderB;return iq.canCollide(t,e)}/**
     * Runs the collision intersection logic on the members of this pair
     */collide(){return this.colliderA.collide(this.colliderB)}/**
     * Check if the collider is part of the pair
     * @param collider
     */hasCollider(t){return t===this.colliderA||t===this.colliderB}/**
     * Calculates the unique pair hash id for this collision pair (owning id)
     */static calculatePairHash(t,e){return t.value<e.value?`#${t.value}+${e.value}`:`#${e.value}+${t.value}`}}/**
 * A 1 dimensional projection on an axis, used to test overlaps
 */class iV{constructor(t,e){this.min=t,this.max=e}overlaps(t){return this.max>t.min&&t.max>this.min}getOverlap(t){return this.overlaps(t)?this.max>t.max?t.max-this.min:this.max-t.min:0}}/**
 * Dynamic Tree Node used for tracking bounds within the tree
 */class iY{constructor(t){this.parent=t,this.parent=t||null,this.data=null,this.bounds=new ey,this.left=null,this.right=null,this.height=0}isLeaf(){return!this.left&&!this.right}}/**
 * The DynamicTrees provides a spatial partitioning data structure for quickly querying for overlapping bounding boxes for
 * all tracked bodies. The worst case performance of this is O(n*log(n)) where n is the number of bodies in the tree.
 *
 * Internally the bounding boxes are organized as a balanced binary tree of bounding boxes, where the leaf nodes are tracked bodies.
 * Every non-leaf node is a bounding box that contains child bounding boxes.
 */class ij{constructor(t=new ey(-Number.MAX_VALUE,-Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)){this.worldBounds=t,this.root=null,this.nodes={}}/**
     * Inserts a node into the dynamic tree
     */_insert(t){// If there are no nodes in the tree, make this the root leaf
if(null===this.root){this.root=t,this.root.parent=null;return}// Search the tree for a node that is not a leaf and find the best place to insert
let e=t.bounds,i=this.root;for(;!i.isLeaf();){let t;let s=i.left,r=i.right,n=i.bounds.getPerimeter(),o=i.bounds.combine(e),a=o.getPerimeter(),h=2*a,l=2*(a-n),A=0,d=e.combine(s.bounds);s.isLeaf()?A=d.getPerimeter()+l:(t=s.bounds.getPerimeter(),A=d.getPerimeter()-t+l);let c=0,u=e.combine(r.bounds);// cost is acceptable
if(r.isLeaf()?c=u.getPerimeter()+l:(t=r.bounds.getPerimeter(),c=u.getPerimeter()-t+l),h<A&&h<c)break;i=A<c?s:r}// Create the new parent node and insert into the tree
let s=i.parent,r=new iY(s);r.bounds=e.combine(i.bounds),r.height=i.height+1,null!==s?(s.left===i?s.left=r:s.right=r,r.left=i,r.right=t,i.parent=r,t.parent=r):(// The sibling node was the root
r.left=i,r.right=t,i.parent=r,t.parent=r,this.root=r);// Walk up the tree fixing heights and AABBs
let n=t.parent;for(;n;){if(!(n=this._balance(n)).left)throw Error("Parent of current leaf cannot have a null left child"+n);if(!n.right)throw Error("Parent of current leaf cannot have a null right child"+n);n.height=1+Math.max(n.left.height,n.right.height),n.bounds=n.left.bounds.combine(n.right.bounds),n=n.parent}}/**
     * Removes a node from the dynamic tree
     */_remove(t){let e;if(t===this.root){this.root=null;return}let i=t.parent,s=i.parent;if(e=i.left===t?i.right:i.left,s){s.left===i?s.left=e:s.right=e,e.parent=s;let t=s;for(;t;)(t=this._balance(t)).bounds=t.left.bounds.combine(t.right.bounds),t.height=1+Math.max(t.left.height,t.right.height),t=t.parent}else this.root=e,e.parent=null}/**
     * Tracks a body in the dynamic tree
     */trackCollider(t){let e=new iY;e.data=t,e.bounds=t.bounds,e.bounds.left-=2,e.bounds.top-=2,e.bounds.right+=2,e.bounds.bottom+=2,this.nodes[t.id.value]=e,this._insert(e)}/**
     * Updates the dynamic tree given the current bounds of each body being tracked
     */updateCollider(t){var e;let i=this.nodes[t.id.value];if(!i)return!1;let s=t.bounds;// if the body is outside the world no longer update it
if(!this.worldBounds.contains(s))return t9.getInstance().warn("Collider with id "+t.id.value+" is outside the world bounds and will no longer be tracked for physics"),this.untrackCollider(t),!1;if(i.bounds.contains(s))return!1;// THIS IS CAUSING UNECESSARY CHECKS
if(this._remove(i),s.left-=iP.boundsPadding,s.top-=iP.boundsPadding,s.right+=iP.boundsPadding,s.bottom+=iP.boundsPadding,t.owner){let i=null===(e=t.owner)||void 0===e?void 0:e.get(i7);if(i){let t=32*i.vel.x/1e3*iP.dynamicTreeVelocityMultiplier,e=32*i.vel.y/1e3*iP.dynamicTreeVelocityMultiplier;t<0?s.left+=t:s.right+=t,e<0?s.top+=e:s.bottom+=e}}return i.bounds=s,this._insert(i),!0}/**
     * Untracks a body from the dynamic tree
     */untrackCollider(t){let e=this.nodes[t.id.value];e&&(this._remove(e),this.nodes[t.id.value]=null,delete this.nodes[t.id.value])}/**
     * Balances the tree about a node
     */_balance(t){if(null===t)throw Error("Cannot balance at null node");if(t.isLeaf()||t.height<2)return t;let e=t.left,i=t.right,s=e.left,r=e.right,n=i.left,o=i.right,a=i.height-e.height;// Rotate c node up
if(a>1)return(// Swap the right node with it's parent
i.left=t,i.parent=t.parent,t.parent=i,i.parent?i.parent.left===t?i.parent.left=i:i.parent.right=i:this.root=i,n.height>o.height?(i.right=n,t.right=o,o.parent=t,t.bounds=e.bounds.combine(o.bounds),i.bounds=t.bounds.combine(n.bounds),t.height=1+Math.max(e.height,o.height),i.height=1+Math.max(t.height,n.height)):(i.right=o,t.right=n,n.parent=t,t.bounds=e.bounds.combine(n.bounds),i.bounds=t.bounds.combine(o.bounds),t.height=1+Math.max(e.height,n.height),i.height=1+Math.max(t.height,o.height)),i);// Rotate left node up
if(a<-1){// node's old parent should point to b
if(// swap
e.left=t,e.parent=t.parent,t.parent=e,e.parent){if(e.parent.left===t)e.parent.left=e;else{if(e.parent.right!==t)throw"Error rotating Dynamic Tree";e.parent.right=e}}else this.root=e;return s.height>r.height?(e.right=s,t.left=r,r.parent=t,t.bounds=i.bounds.combine(r.bounds),e.bounds=t.bounds.combine(s.bounds),t.height=1+Math.max(i.height,r.height),e.height=1+Math.max(t.height,s.height)):(e.right=r,t.left=s,s.parent=t,t.bounds=i.bounds.combine(s.bounds),e.bounds=t.bounds.combine(r.bounds),t.height=1+Math.max(i.height,s.height),e.height=1+Math.max(t.height,r.height)),e}return t}/**
     * Returns the internal height of the tree, shorter trees are better. Performance drops as the tree grows
     */getHeight(){return null===this.root?0:this.root.height}/**
     * Queries the Dynamic Axis Aligned Tree for bodies that could be colliding with the provided body.
     *
     * In the query callback, it will be passed a potential collider. Returning true from this callback indicates
     * that you are complete with your query and you do not want to continue. Returning false will continue searching
     * the tree until all possible colliders have been returned.
     */query(t,e){let i=t.bounds,s=r=>{if(r&&r.bounds.overlaps(i)){if(!r.isLeaf()||r.data===t)return s(r.left)||s(r.right);if(e.call(t,r.data))return!0}return!1};s(this.root)}/**
     * Queries the Dynamic Axis Aligned Tree for bodies that could be intersecting. By default the raycast query uses an infinitely
     * long ray to test the tree specified by `max`.
     *
     * In the query callback, it will be passed a potential body that intersects with the raycast. Returning true from this
     * callback indicates that your are complete with your query and do not want to continue. Return false will continue searching
     * the tree until all possible bodies that would intersect with the ray have been returned.
     */rayCastQuery(t,e=1/0,i){let s=r=>{if(r&&r.bounds.rayCast(t,e)){if(!r.isLeaf())return s(r.left)||s(r.right);if(i.call(t,r.data))return!0}return!1;// ray missed
};s(this.root)}getNodes(){let t=e=>e?[e].concat(t(e.left),t(e.right)):[];return t(this.root)}debug(t){// draw all the nodes in the Dynamic Tree
let e=i=>{i&&(i.isLeaf()?i.bounds.draw(t,ef.Green):i.bounds.draw(t,ef.White),i.left&&e(i.left),i.right&&e(i.right))};e(this.root)}}/**
 * A 2D ray that can be cast into the scene to do collision detection
 */class iK{/**
     * @param pos The starting position for the ray
     * @param dir The vector indicating the direction of the ray
     */constructor(t,e){this.pos=t,this.dir=e.normalize()}/**
     * Tests a whether this ray intersects with a line segment. Returns a number greater than or equal to 0 on success.
     * This number indicates the mathematical intersection time.
     * @param line  The line to test
     */intersect(t){let e=t.begin.sub(this.pos);// Test is line and ray are parallel and non intersecting
if(0===this.dir.cross(t.getSlope())&&0!==e.cross(this.dir))return -1;// Lines are parallel
let i=this.dir.cross(t.getSlope());if(0===i)return -1;let s=e.cross(t.getSlope())/i;if(s>=0){let r=e.cross(this.dir)/i/t.getLength();if(r>=0&&r<=1)return s}return -1}intersectPoint(t){let e=this.intersect(t);return e<0?null:this.getPoint(e)}/**
     * Returns the point of intersection given the intersection time
     */getPoint(t){return this.pos.add(this.dir.scale(t))}}/**
 * Responsible for performing the collision broadphase (locating potential collisions) and
 * the narrowphase (actual collision contacts)
 */class iW{constructor(){this._dynamicCollisionTree=new ij,this._pairs=new Set,this._collisionPairCache=[],this._colliders=[]}getColliders(){return this._colliders}rayCast(t,e){var i,s,r;let n=[],o=null!==(i=null==e?void 0:e.maxDistance)&&void 0!==i?i:1/0,a=null!==(s=null==e?void 0:e.collisionGroup)&&void 0!==s?s:iH.All,h=null!==(r=null==e?void 0:e.searchAllColliders)&&void 0!==r&&r;return this._dynamicCollisionTree.rayCastQuery(t,o,e=>{var i;let s=e.owner,r=s.get(i7);// Early exit if not the right group
if(a.mask!==iH.All.mask&&(null===(i=null==r?void 0:r.group)||void 0===i?void 0:i.mask)!==a.mask)return!1;let l=e.rayCast(t,o);return!!l&&(n.push({distance:l.sub(t.pos).distance(),point:l,collider:e,body:r}),!h)}),n}/**
     * Tracks a physics body for collisions
     */track(t){if(!t){t9.getInstance().warn("Cannot track null collider");return}if(t instanceof iX){let e=t.getColliders();for(let i of e)i.owner=t.owner,this._colliders.push(i),this._dynamicCollisionTree.trackCollider(i)}else this._colliders.push(t),this._dynamicCollisionTree.trackCollider(t)}/**
     * Untracks a physics body
     */untrack(t){if(!t){t9.getInstance().warn("Cannot untrack a null collider");return}if(t instanceof iX){let e=t.getColliders();for(let t of e){let e=this._colliders.indexOf(t);-1!==e&&this._colliders.splice(e,1),this._dynamicCollisionTree.untrackCollider(t)}}else{let e=this._colliders.indexOf(t);-1!==e&&this._colliders.splice(e,1),this._dynamicCollisionTree.untrackCollider(t)}}_pairExists(t,e){// if the collision pair has been calculated already short circuit
let i=iq.calculatePairHash(t.id,e.id);return this._pairs.has(i)}/**
     * Detects potential collision pairs in a broadphase approach with the dynamic AABB tree strategy
     */broadphase(t,e,i){let s;let r=e/1e3,n=t.filter(t=>{var e,i;let s=null===(e=t.owner)||void 0===e?void 0:e.get(i7);return(null===(i=t.owner)||void 0===i?void 0:i.active)&&s.collisionType!==j.PreventCollision});// clear old list of collision pairs
this._collisionPairCache=[],this._pairs.clear();for(let t=0,e=n.length;t<e;t++)s=n[t],// Query the collision tree for potential colliders
this._dynamicCollisionTree.query(s,t=>{if(!this._pairExists(s,t)&&iq.canCollide(s,t)){let e=new iq(s,t);this._pairs.add(e.id),this._collisionPairCache.push(e)}// Always return false, to query whole tree. Returning true in the query method stops searching
return!1});// Check dynamic tree for fast moving objects
// Fast moving objects are those moving at least there smallest bound per frame
if(i&&(i.physics.pairs=this._collisionPairCache.length),iP.checkForFastBodies)for(let t of n){let e=t.owner.get(i7);// Skip non-active objects. Does not make sense on other collision types
if(e.collisionType!==j.Active)continue;// Maximum travel distance next frame
let s=e.vel.size*r+// velocity term
.5*e.acc.size*r*r,n=Math.min(t.bounds.height,t.bounds.width);// acc term
if(iP.disableMinimumSpeedForFastBody||s>n/2){let r;i&&i.physics.fastBodies++;// start with the oldPos because the integration for actors has already happened
// objects resting on a surface may be slightly penetrating in the current position
let n=e.globalPos.sub(e.oldPos),o=t.center,a=t.getFurthestPoint(e.vel),h=a.sub(n),l=new iK(h,e.vel);// back the ray up by -2x surfaceEpsilon to account for fast moving objects starting on the surface
l.pos=l.pos.add(l.dir.scale(-2*iP.surfaceEpsilon));let A=new ep(1/0,1/0);if(this._dynamicCollisionTree.rayCastQuery(l,s+2*iP.surfaceEpsilon,e=>{if(!this._pairExists(t,e)&&iq.canCollide(t,e)){let t=e.rayCast(l,s+10*iP.surfaceEpsilon);if(t){let i=t.sub(h);i.size<A.size&&(A=i,r=e)}}return!1}),r&&ep.isValid(A)){let s=new iq(t,r);this._pairs.has(s.id)||(this._pairs.add(s.id),this._collisionPairCache.push(s));// move the fast moving object to the other body
// need to push into the surface by ex.Physics.surfaceEpsilon
let n=o.sub(a);e.globalPos=h.add(n).add(A).add(l.dir.scale(10*iP.surfaceEpsilon)),t.update(e.transform.get()),i&&i.physics.fastBodyCollisions++}}}// return cache
return this._collisionPairCache}/**
     * Applies narrow phase on collision pairs to find actual area intersections
     * Adds actual colliding pairs to stats' Frame data
     */narrowphase(t,e){let i=[];for(let s=0;s<t.length;s++){let r=t[s].collide();if(i=i.concat(r),e&&r.length>0)for(let t of r)e.physics.contacts.set(t.id,t)}return e&&(e.physics.collisions+=i.length),i}/**
     * Update the dynamic tree positions
     */update(t){let e=0,i=t.length;for(let s=0;s<i;s++)this._dynamicCollisionTree.updateCollider(t[s])&&e++;return e}debug(t){this._dynamicCollisionTree.debug(t)}}/**
 * A collision collider specifies the geometry that can detect when other collision colliders intersect
 * for the purposes of colliding 2 objects in excalibur.
 */class iJ{constructor(){this.id=tv("collider",iJ._ID++),/**
         * Excalibur uses this to signal to the [[CollisionSystem]] this is part of a composite collider
         * @internal
         * @hidden
         */this.__compositeColliderId=null,this.events=new tE}/**
     * Returns a boolean indicating whether this body collided with
     * or was in stationary contact with
     * the body of the other [[Collider]]
     */touching(t){let e=this.collide(t);return!!e}}iJ._ID=0;class iX extends iJ{constructor(t){for(let e of(super(),this._collisionProcessor=new iW,this._dynamicAABBTree=new ij,this._colliders=[],t))this.addCollider(e)}clearColliders(){this._colliders=[]}addCollider(t){t.events.pipe(this.events),t.__compositeColliderId=this.id,this._colliders.push(t),this._collisionProcessor.track(t),this._dynamicAABBTree.trackCollider(t)}removeCollider(t){t.events.pipe(this.events),t.__compositeColliderId=null,eI(t,this._colliders),this._collisionProcessor.untrack(t),this._dynamicAABBTree.untrackCollider(t)}getColliders(){return this._colliders}get worldPos(){var t,e;// TODO transform component world pos
return null!==(e=null===(t=this._transform)||void 0===t?void 0:t.pos)&&void 0!==e?e:ep.Zero}get center(){var t,e;return null!==(e=null===(t=this._transform)||void 0===t?void 0:t.pos)&&void 0!==e?e:ep.Zero}get bounds(){var t,e;// TODO cache this
let i=this.getColliders(),s=i.reduce((t,e)=>t.combine(e.bounds),null!==(e=null===(t=i[0])||void 0===t?void 0:t.bounds)&&void 0!==e?e:new ey().translate(this.worldPos));return s}get localBounds(){var t,e;// TODO cache this
let i=this.getColliders(),s=i.reduce((t,e)=>t.combine(e.localBounds),null!==(e=null===(t=i[0])||void 0===t?void 0:t.localBounds)&&void 0!==e?e:new ey);return s}get axes(){// TODO cache this
let t=this.getColliders(),e=[];for(let i of t)e=e.concat(i.axes);return e}getFurthestPoint(t){let e=this.getColliders(),i=[];for(let s of e)i.push(s.getFurthestPoint(t));// Pick best point from all colliders
let s=i[0],r=-Number.MAX_VALUE;for(let e of i){let i=e.dot(t);i>r&&(s=e,r=i)}return s}getInertia(t){let e=this.getColliders(),i=0;for(let s of e)i+=s.getInertia(t);return i}collide(t){let e=[t];t instanceof iX&&(e=t.getColliders());let i=[];for(let t of e)this._dynamicAABBTree.query(t,e=>(i.push(new iq(t,e)),!1));let s=[];for(let t of i)s=s.concat(t.collide());return s}getClosestLineBetween(t){let e=this.getColliders(),i=[];if(t instanceof iX){let s=t.getColliders();for(let t of e)for(let e of s){let s=t.getClosestLineBetween(e);s&&i.push(s)}}else for(let s of e){let e=t.getClosestLineBetween(s);e&&i.push(e)}if(i.length){let t=i[0].getLength(),e=i[0];for(let s of i){let i=s.getLength();i<t&&(t=i,e=s)}return e}return null}contains(t){let e=this.getColliders();for(let i of e)if(i.contains(t))return!0;return!1}rayCast(t,e){let i=this.getColliders(),s=[];for(let r of i){let i=r.rayCast(t,e);i&&s.push(i)}if(s.length){let e=s[0],i=e.dot(t.dir);for(let r of s){let s=t.dir.dot(r);s<i&&(e=r,i=s)}return e}return null}project(t){let e=this.getColliders(),i=[];for(let s of e){let e=s.project(t);e&&i.push(e)}// Merge all proj's on the same axis
if(i.length){let t=new iV(i[0].min,i[0].max);for(let e of i)t.min=Math.min(e.min,t.min),t.max=Math.max(e.max,t.max);return t}return null}update(t){if(t){let e=this.getColliders();for(let i of e)i.owner=this.owner,i.update(t)}}debug(t,e){let i=this.getColliders();for(let s of i)s.debug(t,e)}clone(){return new iX(this._colliders.map(t=>t.clone()))}}/**
 * A 2D line segment
 */class iZ{/**
     * @param begin  The starting point of the line segment
     * @param end  The ending point of the line segment
     */constructor(t,e){this.begin=t,this.end=e}/**
     * Gets the raw slope (m) of the line. Will return (+/-)Infinity for vertical lines.
     */get slope(){return(this.end.y-this.begin.y)/(this.end.x-this.begin.x)}/**
     * Gets the Y-intercept (b) of the line. Will return (+/-)Infinity if there is no intercept.
     */get intercept(){return this.begin.y-this.slope*this.begin.x}/**
     * Gets the normal of the line
     */normal(){return this._normal?this._normal:this._normal=this.end.sub(this.begin).normal()}dir(){return this._dir?this._dir:this._dir=this.end.sub(this.begin)}getPoints(){return[this.begin,this.end]}/**
     * Returns the slope of the line in the form of a vector of length 1
     */getSlope(){if(this._slope)return this._slope;let t=this.begin,e=this.end,i=t.distance(e);return this._slope=e.sub(t).scale(1/i)}/**
     * Returns the edge of the line as vector, the length of the vector is the length of the edge
     */getEdge(){let t=this.begin,e=this.end;return e.sub(t)}/**
     * Returns the length of the line segment in pixels
     */getLength(){if(this._length)return this._length;let t=this.begin,e=this.end,i=t.distance(e);return this._length=i}/**
     * Returns the midpoint of the edge
     */get midpoint(){return this.begin.add(this.end).scale(.5)}/**
     * Flips the direction of the line segment
     */flip(){return new iZ(this.end,this.begin)}/**
     * Tests if a given point is below the line, points in the normal direction above the line are considered above.
     * @param point
     */below(t){let e=(this.end.x-this.begin.x)*(t.y-this.begin.y)-(this.end.y-this.begin.y)*(t.x-this.begin.x);return e>=0}/**
     * Returns the clip point
     * @param sideVector Vector that traces the line
     * @param length Length to clip along side
     */clip(t,e){let i=t;i=i.normalize();let s=i.dot(this.begin)-e,r=i.dot(this.end)-e,n=[];return(s<=0&&n.push(this.begin),r<=0&&n.push(this.end),s*r<0&&n.push(this.begin.add(this.end.sub(this.begin).scale(s/(s-r)))),2!==n.length)?null:new iZ(n[0],n[1])}/**
     * Find the perpendicular distance from the line to a point
     * https://en.wikipedia.org/wiki/Distance_from_a_point_to_a_line
     * @param point
     */distanceToPoint(t,e=!1){let i=t.x,s=t.y,r=this.getLength(),n=this.end.y-this.begin.y,o=this.end.x-this.begin.x,a=(n*i-o*s+this.end.x*this.begin.y-this.end.y*this.begin.x)/r;return e?a:Math.abs(a)}/**
     * Find the perpendicular line from the line to a point
     * https://en.wikipedia.org/wiki/Distance_from_a_point_to_a_line
     * (a - p) - ((a - p) * n)n
     * a is a point on the line
     * p is the arbitrary point above the line
     * n is a unit vector in direction of the line
     * @param point
     */findVectorToPoint(t){let e=this.begin.sub(t),i=this.getSlope();return e.sub(i.scale(e.dot(i)))}/**
     * Finds a point on the line given only an X or a Y value. Given an X value, the function returns
     * a new point with the calculated Y value and vice-versa.
     *
     * @param x The known X value of the target point
     * @param y The known Y value of the target point
     * @returns A new point with the other calculated axis value
     */findPoint(t=null,e=null){let i=this.slope,s=this.intercept;if(null!==t)return new ep(t,i*t+s);if(null!==e)return new ep((e-s)/i,e);throw Error("You must provide an X or a Y value")}/**
     * @see http://stackoverflow.com/a/11908158/109458
     */hasPoint(){let t;let e=0;if("number"==typeof arguments[0]&&"number"==typeof arguments[1])t=new ep(arguments[0],arguments[1]),e=arguments[2]||0;else if(arguments[0]instanceof ep)t=arguments[0],e=arguments[1]||0;else throw"Could not determine the arguments for Vector.hasPoint";let i=t.x-this.begin.x,s=t.y-this.begin.y,r=this.end.x-this.begin.x,n=this.end.y-this.begin.y;return(// check whether point lines on the line
!(Math.abs(i*n-s*r)>e)&&(Math.abs(r)>=Math.abs(n)?r>0?this.begin.x<=t.x&&t.x<=this.end.x:this.end.x<=t.x&&t.x<=this.begin.x:n>0?this.begin.y<=t.y&&t.y<=this.end.y:this.end.y<=t.y&&t.y<=this.begin.y))}}/**
 * Finds the closes line between 2 line segments, were the magnitude of u, v are the lengths of each segment
 * L1 = P(s) = p0 + s * u, where s is time and p0 is the start of the line
 * L2 = Q(t) = q0 + t * v, where t is time and q0 is the start of the line
 * @param p0 Point where L1 begins
 * @param u Direction and length of L1
 * @param q0 Point were L2 begins
 * @param v Direction and length of L2
 */function i$(t,e,i,s){// Distance between 2 lines http://geomalgorithms.com/a07-_distance.html
// w(s, t) = P(s) - Q(t)
// The w(s, t) that has the minimum distance we will say is w(sClosest, tClosest) = wClosest
//
// wClosest is the vector that is uniquely perpendicular to the 2 line directions u & v.
// wClosest = w0 + sClosest * u - tClosest * v, where w0 is p0 - q0
//
// The closest point between 2 lines then satisfies this pair of equations
// 1: u * wClosest = 0
// 2: v * wClosest = 0
//
// Substituting wClosest into the equations we get
//
// 1: (u * u) * sClosest - (u * v) tClosest = -u * w0
// 2: (v * u) * sClosest - (v * v) tClosest = -v * w0
// simplify w0
let r=t.sub(i),n=e.dot(e),o=e.dot(s),a=s.dot(s),h=e.dot(r),l=s.dot(r),A=n*a-o*o,d=A,c=A;// if denom is 0 they are parallel, use any point from either as the start in this case p0
if(0===A||A<=.01)return new iZ(t,i.add(s.scale(h/o)));// Solve for sClosest for infinite line
let u=o*l-a*h,g=n*l-o*h;// / denom;
return u<0?(u=0,g=l,c=a):u>d&&(u=d,g=l+o,c=a),g<0?(g=0,0>-h?u=0:-h>n?u=d:(u=-h,d=n)):g>c&&(g=c,-h+o<0?u=0:-h+o>n?u=d:(u=-h+o,d=n)),u=.001>Math.abs(u)?0:u/d,g=.001>Math.abs(g)?0:g/c,new iZ(t.add(e.scale(u)),i.add(s.scale(g)))}let i0={PolygonPolygonClosestLine(t,e){// Find the 2 closest faces on each polygon
let i=e.worldPos,s=i.sub(t.worldPos),r=s.negate(),n=new iK(t.worldPos,s),o=new iK(i,r),a=t.rayCast(n).add(n.dir.scale(.1)),h=e.rayCast(o).add(o.dir.scale(.1)),l=t.getClosestFace(a),A=e.getClosestFace(h),d=l.face.begin,c=l.face.getEdge(),u=A.face.begin,g=A.face.getEdge();return i$(d,c,u,g)},PolygonEdgeClosestLine(t,e){// Find the 2 closest faces on each polygon
let i=e.worldPos,s=i.sub(t.worldPos),r=new iK(t.worldPos,s),n=t.rayCast(r).add(r.dir.scale(.1)),o=t.getClosestFace(n),a=o.face.begin,h=o.face.getEdge(),l=e.asLine(),A=l.begin,d=l.getEdge();return i$(a,h,A,d)},PolygonCircleClosestLine(t,e){// https://math.stackexchange.com/questions/1919177/how-to-find-point-on-line-closest-to-sphere
// Find the 2 closest faces on each polygon
let i=e.worldPos,s=i.sub(t.worldPos),r=new iK(t.worldPos,s.normalize()),n=t.rayCast(r).add(r.dir.scale(.1)),o=t.getClosestFace(n),a=o.face.begin,h=o.face.getEdge(),l=(h.x*(i.x-a.x)+h.y*(i.y-a.y))/(h.x*h.x+h.y*h.y);// If time of minimum is past the edge clamp
l>1?l=1:l<0&&(l=0);// Minimum distance
let A=Math.sqrt(Math.pow(a.x+h.x*l-i.x,2)+Math.pow(a.y+h.y*l-i.y,2))-e.radius,d=(a.x+h.x*l-i.x)*e.radius/(e.radius+A),c=(a.y+h.y*l-i.y)*e.radius/(e.radius+A);return new iZ(h.scale(l).add(a),new ep(i.x+d,i.y+c))},CircleCircleClosestLine(t,e){// Find the 2 closest faces on each polygon
let i=e.worldPos,s=i.sub(t.worldPos),r=t.worldPos,n=r.sub(e.worldPos),o=new iK(t.worldPos,s),a=new iK(e.worldPos,n),h=t.rayCast(o),l=e.rayCast(a);return new iZ(h,l)},CircleEdgeClosestLine(t,e){// https://math.stackexchange.com/questions/1919177/how-to-find-point-on-line-closest-to-sphere
let i=t.worldPos,s=e.asLine(),r=s.begin,n=s.getEdge(),o=(n.x*(i.x-r.x)+n.y*(i.y-r.y))/(n.x*n.x+n.y*n.y);// If time of minimum is past the edge clamp to edge
o>1?o=1:o<0&&(o=0);// Minimum distance
let a=Math.sqrt(Math.pow(r.x+n.x*o-i.x,2)+Math.pow(r.y+n.y*o-i.y,2))-t.radius,h=(r.x+n.x*o-i.x)*t.radius/(t.radius+a),l=(r.y+n.y*o-i.y)*t.radius/(t.radius+a);return new iZ(n.scale(o).add(r),new ep(i.x+h,i.y+l))},EdgeEdgeClosestLine(t,e){// L1 = P(s) = p0 + s * u, where s is time and p0 is the start of the line
let i=t.asLine(),s=i.begin,r=i.getEdge(),n=e.asLine(),o=n.begin,a=n.getEdge();return i$(s,r,o,a)}};/**
 * This is a circle collider for the excalibur rigid body physics simulation
 */class i1 extends iJ{get worldPos(){return this._globalMatrix.getPosition()}/**
     * Get the radius of the circle
     */get radius(){var t;let e=this._transform,i=null!==(t=null==e?void 0:e.globalScale)&&void 0!==t?t:ep.One;// This is a trade off, the alternative is retooling circles to support ellipse collisions
return this._naturalRadius*Math.min(i.x,i.y)}/**
     * Set the radius of the circle
     */set radius(t){var e;let i=this._transform,s=null!==(e=null==i?void 0:i.globalScale)&&void 0!==e?e:ep.One;// This is a trade off, the alternative is retooling circles to support ellipse collisions
this._naturalRadius=t/Math.min(s.x,s.y)}constructor(t){super(),/**
         * Position of the circle relative to the collider, by default (0, 0).
         */this.offset=ep.Zero,this._globalMatrix=eQ.identity(),this.offset=t.offset||ep.Zero,this.radius=t.radius||0,this._globalMatrix.translate(this.offset.x,this.offset.y)}/**
     * Returns a clone of this shape, not associated with any collider
     */clone(){return new i1({offset:this.offset.clone(),radius:this.radius})}/**
     * Get the center of the collider in world coordinates
     */get center(){return this._globalMatrix.getPosition()}/**
     * Tests if a point is contained in this collider
     */contains(t){var e,i;let s=null!==(i=null===(e=this._transform)||void 0===e?void 0:e.pos)&&void 0!==i?i:this.offset,r=s.distance(t);return r<=this.radius}/**
     * Casts a ray at the Circle collider and returns the nearest point of collision
     * @param ray
     */rayCast(t,e=1/0){//https://en.wikipedia.org/wiki/Line%E2%80%93sphere_intersection
let i=this.center,s=t.dir,r=t.pos,n=Math.sqrt(Math.pow(s.dot(r.sub(i)),2)-Math.pow(r.sub(i).distance(),2)+Math.pow(this.radius,2));if(n<0)return null;{let o=0;if(0===n)return(o=-s.dot(r.sub(i)))>0&&o<e?t.getPoint(o):null;{let o=-s.dot(r.sub(i))+n,a=-s.dot(r.sub(i))-n,h=[];o>=0&&h.push(o),a>=0&&h.push(a);let l=Math.min(...h);return l<=e?t.getPoint(l):null}}}getClosestLineBetween(t){if(t instanceof i1)return i0.CircleCircleClosestLine(this,t);if(t instanceof i6)return i0.PolygonCircleClosestLine(t,this).flip();if(t instanceof i4)return i0.CircleEdgeClosestLine(this,t).flip();throw Error(`Polygon could not collide with unknown CollisionShape ${typeof t}`)}/**
     * @inheritdoc
     */collide(t){if(t instanceof i1)return i3.CollideCircleCircle(this,t);if(t instanceof i6)return i3.CollideCirclePolygon(this,t);if(t instanceof i4)return i3.CollideCircleEdge(this,t);throw Error(`Circle could not collide with unknown CollisionShape ${typeof t}`)}/**
     * Find the point on the collider furthest in the direction specified
     */getFurthestPoint(t){return this.center.add(t.normalize().scale(this.radius))}/**
     * Find the local point on the shape in the direction specified
     * @param direction
     */getFurthestLocalPoint(t){let e=t.normalize();return e.scale(this.radius)}/**
     * Get the axis aligned bounding box for the circle collider in world coordinates
     */get bounds(){var t,e,i;let s=this._transform,r=null!==(t=null==s?void 0:s.globalScale)&&void 0!==t?t:ep.One,n=null!==(e=null==s?void 0:s.globalRotation)&&void 0!==e?e:0,o=null!==(i=null==s?void 0:s.globalPos)&&void 0!==i?i:ep.Zero;return new ey(this.offset.x-this._naturalRadius,this.offset.y-this._naturalRadius,this.offset.x+this._naturalRadius,this.offset.y+this._naturalRadius).rotate(n).scale(r).translate(o)}/**
     * Get the axis aligned bounding box for the circle collider in local coordinates
     */get localBounds(){return new ey(this.offset.x-this._naturalRadius,this.offset.y-this._naturalRadius,this.offset.x+this._naturalRadius,this.offset.y+this._naturalRadius)}/**
     * Get axis not implemented on circles, since there are infinite axis in a circle
     */get axes(){return[]}/**
     * Returns the moment of inertia of a circle given it's mass
     * https://en.wikipedia.org/wiki/List_of_moments_of_inertia
     */getInertia(t){return t*this.radius*this.radius/2}/* istanbul ignore next */update(t){var e;this._transform=t;let i=null!==(e=t.matrix)&&void 0!==e?e:this._globalMatrix;i.clone(this._globalMatrix),this._globalMatrix.translate(this.offset.x,this.offset.y)}/**
     * Project the circle along a specified axis
     */project(t){let e=[],i=this.center,s=i.dot(t);return e.push(s),e.push(s+this.radius),e.push(s-this.radius),new iV(Math.min.apply(Math,e),Math.max.apply(Math,e))}debug(t,e){var i,s,r,n;let o=this._transform,a=null!==(i=null==o?void 0:o.globalScale)&&void 0!==i?i:ep.One,h=null!==(s=null==o?void 0:o.globalRotation)&&void 0!==s?s:0,l=null!==(r=null==o?void 0:o.globalPos)&&void 0!==r?r:ep.Zero;t.save(),t.translate(l.x,l.y),t.rotate(h),t.scale(a.x,a.y),t.drawCircle(null!==(n=this.offset)&&void 0!==n?n:ep.Zero,this._naturalRadius,ef.Transparent,e,2),t.restore()}}/**
 * Collision contacts are used internally by Excalibur to resolve collision between colliders. This
 * Pair prevents collisions from being evaluated more than one time
 */class i2{constructor(t,e,i,s,r,n,o,a){var h,l;this._canceled=!1,this.colliderA=t,this.colliderB=e,this.mtv=i,this.normal=s,this.tangent=r,this.points=n,this.localPoints=o,this.info=a,this.id=iq.calculatePairHash(t.id,e.id),(t.__compositeColliderId||e.__compositeColliderId)&&(this.id+="|"+iq.calculatePairHash(null!==(h=t.__compositeColliderId)&&void 0!==h?h:t.id,null!==(l=e.__compositeColliderId)&&void 0!==l?l:e.id))}/**
     * Match contact awake state, except if body's are Fixed
     */matchAwake(){let t=this.colliderA.owner.get(i7),e=this.colliderB.owner.get(i7);t&&e&&t.sleeping!==e.sleeping&&(t.sleeping&&t.collisionType!==j.Fixed&&e.sleepMotion>=iP.wakeThreshold&&t.setSleeping(!1),e.sleeping&&e.collisionType!==j.Fixed&&t.sleepMotion>=iP.wakeThreshold&&e.setSleeping(!1))}isCanceled(){return this._canceled}cancel(){this._canceled=!0}}class i5{static findPolygonPolygonSeparation(t,e){let i=-Number.MAX_VALUE,s=null,r=null,n=-1,o=null,a=t.getSides(),h=t.getLocalSides();for(let t=0;t<a.length;t++){let h=a[t],l=h.normal(),A=e.getFurthestPoint(l.negate()),d=h.distanceToPoint(A,!0);d>i&&(i=d,s=h,r=l,n=t,o=A)}return{collider:t,separation:r?i:99,axis:r,side:s,localSide:h[n],sideId:n,point:o,localPoint:r?e.getFurthestLocalPoint(r.negate()):null}}static findCirclePolygonSeparation(t,e){let i=e.axes,s=e.center,r=s.sub(t.worldPos),n=e.getFurthestPoint(r.negate());i.push(n.sub(t.worldPos).normalize());let o=Number.MAX_VALUE,a=null,h=-1;for(let s=0;s<i.length;s++){let r=e.project(i[s]),n=t.project(i[s]),l=r.getOverlap(n);if(l<=0)return null;l<o&&(o=l,a=i[s],h=s)}return h<0?null:a.normalize().scale(o)}}let i3={CollideCircleCircle(t,e){let i=t.worldPos,s=e.worldPos,r=t.radius+e.radius,n=i.distance(s);if(n>r)return[];// negative means overlap
let o=r-n,a=s.sub(i).normalize(),h=a.perpendicular(),l=a.scale(o),A=t.getFurthestPoint(a),d=t.getFurthestLocalPoint(a);return[new i2(t,e,l,a,h,[A],[d],{collider:t,separation:o,axis:a,point:A})]},CollideCirclePolygon(t,e){var i,s;let r=i5.findCirclePolygonSeparation(t,e);if(!r)return[];// make sure that the minAxis is pointing away from circle
let n=r.dot(e.center.sub(t.center));r=n<0?r.negate():r;let o=t.getFurthestPoint(r),a=null!==(s=null===(i=t.owner)||void 0===i?void 0:i.get(iz))&&void 0!==s?s:new iz,h=a.applyInverse(o),l=r.normalize(),A={collider:t,separation:-r.size,axis:l,point:o,localPoint:h,side:e.findSide(l.negate()),localSide:e.findLocalSide(l.negate())};return[new i2(t,e,r,l,l.perpendicular(),[o],[h],A)]},CollideCircleEdge(t,e){// TODO not sure this actually abides by local/world collisions
// Are edge.begin and edge.end local space or world space? I think they should be local
// center of the circle in world pos
let i=t.center,s=e.asLine(),r=s.end.sub(s.begin),n=r.dot(s.end.sub(i)),o=r.dot(i.sub(s.begin)),a=e.asLine(),h=e.asLocalLine();// Potential region A collision (circle is on the left side of the edge, before the beginning)
if(o<=0){let r=s.begin.sub(i),n=r.dot(r);// save some sqrts
if(n>t.radius*t.radius)return[];// no collision
let o=r.normalize(),l=t.radius-Math.sqrt(n),A={collider:t,separation:l,axis:o,point:a.begin,side:a,localSide:h};return[new i2(t,e,o.scale(l),o,o.perpendicular(),[a.begin],[h.begin],A)]}// Potential region B collision (circle is on the right side of the edge, after the end)
if(n<=0){let r=s.end.sub(i),n=r.dot(r);if(n>t.radius*t.radius)return[];let o=r.normalize(),l=t.radius-Math.sqrt(n),A={collider:t,separation:l,axis:o,point:a.end,side:a,localSide:h};return[new i2(t,e,o.scale(l),o,o.perpendicular(),[a.end],[h.end],A)]}// Otherwise potential region AB collision (circle is in the middle of the edge between the beginning and end)
let l=r.dot(r),A=s.begin.scale(n).add(s.end.scale(o)).scale(1/l),d=i.sub(A),c=d.dot(d);if(c>t.radius*t.radius)return[];// no collision
let u=r.perpendicular();0>u.dot(i.sub(s.begin))&&(u.x=-u.x,u.y=-u.y),u=u.normalize();let g=t.radius-Math.sqrt(c),p=u.scale(g),_={collider:t,separation:g,axis:u,point:A,side:a,localSide:h};return[new i2(t,e,p,u.negate(),u.negate().perpendicular(),[A],[A.sub(e.worldPos)],_)]},CollideEdgeEdge:()=>[],CollidePolygonEdge(t,e){var i;let s=t.center,r=e.center,n=r.sub(s).normalize(),o=new i6({points:[e.begin,e.end,e.end.add(n.scale(100)),e.begin.add(n.scale(100))],offset:e.offset});o.owner=e.owner;let a=null===(i=e.owner)||void 0===i?void 0:i.get(iz);a&&o.update(e.owner.get(iz).get());// Gross hack but poly-poly works well
let h=this.CollidePolygonPolygon(t,o);return h.length&&(// Fudge the contact back to edge
h[0].colliderB=e,h[0].id=iq.calculatePairHash(t.id,e.id)),h},CollidePolygonPolygon(t,e){var i,s,r,n;// Multi contact from SAT
// https://gamedev.stackexchange.com/questions/111390/multiple-contacts-for-sat-collision-detection
// do a SAT test to find a min axis if it exists
let o=i5.findPolygonPolygonSeparation(t,e);// If there is no overlap from boxA's perspective we can end early
if(o.separation>0)return[];let a=i5.findPolygonPolygonSeparation(e,t);// If there is no overlap from boxB's perspective exit now
if(a.separation>0)return[];// Separations are both negative, we want to pick the least negative (minimal movement)
let h=o.separation>a.separation?o:a,l=h.collider===t?e:t,A=l.findSide(h.axis.negate()),d=h.side,c=d.dir().normalize(),u=A.clip(c.negate(),-c.dot(d.begin)),g=null;// If there is no left there is no collision
if(u&&(g=u.clip(c,c.dot(d.end))),g){// We only want clip points below the reference edge, discard the others
let o=g.getPoints().filter(t=>d.below(t)),a=h.axis,l=a.perpendicular();// Point Contact A -> B
0>e.center.sub(t.center).dot(a)&&(l=(a=a.negate()).perpendicular());// Points are clipped from incident which is the other collider
// Store those as locals
let A=[];if(h.collider===t){let t=null!==(s=null===(i=e.owner)||void 0===i?void 0:i.get(iz))&&void 0!==s?s:new iz;A=o.map(e=>t.applyInverse(e))}else{let e=null!==(n=null===(r=t.owner)||void 0===r?void 0:r.get(iz))&&void 0!==n?n:new iz;A=o.map(t=>e.applyInverse(t))}return[new i2(t,e,a.scale(-h.separation),a,l,o,A,h)]}return[]},FindContactSeparation(t,e){var i,s,r,n;let o=t.colliderA,a=null!==(s=null===(i=t.colliderA.owner)||void 0===i?void 0:i.get(iz))&&void 0!==s?s:new iz,h=t.colliderB,l=null!==(n=null===(r=t.colliderB.owner)||void 0===r?void 0:r.get(iz))&&void 0!==n?n:new iz;// both are circles
if(o instanceof i1&&h instanceof i1){let t=o.radius+h.radius,e=a.pos.distance(l.pos);return-(t-e)}// both are polygons
if(o instanceof i6&&h instanceof i6&&t.info.localSide){let i,s;return t.info.collider===o?(i=new iZ(a.apply(t.info.localSide.begin),a.apply(t.info.localSide.end)),s=l.apply(e)):(i=new iZ(l.apply(t.info.localSide.begin),l.apply(t.info.localSide.end)),s=a.apply(e)),i.distanceToPoint(s,!0)}// polygon v circle
if(o instanceof i6&&h instanceof i1||h instanceof i6&&o instanceof i1){let i=a.apply(e);if(t.info.side)return t.info.side.distanceToPoint(i,!0)}// polygon v edge
if(o instanceof i4&&h instanceof i6||h instanceof i4&&o instanceof i6){let i;if(i=t.info.collider===o?l.apply(e):a.apply(e),t.info.side)return t.info.side.distanceToPoint(i,!0)}// circle v edge
if(o instanceof i1&&h instanceof i4||h instanceof i1&&o instanceof i4){let i;// Local point is always on the edge which is always shapeB
let s=l.apply(e);o instanceof i1&&(i=o.getFurthestPoint(t.normal));let r=s.distance(i);if(t.info.side)return r>0?-r:0}return 0}};/**
 * Edge is a single line collider to create collisions with a single line.
 */class i4 extends iJ{constructor(t){var e;super(),this._globalMatrix=eQ.identity(),this.begin=t.begin||ep.Zero,this.end=t.end||ep.Zero,this.offset=null!==(e=t.offset)&&void 0!==e?e:ep.Zero}/**
     * Returns a clone of this Edge, not associated with any collider
     */clone(){return new i4({begin:this.begin.clone(),end:this.end.clone()})}get worldPos(){var t;let e=this._transform;return null!==(t=null==e?void 0:e.globalPos.add(this.offset))&&void 0!==t?t:this.offset}/**
     * Get the center of the collision area in world coordinates
     */get center(){let t=this._getTransformedBegin(),e=this._getTransformedEnd(),i=t.average(e);return i}_getTransformedBegin(){return this._globalMatrix.multiply(this.begin)}_getTransformedEnd(){return this._globalMatrix.multiply(this.end)}/**
     * Returns the slope of the line in the form of a vector
     */getSlope(){let t=this._getTransformedBegin(),e=this._getTransformedEnd(),i=t.distance(e);return e.sub(t).scale(1/i)}/**
     * Returns the length of the line segment in pixels
     */getLength(){let t=this._getTransformedBegin(),e=this._getTransformedEnd(),i=t.distance(e);return i}/**
     * Tests if a point is contained in this collision area
     */contains(){return!1}/**
     * @inheritdoc
     */rayCast(t,e=1/0){let i=this._getTransformedBegin().sub(t.pos);// Test is line and ray are parallel and non intersecting
if(0===t.dir.cross(this.getSlope())&&0!==i.cross(t.dir))return null;// Lines are parallel
let s=t.dir.cross(this.getSlope());if(0===s)return null;let r=i.cross(this.getSlope())/s;if(r>=0&&r<=e){let e=i.cross(t.dir)/s/this.getLength();if(e>=0&&e<=1)return t.getPoint(r)}return null}/**
     * Returns the closes line between this and another collider, from this -> collider
     * @param shape
     */getClosestLineBetween(t){if(t instanceof i1)return i0.CircleEdgeClosestLine(t,this);if(t instanceof i6)return i0.PolygonEdgeClosestLine(t,this).flip();if(t instanceof i4)return i0.EdgeEdgeClosestLine(this,t);throw Error(`Polygon could not collide with unknown CollisionShape ${typeof t}`)}/**
     * @inheritdoc
     */collide(t){if(t instanceof i1)return i3.CollideCircleEdge(t,this);if(t instanceof i6)return i3.CollidePolygonEdge(t,this);if(t instanceof i4)return i3.CollideEdgeEdge();throw Error(`Edge could not collide with unknown CollisionShape ${typeof t}`)}/**
     * Find the point on the collider furthest in the direction specified
     */getFurthestPoint(t){let e=this._getTransformedBegin(),i=this._getTransformedEnd();return t.dot(e)>0?e:i}_boundsFromBeginEnd(t,e,i=10){// A perfectly vertical or horizontal edge would have a bounds 0 width or height
// this causes problems for the collision system so we give them some padding
return new ey(Math.min(t.x,e.x)-i,Math.min(t.y,e.y)-i,Math.max(t.x,e.x)+i,Math.max(t.y,e.y)+i)}/**
     * Get the axis aligned bounding box for the edge collider in world space
     */get bounds(){let t=this._getTransformedBegin(),e=this._getTransformedEnd();return this._boundsFromBeginEnd(t,e)}/**
     * Get the axis aligned bounding box for the edge collider in local space
     */get localBounds(){return this._boundsFromBeginEnd(this.begin,this.end)}/**
     * Returns this edge represented as a line in world coordinates
     */asLine(){return new iZ(this._getTransformedBegin(),this._getTransformedEnd())}/**
     * Return this edge as a line in local line coordinates (relative to the position)
     */asLocalLine(){return new iZ(this.begin,this.end)}/**
     * Get the axis associated with the edge
     */get axes(){let t=this._getTransformedEnd().sub(this._getTransformedBegin()),e=t.normal(),i=[];return i.push(e),i.push(e.negate()),i.push(e.normal()),i.push(e.normal().negate()),i}/**
     * Get the moment of inertia for an edge
     * https://en.wikipedia.org/wiki/List_of_moments_of_inertia
     */getInertia(t){let e=this.end.sub(this.begin).distance()/2;return t*e*e}/**
     * @inheritdoc
     */update(t){var e;this._transform=t;let i=null!==(e=t.matrix)&&void 0!==e?e:this._globalMatrix;i.clone(this._globalMatrix),this._globalMatrix.translate(this.offset.x,this.offset.y)}/**
     * Project the edge along a specified axis
     */project(t){let e=[],i=[this._getTransformedBegin(),this._getTransformedEnd()],s=i.length;for(let r=0;r<s;r++)e.push(i[r].dot(t));return new iV(Math.min.apply(Math,e),Math.max.apply(Math,e))}debug(t,e){let i=this._getTransformedBegin(),s=this._getTransformedEnd();t.drawLine(i,s,e,2),t.drawCircle(i,2,e),t.drawCircle(s,2,e)}}/**
 * Polygon collider for detecting collisions
 */class i6 extends iJ{/**
     * Points in the polygon in order around the perimeter in local coordinates. These are relative from the body transform position.
     * Excalibur stores these in counter-clockwise order
     */set points(t){this._localBoundsDirty=!0,this._localSidesDirty=!0,this._sidesDirty=!0,this._points=t}/**
     * Points in the polygon in order around the perimeter in local coordinates. These are relative from the body transform position.
     * Excalibur stores these in counter-clockwise order
     */get points(){return this._points}constructor(t){var e,i;super(),this._logger=t9.getInstance(),this._transformedPoints=[],this._sides=[],this._localSides=[],this._globalMatrix=eQ.identity(),this._transformedPointsDirty=!0,this._sidesDirty=!0,this._localSidesDirty=!0,this._localBoundsDirty=!0,this.offset=null!==(e=t.offset)&&void 0!==e?e:ep.Zero,this._globalMatrix.translate(this.offset.x,this.offset.y),this.points=null!==(i=t.points)&&void 0!==i?i:[];let s=this._isCounterClockwiseWinding(this.points);s||this.points.reverse(),this.isConvex()||this._logger.warn("Excalibur only supports convex polygon colliders and will not behave properly.Call PolygonCollider.triangulate() to build a new collider composed of smaller convex triangles"),// calculate initial transformation
this._calculateTransformation()}_isCounterClockwiseWinding(t){// https://stackoverflow.com/a/1165943
let e=0;for(let i=0;i<t.length;i++)e+=(t[(i+1)%t.length].x-t[i].x)*(t[(i+1)%t.length].y+t[i].y);return e<0}/**
     * Returns if the polygon collider is convex, Excalibur does not handle non-convex collision shapes.
     * Call [[Polygon.triangulate]] to generate a [[CompositeCollider]] from this non-convex shape
     */isConvex(){// From SO: https://stackoverflow.com/a/45372025
if(this.points.length<3)return!1;let t=this.points[this.points.length-2],e=this.points[this.points.length-1],i=Math.atan2(e.y-t.y,e.x-t.x),s=0,r=0,n=0;for(let[o,a]of this.points.entries()){if(t=e,s=i,i=Math.atan2((e=a).y-t.y,e.x-t.x),t.equals(e))return!1;// repeat point
let h=i-s;if(h<=-Math.PI?h+=2*Math.PI:h>Math.PI&&(h-=2*Math.PI),0===o){if(0===h)return!1;r=h>0?1:-1}else if(r*h<=0)return!1;n+=h}return 1===Math.abs(Math.round(n/(2*Math.PI)))}/**
     * Tessellates the polygon into a triangle fan as a [[CompositeCollider]] of triangle polygons
     */tessellate(){let t=[];for(let e=1;e<this.points.length-2;e++)t.push([this.points[0],this.points[e+1],this.points[e+2]]);return t.push([this.points[0],this.points[1],this.points[2]]),new iX(t.map(t=>i8.Polygon(t)))}/**
     * Triangulate the polygon collider using the "Ear Clipping" algorithm.
     * Returns a new [[CompositeCollider]] made up of smaller triangles.
     */triangulate(){// https://www.youtube.com/watch?v=hTJFcHutls8
if(this.points.length<3)throw Error("Invalid polygon");/**
         * Helper to get a vertex in the list
         */function t(t,e){return t>=e.length?e[t%e.length]:t<0?e[t%e.length+e.length]:e[t]}let e=[],i=[...this.points],s=ec(0,this.points.length-1);// 1. Loop through vertices clockwise
//    if the vertex is convex (interior angle is < 180) (cross product positive)
//    if the polygon formed by it's edges doesn't contain the points
//         it's an ear add it to our list of triangles, and restart
for(;s.length>3;)for(let r=0;r<s.length;r++){let n=s[r],o=t(r-1,s),a=t(r+1,s),h=i[n],l=i[o],A=i[a],d=l.sub(h),c=A.sub(h),u=c.cross(d)>0;if(!u)continue;let g=!0;// Check that if any vertices are in the triangle a, b, c
for(let t=0;t<s.length;t++){let e=s[t];// We can skip these
if(e===n||e===o||e===a)continue;let r=i[e];if(/**
         * Quick test for point in triangle
         */function(t,e,i,s){let r=i.sub(e),n=s.sub(i),o=e.sub(s),a=t.sub(e),h=t.sub(i),l=t.sub(s),A=r.cross(a),d=n.cross(h),c=o.cross(l);return!(A>0)&&!(d>0)&&!(c>0)}(r,l,h,A)){g=!1;break}}// Add ear to polygon list and remove from list
if(g){e.push([l,h,A]),s.splice(r,1);break}}return e.push([i[s[0]],i[s[1]],i[s[2]]]),new iX(e.map(t=>i8.Polygon(t)))}/**
     * Returns a clone of this ConvexPolygon, not associated with any collider
     */clone(){return new i6({offset:this.offset.clone(),points:this.points.map(t=>t.clone())})}/**
     * Returns the world position of the collider, which is the current body transform plus any defined offset
     */get worldPos(){return this._transform?this._transform.pos.add(this.offset):this.offset}/**
     * Get the center of the collider in world coordinates
     */get center(){return this.bounds.center}/**
     * Calculates the underlying transformation from the body relative space to world space
     */_calculateTransformation(){let t=this.points,e=t.length;this._transformedPoints.length=0;// clear out old transform
for(let i=0;i<e;i++)this._transformedPoints[i]=this._globalMatrix.multiply(t[i].clone())}/**
     * Gets the points that make up the polygon in world space, from actor relative space (if specified)
     */getTransformedPoints(){return this._transformedPointsDirty&&(this._calculateTransformation(),this._transformedPointsDirty=!1),this._transformedPoints}/**
     * Gets the sides of the polygon in world space
     */getSides(){if(this._sidesDirty){let t=[],e=this.getTransformedPoints(),i=e.length;for(let s=0;s<i;s++)t.push(new iZ(e[s],e[(s+1)%i]));this._sides=t,this._sidesDirty=!1}return this._sides}/**
     * Returns the local coordinate space sides
     */getLocalSides(){if(this._localSidesDirty){let t=[],e=this.points,i=e.length;for(let s=0;s<i;s++)t.push(new iZ(e[s],e[(s+1)%i]));this._localSides=t,this._localSidesDirty=!1}return this._localSides}/**
     * Given a direction vector find the world space side that is most in that direction
     * @param direction
     */findSide(t){let e=this.getSides(),i=e[0],s=-Number.MAX_VALUE;for(let r=0;r<e.length;r++){let n=e[r],o=n.normal(),a=o.dot(t);a>s&&(i=n,s=a)}return i}/**
     * Given a direction vector find the local space side that is most in that direction
     * @param direction
     */findLocalSide(t){let e=this.getLocalSides(),i=e[0],s=-Number.MAX_VALUE;for(let r=0;r<e.length;r++){let n=e[r],o=n.normal(),a=o.dot(t);a>s&&(i=n,s=a)}return i}/**
     * Get the axis associated with the convex polygon
     */get axes(){let t=[],e=this.getSides();for(let i=0;i<e.length;i++)t.push(e[i].normal());return t}/**
     * Updates the transform for the collision geometry
     *
     * Collision geometry (points/bounds) will not change until this is called.
     * @param transform
     */update(t){var e;if(t){this._transform=t,this._transformedPointsDirty=!0,this._sidesDirty=!0;// This change means an update must be performed in order for geometry to update
let i=null!==(e=t.matrix)&&void 0!==e?e:this._globalMatrix;i.clone(this._globalMatrix),this._globalMatrix.translate(this.offset.x,this.offset.y)}}/**
     * Tests if a point is contained in this collider in world space
     */contains(t){// Always cast to the right, as long as we cast in a consistent fixed direction we
// will be fine
let e=new iK(t,new ep(1,0)),i=this.getSides().reduce(function(t,i){return e.intersect(i)>=0?t+1:t},0);return i%2!=0}getClosestLineBetween(t){if(t instanceof i1)return i0.PolygonCircleClosestLine(this,t);if(t instanceof i6)return i0.PolygonPolygonClosestLine(this,t);if(t instanceof i4)return i0.PolygonEdgeClosestLine(this,t);throw Error(`Polygon could not collide with unknown CollisionShape ${typeof t}`)}/**
     * Returns a collision contact if the 2 colliders collide, otherwise collide will
     * return null.
     * @param collider
     */collide(t){if(t instanceof i1)return i3.CollideCirclePolygon(t,this);if(t instanceof i6)return i3.CollidePolygonPolygon(this,t);if(t instanceof i4)return i3.CollidePolygonEdge(this,t);throw Error(`Polygon could not collide with unknown CollisionShape ${typeof t}`)}/**
     * Find the point on the collider furthest in the direction specified
     */getFurthestPoint(t){let e=this.getTransformedPoints(),i=null,s=-Number.MAX_VALUE;for(let r=0;r<e.length;r++){let n=t.dot(e[r]);n>s&&(s=n,i=e[r])}return i}/**
     * Find the local point on the collider furthest in the direction specified
     * @param direction
     */getFurthestLocalPoint(t){let e=this.points,i=e[0],s=-Number.MAX_VALUE;for(let r=0;r<e.length;r++){let n=t.dot(e[r]);n>s&&(s=n,i=e[r])}return i}/**
     * Finds the closes face to the point using perpendicular distance
     * @param point point to test against polygon
     */getClosestFace(t){let e=this.getSides(),i=Number.POSITIVE_INFINITY,s=-1,r=-1;for(let n=0;n<e.length;n++){let o=e[n].distanceToPoint(t);o<i&&(i=o,s=n,r=o)}return -1!==s?{distance:e[s].normal().scale(r),face:e[s]}:null}/**
     * Get the axis aligned bounding box for the polygon collider in world coordinates
     */get bounds(){return this.localBounds.transform(this._globalMatrix)}/**
     * Get the axis aligned bounding box for the polygon collider in local coordinates
     */get localBounds(){return this._localBoundsDirty&&(this._localBounds=ey.fromPoints(this.points),this._localBoundsDirty=!1),this._localBounds}/**
     * Get the moment of inertia for an arbitrary polygon
     * https://en.wikipedia.org/wiki/List_of_moments_of_inertia
     */getInertia(t){if(this._cachedMass===t&&this._cachedInertia)return this._cachedInertia;let e=0,i=0,s=this.points;for(let t=0;t<s.length;t++){let r=(t+1)%s.length,n=s[r].cross(s[t]);e+=n*(s[t].dot(s[t])+s[t].dot(s[r])+s[r].dot(s[r])),i+=n}return this._cachedMass=t,this._cachedInertia=t/6*(e/i)}/**
     * Casts a ray into the polygon and returns a vector representing the point of contact (in world space) or null if no collision.
     */rayCast(t,e=1/0){// find the minimum contact time greater than 0
// contact times less than 0 are behind the ray and we don't want those
let i=this.getSides(),s=i.length,r=Number.MAX_VALUE,n=-1;for(let o=0;o<s;o++){let s=t.intersect(i[o]);s>=0&&s<r&&s<=e&&(r=s,n=o)}return(// contact was found
n>=0?t.getPoint(r):null)}/**
     * Project the edges of the polygon along a specified axis
     */project(t){let e=this.getTransformedPoints(),i=e.length,s=Number.MAX_VALUE,r=-Number.MAX_VALUE;for(let n=0;n<i;n++){let i=e[n].dot(t);s=Math.min(s,i),r=Math.max(r,i)}return new iV(s,r)}debug(t,e){let i=this.getTransformedPoints()[0],s=[i,...this.getTransformedPoints(),i];for(let i=0;i<s.length-1;i++)t.drawLine(s[i],s[i+1],e,2),t.drawCircle(s[i],2,e),t.drawCircle(s[i+1],2,e)}}/**
 * Excalibur helper for defining colliders quickly
 */class i8{/**
     * Creates a box collider, under the hood defines a [[PolygonCollider]] collider
     * @param width Width of the box
     * @param height Height of the box
     * @param anchor Anchor of the box (default (.5, .5)) which positions the box relative to the center of the collider's position
     * @param offset Optional offset relative to the collider in local coordinates
     */static Box(t,e,i=ep.Half,s=ep.Zero){return new i6({points:new ey(-t*i.x,-e*i.y,t-t*i.x,e-e*i.y).getPoints(),offset:s})}/**
     * Creates a new [[PolygonCollider|arbitrary polygon]] collider
     *
     * PolygonColliders are useful for creating convex polygon shapes
     * @param points Points specified in counter clockwise
     * @param offset Optional offset relative to the collider in local coordinates
     */static Polygon(t,e=ep.Zero){return new i6({points:t,offset:e})}/**
     * Creates a new [[CircleCollider|circle]] collider
     *
     * Circle colliders are useful for balls, or to make collisions more forgiving on sharp edges
     * @param radius Radius of the circle collider
     * @param offset Optional offset relative to the collider in local coordinates
     */static Circle(t,e=ep.Zero){return new i1({radius:t,offset:e})}/**
     * Creates a new [[EdgeCollider|edge]] collider
     *
     * Edge colliders are useful for  floors, walls, and other barriers
     * @param begin Beginning of the edge in local coordinates to the collider
     * @param end Ending of the edge in local coordinates to the collider
     */static Edge(t,e){return new i4({begin:t,end:e})}/**
     * Creates a new capsule shaped [[CompositeCollider]] using 2 circles and a box
     *
     * Capsule colliders are useful for platformers with incline or jagged floors to have a smooth
     * player experience.
     *
     * @param width
     * @param height
     * @param offset Optional offset
     */static Capsule(t,e,i=ep.Zero){let s=t9.getInstance();t===e&&s.warn("A capsule collider with equal width and height is a circle, consider using a ex.Shape.Circle or ex.CircleCollider");let r=e>=t;if(r){// height > width, if equal maybe use a circle
let s=new iX([i8.Circle(t/2,e_(0,-e/2+t/2).add(i)),i8.Box(t,e-t,ep.Half,i),i8.Circle(t/2,e_(0,e/2-t/2).add(i))]);return s}{// width > height, if equal maybe use a circle
let s=new iX([i8.Circle(e/2,e_(-t/2+e/2,0).add(i)),i8.Box(t-e,e,ep.Half,i),i8.Circle(e/2,e_(t/2-e/2,0).add(i))]);return s}}}class i9 extends iN{constructor(t){super(),this.type="ex.collider",this.events=new tE,/**
         * Observable that notifies when a collider is added to the body
         */this.$colliderAdded=new iG,/**
         * Observable that notifies when a collider is removed from the body
         */this.$colliderRemoved=new iG,this.set(t)}/**
     * Get the current collider geometry
     */get(){return this._collider}/**
     * Set the collider geometry
     * @param collider
     * @returns the collider you set
     */set(t){return this.clear(),t&&(this._collider=t,this._collider.owner=this.owner,t.events.pipe(this.events),this.$colliderAdded.notifyAll(t),this.update()),t}/**
     * Remove collider geometry from collider component
     */clear(){this._collider&&(this._collider.events.unpipe(this.events),this.$colliderRemoved.notifyAll(this._collider),this._collider.owner=null,this._collider=null)}clone(){let t=new i9(this._collider.clone());return t}/**
     * Return world space bounds
     */get bounds(){var t,e;return null!==(e=null===(t=this._collider)||void 0===t?void 0:t.bounds)&&void 0!==e?e:new ey}/**
     * Return local space bounds
     */get localBounds(){var t,e;return null!==(e=null===(t=this._collider)||void 0===t?void 0:t.localBounds)&&void 0!==e?e:new ey}/**
     * Update the collider's transformed geometry
     */update(){var t;let e=null===(t=this.owner)||void 0===t?void 0:t.get(iz);this._collider&&(this._collider.owner=this.owner,e&&this._collider.update(e.get()))}/**
     * Collide component with another
     * @param other
     */collide(t){let e=this._collider,i=t._collider;if(!e||!i)return[];// If we have a composite lefthand side :(
// Might bite us, but to avoid updating all the handlers make composite always left side
let s=!1;if(i instanceof iX&&(e=i,i=this._collider,s=!0),this._collider){let r=e.collide(i);if(r)return s&&r.forEach(e=>{e.mtv=e.mtv.negate(),e.normal=e.normal.negate(),e.tangent=e.normal.perpendicular(),e.colliderA=this._collider,e.colliderB=t._collider}),r}return[]}onAdd(t){this._collider&&this.update(),// Wire up the collider events to the owning entity
this.events.on("precollision",e=>{t.events.emit("precollision",new tY(e.target.owner,e.other.owner,e.side,e.intersection))}),this.events.on("postcollision",e=>{t.events.emit("postcollision",new tj(e.target.owner,e.other.owner,e.side,e.intersection))}),this.events.on("collisionstart",e=>{t.events.emit("collisionstart",new tZ(e.target.owner,e.other.owner,e.contact))}),this.events.on("collisionend",e=>{t.events.emit("collisionend",new t$(e.target.owner,e.other.owner))})}onRemove(){this.events.clear(),this.$colliderRemoved.notifyAll(this._collider)}/**
     * Sets up a box geometry based on the current bounds of the associated actor of this physics body.
     *
     * If no width/height are specified the body will attempt to use the associated actor's width/height.
     *
     * By default, the box is center is at (0, 0) which means it is centered around the actors anchor.
     */useBoxCollider(t,e,i=ep.Half,s=ep.Zero){let r=i8.Box(t,e,i,s);return this.set(r)}/**
     * Sets up a [[PolygonCollider|polygon]] collision geometry based on a list of of points relative
     *  to the anchor of the associated actor
     * of this physics body.
     *
     * Only [convex polygon](https://en.wikipedia.org/wiki/Convex_polygon) definitions are supported.
     *
     * By default, the box is center is at (0, 0) which means it is centered around the actors anchor.
     */usePolygonCollider(t,e=ep.Zero){let i=i8.Polygon(t,e);return this.set(i)}/**
     * Sets up a [[Circle|circle collision geometry]] as the only collider with a specified radius in pixels.
     *
     * By default, the box is center is at (0, 0) which means it is centered around the actors anchor.
     */useCircleCollider(t,e=ep.Zero){let i=i8.Circle(t,e);return this.set(i)}/**
     * Sets up an [[Edge|edge collision geometry]] with a start point and an end point relative to the anchor of the associated actor
     * of this physics body.
     *
     * By default, the box is center is at (0, 0) which means it is centered around the actors anchor.
     */useEdgeCollider(t,e){let i=i8.Edge(t,e);return this.set(i)}/**
     * Setups up a [[CompositeCollider]] which can define any arbitrary set of excalibur colliders
     * @param colliders
     */useCompositeCollider(t){return this.set(new iX(t))}}(m=Z||(Z={})).Rotation="rotation",m.X="x",m.Y="y";/**
 * Body describes all the physical properties pos, vel, acc, rotation, angular velocity for the purpose of
 * of physics simulation.
 */class i7 extends iN{constructor(t){var e,i,s;super(),this.type="ex.body",this.dependencies=[iz,iO],this.id=tv("body",i7._ID++),this.events=new tE,this._oldTransform=new iL,/**
         * Indicates whether the old transform has been captured at least once for interpolation
         * @internal
         */this.__oldTransformCaptured=!1,/**
         * Enable or disabled the fixed update interpolation, by default interpolation is on.
         */this.enableFixedUpdateInterpolate=!0,/**
         * Collision type for the rigidbody physics simulation, by default [[CollisionType.PreventCollision]]
         */this.collisionType=j.PreventCollision,/**
         * The collision group for the body's colliders, by default body colliders collide with everything
         */this.group=iH.All,/**
         * The amount of mass the body has
         */this._mass=iP.defaultMass,/**
         * Amount of "motion" the body has before sleeping. If below [[Physics.sleepEpsilon]] it goes to "sleep"
         */this.sleepMotion=5*iP.sleepEpsilon,/**
         * Can this body sleep, by default bodies do not sleep
         */this.canSleep=iP.bodiesCanSleepByDefault,this._sleeping=!1,/**
         * The also known as coefficient of restitution of this actor, represents the amount of energy preserved after collision or the
         * bounciness. If 1, it is 100% bouncy, 0 it completely absorbs.
         */this.bounciness=.2,/**
         * The coefficient of friction on this actor
         */this.friction=.99,/**
         * Should use global gravity [[Physics.gravity]] in it's physics simulation, default is true
         */this.useGravity=!0,/**
         * Degrees of freedom to limit
         *
         * Note: this only limits responses in the realistic solver, if velocity/angularVelocity is set the actor will still respond
         */this.limitDegreeOfFreedom=[],/**
         * The velocity of the actor last frame (vx, vy) in pixels/second
         */this.oldVel=new ep(0,0),/**
         * Gets/sets the acceleration of the actor from the last frame. This does not include the global acc [[Physics.acc]].
         */this.oldAcc=ep.Zero,t&&(this.collisionType=null!==(e=t.type)&&void 0!==e?e:this.collisionType,this.group=null!==(i=t.group)&&void 0!==i?i:this.group,this.useGravity=null!==(s=t.useGravity)&&void 0!==s?s:this.useGravity)}get matrix(){return this.transform.get().matrix}get mass(){return this._mass}set mass(t){this._mass=t,this._cachedInertia=void 0,this._cachedInverseInertia=void 0}/**
     * The inverse mass (1/mass) of the body. If [[CollisionType.Fixed]] this is 0, meaning "infinite" mass
     */get inverseMass(){return this.collisionType===j.Fixed?0:1/this.mass}/**
     * Whether this body is sleeping or not
     */get sleeping(){return this._sleeping}/**
     * Set the sleep state of the body
     * @param sleeping
     */setSleeping(t){this._sleeping=t,t?(this.vel=ep.Zero,this.acc=ep.Zero,this.angularVelocity=0,this.sleepMotion=0):this.sleepMotion=5*iP.sleepEpsilon}/**
     * Update body's [[BodyComponent.sleepMotion]] for the purpose of sleeping
     */updateMotion(){this._sleeping&&this.setSleeping(!0);let t=this.vel.size*this.vel.size+Math.abs(this.angularVelocity*this.angularVelocity),e=iP.sleepBias;this.sleepMotion=e*this.sleepMotion+(1-e)*t,this.sleepMotion=eh(this.sleepMotion,0,10*iP.sleepEpsilon),this.canSleep&&this.sleepMotion<iP.sleepEpsilon&&this.setSleeping(!0)}/**
     * Get the moment of inertia from the [[ColliderComponent]]
     */get inertia(){if(this._cachedInertia)return this._cachedInertia;// Inertia is a property of the geometry, so this is a little goofy but seems to be okay?
let t=this.owner.get(i9);if(t){t.$colliderAdded.subscribe(()=>{this._cachedInertia=null}),t.$colliderRemoved.subscribe(()=>{this._cachedInertia=null});let e=t.get();if(e)return this._cachedInertia=e.getInertia(this.mass)}return 0}/**
     * Get the inverse moment of inertial from the [[ColliderComponent]]. If [[CollisionType.Fixed]] this is 0, meaning "infinite" mass
     */get inverseInertia(){return this._cachedInverseInertia?this._cachedInverseInertia:this._cachedInverseInertia=this.collisionType===j.Fixed?0:1/this.inertia}/**
     * Returns if the owner is active
     */get active(){var t;return!!(null===(t=this.owner)||void 0===t?void 0:t.active)}/**
     * @deprecated Use globalP0s
     */get center(){return this.globalPos}get transform(){var t;return null===(t=this.owner)||void 0===t?void 0:t.get(iz)}get motion(){var t;return null===(t=this.owner)||void 0===t?void 0:t.get(iO)}get pos(){return this.transform.pos}set pos(t){this.transform.pos=t}/**
     * The (x, y) position of the actor this will be in the middle of the actor if the
     * [[Actor.anchor]] is set to (0.5, 0.5) which is default.
     * If you want the (x, y) position to be the top left of the actor specify an anchor of (0, 0).
     */get globalPos(){return this.transform.globalPos}set globalPos(t){this.transform.globalPos=t}/**
     * The position of the actor last frame (x, y) in pixels
     */get oldPos(){return this._oldTransform.pos}/**
     * The current velocity vector (vx, vy) of the actor in pixels/second
     */get vel(){return this.motion.vel}set vel(t){this.motion.vel=t}/**
     * The current acceleration vector (ax, ay) of the actor in pixels/second/second. An acceleration pointing down such as (0, 100) may
     * be useful to simulate a gravitational effect.
     */get acc(){return this.motion.acc}set acc(t){this.motion.acc=t}/**
     * The current torque applied to the actor
     */get torque(){return this.motion.torque}set torque(t){this.motion.torque=t}/**
     * Gets/sets the rotation of the body from the last frame.
     */get oldRotation(){return this._oldTransform.rotation}/**
     * The rotation of the body in radians
     */get rotation(){return this.transform.globalRotation}set rotation(t){this.transform.globalRotation=t}/**
     * The scale vector of the actor
     */get scale(){return this.transform.globalScale}set scale(t){this.transform.globalScale=t}/**
     * The scale of the actor last frame
     */get oldScale(){return this._oldTransform.scale}/**
     * The scale rate of change of the actor in scale/second
     */get scaleFactor(){return this.motion.scaleFactor}set scaleFactor(t){this.motion.scaleFactor=t}/**
     * Get the angular velocity in radians/second
     */get angularVelocity(){return this.motion.angularVelocity}/**
     * Set the angular velocity in radians/second
     */set angularVelocity(t){this.motion.angularVelocity=t}/**
     * Apply a specific impulse to the body
     * @param point
     * @param impulse
     */applyImpulse(t,e){if(this.collisionType!==j.Active)return;// only active objects participate in the simulation
let i=e.scale(this.inverseMass);if(this.limitDegreeOfFreedom.includes(Z.X)&&(i.x=0),this.limitDegreeOfFreedom.includes(Z.Y)&&(i.y=0),this.vel.addEqual(i),!this.limitDegreeOfFreedom.includes(Z.Rotation)){let i=t.sub(this.globalPos);this.angularVelocity+=this.inverseInertia*i.cross(e)}}/**
     * Apply only linear impulse to the body
     * @param impulse
     */applyLinearImpulse(t){if(this.collisionType!==j.Active)return;// only active objects participate in the simulation
let e=t.scale(this.inverseMass);this.limitDegreeOfFreedom.includes(Z.X)&&(e.x=0),this.limitDegreeOfFreedom.includes(Z.Y)&&(e.y=0),this.vel=this.vel.add(e)}/**
     * Apply only angular impulse to the body
     * @param point
     * @param impulse
     */applyAngularImpulse(t,e){if(this.collisionType===j.Active&&!this.limitDegreeOfFreedom.includes(Z.Rotation)){let i=t.sub(this.globalPos);this.angularVelocity+=this.inverseInertia*i.cross(e)}// only active objects participate in the simulation
}/**
     * Sets the old versions of pos, vel, acc, and scale.
     */captureOldTransform(){// Capture old values before integration step updates them
this.__oldTransformCaptured=!0,this.transform.get().clone(this._oldTransform),this.oldVel.setTo(this.vel.x,this.vel.y),this.oldAcc.setTo(this.acc.x,this.acc.y)}clone(){let t=super.clone();return t}}i7._ID=0;/**
 * AddedComponent message
 */class st{constructor(t){this.data=t,this.type="Component Added"}}/**
 * Type guard to know if message is f an Added Component
 */function se(t){return!!t&&"Component Added"===t.type}/**
 * RemovedComponent message
 */class si{constructor(t){this.data=t,this.type="Component Removed"}}/**
 * Type guard to know if message is for a Removed Component
 */function ss(t){return!!t&&"Component Removed"===t.type}let sr={Initialize:"initialize",PreUpdate:"preupdate",PostUpdate:"postupdate"};/**
 * An Entity is the base type of anything that can have behavior in Excalibur, they are part of the built in entity component system
 *
 * Entities can be strongly typed with the components they contain
 *
 * ```typescript
 * const entity = new Entity<ComponentA | ComponentB>();
 * entity.components.a; // Type ComponentA
 * entity.components.b; // Type ComponentB
 * ```
 */class sn{constructor(t,e){if(/**
         * Listen to or emit events for an entity
         */this.events=new tE,/**
         * The unique identifier for the entity
         */this.id=sn._ID++,/**
         * The scene that the entity is in, if any
         */this.scene=null,this._name="anonymous",/**
         * Whether this entity is active, if set to false it will be reclaimed
         */this.active=!0,/**
         * Bucket to hold on to deferred removals
         */this._componentsToRemove=[],this._componentTypeToInstance=new Map,this._componentStringToInstance=new Map,this._tagsMemo=[],this._typesMemo=[],/**
         * Observable that keeps track of component add or remove changes on the entity
         */this.componentAdded$=new iG,this.componentRemoved$=new iG,this._parent=null,this.childrenAdded$=new iG,this.childrenRemoved$=new iG,this._children=[],this._isInitialized=!1,this._setName(e),t)for(let e of t)this.addComponent(e)}_setName(t){t&&(this._name=t)}get name(){return this._name}/**
     * Kill the entity, means it will no longer be updated. Kills are deferred to the end of the update.
     * If parented it will be removed from the parent when killed.
     */kill(){this.active&&(this.active=!1,this.unparent())}isKilled(){return!this.active}/**
     * Specifically get the tags on the entity from [[TagComponent]]
     */get tags(){return this._tagsMemo}/**
     * Check if a tag exists on the entity
     * @param tag name to check for
     */hasTag(t){return this.tags.includes(t)}/**
     * Adds a tag to an entity
     * @param tag
     * @returns Entity
     */addTag(t){return this.addComponent(new iU(t))}/**
     * Removes a tag on the entity
     *
     * Removals are deferred until the end of update
     * @param tag
     * @param force Remove component immediately, no deferred
     */removeTag(t,e=!1){return this.removeComponent(t,e)}/**
     * The types of the components on the Entity
     */get types(){return this._typesMemo}_rebuildMemos(){this._tagsMemo=Array.from(this._componentStringToInstance.values()).filter(t=>t instanceof iU).map(t=>t.type),this._typesMemo=Array.from(this._componentStringToInstance.keys())}getComponents(){return Array.from(this._componentStringToInstance.values())}_notifyAddComponent(t){this._rebuildMemos();let e=new st({component:t,entity:this});this.componentAdded$.notifyAll(e)}_notifyRemoveComponent(t){let e=new si({component:t,entity:this});this.componentRemoved$.notifyAll(e),this._rebuildMemos()}get parent(){return this._parent}/**
     * Get the direct children of this entity
     */get children(){return this._children}/**
     * Unparents this entity, if there is a parent. Otherwise it does nothing.
     */unparent(){this._parent&&(this._parent.removeChild(this),this._parent=null)}/**
     * Adds an entity to be a child of this entity
     * @param entity
     */addChild(t){if(null===t.parent){if(this.getAncestors().includes(t))throw Error("Cycle detected, cannot add entity");this._children.push(t),t._parent=this,this.childrenAdded$.notifyAll(t)}else throw Error("Entity already has a parent, cannot add without unparenting");return this}/**
     * Remove an entity from children if it exists
     * @param entity
     */removeChild(t){return t.parent===this&&(eI(t,this._children),t._parent=null,this.childrenRemoved$.notifyAll(t)),this}/**
     * Removes all children from this entity
     */removeAllChildren(){// Avoid modifying the array issue by walking backwards
for(let t=this.children.length-1;t>=0;t--)this.removeChild(this.children[t]);return this}/**
     * Returns a list of parent entities starting with the topmost parent. Includes the current entity.
     */getAncestors(){let t=[this],e=this.parent;for(;e;)t.push(e),e=e.parent;return t.reverse()}/**
     * Returns a list of all the entities that descend from this entity. Includes the current entity.
     */getDescendants(){let t=[this],e=[this];for(;e.length>0;){let i=e.pop();e=e.concat(i.children),t=t.concat(i.children)}return t}/**
     * Creates a deep copy of the entity and a copy of all its components
     */clone(){let t=new sn;for(let e of this.types)t.addComponent(this.get(e).clone());for(let e of this.children)t.addChild(e.clone());return t}/**
     * Adds a copy of all the components from another template entity as a "prefab"
     * @param templateEntity Entity to use as a template
     * @param force Force component replacement if it already exists on the target entity
     */addTemplate(t,e=!1){for(let i of t.getComponents())this.addComponent(i.clone(),e);for(let e of t.children)this.addChild(e.clone().addTemplate(e));return this}/**
     * Adds a component to the entity
     * @param component Component or Entity to add copy of components from
     * @param force Optionally overwrite any existing components of the same type
     */addComponent(t,e=!1){// if component already exists, skip if not forced
if(this.has(t.type)){if(!e)return this;this.removeComponent(t,!0)}// TODO circular dependencies will be a problem
if(t.dependencies&&t.dependencies.length)for(let e of t.dependencies)this.addComponent(new e);t.owner=this;let i=t.constructor;return this._componentTypeToInstance.set(i,t),this._componentStringToInstance.set(t.type,t),t.onAdd&&t.onAdd(this),this._notifyAddComponent(t),this}/**
     * Removes a component from the entity, by default removals are deferred to the end of entity update to avoid consistency issues
     *
     * Components can be force removed with the `force` flag, the removal is not deferred and happens immediately
     * @param componentOrType
     * @param force
     */removeComponent(t,e=!1){return e?"string"==typeof t?this._removeComponentByType(t):t instanceof iN&&this._removeComponentByType(t.type):this._componentsToRemove.push(t),this}clearComponents(){let t=this.getComponents();for(let e of t)this.removeComponent(e)}_removeComponentByType(t){if(this.has(t)){let e=this.get(t);e.owner=null,e.onRemove&&e.onRemove(this);let i=e.constructor;this._componentTypeToInstance.delete(i),this._componentStringToInstance.delete(e.type),this._notifyRemoveComponent(e)}}/**
     * @hidden
     * @internal
     */processComponentRemoval(){for(let t of this._componentsToRemove){let e="string"==typeof t?t:t.type;this._removeComponentByType(e)}this._componentsToRemove.length=0}has(t){return"string"==typeof t?this._componentStringToInstance.has(t):this._componentTypeToInstance.has(t)}get(t){return"string"==typeof t?this._componentStringToInstance.get(t):this._componentTypeToInstance.get(t)}/**
     * Gets whether the actor is Initialized
     */get isInitialized(){return this._isInitialized}/**
     * Initializes this entity, meant to be called by the Scene before first update not by users of Excalibur.
     *
     * It is not recommended that internal excalibur methods be overridden, do so at your own risk.
     *
     * @internal
     */_initialize(t){this.isInitialized||(this.onInitialize(t),this.events.emit("initialize",new t0(t,this)),this._isInitialized=!0)}/**
     * It is not recommended that internal excalibur methods be overridden, do so at your own risk.
     *
     * Internal _preupdate handler for [[onPreUpdate]] lifecycle event
     * @internal
     */_preupdate(t,e){this.events.emit("preupdate",new tM(t,e,this)),this.onPreUpdate(t,e)}/**
     * It is not recommended that internal excalibur methods be overridden, do so at your own risk.
     *
     * Internal _preupdate handler for [[onPostUpdate]] lifecycle event
     * @internal
     */_postupdate(t,e){this.events.emit("postupdate",new tL(t,e,this)),this.onPostUpdate(t,e)}/**
     * `onInitialize` is called before the first update of the entity. This method is meant to be
     * overridden.
     *
     * Synonymous with the event handler `.on('initialize', (evt) => {...})`
     */onInitialize(t){// Override me
}/**
     * Safe to override onPreUpdate lifecycle event handler. Synonymous with `.on('preupdate', (evt) =>{...})`
     *
     * `onPreUpdate` is called directly before an entity is updated.
     */onPreUpdate(t,e){// Override me
}/**
     * Safe to override onPostUpdate lifecycle event handler. Synonymous with `.on('postupdate', (evt) =>{...})`
     *
     * `onPostUpdate` is called directly after an entity is updated.
     */onPostUpdate(t,e){// Override me
}/**
     *
     * Entity update lifecycle, called internally
     *
     * @internal
     * @param engine
     * @param delta
     */update(t,e){for(let i of(this._initialize(t),this._preupdate(t,e),this.children))i.update(t,e);this._postupdate(t,e)}emit(t,e){this.events.emit(t,e)}on(t,e){return this.events.on(t,e)}once(t,e){return this.events.once(t,e)}off(t,e){this.events.off(t,e)}}/**
 * Type guard for checking if a Graphic HasTick (used for graphics that change over time like animations)
 * @param graphic
 */function so(t){return!!t.tick}sn._ID=0;class sa{constructor(t,e){this._options=t,this._graphics=e,this.graphics=[]}get name(){return this._options.name}hide(t){if(t){let e=null;e=t instanceof eR?t:this._graphics.getGraphic(t),this.graphics=this.graphics.filter(t=>t.graphic!==e),this._graphics.recalculateBounds()}else this.graphics.length=0}/**
     * Show a graphic by name or instance at an offset, graphics are shown in the order in which `show()` is called.
     *
     * If `show()` is called multiple times for the same graphic it will be shown multiple times.
     * @param nameOrGraphic
     * @param options
     */show(t,e){let i;return(e={...e},t instanceof eR?i=this._graphics.copyGraphics?t.clone():t:(i=this._graphics.getGraphic(t))||t9.getInstance().error(`No such graphic added to component named ${t}. These named graphics are available: `,this._graphics.getNames()),i)?(this.graphics.push({graphic:i,options:e}),this._graphics.recalculateBounds(),i):null}/**
     * Use a specific graphic, swap out any current graphics being shown
     * @param nameOrGraphic
     * @param options
     */use(t,e){return e={...e},this.hide(),this.show(t,e)}/**
     * Current order of the layer, higher numbers are on top, lower numbers are on the bottom.
     *
     * For example a layer with `order = -1` would be under a layer of `order = 1`
     */get order(){return this._options.order}/**
     * Set the order of the layer, higher numbers are on top, lower numbers are on the bottom.
     *
     * For example a layer with `order = -1` would be under a layer of `order = 1`
     */set order(t){this._options.order=t}/**
     * Get or set the pixel offset from the layer anchor for all graphics in the layer
     */get offset(){var t;return null!==(t=this._options.offset)&&void 0!==t?t:ep.Zero}set offset(t){this._options.offset=t}get currentKeys(){var t;return null!==(t=this.name)&&void 0!==t?t:"anonymous"}clone(t){let e=new sa({...this._options},t);return e.graphics=[...this.graphics.map(t=>({graphic:t.graphic.clone(),options:{...t.options}}))],e}}class sh{constructor(t){this._component=t,this._layers=[],this._layerMap={},this.default=new sa({name:"default",order:0},t),this._maybeAddLayer(this.default)}create(t){let e=new sa(t,this._component);return this._maybeAddLayer(e)}get(t){return t?this._getLayer(t):this._layers}currentKeys(){let t=[];for(let e of this._layers)t.push(e.currentKeys);return t}has(t){return t in this._layerMap}_maybeAddLayer(t){return this._layerMap[t.name]?this._layerMap[t.name]:(this._layerMap[t.name]=t,this._layers.push(t),this._layers.sort((t,e)=>t.order-e.order),t)}_getLayer(t){return this._layerMap[t]}clone(t){let e=new sh(t);e._layerMap={},e._layers=[],e.default=this.default.clone(t),e._maybeAddLayer(e.default);// Remove the default layer out of the clone
let i=this._layers.filter(t=>"default"!==t.name).map(e=>e.clone(t));return i.forEach(t=>e._maybeAddLayer(t)),e}}/**
 * Component to manage drawings, using with the position component
 */class sl extends iN{getGraphic(t){return this._graphics[t]}/**
     * Get registered graphics names
     */getNames(){return Object.keys(this._graphics)}constructor(t){super(),this.type="ex.graphics",this._graphics={},/**
         * Sets or gets wether any drawing should be visible in this component
         */this.visible=!0,/**
         * Sets or gets wither all drawings should have an opacity applied
         */this.opacity=1,/**
         * Offset to apply to graphics by default
         */this.offset=ep.Zero,/**
         * Anchor to apply to graphics by default
         */this.anchor=ep.Half,/**
         * Flip all graphics horizontally along the y-axis
         */this.flipHorizontal=!1,/**
         * Flip all graphics vertically along the x-axis
         */this.flipVertical=!1,/**
         * If set to true graphics added to the component will be copied. This can affect performance
         */this.copyGraphics=!1,this._localBounds=null,// Defaults
t={visible:this.visible,...t};let{current:e,anchor:i,opacity:s,visible:r,graphics:n,offset:o,copyGraphics:a,onPreDraw:h,onPostDraw:l}=t;this._graphics=n||{},this.offset=null!=o?o:this.offset,this.opacity=null!=s?s:this.opacity,this.anchor=null!=i?i:this.anchor,this.copyGraphics=null!=a?a:this.copyGraphics,this.onPreDraw=null!=h?h:this.onPreDraw,this.onPostDraw=null!=l?l:this.onPostDraw,this.visible=!!r,this.layers=new sh(this),e&&this._graphics[e]&&this.show(this._graphics[e])}/**
     * Returns the currently displayed graphics and their offsets, empty array if hidden
     */get current(){return this.layers.default.graphics}/**
     * Returns all graphics associated with this component
     */get graphics(){return this._graphics}add(t,e){let i="default",s=null;return"string"==typeof t?(i=t,s=e):s=t,this._graphics[i]=this.copyGraphics?s.clone():s,"default"===i&&this.show("default"),s}/**
     * Show a graphic by name on the **default** layer, returns the new [[Graphic]]
     */show(t,e){let i=this.layers.default.show(t,e);return this.recalculateBounds(),i}/**
     * Use a graphic only, swap out any graphics on the **default** layer, returns the new [[Graphic]]
     * @param nameOrGraphic
     * @param options
     */use(t,e){let i=this.layers.default.use(t,e);return this.recalculateBounds(),i}hide(t){this.layers.default.hide(t)}set localBounds(t){this._localBounds=t}recalculateBounds(){let t=new ey;for(let e of this.layers.get())for(let{graphic:i,options:s}of e.graphics){let r=this.anchor,n=this.offset;(null==s?void 0:s.anchor)&&(r=s.anchor),(null==s?void 0:s.offset)&&(n=s.offset);let o=i.localBounds,a=-o.width*r.x+n.x,h=-o.height*r.y+n.y;t=null==i?void 0:i.localBounds.translate(e_(a+e.offset.x,h+e.offset.y)).combine(t)}this._localBounds=t}get localBounds(){return(!this._localBounds||this._localBounds.hasZeroDimensions())&&this.recalculateBounds(),this._localBounds}/**
     * Update underlying graphics if necesary, called internally
     * @param elapsed
     * @internal
     */update(t,e=0){for(let i of this.layers.get())for(let{graphic:s}of i.graphics)so(s)&&(null==s||s.tick(t,e))}clone(){let t=new sl;return t._graphics={...this._graphics},t.offset=this.offset.clone(),t.opacity=this.opacity,t.anchor=this.anchor.clone(),t.copyGraphics=this.copyGraphics,t.onPreDraw=this.onPreDraw,t.onPostDraw=this.onPostDraw,t.visible=this.visible,t.layers=this.layers.clone(t),t}}/**
 * A Rectangle [[Graphic]] for drawing rectangles to the [[ExcaliburGraphicsContext]]
 */class sA extends ig{constructor(t){super(t),this.width=t.width,this.height=t.height,this.rasterize()}clone(){return new sA({width:this.width,height:this.height,...this.cloneGraphicOptions(),...this.cloneRasterOptions()})}execute(t){this.color&&t.fillRect(0,0,this.width,this.height),this.strokeColor&&t.strokeRect(0,0,this.width,this.height)}}/**
 * A circle [[Graphic]] for drawing circles to the [[ExcaliburGraphicsContext]]
 *
 * Circles default to [[ImageFiltering.Blended]]
 */class sd extends ig{get radius(){return this._radius}set radius(t){this._radius=t,this.width=2*this._radius,this.height=2*this._radius,this.flagDirty()}constructor(t){var e,i,s;super(t),this._radius=0;let r=null!==(e=t.lineWidth)&&void 0!==e?e:t.strokeColor?1:0;// default lineWidth in canvas is 1px
this.padding=null!==(i=t.padding)&&void 0!==i?i:2+r/2,this.radius=t.radius,this.filtering=null!==(s=t.filtering)&&void 0!==s?s:V.Blended,this.rasterize()}clone(){return new sd({radius:this.radius,...this.cloneGraphicOptions(),...this.cloneRasterOptions()})}execute(t){this.radius>0&&(t.beginPath(),t.arc(this.radius,this.radius,this.radius,0,2*Math.PI),this.color&&t.fill(),this.strokeColor&&t.stroke())}}/**
 * Add this component to optionally configure how the pointer
 * system detects pointer events.
 *
 * By default the collider shape is used and graphics bounds is not.
 *
 * If both collider shape and graphics bounds are enabled it will fire events if either or
 * are intersecting the pointer.
 */class sc extends iN{constructor(){super(...arguments),this.type="ex.pointer",/**
         * Use any existing Collider component geometry for pointer events. This is useful if you want
         * user pointer events only to trigger on the same collision geometry used in the collider component
         * for collision resolution. Default is `true`.
         */this.useColliderShape=!0,/**
         * Use any existing Graphics component bounds for pointers. This is useful if you want the axis aligned
         * bounds around the graphic to trigger pointer events. Default is `false`.
         */this.useGraphicsBounds=!1}}/**
 * Standard easing functions for motion in Excalibur, defined on a domain of [0, duration] and a range from [+startValue,+endValue]
 * Given a time, the function will return a value from positive startValue to positive endValue.
 *
 * ```js
 * function Linear (t) {
 *    return t * t;
 * }
 *
 * // accelerating from zero velocity
 * function EaseInQuad (t) {
 *    return t * t;
 * }
 *
 * // decelerating to zero velocity
 * function EaseOutQuad (t) {
 *    return t * (2 - t);
 * }
 *
 * // acceleration until halfway, then deceleration
 * function EaseInOutQuad (t) {
 *    return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
 * }
 *
 * // accelerating from zero velocity
 * function EaseInCubic (t) {
 *    return t * t * t;
 * }
 *
 * // decelerating to zero velocity
 * function EaseOutCubic (t) {
 *    return (--t) * t * t + 1;
 * }
 *
 * // acceleration until halfway, then deceleration
 * function EaseInOutCubic (t) {
 *    return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
 * }
 * ```
 */class su{static CreateReversibleEasingFunction(t){return(e,i,s,r)=>s<i?i-(t(e,s,i,r)-s):t(e,i,s,r)}static CreateVectorEasingFunction(t){return(e,i,s,r)=>new ep(t(e,i.x,s.x,r),t(e,i.y,s.y,r))}}su.Linear=su.CreateReversibleEasingFunction((t,e,i,s)=>(i-=e)*t/s+e),su.EaseInQuad=su.CreateReversibleEasingFunction((t,e,i,s)=>(i-=e)*(t/=s)*t+e),su.EaseOutQuad=su.CreateReversibleEasingFunction((t,e,i,s)=>-(i-=e)*(t/=s)*(t-2)+e),su.EaseInOutQuad=su.CreateReversibleEasingFunction((t,e,i,s)=>(i-=e,(t/=s/2)<1)?i/2*t*t+e:-i/2*(--t*(t-2)-1)+e),su.EaseInCubic=su.CreateReversibleEasingFunction((t,e,i,s)=>(i-=e)*(t/=s)*t*t+e),su.EaseOutCubic=su.CreateReversibleEasingFunction((t,e,i,s)=>(i-=e,t/=s,i*(--t*t*t+1)+e)),su.EaseInOutCubic=su.CreateReversibleEasingFunction((t,e,i,s)=>(i-=e,(t/=s/2)<1)?i/2*t*t*t+e:i/2*((t-=2)*t*t+2)+e);/**
 * Action Queues represent an ordered sequence of actions
 *
 * Action queues are part of the [[ActionContext|Action API]] and
 * store the list of actions to be executed for an [[Actor]].
 *
 * Actors implement [[Actor.actions]] which can be manipulated by
 * advanced users to adjust the actions currently being executed in the
 * queue.
 */class sg{constructor(t){this._actions=[],this._completedActions=[],this._entity=t}/**
     * Add an action to the sequence
     * @param action
     */add(t){this._actions.push(t)}/**
     * Remove an action by reference from the sequence
     * @param action
     */remove(t){let e=this._actions.indexOf(t);this._actions.splice(e,1)}/**
     * Removes all actions from this sequence
     */clearActions(){this._actions.length=0,this._completedActions.length=0,this._currentAction&&this._currentAction.stop()}/**
     *
     * @returns The total list of actions in this sequence complete or not
     */getActions(){return this._actions.concat(this._completedActions)}/**
     *
     * @returns `true` if there are more actions to process in the sequence
     */hasNext(){return this._actions.length>0}/**
     * @returns `true` if the current sequence of actions is done
     */isComplete(){return 0===this._actions.length}/**
     * Resets the sequence of actions, this is used to restart a sequence from the beginning
     */reset(){this._actions=this.getActions();let t=this._actions.length;for(let e=0;e<t;e++)this._actions[e].reset();this._completedActions=[]}/**
     * Update the queue which updates actions and handles completing actions
     * @param elapsedMs
     */update(t){this._actions.length>0&&(this._currentAction=this._actions[0],this._currentAction.update(t),this._currentAction.isComplete(this._entity)&&this._completedActions.push(this._actions.shift()))}}class sp{constructor(t,e,i){this._stopped=!1,this._repeatBuilder=e,this._repeatContext=new sF(t),this._actionQueue=this._repeatContext.getQueue(),this._repeat=i,this._originalRepeat=i,this._repeatBuilder(this._repeatContext),this._repeat--}update(t){this._actionQueue.isComplete()&&(this._actionQueue.clearActions(),this._repeatBuilder(this._repeatContext),this._repeat--),this._actionQueue.update(t)}isComplete(){return this._stopped||this._repeat<=0&&this._actionQueue.isComplete()}stop(){this._stopped=!0}reset(){this._repeat=this._originalRepeat}}/**
 * RepeatForever Action implementation, it is recommended you use the fluent action
 * context API.
 *
 *
 */class s_{constructor(t,e){this._stopped=!1,this._repeatBuilder=e,this._repeatContext=new sF(t),this._actionQueue=this._repeatContext.getQueue(),this._repeatBuilder(this._repeatContext)}update(t){this._stopped||(this._actionQueue.isComplete()&&(this._actionQueue.clearActions(),this._repeatBuilder(this._repeatContext)),this._actionQueue.update(t))}isComplete(){return this._stopped}stop(){this._stopped=!0,this._actionQueue.clearActions()}reset(){}}class sf{constructor(t,e,i,s){if(this._started=!1,this._stopped=!1,this._entity=t,this._tx=t.get(iz),this._motion=t.get(iO),this._speed=s,this._offset=new ep(e,i),s<=0)throw t9.getInstance().error("Attempted to moveBy with speed less than or equal to zero : "+s),Error("Speed must be greater than 0 pixels per second")}update(t){this._started||(this._started=!0,this._start=new ep(this._tx.pos.x,this._tx.pos.y),this._end=this._start.add(this._offset),this._distance=this._offset.size,this._dir=this._end.sub(this._start).normalize()),this.isComplete(this._entity)?(this._tx.pos=e_(this._end.x,this._end.y),this._motion.vel=e_(0,0)):this._motion.vel=this._dir.scale(this._speed)}isComplete(t){let e=t.get(iz);return this._stopped||e.pos.distance(this._start)>=this._distance}stop(){this._motion.vel=e_(0,0),this._stopped=!0}reset(){this._started=!1,this._stopped=!1}}class sm{constructor(t,e,i,s){this.entity=t,this._started=!1,this._stopped=!1,this._tx=t.get(iz),this._motion=t.get(iO),this._end=new ep(e,i),this._speed=s}update(t){this._started||(this._started=!0,this._start=new ep(this._tx.pos.x,this._tx.pos.y),this._distance=this._start.distance(this._end),this._dir=this._end.sub(this._start).normalize());let e=this._dir.scale(this._speed);this._motion.vel=e_(e.x,e.y),this.isComplete(this.entity)&&(this._tx.pos=e_(this._end.x,this._end.y),this._motion.vel=e_(0,0))}isComplete(t){let e=t.get(iz);return this._stopped||new ep(e.pos.x,e.pos.y).distance(this._start)>=this._distance}stop(){this._motion.vel=e_(0,0),this._stopped=!0}reset(){this._started=!1,this._stopped=!1}}/**
     * Rotation via `ShortestPath` will use the smallest angle
     * between the starting and ending points. This strategy is the default behavior.
     */(y=$||($={}))[y.ShortestPath=0]="ShortestPath",/**
     * Rotation via `LongestPath` will use the largest angle
     * between the starting and ending points.
     */y[y.LongestPath=1]="LongestPath",/**
     * Rotation via `Clockwise` will travel in a clockwise direction,
     * regardless of the starting and ending points.
     */y[y.Clockwise=2]="Clockwise",/**
     * Rotation via `CounterClockwise` will travel in a counterclockwise direction,
     * regardless of the starting and ending points.
     */y[y.CounterClockwise=3]="CounterClockwise";class sy{constructor(t,e,i,s){this._started=!1,this._stopped=!1,this._tx=t.get(iz),this._motion=t.get(iO),this._end=e,this._speed=i,this._rotationType=s||$.ShortestPath}update(t){if(!this._started){this._started=!0,this._start=this._tx.rotation,this._currentNonCannonAngle=this._tx.rotation;let t=Math.abs(this._end-this._start),e=en-t;switch(t>e?(this._shortDistance=e,this._longDistance=t):(this._shortDistance=t,this._longDistance=e),this._shortestPathIsPositive=(this._start-this._end+en)%en>=Math.PI,this._rotationType){case $.ShortestPath:this._distance=this._shortDistance,this._shortestPathIsPositive?this._direction=1:this._direction=-1;break;case $.LongestPath:this._distance=this._longDistance,this._shortestPathIsPositive?this._direction=-1:this._direction=1;break;case $.Clockwise:this._direction=1,this._shortestPathIsPositive?this._distance=this._shortDistance:this._distance=this._longDistance;break;case $.CounterClockwise:this._direction=-1,this._shortestPathIsPositive?this._distance=this._longDistance:this._distance=this._shortDistance}}this._motion.angularVelocity=this._direction*this._speed,this._currentNonCannonAngle+=this._direction*this._speed*(t/1e3),this.isComplete()&&(this._tx.rotation=this._end,this._motion.angularVelocity=0,this._stopped=!0)}isComplete(){let t=Math.abs(this._currentNonCannonAngle-this._start);return this._stopped||t>=Math.abs(this._distance)}stop(){this._motion.angularVelocity=0,this._stopped=!0}reset(){this._started=!1,this._stopped=!1}}class sC{constructor(t,e,i,s){this._started=!1,this._stopped=!1,this._tx=t.get(iz),this._motion=t.get(iO),this._speed=i,this._offset=e,this._rotationType=s||$.ShortestPath}update(t){if(!this._started){this._started=!0,this._start=this._tx.rotation,this._currentNonCannonAngle=this._tx.rotation,this._end=this._start+this._offset;let t=Math.abs(this._end-this._start),e=en-t;switch(t>e?(this._shortDistance=e,this._longDistance=t):(this._shortDistance=t,this._longDistance=e),this._shortestPathIsPositive=(this._start-this._end+en)%en>=Math.PI,this._rotationType){case $.ShortestPath:this._distance=this._shortDistance,this._shortestPathIsPositive?this._direction=1:this._direction=-1;break;case $.LongestPath:this._distance=this._longDistance,this._shortestPathIsPositive?this._direction=-1:this._direction=1;break;case $.Clockwise:this._direction=1,this._shortDistance>=0?this._distance=this._shortDistance:this._distance=this._longDistance;break;case $.CounterClockwise:this._direction=-1,this._shortDistance<=0?this._distance=this._shortDistance:this._distance=this._longDistance}}this._motion.angularVelocity=this._direction*this._speed,this._currentNonCannonAngle+=this._direction*this._speed*(t/1e3),this.isComplete()&&(this._tx.rotation=this._end,this._motion.angularVelocity=0,this._stopped=!0)}isComplete(){let t=Math.abs(this._currentNonCannonAngle-this._start);return this._stopped||t>=Math.abs(this._distance)}stop(){this._motion.angularVelocity=0,this._stopped=!0}reset(){this._started=!1,this._stopped=!1,this._start=void 0,this._currentNonCannonAngle=void 0,this._distance=void 0}}class sx{constructor(t,e,i,s,r){this._started=!1,this._stopped=!1,this._tx=t.get(iz),this._motion=t.get(iO),this._endX=e,this._endY=i,this._speedX=s,this._speedY=r}update(t){if(this._started||(this._started=!0,this._startX=this._tx.scale.x,this._startY=this._tx.scale.y,this._distanceX=Math.abs(this._endX-this._startX),this._distanceY=Math.abs(this._endY-this._startY)),Math.abs(this._tx.scale.x-this._startX)>=this._distanceX)this._motion.scaleFactor.x=0;else{let t=this._endY<this._startY?-1:1;this._motion.scaleFactor.x=this._speedX*t}if(Math.abs(this._tx.scale.y-this._startY)>=this._distanceY)this._motion.scaleFactor.y=0;else{let t=this._endY<this._startY?-1:1;this._motion.scaleFactor.y=this._speedY*t}this.isComplete()&&(this._tx.scale=e_(this._endX,this._endY),this._motion.scaleFactor.x=0,this._motion.scaleFactor.y=0)}isComplete(){return this._stopped||Math.abs(this._tx.scale.x-this._startX)>=this._distanceX-.01&&Math.abs(this._tx.scale.y-this._startY)>=this._distanceY-.01}stop(){this._motion.scaleFactor.x=0,this._motion.scaleFactor.y=0,this._stopped=!0}reset(){this._started=!1,this._stopped=!1}}class sw{constructor(t,e,i,s){this._started=!1,this._stopped=!1,this._tx=t.get(iz),this._motion=t.get(iO),this._offset=new ep(e,i),this._speedX=this._speedY=s}update(t){this._started||(this._started=!0,this._startScale=this._tx.scale.clone(),this._endScale=this._startScale.add(this._offset),this._distanceX=Math.abs(this._endScale.x-this._startScale.x),this._distanceY=Math.abs(this._endScale.y-this._startScale.y),this._directionX=this._endScale.x<this._startScale.x?-1:1,this._directionY=this._endScale.y<this._startScale.y?-1:1),this._motion.scaleFactor.x=this._speedX*this._directionX,this._motion.scaleFactor.y=this._speedY*this._directionY,this.isComplete()&&(this._tx.scale=this._endScale,this._motion.scaleFactor.x=0,this._motion.scaleFactor.y=0)}isComplete(){return this._stopped||Math.abs(this._tx.scale.x-this._startScale.x)>=this._distanceX-.01&&Math.abs(this._tx.scale.y-this._startScale.y)>=this._distanceY-.01}stop(){this._motion.scaleFactor.x=0,this._motion.scaleFactor.y=0,this._stopped=!0}reset(){this._started=!1,this._stopped=!1}}class sI{constructor(t){this._method=null,this._hasBeenCalled=!1,this._method=t}update(t){this._method(),this._hasBeenCalled=!0}isComplete(){return this._hasBeenCalled}reset(){this._hasBeenCalled=!1}stop(){this._hasBeenCalled=!0}}class sv{constructor(t,e,i,s,r){this.easingFcn=r,this._currentLerpTime=0,this._lerpDuration=1e3,this._lerpStart=new ep(0,0),this._lerpEnd=new ep(0,0),this._initialized=!1,this._stopped=!1,this._tx=t.get(iz),this._motion=t.get(iO),this._lerpDuration=s,this._lerpEnd=new ep(e,i)}_initialize(){this._lerpStart=new ep(this._tx.pos.x,this._tx.pos.y),this._currentLerpTime=0}update(t){this._initialized||(this._initialize(),this._initialized=!0),// Need to update lerp time first, otherwise the first update will always be zero
this._currentLerpTime+=t;let e=this._tx.pos.x,i=this._tx.pos.y;this._currentLerpTime<this._lerpDuration?(e=this._lerpEnd.x<this._lerpStart.x?this._lerpStart.x-(this.easingFcn(this._currentLerpTime,this._lerpEnd.x,this._lerpStart.x,this._lerpDuration)-this._lerpEnd.x):this.easingFcn(this._currentLerpTime,this._lerpStart.x,this._lerpEnd.x,this._lerpDuration),i=this._lerpEnd.y<this._lerpStart.y?this._lerpStart.y-(this.easingFcn(this._currentLerpTime,this._lerpEnd.y,this._lerpStart.y,this._lerpDuration)-this._lerpEnd.y):this.easingFcn(this._currentLerpTime,this._lerpStart.y,this._lerpEnd.y,this._lerpDuration),// Given the lerp position figure out the velocity in pixels per second
this._motion.vel=e_((e-this._tx.pos.x)/(t/1e3),(i-this._tx.pos.y)/(t/1e3))):(this._tx.pos=e_(this._lerpEnd.x,this._lerpEnd.y),this._motion.vel=ep.Zero)}isComplete(){return this._stopped||this._currentLerpTime>=this._lerpDuration}reset(){this._initialized=!1,this._stopped=!1,this._currentLerpTime=0}stop(){this._motion.vel=e_(0,0),this._stopped=!0}}class sE{constructor(t,e,i,s,r){this.easingFcn=r,this._currentLerpTime=0,this._lerpDuration=1e3,this._lerpStart=new ep(0,0),this._lerpEnd=new ep(0,0),this._initialized=!1,this._stopped=!1,this._tx=t.get(iz),this._motion=t.get(iO),this._lerpDuration=s,this._offset=new ep(e,i)}_initialize(){this._lerpStart=new ep(this._tx.pos.x,this._tx.pos.y),this._currentLerpTime=0,this._lerpEnd=this._lerpStart.add(this._offset)}update(t){this._initialized||(this._initialize(),this._initialized=!0),// Need to update lerp time first, otherwise the first update will always be zero
this._currentLerpTime+=t;let e=this._tx.pos.x,i=this._tx.pos.y;this._currentLerpTime<this._lerpDuration?(e=this._lerpEnd.x<this._lerpStart.x?this._lerpStart.x-(this.easingFcn(this._currentLerpTime,this._lerpEnd.x,this._lerpStart.x,this._lerpDuration)-this._lerpEnd.x):this.easingFcn(this._currentLerpTime,this._lerpStart.x,this._lerpEnd.x,this._lerpDuration),i=this._lerpEnd.y<this._lerpStart.y?this._lerpStart.y-(this.easingFcn(this._currentLerpTime,this._lerpEnd.y,this._lerpStart.y,this._lerpDuration)-this._lerpEnd.y):this.easingFcn(this._currentLerpTime,this._lerpStart.y,this._lerpEnd.y,this._lerpDuration),// Given the lerp position figure out the velocity in pixels per second
this._motion.vel=e_((e-this._tx.pos.x)/(t/1e3),(i-this._tx.pos.y)/(t/1e3))):(this._tx.pos=e_(this._lerpEnd.x,this._lerpEnd.y),this._motion.vel=ep.Zero)}isComplete(){return this._stopped||this._currentLerpTime>=this._lerpDuration}reset(){this._initialized=!1,this._stopped=!1,this._currentLerpTime=0}stop(){this._motion.vel=e_(0,0),this._stopped=!0}}class sB{constructor(t,e,i,s=1){this._timeVisible=0,this._timeNotVisible=0,this._elapsedTime=0,this._totalTime=0,this._stopped=!1,this._started=!1,this._graphics=t.get(sl),this._timeVisible=e,this._timeNotVisible=i,this._duration=(e+i)*s}update(t){this._started||(this._started=!0,this._elapsedTime=0,this._totalTime=0),this._graphics&&(this._elapsedTime+=t,this._totalTime+=t,this._graphics.visible&&this._elapsedTime>=this._timeVisible&&(this._graphics.visible=!1,this._elapsedTime=0),!this._graphics.visible&&this._elapsedTime>=this._timeNotVisible&&(this._graphics.visible=!0,this._elapsedTime=0),this.isComplete()&&(this._graphics.visible=!0))}isComplete(){return this._stopped||this._totalTime>=this._duration}stop(){this._graphics&&(this._graphics.visible=!0),this._stopped=!0}reset(){this._started=!1,this._stopped=!1,this._elapsedTime=0,this._totalTime=0}}class sb{constructor(t,e,i){this._multiplier=1,this._started=!1,this._stopped=!1,this._graphics=t.get(sl),this._endOpacity=e,this._speed=this._ogspeed=i}update(t){this._graphics&&(this._started||(this._started=!0,this._speed=this._ogspeed,this._endOpacity<this._graphics.opacity?this._multiplier=-1:this._multiplier=1),this._speed>0&&(this._graphics.opacity+=this._multiplier*(Math.abs(this._graphics.opacity-this._endOpacity)*t)/this._speed),this._speed-=t,this.isComplete()&&(this._graphics.opacity=this._endOpacity),t9.getInstance().debug("[Action fade] Actor opacity:",this._graphics.opacity))}isComplete(){return this._stopped||.05>Math.abs(this._graphics.opacity-this._endOpacity)}stop(){this._stopped=!0}reset(){this._started=!1,this._stopped=!1}}class sQ{constructor(t){this._elapsedTime=0,this._started=!1,this._stopped=!1,this._delay=t}update(t){this._started||(this._started=!0),this._elapsedTime+=t}isComplete(){return this._stopped||this._elapsedTime>=this._delay}stop(){this._stopped=!0}reset(){this._elapsedTime=0,this._started=!1,this._stopped=!1}}class sS{constructor(t){this._stopped=!1,this._entity=t}update(t){this._entity.get(sk).clearActions(),this._entity.kill(),this._stopped=!0}isComplete(){return this._stopped}stop(){}reset(){}}class sT{constructor(t,e,i){this._started=!1,this._stopped=!1,this._tx=t.get(iz),this._motion=t.get(iO),this._followTx=e.get(iz),this._followMotion=e.get(iO),this._current=new ep(this._tx.pos.x,this._tx.pos.y),this._end=new ep(this._followTx.pos.x,this._followTx.pos.y),this._maximumDistance=void 0!==i?i:this._current.distance(this._end),this._speed=0}update(t){this._started||(this._started=!0,this._distanceBetween=this._current.distance(this._end),this._dir=this._end.sub(this._current).normalize());let e=Math.sqrt(Math.pow(this._followMotion.vel.x,2)+Math.pow(this._followMotion.vel.y,2));if(0!==e&&(this._speed=e),this._current=e_(this._tx.pos.x,this._tx.pos.y),this._end=e_(this._followTx.pos.x,this._followTx.pos.y),this._distanceBetween=this._current.distance(this._end),this._dir=this._end.sub(this._current).normalize(),this._distanceBetween>=this._maximumDistance){let t=this._dir.scale(this._speed);this._motion.vel=e_(t.x,t.y)}else this._motion.vel=e_(0,0);this.isComplete()&&(this._tx.pos=e_(this._end.x,this._end.y),this._motion.vel=e_(0,0))}stop(){this._motion.vel=e_(0,0),this._stopped=!0}isComplete(){// the actor following should never stop unless specified to do so
return this._stopped}reset(){this._started=!1,this._stopped=!1}}class sD{constructor(t,e,i){this._started=!1,this._stopped=!1,this._speedWasSpecified=!1,this._tx=t.get(iz),this._motion=t.get(iO),this._meetTx=e.get(iz),this._meetMotion=e.get(iO),this._current=new ep(this._tx.pos.x,this._tx.pos.y),this._end=new ep(this._meetTx.pos.x,this._meetTx.pos.y),this._speed=i||0,void 0!==i&&(this._speedWasSpecified=!0)}update(t){this._started||(this._started=!0,this._distanceBetween=this._current.distance(this._end),this._dir=this._end.sub(this._current).normalize());let e=Math.sqrt(Math.pow(this._meetMotion.vel.x,2)+Math.pow(this._meetMotion.vel.y,2));0===e||this._speedWasSpecified||(this._speed=e),this._current=e_(this._tx.pos.x,this._tx.pos.y),this._end=e_(this._meetTx.pos.x,this._meetTx.pos.y),this._distanceBetween=this._current.distance(this._end),this._dir=this._end.sub(this._current).normalize();let i=this._dir.scale(this._speed);this._motion.vel=e_(i.x,i.y),this.isComplete()&&(this._tx.pos=e_(this._end.x,this._end.y),this._motion.vel=e_(0,0))}isComplete(){return this._stopped||this._distanceBetween<=1}stop(){this._motion.vel=e_(0,0),this._stopped=!0}reset(){this._started=!1,this._stopped=!1,this._distanceBetween=void 0}}/**
 * The fluent Action API allows you to perform "actions" on
 * [[Actor|Actors]] such as following, moving, rotating, and
 * more. You can implement your own actions by implementing
 * the [[Action]] interface.
 */class sF{constructor(t){this._entity=t,this._queue=new sg(t)}getQueue(){return this._queue}update(t){this._queue.update(t)}/**
     * Clears all queued actions from the Actor
     */clearActions(){this._queue.clearActions()}runAction(t){return t.reset(),this._queue.add(t),this}easeTo(...t){var e,i;let s=0,r=0,n=0,o=su.Linear;return t[0]instanceof ep?(s=t[0].x,r=t[0].y,n=t[1],o=null!==(e=t[2])&&void 0!==e?e:o):(s=t[0],r=t[1],n=t[2],o=null!==(i=t[3])&&void 0!==i?i:o),this._queue.add(new sv(this._entity,s,r,n,o)),this}easeBy(...t){var e,i;let s=0,r=0,n=0,o=su.Linear;return t[0]instanceof ep?(s=t[0].x,r=t[0].y,n=t[1],o=null!==(e=t[2])&&void 0!==e?e:o):(s=t[0],r=t[1],n=t[2],o=null!==(i=t[3])&&void 0!==i?i:o),this._queue.add(new sE(this._entity,s,r,n,o)),this}moveTo(t,e,i){let s=0,r=0,n=0;return t instanceof ep?(s=t.x,r=t.y,n=e):(s=t,r=e,n=i),this._queue.add(new sm(this._entity,s,r,n)),this}moveBy(t,e,i){let s=0,r=0,n=0;return t instanceof ep?(s=t.x,r=t.y,n=e):(s=t,r=e,n=i),this._queue.add(new sf(this._entity,s,r,n)),this}/**
     * This method will rotate an actor to the specified angle at the speed
     * specified (in radians per second) and return back the actor. This
     * method is part of the actor 'Action' fluent API allowing action chaining.
     * @param angleRadians  The angle to rotate to in radians
     * @param speed         The angular velocity of the rotation specified in radians per second
     * @param rotationType  The [[RotationType]] to use for this rotation
     */rotateTo(t,e,i){return this._queue.add(new sy(this._entity,t,e,i)),this}/**
     * This method will rotate an actor by the specified angle offset, from it's current rotation given a certain speed
     * in radians/sec and return back the actor. This method is part
     * of the actor 'Action' fluent API allowing action chaining.
     * @param angleRadiansOffset  The angle to rotate to in radians relative to the current rotation
     * @param speed          The speed in radians/sec the actor should rotate at
     * @param rotationType  The [[RotationType]] to use for this rotation, default is shortest path
     */rotateBy(t,e,i){return this._queue.add(new sC(this._entity,t,e,i)),this}scaleTo(t,e,i,s){let r=1,n=1,o=0,a=0;return t instanceof ep&&e instanceof ep&&(r=t.x,n=t.y,o=e.x,a=e.y),"number"==typeof t&&"number"==typeof e&&(r=t,n=e,o=i,a=s),this._queue.add(new sx(this._entity,r,n,o,a)),this}scaleBy(t,e,i){let s=1,r=1;return t instanceof ep&&(s=t.x,r=t.y,i=e),"number"==typeof t&&"number"==typeof e&&(s=t,r=e),this._queue.add(new sw(this._entity,s,r,i)),this}/**
     * This method will cause an actor to blink (become visible and not
     * visible). Optionally, you may specify the number of blinks. Specify the amount of time
     * the actor should be visible per blink, and the amount of time not visible.
     * This method is part of the actor 'Action' fluent API allowing action chaining.
     * @param timeVisible     The amount of time to stay visible per blink in milliseconds
     * @param timeNotVisible  The amount of time to stay not visible per blink in milliseconds
     * @param numBlinks       The number of times to blink
     */blink(t,e,i=1){return this._queue.add(new sB(this._entity,t,e,i)),this}/**
     * This method will cause an actor's opacity to change from its current value
     * to the provided value by a specified time (in milliseconds). This method is
     * part of the actor 'Action' fluent API allowing action chaining.
     * @param opacity  The ending opacity
     * @param time     The time it should take to fade the actor (in milliseconds)
     */fade(t,e){return this._queue.add(new sb(this._entity,t,e)),this}/**
     * This method will delay the next action from executing for a certain
     * amount of time (in milliseconds). This method is part of the actor
     * 'Action' fluent API allowing action chaining.
     * @param time  The amount of time to delay the next action in the queue from executing in milliseconds
     */delay(t){return this._queue.add(new sQ(t)),this}/**
     * This method will add an action to the queue that will remove the actor from the
     * scene once it has completed its previous  Any actions on the
     * action queue after this action will not be executed.
     */die(){return this._queue.add(new sS(this._entity)),this}/**
     * This method allows you to call an arbitrary method as the next action in the
     * action queue. This is useful if you want to execute code in after a specific
     * action, i.e An actor arrives at a destination after traversing a path
     */callMethod(t){return this._queue.add(new sI(t)),this}/**
     * This method will cause the actor to repeat all of the actions built in
     * the `repeatBuilder` callback. If the number of repeats
     * is not specified it will repeat forever. This method is part of
     * the actor 'Action' fluent API allowing action chaining
     *
     * ```typescript
     * // Move up in a zig-zag by repeated moveBy's
     * actor.actions.repeat(repeatCtx => {
     *  repeatCtx.moveBy(10, 0, 10);
     *  repeatCtx.moveBy(0, 10, 10);
     * }, 5);
     * ```
     *
     * @param repeatBuilder The builder to specify the repeatable list of actions
     * @param times  The number of times to repeat all the previous actions in the action queue. If nothing is specified the actions
     * will repeat forever
     */repeat(t,e){return e?this._queue.add(new sp(this._entity,t,e)):this.repeatForever(t),this}/**
     * This method will cause the actor to repeat all of the actions built in
     * the `repeatBuilder` callback. If the number of repeats
     * is not specified it will repeat forever. This method is part of
     * the actor 'Action' fluent API allowing action chaining
     *
     * ```typescript
     * // Move up in a zig-zag by repeated moveBy's
     * actor.actions.repeat(repeatCtx => {
     *  repeatCtx.moveBy(10, 0, 10);
     *  repeatCtx.moveBy(0, 10, 10);
     * }, 5);
     * ```
     *
     * @param repeatBuilder The builder to specify the repeatable list of actions
     */repeatForever(t){return this._queue.add(new s_(this._entity,t)),this}/**
     * This method will cause the entity to follow another at a specified distance
     * @param entity           The entity to follow
     * @param followDistance  The distance to maintain when following, if not specified the actor will follow at the current distance.
     */follow(t,e){return void 0===e?this._queue.add(new sT(this._entity,t)):this._queue.add(new sT(this._entity,t,e)),this}/**
     * This method will cause the entity to move towards another until they
     * collide "meet" at a specified speed.
     * @param entity  The entity to meet
     * @param speed  The speed in pixels per second to move, if not specified it will match the speed of the other actor
     */meet(t,e){return void 0===e?this._queue.add(new sD(this._entity,t)):this._queue.add(new sD(this._entity,t,e)),this}/**
     * Returns a promise that resolves when the current action queue up to now
     * is finished.
     */toPromise(){let t=new Promise(t=>{this._queue.add(new sI(()=>{t()}))});return t}}class sk extends iN{constructor(){super(...arguments),this.type="ex.actions",this.dependencies=[iz,iO]}onAdd(t){this._ctx=new sF(t)}onRemove(){this._ctx=null}/**
     * Returns the internal action queue
     * @returns action queue
     */getQueue(){var t;return null===(t=this._ctx)||void 0===t?void 0:t.getQueue()}runAction(t){var e;return null===(e=this._ctx)||void 0===e?void 0:e.runAction(t)}/**
     * Updates the internal action context, performing action and moving through the internal queue
     * @param elapsedMs
     */update(t){var e;return null===(e=this._ctx)||void 0===e?void 0:e.update(t)}/**
     * Clears all queued actions from the Actor
     */clearActions(){var t;null===(t=this._ctx)||void 0===t||t.clearActions()}easeTo(...t){return this._ctx.easeTo.apply(this._ctx,t)}easeBy(...t){return this._ctx.easeBy.apply(this._ctx,t)}moveTo(t,e,i){return this._ctx.moveTo.apply(this._ctx,[t,e,i])}moveBy(t,e,i){return this._ctx.moveBy.apply(this._ctx,[t,e,i])}/**
     * This method will rotate an actor to the specified angle at the speed
     * specified (in radians per second) and return back the actor. This
     * method is part of the actor 'Action' fluent API allowing action chaining.
     * @param angleRadians  The angle to rotate to in radians
     * @param speed         The angular velocity of the rotation specified in radians per second
     * @param rotationType  The [[RotationType]] to use for this rotation
     */rotateTo(t,e,i){return this._ctx.rotateTo(t,e,i)}/**
     * This method will rotate an actor by the specified angle offset, from it's current rotation given a certain speed
     * in radians/sec and return back the actor. This method is part
     * of the actor 'Action' fluent API allowing action chaining.
     * @param angleRadiansOffset  The angle to rotate to in radians relative to the current rotation
     * @param speed          The speed in radians/sec the actor should rotate at
     * @param rotationType  The [[RotationType]] to use for this rotation, default is shortest path
     */rotateBy(t,e,i){return this._ctx.rotateBy(t,e,i)}scaleTo(t,e,i,s){return this._ctx.scaleTo.apply(this._ctx,[t,e,i,s])}scaleBy(t,e,i){return this._ctx.scaleBy.apply(this._ctx,[t,e,i])}/**
     * This method will cause an actor to blink (become visible and not
     * visible). Optionally, you may specify the number of blinks. Specify the amount of time
     * the actor should be visible per blink, and the amount of time not visible.
     * This method is part of the actor 'Action' fluent API allowing action chaining.
     * @param timeVisible     The amount of time to stay visible per blink in milliseconds
     * @param timeNotVisible  The amount of time to stay not visible per blink in milliseconds
     * @param numBlinks       The number of times to blink
     */blink(t,e,i){return this._ctx.blink(t,e,i)}/**
     * This method will cause an actor's opacity to change from its current value
     * to the provided value by a specified time (in milliseconds). This method is
     * part of the actor 'Action' fluent API allowing action chaining.
     * @param opacity  The ending opacity
     * @param time     The time it should take to fade the actor (in milliseconds)
     */fade(t,e){return this._ctx.fade(t,e)}/**
     * This method will delay the next action from executing for a certain
     * amount of time (in milliseconds). This method is part of the actor
     * 'Action' fluent API allowing action chaining.
     * @param time  The amount of time to delay the next action in the queue from executing in milliseconds
     */delay(t){return this._ctx.delay(t)}/**
     * This method will add an action to the queue that will remove the actor from the
     * scene once it has completed its previous  Any actions on the
     * action queue after this action will not be executed.
     */die(){return this._ctx.die()}/**
     * This method allows you to call an arbitrary method as the next action in the
     * action queue. This is useful if you want to execute code in after a specific
     * action, i.e An actor arrives at a destination after traversing a path
     */callMethod(t){return this._ctx.callMethod(t)}/**
     * This method will cause the actor to repeat all of the actions built in
     * the `repeatBuilder` callback. If the number of repeats
     * is not specified it will repeat forever. This method is part of
     * the actor 'Action' fluent API allowing action chaining
     *
     * ```typescript
     * // Move up in a zig-zag by repeated moveBy's
     * actor.actions.repeat(repeatCtx => {
     *  repeatCtx.moveBy(10, 0, 10);
     *  repeatCtx.moveBy(0, 10, 10);
     * }, 5);
     * ```
     *
     * @param repeatBuilder The builder to specify the repeatable list of actions
     * @param times  The number of times to repeat all the previous actions in the action queue. If nothing is specified the actions
     * will repeat forever
     */repeat(t,e){return this._ctx.repeat(t,e)}/**
     * This method will cause the actor to repeat all of the actions built in
     * the `repeatBuilder` callback. If the number of repeats
     * is not specified it will repeat forever. This method is part of
     * the actor 'Action' fluent API allowing action chaining
     *
     * ```typescript
     * // Move up in a zig-zag by repeated moveBy's
     * actor.actions.repeat(repeatCtx => {
     *  repeatCtx.moveBy(10, 0, 10);
     *  repeatCtx.moveBy(0, 10, 10);
     * }, 5);
     * ```
     *
     * @param repeatBuilder The builder to specify the repeatable list of actions
     */repeatForever(t){return this._ctx.repeatForever(t)}/**
     * This method will cause the entity to follow another at a specified distance
     * @param entity           The entity to follow
     * @param followDistance  The distance to maintain when following, if not specified the actor will follow at the current distance.
     */follow(t,e){return this._ctx.follow(t,e)}/**
     * This method will cause the entity to move towards another until they
     * collide "meet" at a specified speed.
     * @param entity  The entity to meet
     * @param speed  The speed in pixels per second to move, if not specified it will match the speed of the other actor
     */meet(t,e){return this._ctx.meet(t,e)}/**
     * Returns a promise that resolves when the current action queue up to now
     * is finished.
     */toPromise(){return this._ctx.toPromise()}}/**
     * Em is a scalable unit, 1 em is equal to the current font size of the current element, parent elements can effect em values
     */(C=tt||(tt={})).Em="em",/**
     * Rem is similar to the Em, it is a scalable unit. 1 rem is equal to the font size of the root element
     */C.Rem="rem",/**
     * Pixel is a unit of length in screen pixels
     */C.Px="px",/**
     * Point is a physical unit length (1/72 of an inch)
     */C.Pt="pt",/**
     * Percent is a scalable unit similar to Em, the only difference is the Em units scale faster when Text-Size stuff
     */C.Percent="%",/**
     * The text is left-aligned.
     */(x=te||(te={})).Left="left",/**
     * The text is right-aligned.
     */x.Right="right",/**
     * The text is centered.
     */x.Center="center",/**
     * The text is aligned at the normal start of the line (left-aligned for left-to-right locales,
     * right-aligned for right-to-left locales).
     */x.Start="start",/**
     * The text is aligned at the normal end of the line (right-aligned for left-to-right locales,
     * left-aligned for right-to-left locales).
     */x.End="end",/**
     * The text baseline is the top of the em square.
     */(w=ti||(ti={})).Top="top",/**
     * The text baseline is the hanging baseline.  Currently unsupported; this will act like
     * alphabetic.
     */w.Hanging="hanging",/**
     * The text baseline is the middle of the em square.
     */w.Middle="middle",/**
     * The text baseline is the normal alphabetic baseline.
     */w.Alphabetic="alphabetic",/**
     * The text baseline is the ideographic baseline; this is the bottom of
     * the body of the characters, if the main body of characters protrudes
     * beneath the alphabetic baseline.  Currently unsupported; this will
     * act like alphabetic.
     */w.Ideographic="ideographic",/**
     * The text baseline is the bottom of the bounding box.  This differs
     * from the ideographic baseline in that the ideographic baseline
     * doesn't consider descenders.
     */w.Bottom="bottom",(I=ts||(ts={})).Normal="normal",I.Italic="italic",I.Oblique="oblique",(v=tr||(tr={})).LeftToRight="ltr",v.RightToLeft="rtl";class sP{constructor(t,e,i,s){this.font=t,this.text=e,this.color=i,this.maxWidth=s,this._textFragments=[],this.disposed=!1,this._dirty=!0,this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.dimensions=this.measureText(e),this._setDimension(this.dimensions,this.ctx),this._lastHashCode=this.getHashCode()}measureText(t,e){if(this.disposed)throw Error("Accessing disposed text instance! "+this.text);let i=null;i=null!=e?this._getLinesFromText(t,e):t.split("\n");let s=i.reduce((t,e)=>t.length>e.length?t:e);this._applyFont(this.ctx);// font must be applied to the context to measure it
let r=this.ctx.measureText(s),n=Math.abs(r.actualBoundingBoxAscent)+Math.abs(r.actualBoundingBoxDescent),o=n*i.length;n=o;let a=o-Math.abs(r.actualBoundingBoxAscent),h=new ey({left:0-Math.abs(r.actualBoundingBoxLeft)-this.font.padding,top:0-Math.abs(r.actualBoundingBoxAscent)-this.font.padding,bottom:0+a+this.font.padding,right:0+Math.abs(r.actualBoundingBoxRight)+this.font.padding});return h}_setDimension(t,e){// Changing the width and height clears the context properties
// We double the bitmap width to account for all possible alignment
// We scale by "quality" so we render text without jaggies
e.canvas.width=(t.width+2*this.font.padding)*2*this.font.quality,e.canvas.height=(t.height+2*this.font.padding)*2*this.font.quality}static getHashCode(t,e,i){var s;let r=e+"__hashcode__"+t.fontString+t.showDebug+t.textAlign+t.baseAlign+t.direction+JSON.stringify(t.shadow)+(t.padding.toString()+t.smoothing.toString()+t.lineWidth.toString()+t.lineDash.toString()+(null===(s=t.strokeColor)||void 0===s?void 0:s.toString())+(i?i.toString():t.color.toString()));return r}getHashCode(t=!0){return sP.getHashCode(this.font,this.text,t?this.color:void 0)}_applyRasterProperties(t){var e,i;t.translate(this.font.padding,this.font.padding),t.imageSmoothingEnabled=this.font.smoothing,t.lineWidth=this.font.lineWidth,t.setLineDash(null!==(e=this.font.lineDash)&&void 0!==e?e:t.getLineDash()),t.strokeStyle=null===(i=this.font.strokeColor)||void 0===i?void 0:i.toString(),t.fillStyle=this.color.toString()}_applyFont(t){t.resetTransform(),t.translate(this.font.padding+t.canvas.width/2,this.font.padding+t.canvas.height/2),t.scale(this.font.quality,this.font.quality),t.textAlign=this.font.textAlign,t.textBaseline=this.font.baseAlign,t.font=this.font.fontString,t.direction=this.font.direction,this.font.shadow&&(t.shadowColor=this.font.shadow.color.toString(),t.shadowBlur=this.font.shadow.blur,t.shadowOffsetX=this.font.shadow.offset.x,t.shadowOffsetY=this.font.shadow.offset.y)}_drawText(t,e,i){this._applyRasterProperties(t),this._applyFont(t);for(let s=0;s<e.length;s++){let r=e[s];this.color&&t.fillText(r,0,s*i),this.font.strokeColor&&t.strokeText(r,0,s*i)}this.font.showDebug&&(// Horizontal line
/* istanbul ignore next */ih(t,ef.Green,-t.canvas.width/2,0,t.canvas.width/2,0,2),// Vertical line
/* istanbul ignore next */ih(t,ef.Red,0,-t.canvas.height/2,0,t.canvas.height/2,2))}_splitTextBitmap(t){let e=[],i=0,s=0,r=Math.min(4096,t.canvas.width),n=Math.min(4096,t.canvas.height);// Splits the original bitmap into 4k max chunks
for(;i<t.canvas.width;){for(;s<t.canvas.height;){// create new bitmap
let o=document.createElement("canvas");o.width=r,o.height=n;let a=o.getContext("2d");// draw current slice to new bitmap in < 4k chunks
a.drawImage(t.canvas,i,s,r,n,0,0,r,n),e.push({x:i,y:s,canvas:o}),s+=n}i+=r,s=0}return e}flagDirty(){this._dirty=!0}render(t,e,i,s){if(this.disposed)throw Error("Accessing disposed text instance! "+this.text);this._ex=t;let r=this.getHashCode();// Calculate image chunks
if(this._lastHashCode!==r&&(this._dirty=!0),this._dirty){this.dimensions=this.measureText(this.text,s),this._setDimension(this.dimensions,this.ctx);let e=this._getLinesFromText(this.text,s),i=this.dimensions.height/e.length;// clear any out old fragments
if(// draws the text to the main bitmap
this._drawText(this.ctx,e,i),t instanceof ie)for(let e of this._textFragments)t.textureLoader.delete(e.canvas);if(// splits to < 4k fragments for large text
this._textFragments=this._splitTextBitmap(this.ctx),t instanceof ie)for(let e of this._textFragments)t.textureLoader.load(e.canvas,this.font.filtering,!0);this._lastHashCode=r,this._dirty=!1}// draws the bitmap fragments to excalibur graphics context
for(let s of this._textFragments)t.drawImage(s.canvas,0,0,s.canvas.width,s.canvas.height,s.x/this.font.quality+e-this.ctx.canvas.width/this.font.quality/2,s.y/this.font.quality+i-this.ctx.canvas.height/this.font.quality/2,s.canvas.width/this.font.quality,s.canvas.height/this.font.quality)}dispose(){if(this.disposed=!0,this.dimensions=void 0,this.canvas=void 0,this.ctx=void 0,this._ex instanceof ie)for(let t of this._textFragments)this._ex.textureLoader.delete(t.canvas);this._textFragments.length=0}_getLinesFromText(t,e){if(this._chachedText===t&&this._cachedRenderWidth===e)return this._chachedLines;let i=t.split("\n");if(null==e)return i;// If the current line goes past the maxWidth, append a new line without modifying the underlying text.
for(let t=0;t<i.length;t++){let s=i[t],r="";if(this.measureText(s).width>e){for(;this.measureText(s).width>e;)r=s[s.length-1]+r,s=s.slice(0,-1);// Update the array with our new values
i[t]=s,i[t+1]=r}}return this._chachedText=t,this._chachedLines=i,this._cachedRenderWidth=e,i}}class sR{static measureText(t,e,i){let s=sP.getHashCode(e,t);if(sR._MEASURE_CACHE.has(s))return sR._MEASURE_CACHE.get(s);sR._LOGGER.debug("Font text measurement cache miss");let r=e.measureTextWithoutCache(t,i);return sR._MEASURE_CACHE.set(s,r),r}static getTextInstance(t,e,i){let s=sP.getHashCode(e,t,i),r=sR._TEXT_CACHE.get(s);return r||(r=new sP(e,t,i),sR._TEXT_CACHE.set(s,r),sR._LOGGER.debug("Font text instance cache miss")),// Cache the bitmap for certain amount of time
sR._TEXT_USAGE.set(r,performance.now()),r}static checkAndClearCache(){let t=[],e=new Set;for(let[i,s]of sR._TEXT_USAGE.entries())if(s+100<performance.now())sR._LOGGER.debug(`Text cache entry timed out ${i.text}`),t.push(i),i.dispose();else{let t=i.getHashCode(!1);e.add(t)}for(let[e]of(// Deferred removal of text instances
t.forEach(t=>{sR._TEXT_USAGE.delete(t)}),// Regenerate text instance cache
this._TEXT_CACHE.clear(),this._TEXT_USAGE.entries()))this._TEXT_CACHE.set(e.getHashCode(),e);// Regenerated measurement cache
let i=new Map;for(let t of e)sR._MEASURE_CACHE.has(t)&&i.set(t,sR._MEASURE_CACHE.get(t));this._MEASURE_CACHE.clear(),this._MEASURE_CACHE=i}static get cacheSize(){return sR._TEXT_USAGE.size}/**
     * Force clear all cached text bitmaps
     */static clearCache(){for(let[t]of sR._TEXT_USAGE.entries())t.dispose();sR._TEXT_USAGE.clear(),sR._TEXT_CACHE.clear(),sR._MEASURE_CACHE.clear()}}sR._LOGGER=t9.getInstance(),sR._TEXT_USAGE=new Map,sR._TEXT_CACHE=new Map,sR._MEASURE_CACHE=new Map;/**
 * Represents a system or web font in Excalibur
 *
 * If no options specified, the system sans-serif 10 pixel is used
 *
 * If loading a custom web font be sure to have the font loaded before you use it https://erikonarheim.com/posts/dont-test-fonts/
 */class sM extends eR{constructor(t={}){var e,i,s,r,n,o,a,h,l,A,d,c,u,g,p,_,f,m,y;super(t),/**
         * Set the font filtering mode, by default set to [[ImageFiltering.Blended]] regardless of the engine default smoothing
         *
         * If you have a pixel style font that may be a reason to switch this to [[ImageFiltering.Pixel]]
         */this.filtering=V.Blended,/**
         * Font quality determines the size of the underlying raster text, higher quality means less jagged edges.
         * If quality is set to 1, then just enough raster bitmap is generated to render the text.
         *
         * You can think of quality as how zoomed in to the text you can get before seeing jagged edges.
         *
         * (Default 2)
         */this.quality=2,// Raster properties for fonts
this.padding=2,this.smoothing=!1,this.lineWidth=1,this.lineDash=[],this.color=ef.Black,this.family="sans-serif",this.style=ts.Normal,this.bold=!1,this.unit=tt.Px,this.textAlign=te.Left,this.baseAlign=ti.Alphabetic,this.direction=tr.LeftToRight,this.size=10,this.shadow=null,this._textBounds=new ey,this._textMeasurement=new sP(this,"",ef.Black),// Raster properties
this.smoothing=null!==(e=null==t?void 0:t.smoothing)&&void 0!==e?e:this.smoothing,this.padding=null!==(i=null==t?void 0:t.padding)&&void 0!==i?i:this.padding,this.color=null!==(s=null==t?void 0:t.color)&&void 0!==s?s:this.color,this.strokeColor=null!==(r=null==t?void 0:t.strokeColor)&&void 0!==r?r:this.strokeColor,this.lineDash=null!==(n=null==t?void 0:t.lineDash)&&void 0!==n?n:this.lineDash,this.lineWidth=null!==(o=null==t?void 0:t.lineWidth)&&void 0!==o?o:this.lineWidth,this.filtering=null!==(a=null==t?void 0:t.filtering)&&void 0!==a?a:this.filtering,// Font specific properties
this.family=null!==(h=null==t?void 0:t.family)&&void 0!==h?h:this.family,this.style=null!==(l=null==t?void 0:t.style)&&void 0!==l?l:this.style,this.bold=null!==(A=null==t?void 0:t.bold)&&void 0!==A?A:this.bold,this.size=null!==(d=null==t?void 0:t.size)&&void 0!==d?d:this.size,this.unit=null!==(c=null==t?void 0:t.unit)&&void 0!==c?c:this.unit,this.textAlign=null!==(u=null==t?void 0:t.textAlign)&&void 0!==u?u:this.textAlign,this.baseAlign=null!==(g=null==t?void 0:t.baseAlign)&&void 0!==g?g:this.baseAlign,this.direction=null!==(p=null==t?void 0:t.direction)&&void 0!==p?p:this.direction,this.quality=null!==(_=null==t?void 0:t.quality)&&void 0!==_?_:this.quality,(null==t?void 0:t.shadow)&&(this.shadow={},this.shadow.blur=null!==(f=t.shadow.blur)&&void 0!==f?f:this.shadow.blur,this.shadow.offset=null!==(m=t.shadow.offset)&&void 0!==m?m:this.shadow.offset,this.shadow.color=null!==(y=t.shadow.color)&&void 0!==y?y:this.shadow.color)}clone(){return new sM({...this.cloneGraphicOptions(),size:this.size,unit:this.unit,family:this.family,style:this.style,bold:this.bold,textAlign:this.textAlign,baseAlign:this.baseAlign,direction:this.direction,shadow:this.shadow?{blur:this.shadow.blur,offset:this.shadow.offset,color:this.shadow.color}:null})}get fontString(){return`${this.style} ${this.bold?"bold":""} ${this.size}${this.unit} ${this.family}`}get localBounds(){return this._textBounds}_drawImage(t,e,i){// TODO weird vestigial drawimage
}_rotate(t){var e;// TODO this needs to change depending on the bounding box...
let i=null!==(e=this.origin)&&void 0!==e?e:this._textBounds.center;t.translate(i.x,i.y),t.rotate(this.rotation),t.translate(-i.x,-i.y)}_flip(t){this.flipHorizontal&&(t.translate(this._textBounds.width/this.scale.x,0),t.scale(-1,1)),this.flipVertical&&(t.translate(0,-this._textBounds.height/2/this.scale.y),t.scale(1,-1))}measureTextWithoutCache(t,e){return this._textMeasurement.measureText(t,e)}/**
     * Returns a BoundingBox that is the total size of the text including multiple lines
     *
     * Does not include any padding or adjustment
     * @param text
     * @returns BoundingBox
     */measureText(t,e){return sR.measureText(t,this,e)}_postDraw(t){t.restore()}render(t,e,i,s,r,n){let o=sR.getTextInstance(e,this,i);// Apply affine transformations
this._textBounds=o.dimensions,this._preDraw(t,s,r),o.render(t,s,r,n),this._postDraw(t)}}/**
 * Represent Text graphics in excalibur
 *
 * Useful for in game labels, ui, or overlays
 */class Text extends eR{constructor(t){var e,i;super(t),this._text="",this._textWidth=0,this._textHeight=0,// This order is important font, color, then text
this.font=null!==(e=t.font)&&void 0!==e?e:new sM,this.color=null!==(i=t.color)&&void 0!==i?i:this.color,this.text=t.text,this.maxWidth=t.maxWidth}clone(){var t,e;return new Text({text:this.text.slice(),color:null!==(e=null===(t=this.color)||void 0===t?void 0:t.clone())&&void 0!==e?e:ef.Black,font:this.font.clone(),maxWidth:this.maxWidth})}get text(){return this._text}set text(t){this._text=t,this._calculateDimension()}get font(){return this._font}set font(t){this._font=t}get width(){return 0===this._textWidth&&this._calculateDimension(),this._textWidth*this.scale.x}get height(){return 0===this._textHeight&&this._calculateDimension(),this._textHeight*this.scale.y}_calculateDimension(){let{width:t,height:e}=this.font.measureText(this._text,this.maxWidth);this._textWidth=t,this._textHeight=e}get localBounds(){return this.font.measureText(this._text,this.maxWidth).scale(this.scale)}_rotate(t){// None this is delegated to font
// This override erases the default behavior
}_flip(t){// None this is delegated to font
// This override erases the default behavior
}_preDraw(t,e,i){(this.isStale()||this.font.isStale())&&(this.font.flipHorizontal=this.flipHorizontal,this.font.flipVertical=this.flipVertical,this.font.rotation=this.rotation,this.font.origin=this.origin,this.font.opacity=this.opacity),this.font.tint=this.tint,super._preDraw(t,e,i)}_drawImage(t,e,i){var s;let r=ef.Black;this.font instanceof sM&&(r=null!==(s=this.color)&&void 0!==s?s:this.font.color);let{width:n,height:o}=this.font.measureText(this._text,this.maxWidth);this._textWidth=n,this._textHeight=o,this.font.render(t,this._text,r,e,i,this.maxWidth),this.font.showDebug&&(t.debug.drawRect(e-n,i-o,2*n,2*o),null!=this.maxWidth&&t.debug.drawRect(e,i,this.maxWidth,this.height,{color:ef.Yellow}))}}/**
 * The most important primitive in Excalibur is an `Actor`. Anything that
 * can move on the screen, collide with another `Actor`, respond to events,
 * or interact with the current scene, must be an actor. An `Actor` **must**
 * be part of a [[Scene]] for it to be drawn to the screen.
 */class sL extends sn{/**
     * The physics body the is associated with this actor. The body is the container for all physical properties, like position, velocity,
     * acceleration, mass, inertia, etc.
     */get body(){return this.get(i7)}/**
     * Access the Actor's built in [[TransformComponent]]
     */get transform(){return this.get(iz)}/**
     * Access the Actor's built in [[MotionComponent]]
     */get motion(){return this.get(iO)}/**
     * Access to the Actor's built in [[GraphicsComponent]]
     */get graphics(){return this.get(sl)}/**
     * Access to the Actor's built in [[ColliderComponent]]
     */get collider(){return this.get(i9)}/**
     * Access to the Actor's built in [[PointerComponent]] config
     */get pointer(){return this.get(sc)}/**
     * Useful for quickly scripting actor behavior, like moving to a place, patrolling back and forth, blinking, etc.
     *
     *  Access to the Actor's built in [[ActionsComponent]] which forwards to the
     * [[ActionContext|Action context]] of the actor.
     */get actions(){return this.get(sk)}/**
     * Gets the position vector of the actor in pixels
     */get pos(){return this.transform.pos}/**
     * Sets the position vector of the actor in pixels
     */set pos(t){this.transform.pos=t.clone()}/**
     * Gets the position vector of the actor from the last frame
     */get oldPos(){return this.body.oldPos}/**
     * Sets the position vector of the actor in the last frame
     */set oldPos(t){this.body.oldPos.setTo(t.x,t.y)}/**
     * Gets the velocity vector of the actor in pixels/sec
     */get vel(){return this.motion.vel}/**
     * Sets the velocity vector of the actor in pixels/sec
     */set vel(t){this.motion.vel=t.clone()}/**
     * Gets the velocity vector of the actor from the last frame
     */get oldVel(){return this.body.oldVel}/**
     * Sets the velocity vector of the actor from the last frame
     */set oldVel(t){this.body.oldVel.setTo(t.x,t.y)}/**
     * Gets the acceleration vector of the actor in pixels/second/second. An acceleration pointing down such as (0, 100) may be
     * useful to simulate a gravitational effect.
     */get acc(){return this.motion.acc}/**
     * Sets the acceleration vector of teh actor in pixels/second/second
     */set acc(t){this.motion.acc=t.clone()}/**
     * Sets the acceleration of the actor from the last frame. This does not include the global acc [[Physics.acc]].
     */set oldAcc(t){this.body.oldAcc.setTo(t.x,t.y)}/**
     * Gets the acceleration of the actor from the last frame. This does not include the global acc [[Physics.acc]].
     */get oldAcc(){return this.body.oldAcc}/**
     * Gets the rotation of the actor in radians. 1 radian = 180/PI Degrees.
     */get rotation(){return this.transform.rotation}/**
     * Sets the rotation of the actor in radians. 1 radian = 180/PI Degrees.
     */set rotation(t){this.transform.rotation=t}/**
     * Gets the rotational velocity of the actor in radians/second
     */get angularVelocity(){return this.motion.angularVelocity}/**
     * Sets the rotational velocity of the actor in radians/sec
     */set angularVelocity(t){this.motion.angularVelocity=t}get scale(){return this.get(iz).scale}set scale(t){this.get(iz).scale=t}get anchor(){return this._anchor}set anchor(t){this._anchor=ek(t,t=>this._handleAnchorChange(t)),this._handleAnchorChange(t)}_handleAnchorChange(t){this.graphics&&(this.graphics.anchor=t)}/**
     * Indicates whether the actor is physically in the viewport
     */get isOffScreen(){return this.hasTag("ex.offscreen")}get draggable(){return this._draggable}set draggable(t){t&&(t&&!this._draggable?(this.events.on("pointerdragstart",this._pointerDragStartHandler),this.events.on("pointerdragend",this._pointerDragEndHandler),this.events.on("pointerdragmove",this._pointerDragMoveHandler),this.events.on("pointerdragleave",this._pointerDragLeaveHandler)):!t&&this._draggable&&(this.events.off("pointerdragstart",this._pointerDragStartHandler),this.events.off("pointerdragend",this._pointerDragEndHandler),this.events.off("pointerdragmove",this._pointerDragMoveHandler),this.events.off("pointerdragleave",this._pointerDragLeaveHandler)),this._draggable=t)}/**
     * Sets the color of the actor's current graphic
     */get color(){return this._color}set color(t){var e;this._color=t.clone();let i=this.graphics.layers.default,s=null===(e=i.graphics[0])||void 0===e?void 0:e.graphic;(s instanceof ig||s instanceof Text)&&(s.color=this._color)}// #endregion
/**
     *
     * @param config
     */constructor(t){super(),this.events=new tE,/**
         * The anchor to apply all actor related transformations like rotation,
         * translation, and scaling. By default the anchor is in the center of
         * the actor. By default it is set to the center of the actor (.5, .5)
         *
         * An anchor of (.5, .5) will ensure that drawings are centered.
         *
         * Use `anchor.setTo` to set the anchor to a different point using
         * values between 0 and 1. For example, anchoring to the top-left would be
         * `Actor.anchor.setTo(0, 0)` and top-right would be `Actor.anchor.setTo(0, 1)`.
         */this._anchor=ek(ep.Half,t=>this._handleAnchorChange(t)),/**
         * Convenience reference to the global logger
         */this.logger=t9.getInstance(),/**
         * Draggable helper
         */this._draggable=!1,this._dragging=!1,this._pointerDragStartHandler=()=>{this._dragging=!0},this._pointerDragEndHandler=()=>{this._dragging=!1},this._pointerDragMoveHandler=t=>{this._dragging&&(this.pos=t.worldPos)},this._pointerDragLeaveHandler=t=>{this._dragging&&(this.pos=t.worldPos)};let{name:e,x:i,y:s,pos:r,coordPlane:n,scale:o,width:a,height:h,radius:l,collider:A,vel:d,acc:c,rotation:u,angularVelocity:g,z:p,color:_,visible:f,anchor:m,collisionType:y,collisionGroup:C}={...t};this._setName(e),this.anchor=null!=m?m:sL.defaults.anchor.clone();let x=new iz;this.addComponent(x),this.pos=null!=r?r:e_(null!=i?i:0,null!=s?s:0),this.rotation=null!=u?u:0,this.scale=null!=o?o:e_(1,1),this.z=null!=p?p:0,x.coordPlane=null!=n?n:X.World,this.addComponent(new sc),this.addComponent(new sl({anchor:this.anchor})),this.addComponent(new iO),this.vel=null!=d?d:ep.Zero,this.acc=null!=c?c:ep.Zero,this.angularVelocity=null!=g?g:0,this.addComponent(new sk),this.addComponent(new i7),this.body.collisionType=null!=y?y:j.Passive,C&&(this.body.group=C),A?this.addComponent(new i9(A)):l?this.addComponent(new i9(i8.Circle(l))):a>0&&h>0?this.addComponent(new i9(i8.Box(a,h,this.anchor))):this.addComponent(new i9),this.graphics.visible=null==f||f,_&&(this.color=_,a&&h?this.graphics.add(new sA({color:_,width:a,height:h})):l&&this.graphics.add(new sd({color:_,radius:l})))}clone(){let t=new sL({color:this.color.clone(),anchor:this.anchor.clone()});t.clearComponents(),t.processComponentRemoval();// Clone the current actors components
let e=this.getComponents();for(let i of e)t.addComponent(i.clone(),!0);return t}/**
     * `onInitialize` is called before the first update of the actor. This method is meant to be
     * overridden. This is where initialization of child actors should take place.
     *
     * Synonymous with the event handler `.on('initialize', (evt) => {...})`
     */onInitialize(t){// Override me
}/**
     * Initializes this actor and all it's child actors, meant to be called by the Scene before first update not by users of Excalibur.
     *
     * It is not recommended that internal excalibur methods be overridden, do so at your own risk.
     *
     * @internal
     */_initialize(t){for(let e of(super._initialize(t),this.children))e._initialize(t)}emit(t,e){this.events.emit(t,e)}on(t,e){return this.events.on(t,e)}once(t,e){return this.events.once(t,e)}off(t,e){this.events.off(t,e)}// #endregion
/**
     * It is not recommended that internal excalibur methods be overridden, do so at your own risk.
     *
     * Internal _prekill handler for [[onPreKill]] lifecycle event
     * @internal
     */_prekill(t){this.events.emit("prekill",new tQ(this)),this.onPreKill(t)}/**
     * Safe to override onPreKill lifecycle event handler. Synonymous with `.on('prekill', (evt) =>{...})`
     *
     * `onPreKill` is called directly before an actor is killed and removed from its current [[Scene]].
     */onPreKill(t){// Override me
}/**
     * It is not recommended that internal excalibur methods be overridden, do so at your own risk.
     *
     * Internal _prekill handler for [[onPostKill]] lifecycle event
     * @internal
     */_postkill(t){this.events.emit("postkill",new tS(this)),this.onPostKill(t)}/**
     * Safe to override onPostKill lifecycle event handler. Synonymous with `.on('postkill', (evt) => {...})`
     *
     * `onPostKill` is called directly after an actor is killed and remove from its current [[Scene]].
     */onPostKill(t){// Override me
}/**
     * If the current actor is a member of the scene, this will remove
     * it from the scene graph. It will no longer be drawn or updated.
     */kill(){this.scene?(this._prekill(this.scene),this.events.emit("kill",new tb(this)),super.kill(),this._postkill(this.scene)):this.logger.warn(`Cannot kill actor named "${this.name}", it was never added to the Scene`)}/**
     * If the current actor is killed, it will now not be killed.
     */unkill(){this.active=!0}/**
     * Indicates wether the actor has been killed.
     */isKilled(){return!this.active}/**
     * Gets the z-index of an actor. The z-index determines the relative order an actor is drawn in.
     * Actors with a higher z-index are drawn on top of actors with a lower z-index
     */get z(){return this.get(iz).z}/**
     * Sets the z-index of an actor and updates it in the drawing list for the scene.
     * The z-index determines the relative order an actor is drawn in.
     * Actors with a higher z-index are drawn on top of actors with a lower z-index
     * @param newZ new z-index to assign
     */set z(t){this.get(iz).z=t}/**
     * Get the center point of an actor (global position)
     */get center(){let t=this.getGlobalPos();return new ep(t.x+this.width/2-this.anchor.x*this.width,t.y+this.height/2-this.anchor.y*this.height)}/**
     * Get the local center point of an actor
     */get localCenter(){return new ep(this.pos.x+this.width/2-this.anchor.x*this.width,this.pos.y+this.height/2-this.anchor.y*this.height)}get width(){return this.collider.localBounds.width*this.getGlobalScale().x}get height(){return this.collider.localBounds.height*this.getGlobalScale().y}/**
     * Gets this actor's rotation taking into account any parent relationships
     *
     * @returns Rotation angle in radians
     */getGlobalRotation(){return this.get(iz).globalRotation}/**
     * Gets an actor's world position taking into account parent relationships, scaling, rotation, and translation
     *
     * @returns Position in world coordinates
     */getGlobalPos(){return this.get(iz).globalPos}/**
     * Gets the global scale of the Actor
     */getGlobalScale(){return this.get(iz).globalScale}// #region Collision
/**
     * Tests whether the x/y specified are contained in the actor
     * @param x  X coordinate to test (in world coordinates)
     * @param y  Y coordinate to test (in world coordinates)
     * @param recurse checks whether the x/y are contained in any child actors (if they exist).
     */contains(t,e,i=!1){let s=e_(t,e),r=this.get(i9);r.update();let n=r.get();if(!n)return!1;let o=n.contains(s);return i?o||this.children.some(i=>i.contains(t,e,!0)):o}/**
     * Returns true if the two actor.collider's surfaces are less than or equal to the distance specified from each other
     * @param actor     Actor to test
     * @param distance  Distance in pixels to test
     */within(t,e){let i=this.get(i9),s=t.get(i9),r=i.get(),n=s.get();return!!r&&!!n&&r.getClosestLineBetween(n).getLength()<=e}// #endregion
// #region Update
/**
     * Called by the Engine, updates the state of the actor
     * @internal
     * @param engine The reference to the current game engine
     * @param delta  The time elapsed since the last update in milliseconds
     */update(t,e){this._initialize(t),this._preupdate(t,e),this._postupdate(t,e)}/**
     * Safe to override onPreUpdate lifecycle event handler. Synonymous with `.on('preupdate', (evt) =>{...})`
     *
     * `onPreUpdate` is called directly before an actor is updated.
     */onPreUpdate(t,e){// Override me
}/**
     * Safe to override onPostUpdate lifecycle event handler. Synonymous with `.on('postupdate', (evt) =>{...})`
     *
     * `onPostUpdate` is called directly after an actor is updated.
     */onPostUpdate(t,e){// Override me
}/**
     * It is not recommended that internal excalibur methods be overridden, do so at your own risk.
     *
     * Internal _preupdate handler for [[onPreUpdate]] lifecycle event
     * @internal
     */_preupdate(t,e){this.events.emit("preupdate",new tM(t,e,this)),this.onPreUpdate(t,e)}/**
     * It is not recommended that internal excalibur methods be overridden, do so at your own risk.
     *
     * Internal _preupdate handler for [[onPostUpdate]] lifecycle event
     * @internal
     */_postupdate(t,e){this.events.emit("postupdate",new tL(t,e,this)),this.onPostUpdate(t,e)}}/**
 * Type guard to detect a screen element
 */function sN(t){return t instanceof sU}// #region Properties
/**
 * Set defaults for all Actors
 */sL.defaults={anchor:ep.Half};/**
 * Helper [[Actor]] primitive for drawing UI's, optimized for UI drawing. Does
 * not participate in collisions. Drawn on top of all other actors.
 */class sU extends sL{constructor(t){var e,i;super({...t}),this.get(iz).coordPlane=X.Screen,this.anchor=null!==(e=null==t?void 0:t.anchor)&&void 0!==e?e:e_(0,0),this.body.collisionType=null!==(i=null==t?void 0:t.collisionType)&&void 0!==i?i:j.PreventCollision,this.pointer.useGraphicsBounds=!0,this.pointer.useColliderShape=!1,!(null==t?void 0:t.collider)&&(null==t?void 0:t.width)>0&&(null==t?void 0:t.height)>0&&this.collider.useBoxCollider(this.width,this.height,this.anchor)}_initialize(t){this._engine=t,super._initialize(t)}contains(t,e,i=!0){if(i)return super.contains(t,e);let s=this._engine.worldToScreenCoordinates(new ep(t,e));return super.contains(s.x,s.y)}}/**
 * The Excalibur timer hooks into the internal timer and fires callbacks,
 * after a certain interval, optionally repeating.
 */class sG{get complete(){return this._complete}constructor(t,e,i,s,r,n){if(this._logger=t9.getInstance(),this.id=0,this._elapsedTime=0,this._totalTimeAlive=0,this._running=!1,this._numberOfTicks=0,this.interval=10,this.repeats=!1,this.maxNumberOfRepeats=-1,this.randomRange=[0,0],this._baseInterval=10,this._generateRandomInterval=()=>this._baseInterval+this.random.integer(this.randomRange[0],this.randomRange[1]),this._complete=!1,this.scene=null,"function"!=typeof t){let o=t;t=o.fcn,e=o.interval,i=o.repeats,s=o.numberOfRepeats,r=o.randomRange,n=o.random}if(s&&s>=0&&(this.maxNumberOfRepeats=s,!i))throw Error("repeats must be set to true if numberOfRepeats is set");if(this.id=sG._MAX_ID++,this._callbacks=[],this._baseInterval=this.interval=e,r){if(r[0]>r[1])throw Error("min value must be lower than max value for range");//We use the instance of ex.Random to generate the range
this.random=null!=n?n:new er,this.randomRange=r,this.interval=this._generateRandomInterval(),this.on(()=>{this.interval=this._generateRandomInterval()})}this.repeats=i||this.repeats,t&&this.on(t)}/**
     * Adds a new callback to be fired after the interval is complete
     * @param fcn The callback to be added to the callback list, to be fired after the interval is complete.
     */on(t){this._callbacks.push(t)}/**
     * Removes a callback from the callback list to be fired after the interval is complete.
     * @param fcn The callback to be removed from the callback list, to be fired after the interval is complete.
     */off(t){let e=this._callbacks.indexOf(t);this._callbacks.splice(e,1)}/**
     * Updates the timer after a certain number of milliseconds have elapsed. This is used internally by the engine.
     * @param delta  Number of elapsed milliseconds since the last update.
     */update(t){this._running&&(this._totalTimeAlive+=t,this._elapsedTime+=t,this.maxNumberOfRepeats>-1&&this._numberOfTicks>=this.maxNumberOfRepeats&&(this._complete=!0,this._running=!1,this._elapsedTime=0),!this.complete&&this._elapsedTime>=this.interval&&(this._callbacks.forEach(t=>{t.call(this)}),this._numberOfTicks++,this.repeats||(this._complete=!0,this._running=!1),this._elapsedTime=0))}/**
     * Resets the timer so that it can be reused, and optionally reconfigure the timers interval.
     *
     * Warning** you may need to call `timer.start()` again if the timer had completed
     * @param newInterval If specified, sets a new non-negative interval in milliseconds to refire the callback
     * @param newNumberOfRepeats If specified, sets a new non-negative upper limit to the number of time this timer executes
     */reset(t,e){if(t&&t>=0&&(this._baseInterval=this.interval=t),this.maxNumberOfRepeats&&this.maxNumberOfRepeats>=0&&(this.maxNumberOfRepeats=e,!this.repeats))throw Error("repeats must be set to true if numberOfRepeats is set");this._complete=!1,this._elapsedTime=0,this._numberOfTicks=0}get timesRepeated(){return this._numberOfTicks}getTimeRunning(){return this._totalTimeAlive}/**
     * @returns milliseconds until the next action callback, if complete will return 0
     */get timeToNextAction(){return this.complete?0:this.interval-this._elapsedTime}/**
     * @returns milliseconds elapsed toward the next action
     */get timeElapsedTowardNextAction(){return this._elapsedTime}get isRunning(){return this._running}/**
     * Pauses the timer, time will no longer increment towards the next call
     */pause(){return this._running=!1,this}/**
     * Resumes the timer, time will now increment towards the next call.
     */resume(){return this._running=!0,this}/**
     * Starts the timer, if the timer was complete it will restart the timer and reset the elapsed time counter
     */start(){return this.scene||this._logger.warn("Cannot start a timer not part of a scene, timer wont start until added"),this._running=!0,this.complete&&(this._complete=!1,this._elapsedTime=0,this._numberOfTicks=0),this}/**
     * Stops the timer and resets the elapsed time counter towards the next action invocation
     */stop(){return this._running=!1,this._elapsedTime=0,this._numberOfTicks=0,this}/**
     * Cancels the timer, preventing any further executions.
     */cancel(){this.pause(),this.scene&&this.scene.cancelTimer(this)}}sG._MAX_ID=0;class sz extends iN{constructor(t){super(),this.type="ex.parallax",this.parallaxFactor=e_(1,1),this.parallaxFactor=null!=t?t:this.parallaxFactor}}/**
 * Provide arbitrary drawing for the purposes of debugging your game
 *
 * Will only show when the Engine is set to debug mode [[Engine.showDebug]] or [[Engine.toggleDebug]]
 *
 */class sO extends iN{constructor(t,e=!0){super(),this.draw=t,this.useTransform=e,this.type="ex.debuggraphics"}}let sH={PreUpdate:"preupdate",PostUpdate:"postupdate",PreDraw:"predraw",PostDraw:"postdraw"};/**
 * The TileMap provides a mechanism for doing flat 2D tiles rendered in a grid.
 *
 * TileMaps are useful for top down or side scrolling grid oriented games.
 */class sq extends sn{flagCollidersDirty(){this._collidersDirty=!0}flagTilesDirty(){for(let t=0;t<this.tiles.length;t++)this.tiles[t]&&this.tiles[t].flagDirty()}get x(){var t;return null!==(t=this._transform.pos.x)&&void 0!==t?t:0}set x(t){var e;(null===(e=this._transform)||void 0===e?void 0:e.pos)&&(this.get(iz).pos=e_(t,this.y))}get y(){var t,e;return null!==(e=null===(t=this._transform)||void 0===t?void 0:t.pos.y)&&void 0!==e?e:0}set y(t){var e;(null===(e=this._transform)||void 0===e?void 0:e.pos)&&(this._transform.pos=e_(this.x,t))}get z(){var t;return null!==(t=this._transform.z)&&void 0!==t?t:0}set z(t){this._transform&&(this._transform.z=t)}get rotation(){var t,e;return null!==(e=null===(t=this._transform)||void 0===t?void 0:t.rotation)&&void 0!==e?e:0}set rotation(t){var e;(null===(e=this._transform)||void 0===e?void 0:e.rotation)&&(this._transform.rotation=t)}get scale(){var t,e;return null!==(e=null===(t=this._transform)||void 0===t?void 0:t.scale)&&void 0!==e?e:ep.One}set scale(t){var e;(null===(e=this._transform)||void 0===e?void 0:e.scale)&&(this._transform.scale=t)}get pos(){return this._transform.pos}set pos(t){this._transform.pos=t}get vel(){return this._motion.vel}set vel(t){this._motion.vel=t}emit(t,e){this.events.emit(t,e)}on(t,e){return this.events.on(t,e)}once(t,e){return this.events.once(t,e)}off(t,e){this.events.off(t,e)}/**
     * @param options
     */constructor(t){var e,i;super(null,t.name),this.events=new tE,this._token=0,this.logger=t9.getInstance(),this.tiles=[],this._rows=[],this._cols=[],this.renderFromTopOfGraphic=!1,this._collidersDirty=!0,this._originalOffsets=new WeakMap,this.addComponent(new iz),this.addComponent(new iO),this.addComponent(new i7({type:j.Fixed})),this.addComponent(new sl({onPostDraw:(t,e)=>this.draw(t,e)})),this.addComponent(new sO(t=>this.debug(t))),this.addComponent(new i9),this._graphics=this.get(sl),this._transform=this.get(iz),this._motion=this.get(iO),this._collider=this.get(i9),this._composite=this._collider.useCompositeCollider([]),this._transform.pos=null!==(e=t.pos)&&void 0!==e?e:ep.Zero,this._oldPos=this._transform.pos.clone(),this._oldScale=this._transform.scale.clone(),this.renderFromTopOfGraphic=null!==(i=t.renderFromTopOfGraphic)&&void 0!==i?i:this.renderFromTopOfGraphic,this.tileWidth=t.tileWidth,this.tileHeight=t.tileHeight,this.rows=t.rows,this.columns=t.columns,this.tiles=Array(this.rows*this.columns),this._rows=Array(this.rows),this._cols=Array(this.columns);let s=[];for(let t=0;t<this.columns;t++){for(let e=0;e<this.rows;e++){let i=new sV({x:t,y:e,map:this});i.map=this,this.tiles[t+e*this.columns]=i,s.push(i),this._rows[e]||(this._rows[e]=[]),this._rows[e].push(i)}this._cols[t]=s,s=[]}this._graphics.localBounds=new ey({left:0,top:0,right:this.columns*this.tileWidth*this.scale.x,bottom:this.rows*this.tileHeight*this.scale.y})}_initialize(t){super._initialize(t),this._engine=t}_getOrSetColliderOriginalOffset(t){if(this._originalOffsets.has(t))return this._originalOffsets.get(t);{let e=t.offset;return this._originalOffsets.set(t,e),e}}/**
     * Tiles colliders based on the solid tiles in the tilemap.
     */_updateColliders(){let t;this._collider.$colliderRemoved.notifyAll(this._composite),this._composite.clearColliders();let e=[];this._composite=this._collider.useCompositeCollider([]);// Bad square tesselation algo
for(let i=0;i<this.columns;i++){// Scan column for colliders
for(let s=0;s<this.rows;s++){// Columns start with a new collider
0===s&&(t=null);let r=this.tiles[i+s*this.columns];// Current tile in column is solid build up current collider
if(r.solid){// Use custom collider otherwise bounding box
if(r.getColliders().length>0){// tile with custom collider interrupting the current run
for(let t of r.getColliders()){let e=this._getOrSetColliderOriginalOffset(t);t.offset=e_(r.x*this.tileWidth*this.scale.x,r.y*this.tileHeight*this.scale.y).add(e),t.owner=this,this._composite.addCollider(t)}t&&e.push(t),t=null}else t=t?t.combine(r.bounds):r.bounds}else t&&e.push(t),t=null}// After a column is complete check to see if it can be merged into the last one
if(t){// if previous is the same combine it
let i=e[e.length-1];i&&i.top===t.top&&i.bottom===t.bottom?e[e.length-1]=i.combine(t):e.push(t)}}for(let t of e){let e=i8.Box(t.width,t.height,ep.Zero,e_(t.left-this.pos.x,t.top-this.pos.y));e.owner=this,this._composite.addCollider(e)}this._collider.update(),// Notify that colliders have been updated
this._collider.$colliderAdded.notifyAll(this._composite)}/**
     * Returns the [[Tile]] by index (row major order)
     */getTileByIndex(t){return this.tiles[t]}/**
     * Returns the [[Tile]] by its x and y integer coordinates
     */getTile(t,e){return t<0||e<0||t>=this.columns||e>=this.rows?null:this.tiles[t+e*this.columns]}/**
     * Returns the [[Tile]] by testing a point in world coordinates,
     * returns `null` if no Tile was found.
     */getTileByPoint(t){let e=Math.floor((t.x-this.pos.x)/(this.tileWidth*this.scale.x)),i=Math.floor((t.y-this.pos.y)/(this.tileHeight*this.scale.y)),s=this.getTile(e,i);return e>=0&&i>=0&&e<this.columns&&i<this.rows&&s?s:null}getRows(){return this._rows}getColumns(){return this._cols}update(t,e){this.onPreUpdate(t,e),this.emit("preupdate",new tM(t,e,this)),this._oldPos.equals(this.pos)&&this._oldScale.equals(this.scale)||(this.flagCollidersDirty(),this.flagTilesDirty()),this._collidersDirty&&(this._collidersDirty=!1,this._updateColliders()),this._token++,this.pos.clone(this._oldPos),this.scale.clone(this._oldScale),this._transform.pos=this.pos,this.onPostUpdate(t,e),this.emit("postupdate",new tL(t,e,this))}/**
     * Draws the tile map to the screen. Called by the [[Scene]].
     * @param ctx ExcaliburGraphicsContext
     * @param delta  The number of milliseconds since the last draw
     */draw(t,e){let i,s,r,n;this.emit("predraw",new tF(t,e,this));// TODO fix event
let o=this._engine.screen.getWorldBounds(),a=0,h=this.columns,l=0,A=this.rows,d=this.get(sz);if(d){let t=this.pos,e=ep.One.sub(d.parallaxFactor),i=this._engine.currentScene.camera.pos.scale(e);t=t.sub(i),// adjust world bounds by parallax factor
o=o.translate(t)}for(;a<h;a++){for(;l<A;l++)// fixme: This has a large perf impact, we iterate over every tile in the tilemap
// this probably requires a spatial data structure to do more efficiently
if(n=this.getTile(a,l),o.overlaps(n.bounds))for(s=0,r=// get non-negative tile sprites
(i=this.getTile(a,l).getGraphics()).length;s<r;s++){// draw sprite, warning if sprite doesn't exist
let r=i[s];if(r){so(r)&&(null==r||r.tick(e,this._token));let i=this.renderFromTopOfGraphic?0:r.height-this.tileHeight;r.draw(t,a*this.tileWidth,l*this.tileHeight-i)}}l=0}this.emit("postdraw",new tk(t,e,this))}debug(t){let e=this.tileWidth*this.columns,i=this.tileHeight*this.rows,s=ep.Zero;for(let i=0;i<this.rows+1;i++){let r=e_(0,i*this.tileHeight);t.drawLine(s.add(r),s.add(e_(e,r.y)),ef.Red,2)}for(let e=0;e<this.columns+1;e++){let r=e_(e*this.tileWidth,0);t.drawLine(s.add(r),s.add(e_(r.x,i)),ef.Red,2)}let r=this._composite.getColliders();for(let e of r){let i=ef.Gray;i.a=.5;let s=e.localBounds,r=e.worldPos.sub(this.pos);t.drawRectangle(r,s.width,s.height,i)}}}/**
 * TileMap Tile
 *
 * A light-weight object that occupies a space in a collision map. Generally
 * created by a [[TileMap]].
 *
 * Tiles can draw multiple sprites. Note that the order of drawing is the order
 * of the sprites in the array so the last one will be drawn on top. You can
 * use transparency to create layers this way.
 */class sV extends sn{// private _transform: TransformComponent;
/**
     * Return the world position of the top left corner of the tile
     */get pos(){return this._posDirty&&(this._recalculate(),this._posDirty=!1),this._pos}/**
     * Width of the tile in pixels
     */get width(){return this._width}/**
     * Height of the tile in pixels
     */get height(){return this._height}/**
     * Wether this tile should be treated as solid by the tilemap
     */get solid(){return this._solid}/**
     * Wether this tile should be treated as solid by the tilemap
     */set solid(t){var e;null===(e=this.map)||void 0===e||e.flagCollidersDirty(),this._solid=t}/**
     * Current list of graphics for this tile
     */getGraphics(){return this._graphics}/**
     * Add another [[Graphic]] to this TileMap tile
     * @param graphic
     */addGraphic(t){this._graphics.push(t)}/**
     * Remove an instance of a [[Graphic]] from this tile
     */removeGraphic(t){eI(t,this._graphics)}/**
     * Clear all graphics from this tile
     */clearGraphics(){this._graphics.length=0}/**
     * Returns the list of colliders
     */getColliders(){return this._colliders}/**
     * Adds a custom collider to the [[Tile]] to use instead of it's bounds
     *
     * If no collider is set but [[Tile.solid]] is set, the tile bounds are used as a collider.
     *
     * **Note!** the [[Tile.solid]] must be set to true for it to act as a "fixed" collider
     * @param collider
     */addCollider(t){this._colliders.push(t),this.map.flagCollidersDirty()}/**
     * Removes a collider from the [[Tile]]
     * @param collider
     */removeCollider(t){let e=this._colliders.indexOf(t);e>-1&&this._colliders.splice(e,1),this.map.flagCollidersDirty()}/**
     * Clears all colliders from the [[Tile]]
     */clearColliders(){this._colliders.length=0,this.map.flagCollidersDirty()}constructor(t){var e,i;super(),this._posDirty=!1,this._solid=!1,this._graphics=[],/**
         * Current list of colliders for this tile
         */this._colliders=[],/**
         * Arbitrary data storage per tile, useful for any game specific data
         */this.data=new Map,this.x=t.x,this.y=t.y,this.map=t.map,this._width=t.map.tileWidth*this.map.scale.x,this._height=t.map.tileHeight*this.map.scale.y,this.solid=null!==(e=t.solid)&&void 0!==e?e:this.solid,this._graphics=null!==(i=t.graphics)&&void 0!==i?i:[],this._recalculate()}flagDirty(){return this._posDirty=!0}_recalculate(){this._width=this.map.tileWidth*this.map.scale.x,this._height=this.map.tileHeight*this.map.scale.y,this._pos=this.map.pos.add(e_(this.x*this._width,this.y*this._height)),this._bounds=new ey(this._pos.x,this._pos.y,this._pos.x+this._width,this._pos.y+this._height),this._posDirty=!1}/**
     * Tile bounds in world space
     */get bounds(){return this._posDirty&&this._recalculate(),this._bounds}/**
     * Tile position in world space
     */get center(){return this._posDirty&&this._recalculate(),new ep(this._pos.x+this._width/2,this._pos.y+this._height/2)}}/**
 * Container to house convenience strategy methods
 * @internal
 */class sY{constructor(t){this.camera=t}/**
     * Creates and adds the [[LockCameraToActorStrategy]] on the current camera.
     * @param actor The actor to lock the camera to
     */lockToActor(t){this.camera.addStrategy(new sj(t))}/**
     * Creates and adds the [[LockCameraToActorAxisStrategy]] on the current camera
     * @param actor The actor to lock the camera to
     * @param axis The axis to follow the actor on
     */lockToActorAxis(t,e){this.camera.addStrategy(new sK(t,e))}/**
     * Creates and adds the [[ElasticToActorStrategy]] on the current camera
     * If cameraElasticity < cameraFriction < 1.0, the behavior will be a dampened spring that will slowly end at the target without bouncing
     * If cameraFriction < cameraElasticity < 1.0, the behavior will be an oscillating spring that will over
     * correct and bounce around the target
     *
     * @param actor Target actor to elastically follow
     * @param cameraElasticity [0 - 1.0] The higher the elasticity the more force that will drive the camera towards the target
     * @param cameraFriction [0 - 1.0] The higher the friction the more that the camera will resist motion towards the target
     */elasticToActor(t,e,i){this.camera.addStrategy(new sW(t,e,i))}/**
     * Creates and adds the [[RadiusAroundActorStrategy]] on the current camera
     * @param actor Target actor to follow when it is "radius" pixels away
     * @param radius Number of pixels away before the camera will follow
     */radiusAroundActor(t,e){this.camera.addStrategy(new sJ(t,e))}/**
     * Creates and adds the [[LimitCameraBoundsStrategy]] on the current camera
     * @param box The bounding box to limit the camera to.
     */limitCameraBounds(t){this.camera.addStrategy(new sX(t))}}(E=tn||(tn={}))[E.X=0]="X",E[E.Y=1]="Y";/**
 * Lock a camera to the exact x/y position of an actor.
 */class sj{constructor(t){this.target=t,this.action=(t,e,i,s)=>{let r=t.center;return r}}}/**
 * Lock a camera to a specific axis around an actor.
 */class sK{constructor(t,e){this.target=t,this.axis=e,this.action=(t,e,i,s)=>{let r=t.center,n=e.getFocus();return this.axis===tn.X?new ep(r.x,n.y):new ep(n.x,r.y)}}}/**
 * Using [Hook's law](https://en.wikipedia.org/wiki/Hooke's_law), elastically move the camera towards the target actor.
 */class sW{/**
     * If cameraElasticity < cameraFriction < 1.0, the behavior will be a dampened spring that will slowly end at the target without bouncing
     * If cameraFriction < cameraElasticity < 1.0, the behavior will be an oscillating spring that will over
     * correct and bounce around the target
     *
     * @param target Target actor to elastically follow
     * @param cameraElasticity [0 - 1.0] The higher the elasticity the more force that will drive the camera towards the target
     * @param cameraFriction [0 - 1.0] The higher the friction the more that the camera will resist motion towards the target
     */constructor(t,e,i){this.target=t,this.cameraElasticity=e,this.cameraFriction=i,this.action=(t,e,i,s)=>{let r=t.center,n=e.getFocus(),o=e.vel.clone(),a=r.sub(n).scale(this.cameraElasticity);o=o.add(a);// Calculate the friction (-1 to apply a force in the opposition of motion)
// Apply to the current camera velocity
let h=o.scale(-1).scale(this.cameraFriction);return o=o.add(h),// Update position by velocity deltas
n=n.add(o)}}}class sJ{/**
     *
     * @param target Target actor to follow when it is "radius" pixels away
     * @param radius Number of pixels away before the camera will follow
     */constructor(t,e){this.target=t,this.radius=e,this.action=(t,e,i,s)=>{let r=t.center,n=e.getFocus(),o=r.sub(n),a=o.size;if(a>=this.radius){let t=a-this.radius;return n.add(o.normalize().scale(t))}return n}}}/**
 * Prevent a camera from going beyond the given camera dimensions.
 */class sX{constructor(t){this.target=t,/**
         * Useful for limiting the camera to a [[TileMap]]'s dimensions, or a specific area inside the map.
         *
         * Note that this strategy does not perform any movement by itself.
         * It only sets the camera position to within the given bounds when the camera has gone beyond them.
         * Thus, it is a good idea to combine it with other camera strategies and set this strategy as the last one.
         *
         * Make sure that the camera bounds are at least as large as the viewport size.
         *
         * @param target The bounding box to limit the camera to
         */this.boundSizeChecked=!1,this.action=(t,e,i,s)=>{let r=e.getFocus();this.boundSizeChecked||((t.bottom-t.top<i.drawHeight||t.right-t.left<i.drawWidth)&&t9.getInstance().warn("Camera bounds should not be smaller than the engine viewport"),this.boundSizeChecked=!0);let n=r.x,o=r.y;return r.x<t.left+i.halfDrawWidth?n=t.left+i.halfDrawWidth:r.x>t.right-i.halfDrawWidth&&(n=t.right-i.halfDrawWidth),r.y<t.top+i.halfDrawHeight?o=t.top+i.halfDrawHeight:r.y>t.bottom-i.halfDrawHeight&&(o=t.bottom-i.halfDrawHeight),e_(n,o)}}}let sZ={Initialize:"initialize",PreUpdate:"preupdate",PostUpdate:"postupdate"};/**
 * Cameras
 *
 * [[Camera]] is the base class for all Excalibur cameras. Cameras are used
 * to move around your game and set focus. They are used to determine
 * what is "off screen" and can be used to scale the game.
 *
 */class s${constructor(){this.events=new tE,this.transform=eQ.identity(),this.inverse=eQ.identity(),this._cameraStrategies=[],this.strategy=new sY(this),/**
         * Get or set current zoom of the camera, defaults to 1
         */this._z=1,/**
         * Get or set rate of change in zoom, defaults to 0
         */this.dz=0,/**
         * Get or set zoom acceleration
         */this.az=0,/**
         * Current rotation of the camera
         */this.rotation=0,this._angularVelocity=0,/**
         * Get or set the camera's position
         */this._posChanged=!1,this._pos=eP(ep.Zero,()=>this._posChanged=!0),/**
         * Get or set the camera's velocity
         */this.vel=ep.Zero,/**
         * Get or set the camera's acceleration
         */this.acc=ep.Zero,this._cameraMoving=!1,this._currentLerpTime=0,this._lerpDuration=1e3,this._lerpStart=null,this._lerpEnd=null,//camera effects
this._isShaking=!1,this._shakeMagnitudeX=0,this._shakeMagnitudeY=0,this._shakeDuration=0,this._elapsedShakeTime=0,this._xShake=0,this._yShake=0,this._isZooming=!1,this._zoomStart=1,this._zoomEnd=1,this._currentZoomTime=0,this._zoomDuration=0,this._zoomEasing=su.EaseInOutCubic,this._easing=su.EaseInOutCubic,this._halfWidth=0,this._halfHeight=0,this._viewport=null,this._isInitialized=!1}get zoom(){return this._z}set zoom(t){this._z=t,this._engine&&(this._halfWidth=this._engine.halfDrawWidth,this._halfHeight=this._engine.halfDrawHeight)}/**
     * Get or set the camera's angular velocity
     */get angularVelocity(){return this._angularVelocity}set angularVelocity(t){this._angularVelocity=t}get pos(){return this._pos}set pos(t){this._pos=eP(t,()=>this._posChanged=!0),this._posChanged=!0}/**
     * Get the camera's x position
     */get x(){return this.pos.x}/**
     * Set the camera's x position (cannot be set when following an [[Actor]] or when moving)
     */set x(t){this._follow||this._cameraMoving||(this.pos=e_(t,this.pos.y))}/**
     * Get the camera's y position
     */get y(){return this.pos.y}/**
     * Set the camera's y position (cannot be set when following an [[Actor]] or when moving)
     */set y(t){this._follow||this._cameraMoving||(this.pos=e_(this.pos.x,t))}/**
     * Get or set the camera's x velocity
     */get dx(){return this.vel.x}set dx(t){this.vel=e_(t,this.vel.y)}/**
     * Get or set the camera's y velocity
     */get dy(){return this.vel.y}set dy(t){this.vel=e_(this.vel.x,t)}/**
     * Get or set the camera's x acceleration
     */get ax(){return this.acc.x}set ax(t){this.acc=e_(t,this.acc.y)}/**
     * Get or set the camera's y acceleration
     */get ay(){return this.acc.y}set ay(t){this.acc=e_(this.acc.x,t)}/**
     * Returns the focal point of the camera, a new point giving the x and y position of the camera
     */getFocus(){return this.pos}/**
     * This moves the camera focal point to the specified position using specified easing function. Cannot move when following an Actor.
     *
     * @param pos The target position to move to
     * @param duration The duration in milliseconds the move should last
     * @param [easingFn] An optional easing function ([[ex.EasingFunctions.EaseInOutCubic]] by default)
     * @returns A [[Promise]] that resolves when movement is finished, including if it's interrupted.
     *          The [[Promise]] value is the [[Vector]] of the target position. It will be rejected if a move cannot be made.
     */move(t,e,i=su.EaseInOutCubic){if("function"!=typeof i)throw"Please specify an EasingFunction";return(// cannot move when following an actor
this._follow?Promise.reject(t):(this._lerpPromise&&this._lerpResolve&&this._lerpResolve(t),this._lerpPromise=new Promise(t=>{this._lerpResolve=t}),this._lerpStart=this.getFocus().clone(),this._lerpDuration=e,this._lerpEnd=t,this._currentLerpTime=0,this._cameraMoving=!0,this._easing=i,this._lerpPromise))}/**
     * Sets the camera to shake at the specified magnitudes for the specified duration
     * @param magnitudeX  The x magnitude of the shake
     * @param magnitudeY  The y magnitude of the shake
     * @param duration    The duration of the shake in milliseconds
     */shake(t,e,i){this._isShaking=!0,this._shakeMagnitudeX=t,this._shakeMagnitudeY=e,this._shakeDuration=i}/**
     * Zooms the camera in or out by the specified scale over the specified duration.
     * If no duration is specified, it take effect immediately.
     * @param scale    The scale of the zoom
     * @param duration The duration of the zoom in milliseconds
     */zoomOverTime(t,e=0,i=su.EaseInOutCubic){return(this._zoomPromise=new Promise(t=>{this._zoomResolve=t}),e)?(this._isZooming=!0,this._zoomEasing=i,this._currentZoomTime=0,this._zoomDuration=e,this._zoomStart=this.zoom,this._zoomEnd=t,this._zoomPromise):(this._isZooming=!1,this.zoom=t,Promise.resolve(!0))}/**
     * Gets the bounding box of the viewport of this camera in world coordinates
     */get viewport(){return this._viewport?this._viewport:new ey(0,0,0,0)}/**
     * Adds a new camera strategy to this camera
     * @param cameraStrategy Instance of an [[CameraStrategy]]
     */addStrategy(t){this._cameraStrategies.push(t)}/**
     * Removes a camera strategy by reference
     * @param cameraStrategy Instance of an [[CameraStrategy]]
     */removeStrategy(t){eI(t,this._cameraStrategies)}/**
     * Clears all camera strategies from the camera
     */clearAllStrategies(){this._cameraStrategies.length=0}/**
     * It is not recommended that internal excalibur methods be overridden, do so at your own risk.
     *
     * Internal _preupdate handler for [[onPreUpdate]] lifecycle event
     * @internal
     */_preupdate(t,e){this.events.emit("preupdate",new tM(t,e,this)),this.onPreUpdate(t,e)}/**
     * Safe to override onPreUpdate lifecycle event handler. Synonymous with `.on('preupdate', (evt) =>{...})`
     *
     * `onPreUpdate` is called directly before a scene is updated.
     */onPreUpdate(t,e){// Overridable
}/**
     *  It is not recommended that internal excalibur methods be overridden, do so at your own risk.
     *
     * Internal _preupdate handler for [[onPostUpdate]] lifecycle event
     * @internal
     */_postupdate(t,e){this.events.emit("postupdate",new tL(t,e,this)),this.onPostUpdate(t,e)}/**
     * Safe to override onPostUpdate lifecycle event handler. Synonymous with `.on('preupdate', (evt) =>{...})`
     *
     * `onPostUpdate` is called directly after a scene is updated.
     */onPostUpdate(t,e){// Overridable
}get isInitialized(){return this._isInitialized}_initialize(t){if(!this.isInitialized){this._engine=t,this._screen=t.screen;let e=this._screen.contentArea,i=e_(e.width/2,e.height/2);if(!this._engine.loadingComplete){// If there was a loading screen, we peek the configured resolution
let t=this._screen.peekResolution();t&&(i=e_(t.width/2,t.height/2))}this._halfWidth=i.x,this._halfHeight=i.y,this._posChanged||(this.pos=i),// First frame bootstrap
// Ensure camera tx is correct
// Run update twice to ensure properties are init'd
this.updateTransform(),// Run strategies for first frame
this.runStrategies(t,t.clock.elapsed()),// Setup the first frame viewport
this.updateViewport(),// It's important to update the camera after strategies
// This prevents jitter
this.updateTransform(),this.onInitialize(t),this.events.emit("initialize",new t0(t,this)),this._isInitialized=!0}}/**
     * Safe to override onPostUpdate lifecycle event handler. Synonymous with `.on('preupdate', (evt) =>{...})`
     *
     * `onPostUpdate` is called directly after a scene is updated.
     */onInitialize(t){// Overridable
}emit(t,e){this.events.emit(t,e)}on(t,e){return this.events.on(t,e)}once(t,e){return this.events.once(t,e)}off(t,e){this.events.off(t,e)}runStrategies(t,e){for(let i of this._cameraStrategies)this.pos=i.action.call(i,i.target,this,t,e)}updateViewport(){// recalc viewport
this._viewport=new ey(this.x-this._halfWidth,this.y-this._halfHeight,this.x+this._halfWidth,this.y+this._halfHeight)}update(t,e){if(this._initialize(t),this._preupdate(t,e),// Update placements based on linear algebra
this.pos=this.pos.add(this.vel.scale(e/1e3)),this.zoom+=this.dz*e/1e3,this.vel=this.vel.add(this.acc.scale(e/1e3)),this.dz+=this.az*e/1e3,this.rotation+=this.angularVelocity*e/1e3,this._isZooming){if(this._currentZoomTime<this._zoomDuration){let t=this._zoomEasing,i=t(this._currentZoomTime,this._zoomStart,this._zoomEnd,this._zoomDuration);this.zoom=i,this._currentZoomTime+=e}else this._isZooming=!1,this.zoom=this._zoomEnd,this._currentZoomTime=0,this._zoomResolve(!0)}if(this._cameraMoving){if(this._currentLerpTime<this._lerpDuration){let t=su.CreateVectorEasingFunction(this._easing),i=t(this._currentLerpTime,this._lerpStart,this._lerpEnd,this._lerpDuration);this.pos=i,this._currentLerpTime+=e}else{this.pos=this._lerpEnd;let t=this._lerpEnd.clone();this._lerpStart=null,this._lerpEnd=null,this._currentLerpTime=0,this._cameraMoving=!1,// Order matters here, resolve should be last so any chain promises have a clean slate
this._lerpResolve(t)}}this._isDoneShaking()?(this._isShaking=!1,this._elapsedShakeTime=0,this._shakeMagnitudeX=0,this._shakeMagnitudeY=0,this._shakeDuration=0,this._xShake=0,this._yShake=0):(this._elapsedShakeTime+=e,this._xShake=(Math.random()*this._shakeMagnitudeX|0)+1,this._yShake=(Math.random()*this._shakeMagnitudeY|0)+1),this.runStrategies(t,e),this.updateViewport(),// It's important to update the camera after strategies
// This prevents jitter
this.updateTransform(),this._postupdate(t,e)}/**
     * Applies the relevant transformations to the game canvas to "move" or apply effects to the Camera
     * @param ctx Canvas context to apply transformations
     */draw(t){t.multiply(this.transform)}updateTransform(){// center the camera
let t=this._screen.resolution.width/this.zoom,e=this._screen.resolution.height/this.zoom,i=e_(-this.x+t/2+this._xShake,-this.y+e/2+this._yShake);// Calculate camera transform
this.transform.reset(),this.transform.scale(this.zoom,this.zoom),// rotate about the focus
this.transform.translate(t/2,e/2),this.transform.rotate(this.rotation),this.transform.translate(-t/2,-e/2),this.transform.translate(i.x,i.y),this.transform.inverse(this.inverse)}_isDoneShaking(){return!this._isShaking||this._elapsedShakeTime>=this._shakeDuration}}let s0={ExitTrigger:"exittrigger",EnterTrigger:"entertrigger"},s1={pos:ep.Zero,width:10,height:10,visible:!1,action:()=>{},filter:()=>!0,repeat:-1};/**
 * Triggers are a method of firing arbitrary code on collision. These are useful
 * as 'buttons', 'switches', or to trigger effects in a game. By default triggers
 * are invisible, and can only be seen when [[Trigger.visible]] is set to `true`.
 */class s2 extends sL{/**
     *
     * @param opts Trigger options
     */constructor(t){super({x:t.pos.x,y:t.pos.y,width:t.width,height:t.height}),this.events=new tE,/**
         * Action to fire when triggered by collision
         */this.action=()=>{},/**
         * Filter to add additional granularity to action dispatch, if a filter is specified the action will only fire when
         * filter return true for the collided actor.
         */this.filter=()=>!0,/**
         * Number of times to repeat before killing the trigger,
         */this.repeat=-1,t={...s1,...t},this.filter=t.filter||this.filter,this.repeat=t.repeat||this.repeat,this.action=t.action||this.action,t.target&&(this.target=t.target),this.graphics.visible=t.visible,this.body.collisionType=j.Passive,this.events.on("collisionstart",t=>{this.filter(t.other)&&(this.emit("enter",new t4(this,t.other)),this._dispatchAction(),0===this.repeat&&this.kill())}),this.events.on("collisionend",t=>{this.filter(t.other)&&this.emit("exit",new t6(this,t.other))})}set target(t){this._target=t,this.filter=e=>e===t}get target(){return this._target}_initialize(t){super._initialize(t)}_dispatchAction(){0!==this.repeat&&(this.action.call(this),this.repeat--)}}(B=to||(to={})).Update="update",B.Draw="draw";/**
 * An Excalibur [[System]] that updates entities of certain types.
 * Systems are scene specific
 *
 * Excalibur Systems currently require at least 1 Component type to operated
 *
 * Multiple types are declared as a type union
 * For example:
 *
 * ```typescript
 * class MySystem extends System<ComponentA | ComponentB> {
 *   public readonly types = ['a', 'b'] as const;
 *   public readonly systemType = SystemType.Update;
 *   public update(entities: Entity<ComponentA | ComponentB>) {
 *      ...
 *   }
 * }
 * ```
 */class s5{constructor(){/**
         * System can execute in priority order, by default all systems are priority 0. Lower values indicated higher priority.
         * For a system to execute before all other a lower priority value (-1 for example) must be set.
         * For a system to execute after all other a higher priority value (10 for example) must be set.
         */this.priority=0}/**
     * Systems observe when entities match their types or no longer match their types, override
     * @param _entityAddedOrRemoved
     */notify(t){// Override me
}}/**
 * An [[Entity]] with [[Component]] types that matches a [[System]] types exists in the current scene.
 */class s3{constructor(t){this.data=t,this.type="Entity Added"}}/**
 * Type guard to check for AddedEntity messages
 * @param x
 */function s4(t){return!!t&&"Entity Added"===t.type}/**
 * An [[Entity]] with [[Component]] types that no longer matches a [[System]] types exists in the current scene.
 */class s6{constructor(t){this.data=t,this.type="Entity Removed"}}/**
 * type guard to check for the RemovedEntity message
 */function s8(t){return!!t&&"Entity Removed"===t.type}// Add/Remove entities and components
class s9{constructor(t){this._world=t,this.entities=[],this._entityIndex={},this._entitiesToRemove=[]}/**
     * Runs the entity lifecycle
     * @param _context
     */updateEntities(t,e){for(let i of this.entities)// TODO is this right?
i.update(t.engine,e),i.active||this.removeEntity(i)}findEntitiesForRemoval(){for(let t of this.entities)t.active||this.removeEntity(t)}/**
     * EntityManager observes changes on entities
     * @param message
     */notify(t){se(t)&&this._world.queryManager.addEntity(t.data.entity),ss(t)&&this._world.queryManager.removeComponent(t.data.entity,t.data.component)}/**
     * Adds an entity to be tracked by the EntityManager
     * @param entity
     */addEntity(t){t.active=!0,t.scene=this._world.context,t&&!this._entityIndex[t.id]&&(this._entityIndex[t.id]=t,this.entities.push(t),this._world.queryManager.addEntity(t),t.componentAdded$.register(this),t.componentRemoved$.register(this),// if entity has children
t.children.forEach(e=>{e.scene=t.scene,this.addEntity(e)}),t.childrenAdded$.register({notify:t=>{this.addEntity(t)}}),t.childrenRemoved$.register({notify:t=>{this.removeEntity(t,!1)}}))}removeEntity(t,e=!0){var i;let s=0;s=t instanceof sn?t.id:t;let r=this._entityIndex[s];if(r&&r.active&&(r.active=!1),r&&e){this._entitiesToRemove.push(r);return}delete this._entityIndex[s],r&&(r.scene=null,eI(r,this.entities),this._world.queryManager.removeEntity(r),r.componentAdded$.unregister(this),r.componentRemoved$.unregister(this),// if entity has children
r.children.forEach(t=>{t.scene=null,this.removeEntity(t,e)}),r.childrenAdded$.clear(),r.childrenRemoved$.clear(),(null===(i=this._world.context)||void 0===i?void 0:i.engine)&&this._world.context.engine.stats.currFrame.actors.killed++)}processEntityRemovals(){for(let t of this._entitiesToRemove)t.active||this.removeEntity(t,!1);this._entitiesToRemove.length=0}processComponentRemovals(){for(let t of this.entities)t.processComponentRemoval()}getById(t){return this._entityIndex[t]}getByName(t){return this.entities.filter(e=>e.name===t)}clear(){for(let t of this.entities)this.removeEntity(t)}}let s7=t=>{let e=[...t].sort((t,e)=>t.localeCompare(e)).join("+");return e};/**
 * Represents query for entities that match a list of types that is cached and observable
 *
 * Queries can be strongly typed by supplying a type union in the optional type parameter
 * ```typescript
 * const queryAB = new ex.Query<ComponentTypeA | ComponentTypeB>(['A', 'B']);
 * ```
 */class rt extends iG{get key(){return this._key?this._key:this._key=s7(this.types)}constructor(t){super(),this._entities=[],t[0]instanceof Function?this.types=t.map(t=>(new t).type):this.types=t}/**
     * Returns a list of entities that match the query
     *
     * @param sort Optional sorting function to sort entities returned from the query
     */getEntities(t){return t&&this._entities.sort(t),this._entities}/**
     * Add an entity to the query, will only be added if the entity matches the query types
     * @param entity
     */addEntity(t){!ev(this._entities,t)&&this.matches(t)&&(this._entities.push(t),this.notifyAll(new s3(t)))}/**
     * If the entity is part of the query it will be removed regardless of types
     * @param entity
     */removeEntity(t){eI(t,this._entities)&&this.notifyAll(new s6(t))}/**
     * Removes all entities and observers from the query
     */clear(){for(let t of(this._entities.length=0,this.observers))this.unregister(t)}matches(t){let e=[];e=t instanceof sn?t.types:t;let i=!0;for(let t of this.types)if(!(i=i&&e.indexOf(t)>-1))return!1;return i}contain(t){return this.types.indexOf(t)>-1}}/**
 * The query manager is responsible for updating all queries when entities/components change
 */class re{constructor(t){this._world=t,this._queries={}}/**
     * Adds a query to the manager and populates with any entities that match
     * @param query
     */_addQuery(t){for(let e of(this._queries[s7(t.types)]=t,this._world.entityManager.entities))t.addEntity(e)}/**
     * Removes the query if there are no observers left
     * @param query
     */maybeRemoveQuery(t){0===t.observers.length&&(t.clear(),delete this._queries[s7(t.types)])}/**
     * Adds the entity to any matching query in the query manage
     * @param entity
     */addEntity(t){for(let e in this._queries)this._queries[e]&&this._queries[e].addEntity(t)}/**
     * Removes an entity from queries if the removed component disqualifies it
     * @param entity
     * @param component
     */removeComponent(t,e){for(let i in this._queries)// it is now disqualified from that query, remove it
this._queries[i].contain(e.type)&&this._queries[i].removeEntity(t)}/**
     * Removes an entity from all queries it is currently a part of
     * @param entity
     */removeEntity(t){for(let e in this._queries)this._queries[e].removeEntity(t)}/**
     * Creates a populated query and returns, if the query already exists that will be returned instead of a new instance
     * @param types
     */createQuery(t){let e=this.getQuery(t);if(e)return e;let i=new rt(t);return this._addQuery(i),i}/**
     * Retrieves an existing query by types if it exists otherwise returns null
     * @param types
     */getQuery(t){let e=s7(t);return this._queries[e]?this._queries[e]:null}}/**
 * The SystemManager is responsible for keeping track of all systems in a scene.
 * Systems are scene specific
 */class ri{constructor(t){this._world=t,/**
         * List of systems, to add a new system call [[SystemManager.addSystem]]
         */this.systems=[],this.initialized=!1}/**
     * Get a system registered in the manager by type
     * @param systemType
     */get(t){return this.systems.find(e=>e instanceof t)}/**
     * Adds a system to the manager, it will now be updated every frame
     * @param system
     */addSystem(t){// validate system has types
if(!t.types||0===t.types.length)throw Error("Attempted to add a System without any types");let e=this._world.queryManager.createQuery(t.types);this.systems.push(t),this.systems.sort((t,e)=>t.priority-e.priority),e.register(t),this.initialized&&t.initialize&&t.initialize(this._world.context)}/**
     * Removes a system from the manager, it will no longer be updated
     * @param system
     */removeSystem(t){eI(t,this.systems);let e=this._world.queryManager.getQuery(t.types);e&&(e.unregister(t),this._world.queryManager.maybeRemoveQuery(e))}/**
     * Initialize all systems in the manager
     *
     * Systems added after initialize() will be initialized on add
     */initialize(){if(!this.initialized)for(let t of(this.initialized=!0,this.systems))t.initialize&&t.initialize(this._world.context)}/**
     * Updates all systems
     * @param type whether this is an update or draw system
     * @param context context reference
     * @param delta time in milliseconds
     */updateSystems(t,e,i){let s=this.systems.filter(e=>e.systemType===t);for(let t of s)t.preupdate&&t.preupdate(e,i);for(let t of s){// Get entities that match the system types, pre-sort
let s=this._world.queryManager.getQuery(t.types).getEntities(t.sort);// Initialize entities if needed
if(e instanceof rE)for(let t of s)t._initialize(null==e?void 0:e.engine);t.update(s,i)}for(let t of s)t.postupdate&&t.postupdate(e,i)}clear(){for(let t of this.systems)this.removeSystem(t)}}/**
 * The World is a self-contained entity component system for a particular context.
 */class rs{/**
     * The context type is passed to the system updates
     * @param context
     */constructor(t){this.context=t,this.queryManager=new re(this),this.entityManager=new s9(this),this.systemManager=new ri(this)}/**
     * Update systems by type and time elapsed in milliseconds
     */update(t,e){t===to.Update&&this.entityManager.updateEntities(this.context,e),this.systemManager.updateSystems(t,this.context,e),this.entityManager.findEntitiesForRemoval(),this.entityManager.processComponentRemovals(),this.entityManager.processEntityRemovals()}add(t){t instanceof sn&&this.entityManager.addEntity(t),t instanceof s5&&this.systemManager.addSystem(t)}remove(t,e=!0){t instanceof sn&&this.entityManager.removeEntity(t,e),t instanceof s5&&this.systemManager.removeSystem(t)}clearEntities(){this.entityManager.clear()}clearSystems(){this.systemManager.clear()}}class rr{static integrate(t,e,i,s){let r=s/1e3;// This code looks a little wild, but it's to avoid creating any new Vector instances
// integration is done in a tight loop so this is key to avoid GC'ing
e.vel.addEqual(i.scale(r,rr._ACC)),t.pos.add(e.vel.scale(r,rr._VEL),rr._POS).addEqual(i.scale(.5*r*r,rr._VEL_ACC)),e.angularVelocity+=e.torque*(1/e.inertia)*r;let n=t.rotation+e.angularVelocity*r;t.scale.add(e.scaleFactor.scale(r,this._SCALE_FACTOR),rr._SCALE);let o=t.get();o.setTransform(rr._POS,n,rr._SCALE)}}// Scratch vectors to avoid allocation
rr._POS=new ep(0,0),rr._SCALE=new ep(1,1),rr._ACC=new ep(0,0),rr._VEL=new ep(0,0),rr._VEL_ACC=new ep(0,0),rr._SCALE_FACTOR=new ep(0,0);class rn extends s5{constructor(){super(...arguments),this.types=["ex.transform","ex.motion"],this.systemType=to.Update,this.priority=-1}update(t,e){let i,s;for(let r=0;r<t.length;r++){i=t[r].get(iz),s=t[r].get(iO);let n=t[r].get(i7);if(null==n?void 0:n.sleeping)continue;let o=s.acc.clone();(null==n?void 0:n.collisionType)===j.Active&&(null==n?void 0:n.useGravity)&&o.addEqual(iP.gravity),null==n||n.captureOldTransform(),// Update transform and motion based on Euler linear algebra
rr.integrate(i,s,o,e)}}}/**
 * ArcadeSolver is the default in Excalibur. It solves collisions so that there is no overlap between contacts,
 * and negates velocity along the collision normal.
 *
 * This is usually the type of collisions used for 2D games that don't need a more realistic collision simulation.
 *
 */class ro{constructor(){this.directionMap=new Map,this.distanceMap=new Map}solve(t){for(let e of(// Events and init
this.preSolve(t),// Sort contacts by distance to avoid artifacts with seams
// It's important to solve in a specific order
// Remove any canceled contacts
(t=t.filter(t=>!t.isCanceled())).sort((t,e)=>{let i=this.distanceMap.get(t.id),s=this.distanceMap.get(e.id);return i-s}),t))// Solve position first in arcade
this.solvePosition(e),// Solve velocity second in arcade
this.solveVelocity(e);return(// Events and any contact house-keeping the solver needs
this.postSolve(t),t)}preSolve(t){for(let e of t){if(1e-4>Math.abs(e.mtv.x)&&1e-4>Math.abs(e.mtv.y)){// Cancel near 0 mtv collisions
e.cancel();continue}let t=H.fromDirection(e.mtv),i=e.mtv.negate(),s=e.colliderA.worldPos.squareDistance(e.colliderB.worldPos);this.distanceMap.set(e.id,s),// Publish collision events on both participants
e.colliderA.events.emit("precollision",new tY(e.colliderA,e.colliderB,t,i)),e.colliderB.events.emit("precollision",new tY(e.colliderB,e.colliderA,H.getOpposite(t),i.negate()))}}postSolve(t){var e,i;for(let s of t){if(s.isCanceled())continue;let t=s.colliderA,r=s.colliderB,n=null===(e=t.owner)||void 0===e?void 0:e.get(i7),o=null===(i=r.owner)||void 0===i?void 0:i.get(i7);if(n&&o&&(n.collisionType===j.Passive||o.collisionType===j.Passive))continue;let a=H.fromDirection(s.mtv),h=s.mtv.negate();// Publish collision events on both participants
s.colliderA.events.emit("postcollision",new tj(s.colliderA,s.colliderB,a,h)),s.colliderB.events.emit("postcollision",new tj(s.colliderB,s.colliderA,H.getOpposite(a),h.negate()))}}solvePosition(t){var e,i;// if bounds no longer intersect skip to the next
// this removes jitter from overlapping/stacked solid tiles or a wall of solid tiles
if(!t.colliderA.bounds.overlaps(t.colliderB.bounds,1e-4)||1e-4>Math.abs(t.mtv.x)&&1e-4>Math.abs(t.mtv.y)){// Cancel the contact to prevent and solving
t.cancel();return}let s=t.mtv,r=t.colliderA,n=t.colliderB,o=null===(e=r.owner)||void 0===e?void 0:e.get(i7),a=null===(i=n.owner)||void 0===i?void 0:i.get(i7);if(o&&a){if(o.collisionType===j.Passive||a.collisionType===j.Passive)return;o.collisionType===j.Active&&a.collisionType===j.Active&&(s=s.scale(.5)),o.collisionType===j.Active&&(o.globalPos.x-=s.x,o.globalPos.y-=s.y,r.update(o.transform.get())),a.collisionType===j.Active&&(a.globalPos.x+=s.x,a.globalPos.y+=s.y,n.update(a.transform.get()))}}solveVelocity(t){var e,i;if(t.isCanceled())return;let s=t.colliderA,r=t.colliderB,n=null===(e=s.owner)||void 0===e?void 0:e.get(i7),o=null===(i=r.owner)||void 0===i?void 0:i.get(i7);if(n&&o){if(n.collisionType===j.Passive||o.collisionType===j.Passive)return;let e=t.normal,i=e.negate();if(n.collisionType===j.Active&&0>n.vel.normalize().dot(i)){// Cancel out velocity opposite direction of collision normal
let t=e.scale(e.dot(n.vel.negate()));n.vel=n.vel.add(t)}if(o.collisionType===j.Active&&0>o.vel.normalize().dot(e)){let t=i.scale(i.dot(o.vel.negate()));o.vel=o.vel.add(t)}}}}/**
 * Holds information about contact points, meant to be reused over multiple frames of contact
 */class ra{constructor(t,e,i){this.point=t,this.local=e,this.contact=i,/**
         * Impulse accumulated over time in normal direction
         */this.normalImpulse=0,/**
         * Impulse accumulated over time in the tangent direction
         */this.tangentImpulse=0,/**
         * Effective mass seen in the normal direction
         */this.normalMass=0,/**
         * Effective mass seen in the tangent direction
         */this.tangentMass=0,/**
         * Direction from center of mass of bodyA to contact point
         */this.aToContact=new ep(0,0),/**
         * Direction from center of mass of bodyB to contact point
         */this.bToContact=new ep(0,0),/**
         * Original contact velocity combined with bounciness
         */this.originalVelocityAndRestitution=0,this.update()}/**
     * Updates the contact information
     */update(){var t,e;let i=null===(t=this.contact.colliderA.owner)||void 0===t?void 0:t.get(i7),s=null===(e=this.contact.colliderB.owner)||void 0===e?void 0:e.get(i7);if(i&&s){let t=this.contact.normal,e=this.contact.tangent;this.aToContact=this.point.sub(i.globalPos),this.bToContact=this.point.sub(s.globalPos);let r=this.aToContact.cross(t),n=this.bToContact.cross(t);this.normalMass=i.inverseMass+s.inverseMass+i.inverseInertia*r*r+s.inverseInertia*n*n;let o=this.aToContact.cross(e),a=this.bToContact.cross(e);this.tangentMass=i.inverseMass+s.inverseMass+i.inverseInertia*o*o+s.inverseInertia*a*a}return this}/**
     * Returns the relative velocity between bodyA and bodyB
     */getRelativeVelocity(){var t,e;let i=null===(t=this.contact.colliderA.owner)||void 0===t?void 0:t.get(i7),s=null===(e=this.contact.colliderB.owner)||void 0===e?void 0:e.get(i7);if(i&&s){// Relative velocity in linear terms
// Angular to linear velocity formula -> omega = velocity/radius so omega x radius = velocity
let t=i.vel.add(ep.cross(i.angularVelocity,this.aToContact)),e=s.vel.add(ep.cross(s.angularVelocity,this.bToContact));return e.sub(t)}return ep.Zero}}class rh{constructor(){this.lastFrameContacts=new Map,// map contact id to contact points
this.idToContactConstraint=new Map}getContactConstraints(t){var e;return null!==(e=this.idToContactConstraint.get(t))&&void 0!==e?e:[]}solve(t){return(// Events and init
this.preSolve(t),// Remove any canceled contacts
t=t.filter(t=>!t.isCanceled()),// Solve velocity first
this.solveVelocity(t),// Solve position last because non-overlap is the most important
this.solvePosition(t),// Events and any contact house-keeping the solver needs
this.postSolve(t),t)}preSolve(t){var e,i,s;for(let e of t){if(1e-4>Math.abs(e.mtv.x)&&1e-4>Math.abs(e.mtv.y)){// Cancel near 0 mtv collisions
e.cancel();continue}// Publish collision events on both participants
let t=H.fromDirection(e.mtv);e.colliderA.events.emit("precollision",new tY(e.colliderA,e.colliderB,t,e.mtv)),e.colliderA.events.emit("beforecollisionresolve",new tJ(e.colliderA,e.colliderB,t,e.mtv,e)),e.colliderB.events.emit("precollision",new tY(e.colliderB,e.colliderA,H.getOpposite(t),e.mtv.negate())),e.colliderB.events.emit("beforecollisionresolve",new tJ(e.colliderB,e.colliderA,H.getOpposite(t),e.mtv.negate(),e)),// Match awake state for sleeping
e.matchAwake()}// Keep track of contacts that done
let r=Array.from(this.idToContactConstraint.keys());for(let n of t){// Remove all current contacts that are not done
let t=r.indexOf(n.id);t>-1&&r.splice(t,1);let o=null!==(e=this.idToContactConstraint.get(n.id))&&void 0!==e?e:[],a=0,h=n.colliderA.owner.get(i7),l=n.colliderB.owner.get(i7);if(h&&l)for(let t of n.points){let e=n.normal,r=n.tangent,A=t.sub(h.globalPos),d=t.sub(l.globalPos),c=A.cross(e),u=d.cross(e),g=h.inverseMass+l.inverseMass+h.inverseInertia*c*c+l.inverseInertia*u*u,p=A.cross(r),_=d.cross(r),f=h.inverseMass+l.inverseMass+h.inverseInertia*p*p+l.inverseInertia*_*_;o[a]&&(null===(s=null===(i=o[a])||void 0===i?void 0:i.point)||void 0===s?void 0:s.squareDistance(t))<4?(o[a].point=t,o[a].local=n.localPoints[a]):o[a]=new ra(t,n.localPoints[a],n),// Update contact point calculations
o[a].aToContact=A,o[a].bToContact=d,o[a].normalMass=1/g,o[a].tangentMass=1/f;// Calculate relative velocity before solving to accurately do restitution
let m=h.bounciness>l.bounciness?h.bounciness:l.bounciness,y=n.normal.dot(o[a].getRelativeVelocity());o[a].originalVelocityAndRestitution=0,y<-.1&&(o[a].originalVelocityAndRestitution=-m*y),a++}this.idToContactConstraint.set(n.id,o)}// Clean up any contacts that did not occur last frame
for(let t of r)this.idToContactConstraint.delete(t);// Warm contacts with accumulated impulse
// Useful for tall stacks
if(iP.warmStart)this.warmStart(t);else for(let e of t){let t=this.getContactConstraints(e.id);for(let e of t)e.normalImpulse=0,e.tangentImpulse=0}}postSolve(t){for(let e of t){let t=e.colliderA.owner.get(i7),i=e.colliderB.owner.get(i7);if(t&&i){// Skip post solve for active+passive collisions
if(t.collisionType===j.Passive||i.collisionType===j.Passive)continue;// Update motion values for sleeping
t.updateMotion(),i.updateMotion()}// Publish collision events on both participants
let s=H.fromDirection(e.mtv);e.colliderA.events.emit("postcollision",new tj(e.colliderA,e.colliderB,s,e.mtv)),e.colliderA.events.emit("aftercollisionresolve",new tX(e.colliderA,e.colliderB,s,e.mtv,e)),e.colliderB.events.emit("postcollision",new tj(e.colliderB,e.colliderA,H.getOpposite(s),e.mtv.negate())),e.colliderB.events.emit("aftercollisionresolve",new tX(e.colliderB,e.colliderA,H.getOpposite(s),e.mtv.negate(),e))}for(let e of(// Store contacts
this.lastFrameContacts.clear(),t))this.lastFrameContacts.set(e.id,e)}/**
     * Warm up body's based on previous frame contact points
     * @param contacts
     */warmStart(t){var e,i,s;for(let r of t){let t=null===(e=r.colliderA.owner)||void 0===e?void 0:e.get(i7),n=null===(i=r.colliderB.owner)||void 0===i?void 0:i.get(i7);if(t&&n){let e=null!==(s=this.idToContactConstraint.get(r.id))&&void 0!==s?s:[];for(let i of e)if(iP.warmStart){let e=r.normal.scale(i.normalImpulse),s=r.tangent.scale(i.tangentImpulse),o=e.add(s);t.applyImpulse(i.point,o.negate()),n.applyImpulse(i.point,o)}else i.normalImpulse=0,i.tangentImpulse=0}}}/**
     * Iteratively solve the position overlap constraint
     * @param contacts
     */solvePosition(t){var e,i,s;for(let r=0;r<iP.positionIterations;r++)for(let r of t){let t=null===(e=r.colliderA.owner)||void 0===e?void 0:e.get(i7),n=null===(i=r.colliderB.owner)||void 0===i?void 0:i.get(i7);if(t&&n){// Skip solving active+passive
if(t.collisionType===j.Passive||n.collisionType===j.Passive)continue;let e=null!==(s=this.idToContactConstraint.get(r.id))&&void 0!==s?s:[];for(let i of e){let e=r.normal,s=i3.FindContactSeparation(r,i.local),o=iP.steeringFactor,a=iP.slop,h=eh(o*(s+a),-5,0),l=e.scale(-h*i.normalMass);// This is a pseudo impulse, meaning we aren't doing a real impulse calculation
// We adjust position and rotation instead of doing the velocity
if(t.collisionType===j.Active){// TODO make applyPseudoImpulse function?
let e=l.negate().scale(t.inverseMass);t.limitDegreeOfFreedom.includes(Z.X)&&(e.x=0),t.limitDegreeOfFreedom.includes(Z.Y)&&(e.y=0),t.globalPos=t.globalPos.add(e),t.limitDegreeOfFreedom.includes(Z.Rotation)||(t.rotation-=i.aToContact.cross(l)*t.inverseInertia)}if(n.collisionType===j.Active){let t=l.scale(n.inverseMass);n.limitDegreeOfFreedom.includes(Z.X)&&(t.x=0),n.limitDegreeOfFreedom.includes(Z.Y)&&(t.y=0),n.globalPos=n.globalPos.add(t),n.limitDegreeOfFreedom.includes(Z.Rotation)||(n.rotation+=i.bToContact.cross(l)*n.inverseInertia)}}}}}solveVelocity(t){var e,i,s;for(let r=0;r<iP.velocityIterations;r++)for(let r of t){let t=null===(e=r.colliderA.owner)||void 0===e?void 0:e.get(i7),n=null===(i=r.colliderB.owner)||void 0===i?void 0:i.get(i7);if(t&&n){// Skip solving active+passive
if(t.collisionType===j.Passive||n.collisionType===j.Passive)continue;let e=Math.min(t.friction,n.friction),i=null!==(s=this.idToContactConstraint.get(r.id))&&void 0!==s?s:[];// Friction constraint
for(let s of i){let i=s.getRelativeVelocity(),o=-i.dot(r.tangent),a=o*s.tangentMass,h=e*s.normalImpulse,l=eh(s.tangentImpulse+a,-h,h);a=l-s.tangentImpulse,s.tangentImpulse=l;let A=r.tangent.scale(a);t.applyImpulse(s.point,A.negate()),n.applyImpulse(s.point,A)}// Bounce constraint
for(let e of i){// Need to recalc relative velocity because the previous step could have changed vel
let i=e.getRelativeVelocity(),s=i.dot(r.normal),o=-e.normalMass*(s-e.originalVelocityAndRestitution),a=Math.max(e.normalImpulse+o,0);o=a-e.normalImpulse,e.normalImpulse=a;let h=r.normal.scale(o);t.applyImpulse(e.point,h.negate()),n.applyImpulse(e.point,h)}}}}}class rl extends s5{constructor(t){super(),this.types=["ex.transform","ex.motion","ex.collider"],this.systemType=to.Update,this.priority=-1,this._realisticSolver=new rh,this._arcadeSolver=new ro,this._lastFrameContacts=new Map,this._currentFrameContacts=new Map,this._processor=t.collisionProcessor,this._trackCollider=t=>this._processor.track(t),this._untrackCollider=t=>this._processor.untrack(t)}notify(t){if(s4(t)){let e=t.data.get(i9);e.$colliderAdded.subscribe(this._trackCollider),e.$colliderRemoved.subscribe(this._untrackCollider);let i=e.get();i&&this._processor.track(i)}else{let e=t.data.get(i9),i=e.get();e&&i&&this._processor.untrack(i)}}initialize(t){this._engine=t.engine}update(t,e){var i,s,r,n;if(!iP.enabled)return;// Collect up all the colliders and update them
let o=[];for(let e of t){let t=e.get(i9),s=null==t?void 0:t.get();if(t&&(null===(i=t.owner)||void 0===i?void 0:i.active)&&s){if(t.update(),s instanceof iX){let t=s.getColliders();o=o.concat(t)}else o.push(s)}}// Update the spatial partitioning data structures
// TODO if collider invalid it will break the processor
// TODO rename "update" to something more specific
this._processor.update(o);// Run broadphase on all colliders and locates potential collisions
let a=this._processor.broadphase(o,e);this._currentFrameContacts.clear();// Given possible pairs find actual contacts
let h=this._processor.narrowphase(a,null===(n=null===(r=null===(s=this._engine)||void 0===s?void 0:s.debug)||void 0===r?void 0:r.stats)||void 0===n?void 0:n.currFrame),l=this.getSolver();// Record contacts for start/end
for(let t of // Solve, this resolves the position/velocity so entities aren't overlapping
h=l.solve(h)){// Process composite ids, things with the same composite id are treated as the same collider for start/end
let e=t.id.indexOf("|");if(e>0){let i=t.id.substring(e+1);this._currentFrameContacts.set(i,t)}else this._currentFrameContacts.set(t.id,t)}// Emit contact start/end events
this.runContactStartEnd(),// reset the last frame cache
this._lastFrameContacts.clear(),// Keep track of collisions contacts that have started or ended
this._lastFrameContacts=new Map(this._currentFrameContacts)}getSolver(){return iP.collisionResolutionStrategy===K.Realistic?this._realisticSolver:this._arcadeSolver}debug(t){this._processor.debug(t)}runContactStartEnd(){// Composite collider collisions may have a duplicate id because we want to treat those as a singular start/end
for(let[t,e]of this._currentFrameContacts)if(!this._lastFrameContacts.has(t)){let t=e.colliderA,i=e.colliderB;t.events.emit("collisionstart",new tZ(t,i,e)),t.events.emit("contactstart",new tK(t,i,e)),i.events.emit("collisionstart",new tZ(i,t,e)),i.events.emit("contactstart",new tK(i,t,e))}// find all contacts that have ceased
for(let[t,e]of this._lastFrameContacts)if(!this._currentFrameContacts.has(t)){let t=e.colliderA,i=e.colliderB;t.events.emit("collisionend",new t$(t,i)),t.events.emit("contactend",new tW(t,i)),i.events.emit("collisionend",new t$(i,t)),i.events.emit("contactend",new tW(i,t))}}}/**
     * Animation is playing forwards
     */(b=ta||(ta={})).Forward="forward",/**
     * Animation is playing backwards
     */b.Backward="backward",/**
     * Animation ends without displaying anything
     */(Q=th||(th={})).End="end",/**
     * Animation loops to the first frame after the last frame
     */Q.Loop="loop",/**
     * Animation plays to the last frame, then backwards to the first frame, then repeats
     */Q.PingPong="pingpong",/**
     * Animation ends stopping on the last frame
     */Q.Freeze="freeze";let rA={Frame:"frame",Loop:"loop",Ended:"ended"};/**
 * Create an Animation given a list of [[Frame|frames]] in [[AnimationOptions]]
 *
 * To create an Animation from a [[SpriteSheet]], use [[Animation.fromSpriteSheet]]
 */class Animation extends eR{constructor(t){var e,i;super(t),this.events=new tE,this.frames=[],this.strategy=th.Loop,this.frameDuration=100,this.timeScale=1,this._idempotencyToken=-1,this._firstTick=!0,this._currentFrame=0,this._timeLeftInFrame=0,this._pingPongDirection=1,this._done=!1,this._playing=!0,this._reversed=!1,this.frames=t.frames,this.strategy=null!==(e=t.strategy)&&void 0!==e?e:this.strategy,this.frameDuration=t.totalDuration?t.totalDuration/this.frames.length:null!==(i=t.frameDuration)&&void 0!==i?i:this.frameDuration,t.reverse&&this.reverse(),this.goToFrame(0)}clone(){return new Animation({frames:this.frames.map(t=>({...t})),frameDuration:this.frameDuration,reverse:this._reversed,strategy:this.strategy,...this.cloneGraphicOptions()})}get width(){let t=this.currentFrame;return t?Math.abs(t.graphic.width*this.scale.x):0}get height(){let t=this.currentFrame;return t?Math.abs(t.graphic.height*this.scale.y):0}/**
     * Create an Animation from a [[SpriteSheet]], a list of indices into the sprite sheet, a duration per frame
     * and optional [[AnimationStrategy]]
     *
     * Example:
     * ```typescript
     * const spriteSheet = SpriteSheet.fromImageSource({...});
     *
     * const anim = Animation.fromSpriteSheet(spriteSheet, range(0, 5), 200, AnimationStrategy.Loop);
     * ```
     *
     * @param spriteSheet
     * @param frameIndices
     * @param durationPerFrameMs
     * @param strategy
     */static fromSpriteSheet(t,e,i,s=th.Loop){let r=t.sprites.length-1,n=e.filter(t=>t<0||t>r);return n.length&&Animation._LOGGER.warn(`Indices into SpriteSheet were provided that don't exist: ${n.join(",")} no frame will be shown`),new Animation({frames:t.sprites.filter((t,i)=>e.indexOf(i)>-1).map(t=>({graphic:t,duration:i})),strategy:s})}/**
     * Create an [[Animation]] from a [[SpriteSheet]] given a list of coordinates
     *
     * Example:
     * ```typescript
     * const spriteSheet = SpriteSheet.fromImageSource({...});
     *
     * const anim = Animation.fromSpriteSheetCoordinates({
     *  spriteSheet,
     *  frameCoordinates: [
     *    {x: 0, y: 5, duration: 100},
     *    {x: 1, y: 5, duration: 200},
     *    {x: 2, y: 5, duration: 100},
     *    {x: 3, y: 5, duration: 500}
     *  ],
     *  strategy: AnimationStrategy.PingPong
     * });
     * ```
     *
     * @param options
     * @returns Animation
     */static fromSpriteSheetCoordinates(t){let{spriteSheet:e,frameCoordinates:i,durationPerFrameMs:s,strategy:r,reverse:n}=t,o=null!=s?s:100,a=[];for(let t of i){let{x:i,y:s,duration:r}=t,n=e.getSprite(i,s);n?a.push({graphic:n,duration:null!=r?r:o}):Animation._LOGGER.warn(`Skipping frame! SpriteSheet does not have coordinate (${i}, ${s}), please check your SpriteSheet to confirm that sprite exists`)}return new Animation({frames:a,strategy:r,reverse:n})}/**
     * Returns the current Frame of the animation
     *
     * Use [[Animation.currentFrameIndex]] to get the frame number and
     * [[Animation.goToFrame]] to set the current frame index
     */get currentFrame(){return this._currentFrame>=0&&this._currentFrame<this.frames.length?this.frames[this._currentFrame]:null}/**
     * Returns the current frame index of the animation
     *
     * Use [[Animation.currentFrame]] to grab the current [[Frame]] object
     */get currentFrameIndex(){return this._currentFrame}/**
     * Returns `true` if the animation is playing
     */get isPlaying(){return this._playing}/**
     * Reverses the play direction of the Animation, this preserves the current frame
     */reverse(){// Don't mutate with the original frame list, create a copy
this.frames=this.frames.slice().reverse(),this._reversed=!this._reversed}/**
     * Returns the current play direction of the animation
     */get direction(){// Keep logically consistent with ping-pong direction
// If ping-pong is forward = 1 and reversed is true then we are logically reversed
let t=!!this._reversed&&1===this._pingPongDirection;return t?ta.Backward:ta.Forward}/**
     * Plays or resumes the animation from the current frame
     */play(){this._playing=!0}/**
     * Pauses the animation on the current frame
     */pause(){this._playing=!1,this._firstTick=!0}/**
     * Reset the animation back to the beginning, including if the animation were done
     */reset(){this._done=!1,this._firstTick=!0,this._currentFrame=0}/**
     * Returns `true` if the animation can end
     */get canFinish(){switch(this.strategy){case th.End:case th.Freeze:return!0;default:return!1}}/**
     * Returns `true` if the animation is done, for looping type animations
     * `ex.AnimationStrategy.PingPong` and `ex.AnimationStrategy.Loop` this will always return `false`
     *
     * See the `ex.Animation.canFinish()` method to know if an animation type can end
     */get done(){return this._done}/**
     * Jump the animation immediately to a specific frame if it exists
     * @param frameNumber
     */goToFrame(t){this._currentFrame=t,this._timeLeftInFrame=this.frameDuration;let e=this.frames[this._currentFrame];e&&!this._done&&(this._timeLeftInFrame=(null==e?void 0:e.duration)||this.frameDuration,this.events.emit("frame",{...e,frameIndex:this.currentFrameIndex}))}_nextFrame(){let t=this._currentFrame;if(this._done)return t;let e=-1;switch(this.strategy){case th.Loop:0==(e=(t+1)%this.frames.length)&&this.events.emit("loop",this);break;case th.End:(e=t+1)>=this.frames.length&&(this._done=!0,this._currentFrame=this.frames.length,this.events.emit("end",this));break;case th.Freeze:(e=eh(t+1,0,this.frames.length-1))>=this.frames.length-1&&(this._done=!0,this.events.emit("end",this));break;case th.PingPong:t+this._pingPongDirection>=this.frames.length&&(this._pingPongDirection=-1,this.events.emit("loop",this)),t+this._pingPongDirection<0&&(this._pingPongDirection=1,this.events.emit("loop",this)),e=t+this._pingPongDirection%this.frames.length}return e}/**
     * Called internally by Excalibur to update the state of the animation potential update the current frame
     * @param elapsedMilliseconds Milliseconds elapsed
     * @param idempotencyToken Prevents double ticking in a frame by passing a unique token to the frame
     */tick(t,e=0){this._idempotencyToken!==e&&(this._idempotencyToken=e,this._playing&&(this._firstTick&&(this._firstTick=!1,this.events.emit("frame",{...this.currentFrame,frameIndex:this.currentFrameIndex})),this._timeLeftInFrame-=t*this.timeScale,this._timeLeftInFrame<=0&&this.goToFrame(this._nextFrame())))}_drawImage(t,e,i){this.currentFrame&&this.currentFrame.graphic.draw(t,e,i)}}Animation._LOGGER=t9.getInstance();class rd extends eR{constructor(t){super(t),this.members=[],this.members=t.members,this._updateDimensions()}clone(){return new rd({members:[...this.members],...this.cloneGraphicOptions()})}_updateDimensions(){let t=new ey;for(let{graphic:e,pos:i}of this.members)t=e.localBounds.translate(i).combine(t);return this.width=t.width,this.height=t.height,t}get localBounds(){let t=new ey;for(let{graphic:e,pos:i}of this.members)t=e.localBounds.translate(i).combine(t);return t}_isAnimationOrGroup(t){return t instanceof Animation||t instanceof rd}tick(t,e){for(let i of this.members){let s=i.graphic;this._isAnimationOrGroup(s)&&s.tick(t,e)}}reset(){for(let t of this.members){let e=t.graphic;this._isAnimationOrGroup(e)&&e.reset()}}_preDraw(t,e,i){this._updateDimensions(),super._preDraw(t,e,i)}_drawImage(t,e,i){for(let s of this.members)t.save(),t.translate(e,i),s.graphic.draw(t,s.pos.x,s.pos.y),this.showDebug&&/* istanbul ignore next */t.debug.drawRect(0,0,this.width,this.height),t.restore()}}/**
 * Configurable helper extends base type and makes all properties available as option bag arguments
 * @internal
 * @param base
 */function rc(t){return class extends t{assign(t){//set the value of every property that was passed in,
//if the constructor previously set this value, it will be overridden here
for(let e in t)"function"!=typeof this[e]&&(this[e]=t[e])}constructor(...t){super(...t);//get the number of arguments that aren't undefined. TS passes a value to all parameters
//of whatever ctor is the implementation, so args.length doesn't work here.
let e=t.filter(function(t){return void 0!==t}).length;1!==e||!t[0]||"object"!=typeof t[0]||t[0]instanceof Array||this.assign(t[0])}}}/**
     * Constant for the circular emitter type
     */(S=tl||(tl={}))[S.Circle=0]="Circle",/**
     * Constant for the rectangular emitter type
     */S[S.Rectangle=1]="Rectangle";/**
 * @hidden
 */class ru extends sn{constructor(t,e,i,s,r,n,o,a,h,l){super(),this.position=new ep(0,0),this.velocity=new ep(0,0),this.acceleration=new ep(0,0),this.particleRotationalVelocity=0,this.currentRotation=0,this.focus=null,this.focusAccel=0,this.opacity=1,this.beginColor=ef.White,this.endColor=ef.White,// Life is counted in ms
this.life=300,this.fadeFlag=!1,// Color transitions
this._rRate=1,this._gRate=1,this._bRate=1,this._aRate=0,this._currentColor=ef.White,this.emitter=null,this.particleSize=5,this.particleSprite=null,this.sizeRate=0,this.elapsedMultiplier=0,this.visible=!0,this.isOffscreen=!1;let A=t;if(!A||t instanceof rp||(A=t.emitter,e=t.life,i=t.opacity,r=t.endColor,s=t.beginColor,n=t.position,o=t.velocity,a=t.acceleration,h=t.startSize,l=t.endSize),this.emitter=A,this.life=e||this.life,this.opacity=i||this.opacity,this.endColor=r||this.endColor.clone(),this.beginColor=s||this.beginColor.clone(),this._currentColor=this.beginColor.clone(),this.emitter.particleTransform===tA.Global){let t=this.emitter.transform.globalPos;this.position=(n||this.position).add(t),this.velocity=(o||this.velocity).rotate(this.emitter.transform.globalRotation)}else this.velocity=o||this.velocity,this.position=n||this.position;this.acceleration=a||this.acceleration,this._rRate=(this.endColor.r-this.beginColor.r)/this.life,this._gRate=(this.endColor.g-this.beginColor.g)/this.life,this._bRate=(this.endColor.b-this.beginColor.b)/this.life,this._aRate=this.opacity/this.life,this.startSize=h||0,this.endSize=l||0,this.endSize>0&&this.startSize>0&&(this.sizeRate=(this.endSize-this.startSize)/this.life,this.particleSize=this.startSize),this.addComponent(this.transform=new iz),this.addComponent(this.graphics=new sl),this.transform.pos=this.position,this.transform.rotation=this.currentRotation,this.transform.scale=e_(1,1),this.particleSprite?(this.graphics.opacity=this.opacity,this.graphics.use(this.particleSprite)):(this.graphics.localBounds=ey.fromDimension(this.particleSize,this.particleSize,ep.Half),this.graphics.onPostDraw=t=>{t.save(),this.graphics.opacity=this.opacity;let e=this._currentColor.clone();e.a=1,t.debug.drawPoint(e_(0,0),{color:e,size:this.particleSize}),t.restore()})}kill(){this.emitter.removeParticle(this)}update(t,e){if(this.life=this.life-e,this.elapsedMultiplier=this.elapsedMultiplier+e,this.life<0&&this.kill(),this.fadeFlag&&(this.opacity=eh(this._aRate*this.life,1e-4,1)),this.startSize>0&&this.endSize>0&&(this.particleSize=eh(this.sizeRate*e+this.particleSize,Math.min(this.startSize,this.endSize),Math.max(this.startSize,this.endSize))),this._currentColor.r=eh(this._currentColor.r+this._rRate*e,0,255),this._currentColor.g=eh(this._currentColor.g+this._gRate*e,0,255),this._currentColor.b=eh(this._currentColor.b+this._bRate*e,0,255),this._currentColor.a=eh(this.opacity,1e-4,1),this.focus){let t=this.focus.sub(this.position).normalize().scale(this.focusAccel).scale(e/1e3);this.velocity=this.velocity.add(t)}else this.velocity=this.velocity.add(this.acceleration.scale(e/1e3));this.position=this.position.add(this.velocity.scale(e/1e3)),this.particleRotationalVelocity&&(this.currentRotation=(this.currentRotation+this.particleRotationalVelocity*e/1e3)%(2*Math.PI)),this.transform.pos=this.position,this.transform.rotation=this.currentRotation,this.transform.scale=e_(1,1),this.graphics.opacity=this.opacity}}/**
 * Particle is used in a [[ParticleEmitter]]
 */class rg extends rc(ru){constructor(t,e,i,s,r,n,o,a,h,l){super(t,e,i,s,r,n,o,a,h,l)}}/**
     * [[ParticleTransform.Global]] is the default and emits particles as if
     * they were world space objects, useful for most effects.
     */(T=tA||(tA={})).Global="global",/**
     * [[ParticleTransform.Local]] particles are children of the emitter and move relative to the emitter
     * as they would in a parent/child actor relationship.
     */T.Local="local";/**
 * Using a particle emitter is a great way to create interesting effects
 * in your game, like smoke, fire, water, explosions, etc. `ParticleEmitter`
 * extend [[Actor]] allowing you to use all of the features that come with.
 */class rp extends sL{/**
     * Gets the opacity of each particle from 0 to 1.0
     */get opacity(){return super.graphics.opacity}/**
     * Gets the opacity of each particle from 0 to 1.0
     */set opacity(t){super.graphics.opacity=t}/**
     * Gets or sets the sprite that a particle should use
     */get particleSprite(){return this._sprite}set particleSprite(t){t&&(this._sprite=t)}/**
     * @param config particle emitter options bag
     */constructor(t){var e,i;super({width:null!==(e=t.width)&&void 0!==e?e:0,height:null!==(i=t.height)&&void 0!==i?i:0}),this._particlesToEmit=0,this.numParticles=0,/**
         * Gets or sets the isEmitting flag
         */this.isEmitting=!0,/**
         * Gets or sets the backing particle collection
         */this.particles=[],/**
         * Gets or sets the backing deadParticle collection
         */this.deadParticles=[],/**
         * Gets or sets the minimum particle velocity
         */this.minVel=0,/**
         * Gets or sets the maximum particle velocity
         */this.maxVel=0,/**
         * Gets or sets the acceleration vector for all particles
         */this.acceleration=new ep(0,0),/**
         * Gets or sets the minimum angle in radians
         */this.minAngle=0,/**
         * Gets or sets the maximum angle in radians
         */this.maxAngle=0,/**
         * Gets or sets the emission rate for particles (particles/sec)
         */this.emitRate=1,/**
         * Gets or sets the life of each particle in milliseconds
         */this.particleLife=2e3,/**
         * Gets or sets the fade flag which causes particles to gradually fade out over the course of their life.
         */this.fadeFlag=!1,/**
         * Gets or sets the optional focus where all particles should accelerate towards
         */this.focus=null,/**
         * Gets or sets the acceleration for focusing particles if a focus has been specified
         */this.focusAccel=null,/**
         * Gets or sets the optional starting size for the particles
         */this.startSize=null,/**
         * Gets or sets the optional ending size for the particles
         */this.endSize=null,/**
         * Gets or sets the minimum size of all particles
         */this.minSize=5,/**
         * Gets or sets the maximum size of all particles
         */this.maxSize=5,/**
         * Gets or sets the beginning color of all particles
         */this.beginColor=ef.White,/**
         * Gets or sets the ending color of all particles
         */this.endColor=ef.White,this._sprite=null,/**
         * Gets or sets the emitter type for the particle emitter
         */this.emitterType=tl.Rectangle,/**
         * Gets or sets the emitter radius, only takes effect when the [[emitterType]] is [[EmitterType.Circle]]
         */this.radius=0,/**
         * Gets or sets the particle rotational speed velocity
         */this.particleRotationalVelocity=0,/**
         * Indicates whether particles should start with a random rotation
         */this.randomRotation=!1,/**
         * Gets or sets the emitted particle transform style, [[ParticleTransform.Global]] is the default and emits particles as if
         * they were world space objects, useful for most effects.
         *
         * If set to [[ParticleTransform.Local]] particles are children of the emitter and move relative to the emitter
         * as they would in a parent/child actor relationship.
         */this.particleTransform=tA.Global;let{x:s,y:r,pos:n,isEmitting:o,minVel:a,maxVel:h,acceleration:l,minAngle:A,maxAngle:d,emitRate:c,particleLife:u,opacity:g,fadeFlag:p,focus:_,focusAccel:f,startSize:m,endSize:y,minSize:C,maxSize:x,beginColor:w,endColor:I,particleSprite:v,emitterType:E,radius:B,particleRotationalVelocity:b,particleTransform:Q,randomRotation:S,random:T}={...t};this.pos=null!=n?n:e_(null!=s?s:0,null!=r?r:0),this.isEmitting=null!=o?o:this.isEmitting,this.minVel=null!=a?a:this.minVel,this.maxVel=null!=h?h:this.maxVel,this.acceleration=null!=l?l:this.acceleration,this.minAngle=null!=A?A:this.minAngle,this.maxAngle=null!=d?d:this.maxAngle,this.emitRate=null!=c?c:this.emitRate,this.particleLife=null!=u?u:this.particleLife,this.opacity=null!=g?g:this.opacity,this.fadeFlag=null!=p?p:this.fadeFlag,this.focus=null!=_?_:this.focus,this.focusAccel=null!=f?f:this.focusAccel,this.startSize=null!=m?m:this.startSize,this.endSize=null!=y?y:this.endSize,this.minSize=null!=C?C:this.minSize,this.maxSize=null!=x?x:this.maxSize,this.beginColor=null!=w?w:this.beginColor,this.endColor=null!=I?I:this.endColor,this.particleSprite=null!=v?v:this.particleSprite,this.emitterType=null!=E?E:this.emitterType,this.radius=null!=B?B:this.radius,this.particleRotationalVelocity=null!=b?b:this.particleRotationalVelocity,this.randomRotation=null!=S?S:this.randomRotation,this.particleTransform=null!=Q?Q:this.particleTransform,this.body.collisionType=j.PreventCollision,this.random=null!=T?T:new er}removeParticle(t){this.deadParticles.push(t)}/**
     * Causes the emitter to emit particles
     * @param particleCount  Number of particles to emit right now
     */emitParticles(t){var e;for(let i=0;i<t;i++){let t=this._createParticle();this.particles.push(t),(null===(e=this===null||void 0===this?void 0:this.scene)||void 0===e?void 0:e.world)&&(this.particleTransform===tA.Global?this.scene.world.add(t):this.addChild(t))}}clearParticles(){this.particles.length=0}// Creates a new particle given the constraints of the emitter
_createParticle(){// todo implement emitter constraints;
let t=0,e=0,i=eu(this.minAngle,this.maxAngle,this.random),s=eu(this.minVel,this.maxVel,this.random),r=this.startSize||eu(this.minSize,this.maxSize,this.random);if(this.emitterType===tl.Rectangle)t=eu(0,this.width,this.random),e=eu(0,this.height,this.random);else if(this.emitterType===tl.Circle){let s=eu(0,this.radius,this.random);t=s*Math.cos(i),e=s*Math.sin(i)}let n=new rg(this,this.particleLife,this.opacity,this.beginColor,this.endColor,new ep(t,e),new ep(s*Math.cos(i),s*Math.sin(i)),this.acceleration,this.startSize,this.endSize);return n.fadeFlag=this.fadeFlag,n.particleSize=r,this.particleSprite&&(n.particleSprite=this.particleSprite,n.graphics.opacity=this.opacity,n.graphics.use(this._sprite)),n.particleRotationalVelocity=this.particleRotationalVelocity,this.randomRotation&&(n.currentRotation=eu(0,2*Math.PI,this.random)),this.focus&&(n.focus=this.focus.add(new ep(this.pos.x,this.pos.y)),n.focusAccel=this.focusAccel),n}update(t,e){var i;super.update(t,e),this.isEmitting&&(this._particlesToEmit+=this.emitRate*(e/1e3),this._particlesToEmit>1&&(this.emitParticles(Math.floor(this._particlesToEmit)),this._particlesToEmit=this._particlesToEmit-Math.floor(this._particlesToEmit)));// deferred removal
for(let t=0;t<this.deadParticles.length;t++)eI(this.deadParticles[t],this.particles),(null===(i=this===null||void 0===this?void 0:this.scene)||void 0===i?void 0:i.world)&&this.scene.world.remove(this.deadParticles[t],!1);this.deadParticles.length=0}}class r_ extends s5{constructor(){super(...arguments),this.types=["ex.transform","ex.graphics"],this.systemType=to.Draw,this.priority=0,this._token=0,this._sortedTransforms=[],this._zHasChanged=!1,this._zIndexUpdate=()=>{this._zHasChanged=!0}}get sortedTransforms(){return this._sortedTransforms}initialize(t){this._camera=t.camera,this._engine=t.engine}preupdate(){// Graphics context could be switched to fallback in a new frame
this._graphicsContext=this._engine.graphicsContext,this._zHasChanged&&(this._sortedTransforms.sort((t,e)=>t.z-e.z),this._zHasChanged=!1)}notify(t){if(s4(t)){let e=t.data.get(iz);this._sortedTransforms.push(e),e.zIndexChanged$.subscribe(this._zIndexUpdate),this._zHasChanged=!0}else{let e=t.data.get(iz);e.zIndexChanged$.unsubscribe(this._zIndexUpdate);let i=this._sortedTransforms.indexOf(e);i>-1&&this._sortedTransforms.splice(i,1)}}update(t,e){let i;for(let t of(this._token++,sR.checkAndClearCache(),// This is a performance enhancement, most things are in world space
// so if we can only do this once saves a ton of transform updates
this._graphicsContext.save(),this._camera&&this._camera.draw(this._graphicsContext),this._sortedTransforms)){let s=t.owner;// If the entity is offscreen skip
if(s.hasTag("ex.offscreen")||!(i=s.get(sl)).visible)continue;t.coordPlane===X.Screen&&this._graphicsContext.restore(),this._graphicsContext.save(),t.coordPlane===X.Screen&&this._graphicsContext.translate(this._engine.screen.contentArea.left,this._engine.screen.contentArea.top),// Tick any graphics state (but only once) for animations and graphics groups
i.update(e,this._token);// Apply parallax
let r=s.get(sz);if(r){// We use the Tiled formula
// https://doc.mapeditor.org/en/latest/manual/layers/#parallax-scrolling-factor
// cameraPos * (1 - parallaxFactor)
let t=ep.One.sub(r.parallaxFactor),e=this._camera.pos.scale(t);this._graphicsContext.translate(e.x,e.y)}// Position the entity + estimate lag
this._applyTransform(s),i.material&&(this._graphicsContext.material=i.material),i.onPreDraw&&i.onPreDraw(this._graphicsContext,e);// TODO remove this hack on the particle redo
let n=s instanceof rg?s.opacity:1;this._graphicsContext.opacity*=i.opacity*n,// Draw the graphics component
this._drawGraphicsComponent(i),i.onPostDraw&&i.onPostDraw(this._graphicsContext,e),this._graphicsContext.restore(),t.coordPlane===X.Screen&&(this._graphicsContext.save(),this._camera&&this._camera.draw(this._graphicsContext))}this._graphicsContext.restore()}_drawGraphicsComponent(t){var e,i;if(t.visible){let s=t.flipHorizontal,r=t.flipVertical;for(let n of t.layers.get())for(let{graphic:o,options:a}of n.graphics){let h=t.anchor,l=t.offset;(null==a?void 0:a.anchor)&&(h=a.anchor),(null==a?void 0:a.offset)&&(l=a.offset);// See https://github.com/excaliburjs/Excalibur/pull/619 for discussion on this formula
let A=-o.width*h.x+l.x,d=-o.height*h.y+l.y,c=o.flipHorizontal,u=o.flipVertical;if((s||r)&&(// flip any currently flipped graphics
o.flipHorizontal=s?!c:c,o.flipVertical=r?!u:u),null==o||o.draw(this._graphicsContext,A+n.offset.x,d+n.offset.y),(s||r)&&(o.flipHorizontal=c,o.flipVertical=u),(null===(e=this._engine)||void 0===e?void 0:e.isDebug)&&this._engine.debug.graphics.showBounds){let t=e_(A+n.offset.x,d+n.offset.y);if(o instanceof rd)for(let e of o.members)null===(i=e.graphic)||void 0===i||i.localBounds.translate(t.add(e.pos)).draw(this._graphicsContext,this._engine.debug.graphics.boundsColor);else /* istanbul ignore next */null==o||o.localBounds.translate(t).draw(this._graphicsContext,this._engine.debug.graphics.boundsColor)}}}}/**
     * This applies the current entity transform to the graphics context
     * @param entity
     */_applyTransform(t){let e=t.getAncestors();for(let t of e){let e=null==t?void 0:t.get(iz),i=null==t?void 0:t.get(i7),s=e.pos,r=e.scale,n=e.rotation;if(i&&this._engine.fixedUpdateFps&&i.__oldTransformCaptured&&i.enableFixedUpdateInterpolate){// Interpolate graphics if needed
let t=this._engine.currentFrameLagMs/(1e3/this._engine.fixedUpdateFps);s=e.pos.scale(t).add(i.oldPos.scale(1-t)),r=e.scale.scale(t).add(i.oldScale.scale(1-t));// Rotational lerp https://stackoverflow.com/a/30129248
let o=(1-t)*Math.cos(i.oldRotation)+t*Math.cos(e.rotation),a=(1-t)*Math.sin(i.oldRotation)+t*Math.sin(e.rotation);n=Math.atan2(a,o)}e&&(this._graphicsContext.z=e.z,this._graphicsContext.translate(s.x,s.y),this._graphicsContext.scale(r.x,r.y),this._graphicsContext.rotate(n))}}}class rf extends s5{constructor(){super(...arguments),this.types=["ex.transform"],this.systemType=to.Draw,this.priority=999}initialize(t){this._graphicsContext=t.engine.graphicsContext,this._camera=t.camera,this._engine=t.engine,this._collisionSystem=t.world.systemManager.get(rl)}update(t,e){var i;let s,r,n,o,a,h,l,A;if(!this._engine.isDebug)return;let d=this._engine.debug.filter,c=this._engine.debug.entity,u=this._engine.debug.transform,g=this._engine.debug.motion,p=this._engine.debug.collider,_=this._engine.debug.physics,f=this._engine.debug.graphics,m=this._engine.debug.body,y=this._engine.debug.camera;for(let e of t){if(e.hasTag("offscreen")||e instanceof rg)continue;if(d.useFilter){let t=0===d.ids.length,i=t||d.ids.includes(e.id);if(!i)continue;let s=""===d.nameQuery,r=s||e.name.includes(d.nameQuery);if(!r)continue}let t=ep.Zero,_=e_(0,16);if(s=e.id,r=e.name,n=e.get(iz),// This optionally sets our camera based on the entity coord plan (world vs. screen)
this._pushCameraTransform(n),this._graphicsContext.save(),this._applyTransform(e),n&&((u.showAll||u.showPosition)&&this._graphicsContext.debug.drawPoint(ep.Zero,{size:4,color:u.positionColor}),(u.showAll||u.showPositionLabel)&&(this._graphicsContext.debug.drawText(`pos${n.pos.toString(2)}`,t),t=t.add(_)),(u.showAll||u.showZIndex)&&(this._graphicsContext.debug.drawText(`z(${n.z.toFixed(1)})`,t),t=t.add(_)),(c.showAll||c.showId)&&(this._graphicsContext.debug.drawText(`id(${s}) ${e.parent?"child of id("+(null===(i=e.parent)||void 0===i?void 0:i.id)+")":""}`,t),t=t.add(_)),(c.showAll||c.showName)&&(this._graphicsContext.debug.drawText(`name(${r})`,t),t=t.add(_)),(u.showAll||u.showRotation)&&(this._graphicsContext.drawLine(ep.Zero,ep.fromAngle(n.rotation).scale(50).add(ep.Zero),u.rotationColor,2),this._graphicsContext.debug.drawText(`rot deg(${eA(n.rotation).toFixed(2)})`,t),t=t.add(_)),(u.showAll||u.showScale)&&this._graphicsContext.drawLine(ep.Zero,n.scale.add(ep.Zero),u.scaleColor,2)),(h=e.get(sl))&&(f.showAll||f.showBounds)){let t=h.localBounds;t.draw(this._graphicsContext,f.boundsColor)}if((l=e.get(sO))&&(l.useTransform||this._graphicsContext.restore(),l.draw(this._graphicsContext),l.useTransform||(this._graphicsContext.save(),this._applyTransform(e))),(A=e.get(i7))&&((m.showAll||m.showCollisionGroup)&&(this._graphicsContext.debug.drawText(`collision group(${A.group.name})`,t),t=t.add(_)),(m.showAll||m.showCollisionType)&&(this._graphicsContext.debug.drawText(`collision type(${A.collisionType})`,t),t=t.add(_)),(m.showAll||m.showMass)&&(this._graphicsContext.debug.drawText(`mass(${A.mass})`,t),t=t.add(_)),(m.showAll||m.showMotion)&&(this._graphicsContext.debug.drawText(`motion(${A.sleepMotion})`,t),t=t.add(_)),(m.showAll||m.showSleeping)&&(this._graphicsContext.debug.drawText(`sleeping(${A.canSleep?A.sleeping:"cant sleep"})`,t),t=t.add(_))),this._graphicsContext.restore(),(o=e.get(iO))&&((g.showAll||g.showVelocity)&&(this._graphicsContext.debug.drawText(`vel${o.vel.toString(2)}`,t.add(n.globalPos)),this._graphicsContext.drawLine(n.globalPos,n.globalPos.add(o.vel),g.velocityColor,2),t=t.add(_)),(g.showAll||g.showAcceleration)&&this._graphicsContext.drawLine(n.globalPos,n.globalPos.add(o.acc),g.accelerationColor,2)),// Colliders live in world space already so after the restore()
a=e.get(i9)){let t=a.get();if((p.showAll||p.showGeometry)&&t&&t.debug(this._graphicsContext,p.geometryColor),p.showAll||p.showBounds){if(t instanceof iX){let e=t.getColliders();for(let t of e){let e=t.bounds,i=e_(e.left,e.top);this._graphicsContext.debug.drawRect(i.x,i.y,e.width,e.height,{color:p.boundsColor}),(p.showAll||p.showOwner)&&this._graphicsContext.debug.drawText(`owner id(${t.owner.id})`,i)}a.bounds.draw(this._graphicsContext,p.boundsColor)}else if(t){let t=a.bounds,e=e_(t.left,t.top);this._graphicsContext.debug.drawRect(e.x,e.y,t.width,t.height,{color:p.boundsColor}),(p.showAll||p.showOwner)&&this._graphicsContext.debug.drawText(`owner id(${a.owner.id})`,e)}}}this._popCameraTransform(n)}if(this._graphicsContext.save(),this._camera.draw(this._graphicsContext),(_.showAll||_.showBroadphaseSpacePartitionDebug)&&this._collisionSystem.debug(this._graphicsContext),_.showAll||_.showCollisionContacts||_.showCollisionNormals)for(let[t,e]of this._engine.debug.stats.currFrame.physics.contacts){if(_.showAll||_.showCollisionContacts)for(let t of e.points)this._graphicsContext.debug.drawPoint(t,{size:5,color:_.collisionContactColor});if(_.showAll||_.showCollisionNormals)for(let t of e.points)this._graphicsContext.debug.drawLine(t,e.normal.scale(30).add(t),{color:_.collisionNormalColor})}this._graphicsContext.restore(),y&&(this._graphicsContext.save(),this._camera.draw(this._graphicsContext),(y.showAll||y.showFocus)&&this._graphicsContext.drawCircle(this._camera.pos,4,y.focusColor),(y.showAll||y.showZoom)&&this._graphicsContext.debug.drawText(`zoom(${this._camera.zoom})`,this._camera.pos),this._graphicsContext.restore()),this._graphicsContext.flush()}/**
     * This applies the current entity transform to the graphics context
     * @param entity
     */_applyTransform(t){let e=t.getAncestors();for(let t of e){let e=null==t?void 0:t.get(iz);e&&(this._graphicsContext.translate(e.pos.x,e.pos.y),this._graphicsContext.scale(e.scale.x,e.scale.y),this._graphicsContext.rotate(e.rotation))}}/**
     * Applies the current camera transform if in world coordinates
     * @param transform
     */_pushCameraTransform(t){// Establish camera offset per entity
t.coordPlane===X.World&&(this._graphicsContext.save(),this._camera&&this._camera.draw(this._graphicsContext))}/**
     * Resets the current camera transform if in world coordinates
     * @param transform
     */_popCameraTransform(t){t.coordPlane===X.World&&this._graphicsContext.restore()}}/**
 * The PointerSystem is responsible for dispatching pointer events to entities
 * that need them.
 *
 * The PointerSystem can be optionally configured by the [[PointerComponent]], by default Entities use
 * the [[Collider]]'s shape for pointer events.
 */class rm extends s5{constructor(){super(...arguments),this.types=["ex.transform","ex.pointer"],this.systemType=to.Update,this.priority=-1,/**
         * Optionally override component configuration for all entities
         */this.overrideUseColliderShape=!1,/**
         * Optionally override component configuration for all entities
         */this.overrideUseGraphicsBounds=!1,this.lastFrameEntityToPointers=new Map,this.currentFrameEntityToPointers=new Map,this._sortedTransforms=[],this._sortedEntities=[],this._zHasChanged=!1,this._zIndexUpdate=()=>{this._zHasChanged=!0}}initialize(t){this._engine=t.engine}preupdate(){// event receiver might change per frame
this._receiver=this._engine.input.pointers,this._zHasChanged&&(this._sortedTransforms.sort((t,e)=>e.z-t.z),this._sortedEntities=this._sortedTransforms.map(t=>t.owner),this._zHasChanged=!1)}notify(t){if(s4(t)){let e=t.data.get(iz);this._sortedTransforms.push(e),this._sortedEntities.push(e.owner),e.zIndexChanged$.subscribe(this._zIndexUpdate),this._zHasChanged=!0}else{let e=t.data.get(iz);e.zIndexChanged$.unsubscribe(this._zIndexUpdate);let i=this._sortedTransforms.indexOf(e);i>-1&&(this._sortedTransforms.splice(i,1),this._sortedEntities.splice(i,1))}}entityCurrentlyUnderPointer(t,e){return this.currentFrameEntityToPointers.has(t.id)&&this.currentFrameEntityToPointers.get(t.id).includes(e)}entityWasUnderPointer(t,e){return this.lastFrameEntityToPointers.has(t.id)&&this.lastFrameEntityToPointers.get(t.id).includes(e)}entered(t,e){return this.entityCurrentlyUnderPointer(t,e)&&!this.lastFrameEntityToPointers.has(t.id)}left(t,e){return!this.currentFrameEntityToPointers.has(t.id)&&this.entityWasUnderPointer(t,e)}addPointerToEntity(t,e){if(!this.currentFrameEntityToPointers.has(t.id)){this.currentFrameEntityToPointers.set(t.id,[e]);return}let i=this.currentFrameEntityToPointers.get(t.id);this.currentFrameEntityToPointers.set(t.id,i.concat(e))}update(t){// Locate all the pointer/entity mappings
this._processPointerToEntity(this._sortedEntities),// Dispatch pointer events on entities
this._dispatchEvents(this._sortedEntities),// Clear last frame's events
this._receiver.update(),this.lastFrameEntityToPointers.clear(),this.lastFrameEntityToPointers=new Map(this.currentFrameEntityToPointers),this.currentFrameEntityToPointers.clear(),this._receiver.clear()}_processPointerToEntity(t){var e;let i,s,r,n;// TODO probably a spatial partition optimization here to quickly query bounds for pointer
// doesn't seem to cause issues tho for perf
// Pre-process find entities under pointers
for(let o of t){if(i=o.get(iz),n=null!==(e=o.get(sc))&&void 0!==e?e:new sc,// Check collider contains pointer
(s=o.get(i9))&&(n.useColliderShape||this.overrideUseColliderShape)){s.update();let t=s.get();if(t)for(let[e,s]of this._receiver.currentFramePointerCoords.entries())t.contains(i.coordPlane===X.World?s.worldPos:s.screenPos)&&this.addPointerToEntity(o,e)}if(// Check graphics contains pointer
(r=o.get(sl))&&(n.useGraphicsBounds||this.overrideUseGraphicsBounds)){let t=r.localBounds.transform(i.get().matrix);for(let[e,s]of this._receiver.currentFramePointerCoords.entries())t.contains(i.coordPlane===X.World?s.worldPos:s.screenPos)&&this.addPointerToEntity(o,e)}}}_processDownAndEmit(t){let e=new Map;// Loop through down and dispatch to entities
for(let i of this._receiver.currentFrameDown)i.active&&t.active&&this.entityCurrentlyUnderPointer(t,i.pointerId)&&(t.events.emit("pointerdown",i),this._receiver.isDragStart(i.pointerId)&&t.events.emit("pointerdragstart",i)),e.set(i.pointerId,i);return e}_processUpAndEmit(t){let e=new Map;// Loop through up and dispatch to entities
for(let i of this._receiver.currentFrameUp)i.active&&t.active&&this.entityCurrentlyUnderPointer(t,i.pointerId)&&(t.events.emit("pointerup",i),this._receiver.isDragEnd(i.pointerId)&&t.events.emit("pointerdragend",i)),e.set(i.pointerId,i);return e}_processMoveAndEmit(t){let e=new Map;// Loop through move and dispatch to entities
for(let i of this._receiver.currentFrameMove)i.active&&t.active&&this.entityCurrentlyUnderPointer(t,i.pointerId)&&(// move
t.events.emit("pointermove",i),this._receiver.isDragging(i.pointerId)&&t.events.emit("pointerdragmove",i)),e.set(i.pointerId,i);return e}_processEnterLeaveAndEmit(t,e){// up, down, and move are considered for enter and leave
for(let i of e){// enter
if(i.active&&t.active&&this.entered(t,i.pointerId)){t.events.emit("pointerenter",i),this._receiver.isDragging(i.pointerId)&&t.events.emit("pointerdragenter",i);break}if(i.active&&t.active&&// leave can happen on move
(this.left(t,i.pointerId)||// or leave can happen on pointer up
this.entityCurrentlyUnderPointer(t,i.pointerId)&&"up"===i.type)){t.events.emit("pointerleave",i),this._receiver.isDragging(i.pointerId)&&t.events.emit("pointerdragleave",i);break}}}_processCancelAndEmit(t){// cancel
for(let e of this._receiver.currentFrameCancel)e.active&&t.active&&this.entityCurrentlyUnderPointer(t,e.pointerId)&&t.events.emit("pointercancel",e)}_processWheelAndEmit(t){// wheel
for(let e of this._receiver.currentFrameWheel)e.active&&t.active&&this.entityCurrentlyUnderPointer(t,0)&&t.events.emit("pointerwheel",e)}_dispatchEvents(t){let e,i,s;let r=new Set(this.lastFrameEntityToPointers.keys()),n=new Set(this.currentFrameEntityToPointers.keys()),o=t.filter(t=>r.has(t.id)||n.has(t.id));// Dispatch events in entity z order
for(let t of o){s=this._processDownAndEmit(t),i=this._processUpAndEmit(t),e=this._processMoveAndEmit(t);let r=[...e.values(),...s.values(),...i.values()];this._processEnterLeaveAndEmit(t,r),this._processCancelAndEmit(t),this._processWheelAndEmit(t)}}}class ry extends s5{constructor(){super(...arguments),this.types=["ex.actions"],this.systemType=to.Update,this.priority=-1,this._actions=[]}notify(t){if(s4(t)){let e=t.data.get(sk);this._actions.push(e)}else{let e=t.data.get(sk),i=this._actions.indexOf(e);i>-1&&this._actions.splice(i,1)}}update(t,e){for(let t of this._actions)t.update(e)}}class rC extends iN{/**
     * Specify the isometric map to use to position this entity's z-index
     * @param map
     */constructor(t){super(),this.type="ex.isometricentity",/**
         * Vertical "height" in the isometric world
         */this.elevation=0,this.map=t}}class rx extends s5{constructor(){super(...arguments),this.types=["ex.transform","ex.isometricentity"],this.systemType=to.Update,this.priority=99}update(t,e){let i,s;for(let e of t){i=e.get(iz),s=e.get(rC);let t=Math.max(s.map.columns*s.map.tileWidth,s.map.rows*s.map.tileHeight),r=t*s.elevation+i.pos.y;i.z=r}}}class rw extends s5{constructor(){super(...arguments),this.types=["ex.transform","ex.graphics"],this.systemType=to.Draw,this.priority=-1}initialize(t){this._camera=t.camera,this._screen=t.engine.screen}update(t){let e,i,s;for(let r of(this._worldBounds=this._screen.getWorldBounds(),t)){let t;if(i=r.get(sl),e=r.get(iz),s=r.get(sz)){// We use the Tiled formula
// https://doc.mapeditor.org/en/latest/manual/layers/#parallax-scrolling-factor
// cameraPos * (1 - parallaxFactor)
let e=ep.One.sub(s.parallaxFactor);t=this._camera.pos.scale(e)}// Figure out if entities are offscreen
let n=this._isOffscreen(e,i,t);n&&!r.hasTag("ex.offscreen")&&(r.events.emit("exitviewport",new t5(r)),r.addTag("ex.offscreen")),!n&&r.hasTag("ex.offscreen")&&(r.events.emit("enterviewport",new t3(r)),r.removeTag("ex.offscreen"))}}_isOffscreen(t,e,i){if(t.coordPlane!==X.World)return!1;{let s=e.localBounds;i&&(s=s.translate(i));let r=s.transform(t.get().matrix),n=!this._worldBounds.overlaps(r);return n}}}class rI{constructor(){this.collisionProcessor=new iW}rayCast(t,e){return this.collisionProcessor.rayCast(t,e)}}let rv={Initialize:"initialize",Activate:"activate",Deactivate:"deactivate",PreUpdate:"preupdate",PostUpdate:"postupdate",PreDraw:"predraw",PostDraw:"postdraw",PreDebugDraw:"predebugdraw",PostDebugDraw:"postdebugdraw"};/**
 * [[Actor|Actors]] are composed together into groupings called Scenes in
 * Excalibur. The metaphor models the same idea behind real world
 * actors in a scene. Only actors in scenes will be updated and drawn.
 *
 * Typical usages of a scene include: levels, menus, loading screens, etc.
 */class rE{/**
     * The actors in the current scene
     */get actors(){return this.world.entityManager.entities.filter(t=>t instanceof sL)}/**
     * The entities in the current scene
     */get entities(){return this.world.entityManager.entities}/**
     * The triggers in the current scene
     */get triggers(){return this.world.entityManager.entities.filter(t=>t instanceof s2)}/**
     * The [[TileMap]]s in the scene, if any
     */get tileMaps(){return this.world.entityManager.entities.filter(t=>t instanceof sq)}get timers(){return this._timers}constructor(){// Initialize systems
this._logger=t9.getInstance(),this.events=new tE,/**
         * Gets or sets the current camera for the scene
         */this.camera=new s$,/**
         * The ECS world for the scene
         */this.world=new rs(this),/**
         * The Excalibur physics world for the scene. Used to interact
         * with colliders included in the scene.
         *
         * Can be used to perform scene ray casts, track colliders, broadphase, and narrowphase.
         */this.physics=new rI,this._isInitialized=!1,this._timers=[],this._cancelQueue=[],// Update
this.world.add(new ry),this.world.add(new rn),this.world.add(new rl(this.physics)),this.world.add(new rm),this.world.add(new rx),// Draw
this.world.add(new rw),this.world.add(new r_),this.world.add(new rf)}emit(t,e){this.events.emit(t,e)}on(t,e){return this.events.on(t,e)}once(t,e){return this.events.once(t,e)}off(t,e){this.events.off(t,e)}/**
     * This is called before the first update of the [[Scene]]. Initializes scene members like the camera. This method is meant to be
     * overridden. This is where initialization of child actors should take place.
     */onInitialize(t){// will be overridden
}/**
     * This is called when the scene is made active and started. It is meant to be overridden,
     * this is where you should setup any DOM UI or event handlers needed for the scene.
     */onActivate(t){// will be overridden
}/**
     * This is called when the scene is made transitioned away from and stopped. It is meant to be overridden,
     * this is where you should cleanup any DOM UI or event handlers needed for the scene.
     */onDeactivate(t){// will be overridden
}/**
     * Safe to override onPreUpdate lifecycle event handler. Synonymous with `.on('preupdate', (evt) =>{...})`
     *
     * `onPreUpdate` is called directly before a scene is updated.
     */onPreUpdate(t,e){// will be overridden
}/**
     * Safe to override onPostUpdate lifecycle event handler. Synonymous with `.on('preupdate', (evt) =>{...})`
     *
     * `onPostUpdate` is called directly after a scene is updated.
     */onPostUpdate(t,e){// will be overridden
}/**
     * Safe to override onPreDraw lifecycle event handler. Synonymous with `.on('preupdate', (evt) =>{...})`
     *
     * `onPreDraw` is called directly before a scene is drawn.
     *
     */onPreDraw(t,e){// will be overridden
}/**
     * Safe to override onPostDraw lifecycle event handler. Synonymous with `.on('preupdate', (evt) =>{...})`
     *
     * `onPostDraw` is called directly after a scene is drawn.
     *
     */onPostDraw(t,e){// will be overridden
}/**
     * Initializes actors in the scene
     */_initializeChildren(){for(let t of this.entities)t._initialize(this.engine)}/**
     * Gets whether or not the [[Scene]] has been initialized
     */get isInitialized(){return this._isInitialized}/**
     * It is not recommended that internal excalibur methods be overridden, do so at your own risk.
     *
     * Initializes the scene before the first update, meant to be called by engine not by users of
     * Excalibur
     * @internal
     */_initialize(t){this.isInitialized||(this.engine=t,// Initialize camera first
this.camera._initialize(t),this.world.systemManager.initialize(),// This order is important! we want to be sure any custom init that add actors
// fire before the actor init
this.onInitialize.call(this,t),this._initializeChildren(),this._logger.debug("Scene.onInitialize",this,t),this.events.emit("initialize",new t0(t,this)),this._isInitialized=!0)}/**
     * It is not recommended that internal excalibur methods be overridden, do so at your own risk.
     *
     * Activates the scene with the base behavior, then calls the overridable `onActivate` implementation.
     * @internal
     */_activate(t){this._logger.debug("Scene.onActivate",this),this.onActivate(t)}/**
     * It is not recommended that internal excalibur methods be overridden, do so at your own risk.
     *
     * Deactivates the scene with the base behavior, then calls the overridable `onDeactivate` implementation.
     * @internal
     */_deactivate(t){this._logger.debug("Scene.onDeactivate",this),this.onDeactivate(t)}/**
     * It is not recommended that internal excalibur methods be overridden, do so at your own risk.
     *
     * Internal _preupdate handler for [[onPreUpdate]] lifecycle event
     * @internal
     */_preupdate(t,e){this.emit("preupdate",new tM(t,e,this)),this.onPreUpdate(t,e)}/**
     *  It is not recommended that internal excalibur methods be overridden, do so at your own risk.
     *
     * Internal _preupdate handler for [[onPostUpdate]] lifecycle event
     * @internal
     */_postupdate(t,e){this.emit("postupdate",new tL(t,e,this)),this.onPostUpdate(t,e)}/**
     * It is not recommended that internal excalibur methods be overridden, do so at your own risk.
     *
     * Internal _predraw handler for [[onPreDraw]] lifecycle event
     *
     * @internal
     */_predraw(t,e){this.emit("predraw",new tF(t,e,this)),this.onPreDraw(t,e)}/**
     * It is not recommended that internal excalibur methods be overridden, do so at your own risk.
     *
     * Internal _postdraw handler for [[onPostDraw]] lifecycle event
     *
     * @internal
     */_postdraw(t,e){this.emit("postdraw",new tk(t,e,this)),this.onPostDraw(t,e)}/**
     * Updates all the actors and timers in the scene. Called by the [[Engine]].
     * @param engine  Reference to the current Engine
     * @param delta   The number of milliseconds since the last update
     */update(t,e){let i,s;// Remove timers in the cancel queue before updating them
for(this._preupdate(t,e),i=0,s=this._cancelQueue.length;i<s;i++)this.removeTimer(this._cancelQueue[i]);// Cycle through timers updating timers
for(let t of(this._cancelQueue.length=0,this._timers))t.update(e);this.world.update(to.Update,e),this.camera&&this.camera.update(t,e),this._collectActorStats(t),this._postupdate(t,e)}/**
     * Draws all the actors in the Scene. Called by the [[Engine]].
     *
     * @param ctx    The current rendering context
     * @param delta  The number of milliseconds since the last draw
     */draw(t,e){var i;this._predraw(t,e),this.world.update(to.Draw,e),(null===(i=this.engine)||void 0===i?void 0:i.isDebug)&&this.debugDraw(t),this._postdraw(t,e)}/**
     * Draws all the actors' debug information in the Scene. Called by the [[Engine]].
     * @param ctx  The current rendering context
     *//* istanbul ignore next */debugDraw(t){this.emit("predebugdraw",new tP(t,this)),// pass
this.emit("postdebugdraw",new tR(t,this))}/**
     * Checks whether an actor is contained in this scene or not
     */contains(t){return this.actors.indexOf(t)>-1}add(t){if(this.emit("entityadded",{target:t}),this.world.add(t),t.scene=this,t instanceof sG){ev(this._timers,t)||this.addTimer(t);return}}/**
     * Removes an [[Entity]] (Actor, TileMap, Trigger, etc) or [[Timer]] from it's current scene
     * and adds it to this scene.
     *
     * Useful if you want to have an object be present in only 1 scene at a time.
     * @param entity
     */transfer(t){let e;t instanceof sn&&t.scene&&t.scene!==this&&(e=t.scene,t.scene.world.remove(t,!1)),t instanceof sG&&t.scene&&(e=t.scene,t.scene.removeTimer(t)),null==e||e.emit("entityremoved",{target:t}),this.add(t)}remove(t){t instanceof sn&&(this.emit("entityremoved",{target:t}),t.active&&t.kill(),this.world.remove(t)),t instanceof sG&&this.removeTimer(t)}/**
     * Removes all entities and timers from the scene, optionally indicate whether deferred should or shouldn't be used.
     *
     * By default entities use deferred removal
     * @param deferred
     */clear(t=!0){for(let e of this.entities)this.world.remove(e,t);for(let t of this.timers)this.removeTimer(t)}/**
     * Adds a [[Timer]] to the scene
     * @param timer  The timer to add
     */addTimer(t){return this._timers.push(t),t.scene=this,t}/**
     * Removes a [[Timer]] from the scene.
     * @warning Can be dangerous, use [[cancelTimer]] instead
     * @param timer  The timer to remove
     */removeTimer(t){let e=this._timers.indexOf(t);return -1!==e&&this._timers.splice(e,1),t}/**
     * Cancels a [[Timer]], removing it from the scene nicely
     * @param timer  The timer to cancel
     */cancelTimer(t){return this._cancelQueue.push(t),t}/**
     * Tests whether a [[Timer]] is active in the scene
     */isTimerActive(t){return this._timers.indexOf(t)>-1&&!t.complete}isCurrentScene(){return!!this.engine&&this.engine.currentScene===this}_collectActorStats(t){let e=this.actors.filter(t=>t instanceof sU);for(let i of e)t.stats.currFrame.actors.ui++;for(let e of this.actors)for(let i of(t.stats.currFrame.actors.alive++,e.children))sN(i)?t.stats.currFrame.actors.ui++:t.stats.currFrame.actors.alive++}}(D=td||(td={})).Protanope="Protanope",D.Deuteranope="Deuteranope",D.Tritanope="Tritanope";/**
 * Helper that defines a whole screen renderer, just provide a fragment source!
 *
 * Currently supports 1 varying
 * - vec2 a_texcoord between 0-1 which corresponds to screen position
 */class rB{constructor(t,e){this._shader=new ej({gl:t,vertexSource:`#version 300 es
      in vec2 a_position;
      in vec2 a_texcoord;
      out vec2 v_texcoord;

      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
        // Pass the texcoord to the fragment shader.
        v_texcoord = a_texcoord;
      }`,fragmentSource:e}),this._shader.compile(),// Setup memory layout
this._buffer=new eK({gl:t,type:"static",// clip space quad + uv since we don't need a camera
data:new Float32Array([-1,-1,0,0,-1,1,0,1,1,-1,1,0,1,-1,1,0,-1,1,0,1,1,1,1,1])}),this._layout=new eW({gl:t,shader:this._shader,vertexBuffer:this._buffer,attributes:[["a_position",2],["a_texcoord",2]]}),this._buffer.upload()}getShader(){return this._shader}getLayout(){return this._layout}}class rb{constructor(t,e=!1){this._colorBlindnessMode=t,this._simulate=!1,this._simulate=e}initialize(t){this._shader=new rB(t,"#version 300 es\r\nprecision mediump float;\r\n// our texture\r\nuniform sampler2D u_image;\r\n// the texCoords passed in from the vertex shader.\r\nin vec2 v_texcoord;\r\n\r\n// color blind type\r\nuniform int u_type;\r\n\r\n// simulation?\r\nuniform bool u_simulate;\r\n\r\nout vec4 fragColor;\r\n\r\nvoid main() {\r\n  vec4 o =  texture(u_image, v_texcoord);\r\n  // RGB to LMS matrix conversion\r\n  float L = (17.8824 * o.r) + (43.5161 * o.g) + (4.11935 * o.b);\r\n  float M = (3.45565 * o.r) + (27.1554 * o.g) + (3.86714 * o.b);\r\n  float S = (0.0299566 * o.r) + (0.184309 * o.g) + (1.46709 * o.b);\r\n  // Simulate color blindness\r\n  float l;\r\n  float m;\r\n  float s;\r\n  //MODE CODE//\r\n  if (u_type == 0) {\r\n    // Protanope\r\n    l = 0.0 * L + 2.02344 * M + -2.52581 * S;\r\n    m = 0.0 * L + 1.0 * M + 0.0 * S;\r\n    s = 0.0 * L + 0.0 * M + 1.0 * S;;\r\n  } else if (u_type == 1) {\r\n    // Deuteranope\r\n    l = 1.0 * L + 0.0 * M + 0.0 * S;\r\n    m = 0.494207 * L + 0.0 * M + 1.24827 * S;\r\n    s = 0.0 * L + 0.0 * M + 1.0 * S;\r\n  } else if (u_type == 2) {\r\n    // Tritanope\r\n    l = 1.0 * L + 0.0 * M + 0.0 * S;\r\n    m = 0.0 * L + 1.0 * M + 0.0 * S;\r\n    s = -0.395913 * L + 0.801109 * M + 0.0 * S;\r\n  }\r\n\r\n  // LMS to RGB matrix conversion\r\n  vec4 error; // simulate the colors\r\n  error.r = (0.0809444479 * l) + (-0.130504409 * m) + (0.116721066 * s);\r\n  error.g = (-0.0102485335 * l) + (0.0540193266 * m) + (-0.113614708 * s);\r\n  error.b = (-0.000365296938 * l) + (-0.00412161469 * m) + (0.693511405 * s);\r\n  error.a = 1.0;\r\n  vec4 diff = o - error;\r\n  vec4 correction; // correct the colors\r\n  correction.r = 0.0;\r\n  correction.g =  (diff.r * 0.7) + (diff.g * 1.0);\r\n  correction.b =  (diff.r * 0.7) + (diff.b * 1.0);\r\n  correction = o + correction;\r\n  correction.a = o.a;\r\n  //SIMULATE//\r\n\r\n  // sim \r\n  if (u_simulate) {\r\n    fragColor = error.rgba;\r\n  } else {\r\n    fragColor = correction.rgba;\r\n  }\r\n}"),this.simulate=this._simulate,this.colorBlindnessMode=this._colorBlindnessMode}getShader(){return this._shader.getShader()}getLayout(){return this._shader.getLayout()}set colorBlindnessMode(t){if(this._colorBlindnessMode=t,this._shader){let t=this._shader.getShader();t.use(),this._colorBlindnessMode===td.Protanope?t.setUniformInt("u_type",0):this._colorBlindnessMode===td.Deuteranope?t.setUniformInt("u_type",1):this._colorBlindnessMode===td.Tritanope&&t.setUniformInt("u_type",2)}}get colorBlindnessMode(){return this._colorBlindnessMode}set simulate(t){if(this._simulate=t,this._shader){let e=this._shader.getShader();e.use(),e.setUniformBoolean("u_simulate",t)}}get simulate(){return this._simulate}}class rQ{constructor(t){this._engine=t,this._colorBlindPostProcessor=new rb(td.Protanope)}/**
     * Correct colors for a specified color blindness
     * @param colorBlindness
     */correct(t){this._engine.graphicsContext instanceof ie&&(this.clear(),this._colorBlindPostProcessor.colorBlindnessMode=t,this._colorBlindPostProcessor.simulate=!1,this._engine.graphicsContext.addPostProcessor(this._colorBlindPostProcessor))}/**
     * Simulate colors for a specified color blindness
     * @param colorBlindness
     */simulate(t){this._engine.graphicsContext instanceof ie&&(this.clear(),this._colorBlindPostProcessor.colorBlindnessMode=t,this._colorBlindPostProcessor.simulate=!0,this._engine.graphicsContext.addPostProcessor(this._colorBlindPostProcessor))}/**
     * Remove color blindness post processor
     */clear(){this._engine.graphicsContext.removePostProcessor(this._colorBlindPostProcessor)}}/**
 * Debug statistics and flags for Excalibur. If polling these values, it would be
 * best to do so on the `postupdate` event for [[Engine]], after all values have been
 * updated during a frame.
 */class rS{constructor(t){/**
         * Performance statistics
         */this.stats={/**
             * Current frame statistics. Engine reuses this instance, use [[FrameStats.clone]] to copy frame stats.
             * Best accessed on [[postframe]] event. See [[FrameStats]]
             */currFrame:new rT,/**
             * Previous frame statistics. Engine reuses this instance, use [[FrameStats.clone]] to copy frame stats.
             * Best accessed on [[preframe]] event. Best inspected on engine event `preframe`. See [[FrameStats]]
             */prevFrame:new rT},/**
         * Filter debug context to named entities or entity ids
         */this.filter={/**
             * Toggle filter on or off (default off) must be on for DebugDraw to use filters
             */useFilter:!1,/**
             * Query for entities by name, if the entity name contains `nameQuery` it will be included
             */nameQuery:"",/**
             * Query for Entity ids, if the id matches it will be included
             */ids:[]},/**
         * Entity debug settings
         */this.entity={showAll:!1,showId:!0,showName:!1},/**
         * Transform component debug settings
         */this.transform={showAll:!1,showPosition:!1,showPositionLabel:!1,positionColor:ef.Yellow,showZIndex:!1,showScale:!1,scaleColor:ef.Green,showRotation:!1,rotationColor:ef.Blue},/**
         * Graphics component debug settings
         */this.graphics={showAll:!1,showBounds:!0,boundsColor:ef.Yellow},/**
         * Collider component debug settings
         */this.collider={showAll:!1,showBounds:!0,boundsColor:ef.Blue,showOwner:!1,showGeometry:!0,geometryColor:ef.Green},/**
         * Physics simulation debug settings
         */this.physics={showAll:!1,showBroadphaseSpacePartitionDebug:!1,showCollisionNormals:!1,collisionNormalColor:ef.Cyan,showCollisionContacts:!0,collisionContactColor:ef.Red},/**
         * Motion component debug settings
         */this.motion={showAll:!1,showVelocity:!1,velocityColor:ef.Yellow,showAcceleration:!1,accelerationColor:ef.Red},/**
         * Body component debug settings
         */this.body={showAll:!1,showCollisionGroup:!1,showCollisionType:!1,showSleeping:!1,showMotion:!1,showMass:!1},/**
         * Camera debug settings
         */this.camera={showAll:!1,showFocus:!1,focusColor:ef.Red,showZoom:!1},this._engine=t,this.colorBlindMode=new rQ(this._engine)}/**
     * Switch the current excalibur clock with the [[TestClock]] and return
     * it in the same running state.
     *
     * This is useful when you need to debug frame by frame.
     */useTestClock(){let t=this._engine.clock,e=t.isRunning();t.stop();let i=t.toTestClock();return e&&i.start(),this._engine.clock=i,i}/**
     * Switch the current excalibur clock with the [[StandardClock]] and
     * return it in the same running state.
     *
     * This is useful when you need to switch back to normal mode after
     * debugging.
     */useStandardClock(){let t=this._engine.clock,e=t.isRunning();t.stop();let i=t.toStandardClock();return e&&i.start(),this._engine.clock=i,i}}/**
 * Implementation of a frame's stats. Meant to have values copied via [[FrameStats.reset]], avoid
 * creating instances of this every frame.
 */class rT{constructor(){this._id=0,this._delta=0,this._fps=0,this._actorStats={alive:0,killed:0,ui:0,get remaining(){return this.alive-this.killed},get total(){return this.remaining+this.ui}},this._durationStats={update:0,draw:0,get total(){return this.update+this.draw}},this._physicsStats=new rD,this._graphicsStats={drawCalls:0,drawnImages:0}}/**
     * Zero out values or clone other IFrameStat stats. Allows instance reuse.
     *
     * @param [otherStats] Optional stats to clone
     */reset(t){t?(this.id=t.id,this.delta=t.delta,this.fps=t.fps,this.actors.alive=t.actors.alive,this.actors.killed=t.actors.killed,this.actors.ui=t.actors.ui,this.duration.update=t.duration.update,this.duration.draw=t.duration.draw,this._physicsStats.reset(t.physics),this.graphics.drawCalls=t.graphics.drawCalls,this.graphics.drawnImages=t.graphics.drawnImages):(this.id=this.delta=this.fps=0,this.actors.alive=this.actors.killed=this.actors.ui=0,this.duration.update=this.duration.draw=0,this._physicsStats.reset(),this.graphics.drawnImages=this.graphics.drawCalls=0)}/**
     * Provides a clone of this instance.
     */clone(){let t=new rT;return t.reset(this),t}/**
     * Gets the frame's id
     */get id(){return this._id}/**
     * Sets the frame's id
     */set id(t){this._id=t}/**
     * Gets the frame's delta (time since last frame)
     */get delta(){return this._delta}/**
     * Sets the frame's delta (time since last frame). Internal use only.
     * @internal
     */set delta(t){this._delta=t}/**
     * Gets the frame's frames-per-second (FPS)
     */get fps(){return this._fps}/**
     * Sets the frame's frames-per-second (FPS). Internal use only.
     * @internal
     */set fps(t){this._fps=t}/**
     * Gets the frame's actor statistics
     */get actors(){return this._actorStats}/**
     * Gets the frame's duration statistics
     */get duration(){return this._durationStats}/**
     * Gets the frame's physics statistics
     */get physics(){return this._physicsStats}/**
     * Gets the frame's graphics statistics
     */get graphics(){return this._graphicsStats}}class rD{constructor(){this._pairs=0,this._collisions=0,this._contacts=new Map,this._fastBodies=0,this._fastBodyCollisions=0,this._broadphase=0,this._narrowphase=0}/**
     * Zero out values or clone other IPhysicsStats stats. Allows instance reuse.
     *
     * @param [otherStats] Optional stats to clone
     */reset(t){t?(this.pairs=t.pairs,this.collisions=t.collisions,this.contacts=t.contacts,this.fastBodies=t.fastBodies,this.fastBodyCollisions=t.fastBodyCollisions,this.broadphase=t.broadphase,this.narrowphase=t.narrowphase):(this.pairs=this.collisions=this.fastBodies=0,this.fastBodyCollisions=this.broadphase=this.narrowphase=0,this.contacts.clear())}/**
     * Provides a clone of this instance.
     */clone(){let t=new rD;return t.reset(this),t}get pairs(){return this._pairs}set pairs(t){this._pairs=t}get collisions(){return this._collisions}set collisions(t){this._collisions=t}get contacts(){return this._contacts}set contacts(t){this._contacts=t}get fastBodies(){return this._fastBodies}set fastBodies(t){this._fastBodies=t}get fastBodyCollisions(){return this._fastBodyCollisions}set fastBodyCollisions(t){this._fastBodyCollisions=t}get broadphase(){return this._broadphase}set broadphase(t){this._broadphase=t}get narrowphase(){return this._narrowphase}set narrowphase(t){this._narrowphase=t}}class rF{on(t,e){this._nativeHandlers[t]&&this.off(t,this._nativeHandlers[t]),this._nativeHandlers[t]=this._decorate(e),this.nativeComponent.addEventListener(t,this._nativeHandlers[t])}off(t,e){e||(e=this._nativeHandlers[t]),this.nativeComponent.removeEventListener(t,e),this._nativeHandlers[t]=null}_decorate(t){return e=>{this._paused||t(e)}}pause(){this._paused=!0}resume(){this._paused=!1}clear(){for(let t in this._nativeHandlers)this.off(t)}constructor(t){this.nativeComponent=t,this._paused=!1,this._nativeHandlers={}}}class rk{constructor(t,e){this._windowGlobal=t,this._documentGlobal=e,this._windowComponent=new rF(this._windowGlobal),this._documentComponent=new rF(this._documentGlobal)}get window(){return this._windowComponent}get document(){return this._documentComponent}pause(){this.window.pause(),this.document.pause()}resume(){this.window.resume(),this.document.resume()}clear(){this.window.clear(),this.document.clear()}}class rP{static fromPagePosition(t,e,i){let s,r;3==arguments.length?(s=new ep(t,e),r=i):((s=t).x,s.y,r=e);let n=r.screen.pageToScreenCoordinates(s),o=r.screen.screenToWorldCoordinates(n);return new rP(o,s,n)}constructor(t,e,i){this.worldPos=t,this.pagePos=e,this.screenPos=i}}class PointerEvent{cancel(){this.active=!1}get pagePos(){return this.coordinates.pagePos}get screenPos(){return this.coordinates.screenPos}get worldPos(){return this.coordinates.worldPos}constructor(t,e,i,s,r,n){this.type=t,this.pointerId=e,this.button=i,this.pointerType=s,this.coordinates=r,this.nativeEvent=n,this.active=!0}}class WheelEvent{cancel(){this.active=!1}constructor(t,e,i,s,r,n,o,a,h,l,A,d){this.x=t,this.y=e,this.pageX=i,this.pageY=s,this.screenX=r,this.screenY=n,this.index=o,this.deltaX=a,this.deltaY=h,this.deltaZ=l,this.deltaMode=A,this.ev=d,this.active=!0}}class rR{constructor(){this.events=new tE,/**
         * The last position on the document this pointer was at. Can be `null` if pointer was never active.
         */this.lastPagePos=ep.Zero,/**
         * The last position on the screen this pointer was at. Can be `null` if pointer was never active.
         */this.lastScreenPos=ep.Zero,/**
         * The last position in the game world coordinates this pointer was at. Can be `null` if pointer was never active.
         */this.lastWorldPos=ep.Zero,this._onPointerMove=t=>{this.lastPagePos=new ep(t.pagePos.x,t.pagePos.y),this.lastScreenPos=new ep(t.screenPos.x,t.screenPos.y),this.lastWorldPos=new ep(t.worldPos.x,t.worldPos.y)},this._onPointerDown=t=>{this.lastPagePos=new ep(t.pagePos.x,t.pagePos.y),this.lastScreenPos=new ep(t.screenPos.x,t.screenPos.y),this.lastWorldPos=new ep(t.worldPos.x,t.worldPos.y)},this.on("move",this._onPointerMove),this.on("down",this._onPointerDown)}emit(t,e){this.events.emit(t,e)}on(t,e){return this.events.on(t,e)}once(t,e){return this.events.once(t,e)}off(t,e){this.events.off(t,e)}}(F=tc||(tc={})).Pixel="Pixel",F.Line="Line",F.Page="Page",(k=tu||(tu={}))[k.NoButton=-1]="NoButton",k[k.Left=0]="Left",k[k.Middle=1]="Middle",k[k.Right=2]="Right",k[k.Unknown=3]="Unknown",(P=tg||(tg={})).Left="Left",P.Middle="Middle",P.Right="Right",P.Unknown="Unknown",P.NoButton="NoButton",(R=tp||(tp={})).Touch="Touch",R.Mouse="Mouse",R.Pen="Pen",R.Unknown="Unknown";/**
 * The PointerEventProcessor is responsible for collecting all the events from the canvas and transforming them into GlobalCoordinates
 */class rM{constructor(t,e){this.target=t,this.engine=e,this.events=new tE,this.primary=new rR,this._activeNativePointerIdsToNormalized=new Map,this.lastFramePointerCoords=new Map,this.currentFramePointerCoords=new Map,this.currentFramePointerDown=new Map,this.lastFramePointerDown=new Map,this.currentFrameDown=[],this.currentFrameUp=[],this.currentFrameMove=[],this.currentFrameCancel=[],this.currentFrameWheel=[],this._pointers=[this.primary],this._boundHandle=this._handle.bind(this),this._boundWheel=this._handleWheel.bind(this)}/**
     * Creates a new PointerEventReceiver with a new target and engine while preserving existing pointer event
     * handlers.
     * @param target
     * @param engine
     */recreate(t,e){let i=new rM(t,e);return i.primary=this.primary,i._pointers=this._pointers,i}/**
     * Locates a specific pointer by id, creates it if it doesn't exist
     * @param index
     */at(t){if(t>=this._pointers.length)for(let e=this._pointers.length-1;e<t;e++)this._pointers.push(new rR);return this._pointers[t]}/**
     * The number of pointers currently being tracked by excalibur
     */count(){return this._pointers.length}/**
     * Is the specified pointer id down this frame
     * @param pointerId
     */isDown(t){var e;return null!==(e=this.currentFramePointerDown.get(t))&&void 0!==e&&e}/**
     * Was the specified pointer id down last frame
     * @param pointerId
     */wasDown(t){var e;return null!==(e=this.lastFramePointerDown.get(t))&&void 0!==e&&e}/**
     * Whether the Pointer is currently dragging.
     */isDragging(t){return this.isDown(t)}/**
     * Whether the Pointer just started dragging.
     */isDragStart(t){return this.isDown(t)&&!this.wasDown(t)}/**
     * Whether the Pointer just ended dragging.
     */isDragEnd(t){return!this.isDown(t)&&this.wasDown(t)}emit(t,e){this.events.emit(t,e)}on(t,e){return this.events.on(t,e)}once(t,e){return this.events.once(t,e)}off(t,e){this.events.off(t,e)}/**
     * Called internally by excalibur
     *
     * Updates the current frame pointer info and emits raw pointer events
     *
     * This does not emit events to entities, see PointerSystem
     */update(){for(let t of(this.lastFramePointerDown=new Map(this.currentFramePointerDown),this.lastFramePointerCoords=new Map(this.currentFramePointerCoords),this.currentFrameDown)){this.emit("down",t);let e=this.at(t.pointerId);e.emit("down",t),this.primary.emit("pointerdown",t)}for(let t of this.currentFrameUp){this.emit("up",t);let e=this.at(t.pointerId);e.emit("up",t)}for(let t of this.currentFrameMove){this.emit("move",t);let e=this.at(t.pointerId);e.emit("move",t)}for(let t of this.currentFrameCancel){this.emit("cancel",t);let e=this.at(t.pointerId);e.emit("cancel",t)}for(let t of this.currentFrameWheel)this.emit("wheel",t),this.primary.emit("pointerwheel",t)}/**
     * Clears the current frame event and pointer data
     */clear(){for(let t of this.currentFrameUp){this.currentFramePointerCoords.delete(t.pointerId);let e=this._activeNativePointerIdsToNormalized.entries();for(let[i,s]of e)s===t.pointerId&&this._activeNativePointerIdsToNormalized.delete(i)}this.currentFrameDown.length=0,this.currentFrameUp.length=0,this.currentFrameMove.length=0,this.currentFrameCancel.length=0,this.currentFrameWheel.length=0}/**
     * Initializes the pointer event receiver so that it can start listening to native
     * browser events.
     */init(t){var e;this.target===this.engine.canvas?this.engine.canvas.style.touchAction="none":document.body.style.touchAction="none",window.PointerEvent?(this.target.addEventListener("pointerdown",this._boundHandle),this.target.addEventListener("pointerup",this._boundHandle),this.target.addEventListener("pointermove",this._boundHandle),this.target.addEventListener("pointercancel",this._boundHandle)):(// Touch Events
this.target.addEventListener("touchstart",this._boundHandle),this.target.addEventListener("touchend",this._boundHandle),this.target.addEventListener("touchmove",this._boundHandle),this.target.addEventListener("touchcancel",this._boundHandle),// Mouse Events
this.target.addEventListener("mousedown",this._boundHandle),this.target.addEventListener("mouseup",this._boundHandle),this.target.addEventListener("mousemove",this._boundHandle));// MDN MouseWheelEvent
let i={passive:!(this.engine.pageScrollPreventionMode===t_.All||this.engine.pageScrollPreventionMode===t_.Canvas)};"onwheel"in document.createElement("div")?this.target.addEventListener("wheel",this._boundWheel,i):void 0!==document.onmousewheel?this.target.addEventListener("mousewheel",this._boundWheel,i):this.target.addEventListener("MozMousePixelScroll",this._boundWheel,i);let s=null===(e=null==t?void 0:t.grabWindowFocus)||void 0===e||e;// Handle cross origin iframe
if(s&&ee()){let t=()=>{window.focus()};// Preferred pointer events
window.PointerEvent?this.target.addEventListener("pointerdown",t):(// Touch Events
this.target.addEventListener("touchstart",t),// Mouse Events
this.target.addEventListener("mousedown",t))}}detach(){window.PointerEvent?(this.target.removeEventListener("pointerdown",this._boundHandle),this.target.removeEventListener("pointerup",this._boundHandle),this.target.removeEventListener("pointermove",this._boundHandle),this.target.removeEventListener("pointercancel",this._boundHandle)):(// Touch Events
this.target.removeEventListener("touchstart",this._boundHandle),this.target.removeEventListener("touchend",this._boundHandle),this.target.removeEventListener("touchmove",this._boundHandle),this.target.removeEventListener("touchcancel",this._boundHandle),// Mouse Events
this.target.removeEventListener("mousedown",this._boundHandle),this.target.removeEventListener("mouseup",this._boundHandle),this.target.removeEventListener("mousemove",this._boundHandle)),"onwheel"in document.createElement("div")?this.target.removeEventListener("wheel",this._boundWheel):void 0!==document.onmousewheel?this.target.addEventListener("mousewheel",this._boundWheel):this.target.addEventListener("MozMousePixelScroll",this._boundWheel)}/**
     * Take native pointer id and map it to index in active pointers
     * @param nativePointerId
     */_normalizePointerId(t){// Add to the the native pointer set id
this._activeNativePointerIdsToNormalized.set(t,-1);// Native pointer ids in ascending order
let e=Array.from(this._activeNativePointerIdsToNormalized.keys()).sort((t,e)=>t-e),i=e.findIndex(e=>e===t);// ignore pointer because game isn't watching
return(// Save the mapping so we can reverse it later
this._activeNativePointerIdsToNormalized.set(t,i),i)}/**
     * Responsible for handling and parsing pointer events
     */_handle(t){let e,i;t.preventDefault();let s=new Map;if(globalThis.TouchEvent&&t instanceof globalThis.TouchEvent){e=tg.Unknown,i=tp.Touch;// https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent
for(let e=0;e<t.changedTouches.length;e++){let i=t.changedTouches[e],r=rP.fromPagePosition(i.pageX,i.pageY,this.engine),n=e+1,o=this._normalizePointerId(n);this.currentFramePointerCoords.set(o,r),s.set(o,r)}}else{e=this._nativeButtonToPointerButton(t.button),i=tp.Mouse;let r=rP.fromPagePosition(t.pageX,t.pageY,this.engine),n=1;globalThis.PointerEvent&&t instanceof globalThis.PointerEvent&&(n=t.pointerId,i=this._stringToPointerType(t.pointerType));let o=this._normalizePointerId(n);this.currentFramePointerCoords.set(o,r),s.set(o,r)}for(let[r,n]of s.entries())switch(t.type){case"mousedown":case"pointerdown":case"touchstart":this.currentFrameDown.push(new PointerEvent("down",r,e,i,n,t)),this.currentFramePointerDown.set(r,!0);break;case"mouseup":case"pointerup":case"touchend":this.currentFrameUp.push(new PointerEvent("up",r,e,i,n,t)),this.currentFramePointerDown.set(r,!1);break;case"mousemove":case"pointermove":case"touchmove":this.currentFrameMove.push(new PointerEvent("move",r,e,i,n,t));break;case"touchcancel":case"pointercancel":this.currentFrameCancel.push(new PointerEvent("cancel",r,e,i,n,t))}}_handleWheel(t){// Should we prevent page scroll because of this event
(this.engine.pageScrollPreventionMode===t_.All||this.engine.pageScrollPreventionMode===t_.Canvas&&t.target===this.engine.canvas)&&t.preventDefault();let e=this.engine.screen.pageToScreenCoordinates(e_(t.pageX,t.pageY)),i=this.engine.screen.screenToWorldCoordinates(e),s=-1/40,r=t.deltaX||t.wheelDeltaX*s||0,n=t.deltaY||t.wheelDeltaY*s||t.wheelDelta*s||t.detail||0,o=t.deltaZ||0,a=tc.Pixel;t.deltaMode&&(1===t.deltaMode?a=tc.Line:2===t.deltaMode&&(a=tc.Page));let h=new WheelEvent(i.x,i.y,t.pageX,t.pageY,e.x,e.y,0,r,n,o,a,t);this.currentFrameWheel.push(h)}/**
     * Triggers an excalibur pointer event in a world space pos
     *
     * Useful for testing pointers in excalibur
     * @param type
     * @param pos
     */triggerEvent(t,e){let i=this.engine.screen.worldToPageCoordinates(e);window.PointerEvent?this._handle(new window.PointerEvent("pointer"+t,{pointerId:0,clientX:i.x,clientY:i.y})):this._handle(new window.MouseEvent("mouse"+t,{clientX:i.x,clientY:i.y}));// Force update pointer system
let s=this.engine.currentScene.world.systemManager.get(rm),r=this.engine.currentScene.world.queryManager.createQuery(s.types);s.preupdate(),s.update(r.getEntities())}_nativeButtonToPointerButton(t){switch(t){case tu.NoButton:return tg.NoButton;case tu.Left:return tg.Left;case tu.Middle:return tg.Middle;case tu.Right:return tg.Right;case tu.Unknown:return tg.Unknown;default:return eE(t)}}_stringToPointerType(t){switch(t){case"touch":return tp.Touch;case"mouse":return tp.Mouse;case"pen":return tp.Pen;default:return tp.Unknown}}}class rL{constructor(t){var e;this._samplePeriod=100,this._currentFrameTime=0,this._frames=0,this._previousSampleTime=0,this._beginFrameTime=0,this._fps=t.initialFps,this._samplePeriod=null!==(e=t.samplePeriod)&&void 0!==e?e:this._samplePeriod,this._currentFrameTime=1e3/t.initialFps,this._nowFn=t.nowFn,this._previousSampleTime=this._nowFn()}/**
     * Start of code block to sample FPS for
     */start(){this._beginFrameTime=this._nowFn()}/**
     * End of code block to sample FPS for
     */end(){this._frames++;let t=this._nowFn();this._currentFrameTime=t-this._beginFrameTime,t>=this._previousSampleTime+this._samplePeriod&&(this._fps=1e3*this._frames/(t-this._previousSampleTime),this._previousSampleTime=t,this._frames=0)}/**
     * Return the currently sampled fps over the last sample period, by default every 100ms
     */get fps(){return this._fps}/**
     * Return the instantaneous fps, this can be less useful because it will fluctuate given the current frames time
     */get instant(){return 1e3/this._currentFrameTime}}/**
 * Abstract Clock is the base type of all Clocks
 *
 * It has a few opinions
 * 1. It manages the calculation of what "elapsed" time means and thus maximum fps
 * 2. The default timing api is implemented in now()
 *
 * To implement your own clock, extend Clock and override start/stop to start and stop the clock, then call update() with whatever
 * method is unique to your clock implementation.
 */class rN{constructor(t){var e,i,s;this._onFatalException=()=>{},this._maxFps=1/0,this._lastTime=0,this._elapsed=1,this._scheduledCbs=[],this._totalElapsed=0,this._options=t,this.tick=t.tick,this._lastTime=null!==(e=this.now())&&void 0!==e?e:0,this._maxFps=null!==(i=t.maxFps)&&void 0!==i?i:this._maxFps,this._onFatalException=null!==(s=t.onFatalException)&&void 0!==s?s:this._onFatalException,this.fpsSampler=new rL({initialFps:60,nowFn:()=>this.now()})}/**
     * Get the elapsed time for the last completed frame
     */elapsed(){return this._elapsed}/**
     * Get the current time in milliseconds
     */now(){return performance.now()}toTestClock(){let t=new rG({...this._options,defaultUpdateMs:16.6});return t}toStandardClock(){let t=new rU({...this._options});return t}setFatalExceptionHandler(t){this._onFatalException=t}/**
     * Schedule a callback to fire given a timeout in milliseconds using the excalibur [[Clock]]
     *
     * This is useful to use over the built in browser `setTimeout` because callbacks will be tied to the
     * excalibur update clock, instead of browser time, this means that callbacks wont fire if the game is
     * stopped or paused.
     *
     * @param cb callback to fire
     * @param timeoutMs Optionally specify a timeout in milliseconds from now, default is 0ms which means the next possible tick
     */schedule(t,e=0){// Scheduled based on internal elapsed time
let i=this._totalElapsed+e;this._scheduledCbs.push([t,i])}_runScheduledCbs(){// walk backwards to delete items as we loop
for(let t=this._scheduledCbs.length-1;t>-1;t--)this._scheduledCbs[t][1]<=this._totalElapsed&&(this._scheduledCbs[t][0](),this._scheduledCbs.splice(t,1))}update(t){try{this.fpsSampler.start();// Get the time to calculate time-elapsed
let e=this.now(),i=e-this._lastTime||1,s=1e3/this._maxFps;// only run frame if enough time has elapsed
if(i>=s){let r=0;0!==s&&(r=i%s,i-=r),i>200&&(i=1),// tick the mainloop and run scheduled callbacks
this._elapsed=t||i,this._totalElapsed+=this._elapsed,this._runScheduledCbs(),this.tick(t||i),0!==s?this._lastTime=e-r:this._lastTime=e,this.fpsSampler.end()}}catch(t){this._onFatalException(t),this.stop()}}}/**
 * The [[StandardClock]] implements the requestAnimationFrame browser api to run the tick()
 */class rU extends rN{constructor(t){super(t),this._running=!1}isRunning(){return this._running}start(){if(this._running)return;this._running=!0;let t=()=>{// stop the loop
if(this._running)try{// request next loop
this._requestId=window.requestAnimationFrame(t),this.update()}catch(t){throw window.cancelAnimationFrame(this._requestId),t}};// begin the first frame
t()}stop(){this._running=!1}}/**
 * The TestClock is meant for debugging interactions in excalibur that require precise timing to replicate or test
 */class rG extends rN{constructor(t){super({...t}),this._logger=t9.getInstance(),this._running=!1,this._currentTime=0,this._updateMs=t.defaultUpdateMs}/**
     * Get the current time in milliseconds
     */now(){var t;return null!==(t=this._currentTime)&&void 0!==t?t:0}isRunning(){return this._running}start(){this._running=!0}stop(){this._running=!1}/**
     * Manually step the clock forward 1 tick, optionally specify an elapsed time in milliseconds
     * @param overrideUpdateMs
     */step(t){let e=null!=t?t:this._updateMs;this._running?(// to be comparable to RAF this needs to be a full blown Task
// For example, images cannot decode synchronously in a single step
this.update(e),this._currentTime+=e):this._logger.warn("The clock is not running, no step will be performed")}/**
     * Run a number of steps that tick the clock, optionally specify an elapsed time in milliseconds
     * @param numberOfSteps
     * @param overrideUpdateMs
     */run(t,e){for(let i=0;i<t;i++)this.step(null!=e?e:this._updateMs)}}// EXTERNAL MODULE: ./Util/Toaster.css
var rz=n(7379);/**
 * The Toaster is only meant to be called from inside Excalibur to display messages to players
 */class rO{constructor(){this._toasterCss=rz/* default */.Z.toString(),this._isInitialized=!1}_initialize(){this._isInitialized||(this._container=document.createElement("div"),this._container.id="ex-toast-container",document.body.appendChild(this._container),this._isInitialized=!0,this._styleBlock=document.createElement("style"),this._styleBlock.textContent=this._toasterCss,document.head.appendChild(this._styleBlock))}dispose(){this._container.parentElement.removeChild(this._container),this._styleBlock.parentElement.removeChild(this._styleBlock),this._isInitialized=!1}_createFragment(t){let e=document.createElement("span");return e.innerText=t,e}/**
     * Display a toast message to a player
     * @param message Text of the message, messages may have a single "[LINK]" to influence placement
     * @param linkTarget Optionally specify a link location
     * @param linkName Optionally specify a name for that link location
     */toast(t,e,i){this._initialize();let s=document.createElement("div");s.className="ex-toast-message";let r=t.split("[LINK]").map(t=>this._createFragment(t));if(e){let t=document.createElement("a");t.href=e,i?t.innerText=i:t.innerText=e,r.splice(1,0,t)}// Assembly message
let n=document.createElement("div");r.forEach(t=>{n.appendChild(t)}),s.appendChild(n);// Dismiss button
let o=document.createElement("button");o.innerText="x",o.addEventListener("click",()=>{this._container.removeChild(s)}),s.appendChild(o);// Escape to dismiss
let a=t=>{if("Escape"===t.key)try{this._container.removeChild(s)}catch(t){// pass
}document.removeEventListener("keydown",a)};document.addEventListener("keydown",a);// Insert into container
let h=this._container.firstChild;this._container.insertBefore(s,h)}}/**
 * This allows you to map multiple inputs to specific commands! This is especially useful when
 * you need to allow multiple input sources to control a specific action.
 */class rH{constructor(t){this.inputs=t,this._handlers=new Map}/**
     * Executes the input map, called internally by Excalibur
     */execute(){for(let[t,e]of this._handlers.entries()){let i=t(this.inputs);i&&e(i)}}/**
     * This allows you to map multiple inputs to specific commands! This is useful
     *
     * The inputHandler should return a truthy value if you wish the commandHandler to fire.
     *
     * Example:
     * ```typescript
     * const moveRight = (amount: number) => { actor.vel.x = 100 * amount }
     * const moveLeft = (amount: number) => { actor.vel.x = -100 * amount }
     * const moveUp = (amount: number) => { actor.vel.y = -100 * amount }
     * const moveDown = (amount: number) => { actor.vel.y = 100 * amount }
     *
     * engine.inputMapper.on(({keyboard}) => keyboard.isHeld(ex.Keys.ArrowRight) ? 1 : 0, moveRight);
     * engine.inputMapper.on(({gamepads}) => gamepads.at(0).isButtonPressed(ex.Buttons.DpadRight) ? 1 : 0, moveRight);
     * engine.inputMapper.on(({gamepads}) => gamepads.at(0).getAxes(ex.Axes.LeftStickX) > 0 ?
     *  gamepads.at(0).getAxes(ex.Axes.LeftStickX) : 0, moveRight);
     * ```
     * @param inputHandler
     * @param commandHandler
     */on(t,e){this._handlers.set(t,e)}}tw();let rq={FallbackGraphicsContext:"fallbackgraphicscontext",Initialize:"initialize",Visible:"visible",Hidden:"hidden",Start:"start",Stop:"stop",PreUpdate:"preupdate",PostUpdate:"postupdate",PreFrame:"preframe",PostFrame:"postframe",PreDraw:"predraw",PostDraw:"postdraw"};/**
     * Do not prevent any page scrolling
     */(M=t_||(t_={}))[M.None=0]="None",/**
     * Prevent page scroll if mouse is over the game canvas
     */M[M.Canvas=1]="Canvas",/**
     * Prevent all page scrolling via mouse wheel
     */M[M.All=2]="All";/**
 * The Excalibur Engine
 *
 * The [[Engine]] is the main driver for a game. It is responsible for
 * starting/stopping the game, maintaining state, transmitting events,
 * loading resources, and managing the scene.
 */class rV{/**
     * The width of the game canvas in pixels (physical width component of the
     * resolution of the canvas element)
     */get canvasWidth(){return this.screen.canvasWidth}/**
     * Returns half width of the game canvas in pixels (half physical width component)
     */get halfCanvasWidth(){return this.screen.halfCanvasWidth}/**
     * The height of the game canvas in pixels, (physical height component of
     * the resolution of the canvas element)
     */get canvasHeight(){return this.screen.canvasHeight}/**
     * Returns half height of the game canvas in pixels (half physical height component)
     */get halfCanvasHeight(){return this.screen.halfCanvasHeight}/**
     * Returns the width of the engine's visible drawing surface in pixels including zoom and device pixel ratio.
     */get drawWidth(){return this.screen.drawWidth}/**
     * Returns half the width of the engine's visible drawing surface in pixels including zoom and device pixel ratio.
     */get halfDrawWidth(){return this.screen.halfDrawWidth}/**
     * Returns the height of the engine's visible drawing surface in pixels including zoom and device pixel ratio.
     */get drawHeight(){return this.screen.drawHeight}/**
     * Returns half the height of the engine's visible drawing surface in pixels including zoom and device pixel ratio.
     */get halfDrawHeight(){return this.screen.halfDrawHeight}/**
     * Returns whether excalibur detects the current screen to be HiDPI
     */get isHiDpi(){return this.screen.isHiDpi}/**
     * Access [[stats]] that holds frame statistics.
     */get stats(){return this.debug.stats}/**
     * Indicates whether the engine is set to fullscreen or not
     */get isFullscreen(){return this.screen.isFullScreen}/**
     * Indicates the current [[DisplayMode]] of the engine.
     */get displayMode(){return this.screen.displayMode}/**
     * Returns the calculated pixel ration for use in rendering
     */get pixelRatio(){return this.screen.pixelRatio}get isDebug(){return this._isDebug}/**
     * Hints the graphics context to truncate fractional world space coordinates
     */get snapToPixel(){return this.graphicsContext.snapToPixel}set snapToPixel(t){this.graphicsContext.snapToPixel=t}emit(t,e){this.events.emit(t,e)}on(t,e){return this.events.on(t,e)}once(t,e){return this.events.once(t,e)}off(t,e){this.events.off(t,e)}/**
     * Creates a new game using the given [[EngineOptions]]. By default, if no options are provided,
     * the game will be rendered full screen (taking up all available browser window space).
     * You can customize the game rendering through [[EngineOptions]].
     *
     * Example:
     *
     * ```js
     * var game = new ex.Engine({
     *   width: 0, // the width of the canvas
     *   height: 0, // the height of the canvas
     *   enableCanvasTransparency: true, // the transparencySection of the canvas
     *   canvasElementId: '', // the DOM canvas element ID, if you are providing your own
     *   displayMode: ex.DisplayMode.FullScreen, // the display mode
     *   pointerScope: ex.PointerScope.Document, // the scope of capturing pointer (mouse/touch) events
     *   backgroundColor: ex.Color.fromHex('#2185d0') // background color of the engine
     * });
     *
     * // call game.start, which is a Promise
     * game.start().then(function () {
     *   // ready, set, go!
     * });
     * ```
     */constructor(t){var e,i,s,r,n,o;/**
         * Listen to and emit events on the Engine
         */this.events=new tE,/**
         * Optionally set the maximum fps if not set Excalibur will go as fast as the device allows.
         *
         * You may want to constrain max fps if your game cannot maintain fps consistently, it can look and feel better to have a 30fps game than
         * one that bounces between 30fps and 60fps
         */this.maxFps=Number.POSITIVE_INFINITY,/**
         * Contains all the scenes currently registered with Excalibur
         */this.scenes={},this._suppressPlayButton=!1,/**
         * Indicates whether audio should be paused when the game is no longer visible.
         */this.pauseAudioWhenHidden=!0,/**
         * Indicates whether the engine should draw with debug information
         */this._isDebug=!1,/**
         * Sets the Transparency for the engine.
         */this.enableCanvasTransparency=!0,/**
         * The action to take when a fatal exception is thrown
         */this.onFatalException=t=>{t9.getInstance().fatal(t)},this._toaster=new rO,this._timescale=1,this._isInitialized=!1,this._deferredGoTo=null,this._originalOptions={},this._performanceThresholdTriggered=!1,this._fpsSamples=[],this._loadingComplete=!1,this._isReady=!1,this._isReadyPromise=new Promise(t=>{this._isReadyResolve=t}),/**
         * Returns the current frames elapsed milliseconds
         */this.currentFrameElapsedMs=0,/**
         * Returns the current frame lag when in fixed update mode
         */this.currentFrameLagMs=0,this._lagMs=0,this._screenShotRequests=[],t={...rV._DEFAULT_ENGINE_OPTIONS,...t},this._originalOptions=t,tI.freeze(),// Initialize browser events facade
this.browser=new rk(window,document);// Check compatibility
let a=new iQ;if(t.suppressMinimumBrowserFeatureDetection||(this._compatible=a.test()))this._compatible=!0;else{let e=document.createElement("div");if(e.innerText="Sorry, your browser does not support all the features needed for Excalibur",document.body.appendChild(e),a.failedTests.forEach(function(t){let e=document.createElement("div");e.innerText="Browser feature missing "+t,document.body.appendChild(e)}),t.canvasElementId){let e=document.getElementById(t.canvasElementId);e&&e.parentElement.removeChild(e)}return}console.log&&!t.suppressConsoleBootMessage&&(// eslint-disable-next-line no-console
console.log(`%cPowered by Excalibur.js (v${na})`,"background: #176BAA; color: white; border-radius: 5px; padding: 15px; font-size: 1.5em; line-height: 80px;"),// eslint-disable-next-line no-console
console.log("\n      /| ________________\nO|===|* >________________>\n      \\|"),// eslint-disable-next-line no-console
console.log("Visit","http://excaliburjs.com","for more information")),t.suppressPlayButton&&(this._suppressPlayButton=!0),this._logger=t9.getInstance(),this._logger.defaultLevel===G.Debug&&a.logBrowserFeatures(),this._logger.debug("Building engine..."),this.canvasElementId=t.canvasElementId,t.canvasElementId?(this._logger.debug("Using Canvas element specified: "+t.canvasElementId),this.canvas=document.getElementById(t.canvasElementId)):t.canvasElement?(this._logger.debug("Using Canvas element specified:",t.canvasElement),this.canvas=t.canvasElement):(this._logger.debug("Using generated canvas element"),this.canvas=document.createElement("canvas"));let h=null!==(e=t.displayMode)&&void 0!==e?e:Y.Fixed;t.width&&t.height||t.viewport?(void 0===t.displayMode&&(h=Y.Fixed),this._logger.debug("Engine viewport is size "+t.width+" x "+t.height)):t.displayMode||(this._logger.debug("Engine viewport is fit"),h=Y.FitScreen),this._originalDisplayMode=h;// Canvas 2D fallback can be flagged on
let l=tI.isEnabled("use-canvas-context");if(!l)try{this.graphicsContext=new ie({canvasElement:this.canvas,enableTransparency:this.enableCanvasTransparency,smoothing:t.antialiasing,backgroundColor:t.backgroundColor,snapToPixel:t.snapToPixel,useDrawSorting:t.useDrawSorting})}catch(t){this._logger.warn(`Excalibur could not load webgl for some reason (${t.message}) and loaded a Canvas 2D fallback. Some features of Excalibur will not work in this mode. 

Read more about this issue at https://excaliburjs.com/docs/webgl`),// fallback to canvas in case of failure
l=!0}l&&(this.graphicsContext=new is({canvasElement:this.canvas,enableTransparency:this.enableCanvasTransparency,smoothing:t.antialiasing,backgroundColor:t.backgroundColor,snapToPixel:t.snapToPixel,useDrawSorting:t.useDrawSorting})),this.screen=new Screen({canvas:this.canvas,context:this.graphicsContext,antialiasing:null===(i=t.antialiasing)||void 0===i||i,browser:this.browser,viewport:null!==(s=t.viewport)&&void 0!==s?s:t.width&&t.height?{width:t.width,height:t.height}:ir.SVGA,resolution:t.resolution,displayMode:h,pixelRatio:t.suppressHiDPIScaling?1:null!==(r=t.pixelRatio)&&void 0!==r?r:null}),// Set default filtering based on antialiasing
eL.filtering=t.antialiasing?V.Blended:V.Pixel,t.backgroundColor&&(this.backgroundColor=t.backgroundColor.clone()),this.maxFps=null!==(n=t.maxFps)&&void 0!==n?n:this.maxFps,this.fixedUpdateFps=null!==(o=t.fixedUpdateFps)&&void 0!==o?o:this.fixedUpdateFps,this.clock=new rU({maxFps:this.maxFps,tick:this._mainloop.bind(this),onFatalException:t=>this.onFatalException(t)}),this.enableCanvasTransparency=t.enableCanvasTransparency,this._loader=new iB,this._loader.wireEngine(this),this.debug=new rS(this),this._initialize(t),this.rootScene=this.currentScene=new rE,this.addScene("root",this.rootScene),window.___EXCALIBUR_DEVTOOL=this}_monitorPerformanceThresholdAndTriggerFallback(){let{allow:t}=this._originalOptions.configurePerformanceCanvas2DFallback,{threshold:e,showPlayerMessage:i}=this._originalOptions.configurePerformanceCanvas2DFallback;if(void 0===e&&(e=rV._DEFAULT_ENGINE_OPTIONS.configurePerformanceCanvas2DFallback.threshold),void 0===i&&(i=rV._DEFAULT_ENGINE_OPTIONS.configurePerformanceCanvas2DFallback.showPlayerMessage),!tI.isEnabled("use-canvas-context")&&t&&this.ready&&!this._performanceThresholdTriggered){this._fpsSamples.length===e.numberOfFrames&&this._fpsSamples.splice(0,1),this._fpsSamples.push(this.clock.fpsSampler.fps);let t=0;for(let e=0;e<this._fpsSamples.length;e++)t+=this._fpsSamples[e];let s=t/this._fpsSamples.length;this._fpsSamples.length===e.numberOfFrames&&s<=e.fps&&(this._performanceThresholdTriggered=!0,this._logger.warn(`Switching to browser 2D Canvas fallback due to performance. Some features of Excalibur will not work in this mode.
this might mean your browser doesn't have webgl enabled or hardware acceleration is unavailable.

If in Chrome:
  * Visit Settings > Advanced > System, and ensure "Use Hardware Acceleration" is checked.
  * Visit chrome://flags/#ignore-gpu-blocklist and ensure "Override software rendering list" is "enabled"
If in Firefox, visit about:config
  * Ensure webgl.disabled = false
  * Ensure webgl.force-enabled = true
  * Ensure layers.acceleration.force-enabled = true

Read more about this issue at https://excaliburjs.com/docs/performance`),i&&this._toaster.toast("Excalibur is encountering performance issues. It's possible that your browser doesn't have hardware acceleration enabled. Visit [LINK] for more information and potential solutions.","https://excaliburjs.com/docs/performance"),this.useCanvas2DFallback(),this.emit("fallbackgraphicscontext",this.graphicsContext))}}/**
     * Switches the engine's graphics context to the 2D Canvas.
     * @warning Some features of Excalibur will not work in this mode.
     */useCanvas2DFallback(){var t,e,i;// Swap out the canvas
let s=this.canvas.cloneNode(!1);this.canvas.parentNode.replaceChild(s,this.canvas),this.canvas=s;let r=this._originalOptions,n=this._originalDisplayMode;// New graphics context
this.graphicsContext=new is({canvasElement:this.canvas,enableTransparency:this.enableCanvasTransparency,smoothing:r.antialiasing,backgroundColor:r.backgroundColor,snapToPixel:r.snapToPixel,useDrawSorting:r.useDrawSorting}),this.screen&&this.screen.dispose(),this.screen=new Screen({canvas:this.canvas,context:this.graphicsContext,antialiasing:null===(t=r.antialiasing)||void 0===t||t,browser:this.browser,viewport:null!==(e=r.viewport)&&void 0!==e?e:r.width&&r.height?{width:r.width,height:r.height}:ir.SVGA,resolution:r.resolution,displayMode:n,pixelRatio:r.suppressHiDPIScaling?1:null!==(i=r.pixelRatio)&&void 0!==i?i:null}),this.screen.setCurrentCamera(this.currentScene.camera),// Reset pointers
this.input.pointers.detach();let o=r&&r.pointerScope===O.Document?document:this.canvas;this.input.pointers=this.input.pointers.recreate(o,this),this.input.pointers.init()}/**
     * Returns a BoundingBox of the top left corner of the screen
     * and the bottom right corner of the screen.
     */getWorldBounds(){return this.screen.getWorldBounds()}/**
     * Gets the current engine timescale factor (default is 1.0 which is 1:1 time)
     */get timescale(){return this._timescale}/**
     * Sets the current engine timescale factor. Useful for creating slow-motion effects or fast-forward effects
     * when using time-based movement.
     */set timescale(t){if(t<=0){t9.getInstance().error("Cannot set engine.timescale to a value of 0 or less than 0.");return}this._timescale=t}/**
     * Adds a [[Timer]] to the [[currentScene]].
     * @param timer  The timer to add to the [[currentScene]].
     */addTimer(t){return this.currentScene.addTimer(t)}/**
     * Removes a [[Timer]] from the [[currentScene]].
     * @param timer  The timer to remove to the [[currentScene]].
     */removeTimer(t){return this.currentScene.removeTimer(t)}/**
     * Adds a [[Scene]] to the engine, think of scenes in Excalibur as you
     * would levels or menus.
     *
     * @param key  The name of the scene, must be unique
     * @param scene The scene to add to the engine
     */addScene(t,e){this.scenes[t]&&this._logger.warn("Scene",t,"already exists overwriting"),this.scenes[t]=e}/**
     * @internal
     */removeScene(t){if(t instanceof rE)for(let e in this.scenes)this.scenes.hasOwnProperty(e)&&this.scenes[e]===t&&delete this.scenes[e];"string"==typeof t&&delete this.scenes[t]}add(t){if(2==arguments.length){this.addScene(arguments[0],arguments[1]);return}this._deferredGoTo&&this.scenes[this._deferredGoTo]?this.scenes[this._deferredGoTo].add(t):this.currentScene.add(t)}remove(t){t instanceof sn&&this.currentScene.remove(t),t instanceof rE&&this.removeScene(t),"string"==typeof t&&this.removeScene(t)}/**
     * Changes the currently updating and drawing scene to a different,
     * named scene. Calls the [[Scene]] lifecycle events.
     * @param key  The key of the scene to transition to.
     * @param data Optional data to send to the scene's onActivate method
     */goToScene(t,e){// if not yet initialized defer goToScene
if(!this.isInitialized){this._deferredGoTo=t;return}if(this.scenes[t]){let i=this.currentScene,s=this.scenes[t];// only deactivate when initialized
if(this._logger.debug("Going to scene:",t),this.currentScene.isInitialized){let t={engine:this,previousScene:i,nextScene:s};this.currentScene._deactivate.apply(this.currentScene,[t,s]),this.currentScene.events.emit("deactivate",new t2(t,this.currentScene))}// set current scene to new one
this.currentScene=s,this.screen.setCurrentCamera(s.camera),// initialize the current scene if has not been already
this.currentScene._initialize(this);let r={engine:this,previousScene:i,nextScene:s,data:e};this.currentScene._activate.apply(this.currentScene,[r,s]),this.currentScene.events.emit("activate",new t1(r,this.currentScene))}else this._logger.error("Scene",t,"does not exist!")}/**
     * Transforms the current x, y from screen coordinates to world coordinates
     * @param point  Screen coordinate to convert
     */screenToWorldCoordinates(t){return this.screen.screenToWorldCoordinates(t)}/**
     * Transforms a world coordinate, to a screen coordinate
     * @param point  World coordinate to convert
     */worldToScreenCoordinates(t){return this.screen.worldToScreenCoordinates(t)}/**
     * Initializes the internal canvas, rendering context, display mode, and native event listeners
     */_initialize(t){var e,i,s,r;this.pageScrollPreventionMode=t.scrollPreventionMode;// initialize inputs
let n=t&&t.pointerScope===O.Document?document:this.canvas;this.input={keyboard:new es,pointers:new rM(n,this),gamepads:new t8},this.input.keyboard.init({grabWindowFocus:null===(i=null===(e=this._originalOptions)||void 0===e?void 0:e.grabWindowFocus)||void 0===i||i}),this.input.pointers.init({grabWindowFocus:null===(r=null===(s=this._originalOptions)||void 0===s?void 0:s.grabWindowFocus)||void 0===r||r}),this.input.gamepads.init(),this.inputMapper=new rH(this.input),// Issue #385 make use of the visibility api
// https://developer.mozilla.org/en-US/docs/Web/Guide/User_experience/Using_the_Page_Visibility_API
this.browser.document.on("visibilitychange",()=>{"hidden"===document.visibilityState?(this.events.emit("hidden",new tV(this)),this._logger.debug("Window hidden")):"visible"===document.visibilityState&&(this.events.emit("visible",new tq(this)),this._logger.debug("Window visible"))}),this.canvasElementId||t.canvasElement||document.body.appendChild(this.canvas)}onInitialize(t){// Override me
}/**
     * If supported by the browser, this will set the antialiasing flag on the
     * canvas. Set this to `false` if you want a 'jagged' pixel art look to your
     * image resources.
     * @param isSmooth  Set smoothing to true or false
     */setAntialiasing(t){this.screen.antialiasing=t}/**
     * Return the current smoothing status of the canvas
     */getAntialiasing(){return this.screen.antialiasing}/**
     * Gets whether the actor is Initialized
     */get isInitialized(){return this._isInitialized}_overrideInitialize(t){if(!this.isInitialized){if(this.onInitialize(t),this.events.emit("initialize",new t0(t,this)),this._isInitialized=!0,this._deferredGoTo){let t=this._deferredGoTo;this._deferredGoTo=null,this.goToScene(t)}else this.goToScene("root")}}/**
     * Updates the entire state of the game
     * @param delta  Number of milliseconds elapsed since the last update.
     */_update(t){if(!this.ready){// suspend updates until loading is finished
this._loader.update(this,t),// Update input listeners
this.input.keyboard.update(),this.input.gamepads.update(),this.inputMapper.execute();return}// Publish preupdate events
this._preupdate(t),// process engine level events
this.currentScene.update(this,t),// Update graphics postprocessors
this.graphicsContext.updatePostProcessors(t),// Publish update event
this._postupdate(t),// Update input listeners
this.input.keyboard.update(),this.input.gamepads.update(),this.inputMapper.execute()}/**
     * @internal
     */_preupdate(t){this.emit("preupdate",new tM(this,t,this)),this.onPreUpdate(this,t)}onPreUpdate(t,e){// Override me
}/**
     * @internal
     */_postupdate(t){this.emit("postupdate",new tL(this,t,this)),this.onPostUpdate(this,t)}onPostUpdate(t,e){// Override me
}/**
     * Draws the entire game
     * @param delta  Number of milliseconds elapsed since the last draw.
     */_draw(t){// Drawing nothing else while loading
if(this.graphicsContext.beginDrawLifecycle(),this.graphicsContext.clear(),this._predraw(this.graphicsContext,t),!this._isReady){this._loader.canvas.draw(this.graphicsContext,0,0),this.graphicsContext.flush();return}this.graphicsContext.backgroundColor=this.backgroundColor,this.currentScene.draw(this.graphicsContext,t),this._postdraw(this.graphicsContext,t),// Flush any pending drawings
this.graphicsContext.flush(),this.graphicsContext.endDrawLifecycle(),this._checkForScreenShots()}/**
     * @internal
     */_predraw(t,e){this.emit("predraw",new tF(t,e,this)),this.onPreDraw(t,e)}onPreDraw(t,e){// Override me
}/**
     * @internal
     */_postdraw(t,e){this.emit("postdraw",new tk(t,e,this)),this.onPostDraw(t,e)}onPostDraw(t,e){// Override me
}/**
     * Enable or disable Excalibur debugging functionality.
     * @param toggle a value that debug drawing will be changed to
     */showDebug(t){this._isDebug=t}/**
     * Toggle Excalibur debugging functionality.
     */toggleDebug(){return this._isDebug=!this._isDebug,this._isDebug}/**
     * Returns true when loading is totally complete and the player has clicked start
     */get loadingComplete(){return this._loadingComplete}get ready(){return this._isReady}isReady(){return this._isReadyPromise}/**
     * Starts the internal game loop for Excalibur after loading
     * any provided assets.
     * @param loader  Optional [[Loader]] to use to load resources. The default loader is [[Loader]], override to provide your own
     * custom loader.
     *
     * Note: start() only resolves AFTER the user has clicked the play button
     */async start(t){if(!this._compatible)throw Error("Excalibur is incompatible with your browser");return t&&(// Push the current user entered resolution/viewport
this.screen.pushResolutionAndViewport(),// Configure resolution for loader, it expects resolution === viewport
this.screen.resolution=this.screen.viewport,this.screen.applyResolutionAndViewport(),this._loader=t,this._loader.suppressPlayButton=this._suppressPlayButton||this._loader.suppressPlayButton,this._loader.wireEngine(this)),// Start the excalibur clock which drives the mainloop
// has started is a slight misnomer, it's really mainloop started
this._logger.debug("Starting game clock..."),this.browser.resume(),this.clock.start(),this._logger.debug("Game clock started"),t&&(await this.load(this._loader),this._loadingComplete=!0,// reset back to previous user resolution/viewport
this.screen.popResolutionAndViewport(),this.screen.applyResolutionAndViewport()),this._loadingComplete=!0,// Initialize before ready
this._overrideInitialize(this),this._isReady=!0,this._isReadyResolve(),this.emit("start",new tT(this)),this._isReadyPromise}_mainloop(t){this.emit("preframe",new tN(this,this.stats.prevFrame));let e=t*this.timescale;this.currentFrameElapsedMs=e;// reset frame stats (reuse existing instances)
let i=this.stats.prevFrame.id+1;this.stats.currFrame.reset(),this.stats.currFrame.id=i,this.stats.currFrame.delta=e,this.stats.currFrame.fps=this.clock.fpsSampler.fps,eJ.clear();let s=this.clock.now(),r=1e3/this.fixedUpdateFps;if(this.fixedUpdateFps)for(this._lagMs+=e;this._lagMs>=r;)this._update(r),this._lagMs-=r;else this._update(e);let n=this.clock.now();this.currentFrameLagMs=this._lagMs,this._draw(e);let o=this.clock.now();this.stats.currFrame.duration.update=n-s,this.stats.currFrame.duration.draw=o-n,this.stats.currFrame.graphics.drawnImages=eJ.DrawnImagesCount,this.stats.currFrame.graphics.drawCalls=eJ.DrawCallCount,this.emit("postframe",new tU(this,this.stats.currFrame)),this.stats.prevFrame.reset(this.stats.currFrame),this._monitorPerformanceThresholdAndTriggerFallback()}/**
     * Stops Excalibur's main loop, useful for pausing the game.
     */stop(){this.clock.isRunning()&&(this.emit("stop",new tD(this)),this.browser.pause(),this.clock.stop(),this._logger.debug("Game stopped"))}/**
     * Returns the Engine's running status, Useful for checking whether engine is running or paused.
     */isRunning(){return this.clock.isRunning()}/**
     * Takes a screen shot of the current viewport and returns it as an
     * HTML Image Element.
     * @param preserveHiDPIResolution in the case of HiDPI return the full scaled backing image, by default false
     */screenshot(t=!1){let e=new Promise(e=>{this._screenShotRequests.push({preserveHiDPIResolution:t,resolve:e})});return e}_checkForScreenShots(){// We must grab the draw buffer before we yield to the browser
// the draw buffer is cleared after compositing
// the reason for the asynchrony is setting `preserveDrawingBuffer: true`
// forces the browser to copy buffers which can have a mass perf impact on mobile
for(let t of this._screenShotRequests){let e=t.preserveHiDPIResolution?this.canvas.width:this.screen.resolution.width,i=t.preserveHiDPIResolution?this.canvas.height:this.screen.resolution.height,s=document.createElement("canvas");s.width=e,s.height=i;let r=s.getContext("2d");r.imageSmoothingEnabled=this.screen.antialiasing,r.drawImage(this.canvas,0,0,e,i);let n=new Image,o=s.toDataURL("image/png");n.src=o,t.resolve(n)}// Reset state
this._screenShotRequests.length=0}/**
     * Another option available to you to load resources into the game.
     * Immediately after calling this the game will pause and the loading screen
     * will appear.
     * @param loader  Some [[Loadable]] such as a [[Loader]] collection, [[Sound]], or [[Texture]].
     */async load(t){try{await t.load()}catch(t){this._logger.error("Error loading resources, things may not behave properly",t),await Promise.resolve()}}}/**
 * Default [[EngineOptions]]
 */rV._DEFAULT_ENGINE_OPTIONS={width:0,height:0,enableCanvasTransparency:!0,useDrawSorting:!0,configurePerformanceCanvas2DFallback:{allow:!0,showPlayerMessage:!1,threshold:{fps:20,numberOfFrames:100}},canvasElementId:"",canvasElement:void 0,snapToPixel:!1,pointerScope:O.Canvas,suppressConsoleBootMessage:null,suppressMinimumBrowserFeatureDetection:null,suppressHiDPIScaling:null,suppressPlayButton:null,grabWindowFocus:!0,scrollPreventionMode:t_.Canvas,backgroundColor:ef.fromHex("#2185d0")// Excalibur blue
};/**
 * @deprecated Use [[EventEmitter]] will be removed in v0.29.0
 */class rY{constructor(){this._handlers={},this._wiredEventDispatchers=[],this._deferedHandlerRemovals=[]}/**
     * Clears any existing handlers or wired event dispatchers on this event dispatcher
     */clear(){this._handlers={},this._wiredEventDispatchers=[]}_processDeferredHandlerRemovals(){for(let t of this._deferedHandlerRemovals)this._removeHandler(t.name,t.handler);this._deferedHandlerRemovals.length=0}/**
     * Emits an event for target
     * @param eventName  The name of the event to publish
     * @param event      Optionally pass an event data object to the handler
     */emit(t,e){let i,s;if(this._processDeferredHandlerRemovals(),t){if(t=t.toLowerCase(),null==e&&(e=new tB),this._handlers[t])for(i=0,s=this._handlers[t].length;i<s;i++)this._handlers[t][i](e);for(i=0,s=this._wiredEventDispatchers.length;i<s;i++)this._wiredEventDispatchers[i].emit(t,e)}}/**
     * Subscribe an event handler to a particular event name, multiple handlers per event name are allowed.
     * @param eventName  The name of the event to subscribe to
     * @param handler    The handler callback to fire on this event
     */on(t,e){this._processDeferredHandlerRemovals(),t=t.toLowerCase(),this._handlers[t]||(this._handlers[t]=[]),this._handlers[t].push(e)}/**
     * Unsubscribe an event handler(s) from an event. If a specific handler
     * is specified for an event, only that handler will be unsubscribed.
     * Otherwise all handlers will be unsubscribed for that event.
     *
     * @param eventName  The name of the event to unsubscribe
     * @param handler    Optionally the specific handler to unsubscribe
     */off(t,e){this._deferedHandlerRemovals.push({name:t,handler:e})}_removeHandler(t,e){t=t.toLowerCase();let i=this._handlers[t];if(i){// if no explicit handler is give with the event name clear all handlers
if(e){let s=i.indexOf(e);s>-1&&this._handlers[t].splice(s,1)}else this._handlers[t].length=0}}/**
     * Once listens to an event one time, then unsubscribes from that event
     *
     * @param eventName The name of the event to subscribe to once
     * @param handler   The handler of the event that will be auto unsubscribed
     */once(t,e){this._processDeferredHandlerRemovals();let i=s=>{let r=s||new tB;this.off(t,i),e(r)};this.on(t,i)}/**
     * Wires this event dispatcher to also receive events from another
     */wire(t){t._wiredEventDispatchers.push(this)}/**
     * Unwires this event dispatcher from another
     */unwire(t){let e=t._wiredEventDispatchers.indexOf(this);e>-1&&t._wiredEventDispatchers.splice(e,1)}}/**
 * Labels are the way to draw small amounts of text to the screen. They are
 * actors and inherit all of the benefits and capabilities.
 */class rj extends sL{get font(){return this._font}set font(t){this._font=t,this._text.font=t}/**
     * The text to draw.
     */get text(){return this._text.text}set text(t){this._text.text=t}get color(){return this._text.color}set color(t){this._text&&(this._text.color=t)}get opacity(){return this._text.opacity}set opacity(t){this._text.opacity=t}/**
     * The [[SpriteFont]] to use, if any. Overrides [[Font|font]] if present.
     */get spriteFont(){return this._spriteFont}set spriteFont(t){t&&(this._spriteFont=t,this._text.font=this._spriteFont)}/**
     * Build a new label
     * @param options
     */constructor(t){super(t),this._font=new sM,this._text=new Text({text:"",font:this._font});let{text:e,pos:i,x:s,y:r,spriteFont:n,font:o,color:a}=t;this.pos=null!=i?i:s&&r?e_(s,r):this.pos,this.text=null!=e?e:this.text,this.font=null!=o?o:this.font,this.spriteFont=null!=n?n:this.spriteFont,this._text.color=null!=a?a:this.color;let h=this.get(sl);h.anchor=ep.Zero,h.use(this._text)}_initialize(t){super._initialize(t)}/**
     * Returns the width of the text in the label (in pixels);
     */getTextWidth(){return this._text.width}}class rK extends sn{getGraphics(){return this._graphics}/**
     * Tile graphics
     */addGraphic(t){this._graphics.push(t),this._gfx.visible=!0,this._gfx.localBounds=this._recalculateBounds()}_recalculateBounds(){let t=this._tileBounds.clone();for(let e of this._graphics){let i=e_(this.map.graphicsOffset.x-this.map.tileWidth/2,this.map.graphicsOffset.y-(this.map.renderFromTopOfGraphic?0:e.height-this.map.tileHeight));t=t.combine(e.localBounds.translate(i))}return t}removeGraphic(t){let e=this._graphics.indexOf(t);e>-1&&this._graphics.splice(e,1),this._gfx.localBounds=this._recalculateBounds()}clearGraphics(){this._graphics.length=0,this._gfx.visible=!1,this._gfx.localBounds=this._recalculateBounds()}getColliders(){return this._colliders}/**
     * Adds a collider to the IsometricTile
     *
     * **Note!** the [[Tile.solid]] must be set to true for it to act as a "fixed" collider
     * @param collider
     */addCollider(t){this._colliders.push(t),this.map.flagCollidersDirty()}/**
     * Removes a collider from the IsometricTile
     * @param collider
     */removeCollider(t){let e=this._colliders.indexOf(t);e>-1&&this._colliders.splice(e,1),this.map.flagCollidersDirty()}/**
     * Clears all colliders from the IsometricTile
     */clearColliders(){this._colliders.length=0,this.map.flagCollidersDirty()}/**
     * Returns the top left corner of the [[IsometricTile]] in world space
     */get pos(){return this.map.tileToWorld(e_(this.x,this.y))}/**
     * Returns the center of the [[IsometricTile]]
     */get center(){return this.pos.add(e_(0,this.map.tileHeight/2))}/**
     * Construct a new IsometricTile
     * @param x tile coordinate in x (not world position)
     * @param y tile coordinate in y (not world position)
     * @param graphicsOffset offset that tile should be shifted by (default (0, 0))
     * @param map reference to owning IsometricMap
     */constructor(t,e,i,s){super([new iz,new sl({offset:null!=i?i:ep.Zero,onPostDraw:(t,e)=>this.draw(t,e)}),new rC(s)]),/**
         * Indicates whether this tile is solid
         */this.solid=!1,this._tileBounds=new ey,this._graphics=[],/**
         * Tile colliders
         */this._colliders=[],this.x=t,this.y=e,this.map=s,this._transform=this.get(iz),this._isometricEntityComponent=this.get(rC);let r=this.map.tileWidth/2,n=this.map.tileHeight/2,o=(this.x-this.y)*r,a=(this.x+this.y)*n;this._transform.pos=e_(o,a),this._isometricEntityComponent.elevation=0,this._gfx=this.get(sl),this._gfx.visible=!1;let h=this.map.tileWidth,l=this.map.tileHeight,A=e_(0,this.map.renderFromTopOfGraphic?l:0);this._gfx.localBounds=this._tileBounds=new ey({left:-h/2,top:-l,right:h/2,bottom:l}).translate(A)}draw(t,e){let i=this.map.tileWidth/2;for(let e of(t.save(),// shift left origin to corner of map, not the left corner of the first sprite
t.translate(-i,0),this._graphics))e.draw(t,this.map.graphicsOffset.x,this.map.graphicsOffset.y-(this.map.renderFromTopOfGraphic?0:e.height-this.map.tileHeight));t.restore()}}/**
 * The IsometricMap is a special tile map that provides isometric rendering support to Excalibur
 *
 * The tileWidth and tileHeight should be the height and width in pixels of the parallelogram of the base of the tile art asset.
 * The tileWidth and tileHeight is not necessarily the same as your graphic pixel width and height.
 *
 * Please refer to the docs https://excaliburjs.com for more details calculating what your tile width and height should be given
 * your art assets.
 */class rW extends sn{constructor(t){super([new iz,new i7({type:j.Fixed}),new i9,new sO(t=>this.debug(t),!1)],t.name),/**
         * Render the tile graphic from the top instead of the bottom
         *
         * default is `false` meaning rendering from the bottom
         */this.renderFromTopOfGraphic=!1,this.graphicsOffset=e_(0,0),this._collidersDirty=!1,this._originalOffsets=new WeakMap;let{pos:e,tileWidth:i,tileHeight:s,columns:r,rows:n,renderFromTopOfGraphic:o,graphicsOffset:a}=t;this.transform=this.get(iz),e&&(this.transform.pos=e),this.collider=this.get(i9),this.collider&&this.collider.set(this._composite=new iX([])),this.renderFromTopOfGraphic=null!=o?o:this.renderFromTopOfGraphic,this.graphicsOffset=null!=a?a:this.graphicsOffset,this.tileWidth=i,this.tileHeight=s,this.columns=r,this.rows=n,this.tiles=Array(r*n);// build up tile representation
for(let t=0;t<n;t++)for(let e=0;e<r;e++){let i=new rK(e,t,this.graphicsOffset,this);this.tiles[e+t*r]=i,this.addChild(i);// TODO row/columns helpers
}}update(){this._collidersDirty&&(this.updateColliders(),this._collidersDirty=!1)}flagCollidersDirty(){this._collidersDirty=!0}_getOrSetColliderOriginalOffset(t){if(this._originalOffsets.has(t))return this._originalOffsets.get(t);{let e=t.offset;return this._originalOffsets.set(t,e),e}}updateColliders(){this._composite.clearColliders();let t=this.get(iz).pos;for(let e of this.tiles)if(e.solid)for(let i of e.getColliders()){let s=this._getOrSetColliderOriginalOffset(i);i.offset=this.tileToWorld(e_(e.x,e.y)).sub(t).add(s).sub(e_(this.tileWidth/2,this.tileHeight)),i.owner=this,this._composite.addCollider(i)}this.collider.update()}/**
     * Convert world space coordinates to the tile x, y coordinate
     * @param worldCoordinate
     */worldToTile(t){t=t.sub(this.transform.globalPos);let e=this.tileWidth/2,i=this.tileHeight/2;// See https://clintbellanger.net/articles/isometric_math/ for formula
return e_(~~((t.x/e+t.y/i)/2),~~((t.y/i-t.x/e)/2))}/**
     * Given a tile coordinate, return the top left corner in world space
     * @param tileCoordinate
     */tileToWorld(t){let e=this.tileWidth/2,i=this.tileHeight/2,s=(t.x-t.y)*e,r=(t.x+t.y)*i;return e_(s,r).add(this.transform.pos)}/**
     * Returns the [[IsometricTile]] by its x and y coordinates
     */getTile(t,e){return t<0||e<0||t>=this.columns||e>=this.rows?null:this.tiles[t+e*this.columns]}/**
     * Returns the [[IsometricTile]] by testing a point in world coordinates,
     * returns `null` if no Tile was found.
     */getTileByPoint(t){let e=this.worldToTile(t),i=this.getTile(e.x,e.y);return i}_getMaxZIndex(){let t=Number.NEGATIVE_INFINITY;for(let e of this.tiles){let i=e.get(iz).z;i>t&&(t=i)}return t}/**
     * Debug draw for IsometricMap, called internally by excalibur when debug mode is toggled on
     * @param gfx
     */debug(t){t.save(),t.z=this._getMaxZIndex()+.5;for(let e=0;e<this.rows+1;e++){let i=this.tileToWorld(e_(0,e)),s=this.tileToWorld(e_(this.columns,e));t.drawLine(i,s,ef.Red,2)}for(let e=0;e<this.columns+1;e++){let i=this.tileToWorld(e_(e,0)),s=this.tileToWorld(e_(e,this.rows));t.drawLine(i,s,ef.Red,2)}for(let e of this.tiles)t.drawCircle(this.tileToWorld(e_(e.x,e.y)),3,ef.Yellow);t.restore()}}/**
 * Action that can represent a sequence of actions, this can be useful in conjunction with
 * [[ParallelActions]] to run multiple sequences in parallel.
 */class rJ{constructor(t,e){this._stopped=!1,this._sequenceBuilder=e,this._sequenceContext=new sF(t),this._actionQueue=this._sequenceContext.getQueue(),this._sequenceBuilder(this._sequenceContext)}update(t){this._actionQueue.update(t)}isComplete(){return this._stopped||this._actionQueue.isComplete()}stop(){this._stopped=!0}reset(){this._stopped=!1,this._actionQueue.reset()}clone(t){return new rJ(t,this._sequenceBuilder)}}/**
 * Action that can run multiple [[Action]]s or [[ActionSequence]]s at the same time
 */class rX{constructor(t){this._actions=t}update(t){for(let e=0;e<this._actions.length;e++)this._actions[e].update(t)}isComplete(t){return this._actions.every(e=>e.isComplete(t))}reset(){this._actions.forEach(t=>t.reset())}stop(){this._actions.forEach(t=>t.stop())}}/**
 * Static class for managing collision groups in excalibur, there is a maximum of 32 collision groups possible in excalibur
 */class rZ{/**
     * Create a new named collision group up to a max of 32.
     * @param name Name for the collision group
     * @param mask Optionally provide your own 32-bit mask, if none is provide the manager will generate one
     */static create(t,e){if(this._CURRENT_GROUP>this._MAX_GROUPS)throw Error(`Cannot have more than ${this._MAX_GROUPS} collision groups`);if(this._GROUPS.get(t))throw Error(`Collision group ${t} already exists`);let i=new iH(t,this._CURRENT_BIT,void 0!==e?e:~this._CURRENT_BIT);return this._CURRENT_BIT=this._CURRENT_BIT<<1|0,this._CURRENT_GROUP++,this._GROUPS.set(t,i),i}/**
     * Get all collision groups currently tracked by excalibur
     */static get groups(){return Array.from(this._GROUPS.values())}/**
     * Get a collision group by it's name
     * @param name
     */static groupByName(t){return this._GROUPS.get(t)}/**
     * Resets the managers internal group management state
     */static reset(){this._GROUPS=new Map,this._CURRENT_BIT=this._STARTING_BIT,this._CURRENT_GROUP=1}}/**
 * Type guard checking for internal initialize method
 * @internal
 * @param a
 */function r$(t){return!!t._initialize}/**
 *
 */function r0(t){return!!t.onInitialize}/**
 *
 */function r1(t){return!!t._preupdate}/**
 *
 */function r2(t){return!!t.onPreUpdate}/**
 *
 */function r5(t){return!!t.onPostUpdate}/**
 *
 */function r3(t){return!!t.onPostUpdate}/**
 *
 */function r4(t){return!!t.onPreDraw}/**
 *
 */function r6(t){return!!t.onPostDraw}// using bitmasking the maximum number of groups is 32, because that is the highest 32bit integer that JS can present.
rZ._STARTING_BIT=1,rZ._MAX_GROUPS=32,rZ._CURRENT_GROUP=1,rZ._CURRENT_BIT=rZ._STARTING_BIT,rZ._GROUPS=new Map;/**
 * The [[Texture]] object allows games built in Excalibur to load image resources.
 * [[Texture]] is an [[Loadable]] which means it can be passed to a [[Loader]]
 * to pre-load before starting a level or game.
 */class r8{/**
     * @param path       Path to the image resource
     * @param color      Optionally set the color to treat as transparent the gif, by default [[Color.Magenta]]
     * @param bustCache  Optionally load texture with cache busting
     */constructor(t,e=ef.Magenta,i=!1){this.path=t,this.color=e,this._stream=null,this._gif=null,this._textures=[],this._animation=null,this._transparentColor=null,this._resource=new eF(t,"arraybuffer",i),this._transparentColor=e}/**
     * Should excalibur add a cache busting querystring? By default false.
     * Must be set before loading
     */get bustCache(){return this._resource.bustCache}set bustCache(t){this._resource.bustCache=t}/**
     * Begins loading the texture and returns a promise to be resolved on completion
     */async load(){let t=await this._resource.load();this._stream=new nt(t),this._gif=new ni(this._stream,this._transparentColor);let e=this._gif.images.map(t=>new eN(t.src,!1));return(// Load all textures
await Promise.all(e.map(t=>t.load())),this.data=this._textures=e)}isLoaded(){return!!this.data}/**
     * Return a frame of the gif as a sprite by id
     * @param id
     */toSprite(t=0){let e=this._textures[t].toSprite();return e}/**
     * Return the gif as a spritesheet
     */toSpriteSheet(){let t=this._textures.map(t=>t.toSprite());return new eU({sprites:t})}/**
     * Transform the GIF into an animation with duration per frame
     */toAnimation(t){let e=this.toSpriteSheet(),i=e.sprites.length;return this._animation=Animation.fromSpriteSheet(e,ec(0,i),t),this._animation}get readCheckBytes(){return this._gif.checkBytes}}let r9=t=>t.reduce(function(t,e){return 2*t+e},0),r7=t=>{let e=[];for(let i=7;i>=0;i--)e.push(!!(t&1<<i));return e};class nt{constructor(t){if(this.data=null,this.len=0,this.position=0,this.readByte=()=>{if(this.position>=this.data.byteLength)throw Error("Attempted to read past end of stream.");return this.data[this.position++]},this.readBytes=t=>{let e=[];for(let i=0;i<t;i++)e.push(this.readByte());return e},this.read=t=>{let e="";for(let i=0;i<t;i++)e+=String.fromCharCode(this.readByte());return e},this.readUnsigned=()=>{// Little-endian.
let t=this.readBytes(2);return(t[1]<<8)+t[0]},this.data=new Uint8Array(t),this.len=this.data.byteLength,0===this.len)throw Error("No data loaded from file")}}let ne=function(t,e){// TODO: Now that the GIF parser is a bit different, maybe this should get an array of bytes instead of a String?
let i,s,r=0,n=[],o=1<<t,a=o+1,h=t+1,l=[];// Maybe this streaming thing should be merged with the Stream?
for(;;){if(s=i,(i=function(t){let i=0;for(let s=0;s<t;s++)e.charCodeAt(r>>3)&1<<(7&r)&&(i|=1<<s),r++;return i}(h))===o){!function(){l=[],h=t+1;for(let t=0;t<o;t++)l[t]=[t];l[o]=[],l[a]=null}();continue}if(i===a)break;if(i<l.length)s!==o&&l.push(l[s].concat(l[i][0]));else{if(i!==l.length)throw Error("Invalid LZW code.");l.push(l[s].concat(l[s][0]))}n.push.apply(n,l[i]),l.length===1<<h&&h<12&&h++}// I don't know if this is technically an error, but some GIFs do it.
//if (Math.ceil(pos / 8) !== data.length) throw new Error('Extraneous LZW bytes.');
return n};// The actual parsing; returns an object with properties.
class ni{constructor(t,e=ef.Magenta){this._st=null,this._handler={},this._transparentColor=null,this.frames=[],this.images=[],this.globalColorTable=[],this.checkBytes=[],// LZW (GIF-specific)
this.parseColorTable=t=>{// Each entry is 3 bytes, for RGB.
let e=[];for(let i=0;i<t;i++){let t=this._st.readBytes(3),i="#"+t.map(t=>{let e=t.toString(16);return 1===e.length?"0"+e:e}).join("");e.push(i)}return e},this.readSubBlocks=()=>{let t,e;e="";do t=this._st.readByte(),e+=this._st.read(t);while(0!==t)return e},this.parseHeader=()=>{let t={sig:null,ver:null,width:null,height:null,colorRes:null,globalColorTableSize:null,gctFlag:null,sorted:null,globalColorTable:[],bgColor:null,pixelAspectRatio:null// if not 0, aspectRatio = (pixelAspectRatio + 15) / 64
};if(t.sig=this._st.read(3),t.ver=this._st.read(3),"GIF"!==t.sig)throw Error("Not a GIF file.");// XXX: This should probably be handled more nicely.
t.width=this._st.readUnsigned(),t.height=this._st.readUnsigned();let e=r7(this._st.readByte());t.gctFlag=e.shift(),t.colorRes=r9(e.splice(0,3)),t.sorted=e.shift(),t.globalColorTableSize=r9(e.splice(0,3)),t.bgColor=this._st.readByte(),t.pixelAspectRatio=this._st.readByte(),t.gctFlag&&(t.globalColorTable=this.parseColorTable(1<<t.globalColorTableSize+1),this.globalColorTable=t.globalColorTable),this._handler.hdr&&this._handler.hdr(t)&&this.checkBytes.push(this._handler.hdr)},this.parseExt=t=>{switch(t.label=this._st.readByte(),t.label){case 249:t.extType="gce",(t=>{this.checkBytes.push(this._st.readByte());let e=r7(this._st.readByte());t.reserved=e.splice(0,3),t.disposalMethod=r9(e.splice(0,3)),t.userInput=e.shift(),t.transparencyGiven=e.shift(),t.delayTime=this._st.readUnsigned(),t.transparencyIndex=this._st.readByte(),t.terminator=this._st.readByte(),this._handler.gce&&this._handler.gce(t)&&this.checkBytes.push(this._handler.gce)})(t);break;case 254:t.extType="com",(t=>{t.comment=this.readSubBlocks(),this._handler.com&&this._handler.com(t)&&this.checkBytes.push(this._handler.com)})(t);break;case 1:t.extType="pte",(t=>{this.checkBytes.push(this._st.readByte()),t.ptHeader=this._st.readBytes(12),t.ptData=this.readSubBlocks(),this._handler.pte&&this._handler.pte(t)&&this.checkBytes.push(this._handler.pte)})(t);break;case 255:t.extType="app",(t=>{(this.checkBytes.push(this._st.readByte()),t.identifier=this._st.read(8),t.authCode=this._st.read(3),"NETSCAPE"===t.identifier)?(t=>{this.checkBytes.push(this._st.readByte()),t.unknown=this._st.readByte(),t.iterations=this._st.readUnsigned(),t.terminator=this._st.readByte(),this._handler.app&&this._handler.app.NETSCAPE&&this._handler.app.NETSCAPE(t)&&this.checkBytes.push(this._handler.app)})(t):(t=>{t.appData=this.readSubBlocks(),this._handler.app&&this._handler.app[t.identifier]&&this._handler.app[t.identifier](t)&&this.checkBytes.push(this._handler.app[t.identifier])})(t)})(t);break;default:t.extType="unknown",(t=>{t.data=this.readSubBlocks(),this._handler.unknown&&this._handler.unknown(t)&&this.checkBytes.push(this._handler.unknown)})(t)}},this.parseImg=t=>{t.leftPos=this._st.readUnsigned(),t.topPos=this._st.readUnsigned(),t.width=this._st.readUnsigned(),t.height=this._st.readUnsigned();let e=r7(this._st.readByte());t.lctFlag=e.shift(),t.interlaced=e.shift(),t.sorted=e.shift(),t.reserved=e.splice(0,2),t.lctSize=r9(e.splice(0,3)),t.lctFlag&&(t.lct=this.parseColorTable(1<<t.lctSize+1)),t.lzwMinCodeSize=this._st.readByte();let i=this.readSubBlocks();t.pixels=ne(t.lzwMinCodeSize,i),t.interlaced&&(t.pixels=((t,e)=>{// Of course this defeats the purpose of interlacing. And it's *probably*
// the least efficient way it's ever been implemented. But nevertheless...
let i=Array(t.length),s=t.length/e,r=(s,r)=>{let n=t.slice(r*e,(r+1)*e);i.splice.apply(i,[s*e,e].concat(n))},n=[0,4,2,1],o=[8,8,4,2],a=0;for(let t=0;t<4;t++)for(let e=n[t];e<s;e+=o[t])r(e,a),a++;return i})(t.pixels,t.width)),this.frames.push(t),this.arrayToImage(t),this._handler.img&&this._handler.img(t)&&this.checkBytes.push(this._handler)},this.parseBlock=()=>{let t={sentinel:this._st.readByte(),type:""},e=String.fromCharCode(t.sentinel);switch(e){case"!":t.type="ext",this.parseExt(t);break;case",":t.type="img",this.parseImg(t);break;case";":t.type="eof",this._handler.eof&&this._handler.eof(t)&&this.checkBytes.push(this._handler.eof);break;default:throw Error("Unknown block: 0x"+t.sentinel.toString(16))}"eof"!==t.type&&this.parseBlock()},this.arrayToImage=t=>{let e=0,i=document.createElement("canvas");i.id=e.toString(),i.width=t.width,i.height=t.height,e++;let s=i.getContext("2d"),r=0,n=0;for(let e=0;e<t.pixels.length;e++)n%t.width==0&&(r++,n=0),this.globalColorTable[t.pixels[e]]===this._transparentColor.toHex()?s.fillStyle="rgba(0, 0, 0, 0)":s.fillStyle=this.globalColorTable[t.pixels[e]],s.fillRect(n,r,1,1),n++;let o=new Image;o.src=i.toDataURL(),this.images.push(o)},this._st=t,this._handler={},this._transparentColor=e,this.parseHeader(),this.parseBlock()}}class ns extends eR{constructor(t){super(),this.color=ef.Black,this.thickness=1;let{start:e,end:i,color:s,thickness:r}=t;this.start=e,this.end=i,this.color=null!=s?s:this.color,this.thickness=null!=r?r:this.thickness;let{width:n,height:o}=ey.fromPoints([e,i]);this.width=n,this.height=o}_drawImage(t,e,i){t.drawLine(this.start,this.end,this.color,this.thickness)}clone(){return new ns({start:this.start,end:this.end,color:this.color,thickness:this.thickness})}}/**
 * A polygon [[Graphic]] for drawing arbitrary polygons to the [[ExcaliburGraphicsContext]]
 *
 * Polygons default to [[ImageFiltering.Blended]]
 */class nr extends ig{get points(){return this._points}set points(t){this._points=t;let e=this.minPoint;this.width=this._points.reduce((t,e)=>Math.max(e.x,t),0)-e.x,this.height=this._points.reduce((t,e)=>Math.max(e.y,t),0)-e.y,this.flagDirty()}get minPoint(){let t=this._points.reduce((t,e)=>Math.min(e.x,t),1/0),e=this._points.reduce((t,e)=>Math.min(e.y,t),1/0);return e_(t,e)}constructor(t){super(t),this.points=t.points,this.filtering=V.Blended,this.rasterize()}clone(){return new nr({points:this.points.map(t=>t.clone()),...this.cloneGraphicOptions(),...this.cloneRasterOptions()})}execute(t){if(this.points&&this.points.length){t.beginPath();// Iterate through the supplied points and construct a 'polygon'
let e=this.minPoint.negate(),i=this.points[0].add(e);t.moveTo(i.x,i.y),this.points.forEach(i=>{t.lineTo(i.x+e.x,i.y+e.y)}),t.lineTo(i.x,i.y),t.closePath(),this.color&&t.fill(),this.strokeColor&&t.stroke()}}}class nn{constructor(){// Code from StephenCleary https://gist.github.com/StephenCleary/ba50b2da419c03b9cba1d20cb4654d5e
this._queue=[]}get length(){return this._queue.length}enqueue(){let t=new eC;return this._queue.push(t),t.promise}dequeue(t){let e=this._queue.shift();e.resolve(t)}}/**
 * Semaphore allows you to limit the amount of async calls happening between `enter()` and `exit()`
 *
 * This can be useful when limiting the number of http calls, browser api calls, etc either for performance or to work
 * around browser limitations like max Image.decode() calls in chromium being 256.
 */class no{constructor(t){this._count=t,this._waitQueue=new nn}get count(){return this._count}get waiting(){return this._waitQueue.length}async enter(){return 0!==this._count?(this._count--,Promise.resolve()):this._waitQueue.enqueue()}exit(t=1){if(0!==t){for(;0!==t&&0!==this._waitQueue.length;)this._waitQueue.dequeue(null),t--;this._count+=t}}}/**
 * The current Excalibur version string
 * @description `process.env.__EX_VERSION` gets replaced by Webpack on build
 */let na="0.28.0";tw();// This file is used as the bundle entry point and exports everything
// that will be exposed as the `ex` global variable.
// ex.Events namespace
// ex.Input namespace
// TODO deprecated import site remove in v0.29.0
// ex.Util namespaces
// ex.Deprecated
// import * as deprecated from './Deprecated';
// export { deprecated as Deprecated };
// export * from './Deprecated';
})();var a=o.fWn,h=o.Ia8,l=o.rqv,A=o.hLI,d=o.yyv,c=o.tX5,u=o.vtX,g=o.r7K,p=o.lCh,_=o.cE4,f=o.fwF,m=o.sce,y=o.AQ6,C=o._c7,x=o.KUs,w=o.Ajp,I=o.dkO,v=o.RDh,E=o._H9,B=o.mxs,b=o.OmD,Q=o.kBf,S=o.C4F,T=o.NQt,D=o.JjN,F=o.EK_,k=o.V1s,P=o.xHm,R=o.Xz7,M=o.Cdc,L=o.FKn,N=o.SUY,U=o.ab2,G=o.GfZ,z=o.YMS,O=o.oyv,H=o.aUb,q=o.SdD,V=o.JUv,Y=o.jEj,j=o.TFq,K=o.HDU,W=o.R_y,J=o.ydN,X=o.t50,Z=o.s$$,$=o.v2G,tt=o.Ilk,te=o.s9i,ti=o.dxL,ts=o.LLX,tr=o.wA2,tn=o.R_p,to=o.IQ$,ta=o.I5F,th=o.X8$,tl=o.FR6,tA=o.U8o,td=o.kbG,tc=o.iS_,tu=o.cGG,tg=o.RPN,tp=o.skb,t_=o.SLU,tf=o.RdJ,tm=o.cNu,ty=o.gU7,tC=o.LSk,tx=o.Nmp,tw=o.d1Y,tI=o.xrL,tv=o.sRW,tE=o.cmV,tB=o.qWz,tb=o.N0Q,tQ=o.q8b,tS=o.ynB,tT=o.jT9,tD=o.wAz,tF=o.D4V,tk=o.NLr,tP=o.N6H,tR=o.W1A,tM=o.JHW,tL=o.ZZ$,tN=o.v2K,tU=o.pBf,tG=o.vpe,tz=o.GMl,tO=o.zW2,tH=o.B0K,tq=o.Nv7,tV=o.C_p,tY=o.MUA,tj=o.xqU,tK=o.pTp,tW=o.vUK,tJ=o.j9l,tX=o.Zxw,tZ=o.v51,t$=o.Hdx,t0=o.Z$d,t1=o.iqV,t2=o.o$7,t5=o.olM,t3=o.Zm$,t4=o.$QH,t6=o.i78,t8=o.nJg,t9=o.h6u,t7=o.hts,et=o.j88,ee=o.VME,ei=o.fy2,es=o.nt,er=o.Ukr,en=o.zsu,eo=o.oA6,ea=o.TVh,eh=o.TwZ,el=o.GTT,eA=o.xxj,ed=o.XdK,ec=o.Jmb,eu=o.cXo,eg=o.Dm5,ep=o.IIB,e_=o.ebW,ef=o.zI0,em=o.LYD,ey=o.cEG,eC=o.SEl,ex=o.t9V,ew=o.ez5,eI=o.N1d,ev=o.R8U,eE=o.SKZ,eB=o.__J,eb=o.RI$,eQ=o.x12,eS=o.ccz,eT=o.aNw,eD=o.XrL,eF=o.xwn,ek=o.dNK,eP=o.ini,eR=o.YdH,eM=o.F5T,eL=o.y3G,eN=o.l57,eU=o.xn0,eG=o.t2V,ez=o.uxB,eO=o.cpd,eH=o.fiy,eq=o.$XZ,eV=o.UG6,eY=o.uqK,ej=o.STE,eK=o.y$z,eW=o.mAD,eJ=o.sOq,eX=o.hUw,eZ=o._0G,e$=o.Sqs,e0=o.hpZ,e1=o.Vol,e2=o.vYX,e5=o.wIZ,e3=o.cBi,e4=o.c30,e6=o.MPV,e8=o.RFv,e9=o.Ux6,e7=o.rxy,it=o.I$c,ie=o.kfC,ii=o.VjY,is=o.mgq,ir=o.YVA,io=o.Kgp,ia=o.HH$,ih=o.M_d,il=o.rgh,iA=o.Ra6,id=o.KhR,ic=o.BS5,iu=o.xhz,ig=o.xOq,ip=o.a9j,i_=o.bHk,im=o.CgK,iy=o.cuY,iC=o.kvE,ix=o.SBu,iw=o.AE_,iI=o.ctO,iv=o.OLH,iE=o.kky,iB=o.nSF,ib=o.zHn,iQ=o.zwx,iS=o.AeJ,iT=o.hLz,iD=o.D9g,iF=o.wA,ik=o.jhr,iP=o.GVs,iR=o._zO,iM=o.LXZ,iL=o.w6$,iN=o.mhV,iU=o.MOD,iG=o.kwd,iz=o.Lmr,iO=o.xsS,iH=o.K5l,iq=o.lLr,iV=o.Z$r,iY=o.IXb,ij=o.SGH,iK=o.SMj,iW=o.L34,iJ=o.exe,iX=o.bnF,iZ=o.MFA,i$=o.$uU,i0=o.Sap,i1=o.jyi,i2=o.E03,i5=o.V6q,i3=o.rg2,i4=o.DVW,i6=o.nVo,i8=o.F6N,i9=o.xP7,i7=o.Odq,st=o.Zif,se=o.ZGJ,si=o.MJk,ss=o.xvT,sr=o.PHM,sn=o.dpR,so=o.n9L,sa=o.KwO,sh=o.SxM,sl=o.B7y,sA=o.x7r,sd=o.wx7,sc=o.Uvn,su=o.OFT,sg=o.xzN,sp=o.CcZ,s_=o.M5Z,sf=o.ZrN,sm=o.OWs,sy=o.dF9,sC=o.oZy,sx=o.rD2,sw=o.VHo,sI=o.ohE,sv=o.R$E,sE=o.xQN,sB=o.AdJ,sb=o.q3I,sQ=o.Pab,sS=o.uZ5,sT=o.McK,sD=o.F9c,sF=o.k0b,sk=o.hnT,sP=o.RSJ,sR=o.Mku,sM=o.h90,sL=o.rms,sN=o.ErP,sU=o.aVg,sG=o.lPc,sz=o.Z8E,sO=o._N2,sH=o.yFn,sq=o.lNv,sV=o.cu9,sY=o.MZQ,sj=o.FUM,sK=o.BxR,sW=o.vdf,sJ=o.iaL,sX=o.w6H,sZ=o.Q4c,s$=o.Xxe,s0=o.Uxb,s1=o.Yr5,s2=o.Bhw,s5=o.yOA});var A=(l("3MXpL"),l("3MXpL")),d={};s=function(t){// go through the array every three bytes, we'll deal with trailing stuff later
for(var e,i=t.length,s=i%3// if we have 1 byte left, pad 2 bytes
,r=[],n=0,o=i-s;n<o;n+=16383// must be multiple of 3
)r.push(function(t,e,i){for(var s,r=[],n=e;n<i;n+=3)r.push(c[(s=(t[n]<<16&16711680)+(t[n+1]<<8&65280)+(255&t[n+2]))>>18&63]+c[s>>12&63]+c[s>>6&63]+c[63&s]);return r.join("")}(t,n,n+16383>o?o:n+16383));return 1===s?r.push(c[(e=t[i-1])>>2]+c[e<<4&63]+"=="):2===s&&r.push(c[(e=(t[i-2]<<8)+t[i-1])>>10]+c[e>>4&63]+c[e<<2&63]+"="),r.join("")};for(var c=[],u=[],g="undefined"!=typeof Uint8Array?Uint8Array:Array,p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",_=0,f=p.length;_<f;++_)c[_]=p[_],u[p.charCodeAt(_)]=_;// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
u["-".charCodeAt(0)]=62,u["_".charCodeAt(0)]=63,r=function(t,e,i,s,r){var n,o,a=8*r-s-1,h=(1<<a)-1,l=h>>1,A=-7,d=i?r-1:0,c=i?-1:1,u=t[e+d];for(d+=c,n=u&(1<<-A)-1,u>>=-A,A+=a;A>0;n=256*n+t[e+d],d+=c,A-=8);for(o=n&(1<<-A)-1,n>>=-A,A+=s;A>0;o=256*o+t[e+d],d+=c,A-=8);if(0===n)n=1-l;else{if(n===h)return o?NaN:(u?-1:1)*(1/0);o+=Math.pow(2,s),n-=l}return(u?-1:1)*o*Math.pow(2,n-s)},n=function(t,e,i,s,r,n){var o,a,h,l=8*n-r-1,A=(1<<l)-1,d=A>>1,c=23===r?5960464477539062e-23:0,u=s?0:n-1,g=s?1:-1,p=e<0||0===e&&1/e<0?1:0;for(isNaN(e=Math.abs(e))||e===1/0?(a=isNaN(e)?1:0,o=A):(o=Math.floor(Math.log(e)/Math.LN2),e*(h=Math.pow(2,-o))<1&&(o--,h*=2),o+d>=1?e+=c/h:e+=c*Math.pow(2,1-d),e*h>=2&&(o++,h/=2),o+d>=A?(a=0,o=A):o+d>=1?(a=(e*h-1)*Math.pow(2,r),o+=d):(a=e*Math.pow(2,d-1)*Math.pow(2,r),o=0));r>=8;t[i+u]=255&a,u+=g,a/=256,r-=8);for(o=o<<r|a,l+=r;l>0;t[i+u]=255&o,u+=g,o/=256,l-=8);t[i+u-g]|=128*p};const m="function"==typeof Symbol&&"function"// eslint-disable-line dot-notation
==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom")// eslint-disable-line dot-notation
:null;function y(t){if(t>2147483647)throw RangeError('The value "'+t+'" is invalid for option "size"');// Return an augmented `Uint8Array` instance
let e=new Uint8Array(t);return Object.setPrototypeOf(e,C.prototype),e}/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */function C(t,e,i){// Common case.
if("number"==typeof t){if("string"==typeof e)throw TypeError('The "string" argument must be of type string. Received type number');return I(t)}return x(t,e,i)}function x(t,e,i){if("string"==typeof t)return function(t,e){if(("string"!=typeof e||""===e)&&(e="utf8"),!C.isEncoding(e))throw TypeError("Unknown encoding: "+e);let i=0|b(t,e),s=y(i),r=s.write(t,e);return r!==i&&// cause everything after the first invalid character to be ignored. (e.g.
// 'abxxcd' will be treated as 'ab')
(s=s.slice(0,r)),s}(t,e);if(ArrayBuffer.isView(t))return function(t){if(J(t,Uint8Array)){let e=new Uint8Array(t);return E(e.buffer,e.byteOffset,e.byteLength)}return v(t)}(t);if(null==t)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(J(t,ArrayBuffer)||t&&J(t.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(J(t,SharedArrayBuffer)||t&&J(t.buffer,SharedArrayBuffer)))return E(t,e,i);if("number"==typeof t)throw TypeError('The "value" argument must not be of type number. Received type number');let s=t.valueOf&&t.valueOf();if(null!=s&&s!==t)return C.from(s,e,i);let r=function(t){var e;if(C.isBuffer(t)){let e=0|B(t.length),i=y(e);return 0===i.length||t.copy(i,0,0,e),i}return void 0!==t.length?"number"!=typeof t.length||(e=t.length)!=e// eslint-disable-line no-self-compare
?y(0):v(t):"Buffer"===t.type&&Array.isArray(t.data)?v(t.data):void 0}(t);if(r)return r;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return C.from(t[Symbol.toPrimitive]("string"),e,i);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function w(t){if("number"!=typeof t)throw TypeError('"size" argument must be of type number');if(t<0)throw RangeError('The value "'+t+'" is invalid for option "size"')}function I(t){return w(t),y(t<0?0:0|B(t))}function v(t){let e=t.length<0?0:0|B(t.length),i=y(e);for(let s=0;s<e;s+=1)i[s]=255&t[s];return i}function E(t,e,i){let s;if(e<0||t.byteLength<e)throw RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(i||0))throw RangeError('"length" is outside of buffer bounds');return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(s=void 0===e&&void 0===i?new Uint8Array(t):void 0===i?new Uint8Array(t,e):new Uint8Array(t,e,i),C.prototype),s)}function B(t){// Note: cannot use `length < K_MAX_LENGTH` here because that fails when
// length is NaN (which is otherwise coerced to zero.)
if(t>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|t}function b(t,e){if(C.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||J(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);let i=t.length,s=arguments.length>2&&!0===arguments[2];if(!s&&0===i)return 0;// Use a for loop to avoid recursion
let r=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return i;case"utf8":case"utf-8":return j(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*i;case"hex":return i>>>1;case"base64":return K(t).length;default:if(r)return s?-1:j(t).length// assume utf8
;e=(""+e).toLowerCase(),r=!0}}function Q(t,e,i){let r=!1;// Return early if start > this.length. Done here to prevent potential uint32
// coercion fail below.
if((void 0===e||e<0)&&(e=0),e>this.length||((void 0===i||i>this.length)&&(i=this.length),i<=0||// Force coercion to uint32. This will also coerce falsey/NaN values to 0.
(i>>>=0)<=(e>>>=0)))return"";for(t||(t="utf8");;)switch(t){case"hex":return function(t,e,i){let s=t.length;(!e||e<0)&&(e=0),(!i||i<0||i>s)&&(i=s);let r="";for(let s=e;s<i;++s)r+=X[t[s]];return r}(this,e,i);case"utf8":case"utf-8":return F(this,e,i);case"ascii":return function(t,e,i){let s="";i=Math.min(t.length,i);for(let r=e;r<i;++r)s+=String.fromCharCode(127&t[r]);return s}(this,e,i);case"latin1":case"binary":return function(t,e,i){let s="";i=Math.min(t.length,i);for(let r=e;r<i;++r)s+=String.fromCharCode(t[r]);return s}(this,e,i);case"base64":var n,o;return n=e,o=i,0===n&&o===this.length?s(this):s(this.slice(n,o));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(t,e,i){let s=t.slice(e,i),r="";// If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
for(let t=0;t<s.length-1;t+=2)r+=String.fromCharCode(s[t]+256*s[t+1]);return r}(this,e,i);default:if(r)throw TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}function S(t,e,i){let s=t[e];t[e]=t[i],t[i]=s}// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function T(t,e,i,s,r){var n;// Empty buffer means no match
if(0===t.length)return -1;if("string"==typeof i?(s=i,i=0):i>2147483647?i=2147483647:i<-2147483648&&(i=-2147483648),(n=i=+i// Coerce to Number.
)!=n&&(i=r?0:t.length-1),i<0&&(i=t.length+i),i>=t.length){if(r)return -1;i=t.length-1}else if(i<0){if(!r)return -1;i=0}// Finally, search either indexOf (if dir is true) or lastIndexOf
if("string"==typeof e&&(e=C.from(e,s)),C.isBuffer(e))return(// Special case: looking for empty string/buffer always fails
0===e.length?-1:D(t,e,i,s,r));if("number"==typeof e)return(e&=255// Search for a byte value [0-255]
,"function"==typeof Uint8Array.prototype.indexOf)?r?Uint8Array.prototype.indexOf.call(t,e,i):Uint8Array.prototype.lastIndexOf.call(t,e,i):D(t,[e],i,s,r);throw TypeError("val must be string, number or Buffer")}function D(t,e,i,s,r){let n,o=1,a=t.length,h=e.length;if(void 0!==s&&("ucs2"===(s=String(s).toLowerCase())||"ucs-2"===s||"utf16le"===s||"utf-16le"===s)){if(t.length<2||e.length<2)return -1;o=2,a/=2,h/=2,i/=2}function l(t,e){return 1===o?t[e]:t.readUInt16BE(e*o)}if(r){let s=-1;for(n=i;n<a;n++)if(l(t,n)===l(e,-1===s?0:n-s)){if(-1===s&&(s=n),n-s+1===h)return s*o}else -1!==s&&(n-=n-s),s=-1}else for(i+h>a&&(i=a-h),n=i;n>=0;n--){let i=!0;for(let s=0;s<h;s++)if(l(t,n+s)!==l(e,s)){i=!1;break}if(i)return n}return -1}function F(t,e,i){i=Math.min(t.length,i);let s=[],r=e;for(;r<i;){let e=t[r],n=null,o=e>239?4:e>223?3:e>191?2:1;if(r+o<=i){let i,s,a,h;switch(o){case 1:e<128&&(n=e);break;case 2:(192&(i=t[r+1]))==128&&(h=(31&e)<<6|63&i)>127&&(n=h);break;case 3:i=t[r+1],s=t[r+2],(192&i)==128&&(192&s)==128&&(h=(15&e)<<12|(63&i)<<6|63&s)>2047&&(h<55296||h>57343)&&(n=h);break;case 4:i=t[r+1],s=t[r+2],a=t[r+3],(192&i)==128&&(192&s)==128&&(192&a)==128&&(h=(15&e)<<18|(63&i)<<12|(63&s)<<6|63&a)>65535&&h<1114112&&(n=h)}}null===n?(// we did not generate a valid codePoint so insert a
// replacement char (U+FFFD) and advance only 1 byte
n=65533,o=1):n>65535&&(// encode to utf16 (surrogate pair dance)
n-=65536,s.push(n>>>10&1023|55296),n=56320|1023&n),s.push(n),r+=o}return function(t){let e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t)// avoid extra slice()
;// Decode in chunks to avoid "call stack size exceeded".
let i="",s=0;for(;s<e;)i+=String.fromCharCode.apply(String,t.slice(s,s+=4096));return i}(s)}/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */function k(t,e,i){if(t%1!=0||t<0)throw RangeError("offset is not uint");if(t+e>i)throw RangeError("Trying to access beyond buffer length")}function P(t,e,i,s,r,n){if(!C.isBuffer(t))throw TypeError('"buffer" argument must be a Buffer instance');if(e>r||e<n)throw RangeError('"value" argument is out of bounds');if(i+s>t.length)throw RangeError("Index out of range")}function R(t,e,i,s,r){H(e,s,r,t,i,7);let n=Number(e&BigInt(4294967295));t[i++]=n,n>>=8,t[i++]=n,n>>=8,t[i++]=n,n>>=8,t[i++]=n;let o=Number(e>>BigInt(32)&BigInt(4294967295));return t[i++]=o,o>>=8,t[i++]=o,o>>=8,t[i++]=o,o>>=8,t[i++]=o,i}function M(t,e,i,s,r){H(e,s,r,t,i,7);let n=Number(e&BigInt(4294967295));t[i+7]=n,n>>=8,t[i+6]=n,n>>=8,t[i+5]=n,n>>=8,t[i+4]=n;let o=Number(e>>BigInt(32)&BigInt(4294967295));return t[i+3]=o,o>>=8,t[i+2]=o,o>>=8,t[i+1]=o,o>>=8,t[i]=o,i+8}function L(t,e,i,s,r,n){if(i+s>t.length||i<0)throw RangeError("Index out of range")}function N(t,e,i,s,r){return e=+e,i>>>=0,r||L(t,e,i,4,34028234663852886e22,-34028234663852886e22),n(t,e,i,s,23,4),i+4}function U(t,e,i,s,r){return e=+e,i>>>=0,r||L(t,e,i,8,17976931348623157e292,-17976931348623157e292),n(t,e,i,s,52,8),i+8}/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */C.TYPED_ARRAY_SUPPORT=function(){// Can typed array instances can be augmented?
try{let t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),C.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(C.prototype,"parent",{enumerable:!0,get:function(){if(C.isBuffer(this))return this.buffer}}),Object.defineProperty(C.prototype,"offset",{enumerable:!0,get:function(){if(C.isBuffer(this))return this.byteOffset}}),C.poolSize=8192// not used by this implementation
,/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/C.from=function(t,e,i){return x(t,e,i)},// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(C.prototype,Uint8Array.prototype),Object.setPrototypeOf(C,Uint8Array),/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/C.alloc=function(t,e,i){return(w(t),t<=0)?y(t):void 0!==e?"string"==typeof i?y(t).fill(e,i):y(t).fill(e):y(t)},/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */C.allocUnsafe=function(t){return I(t)},/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */C.allocUnsafeSlow=function(t){return I(t)},C.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==C.prototype// so Buffer.isBuffer(Buffer.prototype) will be false
},C.compare=function(t,e){if(J(t,Uint8Array)&&(t=C.from(t,t.offset,t.byteLength)),J(e,Uint8Array)&&(e=C.from(e,e.offset,e.byteLength)),!C.isBuffer(t)||!C.isBuffer(e))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let i=t.length,s=e.length;for(let r=0,n=Math.min(i,s);r<n;++r)if(t[r]!==e[r]){i=t[r],s=e[r];break}return i<s?-1:s<i?1:0},C.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},C.concat=function(t,e){let i;if(!Array.isArray(t))throw TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return C.alloc(0);if(void 0===e)for(i=0,e=0;i<t.length;++i)e+=t[i].length;let s=C.allocUnsafe(e),r=0;for(i=0;i<t.length;++i){let e=t[i];if(J(e,Uint8Array))r+e.length>s.length?(C.isBuffer(e)||(e=C.from(e)),e.copy(s,r)):Uint8Array.prototype.set.call(s,e,r);else if(C.isBuffer(e))e.copy(s,r);else throw TypeError('"list" argument must be an Array of Buffers');r+=e.length}return s},C.byteLength=b,// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
C.prototype._isBuffer=!0,C.prototype.swap16=function(){let t=this.length;if(t%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)S(this,e,e+1);return this},C.prototype.swap32=function(){let t=this.length;if(t%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)S(this,e,e+3),S(this,e+1,e+2);return this},C.prototype.swap64=function(){let t=this.length;if(t%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)S(this,e,e+7),S(this,e+1,e+6),S(this,e+2,e+5),S(this,e+3,e+4);return this},C.prototype.toString=function(){let t=this.length;return 0===t?"":0==arguments.length?F(this,0,t):Q.apply(this,arguments)},C.prototype.toLocaleString=C.prototype.toString,C.prototype.equals=function(t){if(!C.isBuffer(t))throw TypeError("Argument must be a Buffer");return this===t||0===C.compare(this,t)},C.prototype.inspect=function(){let t="";return t=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(t+=" ... "),"<Buffer "+t+">"},m&&(C.prototype[m]=C.prototype.inspect),C.prototype.compare=function(t,e,i,s,r){if(J(t,Uint8Array)&&(t=C.from(t,t.offset,t.byteLength)),!C.isBuffer(t))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===i&&(i=t?t.length:0),void 0===s&&(s=0),void 0===r&&(r=this.length),e<0||i>t.length||s<0||r>this.length)throw RangeError("out of range index");if(s>=r&&e>=i)return 0;if(s>=r)return -1;if(e>=i)return 1;if(e>>>=0,i>>>=0,s>>>=0,r>>>=0,this===t)return 0;let n=r-s,o=i-e,a=Math.min(n,o),h=this.slice(s,r),l=t.slice(e,i);for(let t=0;t<a;++t)if(h[t]!==l[t]){n=h[t],o=l[t];break}return n<o?-1:o<n?1:0},C.prototype.includes=function(t,e,i){return -1!==this.indexOf(t,e,i)},C.prototype.indexOf=function(t,e,i){return T(this,t,e,i,!0)},C.prototype.lastIndexOf=function(t,e,i){return T(this,t,e,i,!1)},C.prototype.write=function(t,e,i,s){var r,n,o,a,h,l,A,d;// Buffer#write(string)
if(void 0===e)s="utf8",i=this.length,e=0;else if(void 0===i&&"string"==typeof e)s=e,i=this.length,e=0;else if(isFinite(e))e>>>=0,isFinite(i)?(i>>>=0,void 0===s&&(s="utf8")):(s=i,i=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let c=this.length-e;if((void 0===i||i>c)&&(i=c),t.length>0&&(i<0||e<0)||e>this.length)throw RangeError("Attempt to write outside buffer bounds");s||(s="utf8");let u=!1;for(;;)switch(s){case"hex":return function(t,e,i,s){let r;i=Number(i)||0;let n=t.length-i;s?(s=Number(s))>n&&(s=n):s=n;let o=e.length;for(s>o/2&&(s=o/2),r=0;r<s;++r){let s=parseInt(e.substr(2*r,2),16);if(s!=s)break;t[i+r]=s}return r}(this,t,e,i);case"utf8":case"utf-8":return r=e,n=i,W(j(t,this.length-r),this,r,n);case"ascii":case"latin1":case"binary":return o=e,a=i,W(function(t){let e=[];for(let i=0;i<t.length;++i)e.push(255&t.charCodeAt(i));return e}(t),this,o,a);case"base64":// Warning: maxLength not taken into account in base64Write
return h=e,l=i,W(K(t),this,h,l);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return A=e,d=i,W(function(t,e){let i,s;let r=[];for(let n=0;n<t.length&&!((e-=2)<0);++n)s=(i=t.charCodeAt(n))>>8,r.push(i%256),r.push(s);return r}(t,this.length-A),this,A,d);default:if(u)throw TypeError("Unknown encoding: "+s);s=(""+s).toLowerCase(),u=!0}},C.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},C.prototype.slice=function(t,e){let i=this.length;t=~~t,e=void 0===e?i:~~e,t<0?(t+=i)<0&&(t=0):t>i&&(t=i),e<0?(e+=i)<0&&(e=0):e>i&&(e=i),e<t&&(e=t);let s=this.subarray(t,e);return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(s,C.prototype),s)},C.prototype.readUintLE=C.prototype.readUIntLE=function(t,e,i){t>>>=0,e>>>=0,i||k(t,e,this.length);let s=this[t],r=1,n=0;for(;++n<e&&(r*=256);)s+=this[t+n]*r;return s},C.prototype.readUintBE=C.prototype.readUIntBE=function(t,e,i){t>>>=0,e>>>=0,i||k(t,e,this.length);let s=this[t+--e],r=1;for(;e>0&&(r*=256);)s+=this[t+--e]*r;return s},C.prototype.readUint8=C.prototype.readUInt8=function(t,e){return t>>>=0,e||k(t,1,this.length),this[t]},C.prototype.readUint16LE=C.prototype.readUInt16LE=function(t,e){return t>>>=0,e||k(t,2,this.length),this[t]|this[t+1]<<8},C.prototype.readUint16BE=C.prototype.readUInt16BE=function(t,e){return t>>>=0,e||k(t,2,this.length),this[t]<<8|this[t+1]},C.prototype.readUint32LE=C.prototype.readUInt32LE=function(t,e){return t>>>=0,e||k(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},C.prototype.readUint32BE=C.prototype.readUInt32BE=function(t,e){return t>>>=0,e||k(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},C.prototype.readBigUInt64LE=Z(function(t){q(t>>>=0,"offset");let e=this[t],i=this[t+7];(void 0===e||void 0===i)&&V(t,this.length-8);let s=e+256*this[++t]+65536*this[++t]+16777216*this[++t],r=this[++t]+256*this[++t]+65536*this[++t]+16777216*i;return BigInt(s)+(BigInt(r)<<BigInt(32))}),C.prototype.readBigUInt64BE=Z(function(t){q(t>>>=0,"offset");let e=this[t],i=this[t+7];(void 0===e||void 0===i)&&V(t,this.length-8);let s=16777216*e+65536*this[++t]+256*this[++t]+this[++t],r=16777216*this[++t]+65536*this[++t]+256*this[++t]+i;return(BigInt(s)<<BigInt(32))+BigInt(r)}),C.prototype.readIntLE=function(t,e,i){t>>>=0,e>>>=0,i||k(t,e,this.length);let s=this[t],r=1,n=0;for(;++n<e&&(r*=256);)s+=this[t+n]*r;return s>=(r*=128)&&(s-=Math.pow(2,8*e)),s},C.prototype.readIntBE=function(t,e,i){t>>>=0,e>>>=0,i||k(t,e,this.length);let s=e,r=1,n=this[t+--s];for(;s>0&&(r*=256);)n+=this[t+--s]*r;return n>=(r*=128)&&(n-=Math.pow(2,8*e)),n},C.prototype.readInt8=function(t,e){return(t>>>=0,e||k(t,1,this.length),128&this[t])?-((255-this[t]+1)*1):this[t]},C.prototype.readInt16LE=function(t,e){t>>>=0,e||k(t,2,this.length);let i=this[t]|this[t+1]<<8;return 32768&i?4294901760|i:i},C.prototype.readInt16BE=function(t,e){t>>>=0,e||k(t,2,this.length);let i=this[t+1]|this[t]<<8;return 32768&i?4294901760|i:i},C.prototype.readInt32LE=function(t,e){return t>>>=0,e||k(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},C.prototype.readInt32BE=function(t,e){return t>>>=0,e||k(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},C.prototype.readBigInt64LE=Z(function(t){q(t>>>=0,"offset");let e=this[t],i=this[t+7];(void 0===e||void 0===i)&&V(t,this.length-8);let s=this[t+4]+256*this[t+5]+65536*this[t+6]+(i<<24// Overflow
);return(BigInt(s)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+16777216*this[++t])}),C.prototype.readBigInt64BE=Z(function(t){q(t>>>=0,"offset");let e=this[t],i=this[t+7];(void 0===e||void 0===i)&&V(t,this.length-8);let s=(e<<24)+// Overflow
65536*this[++t]+256*this[++t]+this[++t];return(BigInt(s)<<BigInt(32))+BigInt(16777216*this[++t]+65536*this[++t]+256*this[++t]+i)}),C.prototype.readFloatLE=function(t,e){return t>>>=0,e||k(t,4,this.length),r(this,t,!0,23,4)},C.prototype.readFloatBE=function(t,e){return t>>>=0,e||k(t,4,this.length),r(this,t,!1,23,4)},C.prototype.readDoubleLE=function(t,e){return t>>>=0,e||k(t,8,this.length),r(this,t,!0,52,8)},C.prototype.readDoubleBE=function(t,e){return t>>>=0,e||k(t,8,this.length),r(this,t,!1,52,8)},C.prototype.writeUintLE=C.prototype.writeUIntLE=function(t,e,i,s){if(t=+t,e>>>=0,i>>>=0,!s){let s=Math.pow(2,8*i)-1;P(this,t,e,i,s,0)}let r=1,n=0;for(this[e]=255&t;++n<i&&(r*=256);)this[e+n]=t/r&255;return e+i},C.prototype.writeUintBE=C.prototype.writeUIntBE=function(t,e,i,s){if(t=+t,e>>>=0,i>>>=0,!s){let s=Math.pow(2,8*i)-1;P(this,t,e,i,s,0)}let r=i-1,n=1;for(this[e+r]=255&t;--r>=0&&(n*=256);)this[e+r]=t/n&255;return e+i},C.prototype.writeUint8=C.prototype.writeUInt8=function(t,e,i){return t=+t,e>>>=0,i||P(this,t,e,1,255,0),this[e]=255&t,e+1},C.prototype.writeUint16LE=C.prototype.writeUInt16LE=function(t,e,i){return t=+t,e>>>=0,i||P(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},C.prototype.writeUint16BE=C.prototype.writeUInt16BE=function(t,e,i){return t=+t,e>>>=0,i||P(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},C.prototype.writeUint32LE=C.prototype.writeUInt32LE=function(t,e,i){return t=+t,e>>>=0,i||P(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},C.prototype.writeUint32BE=C.prototype.writeUInt32BE=function(t,e,i){return t=+t,e>>>=0,i||P(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},C.prototype.writeBigUInt64LE=Z(function(t,e=0){return R(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),C.prototype.writeBigUInt64BE=Z(function(t,e=0){return M(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),C.prototype.writeIntLE=function(t,e,i,s){if(t=+t,e>>>=0,!s){let s=Math.pow(2,8*i-1);P(this,t,e,i,s-1,-s)}let r=0,n=1,o=0;for(this[e]=255&t;++r<i&&(n*=256);)t<0&&0===o&&0!==this[e+r-1]&&(o=1),this[e+r]=(t/n>>0)-o&255;return e+i},C.prototype.writeIntBE=function(t,e,i,s){if(t=+t,e>>>=0,!s){let s=Math.pow(2,8*i-1);P(this,t,e,i,s-1,-s)}let r=i-1,n=1,o=0;for(this[e+r]=255&t;--r>=0&&(n*=256);)t<0&&0===o&&0!==this[e+r+1]&&(o=1),this[e+r]=(t/n>>0)-o&255;return e+i},C.prototype.writeInt8=function(t,e,i){return t=+t,e>>>=0,i||P(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},C.prototype.writeInt16LE=function(t,e,i){return t=+t,e>>>=0,i||P(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},C.prototype.writeInt16BE=function(t,e,i){return t=+t,e>>>=0,i||P(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},C.prototype.writeInt32LE=function(t,e,i){return t=+t,e>>>=0,i||P(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},C.prototype.writeInt32BE=function(t,e,i){return t=+t,e>>>=0,i||P(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},C.prototype.writeBigInt64LE=Z(function(t,e=0){return R(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),C.prototype.writeBigInt64BE=Z(function(t,e=0){return M(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),C.prototype.writeFloatLE=function(t,e,i){return N(this,t,e,!0,i)},C.prototype.writeFloatBE=function(t,e,i){return N(this,t,e,!1,i)},C.prototype.writeDoubleLE=function(t,e,i){return U(this,t,e,!0,i)},C.prototype.writeDoubleBE=function(t,e,i){return U(this,t,e,!1,i)},// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
C.prototype.copy=function(t,e,i,s){if(!C.isBuffer(t))throw TypeError("argument should be a Buffer");// Copy 0 bytes; we're done
if(i||(i=0),s||0===s||(s=this.length),e>=t.length&&(e=t.length),e||(e=0),s>0&&s<i&&(s=i),s===i||0===t.length||0===this.length)return 0;// Fatal error conditions
if(e<0)throw RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw RangeError("Index out of range");if(s<0)throw RangeError("sourceEnd out of bounds");s>this.length&&(s=this.length),t.length-e<s-i&&(s=t.length-e+i);let r=s-i;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,i,s):Uint8Array.prototype.set.call(t,this.subarray(i,s),e),r},// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
C.prototype.fill=function(t,e,i,s){let r;// Handle string cases:
if("string"==typeof t){if("string"==typeof e?(s=e,e=0,i=this.length):"string"==typeof i&&(s=i,i=this.length),void 0!==s&&"string"!=typeof s)throw TypeError("encoding must be a string");if("string"==typeof s&&!C.isEncoding(s))throw TypeError("Unknown encoding: "+s);if(1===t.length){let e=t.charCodeAt(0);("utf8"===s&&e<128||"latin1"===s)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));// Invalid ranges are not set to a default, so can range check early.
if(e<0||this.length<e||this.length<i)throw RangeError("Out of range index");if(i<=e)return this;if(e>>>=0,i=void 0===i?this.length:i>>>0,t||(t=0),"number"==typeof t)for(r=e;r<i;++r)this[r]=t;else{let n=C.isBuffer(t)?t:C.from(t,s),o=n.length;if(0===o)throw TypeError('The value "'+t+'" is invalid for argument "value"');for(r=0;r<i-e;++r)this[r+e]=n[r%o]}return this};// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const G={};function z(t,e,i){G[t]=class extends i{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),// Add the error code to the name to include it in the stack trace.
this.name=`${this.name} [${t}]`,// Access the stack to generate the error message including the error code
// from the name.
this.stack// eslint-disable-line no-unused-expressions
,// Reset the name to the actual name.
delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function O(t){let e="",i=t.length,s="-"===t[0]?1:0;for(;i>=s+4;i-=3)e=`_${t.slice(i-3,i)}${e}`;return`${t.slice(0,i)}${e}`}function H(t,e,i,s,r,n){if(t>i||t<e){let s;let r="bigint"==typeof e?"n":"";throw s=n>3?0===e||e===BigInt(0)?`>= 0${r} and < 2${r} ** ${(n+1)*8}${r}`:`>= -(2${r} ** ${(n+1)*8-1}${r}) and < 2 ** ${(n+1)*8-1}${r}`:`>= ${e}${r} and <= ${i}${r}`,new G.ERR_OUT_OF_RANGE("value",s,t)}q(r,"offset"),(void 0===s[r]||void 0===s[r+n])&&V(r,s.length-(n+1))}function q(t,e){if("number"!=typeof t)throw new G.ERR_INVALID_ARG_TYPE(e,"number",t)}function V(t,e,i){if(Math.floor(t)!==t)throw q(t,i),new G.ERR_OUT_OF_RANGE(i||"offset","an integer",t);if(e<0)throw new G.ERR_BUFFER_OUT_OF_BOUNDS;throw new G.ERR_OUT_OF_RANGE(i||"offset",`>= ${i?1:0} and <= ${e}`,t)}z("ERR_BUFFER_OUT_OF_BOUNDS",function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),z("ERR_INVALID_ARG_TYPE",function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`},TypeError),z("ERR_OUT_OF_RANGE",function(t,e,i){let s=`The value of "${t}" is out of range.`,r=i;return Number.isInteger(i)&&Math.abs(i)>4294967296?r=O(String(i)):"bigint"==typeof i&&(r=String(i),(i>BigInt(2)**BigInt(32)||i<-(BigInt(2)**BigInt(32)))&&(r=O(r)),r+="n"),s+=` It must be ${e}. Received ${r}`},RangeError);// HELPER FUNCTIONS
// ================
const Y=/[^+/0-9A-Za-z-_]/g;function j(t,e){let i;e=e||1/0;let s=t.length,r=null,n=[];for(let o=0;o<s;++o){// is surrogate component
if((i=t.charCodeAt(o))>55295&&i<57344){// last char was a lead
if(!r){// no lead yet
if(i>56319||o+1===s){// unexpected trail
(e-=3)>-1&&n.push(239,191,189);continue}// valid lead
r=i;continue}// 2 leads in a row
if(i<56320){(e-=3)>-1&&n.push(239,191,189),r=i;continue}// valid surrogate pair
i=(r-55296<<10|i-56320)+65536}else r&&(e-=3)>-1&&n.push(239,191,189);// encode utf8
if(r=null,i<128){if((e-=1)<0)break;n.push(i)}else if(i<2048){if((e-=2)<0)break;n.push(i>>6|192,63&i|128)}else if(i<65536){if((e-=3)<0)break;n.push(i>>12|224,i>>6&63|128,63&i|128)}else if(i<1114112){if((e-=4)<0)break;n.push(i>>18|240,i>>12&63|128,i>>6&63|128,63&i|128)}else throw Error("Invalid code point")}return n}function K(t){return function(t){var e,i,s=function(t){var e=t.length;if(e%4>0)throw Error("Invalid string. Length must be a multiple of 4");// Trim off extra bytes after placeholder bytes are found
// See: https://github.com/beatgammit/base64-js/issues/42
var i=t.indexOf("=");-1===i&&(i=e);var s=i===e?0:4-i%4;return[i,s]}(t),r=s[0],n=s[1],o=new g((r+n)*3/4-n),a=0,h=n>0?r-4:r;for(i=0;i<h;i+=4)e=u[t.charCodeAt(i)]<<18|u[t.charCodeAt(i+1)]<<12|u[t.charCodeAt(i+2)]<<6|u[t.charCodeAt(i+3)],o[a++]=e>>16&255,o[a++]=e>>8&255,o[a++]=255&e;return 2===n&&(e=u[t.charCodeAt(i)]<<2|u[t.charCodeAt(i+1)]>>4,o[a++]=255&e),1===n&&(e=u[t.charCodeAt(i)]<<10|u[t.charCodeAt(i+1)]<<4|u[t.charCodeAt(i+2)]>>2,o[a++]=e>>8&255,o[a++]=255&e),o}(function(t){// Node converts strings with length < 2 to ''
if(// Node strips out invalid characters like \n and \t from the string, base64-js does not
(t=// Node takes equal signs as end of the Base64 encoding
(t=t.split("=")[0]).trim().replace(Y,"")).length<2)return"";// Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
for(;t.length%4!=0;)t+="=";return t}(t))}function W(t,e,i,s){let r;for(r=0;r<s&&!(r+i>=e.length)&&!(r>=t.length);++r)e[r+i]=t[r];return r}// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function J(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const X=function(){let t="0123456789abcdef",e=Array(256);for(let i=0;i<16;++i){let s=16*i;for(let r=0;r<16;++r)e[s+r]=t[i]+t[r]}return e}();// Return not function with Error if BigInt not supported
function Z(t){return"undefined"==typeof BigInt?$:t}function $(){throw Error("BigInt not supported")}self,i=l("3MXpL"),d=(()=>{var t={"./node_modules/fast-xml-parser/src/json2xml.js":(t,e,i)=>{let s=i("./node_modules/fast-xml-parser/src/util.js").buildOptions,r={attributeNamePrefix:"@_",attrNodeName:!1,textNodeName:"#text",ignoreAttributes:!0,cdataTagName:!1,cdataPositionChar:"\\c",format:!1,indentBy:"  ",supressEmptyNode:!1,tagValueProcessor:function(t){return t},attrValueProcessor:function(t){return t}},n=["attributeNamePrefix","attrNodeName","textNodeName","ignoreAttributes","cdataTagName","cdataPositionChar","format","indentBy","supressEmptyNode","tagValueProcessor","attrValueProcessor","rootNodeName"];function o(t){this.options=s(t,r,n),this.options.ignoreAttributes||this.options.attrNodeName?this.isAttribute=function(){return!1}:(this.attrPrefixLen=this.options.attributeNamePrefix.length,this.isAttribute=p),this.options.cdataTagName?this.isCDATA=_:this.isCDATA=function(){return!1},this.replaceCDATAstr=h,this.replaceCDATAarr=l,this.processTextOrObjNode=a,this.options.format?(this.indentate=g,this.tagEndChar=">\n",this.newLine="\n"):(this.indentate=function(){return""},this.tagEndChar=">",this.newLine=""),this.options.supressEmptyNode?(this.buildTextNode=u,this.buildObjNode=d):(this.buildTextNode=c,this.buildObjNode=A),this.buildTextValNode=c,this.buildObjectNode=A}function a(t,e,i){let s=this.j2x(t,i+1);return void 0!==t[this.options.textNodeName]&&1===Object.keys(t).length?this.buildTextNode(s.val,e,s.attrStr,i):this.buildObjNode(s.val,e,s.attrStr,i)}function h(t,e){return t=this.options.tagValueProcessor(""+t),""===this.options.cdataPositionChar||""===t?t+"<![CDATA["+e+"]]"+this.tagEndChar:t.replace(this.options.cdataPositionChar,"<![CDATA["+e+"]]"+this.tagEndChar)}function l(t,e){if(t=this.options.tagValueProcessor(""+t),""===this.options.cdataPositionChar||""===t)return t+"<![CDATA["+e.join("]]><![CDATA[")+"]]"+this.tagEndChar;for(let i in e)t=t.replace(this.options.cdataPositionChar,"<![CDATA["+e[i]+"]]>");return t+this.newLine}function A(t,e,i,s){return i&&-1===t.indexOf("<")?this.indentate(s)+"<"+e+i+">"+t+"</"+e+this.tagEndChar:this.indentate(s)+"<"+e+i+this.tagEndChar+t+this.indentate(s)+"</"+e+this.tagEndChar}function d(t,e,i,s){return""!==t?this.buildObjectNode(t,e,i,s):this.indentate(s)+"<"+e+i+"/"+this.tagEndChar}function c(t,e,i,s){return this.indentate(s)+"<"+e+i+">"+this.options.tagValueProcessor(t)+"</"+e+this.tagEndChar}function u(t,e,i,s){return""!==t?this.buildTextValNode(t,e,i,s):this.indentate(s)+"<"+e+i+"/"+this.tagEndChar}function g(t){return this.options.indentBy.repeat(t)}function p(t){return!!t.startsWith(this.options.attributeNamePrefix)&&t.substr(this.attrPrefixLen)}function _(t){return t===this.options.cdataTagName}o.prototype.parse=function(t){return Array.isArray(t)&&this.options.rootNodeName&&this.options.rootNodeName.length>1&&(t={[this.options.rootNodeName]:t}),this.j2x(t,0).val},o.prototype.j2x=function(t,e){let i="",s="";for(let r in t)if(void 0===t[r]);else if(null===t[r])s+=this.indentate(e)+"<"+r+"/"+this.tagEndChar;else if(t[r]instanceof Date)s+=this.buildTextNode(t[r],r,"",e);else if("object"!=typeof t[r]){let n=this.isAttribute(r);n?i+=" "+n+'="'+this.options.attrValueProcessor(""+t[r])+'"':this.isCDATA(r)?t[this.options.textNodeName]?s+=this.replaceCDATAstr(t[this.options.textNodeName],t[r]):s+=this.replaceCDATAstr("",t[r]):r===this.options.textNodeName?t[this.options.cdataTagName]||(s+=this.options.tagValueProcessor(""+t[r])):s+=this.buildTextNode(t[r],r,"",e)}else if(Array.isArray(t[r])){if(this.isCDATA(r))s+=this.indentate(e),t[this.options.textNodeName]?s+=this.replaceCDATAarr(t[this.options.textNodeName],t[r]):s+=this.replaceCDATAarr("",t[r]);else{let i=t[r].length;for(let n=0;n<i;n++){let i=t[r][n];void 0===i||(s+=null===i?this.indentate(e)+"<"+r+"/"+this.tagEndChar:"object"==typeof i?this.processTextOrObjNode(i,r,e):this.buildTextNode(i,r,"",e))}}}else if(this.options.attrNodeName&&r===this.options.attrNodeName){let e=Object.keys(t[r]),s=e.length;for(let n=0;n<s;n++)i+=" "+e[n]+'="'+this.options.attrValueProcessor(""+t[r][e[n]])+'"'}else s+=this.processTextOrObjNode(t[r],r,e);return{attrStr:i,val:s}},t.exports=o},"./node_modules/fast-xml-parser/src/nimndata.js":(t,e,i)=>{let s=function(t){return String.fromCharCode(t)},r={nilChar:s(176),missingChar:s(201),nilPremitive:s(175),missingPremitive:s(200),emptyChar:s(178),emptyValue:s(177),boundryChar:s(179),objStart:s(198),arrStart:s(204),arrayEnd:s(185)},n=[r.nilChar,r.nilPremitive,r.missingChar,r.missingPremitive,r.boundryChar,r.emptyChar,r.emptyValue,r.arrayEnd,r.objStart,r.arrStart],o=function(t,e,i){var s;if("string"==typeof e)return t&&t[0]&&void 0!==t[0].val?a(t[0].val,e):a(t,e);{let n=void 0===(s=t)?r.missingChar:null===s?r.nilChar:!(s.child&&0===Object.keys(s.child).length&&(!s.attrsMap||0===Object.keys(s.attrsMap).length))||r.emptyChar;if(!0===n){let s="";if(Array.isArray(e)){s+=r.arrStart;let n=e[0],l=t.length;if("string"==typeof n)for(let e=0;e<l;e++){let i=a(t[e].val,n);s=h(s,i)}else for(let e=0;e<l;e++){let r=o(t[e],n,i);s=h(s,r)}s+=r.arrayEnd}else{s+=r.objStart;let n=Object.keys(e);for(let r in Array.isArray(t)&&(t=t[0]),n){let a=n[r];s=h(s,!i.ignoreAttributes&&t.attrsMap&&t.attrsMap[a]?o(t.attrsMap[a],e[a],i):a===i.textNodeName?o(t.val,e[a],i):o(t.child[a],e[a],i))}}return s}return n}},a=function(t){switch(t){case void 0:return r.missingPremitive;case null:return r.nilPremitive;case"":return r.emptyValue;default:return t}},h=function(t,e){return l(e[0])||l(t[t.length-1])||(t+=r.boundryChar),t+e},l=function(t){return -1!==n.indexOf(t)},A=i("./node_modules/fast-xml-parser/src/xmlstr2xmlnode.js"),d=i("./node_modules/fast-xml-parser/src/util.js").buildOptions;e.convert2nimn=function(t,e,i){return o(t,e,i=d(i,A.defaultOptions,A.props))}},"./node_modules/fast-xml-parser/src/node2json.js":(t,e,i)=>{let s=i("./node_modules/fast-xml-parser/src/util.js"),r=function(t,e,i){let n={};if(!e.alwaysCreateTextNode&&(!t.child||s.isEmptyObject(t.child))&&(!t.attrsMap||s.isEmptyObject(t.attrsMap)))return s.isExist(t.val)?t.val:"";if(s.isExist(t.val)&&("string"!=typeof t.val||""!==t.val&&t.val!==e.cdataPositionChar)){let r=s.isTagNameInArrayMode(t.tagname,e.arrayMode,i);n[e.textNodeName]=r?[t.val]:t.val}s.merge(n,t.attrsMap,e.arrayMode);let o=Object.keys(t.child);for(let a=0;a<o.length;a++){let h=o[a];if(t.child[h]&&t.child[h].length>1)for(let i in n[h]=[],t.child[h])t.child[h].hasOwnProperty(i)&&n[h].push(r(t.child[h][i],e,h));else{let o=r(t.child[h][0],e,h),a=!0===e.arrayMode&&"object"==typeof o||s.isTagNameInArrayMode(h,e.arrayMode,i);n[h]=a?[o]:o}}return n};e.convertToJson=r},"./node_modules/fast-xml-parser/src/node2json_str.js":(t,e,i)=>{let s=i("./node_modules/fast-xml-parser/src/util.js"),r=i("./node_modules/fast-xml-parser/src/util.js").buildOptions,n=i("./node_modules/fast-xml-parser/src/xmlstr2xmlnode.js"),o=function(t,e,i){var r;let n="{",a=Object.keys(t.child);for(let i=0;i<a.length;i++){let s=a[i];if(t.child[s]&&t.child[s].length>1){for(let i in n+='"'+s+'" : [ ',t.child[s])n+=o(t.child[s][i],e)+" , ";n=n.substr(0,n.length-1)+" ] "}else n+='"'+s+'" : '+o(t.child[s][0],e)+" ,"}return s.merge(n,t.attrsMap),s.isEmptyObject(n)?s.isExist(t.val)?t.val:"":(s.isExist(t.val)&&("string"!=typeof t.val||""!==t.val&&t.val!==e.cdataPositionChar)&&(n+='"'+e.textNodeName+'" : '+(!0!==(r=t.val)&&!1!==r&&isNaN(r)?'"'+r+'"':r)),","===n[n.length-1]&&(n=n.substr(0,n.length-2)),n+"}")};e.convertToJsonString=function(t,e){return(e=r(e,n.defaultOptions,n.props)).indentBy=e.indentBy||"",o(t,e,0)}},"./node_modules/fast-xml-parser/src/parser.js":(t,e,i)=>{let s=i("./node_modules/fast-xml-parser/src/node2json.js"),r=i("./node_modules/fast-xml-parser/src/xmlstr2xmlnode.js"),n=i("./node_modules/fast-xml-parser/src/xmlstr2xmlnode.js"),o=i("./node_modules/fast-xml-parser/src/util.js").buildOptions,a=i("./node_modules/fast-xml-parser/src/validator.js");e.parse=function(t,e={},i){if(i){!0===i&&(i={});let e=a.validate(t,i);if(!0!==e)throw Error(e.err.msg)}e.parseTrueNumberOnly&&!1!==e.parseNodeValue&&!e.numParseOptions&&(e.numParseOptions={leadingZeros:!1});let h=o(e,n.defaultOptions,n.props),l=r.getTraversalObj(t,h);return s.convertToJson(l,h)},e.convertTonimn=i("./node_modules/fast-xml-parser/src/nimndata.js").convert2nimn,e.getTraversalObj=r.getTraversalObj,e.convertToJson=s.convertToJson,e.convertToJsonString=i("./node_modules/fast-xml-parser/src/node2json_str.js").convertToJsonString,e.validate=a.validate,e.j2xParser=i("./node_modules/fast-xml-parser/src/json2xml.js"),e.parseToNimn=function(t,i,s){return e.convertTonimn(e.getTraversalObj(t,s),i,s)}},"./node_modules/fast-xml-parser/src/util.js":(t,e)=>{let i="[:A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*",s=RegExp("^"+i+"$");e.isExist=function(t){return void 0!==t},e.isEmptyObject=function(t){return 0===Object.keys(t).length},e.merge=function(t,e,i){if(e){let s=Object.keys(e),r=s.length;for(let n=0;n<r;n++)t[s[n]]="strict"===i?[e[s[n]]]:e[s[n]]}},e.getValue=function(t){return e.isExist(t)?t:""},e.buildOptions=function(t,e,i){let s={};if(!t)return e;for(let r=0;r<i.length;r++)void 0!==t[i[r]]?s[i[r]]=t[i[r]]:s[i[r]]=e[i[r]];return s},e.isTagNameInArrayMode=function(t,e,i){return!1!==e&&(e instanceof RegExp?e.test(t):"function"==typeof e?!!e(t,i):"strict"===e)},e.isName=function(t){return null!=s.exec(t)},e.getAllMatches=function(t,e){let i=[],s=e.exec(t);for(;s;){let r=[];r.startIndex=e.lastIndex-s[0].length;let n=s.length;for(let t=0;t<n;t++)r.push(s[t]);i.push(r),s=e.exec(t)}return i},e.nameRegexp=i},"./node_modules/fast-xml-parser/src/validator.js":(t,e,i)=>{let s=i("./node_modules/fast-xml-parser/src/util.js"),r={allowBooleanAttributes:!1},n=["allowBooleanAttributes"];function o(t,e){let i=e;for(;e<t.length;e++)if("?"!=t[e]&&" "!=t[e]);else{let s=t.substr(i,e-i);if(e>5&&"xml"===s)return A("InvalidXml","XML declaration allowed only at the start of the document.",d(t,e));if("?"==t[e]&&">"==t[e+1]){e++;break}}return e}function a(t,e){if(t.length>e+5&&"-"===t[e+1]&&"-"===t[e+2]){for(e+=3;e<t.length;e++)if("-"===t[e]&&"-"===t[e+1]&&">"===t[e+2]){e+=2;break}}else if(t.length>e+8&&"D"===t[e+1]&&"O"===t[e+2]&&"C"===t[e+3]&&"T"===t[e+4]&&"Y"===t[e+5]&&"P"===t[e+6]&&"E"===t[e+7]){let i=1;for(e+=8;e<t.length;e++)if("<"===t[e])i++;else if(">"===t[e]&&0==--i)break}else if(t.length>e+9&&"["===t[e+1]&&"C"===t[e+2]&&"D"===t[e+3]&&"A"===t[e+4]&&"T"===t[e+5]&&"A"===t[e+6]&&"["===t[e+7]){for(e+=8;e<t.length;e++)if("]"===t[e]&&"]"===t[e+1]&&">"===t[e+2]){e+=2;break}}return e}e.validate=function(t,e){var i;e=s.buildOptions(e,r,n);let h=[],c=!1,u=!1;"\uFEFF"===t[0]&&(t=t.substr(1));for(let r=0;r<t.length;r++)if("<"===t[r]&&"?"===t[r+1]){if(r+=2,(r=o(t,r)).err)return r}else{if("<"!==t[r]){if(" "===t[r]||"	"===t[r]||"\n"===t[r]||"\r"===t[r])continue;return A("InvalidChar","char '"+t[r]+"' is not expected.",d(t,r))}{let n=r;if("!"===t[++r]){r=a(t,r);continue}{let g=!1;"/"===t[r]&&(g=!0,r++);let p="";for(;r<t.length&&">"!==t[r]&&" "!==t[r]&&"	"!==t[r]&&"\n"!==t[r]&&"\r"!==t[r];r++)p+=t[r];if("/"===(p=p.trim())[p.length-1]&&(p=p.substring(0,p.length-1),r--),i=p,!s.isName(i))return A("InvalidTag",0===p.trim().length?"Invalid space after '<'.":"Tag '"+p+"' is an invalid name.",d(t,r));let _=function(t,e){let i="",s="",r=!1;for(;e<t.length;e++){if('"'===t[e]||"'"===t[e])""===s?s=t[e]:s!==t[e]||(s="");else if(">"===t[e]&&""===s){r=!0;break}i+=t[e]}return""===s&&{value:i,index:e,tagClosed:r}}(t,r);if(!1===_)return A("InvalidAttr","Attributes for '"+p+"' have open quote.",d(t,r));let f=_.value;if(r=_.index,"/"===f[f.length-1]){let i=r-f.length;f=f.substring(0,f.length-1);let s=l(f,e);if(!0!==s)return A(s.err.code,s.err.msg,d(t,i+s.err.line));c=!0}else if(g){if(!_.tagClosed)return A("InvalidTag","Closing tag '"+p+"' doesn't have proper closing.",d(t,r));if(f.trim().length>0)return A("InvalidTag","Closing tag '"+p+"' can't have attributes or invalid starting.",d(t,n));{let e=h.pop();if(p!==e.tagName){let i=d(t,e.tagStartPos);return A("InvalidTag","Expected closing tag '"+e.tagName+"' (opened in line "+i.line+", col "+i.col+") instead of closing tag '"+p+"'.",d(t,n))}0==h.length&&(u=!0)}}else{let i=l(f,e);if(!0!==i)return A(i.err.code,i.err.msg,d(t,r-f.length+i.err.line));if(!0===u)return A("InvalidXml","Multiple possible root nodes found.",d(t,r));h.push({tagName:p,tagStartPos:n}),c=!0}for(r++;r<t.length;r++)if("<"===t[r]){if("!"===t[r+1]){r=a(t,++r);continue}if("?"!==t[r+1])break;if((r=o(t,++r)).err)return r}else if("&"===t[r]){let e=function(t,e){if(";"===t[++e])return -1;if("#"===t[e])return function(t,e){let i=/\d/;for("x"===t[e]&&(e++,i=/[\da-fA-F]/);e<t.length;e++){if(";"===t[e])return e;if(!t[e].match(i))break}return -1}(t,++e);let i=0;for(;e<t.length;e++,i++)if(!(t[e].match(/\w/)&&i<20)){if(";"===t[e])break;return -1}return e}(t,r);if(-1==e)return A("InvalidChar","char '&' is not expected.",d(t,r));r=e}"<"===t[r]&&r--}}}return c?1==h.length?A("InvalidTag","Unclosed tag '"+h[0].tagName+"'.",d(t,h[0].tagStartPos)):!(h.length>0)||A("InvalidXml","Invalid '"+JSON.stringify(h.map(t=>t.tagName),null,4).replace(/\r?\n/g,"")+"' found.",{line:1,col:1}):A("InvalidXml","Start tag expected.",1)};let h=RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?","g");function l(t,e){let i=s.getAllMatches(t,h),r={};for(let t=0;t<i.length;t++){if(0===i[t][1].length)return A("InvalidAttr","Attribute '"+i[t][2]+"' has no space in starting.",c(i[t]));if(void 0===i[t][3]&&!e.allowBooleanAttributes)return A("InvalidAttr","boolean attribute '"+i[t][2]+"' is not allowed.",c(i[t]));let n=i[t][2];if(!s.isName(n))return A("InvalidAttr","Attribute '"+n+"' is an invalid name.",c(i[t]));if(r.hasOwnProperty(n))return A("InvalidAttr","Attribute '"+n+"' is repeated.",c(i[t]));r[n]=1}return!0}function A(t,e,i){return{err:{code:t,msg:e,line:i.line||i,col:i.col}}}function d(t,e){let i=t.substring(0,e).split(/\r?\n/);return{line:i.length,col:i[i.length-1].length+1}}function c(t){return t.startIndex+t[1].length}},"./node_modules/fast-xml-parser/src/xmlNode.js":t=>{t.exports=function(t,e,i){this.tagname=t,this.parent=e,this.child={},this.attrsMap={},this.val=i,this.addChild=function(t){Array.isArray(this.child[t.tagname])?this.child[t.tagname].push(t):this.child[t.tagname]=[t]}}},"./node_modules/fast-xml-parser/src/xmlstr2xmlnode.js":(t,e,i)=>{let s=i("./node_modules/fast-xml-parser/src/util.js"),r=i("./node_modules/fast-xml-parser/src/util.js").buildOptions,n=i("./node_modules/fast-xml-parser/src/xmlNode.js"),o=i("./node_modules/strnum/strnum.js");"<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g,s.nameRegexp),!Number.parseInt&&window.parseInt&&(Number.parseInt=window.parseInt),!Number.parseFloat&&window.parseFloat&&(Number.parseFloat=window.parseFloat);let a={attributeNamePrefix:"@_",attrNodeName:!1,textNodeName:"#text",ignoreAttributes:!0,ignoreNameSpace:!1,allowBooleanAttributes:!1,parseNodeValue:!0,parseAttributeValue:!1,arrayMode:!1,trimValues:!0,cdataTagName:!1,cdataPositionChar:"\\c",numParseOptions:{hex:!0,leadingZeros:!0},tagValueProcessor:function(t,e){return t},attrValueProcessor:function(t,e){return t},stopNodes:[],alwaysCreateTextNode:!1};e.defaultOptions=a;let h=["attributeNamePrefix","attrNodeName","textNodeName","ignoreAttributes","ignoreNameSpace","allowBooleanAttributes","parseNodeValue","parseAttributeValue","arrayMode","trimValues","cdataTagName","cdataPositionChar","tagValueProcessor","attrValueProcessor","parseTrueNumberOnly","numParseOptions","stopNodes","alwaysCreateTextNode"];function l(t,e,i){return e&&(i.trimValues&&(e=e.trim()),e=A(e=i.tagValueProcessor(e,t),i.parseNodeValue,i.numParseOptions)),e}function A(t,e,i){if(e&&"string"==typeof t){let e=t.trim();return"true"===e||"false"!==e&&o(t,i)}return s.isExist(t)?t:""}e.props=h;let d=RegExp("([^\\s=]+)\\s*(=\\s*(['\"])(.*?)\\3)?","g");function c(t,e){if(!e.ignoreAttributes&&"string"==typeof t){t=t.replace(/\r?\n/g," ");let i=s.getAllMatches(t,d),r=i.length,n={};for(let t=0;t<r;t++){let s=function(t,e){if(e.ignoreNameSpace){let e=t.split(":"),i="/"===t.charAt(0)?"/":"";if("xmlns"===e[0])return"";2===e.length&&(t=i+e[1])}return t}(i[t][1],e);s.length&&(void 0!==i[t][4]?(e.trimValues&&(i[t][4]=i[t][4].trim()),i[t][4]=e.attrValueProcessor(i[t][4],s),n[e.attributeNamePrefix+s]=A(i[t][4],e.parseAttributeValue,e.numParseOptions)):e.allowBooleanAttributes&&(n[e.attributeNamePrefix+s]=!0))}if(Object.keys(n).length){if(e.attrNodeName){let t={};return t[e.attrNodeName]=n,t}return n}}}function u(t,e,i,s){let r=t.indexOf(e,i);if(-1===r)throw Error(s);return r+e.length-1}e.getTraversalObj=function(t,e){t=t.replace(/\r\n?/g,"\n"),e=r(e,a,h);let i=new n("!xml"),o=i,A="";for(let i=0;i<t.length;i++)if("<"===t[i]){if("/"===t[i+1]){let r=u(t,">",i,"Closing Tag is not closed."),n=t.substring(i+2,r).trim();if(e.ignoreNameSpace){let t=n.indexOf(":");-1!==t&&(n=n.substr(t+1))}o&&(o.val?o.val=s.getValue(o.val)+""+l(n,A,e):o.val=l(n,A,e)),e.stopNodes.length&&e.stopNodes.includes(o.tagname)&&(o.child=[],null==o.attrsMap&&(o.attrsMap={}),o.val=t.substr(o.startIndex+1,i-o.startIndex-1)),o=o.parent,A="",i=r}else if("?"===t[i+1])i=u(t,"?>",i,"Pi Tag is not closed.");else if("!--"===t.substr(i+1,3))i=u(t,"-->",i,"Comment is not closed.");else if("!D"===t.substr(i+1,2)){let e=u(t,">",i,"DOCTYPE is not closed.");i=t.substring(i,e).indexOf("[")>=0?t.indexOf("]>",i)+1:e}else if("!["===t.substr(i+1,2)){let r=u(t,"]]>",i,"CDATA is not closed.")-2,a=t.substring(i+9,r);if(A&&(o.val=s.getValue(o.val)+""+l(o.tagname,A,e),A=""),e.cdataTagName){let t=new n(e.cdataTagName,o,a);o.addChild(t),o.val=s.getValue(o.val)+e.cdataPositionChar,a&&(t.val=a)}else o.val=(o.val||"")+(a||"");i=r+2}else{let r=function(t,e){let i,s="";for(let r=e;r<t.length;r++){let e=t[r];if(i)e===i&&(i="");else if('"'===e||"'"===e)i=e;else{if(">"===e)return{data:s,index:r};"	"===e&&(e=" ")}s+=e}}(t,i+1),a=r.data,h=r.index,d=a.indexOf(" "),u=a,g=!0;if(-1!==d&&(u=a.substr(0,d).replace(/\s\s*$/,""),a=a.substr(d+1)),e.ignoreNameSpace){let t=u.indexOf(":");-1!==t&&(g=(u=u.substr(t+1))!==r.data.substr(t+1))}if(o&&A&&"!xml"!==o.tagname&&(o.val=s.getValue(o.val)+""+l(o.tagname,A,e)),a.length>0&&a.lastIndexOf("/")===a.length-1){a="/"===u[u.length-1]?u=u.substr(0,u.length-1):a.substr(0,a.length-1);let t=new n(u,o,"");u!==a&&(t.attrsMap=c(a,e)),o.addChild(t)}else{let t=new n(u,o);e.stopNodes.length&&e.stopNodes.includes(t.tagname)&&(t.startIndex=h),u!==a&&g&&(t.attrsMap=c(a,e)),o.addChild(t),o=t}A="",i=h}}else A+=t[i];return i}},"./node_modules/pako/index.js":(t,e,i)=>{var s={};(0,i("./node_modules/pako/lib/utils/common.js").assign)(s,i("./node_modules/pako/lib/deflate.js"),i("./node_modules/pako/lib/inflate.js"),i("./node_modules/pako/lib/zlib/constants.js")),t.exports=s},"./node_modules/pako/lib/deflate.js":(t,e,i)=>{var s=i("./node_modules/pako/lib/zlib/deflate.js"),r=i("./node_modules/pako/lib/utils/common.js"),n=i("./node_modules/pako/lib/utils/strings.js"),o=i("./node_modules/pako/lib/zlib/messages.js"),a=i("./node_modules/pako/lib/zlib/zstream.js"),h=Object.prototype.toString;function l(t){if(!(this instanceof l))return new l(t);this.options=r.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},t||{});var e,i=this.options;i.raw&&i.windowBits>0?i.windowBits=-i.windowBits:i.gzip&&i.windowBits>0&&i.windowBits<16&&(i.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new a,this.strm.avail_out=0;var A=s.deflateInit2(this.strm,i.level,i.method,i.windowBits,i.memLevel,i.strategy);if(0!==A)throw Error(o[A]);if(i.header&&s.deflateSetHeader(this.strm,i.header),i.dictionary){if(e="string"==typeof i.dictionary?n.string2buf(i.dictionary):"[object ArrayBuffer]"===h.call(i.dictionary)?new Uint8Array(i.dictionary):i.dictionary,0!==(A=s.deflateSetDictionary(this.strm,e)))throw Error(o[A]);this._dict_set=!0}}function A(t,e){var i=new l(e);if(i.push(t,!0),i.err)throw i.msg||o[i.err];return i.result}l.prototype.push=function(t,e){var i,o,a=this.strm,l=this.options.chunkSize;if(this.ended)return!1;o=e===~~e?e:!0===e?4:0,"string"==typeof t?a.input=n.string2buf(t):"[object ArrayBuffer]"===h.call(t)?a.input=new Uint8Array(t):a.input=t,a.next_in=0,a.avail_in=a.input.length;do{if(0===a.avail_out&&(a.output=new r.Buf8(l),a.next_out=0,a.avail_out=l),1!==(i=s.deflate(a,o))&&0!==i)return this.onEnd(i),this.ended=!0,!1;0!==a.avail_out&&(0!==a.avail_in||4!==o&&2!==o)||("string"===this.options.to?this.onData(n.buf2binstring(r.shrinkBuf(a.output,a.next_out))):this.onData(r.shrinkBuf(a.output,a.next_out)))}while((a.avail_in>0||0===a.avail_out)&&1!==i)return 4===o?(i=s.deflateEnd(this.strm),this.onEnd(i),this.ended=!0,0===i):2!==o||(this.onEnd(0),a.avail_out=0,!0)},l.prototype.onData=function(t){this.chunks.push(t)},l.prototype.onEnd=function(t){0===t&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=r.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},e.Deflate=l,e.deflate=A,e.deflateRaw=function(t,e){return(e=e||{}).raw=!0,A(t,e)},e.gzip=function(t,e){return(e=e||{}).gzip=!0,A(t,e)}},"./node_modules/pako/lib/inflate.js":(t,e,i)=>{var s=i("./node_modules/pako/lib/zlib/inflate.js"),r=i("./node_modules/pako/lib/utils/common.js"),n=i("./node_modules/pako/lib/utils/strings.js"),o=i("./node_modules/pako/lib/zlib/constants.js"),a=i("./node_modules/pako/lib/zlib/messages.js"),h=i("./node_modules/pako/lib/zlib/zstream.js"),l=i("./node_modules/pako/lib/zlib/gzheader.js"),A=Object.prototype.toString;function d(t){if(!(this instanceof d))return new d(t);this.options=r.assign({chunkSize:16384,windowBits:0,to:""},t||{});var e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(e.windowBits>=0&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&0==(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new h,this.strm.avail_out=0;var i=s.inflateInit2(this.strm,e.windowBits);if(i!==o.Z_OK||(this.header=new l,s.inflateGetHeader(this.strm,this.header),e.dictionary&&("string"==typeof e.dictionary?e.dictionary=n.string2buf(e.dictionary):"[object ArrayBuffer]"===A.call(e.dictionary)&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(i=s.inflateSetDictionary(this.strm,e.dictionary))!==o.Z_OK)))throw Error(a[i])}function c(t,e){var i=new d(e);if(i.push(t,!0),i.err)throw i.msg||a[i.err];return i.result}d.prototype.push=function(t,e){var i,a,h,l,d,c=this.strm,u=this.options.chunkSize,g=this.options.dictionary,p=!1;if(this.ended)return!1;a=e===~~e?e:!0===e?o.Z_FINISH:o.Z_NO_FLUSH,"string"==typeof t?c.input=n.binstring2buf(t):"[object ArrayBuffer]"===A.call(t)?c.input=new Uint8Array(t):c.input=t,c.next_in=0,c.avail_in=c.input.length;do{if(0===c.avail_out&&(c.output=new r.Buf8(u),c.next_out=0,c.avail_out=u),(i=s.inflate(c,o.Z_NO_FLUSH))===o.Z_NEED_DICT&&g&&(i=s.inflateSetDictionary(this.strm,g)),i===o.Z_BUF_ERROR&&!0===p&&(i=o.Z_OK,p=!1),i!==o.Z_STREAM_END&&i!==o.Z_OK)return this.onEnd(i),this.ended=!0,!1;c.next_out&&(0!==c.avail_out&&i!==o.Z_STREAM_END&&(0!==c.avail_in||a!==o.Z_FINISH&&a!==o.Z_SYNC_FLUSH)||("string"===this.options.to?(h=n.utf8border(c.output,c.next_out),l=c.next_out-h,d=n.buf2string(c.output,h),c.next_out=l,c.avail_out=u-l,l&&r.arraySet(c.output,c.output,h,l,0),this.onData(d)):this.onData(r.shrinkBuf(c.output,c.next_out)))),0===c.avail_in&&0===c.avail_out&&(p=!0)}while((c.avail_in>0||0===c.avail_out)&&i!==o.Z_STREAM_END)return i===o.Z_STREAM_END&&(a=o.Z_FINISH),a===o.Z_FINISH?(i=s.inflateEnd(this.strm),this.onEnd(i),this.ended=!0,i===o.Z_OK):a!==o.Z_SYNC_FLUSH||(this.onEnd(o.Z_OK),c.avail_out=0,!0)},d.prototype.onData=function(t){this.chunks.push(t)},d.prototype.onEnd=function(t){t===o.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=r.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},e.Inflate=d,e.inflate=c,e.inflateRaw=function(t,e){return(e=e||{}).raw=!0,c(t,e)},e.ungzip=c},"./node_modules/pako/lib/utils/common.js":(t,e)=>{var i="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;e.assign=function(t){for(var e=Array.prototype.slice.call(arguments,1);e.length;){var i=e.shift();if(i){if("object"!=typeof i)throw TypeError(i+"must be non-object");for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}}return t},e.shrinkBuf=function(t,e){return t.length===e?t:t.subarray?t.subarray(0,e):(t.length=e,t)};var s={arraySet:function(t,e,i,s,r){if(e.subarray&&t.subarray)t.set(e.subarray(i,i+s),r);else for(var n=0;n<s;n++)t[r+n]=e[i+n]},flattenChunks:function(t){var e,i,s,r,n,o;for(s=0,e=0,i=t.length;e<i;e++)s+=t[e].length;for(o=new Uint8Array(s),r=0,e=0,i=t.length;e<i;e++)n=t[e],o.set(n,r),r+=n.length;return o}},r={arraySet:function(t,e,i,s,r){for(var n=0;n<s;n++)t[r+n]=e[i+n]},flattenChunks:function(t){return[].concat.apply([],t)}};e.setTyped=function(t){t?(e.Buf8=Uint8Array,e.Buf16=Uint16Array,e.Buf32=Int32Array,e.assign(e,s)):(e.Buf8=Array,e.Buf16=Array,e.Buf32=Array,e.assign(e,r))},e.setTyped(i)},"./node_modules/pako/lib/utils/strings.js":(t,e,i)=>{var s=i("./node_modules/pako/lib/utils/common.js"),r=!0,n=!0;try{String.fromCharCode.apply(null,[0])}catch(t){r=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){n=!1}for(var o=new s.Buf8(256),a=0;a<256;a++)o[a]=a>=252?6:a>=248?5:a>=240?4:a>=224?3:a>=192?2:1;function h(t,e){if(e<65534&&(t.subarray&&n||!t.subarray&&r))return String.fromCharCode.apply(null,s.shrinkBuf(t,e));for(var i="",o=0;o<e;o++)i+=String.fromCharCode(t[o]);return i}o[254]=o[254]=1,e.string2buf=function(t){var e,i,r,n,o,a=t.length,h=0;for(n=0;n<a;n++)55296==(64512&(i=t.charCodeAt(n)))&&n+1<a&&56320==(64512&(r=t.charCodeAt(n+1)))&&(i=65536+(i-55296<<10)+(r-56320),n++),h+=i<128?1:i<2048?2:i<65536?3:4;for(e=new s.Buf8(h),o=0,n=0;o<h;n++)55296==(64512&(i=t.charCodeAt(n)))&&n+1<a&&56320==(64512&(r=t.charCodeAt(n+1)))&&(i=65536+(i-55296<<10)+(r-56320),n++),i<128?e[o++]=i:(i<2048?e[o++]=192|i>>>6:(i<65536?e[o++]=224|i>>>12:(e[o++]=240|i>>>18,e[o++]=128|i>>>12&63),e[o++]=128|i>>>6&63),e[o++]=128|63&i);return e},e.buf2binstring=function(t){return h(t,t.length)},e.binstring2buf=function(t){for(var e=new s.Buf8(t.length),i=0,r=e.length;i<r;i++)e[i]=t.charCodeAt(i);return e},e.buf2string=function(t,e){var i,s,r,n,a=e||t.length,l=Array(2*a);for(s=0,i=0;i<a;)if((r=t[i++])<128)l[s++]=r;else if((n=o[r])>4)l[s++]=65533,i+=n-1;else{for(r&=2===n?31:3===n?15:7;n>1&&i<a;)r=r<<6|63&t[i++],n--;n>1?l[s++]=65533:r<65536?l[s++]=r:(r-=65536,l[s++]=55296|r>>10&1023,l[s++]=56320|1023&r)}return h(l,s)},e.utf8border=function(t,e){var i;for((e=e||t.length)>t.length&&(e=t.length),i=e-1;i>=0&&128==(192&t[i]);)i--;return i<0||0===i?e:i+o[t[i]]>e?i:e}},"./node_modules/pako/lib/zlib/adler32.js":t=>{t.exports=function(t,e,i,s){for(var r=65535&t|0,n=t>>>16&65535|0,o=0;0!==i;){i-=o=i>2e3?2e3:i;do n=n+(r=r+e[s++]|0)|0;while(--o)r%=65521,n%=65521}return r|n<<16|0}},"./node_modules/pako/lib/zlib/constants.js":t=>{t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},"./node_modules/pako/lib/zlib/crc32.js":t=>{var e=function(){for(var t,e=[],i=0;i<256;i++){t=i;for(var s=0;s<8;s++)t=1&t?3988292384^t>>>1:t>>>1;e[i]=t}return e}();t.exports=function(t,i,s,r){var n=r+s;t^=-1;for(var o=r;o<n;o++)t=t>>>8^e[255&(t^i[o])];return -1^t}},"./node_modules/pako/lib/zlib/deflate.js":(t,e,i)=>{var s,r=i("./node_modules/pako/lib/utils/common.js"),n=i("./node_modules/pako/lib/zlib/trees.js"),o=i("./node_modules/pako/lib/zlib/adler32.js"),a=i("./node_modules/pako/lib/zlib/crc32.js"),h=i("./node_modules/pako/lib/zlib/messages.js");function l(t,e){return t.msg=h[e],e}function A(t){return(t<<1)-(t>4?9:0)}function d(t){for(var e=t.length;--e>=0;)t[e]=0}function c(t){var e=t.state,i=e.pending;i>t.avail_out&&(i=t.avail_out),0!==i&&(r.arraySet(t.output,e.pending_buf,e.pending_out,i,t.next_out),t.next_out+=i,e.pending_out+=i,t.total_out+=i,t.avail_out-=i,e.pending-=i,0===e.pending&&(e.pending_out=0))}function u(t,e){n._tr_flush_block(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,c(t.strm)}function g(t,e){t.pending_buf[t.pending++]=e}function p(t,e){t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e}function _(t,e){var i,s,r=t.max_chain_length,n=t.strstart,o=t.prev_length,a=t.nice_match,h=t.strstart>t.w_size-262?t.strstart-(t.w_size-262):0,l=t.window,A=t.w_mask,d=t.prev,c=t.strstart+258,u=l[n+o-1],g=l[n+o];t.prev_length>=t.good_match&&(r>>=2),a>t.lookahead&&(a=t.lookahead);do if(l[(i=e)+o]===g&&l[i+o-1]===u&&l[i]===l[n]&&l[++i]===l[n+1]){n+=2,i++;do;while(l[++n]===l[++i]&&l[++n]===l[++i]&&l[++n]===l[++i]&&l[++n]===l[++i]&&l[++n]===l[++i]&&l[++n]===l[++i]&&l[++n]===l[++i]&&l[++n]===l[++i]&&n<c)if(s=258-(c-n),n=c-258,s>o){if(t.match_start=e,o=s,s>=a)break;u=l[n+o-1],g=l[n+o]}}while((e=d[e&A])>h&&0!=--r)return o<=t.lookahead?o:t.lookahead}function f(t){var e,i,s,n,h,l,A,d,c,u,g=t.w_size;do{if(n=t.window_size-t.lookahead-t.strstart,t.strstart>=g+(g-262)){r.arraySet(t.window,t.window,g,g,0),t.match_start-=g,t.strstart-=g,t.block_start-=g,e=i=t.hash_size;do s=t.head[--e],t.head[e]=s>=g?s-g:0;while(--i)e=i=g;do s=t.prev[--e],t.prev[e]=s>=g?s-g:0;while(--i)n+=g}if(0===t.strm.avail_in)break;if(l=t.strm,A=t.window,d=t.strstart+t.lookahead,c=n,u=void 0,(u=l.avail_in)>c&&(u=c),i=0===u?0:(l.avail_in-=u,r.arraySet(A,l.input,l.next_in,u,d),1===l.state.wrap?l.adler=o(l.adler,A,u,d):2===l.state.wrap&&(l.adler=a(l.adler,A,u,d)),l.next_in+=u,l.total_in+=u,u),t.lookahead+=i,t.lookahead+t.insert>=3)for(h=t.strstart-t.insert,t.ins_h=t.window[h],t.ins_h=(t.ins_h<<t.hash_shift^t.window[h+1])&t.hash_mask;t.insert&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[h+3-1])&t.hash_mask,t.prev[h&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=h,h++,t.insert--,!(t.lookahead+t.insert<3)););}while(t.lookahead<262&&0!==t.strm.avail_in)}function m(t,e){for(var i,s;;){if(t.lookahead<262){if(f(t),t.lookahead<262&&0===e)return 1;if(0===t.lookahead)break}if(i=0,t.lookahead>=3&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+3-1])&t.hash_mask,i=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==i&&t.strstart-i<=t.w_size-262&&(t.match_length=_(t,i)),t.match_length>=3){if(s=n._tr_tally(t,t.strstart-t.match_start,t.match_length-3),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=3){t.match_length--;do t.strstart++,t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+3-1])&t.hash_mask,i=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart;while(0!=--t.match_length)t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+1])&t.hash_mask}else s=n._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(s&&(u(t,!1),0===t.strm.avail_out))return 1}return t.insert=t.strstart<2?t.strstart:2,4===e?(u(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(u(t,!1),0===t.strm.avail_out)?1:2}function y(t,e){for(var i,s,r;;){if(t.lookahead<262){if(f(t),t.lookahead<262&&0===e)return 1;if(0===t.lookahead)break}if(i=0,t.lookahead>=3&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+3-1])&t.hash_mask,i=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=2,0!==i&&t.prev_length<t.max_lazy_match&&t.strstart-i<=t.w_size-262&&(t.match_length=_(t,i),t.match_length<=5&&(1===t.strategy||3===t.match_length&&t.strstart-t.match_start>4096)&&(t.match_length=2)),t.prev_length>=3&&t.match_length<=t.prev_length){r=t.strstart+t.lookahead-3,s=n._tr_tally(t,t.strstart-1-t.prev_match,t.prev_length-3),t.lookahead-=t.prev_length-1,t.prev_length-=2;do++t.strstart<=r&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+3-1])&t.hash_mask,i=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart);while(0!=--t.prev_length)if(t.match_available=0,t.match_length=2,t.strstart++,s&&(u(t,!1),0===t.strm.avail_out))return 1}else if(t.match_available){if((s=n._tr_tally(t,0,t.window[t.strstart-1]))&&u(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return 1}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(s=n._tr_tally(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<2?t.strstart:2,4===e?(u(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(u(t,!1),0===t.strm.avail_out)?1:2}function C(t,e,i,s,r){this.good_length=t,this.max_lazy=e,this.nice_length=i,this.max_chain=s,this.func=r}function x(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=8,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new r.Buf16(1146),this.dyn_dtree=new r.Buf16(122),this.bl_tree=new r.Buf16(78),d(this.dyn_ltree),d(this.dyn_dtree),d(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new r.Buf16(16),this.heap=new r.Buf16(573),d(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new r.Buf16(573),d(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function w(t){var e;return t&&t.state?(t.total_in=t.total_out=0,t.data_type=2,(e=t.state).pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?42:113,t.adler=2===e.wrap?0:1,e.last_flush=0,n._tr_init(e),0):l(t,-2)}function I(t){var e,i=w(t);return 0===i&&((e=t.state).window_size=2*e.w_size,d(e.head),e.max_lazy_match=s[e.level].max_lazy,e.good_match=s[e.level].good_length,e.nice_match=s[e.level].nice_length,e.max_chain_length=s[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=2,e.match_available=0,e.ins_h=0),i}function v(t,e,i,s,n,o){if(!t)return -2;var a=1;if(-1===e&&(e=6),s<0?(a=0,s=-s):s>15&&(a=2,s-=16),n<1||n>9||8!==i||s<8||s>15||e<0||e>9||o<0||o>4)return l(t,-2);8===s&&(s=9);var h=new x;return t.state=h,h.strm=t,h.wrap=a,h.gzhead=null,h.w_bits=s,h.w_size=1<<h.w_bits,h.w_mask=h.w_size-1,h.hash_bits=n+7,h.hash_size=1<<h.hash_bits,h.hash_mask=h.hash_size-1,h.hash_shift=~~((h.hash_bits+3-1)/3),h.window=new r.Buf8(2*h.w_size),h.head=new r.Buf16(h.hash_size),h.prev=new r.Buf16(h.w_size),h.lit_bufsize=1<<n+6,h.pending_buf_size=4*h.lit_bufsize,h.pending_buf=new r.Buf8(h.pending_buf_size),h.d_buf=1*h.lit_bufsize,h.l_buf=3*h.lit_bufsize,h.level=e,h.strategy=o,h.method=i,I(t)}s=[new C(0,0,0,0,function(t,e){var i=65535;for(65535>t.pending_buf_size-5&&(i=t.pending_buf_size-5);;){if(t.lookahead<=1){if(f(t),0===t.lookahead&&0===e)return 1;if(0===t.lookahead)break}t.strstart+=t.lookahead,t.lookahead=0;var s=t.block_start+i;if((0===t.strstart||t.strstart>=s)&&(t.lookahead=t.strstart-s,t.strstart=s,u(t,!1),0===t.strm.avail_out)||t.strstart-t.block_start>=t.w_size-262&&(u(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,4===e?(u(t,!0),0===t.strm.avail_out?3:4):(t.strstart>t.block_start&&(u(t,!1),t.strm.avail_out),1)}),new C(4,4,8,4,m),new C(4,5,16,8,m),new C(4,6,32,32,m),new C(4,4,16,16,y),new C(8,16,32,32,y),new C(8,16,128,128,y),new C(8,32,128,256,y),new C(32,128,258,1024,y),new C(32,258,258,4096,y)],e.deflateInit=function(t,e){return v(t,e,8,15,8,0)},e.deflateInit2=v,e.deflateReset=I,e.deflateResetKeep=w,e.deflateSetHeader=function(t,e){return t&&t.state?2!==t.state.wrap?-2:(t.state.gzhead=e,0):-2},e.deflate=function(t,e){var i,r,o,h;if(!t||!t.state||e>5||e<0)return t?l(t,-2):-2;if(r=t.state,!t.output||!t.input&&0!==t.avail_in||666===r.status&&4!==e)return l(t,0===t.avail_out?-5:-2);if(r.strm=t,i=r.last_flush,r.last_flush=e,42===r.status){if(2===r.wrap)t.adler=0,g(r,31),g(r,139),g(r,8),r.gzhead?(g(r,(r.gzhead.text?1:0)+(r.gzhead.hcrc?2:0)+(r.gzhead.extra?4:0)+(r.gzhead.name?8:0)+(r.gzhead.comment?16:0)),g(r,255&r.gzhead.time),g(r,r.gzhead.time>>8&255),g(r,r.gzhead.time>>16&255),g(r,r.gzhead.time>>24&255),g(r,9===r.level?2:r.strategy>=2||r.level<2?4:0),g(r,255&r.gzhead.os),r.gzhead.extra&&r.gzhead.extra.length&&(g(r,255&r.gzhead.extra.length),g(r,r.gzhead.extra.length>>8&255)),r.gzhead.hcrc&&(t.adler=a(t.adler,r.pending_buf,r.pending,0)),r.gzindex=0,r.status=69):(g(r,0),g(r,0),g(r,0),g(r,0),g(r,0),g(r,9===r.level?2:r.strategy>=2||r.level<2?4:0),g(r,3),r.status=113);else{var _=8+(r.w_bits-8<<4)<<8;_|=(r.strategy>=2||r.level<2?0:r.level<6?1:6===r.level?2:3)<<6,0!==r.strstart&&(_|=32),_+=31-_%31,r.status=113,p(r,_),0!==r.strstart&&(p(r,t.adler>>>16),p(r,65535&t.adler)),t.adler=1}}if(69===r.status){if(r.gzhead.extra){for(o=r.pending;r.gzindex<(65535&r.gzhead.extra.length)&&(r.pending!==r.pending_buf_size||(r.gzhead.hcrc&&r.pending>o&&(t.adler=a(t.adler,r.pending_buf,r.pending-o,o)),c(t),o=r.pending,r.pending!==r.pending_buf_size));)g(r,255&r.gzhead.extra[r.gzindex]),r.gzindex++;r.gzhead.hcrc&&r.pending>o&&(t.adler=a(t.adler,r.pending_buf,r.pending-o,o)),r.gzindex===r.gzhead.extra.length&&(r.gzindex=0,r.status=73)}else r.status=73}if(73===r.status){if(r.gzhead.name){o=r.pending;do{if(r.pending===r.pending_buf_size&&(r.gzhead.hcrc&&r.pending>o&&(t.adler=a(t.adler,r.pending_buf,r.pending-o,o)),c(t),o=r.pending,r.pending===r.pending_buf_size)){h=1;break}h=r.gzindex<r.gzhead.name.length?255&r.gzhead.name.charCodeAt(r.gzindex++):0,g(r,h)}while(0!==h)r.gzhead.hcrc&&r.pending>o&&(t.adler=a(t.adler,r.pending_buf,r.pending-o,o)),0===h&&(r.gzindex=0,r.status=91)}else r.status=91}if(91===r.status){if(r.gzhead.comment){o=r.pending;do{if(r.pending===r.pending_buf_size&&(r.gzhead.hcrc&&r.pending>o&&(t.adler=a(t.adler,r.pending_buf,r.pending-o,o)),c(t),o=r.pending,r.pending===r.pending_buf_size)){h=1;break}h=r.gzindex<r.gzhead.comment.length?255&r.gzhead.comment.charCodeAt(r.gzindex++):0,g(r,h)}while(0!==h)r.gzhead.hcrc&&r.pending>o&&(t.adler=a(t.adler,r.pending_buf,r.pending-o,o)),0===h&&(r.status=103)}else r.status=103}if(103===r.status&&(r.gzhead.hcrc?(r.pending+2>r.pending_buf_size&&c(t),r.pending+2<=r.pending_buf_size&&(g(r,255&t.adler),g(r,t.adler>>8&255),t.adler=0,r.status=113)):r.status=113),0!==r.pending){if(c(t),0===t.avail_out)return r.last_flush=-1,0}else if(0===t.avail_in&&A(e)<=A(i)&&4!==e)return l(t,-5);if(666===r.status&&0!==t.avail_in)return l(t,-5);if(0!==t.avail_in||0!==r.lookahead||0!==e&&666!==r.status){var m=2===r.strategy?function(t,e){for(var i;;){if(0===t.lookahead&&(f(t),0===t.lookahead)){if(0===e)return 1;break}if(t.match_length=0,i=n._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,i&&(u(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,4===e?(u(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(u(t,!1),0===t.strm.avail_out)?1:2}(r,e):3===r.strategy?function(t,e){for(var i,s,r,o,a=t.window;;){if(t.lookahead<=258){if(f(t),t.lookahead<=258&&0===e)return 1;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=3&&t.strstart>0&&(s=a[r=t.strstart-1])===a[++r]&&s===a[++r]&&s===a[++r]){o=t.strstart+258;do;while(s===a[++r]&&s===a[++r]&&s===a[++r]&&s===a[++r]&&s===a[++r]&&s===a[++r]&&s===a[++r]&&s===a[++r]&&r<o)t.match_length=258-(o-r),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=3?(i=n._tr_tally(t,1,t.match_length-3),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(i=n._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),i&&(u(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,4===e?(u(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(u(t,!1),0===t.strm.avail_out)?1:2}(r,e):s[r.level].func(r,e);if(3!==m&&4!==m||(r.status=666),1===m||3===m)return 0===t.avail_out&&(r.last_flush=-1),0;if(2===m&&(1===e?n._tr_align(r):5!==e&&(n._tr_stored_block(r,0,0,!1),3===e&&(d(r.head),0===r.lookahead&&(r.strstart=0,r.block_start=0,r.insert=0))),c(t),0===t.avail_out))return r.last_flush=-1,0}return 4!==e?0:r.wrap<=0?1:(2===r.wrap?(g(r,255&t.adler),g(r,t.adler>>8&255),g(r,t.adler>>16&255),g(r,t.adler>>24&255),g(r,255&t.total_in),g(r,t.total_in>>8&255),g(r,t.total_in>>16&255),g(r,t.total_in>>24&255)):(p(r,t.adler>>>16),p(r,65535&t.adler)),c(t),r.wrap>0&&(r.wrap=-r.wrap),0!==r.pending?0:1)},e.deflateEnd=function(t){var e;return t&&t.state?42!==(e=t.state.status)&&69!==e&&73!==e&&91!==e&&103!==e&&113!==e&&666!==e?l(t,-2):(t.state=null,113===e?l(t,-3):0):-2},e.deflateSetDictionary=function(t,e){var i,s,n,a,h,l,A,c,u=e.length;if(!t||!t.state||2===(a=(i=t.state).wrap)||1===a&&42!==i.status||i.lookahead)return -2;for(1===a&&(t.adler=o(t.adler,e,u,0)),i.wrap=0,u>=i.w_size&&(0===a&&(d(i.head),i.strstart=0,i.block_start=0,i.insert=0),c=new r.Buf8(i.w_size),r.arraySet(c,e,u-i.w_size,i.w_size,0),e=c,u=i.w_size),h=t.avail_in,l=t.next_in,A=t.input,t.avail_in=u,t.next_in=0,t.input=e,f(i);i.lookahead>=3;){s=i.strstart,n=i.lookahead-2;do i.ins_h=(i.ins_h<<i.hash_shift^i.window[s+3-1])&i.hash_mask,i.prev[s&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=s,s++;while(--n)i.strstart=s,i.lookahead=2,f(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=2,i.match_available=0,t.next_in=l,t.input=A,t.avail_in=h,i.wrap=a,0},e.deflateInfo="pako deflate (from Nodeca project)"},"./node_modules/pako/lib/zlib/gzheader.js":t=>{t.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},"./node_modules/pako/lib/zlib/inffast.js":t=>{t.exports=function(t,e){var i,s,r,n,o,a,h,l,A,d,c,u,g,p,_,f,m,y,C,x,w,I,v,E,B;i=t.state,s=t.next_in,E=t.input,r=s+(t.avail_in-5),n=t.next_out,B=t.output,o=n-(e-t.avail_out),a=n+(t.avail_out-257),h=i.dmax,l=i.wsize,A=i.whave,d=i.wnext,c=i.window,u=i.hold,g=i.bits,p=i.lencode,_=i.distcode,f=(1<<i.lenbits)-1,m=(1<<i.distbits)-1;t:do for(g<15&&(u+=E[s++]<<g,g+=8,u+=E[s++]<<g,g+=8),y=p[u&f];;){if(u>>>=C=y>>>24,g-=C,0==(C=y>>>16&255))B[n++]=65535&y;else{if(!(16&C)){if(0==(64&C)){y=p[(65535&y)+(u&(1<<C)-1)];continue}if(32&C){i.mode=12;break t}t.msg="invalid literal/length code",i.mode=30;break t}for(x=65535&y,(C&=15)&&(g<C&&(u+=E[s++]<<g,g+=8),x+=u&(1<<C)-1,u>>>=C,g-=C),g<15&&(u+=E[s++]<<g,g+=8,u+=E[s++]<<g,g+=8),y=_[u&m];;){if(u>>>=C=y>>>24,g-=C,!(16&(C=y>>>16&255))){if(0==(64&C)){y=_[(65535&y)+(u&(1<<C)-1)];continue}t.msg="invalid distance code",i.mode=30;break t}if(w=65535&y,g<(C&=15)&&(u+=E[s++]<<g,(g+=8)<C&&(u+=E[s++]<<g,g+=8)),(w+=u&(1<<C)-1)>h){t.msg="invalid distance too far back",i.mode=30;break t}if(u>>>=C,g-=C,w>(C=n-o)){if((C=w-C)>A&&i.sane){t.msg="invalid distance too far back",i.mode=30;break t}if(I=0,v=c,0===d){if(I+=l-C,C<x){x-=C;do B[n++]=c[I++];while(--C)I=n-w,v=B}}else if(d<C){if(I+=l+d-C,(C-=d)<x){x-=C;do B[n++]=c[I++];while(--C)if(I=0,d<x){x-=C=d;do B[n++]=c[I++];while(--C)I=n-w,v=B}}}else if(I+=d-C,C<x){x-=C;do B[n++]=c[I++];while(--C)I=n-w,v=B}for(;x>2;)B[n++]=v[I++],B[n++]=v[I++],B[n++]=v[I++],x-=3;x&&(B[n++]=v[I++],x>1&&(B[n++]=v[I++]))}else{I=n-w;do B[n++]=B[I++],B[n++]=B[I++],B[n++]=B[I++],x-=3;while(x>2)x&&(B[n++]=B[I++],x>1&&(B[n++]=B[I++]))}break}}break}while(s<r&&n<a)s-=x=g>>3,u&=(1<<(g-=x<<3))-1,t.next_in=s,t.next_out=n,t.avail_in=s<r?r-s+5:5-(s-r),t.avail_out=n<a?a-n+257:257-(n-a),i.hold=u,i.bits=g}},"./node_modules/pako/lib/zlib/inflate.js":(t,e,i)=>{var s=i("./node_modules/pako/lib/utils/common.js"),r=i("./node_modules/pako/lib/zlib/adler32.js"),n=i("./node_modules/pako/lib/zlib/crc32.js"),o=i("./node_modules/pako/lib/zlib/inffast.js"),a=i("./node_modules/pako/lib/zlib/inftrees.js");function h(t){return(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24)}function l(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function A(t){var e;return t&&t.state?(e=t.state,t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=1,e.last=0,e.havedict=0,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new s.Buf32(852),e.distcode=e.distdyn=new s.Buf32(592),e.sane=1,e.back=-1,0):-2}function d(t){var e;return t&&t.state?((e=t.state).wsize=0,e.whave=0,e.wnext=0,A(t)):-2}function c(t,e){var i,s;return t&&t.state?(s=t.state,e<0?(i=0,e=-e):(i=1+(e>>4),e<48&&(e&=15)),e&&(e<8||e>15)?-2:(null!==s.window&&s.wbits!==e&&(s.window=null),s.wrap=i,s.wbits=e,d(t))):-2}function u(t,e){var i,s;return t?(s=new l,t.state=s,s.window=null,0!==(i=c(t,e))&&(t.state=null),i):-2}var g,p,_=!0;function f(t,e,i,r){var n,o=t.state;return null===o.window&&(o.wsize=1<<o.wbits,o.wnext=0,o.whave=0,o.window=new s.Buf8(o.wsize)),r>=o.wsize?(s.arraySet(o.window,e,i-o.wsize,o.wsize,0),o.wnext=0,o.whave=o.wsize):((n=o.wsize-o.wnext)>r&&(n=r),s.arraySet(o.window,e,i-r,n,o.wnext),(r-=n)?(s.arraySet(o.window,e,i-r,r,0),o.wnext=r,o.whave=o.wsize):(o.wnext+=n,o.wnext===o.wsize&&(o.wnext=0),o.whave<o.wsize&&(o.whave+=n))),0}e.inflateReset=d,e.inflateReset2=c,e.inflateResetKeep=A,e.inflateInit=function(t){return u(t,15)},e.inflateInit2=u,e.inflate=function(t,e){var i,l,A,d,c,u,m,y,C,x,w,I,v,E,B,b,Q,S,T,D,F,k,P,R,M=0,L=new s.Buf8(4),N=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!t||!t.state||!t.output||!t.input&&0!==t.avail_in)return -2;12===(i=t.state).mode&&(i.mode=13),c=t.next_out,A=t.output,m=t.avail_out,d=t.next_in,l=t.input,u=t.avail_in,y=i.hold,C=i.bits,x=u,w=m,k=0;t:for(;;)switch(i.mode){case 1:if(0===i.wrap){i.mode=13;break}for(;C<16;){if(0===u)break t;u--,y+=l[d++]<<C,C+=8}if(2&i.wrap&&35615===y){i.check=0,L[0]=255&y,L[1]=y>>>8&255,i.check=n(i.check,L,2,0),y=0,C=0,i.mode=2;break}if(i.flags=0,i.head&&(i.head.done=!1),!(1&i.wrap)||(((255&y)<<8)+(y>>8))%31){t.msg="incorrect header check",i.mode=30;break}if(8!=(15&y)){t.msg="unknown compression method",i.mode=30;break}if(C-=4,F=8+(15&(y>>>=4)),0===i.wbits)i.wbits=F;else if(F>i.wbits){t.msg="invalid window size",i.mode=30;break}i.dmax=1<<F,t.adler=i.check=1,i.mode=512&y?10:12,y=0,C=0;break;case 2:for(;C<16;){if(0===u)break t;u--,y+=l[d++]<<C,C+=8}if(i.flags=y,8!=(255&i.flags)){t.msg="unknown compression method",i.mode=30;break}if(57344&i.flags){t.msg="unknown header flags set",i.mode=30;break}i.head&&(i.head.text=y>>8&1),512&i.flags&&(L[0]=255&y,L[1]=y>>>8&255,i.check=n(i.check,L,2,0)),y=0,C=0,i.mode=3;case 3:for(;C<32;){if(0===u)break t;u--,y+=l[d++]<<C,C+=8}i.head&&(i.head.time=y),512&i.flags&&(L[0]=255&y,L[1]=y>>>8&255,L[2]=y>>>16&255,L[3]=y>>>24&255,i.check=n(i.check,L,4,0)),y=0,C=0,i.mode=4;case 4:for(;C<16;){if(0===u)break t;u--,y+=l[d++]<<C,C+=8}i.head&&(i.head.xflags=255&y,i.head.os=y>>8),512&i.flags&&(L[0]=255&y,L[1]=y>>>8&255,i.check=n(i.check,L,2,0)),y=0,C=0,i.mode=5;case 5:if(1024&i.flags){for(;C<16;){if(0===u)break t;u--,y+=l[d++]<<C,C+=8}i.length=y,i.head&&(i.head.extra_len=y),512&i.flags&&(L[0]=255&y,L[1]=y>>>8&255,i.check=n(i.check,L,2,0)),y=0,C=0}else i.head&&(i.head.extra=null);i.mode=6;case 6:if(1024&i.flags&&((I=i.length)>u&&(I=u),I&&(i.head&&(F=i.head.extra_len-i.length,i.head.extra||(i.head.extra=Array(i.head.extra_len)),s.arraySet(i.head.extra,l,d,I,F)),512&i.flags&&(i.check=n(i.check,l,I,d)),u-=I,d+=I,i.length-=I),i.length))break t;i.length=0,i.mode=7;case 7:if(2048&i.flags){if(0===u)break t;I=0;do F=l[d+I++],i.head&&F&&i.length<65536&&(i.head.name+=String.fromCharCode(F));while(F&&I<u)if(512&i.flags&&(i.check=n(i.check,l,I,d)),u-=I,d+=I,F)break t}else i.head&&(i.head.name=null);i.length=0,i.mode=8;case 8:if(4096&i.flags){if(0===u)break t;I=0;do F=l[d+I++],i.head&&F&&i.length<65536&&(i.head.comment+=String.fromCharCode(F));while(F&&I<u)if(512&i.flags&&(i.check=n(i.check,l,I,d)),u-=I,d+=I,F)break t}else i.head&&(i.head.comment=null);i.mode=9;case 9:if(512&i.flags){for(;C<16;){if(0===u)break t;u--,y+=l[d++]<<C,C+=8}if(y!==(65535&i.check)){t.msg="header crc mismatch",i.mode=30;break}y=0,C=0}i.head&&(i.head.hcrc=i.flags>>9&1,i.head.done=!0),t.adler=i.check=0,i.mode=12;break;case 10:for(;C<32;){if(0===u)break t;u--,y+=l[d++]<<C,C+=8}t.adler=i.check=h(y),y=0,C=0,i.mode=11;case 11:if(0===i.havedict)return t.next_out=c,t.avail_out=m,t.next_in=d,t.avail_in=u,i.hold=y,i.bits=C,2;t.adler=i.check=1,i.mode=12;case 12:if(5===e||6===e)break t;case 13:if(i.last){y>>>=7&C,C-=7&C,i.mode=27;break}for(;C<3;){if(0===u)break t;u--,y+=l[d++]<<C,C+=8}switch(i.last=1&y,C-=1,3&(y>>>=1)){case 0:i.mode=14;break;case 1:if(function(t){if(_){var e;for(g=new s.Buf32(512),p=new s.Buf32(32),e=0;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(a(1,t.lens,0,288,g,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5;a(2,t.lens,0,32,p,0,t.work,{bits:5}),_=!1}t.lencode=g,t.lenbits=9,t.distcode=p,t.distbits=5}(i),i.mode=20,6===e){y>>>=2,C-=2;break t}break;case 2:i.mode=17;break;case 3:t.msg="invalid block type",i.mode=30}y>>>=2,C-=2;break;case 14:for(y>>>=7&C,C-=7&C;C<32;){if(0===u)break t;u--,y+=l[d++]<<C,C+=8}if((65535&y)!=(y>>>16^65535)){t.msg="invalid stored block lengths",i.mode=30;break}if(i.length=65535&y,y=0,C=0,i.mode=15,6===e)break t;case 15:i.mode=16;case 16:if(I=i.length){if(I>u&&(I=u),I>m&&(I=m),0===I)break t;s.arraySet(A,l,d,I,c),u-=I,d+=I,m-=I,c+=I,i.length-=I;break}i.mode=12;break;case 17:for(;C<14;){if(0===u)break t;u--,y+=l[d++]<<C,C+=8}if(i.nlen=257+(31&y),y>>>=5,C-=5,i.ndist=1+(31&y),y>>>=5,C-=5,i.ncode=4+(15&y),y>>>=4,C-=4,i.nlen>286||i.ndist>30){t.msg="too many length or distance symbols",i.mode=30;break}i.have=0,i.mode=18;case 18:for(;i.have<i.ncode;){for(;C<3;){if(0===u)break t;u--,y+=l[d++]<<C,C+=8}i.lens[N[i.have++]]=7&y,y>>>=3,C-=3}for(;i.have<19;)i.lens[N[i.have++]]=0;if(i.lencode=i.lendyn,i.lenbits=7,P={bits:i.lenbits},k=a(0,i.lens,0,19,i.lencode,0,i.work,P),i.lenbits=P.bits,k){t.msg="invalid code lengths set",i.mode=30;break}i.have=0,i.mode=19;case 19:for(;i.have<i.nlen+i.ndist;){for(;b=(M=i.lencode[y&(1<<i.lenbits)-1])>>>16&255,Q=65535&M,!((B=M>>>24)<=C);){if(0===u)break t;u--,y+=l[d++]<<C,C+=8}if(Q<16)y>>>=B,C-=B,i.lens[i.have++]=Q;else{if(16===Q){for(R=B+2;C<R;){if(0===u)break t;u--,y+=l[d++]<<C,C+=8}if(y>>>=B,C-=B,0===i.have){t.msg="invalid bit length repeat",i.mode=30;break}F=i.lens[i.have-1],I=3+(3&y),y>>>=2,C-=2}else if(17===Q){for(R=B+3;C<R;){if(0===u)break t;u--,y+=l[d++]<<C,C+=8}C-=B,F=0,I=3+(7&(y>>>=B)),y>>>=3,C-=3}else{for(R=B+7;C<R;){if(0===u)break t;u--,y+=l[d++]<<C,C+=8}C-=B,F=0,I=11+(127&(y>>>=B)),y>>>=7,C-=7}if(i.have+I>i.nlen+i.ndist){t.msg="invalid bit length repeat",i.mode=30;break}for(;I--;)i.lens[i.have++]=F}}if(30===i.mode)break;if(0===i.lens[256]){t.msg="invalid code -- missing end-of-block",i.mode=30;break}if(i.lenbits=9,P={bits:i.lenbits},k=a(1,i.lens,0,i.nlen,i.lencode,0,i.work,P),i.lenbits=P.bits,k){t.msg="invalid literal/lengths set",i.mode=30;break}if(i.distbits=6,i.distcode=i.distdyn,P={bits:i.distbits},k=a(2,i.lens,i.nlen,i.ndist,i.distcode,0,i.work,P),i.distbits=P.bits,k){t.msg="invalid distances set",i.mode=30;break}if(i.mode=20,6===e)break t;case 20:i.mode=21;case 21:if(u>=6&&m>=258){t.next_out=c,t.avail_out=m,t.next_in=d,t.avail_in=u,i.hold=y,i.bits=C,o(t,w),c=t.next_out,A=t.output,m=t.avail_out,d=t.next_in,l=t.input,u=t.avail_in,y=i.hold,C=i.bits,12===i.mode&&(i.back=-1);break}for(i.back=0;b=(M=i.lencode[y&(1<<i.lenbits)-1])>>>16&255,Q=65535&M,!((B=M>>>24)<=C);){if(0===u)break t;u--,y+=l[d++]<<C,C+=8}if(b&&0==(240&b)){for(S=B,T=b,D=Q;b=(M=i.lencode[D+((y&(1<<S+T)-1)>>S)])>>>16&255,Q=65535&M,!(S+(B=M>>>24)<=C);){if(0===u)break t;u--,y+=l[d++]<<C,C+=8}y>>>=S,C-=S,i.back+=S}if(y>>>=B,C-=B,i.back+=B,i.length=Q,0===b){i.mode=26;break}if(32&b){i.back=-1,i.mode=12;break}if(64&b){t.msg="invalid literal/length code",i.mode=30;break}i.extra=15&b,i.mode=22;case 22:if(i.extra){for(R=i.extra;C<R;){if(0===u)break t;u--,y+=l[d++]<<C,C+=8}i.length+=y&(1<<i.extra)-1,y>>>=i.extra,C-=i.extra,i.back+=i.extra}i.was=i.length,i.mode=23;case 23:for(;b=(M=i.distcode[y&(1<<i.distbits)-1])>>>16&255,Q=65535&M,!((B=M>>>24)<=C);){if(0===u)break t;u--,y+=l[d++]<<C,C+=8}if(0==(240&b)){for(S=B,T=b,D=Q;b=(M=i.distcode[D+((y&(1<<S+T)-1)>>S)])>>>16&255,Q=65535&M,!(S+(B=M>>>24)<=C);){if(0===u)break t;u--,y+=l[d++]<<C,C+=8}y>>>=S,C-=S,i.back+=S}if(y>>>=B,C-=B,i.back+=B,64&b){t.msg="invalid distance code",i.mode=30;break}i.offset=Q,i.extra=15&b,i.mode=24;case 24:if(i.extra){for(R=i.extra;C<R;){if(0===u)break t;u--,y+=l[d++]<<C,C+=8}i.offset+=y&(1<<i.extra)-1,y>>>=i.extra,C-=i.extra,i.back+=i.extra}if(i.offset>i.dmax){t.msg="invalid distance too far back",i.mode=30;break}i.mode=25;case 25:if(0===m)break t;if(I=w-m,i.offset>I){if((I=i.offset-I)>i.whave&&i.sane){t.msg="invalid distance too far back",i.mode=30;break}I>i.wnext?(I-=i.wnext,v=i.wsize-I):v=i.wnext-I,I>i.length&&(I=i.length),E=i.window}else E=A,v=c-i.offset,I=i.length;I>m&&(I=m),m-=I,i.length-=I;do A[c++]=E[v++];while(--I)0===i.length&&(i.mode=21);break;case 26:if(0===m)break t;A[c++]=i.length,m--,i.mode=21;break;case 27:if(i.wrap){for(;C<32;){if(0===u)break t;u--,y|=l[d++]<<C,C+=8}if(w-=m,t.total_out+=w,i.total+=w,w&&(t.adler=i.check=i.flags?n(i.check,A,w,c-w):r(i.check,A,w,c-w)),w=m,(i.flags?y:h(y))!==i.check){t.msg="incorrect data check",i.mode=30;break}y=0,C=0}i.mode=28;case 28:if(i.wrap&&i.flags){for(;C<32;){if(0===u)break t;u--,y+=l[d++]<<C,C+=8}if(y!==(4294967295&i.total)){t.msg="incorrect length check",i.mode=30;break}y=0,C=0}i.mode=29;case 29:k=1;break t;case 30:k=-3;break t;case 31:return -4;default:return -2}return t.next_out=c,t.avail_out=m,t.next_in=d,t.avail_in=u,i.hold=y,i.bits=C,(i.wsize||w!==t.avail_out&&i.mode<30&&(i.mode<27||4!==e))&&f(t,t.output,t.next_out,w-t.avail_out)?(i.mode=31,-4):(x-=t.avail_in,w-=t.avail_out,t.total_in+=x,t.total_out+=w,i.total+=w,i.wrap&&w&&(t.adler=i.check=i.flags?n(i.check,A,w,t.next_out-w):r(i.check,A,w,t.next_out-w)),t.data_type=i.bits+(i.last?64:0)+(12===i.mode?128:0)+(20===i.mode||15===i.mode?256:0),(0===x&&0===w||4===e)&&0===k&&(k=-5),k)},e.inflateEnd=function(t){if(!t||!t.state)return -2;var e=t.state;return e.window&&(e.window=null),t.state=null,0},e.inflateGetHeader=function(t,e){var i;return t&&t.state?0==(2&(i=t.state).wrap)?-2:(i.head=e,e.done=!1,0):-2},e.inflateSetDictionary=function(t,e){var i,s=e.length;return t&&t.state?0!==(i=t.state).wrap&&11!==i.mode?-2:11===i.mode&&r(1,e,s,0)!==i.check?-3:f(t,e,s,s)?(i.mode=31,-4):(i.havedict=1,0):-2},e.inflateInfo="pako inflate (from Nodeca project)"},"./node_modules/pako/lib/zlib/inftrees.js":(t,e,i)=>{var s=i("./node_modules/pako/lib/utils/common.js"),r=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],n=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],o=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],a=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];t.exports=function(t,e,i,h,l,A,d,c){var u,g,p,_,f,m,y,C,x,w=c.bits,I=0,v=0,E=0,B=0,b=0,Q=0,S=0,T=0,D=0,F=0,k=null,P=0,R=new s.Buf16(16),M=new s.Buf16(16),L=null,N=0;for(I=0;I<=15;I++)R[I]=0;for(v=0;v<h;v++)R[e[i+v]]++;for(b=w,B=15;B>=1&&0===R[B];B--);if(b>B&&(b=B),0===B)return l[A++]=20971520,l[A++]=20971520,c.bits=1,0;for(E=1;E<B&&0===R[E];E++);for(b<E&&(b=E),T=1,I=1;I<=15;I++)if(T<<=1,(T-=R[I])<0)return -1;if(T>0&&(0===t||1!==B))return -1;for(M[1]=0,I=1;I<15;I++)M[I+1]=M[I]+R[I];for(v=0;v<h;v++)0!==e[i+v]&&(d[M[e[i+v]]++]=v);if(0===t?(k=L=d,m=19):1===t?(k=r,P-=257,L=n,N-=257,m=256):(k=o,L=a,m=-1),F=0,v=0,I=E,f=A,Q=b,S=0,p=-1,_=(D=1<<b)-1,1===t&&D>852||2===t&&D>592)return 1;for(;;){y=I-S,d[v]<m?(C=0,x=d[v]):d[v]>m?(C=L[N+d[v]],x=k[P+d[v]]):(C=96,x=0),u=1<<I-S,E=g=1<<Q;do l[f+(F>>S)+(g-=u)]=y<<24|C<<16|x|0;while(0!==g)for(u=1<<I-1;F&u;)u>>=1;if(0!==u?(F&=u-1,F+=u):F=0,v++,0==--R[I]){if(I===B)break;I=e[i+d[v]]}if(I>b&&(F&_)!==p){for(0===S&&(S=b),f+=E,T=1<<(Q=I-S);Q+S<B&&!((T-=R[Q+S])<=0);)Q++,T<<=1;if(D+=1<<Q,1===t&&D>852||2===t&&D>592)return 1;l[p=F&_]=b<<24|Q<<16|f-A|0}}return 0!==F&&(l[f+F]=I-S<<24|4194304),c.bits=b,0}},"./node_modules/pako/lib/zlib/messages.js":t=>{t.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},"./node_modules/pako/lib/zlib/trees.js":(t,e,i)=>{var s=i("./node_modules/pako/lib/utils/common.js");function r(t){for(var e=t.length;--e>=0;)t[e]=0}var n=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],o=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],a=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],h=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],l=Array(576);r(l);var A=Array(60);r(A);var d=Array(512);r(d);var c=Array(256);r(c);var u=Array(29);r(u);var g,p,_,f=Array(30);function m(t,e,i,s,r){this.static_tree=t,this.extra_bits=e,this.extra_base=i,this.elems=s,this.max_length=r,this.has_stree=t&&t.length}function y(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}function C(t){return t<256?d[t]:d[256+(t>>>7)]}function x(t,e){t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255}function w(t,e,i){t.bi_valid>16-i?(t.bi_buf|=e<<t.bi_valid&65535,x(t,t.bi_buf),t.bi_buf=e>>16-t.bi_valid,t.bi_valid+=i-16):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=i)}function I(t,e,i){w(t,i[2*e],i[2*e+1])}function v(t,e){var i=0;do i|=1&t,t>>>=1,i<<=1;while(--e>0)return i>>>1}function E(t,e,i){var s,r,n=Array(16),o=0;for(s=1;s<=15;s++)n[s]=o=o+i[s-1]<<1;for(r=0;r<=e;r++){var a=t[2*r+1];0!==a&&(t[2*r]=v(n[a]++,a))}}function B(t){var e;for(e=0;e<286;e++)t.dyn_ltree[2*e]=0;for(e=0;e<30;e++)t.dyn_dtree[2*e]=0;for(e=0;e<19;e++)t.bl_tree[2*e]=0;t.dyn_ltree[512]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0}function b(t){t.bi_valid>8?x(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0}function Q(t,e,i,s){var r=2*e,n=2*i;return t[r]<t[n]||t[r]===t[n]&&s[e]<=s[i]}function S(t,e,i){for(var s=t.heap[i],r=i<<1;r<=t.heap_len&&(r<t.heap_len&&Q(e,t.heap[r+1],t.heap[r],t.depth)&&r++,!Q(e,s,t.heap[r],t.depth));)t.heap[i]=t.heap[r],i=r,r<<=1;t.heap[i]=s}function T(t,e,i){var s,r,a,h,l=0;if(0!==t.last_lit)do s=t.pending_buf[t.d_buf+2*l]<<8|t.pending_buf[t.d_buf+2*l+1],r=t.pending_buf[t.l_buf+l],l++,0===s?I(t,r,e):(I(t,(a=c[r])+256+1,e),0!==(h=n[a])&&w(t,r-=u[a],h),I(t,a=C(--s),i),0!==(h=o[a])&&w(t,s-=f[a],h));while(l<t.last_lit)I(t,256,e)}function D(t,e){var i,s,r,n=e.dyn_tree,o=e.stat_desc.static_tree,a=e.stat_desc.has_stree,h=e.stat_desc.elems,l=-1;for(t.heap_len=0,t.heap_max=573,i=0;i<h;i++)0!==n[2*i]?(t.heap[++t.heap_len]=l=i,t.depth[i]=0):n[2*i+1]=0;for(;t.heap_len<2;)n[2*(r=t.heap[++t.heap_len]=l<2?++l:0)]=1,t.depth[r]=0,t.opt_len--,a&&(t.static_len-=o[2*r+1]);for(e.max_code=l,i=t.heap_len>>1;i>=1;i--)S(t,n,i);r=h;do i=t.heap[1],t.heap[1]=t.heap[t.heap_len--],S(t,n,1),s=t.heap[1],t.heap[--t.heap_max]=i,t.heap[--t.heap_max]=s,n[2*r]=n[2*i]+n[2*s],t.depth[r]=(t.depth[i]>=t.depth[s]?t.depth[i]:t.depth[s])+1,n[2*i+1]=n[2*s+1]=r,t.heap[1]=r++,S(t,n,1);while(t.heap_len>=2)t.heap[--t.heap_max]=t.heap[1],function(t,e){var i,s,r,n,o,a,h=e.dyn_tree,l=e.max_code,A=e.stat_desc.static_tree,d=e.stat_desc.has_stree,c=e.stat_desc.extra_bits,u=e.stat_desc.extra_base,g=e.stat_desc.max_length,p=0;for(n=0;n<=15;n++)t.bl_count[n]=0;for(h[2*t.heap[t.heap_max]+1]=0,i=t.heap_max+1;i<573;i++)(n=h[2*h[2*(s=t.heap[i])+1]+1]+1)>g&&(n=g,p++),h[2*s+1]=n,s>l||(t.bl_count[n]++,o=0,s>=u&&(o=c[s-u]),a=h[2*s],t.opt_len+=a*(n+o),d&&(t.static_len+=a*(A[2*s+1]+o)));if(0!==p){do{for(n=g-1;0===t.bl_count[n];)n--;t.bl_count[n]--,t.bl_count[n+1]+=2,t.bl_count[g]--,p-=2}while(p>0)for(n=g;0!==n;n--)for(s=t.bl_count[n];0!==s;)(r=t.heap[--i])>l||(h[2*r+1]!==n&&(t.opt_len+=(n-h[2*r+1])*h[2*r],h[2*r+1]=n),s--)}}(t,e),E(n,l,t.bl_count)}function F(t,e,i){var s,r,n=-1,o=e[1],a=0,h=7,l=4;for(0===o&&(h=138,l=3),e[2*(i+1)+1]=65535,s=0;s<=i;s++)r=o,o=e[2*(s+1)+1],++a<h&&r===o||(a<l?t.bl_tree[2*r]+=a:0!==r?(r!==n&&t.bl_tree[2*r]++,t.bl_tree[32]++):a<=10?t.bl_tree[34]++:t.bl_tree[36]++,a=0,n=r,0===o?(h=138,l=3):r===o?(h=6,l=3):(h=7,l=4))}function k(t,e,i){var s,r,n=-1,o=e[1],a=0,h=7,l=4;for(0===o&&(h=138,l=3),s=0;s<=i;s++)if(r=o,o=e[2*(s+1)+1],!(++a<h&&r===o)){if(a<l)do I(t,r,t.bl_tree);while(0!=--a)else 0!==r?(r!==n&&(I(t,r,t.bl_tree),a--),I(t,16,t.bl_tree),w(t,a-3,2)):a<=10?(I(t,17,t.bl_tree),w(t,a-3,3)):(I(t,18,t.bl_tree),w(t,a-11,7));a=0,n=r,0===o?(h=138,l=3):r===o?(h=6,l=3):(h=7,l=4)}}r(f);var P=!1;function R(t,e,i,r){w(t,0+(r?1:0),3),b(t),x(t,i),x(t,~i),s.arraySet(t.pending_buf,t.window,e,i,t.pending),t.pending+=i}e._tr_init=function(t){P||(function(){var t,e,i,s,r,h=Array(16);for(i=0,s=0;s<28;s++)for(u[s]=i,t=0;t<1<<n[s];t++)c[i++]=s;for(c[i-1]=s,r=0,s=0;s<16;s++)for(f[s]=r,t=0;t<1<<o[s];t++)d[r++]=s;for(r>>=7;s<30;s++)for(f[s]=r<<7,t=0;t<1<<o[s]-7;t++)d[256+r++]=s;for(e=0;e<=15;e++)h[e]=0;for(t=0;t<=143;)l[2*t+1]=8,t++,h[8]++;for(;t<=255;)l[2*t+1]=9,t++,h[9]++;for(;t<=279;)l[2*t+1]=7,t++,h[7]++;for(;t<=287;)l[2*t+1]=8,t++,h[8]++;for(E(l,287,h),t=0;t<30;t++)A[2*t+1]=5,A[2*t]=v(t,5);g=new m(l,n,257,286,15),p=new m(A,o,0,30,15),_=new m([],a,0,19,7)}(),P=!0),t.l_desc=new y(t.dyn_ltree,g),t.d_desc=new y(t.dyn_dtree,p),t.bl_desc=new y(t.bl_tree,_),t.bi_buf=0,t.bi_valid=0,B(t)},e._tr_stored_block=R,e._tr_flush_block=function(t,e,i,s){var r,n,o=0;t.level>0?(2===t.strm.data_type&&(t.strm.data_type=function(t){var e,i=4093624447;for(e=0;e<=31;e++,i>>>=1)if(1&i&&0!==t.dyn_ltree[2*e])return 0;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return 1;for(e=32;e<256;e++)if(0!==t.dyn_ltree[2*e])return 1;return 0}(t)),D(t,t.l_desc),D(t,t.d_desc),o=function(t){var e;for(F(t,t.dyn_ltree,t.l_desc.max_code),F(t,t.dyn_dtree,t.d_desc.max_code),D(t,t.bl_desc),e=18;e>=3&&0===t.bl_tree[2*h[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e}(t),r=t.opt_len+3+7>>>3,(n=t.static_len+3+7>>>3)<=r&&(r=n)):r=n=i+5,i+4<=r&&-1!==e?R(t,e,i,s):4===t.strategy||n===r?(w(t,2+(s?1:0),3),T(t,l,A)):(w(t,4+(s?1:0),3),function(t,e,i,s){var r;for(w(t,e-257,5),w(t,i-1,5),w(t,s-4,4),r=0;r<s;r++)w(t,t.bl_tree[2*h[r]+1],3);k(t,t.dyn_ltree,e-1),k(t,t.dyn_dtree,i-1)}(t,t.l_desc.max_code+1,t.d_desc.max_code+1,o+1),T(t,t.dyn_ltree,t.dyn_dtree)),B(t),s&&b(t)},e._tr_tally=function(t,e,i){return t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,t.pending_buf[t.l_buf+t.last_lit]=255&i,t.last_lit++,0===e?t.dyn_ltree[2*i]++:(t.matches++,e--,t.dyn_ltree[2*(c[i]+256+1)]++,t.dyn_dtree[2*C(e)]++),t.last_lit===t.lit_bufsize-1},e._tr_align=function(t){w(t,2,3),I(t,256,l),16===t.bi_valid?(x(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)}},"./node_modules/pako/lib/zlib/zstream.js":t=>{t.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},"./node_modules/strnum/strnum.js":t=>{let e=/^[-+]?0x[a-fA-F0-9]+$/,i=/^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/,s={hex:!0,leadingZeros:!0,decimalPoint:"."};t.exports=function(t,r={}){if(r=Object.assign({},s,r),!t||"string"!=typeof t)return t;let n=t.trim();if(void 0!==r.skipLike&&r.skipLike.test(n))return t;if(r.hex&&e.test(n))return Number.parseInt(n,16);{let e=i.exec(n);if(e){e[1];let i=e[2],s=e[3];return e[4]||e[6],1===i.length&&"."===s[0]?Number(t):!r.leadingZeros&&i.length>0?t:Number(n)}return t}}},"./src/index.ts":(t,e,i)=>{i.r(e),i.d(e,{FLIPPED_DIAGONALLY_FLAG:()=>o.FLIPPED_DIAGONALLY_FLAG,FLIPPED_HORIZONTALLY_FLAG:()=>o.FLIPPED_HORIZONTALLY_FLAG,FLIPPED_VERTICALLY_FLAG:()=>o.FLIPPED_VERTICALLY_FLAG,TiledEntity:()=>n.TiledEntity,TiledLayer:()=>o.TiledLayer,TiledLayerComponent:()=>A.TiledLayerComponent,TiledMap:()=>r.TiledMap,TiledMapFormat:()=>s.TiledMapFormat,TiledMapResource:()=>s.TiledMapResource,TiledObject:()=>a.TiledObject,TiledObjectComponent:()=>l.TiledObjectComponent,TiledObjectGroup:()=>a.TiledObjectGroup,TiledTileset:()=>h.TiledTileset,TiledTilesetTile:()=>h.TiledTilesetTile,getCanonicalGid:()=>o.getCanonicalGid,getProperty:()=>n.getProperty,isFlippedDiagonally:()=>o.isFlippedDiagonally,isFlippedHorizontally:()=>o.isFlippedHorizontally,isFlippedVertically:()=>o.isFlippedVertically,parseExternalJson:()=>h.parseExternalJson,parseExternalTsx:()=>h.parseExternalTsx}),i("./src/tiled-types.ts");var s=i("./src/tiled-map-resource.ts"),r=i("./src/tiled-map-parser.ts"),n=i("./src/tiled-entity.ts"),o=i("./src/tiled-layer.ts"),a=i("./src/tiled-object.ts"),h=i("./src/tiled-tileset.ts"),l=i("./src/tiled-object-component.ts"),A=i("./src/tiled-layer-component.ts");i("./src/raw-tiled-layer.ts"),i("./src/raw-tiled-map.ts"),i("./src/raw-tiled-object.ts"),i("./src/raw-tiled-text.ts"),i("./src/raw-tiled-tileset.ts"),i("./src/raw-tileset-tile.ts")},"./src/raw-tiled-layer.ts":(t,e,i)=>{i.r(e)},"./src/raw-tiled-map.ts":(t,e,i)=>{i.r(e)},"./src/raw-tiled-object.ts":(t,e,i)=>{i.r(e)},"./src/raw-tiled-text.ts":(t,e,i)=>{i.r(e)},"./src/raw-tiled-tileset.ts":(t,e,i)=>{i.r(e)},"./src/raw-tileset-tile.ts":(t,e,i)=>{i.r(e)},"./src/tiled-entity.ts":(t,e,i)=>{i.r(e),i.d(e,{TiledEntity:()=>r,getProperty:()=>s});let s=(t,e)=>{if(Array.isArray(t))return null==t?void 0:t.filter(t=>{var i;return(null===(i=t.name)||void 0===i?void 0:i.toLocaleLowerCase())===e.toLocaleLowerCase()})[0]};class r{constructor(){this.properties=[]}getProperty(t){return s(this.properties,t)}}},"./src/tiled-layer-component.ts":(t,e,i)=>{i.r(e),i.d(e,{TiledLayerComponent:()=>r});var s=i("excalibur");class r extends s.Component{constructor(t){super(),this.layer=t,this.type="ex.tiledlayer"}}},"./src/tiled-layer.ts":(t,e,i)=>{i.r(e),i.d(e,{FLIPPED_DIAGONALLY_FLAG:()=>a,FLIPPED_HORIZONTALLY_FLAG:()=>n,FLIPPED_VERTICALLY_FLAG:()=>o,TiledLayer:()=>c,getCanonicalGid:()=>d,isFlippedDiagonally:()=>A,isFlippedHorizontally:()=>h,isFlippedVertically:()=>l});var s=i("./src/tiled-entity.ts"),r=i("excalibur");let n=2147483648,o=1073741824,a=536870912,h=t=>!!(t&n),l=t=>!!(t&o),A=t=>!!(t&a),d=t=>t&~(n|o|a);class c extends s.TiledEntity{constructor(){super(...arguments),this.offset=r.Vector.Zero,this.parallaxFactor=null,this.encoding="csv"}static parse(t){var e,i,s,n,o,a;if("tilelayer"!==t.type)throw Error("Cannot parse a non tilelayer type layer");let h=new c;return h.id=+t.id,h.name=t.name,h.data=t.data,h.offset=(0,r.vec)(null!==(e=t.offsetx)&&void 0!==e?e:0,null!==(i=t.offsety)&&void 0!==i?i:0),h.parallaxFactor=t.parallaxx||t.parallaxy?(0,r.vec)(null!==(s=t.parallaxx)&&void 0!==s?s:1,null!==(n=t.parallaxy)&&void 0!==n?n:1):null,h.width=t.width,h.height=t.height,h.encoding=null!==(o=t.encoding)&&void 0!==o?o:"csv",h.compression=t.compression,h.order=t.order,h.properties=null!==(a=t.properties)&&void 0!==a?a:[],h.rawLayer=t,h}}},"./src/tiled-map-parser.ts":(t,e,i)=>{i.r(e),i.d(e,{TiledMap:()=>A});var s=i("./node_modules/fast-xml-parser/src/parser.js"),r=i("./node_modules/pako/index.js"),n=i("./node_modules/zstddec/dist/zstddec.modern.js"),o=i("./src/tiled-layer.ts"),a=i("./src/tiled-object.ts"),h=i("./src/tiled-tileset.ts"),l=function(t,e,i,s){return new(i||(i=Promise))(function(r,n){function o(t){try{h(s.next(t))}catch(t){n(t)}}function a(t){try{h(s.throw(t))}catch(t){n(t)}}function h(t){var e;t.done?r(t.value):((e=t.value)instanceof i?e:new i(function(t){t(e)})).then(o,a)}h((s=s.apply(t,e||[])).next())})};class A{constructor(){this.layers=[],this.tileSets=[],this.objectGroups=[]}getExcaliburObjects(){return this.getObjectLayerByProperty("excalibur",!0)}getObjects(){var t;return null!==(t=this.objectGroups.filter(t=>{var e;return!(null===(e=t.getProperty("excalibur-exclude"))||void 0===e?void 0:e.value)}))&&void 0!==t?t:[]}getObjectLayerByName(t){return this.objectGroups.filter(e=>e.name===t)[0]}getObjectLayerByProperty(t,e){return this.objectGroups.filter(i=>{var s;return(null===(s=i.getProperty(t))||void 0===s?void 0:s.value)===e})}getTileLayerByName(t){return this.layers.filter(e=>e.name===t)[0]}getTileLayersByProperty(t,e){return this.layers.filter(i=>{var s;return(null===(s=i.getProperty(t))||void 0===s?void 0:s.value)===e})}static fromTmx(t){var e,i,r,n,o,a,h,d,c,u,g,p,_,f,m,y;return l(this,void 0,void 0,function*(){let l=(t,e,i=!1)=>{t[e]?(t[e+(i?"s":"")]=Array.isArray(t[e])?t[e]:[t[e]],i&&delete t[e]):t[e+(i?"s":"")]=[]},C=s.parse(t,{attributeNamePrefix:"",textNodeName:"#text",ignoreAttributes:!1,ignoreNameSpace:!1,allowBooleanAttributes:!0,parseNodeValue:!0,parseAttributeValue:!0,trimValues:!0,parseTrueNumberOnly:!1,arrayMode:!1,stopNodes:["parse-me-as-string"]}).map;for(let t of(l(C,"layer",!0),C.layers))t.type=null!==(e=t.type)&&void 0!==e?e:"tilelayer",t.encoding=t.data.encoding,t.compression=t.data.compression,"csv"===t.encoding?t.data=t.data["#text"].split(",").map(t=>+t):t.data=t.data["#text"],t.properties=null!==(r=null===(i=t.properties)||void 0===i?void 0:i.property)&&void 0!==r?r:[],l(t,"properties");for(let t of(C.objectgroup=null!==(n=C.objectgroup)&&void 0!==n?n:[],Array.isArray(C.objectgroup)?C.objectgroup:[C.objectgroup]))if(t.type=null!==(o=t.type)&&void 0!==o?o:"objectgroup",t.properties=null!==(h=null===(a=t.properties)||void 0===a?void 0:a.property)&&void 0!==h?h:[],l(t,"properties"),t.object){for(let e of(t.objects=Array.isArray(t.object)?t.object:[t.object],t.objects.forEach(t=>{var e,i;return t.properties=null!==(i=null===(e=t.properties)||void 0===e?void 0:e.property)&&void 0!==i?i:[]}),t.objects.forEach(t=>l(t,"properties")),delete t.object,t.objects))e.text&&(e.text.text=e.text["#text"],e.text.halign=null!==(d=e.text.halign)&&void 0!==d?d:"left",e.text.valign=null!==(c=e.text.valign)&&void 0!==c?c:"top",e.text.fontfamily=null!==(u=e.text.fontfamily)&&void 0!==u?u:"sans-serif",e.text.pixelsize=+(null!==(g=e.text.pixelsize)&&void 0!==g?g:16),e.text.kerning=!!e.text.kerning,e.text.italic=!!e.text.italic,e.text.bold=!!e.text.bold,e.text.underline=!!e.text.underline,e.text.strikeout=!!e.text.strikeout,e.text.color=null!==(p=e.text.color)&&void 0!==p?p:"#000000"),""===e.point&&(e.point=!0),""===e.ellipse&&(e.ellipse=!0),e.polyline&&(e.polyline=e.polyline.points.split(" ").map(t=>{let e=t.split(",");return{x:+e[0],y:+e[1]}})),e.polygon&&(e.polygon=e.polygon.points.split(" ").map(t=>{let e=t.split(",");return{x:+e[0],y:+e[1]}}));C.layers.push(t)}for(let t of(delete C.objectgroup,l(C,"imagelayer",!0),C.imagelayers))t.type=null!==(_=t.type)&&void 0!==_?_:"imagelayer",t.image=t.image.source,t.properties=null!==(m=null===(f=t.properties)||void 0===f?void 0:f.property)&&void 0!==m?m:[],l(t,"properties"),C.layers.push(t);for(let t of(delete C.imagelayer,l(C,"tileset",!0),C.tilesets))t.source||(t.image&&(t.imagewidth=t.image.width,t.imageheight=t.image.height,t.image=t.image.source),t.objectalignment=null!==(y=t.objectalignment)&&void 0!==y?y:"unspecified",l(t,"tile",!0),t.tiles.forEach(t=>{var e;(null===(e=t.image)||void 0===e?void 0:e.source)&&(t.image=t.image.source),t.objectgroup&&(t.objectgroup.type="objectgroup",l(t.objectgroup,"object",!0))}));return yield A._fromRawTiledMap(C)})}static fromJson(t){return l(this,void 0,void 0,function*(){return yield A._fromRawTiledMap(t)})}static _fromRawTiledMap(t){return l(this,void 0,void 0,function*(){yield A._decompresslayers(t);let e=new A;for(let i of(e.orientation=t.orientation,e.rawMap=t,e.width=+t.width,e.height=+t.height,e.tileWidth=+t.tilewidth,e.tileHeight=+t.tileheight,d(t),t.layers))"tilelayer"==i.type&&e.layers.push(o.TiledLayer.parse(i)),"objectgroup"==i.type&&e.objectGroups.push(a.TiledObjectGroup.parse(i));for(let i of t.tilesets)i.source||e.tileSets.push(h.TiledTileset.parse(i));return e})}static _decompresslayers(t){var e;return l(this,void 0,void 0,function*(){if(t.layers)for(var i of t.layers)"string"==typeof i.data?"base64"===i.encoding&&(i.data=yield c.decompressBase64(i.data,i.encoding,null!==(e=i.compression)&&void 0!==e?e:"")):i.data=c.decompressCsv(i.data);return t})}}let d=t=>{let e=0;for(let i of t.layers)i.order=e++},c={decompressCsv:t=>t,decompressBase64:(t,e,i)=>{if(t.length%4>0)throw Error("Invalid string. Length must be a multiple of 4");function s(t){var e=t.charCodeAt(0);if(43===e||45===e)return 62;if(47===e||95===e)return 63;if(e<48)return -1;if(e<58)return e-48+26+26;if(e<91)return e-65;if(e<123)return e-97+26;throw Error("Could not decode elt")}var o,a,h,l,A,d,c=t.length;A="="===t.charAt(c-2)?2:"="===t.charAt(c-1)?1:0,d=new Uint8Array(3*t.length/4-A),h=A>0?t.length-4:t.length;var u=0;function g(t){d[u++]=t}for(o=0,a=0;o<h;o+=4,a+=3)g((16711680&(l=s(t.charAt(o))<<18|s(t.charAt(o+1))<<12|s(t.charAt(o+2))<<6|s(t.charAt(o+3))))>>16),g((65280&l)>>8),g(255&l);return 2===A?g(255&(l=s(t.charAt(o))<<2|s(t.charAt(o+1))>>4)):1===A&&(g((l=s(t.charAt(o))<<10|s(t.charAt(o+1))<<4|s(t.charAt(o+2))>>2)>>8&255),g(255&l)),new Promise(t=>{let e=function(t){for(var e=0,i=t.length-1;i>=0;i--)e=256*e+1*t[i];return e};if("zlib"===i||"gzip"===i){var s=(d=(0,r.inflate)(d)).length/4,a=Array(s);for(o=0;o<s;o++)a[o]=e(d.slice(4*o,4*o+4));t(a)}if("zstd"===i){let i=new n.ZSTDDecoder;i.init().then(()=>{var s=(d=i.decode(d)).length/4,r=Array(s);for(o=0;o<s;o++)r[o]=e(d.slice(4*o,4*o+4));t(r)})}if(!i){for(a=Array(s=d.length/4),o=0;o<s;o++)a[o]=e(d.slice(4*o,4*o+4));t(a)}})}}},"./src/tiled-map-resource.ts":(t,e,i)=>{i.r(e),i.d(e,{TiledMapFormat:()=>r,TiledMapResource:()=>u});var s,r,n=i("excalibur"),o=i("./src/tiled-map-parser.ts"),a=i("./src/tiled-tileset.ts"),h=i("./src/tiled-layer.ts"),l=i("./src/tiled-entity.ts"),A=i("./src/tiled-object-component.ts"),d=i("./src/tiled-layer-component.ts"),c=function(t,e,i,s){return new(i||(i=Promise))(function(r,n){function o(t){try{h(s.next(t))}catch(t){n(t)}}function a(t){try{h(s.throw(t))}catch(t){n(t)}}function h(t){var e;t.done?r(t.value):((e=t.value)instanceof i?e:new i(function(t){t(e)})).then(o,a)}h((s=s.apply(t,e||[])).next())})};(s=r||(r={})).TMX="TMX",s.JSON="JSON";class u{constructor(t,e){this.path=t,this.layers=[],this.isoLayers=[],this._layerZIndexStart=-1,this._mapToRawLayer=new Map;let{mapFormatOverride:i,startingLayerZIndex:s}=Object.assign({},e);this._layerZIndexStart=null!=s?s:this._layerZIndexStart;let o=null!=i?i:t.includes(".tmx")?r.TMX:r.JSON;switch(o){case r.TMX:this._resource=new n.Resource(t,"text");break;case r.JSON:this._resource=new n.Resource(t,"json");break;default:throw`The format ${o} is not currently supported. Please export Tiled map as JSON.`}this.mapFormat=o,this.ex={},this.imageMap={},this.sheetMap={},this.tileImageMap={},this.convertPath=(t,e)=>{if(0===e.indexOf("/"))return e;let i=t.split("/"),s=e.split("/");return i[i.length-1].includes(".")&&i.pop(),i.concat(s).join("/")}}_addTiledCamera(t){let e=this.ex.camera;if(e){let i=(0,n.vec)(e.x,e.y);this.isIsometric()&&(i=this._isoTileToScreenCoords(e.x,e.y)),t.camera.x=i.x,t.camera.y=i.y,t.camera.zoom=e.zoom}}_addTiledColliders(t){var e;let i=this.ex.colliders;if(i)for(let s of i){let i=new n.Actor({pos:(0,n.vec)(s.x,s.y),name:s.name,collisionType:null!==(e=s.collisionType)&&void 0!==e?e:n.CollisionType.Fixed});if(s.color&&(i.color=n.Color.fromHex(s.color.value)),"box"===s.type){if(this.isIsometric()){i.pos=this._isoTileToScreenCoords(s.x,s.y);let t=new n.BoundingBox({left:0,top:0,right:s.width,bottom:s.height}).getPoints().map(t=>this._isoTileToScreenCoords(t.x,t.y));i.collider.usePolygonCollider(t,n.Vector.Zero)}else i.collider.useBoxCollider(s.width,s.height,n.Vector.Zero)}"circle"===s.type&&i.collider.useCircleCollider(s.radius),i.addComponent(new A.TiledObjectComponent(s.tiled)),t.add(i),s.zIndex&&(i.z=s.zIndex)}}_isoTileToScreenCoords(t,e){if(this.isIsometric()){let i=this.isoLayers[0],s=i.tileWidth,r=i.tileHeight,o=e/r,a=t/r;return(0,n.vec)((a-o)*s/2+0,(a+o)*r/2)}return(0,n.vec)(t,e)}_addTiledText(t){var e,i,s,r,o,a,h,l,d,c,u,g;let p=null===(e=this.data)||void 0===e?void 0:e.getObjects();if(p&&p.length>0)for(let e of p){let p=e.getText();for(let _ of p){let p=(0,n.vec)(_.x,_.y+((null!==(i=_.height)&&void 0!==i?i:0)-(null!==(r=null===(s=_.text)||void 0===s?void 0:s.pixelSize)&&void 0!==r?r:0)));this.isIsometric()&&(p=this._isoTileToScreenCoords(_.x,_.y));let f=new n.Label({anchor:n.Vector.Zero,x:p.x,y:p.y,text:null!==(a=null===(o=_.text)||void 0===o?void 0:o.text)&&void 0!==a?a:"",name:this._getEntityName(_),font:new n.Font({family:null===(h=_.text)||void 0===h?void 0:h.fontFamily,size:null===(l=_.text)||void 0===l?void 0:l.pixelSize,unit:n.FontUnit.Px})});if(f.font.textAlign=n.TextAlign.Left,f.font.baseAlign=n.BaseAlign.Top,f.rotation=_.rotation,f.color=n.Color.fromHex(null!==(c=null===(d=_.text)||void 0===d?void 0:d.color)&&void 0!==c?c:"#000000"),f.collider.set(n.Shape.Box(null!==(u=_.width)&&void 0!==u?u:0,null!==(g=_.height)&&void 0!==g?g:0)),f.body.collisionType=n.CollisionType.PreventCollision,f.addComponent(new A.TiledObjectComponent(_)),f.z=this._calculateZIndex(_,e),this.isIsometric()){let t=new n.IsometricEntityComponent(this.isoLayers[0]);f.addComponent(t),t.elevation=e.order}t.add(f)}}}_addTiledInsertedTiles(t){var e,i,s;let r=null===(e=this.data)||void 0===e?void 0:e.getObjects();if(r&&r.length>0)for(let e of r){let r=e.getInsertedTiles();for(let o of r){let r=o.getProperty("collisionType"),a=n.CollisionType.PreventCollision;r&&(a=r.value);let h=(0,n.vec)(o.x,o.y);if(this.isIsometric()&&(h=this._isoTileToScreenCoords(o.x,o.y)),o.gid){let r=this.getSpriteForGid(o.gid),l=this.getCollidersForGid(o.gid),d=new n.Actor({x:h.x,y:h.y,width:o.width,height:o.height,anchor:this.isIsometric()?(0,n.vec)(.5,1):(0,n.vec)(0,1),rotation:o.rotation,collisionType:a,name:this._getEntityName(o)});if(this.isIsometric()){let t=this.isoLayers[0];for(let e of l)e.offset=(0,n.vec)(-t.tileWidth/2,-(2*t.tileHeight))}if(l.length&&(d.collider.clear(),d.collider.set(new n.CompositeCollider(l))),d.addComponent(new A.TiledObjectComponent(o)),d.graphics.anchor=this.isIsometric()?(0,n.vec)(.5,1):(0,n.vec)(0,1),r.destSize.width=null!==(i=o.width)&&void 0!==i?i:r.destSize.width,r.destSize.height=null!==(s=o.height)&&void 0!==s?s:r.destSize.height,d.graphics.use(r),this.isIsometric()){let t=new n.IsometricEntityComponent(this.isoLayers[0]);d.addComponent(t),t.elevation=e.order}t.add(d),d.z=this._calculateZIndex(o,e)}}}}useSolidLayers(){var t,e,i;let s=this.getTileMapLayers();for(let r of s=s.concat(this.isoLayers)){let s=this._mapToRawLayer.get(r);if(s&&null!==(e=null===(t=(0,l.getProperty)(s.properties,"solid"))||void 0===t?void 0:t.value)&&void 0!==e&&e)for(let t=0;t<s.data.length;t++)(i=r.tiles[t]).solid||(i.solid=!!s.data[t])}}addTiledMapToScene(t){let e=this.getTileMapLayers();for(let i of e)t.add(i);for(let e of this.isoLayers)t.add(e);this._addTiledCamera(t),this._addTiledColliders(t),this._addTiledText(t),this._addTiledInsertedTiles(t),this.useSolidLayers()}_parseExcaliburInfo(){var t,e,i,s,r,o,a,h,l,A;let d=null===(t=this.data)||void 0===t?void 0:t.getObjects(),c={};if(d.length>0)for(let t of(c.camera=null===(e=d.find(t=>t.getObjectByClass("camera")))||void 0===e?void 0:e.getCamera(),c.colliders=[],d)){let e=t.getObjectsByClass("boxcollider");for(let o of e){let e=o.getProperty("collisiontype"),a=o.getProperty("color"),h=this._calculateZIndex(o,t);c.colliders.push(Object.assign(Object.assign({},o),{width:+(null!==(i=o.width)&&void 0!==i?i:0),height:+(null!==(s=o.height)&&void 0!==s?s:0),collisionType:null!==(r=null==e?void 0:e.value)&&void 0!==r?r:n.CollisionType.Fixed,color:a,zIndex:h,radius:0,type:"box",tiled:o,name:this._getEntityName(o)}))}let d=t.getObjectsByClass("circlecollider");for(let e of d){let i=e.getProperty("collisiontype"),s=e.getProperty("color"),r=this._calculateZIndex(e,t);c.colliders.push({x:e.x,y:e.y,radius:Math.max(null!==(o=e.width)&&void 0!==o?o:0,null!==(a=e.height)&&void 0!==a?a:0),collisionType:null!==(h=null==i?void 0:i.value)&&void 0!==h?h:n.CollisionType.Fixed,color:s,zIndex:r,width:null!==(l=e.width)&&void 0!==l?l:0,height:null!==(A=e.height)&&void 0!==A?A:0,type:"circle",tiled:e,name:this._getEntityName(e)})}}this.ex=c}isLoaded(){return!!this.data}isIsometric(){return!!this.isoLayers.length}load(){return c(this,void 0,void 0,function*(){let t=yield this._resource.load(),e=yield this._importMapData(t),i=[];return e.rawMap.tilesets.forEach(t=>{if(t.source){let r=t.source.includes(".tsx")?"text":"json";var s=new n.Resource(this.convertPath(this.path,t.source),r);i.push(s.load().then(i=>{i="text"===r?(0,a.parseExternalTsx)(i,t.firstgid,t.source):(0,a.parseExternalJson)(i,t.firstgid,t.source),Object.assign(t,i),e.tileSets.push(i)},()=>{n.Logger.getInstance().error(`[Tiled] Error loading external tileset file ${s.path}`)}))}}),yield Promise.all(i).then(()=>{let t=[];return e.rawMap.tilesets.forEach(e=>{if(e.image)for(let i of e.source?[this.convertPath(e.source,e.image)]:[this.convertPath(this.path,e.image)]){let s=new n.ImageSource(i);this.imageMap[e.firstgid]=s,t.push(s.load()),n.Logger.getInstance().debug("[Tiled] Loading associated tileset image: "+e.image)}else for(let i of e.tiles){let s;s=e.source?this.convertPath(e.source,i.image):this.convertPath(this.path,i.image);let r=new n.ImageSource(s);t.push(r.load()),this.tileImageMap[e.firstgid]||(this.tileImageMap[e.firstgid]=[]),this.tileImageMap[e.firstgid].push([i,r]),n.Logger.getInstance().debug("[Tiled] Loading associated tileset image: "+s)}}),Promise.all(t).then(()=>{this._createTileMap()},()=>{n.Logger.getInstance().error("[Tiled] Error loading tileset images")})}),this._parseExcaliburInfo(),e})}_importMapData(t){return c(this,void 0,void 0,function*(){if(void 0===t)throw`Tiled map resource ${this.path} is empty`;switch(this.mapFormat){case r.TMX:return this.data=yield o.TiledMap.fromTmx(t);case r.JSON:return this.data=yield o.TiledMap.fromJson(t);default:throw Error("Unknown map format: "+this.mapFormat)}})}getTilesetForTile(t){if(this.data)for(var e=this.data.tileSets.length-1;e>=0;e--){var i=this.data.tileSets[e];if(t>=i.firstGid&&t<=i.firstGid+i.tileCount-1)return i}throw Error(`No tileset exists for tiled gid [${t}]!`)}getSpriteForGid(t){let e=(0,h.isFlippedHorizontally)(t),i=(0,h.isFlippedVertically)(t),s=(0,h.isFlippedDiagonally)(t),r=(0,h.getCanonicalGid)(t),o=this.getTilesetForTile(r),a=r-o.firstGid,l=this.sheetMap[o.firstGid.toString()];if(l){let t=l.sprites[a];return(s||e||i)&&(t=t.clone()),s&&(t.rotation=-Math.PI/2,t.scale=(0,n.vec)(-1,1)),e&&(t.scale=(0,n.vec)((s?1:-1)*t.scale.x,(s?-1:1)*t.scale.y)),i&&(t.scale=(0,n.vec)((s?-1:1)*t.scale.x,(s?1:-1)*t.scale.y)),t}throw Error(`Could not find sprite for gid: [${t}] normalized gid: [${r}]`)}_transformPoints(t,e,i){let s=(0,h.isFlippedHorizontally)(i),r=(0,h.isFlippedVertically)(i);return(0,h.isFlippedDiagonally)(i)&&(t=t.map(t=>e.diagonalFlipTransform.multiply(t))),s&&(t=t.map(t=>e.horizontalFlipTransform.multiply(t))),r&&(t=t.map(t=>e.verticalFlipTransform.multiply(t))),t}getCollidersForGid(t){let e=(0,h.getCanonicalGid)(t),i=this.getTilesetForTile(e),s=e-i.firstGid,r=i.tiles.find(t=>t.id===s);if(r&&r.objectgroup){let e=[];for(let s of r.objectgroup.getPolygons()){let r=(0,n.vec)(s.x,s.y),o=s.polygon.points.split(" ").map(t=>{let e=t.split(",");return(0,n.vec)(Number.parseFloat(e[0]),Number.parseFloat(e[1])).add(r)}),a=n.Shape.Polygon(o);a.points=this._transformPoints(a.points,i,t),e.push(a)}for(let s of r.objectgroup.getBoxes()){let r=n.Shape.Box(s.width,s.height,n.Vector.Zero);r.points=r.points.map(t=>t.add((0,n.vec)(s.x,s.y))),r.points=this._transformPoints(r.points,i,t),e.push(r)}for(let t of r.objectgroup.getEllipses()){let i=n.Shape.Circle(Math.min(t.width/2,t.height/2),(0,n.vec)(t.width/2,t.height/2).add((0,n.vec)(t.x,t.y)));e.push(i)}return e}return[]}getAnimationForGid(t){let e=(0,h.getCanonicalGid)(t),i=this.getTilesetForTile(e),s=e-i.firstGid,r=i.tiles.find(t=>t.id===s);return r&&r.hasAnimation()?r.getAnimation(this):null}_calculateZIndex(t,e){var i,s,r;let n=null!==(s=null===(i=t.getProperty("z"))||void 0===i?void 0:i.value)&&void 0!==s?s:null===(r=t.getProperty("zindex"))||void 0===r?void 0:r.value;return null!=n||(n=e.order+this._layerZIndexStart),+n}_getEntityName(t){return t.name}_createTileMap(){var t,e,i,s,r,o,a,h,l;for(let o of this.data.rawMap.tilesets){let a=null!==(t=o.spacing)&&void 0!==t?t:0,h=Math.floor((o.imagewidth+a)/(o.tilewidth+a)),l=Math.floor((o.imageheight+a)/(o.tileheight+a));if(this.imageMap[o.firstgid]){let t=n.SpriteSheet.fromImageSource({image:this.imageMap[o.firstgid],grid:{columns:h,rows:l,spriteWidth:o.tilewidth,spriteHeight:o.tileheight},spacing:{originOffset:{x:null!==(e=o.margin)&&void 0!==e?e:0,y:null!==(i=o.margin)&&void 0!==i?i:0},margin:{x:null!==(s=o.spacing)&&void 0!==s?s:0,y:null!==(r=o.spacing)&&void 0!==r?r:0}}});this.sheetMap[o.firstgid.toString()]=t}else{let t=this.tileImageMap[o.firstgid].map(([t,e])=>e.toSprite()),e=new n.SpriteSheet({sprites:t});this.sheetMap[o.firstgid.toString()]=e}}for(var A of this.data.layers)if("tilelayer"===A.rawLayer.type){if("orthogonal"===this.data.orientation){let t=A.rawLayer,e=new n.TileMap({name:A.rawLayer.name,pos:(0,n.vec)(A.offset.x,A.offset.y),tileWidth:this.data.rawMap.tilewidth,tileHeight:this.data.rawMap.tileheight,columns:this.data.width,rows:this.data.height});if(e.addComponent(new d.TiledLayerComponent(A)),A.rawLayer.parallaxx||A.rawLayer.parallaxy){let t=(0,n.vec)(null!==(o=A.rawLayer.parallaxx)&&void 0!==o?o:1,null!==(a=A.rawLayer.parallaxy)&&void 0!==a?a:1);e.addComponent(new n.ParallaxComponent(t))}e.z=this._calculateZIndex(A,A);for(let i=0;i<t.data.length;i++){let s=t.data[i];if(0!==s){let t=this.getSpriteForGid(s);e.tiles[i].addGraphic(t);let r=this.getCollidersForGid(s);for(let t of r)e.tiles[i].addCollider(t);let n=this.getAnimationForGid(s);n&&(e.tiles[i].clearGraphics(),e.tiles[i].addGraphic(n))}}this._mapToRawLayer.set(e,t),null===(h=this.layers)||void 0===h||h.push(e)}if("isometric"===this.data.orientation){let t=A.rawLayer,e=new n.IsometricMap({name:A.rawLayer.name,pos:(0,n.vec)(A.offset.x,A.offset.y),columns:this.data.width,rows:this.data.height,tileWidth:this.data.tileWidth,tileHeight:this.data.tileHeight}),i=e.get(n.TransformComponent);i&&(i.z=this._calculateZIndex(A,A));for(let i=0;i<t.data.length;i++){let s=t.data[i];if(0!==s){let t=this.getSpriteForGid(s);e.tiles[i].addGraphic(t);let r=this.getCollidersForGid(s);for(let t of r)e.tiles[i].addCollider(t);let o=e.tiles[i].get(n.IsometricEntityComponent);o&&(o.elevation=A.order)}}e.updateColliders(),this._mapToRawLayer.set(e,t),null===(l=this.isoLayers)||void 0===l||l.push(e)}}}getTileMapLayers(){var t;return(null===(t=this.layers)||void 0===t?void 0:t.length)?this.layers:[]}getIsometricMapLayers(){var t;return(null===(t=this.isoLayers)||void 0===t?void 0:t.length)?this.isoLayers:[]}_lookupTile(t,e,i){let s=t.tiles.indexOf(e),r=this.data.getTileLayerByName(i),n=(0,h.getCanonicalGid)(r.data[s]);if(0===n)return null;let o=this.getTilesetForTile(n);return o.tiles.find(t=>t.id===n-1)||{id:n-1,tileset:o,properties:{}}}getTileByPoint(t,e){let i=this.getTileMapLayers().find(e=>e.name===t);if(i){let s=i.getTileByPoint(e);return this._lookupTile(i,s,t)}return null}getTileByCoordinate(t,e,i){let s=this.getTileMapLayers().find(e=>e.name===t);if(s){let r=s.getTile(e,i);return this._lookupTile(s,r,t)}return null}}},"./src/tiled-object-component.ts":(t,e,i)=>{i.r(e),i.d(e,{TiledObjectComponent:()=>r});var s=i("excalibur");class r extends s.Component{constructor(t){super(),this.object=t,this.type="ex.tiledobject"}}},"./src/tiled-object.ts":(t,e,i)=>{i.r(e),i.d(e,{TiledObject:()=>o,TiledObjectGroup:()=>n});var s=i("./src/tiled-entity.ts"),r=i("excalibur");class n extends s.TiledEntity{constructor(){super(...arguments),this.objects=[]}getCamera(){var t;let e=this.getObjectByClass("camera");if(e){let i=e.getProperty("zoom");return{x:e.x,y:e.y,zoom:i?+(null!==(t=null==i?void 0:i.value)&&void 0!==t?t:1):1}}}getObjectByType(t){return this.getObjectsByType(t)[0]}getObjectByClass(t){return this.getObjectsByClass(t)[0]}getObjectsByType(t){return this.objects.filter(e=>{var i;return(null===(i=e.type)||void 0===i?void 0:i.toLocaleLowerCase())===t.toLocaleLowerCase()})}getObjectsByClass(t){return this.objects.filter(e=>{var i,s;return(null===(i=e.class)||void 0===i?void 0:i.toLocaleLowerCase())===t.toLocaleLowerCase()||(null===(s=e.type)||void 0===s?void 0:s.toLocaleLowerCase())===t.toLocaleLowerCase()})}getObjectByName(t){return this.getObjectsByName(t)[0]}getObjectsByName(t){return this.objects.filter(e=>{var i;return(null===(i=e.name)||void 0===i?void 0:i.toString().toLocaleLowerCase())===t.toString().toLocaleLowerCase()})}getPoints(){return this.objects.filter(t=>!!t.point)}getEllipses(){return this.objects.filter(t=>!!t.ellipse)}getText(){return this.objects.filter(t=>!!t.text)}getPolyLines(){return this.objects.filter(t=>!!t.polyline)}getPolygons(){return this.objects.filter(t=>!!t.polygon)}getBoxes(){return this.objects.filter(t=>!!t.width&&!!t.height&&!t.ellipse)}getInsertedTiles(){return this.objects.filter(t=>!!t.gid)}static parse(t){var e;if("objectgroup"!==t.type)throw Error("Cannot parse non objectgroup type layer");let i=new n;for(let s of(i.id=+t.id,i.name=t.name,i.properties=null!==(e=t.properties)&&void 0!==e?e:[],i.rawObjectGroup=t,i.order=t.order,t.objects))i.objects.push(o.parse(s));return i}}class o extends s.TiledEntity{static parse(t){var e,i,s,n;let a=new o;return a.id=+t.id,a.gid=t.gid,a.visible=null===(e=t.visible)||void 0===e||e,a.name=t.name,a.type=t.type,a.class=t.class,a.x=+t.x,a.y=+t.y,a.rotation=t.rotation?(0,r.toRadians)(t.rotation):0,a.width=null!==(i=t.width)&&void 0!==i?i:0,a.height=null!==(s=t.height)&&void 0!==s?s:0,a.point=t.point,a.ellipse=!0===t.ellipse||""===t.ellipse,a.polyline=t.polyline,a.polygon=t.polygon,a.rawObject=t,t.text&&(a.text=Object.assign(Object.assign({},t.text),{pixelSize:t.text.pixelsize,fontFamily:t.text.fontfamily})),a.properties=null!==(n=t.properties)&&void 0!==n?n:[],a}}},"./src/tiled-tileset.ts":(t,e,i)=>{i.r(e),i.d(e,{TiledTileset:()=>a,TiledTilesetTile:()=>h,parseExternalJson:()=>A,parseExternalTsx:()=>l});var s=i("excalibur"),r=i("./node_modules/fast-xml-parser/src/parser.js"),n=i("./src/index.ts"),o=i("./src/tiled-entity.ts");class a{constructor(){this.tiles=[]}static parse(t){var e,i;let r=new a,n=[];if(Array.isArray(t.tiles))n=(null!==(e=t.tiles)&&void 0!==e?e:[]).map(t=>h.parse(t,r));else for(let e in t.tiles)n.push(h.parse(Object.assign(Object.assign({},t.tiles[e]),{id:+e}),r));return r.tiles=n,r.firstGid=t.firstgid,r.tileWidth=t.tilewidth,r.tileHeight=t.tileheight,r.tileCount=t.tilecount,r.tileOffset=t.tileoffset,r.tiledVersion=t.tiledversion,r.backgroundColor=t.backgroundcolor,r.transparentColor=t.transparentcolor,r.wangSets=t.wangsets,r.imageWidth=t.imagewidth,r.imageHeight=t.imageheight,r.objectAlignment=null!==(i=t.objectalignment)&&void 0!==i?i:"unspecified",r.image=t.image,r.spacing=isNaN(t.spacing)?0:t.spacing,r.horizontalFlipTransform=s.Matrix.identity().translate(r.tileWidth,0).scale(-1,1),r.verticalFlipTransform=s.Matrix.identity().translate(0,r.tileHeight).scale(1,-1),r.diagonalFlipTransform=s.Matrix.identity().translate(0,0).rotate(-Math.PI/2).scale(-1,1),r}}class h{hasAnimation(){return!!this.animation}getAnimation(t){var e;if(this.animation){let i=[];for(let e of this.animation)i.push({graphic:t.getSpriteForGid(e.tileid+this.tileset.firstGid),duration:e.duration});return new s.Animation({frames:i,strategy:null!==(e=this.animationStrategy)&&void 0!==e?e:s.AnimationStrategy.Loop})}return null}static parse(t,e){var i,r,a;let l=new h;if(l.id=+t.id,l.image=t.image,l.tileset=e,l.properties=Array.isArray(t.properties)?t.properties:null!==(r=null===(i=t.properties)||void 0===i?void 0:i.property)&&void 0!==r?r:[],t.objectgroup&&(l.objectgroup=n.TiledObjectGroup.parse(t.objectgroup)),t.terrain&&(l.terrain=t.terrain),t.animation&&(l.animation=Array.isArray(t.animation)?t.animation:[...t.animation.frame],l.properties)){let t=null===(a=(0,o.getProperty)(l.properties,"animationstrategy"))||void 0===a?void 0:a.value;switch(null==t?void 0:t.toLowerCase()){case s.AnimationStrategy.End.toLowerCase():l.animationStrategy=s.AnimationStrategy.End;break;case s.AnimationStrategy.Freeze.toLowerCase():l.animationStrategy=s.AnimationStrategy.Freeze;break;case s.AnimationStrategy.Loop.toLowerCase():l.animationStrategy=s.AnimationStrategy.Loop;break;case s.AnimationStrategy.PingPong.toLowerCase():l.animationStrategy=s.AnimationStrategy.PingPong;break;default:l.animationStrategy=s.AnimationStrategy.Loop}}return l}}let l=(t,e,i)=>{var n,o,a,l,A;let d=(t,e,i=!1)=>{t[e]?(t[e+(i?"s":"")]=Array.isArray(t[e])?t[e]:[t[e]],i&&delete t[e]):t[e+(i?"s":"")]=[]},c=r.parse(t,{attributeNamePrefix:"",textNodeName:"#text",ignoreAttributes:!1,ignoreNameSpace:!1,allowBooleanAttributes:!0,parseNodeValue:!0,parseAttributeValue:!0,trimValues:!0,parseTrueNumberOnly:!1,arrayMode:!1,stopNodes:["parse-me-as-string"]}).tileset;c.firstgid=e,c.source=i,c.imagewidth=null===(n=c.image)||void 0===n?void 0:n.width,c.imageheight=null===(o=c.image)||void 0===o?void 0:o.height,c.objectalignment=null!==(a=c.objectalignment)&&void 0!==a?a:"unspecified",c.image=null===(l=c.image)||void 0===l?void 0:l.source,c.spacing=isNaN(c.spacing)?0:c.spacing,d(c,"tile",!0),c.tiles.forEach(t=>{var e;(null===(e=t.image)||void 0===e?void 0:e.source)&&(t.image=t.image.source),t.objectgroup&&(t.objectgroup.type="objectgroup",d(t.objectgroup,"object",!0))}),c.tiles=c.tiles;let u=Object.assign(Object.assign({},c),{tiles:[],firstGid:c.firstgid,tileWidth:c.tilewidth,tileHeight:c.tileheight,tileCount:c.tilecount,tileOffset:c.tileoffset,tiledVersion:c.tiledversion,backgroundColor:c.backgroundcolor,transparentColor:c.transparentcolor,wangSets:c.wangsets,imageWidth:c.imagewidth,imageHeight:c.imageheight,objectAlignment:null!==(A=c.objectalignment)&&void 0!==A?A:"unspecified",image:c.image,spacing:isNaN(c.spacing)?0:c.spacing,horizontalFlipTransform:s.Matrix.identity().translate(c.tilewidth,0).scale(-1,1),verticalFlipTransform:s.Matrix.identity().translate(0,c.tileheight).scale(1,-1),diagonalFlipTransform:s.Matrix.identity().translate(c.tilewidth,c.tileheight).rotate(-Math.PI/2).scale(-1,1)});return u.tiles=c.tiles.map(t=>h.parse(t,u)),u},A=(t,e,i)=>{var r,n;let o=[];t.tiles=null!==(r=t.tiles)&&void 0!==r?r:[],(0,s.vec)(t.tilewidth/2,t.tileheight/2);let a=Object.assign(Object.assign({},t),{source:i,tiles:o,firstGid:e,tileWidth:t.tilewidth,tileHeight:t.tileheight,tileCount:t.tilecount,tileOffset:t.tileoffset,tiledVersion:t.tiledversion,backgroundColor:t.backgroundcolor,transparentColor:t.transparentcolor,wangSets:t.wangsets,imageWidth:t.imagewidth,imageHeight:t.imageheight,spacing:isNaN(t.spacing)?0:t.spacing,objectAlignment:null!==(n=t.objectalignment)&&void 0!==n?n:"unspecified",image:t.image,horizontalFlipTransform:s.Matrix.identity().translate(t.tilewidth,0).scale(-1,1),verticalFlipTransform:s.Matrix.identity().translate(0,t.tileheight).scale(1,-1),diagonalFlipTransform:s.Matrix.identity().translate(t.tilewidth,t.tileheight).rotate(-Math.PI/2).scale(-1,1)});for(let e in t.tiles)o.push(h.parse(Object.assign(Object.assign({},t.tiles[e]),{id:+e}),a));return a}},"./src/tiled-types.ts":(t,e,i)=>{i.r(e)},"./node_modules/zstddec/dist/zstddec.modern.js":(t,e,i)=>{let s,r,n;i.r(e),i.d(e,{ZSTDDecoder:()=>a});let o={env:{emscripten_notify_memory_growth:function(t){n=new Uint8Array(r.exports.memory.buffer)}}};class a{init(){return s||(s="undefined"!=typeof fetch?fetch("data:application/wasm;base64,"+h).then(t=>t.arrayBuffer()).then(t=>WebAssembly.instantiate(t,o)).then(this._init):WebAssembly.instantiate(C.from(h,"base64"),o).then(this._init))}_init(t){r=t.instance,o.env.emscripten_notify_memory_growth(0)}decode(t,e=0){if(!r)throw Error("ZSTDDecoder: Await .init() before decoding.");let i=t.byteLength,s=r.exports.malloc(i);n.set(t,s),e=e||Number(r.exports.ZSTD_findDecompressedSize(s,i));let o=r.exports.malloc(e),a=r.exports.ZSTD_decompress(o,e,s,i),h=n.slice(o,o+a);return r.exports.free(s),r.exports.free(o),h}}let h="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IAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQh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ASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigC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C0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdB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IAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY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wOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEE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"},excalibur:t=>{t.exports=i}},e={};function s(i){var r=e[i];if(void 0!==r)return r.exports;var n=e[i]={exports:{}};return t[i](n,n.exports,s),n.exports}return s.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return s.d(e,{a:e}),e},s.d=(t,e)=>{for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),s.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s("./src/index.ts")})();var tt={};tt=new URL("Hero 01.0a89e3b5.png",import.meta.url).toString();var te={};te=new URL("Solaria Demo Update 01.c847244e.png",import.meta.url).toString();var ti={};ti=new URL("first-level.db28b3e3.tmx",import.meta.url).toString();var ts={};ts=new URL("tileset.9a2d2ca6.tsx",import.meta.url).toString();const tr={HeroSpriteSheetPng:new A.ImageSource(/*@__PURE__*/e(tt),!1,A.ImageFiltering.Pixel),TiledMap:new d.TiledMapResource(/*@__PURE__*/e(ti)),TsxResource:new A.Resource(/*@__PURE__*/e(ts),"text")},tn=tr.TiledMap.convertPath;tr.TiledMap.convertPath=(t,i)=>i.includes(".tmx")?/*@__PURE__*/e(ti):i.includes(".tsx")?/*@__PURE__*/e(ts):i.includes(".png")?/*@__PURE__*/e(te):tn(t,i);const to=new A.Loader;for(let t of Object.values(tr))to.addResource(t);var A=l("3MXpL");const ta={PlayerSpeed:32,PlayerFrameSpeed:200};class th extends A.Actor{constructor(t){super({pos:t,width:16,height:16,collisionType:A.CollisionType.Active})}onInitialize(t){let e=A.SpriteSheet.fromImageSource({image:tr.HeroSpriteSheetPng,grid:{spriteWidth:16,spriteHeight:16,rows:8,columns:8}}),i=new A.Animation({frames:[{graphic:e.getSprite(0,1),duration:ta.PlayerFrameSpeed},{graphic:e.getSprite(1,1),duration:ta.PlayerFrameSpeed},{graphic:e.getSprite(2,1),duration:ta.PlayerFrameSpeed},{graphic:e.getSprite(3,1),duration:ta.PlayerFrameSpeed}]});this.graphics.add("left-idle",i);let s=new A.Animation({frames:[{graphic:e.getSprite(0,2),duration:ta.PlayerFrameSpeed},{graphic:e.getSprite(1,2),duration:ta.PlayerFrameSpeed},{graphic:e.getSprite(2,2),duration:ta.PlayerFrameSpeed},{graphic:e.getSprite(3,2),duration:ta.PlayerFrameSpeed}]});this.graphics.add("right-idle",s);let r=new A.Animation({frames:[{graphic:e.getSprite(0,3),duration:ta.PlayerFrameSpeed},{graphic:e.getSprite(1,3),duration:ta.PlayerFrameSpeed},{graphic:e.getSprite(2,3),duration:ta.PlayerFrameSpeed},{graphic:e.getSprite(3,3),duration:ta.PlayerFrameSpeed}]});this.graphics.add("up-idle",r);let n=new A.Animation({frames:[{graphic:e.getSprite(0,0),duration:ta.PlayerFrameSpeed},{graphic:e.getSprite(1,0),duration:ta.PlayerFrameSpeed},{graphic:e.getSprite(2,0),duration:ta.PlayerFrameSpeed},{graphic:e.getSprite(3,0),duration:ta.PlayerFrameSpeed}]});this.graphics.add("down-idle",n);let o=new A.Animation({frames:[{graphic:e.getSprite(0,5),duration:ta.PlayerFrameSpeed},{graphic:e.getSprite(1,5),duration:ta.PlayerFrameSpeed},{graphic:e.getSprite(2,5),duration:ta.PlayerFrameSpeed},{graphic:e.getSprite(3,5),duration:ta.PlayerFrameSpeed}]});this.graphics.add("left-walk",o);let a=new A.Animation({frames:[{graphic:e.getSprite(0,6),duration:ta.PlayerFrameSpeed},{graphic:e.getSprite(1,6),duration:ta.PlayerFrameSpeed},{graphic:e.getSprite(2,6),duration:ta.PlayerFrameSpeed},{graphic:e.getSprite(3,6),duration:ta.PlayerFrameSpeed}]});this.graphics.add("right-walk",a);let h=new A.Animation({frames:[{graphic:e.getSprite(0,7),duration:ta.PlayerFrameSpeed},{graphic:e.getSprite(1,7),duration:ta.PlayerFrameSpeed},{graphic:e.getSprite(2,7),duration:ta.PlayerFrameSpeed},{graphic:e.getSprite(3,7),duration:ta.PlayerFrameSpeed}]});this.graphics.add("up-walk",h);let l=new A.Animation({frames:[{graphic:e.getSprite(0,4),duration:ta.PlayerFrameSpeed},{graphic:e.getSprite(1,4),duration:ta.PlayerFrameSpeed},{graphic:e.getSprite(2,4),duration:ta.PlayerFrameSpeed},{graphic:e.getSprite(3,4),duration:ta.PlayerFrameSpeed}]});this.graphics.add("down-walk",l)}onPreUpdate(t,e){this.vel=A.Vector.Zero,this.graphics.use("down-idle"),t.input.keyboard.isHeld(A.Input.Keys.ArrowRight)&&(this.vel=A.vec(ta.PlayerSpeed,0),this.graphics.use("right-walk")),t.input.keyboard.isHeld(A.Input.Keys.ArrowLeft)&&(this.vel=A.vec(-ta.PlayerSpeed,0),this.graphics.use("left-walk")),t.input.keyboard.isHeld(A.Input.Keys.ArrowUp)&&(this.vel=A.vec(0,-ta.PlayerSpeed),this.graphics.use("up-walk")),t.input.keyboard.isHeld(A.Input.Keys.ArrowDown)&&(this.vel=A.vec(0,ta.PlayerSpeed),this.graphics.use("down-walk"))}}const tl=new A.Engine({width:800,height:600,canvasElementId:"game",antialiasing:!1});tl.start(to).then(()=>{let t=tr.TiledMap.data.getObjectLayerByName("Objects"),e=t.getObjectByName("Camera");e&&(tl.currentScene.camera.pos=A.vec(e.x,e.y),tl.currentScene.camera.zoom=e.getProperty("zoom")?.value??1);let i=t.getObjectByName("Player");if(i){let t=new th(A.vec(i.x,i.y));tl.currentScene.add(t),t.z=100}tr.TiledMap.addTiledMapToScene(tl.currentScene)});//# sourceMappingURL=index.f7aa873a.js.map

//# sourceMappingURL=index.f7aa873a.js.map
