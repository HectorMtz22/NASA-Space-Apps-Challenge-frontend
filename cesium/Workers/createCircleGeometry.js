define(["./Matrix2-ccd5b911","./RuntimeError-346a3079","./when-4bbc8319","./EllipseGeometry-52786bf6","./VertexFormat-71718faa","./ComponentDatatype-93750d1a","./WebGLConstants-1c8239cc","./GeometryOffsetAttribute-1772960d","./Transforms-d5c6ad6e","./combine-83860057","./EllipseGeometryLibrary-9dda9a85","./GeometryAttribute-c30799b8","./GeometryAttributes-7827a6c2","./GeometryInstance-5f4fe82b","./GeometryPipeline-548e76d2","./AttributeCompression-1f045b73","./EncodedCartesian3-08b8d980","./IndexDatatype-b7d979a6","./IntersectionTests-4d6f5c54","./Plane-18bb00f8"],function(r,e,o,n,a,t,i,l,s,d,m,c,u,p,y,_,G,x,h,f){"use strict";function g(e){var t=(e=o.defaultValue(e,o.defaultValue.EMPTY_OBJECT)).radius,e={center:e.center,semiMajorAxis:t,semiMinorAxis:t,ellipsoid:e.ellipsoid,height:e.height,extrudedHeight:e.extrudedHeight,granularity:e.granularity,vertexFormat:e.vertexFormat,stRotation:e.stRotation,shadowVolume:e.shadowVolume};this._ellipseGeometry=new n.EllipseGeometry(e),this._workerName="createCircleGeometry"}g.packedLength=n.EllipseGeometry.packedLength,g.pack=function(e,t,i){return n.EllipseGeometry.pack(e._ellipseGeometry,t,i)};var b=new n.EllipseGeometry({center:new r.Cartesian3,semiMajorAxis:1,semiMinorAxis:1}),E={center:new r.Cartesian3,radius:void 0,ellipsoid:r.Ellipsoid.clone(r.Ellipsoid.UNIT_SPHERE),height:void 0,extrudedHeight:void 0,granularity:void 0,vertexFormat:new a.VertexFormat,stRotation:void 0,semiMajorAxis:void 0,semiMinorAxis:void 0,shadowVolume:void 0};return g.unpack=function(e,t,i){t=n.EllipseGeometry.unpack(e,t,b);return E.center=r.Cartesian3.clone(t._center,E.center),E.ellipsoid=r.Ellipsoid.clone(t._ellipsoid,E.ellipsoid),E.height=t._height,E.extrudedHeight=t._extrudedHeight,E.granularity=t._granularity,E.vertexFormat=a.VertexFormat.clone(t._vertexFormat,E.vertexFormat),E.stRotation=t._stRotation,E.shadowVolume=t._shadowVolume,o.defined(i)?(E.semiMajorAxis=t._semiMajorAxis,E.semiMinorAxis=t._semiMinorAxis,i._ellipseGeometry=new n.EllipseGeometry(E),i):(E.radius=t._semiMajorAxis,new g(E))},g.createGeometry=function(e){return n.EllipseGeometry.createGeometry(e._ellipseGeometry)},g.createShadowVolume=function(e,t,i){var r=e._ellipseGeometry._granularity,o=e._ellipseGeometry._ellipsoid,t=t(r,o),i=i(r,o);return new g({center:e._ellipseGeometry._center,radius:e._ellipseGeometry._semiMajorAxis,ellipsoid:o,stRotation:e._ellipseGeometry._stRotation,granularity:r,extrudedHeight:t,height:i,vertexFormat:a.VertexFormat.POSITION_ONLY,shadowVolume:!0})},Object.defineProperties(g.prototype,{rectangle:{get:function(){return this._ellipseGeometry.rectangle}},textureCoordinateRotationPoints:{get:function(){return this._ellipseGeometry.textureCoordinateRotationPoints}}}),function(e,t){return(e=o.defined(t)?g.unpack(e,t):e)._ellipseGeometry._center=r.Cartesian3.clone(e._ellipseGeometry._center),e._ellipseGeometry._ellipsoid=r.Ellipsoid.clone(e._ellipseGeometry._ellipsoid),g.createGeometry(e)}});